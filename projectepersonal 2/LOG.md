# Historial de sesiones

Este archivo registra lo que se trabaja en cada sesión. Cada entrada debe incluir los avances, las decisiones confirmadas y las tareas pendientes para facilitar la continuidad.

## 2026-11-24 — Entrega: base del proyecto, fichas del loop y GitHub Pages

### Trabajo realizado
- Se organizó la carpeta del proyecto para la entrega: `SOUL.md`, `CONTEXT.md`, `INSTRUCTIONS.md` y `LOG.md` (la base), la carpeta `fichas/` y la web en la raíz para publicarla con GitHub Pages.
- `personalidad.md` pasó a `SOUL.md` y `contexto.md` a `CONTEXT.md`; `log.md` pasó a `LOG.md`. `INSTRUCTIONS.md` es nuevo: reúne las reglas de trabajo ya acordadas y el procedimiento para repetir el proceso.
- Se redactaron 4 fichas del loop, una por scroll trabajado: Rutina, Escuchas (cifras), Escuchas (12 canciones) y Franjas. Cada una indica dónde decide Vera y quién verifica el resultado. Se añadió una plantilla para nuevas fichas.
- Se creó una plantilla de Figma para la memoria del proyecto (home, investigación, conceptualización, prototipado y conclusión) y un segundo Figma con los esbozos de la web en la paleta nueva.
- Se retiró del paquete la carpeta con los datos originales de Spotify (contiene pagos, identidad y mensajes) y se añadió un `.gitignore` para que no se suba.

### Decisiones
- Se mantiene el criterio provisional de hora de Madrid, pendiente de confirmar por Vera.
- Las fichas separan tres niveles de verificación: números (recalculables), funcionamiento (navegador) y sentido (solo Vera).
- No se ha podido comprobar la web abierta en un navegador ni el reproductor de Spotify desde el entorno de trabajo.

### Pendiente
- Vera: activar GitHub Pages (Settings → Pages → rama `main`, carpeta raíz) y comprobar que la web funciona en la URL publicada.
- Vera: probar el reproductor y la carga de portadas; confirmar la hora de las franjas; completar datos de contacto y frase final.
- Contrastar `SOUL.md`, `CONTEXT.md` e `INSTRUCTIONS.md` con las plantillas de la sesión 4, que no estaban disponibles al redactarlos.

## 2026-11-22 — Web reestructurada según el documento de apuntes

### Trabajo realizado
- Se reorganizó la web en portada y 6 apartados con el menú de la plantilla: Philosophy, Works, Services, Process, Company y Contact.
- Philosophy: tres comparaciones rutina-música (mañanas, tardes, lo que no cambia).
- Works: cifras clave y las 12 canciones más escuchadas. Services: una canción por franja (5 franjas).
- Process: acordeón con los 6 artistas más escuchados. Company: perfil de Rojuu por franjas. Contact: frase final y fuente.
- Se eliminaron las secciones de palabras, gráfico por hora, selector de días y referencias.
- Las franjas y comparaciones usan hora de Madrid (el archivo viene probablemente en UTC); los días con escucha pasan a 363.

### Decisiones
- Hora de Madrid como criterio provisional, pendiente de confirmar por Vera.
- Confirmado por Vera: durante las horas con los niños escucha «La lluna, la pruna» (SX3). Philosophy tiene ahora 4 etapas; la nueva se sitúa tras «Tardes» (27 de sus 28 reproducciones terminan entre las 16 y las 20 h de lunes a jueves).
- Títulos de los apartados: Rutina, Escuchas, Franjas, Artistas, Constancia y Contacto (menú y etiquetas de sección).
- 12 canciones: cuadrícula 3x4 con portadas. Al pasar el ratón se muestran título, artista y reproducciones; al hacer clic suena con el reproductor de Spotify (IDs de las 12 canciones sacados de YourLibrary.json). Las portadas se cargan de la carpeta img/portadas (01.jpg…12.jpg) o, si no están, de Spotify.
- Portadas de Vera añadidas en img/portadas (01.jpg–12.jpg, recortadas a cuadrado 800×800); el número de archivo coincide con el número de la canción.
- Paleta nueva: Gallery #EFEFEF, Lavender Rose #EAA2E5, Tidal #E8F9A2 y Mulberry Wood #5F0032 (sustituye al rojo y blanco anterior).
- (Anterior) Estética a partir del referente de ByBlocks (Figma Library): fondo claro #f2f2f1, texto y bloques en rojo #dc3a24, tipografía Inter, etiquetas entre paréntesis y un bloque rojo en la portada. El modo oscuro invierte los colores (fondo rojo).

### Pendiente
- Portadas de las canciones (las envía Vera), datos de contacto y frase final definitiva.
- Confirmar la idea de Process (6 artistas) y quién elige la música de las tardes con los niños.
- Revisar la web en navegador.

