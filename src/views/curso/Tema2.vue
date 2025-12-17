<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Indicadores clave de desempeño (KPI) y métricas de control'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left").mb-0 En la gestión profesional de proyectos, los Indicadores Clave de Desempeño (KPI) y las métricas de control son herramientas fundamentales para evaluar el rendimiento, la eficiencia y la eficacia de las actividades ejecutadas. Su implementación permite identificar desviaciones en tiempo real, tomar decisiones basadas en datos y ajustar el curso del proyecto conforme a los objetivos definidos en la planificación inicial. Aunque con frecuencia se usan como sinónimos, existe una distinción técnica entre ambos conceptos:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 KPI (<em>Key Performance Indicators</em>)
              p Métricas críticas directamente relacionadas con los objetivos estratégicos del proyecto. Reflejan los resultados más relevantes y deben monitorearse para evaluar el cumplimiento del desempeño esperado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Métricas de control
              p Medidas operativas específicas que apoyan el análisis de los KPI. Sirven para observar el comportamiento del desempeño técnico, administrativo o financiero del proyecto, aunque no siempre se vinculan con metas estratégicas.
  
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Indicadores Clave de Desempeño (KPI)
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.p-4(data-aos="fade-left").mb-3
          p.mb-0 Los KPI son indicadores cuantificables y estratégicos que miden el grado de avance y eficacia en el logro de objetivos del proyecto. Están alineados con los resultados clave y permiten una supervisión continua, facilitando la detección de desviaciones, la toma de decisiones informadas y la aplicación de acciones correctivas.

        p(data-aos="fade-left") A continuación se presentan los principales tipos de KPI utilizados en gestión de proyectos:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="KPI tiempo")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Variación del cronograma (SV): mide la diferencia entre el Valor Ganado (EV) y el Valor Planeado (PV). Un SV negativo indica retraso en la ejecución.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Índice de desempeño del cronograma (SPI): relaciona EV con PV. Un SPI menor que 1 evidencia ineficiencia en la ejecución del cronograma.
          .div(titulo="KPI costos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Variación de costos (CV): calcula la diferencia entre EV y el Costo Real (AC). Un CV negativo señala sobrecostos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Índice de desempeño de costos (CPI): compara EV con AC. Un CPI inferior a 1 indica un gasto mayor al previsto.
          .div(titulo="KPI  calidad")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Tasa de defectos: número de errores por entregable o unidad producida. Un aumento sugiere problemas técnicos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Nivel de conformidad del cliente: porcentaje de entregables aprobados sin corrección. Un valor alto indica cumplimiento de estándares
          .div(titulo="KPI  recursos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Productividad del equipo: relación entre entregables completados y tiempo empleado. Una baja productividad puede reflejar una mala asignación de recursos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Tasa de rotación del equipo: porcentaje de personal reemplazado durante el proyecto. Un valor alto puede afectar la estabilidad operativa
          .div(titulo="KPI  satisfacción del cliente o usuario")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Índice de satisfacción del cliente (CSAT): valoración directa del cliente sobre los entregables, usualmente en una escala del 1 al 5.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Net Promoter Score (NPS): mide la probabilidad de que el cliente recomiende el producto o servicio. Se calcula restando el % de detractores al % de promotores.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Métricas de control
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las métricas de control son parámetros cuantitativos utilizados para supervisar variables clave durante el desarrollo del proyecto. A diferencia de los Indicadores Clave de Desempeño (KPI), que están centrados en metas estratégicas, estas métricas se enfocan en actividades operativas específicas, permitiendo un seguimiento detallado y la detección temprana de desviaciones.
        
        p(data-aos="fade-left") Estas métricas alimentan los sistemas de control del proyecto, sirven como base para validar los KPI y permiten una gestión fundamentada en datos objetivos. Su análisis regular aporta información clave para la elaboración de informes de desempeño y contribuye a mantener el proyecto dentro de los parámetros de planificación. Las métricas comunes de control son: 
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/8.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="27%" y="19.5%" numero="+")
                h5 Porcentaje de avance físico
                p Mide el grado de ejecución de las actividades planificadas en relación con el cronograma.
    
              .bg-color-white.box-shadow.p-3(x="60%" y="51%" numero="+")
                h5 Horas-hombre planificadas vs. ejecutadas
                p Compara el tiempo estimado con el realmente utilizado por el equipo. Detecta desviaciones en la productividad.
    
              .bg-color-white.box-shadow.p-3(x="51%" y="78%" numero="+")
                h5 Costos acumulados por fase
                p Registra el gasto económico en cada etapa del proyecto. Ayuda a identificar fases con sobrecostos.
    
              .bg-color-white.box-shadow.p-3(x="36%" y="62%" numero="+")
                h5 Frecuencia de incidencias
                p Número de problemas operativos reportados en un periodo. Indica la estabilidad o fragilidad operativa.
    
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=757979598006" target="_blank" rel="noopener noreferrer") Arango Serna, M. D., Díaz Bohórquez, C. E., Arias Osorio, J. E., & Lamos Díaz, H. (2014). Indicadores clave de desempeño para el sistema ferroviario: El caso colombiano. Avances, 11(2), 56–65. Universidad Libre. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.48550/arXiv.2412.09142 " target="_blank" rel="noopener noreferrer") Fioretto, S., Masciari, E., & Napolitano, E. V. (2024). A brief discussion on KPI development in public administration [Preprint]. arXiv. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/iu5CGmJ6hkg?si=B7YyBUr491dNRfxZ " target="_blank" rel="noopener noreferrer") Consultor (PEM)  (2018, 16 de octubre) Planificación Estratégica [Video]. YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/-vorHSqYAxs?si=mMcl63NsokG5R6qz" target="_blank" rel="noopener noreferrer") Campos, B. (2015, 6 de julio) QUE ES KPI (KEY PERFORMANCE INDICATORS) - DEFINE KPI [Video]. YouTube  





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
