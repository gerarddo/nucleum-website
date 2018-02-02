const router = []; 

router.panelists = [
	{
		name: "Elizabeth Wayne", 
		body: "Investigación en nanotecnología contra el cáncer. Su laboratorio se especializa en crear tratamientos que enlazan las células inmunes, los primeros en responder a las amenazas en tu cuerpo cuerpo, centrados precisamente en las células cancerosas sin dañar las sanas.",
		schedules: "October the 21st at 15:00",
		caption: "Reconocida como TED Fellow 2017 por su investigación en nanotecnología del cáncer y sus esfuerzos para amplificar las voces de las mujeres en liderazgo y educación superior. ",
		image: "/images/panelists/panelist-test.png"
	}, {
		name: "Rodolfo Quintero", 
		body: "Sus investigaciones en el área de la biotecnología agroalimentaria son de suma importancia, específicamente el área de control de plagas.",
		schedules: "October the 21st at 15:00",
		caption: "Estudió Ingeniería Química por la UNAM (1971) con Maestría en Biotecnología por el MIT, Miembro del SNI Nivel III.",
		image: "/images/panelists/panelist-test.png"
	}, {
		name: "Germán Buitrón",
		body: "Nos hablará de operación eficiente de bio-reactores para el tratamiento de aguas; producción biológica de hidrógeno, metano y electricidad a partir de residuos; biodegradación de efluentes inhibitorios; uso de sistemas microalga-bacteria para el tratamiento de aguas y valorización de la biomasa.",
		schedules: "October the 21st at 15:00",
		caption: "Ingeniero Ambiental especializado en Energía.",
		image: "/images/panelists/panelist-test.png"
	}, {
		name: "Jesús Tamez-Duque",
		body: "Desarrolla e integra interfaces, técnicas, artísticas y máquinas-humanas personales; su trabajo se centra principalmente con exoesqueletos.",
		schedules: "October the 21st at 15:00",
		caption: "Fundador y CEO: INDI Ingeniería y Tech-Enhanced Human Experience",
		image: "/images/panelists/panelist-test.png"
	}, {
		name: "Por confirmar",
		body: "Conferencista, fecha y hora aún por confirmar",
		schedules: "October the 21st at 15:00",
		caption: "Conferencista, fecha y hora aún por confirmar                                     ",
		image: "/images/panelists/panelist-test.png"
	}
]

router.business = [
	{
		name: "Solben", 
		body: "Empresa formada por líderes con alta conciencia social, ambiental y económica que desarrolla tecnologías para generar energía a partir de materias primas renovables. Teniendo como objetivo impulsar el desarrollo y uso de la bioenergía para mejorar la calidad de vida y la recuperación del medio ambiente. Automatización, caracterización de aceites y calidad de biodiesel son algunas de las tecnologías desarrolladas por SOLBEN reconocidas a nivel nacional e internacional.",
		schedules: "October the 21st at 15:00",
		image: "/images/business/business-test.png"
	}, {
		name: "Galtec", 
		body: "Galtec se basa en la en la redirección del metabolismo de algas para que produzcan metabolitos de valor agregado para la industria de los alimentos, por lo que se logra que las microalgas acumulen diferentes compuestos. Galtec ofrece proteínas, omegas y antioxidantes que son producidos a partir de diferentes cepas de microalgas como pueden ser antioxidantes, ácidos grasos omega 3 y 6 y proteína del alga espirulina. Ha logrado avances importantes en la utilización de microalgas para salud humana, cosmética, purificación de aguas residuales, prevención de contaminación acuática, industria farmacéutica, producción de pigmentos y antibióticos, entre otros usos. Además es reconocida como una empresa de alto impacto por la Incubadora de Biotecnología del I2T2 ubicada en el Parque de Investigación e Innovación Tecnológica , donde actualmente realizan sus labores.",
		schedules: "October the 21st at 15:00",
		image: "/images/business/business-test.png"
	}, {
		name: "Aluz",
		body: "Formada en base a la idea de crear una empresa que brindara formas prácticas y económicas para ahorrar energía. Comenzaron con el asesoramiento a negocios con sus necesidades energéticas. Desde entonces se han ido estado expandiendo por todo el territorio nacional. Entre sus artículos se encuentran: celdas solares, ecotecnologías, monitoreo y control, ahorro de agua  y aislamiento térmico.",
		schedules: "October the 21st at 15:00",
		image: "/images/business/business-test.png"
	}, {
		name: "Dummy",
		body: "Dummy",
		schedules: "October the 21st at 15:00",
		image: "/images/business/business-test.png"
	}, {
		name: "Dummy",
		body: "Dummy",
		schedules: "October the 21st at 15:00",
		image: "/images/business/business-test.png"
	}
]

