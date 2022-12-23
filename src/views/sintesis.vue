<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/img1.svg", style="width:70px").m-auto
      .col
        p.mb-0 Para desarrollar conocimientos claves que permitan valorar los riesgos de acuerdo con los peligros identificados según la actividad económica y de esta manera establecer medidas de control de acuerdo con la jerarquización de los peligros, se invita a revisar la síntesis de los elementos abordados en el componente:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
