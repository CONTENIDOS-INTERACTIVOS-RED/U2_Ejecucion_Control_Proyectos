<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Control de calidad y aseguramiento del cumplimiento de objetivos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.svg", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left").mb-0 En la gestión de proyectos, el control de calidad y el aseguramiento del cumplimiento de objetivos son procesos fundamentales que permiten verificar que los productos, servicios o entregables cumplan con los requisitos definidos, y que el desarrollo del proyecto se mantenga alineado con los objetivos establecidos desde el inicio. Ambos procesos, aunque relacionados, tienen enfoques complementarios:
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5 
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/2.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Control de calidad
                p.mb-0.text-center Se centra en revisar y comprobar que los entregables funcionen correctamente, estén libres de defectos y cumplan con criterios técnicos o normativos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/3.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Aseguramiento del cumplimiento de objetivos
                p.mb-0.text-center Implica una supervisión global del proyecto, garantizando que se cumplan metas de alcance, tiempo, costo y calidad, y que cada fase avance conforme al plan.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3mb-lg-0
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A continuación, se presenta un video  que analiza la aplicación continua de procesos de control de calidad y aseguramiento de objetivos a lo largo del ciclo de vida de un proyecto, destacando su impacto en la eficiencia, la satisfacción del cliente y la mejora continua dentro de la gestión organizacional.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h2(data-aos="fade-left") Función estratégica para la toma de decisiones
    p.mb-5 Aplicar de manera sistemática el control de calidad y el aseguramiento del cumplimiento de objetivos permite contar con información:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1  
        .bg-color-8.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Confiable, oportuna y cuantificable sobre el estado real del proyecto.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Útil para prevenir errores, anticipar riesgos y corregir desviaciones a tiempo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Clave para mantener al equipo enfocado en las prioridades.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fundamental para una rendición de cuentas transparente ante los interesados.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Vital para construir relaciones de confianza durante todo el desarrollo del proyecto.
        .bg-color-9.p-5(data-aos="fade-left")
          p.mb-0 En suma, estos procesos no solo garantizan el cumplimiento de los estándares, sino que también contribuyen a superarlos, promoviendo una cultura de excelencia y mejora continua. El primer grupo de herramientas para el control de la calidad se conoce como TQ7, que son siete herramientas básicas de calidad.
    
  
    .titulo-figura.mb-4
      h5 Figura 3.
      span Herramientas para el control de la calidad. Fuente: Elaboración propia. (2025)
    
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diagramas causa efecto
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diagramas de flujo
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Hojas de verificación
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diagramas de Pareto
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Histogramas
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diagramas de control
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diagramas de dispersión
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6(data-aos="fade-left").h-100
          img(src="@/assets/curso/tema4/44.svg", style="max-width: 170px").mx-auto

    h2(data-aos="fade-left").mb-5 Los diagramas causa-efecto

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/14.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") El diagrama causa-efecto, también conocido como diagrama de Ishikawa o diagrama de espina de pescado, es una herramienta analítica utilizada en la gestión de calidad para identificar, organizar y representar gráficamente las múltiples causas que pueden originar un problema específico (efecto) dentro de un proceso o sistema. Su finalidad es facilitar el análisis sistemático de las posibles fuentes de variación, error o no conformidad, permitiendo enfocar los esfuerzos de mejora sobre las causas raíz.

    .titulo-figura.mb-4
      h5 Figura 4.
      span Diagrama Causa y efecto
    .bg-color-12.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema4/15.svg", data-aos="zoom-in")

    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Estructura del diagrama
        p.mb-5 El diagrama parte de una línea central horizontal que apunta hacia el problema o efecto a analizar. De esta línea se desprenden ramas oblicuas que representan las categorías principales de causas. En entornos industriales, estas se agrupan comúnmente en el modelo de las “6M”:.
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Método
                p.text-center Procedimientos utilizados para ejecutar el trabajo. ¿Son adecuados, estandarizados y eficientes?e.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mano de obra
                p.text-center Capacitación, experiencia, actitud o cantidad del personal involucrado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Maquinaria
                p.text-center Equipos, herramientas, tecnología y su mantenimiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Materiales
                p.text-center Insumos, materias primas o suministros utilizados. ¿Son apropiados y de calidad?
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Medio ambiente
                p.text-center Condiciones físicas, ambientales o de entorno que afectan el proceso.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Medición
                p.text-center Instrumentos, métodos de control y precisión de los datos obtenidos.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/16.png', alt='')
     
        .bg-full-width.bg-color-2.mb-5
          .px-4.px-md-5.py-4.text-white
            p.mb-0 Estas categorías pueden adaptarse a distintos contextos (servicios, tecnología, educación) y se descomponen en subcausas de segundo o tercer nivel, lo que proporciona una visión jerárquica y relacional del problema.
    
    h2(data-aos="fade-left") Aplicación en la gestión de calidad
    p.mb-5 El diagrama causa-efecto es especialmente útil en las fases de control y aseguramiento de calidad de un proyecto, ya que permite realizar un análisis estructurado de las causas que provocan desviaciones respecto a los estándares definidos. Se integra fácilmente en metodologías como:


    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/23.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Six Sigma
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/24.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Lean Project Management
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/25.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Ciclo PHVA (Planificar-Hacer-Verificar-Actuar)
    
    p.mb-5 Gracias a su estructura visual, esta herramienta facilita la colaboración en equipo al generar hipótesis fundamentadas sobre las causas de las no conformidades, evitando decisiones basadas en suposiciones o percepciones subjetivas.

    h2(data-aos="fade-left") Valor preventivo y enfoque proactivo
    p.mb-5 Más allá del diagnóstico de problemas, el diagrama promueve la prevención en lugar de la simple corrección. Esto se logra al:

    .bg-full-width.bg-color-4.mb-5
      .p-4.px-lg-5.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Visualizar relaciones causales no evidentes mediante una simple revisión del resultado.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Permitir la identificación de riesgos potenciales antes de que afecten los entregables.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Servir como base para priorizar acciones correctivas, especialmente si se combina con herramientas complementarias como: análisis de Pareto y método de los cinco porqués
                p Aunque el diagrama causa-efecto no proporciona una solución definitiva, constituye un insumo esencial para el análisis profundo de problemas de calidad, y fortalece la capacidad del equipo para tomar decisiones fundamentadas y sostenibles.
              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema4/26.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left").mb-5 Diagramas de flujo

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/27.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Un diagrama de flujo es una representación gráfica y secuencial de un proceso, procedimiento o algoritmo. Utiliza símbolos estandarizados para describir operaciones, decisiones, entradas, salidas y la dirección del flujo de las actividades. Este recurso permite modelar de manera clara y ordenada la lógica de ejecución de las tareas, facilitando la comprensión del proceso tanto para quienes lo diseñan como para quienes lo implementan.
    
        .bg-color-9.mb-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los diagramas de flujo son ampliamente utilizados en diversas áreas técnicas y administrativas porque ayudan a descomponer procesos complejos en pasos simples y manejables. Al detallar cada etapa y las interacciones entre ellas, esta herramienta permite detectar redundancias, cuellos de botella o pasos innecesarios, lo cual resulta fundamental para la optimización de procesos. 
        p Además, contribuyen a documentar procedimientos de manera estandarizada, facilitando tanto la formación de personal como la comunicación entre áreas.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/29.svg", data-aos="zoom-in")
      .col-lg-9
        .bg-color-1.p-5.borCom(data-aos="fade-left")
          p En el contexto del aseguramiento de la calidad de un proyecto, los diagramas de flujo son esenciales para identificar con precisión los puntos críticos de control y establecer los criterios de aceptación de las actividades. Al visibilizar lógicamente la secuencia de operaciones, es posible detectar riesgos potenciales en fases tempranas y diseñar medidas correctivas o preventivas que aseguren el cumplimiento de los estándares de calidad.
          p.mb-0 La aplicación sistemática de diagramas de flujo favorece la auditoría y mejora continua de los procesos, ya que brinda una referencia clara y verificable para evaluar la conformidad del desarrollo con los requisitos establecidos. De esta manera, se consolidan como una herramienta clave no solo para el diseño y ejecución eficiente de un proyecto, sino también para garantizar que los resultados finales satisfagan las expectativas del cliente y los criterios normativos.
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Diagrama de flujo.
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4 Símbolo
            th.bg-color-4 Nombre
            th.bg-color-4 Función
        tbody.bg-color-white
          tr
            td 
              img(src="@/assets/curso/tema4/39.svg", style="max-width: 130px").mx-auto
            td Inicio / Final
            td Representa el inicio y el final de un proceso
          tr.bg-color-sintesis
            td
              img(src="@/assets/curso/tema4/40.svg", style="max-width: 130px").mx-auto
            td Línea de Flujo
            td Indica el orden de la ejecución de las operaciones. La flecha indica la siguiente instrucción.
          tr
            td  
              img(src="@/assets/curso/tema4/41.svg", style="max-width: 130px").mx-auto
            td Entrada / Salida
            td Representa la lectura de datos en la entrada y la impresión de datos en la salida
          tr.bg-color-sintesis
            td
              img(src="@/assets/curso/tema4/42.svg", style="max-width: 130px").mx-auto
            td Proceso
            td Representa cualquier tipo de operación
          tr
            td
              img(src="@/assets/curso/tema4/43.svg", style="max-width: 130px").mx-auto
            td Decisión
            td Nos permite analizar una situación, con base en los valores verdadero y falso

    h2(data-aos="fade-left").mb-5 Diagrama de Pareto
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/30.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El diagrama de Pareto es una herramienta gráfica de análisis que permite representar, en forma de barras ordenadas de mayor a menor, la frecuencia o impacto de las causas que generan un problema o conjunto de efectos en un proceso. Se fundamenta en el principio de Pareto o regla del 80/20, que postula que una proporción relativamente pequeña de las causas (aproximadamente el 20 %) es responsable de la mayor parte de las consecuencias (alrededor del 80 %). Este diagrama combina un histograma con una línea acumulativa que muestra el porcentaje total acumulado, lo que facilita priorizar las áreas de intervención.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En términos técnicos, el diagrama de Pareto permite clasificar y cuantificar las no conformidades, defectos, errores o cualquier otra variable crítica, diferenciando entre las causas vitales y las triviales. Al ordenar los datos en función de su magnitud relativa, se facilita la toma de decisiones basada en evidencias, concentrando los esfuerzos de mejora sobre los factores que aportan el mayor beneficio en la reducción de fallas o en la optimización del desempeño.
        p En el marco del aseguramiento de la calidad de un proyecto, el diagrama de Pareto constituye una herramienta esencial para identificar los defectos o problemas más significativos que afectan el cumplimiento de los requisitos. Su aplicación permite focalizar recursos y acciones correctivas en las causas más relevantes, aumentando la efectividad de las estrategias de control y minimizando desviaciones en los entregables del proyecto.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Asimismo, el uso sistemático del diagrama de Pareto en las etapas de seguimiento y evaluación contribuye a establecer prioridades objetivas en los planes de mejora continua, garantizando que las intervenciones se orienten a maximizar el impacto positivo sobre la calidad del producto o servicio final. Esto fortalece la capacidad del equipo para cumplir con los estándares acordados y asegura resultados consistentes y alineados con las expectativas del cliente y las normativas vigentes.
    
    .titulo-figura.mb-4
      h5 Figura 5.
      span Diagrama de Pareto. 
    .bg-color-12.p-5.mb-2
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/32.svg", data-aos="zoom-in")
    figcaption.bg-color-12.mb-5 Nota  Wikimedia Commons

    h2(data-aos="fade-left").mb-5 Ejemplo.

    p.mb-5 En un proyecto de desarrollo de software para un sistema de gestión académica, el equipo detecta que las pruebas funcionales están reportando una alta cantidad de incidencias que afectan la calidad del producto. Durante las últimas dos semanas, se han registrado 120 fallos en distintos módulos:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/33.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 1
              p.mb-0 Inscripciones
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 2
              p.mb-0 Generación de reportes
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/35.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 3
              p.mb-0 Gestión de usuarios
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/36.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 4
              p.mb-0 Notificaciones por correo
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema4/37.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 5
              p.mb-0 Seguridad
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6(data-aos="fade-left").h-100
          img(src="@/assets/curso/tema4/44.svg", style="max-width: 170px").mx-auto

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/38.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5 El equipo de calidad decide analizar los fallos para identificar las áreas más críticas. Para esto, primero elaboran un diagrama de flujo del proceso de pruebas, con el fin de visualizar la secuencia de actividades y los puntos donde más errores se reportan, como en la validación de datos en la base o en la interfaz del sistema.
        .bg-color-13.p-4(data-aos="fade-left")
          p Luego, construyen un diagrama de Pareto con los datos de los fallos. El análisis revela que el 70 % de los defectos provienen únicamente de dos módulos:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Inscripciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Generación de reportes
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Gracias a este análisis combinado, el equipo prioriza las acciones correctivas en estos dos módulos, asignando más tiempo de revisión y pruebas específicas en sus procesos. Esto les permite enfocar los recursos en las causas más relevantes, reduciendo el riesgo de entregar un producto con deficiencias graves y asegurando que el sistema cumpla con los estándares de calidad establecidos para su implementación en la institución educativa.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=127619214003 " target="_blank" rel="noopener noreferrer") González, J. A., Solís, R., & Alcudia, C. (2010). Diagnóstico sobre la planeación y control de proyectos en las PYMES de construcción. Revista de la Construcción, 9(1), 17–25. Pontificia Universidad Católica de Chile. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/3783/378365831006/html/" target="_blank" rel="noopener noreferrer") Padilla-Lozano, R., & Ríos-Arias, S. (2018). Marco de trabajo para gestionar actividades de calidad en proyectos de desarrollo de software (Framework to manage software quality activities) [Artículo]. Revista Cubana de Ciencias Informáticas, 12(2), 74–88.  
  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/BX70ttoxxvA?si=3yVDvJbNngikobC2 " target="_blank" rel="noopener noreferrer") Keisen Consultores (2024, 1 de noviembre) 191 - REMASTER. 7 Nuevas Herramientas del Control de la Calidad (Parte 1) [Video]. YouTube 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
