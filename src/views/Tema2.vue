<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Maquinaria, equipos y herramientas para la confección de falda básica: tipos y usos

    figure.mb-4
      img(src='@/assets/curso/banner-tema2.jpg', alt='Maquinaria, equipos y herramientas para la confección de falda básica: tipos y usos')
    p.mb-5 Amaden-Crawford (2014), define la función de la máquina de coser así 
      strong “la máquina de coser utiliza una aguja y un gancho rotatorio para entrelzar dos hilos creando así un prespunte, esa es su función”, 
      | en la actualidad existen gran variedad de máquinas utilizadas para la confección de prendas de vestir que se encuentran divididas según su uso en familiares e industriales, como se explicará a continuación.  
    

    // 2.1
    #t_2_1.titulo-segundo.h4 2.1.	Máquinas familiares

    .row.mb-5
      .col-lg-7
        .p-3.mb-5.mb-lg-0
          p.mb-4 Son las máquinas que permiten hacer diferentes tipos de puntada, utilizando diversos accesorios según el proceso de costura a desarrollar, están diseñadas para un desempeño doméstico, por lo que, para obtener un óptimo resultado en el proceso de costura se requiere calibrarla según el material a utilizar.  
      .col-lg-5
        .p-2
          figure
            img(src="@/assets/curso/maquinas-familiares.jpg", alt="Máquinas familiares")
            figcaption Máquina familiar

    
    // 2.2
    #t_2_2.titulo-segundo.h4 2.2.	Máquinas industriales

    .row.mb-5
      .col-lg-7
        .p-2.mb-3.mb-lg-0
          p.mb-4 Son máquinas que están diseñadas para procesos de producción a gran escala que se clasifican según el tipo de puntada, esto quiere decir que, con cada una de ellas, se puede realizar operaciones especificas gracias a su puntada particular.  Para su utilización es importante tener en cuenta la calibración o la puesta a punto de la máquina según el tipo de material a confeccionar, así mismo cumplir con los requisitos de seguridad industrial en la manipulación. 
          p.mb-4 En este punto se hará un reconocimiento de la maquinaria industrial utilizada en los procesos de confección (tipos y características):        
      .col-lg-5
        .p-2
          figure
            img(src="@/assets/curso/maquina-industrial.jpg", alt="Máquina industrial")
            figcaption Máquina industrial

    
    // 2.2.1
    .h5 Máquina plana

    .row.mb-5
      .col-lg-6
        .p-2.mb-3.mb-lg-0
          p.mb-3 El nombre de plana lo toma de la forma de la base, es considerada la más básica dentro del área de la confección, su puntada es común y la más utilizada, por la seguridad de su costura.
          p.mb-4 
            strong Según la ISO 4915, la puntada que realiza la máquina plana de la serie 301 y su nombre es doble despunte, debido a que su aspecto en el derecho de la costura es igual al revés de la misma.
      .col-lg-6
          .tarjeta.tarjeta--gris.p-4
            h6 Características principales de las máquinas planas:
            ul.lista-ul--color
              li 
                i.fas.fa-chevron-circle-right
                | Utiliza una aguja.
              li 
                i.fas.fa-chevron-circle-right
                | Puede ser utilizada en cualquier tipo de pespunte plano.
              li 
                i.fas.fa-chevron-circle-right
                | Existen dos tipos de tecnologías: 
              li
                ul
                  li 
                    i.fas.fa-dot-circle
                    | Mecánica: el manejo de la máquina corresponde el 100% a la habilidad del operario. 
                  li 
                    i.fas.fa-dot-circle
                    | Electrónica: posee un tablero que le permite programar diferentes funciones con el fin de agilizar y asegurar la calidad del trabajo por el operario.  

    // 2.2.1.1.
    .h5 Partes del cabezote        

    p.mb-5 En la siguiente figura se pueden observar las partes del cabezote y su orden, recuerde que la imagen que se presenta es de referencia y de un modelo de máquina puntual puede ser que la máquina que encuentre en otro taller sea un poco diferente.        

    .row.mb-5.justify-content-md-center
      .container.col-lg-11.mb-1
        .lg-container
          figure
            img.lg-image(src="@/assets/curso/cabezote-maquina-plana.jpg", alt="Cabezote máquina plana")
            figcaption Cabezote máquina plana - Tocar los puntos
          .lg-hotspot.lg-hotspot--2.lg-mobile1-1(style="top: 13%; left: 23%;")  
            .lg-hotspot__button(@mouseover="indicador1 = false")
              .indicador-interaccion(v-if="indicador1")
                .indicador-interaccion__icon
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote1.jpg", alt="Guía hilos")
                .col-lg-6.p-3
                  p 
                    strong Guía hilos
                  p Permite el ajuste continuo de la fuerza de estiraje, para adaptarla al tipo de tejido e hilado empleado.  
          .lg-hotspot.lg-hotspot--2.lg-mobile1-2(style="top: 48%;left: 18%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote2.jpg", alt="Conjunto tensor")
                .col-lg-6.p-3
                  p 
                    strong Conjunto tensor
                  p Discos tensores. Muelle de refrenamiento o tira hilo resortado.              
          .lg-hotspot.lg-hotspot--2.lg-mobile1-3(style="top: 52%;left: 13%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote3.jpg", alt="Palanca tira hilo")
                .col-lg-6.p-3
                  p 
                    strong Palanca tira hilo
                  p Suministra a la aguja la cantidad de hilo necesaria para la formación de la puntada.               
          .lg-hotspot.lg-hotspot--1.lg-mobile1-4(style="top: 51%;left: 71%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote4.jpg", alt="Regulador largo de puntada")
                .col-lg-6.p-3
                  p 
                    strong Regulador largo de puntada
                  p Posibilita determinar la longitud de puntada que se requiere, según e tejido e hilado.               
          .lg-hotspot.lg-hotspot--1.lg-mobile1-5(style="top: 64%;left: 75%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote5.jpg", alt="Barra de retroceso")
                .col-lg-6.p-3
                  p 
                    strong Barra de retroceso
                  p Es la palanca inversora del mecanismo de costura y se usa para rematar las costuras.              
          .lg-hotspot.lg-hotspot--1(style="top: 34%;left: 98%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote6.jpg", alt="Volante o polea")
                .col-lg-6.p-3
                  p 
                    strong Volante o polea
                  p Esta fija al eje del motor y con ella se encaja la correa. 
          .lg-hotspot.lg-hotspot--2.lg-mobile1-7(style="top: 67%;left: 12%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote7.jpg", alt="Barra de aguja")
                .col-lg-6.p-3
                  p 
                    strong Barra de aguja
                  p Sostiene la aguja y le imprime su movimiento.  
          .lg-hotspot.lg-hotspot--2.lg-mobile-8(style="top: 77%;left: 17%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote8.jpg", alt="Garfio")
                .col-lg-6.p-3
                  p 
                    strong Garfio
                  p Toma el hilo de la aguja y lo pasa alrededor de la caja bobina.  
          .lg-hotspot.lg-hotspot--2.lg-mobile-9(style="top: 80%;left: 9%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote9.jpg", alt="Plancha de aguja")
                .col-lg-6.p-3
                  p 
                    strong Plancha de aguja
                  p Permite el movimiento de los dientes impelentes. Por su orificio central pasa la aguja. 
          .lg-hotspot.lg-hotspot--2.lg-mobile-10(style="top: 75%;left: 8%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote10.jpg", alt="Caja bobina")
                .col-lg-6.p-3
                  p 
                    strong Caja bobina
                  p Encierra el carretel, facilita que el carretel se desenrolle a tiempo y con la tensión adecuada.                                    

    
    .row.justify-content-md-center.mb-5
      .col-lg-8.slyder1-1
        SlyderB.p-4(:datos="datosSlyder")


    // 2.2.1.2.
    .h5 Partes del muelle       

    .row.mb-5.justify-content-md-center
      p.mb-4 En la siguiente figura se pueden observar las partes del muelle y su orden, recuerde que la imagen que se presenta es de referencia y de un modelo de máquina puntual puede ser que la máquina que encuentre en otro taller sea un poco diferente.        
      .col-lg-5
        .p-2
          figure
            img(src="@/assets/curso/partes-muelle.jpg", alt="Figura 12. Mueble máquina plana con sus partes") 
            figcaption Mueble máquina plana con sus partes        
      .col-lg-5
        .p-2.mb-5.mb-lg-0
          ol.lista-ol--cuadro.lista-redonda-2
            li.mb-4
              .lista-ol--cuadro__vineta
                span a
              | Estante
              br 
              | Sostiene la mesa y los pedales.
            li.mb-4
              .lista-ol--cuadro__vineta
                span b
              | Mesa
              br 
              | Soporta el cabezote, el porta-conos, el devanador y el motor. Además, facilita el manejo de los materiales.                
            li.mb-4 
              .lista-ol--cuadro__vineta
                span c
              | Pedal
              br
              | Pone en movimiento la máquina, detiene el movimiento y controla la velocidad.
            li.mb-4
              .lista-ol--cuadro__vineta
                span d
              | Devanador
              br
              | Permite el enrollado uniforme del hilo en los carreteles.
            li.mb-4 
              .lista-ol--cuadro__vineta
                span e
              | Varilla de embrague
              br
              | Conecta el pedal con el embrague del motor.              
 


    // 2.2.1.3.
    .h5 Partes del motor      

    .row.mb-5.justify-content-md-center
      p.mb-4 Por lo general los motores en las máquinas planas se encuentran en el banco y debajo del cabezote pero algunas referencias y marcas pueden cambiar. Las partes genéricas de estos motores son:
      .col-lg-4
        .p-2.mb-5.mb-lg-0
          ol.lista-ol--cuadro.lista-redonda-2
            li.mb-5
              .lista-ol--cuadro__vineta
                span a
              | Interruptor
              br
              | Corta o da paso al fluido eléctrico.
            li.mb-5
              .lista-ol--cuadro__vineta
                span b
              | Correa y protector
              br
              | La correa transmite la fuerza del motor a la máquina. El protector o guarda-correa la cubre parcial o totalmente para evitar accidentes.
            li.mb-5 
              .lista-ol--cuadro__vineta
                span c
              | Polea
              br
              | Esta fija al eje del motor y en ella encaja la correa.
            li.mb-5 
              .lista-ol--cuadro__vineta
                span d
              | Embrague
              br
              | Al ser accionado pone la maquina en funcionamiento, también actúa como freno.
      .col-lg-6
        .p-2
          figure
            img(src="@/assets/curso/partes-motor-maquina-plana.jpg", alt="Figura 13. Motor máquina plana")  
            figcaption Motor máquina plana   

    // 2.2.1.4.
    .h5 Colocación de la aguja      

    .row.mb-5
      .col-lg-6
        .p-4.mb-5.mb-lg-0
          p.mb-3 Para colocar o cambiar la aguja se deben tener en cuenta los siguientes detalles:
           
          ul.lista-ul--color
            li 
              i.fas.fa-angle-double-right
              | La referencia o sistema de aguja corresponda debe corresponder a la máquina. 
            li 
              i.fas.fa-angle-double-right
              | Las características de la aguja deben corresponder al material por coser.  
            li 
              i.fas.fa-angle-double-right
              | Después de seleccionada la aguja se procede de la siguiente forma: 
            li
              ul
                li 
                  i.fas.fa-dot-circle
                  | Se sube la barra de la aguja a su punto más alto, girando con la mano el volante de la máquina.
                li 
                  i.fas.fa-dot-circle
                  | Se afloja el tornillo de sujeción o fijación de la aguja empleando un destornillador apropiado para no dañar la cabeza del tornillo.
                li 
                  i.fas.fa-dot-circle
                  | Se introduce la aguja en la barra hasta el tope.
                li 
                  i.fas.fa-dot-circle
                  | Se determina la posición correcta de la aguja, girándola hasta hacer coincidir la muesca frente al garfio.
                li 
                  i.fas.fa-dot-circle
                  | Se ajusta el tornillo de sujeción o fijación de la aguja comprobando que la aguja haya quedado bien colocada y girando lentamente el volante de la máquina.        
      .col-lg-6
        .p-4
          figure.mb-4
            img(src="@/assets/curso/colocacion-aguja.jpg", alt="Colocación de la aguja")
            

    // 2.2.1.5.
    .h5 Enhebrado del hilo en la aguja      

    .row.mb-5
      .col-lg-12
        .p-2.mb-5.mb-lg-0
          p.mb-3 A continuación, se describe el proceso de enhebrado del hilo en la aguja.
          ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Se selecciona el hilo según el número y color.
              li 
                i.fas.fa-angle-double-right
                | Se colocan los hilos en la porta conos.
              li 
                i.fas.fa-angle-double-right
                | Se lleva el hilo por los guías hilos, por entre los discos tensores, el muelle refrenamiento o tira hilo resortado; luego se enhebra la palanca tira hilo; se continua por las guías hilos y, por último, pasa el hilo por el ojo de la aguja, teniendo en cuenta que sea por el lado de la ranura. 
        .p-2
          figure
            img(src="@/assets/curso/enhebrado-aguja.jpg", alt="Enhebrado de la aguja")
            figcaption Enhebrado de la aguja        


    // 2.2.1.6.
    .h5 Partes de la caja bobina     

    .row.mb-5.justify-content-md-center
      .col-lg-5
        p.mb-4 La caja bobina es una pieza importante de la máquina plana, allí va el carretel, en el cual se ubica la canastilla de la máquina, su función es ayudar a realizar la puntada.
        .p-2.mb-5.mb-lg-0
          ol.lista-ol--cuadro.lista-redonda-3
            li.mb-3
              .lista-ol--cuadro__vineta
                span a
              | Tornillo sujetador del muelle.
            li.mb-3
              .lista-ol--cuadro__vineta
                span b
              | Tornillo para regular la tensión del hilo inferior de la máquina plana (Hilo del carretel).
            li.mb-3 
              .lista-ol--cuadro__vineta
                span c
              | Muelle.
            li.mb-3
              .lista-ol--cuadro__vineta
                span d
              | Pestillo.
            li.mb-3
              .lista-ol--cuadro__vineta
                span e
              | Palanca del pestillo.
            li.mb-3
              .lista-ol--cuadro__vineta
                span f
              | Carretel.                           
      .col-lg-7
        .p-2
          figure
            img(src="@/assets/curso/partes-bobina.jpg", alt="Partes caja bobina")  
            figcaption Partes caja bobina  


    // 2.2.1.7.
    .h5 Enhebrado del hilo del carretel o bobina     

    .row.mb-5
      .col-lg-5.text-acento
        .p-2.mb-5.mb-lg-0
          p.mb-4 Se coloca el carretel o bobina en la caja bobina de tal forma que el carretel gire en el sentido de las manecillas del reloj; se pasa el hilo por la hendidura 
            span (1) 
            | y por debajo del muelle tensor 
            span (2)
            | . 
      .col-lg-7
        .p-2
          figure
            img(src="@/assets/curso/enhebrado-hilo-carretel.jpg", alt="Enhebrado del hilo del carretel")    
            figcaption Enhebrado del hilo del carretel                       
          
    // 2.2.1.8.

    .row.mb-5
      .col-lg-5
        .p-2.mb-5.mb-lg-0
          .h5 Colocación de la caja bobina en el gancho de la máquina  
          p.mb-4 Se toma la caja bobina por el pestillo y se coloca en la canastilla de la caja bobina; la colocación correcta de la caja bobina es de mucha importancia pues si ésta choca con la aguja causaría daños a la caja bobina, al garfio y rotura a la misma aguja. Siempre que se vaya a retirar o colocar la caja bobina obsérvese que la aguja este en su parte más alta.
      .col-lg-7
        .p-2
          figure
            img(src="@/assets/curso/colocacion-caja-bobina.jpg", alt="Colocación caja bobina")    
            figcaption Colocación caja bobina  


    // 2.2.1.9.
    .h5 Enhebrado devanador    

    .row.mb-5
      .col-lg-12.text-acento
        .p-2.mb-5.mb-lg-0
          p.mb-4 El carretel 
            span (1) 
            | se debe ubicar en el soporte del devanador 
            span  (2)
            | , el hilo pasa por el guía hilos 
            span  (4) 
            | luego por los discos tensores 
            span  (5) 
            | y termina enrollado en el carretel, al finalizar se debe colocar el seguro 
            span  (3) 
            | que está junto al soporte del carretel 
            span  (2)
            | . 
          figure
            img(src="@/assets/curso/enhebrado-devanador.jpg", alt="Enhebrado devanador")    
            figcaption Enhebrado devanador   


    // 2.2.1.10.
    .h5 Tipos de arrastre en la máquina plana
    p.mb-4 Los tipos de arrastre en la máquina plana y sus características son:

    .row.mb-5.justify-content-md-center
      .col-lg-10.p-4.tarjeta.tarjeta--gris.tabs-tipos-arrastre
        .row.align-items-center
          TabsC.color-secundario
            .py-3.py-md-4(titulo="Máquina plana con arrastre liviano")
              .row.justify-content-md-center
                .col-md-5.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/maquina-plana-arrastre-liviano.png', alt='Máquina plana con arrastre liviano')
                .col-md-6
                  h4 Máquina plana con arrastre liviano
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Utiliza aguja sistema DBX1 o sus equivalentes 16x257 o 16x251 υ. 
                    li 
                      i.lista-ul__vineta
                      | Su máximo largo de puntada es de 4 o hasta 5 largos (dial de puntada). 
                    li 
                      i.lista-ul__vineta
                      | Principalmente viene con ajuste de transporte liviano.
                    li 
                      i.lista-ul__vineta
                      | Puede utilizar ajuste de transporte sema pesado y pesado. 
                    li 
                      i.lista-ul__vineta
                      | Utilizada para costuras que no requieran de puntadas muy largas. 
            .py-3.py-md-4(titulo="Máquina plana con arrastre pesado")
              .row.justify-content-md-center.align-items-center
                .col-md-5.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/maquina-plana-arrastre-pesado.png', alt='Máquina plana con arrastre pesado')
                .col-md-6
                  h4 Máquina plana con arrastre pesado
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Utiliza aguja sistema 134υ su máximo largo de puntada es desde 7 o hasta 8 largos de puntada (dial de puntada). 
                    li 
                      i.lista-ul__vineta
                      | Principalmente viene con ajuste de transporte pesado.  
                    li
                      i.lista-ul__vineta
                      | Puede utilizar ajuste de transporte semi pesado y liviano o utilizada para costuras que requieran de puntadas largas.  

             
    // 2.2.1.11.
    .h5 Defectos de costura en la máquina plana
    p.mb-4 La siguiente tabla nos presenta los diferentes defectos de costura en la máquina y sus posibles soluciones.

    .tabla-a2.mb-5 
      table
        thead
          tr
            th Defectos de costura en la máquina 
            th Posible solución 
        tbody.text-center
          tr
            td(rowspan='3') Puntadas sueltas por de bajos
            td El hilo está fuera de la tensión o los platillos tensores.
          tr            
            td El hilo está fuera de los soportes guía hilos.  
          tr            
            td La operaria presiona sin darse cuenta la rodillera y levanta el pie sin darte cuenta. 
          tr
            td(rowspan='4') El hilo superior queda flojo en ondas sueltas
            td El hilo está demasiado flojo, debe ajustar el tensor de hilo.
          tr            
            td Le hace falta más presión sobre la tela.  
          tr            
            td El hilo inferior está demasiado suelto, se debe ajustar el tornillo de tensión de la caja bobina. 
          tr            
            td El hilo del carretel está por fuera de la caja bobina. 
          tr
            td(rowspan='6') Revienta hilo constantemente
            td Los platillos tensores muy apretados.
          tr            
            td El hilo está enredado en alguna de las partes de la máquina.  
          tr            
            td Resorte tirahilos rotos. 
          tr            
            td La aguja está puesta al contrario o está muy bajita de lo normal. 
          tr            
            td El hilo es utilizado es de mala calidad.
          tr            
            td La aguja despuntada. 
          tr
            td(rowspan='7') Saltos de puntada
            td La aguja está girada al contario.
          tr            
            td La aguja me quedo bajita.  
          tr            
            td La aguja se dobló o despuntó.
          tr            
            td Máquina demasiado tensionada. 
          tr            
            td El pie no sienta bien.
          tr            
            td La aguja se ha despuntado.   
          tr            
            td La aguja es demasiado delgada para este material.  
          tr
            td(rowspan='6') Enreda por debajo o por encima
            td Está el hilo fuera de tensión.
          tr            
            td Está el hilo fuera del resorte tira hilos. 
          tr            
            td Falta tensión.
          tr            
            td El hilo no pasa por alguna de mis partes.
          tr            
            td El hilo superior está mal enhebrado.
          tr            
            td El hilo superior está fuera de un roto del poste guía hilos.
          tr
            td(rowspan='6') La tela no avanza, máquina pegada
            td Los dientes necesitan limpieza.
          tr            
            td Los dientes están flojos y se mueven. 
          tr            
            td Los dientes están muy bajitos.
          tr            
            td Falta presión en la barra del pie.
          tr            
            td El pie no es el indicado para esté trabajo.
          tr            
            td El pie no se asienta bien sobre la planchuela.  
          tr
            td(rowspan='4') Se revientan los hilos cuando se estira la tela
            td El hilo superior está muy apretado.
          tr            
            td El hilo inferior está muy apretado. 
          tr            
            td El hilo inferior se enreda con alguna parte.
          tr            
            td El hilo superior está enredado con otra parte también.
          tr
            td(rowspan='4') Parte agujas
            td El pie roza con la aguja.
          tr            
            td Aguja mal puesta en su altura.
          tr            
            td Aguja muy delgada para el material a confeccionar.
          tr            
            td Caja bobina mal colocada. 

    //2.2.2
    .h5 Máquina fileteadora     

    p.mb-4 Es una máquina de confección industrial, utilizada para sobre orillar telas, así como para ensamblar prendas de tejido de punto como camisetas, tops, patines, bóxer y prendas deportivas buzos; en tejido plano la confección de camisa, blusas y pantalones operaciones como pegar cuellos y puños. Según la ISO 4915 la puntada que realiza la máquina fileteadora plana de la serie 500 es sobrehilado.

    .row.mb-5
      .col-lg-6
        .p-2
          figure
            img(src="@/assets/curso/maquina-fileteadora.jpg", alt="Máquina fileteadora ")
            figcaption Máquina fileteadora   
      .col-lg-1            
      .col-lg-5
        .p-2.mb-5.mb-lg-0
          .row.mb-5.tarjeta.tarjeta--gris.p-3
            .h6 Características principales
            ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Su función principal es la de recubrir el borde de las telas con el fin de evitar que se desflequen.  
              li 
                i.fas.fa-angle-double-right
                | Posee un sistema de corte con una cuchilla fija y otra móvil. 
              li 
                i.fas.fa-angle-double-right
                | Por ser de alta velocidad posee un sistema de lubricación para los hilos y las agujas con un tanque de lubricación y mecha.   


    //2.2.2.1
    .h5 Cabezote fileteadora     
    .p-2.mb-5.mb-lg-0
          p.mb-4 EL cabezote de la máquina es la parte de trabajo del operario y es en donde se lleva a cabo el proceso de la confección; existen varios tipos y por lo general las industriales se encuentran en bases fijas con las correspondientes medidas de seguridad y salud en el trabajo, estas son sus partes principales:

    .row.mb-5.justify-content-md-center
      .container.col-lg-11.mb-5
        .lg-container.modal-2
          figure
            img.lg-image(src="@/assets/curso/cabezote-maquina-fileteadora.jpg", alt="Cabezote máquina fileteadora")
            figcaption Cabezote máquina fileteadora
          .lg-hotspot.lg-hotspot--1.lg-mobile2-1(style="top: 19%;left: 48%;")  
            .lg-hotspot__button(@mouseover="indicador2 = false")
              .indicador-interaccion(v-if="indicador2")
                .indicador-interaccion__icon
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-guia-hilos.jpg", alt="Guía hilos")
                .col-lg-6.p-3
                  p 
                    strong Guía hilos
                  p Todos los orificios por donde se pasa el hilo o hilaza.  
          .lg-hotspot.lg-hotspot--2.lg-mobile2-2(style="top: 45%;left: 43%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-tensores.jpg", alt="Tensores")
                .col-lg-6.p-3
                  p 
                    strong Tensores
                  p Tienen 2 platillos metálicos por donde debe pasar el hilo, permiten soltar o apretar la tensión de la puntada.              
          .lg-hotspot.lg-hotspot--2.lg-mobile2-3(style="top: 79%;left: 43%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-tapa-frontal.jpg", alt="Tapa frontral")
                .col-lg-6.p-3
                  p 
                    strong Tapa frontral
                  p Se desliza hacia la derecha y hacia afuera para abrirla, permite la enhebrada de los loopers y puntada de seguridad.               
          .lg-hotspot.lg-hotspot--2.lg-mobile2-4(style="top: 54%;left: 10%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-planchuela-fija.jpg", alt="Planchuela fija y planchuela movible.")
                .col-lg-6.p-3
                  p 
                    strong Planchuela fija y planchuela movible.         
          .lg-hotspot.lg-hotspot--1.lg-mobile2-5(style="top: 53%;left: 84%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-volante.jpg", alt="Volante")
                .col-lg-6.p-3
                  p 
                    strong Volante
                  p Sirve para fijar la aguja y mover la cuchilla.  
          .lg-hotspot.lg-hotspot--2.lg-mobile2-6(style="top: 15%;left: 41%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-fileteadora-mirilla-aceite.jpg", alt="Mirilla de aceite")
                .col-lg-6.p-3
                  p 
                    strong Mirilla de aceite               

    .row.mb-5.justify-content-md-center
      .col-lg-7
        .lg-container.modal-5
          figure
            img.lg-image(src="@/assets/curso/detalle1-cabezote-maquina-fileteadora.jpg", alt="Detalle 1 cabezote máquina fileteadora")
            figcaption Detalle 1 cabezote máquina fileteadora
          .lg-hotspot.lg-hotspot--1.lg-mobile5-1(style="top: 30%;left: 48%;")  
            .lg-hotspot__button(@mouseover="indicador3 = false")
              .indicador-interaccion(v-if="indicador3")
                .indicador-interaccion__icon
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/dellate1-boton-graduador-largo -puntada.jpg", alt="Botón graduador de largo de puntada")
                .col-lg-6.p-3
                  p 
                    strong Botón graduador de largo de puntada
                  p Sirve para graduar el número de puntadas con que debemos filetear. Se trabaja junto con el tablero o con el volante.  
          .lg-hotspot.lg-hotspot--2.lg-mobile5-2(style="top: 35%;left: 17%;;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/dellate1-prensatela.jpg", alt="Prénsatela")
                .col-lg-6.p-3
                  p 
                    strong Prénsatela
                  p Es movible y permite el transporte de la tela ajustándola.              
          .lg-hotspot.lg-hotspot--1.lg-mobile5-3(style="top: 67%;left: 63%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/dellate1-cuchilla-fija.jpg", alt="Cuchilla fija y cuchilla movible")
                .col-lg-6.p-3
                  p 
                    strong Cuchilla fija y cuchilla movible
                  p Son las encargadas de cortar o refilar el material.               
          .lg-hotspot.lg-hotspot--1.lg-mobile5-4(style="top: 76%;left: 57%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/dellate1-dientes-arrastre.jpg", alt="Dientes de arrastre.")
                .col-lg-6.p-3
                  p 
                    strong Dientes de arrastre
                  p Son los que hacen que la tela se deslice hacia atrás al ser fileteada.   

        

    .row.mb-5
      .col-lg-7
          figure
            img(src="@/assets/curso/detalle2-cabezote-maquina-fileteadora.jpg", alt="Detalle 2 cabezote máquina fileteadora")
            figcaption Detalle 2 cabezote máquina fileteadora
      .col-lg-1      
      .col-lg-4.tarjeta--azul2.p-4
        h6 Loopers
        p.mb-4 Son los encargados de hacer la lazada de la puntada. La O.V de 3 hilos tiene 2 loopers, la O V de 5 hilos tiene 3 loopers ya que uno de ellos se utiliza en la puntada de seguridad.
        .p-2.mb-5.mb-lg-0
          ol.lista-ol--cuadro.lista-redonda-3
            li.mb-3
              .lista-ol--cuadro__vineta
                span a
              | Looper superior.
            li.mb-3
              .lista-ol--cuadro__vineta
                span b
              | Looper inferior.
            li.mb-3 
              .lista-ol--cuadro__vineta
                span c
              | Looper de puntada de seguridad.     


    .row.mb-5
      .col-lg-7
        p-2
          figure
            img(src="@/assets/curso/diferencial-maquina-fileteadora.jpg", alt="Diferencial máquina fileteadora ")
            figcaption Diferencial máquina fileteadora 
      .col-lg-1      
      .col-lg-4
        .tarjeta--azul2-1.p-4
          h6 Botón diferencial
          p.mb-4 Se debe graduar según el tipo de material a confeccionar. 



    // 2.2.2.2.
    .h5 Mueble de máquina fileteadora      
    
    p.mb-4 La base en donde reposa la fileteadora es un banco de trabajo que se llama mueble y sus partes son:

    .row.mb-5
      .col-lg-6
        .p-2.mb-5.mb-lg-0
          ol.lista-ol--cuadro.lista-redonda-3
            li.mb-5
              .lista-ol--cuadro__vineta
                span a
              | Mesa: soporta el cabezote, el porta-conos, canal de residuos y el motor. Además, facilita el manejo de los materiales. 
            li.mb-5
              .lista-ol--cuadro__vineta
                span b
              | Porta conos: en su base se colocan los conos de hilo; la altura de sus guías hilos es dos veces y media la altura del respectivo cono para que permita el desenrollado.
            li.mb-5 
              .lista-ol--cuadro__vineta
                span c
              | Canal de residuos: separa los residuos generados en el proceso de costura.
            li.mb-5
              .lista-ol--cuadro__vineta
                span d
              | Varilla de embrague: conecta el pedal con el embrague del motor.   
            li.mb-5
              .lista-ol--cuadro__vineta
                span e
              | Pedal izquierdo: acelera o frena la velocidad de la fileteadora.
            li.mb-5
              .lista-ol--cuadro__vineta
                span f
              | Pedal derecho: levanta el prénsatela.         
      .col-lg-6
        .p-2
          figure
            img(src="@/assets/curso/mueble-maquina-fileteadora.jpg", alt="Mueble máquina fileteadora")  
            figcaption Mueble máquina fileteadora  



    // 2.2.2.3. 
    .h5 Motor      

    .row.mb-5
      .col-lg-6
        .p-2.mb-5.mb-lg-0
          p.mb-4 La base en donde reposa la fileteadora es un banco de trabajo que se llama mueble y sus partes son:
          ol.lista-ol--cuadro.lista-redonda-3
            li.mb-3
              .lista-ol--cuadro__vineta
                span a
              | Interruptor: corta o da paso al fluido eléctrico.
            li.mb-3
              .lista-ol--cuadro__vineta
                span b
              | Embrague: al ser accionado pone la maquina en funcionamiento, también actúa como freno.  
            li.mb-3 
              .lista-ol--cuadro__vineta
                span c
              | Correa y protector: la correa transmite la fuerza del motor a la máquina. El protector o guarda-correa la cubre parcial o totalmente para evitar accidentes.
            li.mb-3
              .lista-ol--cuadro__vineta
                span d
              |Polea: esta fija al eje del motor y en ella encaja la correa. 
      .col-lg-6
        .p-2
          figure
            img(src="@/assets/curso/motor-fileteadora.jpg", alt="Motor de fileteadora") 
            figcaption Motor de fileteadora

    // 2.2.2.4.	 
    .h5 Enhebrado en la máquina fileteadora   
    p.mb-4 El esquema de enhebrado corresponde a la ubicación de cada uno de los hilos y a dónde llegan en la máquina.   

    .row.tarjeta.tarjeta--gris.mb-5.p-4
      .row
        .col-lg-6
          .p-4
          ol.lista-ol--cuadro
            li.mb-4
              .lista-ol--cuadro__vineta
                span 1
              | Hilo (1) llega al looper inferior.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 2
              | Hilo (2) looper superior.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 3
              | Hilo (3) aguja de seguridad.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 4
              | Hilo (4) aguja de filete.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 5
              | Hilo (5) looper de puntada de seguridad.      
        .col-lg-6
          .p-2
            figure
              img(src="@/assets/curso/enhebrado-maquina-fileteadora.jpg", alt="Enhebrado máquina fileteadora")
              figcaption Enhebrado máquina fileteadora
      .row.justify-content-md-center     
        .col-lg-12
          .p-2
            figure
              img(src="@/assets/curso/enhebrado-looper-seguridad.jpg", alt="Enhebrado looper de seguridad – hilo 5 de seguridad")
              figcaption Enhebrado looper de seguridad – hilo 5 de seguridad


    .row.tarjeta.tarjeta--gris.mb-5.p-4
      .row
        .col-lg-6
          .p-4
          ol.lista-ol--cuadro
            li.mb-4
              .lista-ol--cuadro__vineta
                span 1
              | Puntada looper inferior - hilo 1.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 2
              | Puntada looper superior - hilo 2.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 3
              | Puntada aguja de seguridad - hilo 3.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 4
              | Puntada aguja de filete - hilo 4.
            li.mb-4
              .lista-ol--cuadro__vineta
                span 5
              | Puntada looper de seguridad - hilo 5.      
        .col-lg-6.p-3
          .p-2
            figure
              img(src="@/assets/curso/diagrama-costura-maquina-fileteadora-costura.jpg", alt="Diagrama de la costura que realiza la máquina fileteadora costura")
              figcaption Diagrama de la costura que realiza la máquina fileteadora costura


    // 2.2.2.5.		 
    .h5 Tipos de fileteadora
    p.mb-5 Las fileteadoras son parte de la maquinaria esencial que se requieren en los talleres y su uso es tan amplio que no se define una sola máquina sino varias referencias que se agrupan por hilos y puntadas como se describe a continuación:   

    .row.justify-content-md-center.mb-5
      .row.justify-content-md-center.mb-2.p-2
        .col-lg-10
          .h6.titulo__template--a Fileteadora de tres hilos, filete sencillo puntada 504
          p La imagen a continuación presenta derecho y revés de tela, para hacer esta puntada se enhebra una aguja, looper superior y looper inferior, para ello se propone el siguiente ejemplo de uso: unir hombros, cerrar costados, colocar mangas en una camiseta o sobre orillar piezas como falsos, pretinas. 
      .col-lg-5
          figure
            img(src="@/assets/curso/fileteadora- tres-hilos.jpg", alt="Fileteadora de tres hilos")
            figcaption Fileteadora de tres hilos
      .col-lg-5
          figure
            img(src="@/assets/curso/derecho-reves-puntada-504.jpg", alt="Derecho y revés de la puntada 504")    
            figcaption Derecho y revés de la puntada 504
      


    .row.justify-content-md-center.mb-5
      .row.justify-content-md-center.mb-2.p-2
        .col-lg-10
          .h6.titulo__template--a Fileteadora de cuatro hilos, puntada de refuerzo 514
          p La imagen a continuación presenta derecho y revés de tela, para realizar esta puntada se enhebran las dos agujas, el looper superior y el looper inferior. Su uso se da em la confección de ropa deportiva y prendas elaboradas en tejido de punto. 
      .col-lg-5
          figure
            img(src="@/assets/curso/fileteadora-cuatro-hilos.jpg", alt="Fileteadora de cuatro hilos")
            figcaption Fileteadora de cuatro hilos
      .col-lg-5
          figure
            img(src="@/assets/curso/derecho-reves-puntada-514.jpg", alt="Derecho y revés de la puntada 514")    
            figcaption Derecho y revés de la puntada 514    

    .row.justify-content-md-center.mb-5
      .row.justify-content-md-center.mb-2.p-2
        .col-lg-10
          .h6.titulo__template--a Fileteadora de cinco hilos, filete de puntada de seguridad 516
          p La imagen presenta derecho y revés, posibilita observar cómo se realiza esta puntada: se enhebran las 2 agujas, el looper superior, looper inferior y looper de seguridad.  Ejemplo de uso: Cerrar un jean, una chaqueta de jean.                       
      .col-lg-5
          figure
            img(src="@/assets/curso/fileteadora-cinco-hilos.jpg", alt="Fileteadora de cinco hilos")
            figcaption Fileteadora de cinco hilos
      .col-lg-5
          figure
            img(src="@/assets/curso/derecho-reves-puntada-516.jpg", alt="Derecho y reves de la puntada 516")    
            figcaption Derecho y reves de la puntada 516


    // 2.2.3.	
    .h5 Máquina ojaladora

    .row.mb-5
      .col-lg-6
        .p-2.mb-3.mb-lg-0
          p.mb-3 Es una máquina de ciclo completo de costura y según la ISO 4915 la puntada que realiza la máquina ojaladora de la serie 304 es doble pespunte, debido a que su aspecto en el derecho de la costura es igual al revés de esta.
          figure
            img(src="@/assets/curso/maquina-ojaladora.jpg", alt="Máquina ojaladora")
      .col-lg-6
          .tarjeta.tarjeta--gris.p-5
            h6 Características principales
            ul.lista-ul--color
              li 
                i.fas.fa-chevron-circle-right
                | Tiene una aguja. 
              li 
                i.fas.fa-chevron-circle-right
                | Puede ser utilizada para realizar ojal recto.
              li.mb-4 
                i.fas.fa-chevron-circle-right
                | Existen dos tipos de tecnologías:  
              li
                ul
                  li 
                    i.fas.fa-dot-circle
                    | Mecánica: el manejo de la máquina corresponde el 100% a la habilidad del operario.
                  li 
                    i.fas.fa-dot-circle
                    | Electrónica: posee un tablero que le permite programar diferentes funciones con el fin de agilizar y asegurar la calidad del trabajo por el operario.


    // 2.2.3.1. 		 
    .h5.mb-5 Partes del cabezote

    .row.justify-content-md-center.mb-5
      .col-lg-11  
        .lg-container.modal-3
          figure
            img.lg-image(src="@/assets/curso/cabezote-ojaladora.jpg", alt="Cabezote ojaladora")
            figcaption Cabezote ojaladora
          .lg-hotspot.lg-hotspot--2.lg-mobile3-1(style="top: 8%;left: 43%;")  
            .lg-hotspot__button(@mouseover="indicador4 = false")
              .indicador-interaccion(v-if="indicador4")
                .indicador-interaccion__icon
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora1.jpg", alt="Guía hilos")
                .col-lg-6.p-3
                  p 
                    strong Guía hilos
                  p Todos los orificios por donde se pasa el hilo hasta llegar a la aguja. 
          .lg-hotspot.lg-hotspot--2.lg-mobile3-2(style="top: 68%;left: 23%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora2.jpg", alt="Barra de aguja")
                .col-lg-6.p-3
                  p 
                    strong Barra de aguja
                  p Sostiene la aguja y le imprime su movimiento.              
          .lg-hotspot.lg-hotspot--2.lg-mobile3-3(style="top: 26%;left: 35%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora3.jpg", alt="Conjunto tensor")
                .col-lg-6.p-3
                  p 
                    strong Conjunto tensor
                  p Tienen 2 platillos metálicos por donde debe pasar el hilo, permiten soltar o apretar la tensión de la puntada.               
          .lg-hotspot.lg-hotspot--2.lg-mobile3-4(style="top: 18%;left: 25%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora4.jpg", alt="Palanca tira hilo")
                .col-lg-6.p-3
                  p 
                    strong Palanca tira hilo         
                  p Suministra a la aguja la cantidad de hilo necesaria para la formación de la puntada.  
          .lg-hotspot.lg-hotspot--2.lg-mobile3-5(style="top: 76%;left: 24%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora5.jpg", alt="Gancho")
                .col-lg-6.p-3
                  p 
                    strong Gancho
                  p Toma el hilo de la aguja y lo pasa alrededor de la caja bobina.  
          .lg-hotspot.lg-hotspot--2.lg-mobile3-6(style="top: 83%;left: 26%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora6.jpg", alt="Plancha de aguja")
                .col-lg-6.p-3
                  p 
                    strong Plancha de aguja  
                  p Por su orificio central pasa la aguja.       
          .lg-hotspot.lg-hotspot--2.lg-mobile3-7(style="top: 84%;left: 13%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/cabezote-ojaladora7.jpg", alt="Caja bobina")
                .col-lg-6.p-3
                  p 
                    strong Caja bobina 
                  p Encierra el carretel, facilita que el carretel se desenrolle a tiempo y con la tensión adecuada.                     


    // 2.2.3.2.	 		 
    .h5 Enhebrado máquina ojaladora
    p.mb-5 El esquema de enhebrado corresponde a la ubicación de cada uno de los hilos y a donde llegan en la máquina:

    .row.justify-content-md-center.mb-5
      .col-lg-11   
          figure
            img(src="@/assets/curso/enhebrado-ojalador.jpg", alt="Enhebrado ojalador")
            figcaption Enhebrado ojalador


    //2.2.4. 
    .h5 Máquina botonadora     
    .row
      .col-lg-6
        .p-2.mb-3.mb-lg-0
          p.mb-4 Es una máquina de ciclo completo de costura y según la ISO 4915 la puntada de que realiza la máquina botonadora mecánica es de serie 101, se llama puntada de cadeneta sencilla. La botonadora electrónica es de serie 304 y el nombre de la puntada es doble pespunte, debido a que su aspecto en el derecho de la costura es igual al revés de esta. Las características principales de esta máquina son:
          .row.mb-5.tarjeta.tarjeta--gris.p-3
            ul.lista-ul--color
              li 
                i.fas.fa-chevron-circle-right
                | Tiene una aguja. 
              li 
                i.fas.fa-chevron-circle-right
                | Puede ser utilizada para pegar botón de 2 o 4 orificios.
              li 
                i.fas.fa-chevron-circle-right
                | Posee una bandeja para suministrar los botones en el momento de pegarlos.  
              li 
                i.fas.fa-chevron-circle-right
                | Existen dos tipos de tecnologías:   
              li
                ul
                  li 
                    i.fas.fa-dot-circle
                    | Mecánica: el manejo de la máquina corresponde el 100% a la habilidad del operario.
                  li 
                    i.fas.fa-dot-circle
                    | Electrónica: posee un tablero que le permite programar diferentes funciones con el fin de agilizar y asegurar la calidad del trabajo por el operario.
      .col-lg-6
        .p-2
          figure
            img(src="@/assets/curso/maquina-botonadora.jpg", alt="Máquina botonadora")
            figcaption Máquina botonadora    

    // 2.2.4.1.  		 
    .h5 Partes del cabezote
    p.mb-4 Las partes del cabezote son:

    .row.justify-content-md-center.mb-5
      .col-lg-11  
        .lg-container
          figure
            img.lg-image(src="@/assets/curso/maquina-botonadora-aguja.jpg", alt="Máquina botonadora aguja")
            figcaption Máquina botonadora aguja
          .lg-hotspot.lg-hotspot--2.lg-mobile4-1(style="top: 8%;left: 32%;")  
            .lg-hotspot__button(@mouseover="indicador5 = false")
              .indicador-interaccion(v-if="indicador5")
                .indicador-interaccion__icon
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora1.jpg", alt="Guía hilos")
                .col-lg-6.p-3
                  p 
                    strong Guía hilos
                  p Todos los orificios por donde se pasa el hilo hasta llegar a la aguja. 
          .lg-hotspot.lg-hotspot--2.lg-mobile4-2(style="top: 20%;left: 24%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora2.jpg", alt="Conjunto tensor")
                .col-lg-6.p-3
                  p 
                    strong Conjunto tensor
                  p Tienen 2 platillos metálicos por donde debe pasar el hilo, permiten soltar o apretar la tensión de la puntada.              
          .lg-hotspot.lg-hotspot--2.lg-mobile4-3(style="top: 18%;left: 20%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora3.jpg", alt="Palanca tira hilo")
                .col-lg-6.p-3
                  p 
                    strong Palanca tira hilo
                  p Suministra a la aguja la cantidad de hilo necesaria para la formación de la puntada.
          .lg-hotspot.lg-hotspot--2.lg-mobile4-4(style="top: 77%;left: 16%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora4.jpg", alt="Caja bobina")
                .col-lg-6.p-3
                  p 
                    strong Caja bobina         
                  p Encierra el carretel, facilita que el carretel se desenrolle a tiempo y con la tensión adecuada.  
          .lg-hotspot.lg-hotspot--2.lg-mobile4-5(style="top: 59%;left: 20%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora5.jpg", alt="Barra de aguja")
                .col-lg-6.p-3
                  p 
                    strong Barra de aguja
                  p Sostiene la aguja y le imprime su movimiento. 
          .lg-hotspot.lg-hotspot--2.lg-mobile4-6(style="top: 68%;left: 20%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora6.jpg", alt="Gancho")
                .col-lg-6.p-3
                  p 
                    strong Gancho  
                  p Toma el hilo de la aguja y lo pasa alrededor de la caja bobina.     
          .lg-hotspot.lg-hotspot--2.lg-mobile4-7(style="top: 61%;left: 33%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora7.jpg", alt="Clamp")
                .col-lg-6.p-3
                  p 
                    strong Clamp 
                  p Mecanismo que contienen las mordazas.    
          .lg-hotspot.lg-hotspot--2.lg-mobile4-8(style="top: 71%;left: 23%;")  
            .lg-hotspot__button
            .lg-hotspot__label
              .row.align-items-center
                .col-lg-6
                  figure
                    img(src="@/assets/curso/maquina-botonadora8.jpg", alt="Mordazas")
                .col-lg-6.p-3
                  p 
                    strong Mordazas 
                  p Piezas que sostienen el botón.                    
    
            

    // 2.2.4.2.		 		 
    .h5 Diagrama de enhebrada máquina botonadora mecánica
    p.mb-5 El esquema de enhebrado corresponde a la ubicación de cada uno de los hilos y a donde llegan en la máquina.

    .row.justify-content-md-center.mb-5
      .col-lg-11   
          figure
            img(src="@/assets/curso/enhebrar-maquina-botonadora.jpg", alt="Enhebrar máquina botonadora")
            figcaption Enhebrar máquina botonadora    

    // 2.2.5.			 		 
    .h5 Equipos de planchado

    .row.mb-5
      .col-lg-6
        .p-4.mb-5.mb-lg-0
          p.mb-4 El equipo de planchado se utiliza durante el proceso de confección de la prenda para fusionar, prehormar, abrir costuras y dar una excelente apariencia en la terminación de ella; consta de:
          ul.lista-ul--color.p-4
            li 
              i.far.fa-circle
              | Plancha Industrial con calderín.
            li 
              i.far.fa-circle
              | Tanque de agua. 
            li 
              i.far.fa-circle
              | Zapato de Teflón.
            li 
              i.far.fa-circle
              | Mesa de planchado con succión.
      .col-lg-6
        .p-4
          figure
            img(src="@/assets/curso/planchado.jpg", alt="Planchado")
            figcaption Planchado        


    // 2.2.6.			 		 
    .h5 Herramientas para confección de prendas de vestir
    p.mb-4 En el momento de realizar la confección de la falda básica, es necesario contar con las herramientas necesarias para asegurar la elaboración adecuada del producto acorde a criterios técnicos. A continuación, se describen los tipos de herramientas utilizadas para esta actividad.

    .row.justify-content-md-center.mb-5
      .col-lg-8.slyder1-1
        SlyderB.p-4(:datos="datosSlyder2")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    indicador1: true,
    indicador2: true,
    indicador3: true,
    indicador4: true,
    indicador5: true,
    datosSlyder: [
      {
        titulo: 'Conjunto del prénsatela',
        texto:
          '<ul class="lista-ul--color"><li><i data-v-a676a67a="" class="fas fa-dot-circle"></i> Barra prénsatela.</li> <br><li><i data-v-a676a67a="" class="fas fa-dot-circle"></i> Regulador de la presión del prénsatela.</li> <br><li><i data-v-a676a67a="" class="fas fa-dot-circle"></i> Palanca articulada para accionar el prénsatela manualmente.</li> <br><li><i data-v-a676a67a="" class="fas fa-dot-circle"></i> Rodillera.</li> </ul>',
        imagen: require('@/assets/curso/partes-cabezote1.jpg'),
      },
      {
        titulo: 'Barra prénsatela',
        texto:
          'En su extremo se fija el pie prénsatela, por su parte superior recibe la presión ejercida por un resorte o muelle.',
        imagen: require('@/assets/curso/partes-cabezote2.jpg'),
      },
      {
        titulo: 'Regulador de la presión del prénsatela',
        texto:
          'controla la presión del pie prénsatela, para asegurar el transporte uniforme de los materiales por coser. Se debe regular según el grosor del material.',
        imagen: require('@/assets/curso/partes-cabezote3.jpg'),
      },
      {
        titulo: 'Palanca articulada para accionar el prénsatela manualmente',
        texto:
          'Levanta o baja el prénsatela; se usa en casos especiales, tales como enhebrado, devanado o reparación de la máquina.',
        imagen: require('@/assets/curso/partes-cabezote4.jpg'),
      },
      {
        titulo: 'Rodillera',
        texto:
          'Levanta y baja el prénsatela con la presión de la rodilla, dejando las manos de la operaria libres para mover el material.',
        imagen: require('@/assets/curso/partes-cabezote5.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Corta hilos o pulidor',
        texto:
          'Es utilizado para cortar las hebras que queden luego del proceso de costura, por su forma anatómica es muy fácil de manejar y gracias a su tamaño lo podemos tener cerca a la máquina para no generar accidentes.',
        imagen: require('@/assets/curso/corta-hilos-pulidor.jpg'),
      },
      {
        titulo: 'Alfileres',
        texto:
          'Clavo metálico muy fino que sirve para fijar el trazo a las capas de tela o para sujetar las telas preparándolas para cortar.',
        imagen: require('@/assets/curso/alfileres.jpg'),
      },
      {
        titulo: 'Lápiz blanco',
        texto:
          'Puede ser parafinado o de color y es utilizado para hacer marcaciones de puntos importantes que se deben de tener en cuenta al momento de confeccionar.',
        imagen: require('@/assets/curso/lapiz-blanco.jpg'),
      },
      {
        titulo: 'Metro',
        texto:
          'Utilizado para medir contornos y largos sobre el cuerpo humano o las prendas de vestir.',
        imagen: require('@/assets/curso/metro.jpg'),
      },
      {
        titulo: 'Cinta de enmascarar',
        texto:
          'Es una cinta adhesiva, elaborada en papel que en confección se utiliza para hacer guías que posteriormente se colocarán en la máquina y servirán para mantener el margen en una costura.',
        imagen: require('@/assets/curso/cinta-enmascarar.jpg'),
      },
      {
        titulo: 'Pinzas para enhebrar',
        texto:
          'Son utilizadas para enhebrar la máquina fileteadora y otros tipos de máquinas que cuentan con guía hilos muy pequeños en espacios difíciles de acceder con los dedos.',
        imagen: require('@/assets/curso/pinzas-enhebrar.jpg'),
      },
      {
        titulo: 'Destornillador bristol de 1/16',
        texto: 'Utilizado para colocar agujas en la máquina fileteadora.',
        imagen: require('@/assets/curso/destornillador-bristol-116.jpg'),
      },
      {
        titulo: 'Destornillador llave bristol de 1/5',
        texto: 'Utilizado para colocar agujas en la máquina fileteadora.',
        imagen: require('@/assets/curso/destornillador-llave-bristol-15.jpg'),
      },
      {
        titulo: 'Destornillador de pala',
        texto: 'Utilizado para cambiar agujas y pies prénsatela.',
        imagen: require('@/assets/curso/destornillador-pala.jpg'),
      },
      {
        titulo: 'Enhebrador de puntada de seguridad',
        texto:
          'Utilizado para enhebrar el hilo de seguridad de la máquina fileteadora.',
        imagen: require('@/assets/curso/enhebrador-puntada-seguridad.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
