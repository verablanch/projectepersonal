# INSTRUCTIONS — Reglas de trabajo y cómo repetir el proceso

> Las reglas vienen de `personalidad.md` y `memoria.md`. El procedimiento y el formato del loop se han puesto por escrito a partir de cómo se ha trabajado en las sesiones.

## Antes de empezar
1. Leer `SOUL.md`, `CONTEXT.md`, `INSTRUCTIONS.md` y `LOG.md` (la última entrada).
2. Revisar el apartado «Pendiente» del último registro.

## Reglas
- Separar hechos confirmados, propuestas y pendientes.
- No modificar la web sin que Vera lo pida; si hay cambios grandes, enseñarlos antes.
- Cada cifra publicada debe poder recalcularse desde el historial. Indicar siempre el umbral (30 segundos) y la zona horaria usada.
- No afirmar que una escucha corresponde a una actividad concreta: el historial no lo dice.
- Nunca subir al repositorio los archivos originales de Spotify.

## El loop de cada scroll
Cada sección trabajada sigue el mismo ciclo, que se documenta en una ficha de `fichas/`:
1. **Vera pide o decide** (qué se muestra, cómo se comporta, con qué tono).
2. **El asistente propone o ejecuta** (calcula, redacta, programa) y dice qué ha hecho y qué no ha podido comprobar.
3. **Se verifica** en tres niveles: los números (recalculables), el funcionamiento (abrir la web en un navegador) y el sentido (solo Vera sabe si refleja su vida).
4. **Vera ajusta** y se repite hasta darlo por bueno o dejarlo anotado como pendiente.

Cada ficha indica **dónde decide Vera** y **quién verifica el resultado**. Plantilla: `fichas/PLANTILLA-FICHA.md`.

## Cómo repetir el proceso
1. Pedir a Spotify el historial de la cuenta y guardarlo **fuera** del repositorio.
2. Describir la rutina semanal (horarios fijos y variables) en `CONTEXT.md`.
3. Calcular los agregados: reproducciones de 30 segundos o más, por hora, franja y día; canciones y artistas principales.
4. Decidir la estructura de apartados y qué dato va en cada uno (ver `LOG.md`, entrada del 22 de noviembre).
5. Construir cada scroll con su loop y su ficha.
6. Anotar la sesión en `LOG.md`.
7. Publicar: subir la carpeta a GitHub y activar GitHub Pages.

## Publicar con GitHub Pages
1. Subir el contenido de la carpeta a la rama `main` del repositorio (con `index.html` en la raíz).
2. En el repositorio: **Settings → Pages → Build and deployment**. Elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guardar.
3. Esperar uno o dos minutos y abrir `https://verablanch.github.io/projectepersonal/`.
4. Comprobar: scroll de cada sección, portadas, hover y reproductor de las 12 canciones.

## Cierre de sesión
Actualizar `LOG.md` (trabajo, decisiones, pendiente), las fichas afectadas y, si hace falta, `memoria.md`.
