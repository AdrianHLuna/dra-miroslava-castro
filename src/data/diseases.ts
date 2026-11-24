import type { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "d-osteoporosis",
    slug: "osteoporosis",
    name: "Osteoporosis",
    technicalName: "Osteoporosis Posmenopáusica",
    colloquialNames: ["huesos frágiles", "huesos débiles"],
    description:
      "La osteoporosis es una pérdida progresiva de densidad y calidad del hueso que lo vuelve más frágil y propenso a fracturas, incluso ante caídas o golpes leves. En la mujer, el riesgo aumenta de forma importante después de la menopausia, cuando la caída de estrógeno acelera la pérdida de masa ósea. Suele avanzar de forma silenciosa durante años, sin dolor ni síntomas evidentes, hasta que una fractura —frecuentemente de cadera, muñeca o columna— revela el problema.",
    symptoms: [
      "Habitualmente no da síntomas en etapas tempranas",
      "Dolor de espalda por fracturas vertebrales no diagnosticadas",
      "Pérdida de estatura con el tiempo",
      "Postura encorvada",
      "Fracturas con traumatismos mínimos",
    ],
    causes: [
      "Disminución de estrógeno tras la menopausia",
      "Baja ingesta de calcio y vitamina D a lo largo de la vida",
      "Sedentarismo prolongado",
      "Antecedentes familiares de osteoporosis o fracturas",
    ],
    riskFactors: [
      "Mujer posmenopáusica",
      "Menopausia temprana o quirúrgica",
      "Bajo peso corporal",
      "Tabaquismo",
      "Uso prolongado de ciertos tratamientos hormonales o esteroides",
    ],
    complications: [
      "Fracturas de cadera, muñeca o columna",
      "Pérdida de movilidad e independencia tras una fractura",
      "Dolor crónico por fracturas vertebrales múltiples",
    ],
    treatments: [
      "Suplementación de calcio y vitamina D según indicación médica",
      "Ejercicio de fortalecimiento y equilibrio para reducir caídas",
      "Terapia hormonal cuando está clínicamente indicada en la menopausia",
      "Vigilancia periódica de la densidad ósea",
    ],
    faqs: [
      {
        question: "¿La osteoporosis se relaciona con la menopausia?",
        answer:
          "Sí. La caída de estrógeno que ocurre en la menopausia acelera la pérdida de masa ósea, por lo que la vigilancia de la densidad ósea es parte habitual del seguimiento ginecológico de esta etapa.",
      },
      {
        question: "¿Se puede prevenir la osteoporosis?",
        answer:
          "El riesgo se puede reducir con una ingesta adecuada de calcio y vitamina D, ejercicio regular de carga e impacto moderado desde etapas tempranas de la vida, y evitando el tabaquismo.",
      },
      {
        question: "¿Cómo se detecta la osteoporosis antes de una fractura?",
        answer:
          "Se detecta mediante un estudio de densidad mineral ósea, recomendado de forma rutinaria a partir de la menopausia o antes si existen factores de riesgo adicionales.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: [],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/osteoporosis.jpg",
    seo: {
      title: "Osteoporosis en la Mujer | Urología Ginecológica CDMX",
      description:
        "La osteoporosis avanza en silencio tras la menopausia. Conoce causas, factores de riesgo y seguimiento con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "osteoporosis en la menopausia",
        "huesos frágiles mujer CDMX",
        "densidad ósea ginecólogo",
      ],
    },
  },
  {
    id: "d-infecciones-vaginales",
    slug: "infecciones-vaginales",
    name: "Infecciones Vaginales",
    technicalName: "Vaginitis Infecciosa",
    colloquialNames: ["infección vaginal", "flujo vaginal anormal"],
    description:
      "Las infecciones vaginales son alteraciones del equilibrio natural de la flora vaginal causadas por hongos, bacterias o parásitos, que provocan molestias como irritación, ardor o cambios en el flujo. Son uno de los motivos de consulta ginecológica más frecuentes y, aunque la mayoría no son graves, requieren un diagnóstico específico porque el tratamiento varía según el microorganismo causante.",
    symptoms: [
      "Irritación o ardor vaginal",
      "Cambios en el color, olor o cantidad del flujo",
      "Comezón vulvar",
      "Molestia durante las relaciones sexuales",
      "Ardor al orinar cuando hay irritación de la zona",
    ],
    causes: [
      "Crecimiento excesivo de hongos (candidiasis)",
      "Desequilibrio de la flora bacteriana vaginal (vaginosis bacteriana)",
      "Infecciones de transmisión sexual",
      "Uso de antibióticos que alteran la flora vaginal",
    ],
    riskFactors: [
      "Embarazo",
      "Diabetes no controlada",
      "Uso de ropa húmeda o poco transpirable",
      "Duchas vaginales o productos de higiene irritantes",
      "Múltiples parejas sexuales sin protección",
    ],
    complications: [
      "Infección recurrente si no se identifica la causa exacta",
      "Molestia persistente durante las relaciones sexuales",
      "Mayor riesgo de complicaciones en el embarazo si no se trata",
    ],
    treatments: [
      "Tratamiento antimicótico o antibiótico según el microorganismo identificado",
      "Medidas de higiene íntima adecuadas",
      "Evaluación y tratamiento de la pareja cuando está indicado",
    ],
    faqs: [
      {
        question: "¿Toda infección vaginal es de transmisión sexual?",
        answer:
          "No. Muchas infecciones vaginales, como la candidiasis, se originan por un desequilibrio de la propia flora vaginal y no requieren contacto sexual para presentarse.",
      },
      {
        question: "¿Por qué las infecciones vaginales regresan después del tratamiento?",
        answer:
          "Cuando una infección se autotrata sin identificar al microorganismo exacto, es común que persista o regrese; un diagnóstico específico permite elegir el tratamiento correcto desde la primera consulta.",
      },
      {
        question: "¿Se puede prevenir una infección vaginal?",
        answer:
          "Usar ropa interior de algodón, evitar duchas vaginales y productos de higiene perfumados, y mantener la diabetes bajo control cuando aplica, reduce el riesgo de episodios recurrentes.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: ["sy-irritacion-vaginal"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/infecciones-vaginales.jpg",
    seo: {
      title: "Infecciones Vaginales | Ginecóloga en CDMX",
      description:
        "Irritación, ardor o cambios en el flujo vaginal pueden tener distintas causas. Diagnóstico y tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "infección vaginal CDMX",
        "candidiasis vaginal tratamiento",
        "ginecóloga infecciones vaginales",
      ],
    },
  },
  {
    id: "d-menopausia",
    slug: "menopausia",
    name: "Menopausia",
    technicalName: "Climaterio y Menopausia",
    colloquialNames: ["cambio de vida"],
    description:
      "La menopausia es el cese definitivo de la menstruación, resultado de la disminución natural de la función ovárica, y se confirma tras 12 meses sin periodos menstruales. La etapa de transición previa, el climaterio, puede traer bochornos, cambios de ánimo e irregularidades menstruales durante varios años. No es una enfermedad, pero sí una etapa que se beneficia de acompañamiento médico para manejar sus síntomas y vigilar riesgos asociados como la osteoporosis.",
    symptoms: [
      "Bochornos y sudoración nocturna",
      "Ciclos menstruales irregulares previos al cese total",
      "Alteraciones del estado de ánimo",
      "Sequedad vaginal",
      "Fatiga y alteraciones del sueño",
    ],
    causes: [
      "Disminución natural de la función ovárica relacionada con la edad",
      "Menopausia quirúrgica tras la extirpación de ambos ovarios",
      "Tratamientos oncológicos que afectan la función ovárica",
    ],
    riskFactors: [
      "Edad entre 45 y 55 años",
      "Antecedente familiar de menopausia temprana",
      "Tabaquismo",
      "Cirugía previa de ovarios",
    ],
    complications: [
      "Osteoporosis por la caída de estrógeno",
      "Mayor riesgo cardiovascular tras la menopausia",
      "Sequedad vaginal e incomodidad en las relaciones sexuales",
    ],
    treatments: [
      "Terapia hormonal cuando está clínicamente indicada",
      "Manejo no hormonal de bochornos cuando la terapia hormonal no es candidata",
      "Vigilancia de densidad ósea y salud cardiovascular",
      "Tratamiento local para la sequedad vaginal",
    ],
    faqs: [
      {
        question: "¿A qué edad llega la menopausia?",
        answer:
          "La mayoría de las mujeres la alcanza entre los 45 y 55 años, aunque puede variar por factores genéticos, cirugías previas o tratamientos médicos.",
      },
      {
        question: "¿Los bochornos duran para siempre?",
        answer:
          "No necesariamente. Su duración varía de mujer a mujer, pero existen tratamientos —hormonales y no hormonales— que ayudan a reducir su frecuencia e intensidad mientras la transición ocurre.",
      },
      {
        question: "¿Es necesaria la terapia hormonal en la menopausia?",
        answer:
          "No en todos los casos. La decisión depende de los síntomas, los antecedentes de salud de cada paciente y una valoración individual de riesgos y beneficios con el ginecólogo.",
      },
    ],
    relatedServices: ["s-tratamiento-para-menopausia"],
    relatedSymptoms: ["sy-bochornos", "sy-alteraciones-en-el-estado-de-animo", "sy-falta-de-menstruacion", "sy-fatiga"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/menopausia.jpg",
    seo: {
      title: "Menopausia: Síntomas y Tratamiento | CDMX",
      description:
        "Bochornos, cambios de ánimo e irregularidad menstrual son parte de la menopausia. Acompañamiento médico con la Dra. Miroslava Castro en CDMX.",
      keywords: ["menopausia síntomas", "bochornos tratamiento CDMX", "ginecóloga menopausia"],
    },
  },
  {
    id: "d-incontinencia-urinaria",
    slug: "incontinencia-urinaria",
    name: "Incontinencia Urinaria",
    technicalName: "Incontinencia Urinaria de Esfuerzo y de Urgencia",
    colloquialNames: ["escape de orina", "pérdidas de orina"],
    description:
      "La incontinencia urinaria es la pérdida involuntaria de orina, ya sea al toser, reír o hacer esfuerzo físico (incontinencia de esfuerzo) o acompañada de una necesidad urgente e incontrolable de orinar (incontinencia de urgencia). Es una de las condiciones de urología ginecológica más frecuentes y, pese a vivirse con pena, tiene tratamientos reales y efectivos que van desde el ejercicio del piso pélvico hasta procedimientos especializados.",
    symptoms: [
      "Escape de orina al toser, estornudar o reír",
      "Escape de orina al hacer ejercicio o levantar peso",
      "Necesidad urgente de orinar que no se puede contener",
      "Necesidad de usar protectores o toallas femeninas por escapes",
    ],
    causes: [
      "Debilidad de los músculos del piso pélvico",
      "Partos vaginales previos",
      "Disminución de estrógeno en la menopausia",
      "Cirugías pélvicas previas",
    ],
    riskFactors: [
      "Múltiples partos vaginales",
      "Obesidad",
      "Menopausia",
      "Tos crónica",
      "Edad avanzada",
    ],
    complications: [
      "Impacto en la vida social y laboral por temor a los escapes",
      "Infecciones urinarias recurrentes asociadas",
      "Aislamiento social cuando no se busca atención",
    ],
    treatments: [
      "Ejercicios de fortalecimiento del piso pélvico (Kegel) dirigidos",
      "Entrenamiento vesical para la incontinencia de urgencia",
      "Tratamiento médico específico según el tipo de incontinencia",
      "Opciones quirúrgicas (slings/mallas) cuando el tratamiento conservador no es suficiente",
    ],
    faqs: [
      {
        question: "¿La incontinencia urinaria es normal después de los partos?",
        answer:
          "Es frecuente, pero no debe considerarse algo que simplemente hay que aceptar: existen tratamientos reales, desde ejercicios dirigidos hasta cirugía, que mejoran significativamente la calidad de vida.",
      },
      {
        question: "¿Toda incontinencia urinaria se trata igual?",
        answer:
          "No. El tratamiento depende de si la incontinencia es de esfuerzo, de urgencia o mixta, por lo que una valoración urológica-ginecológica específica es necesaria antes de iniciar cualquier tratamiento.",
      },
      {
        question: "¿Los ejercicios de Kegel realmente funcionan?",
        answer:
          "Sí, siempre que se realicen con la técnica correcta y de forma constante; muchas pacientes los hacen de manera incorrecta sin darse cuenta, por lo que la guía dirigida mejora notablemente el resultado.",
      },
    ],
    relatedServices: ["s-tratamiento-para-incontinencia-urinaria"],
    relatedSymptoms: ["sy-necesidad-de-orinar-con-frecuencia"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/incontinencia-urinaria.jpg",
    seo: {
      title: "Incontinencia Urinaria en la Mujer | Urología Ginecológica",
      description:
        "Los escapes de orina tienen tratamiento real. Diagnóstico y manejo de incontinencia urinaria con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "incontinencia urinaria mujer CDMX",
        "escape de orina tratamiento",
        "urología ginecológica",
      ],
    },
  },
  {
    id: "d-endometriosis",
    slug: "endometriosis",
    name: "Endometriosis",
    technicalName: "Endometriosis Pélvica",
    colloquialNames: [],
    description:
      "La endometriosis es una condición en la que tejido similar al que recubre el interior del útero crece fuera de él, con mayor frecuencia en los ovarios, las trompas y el tejido pélvico. Este tejido responde a los cambios hormonales del ciclo menstrual igual que el endometrio, lo que provoca inflamación, dolor y, en algunos casos, dificultad para lograr un embarazo. Es una de las principales causas de dolor pélvico crónico en mujeres en edad reproductiva.",
    symptoms: [
      "Dolor menstrual intenso que no mejora con analgésicos comunes",
      "Dolor pélvico fuera del periodo menstrual",
      "Dolor durante las relaciones sexuales",
      "Periodos con flujo intenso",
      "Dificultad para lograr un embarazo",
    ],
    causes: [
      "Causa exacta no completamente conocida",
      "Menstruación retrógrada (flujo menstrual que regresa hacia la pelvis)",
      "Factores genéticos e inmunológicos",
    ],
    riskFactors: [
      "Antecedente familiar de endometriosis",
      "Menstruación a edad temprana",
      "Ciclos menstruales cortos o periodos prolongados",
      "Nunca haber tenido un embarazo",
    ],
    complications: [
      "Infertilidad o dificultad para concebir",
      "Dolor pélvico crónico",
      "Formación de quistes ováricos (endometriomas)",
    ],
    treatments: [
      "Manejo del dolor con antiinflamatorios bajo supervisión médica",
      "Tratamiento hormonal para suprimir el crecimiento del tejido endometrial",
      "Cirugía laparoscópica en casos que no responden a tratamiento médico",
      "Seguimiento especializado si hay deseo de embarazo",
    ],
    faqs: [
      {
        question: "¿La endometriosis se cura?",
        answer:
          "No existe una cura definitiva, pero sí tratamientos efectivos —médicos y quirúrgicos— para controlar el dolor y la progresión de la enfermedad según cada caso.",
      },
      {
        question: "¿La endometriosis siempre causa infertilidad?",
        answer:
          "No en todos los casos. Muchas mujeres con endometriosis logran embarazarse; sin embargo, sí es una causa reconocida de dificultad para concebir que amerita valoración especializada.",
      },
      {
        question: "¿Cómo se diagnostica la endometriosis?",
        answer:
          "El ultrasonido pélvico/transvaginal es la primera herramienta diagnóstica; en algunos casos se requiere laparoscopia para confirmar el diagnóstico y, al mismo tiempo, tratar las lesiones.",
      },
    ],
    relatedServices: ["s-ecografia"],
    relatedSymptoms: ["sy-calambres-menstruales", "sy-periodos-con-flujo-intenso", "sy-presion-pelvica"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/endometriosis.jpg",
    seo: {
      title: "Endometriosis | Diagnóstico y Tratamiento en CDMX",
      description:
        "Dolor menstrual intenso y dolor pélvico crónico pueden ser endometriosis. Diagnóstico y tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: ["endometriosis síntomas", "dolor pélvico crónico CDMX", "ginecóloga endometriosis"],
    },
  },
  {
    id: "d-prolapso-de-organos-pelvicos",
    slug: "prolapso-de-organos-pelvicos",
    name: "Prolapso de Órganos Pélvicos",
    technicalName: "Prolapso de Órganos Pélvicos (POP)",
    colloquialNames: ["caída de la matriz", "matriz caída"],
    description:
      "El prolapso de órganos pélvicos ocurre cuando los músculos y ligamentos que sostienen la vejiga, el útero o el recto se debilitan, permitiendo que estos órganos desciendan hacia la vagina o incluso sobresalgan de ella. Es más frecuente después de partos vaginales y en la menopausia, por la pérdida de soporte y elasticidad de los tejidos pélvicos, y afecta de forma directa la calidad de vida, la actividad física y la vida sexual.",
    symptoms: [
      "Sensación de presión o peso en la pelvis",
      "Sensación de un bulto o abultamiento vaginal",
      "Molestia que empeora al estar de pie mucho tiempo",
      "Dificultad para vaciar completamente la vejiga o el recto",
    ],
    causes: [
      "Debilidad del piso pélvico tras partos vaginales",
      "Disminución de estrógeno en la menopausia",
      "Esfuerzo físico crónico (tos crónica, estreñimiento, cargar peso)",
      "Cirugías pélvicas previas, como la histerectomía",
    ],
    riskFactors: [
      "Múltiples partos vaginales",
      "Partos de productos de alto peso",
      "Obesidad",
      "Edad avanzada",
      "Estreñimiento crónico",
    ],
    complications: [
      "Dificultad para vaciar vejiga o intestino",
      "Infecciones urinarias de repetición",
      "Impacto significativo en la vida sexual y la actividad diaria",
    ],
    treatments: [
      "Rehabilitación del piso pélvico",
      "Uso de pesario vaginal como manejo conservador",
      "Corrección quirúrgica cuando el prolapso es sintomático o avanzado",
    ],
    faqs: [
      {
        question: "¿El prolapso de órganos pélvicos solo le pasa a mujeres mayores?",
        answer:
          "Es más frecuente con la edad y después de la menopausia, pero también puede presentarse en mujeres jóvenes con partos vaginales múltiples o esfuerzo físico crónico.",
      },
      {
        question: "¿Siempre se necesita cirugía para el prolapso?",
        answer:
          "No. Los prolapsos leves a moderados suelen manejarse con rehabilitación de piso pélvico o un pesario; la cirugía se reserva para casos sintomáticos que no mejoran con manejo conservador.",
      },
      {
        question: "¿El prolapso afecta la vida sexual?",
        answer:
          "Puede generar molestia o incomodidad durante las relaciones sexuales según su grado; es un aspecto que se aborda de forma abierta al definir el plan de tratamiento más adecuado.",
      },
    ],
    relatedServices: ["s-tratamiento-para-prolapso-de-organos-pelvicos"],
    relatedSymptoms: ["sy-presion-pelvica"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/prolapso-de-organos-pelvicos.jpg",
    seo: {
      title: "Prolapso de Órganos Pélvicos | Urología Ginecológica CDMX",
      description:
        "La sensación de presión o bulto vaginal puede ser prolapso de órganos pélvicos. Diagnóstico y tratamiento con la Dra. Miroslava Castro.",
      keywords: [
        "prolapso de órganos pélvicos",
        "matriz caída tratamiento",
        "urología ginecológica CDMX",
      ],
    },
  },
  {
    id: "d-vejiga-hiperactiva",
    slug: "vejiga-hiperactiva",
    name: "Vejiga Hiperactiva",
    technicalName: "Síndrome de Vejiga Hiperactiva",
    colloquialNames: [],
    description:
      "La vejiga hiperactiva es un conjunto de síntomas caracterizado por una necesidad repentina e intensa de orinar, difícil de posponer, que suele acompañarse de orinar con mucha frecuencia durante el día y despertar varias veces por la noche para hacerlo. No siempre se acompaña de escapes de orina, pero cuando los hay, se habla de incontinencia de urgencia. Afecta de forma importante la vida cotidiana, el sueño y la tranquilidad de quien la padece.",
    symptoms: [
      "Urgencia repentina e intensa para orinar",
      "Aumento en la frecuencia de las micciones durante el día",
      "Necesidad de levantarse varias veces por la noche a orinar",
      "Escape de orina asociado a la urgencia, en algunos casos",
    ],
    causes: [
      "Contracciones involuntarias del músculo de la vejiga",
      "Cambios hormonales en la menopausia",
      "Irritación vesical por infecciones urinarias de repetición",
      "Factores neurológicos en algunos casos",
    ],
    riskFactors: [
      "Edad avanzada",
      "Menopausia",
      "Obesidad",
      "Consumo elevado de cafeína o bebidas irritantes para la vejiga",
    ],
    complications: [
      "Alteración del sueño por los despertares nocturnos",
      "Aislamiento social por temor a no encontrar un baño a tiempo",
      "Infecciones urinarias asociadas",
    ],
    treatments: [
      "Entrenamiento vesical y modificación de hábitos de líquidos",
      "Ejercicios de piso pélvico",
      "Tratamiento médico específico para reducir la urgencia",
      "Opciones especializadas cuando el tratamiento inicial no es suficiente",
    ],
    faqs: [
      {
        question: "¿Vejiga hiperactiva es lo mismo que una infección urinaria?",
        answer:
          "No. Aunque ambas pueden causar urgencia y frecuencia urinaria, la vejiga hiperactiva no es una infección —es un trastorno funcional de la vejiga— y su tratamiento es distinto.",
      },
      {
        question: "¿Tomar menos agua ayuda a controlar la vejiga hiperactiva?",
        answer:
          "No es la solución: restringir líquidos de forma importante puede concentrar la orina e irritar más la vejiga. El manejo adecuado es a través de entrenamiento vesical guiado, no de deshidratarse.",
      },
      {
        question: "¿La vejiga hiperactiva tiene cura?",
        answer:
          "No siempre se habla de 'cura' definitiva, pero la mayoría de las pacientes logra un control muy bueno de los síntomas con entrenamiento vesical y tratamiento dirigido.",
      },
    ],
    relatedServices: ["s-tratamiento-para-incontinencia-urinaria"],
    relatedSymptoms: ["sy-necesidad-de-orinar-con-frecuencia"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/vejiga-hiperactiva.jpg",
    seo: {
      title: "Vejiga Hiperactiva | Urología Ginecológica CDMX",
      description:
        "Urgencia e idas frecuentes al baño pueden ser vejiga hiperactiva. Diagnóstico y tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "vejiga hiperactiva tratamiento",
        "urgencia urinaria mujer",
        "urología ginecológica CDMX",
      ],
    },
  },
  {
    id: "d-miomatosis-uterina",
    slug: "miomatosis-uterina",
    name: "Miomatosis Uterina",
    technicalName: "Leiomiomas Uterinos",
    colloquialNames: ["miomas", "fibromas uterinos"],
    description:
      "La miomatosis uterina es la presencia de miomas, tumores benignos que crecen en la pared del útero y que son extremadamente comunes en mujeres en edad reproductiva. Su tamaño y número son muy variables: algunos son tan pequeños que no causan ninguna molestia, mientras que otros provocan sangrado menstrual abundante, dolor pélvico o presión sobre órganos vecinos. Su naturaleza benigna no significa que deban ignorarse cuando generan síntomas.",
    symptoms: [
      "Periodos menstruales con flujo intenso o prolongado",
      "Sangrado entre periodos menstruales",
      "Sensación de presión o pesadez pélvica",
      "Dolor pélvico",
      "Fatiga relacionada con la pérdida de sangre",
    ],
    causes: [
      "Crecimiento dependiente de estrógeno y progesterona del tejido muscular uterino",
      "Factores genéticos",
    ],
    riskFactors: [
      "Edad reproductiva, con mayor frecuencia entre los 30 y 50 años",
      "Antecedente familiar de miomatosis",
      "Obesidad",
      "Nunca haber tenido un embarazo",
    ],
    complications: [
      "Anemia por sangrado menstrual abundante",
      "Presión sobre la vejiga o el recto según su localización",
      "Dificultad para el embarazo en casos seleccionados",
    ],
    treatments: [
      "Vigilancia periódica cuando el mioma es pequeño y asintomático",
      "Tratamiento médico para controlar el sangrado",
      "Miomectomía para retirar el mioma conservando el útero",
      "Histerectomía en casos sintomáticos sin deseo de fertilidad futura",
    ],
    faqs: [
      {
        question: "¿Los miomas uterinos se vuelven cáncer?",
        answer:
          "Los miomas son tumores benignos y su transformación maligna es muy poco frecuente; sin embargo, todo mioma debe vigilarse y evaluarse con estudios de imagen para confirmar su naturaleza.",
      },
      {
        question: "¿Todos los miomas requieren cirugía?",
        answer:
          "No. Muchos miomas pequeños y sin síntomas solo requieren vigilancia periódica; la cirugía se reserva para miomas que causan sangrado abundante, dolor o crecimiento significativo.",
      },
      {
        question: "¿Los miomas pueden provocar anemia?",
        answer:
          "Sí, cuando causan sangrado menstrual abundante y prolongado de forma sostenida, la pérdida de sangre puede llevar a una anemia que también debe tratarse.",
      },
    ],
    relatedServices: ["s-histerectomia", "s-ecografia"],
    relatedSymptoms: [
      "sy-periodos-con-flujo-intenso",
      "sy-presion-pelvica",
      "sy-sangrado-entre-periodos",
      "sy-fatiga",
    ],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/miomatosis-uterina.jpg",
    seo: {
      title: "Miomatosis Uterina | Ginecóloga en CDMX",
      description:
        "Sangrado abundante y dolor pélvico pueden ser miomas uterinos. Diagnóstico y opciones de tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: ["miomatosis uterina", "miomas tratamiento CDMX", "ginecóloga miomas"],
    },
  },
  {
    id: "d-quistes-ovaricos",
    slug: "quistes-ovaricos",
    name: "Quistes Ováricos",
    technicalName: "Quistes de Ovario",
    colloquialNames: ["quistes en el ovario"],
    description:
      "Los quistes ováricos son bolsas llenas de líquido que se forman dentro o sobre la superficie de un ovario. La mayoría son funcionales, se forman durante el ciclo menstrual normal y desaparecen solos en pocas semanas sin causar ningún problema. Otros, sin embargo, pueden crecer, causar dolor o requerir estudio y tratamiento específico, por lo que su hallazgo siempre amerita seguimiento ginecológico.",
    symptoms: [
      "Sensación de presión o peso pélvico de un solo lado",
      "Dolor pélvico que puede ser intermitente o constante",
      "Distensión abdominal",
      "Dolor durante las relaciones sexuales en algunos casos",
    ],
    causes: [
      "Formación normal durante el ciclo menstrual (quistes funcionales)",
      "Endometriosis (quistes endometriósicos)",
      "Síndrome de ovario poliquístico",
    ],
    riskFactors: [
      "Edad reproductiva",
      "Antecedente de endometriosis",
      "Síndrome de ovario poliquístico",
      "Tratamientos de fertilidad",
    ],
    complications: [
      "Torsión ovárica si el quiste es grande, una urgencia que requiere atención inmediata",
      "Ruptura del quiste con dolor agudo",
      "Crecimiento progresivo en quistes no funcionales",
    ],
    treatments: [
      "Vigilancia con ultrasonido en quistes funcionales pequeños",
      "Tratamiento médico para regular el ciclo y prevenir nuevos quistes funcionales",
      "Cirugía laparoscópica en quistes grandes, persistentes o con características sospechosas",
    ],
    faqs: [
      {
        question: "¿Todo quiste ovárico necesita cirugía?",
        answer:
          "No. La mayoría de los quistes funcionales desaparecen solos en uno o dos ciclos menstruales; la cirugía se considera cuando el quiste es grande, persiste en el tiempo o tiene características que ameritan descartar otras causas.",
      },
      {
        question: "¿Un quiste ovárico puede doler de repente de forma intensa?",
        answer:
          "Sí, y es una señal de alarma: un dolor pélvico súbito e intenso puede indicar torsión o ruptura del quiste, situaciones que requieren valoración médica inmediata.",
      },
      {
        question: "¿Un quiste ovárico afecta la fertilidad?",
        answer:
          "La mayoría de los quistes funcionales no afecta la fertilidad; en quistes relacionados con endometriosis o que requieren cirugía, se evalúa el impacto de forma individual.",
      },
    ],
    relatedServices: ["s-ecografia"],
    relatedSymptoms: ["sy-presion-pelvica"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/quistes-ovaricos.jpg",
    seo: {
      title: "Quistes Ováricos | Diagnóstico en CDMX",
      description:
        "Dolor pélvico de un solo lado puede deberse a un quiste ovárico. Diagnóstico con ultrasonido y seguimiento con la Dra. Miroslava Castro.",
      keywords: ["quiste ovárico síntomas", "quiste en el ovario CDMX", "ginecóloga quistes"],
    },
  },
  {
    id: "d-sindrome-de-ovario-poliquistico",
    slug: "sindrome-de-ovario-poliquistico",
    name: "Síndrome de Ovario Poliquístico",
    technicalName: "Síndrome de Ovario Poliquístico (SOP)",
    colloquialNames: ["ovarios poliquísticos", "SOP"],
    description:
      "El síndrome de ovario poliquístico es un trastorno hormonal frecuente en mujeres en edad reproductiva, caracterizado por ciclos menstruales irregulares, niveles elevados de andrógenos y, con frecuencia, múltiples folículos pequeños en los ovarios visibles por ultrasonido. Más allá de la irregularidad menstrual, puede afectar la fertilidad y asociarse a resistencia a la insulina, por lo que su manejo suele ser integral.",
    symptoms: [
      "Ciclos menstruales irregulares o ausentes",
      "Exceso de vello corporal o facial",
      "Acné persistente",
      "Dificultad para lograr un embarazo",
      "Aumento de peso difícil de controlar",
    ],
    causes: [
      "Alteración hormonal con exceso de andrógenos",
      "Resistencia a la insulina",
      "Factores genéticos",
    ],
    riskFactors: [
      "Antecedente familiar de SOP",
      "Obesidad",
      "Resistencia a la insulina o antecedente de diabetes en la familia",
    ],
    complications: [
      "Infertilidad por falta de ovulación regular",
      "Diabetes tipo 2 a largo plazo",
      "Engrosamiento endometrial por ciclos anovulatorios prolongados",
    ],
    treatments: [
      "Cambios en estilo de vida y control de peso",
      "Tratamiento hormonal para regular los ciclos menstruales",
      "Tratamiento específico para favorecer la ovulación si hay deseo de embarazo",
      "Manejo de la resistencia a la insulina cuando está presente",
    ],
    faqs: [
      {
        question: "¿El síndrome de ovario poliquístico impide tener hijos?",
        answer:
          "No impide el embarazo de forma definitiva, pero sí puede dificultar la ovulación regular; con tratamiento específico, muchas mujeres con SOP logran embarazarse.",
      },
      {
        question: "¿Se necesita tener muchos quistes en el ovario para tener SOP?",
        answer:
          "No es indispensable. El diagnóstico se basa en una combinación de criterios clínicos, hormonales y de ultrasonido, no únicamente en la cantidad de folículos observados.",
      },
      {
        question: "¿El SOP se relaciona con el aumento de peso?",
        answer:
          "Existe una relación frecuente con la resistencia a la insulina y el aumento de peso, por lo que el manejo del SOP suele incluir también cambios en el estilo de vida.",
      },
    ],
    relatedServices: ["s-ecografia"],
    relatedSymptoms: ["sy-ciclos-irregulares", "sy-falta-de-menstruacion"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/sindrome-de-ovario-poliquistico.jpg",
    seo: {
      title: "Síndrome de Ovario Poliquístico (SOP) | CDMX",
      description:
        "Ciclos irregulares y dificultad para embarazarte pueden ser SOP. Diagnóstico y tratamiento integral con la Dra. Miroslava Castro en CDMX.",
      keywords: ["ovario poliquístico síntomas", "SOP tratamiento CDMX", "ginecóloga SOP"],
    },
  },
  {
    id: "d-cistitis-intersticial",
    slug: "cistitis-intersticial",
    name: "Cistitis Intersticial",
    technicalName: "Síndrome de Vejiga Dolorosa",
    colloquialNames: ["vejiga dolorosa"],
    description:
      "La cistitis intersticial, también llamada síndrome de vejiga dolorosa, es una condición crónica que provoca dolor o presión en la vejiga y la pelvis, junto con necesidad urgente y frecuente de orinar, sin que exista una infección urinaria activa que lo explique. Al no deberse a una infección, no responde a los antibióticos, lo que frecuentemente retrasa su diagnóstico correcto.",
    symptoms: [
      "Dolor o presión pélvica que empeora al llenarse la vejiga",
      "Necesidad urgente y frecuente de orinar",
      "Dolor al orinar sin evidencia de infección",
      "Dolor durante las relaciones sexuales en algunos casos",
    ],
    causes: [
      "Causa exacta no completamente conocida",
      "Alteración del revestimiento protector de la vejiga",
      "Posible componente inflamatorio o autoinmune",
    ],
    riskFactors: [
      "Sexo femenino",
      "Edad entre 30 y 50 años",
      "Antecedente de otras condiciones de dolor crónico",
    ],
    complications: [
      "Dolor crónico que afecta la calidad de vida",
      "Alteración del sueño por la frecuencia urinaria nocturna",
      "Impacto emocional por el diagnóstico tardío frecuente",
    ],
    treatments: [
      "Modificación de la dieta para identificar alimentos irritantes de la vejiga",
      "Entrenamiento vesical y fisioterapia de piso pélvico",
      "Tratamiento médico específico para el dolor vesical",
      "Instilaciones vesicales en casos seleccionados",
    ],
    faqs: [
      {
        question: "¿La cistitis intersticial es una infección urinaria?",
        answer:
          "No. A diferencia de una infección urinaria, en la cistitis intersticial los cultivos de orina son negativos; por eso los antibióticos no la resuelven y se requiere un abordaje distinto.",
      },
      {
        question: "¿Por qué tarda tanto en diagnosticarse?",
        answer:
          "Porque sus síntomas se parecen a los de una infección urinaria recurrente, lo que lleva a tratamientos repetidos con antibióticos antes de considerar este diagnóstico específico.",
      },
      {
        question: "¿Existen alimentos que empeoran la cistitis intersticial?",
        answer:
          "Algunas pacientes identifican que ciertos alimentos o bebidas (como cafeína, alcohol o comidas muy condimentadas) agravan sus síntomas; llevar un registro ayuda a identificar los propios desencadenantes.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: [
      "sy-dolor-al-orinar",
      "sy-presion-pelvica",
      "sy-necesidad-de-orinar-con-frecuencia",
    ],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/cistitis-intersticial.jpg",
    seo: {
      title: "Cistitis Intersticial | Urología Ginecológica CDMX",
      description:
        "Dolor vesical sin infección puede ser cistitis intersticial. Diagnóstico y tratamiento especializado con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "cistitis intersticial síntomas",
        "vejiga dolorosa tratamiento",
        "urología ginecológica CDMX",
      ],
    },
  },
  {
    id: "d-infecciones-urinarias-recurrentes",
    slug: "infecciones-urinarias-recurrentes",
    name: "Infecciones Urinarias Recurrentes",
    technicalName: "Infección de Vías Urinarias Recurrente",
    colloquialNames: ["infecciones de orina repetidas"],
    description:
      "Las infecciones urinarias recurrentes se definen como episodios repetidos de infección de vías urinarias —generalmente tres o más en un año—, un problema especialmente frecuente en mujeres por la anatomía de la uretra. Más allá de tratar cada episodio, el abordaje de urología ginecológica busca identificar la causa de fondo de la recurrencia para romper el ciclo de infecciones repetidas.",
    symptoms: [
      "Ardor o dolor al orinar",
      "Necesidad urgente y frecuente de orinar",
      "Orina de olor fuerte o aspecto turbio",
      "Molestia pélvica baja durante el episodio activo",
    ],
    causes: [
      "Anatomía uretral femenina, más corta y cercana al recto",
      "Relaciones sexuales frecuentes",
      "Vaciamiento vesical incompleto",
      "Disminución de estrógeno en la menopausia, que favorece la recurrencia",
    ],
    riskFactors: [
      "Actividad sexual frecuente",
      "Menopausia",
      "Diabetes",
      "Anomalías anatómicas de las vías urinarias",
    ],
    complications: [
      "Infección que asciende hacia el riñón si no se trata a tiempo",
      "Impacto en la calidad de vida por la frecuencia de los episodios",
      "Resistencia a antibióticos por tratamientos repetidos sin estudio de fondo",
    ],
    treatments: [
      "Identificación y tratamiento de la causa de fondo de la recurrencia",
      "Medidas preventivas de higiene y hábitos urinarios",
      "Tratamiento con estrógeno local en mujeres posmenopáusicas, cuando está indicado",
      "Profilaxis antibiótica en casos seleccionados",
    ],
    faqs: [
      {
        question: "¿Cuántas infecciones urinarias al año se consideran 'recurrentes'?",
        answer:
          "Generalmente se consideran recurrentes tres o más episodios confirmados en un año, o dos o más en seis meses; a partir de ahí se recomienda un estudio más completo para identificar la causa.",
      },
      {
        question: "¿Por qué las infecciones urinarias son más frecuentes después de la menopausia?",
        answer:
          "La disminución de estrógeno adelgaza el tejido de la uretra y la vejiga, lo que facilita que las bacterias se adhieran con más facilidad; por eso el tratamiento con estrógeno local es útil en muchos casos.",
      },
      {
        question: "¿Tomar antibiótico cada vez que hay síntomas es la solución a largo plazo?",
        answer:
          "No es ideal como única estrategia: tratar episodio por episodio sin buscar la causa de fondo favorece la resistencia a antibióticos; por eso el estudio de la recurrencia es importante.",
      },
    ],
    relatedServices: [],
    relatedSymptoms: ["sy-dolor-al-orinar", "sy-necesidad-de-orinar-con-frecuencia"],
    lastReviewed: "2026-11-23",
    image: "/images/diseases/infecciones-urinarias-recurrentes.jpg",
    seo: {
      title: "Infecciones Urinarias Recurrentes | CDMX",
      description:
        "¿Infecciones urinarias repetidas? Identificar la causa de fondo es clave. Diagnóstico y tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: [
        "infecciones urinarias recurrentes mujer",
        "infección de orina repetida CDMX",
        "urología ginecológica",
      ],
    },
  },
];
