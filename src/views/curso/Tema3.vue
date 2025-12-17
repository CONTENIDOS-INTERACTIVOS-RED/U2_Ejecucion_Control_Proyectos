<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Control de costos y presupuesto: Earned Value Management (EVM)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-4 El control de costos en un proyecto tiene como finalidad verificar que los gastos realizados correspondan al presupuesto aprobado, comparando continuamente lo ejecutado con lo planificado. Esta vigilancia busca garantizar que el desarrollo del proyecto se mantenga dentro de los límites financieros definidos desde el inicio.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3mb-lg-0
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En proyectos del sector público, suele exigirse un cumplimiento estricto del presupuesto, mientras que en otros sectores se valora positivamente el ahorro. Para llevar a cabo un seguimiento efectivo, se utilizan técnicas específicas de control financiero, siendo la más reconocida la Gestión del Valor Ganado (EVM).
    
    h2(data-aos="fade-left") Aplicación del Earned Value Management (EVM)
    p.mb-5 La técnica EVM permite medir de manera objetiva el desempeño y progreso de un proyecto en términos de tiempo, costo y alcance. Es útil para responder preguntas clave como:

    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/3.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center ¿Cuánto trabajo hemos completado?
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center ¿Estamos dentro del presupuesto?
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center ¿Vamos según el cronograma?
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center ¿Qué podemos esperar si seguimos con el desempeño actual?
    
    h2(data-aos="fade-left") ¿Cuándo aplicar EVM?
    p.mb-5 Debe aplicarse en proyectos con un cronograma y presupuesto definidos, especialmente si son complejos o si requieren un seguimiento riguroso desde etapas tempranas. Su aplicación periódica (por ejemplo, semanal o mensual) permite tomar decisiones oportunas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3mb-lg-0
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 1
                p.mb-0 Proyectos con cronograma y presupuesto definidos
                p.mb-0 Donde se requiere trazabilidad del desempeño.
        .bg-color-6.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3mb-lg-0
                img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 2
                p.mb-0 Proyectos complejos con alto riesgo de desviación
                p.mb-0 Incluso pequeños errores pueden causar grandes impactos.
        .bg-color-6.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3mb-lg-0
                img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 3
                p.mb-0 Desde etapas tempranas del proyecto
                p.mb-0 Aplicación periódica para decisiones oportunas.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        h2(data-aos="fade-left") Componentes fundamentales del EVM
        p.mb-5 La base del EVM se compone de tres elementos clave que permiten evaluar el estado financiero y temporal del proyecto: 
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Planned Value (PV)
                p.mb-0.text-center Valor del trabajo que debería haberse completado según el cronograma.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Earned Value (EV)
                p.mb-0.text-center Valor del trabajo que realmente se ha completado (en términos del presupuesto).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/13.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Actual Cost (AC)
                p.mb-0.text-center Costo realmente incurrido para ejecutar el trabajo.

    p.mb-5 A partir de estos elementos se calculan los principales indicadores de control:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Indicadores de desempeño en costos y cronograma
    .tabla-a.color-acento-botones.mb-3
      table
        thead
          tr
            th.bg-color-4 Indicador
            th.bg-color-4 Fórmula y significado
        tbody.bg-color-white
          tr
            td Cost Variance (CV)
            td EV - AC → Evalúa si el proyecto está por encima o por debajo del presupuesto.
          tr.bg-color-sintesis
            td Schedule Variance (SV)
            td EV - PV → Mide si el proyecto va adelantado o retrasado.
          tr
            td Cost Performance Index (CPI)
            td EV / AC → Indica el rendimiento en costos. CPI < 1 implica sobrecostos.
          tr.bg-color-sintesis
            td Schedule Performance Index (SPI)
            td EV / PV → Indica el rendimiento en cronograma. SPI < 1 indica retraso.


    p.mb-5 Además, EVM permite realizar proyecciones financieras útiles para la toma de decisiones:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-6.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3mb-lg-0
                img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 <em>Estimate at Completion</em> (EAC)
                p.mb-0 Cuánto costará el proyecto al finalizar si se mantiene el desempeño actual.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-6.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3mb-lg-0
                img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 <em>Estimate to Complete</em> (ETC)
                p.mb-0 Cuánto se necesitará para completar el trabajo restante.
    
    h2(data-aos="fade-left") Beneficios del uso de EVM
    p.mb-5 Implementar EVM aporta múltiples ventajas al equipo de gestión del proyecto:

    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Detecta problemas financieros y temporales de forma anticipada.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Permite comunicar el progreso de forma objetiva a los interesados.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Facilita la toma de decisiones correctivas fundamentadas.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aporta datos históricos reales que mejoran la planificación futura.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Evalúa de forma más precisa el desempeño del equipo y la utilización de recursos
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
