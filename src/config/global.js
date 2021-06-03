export default {
  global: {
    componenteFormativo: 'Confección de falda',
    descripcionCurso:
      'Confeccionar la falda es el objetivo a conseguir y esa búsqueda articula los elementos técnicos y las temáticas para el desarrollo del proceso, estos elementos están organizados secuencialmente para cumplir con la materialización de la pieza según las normas técnicas. Ese es el trabajo que se desarrolla en el presente contenido de formación. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Hilos para confección: clasificación y usos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características del hilo de coser',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Usos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de los hilos (COATS, 2014)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Numeración de los hilos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Etiquetas de los hilos de confección',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Requerimientos de un hilo de coser de buena calidad',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Conservación de los hilos',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Maquinaria, equipos y herramientas para la confección de falda básica: tipos y usos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Máquinas familiares',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Máquinas industriales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Agujas: sistema y calibre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Agujas para máquina de confección industrial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Partes de la aguja para maquinaria de confección industrial',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Función de la aguja',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Sistema de aguja',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Calibre de agujas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Puntas de aguja',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Materiales para la confección: tipos y usos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Confección falda básica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      np{
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      regional: 'Dirección General',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gina Elizabeth Ortiz García',
        cargo: 'Experta temática',
        centro: 'Centro de Manufactura en Textil y Cuero',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy María Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Carmen Martinez',
          'Carlos Eduardo Garavito',
          'Lina Perez',
          'Daniela Bedoya',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amaden-Crawford, C. (2014). Confección de moda: técnicas básicas. Vol. 1. Barcelona, Spain: Editorial Gustavo Gili. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45594?page=10',
    },
    {
      referencia:
        'COATS. (2021). Boletín 07. Seleccionando los hilos de coser.',
      link:
        'https://coats.com/es/information-hub/Selecting-Your-Sewing-Threads',
    },
    {
      referencia:
        'Groz Bekert. (2019) Boletín. Sewing. Agujas para máquinas de coser para la industria de la confección.',
      link: 'https://www.groz-beckert.com/en/products/sewing/',
    },
    {
      referencia: 'Icontec (2013). NTC 2089. Hilos de algodón para coser.',
      link: 'https://www.icontec.org/rules/hilos-de-algodon-para-coser/',
    },
  ],
  glosario: [
    {
      termino: 'Entretelar',
      significado:
        'Pegar entretela al material por medio de fusionado al calor con el objetivo de reforzar la pieza (actividad manual).',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento que contiene las especificaciones técnicas de la prenda a confeccionar.',
    },
    {
      termino: 'Insumos',
      significado:
        'Conjunto de materiales empleados en la confección de prendas de vestir.',
    },
    {
      termino: 'Margen de costura',
      significado:
        'Distancia que hay desde las puntadas hasta el borde del material.',
    },
    {
      termino: 'Pespuntar',
      significado:
        'Puntadas decorativas seguidas e iguales que se realizan por donde hay una costura de unión, son visibles en prenda puesta.',
    },
    {
      termino: 'Sentar',
      significado:
        'Costura de pespunte que se utiliza para voltear márgenes u orillos hacia un lado y coserlos con el fin de dar mejor apariencia y acabado a las piezas o prenda.',
    },
    {
      termino: 'Puntadas por pulgada –P.P.P.',
      significado:
        'Número de puntadas que se encuentran en una pulgada (2.54 cm).',
    },
  ],
  complementario: [
    {
      texto:
        'Bulleting Post (2014). All About Sewing Threads (Todo sobre hilos de coser).',
      tipo: 'PDF',
      descarga: '/downloads/todo_sobre_hilos_de_coser.pdf',
    },
    {
      texto:
        'Groz-Beckert KG (s.f). The special application needle SAN (Agujas para jean)',
      tipo: 'PDF',
      descarga: '/downloads/Groz_Beckert_agujas_para_jean.pdf',
    },
    {
      texto:
        'Groz-Beckert KG (s.f). Sewing Agujas para máquinas de coser para la industria de la confección.',
      tipo: 'PDF',
      descarga:
        '/downloads/Sewing_Agujas_para_maquinas_de_coser_para_la_industria_de_la_confeccion.pdf',
    },
    {
      texto: 'SCHMETZ. (2019). ABC de Agujas para máquinas de coser domésticas',
      tipo: 'PDF',
      descarga:
        '/downloads/ABC_de_agujas_para_maquinas_de_coser_domesticas.pdf',
    },
  ],
}