router.visits = [
	{
		name: "Avant Santé",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		schedules: [
			"Someday from 15:00 to 19:00 (Group 1)",
			"Some other day from 9:00 to 13:00 (Group 2)"
		],
		image: "/images/visits/avant.png"
	}, {
		name: "Cuauhtémoc",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		schedules: [
			"Someday from 13:00 to 17:00 (Group 1)",
			"Some other day from 9:00 to 13:00 (Group 2)"
		],
		image: "/images/visits/cuauhtemoc.png"
	}, {
		name: "Santa Lucía",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		schedules: [
			"Someday from 8:00 to 12:00 (Group 1)"
		],
		image: "/images/visits/santa.png"
	}, {
		name: "Sigma",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		schedules: [
			"Someday from 8:00 to 12:00 (Group 1)",
			"Some other day from 8:00 to 12:00 (Group 2)"
		],
		image: "https://seeklogo.com/images/S/Sigma-logo-1351D98B32-seeklogo.com.png"
	}
]

router.workshops = [
	{
		name: "Plantas como Biorreactor",
		teacher: "Someone",
		body: "Este taller está enfocado en la demostración de las plantas para la obtención de energía, sus razones y métodos de extracción.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)",
			"Some other day from 11:00 to 13:00 (Group 2)"
		]
	}, {
		name: "Fitocosméticos",
		teacher: "",
		body: "Conoce cómo las grandes industrias de cosméticos fabrican estos productos. Dándole importancia al cuidado de la piel, se harán productos de maquillaje con base natural para explorar más sobre los posibles usos de distintas materias primas.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Fabricación de Dispositivos Microfluídicos",
		teacher: "",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)",
			"Some other day from 10:00 to 12:00 (Group 2)",
		]
	}, {
		name: "Elaboración de cerveza con enfoque industrial y casero",
		teacher: "",
		body: "En este taller aprenderás a hacer cerveza de manera artesanal y conocer sobre la metodología e ingredientes involucrados al producir una de las bebidas más consumidas en el ámbito comercial. Se cuenta con dos talleres, con enfoques en el área industrial y otro en el casero.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Separaciones Moleculares de Compuestos Bioactivos",
		teacher: "",
		body: "El taller está dedicado a la realización de demostrativa de sílica gel en columna, cromatografía en capa delgada con solventes de diferentes polaridades y separación de compuestos bioactivos.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Bioinformática y genómica: mutaciones cancerígenas",
		teacher: "",
		body: "Uso de la bioinformática y genómica en la visualización 3D de mutaciones somáticas más frecuentes en cáncer.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Nieve con nitrógeno “dippin dots”",
		teacher: "",
		body: "Utilizaremos una rama de la cocina molecular para innovar en la textura y presentación de la nieve, esta se crea con nitrógeno liquido; este taller te dará la experiencia de elaborar tu propio producto.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Óptica moderna",
		teacher: "",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Cocina molecular",
		teacher: "",
		body: "También conocida como culinology, este taller hace uso de químicos o combina aquellos que tengan compatibilidad en su composición molecular para elaborar platillos diferentes e innovadores; se busca que aquella persona que lo consuma tenga una nueva experiencia en su paladar. En este taller tendrás la oportunidad de aprender sobre técnicas donde se transforman texturas y sabores para obtener un nuevo alimento",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Síntesis de nanoestructuras",
		teacher: "",
		body: "Pronto te contaremos de qué tratará...",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Dummy",
		teacher: "",
		body: "Lorem ipsum",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Dummy",
		teacher: "Lorem ipsum",
		body: "",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}, {
		name: "Dummy",
		teacher: "Lorem ipsum",
		body: "",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Someday from 15:00 to 17:00 (Group 1)"
		]
	}
]

module.exports = router