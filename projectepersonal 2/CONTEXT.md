# CONTEXT — Marco del proyecto

## Repositorio
`verablanch/projectepersonal`: espacio de trabajo del proyecto y de la web. Conserva el contexto entre sesiones para que cada una continúe donde se dejó la anterior.

## Proyecto
**My Daily Frequencies.** Una web que relaciona la rutina semanal de Vera con su historial de escucha de Spotify, del 27 de octubre de 2025 al 27 de octubre de 2026. La pregunta de partida: ¿hay patrones entre los momentos de la rutina y lo que se escucha?

Tesis provisional: la rutina cambia mucho según el día, pero la forma de escuchar cambia poco. El historial muestra *cuándo* se escucha, no *por qué* ni *dónde*.

## Datos
- Fuente: los historiales de reproducción y la biblioteca de Spotify de Vera.
- Las cifras de la web están calculadas a partir de ellos y escritas en el HTML. Los archivos originales **no** están en el repositorio: contienen datos personales (pagos, identidad, mensajes). El `.gitignore` lo evita.
- Se cuentan como escucha las reproducciones de 30 segundos o más.
- Las horas del archivo probablemente están en UTC. La web usa hora de Madrid de forma provisional.

## Web
Una sola página con portada y seis apartados: Rutina, Escuchas (cifras y 12 canciones), Franjas, Artistas, Constancia y Contacto.
- Scroll: Lenis y GSAP con ScrollTrigger (secciones fijadas, desplazamiento horizontal, cascadas).
- Tipografía: Inter. Paleta: Gallery `#EFEFEF`, Lavender Rose `#EAA2E5`, Tidal `#E8F9A2`, Mulberry Wood `#5F0032`.
- Las 12 canciones usan el reproductor de Spotify y portadas propias (`img/portadas/`).
- Se publica con GitHub Pages desde `index.html` en la raíz.

## Archivos
- `SOUL.md`: cómo colabora el asistente. `INSTRUCTIONS.md`: reglas de trabajo y cómo repetir el proceso. `CONTEXT.md`: este archivo. `LOG.md`: historial de sesiones. `memoria.md`: decisiones duraderas.
- `fichas/`: una ficha del loop por cada scroll trabajado.
- `index.html`, `style.css`, `script.js`, `img/`: la web.

## Criterio de actualización
No asumir información sin confirmar. Cuando cambie el objetivo o el alcance, actualizar este archivo. Mantener separadas las decisiones vigentes y las ideas provisionales.
