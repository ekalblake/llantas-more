import { reactive, computed } from "vue";

export type CatalogItem = {
	id: string;
	name: string;
	brand?: string;
	specs?: string[];
	categoryKey?: string;
	image?: string;
};

type CartLine = {
	item: CatalogItem;
	qty: number;
};

const state = reactive<{ lines: CartLine[] }>({
	lines: [],
});

function add(item: CatalogItem) {
	const found = state.lines.find((l) => l.item.id === item.id);
	if (found) found.qty += 1;
	else state.lines.push({ item, qty: 1 });
}

function remove(itemId: string) {
	state.lines = state.lines.filter((l) => l.item.id !== itemId);
}

function dec(itemId: string) {
	const found = state.lines.find((l) => l.item.id === itemId);
	if (!found) return;
	found.qty -= 1;
	if (found.qty <= 0) remove(itemId);
}

function clear() {
	state.lines = [];
}

const count = computed(() => state.lines.reduce((acc, l) => acc + l.qty, 0));

function toWhatsAppText() {
	if (!state.lines.length) return "Productos seleccionados: (ninguno)";

	const rows = state.lines.map((l, idx) => {
		const b = l.item.brand ? ` • ${l.item.brand}` : "";
		return `${idx + 1}. ${l.item.name}${b} x${l.qty}`;
	});

	return `Productos seleccionados:%0A${rows.join("%0A")}`;
}

export function useCart() {
	return {
		lines: state.lines,
		add,
		remove,
		dec,
		clear,
		count,
		toWhatsAppText,
		
	};
}
