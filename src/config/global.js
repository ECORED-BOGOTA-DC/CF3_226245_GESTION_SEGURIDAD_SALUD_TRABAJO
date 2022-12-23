export default {
  global: {
    componenteFormativo: 'Valoración de riesgos',
    descripcionCurso:
      'La valoración de riesgos es un aspecto muy importante dentro de las empresas, teniendo en cuenta que permite realizar medidas de intervención con base en la jerarquía de controles, a fin de garantizar lugares de trabajo seguros, en el que se eliminen los peligros o se disminuyan los riesgos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        titulo: 'Riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Exposición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Valoración GTC-45',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Jerarquía de controles',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Factor de reducción y justificación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      {
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
  complementario: [
    {
      tema:
        'Determinación cualitativa del nivel de deficiencia de los peligros higiénicos',
      referencia: '',
      tipo: 'Anexo',
      descarga: '/downloads/AnexoC.docx',
    },
    {
      tema: 'Valoración cuantitativa de los peligros higiénicos ',
      referencia: '',
      tipo: 'Anexo',
      descarga: '/downloads/AnexoD.docx',
    },
    {
      tema: 'Napo Identificación de Peligros y Evaluación de Riesgo',
      referencia:
        'SEGURIDAD E HIGIENE. (2019). Napo Identificación de Peligros y Evaluación de Riesgo. [Video]. Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=hK36CWI6XBY&t=180s',
    },
    {
      tema: 'Napo - Evaluación de Riesgos',
      referencia:
        'Ricardo Ormeño Safety. (2020). Napo Evaluación de Riesgo [Video]. Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=nQtMijdYUJ4',
    },
    {
      tema: 'NAPO en evaluación de riesgos',
      referencia:
        'SEGURIDAD E HIGIENE. (2018). Napo en Evaluación de riesgos [Video]. Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=WyA7DIkiC0g',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de riesgo',
      significado:
        'Proceso que permite identificar la naturaleza de los peligros, a fin de establecer los niveles del riesgo.',
    },
    {
      termino: 'Diagnóstico de condiciones de salud',
      significado:
        'Evaluación que permite identificar el estado de la población trabajadora, en la que se observan aspectos como estado fisiológico, psicológico, sociocultural y perfil demográfico.',
    },
    {
      termino: 'EPP',
      significado:
        'Elemento de Protección Personal, es un objeto que permite proteger a los trabajadores en un parte de su cuerpo, de los peligros presentes en sus actividades laborales.',
    },
    {
      termino: 'Enfermedad laboral',
      significado:
        'Patología que sobreviene por causa de las condiciones ambientales o la forma en la que los trabajadores desarrollan sus actividades.',
    },
    {
      termino: 'EPI',
      significado:
        'Equipo de protección individual es un conjunto de elementos que permiten proteger a los trabajadores de los peligros expuestos durante una actividad a realizar. Estos deben ser usados completos, para garantizar la protección del trabajador.',
    },
    {
      termino: 'Evaluación higiénica',
      significado:
        'Medición de las condiciones ambientales en los lugares de trabajo, para determinar los niveles de riesgo.',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'Proceso que permite establecer el nivel de riesgo, el cual se encuentra relacionado con la probabilidad y la consecuencia que se pueda tener en el desarrollo de una tarea.',
    },
    {
      termino: 'Exposición',
      significado:
        'Momento exacto en el que un trabajador se encuentra en contacto con el peligro.',
    },
    {
      termino: 'Identificación de peligro',
      significado:
        'Acción para reconocer los peligros presentes en las tareas realizadas por un trabajador dentro de su jornada de trabajo.',
    },
    {
      termino: 'Lugar de trabajo',
      significado:
        'Espacio administrado por la empresa, en el que se desarrollan las actividades y tareas.',
    },
    {
      termino: 'Valor límite permisible',
      significado:
        'Valor máximo permitido en cantidad de dosis establecido por la norma legal, en el que un trabajador pueda encontrarse expuesto a un peligro.',
    },
  ],
  referencias: [
    {
      referencia:
        'GTC 45. (2012), <em>Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. Segunda Actualización</em>. Documentación.',
      link: '',
    },
    {
      referencia:
        'NTC - OHSAS 18001. (2007). <em>Sistemas De Gestión En Seguridad Y Salud Ocupacional - Requisitos</em>. Documentación.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Manosalva Sandoval',
        cargo: 'Experta Temática',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
