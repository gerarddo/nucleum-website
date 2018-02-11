const router = []; 

router.panelists = [
	{
		name: "Elizabeth Wayne", 
		conference: {
				name: "Conference name",
				caption: "Short text about conference",
				description: "Long text about conference. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
			},
		// body: "Investigación en nanotecnología contra el cáncer. Su laboratorio se especializa en crear tratamientos que enlazan las células inmunes, los primeros en responder a las amenazas en tu cuerpo cuerpo, centrados precisamente en las células cancerosas sin dañar las sanas.",
		schedule: "Horario por confirmar",
		caption: "Reconocida como TED Fellow 2017 por su investigación en nanotecnología del cáncer y sus esfuerzos para amplificar las voces de las mujeres en liderazgo y educación superior. ",
		image: "/images/panelists/wayne.jpg"
	}, {
		name: "Germán Buitrón",
		conference: {
				name: "Conference name",
				caption: "Short text about conference",
				description: "Long text about conference"
			},
		// body: "Nos hablará de operación eficiente de bio-reactores para el tratamiento de aguas; producción biológica de hidrógeno, metano y electricidad a partir de residuos; biodegradación de efluentes inhibitorios; uso de sistemas microalga-bacteria para el tratamiento de aguas y valorización de la biomasa.",
		schedule: "Horario por confirmar",
		caption: "Ingeniero Ambiental especializado en Energía.",
		image: "/images/panelists/buitron.jpg"
	}, {
		name: "Jesús Tamez-Duque",
		conference: {
				name: "Conference name",
				caption: "Short text about conference",
				description: "Long text about conference"
			},
		// body: "Desarrolla e integra interfaces, técnicas, artísticas y máquinas-humanas personales; su trabajo se centra principalmente con exoesqueletos.",
		schedule: "Horario por confirmar",
		caption: "Fundador y CEO: INDI Ingeniería y Tech-Enhanced Human Experience",
		image: "/images/panelists/tamez.jpg"
	}, {
		name: "Por confirmar",
		conference: {
				name: "Conference name",
				caption: "Short text about conference",
				description: "Long text about conference"
			},
		// body: "",
		schedule: "Horario por confirmar",
		caption: "Conferencista, fecha y hora aún por confirmar                                     ",
		image: "/images/panelists/conference-test.png"
	}, {
		name: "Por confirmar", 
		conference: {
				name: "Conference name",
				caption: "Short text about conference",
				description: "Long text about conference"
			},
		// body: "",
		schedule: "Horario por confirmar",
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
			"Miércoles 7 - 15 a 17 hrs"
		],
		image: "/images/visits/santa.png"
	}, {
		name: "Avant Santé",
		body: "Esta empresa provee soluciones clínicas y analíticas enfocadas a la investigación farmacológica. Ayudan a compañías farmacéuticas en su búsqueda de más y mejores medicamentos para la población. La visita dará a los alumnos un vistazo a este extenso campo de trabajo.",
		schedules: [
			"Jueves 8 - 15:30 a 17:30 hrs"
		],
		image: "/images/visits/avant.png"
	}, {
		name: "Cervecería Cuauhtémoc Moctezuma",
		body: "En esta visita los participantes aprenderán sobre la fundación, historia e impacto de esta gran empresa mexicana, así como su amplio portafolio de cervezas conocidas a nivel internacional. Conocerán el proceso de elaboración de cerveza, el proceso de envasado y cómo servirla perfectamente.",
		schedules: [
			"Viernes 9 - 12:30 a 14:30 hrs"
		],
		image: "/images/visits/cuauhtemoc.png"
	}, {
		name: "Zumba Pica",
		body: "Pronto te contaremos de qué tratará…",
		schedules: [
			"Horario por confirmar"
		],
		image: "/images/visits/zumbapica.png"
	}
]

