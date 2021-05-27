<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Agujas: sistema y calibre

    figure.mb-4
      img(src='@/assets/curso/banner-tema3.jpg', alt='Agujas: sistema y calibre')
    p.mb-3 La aguja de coser es el principal elemento de la máquina de coser, a través de la historia ha evolucionado y actualmente la tecnología ha diseñado diversidad de agujas acordes a la maquinaria y el uso de las prendas.    
    p.mb-3 La aguja de confección, es una barra de metal cilíndrica alargada, de forma cónica y puntiaguda en uno de sus extremos, posee un orificio por donde pasa el hilo, que permite unir las piezas que formarán una prenda.  Antes de iniciar a confeccionar es importante tener en cuenta las características de la aguja de confección con el fin de elegir la adecuada según el material a confeccionar.
    p.mb-5 A continuación, se hará una descripción de los tipos de punta, sistemas y calibres de aguja con el fin de tener los conocimientos indicados al momento de su elección.


    // 3.1
    #t_3_1.titulo-segundo.h4 3.1. Agujas para máquina de confección industrial

    .row.mb-5
      .col-lg-5
        .p-2.mb-5.mb-lg-0
          p.mb-4 La aguja de confección, es una barra de metal cilíndrica alargada, de forma cónica y puntiaguda en uno de sus extremos, posee un orificio por donde pasa el hilo, que permite unir las piezas que formarán una prenda.          
      .col-lg-3      
      .col-lg-4
        .p-2
          figure
            img(src="@/assets/curso/aguja-maquina-confeccion-industrial.jpg", alt="Aguja")
            figcaption Aguja

    
    // 3.2
    #t_3_2.titulo-segundo.h4 3.2. Partes de la aguja para maquinaria de confección industrial

    p.mb-5 A continuación, se describen las partes de la aguja de confección y sus funciones.

    .row.justify-content-md-center.mb-5
      .col-lg-9
          #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
            .carousel-indicators
              button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
            .carousel-inner
              .carousel-item.active
                figure
                  img(src='@/assets/curso/tope.jpg', alt='Partes de la aguja Tope')
              .carousel-item
                figure
                  img(src='@/assets/curso/cabo.jpg', alt='Partes de la aguja Cabo')
              .carousel-item
                figure
                  img(src='@/assets/curso/declive.jpg', alt='Partes de la aguja Declive')
              .carousel-item
                figure
                  img(src='@/assets/curso/hoja.jpg', alt='Partes de la aguja Hoja')  
              .carousel-item
                figure
                  img(src='@/assets/curso/ranura-larga.jpg', alt='Partes de la aguja Ranura Larga')       
              .carousel-item
                figure
                  img(src='@/assets/curso/muesca-o-hendidura.jpg', alt='Partes de la aguja Muesca o Hendidura')   
              .carousel-item
                figure
                  img(src='@/assets/curso/ojo.jpg', alt='Partes de la aguja Ojo')        
              .carousel-item
                figure
                  img(src='@/assets/curso/punta.jpg', alt='Partes de la aguja Punta')                                                                                          
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.visually-hidden Next    


    // 3.3
    #t_3_3.titulo-segundo.h4 3.3. Función de la aguja

    p.mb-5 La aguja tiene varias funciones y en todas es muy especial.

    .row.mb-5.justify-content-md-center
      .col-lg-9.p-5.tarjeta.tarjeta--gris.tabs-funcion-aguja 
        .row.align-items-center
          TabsC.color-secundario
            .py-3.py-md-4(titulo="A")
              .row.justify-content-md-center
                .col-md-11.mb-4.mb-md-0
                  figure
                    img.mb-4(src='@/assets/curso/funcion-aguja-a.png', alt='Función de la aguja')                
                  p Llevar el hilo de la aguja a través del material y formar una lazada o bucle que pueda ser recogido por el tomador de lazada para formar la puntada. 
            .py-3.py-md-4(titulo="B")
              .row.justify-content-md-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/funcion-aguja-b.jpg', alt='Función de la aguja')
                .col-md-2
                  p Penetrar el material para que pase el hilo. 


    // 3.4
    #t_3_4.titulo-segundo.h4 3.4. Sistema de aguja

    p.mb-3 El sistema de la aguja de coser reúne las características básicas de la aguja (diámetro del cabo, longitud desde el extremo del cabo hasta el principio del ojo, número de ranuras, longitud de la punta), que determinan en qué máquinas es posible utilizar la aguja.
    p.mb-5 La siguiente tabla presenta el sistema de aguja según el tipo de máquina.

    .row.justify-content-md-center.mb-5
      .col-lg-9
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            .h6.mb-0 Sistema de aguja según el tipo de máquina
          table.text-center
            thead
              tr
                th Tipo de máquina
                th Referencia
            tbody.text-center  
              tr
                td Plana electrónica y plana convencional, zigzag sencilla, doble y triple. Plana dos agujas
                td 135 x 5 - 16 x 231 
              tr
                td Ojaladora
                td 135 x 5   
              tr
                td Fileteadora de aguja recta
                td B 27  
              tr
                td Presilladora
                td 149 X 3 - UY 113 X 5 
              tr
                td Pretinadora
                td 62 X 57 - UY 113  
              tr
                td Recubridora
                td B 63 - UY 128 GAS  
              tr
                td Botonadora
                td 108 X 1
              tr
                td Flatseamers
                td UY 118
              tr
                td Cerradora de codo
                td UY 128 - 149 X 3              

    // 3.5
    #t_3_5.titulo-segundo.h4 3.5. Calibre de agujas

    p.mb-5 Las agujas son producidas por varios fabricantes, los cuales, tienen su propio método de nomenclatura para presentar el calibre de estas, por lo que su tamaño, es de acuerdo con el espesor o diámetro y depende de la hoja, según el grueso del material a coser; los más comerciales y sus equivalencias son:

    .row.justify-content-md-center.mb-5
      .col-lg-11
        .tabla-b.color-secundario.tabla-a3.mb-5
          .tabla-b__header
            .h6.mb-0 Calibre de las agujas
          table.text-center
            thead
              tr
                th(colspan='2') Material a coser
                th(colspan='3') Liviano
                th(colspan='2') Semipesado
                th(colspan='4') Pesado
            tbody.text-center  
              tr
                th(rowspan='2') Grosor de la aguja
                td Denominación numérica
                td.number 8
                td.number 9
                td.number 10
                td.number 12
                td.number 14
                td.number 16
                td.number 18
                td.number 20
                td.number 22
              tr
                td Denominación Singer
                td.number 60
                td.number 65
                td.number 70
                td.number 80
                td.number 90
                td.number 100
                td.number 110
                td.number 120
                td.number 140


    // 3.6
    #t_3_6.titulo-segundo.h4 3.6. Puntas de aguja

    p.mb-5 El siguiente slider presenta las diferentes puntas de aguja.

    .row.justify-content-md-center.mb-5
      .col-lg-8.slyder1-2
        SlyderB.p-4(:datos="datosSlyder")
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Punta redonda afilada',
        texto:
          'Estándar para puntada invisible y para pespunte muy recto costuras en tejidos finos.',
        imagen: require('@/assets/curso/punta-redonda-afilada.jpg'),
      },
      {
        titulo: 'Punta redonda regular',
        texto:
          'Estándar para pespunte, tejido tejidos, cuero artificial, tejidos revestidos.',
        imagen: require('@/assets/curso/punta-redonda-regular.jpg'),
      },
      {
        titulo: 'Punta redonda con ligeramente',
        texto: 'Estándar para cadeneta y bordado.',
        imagen: require('@/assets/curso/punta-redonda-con-ligeramente.jpg'),
      },
      {
        titulo: 'Punta redondeada',
        texto:
          'Para todo tipo de tejidos de punto y tejidos de algodón o sintéticos.',
        imagen: require('@/assets/curso/punta-redondeada.jpg'),
      },
      {
        titulo: 'Punta de bola ligera',
        texto:
          'Para tejidos elásticos o de estructura gruesa o tejidos con contenido de caucho o elastómero.',
        imagen: require('@/assets/curso/punta-de-bola-ligera.jpg'),
      },
      {
        titulo: 'Punta de bola mediana',
        texto:
          'Para muy gruesos, muy elásticos y tejidos estructurados abiertos.',
        imagen: require('@/assets/curso/punta-de-bola-mediana.jpg'),
      },
      {
        titulo: 'Punta de bola pesada',
        texto:
          'Para tejidos de punto por urdimbre con alto contenido de elastómero.',
        imagen: require('@/assets/curso/punta-de-bola-pesada.jpg'),
      },
      {
        titulo: 'Punta de bola especial',
        texto:
          'Para bordado Schiffli en abierto estructuras de tejido, tul de algodón y / o tejidos sintéticos.',
        imagen: require('@/assets/curso/punta-bola-especial.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
