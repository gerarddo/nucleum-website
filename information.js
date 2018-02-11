const router = []; 

router.panelists = [
	{
		name: "Elizabeth Wayne", 
		body: "Investigación en nanotecnología contra el cáncer. Su laboratorio se especializa en crear tratamientos que enlazan las células inmunes, los primeros en responder a las amenazas en tu cuerpo cuerpo, centrados precisamente en las células cancerosas sin dañar las sanas.",
		schedules: "No schedule defined yet",
		caption: "Reconocida como TED Fellow 2017 por su investigación en nanotecnología del cáncer y sus esfuerzos para amplificar las voces de las mujeres en liderazgo y educación superior. ",
		image: "/images/panelists/wayne.jpg"
	}, {
		name: "Rodolfo Quintero", 
		body: "Sus investigaciones en el área de la biotecnología agroalimentaria son de suma importancia, específicamente el área de control de plagas.",
		schedules: "No schedule defined yet",
		caption: "Estudió Ingeniería Química por la UNAM (1971) con Maestría en Biotecnología por el MIT, Miembro del SNI Nivel III.",
		image: "/images/panelists/conference-test.png"
	}, {
		name: "Germán Buitrón",
		body: "Nos hablará de operación eficiente de bio-reactores para el tratamiento de aguas; producción biológica de hidrógeno, metano y electricidad a partir de residuos; biodegradación de efluentes inhibitorios; uso de sistemas microalga-bacteria para el tratamiento de aguas y valorización de la biomasa.",
		schedules: "No schedule defined yet",
		caption: "Ingeniero Ambiental especializado en Energía.",
		image: "/images/panelists/buitron.jpg"
	}, {
		name: "Jesús Tamez-Duque",
		body: "Desarrolla e integra interfaces, técnicas, artísticas y máquinas-humanas personales; su trabajo se centra principalmente con exoesqueletos.",
		schedules: "No schedule defined yet",
		caption: "Fundador y CEO: INDI Ingeniería y Tech-Enhanced Human Experience",
		image: "/images/panelists/tamez.jpg"
	}, {
		name: "Por confirmar",
		body: "",
		schedules: "No schedule defined yet",
		caption: "Conferencista, fecha y hora aún por confirmar                                     ",
		image: "/images/panelists/conference-test.png"
	}
]

router.business = [
	{
		name: "Solben", 
		body: "Empresa formada por líderes con alta conciencia social, ambiental y económica que desarrolla tecnologías para generar energía a partir de materias primas renovables. Teniendo como objetivo impulsar el desarrollo y uso de la bioenergía para mejorar la calidad de vida y la recuperación del medio ambiente. Automatización, caracterización de aceites y calidad de biodiesel son algunas de las tecnologías desarrolladas por SOLBEN reconocidas a nivel nacional e internacional.",
		schedules: "8 de marzo",
		image: "/images/business/solben.jpg"
	}, {
		name: "Galtec", 
		body: "Galtec se basa en la en la redirección del metabolismo de algas para producir metabolitos de valor agregado para la industria de los alimentos. Galtec ofrece antioxidantes, ácidos grasos omega 3 y 6 y proteína del alga espirulina. Ha logrado avances importantes en la utilización de microalgas para salud humana, cosmética, purificación de aguas residuales, prevención de contaminación acuática, industria farmacéutica, producción de pigmentos y antibióticos.",
		schedules: "7 de marzo",
		image: "/images/business/galtec.png"
	}, {
		name: "Renovapack",
		body: "Empresa con conciencia ambiental enfocada a la  fabricación de productos biodegradables a base de fibras naturales o polímeros de maíz como caña de azúcar, trigo y el PLA, reduciendo así su tiempo de degradación a 3-6 meses. Cuentan con productos de alta calidad como vasos personalizados, lunchbox y contenedores. Renovapack logra impulsar el uso de desechables biodegradables y compostables con la finalidad de cuidar el medio ambiente.",
		schedules: "8 de marzo",
		image: "/images/business/renovapack.png"
	}, {
		name: "Aluz",
		body: "Formada en base a la idea de crear una empresa que brindara formas prácticas y económicas para ahorrar energía. Comenzaron con el asesoramiento a negocios con sus necesidades energéticas. Desde entonces se han ido expandiendo por todo el territorio nacional. Entre sus artículos se encuentran: celdas solares, ecotecnologías, monitoreo y control, ahorro de agua  y aislamiento térmico.",
		schedules: "9 de marzo",
		image: "/images/business/aluz.png"
	}
]