## 2026-11-21 — Reinicio de textos de la web

### Trabajo realizado
- Se retiraron de la página los textos personales, el contenido del proyecto, las cifras, la rutina, las referencias y el retrato.
- Se conservaron la estructura visual y los efectos de scroll, con etiquetas genéricas para volver a definir las secciones desde cero.

## 2026-11-21 — Narrativa de semana y música

### Trabajo realizado
- Se reemplazaron las etiquetas provisionales por una narración de la rutina semanal y sus momentos de escucha, conservando la plantilla y sus interacciones.
- Se recalcularon las estadísticas desde los tres historiales de Spotify: registros, duración, canciones, artistas, días, distribución por hora, franja y día de la semana.
- Se añadió un selector de lunes a domingo que cruza el horario habitual descrito con agregados musicales del mismo día de la semana, sin afirmar que una escucha corresponda a una actividad específica.
- Se añadieron aclaraciones para distinguir los datos de reproducción del contexto narrativo y para señalar que las horas del historial son horas de finalización.
- Se hizo seleccionable cada día de lunes a domingo; la ficha muestra la rutina descrita y promedios musicales calculados para todas las ocurrencias de ese día en el periodo.
- Se añadió el desglose horario completo y los temas más repetidos por franja con el umbral de 30 segundos.

## 2026-11-21 — Portfolio inspirado en SANTAL

### Trabajo realizado
- Se reorganizó la portada de Vera como un portfolio editorial con titular, mirada del proyecto, proyecto destacado, método, presentación y contacto.
- Se reinterpretó la referencia SANTAL con fondo cálido, tipografía de gran escala, secciones limpias y composición adaptable a móvil.
- Se conservó la investigación completa de My Daily Frequencies y se muestran únicamente cifras agregadas de Spotify que ya estaban documentadas.
- Se simplificó el JavaScript de navegación para que la portada y las páginas interiores sigan funcionando sin el antiguo relato de scroll.
- Tras los comentarios de Vera, se retiró la esfera violeta del encabezado del proyecto y se sustituyó por un gráfico lineal y sobrio que relaciona recorrido y audio.

## 2026-11-21 — Adaptación de santal-scroll.zip

### Trabajo realizado
- Se tomó el sistema de scroll del ZIP como base para rehacer toda la web en una sola página: cabecera fija, escenas por etapas, palabras horizontales, cifras desplazables, acordeón y animaciones de entrada.
- Se sustituyó todo el contenido de muestra por el proyecto My Daily Frequencies y la información personal disponible de Vera.
- Se incorporaron las cifras reales de Spotify y se dejó explícito que el cruce con movilidad sigue pendiente.
- Se recuperaron las canciones más repetidas por franja, los artistas con más horas y el esquema general de la rutina semanal.
- Se añadieron navegación móvil, alternancia de tema, soporte para movimiento reducido y un modo de lectura si GSAP o Lenis no cargan.
- Se conservó el enlace antiguo `#proyecto` como acceso al proyecto destacado.

### Pendiente
- Revisar el resultado en navegador y ajustar el ritmo visual si hace falta.
- Completar los datos de contacto cuando Vera los facilite.

### Pendiente
- Completar la presentación y añadir datos de contacto cuando Vera los facilite.
- Revisar visualmente en navegador escritorio y móvil.

## 2026-11-04 — Creación del sistema de documentación

### Trabajo realizado
- Se identificó el repositorio `verablanch/projectepersonal`.
- Se creó la estructura inicial de documentación: `personalidad.md`, `contexto.md`, `memoria.md` y `log.md`.

### Decisiones
- Consultar los cuatro archivos al inicio de cada sesión de trabajo en este repositorio.
- Utilizar `log.md` como historial cronológico de lo trabajado.
- Utilizar `memoria.md` para conservar información estable y decisiones importantes.

### Pendiente
- Definir y documentar el contexto específico y los objetivos del proyecto.
- Completar los criterios de trabajo cuando se concreten las necesidades del proyecto.

## 2026-11-18 — Portada personal

### Trabajo realizado
- Se sustituyó la página inicial por una portada a pantalla completa con la fotografía familiar proporcionada.
- Se añadió el nombre «Vera Blanch Rodà» como titular y se prepararon ajustes de encuadre y contraste para móvil.
- Se guardó la imagen localmente como `foto-vera.jpg`.

### Decisiones
- Mantener la portada sencilla, con el nombre como único texto principal.

### Pendiente
- Revisar visualmente la portada en escritorio y móvil y ajustar el encuadre si hace falta.

## 2026-11-18 — Navegación de la portada

### Trabajo realizado
- Se añadió una cabecera con accesos a Vera, Contacto y Proyecto.
- Cada acceso abre una pantalla propia y se puede volver al inicio desde la cabecera.
- Se incorporó una presentación breve, el texto ya existente de My Daily Frequencies y un apartado de contacto pendiente de completar.