router.workshops = [
	{
		name: "Síntesis verde de nanopartículas metálicas de plata y oro",
		teacher: "Jorge Luis Cholula",
		body: "Uso de materia verde como plantas, semillas o cortezas para la obtención de nanopartículas metálicas. Este tipo de nanopartículas se consideran de gran interés gracias a sus propiedades antibacterianas, por lo que sus aplicaciones van enfocadas a la detección y al tratamiento de enfermedades en plantas y humanos causadas por virus o bacterias.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Viernes 9 - 11 a 13 hrs"
		]
	}, {
		name: "Plantas como Biorreactor",
		teacher: "Jorge Gutiérrez",
		body: "Taller enfocado a la obtención de energía por medio de plantas. Se explicarán sus razones y métodos de extracción. En este taller aprenderás sobre las nuevas tendencias en el área de agro energía y podrás apreciar todos los tipos de plantas que son candidatas para estos procesos. ",
		image: "/images/workshops/biorreactor.jpg",
		schedules: [
			"Viernes 9 - 8 a 10 hrs"
		]
	}, {
		name: "Separaciones Moleculares de Compuestos Bioactivos ",
		teacher: "Bertha Barba Dávila",
		body: "Demostrativa de sílica gel en columna cromatografía en capa delgada con solventes de diferentes polaridades y explicación previa de separación de compuestos bioactivos.",
		image: "/images/workshops/separaciones.jpg",
		schedules: [
			"Miércoles 7 - 15 a 17 hrs"
		]
	}, {
		name: "Fitocosméticos",
		teacher: "María del Socorro Tamez",
		body: "Conoce cómo las grandes industrias de cosméticos fabrican estos productos. Dándole importancia al cuidado de la piel, se harán productos de maquillaje con base natural para explorar más sobre los posibles usos de distintas materias primas.",
		image: "/images/workshops/fitocosmeticos.jpg",
		schedules: [
			"Jueves 8 - de 15 a 17 hrs"
		]
	}, {
		name: "Bioinformática y genómica - mutaciones cancerígenas",
		teacher: "Victor Treviño y Rocío Díaz",
		body: "En este taller aprenderás a calcular la frecuencia de mutaciones de cada gen en datos de secuenciación genómica en cáncer, a detectar aquellos con mayor frecuencia y a visualizar en 3D los posibles efectos de dichas mutaciones. Además, conocerás los métodos de secuenciación que generaron esta información y una gran cantidad de bases de datos que almacenan esta importante información de pacientes que incluye también, pacientes mexicanos.",
		image: "/images/workshops/bioinformatica.jpg",
		schedules: [
			"Miércoles 7 - 17 a 19 hrs"
		]
	}, {
		name: "Químico Forense",
		teacher: "Adolfo Caballero",
		body: "Un químico forense se encarga de identificar y caracterizar la evidencia para resolver un crimen. Este taller te llevará de la mano a descubrir el emocionante trabajo detrás de aquellos que inspiran a programas como CSI, se utiliza la ciencia y tecnología para el aspecto legal.",
		image: "/images/workshops/forense.jpg",
		schedules: [
			"Miércoles 7 - 17 a 19 hrs"
		]
	}, {
		name: 'Nieve con nitrógeno “dippin dots”',
		teacher: "Tallerista por confirmas",
		body: "Se utiliza una rama de la cocina molecular para innovar en la textura y presentación de la nieve. La nieve se elaborará desde cero y en vez de utilizar métodos convencionales para la congelación del producto se utilizara el nitrógeno líquido. El taller le dará la experiencia a los participantes de elaborar este producto.",
		image: "/images/workshops/nieve.jpg",
		schedules: [
			"Horario por confirmar"
		]
	}, {
		name: "Nanoestructuras en la industria cosmética y su aplicación en cremas para la piel",
		teacher: "Laura Romero",
		body: "Utilizaremos una rama de la cocina molecular para innovar en la textura y presentación de la nieve, esta se crea con nitrógeno liquido; este taller te dará la experiencia de elaborar tu propio producto.",
		image: "/images/workshops/nanoestructuras.jpg",
		schedules: [
			"Jueves 8 - 15:30 a 17:30 hrs"
		]
	}, {
		name: "Gastronomía molecular",
		teacher: "Esther Pérez Carrillo",
		body: "También conocida como culinology, hace uso de químicos o combina aquellos que tengan compatibilidad en su composición molecular para elaborar platillos diferentes e innovadores. Se busca que aquel que lo consuma tenga una nueva experiencia en su paladar. En este taller tendrás la oportunidad de aprender sobre técnicas donde se transforman texturas y sabores para obtener un nuevo alimento.",
		image: "/images/workshops/gastronomia.png",
		schedules: [
			"Jueves 8 - 8 a 10 hrs"
		]
	}, {
		name: "Elaboración de cerveza enfoque casero ",
		teacher: "Lautaro Fabiani",
		body: "Aprender a hacer cerveza de manera casera, un metodo rapido y facil para producir una de las bebidas más consumidas en el ámbito comercial. Conocerás todo sobre la metodología e ingredientes involucrados en su producción. Se cuenta con dos talleres de diferentes horarios.",
		image: "/images/workshops/cheve.jpg",
		schedules: [
			"Miércoles 7 - 15 a 17 hrs",
			"Miércoles 7 - 17 a 19 hrs"
		]
	}, {
		name: "Técnica de esferificación ",
		teacher: "Ana Chew",
		body: "este taller tiene un enfoque específico a la esferificación de alimentos, aprenderás todo lo que la involucra y sus metodologías. La gastronomía molecular hace uso de la química de los alimentos para saber qué tan compatibles son con ciertos químicos para poder elaborar platillos diferentes e innovadores. Esta técnica consiste en la presentación de un alimento en forma de esferas que tienen una textura blanda por fuera y que contienen líquido en su interior, produciendo una sensación curiosa y agradable al consumirla.",
		image: "/images/workshops/gastronomia-esferas.jpg",
		schedules: [
			"Jueves 8 - 8 a 10 hrs"
		]
	}, {
		name: "Producción de Cerveza industrial",
		teacher: "Santa co.",
		body: "Este taller cuenta con dos partes, una visita a la empresa en el que se dará un taller teórico y un taller práctico en el que pondrás en práctica los conceptos aprendidos durante la visita. Durante la selección de talleres se deben de seleccionar ambos para poder participar. Aprenderás a elaborar cerveza a nivel industrial, y podrás colaborar de la mano con la cervecería Santa co. para preparar un lote de cerveza en sus instalaciones.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Jueves 8 - 7:30 a 11 hrs",
			"Jueves 8 - 10 a 13:30 hrs"
		]
	}, {
		name: "Conservación de alimentos con presiones hidrostáticas",
		teacher: "Zamantha Escobedo Avellaneda",
		body: "La alta presión hidrostática es una tecnología de gran interés para la industria alimentaria debido a que se ha comprobado que es mucho más efectiva que otros métodos utilizados para la conservación de alimentos. Este método favorece y mejora la calidad sensorial y la conservación de los alimentos, sin poner en riesgo la pérdida de sus nutrientes y sabores. En este taller conocerás los principios (principio isostático) de la tecnología y los mecanismos implicados en la inactivación microbiana y enzimática en alimentos.",
		image: "/images/workshops/forense.jpg",
		schedules: [
			"Miércoles 7 - 15 a 17 hrs"
		]
	}, {
		name: "Diferentes funciones de las proteínas como el huevo",
		teacher: "Aurora Valdez y Hugo Mújica",
		body: "El huevo es uno de los alimentos de origen animal que contiene todos los aminoácidos esenciales en las proporciones exactas que necesita el organismo para el crecimiento óptimo de los tejidos musculares. En este taller se conocerán muchas de las diferentes funciones que tienen las proteínas en la industria alimenticia, principalmente el uso del huevo y su importancia para esta.",
		image: "/images/workshops/workshop-test.png",
		schedules: [
			"Miércoles 7 - 15 a 17 hrs"
		]
	},{
		name: "Coctelería molecular",
		teacher: "Magui Calixto",
		body: "Una de las ramas de la gastronomía molecular es la cocteleria molecular que con el uso de la física y la química, te permite manipular los estados de la materia, y de esta manera preparar bebidas innovadoras con nuevas formas, sensaciones y sabores, cambiando su apariencia y presentación para lograr una experiencia diferente al probarlas.",
		image: "/images/workshops/cocteleria.jpg",
		schedules: [
			"Miércoles 9 - 12 a 14 hrs"
		]
	}
]

module.exports = router