router.visits = [
	{
		name: "Cervecería Santa Lucía",
		body: "Una de las abundantes cerveceras artesanales de Monterrey. En esta visita, los participantes aprenderán a producir una cerveza con un sabor diferente, único. Verán a primera vista el proceso y métodos de producción de la cerveza.",
		schedules: [
			"No schedule defined yet)"
		],
		image: "/images/visits/santa.png"
	}, {
		name: "Avant Santé",
		body: "Esta empresa provee soluciones clínicas y analíticas enfocadas a la investigación farmacológica. Ayudan a compañías farmacéuticas en su búsqueda de más y mejores medicamentos para la población. La visita dará a los alumnos un vistazo a este extenso campo de trabajo.",
		schedules: [
			"No schedule defined yet"
		],
		image: "/images/visits/avant.png"
	}, {
		name: "Cervecería Cuauhtémoc Moctezuma",
		body: "En esta visita los participantes aprenderán sobre la fundación, historia e impacto de esta gran empresa mexicana, así como su amplio portafolio de cervezas conocidas a nivel internacional. Conocerán el proceso de elaboración de cerveza, el proceso de envasado y cómo servirla perfectamente.",
		schedules: [
			"No schedule defined yet"
		],
		image: "/images/visits/cuauhtemoc.png"
	}, {
		name: "Zumba Pica",
		body: "Pronto te contaremos de qué tratará…",
		schedules: [
			"No schedule defined yet"
		],
		image: "/images/visits/zumbapica.png"
	}
]

router.workshops = [
	{
		name: "Plantas como Biorreactor",
		teacher: "No teacher assigned yet",
		body: "Este taller está enfocado en la demostración de las plantas para la obtención de energía, sus razones y métodos de extracción.",
		image: "/images/workshops/biorreactor.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Fitocosméticos",
		teacher: "No teacher assigned yet",
		body: "Conoce cómo las grandes industrias de cosméticos fabrican estos productos. Dándole importancia al cuidado de la piel, se harán productos de maquillaje con base natural para explorar más sobre los posibles usos de distintas materias primas.",
		image: "/images/workshops/fitocosmeticos.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Fabricación de Dispositivos Microfluídicos",
		teacher: "No teacher assigned yet",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Elaboración de cerveza con enfoque industrial y casero",
		teacher: "No teacher assigned yet",
		body: "En este taller aprenderás a hacer cerveza de manera artesanal y conocer sobre la metodología e ingredientes involucrados al producir una de las bebidas más consumidas en el ámbito comercial. Se cuenta con dos talleres, con enfoques en el área industrial y otro en el casero.",
		image: "/images/workshops/cheve.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Separaciones Moleculares de Compuestos Bioactivos",
		teacher: "No teacher assigned yet",
		body: "El taller está dedicado a la realización de demostrativa de sílica gel en columna, cromatografía en capa delgada con solventes de diferentes polaridades y separación de compuestos bioactivos.",
		image: "/images/workshops/separaciones.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Bioinformática y genómica: mutaciones cancerígenas",
		teacher: "No teacher assigned yet",
		body: "Uso de la bioinformática y genómica en la visualización 3D de mutaciones somáticas más frecuentes en cáncer.",
		image: "/images/workshops/bioinformatica.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Nieve con nitrógeno “dippin dots”",
		teacher: "No teacher assigned yet",
		body: "Utilizaremos una rama de la cocina molecular para innovar en la textura y presentación de la nieve, esta se crea con nitrógeno liquido; este taller te dará la experiencia de elaborar tu propio producto.",
		image: "/images/workshops/nieve.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Óptica moderna",
		teacher: "No teacher assigned yet",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Gastronomía molecular - Esferificaciones",
		teacher: "No teacher assigned yet",
		body: "También conocida como culinology, este taller hace uso de químicos o combina aquellos que tengan compatibilidad en su composición molecular para elaborar platillos diferentes e innovadores; se busca que aquella persona que lo consuma tenga una nueva experiencia en su paladar. En este taller tendrás la oportunidad de aprender sobre técnicas donde se transforman texturas y sabores para obtener un nuevo alimento",
		image: "/images/workshops/gastronomia-esferas.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Gastronomía molecular",
		teacher: "No teacher assigned yet",
		body: "También conocida como culinology, este taller hace uso de químicos o combina aquellos que tengan compatibilidad en su composición molecular para elaborar platillos diferentes e innovadores; se busca que aquella persona que lo consuma tenga una nueva experiencia en su paladar. En este taller tendrás la oportunidad de aprender sobre técnicas donde se transforman texturas y sabores para obtener un nuevo alimento",
		image: "/images/workshops/gastronomia.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Síntesis de nanoestructuras",
		teacher: "No teacher assigned yet",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/nanoestructuras.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Química forense (?)",
		teacher: "No teacher assigned yet",
		body: "",
		image: "/images/workshops/forense.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}, {
		name: "Coctelería Molecular (?)",
		teacher: "No teacher assigned yet",
		body: "",
		image: "/images/workshops/cocteleria.jpg",
		schedules: [
			"No schedule defined yet"
		]
	}
]

module.exports = router