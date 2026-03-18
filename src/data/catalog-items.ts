import type { Category } from "../components/Sections/CatalogSection.vue";

interface Catalog {
	eyebrow: string;
	title: string;
	subtitle: string;
	diameter?: number;
	categories: Category[];
}

export const catalog: Catalog = {
	eyebrow: "Catálogo",
	title: "AROS DISPONIBLES",
	subtitle: "Selecciona modelos y agrégalos a tu solicitud. Te confirmamos stock y compatibilidad.",
	categories: [
		{
			key: "autos-aro-14",
			label: "Aro 14 • Autos",
			vehicle: "autos",
			diameter: 14,
			items: [
				{
					id: "autos-14-z826-b2",
					name: "Z826 B2",
					specs: ["14*7.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "Aro color negro - 5 brazos negros- pestaña pulida.",
					image: new URL("../assets/catalogo/14/autos-14-z826-b2.png", import.meta.url).href,
				},
				{
					id: "autos-14-8038-blp-bronce-lip",
					name: "8038 BLP/BRONZE LIP",
					specs: ["14*5.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro - 8 brazos - pestaña color bronce.",
					image: new URL("../assets/catalogo/14/autos-14-8038-blp-bronce-lip.png", import.meta.url).href,
				},
				{
					id: "autos-14-1299-blp-red",
					name: "1299 BLP/RED",
					specs: ["14*5.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro - 6 brazos dobles pulidos - borde frontal rojo pulido.",
					image: new URL("../assets/catalogo/14/autos-14-1299-blp-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-z256-b4-r",
					name: "Z256 B4/R",
					specs: ["14*7.5", "8*100/114.3", "ET 0", "CB 73.1"],
					description: "Aro color negro - 10 brazos - borde frontal rojo pulido.",
					image: new URL("../assets/catalogo/14/autos-14-z256-b4-r.png", import.meta.url).href,
				},
				{
					id: "autos-14-y3375-blp",
					name: "Y3375 BLP",
					specs: ["14*6.0", "8*100/114.3", "ET 25", "CB 73.1"],
					description: "Aro color negro - pestaña plateada pulida.",
					image: new URL("../assets/catalogo/14/autos-14-y3375-blp.png", import.meta.url).href,
				},
				{
					id: "autos-14-y3367-bp",
					name: "Y3367 BP",
					specs: ["14*6.0", "8*100/108", "ET 25", "CB 73.1"],
					description: "Aro color negro - 10 aspas pulidas.",
					image: new URL("../assets/catalogo/14/autos-14-y3367-bp.png", import.meta.url).href,
				},
				{
					id: "autos-14-1430-bfp-uc-red",
					name: "1430 BFP/UC RED",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro matte - 5 aspas dobles negras - aro interior rojo - pestaña frontal negra.",
					image: new URL("../assets/catalogo/14/autos-14-1430-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-1430-bfp-uc-polish",
					name: "1430 BFP/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro matte - 5 aspas dobles negras - aro interior pulido - pestaña frontal negra.",
					image: new URL("../assets/catalogo/14/autos-14-1430-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-z361b-b4",
					name: "Z361B B4",
					specs: ["14*6.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "Aro color negro - 5 aspas dobles pulidas - borde frontal pulido.",
					image: new URL("../assets/catalogo/14/autos-14-z361b-b4.png", import.meta.url).href,
				},
				{
					id: "autos-14-d7004-black-gold",
					name: "D7004 BLACK+GOLD",
					specs: ["14*5.5", "8*100/114.3", "ET 30", "CB 73.1"],
					description:
						"Aro color negro - 4 brazos triples - 4 brazos dobles pulidos - aro interior dorado pulido.",
					image: new URL("../assets/catalogo/14/autos-14-d7004-black-gold.png", import.meta.url).href,
				},
				{
					id: "autos-14-z360-g4-2",
					name: "Z360 G4(2)",
					specs: ["14*6.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "Aro color gris - 6 aspas dobles pulidas - aro interior plateado pulido.",
					image: new URL("../assets/catalogo/14/autos-14-z360-g4-2.png", import.meta.url).href,
				},
				{
					id: "autos-14-1416-bfp",
					name: "1416 BFP",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro brillante - 4 brazos dobles negros con detalles y contraste pulido.",
					image: new URL("../assets/catalogo/14/autos-14-1416-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-14-1459-bronze-face-machine-uc-bronze",
					name: "1459 BRONZE FACE MACHINE/UC BRONZE",
					specs: ["14*7.0", "8*100/114.3", "ET 0", "CB 73.1"],
					description:
						"Aro color bronce brillante - 7 aspas con detalles plateados pulidos - aro interior bronce - borde frontal plateado.",
					image: new URL(
						"../assets/catalogo/14/autos-14-1459-bronze-face-machine-uc-bronze.png",
						import.meta.url,
					).href,
				},
				{
					id: "autos-14-1469-bfp",
					name: "1469 BFP",
					specs: ["14*6.0", "4*100", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante - 4 brazos dobles negros con detalles pulidos - borde frontal plateado.",
					image: new URL("../assets/catalogo/14/autos-14-1469-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-14-1459-bfp-uc-polish",
					name: "1459 BFP/UC POLISH",
					specs: ["14*7.0", "8*100/114.3", "ET 0", "CB 73.1"],
					description:
						"Aro color negro brillante - 7 aspas negras con detalles pulidos/aro interior y borde frontal plateado.",
					image: new URL("../assets/catalogo/14/autos-14-1459-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-z267-b4",
					name: "Z267 B4",
					specs: ["14*6.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "Aro color negro - 4 aspas dobles pulidas.",
					image: new URL("../assets/catalogo/14/autos-14-z267-b4.png", import.meta.url).href,
				},
				{
					id: "autos-14-1386-bfp-uc-red",
					name: "1386 BFP/UC RED",
					specs: ["14*6.0", "8*100", "ET 35", "CB 73.1"],
					description:
						"Aro color negro - 5 aspas dobles pulidas - aro interior rojo - borde frontal plateado.",
					image: new URL("../assets/catalogo/14/autos-14-1386-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-z362b-g4",
					name: "Z362B G4",
					specs: ["14*6.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "Aro color gris/ 8 aspas dobles pulidas/ borde frontal plateado.",

					image: new URL("../assets/catalogo/14/autos-14-z362b-g4.png", import.meta.url).href,
				},
				{
					id: "autos-14-1386-bfp-uc-polish",
					name: "1386 BFP/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/5 aspas dobles pulidas/aro interior plateado/borde frontal plateado.",
					image: new URL("../assets/catalogo/14/autos-14-1386-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-z259-b4-2",
					name: "Z259 B4(2)",
					specs: ["14*5.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/4 aspas dobles pulidas/8 brazos dobles negros/aro interior plateado.",
					image: new URL("../assets/catalogo/14/autos-14-z259-b4-2.png", import.meta.url).href,
				},
				{
					id: "autos-14-1419-mbr",
					name: "1419 MBR",
					specs: ["14*6.0", "8*100/114.3", "ET 36", "CB 73.1"],
					description: "Aro color bronce/ 7 brazos dobles",
					image: new URL("../assets/catalogo/14/autos-14-1419-mbr.png", import.meta.url).href,
				},
				{
					id: "autos-14-1433-bfp-uc-red",
					name: "1433 BFP/UC RED",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/5 aspas dobles pulidas/5 aspas dobles negras/aro interior rojo.",
					image: new URL("../assets/catalogo/14/autos-14-1433-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-da015-matt-black",
					name: "DA015 MATT BLACK",
					specs: ["14*6.0", "8*100/114.3", "ET 30", "CB 73.1"],
					description: "Aro color negro matte/ 5 brazos lisos",
					image: new URL("../assets/catalogo/14/autos-14-da015-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-14-1431-bfp-uc-polish",
					name: "1431 BFP/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro/5 brazos dobles pulidos/5 brazos dobles negros/aro interior pulido/borde frontal plateado.",
					image: new URL("../assets/catalogo/14/autos-14-1431-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-1430-bfp-uc-red",
					name: "1430 BFP/UC RED",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro matte/ 5 aspas dobles negras con detalles pulidos/aro interior rojo/pestaña frontal negra.",
					image: new URL("../assets/catalogo/14/autos-14-1430-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-1430-bfp-uc-polish",
					name: "1430 BFP/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro matte/ 5 aspas dobles negras con detalles pulidos/aro interior pulido/pestaña frontal negra.",
					image: new URL("../assets/catalogo/14/autos-14-1430-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-1201-bfp-uc-blue",
					name: "1201 BFP/UC BLUE",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro brillante/ 5 aspas dobles pulidas/ aro interior azul/pestaña negra.",
					image: new URL("../assets/catalogo/14/autos-14-1201-bfp-uc-blue.png", import.meta.url).href,
				},
				{
					id: "autos-14-bc4340-black-mf",
					name: "BC4340",
					specs: ["14*6.0", "4*100", "ET 35", "CB 73.1"],
					description: "Aro color negro brillante/ 5 brazos negro/contraste pulido/pestaña pulida.",
					image: new URL("../assets/catalogo/14/autos-14-bc4340-black-mf.png", import.meta.url).href,
				},
				{
					id: "autos-14-bc4982-black",
					name: "BC4982 BLACK",
					specs: ["14*6.5", "8*100/114.3", "ET 15", "CB 73.1"],
					description: "Aro color negro brillante/10 aspas negras pulidas.",
					image: new URL("../assets/catalogo/14/autos-14-bc4982-black.png", import.meta.url).href,
				},
				{
					id: "autos-14-bchs603-bronze-ml-bronze-coating",
					name: "BCHS603 BRONZE ML + BRONZE COATING",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color bronce/6 brazos lisos/pestaña amplia.",
					image: new URL(
						"../assets/catalogo/14/autos-14-bchs603-bronze-ml-bronze-coating.png",
						import.meta.url,
					).href,
				},
				{
					id: "autos-14-bc4251-black-ml",
					name: "BC4251 BLACK ML",
					specs: ["14*7.0", "8*100/114.3", "ET 10", "CB 73.1"],
					description: "Aro color negro brillante/ 8 brazos negros/pestaña amplia plateada.",
					image: new URL("../assets/catalogo/14/autos-14-bc4251-black-ml.png", import.meta.url).href,
				},
				{
					id: "autos-14-bc4401-black-mf",
					name: "BC4401 BLACK MF",
					specs: ["14*6.5", "8*100/114.3", "ET 15", "CB 73.1"],
					description:
						"Aro color negro brillante/4 aspas dobles negras/4 aspas pulidas/pestaña frontal pulida.",
					image: new URL("../assets/catalogo/14/autos-14-bc4401-black-mf.png", import.meta.url).href,
				},
				{
					id: "autos-14-1201-bfp-uc-polish",
					name: "1201 BFP-UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negros con detalles pulidos/aro interior pulido/pestaña negra.",
					image: new URL("../assets/catalogo/14/autos-14-1201-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-1201-bfp-uc-red",
					name: "1201 BFP-UC RED",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negros con detalles pulidos/aro interior rojo/pestaña negra.",
					image: new URL("../assets/catalogo/14/autos-14-1201-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-8036-matt-black-uc-red",
					name: "8036 MATT BLACK/UC RED",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro matte/ 8 brazos entrelazados/aro interior rojo/pestaña frontal negra.",
					image: new URL("../assets/catalogo/14/autos-14-8036-matt-black-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-14-8036-bfp-uc-polish",
					name: "8036 BFP/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/8 brazos entrelazados/aro interior y pestaña frontal pulida.",
					image: new URL("../assets/catalogo/14/autos-14-8036-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-1415-black-uc-polish",
					name: "1415 BLACK/UC POLISH",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/ 8 brazos dobles/aro interior pulido.",
					image: new URL("../assets/catalogo/14/autos-14-1415-black-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-14-z5200-b4",
					name: "Z5200 B4",
					specs: ["14*5.5", "4*100", "ET 35", "CB 73.1"],
					description: "Aro color negro/ 5 brazos dobles con contraste pulido.",
					image: new URL("../assets/catalogo/14/autos-14-z5200-b4.png", import.meta.url).href,
				},
				{
					id: "autos-14-var-8708-tp-1507",
					name: "VAR-8708-TP-1507",
					specs: ["14*6", "8*100", "ET -10", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-var-8708-tp-1507.png", import.meta.url).href,
				},
				{
					id: "autos-14-var-8708-tp-1500-bfp",
					name: "VAR-8708-TP-1500 BFP",
					specs: ["14*7", "8*100/114.3", "ET -10", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-var-8708-tp-1500-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-14-var-8708-tp-1501-bfp",
					name: "VAR-8708-TP-1501-BFP",
					specs: ["14*6.0", "8*100", "ET 30", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-var-8708-tp-1501-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-14-var-8708-tp-1484-bfp",
					name: "VAR-8708-TP-1484 BFP",
					specs: ["14*7.0", "8*100/114.3", "ET 20", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-var-8708-tp-1484-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-14-var-8708-dm-dx221-black-machine-face",
					name: "VAR-8708-DM-DX221 BLACK MACHINE FACE",
					specs: ["14*6.0", "8*100/114.3", "ET 30", "CB 73.1"],
					description: "",
					image: new URL(
						"../assets/catalogo/14/autos-14-var-8708-dm-dx221-black-machine-face.png",
						import.meta.url,
					).href,
				},
				{
					id: "autos-14-var-8708-dm-dx221-hyper-black",
					name: "VAR-8708-DM-DX221 HYPER BLACK",
					specs: ["14*6.0", "8*100/114.3", "ET 30", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-var-8708-dm-dx221-hyper-black.png", import.meta.url)
						.href,
				},
				{
					id: "autos-14-1415-bmfp-uc-blue",
					name: "1415 MBFP/ UC BLUE",
					specs: ["14*6.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/14/autos-14-1415-bmfp-uc-blue.png", import.meta.url).href,
				},
			],
		},
		{
			key: "autos-aro-15",
			label: "Aro 15 • Autos",
			vehicle: "autos",
			diameter: 15,
			items: [
				{
					id: "autos-15-1459-bfp-uc-red",
					name: "1459 BFP/ UC RED",
					specs: ["15*8.0", "8*100/114.3", "ET -10", "CB 73.1"],
					description:
						"Aro color negro brillante/ 7 aspas negras con detalles pulidos/aro interior rojo/ pestaña frontal pulida.",
					image: new URL("../assets/catalogo/15/autos-15-1459-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-15-1459-bfp-uc-polish",
					name: "1459 BFP/ UC polish",
					specs: ["15*8.0", "8*100/114.3", "ET -10", "CB 73.1"],
					description:
						"Aro color negro brillante/ 7 aspas negras con detalles pulidos/aro interior y pestaña frontal pulida.",
					image: new URL("../assets/catalogo/15/autos-15-1459-bfp-uc-polish.png", import.meta.url).href,
				},
				{
					id: "autos-15-1135-bfp-uc-red",
					name: "1135 BFP/ UC RED",
					specs: ["15*7.0", "4*100/114.3", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negros con detalles pulidos/aro interior rojo/borde frontal plateado.",
					image: new URL("../assets/catalogo/15/autos-15-1135-bfp-uc-red.png", import.meta.url).href,
				},
				{
					id: "autos-15-1472-bfp",
					name: "1472 BFP",
					specs: ["15*6.5", "4*100", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 4 brazos dobles negros con detalles pulidos/borde frontal plateado.",
					image: new URL("../assets/catalogo/15/autos-15-1472-bfp.png", import.meta.url).href,
				},
				{
					id: "autos-15-dx245-black-machine-face-blue-undercut",
					name: "DX245 BLACK MACHINE FACE+BLUE UNDERCUT",
					specs: ["15*7.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/5 aspas triples/aro interior azul pulido y pestaña frontal pulida",
					image: new URL(
						"../assets/catalogo/15/autos-15-dx245-black-machine-face-blue-undercut.png",
						import.meta.url,
					).href,
				},
				{
					id: "autos-15-z5215-b4",
					name: "Z5215 B4",
					specs: ["15*5.5", "4*100", "ET 40", "CB 54.1"],
					description: "Aro color negro/ 10 brazos negros con contraste pulidos/borde frontal pulido.",
					image: new URL("../assets/catalogo/15/autos-15-z5215-b4.png", import.meta.url).href,
				},
				{
					id: "autos-15-1417-hyper-black",
					name: "1417 HYPER BLACK",
					specs: ["15*7.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/ 7 brazos dobles.",
					image: new URL("../assets/catalogo/15/autos-15-1417-hyper-black.png", import.meta.url).href,
				},
				{
					id: "autos-15-dm-dx221-hyper-black",
					name: "DM-DX221 HYPER BLACK",
					specs: ["15*7.0", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 5 brazos lisos.",
					image: new URL("../assets/catalogo/15/autos-15-dm-dx221-hyper-black.png", import.meta.url).href,
				},
				{
					id: "autos-15-z272-b4",
					name: "Z272 B4",
					specs: ["15*9.0", "10*100/114.3", "ET 0", "CB 73.1"],
					description: "Aro color negro/7 brazos pulidos/pestaña amplia plateada pulida.",
					image: new URL("../assets/catalogo/15/autos-15-z272-b4.png", import.meta.url).href,
				},
			],
		},
		{
			key: "autos-aro-16",
			label: "Aro 16 • Autos",
			vehicle: "autos",
			diameter: 16,
			items: [
				{
					id: "autos-16-z1050-b1-m5",
					name: "Z1050 B1/M5",
					specs: ["16*7.0", "10*100", "ET 25", "CB 73.1"],
					description: "Aro color negro matte/ 5 aspas dobles.",
					image: new URL("../assets/catalogo/16/autos-16-z1050-b1-m5.png", import.meta.url).href,
				},
				{
					id: "autos-16-dm-dx654-black-machine-face",
					name: "DM-DX654 BLACK MACHINE FACE",
					specs: ["16*6.5", "5*100", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 5 brazos negros con constraste pulido/borde frontal pulido.",
					image: new URL("../assets/catalogo/16/autos-16-dm-dx654-black-machine-face.png", import.meta.url)
						.href,
				},
				{
					id: "autos-16-z1925-b1-m5",
					name: "Z1925 B1/M5",
					specs: ["16*7.0", "10*100*114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro/ 10 brazos dobles.",
					image: new URL("../assets/catalogo/16/autos-16-z1925-b1-m5.png", import.meta.url).href,
				},
				{
					id: "autos-16-5196-matt-black",
					name: "5196 MATT BLACK",
					specs: ["16*7.0", "10*100/114.3", "ET 42", "CB 73.1"],
					description: "Aro color negro matte/ 5 brazos lisos.",
					image: new URL("../assets/catalogo/16/autos-16-5196-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-16-z5234-b4",
					name: "Z5234 B4",
					specs: ["16*6.5", "4*100", "ET 39", "CB 67.1"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negro con contraste pulido/borde frontal pulido.",
					image: new URL("../assets/catalogo/16/autos-16-z5234-b4.png", import.meta.url).href,
				},
				{
					id: "autos-16-dx616-matt-bronze",
					name: "DX616 MATT BRONZE",
					specs: ["16*8.25", "8*100/114.3", "ET 0", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/16/autos-16-dx616-matt-bronze.png", import.meta.url).href,
				},
				{
					id: "autos-16-var-8708-dm-dx424-matt-black",
					name: "VAR-8708-DM-DX424 MATT BLACK",
					specs: ["16*7.0", "10*100/114.3", "ET 35", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/16/autos-16-var-8708-dm-dx424-matt-black.png", import.meta.url)
						.href,
				},
				{
					id: "autos-16-dx424-dx616-matt-black",
					name: "DX424 DX616 MATT BLACK",
					specs: ["16*8.25", "8*100/114.3", "ET 0", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/16/autos-16-dx424-dx616-matt-black.png", import.meta.url).href,
				},
			],
		},
		{
			key: "autos-aro-17",
			label: "Aro 17 • Autos",
			vehicle: "autos",
			diameter: 17,
			items: [
				{
					id: "autos-17-dm-a010-matt-black",
					name: "DM-A010 MATT BLACK",
					specs: ["17*7.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 10 brazos dobles y borde frontal negro.",
					image: new URL("../assets/catalogo/17/autos-17-dm-a010-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-17-dm-a010-matt-black-2",
					name: "DM-A010 MATT BLACK",
					specs: ["17*7.5", "10*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 10 brazos dobles y borde frontal negro.",
					image: new URL("../assets/catalogo/17/autos-17-dm-a010-matt-black-2.png", import.meta.url).href,
				},
				{
					id: "autos-17-bcf7728-matt-black",
					name: "BCF7728 MATT BLACK",
					specs: ["17*7.5", "10*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 15 aspas/detalle de aro rojo en el centro del aro.",
					image: new URL("../assets/catalogo/17/autos-17-bcf7728-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-17-bcf7728-matt-black-2",
					name: "BCF7728 MATT BLACK",
					specs: ["17*7.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 15 aspas/detalle de aro rojo en el centro del aro.",
					image: new URL("../assets/catalogo/17/autos-17-bcf7728-matt-black-2.png", import.meta.url).href,
				},
				{
					id: "autos-17-z1050-b1-m5",
					name: "Z1050 B1/M5",
					specs: ["17*7.5", "5/114.3", "ET 25", "CB 73.1"],
					description: "Aro color negro matte/ 5 aspas dobles pulidas.",
					image: new URL("../assets/catalogo/17/autos-17-z1050-b1-m5.png", import.meta.url).href,
				},
				{
					id: "autos-17-ff-dm-dx424-matt-black",
					name: "FF-DM-DX424 MATT BLACK",
					specs: ["17*7.5", "8*100/114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ 10 aspas/detalle de letras en relieve en aro interior.",
					image: new URL("../assets/catalogo/17/autos-17-ff-dm-dx424-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-17-z537-b1-m5",
					name: "Z537 B1/M5",
					specs: ["17*7.5", "8*100/*114.3", "ET 32", "CB 73.1"],
					description: "Aro color negro/ 10 brazos dobles pulidos",
					image: new URL("../assets/catalogo/17/autos-17-z537-b1-m5.png", import.meta.url).href,
				},
				{
					id: "autos-17-604-black-machine-lip-gold-lip",
					name: "604 BLACK MACHINE LIP(GOLD LIP)",
					specs: ["17*8.0", "5*114.3", "ET 40", "CB 73.1"],
					description: "Aro color negro/ 15 brazos pulidos/pestaña amplia dorada",
					image: new URL("../assets/catalogo/17/autos-17-604-black-machine-lip-gold-lip.png", import.meta.url)
						.href,
				},
			],
		},
		{
			key: "autos-aro-18",
			label: "Aro 18 • Autos",
			vehicle: "autos",
			diameter: 18,
			items: [
				{
					id: "autos-18-dm-dx220-black-machine-face",
					name: "DM-DX220 BLACK MACHINE FACE",
					specs: ["18*8.0", "5*112", "ET 35", "CB 66.6"],
					description:
						"Aro color negro brillante/ 5 brazos negros con detalles pulidos y relieves/ borde frontal con detalles pulidos.",
					image: new URL("../assets/catalogo/18/autos-18-dm-dx220-black-machine-face.png", import.meta.url)
						.href,
				},
				{
					id: "autos-18-dm-dx399-matt-black",
					name: "DM-DX399 MATT BLACK",
					specs: ["18*8.5", "5*114.3", "ET 35", "CB 73.1"],
					description: "Aro color negro matte/ brazos multiples/detalle de letras en pestaña frontal.",
					image: new URL("../assets/catalogo/18/autos-18-dm-dx399-matt-black.png", import.meta.url).href,
				},
				{
					id: "autos-18-dm-dx21-black-machine-face",
					name: "DM-DX421 BLACK MACHINE FACE",
					specs: ["18*8.0", "5*112", "ET 35", "CB 66.6"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negros con contraste pulido/pestaña frontal pulida.",
					image: new URL("../assets/catalogo/18/autos-18-dm-dx21-black-machine-face.png", import.meta.url)
						.href,
				},
			],
		},
		{
			key: "autos-aro-19",
			label: "Aro 19 • Autos",
			vehicle: "autos",
			diameter: 19,
			items: [
				{
					id: "autos-19-fbx169-9-bmf",
					name: "FBX169-9 BMF",
					specs: ["19*8.5", "5*112", "ET 35", "CB 66.6"],
					description: "Aro color negro brillante/ 10 brazos dobles/borde frontal plateados pulidos.",
					image: new URL("../assets/catalogo/19/autos-19-fbx169-9-bmf.png", import.meta.url).href,
				},
				{
					id: "autos-19-xxr-vv5-3-mb",
					name: "XXR-VV5-3 MB",
					specs: ["19*8.5", "5*114.3", "ET 35", "CB 64.1"],
					description:
						"Aro color negro brillante/ 5 brazos multiples pulidos/ borde frontal con detalles plateados pulidos.",
					image: new URL("../assets/catalogo/19/autos-19-xxr-vv5-3-mb.png", import.meta.url).href,
				},
				{
					id: "autos-19-z963-b1-m5",
					name: "Z963 B1/M5",
					specs: ["19*8.5", "5*108", "ET 33", "CB 73.1"],
					description: "Aro color gris/ 15 brazos pulidos.",
					image: new URL("../assets/catalogo/19/autos-19-z963-b1-m5.png", import.meta.url).href,
				},
				{
					id: "autos-19-z963-b1-m5-2",
					name: "Z963 B1/M5",
					specs: ["19*8.5", "5*108", "ET 33", "CB 73.1"],
					description: "Aro color gris/ 15 brazos pulidos.",
					image: new URL("../assets/catalogo/19/autos-19-z963-b1-m5-2.png", import.meta.url).href,
				},
				{
					id: "autos-19-h3138f-mb",
					name: "H3138F MB",
					specs: ["19*8.5", "5*112", "ET 35", "CB 66.45"],
					description:
						"Aro color negro brillante/ 5 brazos dobles negros con contraste pulido/pestaña frontal pulida.",
					image: new URL("../assets/catalogo/19/autos-19-h3138f-mb.png", import.meta.url).href,
				},
				{
					id: "autos-19-fbx008-9-bmf",
					name: "FBX008-9 BMF",
					specs: ["19*8.5", "5*112", "ET 35", "CB 73.1"],
					description:
						"Aro color negro brillante/ 5 brazos negros con detalles pulidos y relieves/ borde frontal con detalles pulidos.",
					image: new URL("../assets/catalogo/19/autos-19-fbx008-9-bmf.png", import.meta.url).href,
				},
			],
		},
		{
			key: "autos-aro-20",
			label: "Aro 20 • Autos",
			vehicle: "autos",
			diameter: 20,
			items: [
				{
					id: "autos-20-y7915-bp",
					name: "Y7915 BP",
					specs: ["20*9.0", "5*130", "ET 50", "CB 71.6"],
					description: "Aro color negro/5 aspas dobles pulida/borde frontal plateado.",
					image: new URL("../assets/catalogo/20/autos-20-y7915-bp.png", import.meta.url).href,
				},
				{
					id: "autos-20-y7915-bp-2",
					name: "Y7915 BP",
					specs: ["20*10.5", "5*130", "ET 64", "CB 71.6"],
					description: "Aro color negro/5 aspas dobles pulida/borde frontal plateado.",
					image: new URL("../assets/catalogo/20/autos-20-y7915-bp-2.png", import.meta.url).href,
				},
				{
					id: "autos-20-da021-black",
					name: "DA021 BLACK",
					specs: ["20*9.5", "5*112", "ET 30", "CB 66.6"],
					description: "Aro color negro/5 aspas dobles con relieves pulidos.",
					image: new URL("../assets/catalogo/20/autos-20-da021-black.png", import.meta.url).href,
				},
				{
					id: "autos-20-dx421-bmf",
					name: "DX421 BMF",
					specs: ["20*9.0", "5*112", "ET 35", "CB 66.56"],
					description: "Aro color negro/5 aspas dobles con relieves pulidos.",
					image: new URL("../assets/catalogo/20/autos-20-dx421-bmf.png", import.meta.url).href,
				},
			],
		},
		{
			key: "autos-aro-22",
			label: "Aro 22 • Autos",
			vehicle: "autos",
			diameter: 22,
			items: [
				{
					id: "autos-22-h996d-mb",
					name: "H996D MB",
					specs: ["22*9.5", "5*112", "ET 37", "CB 66.56"],
					description: "Aro color negro brillante/ 10 brazos dobles/borde frontal plateado pulido.",
					image: new URL("../assets/catalogo/22/autos-22-h996d-mb.png", import.meta.url).href,
				},
				{
					id: "autos-22-h996d-mb-2",
					name: "H996D MB",
					specs: ["22*10.5", "5*112", "ET 43", "CB 66.56"],
					description: "Aro color negro brillante/ 10 brazos dobles/borde frontal plateado pulido.",
					image: new URL("../assets/catalogo/22/autos-22-h996d-mb-2.png", import.meta.url).href,
				},
			],
		},
		{
			key: "camionetas-aro-15",
			label: "Aro 15 • Camionetas",
			vehicle: "camionetas",
			diameter: 15,
			items: [
				{
					id: "camionetas-15-z271-b7-q",
					name: "Z271 B7-Q",
					specs: ["15*7.0", "5*114.3", "ET 0", "CB 73.1"],
					description: "Aro color negro/8 brazos pulidos/borde frontal negro detalles plateados.",
					image: new URL("../assets/catalogo/15-cam/camionetas-15-z271-b7-q.png", import.meta.url).href,
				},
				{
					id: "camionetas-15-z5092-b4",
					name: "Z5092 B4",
					specs: ["15*10", "5*114.3", "ET -44", "CB 73.1"],
					description:
						"Aro color negro brillante/ brazos multiples/pestaña frontal pulida con detalle de tuercas.",
					image: new URL("../assets/catalogo/15-cam/camionetas-15-z5092-b4.png", import.meta.url).href,
				},
				{
					id: "camionetas-15-bc5911-black-mf",
					name: "BC5911 BLACK MF",
					specs: ["15*7.0", "5*114.3", "ET -10", "CB 73.1"],
					description: "",
					image: new URL("../assets/catalogo/15-cam/camionetas-15-bc5911-black-mf.png", import.meta.url).href,
				},
			],
		},
		{
			key: "camionetas-aro-16",
			label: "Aro 16 • Camionetas",
			vehicle: "camionetas",
			diameter: 16,
			items: [
				{
					id: "camionetas-16-bc6274-black-mf",
					name: "BC6274 BLACK MF",
					specs: ["16*8.0", "6*139.7", "ET 0", "CB 110"],
					description:
						"Aro color negro brillante/ 8 brazos pulidos/borde frontal negro con detalles plateados.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-bc6274-black-mf.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-bc6079-black-mf",
					name: "BC6079 BLACK MF",
					specs: ["16*8.0", "6*139.7", "ET 0", "CB 106.1"],
					description: "Aro color negro brillante/ 8 brazos negros con contraste pulido",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-bc6079-black-mf.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-bc6306-black-mf",
					name: "BC6306 BLACK MF",
					specs: ["16*7.5", "6*139.7", "ET 15", "CB 106.1"],
					description:
						"Aro color negro brillante/ 6 brazos dobles negros con contraste pulido/pestaña frontal pulida.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-bc6306-black-mf.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-z1041-b4",
					name: "Z1041 B4",
					specs: ["16*8.0", "6*139.7", "ET 0", "CB 110"],
					description: "Aro color negro brillante/ 10 brazos/pestaña pulida con detalles negros",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-z1041-b4.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-dm-661",
					name: "DM-661",
					specs: ["16*8.5", "6*139.7", "ET 0", "CB 110"],
					description: "Aro color negro matte/ brazos multiples/pestaña frontal con detalle de tuercas.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-dm-661.png", import.meta.url).href,
				},
				{
					id: "camionetas-z339-b4-q",
					name: "Z338 B4-Q",
					specs: ["16*8.0", "6*139.7", "ET 6", "CB 110"],
					description:
						"Aro color negro brillante/ 8 brazos/pestaña frontal pulida con detalles negros y tuercas.",
					image: new URL("../assets/catalogo/16-cam/camionetas-z339-b4-q.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-z1006-b3-q",
					name: "Z1006 B3-Q",
					specs: ["16*8.0", "6*139.7", "ET 0", "CB 110"],
					description:
						"Aro color negro brillante/ detalles metálicos pulidos/ diseño de múltiples orificios circulares alrededor de su estructura.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-z1006-b3-q.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-z0136-b2",
					name: "Z0136 B2",
					specs: ["16*8.0", "6*139.7", "ET 0", "CB 110"],
					description: "Aro color negro brillante/ 6 brazos y pestaña frontal con detallespulidos y tuercas.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-z0136-b2.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-bc6975-black-mf",
					name: "BC6975 BLACK MF",
					specs: ["16*8.0", "6*114.3", "ET 0", "CB 66.1"],
					description:
						"Aro color negro brillante/ 6 brazos dobles pulidos/ borde frontal pulido con detalle de tuercas.",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-bc6975-black-mf.png", import.meta.url).href,
				},
				{
					id: "camionetas-16-var-8708-tp-1451-bfp",
					name: "VAR-8708-TP-1451 BFP",
					specs: ["16*8.0", "6*114.3", "ET 3", "CB 66.1"],
					description: "",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-var-8708-tp-1451-bfp.png", import.meta.url)
						.href,
				},
				{
					id: "camionetas-16-var-8708-tp-1446-bfp",
					name: "VAR-8708-TP-1446 BFP",
					specs: ["16*7.5", "6*114.3", "ET 30", "CB 66.1"],
					description: "",
					image: new URL("../assets/catalogo/16-cam/camionetas-16-var-8708-tp-1446-bfp.png", import.meta.url)
						.href,
				},
			],
		},
		{
			key: "camionetas-aro-17",
			label: "Aro 17 • Camionetas",
			vehicle: "camionetas",
			diameter: 17,
			items: [
				{
					id: "camionetas-17-var-8708-tp-1452-bfp",
					name: "VAR-8708-TP-1452-BFP",
					specs: ["17*8.5", "6*139.7", "ET 0", "CB 110"],
					description: "",
					image: new URL("../assets/catalogo/17-cam/camionetas-17-var-8708-tp-1452-bfp.png", import.meta.url)
						.href,
				},
				{
					id: "camionetas-17-var-8708-tp-1446-bfp",
					name: "VAR-8708-TP-1446-BFP",
					specs: ["17*7.5", "6*114.3", "ET 30", "CB 66.1"],
					description: "",
					image: new URL("../assets/catalogo/17-cam/camionetas-17-var-8708-tp-1446-bfp.png", import.meta.url)
						.href,
				},
				{
					id: "camionetas-17-var-8708-tp-1496-matt-black",
					name: "VAR-8708-TP-1496 MATT BLACK",
					specs: ["17*9.0", "6*139.7", "ET 0", "CB 110"],
					description: "",
					image: new URL(
						"../assets/catalogo/17-cam/camionetas-17-var-8708-tp-1496-matt-black.png",
						import.meta.url,
					).href,
				},
				{
					id: "camionetas-17-var-8708-tp-1494-matt-gun-metal",
					name: "VAR-8708-TP-1494 MATT GUN METAL/ MATT BLACK LIP",
					specs: ["17*9.0", "6*139.7", "ET 0", "CB 110"],
					description: "",
					image: new URL(
						"../assets/catalogo/17-cam/camionetas-17-var-8708-tp-1494-matt-gun-metal.png",
						import.meta.url,
					).href,
				},
				{
					id: "camionetas-17-dm-or002-matt-black",
					name: "DM-OR002 MATT BLACK+MILLING",
					specs: ["17*9.0", "6*139.7", "ET 0", "CB 110"],
					description: "Aro color negro matte / 7 brazos dobles con contraste pulido/ borde frontal negro.",
					image: new URL("../assets/catalogo/17-cam/camionetas-17-dm-or002-matt-black.png", import.meta.url)
						.href,
				},
				{
					id: "camionetas-17-ff-dm-dx204-gun-grey",
					name: "FF-DM-DX204 GUN GREY+LIP MATT BLACK",
					specs: ["17*8.5", "6*139.7", "ET 0", "CB 110.1"],
					description:
						"Aro color gris matte / 6 brazos dobles / borde frontalcon detalles de tachas pulidas.",
					image: new URL("../assets/catalogo/17-cam/camionetas-17-ff-dm-dx204-gun-grey.png", import.meta.url)
						.href,
				},
				{
					id: "camionetas-17-ff-dm-dx575-matt-black",
					name: "FF-DM-DX575 MATT BLACK",
					specs: ["17*9.0", "6*139.7", "ET 0", "CB 110.2"],
					description: "Aro color negro matte/ 5 brazos negros/borde frontal con detalles de rejilla negro.",
					image: new URL(
						"../assets/catalogo/17-cam/camionetas-17-ff-dm-dx575-matt-black.png",
						import.meta.url,
					).href,
				},
				{
					id: "camionetas-17-1447-matt-black",
					name: "1447 MATT BLACK",
					specs: ["17*7.5", "6*114.3", "ET 30", "CB 66.1"],
					description:
						"Aro color negro matte / 6 brazos dobles / borde frontal con detalle de tuercas negras.",
					image: new URL("../assets/catalogo/17-cam/camionetas-17-1447-matt-black.png", import.meta.url).href,
				},
			],
		},
	],
} as const;
