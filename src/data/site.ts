import { reactive } from "vue";
export const site = reactive({
	header: {
		logoSrc: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/aee85549-471c-4073-d461-7d92d0262200/public",
		links: [
			{ label: "Nosotros", href: "/about-us" },
			{ label: "Productos", href: "/products" },
			{ label: "Servicios", href: "/services" },
		],
		cta: { label: "Cotiza Gratis", href: "/contact" },
	},
	products: {
		eyebrow: "Nuestros Productos",
		title: "LLANTAS PARA CADA NECESIDAD",
		subtitle:
			"Contamos con una amplia gama de llantas para todo tipo de vehículos. Calidad garantizada y las mejores marcas del mercado.",
		categories: [
			{
				badge: "MÁS POPULAR",
				image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e88e51b-a733-4ae1-d48e-a6a1a2823b00/public",
				title: "LLANTAS PARA AUTOS",
				href: "/products",
				bullets: ["Mayor seguridad", "Mejor rendimiento", "Precios competitivos"],
			},
			{
				image: new URL("../assets/CAMIONETAS.jpg", import.meta.url).href,
				title: "LLANTAS PARA CAMIONETAS",
				href: "/products",
				bullets: ["Tracción superior", "Durabilidad", "Variedad de marcas"],
			},
			{
				image: new URL("../assets/CAMIONES.jfif", import.meta.url).href,
				title: "LLANTAS PARA CAMIONES",
				href: "/products",
				bullets: ["Gran capacidad de carga", "Larga vida útil", "Mayoreo"],
			},
		],
	},

	services: {
		eyebrow: "Servicios Profesionales",
		title: "SERVICIOS COMPLETOS PARA TU VEHÍCULO",
		subtitle:
			"Más que llantas: ofrecemos soluciones integrales para mantener tu vehículo en las mejores condiciones.",
		items: [
			{ icon: "fa-tire", title: "VENTA DE LLANTAS", desc: "..." },
			{ icon: "fa-balance-scale", title: "BALANCEO", desc: "..." },
			{ icon: "fa-ruler-combined", title: "ALINEACIÓN", desc: "..." },
			{ icon: "fa-user-cog", title: "ASESORÍA TÉCNICA", desc: "..." },
		],
		itemsAros: [
			{
				icon: "fa-tools",
				title: "PARCHADO DE LLANTAS",
				desc: "Reparación rápida y segura para alargar la vida de tu llanta.",
			},
			{
				icon: "fa-screwdriver-wrench",
				title: "MANTENIMIENTO DE AROS",
				desc: "Limpieza y cuidado para mantenerlos como nuevos.",
			},
			{
				icon: "fa-paint-roller",
				title: "PINTADO DE AROS",
				desc: "Acabado profesional para renovar el estilo de tus aros.",
			},
			{
				icon: "fa-wand-magic-sparkles",
				title: "PULIDO DE AROS",
				desc: "Brillo y restauración para un look premium.",
			},
		],
		itemsMecanica: [
			{
				icon: "fa-car-side",
				title: "DIRECCIÓN / SUSPENSIÓN / FRENOS",
				desc: "Diagnóstico y mantenimiento para tu seguridad y control.",
			},
			{
				icon: "fa-arrows-down-to-line",
				title: "CAMBIO DE AMORTIGUADORES",
				desc: "Mejor estabilidad, confort y frenado.",
			},
			{ icon: "fa-gears", title: "TRAPECIO / TERMINALES / RÓTULAS", desc: "Repuestos y cambio profesional." },
			{ icon: "fa-spring", title: "CAMBIO DE RESORTES", desc: "Suspensión firme y segura para tu vehículo." },
		],
	},

	advantages: {
		eyebrow: "¿Por Qué Elegirnos?",
		title: "VENTAJAS QUE NOS DISTINGUEN",
		subtitle: "Más de 10 años de experiencia respaldándonos. Tu confianza es nuestro mayor logro.",
		items: [
			{
				icon: "fa-tags",
				title: "PRECIOS COMPETITIVOS",
				desc: "Los mejores precios del mercado sin comprometer la calidad. Financiamiento disponible.",
			},
			{
				icon: "fa-bolt",
				title: "ATENCIÓN RÁPIDA",
				desc: "Servicio ágil y eficiente. No pierdas tiempo, agenda tu cita y te atendemos de inmediato.",
			},
			{
				icon: "fa-shield-alt",
				title: "PRODUCTOS GARANTIZADOS",
				desc: "Todas nuestras llantas cuentan con garantía de fábrica. Compra con total confianza.",
			},
			{
				icon: "fa-headset",
				title: "ASESORÍA EXPERTA",
				desc: "Personal capacitado para recomendarte las mejores opciones según tus necesidades.",
			},
		],
	},

	brands: {
		eyebrow: "Marcas",
		title: "TRABAJAMOS CON LAS MEJORES MARCAS",
		subtitle: "",
		items: [
			{ name: "Michelin", logoSrc: new URL("../assets/brands/michelin.png", import.meta.url).href },
			{ name: "Bridgestone", logoSrc: new URL("../assets/brands/bridgestone.jpg", import.meta.url).href },
			{ name: "Continental", logoSrc: new URL("../assets/brands/continental.png", import.meta.url).href },
			{ name: "Goodyear", logoSrc: new URL("../assets/brands/good_year.jpg", import.meta.url).href },
			{ name: "Dunlop", logoSrc: new URL("../assets/brands/dunlop.jpg", import.meta.url).href },
			{ name: "Pirelli", logoSrc: new URL("../assets/brands/pirelli.png", import.meta.url).href },
			{ name: "Hankook", logoSrc: new URL("../assets/brands/hankook.png", import.meta.url).href },
			{ name: "Yokohama", logoSrc: new URL("../assets/brands/yokohama.png", import.meta.url).href },
			{ name: "Giti", logoSrc: new URL("../assets/brands/giti.png", import.meta.url).href },
			{ name: "Sailun", logoSrc: new URL("../assets/brands/sailun.png", import.meta.url).href },
		],
	},

	contact: {
		title: "¿LISTO PARA EQUIPAR TU VEHÍCULO?",
		subtitle:
			"Obtén una cotización gratuita sin compromiso. Nuestros expertos te ayudarán a encontrar las llantas perfectas para tu vehículo.",
		whatsappHref: "https://wa.me/+51968736364?text=Hola,%20me%20interesa%20cotizar%20llantas",
		infoCards: [
			{ icon: "fa-phone-alt", label: "Llámanos ahora", value: "+51 968-736-364" },
			{
				icon: "fa-map-marker-alt",
				label: "Visítanos",
				value: "Av Defensores del Morro (Huaylas) Nro 2615 - Urb. Santa Leonor",
			},
		],
	},
});
