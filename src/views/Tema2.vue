<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Factor de reducción y justificación
    .row.mb-5
      .col-12.bg-c20
        .p-4
          p Es una herramienta implementada por la empresa a fin analizar los criterios sugeridos en las diferentes medidas de intervención y establecer el costo – beneficio y el factor de reducción de riesgo.
          .row
            .col-lg-8.mb-4.mb-lg-0
              p #[b Factor reducción (F)]: se refiere al grado estimado en la disminución de los riesgos asociados a las medidas de intervención sugeridas. En el cálculo para establecer el grado de disminución se tienen en cuenta el nivel de riesgo inicial y nivel de riesgo final esperado en cada una de las medidas de intervención.
              p #[b Factor justificación (J)]: se refiere a la relación costo beneficio de las medidas de intervención sugeridas. Para realizar el cálculo de este factor se tienen en cuenta el nivel de riesgo inicial, factor de reducción y el costo de la medida de intervención. Cabe anotar que este análisis se realiza en cada una de las medidas de intervención sugeridas y se elige la mejor opción, es decir, la que más justifica eliminación o disminución de un riesgo. 
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/img1.png", style="width:350px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Cálculos
    p.mb-5 Para realizar los cálculos de cada uno de los factores se tienen en cuentas las fórmulas establecidas por la GTC-45:
    .row.justify-content-center.mb-5
      .col-10.col-lg.m-2.bg-c21
        .p-4
          p.mb-4 #[b Factor de reducción (F):]
          figure.mb-4
            img(src="@/assets/curso/tema2/img1.svg", style="width:350px").m-auto
          p En donde:
          p.mb-0 NR
            sub i
            | = Nivel de riesgo inicial en cada uno de los peligros.
          p.mb-0 NRf = Nivel de riesgo final esperado en cada una de las medidas de intervención sugeridas.
      .col-10.col-lg.m-2.bg-c21
        .p-4
          p.mb-4 #[b Factor de justificación (J):]
          figure.mb-4
            img(src="@/assets/curso/tema2/img2.svg", style="width:350px").m-auto
          p En donde:
          p.mb-0 NR
            sub i
            | = Nivel de riesgo inicial en cada uno de los peligros.
          p.mb-0 F = Factor de reducción
          p.mb-0 d = Costo de la medida de intervención, teniendo en cuenta la tabla a continuación:
    p.mb-5 De acuerdo a lo anterior, es indispensable tener claridad sobre sobre el Costo Salario Mínimo Mensual Legal Vigente (SMMLV) señalado por la GTC-45:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center(colspan="2", width="60%") Costo Salario Mínimo Mensual Legal Vigente (SMMLV)
                th.text-center Factor de costo (d)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center #[b a)]
                td.text-center #[b Más de 150]
                td.text-center #[b 10]
              tr
                td.text-center #[b b)]
                td.text-center #[b De 60 a 150]
                td.text-center #[b 8]
              tr
                td.text-center #[b c)]
                td.text-center #[b De 30 a 60]
                td.text-center #[b 6]
              tr
                td.text-center #[b d)]
                td.text-center #[b De 3 a 30]
                td.text-center #[b 4]
              tr
                td.text-center #[b e)]
                td.text-center #[b De 0.3 a 6]
                td.text-center #[b 2]
              tr
                td.text-center #[b f)]
                td.text-center #[b De 0.06 a 0.3]
                td.text-center #[b 1]
              tr
                td.text-center #[b g)]
                td.text-center #[b Menos de 0.06]
                td.text-center #[b 0.5]
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema1/img2.svg", style="width:40px").m-auto
      .col
        h3.mb-0 Aplicación
    p.mb-5 Para realizar la aplicación de los conceptos de reducción y justificación es pertinente tener en cuenta la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption.text-center Nota. GTC-45.
            thead
              tr
                th.text-center Riesgos
                th.text-center Medidas de Intervención (MI)
                th.text-center Factor de Reducción del Riesgo (F)
                th.text-center Factor de costo (d)
                th.text-center Monto de la inversión ($)
                th.text-center Factor de Justificación
                th.text-center Medida(s) seleccionada(s)
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center(rowspan="4") #[b R1]
                td.text-center
                  p.mb-0 #[b MI]
                    sub 1
                td.text-center
                  p.mb-0 #[b F]
                    sub 1
                td.text-center
                  p.mb-0 #[b d]
                    sub 1
                td.text-center
                  p.mb-0 #[b $]
                    sub 1
                td.text-center
                  p.mb-0 #[b J]
                    sub 1
                td.text-center
                  p.mb-0 #[b *]
              tr
                td.text-center
                  p.mb-0 #[b MI]
                    sub 2
                td.text-center
                  p.mb-0 #[b F]
                    sub 2
                td.text-center
                  p.mb-0 #[b d]
                    sub 2
                td.text-center
                  p.mb-0 #[b $]
                    sub 2
                td.text-center
                  p.mb-0 #[b J]
                    sub 2
                td
              tr
                td.text-center
                  p.mb-0 #[b MI]
                    sub 3
                td.text-center
                  p.mb-0 #[b F]
                    sub 3
                td.text-center
                  p.mb-0 #[b d]
                    sub 3
                td.text-center
                  p.mb-0 #[b $]
                    sub 3
                td.text-center
                  p.mb-0 #[b J]
                    sub 3
                td.text-center #[b *]
              tr
                td.text-center
                  p.mb-0 #[b MI]
                    sub 4
                td.text-center
                  p.mb-0 #[b F]
                    sub 4
                td.text-center
                  p.mb-0 #[b d]
                    sub 4
                td.text-center
                  p.mb-0 #[b $]
                    sub 4
                td.text-center
                  p.mb-0 #[b J]
                    sub 4
                td
              tr
                td.text-center(rowspan="3") #[b R2]
                td.text-center
                  p.mb-0 #[b MI]
                    sub 1
                td.text-center
                  p.mb-0 #[b F]
                    sub 1
                td.text-center
                  p.mb-0 #[b d]
                    sub 1
                td.text-center
                  p.mb-0 #[b $]
                    sub 1
                td.text-center
                  p.mb-0 #[b J]
                    sub 1
                td.text-center
              tr
                td.text-center
                  p.mb-0 #[b MI]
                    sub 2
                td.text-center
                  p.mb-0 #[b F]
                    sub 2
                td.text-center
                  p.mb-0 #[b d]
                    sub 2
                td.text-center
                  p.mb-0 #[b $]
                    sub 2
                td.text-center
                  p.mb-0 #[b J]
                    sub 2
                td.text-center #[b *]
              tr
                td.text-center
                  p.mb-0 #[b MI]
                    sub 3
                td.text-center
                  p.mb-0 #[b F]
                    sub 3
                td.text-center
                  p.mb-0 #[b d]
                    sub 3
                td.text-center
                  p.mb-0 #[b $]
                    sub 3
                td.text-center
                  p.mb-0 #[b J]
                    sub 3
                td
    p.text-center.mb-0 Las medidas de intervención que serán escogidas serán aquellas en donde el factor justificación tenga el mayor valor.

</template>

<script>
export default {
  name: 'Tema2',
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
