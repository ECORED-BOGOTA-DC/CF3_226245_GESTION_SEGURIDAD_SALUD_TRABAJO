<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Riesgos
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width:300px").m-auto
      .col-lg-9
        p Son una medida de la magnitud de los daños frente a una situación peligrosa. El riesgo se mide asumiendo una determinada vulnerabilidad frente a cada tipo de peligro. Si bien no siempre se hace, debe distinguirse adecuadamente entre peligrosidad, vulnerabilidad y riesgo.
        .row
          .col-12.bg-c1
            .p-4
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema1/img1.svg", style="width:90px").m-auto
                .col
                  p Por tanto, el riesgo es la probabilidad que tiene un trabajador que le ocurra una acción (accidente o enfermedad) y la consecuencia que se tenga de la materialización de esta en el entorno laboral.
                  p.mb-0 Es decir, la posibilidad de entrar en contacto con el peligro y que de este se derive un accidente o desarrolle una enfermedad. Por ejemplo, la probabilidad de quemarse y las lesiones que implique la quemadura.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Clasificación
    .row.mb-5
      .col-12.bg-c3
        .p-4
          .row
            .col-lg-6.bg-c2.p-4.mb-4.mb-lg-0
              p Los riesgos se clasifican dependiendo del sector económico y las actividades económicas a los que corresponde la empresa. Dentro de la clasificación se encuentra: Clase I, Clase II, Clase III y Clase IV.
              figure
                img(src="@/assets/curso/tema1/img4.svg", style="width:350px").m-auto
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1/img5.svg", style="width:470px").m-auto
    p.mb-5 De acuerdo a la figura anterior, es importante conocer en detalle cada nivel de peligro, a continuación se presenta la caracterización de cada uno de los niveles en los que se clasifican los riesgos:
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones.p-4(titulo="Clase 1")
            h4 Clase 1
            p Se definen los tipos de riesgo mínimo, de estos hacen parte la mayoría de los riesgos en el sector educativo, comercial y financiero, por ejemplo, colegio, universidades, centros de educación, oficinas, teatros, entre otros.
          .tarjeta.color-acento-botones.p-4(titulo="Clase 2")
            h4 Clase 2
            p Se definen los tipos de riesgo bajo, de estos hacen parte la mayoría de los riesgos de empresas manufactureras con productos textiles y algunos agrícolas y pecuarios. por ejemplo, confecciones de ropa, producción de frutas, cría de ganado vacuno, entre otras.
          .tarjeta.color-acento-botones.p-4(titulo="Clase 3")
            h4 Clase 3
            p Se definen los tipos de riesgo medio, de estos hacen parte empresas del sector manufacturero como alimentos, alcoholes, automotor, cuero, tabaco y plásticos. Por ejemplo, mataderos, fabricación de alcohol a partir de sustancias fermentadas, fabricación de elementos con cuero (Bolsos, zapatos, carteras), entre otros.
          .tarjeta.color-acento-botones.p-4(titulo="Clase 4")
            h4 Clase 4
            p Se definen los tipos de riesgo alto, de estos hacen parte las empresas manufactureras con procesos con aceites, cerveza y vidrio; transporte aéreo y terrestre; fabricación de cartón o papel y manipulación de caña de azúcar. Por ejemplo, elaboración de aceites y grasas de origen animal o vegetal; empresas de los ingenieros azucareros, empresas de elaboración de envases y empaque de cartón y papel, entre otros.
          .tarjeta.color-acento-botones.p-4(titulo="Clase 5")
            h4 Clase 5
            p Se definen los tipos de riesgo máximo, de estos hacen parte las empresas del sector construcción, explotaciones mineras y petroleras explosivos.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/img6.svg", style="width:350px").m-auto
    .row
      .col-12.bg-c4
        .p-4
          .row
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img8.svg", style="width:100px").m-auto
            .col-lg
              p Con el objeto de definir la clasificación del riesgo para las empresas, el gobierno en Colombia establece los criterios y define las actividades por clase de riesgo, con el fin de estandarizar y orientar a las empresas y aseguradoras a cotizar sobre la base correspondiente a cada categoría por tipo de actividad en la empresa. Lo anterior, se reglamenta bajo el Decreto 1607 de 2002.
              p.txt-c1 Cabe anotar, que las empresas pueden realizar cotizaciones en diferentes categorías, esto dependerá de los centros de trabajo establecidos y/o de las actividades que se realicen en cada punto.
    Separador
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1. Exposición
    .row
      .col-12.bg-c5
        .p-4
          p.mb-4 Es el momento exacto en el que un trabajador se encuentra en contacto con un peligro identificado ya sea fuente o situación, por ejemplo, cuando se trabaja con una sierra en mal estado, cuando se trabaja en alturas, cuando se manipulan sustancias químicas, cuando se trabaja con virus y bacterias.
          figure
            img(src="@/assets/curso/tema1/img10.svg", style="width:850px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2. Valoración GTC-45
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-c6
            .p-4
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema1/img11.svg", style="width:50px").m-auto
                .col
                  p.mb-0 Dentro de la prevención de accidentes y desarrollo de patologías para los trabajadores, se hace indispensable la valoración de los riesgos a fin de establecer medidas de control que garanticen ambientes de trabajo seguros o por lo menos, minimizar los riesgos que tienen los trabajadores al encontrarse expuestos a peligros.
        p Teniendo en cuenta lo anterior, las empresas buscan metodologías que orienten en el proceso de identificación de peligros y valoración de riesgo, con el fin de establecer los controles necesarios y de esta manera garantizar que los riesgos queden en un nivel aceptable. #[span.txt-c1 Una de las metodologías más usadas es la Guía Técnica Colombiana (GTC-45)], por medio de ella se dan los lineamientos para atender y cumplir con las indicaciones legales con relación a la matriz de identificación de peligros y valoración de riesgos (IPVR). Para la matriz de IPVR, se deben considerar dos partes importantes que se presentan a continuación:
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/img2.png", style="width:350px").m-auto
    SlyderF.mb-5(columnas="col-md-6 col-xl-3")
      .tarjeta.color-acento-contenido1
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img12.svg", style="width:70px")
          h4.mb-2 Paso 1
          p Escoger una persona que lidere el proceso.
      .tarjeta.color-acento-contenido2
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img13.svg", style="width:70px")
          h4.mb-2 Paso 2
          p Considerar la legislación vigente, aplicable a la empresa.
      .tarjeta.color-acento-contenido3
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img14.svg", style="width:70px")
          h4.mb-2 Paso 3
          p Comunicar la actividad a las partes interesadas. Además, debe tener en cuenta los comentarios que se realizan durante el proceso de la actividad.
      .tarjeta.color-acento-contenido4
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img15.svg", style="width:70px")
          h4.mb-2 Paso 4
          p Contar con un grupo de personas capacitadas y con conocimiento en IPVR.
      .tarjeta.color-acento-contenido5
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img16.svg", style="width:70px")
          h4.mb-2 Paso 5
          p En caso de ser necesario, realizar las evaluaciones higiénicas pertinentes.
      .tarjeta.color-acento-contenido6
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img17.svg", style="width:70px")
          h4.mb-2 Paso 6
          p Considerar los cambios dados en la empresa: administrativos, de proceso, de personas.
      .tarjeta.color-acento-contenido7
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img18.svg", style="width:70px")
          h4.mb-2 Paso 7
          p Documentar los resultados del proceso.
    .row.mb-5
      .col-12.bg-c7
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img27.svg", style="width:70px").m-auto
            .col
              p.mb-0 #[b Es importante tener en cuenta que, para realizar la identificación de un peligro, la evaluación y la valoración del riesgo laboral se deben conocer y entender todas las actividades operativas y administrativas de la empresa, para posteriormente priorizar y proponer las medidas de control necesarias]. En el siguiente recurso se identifican los mínimos para establecer las actividades de la IPVR:
    SlyderF.mb-5(columnas="col-md-6 col-xl-3")
      .tarjeta.color-acento-botones1
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img28.svg", style="width:70px")
          h4.mb-2 Paso 1
          p Establecer el instrumento que será usado, para el levantamiento de la información.
      .tarjeta.color-acento-botones2
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img29.svg", style="width:70px")
          h4.mb-2 Paso 2
          p Tener claros los procesos de la empresa: procesos, actividades y tareas.
      .tarjeta.color-acento-botones3
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img30.svg", style="width:70px")
          h4.mb-2 Paso 3
          p Actividad de campo, con el fin de identificar los peligros presentes en cada proceso.
      .tarjeta.color-acento-botones4
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img31.svg", style="width:70px")
          h4.mb-2 Paso 4
          p Durante la identificación de peligros, observar y anotar los controles existentes en cada tarea.
      .tarjeta.color-acento-botones5
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img32.svg", style="width:70px")
          h4.mb-2 Paso 5
          p Realizar la valoración de los riesgos, conforme al lineamiento y estandarización de la norma GTC-45.
      .tarjeta.color-acento-botones6
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img33.svg", style="width:70px")
          h4.mb-2 Paso 6
          p Con el resultado de la IPVR, proponer un plan de acción en el que se exponen medidas de intervención a fin de reducir riesgos.
      .tarjeta.color-acento-botones7
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img34.svg", style="width:70px")
          h4.mb-2 Paso 7
          p Socializar con las directivas el plan de acción, con el objetivo de establecer qué tan conveniente es.
      .tarjeta.color-acento-botones8
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img35.svg", style="width:70px")
          h4.mb-2 Paso 8
          p Documentar el resultado del proceso.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Identificar peligros
    p.mb-5 Consiste en la valoración de riesgos y determinación de controles, como uno de los pilares fundamentales del diseño del Sistema de Gestión de Seguridad y Salud en el Trabajo, siendo una de las entradas para la identificación y definición de las actividades a realizar con el fin de prevenir accidentes o enfermedades de tipo laboral, en este sentido, en la identificación de peligros se deben considerar los siguientes puntos:
    .tabla-a.color-acento-botones.mb-5
      table
        caption.text-center Nota. GTC-45.
        thead
          tr
            th.text-center Proceso
            th.text-center Zona / Lugar
            th.text-center Actividades
            th.text-center Tareas
            th.text-center Rutinario (sí/No)
            th(colspan="2").text-center Peligro
            th.text-center Efectos posibles
            th(colspan="3").text-center Controles existentes
        tbody(style="background-color: #FFF4D3")
          tr
            td
            td
            td
            td
            td
            td Descripción
            td Clasificación
            td
            td Fuente
            td Medio
            td individuo
    .row.mb-5
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img36.svg", style="width:70px").m-auto
            .col
              p.mb-0 Es en la identificación de peligros, donde se va a tener la oportunidad de ver todo el panorama de las actividades, zonas, cargos, cantidad de personas, etc., en donde existe algún tipo de peligro, y es en la valoración del riesgo en donde se determinará cuales con los riesgos a los que se debe priorizar por su impacto o probabilidad de ocurrencia, es así como lo primero que se debe tener claro es la siguiente información de la empresa:
    .row.bg-c8.mb-5
      .p-5
        .col-12.mb-5
          SlyderF(columnas="col-lg-6")
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img3.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Procesos
                    p Cuántos y cuáles procesos se encuentran establecidos en la empresa, ya sea de producción o prestación de servicios.
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img4.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Zona o lugar
                    p Espacio en el que se desarrollan las actividades o tareas del proceso.
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img5.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Actividades
                    p Fases que corresponden a cada proceso y está compuesto por tareas.
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img6.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Tareas
                    p Trabajo específico en un orden detallado de una actividad. 
                    p Se debe tener claro cuáles son propias, cuáles son subcontratadas, duración, frecuencia y trabajadores asignados.
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img7.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Equipos y herramientas de trabajo
                    p Elementos utilizados para desarrollar una actividad laboral.
            .tarjeta.color-primario
              figure
                img(src="@/assets/curso/tema1/img8.png")
              .row
                .col-12
                  .p-4
                    h4.mb-2 Tipo de trabajo
                    p Trabajo planificado y trabajo reactivo.
        .row.mb-5
          .col-12
            .p-4
              .row.align-items-center
                .col.mb-4.mb-lg-0
                  p.mb-0 Una vez se tiene la información anteriormente descrita, se procede a realizar la actividad de campo, visitando cada una de las zonas o lugares en las que se realizan las tareas.
                .col-lg-auto
                  figure
                    img(src="@/assets/curso/tema1/img38.svg", style="width:70px").m-auto
        .row.justify-content-center
          .col-lg-10
            .tarjeta.tarjeta--azul
              .p-4
                SlyderA(tipo="b")
                  .row.align-items-center.m-1
                    .col-lg-4.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema1/img9.png", style="width:300px").m-auto
                    .col-lg-8
                      h4 Lista de tareas
                      p En cada una de las tareas se deben identificar los peligros. En la columna de peligros se debe colocar la información detallada y clasificada:
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          | En la columna descripción se debe detallar el tipo de peligro se ha identificado, con base en los tipos de peligro existentes. Por ejemplo, trabajo en altura, trabajo con bacterias, ruido, polvo, radiación ionizante.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          | En la columna de clasificación se coloca el tipo de peligro, de acuerdo con su clasificación (de seguridad, biológico, físico, químico, físico).
                  .row.align-items-center.m-1
                    .col-lg-4.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema1/img10.png", style="width:300px").m-auto
                    .col-lg-8
                      h4 Tipos de daño
                      p A largo plazo que afecta la salud del trabajador y puede desarrollar una patología o enfermedad laboral que dé como resultado alguno de los diferentes tipos de daño:
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Leve]: patologías de menor molestia e irritación, tales como dolor de cabeza, diarrea.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Moderado]: patologías que suponen una incapacidad temporal, por ejemplo, asma, alteraciones osteomusculares. 
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Extremo]: patologías que suponen una incapacidad permanente parcial, invalidez o la muerte, por ejemplo, cáncer.
                  .row.align-items-center.m-1
                    .col-lg-4.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema1/img11.png", style="width:300px").m-auto
                    .col-lg-8
                      h4 Tipos de daño
                      p A corto plazo la seguridad que puede ocasionar un accidente de trabajo y dé como resultado alguna de los tipos de daño:
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Leve]: lesiones menores, por ejemplo, contusiones, heridas superficiales, irritación.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Moderado]: lesiones que comprometen una parte del cuerpo, por ejemplo, laceraciones, heridas profundas, fracturas en huesos cortos, quemaduras de primer grado.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Extremo]: lesiones mayores, por ejemplo, amputaciones, fracturas en huesos largos, quemaduras hasta tercer grado, lesiones que comprometen el campo visual, la columna vertebral, capacidad auditiva.
                  .row.align-items-center.m-1
                    .col-lg-4.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema1/img12.png", style="width:300px").m-auto
                    .col-lg-8
                      h4 Controles de peligro
                      p En cada uno de los peligros identificados, se debe verificar si existen controles:
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Fuente]: sobre la generadora de peligros, herramienta, radiación, etc.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Medio]: acciones para intervenir entre la fuente y el trabajador, barreras protectoras, inspecciones.
                        li 
                          i.fas.fa-check-circle(style="color: #465FC4")
                          |
                          p.mb-0 #[b Individuo]: elementos asignados para la protección de los trabajadores.
                      p También se deben considerar las acciones implementadas por la empresa como reasignación de horarios, ajustes en los procesos y procedimientos, capacitaciones.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Valorar el riesgo
    p.mb-5 Una vez identificados los peligros, se debe realizar la valoración del riesgo, con el objeto de verificar que tan aceptable es o no el riesgo al que se encuentra expuesto el trabajador. Para ello se considera la siguiente información:
    .tabla-a.color-acento-botones.mb-5
      table
        caption.text-center Nota. GTC-45.
        thead
          tr
            th(colspan="7").text-center Evaluación del riesgo
            th.text-center Valoración del riesgo
        tbody(style="background-color: #FFF4D3")
          tr
            td.text-center Nivel de deficiencia (ND)
            td.text-center Nivel de exposición (NE)
            td.text-center Nivel de probabilidad (NP)
            td.text-center Interpretación del nivel de probabilidad
            td.text-center Nivel de consecuencia (NC)
            td.text-center Nivel de riesgo (NR)
            td.text-center Interpretación del NR
            td.text-center Aceptabilidad del riesgo
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Nivel de deficiencia
    .row.mb-5
      .col-12.bg-c9
        .p-4
          .row
            .col-lg.mb-4.mb-lg-0
              p Es el resultado de la relación de lo que se espera entre los peligros y la causa directa que se puede tener en la materialización de un evento.
              p.mb-0 #[b De acuerdo con la GTC-45 existen 4 niveles, los cuales se describen a continuación:]
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/img8.svg", style="width:100px").m-auto
    .tabla-a.color-acento-botones.mb-5
      table
        caption.text-center Nota. GTC-45.
        thead
          tr
            th.text-center Nivel de deficiencia
            th.text-center ND
            th.text-center(width="60%") Significado
        tbody(style="background-color: #F6F6F6")
          tr
            td.text-center #[b Muy alto (MA)]
            td.text-center #[b 10]
            td Se ha detectado peligro(s) que determina(n) como muy posible la generación de incidentes, o la eficacia del conjunto de medidas preventivas existentes respecto al riesgo es nula o no existe, o ambos.
          tr
            td.text-center #[b Alto (A)]
            td.text-center #[b 6]
            td Se ha(n) detectado algún(os) peligro(s) que pueden dar lugar a consecuencias significativa(s) o la eficacia del conjunto de medidas preventivas existentes es baja o ambos.
          tr
            td.text-center #[b Medio (M)]
            td.text-center #[b 2]
            td Se han detectado peligros que pueden dar lugar a consecuencias poco significativa(s) o de menor importancia, o la eficacia del conjunto de medidas preventivas existentes es moderada, o ambos.
          tr
            td.text-center #[b Bajo (B)]
            td.text-center #[b No se asigna valor]
            td No se ha detectado anomalía destacable alguna, o la eficacia del conjunto de medidas preventivas existentes es alta, o ambos. El riesgo está controlado.
    .row.mb-5
      .col-12.bg-c10
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img39.svg", style="width:100px").m-auto
            .col-lg
              p.mb-0 La valoración en el nivel de deficiencia se puede realizar de forma cuantitativa y cualitativa, por medio de los anexos D y C respectivamente de la GTC-45. Cabe anotar que para el caso de los peligros psicosociales, la empresa debe implementar metodologías que vayan en coherencia con la normativa vigente del Ministerio de Protección Social.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Nivel de exposición
    p.mb-5 Cantidad de tiempo en la que el trabajador se encuentra en contacto con un peligro identificado durante su jornada laboral. A continuación, se describe cada uno de sus niveles:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center Nivel de exposición
                th.text-center ND
                th.text-center(width="60%") Significado
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b Continua (EC)]
                td.text-center #[b 4]
                td La situación de exposición se presenta sin interrupción o varias veces con tiempo prolongado durante la jornada laboral.
              tr
                td.text-center #[b Frecuente (EF)]
                td.text-center #[b 3]
                td La situación de exposición se presenta varias veces durante la jornada laboral por tiempos cortos.
              tr
                td.text-center #[b Ocasional (EO)]
                td.text-center #[b 2]
                td La situación de exposición se presenta alguna vez durante la jornada laboral y por un periodo de tiempo corto.
              tr
                td.text-center #[b Esporádica (EE)]
                td.text-center #[b 1]
                td La situación de exposición se presenta de manera eventual.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Nivel de probabilidad
    p.mb-4 Es la posibilidad que se materialice un riesgo y de este resulte una consecuencia en el trabajador. Se obtiene de la multiplicación del Nivel de deficiencia por el Nivel de exposición:
    p.text-center.mb-2 #[i #[b NP=ND*NE]]
    p.text-center.mb-5 Para calcular el nivel de probabilidad se usa la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center(colspan="2", rowspan="2") Niveles de probabilidad
                th.text-center(colspan="4") Significado
              tr
                th.text-center(style="background-color: #FFDD7A") 4
                th.text-center(style="background-color: #FFDD7A") 3
                th.text-center(style="background-color: #FFDD7A") 2
                th.text-center(style="background-color: #FFDD7A") 1
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center(rowspan="3") #[b Nivel de deficiencia (ND)]
                td.text-center
                  p.mb-0 #[b 1]
                  p.mb-0 #[b 0]
                td.text-center #[b MA-40]
                td.text-center #[b MA-30]
                td.text-center #[b A-20]
                td.text-center #[b A-10]
              tr
                td.text-center #[b 6]
                td.text-center #[b MA-24]
                td.text-center #[b A-18]
                td.text-center #[b A-12]
                td.text-center #[b M-6]
              tr
                td.text-center #[b 2]
                td.text-center #[b M-8]
                td.text-center #[b M-6]
                td.text-center #[b B-4]
                td.text-center #[b B-2]
    p.text-center.mb-5 Para interpretar el nivel de probabilidad se usa la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center Nivel de deficiencia
                th.text-center ND
                th.text-center(width="60%") Significado
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b Muy alto (MA)]
                td.text-center #[b Entre 40 y 24]
                td Situación deficiente con exposición continua, o muy deficiente con exposición frecuente.  Normalmente la materialización del riesgo ocurre con frecuencia
              tr
                td.text-center #[b Alto (A)]
                td.text-center #[b Entre 20 y 10]
                td Situación deficiente con exposición frecuente u ocasional, o bien situación muy deficiente con exposición ocasional o esporádica.  La materialización del riesgo es posible que suceda varias veces en la vida laboral.
              tr
                td.text-center #[b Medio (M)]
                td.text-center #[b Entre 8 y 6]
                td Situación deficiente con exposición esporádica, o bien situación mejorable con exposición continuada o frecuente.  Es posible que suceda el daño alguna vez.
              tr
                td.text-center #[b Bajo (B)]
                td.text-center #[b Entre 4 y 2]
                td Situación mejorable con exposición ocasional o esporádica, o situación sin anomalía destacable con cualquier nivel de exposición.  No es esperable que se materialice el riesgo, aunque puede ser concebible.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Nivel de consecuencia
    p.mb-5 Es la magnitud o el grado de consecuencia que se tenga, en la materialización de un evento. Se obtiene teniendo en cuenta la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center(colspan="2", rowspan="2", width="40%") Niveles de consecuencia (NC)
                th.text-center Significado
              tr
                th.text-center(style="background-color: #FFDD7A") Daños personales
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b Mortal o catastrófico (M)]
                td.text-center
                  p.mb-0 #[b 10]
                  p.mb-0 #[b 0]
                td Muerte.
              tr
                td.text-center #[b Muy Grave (MG)]
                td.text-center #[b 60]
                td Lesiones graves irreparables (incapacidad permanente parcial o invalidez).
              tr
                td.text-center #[b Grave (G)]
                td.text-center #[b 25]
                td Lesiones con incapacidad laboral temporal (ILT).
              tr
                td.text-center #[b Leve (L)]
                td.text-center #[b 10]
                td Lesiones que no requieren hospitalización.
    p.text-center.mb-5 Se debe considerar la peor consecuencia que se pueda presentar en la actividad que se está valorando.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Nivel de riesgo
    p.mb-5 Es el producto entre el nivel de probabilidad y nivel de consecuencia, que muestra en su resultado la magnitud de un riesgo, con este se determina la aceptabilidad de un riesgo.
    p.text-center.mb-2 #[i #[b NR=NP*NC]]
    p.text-center.mb-5 Para calcular el nivel de riesgo se tiene en cuenta la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center(colspan="2", rowspan="2", width="30%") Nivel de riesgo (NR)
                th.text-center(colspan="4") Nivel de probabilidad (NP)
              tr
                th.text-center(style="background-color: #FFDD7A") 40-24
                th.text-center(style="background-color: #FFDD7A") 20-10
                th.text-center(style="background-color: #FFDD7A") 8-6
                th.text-center(style="background-color: #FFDD7A") 4-2
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center(rowspan="4") #[b Nivel de consecuencia (NC)]
                td.text-center #[b 100]
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 4000-2400
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 2000-1400
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 800-600
                td(style="background-color: #FFFF00")
                  p.text-center.mb-0 II
                  p.text-center.mb-0 400-200
              tr
                td.text-center(style="background-color: #FFC721") #[b 60]
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 2400-1400
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 1200-600
                td(style="background-color: #FFFF00")
                  p.text-center.mb-0 II
                  p.text-center.mb-0 480-360
                td
                  p.text-center.mb-0 II 240
                  p.text-center.mb-0 II 120
              tr
                td.text-center #[b 25]
                td(style="background-color: #FF1F1F")
                  p.text-center.mb-0.text-white I
                  p.text-center.mb-0.text-white 1000-600
                td(style="background-color: #FFFF00")
                  p.text-center.mb-0 II
                  p.text-center.mb-0 500-250
                td(style="background-color: #FFFF00")
                  p.text-center.mb-0 II
                  p.text-center.mb-0 200-150
                td(style="background-color: #98DB03")
                  p.text-center.mb-0 III
                  p.text-center.mb-0 100-50
              tr
                td.text-center(style="background-color: #FFC721") #[b 10]
                td(style="background-color: #FFFF00")
                  p.text-center.mb-0 II
                  p.text-center.mb-0 400-200
                td
                  p.text-center.mb-0 II 200
                  p.text-center.mb-0 II 100
                td(style="background-color: #98DB03")
                  p.text-center.mb-0 III
                  p.text-center.mb-0 80-60
                td(style="background-color: #98DB03")
                  p.text-center.mb-0 III 40
                  p.text-center.mb-0 IV 20
    p.text-center.mb-5 Para interpretar el nivel de riesgo se usa la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center Nivel de riesgo y de intervención
                th.text-center ND
                th.text-center(width="60%") Significado
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b I]
                td.text-center #[b 4000-600]
                td Situación crítica.  Suspender actividades hasta que el riesgo este bajo control. Intervención urgente.
              tr
                td.text-center #[b II]
                td.text-center #[b 500-150]
                td Corregir y adoptar medidas de control de inmediato.  Sin embargo, suspenda actividades si el nivel de consecuencia está por encima de 60.
              tr
                td.text-center #[b III]
                td.text-center #[b 120-40]
                td Mejorar si es posible.  Sería conveniente justificar la intervención y su rentabilidad.
              tr
                td.text-center #[b IV]
                td.text-center #[b 20]
                td Mantener las medidas de control existentes, pero se deberían considerar soluciones o mejoras y se deben hacer comprobaciones periódicas para asegurar que el riesgo aun es tolerable.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Aceptabilidad del riesgo
    p.mb-5 Es el nivel de tolerancia que se tiene, resultado del producto de nivel de consecuencia por el nivel de probabilidad. Este resultado es el que se tiene en cuenta para priorizar las medidas de intervención, de acuerdo con la jerarquía de controles. Los niveles de riesgo y su aceptabilidad se describen en la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center Nivel de riesgo
                th.text-center(width="60%") Significado
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b I]
                td.text-center No aceptable
              tr
                td.text-center #[b II]
                td.text-center No aceptable o aceptable con control específico
              tr
                td.text-center #[b III]
                td.text-center Mejorable
              tr
                td.text-center #[b IV]
                td.text-center Aceptable
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Criterios para establecer controles
    p.mb-5 Una vez se tengan los detalles de identificación de peligros y valoración de riesgos, se procede a determinar las medidas de intervención con base en la priorización de aceptabilidad del riesgo. Previo a la determinación de medias de intervención, se debe tener claridad en los siguientes criterios:
    .row.justify-content-center.mb-5
      .col-10.col-lg.m-2.bg-c11
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img40.svg", style="width:190px").m-auto
          h4.text-center.mb-0 Número de trabajadores expuestos
          p.text-center Teniendo en cuenta que se debe considerar el alcance del control sugerido.
      .col-10.col-lg.m-2.bg-c11
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img41.svg", style="width:190px").m-auto
          h4.text-center.mb-0 Peor consecuencia
          p.text-center A pesar de conocer los efectos posibles, dentro de este grupo de efectos se debe considerar que el control aplique sobre la peor consecuencia.
      .col-10.col-lg.m-2.bg-c11
        .p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img42.svg", style="width:190px").m-auto
          h4.text-center.mb-0 Requisitos legales
          p.text-center Verificar si existen requisitos aplicables a la empresa, teniendo en cuenta las actividades que se desarrollan dentro de los procesos.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Medidas de intervención
    p.mb-5 Una vez definidos los criterios para establecer controles, se procede con la elección de medidas de intervención, de acuerdo con las políticas de la empresa, en coherencia con sus necesidades y en orden de prioridad establecido con base en la aceptabilidad del riesgo. Cabe mencionar que se deben tener en cuenta los costos, beneficios, eficiencia, eficacia y confiabilidad de los controles a implementar. Es por ello tener claro cuál de las medidas de intervención es la correcta en el peligro identificado:
    .row.align-items-end.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img43.svg", style="width:400px").m-auto
      .col-lg-8
        .row.mb-4
          .col-12.bg-c13
            .row
              .col-3.bg-c12.shadow
                .row
                  .col-12.h-100
                    .p-4
                      p.mt-2.text-center.mb-0 #[b Eliminación:]
              .col
                .p-4
                  p.mb-0 Es cuando se cambia la forma de trabajar o se modifica el método de trabajo, con el fin de eliminar el peligro. Por ejemplo, implementación de carga mecánica.
        .row.mb-4
          .col-12.bg-c13
            .row
              .col-3.bg-c12.shadow
                .row
                  .col-12.h-100
                    .p-4
                      p.mt-2.text-center.mb-0 #[b Sustitución:]
              .col
                .p-4
                  p.mb-0 Cuando se cambió o se reemplaza el material que se está usando, por uno menos contaminante o peligroso. Por ejemplo, cambio en el amperaje usado.
        .row.mb-4
          .col-12.bg-c13
            .row
              .col-3.bg-c12.shadow
                .row
                  .col-12.h-100
                    .p-4
                      p.mt-2.text-center.mb-0 #[b Control de ingeniería:]
              .col
                .p-4
                  p.mb-0 Cuando se incluyen diseños o rediseños en los lugares de trabajo, aplicando la ingeniería. Por ejemplo, instalaciones en el sistema de ventilación considerando corrientes de aire y humedad.
        .row.mb-4
          .col-12.bg-c13
            .row
              .col-3.bg-c12.shadow
                .row
                  .col-12.h-100
                    .p-4
                      p.mt-2.text-center.mb-0 #[b Controles administrativos, señalización y advertencia:]
              .col
                .p-4
                  p.mb-0 Hacen parte todos los procedimientos administrativos que establezca la empresa. Por ejemplo, capacitaciones.
        .row
          .col-12.bg-c13
            .row
              .col-3.bg-c12.shadow
                .row
                  .col-12.h-100
                    .p-4
                      p.mt-2.text-center.mb-0 #[b EPP/EPI:]
              .col
                .p-4
                  p.mb-0 Dotación de elementos que protejan a los trabajadores en el momento de la exposición. Por ejemplo, gafas, guantes.
    p.mb-5 Cabe mencionar:
    .row.bg-c14.mb-5
      .px-5
        .row.justify-content-center
          .col-lg-5
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img45.svg", style="width:70px").m-auto
              .col
                p.mb-0 Se pueden combinar las medidas a implementar. No existe una regla que obligue a elegir una opción o todas las opciones.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img46.svg", style="width:70px").m-auto
              .col
                p.mb-0 Conocer nuevas tecnologías, a fin de mejorar los controles.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img47.svg", style="width:70px").m-auto
              .col
                p.mb-0 No solo se deben considerar los trabajadores que ejecutan las tareas, se deben proteger a todos los trabajadores cerca al peligro, es decir, que la bien general prima sobre el individual.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img48.svg", style="width:70px").m-auto
              .col
                p.mb-0 Trabajo en la sensibilización de los trabajadores, teniendo en cuenta que su comportamiento y hábitos influyen en el desarrollo de las actividades y en la posibilidad de materializar un evento no deseado.
          .col-lg-5
            hr.d-block.d-lg-none
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img49.svg", style="width:70px").m-auto
              .col
                p.mb-0 Se debe tener en cuenta los mantenimientos, preventivos principalmente, a fin de disminuir riesgos.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img50.svg", style="width:70px").m-auto
              .col
                p.mb-0 Inducciones, entrenamientos, reentrenamientos, conocimiento de la planta, principalmente de las personas que no frecuentan las instalaciones, como visitantes, contratistas, entre otros.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img51.svg", style="width:70px").m-auto
              .col
                p.mb-0 Si se considera pertinente cambiar el procedimiento o la forma de trabajar, a fin de minimizar los riesgos.
            hr
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/img52.svg", style="width:70px").m-auto
              .col
                p.mb-0 Establecer un plan o protocolo de respuesta ante una emergencia, en caso de fallar con el control implementado.
    .row.align-items-center.mb-5
      .col.mb-4.mb-lg-0
        p.mb-0 Una vez se escogen las medidas de intervención se procede a elaborar el plan de acción, con el objeto de verificar la pertinencia de los controles seleccionados y ejecución eficaz del proceso. En este paso #[span.txt-c1 es importante considerar tanto los criterios internos como los externos de la empresa, de esta manera se tiene una garantía del proceso realizado en la valoración de los riesgos].
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img53.svg", style="width:70px").m-auto
    .row
      .col-12.bg-c15
        .p-4.p-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p.mb-4.txt-c2.text-center.text-white #[b Elementos para la matriz de identificación de peligros y valoración de riesgo]
              .row
                .col-12.bg-c16.shadow
                  .p-4
                    ul.lista-ul.mb-0
                      li 
                        i.fas.fa-check-circle(style="color: #465FC4")
                        | Por lo menos una vez al año.
                      li 
                        i.fas.fa-check-circle(style="color: #465FC4")
                        | Cuando existe un accidente mortal o catastrófico.
                      li 
                        i.fas.fa-check-circle(style="color: #465FC4")
                        | Cuando existan cambios de:
                      li
                        ul
                          li 
                            i
                            | #[b 1.] Personal
                          li 
                            i
                            | #[b 2.] Procesos
                          li 
                            i
                            | #[b 3.] Normatividad legal
                      li 
                        i.fas.fa-check-circle(style="color: #465FC4")
                        | Nuevos peligros identificados.
                      li 
                        i.fas.fa-check-circle(style="color: #465FC4")
                        | Retroalimentación de procesos de investigación de accidentes e incidentes, pruebas de procese de respuesta a emergencias.
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/img55.svg", style="width:400px").m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3. Jerarquía de controles
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img56.svg", style="width:400px").m-auto
      .col-lg-8
        .row.mb-4
          .col-12.bg-c10
            .p-4
              p.mb-0 Es un mecanismo sistemático usado en las empresas con el objetivo de establecer controles a peligros identificados en los lugares de trabajo, que ayuden a eliminar los peligros, minimizar riesgos asociados a cada uno de los peligros identificados en las diferentes tareas realizadas por los trabajadores en la empresa y aumentar la seguridad y salud de los trabajadores.
        p.mb-0 La jerarquía de controles está conformada por cinco niveles, cada uno de los cuales establece una medida a implementar, garantizando ambientes de trabajo seguro. Cabe mencionar, que a medida que se avanza en el control se considera se considera menos efectivo que el anterior, siendo de esta manera el primero el más efectivo y el último el menos efectivo.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Niveles
    p.mb-5 Los niveles de controles de seguridad laboral es entonces una escala de medidas que permiten mitigar, eliminar, trasladar o compartir un riesgo en el lugar de trabajo, que va desde lo más fácil hasta lo más complejo. A continuación se presentan cada uno de los cinco (5) niveles con sus respectivos ejemplos:
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Eliminación")
            .col-12
              p En este nivel se busca eliminar el peligro existente, dentro de él se busca suspender la utilización de sustancias tóxicas, corrosivas o peligrosas; eliminar la carga manual de mercancía e implementar una carga mecánica; reordenar el trabajo a fin de eliminar los que tienen características monótonas.
          .row(titulo="Sustitución")
            .col-12
              p En este nivel se busca el reemplazo de sustancias y/o actividades por otras menos peligrosas y más amigables con el trabajador o el medio ambiente. Por ejemplo, cambiar las pinturas usadas, por una menos corrosiva.
          .row(titulo="Control de ingeniería")
            .col-12
              p Aplicar el diseño de ingeniería para rediseñar los lugares de trabajo, cambio en herramientas. Por ejemplo, aislamientos acústicos, protección contra caídas.
          .row(titulo="Control administrativo")
            .col-12
              p En este nivel se busca realizar acciones desde la parte administrativa, como lo son las capacitaciones, gestión en la SST, cursos para certificaciones, programas de vigilancia epidemiológica, establecer horarios, turnos y jornadas de trabajo.
          .row(titulo="EPP/EPI")
            .col-12
              p En este nivel se busca dotar a los trabajadores de elementos de protección personal o equipos de protección individual, en coherencia con las necesidades identificadas en la ejecución de cada tarea a realizar. Por ejemplo, para el trabajo con abundante agua, botas tipo pantanera, para trabajo con electricidad guantes y botas que permitan aislar de la corriente.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/img57.svg", style="width:450px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Efectividad
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c17
        .p-4
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              .row
                .col-12.bg-c18.shadow
                  .p-4
                    figure.mb-4
                      img(src="@/assets/curso/tema1/img59.svg", style="width:60px")
                    p.mb-0 La efectividad se define en coherencia con el objetivo de cada nivel, a los tres primeros niveles se les conoce como barreras duras, es decir, aquellas medidas que eliminan, sustituyen o aíslan los peligros. Cabe mencionar que son las que requieren de una mayor inversión, teniendo en cuenta que disminuyen o eliminan las consecuencias que se puedan tener de la materialización de un evento, así como también garantizan la reducción en la probabilidad de ocurrencia de dicho evento.
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1/img61.svg", style="width:450px").m-auto
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img62.svg", style="width:70px").m-auto
      .col
        p.mb-0 Los dos niveles restantes se les conoce como barreras blandas, teniendo en cuenta que son medidas que ayudan solo en la disminución de la probabilidad de que ocurra un evento, teniendo en cuenta que solo controlan los peligros no requieren una inversión mayor.
    .row.bg-c19
      .px-5
        SlyderF.mb-5(columnas="col-md-6 col-xl-3")
          .tarjeta.color-acento-botones
            .p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img45.svg", style="width:70px").m-auto
              p Si se analiza el nivel de eliminación, se puede observar que en este nivel se está desapareciendo físicamente el peligro.
          .tarjeta.color-acento-botones
            .p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img46.svg", style="width:70px").m-auto
              p Cuando se pasa al siguiente nivel se observa que lo que se hace en este nivel es reemplazar el peligro, pero sigue existiendo un peligro.
          .tarjeta.color-acento-botones
            .p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img47.svg", style="width:70px").m-auto
              p En el siguiente nivel se mantiene el mismo peligro, pero con un complemento, un aislante entre él y los trabajadores.
          .tarjeta.color-acento-botones
            .p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img48.svg", style="width:70px").m-auto
              p En el siguiente nivel se puede proponer una reestructuración en los procesos a fin de mejorar el modo de trabajo de las personas, pero es muy subjetivo, ya que depende de los mismos trabajadores.
          .tarjeta.color-acento-botones
            .p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img49.svg", style="width:70px").m-auto
              p Por último, se dejan los peligros tal cual como se identificaron, pero colocando una barrera de protección llamada EPP o EPI, que protege al trabajador de una parte del cuerpo en una actividad específica.
        p.mb-5 En este orden de ideas, si se detalla y analiza cada uno de los niveles se comprueba que es más efectivo eliminar el peligro que implementar una acción, conservando los peligros en cada una de las tareas ejecutadas en el lugar de trabajo.
        .row.mb-5
          .col-lg-9.mb-4.mb-lg-0
            p Cabe anotar, que cuando se realiza una medida de intervención, se debe realizar nuevamente la identificación de peligros y valoración de riesgo, por dos razones:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Confirmar que la medida de intervención sí es efectiva y garantiza la reducción del riesgo.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Confirmar que no aparecieron nuevos peligros con las intervenciones implementadas, aumentando el riesgo de los trabajadores.
            p Por otra parte, en la elección de las medidas de intervención es importante tener en cuenta la normativa legal vigente, a fin de no incumplir con requisitos legales.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema1/img64.svg", style="width:350px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
