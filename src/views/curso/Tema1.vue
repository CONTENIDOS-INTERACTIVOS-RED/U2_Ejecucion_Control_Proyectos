<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Técnicas de monitoreo y control en gestión de proyectos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 El seguimiento y la supervisión constituyen elementos esenciales en el desarrollo de cualquier proyecto, sin importar el sector al que pertenezca. Su propósito es asegurar, mediante una observación constante y organizada, que el proyecto avance conforme a lo planeado y alcance las metas propuestas. Este proceso implica acciones específicas que ayudan a mantener el rumbo correcto.
    
        .bg-color-13.p-4(data-aos="fade-left")
          p El monitoreo cumple dos funciones principales:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Verificar que las actividades conduzcan al logro de los objetivos propuestos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Asegurar que todo se ejecute según lo estipulado en el plan inicial.
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Este proceso se desarrolla a lo largo de todo el proyecto, tomando como referencia el plan formulado, lo cual permite detectar desviaciones a tiempo y tomar medidas oportunas para corregir el rumbo. La frecuencia del monitoreo depende del tipo de proyecto; algunos requieren supervisión constante, mientras que otros permiten revisiones periódicas. En cualquier caso, es importante mantener una actitud flexible que permita actuar con rapidez ante cambios o dificultades.
    
    p Desde la fase inicial hasta la finalización, el monitoreo implica recopilar y analizar información sobre el desempeño del proyecto, así como identificar patrones y resultados útiles para la mejora continua. Gracias a este seguimiento, el equipo de trabajo puede evaluar el progreso y detectar áreas que requieren mayor atención.

    p.mb-5 Por otro lado, el control se enfoca en la toma de decisiones correctivas o preventivas. Esto incluye:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 1
              p.mb-0 Realizar ajustes al plan.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 2
              p.mb-0 Aplicar medidas correctivas o preventivas.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 3
              p.mb-0 Verificar la eficacia de dichas acciones.
    
    p.mb-5 Según Velasco Sánchez, J. (2015), existen diversos factores que pueden impedir el logro de los objetivos del proyecto, entre ellos:

    .bg-full-width.bg-color-8
      .p-4.py-lg-0.px-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Errores en el diseño, como metas poco claras o actividades mal estructuradas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Inconvenientes durante la implementación, por incumplimiento del plan.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Factores externos, es decir, elementos ajenos al proyecto que afectan su desarrollo y no fueron previstos.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-color-9.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Por ello, las actividades de monitoreo y control deben estar presentes en todas las fases del proyecto. Es indispensable que se integren desde el principio como parte activa del proceso, ya que su correcta ejecución aumenta significativamente las probabilidades de éxito. Para lograrlo, es fundamental contar con una planificación adecuada desde la etapa de diseño, entendiendo que todas las etapas están interconectadas.
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Funcionalidad del monitoreo y control

    p.mb-5 La utilidad del proceso se basa en tres aspectos principales, los cuales deben aplicarse en el momento adecuado y asegurar que el desarrollo del proyecto sea efectivo.

    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-0.text-center Verificar que se esté llevando de forma adecuada las actividades y procesos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-0.text-center Corregir cuando sea pertinente para no desviarse de lo planeado.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-0.text-center Reprogramar o volver a planear en caso de ser necesario.
    
        .bg-full-width.bg-color-2.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 La figura  ilustra el ciclo de vida de un proyecto, destacando las etapas de inicio, planificación, ejecución y cierre, así como el papel transversal del monitoreo y control, que permite realizar acciones de rediseño, corrección y verificación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-figura.mb-4
          h5 Figura 1.
          span Ciclo de vida del proyecto y el control.
        .bg-color-12.p-4
          .row.justify-content-center
            .col-lg-8
              figure
                img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")

    .bg-full-width.bg-color-3
      .px-4.px-md-5      

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-4.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Para llevar a cabo este proceso, es necesario contar con herramientas y sistemas adecuados que faciliten el flujo de información, ya que esto permite ejecutar las acciones necesarias en el momento indicado. Esto implica conocer a fondo los recursos disponibles, las actividades programadas y los productos esperados; además, es importante comprender cómo se relacionan con los tiempos establecidos, los costos asignados y los niveles de calidad definidos para el proyecto. 
            p(data-aos="fade-left") Aunque el monitoreo y el control dentro de la gestión de proyectos suelen centrarse en las tareas internas, también ofrecen la posibilidad de ir más allá, pues permiten analizar cómo los resultados obtenidos se comparan con los objetivos planteados. Desde esta perspectiva, la gestión busca, a través del seguimiento y el control, actuar en diferentes frentes como el cumplimiento de metas, la mejora continua del proceso y la toma de decisiones informadas que contribuyan al éxito del proyecto. Se espera que a través de el se consiga lo siguiente:

        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5
              .col-lg-8.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/13.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Aprovechando al máximo el rendimiento del proyecto
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/14.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Controlando adecuadamente los gastos
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/15.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Alcanzando el nivel de calidad esperado
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/16.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Cumpliendo con los plazos establecidos.
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/17.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Unificando todos los elementos del proceso
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/18.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Utilizando los recursos de forma óptima
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/19.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Anticipando y gestionando posibles riesgos
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/20.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Entendiendo claramente cada etapa del proyectOrganizando de manera completa y efectiva la información
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema1/21.png' alt='AvatarTop').mx-auto.mb-3
                    p.text-center.p-4 Aplicando las correcciones necesarias cuando se presenten desviaciones
        
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/12.png', alt='')
        
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Elementos objeto de monitoreo y control
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-9.borCom-1.p-4(data-aos="fade-left").mb-3
          p Estos son los procesos que permiten mantener el control y la orientación del proyecto, ya que a través de revisiones constantes se pueden detectar aspectos que requieren ajustes o modificaciones y así tomar las decisiones necesarias a tiempo.
          p.mb-0 A través de estos procesos se pretende construir una comprensión organizada del proyecto, lo que permite reconocer en qué áreas es necesario enfocar más esfuerzo, abarcando tanto las acciones específicas como el desarrollo general del proyecto.
        p(data-aos="fade-left") La figura presenta los distintos procesos distribuidos según las áreas de trabajo relacionadas con el seguimiento y control del proyecto, los cuales incluyen los siguientes:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-figura.mb-4
          h5 Figura 2.
          span Procesos de monitoreo y control. 
        .bg-color-12.p-4
          .row.justify-content-center
            .col-lg-10
              figure
                img(src="@/assets/curso/tema1/23.svg", data-aos="zoom-in")

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Técnicas de monitoreo y control
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las técnicas de monitoreo y control permiten supervisar de forma sistemática el desempeño del proyecto respecto a las dimensiones clave: alcance, cronograma, costos y calidad, tal como están definidos en el plan de gestión. Su aplicación oportuna permite identificar desviaciones, analizar sus causas y tomar decisiones correctivas o preventivas, asegurando el cumplimiento de los objetivos establecidos.
        p(data-aos="fade-left") Estas técnicas deben aplicarse de forma integrada y coherente con el ciclo de vida del proyecto, y deben adaptarse según el tipo, la complejidad y el contexto organizacional en el que se desarrollen. Las principales técnicas de monitoreo y control son: 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis del valor ganado (<em>Earned Value Management</em> – EVM)
              p Integra alcance, tiempo y costo para evaluar el desempeño real del proyecto. Utiliza indicadores como el Valor Planeado (PV), Valor Ganado (EV) y Costo Real (AC), con métricas como el Índice de Desempeño de Costos (CPI) y el Índice de Desempeño de Cronograma (SPI).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Líneas base de desempeño
              p Funcionan como puntos de referencia para medir la evolución del proyecto. Las líneas base de alcance, tiempo y costo se comparan con el desempeño real para detectar desviaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Reuniones de control y seguimiento
              p Espacios periódicos de revisión del avance del proyecto. Permiten resolver problemas, actualizar actividades, coordinar al equipo y anticipar riesgos. Son esenciales para mantener la alineación con los objetivos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis de variación
              p Compara resultados planificados y reales para identificar y analizar diferencias. Facilita la detección de desviaciones y el establecimiento de acciones correctivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Revisión de entregables
              p Verificación sistemática del cumplimiento de requisitos técnicos y de calidad. Incluye inspecciones, pruebas o validaciones para asegurar la conformidad de productos o servicios.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión de cambios
              p A través de un sistema formal, se analiza el impacto de solicitudes de modificación sobre los objetivos del proyecto. Se decide si aprobar, aplazar o rechazar el cambio, preservando la estabilidad y trazabilidad del plan.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Monitoreo de riesgos
              p Implica el seguimiento continuo de los riesgos identificados, la evaluación de nuevos riesgos y la revisión de la eficacia de las respuestas. Se apoya en registros de riesgos, análisis cualitativos y cuantitativos, y reuniones específicas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Indicadores clave de desempeño (<em>Key Performance Indicators</em> – KPI)
              p Miden variables críticas como avance, costos, calidad, recursos y satisfacción del cliente. Proporcionan una visión rápida y objetiva del estado del proyecto, facilitando la toma de decisiones.
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=151332653004 " target="_blank" rel="noopener noreferrer") Sánchez Montoya, J. P., & Cuadros Mejía, A. (2014). Análisis de técnicas de seguimiento y control de proyectos. Aplicación en la industria de construcción de botes. Revista Ciencias Estratégicas, 22(31), 51–66. Universidad Pontificia Bolivariana. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/abs/1902.02270  " target="_blank" rel="noopener noreferrer") Yousefi, N., Sobhani, A., Moslemi Naeni, L., & Currie, K. R. (2019). Using statistical control charts to monitor duration-based performance of project [Preprint]. arXiv. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/I3pr7GOPMyM?si=SPJSivbDIztD7IG9 " target="_blank" rel="noopener noreferrer") SFPIE UV  (2023, 22 de febrero) Claves de éxito en la gestión de proyectos [Video]. YouTube   
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/jNZ-urxgUs0?si=rhxb4Yr13Yh7Tiu1  " target="_blank" rel="noopener noreferrer") JFM Ingeniería EYT (2021, 10 de abril) Gestión del Alcance del proyecto PMI v6 0 [Video]. YouTube  





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
