const router = []; 

router.panelists = [
	{
		name: "Elizabeth Wayne", 
		conference: {
				name: "Células inmunes, el vehículo para tratamientos contra el cáncer",
				caption: "Aprovechamiento de las células del sistema inmune como medio de transporte para el tratamiento contra el cáncer. ",
				description: "Las células del sistema inmune se acumulan en tejidos con cáncer a un ritmo mucho más alto que cualquier nano-partícula sintética. Creando nano-partículas que contengan moléculas para el tratamiento contra cáncer y que estén diseñadas para adherirse a las células inmunes, se obtiene un mecanismo de entrega de medicamento mucho más efectivo que todos los métodos actuales para atacar células cancerígenas"
			},
		schedule: "Horario por confirmar",
		captions: [
			"Doctora en biomedicina por Universidad de Cornell • ",
			"Trabajo de investigación enfocado al uso de nanotecnología en tratamientos contra el cáncer • ",
			"Promotora de la inclusión de las mujeres en la comunidad científica"
		],
		image: "/images/panelists/wayne.jpg"
	}, {
		name: "Dr. Germán Buitrón",
		conference: {
				name: "Energía limpia a partir de residuos",
				caption: "Tratamiento biológico de aguas residuales y producción de biocombustibles gaseosos a partir de residuos.",
				description: "Tratamiento de aguas residuales; Cinética, bioquímica y microbiología de la degradación de compuestos tóxicos; Producción de hidrógeno y electricidad a partir de residuos. \n La producción de biocombustibles a partir de microalgas es uno de sus proyectos vigentes. Un litro de biodiesel actualmente, en proceso industrial, cuesta 27 veces lo que un litro de diésel obtenido del petróleo. Entonces, en lugar de producir biodiesel, se interesó en la producción de biocombustibles gaseosos: metano e hidrógeno, por medio del uso de microalgas para el tratamiento de aguas residuales. "
			},
		schedule: "Horario por confirmar",
		captions: [
			"Coordinador del Laboratorio de Investigación en Procesos Avanzados de Tratamiento de Aguas • ",
			"Investigador Nivel 3 del SNI • ",
			"112 publicaciones en revistas internacionales indizadas y alrededor de 450 publicaciones en memorias de congresos • ",
			"Miembro de la Academia Mexicana de Ciencias, de la Sociedad Mexicana de Biotecnología y Bioingeniería y de la International Water Association"
		],
		image: "/images/panelists/buitron.jpg"
	}, {
		name: "Jesús Tamez-Duque",
		conference: {
				name: "Exoesqueletos: Un vistazo hacia el futuro",
				caption: "Experiencia humana mejorada por la tecnología mediante el desarrollo e integración de interfaces hombre-máquina. ",
				description: "Hablará de su experiencia en la Investigación centrada en BCI para aplicaciones en Biomecatrónica, su investigación colaborativa entre el Tec de Monterrey y la Universidad de Houston. Así como de su experiencia en Wearobot, organización en la que colaboró diseñando y construyendo robots portátiles que se pueden usar como dispositivos de ayuda al movimiento, rehabilitación o de aumento humano."
			},
		schedule: "Horario por confirmar",
		captions: [
			"Fundador y  CEO en INDI Ingeniería y Diseño • ",
			"Desarrollador de 2 patentes y 5 publicaciones • ",
			"Desarrollador de Lead BCI • ",
			"Certificaciones: Currículo de investigación humana. Investigadores de biomedicina y física • ",
			"Ganador del Premio Rómulo Garza 2017"
		],
		image: "/images/panelists/tamez.jpg"
	}, {
		name: "Jesús Tamez-Duque",
		conference: {
				name: "¿El arte controla la mente o viceversa?",
				caption: "Combinar el conocimiento científico, tecnológico y artístico para crear un mundo funcional, asombroso e inspirador.",
				description: "Centrado en la innovación, la investigación y el desarrollo. Dirige un estudio interdisciplinario de interfaz hombre-máquina llamado INDI, desarrollando proyectos para empresas e instituciones con impacto internacional. \n Apoya a los fabricantes y empresarios enfocados en la innovación social; desarrolla y asesora proyectos dentro del grupo de Biomecatrónica en el Tecnológico de Monterrey y en colaboración con el Laboratorio para Sistemas de Interfaz Cerebro-Máquina No Invasivos de la Universidad de Houston, específicamente relacionado con Exoesqueletos Desarrollados e Interfaces de Computadora Cerebral."
			},
		schedule: "Horario por confirmar",
		captions: [
			"Actualmente trabaja en el desarrollo de exoesqueletos robóticos para asistencia de movimiento en aplicaciones personales e industriales, así como en la integración de dispositivos de registro de señales neuronales para instalaciones artísticas."
		],
		image: "/images/panelists/tamez.jpg"
	}, {
		name: "Por confirmar", 
		conference: {
				name: "Por confirmar",
				caption: "",
				description: ""
			},
		schedule: "Horario por confirmar",
		captions: ["Conferencista, fecha y hora aún por confirmar                                     "],
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
		name: "Scintia",
		body: "",
		schedules: "",
		image: "/images/business/scintia.png"
	}, {
		name: "Aluz",
		body: "Formada en base a la idea de crear una empresa que brindara formas prácticas y económicas para ahorrar energía. Comenzaron con el asesoramiento a negocios con sus necesidades energéticas. Desde entonces se han ido expandiendo por todo el territorio nacional. Entre sus artículos se encuentran: celdas solares, ecotecnologías, monitoreo y control, ahorro de agua  y aislamiento térmico.",
		schedules: "9 de marzo",
		image: "/images/business/aluz.png"
	}, {
		name: "Kinetech Power Systems",
		body: ": Compañía visionaria en la innovación y el desarrollo de tecnología esencialmente en almacenamiento de energía. Ha creado así un sistema  de bajo costo y de flexible duración, también conocido como batería mecánica,  proporcionando energía no tóxica y amigable con el medio ambiente. En base a este desarrollo crearon un sistema de volante híbrido compuesto de alta velocidad reduciendo su costo sin disminuir su eficiencia.",
		schedules: "",
		image: "/images/business/kinetech.png"
	}, {
		name: "Global Nano Additives",
		body: "Empresa dedicada al desarrollo de nano aditivos para lubricación de presiones y temperaturas extremas en el sector industrial de cortes de metales, rolado de tubos y forjado. Sus productos se caracterizan por su eficiencia, sustentabilidad y no generadores de residuos tóxicos. Es considerada como la primer Empresa a nivel mundial en desarrollar, producir y comercializar aditivos lubricantes basados en nanotecnología y amigables con el medio ambiente",
		schedules: "",
		image: "/images/business/gna.png"
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
		body: "Esta es una empresa mexicana de dulces de tamarindo y golosinas. En esta visita podrás aprender sobre los procesos de elaboración de todos estos productos y todos sus procedimientos de calidad, cuidado e higiene. La empresa utiliza tecnología avanzada en el área de procesado y empaquetado, permitiéndolos ser competentes a nivel internacional.",
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
		image: "/images/workshops/nanoparticulas.jpg",
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
		name: "Nanoestructuras en la industria cosmética y su aplicación en cremas para la piel",
		teacher: "Laura Romero",
		body: "Utilizaremos una rama de la cocina molecular para innovar en la textura y presentación de la nieve, esta se crea con nitrógeno liquido; este taller te dará la experiencia de elaborar tu propio producto.",
		image: "/images/workshops/nanoestructuras.jpg",
		schedules: [
			"Jueves 8 - 15:30 a 17:30 hrs"
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
		name: "Gastronomía molecular",
		teacher: "Esther Pérez Carrillo",
		body: "También conocida como culinology, hace uso de químicos o combina aquellos que tengan compatibilidad en su composición molecular para elaborar platillos diferentes e innovadores. Se busca que aquel que lo consuma tenga una nueva experiencia en su paladar. En este taller tendrás la oportunidad de aprender sobre técnicas donde se transforman texturas y sabores para obtener un nuevo alimento.",
		image: "/images/workshops/gastronomia.jpg",
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
		image: "/images/workshops/cheveindustrial.jpg",
		schedules: [
			"Jueves 8 - 7:30 a 11 hrs",
			"Jueves 8 - 10 a 13:30 hrs"
		]
	}, {
		name: "Conservación de alimentos con presiones hidrostáticas",
		teacher: "Zamantha Escobedo Avellaneda",
		body: "La alta presión hidrostática es una tecnología de gran interés para la industria alimentaria debido a que se ha comprobado que es mucho más efectiva que otros métodos utilizados para la conservación de alimentos. Este método favorece y mejora la calidad sensorial y la conservación de los alimentos, sin poner en riesgo la pérdida de sus nutrientes y sabores. En este taller conocerás los principios (principio isostático) de la tecnología y los mecanismos implicados en la inactivación microbiana y enzimática en alimentos.",
		image: "/images/workshops/conservacion.jpg",
		schedules: [
			"Miércoles 7 - 15 a 17 hrs"
		]
	}, {
		name: "Diferentes funciones de las proteínas como el huevo",
		teacher: "Aurora Valdez y Hugo Mújica",
		body: "El huevo es uno de los alimentos de origen animal que contiene todos los aminoácidos esenciales en las proporciones exactas que necesita el organismo para el crecimiento óptimo de los tejidos musculares. En este taller se conocerán muchas de las diferentes funciones que tienen las proteínas en la industria alimenticia, principalmente el uso del huevo y su importancia para esta.",
		image: "/images/workshops/funcionesproteina.jpg",
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