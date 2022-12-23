<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Todas las empresas constituidas en el territorio colombiano se encuentran obligadas a realizar la identificación de los peligros y valoración de riesgos, con el objetivo de encontrar la aceptabilidad de los riesgos, en el caso que los riesgos no sean aceptables, se deberá proponer medidas de intervención que eliminen los peligros o garantice la reducción en el riesgo al que se encuentran expuestos los trabajadores; se invita a ver el siguiente video que permitirá contextualizar el contenido del presente componente:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tfbw-OXaz-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
