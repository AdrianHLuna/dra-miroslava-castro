import type { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "s-tratamiento-para-incontinencia-urinaria",
    slug: "tratamiento-para-incontinencia-urinaria",
    name: "Tratamiento para Incontinencia Urinaria",
    description:
      "Abordaje especializado de los escapes de orina, desde la rehabilitación del piso pélvico hasta opciones quirúrgicas cuando el manejo conservador no es suficiente.",
    longDescription:
      "El tratamiento para incontinencia urinaria comienza con una valoración urológica-ginecológica que identifica si se trata de incontinencia de esfuerzo, de urgencia o mixta, ya que cada tipo responde a un manejo distinto. En la mayoría de los casos, el primer paso es la rehabilitación del piso pélvico y el entrenamiento vesical, con buenos resultados cuando se siguen de forma constante. Cuando estas medidas no son suficientes, existen opciones médicas y quirúrgicas (como slings/mallas) que se valoran de forma individual según el tipo e intensidad de la incontinencia.",
    type: "consultorio",
    duration: "Variable según el tipo de tratamiento",
    recoveryTime: "No aplica en manejo conservador",
    isPainful: false,
    benefits: [
      "Reducción o eliminación de los escapes de orina",
      "Mejora en la confianza para la actividad física y social",
      "Tratamiento adaptado al tipo específico de incontinencia",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿Cuánto tiempo toma ver mejoría con los ejercicios de piso pélvico?",
        answer:
          "Con constancia, muchas pacientes notan mejoría en 6 a 12 semanas; el seguimiento con la especialista permite ajustar la técnica y el plan si el avance es más lento.",
      },
      {
        question: "¿La incontinencia urinaria siempre se resuelve con cirugía?",
        answer:
          "No. La mayoría de los casos mejora de forma importante con manejo conservador; la cirugía se reserva para incontinencia persistente que no responde a tratamiento inicial.",
      },
    ],
    relatedConditions: ["d-incontinencia-urinaria", "d-vejiga-hiperactiva"],
    lastReviewed: "2026-11-23",
    image: "/images/services/tratamiento-para-incontinencia-urinaria.jpg",
    seo: {
      title: "Tratamiento para Incontinencia Urinaria | CDMX",
      description:
        "Rehabilitación de piso pélvico y opciones especializadas para la incontinencia urinaria con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "tratamiento incontinencia urinaria CDMX",
        "rehabilitación piso pélvico",
        "urología ginecológica",
      ],
    },
  },
  {
    id: "s-tratamiento-para-prolapso-de-organos-pelvicos",
    slug: "tratamiento-para-prolapso-de-organos-pelvicos",
    name: "Tratamiento para Prolapso de Órganos Pélvicos",
    description:
      "Manejo especializado del descenso de vejiga, útero o recto hacia la vagina, con opciones desde rehabilitación y pesario hasta cirugía reconstructiva.",
    longDescription:
      "El tratamiento del prolapso de órganos pélvicos se decide según el grado de descenso, los síntomas y las metas de cada paciente, incluyendo si desea conservar el útero o mantener la actividad sexual. En prolapsos leves a moderados, la rehabilitación de piso pélvico y el uso de un pesario vaginal suelen ser suficientes para controlar los síntomas sin cirugía. En prolapsos avanzados o sintomáticos, existen procedimientos quirúrgicos reconstructivos que devuelven el soporte pélvico adecuado.",
    type: "consultorio",
    duration: "Variable según el tratamiento elegido",
    recoveryTime: "Variable; mayor en manejo quirúrgico",
    isPainful: false,
    benefits: [
      "Alivio de la sensación de presión o bulto vaginal",
      "Mejora en la actividad física y la vida sexual",
      "Opciones conservadoras antes de considerar cirugía",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿El pesario vaginal es una solución permanente?",
        answer:
          "Puede serlo para muchas mujeres, sobre todo si prefieren evitar cirugía; requiere revisiones periódicas para ajustar el tamaño y cuidar la salud vaginal.",
      },
      {
        question: "¿Se puede prevenir que el prolapso empeore?",
        answer:
          "Sí, en buena medida: evitar el estreñimiento crónico, controlar la tos crónica y mantener el piso pélvico fortalecido ayuda a frenar su progresión.",
      },
    ],
    relatedConditions: ["d-prolapso-de-organos-pelvicos"],
    lastReviewed: "2026-11-23",
    image: "/images/services/tratamiento-para-prolapso-de-organos-pelvicos.jpg",
    seo: {
      title: "Tratamiento para Prolapso de Órganos Pélvicos | CDMX",
      description:
        "Desde pesario hasta cirugía reconstructiva: tratamiento especializado del prolapso de órganos pélvicos con la Dra. Miroslava Castro.",
      keywords: [
        "tratamiento prolapso pélvico CDMX",
        "pesario vaginal",
        "cirugía reconstructiva pélvica",
      ],
    },
  },
  {
    id: "s-tratamiento-para-menopausia",
    slug: "tratamiento-para-menopausia",
    name: "Tratamiento para Menopausia",
    description:
      "Acompañamiento médico integral de la transición menopáusica: manejo de bochornos, salud ósea, salud vaginal y valoración individualizada de terapia hormonal.",
    longDescription:
      "El tratamiento para la menopausia parte de una valoración individual de los síntomas, antecedentes de salud y preferencias de cada paciente. Incluye el manejo de bochornos y alteraciones del sueño —con terapia hormonal cuando es candidata o con alternativas no hormonales cuando no lo es—, la vigilancia de la densidad ósea, el cuidado de la salud cardiovascular y el tratamiento de la sequedad vaginal. El objetivo es que la transición menopáusica se viva con la menor cantidad de síntomas posible y con los riesgos a largo plazo bajo control.",
    type: "consultorio",
    duration: "Seguimiento continuo",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Reducción de bochornos y alteraciones del sueño",
      "Vigilancia de la salud ósea y cardiovascular",
      "Mejora de la sequedad vaginal y la calidad de vida",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿Es seguro el tratamiento hormonal en la menopausia?",
        answer:
          "Para la mayoría de las mujeres sanas que inician el tratamiento cerca del inicio de la menopausia, los beneficios superan los riesgos; la decisión siempre se individualiza según antecedentes de salud.",
      },
      {
        question: "¿Qué pasa si no soy candidata a terapia hormonal?",
        answer:
          "Existen alternativas no hormonales efectivas para manejar bochornos y otros síntomas, además de medidas específicas para la salud ósea y vaginal.",
      },
    ],
    relatedConditions: ["d-menopausia"],
    lastReviewed: "2026-11-23",
    image: "/images/services/tratamiento-para-menopausia.jpg",
    seo: {
      title: "Tratamiento para la Menopausia | Ginecóloga CDMX",
      description:
        "Acompañamiento integral de la menopausia: bochornos, salud ósea y vaginal con la Dra. Miroslava Castro en CDMX.",
      keywords: ["tratamiento menopausia CDMX", "terapia hormonal menopausia", "ginecóloga menopausia"],
    },
  },
  {
    id: "s-histerectomia",
    slug: "histerectomia",
    name: "Histerectomía",
    description:
      "Cirugía para la extirpación del útero, indicada en casos de miomatosis sintomática, sangrado abundante u otras condiciones ginecológicas que no responden a tratamiento conservador.",
    longDescription:
      "La histerectomía es la extirpación quirúrgica del útero y puede realizarse por distintas vías (vaginal, laparoscópica o abdominal) según el caso clínico. Se indica cuando condiciones como la miomatosis uterina sintomática, el sangrado uterino anormal persistente u otras alteraciones ginecológicas no mejoran con tratamiento médico conservador y afectan de forma importante la calidad de vida. Es una decisión que se toma siempre de forma individualizada, considerando la edad, el deseo de fertilidad futura y las alternativas disponibles.",
    type: "hospitalario",
    duration: "1 a 3 horas según la vía quirúrgica",
    recoveryTime: "2 a 6 semanas según la vía quirúrgica",
    isPainful: true,
    benefits: [
      "Resolución definitiva del sangrado o dolor asociado a la causa de fondo",
      "Elección de la vía quirúrgica menos invasiva posible según el caso",
    ],
    postOpRecommendations: [
      "Reposo relativo durante las primeras semanas",
      "Evitar esfuerzo físico y levantar peso durante la recuperación indicada",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Vías: "Vaginal, laparoscópica o abdominal",
    },
    faqs: [
      {
        question: "¿La histerectomía siempre implica retirar los ovarios?",
        answer:
          "No necesariamente. La decisión de conservar o retirar los ovarios se evalúa de forma independiente según la edad, el motivo de la cirugía y el riesgo oncológico de cada paciente.",
      },
      {
        question: "¿Después de una histerectomía ya no hay menstruación?",
        answer:
          "Correcto, al retirar el útero la menstruación cesa de forma definitiva; si los ovarios se conservan, la función hormonal continúa hasta la edad natural de la menopausia.",
      },
    ],
    relatedConditions: ["d-miomatosis-uterina"],
    lastReviewed: "2026-11-23",
    image: "/images/services/histerectomia.jpg",
    seo: {
      title: "Histerectomía | Cirugía Ginecológica en CDMX",
      description:
        "Extirpación quirúrgica del útero para miomatosis u otras condiciones ginecológicas. Valoración con la Dra. Miroslava Castro en CDMX.",
      keywords: ["histerectomía CDMX", "cirugía de útero", "ginecóloga histerectomía"],
    },
  },
  {
    id: "s-biopsia-de-cervix",
    slug: "biopsia-de-cervix",
    name: "Biopsia de Cérvix",
    description:
      "Toma de una pequeña muestra de tejido del cuello uterino para estudio en microscopio, generalmente como seguimiento de un Papanicolau o colposcopia con hallazgos a confirmar.",
    longDescription:
      "La biopsia de cérvix consiste en tomar una pequeña muestra de tejido del cuello uterino, habitualmente guiada por colposcopia, para su análisis en el laboratorio de patología. Se realiza cuando un Papanicolau o una colposcopia muestran cambios celulares que requieren confirmación diagnóstica antes de decidir un tratamiento. Es un procedimiento breve, realizado en consultorio, que permite determinar con precisión la naturaleza de las células del cuello uterino.",
    type: "consultorio",
    duration: "10 a 15 minutos",
    recoveryTime: "24 a 48 horas de molestia leve",
    isPainful: true,
    benefits: [
      "Diagnóstico preciso de alteraciones del cuello uterino",
      "Procedimiento breve, realizado en consultorio",
    ],
    postOpRecommendations: [
      "Evitar relaciones sexuales y duchas vaginales los días indicados",
      "Esperar un leve sangrado o manchado los días posteriores",
    ],
    faqs: [
      {
        question: "¿Una biopsia de cérvix anormal significa cáncer?",
        answer:
          "No necesariamente. La mayoría de los resultados anormales corresponden a cambios celulares tratables antes de llegar a un cáncer; el resultado específico determina el siguiente paso.",
      },
      {
        question: "¿Duele la biopsia de cérvix?",
        answer:
          "Se percibe como un cólico breve similar al dolor menstrual durante el procedimiento, que suele ceder poco después de terminar.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/biopsia-de-cervix.jpg",
    seo: {
      title: "Biopsia de Cérvix | Ginecóloga en CDMX",
      description:
        "Toma de biopsia de cuello uterino tras hallazgos en Papanicolau o colposcopia, con la Dra. Miroslava Castro en CDMX.",
      keywords: ["biopsia de cérvix CDMX", "biopsia cuello uterino", "ginecóloga biopsia"],
    },
  },
  {
    id: "s-biopsia-de-endometrio",
    slug: "biopsia-de-endometrio",
    name: "Biopsia de Endometrio",
    description:
      "Toma de una muestra del revestimiento interno del útero para estudio, indicada ante sangrado uterino anormal o para descartar alteraciones endometriales.",
    longDescription:
      "La biopsia de endometrio consiste en obtener una pequeña muestra del tejido que recubre el interior del útero, mediante un dispositivo delgado que se introduce a través del cuello uterino. Se indica principalmente ante sangrado uterino anormal, sangrado posmenopáusico o engrosamiento endometrial detectado por ultrasonido, para determinar la causa exacta antes de definir un tratamiento. Es un procedimiento ambulatorio que no requiere anestesia general.",
    type: "consultorio",
    duration: "5 a 10 minutos",
    recoveryTime: "24 horas de molestia tipo cólico leve",
    isPainful: true,
    benefits: [
      "Diagnóstico certero de la causa del sangrado uterino anormal",
      "Procedimiento rápido, sin necesidad de hospitalización",
    ],
    postOpRecommendations: [
      "Esperar un leve sangrado o cólico el mismo día del procedimiento",
      "Evitar relaciones sexuales y duchas vaginales según indicación",
    ],
    faqs: [
      {
        question: "¿Cuándo se indica una biopsia de endometrio?",
        answer:
          "Principalmente ante sangrado uterino fuera de lo habitual, sangrado después de la menopausia o un engrosamiento del endometrio visto por ultrasonido que requiere confirmación.",
      },
      {
        question: "¿Se necesita anestesia para la biopsia de endometrio?",
        answer:
          "No. Se realiza en consultorio, en la mayoría de los casos sin necesidad de anestesia, aunque puede indicarse un analgésico previo si hay sensibilidad al procedimiento.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/biopsia-de-endometrio.jpg",
    seo: {
      title: "Biopsia de Endometrio | CDMX",
      description:
        "Estudio del revestimiento uterino ante sangrado anormal, con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["biopsia de endometrio CDMX", "sangrado uterino anormal", "ginecóloga biopsia"],
    },
  },
  {
    id: "s-colposcopia",
    slug: "colposcopia",
    name: "Colposcopia",
    description:
      "Examen visual ampliado del cuello uterino, la vagina y la vulva para identificar lesiones que no se ven a simple vista, generalmente tras un Papanicolau con hallazgos a confirmar.",
    longDescription:
      "La colposcopia utiliza un instrumento óptico con aumento (colposcopio) para examinar de cerca el cuello uterino, la vagina y la vulva, permitiendo identificar áreas con cambios celulares que no son visibles a simple vista. Se realiza habitualmente como seguimiento de un resultado anormal en el Papanicolau, y durante el mismo procedimiento se puede tomar una biopsia dirigida si se identifica una zona sospechosa, lo que agiliza el diagnóstico.",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Visualización detallada de lesiones no visibles a simple vista",
      "Posibilidad de biopsia dirigida en el mismo procedimiento",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿La colposcopia es dolorosa?",
        answer:
          "No suele ser dolorosa; la mayoría de las pacientes describe una molestia leve similar a la de un Papanicolau, un poco mayor si se toma biopsia durante el mismo procedimiento.",
      },
      {
        question: "¿Siempre se toma biopsia durante la colposcopia?",
        answer:
          "No siempre. Solo se toma biopsia si se identifica una zona con cambios que ameritan confirmación por patología; si todo se ve normal, el procedimiento termina sin necesidad de ella.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/colposcopia.jpg",
    seo: {
      title: "Colposcopia | Ginecóloga en CDMX",
      description:
        "Examen de seguimiento tras un Papanicolau con hallazgos anormales, con la Dra. Miroslava Castro en CDMX.",
      keywords: ["colposcopia CDMX", "seguimiento Papanicolau anormal", "ginecóloga colposcopia"],
    },
  },
  {
    id: "s-ultrasonido-obstetrico",
    slug: "ultrasonido-obstetrico",
    name: "Ultrasonido Obstétrico",
    description:
      "Estudio de imagen para la vigilancia del embarazo: confirma viabilidad, calcula edad gestacional, evalúa el crecimiento fetal y detecta alteraciones a lo largo de la gestación.",
    longDescription:
      "El ultrasonido obstétrico es la herramienta principal de vigilancia durante el embarazo. Según la etapa gestacional, permite confirmar la viabilidad del embarazo, calcular con precisión la edad gestacional y la fecha probable de parto, evaluar el crecimiento y bienestar fetal, revisar la anatomía del bebé y vigilar la placenta y el líquido amniótico. Forma parte del control prenatal habitual en los distintos trimestres del embarazo.",
    type: "consultorio",
    duration: "20 a 40 minutos según el trimestre",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Vigilancia del bienestar y crecimiento fetal",
      "Detección temprana de alteraciones del embarazo",
      "Cálculo preciso de la edad gestacional",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿Cuántos ultrasonidos obstétricos son necesarios durante el embarazo?",
        answer:
          "El número varía según cada embarazo, pero habitualmente se realiza al menos uno por trimestre; el médico indicará estudios adicionales si el embarazo lo requiere.",
      },
      {
        question: "¿El ultrasonido obstétrico tiene algún riesgo para el bebé?",
        answer:
          "No. Es un estudio seguro, ampliamente utilizado durante todo el embarazo, que no utiliza radiación y no representa un riesgo conocido para el bebé.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/ultrasonido-obstetrico.jpg",
    seo: {
      title: "Ultrasonido Obstétrico | Control Prenatal CDMX",
      description:
        "Vigilancia del embarazo con ultrasonido obstétrico en cada trimestre, con la Dra. Miroslava Castro en CDMX.",
      keywords: ["ultrasonido obstétrico CDMX", "control prenatal", "ginecóloga embarazo"],
    },
  },
  {
    id: "s-papanicolau",
    slug: "papanicolau",
    name: "Papanicolau",
    description:
      "Estudio de detección oportuna que analiza células del cuello uterino para identificar cambios tempranos relacionados con el virus del papiloma humano, antes de que se conviertan en cáncer.",
    longDescription:
      "El Papanicolau es el estudio de tamizaje por excelencia para la detección oportuna de cáncer cervicouterino. Consiste en tomar una pequeña muestra de células del cuello uterino durante una exploración ginecológica rutinaria, para analizarlas en el laboratorio en busca de cambios celulares tempranos, frecuentemente relacionados con la infección por virus del papiloma humano. Su realización periódica es una de las medidas de prevención más efectivas en la salud de la mujer.",
    type: "consultorio",
    duration: "5 a 10 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Detección temprana de cambios celulares precancerosos",
      "Procedimiento rápido y bien tolerado",
      "Pieza clave en la prevención del cáncer cervicouterino",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿Cada cuánto debo hacerme el Papanicolau?",
        answer:
          "La frecuencia recomendada depende de la edad y los resultados previos; en términos generales se recomienda de forma anual o según el esquema que indique la ginecóloga tras el primer estudio.",
      },
      {
        question: "¿El Papanicolau duele?",
        answer:
          "No es un procedimiento doloroso; la mayoría de las pacientes solo percibe una molestia breve durante la toma de la muestra.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/papanicolau.jpg",
    seo: {
      title: "Papanicolau | Detección Oportuna CDMX",
      description:
        "Detección oportuna de cáncer cervicouterino con Papanicolau, con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["Papanicolau CDMX", "detección cáncer cervicouterino", "ginecóloga Papanicolau"],
    },
  },
  {
    id: "s-ecografia",
    slug: "ecografia",
    name: "Ecografía Ginecológica",
    description:
      "Estudio de imagen (pélvico o transvaginal) para evaluar útero y ovarios, útil en el diagnóstico de miomas, quistes ováricos, endometriosis y otras condiciones ginecológicas.",
    longDescription:
      "La ecografía ginecológica, realizada por vía pélvica o transvaginal según el caso, permite observar con detalle el útero, el endometrio y los ovarios. Es una herramienta diagnóstica central para identificar miomas uterinos, quistes ováricos, signos sugestivos de endometriosis, alteraciones del endometrio y otras condiciones ginecológicas, además de ser parte del seguimiento habitual en consultas de rutina.",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Diagnóstico de miomas, quistes ováricos y otras alteraciones",
      "Estudio no invasivo y sin radiación",
      "Resultado disponible en la misma consulta",
    ],
    postOpRecommendations: [],
    faqs: [
      {
        question: "¿Qué diferencia hay entre una ecografía pélvica y una transvaginal?",
        answer:
          "La ecografía pélvica se realiza con la vejiga llena a través del abdomen, mientras que la transvaginal ofrece imágenes más detalladas del útero y los ovarios; la especialista decide cuál es la más adecuada según el motivo del estudio.",
      },
      {
        question: "¿La ecografía transvaginal es incómoda?",
        answer:
          "Puede generar una leve molestia, similar a una exploración ginecológica habitual, pero no se considera un estudio doloroso.",
      },
    ],
    relatedConditions: [
      "d-endometriosis",
      "d-miomatosis-uterina",
      "d-quistes-ovaricos",
      "d-sindrome-de-ovario-poliquistico",
    ],
    lastReviewed: "2026-11-23",
    image: "/images/services/ecografia.jpg",
    seo: {
      title: "Ecografía Ginecológica | CDMX",
      description:
        "Diagnóstico por ecografía pélvica y transvaginal de miomas, quistes y otras condiciones ginecológicas en CDMX.",
      keywords: ["ecografía ginecológica CDMX", "ultrasonido transvaginal", "ginecóloga ecografía"],
    },
  },
  {
    id: "s-cesarea",
    slug: "cesarea",
    name: "Cesárea",
    description:
      "Cirugía para el nacimiento del bebé a través de una incisión abdominal y uterina, indicada cuando el parto vaginal no es seguro para la madre o el bebé.",
    longDescription:
      "La cesárea es un procedimiento quirúrgico que permite el nacimiento del bebé a través de una incisión en el abdomen y el útero. Puede ser programada, cuando existen condiciones médicas que hacen más seguro el nacimiento por esta vía, o realizarse de urgencia durante el trabajo de parto si surgen complicaciones. La decisión siempre se basa en la seguridad de la madre y el bebé, considerando el contexto clínico específico de cada embarazo.",
    type: "hospitalario",
    duration: "45 a 60 minutos aproximadamente",
    recoveryTime: "4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Nacimiento seguro cuando el parto vaginal implica un riesgo mayor",
      "Posibilidad de programación en casos indicados",
    ],
    postOpRecommendations: [
      "Reposo relativo durante las primeras semanas",
      "Evitar esfuerzo físico y levantar objetos pesados durante la recuperación",
      "Vigilancia de la herida quirúrgica según indicación médica",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "Regional, en la mayoría de los casos",
    },
    faqs: [
      {
        question: "¿Una cesárea previa siempre obliga a otra cesárea en el siguiente embarazo?",
        answer:
          "No en todos los casos. Dependiendo del tipo de incisión uterina previa y otros factores, algunas pacientes son candidatas a un parto vaginal después de una cesárea; se evalúa de forma individual.",
      },
      {
        question: "¿Cuándo se indica una cesárea?",
        answer:
          "Se indica cuando el parto vaginal representa un riesgo mayor para la madre o el bebé, como en presentaciones anómalas, sufrimiento fetal o ciertas condiciones médicas del embarazo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/cesarea.jpg",
    seo: {
      title: "Cesárea | Atención Obstétrica en CDMX",
      description:
        "Cirugía de cesárea programada o de urgencia con atención obstétrica especializada en Ciudad de México.",
      keywords: ["cesárea CDMX", "parto por cesárea", "ginecóloga obstetra CDMX"],
    },
  },
  {
    id: "s-atencion-del-parto",
    slug: "atencion-del-parto",
    name: "Atención del Parto",
    description:
      "Acompañamiento médico durante el trabajo de parto y el nacimiento por vía vaginal, con vigilancia continua de la madre y el bebé.",
    longDescription:
      "La atención del parto comprende el acompañamiento médico durante todo el trabajo de parto y el nacimiento por vía vaginal, con vigilancia continua del bienestar materno y fetal. Incluye la valoración del progreso del trabajo de parto, el manejo del dolor, la atención del nacimiento y los cuidados inmediatos tras el parto, tanto para la madre como para el recién nacido, con la posibilidad de resolver por cesárea si durante el proceso surge una indicación médica para ello.",
    type: "hospitalario",
    duration: "Variable, de varias horas",
    recoveryTime: "1 a 2 semanas en un parto sin complicaciones",
    isPainful: true,
    benefits: [
      "Vigilancia continua de la madre y el bebé durante el trabajo de parto",
      "Acompañamiento médico especializado en cada etapa del nacimiento",
    ],
    postOpRecommendations: [
      "Reposo relativo durante los primeros días",
      "Vigilancia del sangrado y la recuperación posparto según indicación",
    ],
    faqs: [
      {
        question: "¿Se puede planear el parto con anticipación?",
        answer:
          "Sí, el seguimiento del embarazo permite definir con tiempo el plan de nacimiento, aunque el trabajo de parto puede requerir ajustes según cómo evolucione el proceso real.",
      },
      {
        question: "¿Qué pasa si durante el trabajo de parto se necesita una cesárea?",
        answer:
          "Si surge una indicación médica durante el trabajo de parto, se resuelve por cesárea para proteger la seguridad de la madre y el bebé; esta posibilidad siempre se explica desde el control prenatal.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/atencion-del-parto.jpg",
    seo: {
      title: "Atención del Parto | Obstetra en CDMX",
      description:
        "Acompañamiento médico durante el trabajo de parto y el nacimiento, con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["atención del parto CDMX", "obstetra parto natural", "ginecóloga obstetra"],
    },
  },
  {
    id: "s-legrado-uterino",
    slug: "legrado-uterino",
    name: "Legrado Uterino",
    description:
      "Procedimiento para retirar tejido del interior del útero, indicado en aborto incompleto, sangrado uterino anormal persistente o como parte del estudio de ciertas condiciones ginecológicas.",
    longDescription:
      "El legrado uterino es un procedimiento que consiste en retirar tejido del revestimiento interno del útero, ya sea con fines terapéuticos —como en un aborto incompleto o sangrado uterino persistente— o diagnósticos, cuando se requiere una muestra más completa que la obtenida por biopsia de endometrio. Se realiza bajo sedación o anestesia, generalmente de forma ambulatoria, con una recuperación relativamente breve.",
    type: "ambulatorio",
    duration: "15 a 30 minutos",
    recoveryTime: "Pocos días, con cólicos leves a moderados",
    isPainful: true,
    benefits: [
      "Resolución de sangrado uterino persistente o aborto incompleto",
      "Obtención de una muestra de tejido más completa para estudio",
    ],
    postOpRecommendations: [
      "Reposo relativo el día del procedimiento",
      "Vigilancia de sangrado y fiebre en los días posteriores",
      "Evitar relaciones sexuales y duchas vaginales según indicación",
    ],
    faqs: [
      {
        question: "¿El legrado uterino requiere hospitalización?",
        answer:
          "Generalmente no; en la mayoría de los casos se realiza de forma ambulatoria, con alta el mismo día una vez pasado el efecto de la sedación o anestesia.",
      },
      {
        question: "¿El legrado uterino afecta la fertilidad futura?",
        answer:
          "Un legrado realizado de forma correcta y sin complicaciones no suele afectar la fertilidad futura; es importante el seguimiento médico si se repite en más de una ocasión.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/services/legrado-uterino.jpg",
    seo: {
      title: "Legrado Uterino | Ginecóloga en CDMX",
      description:
        "Procedimiento de legrado uterino ante aborto incompleto o sangrado persistente, con la Dra. Miroslava Castro en CDMX.",
      keywords: ["legrado uterino CDMX", "aborto incompleto tratamiento", "ginecóloga legrado"],
    },
  },
];
