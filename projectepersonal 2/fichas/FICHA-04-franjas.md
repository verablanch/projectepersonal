# Ficha 4 — Franjas (una canción por franja)

- **Efecto de scroll:** las filas aparecen en cascada al entrar en pantalla y se rellenan de color al pasar el ratón.
- **Objetivo:** mostrar la canción más escuchada en cada una de las 5 franjas horarias.

## Loop
1. **Vera:** pide una canción por franja, cinco en total.
2. **Claude:** las calcula y descubre que, con las horas tal cual vienen en el archivo (probablemente UTC) y con hora de Madrid, cambian casi todas; presenta las dos versiones.
3. **Vera:** no responde a qué hora usar.
4. **Claude:** aplica hora de Madrid como criterio provisional y lo deja anotado.

## Dónde decide Vera
Qué franjas se muestran y qué hora se usa para definirlas.

## Qué hace Claude
Calcula las dos versiones y avisa de la diferencia.

## Quién verifica el resultado
- **Los números:** Claude, comparando las dos versiones.
- **Si la franja «cuadra» con su día real (por ejemplo, 16–20 h con los niños):** solo Vera.

## Estado y límites
Decisión de hora pendiente. Claude no puede saber con certeza en qué zona horaria está el archivo; la hora de Madrid es la opción que encaja mejor con la rutina, pero es una hipótesis.
