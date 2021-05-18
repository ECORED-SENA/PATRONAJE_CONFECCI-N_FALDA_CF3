<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="intro confección de falda")
    
    p.mb-5 Este material de formación presenta el orden operacional más adecuado para la confección de una falda básica, cumpliendo con los parámetros de calidad dispuestos, para cumplir con las condiciones y atributos necesarios, que permitan comodidad, funcionalidad y satisfacción al momento de su uso. El trabajo se hace en un proceso desde los hilos hasta el paso a paso para la confección, mostrando los ajustes y detalles necesarios en función de las condiciones de calidad su uso. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