### Pendiente
- Sustituir o ampliar los textos provisionales de Vera y Contacto con la información que indique Vera.
- Continuar el diseño de la página principal con el segundo scroll.

## 2026-11-18 — Contenido de investigación del proyecto

### Trabajo realizado
- Se integró en Proyecto el contenido de la entrega de investigación: fuentes de datos y método, concepto, 4Q, referentes, palabras clave, valores, tono y conclusiones.
- Se distribuyó en siete secciones verticales con la tipografía, el fondo cálido y los espacios amplios de la web, en lugar de replicar el diseño del PDF.
- Se conservaron los enlaces web de los cuatro referentes.

### Pendiente
- Revisar el contenido en pantalla y ajustar cualquier texto o detalle visual que Vera quiera cambiar.

## 2026-11-18 — Retrato en la sección Vera

### Trabajo realizado
- Se añadió la foto proporcionada como retrato pequeño junto a la presentación de Vera, con formato vertical tipo currículum y adaptación móvil.

## 2026-11-18 — Dirección visual inspirada en Noomo

### Trabajo realizado
- Se reinterpretó la referencia con titulares de mayor escala y peso, una paleta lavanda y violeta eléctrico y módulos con más contraste.
- Se añadió una esfera gráfica animada que cruza una línea de recorrido y representa de forma conceptual la relación entre movilidad y música.
- Se incorporaron microinteracciones en botones y tarjetas, con ajustes para móvil y preferencia de movimiento reducido.

### Criterio
- Se mantiene el contenido y las fotografías propias del proyecto; la referencia se utiliza como orientación visual y de interacción.

## 2026-11-18 — Nueva portada del proyecto

### Trabajo realizado
- Se reemplazó la portada personal por una entrada a My Daily Frequencies con pregunta de investigación y una gráfica abstracta de música y movimiento.
- Se añadieron dos scrolls: las fuentes y variables que se observarán, y el objetivo de cruzar los registros.
- Se dejó claro el alcance de exploración, sin presentar resultados antes de recibir los datos de Spotify y el registro semanal.

### Pendiente
- Integrar y relacionar los datos de Spotify y las actividades de la semana cuando Vera los comparta.

## 2026-11-18 — Navegación e interacciones de My Daily Frequencies

### Trabajo realizado
- Se añadió My Daily Frequencies como acceso a la página principal y se renombró Proyecto como Proceso, conservando el contenido de investigación.
- Se añadió una banda tipográfica en movimiento, revelado de secciones al desplazarse, trazo animado en la gráfica y una pregunta interactiva con dos opciones.
- Se adaptó la navegación a pantallas pequeñas y a preferencias de movimiento reducido.

## 2026-11-18 — Rutina semanal como recorrido interactivo

### Trabajo realizado
- Se añadió un prototipo jugable con selector de día, control de hora, avatar animado, paradas y paneles de actividad y música.
- Se trasladaron los horarios universitarios, las variaciones de canguro y los hábitos de escucha mencionados en la conversación sobre la rutina.
- Se dejaron las franjas sin horario exacto como flexibles y el panel musical preparado para incorporar las canciones cuando lleguen los datos de Spotify.

## 2026-11-18 — Home a pantalla completa con scroll narrativo

### Trabajo realizado
- Se sustituyó el selector de día y el deslizador por una escena fija a pantalla completa: al bajar, el avatar recorre la rutina y cambian la hora, el momento y el color del entorno.
- Se incorporaron los momentos de despertar, universidad, recogidas de canguro con sus diferencias por día, vuelta a casa y fin de semana flexible.
- Se mantuvo una banda tipográfica en movimiento y un panel de banda sonora preparado para asociar canciones reales más adelante.

## 2026-11-18 — Relato visual inspirado en el informe de Cafeteria

### Trabajo realizado
- Se incorporaron frases en primera persona que cambian con el scroll, capítulos con cambios de color y un cierre con cifras confirmadas de la rutina.
- El cierre deja explícito que falta cruzar las escuchas reales de Spotify; no muestra resultados ni canciones inventadas.

## 2026-11-18 — Spotify y profundidad parallax

### Trabajo realizado
- Se analizaron los tres archivos de historial musical: 22.717 registros entre el 27-10-2025 y el 27-10-2026; se añadieron canciones más repetidas por franja y un gráfico de registros por hora.
- Se integraron totales de tiempo, canciones, artistas y días activos, más una comparación de 16:00–20:00 entre lunes-jueves, viernes y fin de semana.
- Se añadió parallax en varias capas, perspectiva 3D, planos de primer término y movimiento diferenciado de cielo, ciudad, camino, avatar y paneles.
- Se aclaró que Spotify registra horas de reproducción, no ubicación ni actividad; los cruces con la rutina son temporales.
