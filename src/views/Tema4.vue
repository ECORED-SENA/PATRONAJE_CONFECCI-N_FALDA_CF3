<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Materiales para la confección: tipos y usos

    figure.mb-4
      img(src='@/assets/curso/banner-tema4.jpg', alt='Materiales para la confección: tipos y usos')
    p.mb-5 En el momento de realizar la confección de la falda básica, es fundamental tener claridad sobre los materiales a utilizar, de acuerdo al diseño y a los parámetros de calidad, por lo que previamente se ha realizado el estudio de las características y propiedades de los materiales textiles e insumos utilizados para la confección de falda, con el conocimiento previo se puede elegir el material adecuado para realizar el ejercicio de confección. A continuación, se describen los materiales a utilizar.

    .row.justify-content-md-center.mb-5
      .col-lg-8.slyder1-1
        SlyderB.p-4(:datos="datosSlyder")
    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Lino',
        texto:
          'Por su estructura y propiedades es un material apropiado para trabajar este tipo de falda, 1 metro de tela es la cantidad que se debe adquirir para realizar la falda.',
        imagen: require('@/assets/curso/lino.jpg'),
      },
      {
        titulo: 'Entretela fusionable',
        texto:
          'Entretela liviana, en el comercio encontramos fisionable tejida y no tejida, se requiere para esta prenda 15 centímetros, la mínima cantidad que se puede comprar son 50 cm.',
        imagen: require('@/assets/curso/entretela.jpg'),
      },
      {
        titulo: 'Cremallera',
        texto: 'De nylon de 15 cm de largo.',
        imagen: require('@/assets/curso/cremallera.jpg'),
      },
      {
        titulo: 'Botones',
        texto:
          'De 4 orificios, 20 líneas, color tono a tono con el material que estamos trabajando.',
        imagen: require('@/assets/curso/botones.jpg'),
      },
      {
        titulo: 'Hilo',
        texto:
          'El apropiado para la confección de la falda básica es el hilo calibre T-24 puede ser de núcleo de poliéster y recubierto de poliéster.',
        imagen: require('@/assets/curso/hilo.jpg'),
      },
      {
        titulo: 'Hilaza',
        texto: 'De dos cabos según el tono del material a confeccionar.',
        imagen: require('@/assets/curso/hilaza.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
