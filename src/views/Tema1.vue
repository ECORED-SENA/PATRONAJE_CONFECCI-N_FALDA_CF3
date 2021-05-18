<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Hilos para confección: clasificación y usos

    .row.mb-5
      figure
        img(src="@/assets/curso/ejm-video.jpg", alt="Video")
   
    
    // 1.1
    #t_1_1.titulo-segundo.h4.mb-5 1.1. Características del hilo de coser

    .row.justify-content-md-center.mb-5
      .col-lg-1
      .col-lg-10
        .row.align-items-center.items-hilo.p-3
          .col-lg-1
            figure
              img(src="@/assets/curso/caracteristica-hilo1.png", alt="Resistencia")
          .col-lg-11
            p 
              strong Resistencia
            p Es la tensión o fuerza con la cual es sometido el hilo hasta llegar a punto de ruptura.
        .row.align-items-center.items-hilo.p-3
          .col-lg-1
            figure
              img(src="@/assets/curso/caracteristica-hilo2.png", alt="Resistencia")
          .col-lg-11
            p 
              strong Elongación
            p Es el aumento de la longitud del hilo antes del momento de la ruptura.   
        .row.align-items-center.items-hilo.p-3
          .col-lg-1
            figure
              img(src="@/assets/curso/caracteristica-hilo3.png", alt="Resistencia")
          .col-lg-11
            p 
              strong Mercerización
            p Es la aplicación de soda cáustica a los hilos de algodón 100% con el objetivo de que las fibras cobran brillo, resistencia y una mejor absorción de colorantes.    
        .row.align-items-center.items-hilo.p-3
          .col-lg-1
            figure
              img(src="@/assets/curso/caracteristica-hilo4.png", alt="Resistencia")
          .col-lg-11
            p 
              strong Solidez del color
            p Es la conversión del tono del color del hilo, de acuerdo con las aplicaciones a las que esté sometido.  
        .row.align-items-center.items-hilo.p-3
          .col-lg-1
            figure
              img(src="@/assets/curso/caracteristica-hilo5.png", alt="Resistencia")
          .col-lg-11
            p 
              strong Deslizamiento
            p Es la capacidad que tiene el hilo de desplazarse suavemente a través de las diferentes partes de la máquina y la tela. Esto se logra por medio de la lubricación, la cual le da protección al hilo contra el reviente debido al recalentamiento de la aguja.               
      .col-lg-1

    // 1.2
    #t_1_2.titulo-segundo.h4.mb-4 1.2. Usos

    .row.mb-5
      .col-lg-7
        .p-4.mb-lg-0
          p.mb-2 Los hilos de coser son muy usados en procesos adicionales a los de la confección, gracias a su versatilidad, es por eso, que se hace énfasis en decir que los hilos en los procesos de confección sirven para:  
          ol.p-3.lista-ol.lista-redonda
              li 
                span.text-bold 1 
                | Confeccionar prendas sometidas a procesos. 
              li 
                span.text-bold 2
                | Confeccionar prendas para teñir.
              li 
                span.text-bold 3
                | Bordar a máquina.
          p Por lo anterior, se hace necesario preguntarse en relación con la fabricación de prendas: 
            strong ¿Qué se debe tener en cuenta al momento de seleccionar un hilo para confección?
          p.mb-2 Las opciones son las siguientes:
          ul.p-3.lista-ul--color
            li 
              i.fas.fa-angle-double-right
              | El tipo de tela, su composición y gramaje. 
            li 
              i.fas.fa-angle-double-right
              | La aguja que puede ser para trabajo liviano, semipesado y pesado.
            li 
              i.fas.fa-angle-double-right
              | La relación entre el calibre del hilo y la aguja.  
      .col-lg-5
        .p-4
          figure
            img(src="@/assets/curso/hilos.jpg", alt="Hilo rojo")

      p.mb-5 Antes de iniciar el proceso de costura es importante tener en cuenta el tipo de hilo con el cual se confeccionará. Primero se debe tener claridad sobre el tipo de tela o material textil a confeccionar y de acuerdo con sus características técnicas, se debe elegir el tipo de hilo. De igual forma, se debe conocer la relación del hilo que se selecciona con el tipo de aguja, acorde y el tipo de material a confeccionar.

    // 1.3
    #t_1_3.titulo-segundo.h4.mb-5 1.3.	Clasificación de los hilos (COATS, 2014)
    p.mb-5 El hilo se puede clasificar de diferentes maneras. Algunas clasificaciones comunes se basan en el substrato y otras en construcción (COATS, 2021).

    // 1.3.1
    .h5 Clasificación basada en substrato
    p.mb-5 Se dice que la clasificación es por substrato, cuando se hace referencia al material y la composición del hilo, dado que dentro del material y su composición se encuentran unas divisiones adicionales que se presentan a continuación.

    .row 
      .col-md-1.col-lg-1
      .col-md-5.col-lg.mb-5
        .tarjeta-Avatar.tarjeta-Hilo
          img(src='@/assets/curso/hilo-natural.png' alt='Hilo natural')
          .tarjeta.tarjeta--gris.p-4
            .h4.text-center Natural
            p El uso de hilo hecho de substratos naturales es bajo en el trabajo industrial; sin embargo, el hilo natural usado de forma más común es el de algodón. 
      .col-md-5.col-lg.mb-5
        .tarjeta-Avatar.tarjeta-Hilo
          img(src='@/assets/curso/hilo-sintetico.png' alt='Hilo sintetico')
          .tarjeta.tarjeta--gris.p-4
            .h4.text-center Sintético
            p Son fibras que han cubierto parte del mercado que era de las fibras naturales, ya que cuentan con propiedades deseadas por los productores como alta tenacidad, alta resistencia a la abrasión y buena resistencia a químicos. Tampoco se ven afectados significativamente por la humedad, podredumbre, moho, insectos o bacterias. 
      .col-md-1.col-lg-1      

    // 1.3.2
    .h5 Clasificación basada en la estructura de construcción del hilo
    p.mb-5 Los hilos son la unificación de fibras naturales o sintéticas y se pueden clasificar por medio de su construcción, por lo que según COATS, (2021)

    .row.mb-5
      .col-lg-8
        .p-4.mb-5.mb-lg-0
          p.mb-4 El 
            strong hilo con núcleo 
            | es una combinación de fibras cortas y filamentos. El hilo con núcleo más usado tiene una construcción de capa múltiple, con cada capa hecha de un centro de filamento de poliéster con fibras de algodón o poliéster recubierto alrededor del núcleo. (párr. 11)
          p.mb-4 Este es un tipo de hilo que usa la fortaleza del filamento poliéster, permite fácil uso en costura por su recubrimiento de fibra de algodón. Este hilo se llama o se conoce como hilo con alma y se usa para costuras de alta velocidad y trabajo.
      .col-lg-4
        .p-4
          figure
            img.mb-3(src="@/assets/curso/hilo-con-nucleo.png", alt="Hilo con núcleo")
            figcaption Hilo con núcleo

    p.mb-5 Ahora, también existen los 
      strong hilos de filamento 
      | que son más fuertes que los hilos de fibra y de estos se conocen tres tipos:        

    .row.mb-5
      .col-md
        .row.justify-content-center.mb-4
          .col-12
            figure.mb-4
              img.p-4(src='@/assets/curso/hilo-monofilamento.png', alt='Hilo monofilamento')
              figcaption Hilo monofilamento
            .h6.titulo__template--a El hilo monofilamento
            p Se hace de una sola fibra continua de un grosor especificado. Aunque el monofilamento es fuerte, uniforme y poco costoso de hacer, carece de flexibilidad y tiene una sensación tiesa y áspera; como resultado, su uso normalmente se restringe a bastillas, cortinas y muebles tapizados.
      .col-md
        .row.justify-content-center.mb-4
          .col-12
            figure.mb-4
              img.p-4(src='@/assets/curso/hilo-multifilamento.png', alt='Hilo multifilamento')
              figcaption Hilo multifilamento
            .h6.titulo__template--a El hilo multifilamento suave
            p Se elabora comúnmente de nylon o poliéster y se usa donde el requisito primordial de la costura es la fortaleza. Consta de dos o más filamentos continuos torcidos juntos. Se usa comúnmente para coser zapatos, prendas de cuero, y productos industriales.
      .col-md
        .row.justify-content-center.mb-4
          .col-12
            figure.mb-4
              img.p-4(src='@/assets/curso/hilo-de-filamento-texturizado.png', alt='Hilo de filamento texturizado')
              figcaption Hilo de filamento texturizado
            .h6.titulo__template--a El hilo de filamento texturizado
            p Se hace usualmente de poliéster y se usa primordialmente como el hilo de lanzadera para puntadas de cobertura; por lo que, los filamentos texturizados le dan más cobertura y extensibilidad a la fibra, pero hace que el hilo se enrede más.
          

    // 1.4
    #t_1_4.titulo-segundo.h4.mb-5 1.4.	Numeración de los hilos

    .row.mb-5
      .col-lg-6
        .p-4.mb-5.mb-lg-0
          p.mb-4 Con la gran cantidad de hilos que se encuentran en el mercado es necesario identificarlos para conocer su longitud específica o la longitud por unidad de masa de un hilo y para eso se usa la numeración, existen varios sistemas y clases para hacer este método.
      .col-lg-6
        .p-4
          figure
            img(src="@/assets/curso/numeracion-hilos.jpg", alt="Numeración de los hilos")

    // 1.4.1
    .h5 Sistemas de numeración de los hilos
    p.mb-5 Los hilos se numeran según su orden de manera inversa y directa como se puede revisar a continuación.

    .h6 Numeración directa
    p.mb-4 Es la longitud fija de hilo y peso variable y se puede considerar:

    .row.mb-5
      .col-lg-2
      .col-lg-4.tarjeta.tarjeta--gris.tarjeta-num.p-5
        .row.justify-content-md-center.text-center
            ol.lista-ol--cuadro.lista-centrada.text-center.mb-3
              li.text-center
                .lista-ol--cuadro__vineta.text-center
                  span a
                | Tex
            p Peso en gramos de
            h3.mb-0 1000  
            p metros de hilo. 
      .col-lg-4.tarjeta.tarjeta--gris.tarjeta-num.p-5
        .row.justify-content-md-center.text-center
            ol.lista-ol--cuadro.lista-centrada.text-center.mb-3
              li
                .lista-ol--cuadro__vineta
                  span b
                | Dennier Den
            p Peso fijo de peso
            h3.mb-0 1 lb 
            p.borde-bottom.mb-2 (libra inglesa = 451,59 gramos)
            p por el número de madejas de
            h3.mb-0 840 yardas 
            p (768,08 m).        
      .col-lg-2

    .h6 Numeración inversa
    p.mb-4 Un peso fijo constante de hilo y la longitud variable, es decir indica la longitud de un peso constante:

      .row.justify-content-md-center.mb-5
        .col-lg-3.tarjeta.tarjeta--gris.tarjeta-num.p-5
          .row.justify-content-md-center.text-center
            ol.lista-ol--cuadro.lista-centrada.text-center.mb-3
              li.text-center
                .lista-ol--cuadro__vineta.text-center
                  span a
                | Métrico
            p Peso fijo de
            h3.mb-0.borde-bottom.mb-2 1 gr 
            p por número de madejas de
            h3.mb-0 1000 metros  
        .col-lg-4.tarjeta.tarjeta--gris.tarjeta-num.p-5
          .row.justify-content-md-center.text-center
            ol.lista-ol--cuadro.lista-centrada.text-center.mb-3
              li
                .lista-ol--cuadro__vineta
                  span b
                | Número Catalán
            p Peso fijo de peso
            h3.mb-0 1.1 lbs catalanas 
            p.borde-bottom.mb-2 (440 gr)
            p por el número de madejas de
            h3.mb-0 777,5 metros      
        .col-lg-4.tarjeta.tarjeta--gris.tarjeta-num.p-5
          .row.justify-content-md-center.text-center
            ol.lista-ol--cuadro.lista-centrada.text-center.mb-3
              li
                .lista-ol--cuadro__vineta
                  span c
                | Número Inglés
            p Peso fijo de peso
            h3.mb-0 1 lb 
            p.borde-bottom.mb-2 (libra inglesa = 451,59 gramos)
            p por el número de madejas de
            h3.mb-0 840 yardas 
            p (768,08 m).    
      


    // 1.4.2
    .h5 Clasificación de la numeración del hilo
    p.mb-5 El número de hilo es el código comercial relacionado con el uso final que recomienda el productor. Se expresa en unidades del sistema TEX como el valor resultante del título individual de hilaza sencilla por el número de cabos. La siguiente tabla presenta los calibres y números de hilos comerciales más populares.
          
    .tabla-a.color-secundario.mb-5.tabla-1
      table
        caption Tabla 1. Calibres y números de hilos comerciales más populares
        thead
          tr
            th Número de hilo
            th(colspan='2') Calibre de aguja a utilizar
            th(rowspan='2') Descripción y uso general en las prendas
          tr
            td.text-center TEX
            td.text-center Denominación Singer
            td.text-center Denominación Numérica           
        tbody
            
          tr
            td 18
            td 70-75
            td 9-10
            td Costuras generales en telas ultralivianas y livianas sintéticas, mezclas o 100% algodón, tejido plano y de punto. Blusas, camisas, pañuelos, pantys, corbatas. Telas en microfibras, transparencias, sedas, jersey, etc., puntada invisible, filetes dinos, amarre de bordados, capullos para acolchados.
          tr
            td 24
            td 70-80
            td 10-12
            td Costuras generales más resistentes en telas livianas sintéticas, mezclas o 100% algodón, tejido plano y de punto. Blusas, camisas, ropa interior femenina y masculina, lencería, acolchados, ropa de cama.
          tr
            td 30
            td 80
            td 12
            td Costuras generales más resistentes en telas livianas sintéticas, mezclas o 100% algodón, tejido plano y de punto. Blusas, camisas, ropa interior femenina y masculina, lencería, pantalonería, ropa deportiva, sudadera, trajes de baño
          tr
            td 40
            td 90
            td 14
            td Costuras generales en telas livianas sintéticas, mezclas O 100% algodón, tejido plano y de punto, pantalones, vestidos tipo sastre, chaquetas, ropa deportiva, sudaderas, ojal de lágrima, trajes de baño, driles medianos, acolchados, edredones.
          tr
            td 60
            td 100
            td 16-18
            td Pespunte en driles semipesados, ropa de trabajo, uniformes, fajas, guantes, camisas para camping, costura de amarre en jeans (12-14 onzas).
          tr
            td 80
            td 125
            td 20
            td Pespunte en driles semipesados, ropa de trabajo, uniformes.    
          tr
            td 105
            td 130
            td 21
            td Telas pesadas y semipesados, costuras de realce en jeans, (12-14 onzas).
          tr
            td 120
            td 130-140
            td 21-22
            td Telas pesadas, costuras de realce en jeans, (12-14 onzas).   

    
    // 1.5
    #t_1_5.titulo-segundo.h4.mb-5 1.5.	 Etiquetas de los hilos de confección
    p.mb-5 Los hilos de confección vienen en presentación de hilo de tubinos o conos,  a continuación, se hace la identificación de la etiqueta que los presenta para la identificación de sus especificaciones técnicas.

    .row.justify-content-md-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/curso/etiquetas-hilos.jpg", alt="Etiquetado del hilo")
          figcaption Etiquetado del hilo
     



    // 1.6
    #t_1_6.titulo-segundo.h4.mb-5 1.6.	 Requerimientos de un hilo de coser de buena calidad
    p.mb-4 Los requerimientos con los que se considera si un hilo es o no es de la mejor calidad para tener en cuenta a la hora de su uso, son:

    ul.lista-ul--color.lista-ul--separador.mb-5.p-4
        li 
          i.fas.fa-chevron-circle-right
          | Una buena fortaleza a la tensión mantiene segura la puntada de la costura durante el lavado y el uso.
        li 
          i.fas.fa-chevron-circle-right
          | Una superficie lisa y la ausencia de fallas, asegura menor fricción entre la aguja y el material durante el cosido a alta velocidad; por lo que el hilo debe estar bien lubricado para aumentar su facilidad de costura y resistencia a la abrasión.
        li 
          i.fas.fa-chevron-circle-right
          | Un grosor o diámetro uniforme tiene el resultado de un hilo de coser regular, que se mueve con suavidad y rapidez a través del ojo de la aguja y la tela, importante mencionar, que también afecta la fortaleza a la tensión del hilo, su resistencia a la abrasión y la construcción del torcido, así que, un hilo irregular puede retorcerse en pequeños nudos y atorarse en el ojo de la aguja.
        li 
          i.fas.fa-chevron-circle-right
          | Una buena elasticidad permite que el hilo se recupere a su longitud original inmediatamente después de que la tensión se ha relajado. La elasticidad del hilo de coser afecta la fortaleza y calidad del terminado de la costura cosida.
        li 
          i.fas.fa-chevron-circle-right
          | Una buena solidez de color proporciona inmunidad ante diferentes agentes a los que el hilo se expone durante la manufactura y lavado. El hilo debe estar, por lo tanto, teñido de manera uniforme.
        li 
          i.fas.fa-chevron-circle-right
          | Bajo encogido del hilo que se usa en tela con mayor tendencia a encoger, reduce la posibilidad de fruncido de costura.
        li 
          i.fas.fa-chevron-circle-right
          | Buena resistencia al ataque químico es una propiedad deseable del hilo usado en prendas que puedan sufrir lavado, blanqueado o limpieza en seco.
        li 
          i.fas.fa-chevron-circle-right
          | La buena resistencia a la abrasión, asegura un buen desempeño de costura y hace que el hilo sea más durable.          
    


    // 1.7
    #t_1_7.titulo-segundo.h4.mb-5 1.7.	Conservación de los hilos

    .row.mb-5
      .col-lg-6
        .p-4.mb-5.mb-lg-0
          p.mb-4 El almacenamiento de los hilos se recomienda en lugares secos (no húmedos) ya que puede haber proliferación de hongos, así, para conservar las propiedades del hilo este debe estar empacado en bolsas de plástico individuales y en una posición fija su mucho peso encima.
      .col-lg-6
        .p-4
          figure
            img(src="@/assets/curso/conservacion-hilos.jpg", alt="Conservación de los hilos")

    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
