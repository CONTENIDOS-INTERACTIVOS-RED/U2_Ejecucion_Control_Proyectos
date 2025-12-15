export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Control y Seguimiento del Proyecto',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de monitoreo y control en gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funcionalidad del monitoreo y control',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos objeto de monitoreo y control',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de monitoreo y control',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores clave de desempeño (KPI) y métricas de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores Clave de Desempeño (KPI)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métricas de control',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Control de costos y presupuesto: Earned Value Management (EVM)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Control de calidad y aseguramiento del cumplimiento de objetivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Cierre del proyecto: entrega de resultados y documentación final',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de cierre de proyectos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Actividades para el cierre del proyecto',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Velasco Sánchez, J. (2015). <em>Gestión de proyectos en la empresa: planificación, programación y control</em>. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49059',
    },
    {
      referencia:
        'Meza Orozco, J. J. (2010). <em>Evaluación financiera de proyectos</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69145?page=12',
    },
    {
      referencia:
        'Córdoba Padilla, M. (2011). <em>Formulación y evaluación de proyectos</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69169?page=14',
    },
    {
      referencia:
        'Meza Orozco, J. J. (2010). <em>Evaluación financiera de proyectos</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69145?page=12',
    },
    {
      referencia:
        'Velasco Sánchez, J. (2015). <em>Gestión de proyectos en la empresa: planificación, programación y control</em>. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49059',
    },
    {
      referencia:
        'Boero, C. (2020). <em>Evaluación de proyectos</em>. Jorge Sarmiento Editor - Universitas.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/172500?page=8',
    },
    {
      referencia:
        'Córdoba Padilla, M. (2011). <em>Formulación y evaluación de proyectos</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69169?page=14',
    },
    {
      referencia:
        'Meza Orozco, J. J. (2010). <em>Evaluación financiera de proyectos</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69145?page=12',
    },
  ],
  glosario: [
    {
      termino: 'Control de Calidad',
      significado:
        'Proceso sistemático mediante el cual se supervisan las actividades y resultados del proyecto para verificar que cumplan con los estándares de calidad establecidos. Incluye la identificación de errores, desviaciones y acciones correctivas para garantizar la satisfacción de los requisitos del cliente.',
    },
    {
      termino: 'Control de Costos',
      significado:
        'Conjunto de procedimientos destinados a monitorear y regular el gasto del proyecto, comparando los costos reales con los planificados. Permite detectar desviaciones presupuestales y tomar decisiones oportunas para mantener el proyecto dentro del presupuesto aprobado.',
    },
    {
      termino: 'Cronograma del Proyecto',
      significado:
        'Herramienta de planificación que organiza y representa gráficamente las actividades del proyecto en una línea de tiempo. Sirve para establecer la secuencia lógica, duración y fechas estimadas de inicio y finalización de las tareas.',
    },
    {
      termino: 'Earned Value Management (EVM)',
      significado:
        'Técnica de control de proyectos que integra el alcance, el cronograma y el costo, con el fin de evaluar el rendimiento del proyecto. Compara el valor ganado (trabajo realizado) con el valor planificado y el costo real para identificar variaciones y tendencias.',
    },
    {
      termino: 'Indicadores Clave de Desempeño (KPI)',
      significado:
        'Métricas cuantitativas utilizadas para evaluar el rendimiento de un proyecto en relación con sus objetivos. Algunos ejemplos son el índice de cumplimiento del cronograma, el índice de desempeño de costos o el nivel de calidad entregada.',
    },
    {
      termino: 'Línea Base del Proyecto',
      significado:
        'Conjunto de planes aprobados que sirven como punto de referencia para medir y comparar el desempeño real del proyecto. Incluye la línea base de alcance, cronograma y costos.',
    },
    {
      termino: 'Monitoreo del Proyecto',
      significado:
        'Proceso continuo de recolección, análisis y reporte de datos sobre el desempeño del proyecto. Permite identificar riesgos, avances o desviaciones y asegurar el cumplimiento de los objetivos definidos.',
    },
    {
      termino: 'Métricas de Control',
      significado:
        'Valores medibles que permiten evaluar el estado de variables específicas del proyecto. Estas métricas son esenciales para la toma de decisiones y para realizar ajustes correctivos y preventivos durante la ejecución.',
    },
    {
      termino: 'Plan de Gestión del Proyecto',
      significado:
        'Documento integral que detalla cómo se ejecutará, supervisará y controlará el proyecto. Incluye planes subsidiarios de alcance, tiempo, costos, calidad, recursos, comunicaciones, riesgos, adquisiciones y stakeholders.',
    },
    {
      termino: 'Valor Ganado (EV – Earned Value)',
      significado:
        'Indicador del valor del trabajo efectivamente ejecutado hasta una fecha determinada, expresado en términos monetarios. Se utiliza en el análisis de EVM para comparar el progreso real frente al planificado.',
    },
  ],
}
