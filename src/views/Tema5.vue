<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Confección falda básica

    figure.mb-4
      img(src='@/assets/curso/banner-tema5.jpg', alt='Confección falda básica')

    .row.mb-5.justify-content-md-center
      .col-lg-12.tarjeta.tarjeta--gris.p-5  
        .row.align-items-center
          .col-lg-5.p-4
            figure.mb-4
              img(src='@/assets/curso/confeccion-falda-basica.png', alt='Confección falda básica')
          .col-lg-6.p-1
            p.mb-5
            | Para iniciar el proceso de confección es importante conocer primero 
            strong la ficha técnica 
            | de la falda básica, en ella encontrarán la descripción de las características de la prenda que se han estudiado a través del proceso formativo. Además de la explicación detallada del proceso de confección, presentado en un orden operacional. 
            p.p-3
            a.boton.boton--a(:href="obtenerLink('/downloads/Ficha_tecnica_falda_basica.pdf')" target="_blank")
              span Descargar ficha técnica
              i.fas.fa-file-download

    .row  
      p.mb-5 Para dar un buen cierre a este proceso formativo se le invita a observar el paso a paso de confección de falda básica, se recomienda identificar los métodos de trabajo asociados a los procesos de costura, lo cuales deberá aplicar en el ejercicio de confección de la falda. 

      .h5 1. Alistamiento
      figure.mb-5
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Ded13sVkftw" title="Alistamiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .h5 2. Procesos de preparación
      figure.mb-5
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/qYml4Zt6HwQ" title="Procesos de preparación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .h5 3. Procesos de ensamble
      figure.mb-5
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/N_HOblGA_SU" title="Procesos de ensamble" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .h5 4. Procesos de terminación
      figure.mb-5
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Q4TtVwonSdQ" title="Procesos de terminación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
