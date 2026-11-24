# Ficha 3 — Escuchas: 12 canciones (cuadrícula con portadas, hover y clic)

- **Efecto de scroll e interacción:** cuadrícula 3×4 de cuadrados con la portada de cada álbum; al pasar el ratón aparece título, artista y reproducciones; al hacer clic suena la canción en un reproductor fijo abajo.
- **Objetivo:** mostrar las 12 canciones más escuchadas y poder oírlas.

## Loop
1. **Claude:** primera versión con 12 rectángulos numerados, solo texto.
2. **Vera:** pide cuadrados con portada, hover y clic para escuchar; pregunta si debe enviar las imágenes.
3. **Claude:** explica que no puede buscar portadas, localiza en los datos de Vera el identificador de Spotify de cada una de las 12 canciones y comprueba que cada uno coincide con su título y artista; programa la cuadrícula, el hover y el reproductor.
4. **Vera:** envía las 12 portadas (el número del archivo es el de la canción).
5. **Claude:** las convierte a cuadrados de 800 px, comprueba el orden en una hoja de contactos y las integra.

## Dónde decide Vera
El formato (3×4), qué pasa al pasar el ratón y al hacer clic, y qué portadas se usan.

## Qué hace Claude
Busca los identificadores en sus datos, prepara las imágenes y programa la interacción.

## Quién verifica el resultado
- **El orden y la correspondencia canción-portada:** Claude (hoja de contactos) y Vera, que conoce sus álbumes.
- **El clic, el reproductor y la carga de portadas desde Spotify:** Vera, abriendo la web con internet. Claude no pudo probarlo porque su entorno no tiene conexión.

## Estado y límites
Pendiente de prueba por parte de Vera. En la vista previa del chat el reproductor no funciona.
