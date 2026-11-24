# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. Miroslava Castro — Urología Ginecológica y Obstetricia
**Ciudad:** Ciudad de México

**Nota de tono y discreción:** este catálogo trata temas íntimos de salud femenina (vías urinarias, útero, ovarios, piso pélvico, embarazo). Ningún prompt debe producir anatomía explícita, genitales, desnudez o imágenes sexualizadas. Para anatomía, usar siempre ilustración 3D médica abstracta/esquemática (cortes transversales estilizados, nunca fotorrealistas ni gráficos) en vez de fotografía real del cuerpo. Para síntomas/servicios, usar fotografía editorial cálida de la interacción médico-paciente (rostro, manos, consultorio) — nunca el área íntima del cuerpo, nunca una paciente real identificable, siempre modelo genérica con consentimiento implícito de uso comercial. Tono profesional, tranquilizador y respetuoso, nunca clínico-frío ni alarmista.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud de Urología Ginecológica, Ginecología y Obstetricia.
Tono: Profesional, cálido y tranquilizador — nunca clínico-frío, nunca sexualizado ni explícito, respetuoso de un tema íntimo de salud femenina.
Estilo: Mezcla de dos registros según el tema — (1) ilustración 3D médica elegante y esquemática (nunca fotorrealista ni gráfica, nunca genitales explícitos) para anatomía y padecimientos, usando formas abstractas/estilizadas del aparato urogenital; (2) fotografía editorial cálida de la interacción médico-paciente (consulta, manos, rostro, consultorio) para síntomas y servicios — nunca el área íntima del cuerpo expuesta.
Identidad visual OBLIGATORIA (paleta real de marca del logotipo de la doctora): lila/lavanda (#B498C4), rosa (#EB99B6), teal (#44AFD1), fondo blanco cálido con tinte lila — colores suaves, nunca saturados ni neón.
Restricciones: Cero desnudez, cero genitales explícitos, cero sangre, cero imágenes sexualizadas, cero pacientes reales identificables — siempre modelo genérica o ilustración abstracta. Para temas delicados (embarazo, parto, cirugía), usar encuadres tranquilizadores: manos cuidadosas de personal médico, equipo médico desenfocado de fondo, nunca el procedimiento invasivo en sí. Prohibidos hologramas, neones, HUDs futuristas. Cero palabras, texto, marcas de agua, firmas o números en la imagen.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Luz suave, cálida y difusa — nunca dura ni clínica-fría.
- Color Palette: Lila/lavanda (#B498C4), Rosa (#EB99B6), Teal (#44AFD1), blanco cálido, tonos de piel naturales.
- Composition: Centrada, con espacio negativo generoso, composición calmada y elegante.
- Suffixes: elegant abstract 3D medical illustration OR warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
- Negative Prompt: nudity, explicit genitalia, gore, blood, sexualized imagery, dark clinical lighting, hologram, neon, sci-fi, text, watermark, signature, real identifiable patient.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Osteoporosis (`public/images/diseases/osteoporosis.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized bone cross-section showing dense vs. porous bone structure, educational and non-graphic, soft rounded forms.
Color Palette: Lila (#B498C4) dense bone, Teal (#44AFD1) highlight, warm white background.
Composition: Centered cross-section, generous negative space, calm educational framing.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: gore, sharp edges, text, watermark.
```

### 2. Infecciones Vaginales (`public/images/diseases/infecciones-vaginales.jpg`)
```text
Warm editorial photo of a female doctor and patient in a calm consultation, doctor's reassuring hand gesture, bright modern clinic office, both fully clothed, professional atmosphere.
Color Palette: Lila (#B498C4) and Rosa (#EB99B6) decor accents, warm white walls.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 3. Menopausia (`public/images/diseases/menopausia.jpg`)
```text
Warm editorial photo of a confident woman in her 50s smiling softly by a sunlit window at home, calm and serene mood, natural warm light.
Color Palette: Lila (#B498C4) clothing accent, warm natural tones, soft daylight.
Composition: Centered, shallow depth of field, calm atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, distress, text, watermark.
```

### 4. Incontinencia Urinaria (`public/images/diseases/incontinencia-urinaria.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized pelvic floor support structure (abstract muscular band shape under a simplified bladder silhouette), educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Lila (#B498C4) support structure, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 5. Endometriosis (`public/images/diseases/endometriosis.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized uterus silhouette with soft glowing highlight spots representing tissue growth, educational, non-graphic, no genitalia.
Color Palette: Rosa (#EB99B6) uterus silhouette, Teal (#44AFD1) highlight spots, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 6. Prolapso de Órganos Pélvicos (`public/images/diseases/prolapso-de-organos-pelvicos.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized pelvic support diagram (abstract bowl/hammock shape supporting simplified organ silhouettes), educational, non-graphic, no genitalia.
Color Palette: Lila (#B498C4) support structure, Teal (#44AFD1) organ silhouettes, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 7. Vejiga Hiperactiva (`public/images/diseases/vejiga-hiperactiva.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized bladder silhouette with soft pulsing glow rings around it suggesting urgency, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) glow rings, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 8. Miomatosis Uterina (`public/images/diseases/miomatosis-uterina.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized uterus silhouette with a few smooth rounded nodules on its surface, educational, non-graphic, no genitalia.
Color Palette: Rosa (#EB99B6) uterus silhouette, Lila (#B498C4) nodules, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 9. Quistes Ováricos (`public/images/diseases/quistes-ovaricos.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized ovary silhouette with one smooth translucent rounded cyst shape, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) ovary silhouette, Lila (#B498C4) translucent cyst, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 10. Síndrome de Ovario Poliquístico (`public/images/diseases/sindrome-de-ovario-poliquistico.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized ovary silhouette with several small translucent rounded follicles arranged around its edge, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) ovary silhouette, Rosa (#EB99B6) follicles, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 11. Cistitis Intersticial (`public/images/diseases/cistitis-intersticial.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized bladder silhouette with a soft inflamed-looking warm glow on its inner wall, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) warm inner glow, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 12. Infecciones Urinarias Recurrentes (`public/images/diseases/infecciones-urinarias-recurrentes.jpg`)
```text
Warm editorial photo of a woman holding a glass of water at home in soft natural light, calm reassuring mood, bright and clean setting.
Color Palette: Teal (#44AFD1) accent, warm natural tones, soft daylight.
Composition: Centered, shallow depth of field, calm atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, distress, text, watermark.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS/PROCEDIMIENTOS

### 1. Tratamiento para Incontinencia Urinaria (`public/images/services/tratamiento-para-incontinencia-urinaria.jpg`)
```text
Warm editorial photo of a physiotherapy-style consultation, doctor explaining a pelvic floor exercise diagram on a tablet to a seated patient, both fully clothed, bright modern clinic.
Color Palette: Lila (#B498C4) and Teal (#44AFD1) clinic decor accents, warm white walls.
Composition: Centered, soft focus background, calm professional mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 2. Tratamiento para Prolapso de Órganos Pélvicos (`public/images/services/tratamiento-para-prolapso-de-organos-pelvicos.jpg`)
```text
Warm editorial photo of a doctor showing a small silicone medical device (pessary) in its sterile packaging on a clean exam table, explaining calmly, no body parts shown.
Color Palette: Lila (#B498C4) accent, clean white clinical surfaces, warm light.
Composition: Centered, product-adjacent still life with doctor's hands, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 3. Tratamiento para Menopausia (`public/images/services/tratamiento-para-menopausia.jpg`)
```text
Warm editorial photo of a doctor and a middle-aged woman having a calm, friendly conversation in a bright consultation office, warm smiles, professional attire.
Color Palette: Rosa (#EB99B6) and Lila (#B498C4) decor accents, warm natural light.
Composition: Centered, soft focus background, calm supportive mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, distress, text, watermark.
```

### 4. Histerectomía (`public/images/services/histerectomia.jpg`)
```text
Warm editorial photo of a surgical team in clean blue scrubs preparing in a bright modern operating room, calm professional atmosphere, no graphic surgical content visible.
Color Palette: Teal (#44AFD1) scrubs, clean white/steel surgical room tones.
Composition: Centered, wide shot of the team, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, exposed body, text, watermark.
```

### 5. Biopsia de Cérvix (`public/images/services/biopsia-de-cervix.jpg`)
```text
Warm editorial photo of a doctor's hands organizing sterile medical sample containers and instruments on a clean tray, professional and reassuring, no body parts shown.
Color Palette: Teal (#44AFD1) accent, clean white clinical surfaces, warm light.
Composition: Centered still life, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, exposed body, text, watermark.
```

### 6. Biopsia de Endometrio (`public/images/services/biopsia-de-endometrio.jpg`)
```text
Warm editorial photo of a doctor reviewing a laboratory sample report on a tablet in a bright consultation office, calm professional mood, no body parts shown.
Color Palette: Lila (#B498C4) accent, clean white clinical surfaces, warm light.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, exposed body, text, watermark.
```

### 7. Colposcopia (`public/images/services/colposcopia.jpg`)
```text
Warm editorial photo of a modern colposcope device (medical magnifying instrument) standing beside a clean exam chair in a bright clinic room, no patient present.
Color Palette: Teal (#44AFD1) device accent, clean white clinical surfaces.
Composition: Centered still life, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 8. Ultrasonido Obstétrico (`public/images/services/ultrasonido-obstetrico.jpg`)
```text
Warm editorial photo of a pregnant woman's hands resting on her belly over clothing, doctor holding an ultrasound probe nearby, both smiling softly, bright clinic room.
Color Palette: Lila (#B498C4) and Teal (#44AFD1) clinic accents, warm natural light.
Composition: Centered, soft focus background, tender calm mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 9. Papanicolau (`public/images/services/papanicolau.jpg`)
```text
Warm editorial photo of a female doctor smiling reassuringly while holding a clipboard in a bright, friendly consultation room, welcoming professional mood.
Color Palette: Rosa (#EB99B6) accent, warm white walls, soft daylight.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, text, watermark.
```

### 10. Ecografía Ginecológica (`public/images/services/ecografia.jpg`)
```text
Warm editorial photo of an ultrasound machine screen showing an abstract soft glow pattern (non-diagnostic, stylized), doctor's hand on the control panel, bright clinic room.
Color Palette: Teal (#44AFD1) screen glow, clean white clinical surfaces.
Composition: Centered, shallow depth of field, calm professional mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: real diagnostic imagery, exposed body, text, watermark.
```

### 11. Cesárea (`public/images/services/cesarea.jpg`)
```text
Warm editorial photo of a newborn's tiny hand wrapped in a soft blanket held gently by a parent, bright warm hospital room, tender calm mood, no surgical content shown.
Color Palette: Lila (#B498C4) blanket accent, warm natural light.
Composition: Centered close-up, generous negative space, tender mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, surgical content, text, watermark.
```

### 12. Atención del Parto (`public/images/services/atencion-del-parto.jpg`)
```text
Warm editorial photo of a calm hospital birthing room with soft natural light, a comfortable bed and monitoring equipment visible, no people shown, serene atmosphere.
Color Palette: Rosa (#EB99B6) and Lila (#B498C4) soft decor accents, warm natural light.
Composition: Centered wide shot of the room, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, blood, text, watermark.
```

### 13. Legrado Uterino (`public/images/services/legrado-uterino.jpg`)
```text
Warm editorial photo of a doctor comforting a seated patient with a gentle hand on her shoulder in a bright consultation room, both fully clothed, calm supportive mood.
Color Palette: Lila (#B498C4) accent, warm white walls, soft daylight.
Composition: Centered, soft focus background, calm supportive mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, blood, exposed body, text, watermark.
```

---

## 🔎 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Irritación Vaginal (`public/images/symptoms/irritacion-vaginal.jpg`)
```text
Warm editorial photo of a woman's hand gently resting on her lower abdomen over clothing, soft discomfort expression, bright calm home setting.
Color Palette: Rosa (#EB99B6) clothing accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 2. Dolor al Orinar (`public/images/symptoms/dolor-al-orinar.jpg`)
```text
Warm editorial photo of a woman sitting on the edge of a bed holding a glass of water, mild discomfort expression, soft morning light, fully clothed.
Color Palette: Teal (#44AFD1) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 3. Ciclos Irregulares (`public/images/symptoms/ciclos-irregulares.jpg`)
```text
Warm editorial photo of a woman marking a wall calendar with a pen, thoughtful expression, bright home office setting.
Color Palette: Lila (#B498C4) calendar accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text legible on calendar, watermark.
```

### 4. Bochornos (`public/images/symptoms/bochornos.jpg`)
```text
Warm editorial photo of a woman gently fanning herself with her hand by an open window, soft warm light, calm relatable moment.
Color Palette: Rosa (#EB99B6) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 5. Alteraciones en el Estado de Ánimo (`public/images/symptoms/alteraciones-en-el-estado-de-animo.jpg`)
```text
Warm editorial photo of a woman sitting thoughtfully by a window with a cup of tea, calm reflective mood, soft natural light.
Color Palette: Lila (#B498C4) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, crying, text, watermark.
```

### 6. Necesidad de Orinar con Frecuencia (`public/images/symptoms/necesidad-de-orinar-con-frecuencia.jpg`)
```text
Elegant abstract 3D medical illustration of a stylized bladder silhouette with small radiating pulse lines suggesting urgency, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) pulse lines, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 7. Presión Pélvica (`public/images/symptoms/presion-pelvica.jpg`)
```text
Warm editorial photo of a woman gently placing both hands on her lower abdomen over clothing, calm concerned expression, soft indoor light.
Color Palette: Lila (#B498C4) clothing accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 8. Calambres Menstruales (`public/images/symptoms/calambres-menstruales.jpg`)
```text
Warm editorial photo of a woman resting on a sofa holding a warm compress to her lower abdomen over clothing, cozy soft light, calm relatable moment.
Color Palette: Rosa (#EB99B6) compress/blanket accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 9. Periodos con Flujo Intenso (`public/images/symptoms/periodos-con-flujo-intenso.jpg`)
```text
Warm editorial photo of a woman organizing a small toiletry bag of feminine hygiene products on a bathroom shelf, calm neutral mood, bright clean setting.
Color Palette: Rosa (#EB99B6) accent, clean white bathroom tones.
Composition: Centered still life, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, text, watermark.
```

### 10. Sangrado Entre Periodos (`public/images/symptoms/sangrado-entre-periodos.jpg`)
```text
Warm editorial photo of a woman checking a small day planner with a concerned but calm expression, soft indoor light, bright home setting.
Color Palette: Lila (#B498C4) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, text, watermark.
```

### 11. Fatiga (`public/images/symptoms/fatiga.jpg`)
```text
Warm editorial photo of a woman resting her head on her hand at a desk, eyes gently closed, soft natural window light, calm relatable moment.
Color Palette: Teal (#44AFD1) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 12. Falta de Menstruación (`public/images/symptoms/falta-de-menstruacion.jpg`)
```text
Warm editorial photo of a woman looking thoughtfully out a window with a calendar visible nearby, calm reflective mood, soft natural light.
Color Palette: Lila (#B498C4) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text legible, watermark.
```

### 13. Mamas Sensibles (`public/images/symptoms/mamas-sensibles.jpg`)
```text
Warm editorial photo of a woman wearing a soft comfortable sweater, gentle calm expression, hand resting near her chest over clothing, soft indoor light.
Color Palette: Rosa (#EB99B6) sweater accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 14. Náuseas Constantes (`public/images/symptoms/nauseas-constantes.jpg`)
```text
Warm editorial photo of a woman sitting calmly on her bed holding a glass of water, gentle mild discomfort expression, soft morning light.
Color Palette: Teal (#44AFD1) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```
