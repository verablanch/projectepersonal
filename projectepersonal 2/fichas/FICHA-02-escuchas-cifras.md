# Ficha 2 — Escuchas: cifras (scroll horizontal fijado)

- **Efecto de scroll:** la sección se fija y las tarjetas con las cifras clave se desplazan en horizontal.
- **Objetivo:** enseñar los datos generales del año (registros, horas, canciones, artistas, días).

## Loop
1. **Claude:** monta la sección con tarjetas deslizantes.
2. **Vera:** abre la vista previa y detecta que el scroll no funciona bien y todo se ve cortado.
3. **Claude:** encuentra la causa (al cambiar el nombre de la sección, el script y los estilos seguían buscando el nombre antiguo) y lo corrige.
4. **Vera:** ahora el título y la descripción tapan las tarjetas, y quiere que no baje directamente a la siguiente sección.
5. **Claude:** separa el título (arriba) de las tarjetas (banda inferior) y añade una pausa al final del recorrido.

## Dónde decide Vera
Qué cifras se muestran, cuánto espacio necesita lo escrito y que la sección se detenga antes de pasar a la siguiente.

## Qué hace Claude
Corrige el código y ajusta las medidas.

## Quién verifica el resultado
Vera, en pantalla. Los dos fallos los detectó ella, no Claude. Las cifras las recalcula Claude (el número de días con escucha pasa de 361 a 363 al usar hora de Madrid).

## Estado y límites
Pendiente de que Vera confirme que, tras el último ajuste, se lee bien y la pausa final es la adecuada.
