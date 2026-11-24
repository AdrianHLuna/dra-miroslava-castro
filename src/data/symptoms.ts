import type { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sy-irritacion-vaginal",
    slug: "irritacion-vaginal",
    name: "Irritación Vaginal",
    colloquialNames: ["ardor vaginal", "comezón vaginal"],
    description:
      "La irritación vaginal es una sensación de ardor, comezón o molestia en la zona vaginal o vulvar, frecuentemente asociada a cambios en el flujo vaginal. Es uno de los motivos de consulta ginecológica más comunes y suele responder bien al tratamiento una vez identificada su causa específica.",
    causes: [
      "Infecciones vaginales por hongos o bacterias",
      "Reacción a jabones, duchas vaginales o productos de higiene íntima",
      "Sequedad vaginal relacionada con la menopausia",
      "Roce por ropa interior poco transpirable",
    ],
    alarmSigns: [
      "Irritación acompañada de fiebre o dolor pélvico intenso",
      "Lesiones, llagas o ampollas visibles en la zona",
      "Sangrado no relacionado con la menstruación",
    ],
    whyConsult:
      "Una irritación vaginal persistente o recurrente amerita valoración ginecológica para identificar el microorganismo o la causa exacta, ya que el tratamiento varía según se trate de una infección por hongos, bacterias u otra causa.",
    faqs: [
      {
        question: "¿La irritación vaginal siempre es por una infección?",
        answer:
          "No siempre. También puede deberse a productos de higiene irritantes, sequedad vaginal en la menopausia o roce por ropa poco transpirable, por lo que la valoración ayuda a identificar la causa real.",
      },
      {
        question: "¿Es seguro automedicarse para la irritación vaginal?",
        answer:
          "No se recomienda, ya que tratar la causa equivocada puede prolongar la molestia o enmascarar el diagnóstico correcto; lo recomendable es una valoración antes de iniciar cualquier tratamiento.",
      },
    ],
    relatedConditions: ["d-infecciones-vaginales"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/irritacion-vaginal.jpg",
    seo: {
      title: "Irritación Vaginal | Ginecóloga en CDMX",
      description:
        "Ardor o comezón vaginal pueden tener distintas causas. Diagnóstico con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["irritación vaginal CDMX", "ardor vaginal causas", "ginecóloga irritación"],
    },
  },
  {
    id: "sy-dolor-al-orinar",
    slug: "dolor-al-orinar",
    name: "Dolor al Orinar",
    colloquialNames: ["ardor al orinar", "dolor para orinar"],
    description:
      "El dolor o ardor al orinar es una molestia frecuente en mujeres, habitualmente relacionada con infecciones de vías urinarias, aunque también puede presentarse en condiciones sin infección activa, como la cistitis intersticial. Identificar si existe o no una infección real es el primer paso para un tratamiento adecuado.",
    causes: [
      "Infección de vías urinarias",
      "Infecciones urinarias recurrentes",
      "Cistitis intersticial (vejiga dolorosa)",
      "Irritación vaginal que se extiende a la zona uretral",
    ],
    alarmSigns: [
      "Dolor al orinar con fiebre o dolor en la espalda baja/costado",
      "Sangre visible en la orina",
      "Dolor intenso que impide orinar por completo",
    ],
    whyConsult:
      "El dolor al orinar persistente, recurrente o acompañado de fiebre debe valorarse para confirmar si existe una infección activa, descartar complicaciones como una infección que haya ascendido al riñón, o identificar una causa no infecciosa como la cistitis intersticial.",
    faqs: [
      {
        question: "¿El dolor al orinar siempre significa infección urinaria?",
        answer:
          "No siempre. Puede deberse a una infección urinaria, pero también a condiciones como la cistitis intersticial, donde los cultivos de orina son negativos y el manejo es distinto.",
      },
      {
        question: "¿Tomar muchos líquidos quita el dolor al orinar?",
        answer:
          "Puede ayudar a diluir la orina y aliviar ligeramente la molestia, pero no sustituye el tratamiento específico una vez identificada la causa real.",
      },
    ],
    relatedConditions: ["d-cistitis-intersticial", "d-infecciones-urinarias-recurrentes"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/dolor-al-orinar.jpg",
    seo: {
      title: "Dolor al Orinar | Urología Ginecológica CDMX",
      description:
        "El ardor al orinar puede o no ser una infección. Diagnóstico certero con la Dra. Miroslava Castro en CDMX.",
      keywords: ["dolor al orinar mujer", "ardor al orinar CDMX", "urología ginecológica"],
    },
  },
  {
    id: "sy-ciclos-irregulares",
    slug: "ciclos-irregulares",
    name: "Ciclos Irregulares",
    colloquialNames: ["periodos irregulares", "menstruación irregular"],
    description:
      "Los ciclos menstruales irregulares son variaciones importantes en la duración o la frecuencia del periodo menstrual, fuera del rango considerado normal. Pueden relacionarse con causas hormonales, como el síndrome de ovario poliquístico, o presentarse de forma transitoria en distintas etapas de la vida reproductiva.",
    causes: [
      "Síndrome de ovario poliquístico",
      "Cambios hormonales en la adolescencia o cerca de la menopausia",
      "Estrés físico o emocional importante",
      "Alteraciones de peso significativas",
    ],
    alarmSigns: [
      "Ausencia de menstruación por más de 3 meses sin embarazo",
      "Sangrado muy abundante o prolongado junto con la irregularidad",
      "Dolor pélvico intenso asociado",
    ],
    whyConsult:
      "La irregularidad menstrual persistente debe valorarse para identificar su causa hormonal de fondo, especialmente cuando se asocia a otros síntomas como acné, exceso de vello o dificultad para embarazarse.",
    faqs: [
      {
        question: "¿Los ciclos irregulares siempre indican síndrome de ovario poliquístico?",
        answer:
          "No siempre, pero es una de las causas más frecuentes; el estrés, los cambios de peso y las transiciones hormonales naturales también pueden irregularizar el ciclo.",
      },
      {
        question: "¿Es normal tener ciclos irregulares en la adolescencia?",
        answer:
          "Es relativamente frecuente en los primeros años tras la primera menstruación mientras el eje hormonal madura, pero si persiste por varios años conviene una valoración.",
      },
    ],
    relatedConditions: ["d-sindrome-de-ovario-poliquistico"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/ciclos-irregulares.jpg",
    seo: {
      title: "Ciclos Menstruales Irregulares | CDMX",
      description:
        "Periodos irregulares pueden tener causa hormonal. Diagnóstico con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["ciclos irregulares causas", "periodos irregulares CDMX", "ginecóloga ciclo menstrual"],
    },
  },
  {
    id: "sy-bochornos",
    slug: "bochornos",
    name: "Bochornos",
    colloquialNames: ["sofocos", "calores"],
    description:
      "Los bochornos son episodios repentinos de calor intenso, generalmente en la cara, el cuello y el pecho, acompañados a veces de sudoración y enrojecimiento de la piel. Son uno de los síntomas más característicos de la transición menopáusica, aunque también pueden presentarse por otras causas hormonales.",
    causes: [
      "Climaterio y menopausia",
      "Menopausia quirúrgica tras la extirpación de los ovarios",
      "Tratamientos oncológicos que afectan la función ovárica",
    ],
    alarmSigns: [
      "Bochornos acompañados de palpitaciones intensas o dolor en el pecho",
      "Sudoración nocturna profusa que interrumpe el sueño de forma importante",
    ],
    whyConsult:
      "Cuando los bochornos afectan de forma importante la calidad de vida o el sueño, existen tratamientos —hormonales y no hormonales— que pueden reducir su frecuencia e intensidad de forma significativa.",
    faqs: [
      {
        question: "¿Cuánto tiempo duran los bochornos de la menopausia?",
        answer:
          "Su duración varía de mujer a mujer; en algunas desaparecen en uno o dos años, mientras que en otras pueden persistir varios años más, lo que justifica buscar tratamiento si son muy molestos.",
      },
      {
        question: "¿Los bochornos se pueden tratar sin hormonas?",
        answer:
          "Sí, existen alternativas no hormonales efectivas para mujeres que no son candidatas a terapia hormonal o prefieren evitarla.",
      },
    ],
    relatedConditions: ["d-menopausia"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/bochornos.jpg",
    seo: {
      title: "Bochornos | Síntomas de la Menopausia CDMX",
      description:
        "Los bochornos son el síntoma más característico de la menopausia. Tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: ["bochornos menopausia", "sofocos tratamiento CDMX", "ginecóloga menopausia"],
    },
  },
  {
    id: "sy-alteraciones-en-el-estado-de-animo",
    slug: "alteraciones-en-el-estado-de-animo",
    name: "Alteraciones en el Estado de Ánimo",
    colloquialNames: ["cambios de humor", "irritabilidad"],
    description:
      "Las alteraciones en el estado de ánimo —irritabilidad, tristeza o cambios de humor más marcados de lo habitual— son frecuentes durante la transición menopáusica debido a las fluctuaciones hormonales, y también pueden presentarse de forma cíclica relacionadas con el ciclo menstrual.",
    causes: [
      "Fluctuaciones hormonales del climaterio y la menopausia",
      "Alteraciones del sueño asociadas a bochornos nocturnos",
      "Síndrome premenstrual",
    ],
    alarmSigns: [
      "Tristeza persistente que interfiere con la vida diaria",
      "Pensamientos de desesperanza o de hacerse daño",
    ],
    whyConsult:
      "Cuando los cambios de ánimo son intensos o persistentes, vale la pena una valoración que distinga si el origen es hormonal —y por tanto tratable desde ese ángulo— o si requiere además apoyo en salud mental.",
    faqs: [
      {
        question: "¿Por qué la menopausia afecta el estado de ánimo?",
        answer:
          "Las fluctuaciones de estrógeno influyen en neurotransmisores relacionados con el ánimo, y además las alteraciones del sueño por los bochornos nocturnos contribuyen a la irritabilidad y el cansancio.",
      },
      {
        question: "¿El tratamiento hormonal mejora el ánimo en la menopausia?",
        answer:
          "En muchas mujeres sí ayuda, especialmente cuando el cambio de ánimo está ligado a bochornos y mala calidad de sueño; la valoración individual define si es la opción adecuada.",
      },
    ],
    relatedConditions: ["d-menopausia"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/alteraciones-en-el-estado-de-animo.jpg",
    seo: {
      title: "Cambios de Ánimo en la Menopausia | CDMX",
      description:
        "Irritabilidad y cambios de humor pueden relacionarse con la menopausia. Acompañamiento con la Dra. Miroslava Castro.",
      keywords: ["cambios de ánimo menopausia", "irritabilidad menopausia CDMX", "ginecóloga menopausia"],
    },
  },
  {
    id: "sy-necesidad-de-orinar-con-frecuencia",
    slug: "necesidad-de-orinar-con-frecuencia",
    name: "Necesidad de Orinar con Frecuencia",
    colloquialNames: ["ir muy seguido al baño", "urgencia urinaria"],
    description:
      "La necesidad de orinar con frecuencia, de día o de noche, puede deberse a distintas causas urológicas, desde una infección urinaria hasta la vejiga hiperactiva o la incontinencia urinaria. Cuando se acompaña de urgencia intensa o escapes, suele ser el primer síntoma que lleva a buscar valoración especializada.",
    causes: [
      "Vejiga hiperactiva",
      "Incontinencia urinaria de urgencia",
      "Cistitis intersticial",
      "Infecciones urinarias recurrentes",
    ],
    alarmSigns: [
      "Frecuencia urinaria con fiebre o dolor en el costado/espalda baja",
      "Sangre en la orina",
      "Dolor intenso al orinar asociado",
    ],
    whyConsult:
      "La frecuencia urinaria aumentada que altera el sueño o la vida diaria amerita valoración urológica-ginecológica para identificar si se trata de vejiga hiperactiva, incontinencia, una infección o cistitis intersticial, ya que cada una tiene un manejo distinto.",
    faqs: [
      {
        question: "¿Ir muy seguido al baño siempre es una infección urinaria?",
        answer:
          "No. Aunque es una causa frecuente, condiciones como la vejiga hiperactiva o la cistitis intersticial también provocan frecuencia urinaria sin que exista una infección activa.",
      },
      {
        question: "¿Levantarse varias veces en la noche a orinar es normal?",
        answer:
          "No es lo más común a cualquier edad; aunque es más frecuente con los años, si ocurre varias veces por noche y afecta el descanso, conviene valorarlo.",
      },
    ],
    relatedConditions: [
      "d-incontinencia-urinaria",
      "d-vejiga-hiperactiva",
      "d-cistitis-intersticial",
      "d-infecciones-urinarias-recurrentes",
    ],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/necesidad-de-orinar-con-frecuencia.jpg",
    seo: {
      title: "Necesidad de Orinar con Frecuencia | Urología Ginecológica",
      description:
        "Ir al baño muy seguido puede tener varias causas urológicas. Diagnóstico con la Dra. Miroslava Castro en CDMX.",
      keywords: ["orinar con frecuencia mujer", "urgencia urinaria CDMX", "urología ginecológica"],
    },
  },
  {
    id: "sy-presion-pelvica",
    slug: "presion-pelvica",
    name: "Presión Pélvica",
    colloquialNames: ["pesadez pélvica", "peso en la pelvis"],
    description:
      "La presión o pesadez pélvica es una sensación de peso, plenitud o presión en la parte baja del abdomen y la pelvis, que puede tener múltiples causas ginecológicas o urológicas, desde miomas y quistes ováricos hasta el prolapso de órganos pélvicos.",
    causes: [
      "Miomatosis uterina",
      "Quistes ováricos",
      "Prolapso de órganos pélvicos",
      "Endometriosis",
      "Cistitis intersticial",
    ],
    alarmSigns: [
      "Presión pélvica de inicio súbito e intenso",
      "Presión acompañada de fiebre o sangrado abundante",
      "Dificultad para orinar o evacuar de forma repentina",
    ],
    whyConsult:
      "La presión pélvica persistente puede ser la primera manifestación de condiciones que requieren diagnóstico específico por ultrasonido, como miomas, quistes ováricos o endometriosis, o de un prolapso que se beneficia de tratamiento especializado.",
    faqs: [
      {
        question: "¿La presión pélvica siempre indica un problema grave?",
        answer:
          "No necesariamente, pero sí debe evaluarse, ya que puede tener varias causas benignas y tratables; el estudio por ultrasonido es clave para identificar el origen.",
      },
      {
        question: "¿La presión pélvica empeora al estar de pie mucho tiempo?",
        answer:
          "Puede empeorar, especialmente cuando se relaciona con un prolapso de órganos pélvicos, donde la gravedad incrementa la sensación de peso durante el día.",
      },
    ],
    relatedConditions: [
      "d-endometriosis",
      "d-prolapso-de-organos-pelvicos",
      "d-miomatosis-uterina",
      "d-quistes-ovaricos",
      "d-cistitis-intersticial",
    ],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/presion-pelvica.jpg",
    seo: {
      title: "Presión Pélvica | Diagnóstico en CDMX",
      description:
        "La presión o pesadez pélvica puede tener varias causas ginecológicas. Diagnóstico con la Dra. Miroslava Castro en CDMX.",
      keywords: ["presión pélvica causas", "pesadez pélvica CDMX", "ginecóloga presión pélvica"],
    },
  },
  {
    id: "sy-calambres-menstruales",
    slug: "calambres-menstruales",
    name: "Calambres Menstruales",
    colloquialNames: ["cólicos menstruales", "dolor menstrual"],
    description:
      "Los calambres o cólicos menstruales son el dolor tipo cólico en la parte baja del abdomen que ocurre antes o durante la menstruación. Un dolor leve a moderado es habitual, pero un dolor intenso que no mejora con analgésicos comunes puede ser señal de endometriosis u otra condición de fondo.",
    causes: [
      "Contracciones uterinas normales durante la menstruación",
      "Endometriosis",
      "Miomatosis uterina",
    ],
    alarmSigns: [
      "Dolor menstrual tan intenso que impide las actividades cotidianas",
      "Dolor que no mejora con analgésicos de uso común",
      "Dolor pélvico que también aparece fuera del periodo menstrual",
    ],
    whyConsult:
      "Cuando el dolor menstrual es incapacitante o va en aumento con el tiempo, debe descartarse endometriosis u otra causa de fondo, ya que no es normal que el dolor menstrual impida la vida diaria.",
    faqs: [
      {
        question: "¿Qué tanto dolor menstrual se considera normal?",
        answer:
          "Un dolor leve a moderado que responde a analgésicos comunes y no impide las actividades diarias es habitual; un dolor incapacitante no debe normalizarse y amerita valoración.",
      },
      {
        question: "¿El dolor menstrual intenso siempre es endometriosis?",
        answer:
          "No siempre, pero es una de las causas más importantes a descartar cuando el dolor es intenso, progresivo o no responde al tratamiento habitual.",
      },
    ],
    relatedConditions: ["d-endometriosis"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/calambres-menstruales.jpg",
    seo: {
      title: "Calambres Menstruales Intensos | CDMX",
      description:
        "El dolor menstrual intenso no es normal. Diagnóstico y descarte de endometriosis con la Dra. Miroslava Castro en CDMX.",
      keywords: ["calambres menstruales intensos", "dolor menstrual CDMX", "ginecóloga dolor menstrual"],
    },
  },
  {
    id: "sy-periodos-con-flujo-intenso",
    slug: "periodos-con-flujo-intenso",
    name: "Periodos con Flujo Intenso",
    colloquialNames: ["sangrado menstrual abundante", "menstruación abundante"],
    description:
      "Los periodos con flujo intenso o prolongado, más allá de lo que cada mujer considera su patrón habitual, son una de las causas más frecuentes de anemia en mujeres en edad reproductiva. Entre sus causas más comunes están los miomas uterinos y la endometriosis.",
    causes: [
      "Miomatosis uterina",
      "Endometriosis",
      "Alteraciones hormonales del ciclo",
    ],
    alarmSigns: [
      "Necesidad de cambiar la protección cada hora durante varias horas seguidas",
      "Sangrado con coágulos grandes de forma repetida",
      "Mareo, palidez o fatiga intensa asociada al sangrado",
    ],
    whyConsult:
      "El sangrado menstrual abundante sostenido puede llevar a anemia sin que la paciente lo note de inmediato, por lo que su evaluación —incluyendo descartar miomas u otras causas— es importante incluso si no genera otras molestias.",
    faqs: [
      {
        question: "¿Cómo sé si mi periodo es 'demasiado' abundante?",
        answer:
          "Una señal práctica es necesitar cambiar la protección cada una o dos horas durante varias horas seguidas, o presentar coágulos grandes de forma repetida; eso ya se considera flujo intenso que amerita valoración.",
      },
      {
        question: "¿El sangrado abundante siempre es por miomas?",
        answer:
          "Los miomas son una causa frecuente, pero no la única; la endometriosis y otras alteraciones hormonales también pueden provocar sangrado menstrual abundante.",
      },
    ],
    relatedConditions: ["d-endometriosis", "d-miomatosis-uterina"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/periodos-con-flujo-intenso.jpg",
    seo: {
      title: "Periodos con Flujo Intenso | Ginecóloga CDMX",
      description:
        "El sangrado menstrual abundante puede causar anemia. Diagnóstico y tratamiento con la Dra. Miroslava Castro en CDMX.",
      keywords: ["sangrado menstrual abundante", "periodo abundante CDMX", "ginecóloga sangrado"],
    },
  },
  {
    id: "sy-sangrado-entre-periodos",
    slug: "sangrado-entre-periodos",
    name: "Sangrado Entre Periodos",
    colloquialNames: ["manchado intermenstrual", "sangrado fuera de regla"],
    description:
      "El sangrado entre periodos menstruales, también llamado sangrado intermenstrual, es cualquier sangrado vaginal que ocurre fuera de los días habituales de la menstruación. Puede relacionarse con miomas uterinos, alteraciones hormonales u otras causas que requieren identificarse.",
    causes: [
      "Miomatosis uterina",
      "Pólipos endometriales o cervicales",
      "Alteraciones hormonales del ciclo",
    ],
    alarmSigns: [
      "Sangrado abundante entre periodos",
      "Sangrado después de la menopausia",
      "Sangrado tras las relaciones sexuales de forma repetida",
    ],
    whyConsult:
      "Todo sangrado fuera del periodo menstrual habitual, y especialmente cualquier sangrado después de la menopausia, debe valorarse para identificar su origen, que puede ir desde miomas hasta otras causas que requieren estudio dirigido.",
    faqs: [
      {
        question: "¿Un manchado leve entre periodos es grave?",
        answer:
          "No siempre, pero cualquier sangrado fuera de lo habitual debe comentarse con la ginecóloga, sobre todo si se repite en varios ciclos o si ocurre después de la menopausia.",
      },
      {
        question: "¿El sangrado después de la menopausia siempre es preocupante?",
        answer:
          "Cualquier sangrado después de confirmada la menopausia debe evaluarse sin demora, ya que, aunque muchas causas son benignas, es importante descartar otras de mayor cuidado.",
      },
    ],
    relatedConditions: ["d-miomatosis-uterina"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/sangrado-entre-periodos.jpg",
    seo: {
      title: "Sangrado Entre Periodos | Ginecóloga CDMX",
      description:
        "El sangrado fuera del periodo menstrual debe evaluarse. Diagnóstico con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["sangrado entre periodos", "manchado intermenstrual CDMX", "ginecóloga sangrado"],
    },
  },
  {
    id: "sy-fatiga",
    slug: "fatiga",
    name: "Fatiga",
    colloquialNames: ["cansancio extremo", "agotamiento"],
    description:
      "La fatiga persistente, más allá del cansancio habitual, puede tener un origen ginecológico frecuentemente pasado por alto: la anemia por sangrado menstrual abundante —como en la miomatosis uterina— o las alteraciones del sueño propias de la menopausia.",
    causes: [
      "Anemia por sangrado menstrual abundante (miomatosis uterina)",
      "Alteraciones del sueño por bochornos nocturnos en la menopausia",
      "Alteraciones hormonales en general",
    ],
    alarmSigns: [
      "Fatiga acompañada de palidez marcada o mareo frecuente",
      "Fatiga con sangrado menstrual abundante simultáneo",
    ],
    whyConsult:
      "Cuando la fatiga se acompaña de sangrado menstrual abundante o de síntomas de menopausia, vale la pena una valoración ginecológica, ya que tratar la causa de fondo —anemia o bochornos nocturnos— suele mejorar la energía de forma notable.",
    faqs: [
      {
        question: "¿Puede un periodo abundante causar fatiga?",
        answer:
          "Sí. El sangrado menstrual abundante y sostenido puede provocar anemia por deficiencia de hierro, cuya manifestación principal es precisamente la fatiga y el cansancio excesivo.",
      },
      {
        question: "¿La fatiga de la menopausia mejora con tratamiento?",
        answer:
          "En muchos casos sí, especialmente cuando se trata el origen: mejorar la calidad del sueño alterado por los bochornos nocturnos suele traducirse en más energía durante el día.",
      },
    ],
    relatedConditions: ["d-menopausia", "d-miomatosis-uterina"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/fatiga.jpg",
    seo: {
      title: "Fatiga y Cansancio en la Mujer | CDMX",
      description:
        "La fatiga puede tener origen ginecológico: anemia por sangrado abundante o menopausia. Diagnóstico con la Dra. Miroslava Castro.",
      keywords: ["fatiga mujer causas", "cansancio menopausia CDMX", "anemia por sangrado menstrual"],
    },
  },
  {
    id: "sy-falta-de-menstruacion",
    slug: "falta-de-menstruacion",
    name: "Falta de Menstruación",
    colloquialNames: ["amenorrea", "ausencia de regla"],
    description:
      "La falta de menstruación, o amenorrea, es la ausencia de periodos menstruales en una mujer en edad reproductiva que previamente menstruaba con regularidad, o la ausencia prolongada de ciclos. Entre sus causas ginecológicas más frecuentes están el síndrome de ovario poliquístico y el inicio de la transición menopáusica.",
    causes: [
      "Síndrome de ovario poliquístico",
      "Inicio de la transición menopáusica",
      "Embarazo",
      "Alteraciones de peso importantes o estrés físico extremo",
    ],
    alarmSigns: [
      "Ausencia de menstruación por más de 3 meses sin explicación clara",
      "Falta de menstruación acompañada de dolor pélvico intenso",
    ],
    whyConsult:
      "La ausencia de menstruación por varios meses, descartado el embarazo, debe evaluarse para identificar su causa hormonal, ya que condiciones como el síndrome de ovario poliquístico tienen tratamiento específico.",
    faqs: [
      {
        question: "¿Cuánto tiempo sin periodo ya se considera amenorrea?",
        answer:
          "Generalmente se considera cuando han pasado 3 meses o más sin menstruación en una mujer que previamente tenía ciclos regulares, sin que el embarazo explique la ausencia.",
      },
      {
        question: "¿La falta de menstruación siempre es por síndrome de ovario poliquístico?",
        answer:
          "No siempre; también puede deberse al inicio de la transición menopáusica, cambios de peso importantes o estrés físico extremo, por lo que la causa debe identificarse de forma individual.",
      },
    ],
    relatedConditions: ["d-menopausia", "d-sindrome-de-ovario-poliquistico"],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/falta-de-menstruacion.jpg",
    seo: {
      title: "Falta de Menstruación (Amenorrea) | CDMX",
      description:
        "La ausencia de periodos menstruales tiene causas identificables. Diagnóstico con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["falta de menstruación causas", "amenorrea CDMX", "ginecóloga amenorrea"],
    },
  },
  {
    id: "sy-mamas-sensibles",
    slug: "mamas-sensibles",
    name: "Mamas Sensibles",
    colloquialNames: ["senos sensibles", "dolor de mamas"],
    description:
      "La sensibilidad o dolor en las mamas (mastalgia) es una molestia frecuente relacionada en la mayoría de los casos con los cambios hormonales normales del ciclo menstrual, el embarazo o la perimenopausia, aunque también puede requerir descartar otras causas si es persistente o unilateral.",
    causes: [
      "Cambios hormonales premenstruales",
      "Embarazo",
      "Fluctuaciones hormonales de la perimenopausia",
    ],
    alarmSigns: [
      "Bulto nuevo y palpable en la mama",
      "Dolor localizado en un solo punto que no cambia con el ciclo",
      "Secreción anormal por el pezón",
      "Cambios en la piel de la mama (hoyuelos, enrojecimiento)",
    ],
    whyConsult:
      "La sensibilidad mamaria cíclica relacionada con el periodo rara vez es motivo de preocupación, pero cualquier bulto nuevo, dolor localizado persistente o cambio en la piel de la mama debe valorarse sin demora.",
    faqs: [
      {
        question: "¿Es normal que las mamas duelan antes de la regla?",
        answer:
          "Sí, es uno de los síntomas premenstruales más comunes, relacionado con los cambios hormonales normales del ciclo, y suele mejorar al iniciar la menstruación.",
      },
      {
        question: "¿Cuándo el dolor de mamas ya no es normal?",
        answer:
          "Cuando es constante, se localiza en un solo punto sin relación con el ciclo, o se acompaña de un bulto palpable o cambios en la piel, es momento de una valoración médica.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/mamas-sensibles.jpg",
    seo: {
      title: "Mamas Sensibles | Ginecóloga en CDMX",
      description:
        "El dolor de mamas suele ser hormonal, pero algunas señales ameritan valoración. Consulta con la Dra. Miroslava Castro en CDMX.",
      keywords: ["mamas sensibles causas", "dolor de senos CDMX", "ginecóloga mastalgia"],
    },
  },
  {
    id: "sy-nauseas-constantes",
    slug: "nauseas-constantes",
    name: "Náuseas Constantes",
    colloquialNames: ["asco frecuente", "malestar estomacal persistente"],
    description:
      "Las náuseas constantes, especialmente en una mujer en edad reproductiva, son con frecuencia uno de los primeros signos de embarazo, aunque también pueden tener otras causas. Cuando son intensas o persistentes, ameritan valoración para confirmar su origen y, en su caso, iniciar el seguimiento adecuado.",
    causes: [
      "Embarazo en etapas tempranas",
      "Cambios hormonales del ciclo menstrual",
      "Otras causas digestivas no ginecológicas",
    ],
    alarmSigns: [
      "Náuseas que impiden mantener cualquier alimento o líquido",
      "Náuseas con dolor abdominal intenso",
      "Signos de deshidratación (mareo intenso, orina muy escasa)",
    ],
    whyConsult:
      "Las náuseas constantes en una mujer en edad reproductiva deben valorarse considerando primero la posibilidad de un embarazo, y si este se descarta, explorar otras causas hormonales o digestivas.",
    faqs: [
      {
        question: "¿Las náuseas constantes siempre son por embarazo?",
        answer:
          "Es una de las primeras causas a considerar en mujeres en edad reproductiva, pero no la única; una prueba de embarazo y la valoración médica ayudan a confirmar el origen.",
      },
      {
        question: "¿Cuándo las náuseas del embarazo son motivo de atención médica?",
        answer:
          "Cuando son tan intensas que impiden mantener alimentos o líquidos en el estómago, existe riesgo de deshidratación y debe buscarse atención médica sin demora.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-23",
    image: "/images/symptoms/nauseas-constantes.jpg",
    seo: {
      title: "Náuseas Constantes | Ginecóloga Obstetra CDMX",
      description:
        "Las náuseas persistentes pueden ser un primer signo de embarazo. Valoración con la Dra. Miroslava Castro en Ciudad de México.",
      keywords: ["náuseas constantes mujer", "náuseas embarazo CDMX", "ginecóloga obstetra"],
    },
  },
];
