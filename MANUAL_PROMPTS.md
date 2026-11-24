# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. Miroslava Castro — Urología Ginecológica y Obstetricia
**Ciudad:** Ciudad de México

**Nota de tono y discreción (revisada 2026-11-24 — ver AGENTS.md §5):** este catálogo trata temas íntimos de salud femenina (vías urinarias, útero, ovarios, piso pélvico, embarazo). Ningún prompt debe producir anatomía explícita, genitales, desnudez o imágenes sexualizadas — pero la discreción no significa vaciar el contenido clínico: una imagen tan genérica que no comunica nada sobre el padecimiento real es tan incorrecta como una explícita. Reglas aplicadas en todo el archivo:
- **Cada prompt nombra el diagnóstico/síntoma/servicio real exacto** en una línea de "Contexto clínico" — nombrar la condición clínica no aumenta el riesgo de rechazo del generador de imágenes; lo que lo dispara es pedir el elemento gráfico literal (genitales, sangre, desnudez), no el nombre de la enfermedad.
- **Para anatomía**, se mantiene la ilustración 3D abstracta/esquemática (silueta estilizada del órgano, nunca fotorrealista ni genitales) — es la técnica correcta aquí dado lo íntimo del tema, pero cada silueta debe leerse claramente como la estructura real que representa, no una forma decorativa intercambiable.
- **Para síntomas, la persona debe verse sintiendo el malestar real** (gesto de incomodidad, mano en la zona, expresión tensa) — nunca neutral ni feliz, salvo en los síntomas genuinamente no dolorosos (p. ej. bochornos, fatiga) donde el malestar se expresa de otra forma legítima.
- **Para temas sensibles (sangrado entre periodos, dolor al orinar, flujo intenso)**, se usa la técnica de sugerir el hecho vía entorno + reacción humana, nunca el elemento gráfico literal: ejemplo del usuario — sangrado → persona mirando un pañuelo/papel con preocupación en un baño (sin mostrar sangre); dolor al orinar → escena ambientada en el baño con gesto de malestar (sin mostrar el síntoma literal). Estas escenas YA NO deben ser reemplazadas por un sustituto desconectado (p. ej. "mujer revisando su agenda" para sangrado, o "mujer con un vaso de agua en la cama" para dolor al orinar) — eso es exactamente el error que se corrige en esta revisión.
- Cero desnudez, cero genitales explícitos, cero sangre visible, cero imágenes sexualizadas, cero pacientes reales identificables — siempre modelo genérica o ilustración abstracta.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud de Urología Ginecológica, Ginecología y Obstetricia.
Tono: Profesional, cálido y tranquilizador — nunca clínico-frío, nunca sexualizado ni explícito, respetuoso de un tema íntimo de salud femenina, pero SIEMPRE representando el padecimiento real, nunca una escena tan desconectada que no comunique la condición.
Estilo: Mezcla de dos registros según el tema — (1) ilustración 3D médica elegante y esquemática (nunca fotorrealista ni gráfica, nunca genitales explícitos) para anatomía y padecimientos, usando formas abstractas/estilizadas del aparato urogenital que se lean con claridad; (2) fotografía editorial cálida de una mujer sintiendo el síntoma real (gesto de malestar genuino) o de la interacción médico-paciente para servicios — nunca el área íntima del cuerpo expuesta, pero usando entorno + reacción humana para sugerir temas sensibles (baño, pañuelo, gesto de preocupación) en vez de un sustituto sin relación con el síntoma.
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
Contexto clínico: Osteoporosis (pérdida de densidad ósea, relevante en el seguimiento ginecológico posmenopáusico).
Elegant abstract 3D medical illustration of a stylized pelvic bone cross-section showing dense vs. porous bone structure side by side, educational and clearly legible, non-graphic, soft rounded forms.
Color Palette: Lila (#B498C4) dense bone, Teal (#44AFD1) highlight, warm white background.
Composition: Centered cross-section comparison, generous negative space, calm educational framing.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: gore, sharp edges, text, watermark.
```

### 2. Infecciones Vaginales (`public/images/diseases/infecciones-vaginales.jpg`)
```text
Contexto clínico: Infecciones Vaginales.
Warm editorial photo of a woman sitting with a gentle hand resting low on her abdomen over clothing, soft expression of discomfort (not neutral, not smiling), calm bright home setting.
Color Palette: Rosa (#EB99B6) clothing accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 3. Menopausia (`public/images/diseases/menopausia.jpg`)
```text
Contexto clínico: Menopausia.
Warm editorial photo of a confident woman in her 50s by a sunlit window at home, gently fanning herself with her hand, calm and serene mood acknowledging the transition, natural warm light.
Color Palette: Lila (#B498C4) clothing accent, warm natural tones, soft daylight.
Composition: Centered, shallow depth of field, calm atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, distress, text, watermark.
```

### 4. Incontinencia Urinaria (`public/images/diseases/incontinencia-urinaria.jpg`)
```text
Contexto clínico: Incontinencia Urinaria.
Elegant abstract 3D medical illustration of a stylized pelvic floor support structure (abstract muscular band shape under a simplified bladder silhouette) shown weakened/sagging on one side versus supported on the other, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Lila (#B498C4) support structure, warm white background.
Composition: Centered, side-by-side comparison, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 5. Endometriosis (`public/images/diseases/endometriosis.jpg`)
```text
Contexto clínico: Endometriosis (tejido endometrial fuera del útero).
Elegant abstract 3D medical illustration of a stylized uterus silhouette with soft glowing highlight spots on and around its outer surface representing displaced tissue growth, educational, non-graphic, no genitalia.
Color Palette: Rosa (#EB99B6) uterus silhouette, Teal (#44AFD1) highlight spots, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 6. Prolapso de Órganos Pélvicos (`public/images/diseases/prolapso-de-organos-pelvicos.jpg`)
```text
Contexto clínico: Prolapso de Órganos Pélvicos.
Elegant abstract 3D medical illustration of a stylized pelvic support diagram (abstract hammock shape) shown descending/stretched under simplified organ silhouettes, educational, non-graphic, no genitalia.
Color Palette: Lila (#B498C4) support structure, Teal (#44AFD1) organ silhouettes, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 7. Vejiga Hiperactiva (`public/images/diseases/vejiga-hiperactiva.jpg`)
```text
Contexto clínico: Vejiga Hiperactiva.
Elegant abstract 3D medical illustration of a stylized bladder silhouette with soft pulsing glow rings around it suggesting involuntary urgency contractions, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) glow rings, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 8. Miomatosis Uterina (`public/images/diseases/miomatosis-uterina.jpg`)
```text
Contexto clínico: Miomatosis Uterina (miomas/fibromas uterinos).
Elegant abstract 3D medical illustration of a stylized uterus silhouette with several smooth rounded fibroid nodules embedded in its wall, educational, non-graphic, no genitalia.
Color Palette: Rosa (#EB99B6) uterus silhouette, Lila (#B498C4) nodules, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 9. Quistes Ováricos (`public/images/diseases/quistes-ovaricos.jpg`)
```text
Contexto clínico: Quistes Ováricos.
Elegant abstract 3D medical illustration of a stylized ovary silhouette with one clearly defined translucent rounded cyst shape on its surface, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) ovary silhouette, Lila (#B498C4) translucent cyst, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 10. Síndrome de Ovario Poliquístico (`public/images/diseases/sindrome-de-ovario-poliquistico.jpg`)
```text
Contexto clínico: Síndrome de Ovario Poliquístico (SOP).
Elegant abstract 3D medical illustration of a stylized ovary silhouette with a distinctive ring of several small translucent follicles arranged around its edge ("string of pearls" pattern), educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) ovary silhouette, Rosa (#EB99B6) follicles, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 11. Cistitis Intersticial (`public/images/diseases/cistitis-intersticial.jpg`)
```text
Contexto clínico: Cistitis Intersticial.
Elegant abstract 3D medical illustration of a stylized bladder silhouette with a soft inflamed warm glow spreading across its inner wall, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) warm inner glow, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, gore, text, watermark.
```

### 12. Infecciones Urinarias Recurrentes (`public/images/diseases/infecciones-urinarias-recurrentes.jpg`)
```text
Contexto clínico: Infecciones Urinarias Recurrentes.
Warm editorial photo of a woman sitting on the edge of a bathtub holding a glass of water, soft wincing expression of discomfort, bright clean bathroom setting in the background implying the recurring symptom.
Color Palette: Teal (#44AFD1) accent, warm natural tones, clean bathroom white.
Composition: Centered, shallow depth of field, calm but clearly uncomfortable mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, text, watermark.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS/PROCEDIMIENTOS

### 1. Tratamiento para Incontinencia Urinaria (`public/images/services/tratamiento-para-incontinencia-urinaria.jpg`)
```text
Contexto clínico: Tratamiento para Incontinencia Urinaria (rehabilitación de piso pélvico).
Warm editorial photo of a pelvic-floor physiotherapy session, doctor guiding a seated patient through a breathing/engagement exercise while pointing at a simplified anatomical diagram on a tablet, both fully clothed, bright modern clinic.
Color Palette: Lila (#B498C4) and Teal (#44AFD1) clinic decor accents, warm white walls.
Composition: Centered, soft focus background, calm professional mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 2. Tratamiento para Prolapso de Órganos Pélvicos (`public/images/services/tratamiento-para-prolapso-de-organos-pelvicos.jpg`)
```text
Contexto clínico: Tratamiento para Prolapso de Órganos Pélvicos (pesario).
Warm editorial photo of a doctor's hands holding a silicone pessary device just removed from its sterile packaging, explaining its fitting calmly on a clean exam table, no body parts shown.
Color Palette: Lila (#B498C4) accent, clean white clinical surfaces, warm light.
Composition: Centered, product-adjacent still life with doctor's hands, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 3. Tratamiento para Menopausia (`public/images/services/tratamiento-para-menopausia.jpg`)
```text
Contexto clínico: Tratamiento para Menopausia (terapia hormonal/acompañamiento).
Warm editorial photo of a doctor and a middle-aged woman having a calm, friendly conversation in a bright consultation office, warm smiles, professional attire.
Color Palette: Rosa (#EB99B6) and Lila (#B498C4) decor accents, warm natural light.
Composition: Centered, soft focus background, calm supportive mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, distress, text, watermark.
```

### 4. Histerectomía (`public/images/services/histerectomia.jpg`)
```text
Contexto clínico: Histerectomía.
Warm editorial photo of a surgical team in clean blue scrubs actively positioned around the operating table, hands adjusting laparoscopic equipment, bright modern operating room, the moment just before the procedure begins — no graphic surgical content visible.
Color Palette: Teal (#44AFD1) scrubs, clean white/steel surgical room tones.
Composition: Centered, mid shot of the team at work, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, exposed body, text, watermark.
```

### 5. Biopsia de Cérvix (`public/images/services/biopsia-de-cervix.jpg`)
```text
Contexto clínico: Biopsia de Cérvix.
Warm editorial photo of a doctor's gloved hands carefully placing a tissue sample into a labeled sterile container on a clean tray, professional and reassuring, no body parts shown.
Color Palette: Teal (#44AFD1) accent, clean white clinical surfaces, warm light.
Composition: Centered still life, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, exposed body, text, watermark.
```

### 6. Biopsia de Endometrio (`public/images/services/biopsia-de-endometrio.jpg`)
```text
Contexto clínico: Biopsia de Endometrio.
Warm editorial photo of a doctor reviewing a laboratory sample report on a tablet with a seated patient in a bright consultation office, calm professional mood, no body parts shown.
Color Palette: Lila (#B498C4) accent, clean white clinical surfaces, warm light.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, exposed body, text, watermark.
```

### 7. Colposcopia (`public/images/services/colposcopia.jpg`)
```text
Contexto clínico: Colposcopia.
Warm editorial photo of a doctor adjusting the focus dial of a modern colposcope (medical magnifying instrument) positioned beside a clean exam chair in a bright clinic room, mid-preparation, no patient present.
Color Palette: Teal (#44AFD1) device accent, clean white clinical surfaces.
Composition: Centered, doctor and device in frame, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 8. Ultrasonido Obstétrico (`public/images/services/ultrasonido-obstetrico.jpg`)
```text
Contexto clínico: Ultrasonido Obstétrico.
Warm editorial photo of a pregnant woman's hands resting on her belly over clothing, doctor holding an ultrasound probe against her belly over a thin gown, both smiling softly, bright clinic room.
Color Palette: Lila (#B498C4) and Teal (#44AFD1) clinic accents, warm natural light.
Composition: Centered, soft focus background, tender calm mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 9. Papanicolau (`public/images/services/papanicolau.jpg`)
```text
Contexto clínico: Papanicolau (citología cervical).
Warm editorial photo of a female doctor's gloved hands preparing a labeled sample slide beside a clean exam chair, calm professional mood, bright friendly consultation room, no patient present.
Color Palette: Rosa (#EB99B6) accent, warm white walls, soft daylight.
Composition: Centered, doctor's hands and equipment in focus, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: dark lighting, text, watermark.
```

### 10. Ecografía Ginecológica (`public/images/services/ecografia.jpg`)
```text
Contexto clínico: Ecografía Ginecológica.
Warm editorial photo of an ultrasound machine screen showing an abstract soft glow pattern (non-diagnostic, stylized), doctor's hand on the control panel adjusting settings, bright clinic room.
Color Palette: Teal (#44AFD1) screen glow, clean white clinical surfaces.
Composition: Centered, shallow depth of field, calm professional mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: real diagnostic imagery, exposed body, text, watermark.
```

### 11. Cesárea (`public/images/services/cesarea.jpg`)
```text
Contexto clínico: Cesárea.
Warm editorial photo of a newborn's tiny hand wrapped in a soft blanket held gently by a parent moments after delivery, a surgical team member in scrubs softly visible at the edge of frame, bright warm hospital room, tender calm mood, no surgical content shown.
Color Palette: Lila (#B498C4) blanket accent, Teal (#44AFD1) scrubs, warm natural light.
Composition: Centered close-up, generous negative space, tender mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, surgical content, text, watermark.
```

### 12. Atención del Parto (`public/images/services/atencion-del-parto.jpg`)
```text
Contexto clínico: Atención del Parto.
Warm editorial photo of a doctor holding the hand of a laboring woman reclined in a hospital bed, reassuring supportive gesture, her face showing focused effort (not distress, not neutral), soft natural light, bright birthing room.
Color Palette: Rosa (#EB99B6) and Lila (#B498C4) soft decor accents, warm natural light.
Composition: Centered, doctor and patient in frame, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, blood, exposed body, text, watermark.
```

### 13. Legrado Uterino (`public/images/services/legrado-uterino.jpg`)
```text
Contexto clínico: Legrado Uterino.
Warm editorial photo of a doctor comforting a seated patient with a gentle hand on her shoulder in a bright consultation room right before the procedure, both fully clothed, calm supportive mood with a hint of the patient's quiet concern.
Color Palette: Lila (#B498C4) accent, warm white walls, soft daylight.
Composition: Centered, soft focus background, calm supportive mood.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, blood, exposed body, text, watermark.
```

---

## 🔎 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Irritación Vaginal (`public/images/symptoms/irritacion-vaginal.jpg`)
```text
Contexto clínico: Irritación Vaginal.
Warm editorial photo of a woman sitting on the edge of a bed, one hand resting low on her abdomen over clothing, visible discomfort expression (slight grimace, tense posture) — not neutral, not smiling — soft bedroom light suggesting she just noticed the discomfort.
Color Palette: Rosa (#EB99B6) clothing accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 2. Dolor al Orinar (`public/images/symptoms/dolor-al-orinar.jpg`)
```text
Contexto clínico: Dolor al Orinar (disuria).
Warm editorial photo of a woman standing just outside a bright bathroom doorway, one hand pressed gently to her lower abdomen, visible wince of discomfort on her face, soft morning light — the bathroom setting and her gesture suggest the symptom through context and reaction, without depicting it literally.
Color Palette: Teal (#44AFD1) accent, warm natural tones, clean bathroom white in background.
Composition: Centered, bathroom doorway visible behind her, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 3. Ciclos Irregulares (`public/images/symptoms/ciclos-irregulares.jpg`)
```text
Contexto clínico: Ciclos Menstruales Irregulares.
Warm editorial photo of a woman marking a wall calendar with a pen, puzzled/concerned expression as she looks at scattered, inconsistent marks across different dates, bright home office setting.
Color Palette: Lila (#B498C4) calendar accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text legible on calendar, watermark.
```

### 4. Bochornos (`public/images/symptoms/bochornos.jpg`)
```text
Contexto clínico: Bochornos (sofocos).
Warm editorial photo of a woman gently fanning herself with her hand by an open window, flushed cheeks, soft warm light, a visibly real but calm reaction to sudden heat.
Color Palette: Rosa (#EB99B6) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 5. Alteraciones en el Estado de Ánimo (`public/images/symptoms/alteraciones-en-el-estado-de-animo.jpg`)
```text
Contexto clínico: Alteraciones en el Estado de Ánimo (relacionadas al ciclo hormonal).
Warm editorial photo of a woman sitting by a window with a cup of tea, visibly tense/withdrawn expression (furrowed brow, distant gaze) — a real low mood, not a neutral or content one — soft natural light.
Color Palette: Lila (#B498C4) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, crying, text, watermark.
```

### 6. Necesidad de Orinar con Frecuencia (`public/images/symptoms/necesidad-de-orinar-con-frecuencia.jpg`)
```text
Contexto clínico: Necesidad de Orinar con Frecuencia (polaquiuria).
Elegant abstract 3D medical illustration of a stylized bladder silhouette with small radiating pulse lines suggesting frequent urgency signals, educational, non-graphic, no genitalia.
Color Palette: Teal (#44AFD1) bladder silhouette, Rosa (#EB99B6) pulse lines, warm white background.
Composition: Centered, symmetrical, generous negative space.
Suffixes: elegant abstract 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit anatomy, genitalia, text, watermark.
```

### 7. Presión Pélvica (`public/images/symptoms/presion-pelvica.jpg`)
```text
Contexto clínico: Presión Pélvica.
Warm editorial photo of a woman standing with both hands pressed firmly on her lower abdomen, visible discomfort expression (eyes slightly closed, tense posture), soft indoor light.
Color Palette: Lila (#B498C4) clothing accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 8. Calambres Menstruales (`public/images/symptoms/calambres-menstruales.jpg`)
```text
Contexto clínico: Calambres Menstruales (dismenorrea).
Warm editorial photo of a woman curled up on a sofa pressing a warm compress firmly to her lower abdomen over clothing, visible grimace of cramping pain, cozy soft light.
Color Palette: Rosa (#EB99B6) compress/blanket accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: exposed body, text, watermark.
```

### 9. Periodos con Flujo Intenso (`public/images/symptoms/periodos-con-flujo-intenso.jpg`)
```text
Contexto clínico: Periodos con Flujo Intenso (menorragia).
Warm editorial photo of a woman sitting on the edge of her bed holding a hot water bottle to her lower abdomen, visibly fatigued/uncomfortable expression, an open bag of feminine hygiene products visible nearby on the nightstand suggesting the heavy-flow context without showing blood, bright clean bedroom.
Color Palette: Rosa (#EB99B6) accent, clean warm tones.
Composition: Centered, woman and nightstand items both in frame, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, text, watermark.
```

### 10. Sangrado Entre Periodos (`public/images/symptoms/sangrado-entre-periodos.jpg`)
```text
Contexto clínico: Sangrado Entre Periodos (sangrado intermenstrual).
Warm editorial photo of a woman standing in a bright bathroom, looking down with concern at a piece of tissue paper she's holding, her expression worried but calm — the bathroom setting and her reaction suggest the symptom through context, without depicting blood.
Color Palette: Lila (#B498C4) accent, clean bathroom white, warm natural tones.
Composition: Centered, bathroom setting visible around her, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, text, watermark.
```

### 11. Fatiga (`public/images/symptoms/fatiga.jpg`)
```text
Contexto clínico: Fatiga.
Warm editorial photo of a woman resting her head heavily on her hand at a desk, eyes closed, visibly drained expression, soft natural window light.
Color Palette: Teal (#44AFD1) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 12. Falta de Menstruación (`public/images/symptoms/falta-de-menstruacion.jpg`)
```text
Contexto clínico: Falta de Menstruación (amenorrea).
Warm editorial photo of a woman looking with concern at a wall calendar with several weeks crossed off and no markings, hand resting on her lower abdomen, soft natural light.
Color Palette: Lila (#B498C4) accent, warm natural tones.
Composition: Centered, calendar and gesture both legible in frame, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text legible, watermark.
```

### 13. Mamas Sensibles (`public/images/symptoms/mamas-sensibles.jpg`)
```text
Contexto clínico: Mamas Sensibles (mastalgia).
Warm editorial photo of a woman wearing a soft comfortable sweater, hand resting gently against her upper chest over clothing with a visible wince of tenderness, soft indoor light.
Color Palette: Rosa (#EB99B6) sweater accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: nudity, exposed body, text, watermark.
```

### 14. Náuseas Constantes (`public/images/symptoms/nauseas-constantes.jpg`)
```text
Contexto clínico: Náuseas Constantes.
Warm editorial photo of a woman sitting on the edge of her bed holding a glass of water, one hand pressed to her stomach, visible queasy discomfort on her face (not neutral), soft morning light.
Color Palette: Teal (#44AFD1) accent, warm natural tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```
