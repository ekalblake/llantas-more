import { reactive } from "vue";
export const site = reactive({
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
				image: "URL_DE_TU_IMG_2",
				title: "LLANTAS PARA CAMIONETAS",
				href: "/products",
				bullets: ["Tracción superior", "Durabilidad", "Variedad de marcas"],
			},
			{
				image: "URL_DE_TU_IMG_3",
				title: "LLANTAS PARA CAMIONES",
				href: "/products",
				bullets: ["Gran capacidad de carga", "Larga vida útil", "Mayoreo"],
			},
			{
				image: "URL_DE_TU_IMG_3",
				title: "LLANTAS PARA CAMIONES",
				href: "/products",
				bullets: ["Gran capacidad de carga", "Larga vida útil", "Mayoreo"],
			},
			{
				image: "URL_DE_TU_IMG_3",
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
	},

	advantages: {
		eyebrow: "¿Por Qué Elegirnos?",
		title: "VENTAJAS QUE NOS DISTINGUEN",
		subtitle: "Más de 10 años de experiencia respaldándonos. Tu confianza es nuestro mayor logro.",
		items: [
			{ icon: "fa-tags", title: "PRECIOS COMPETITIVOS", desc: "..." },
			{ icon: "fa-bolt", title: "ATENCIÓN RÁPIDA", desc: "..." },
			{ icon: "fa-shield-check", title: "PRODUCTOS GARANTIZADOS", desc: "..." },
			{ icon: "fa-headset", title: "ASESORÍA EXPERTA", desc: "..." },
		],
	},

	contact: {
		title: "¿LISTO PARA EQUIPAR TU VEHÍCULO?",
		subtitle:
			"Obtén una cotización gratuita sin compromiso. Nuestros expertos te ayudarán a encontrar las llantas perfectas para tu vehículo.",
		whatsappHref: "https://wa.me/52XXXXXXXXXX?text=Hola,%20me%20interesa%20cotizar%20llantas",
		infoCards: [
			{ icon: "fa-phone-alt", label: "Llámanos ahora", value: "+52 (XXX) XXX-XXXX" },
			{ icon: "fa-envelope", label: "Envíanos un correo", value: "info@llantax.com" },
			{ icon: "fa-map-marker-alt", label: "Visítanos", value: "Dirección de la tienda" },
		],
	},
});
