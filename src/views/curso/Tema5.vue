<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Cierre del proyecto: entrega de resultados y documentación final'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-5(data-aos="fade-left")
          p Los sistemas de monitoreo y seguimiento aseguran la supervisión continua del avance del proyecto y facilitan el ajuste oportuno de los planes cuando sea necesario. Los estudiantes aprenderán a implementar herramientas que les permitan realizar un seguimiento eficiente del progreso y del cumplimiento de los objetivos, garantizando la transparencia y la responsabilidad en cada fase del proyecto.
          p.mb-5 El cierre efectivo permite evitar riesgos legales o contractuales, facilita la transferencia del producto o servicio a su operación regular y promueve la mejora continua a través de la captura de lecciones aprendidas.

    
    
    .bg-full-width.bg-color-7.mb-5
      .p-4.p-md-5
        #t_5_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 5.1] Tipos de cierre de proyectos
        
        p A continuación, se presenta un video sobre los diferentes tipos de cierre de proyectos, sus características y las consideraciones clave para su adecuada gestión.
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/2.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    h2(data-aos="fade-left") Cierre anticipado
    p.mb-5 principales 
    El cierre anticipado ocurre cuando factores internos o externos impiden continuar el proyecto. Las principales causas son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Definición inicial del proyecto poco clara")
            p.mb-0 Dificulta la ejecución y genera ambigüedad en entregables.
    
          .div(titulo="Desviaciones significativas en alcance o cronograma")
            p.mb-0 Riesgo de sobrecostos y retrasos incontrolables.
    
          .div(titulo="Dificultades técnicas o errores de diseño")
            p.mb-0 Necesidad de rediseñar o cancelar actividades críticas.
    
          .div(titulo="Deficiencias en la planeación inicial")
            p.mb-0 Falta de coherencia entre etapas del proyecto.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Restricciones excesivas en la toma de decisiones")
            p.mb-0 Paralización por limitaciones normativas o contractuales.
    
          .div(titulo="Ausencia de competencias en el equipo")
            p.mb-0 Imposibilidad de cumplir objetivos técnicos o estratégicos.
    
          .div(titulo="Conflictos o falta de cohesión entre actores")
            p.mb-0 Riesgo de ineficiencia y retrasos por desacuerdos.
    
          .div(titulo="Desconexión con objetivos estratégicos")
            p.mb-0 Pérdida de relevancia organizacional del proyecto.
          
          .div(titulo="Cambios políticos, económicos o sociales")
            p.mb-0 Alteración de las condiciones de viabilidad del proyecto.
    
    

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        h2(data-aos="fade-left") Cierre al finalizar el proyecto
        p.mb-5 El cierre estructurado se da cuando el proyecto alcanza sus objetivos clave de manera aceptable. Los aspectos a considerar son:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/5.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Identificación de actividades finales
                p.mb-0.text-center Definir cada acción necesaria para la clausura formal del proyecto.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/6.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Asignación de responsabilidades
                p.mb-0.text-center Determinar quién ejecutará las tareas de cierre.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/7.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Establecimiento del periodo de cierre
                p.mb-0.text-center Programar el inicio y fin del proceso en función del cronograma general.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/8.png" alt="")
              .custom-image-card__text.p-4
                h5.text-center Procedimiento de entrega formal
                p.mb-0.text-center Definir medios, formatos y responsables de la entrega de resultados.

        .bg-full-width.bg-color-2.mb-5
          .px-4.px-md-5.py-4.text-white
            p.mb-0 Un riesgo frecuente en esta fase es que el equipo pierda interés al concluir las actividades principales, por lo que es fundamental contar con un plan de cierre completo y comunicado.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/9.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Cierre temporal
        .bg-color-11.py-5.px-4(data-aos="fade-left")
          p El cierre temporal se aplica cuando, por limitaciones de recursos o evaluación de viabilidad, se decide pausar el proyecto.
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Permite reasignar recursos a prioridades urgentes.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Puede derivar en la integración a otra iniciativa o actividad permanente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Requiere monitoreo continuo para determinar si el proyecto se retomará o cancelará.

    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Herramientas y documentos de cierre
        p.mb-5 Durante la etapa de cierre, se utilizan instrumentos que garantizan una finalización organizada y verificable:
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acta de cierre del proyecto
                p.text-center Formaliza la finalización y autoriza el cierre administrativo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acta de aceptación de entregables
                p.text-center Certifica que el cliente o área receptora aprueba los resultados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Informe final del proyecto
                p.text-center Resume desempeño, resultados y recomendaciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Registro de lecciones aprendidas
                p.text-center Documenta experiencias para futuros proyectos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 <em>Checklist</em> de cierre administrativo y contractual
                p.text-center Asegura que todos los trámites y contratos estén completados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Repositorio documental digital
                p.text-center Centraliza la información y protege la memoria del proyecto.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evaluaciones de desempeño del equipo
                p.text-center Mide la contribución de cada integrante y facilita su reubicación.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/10.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/18.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Importancia de la documentación final
        p.mb-5 La documentación final de un proyecto es esencial porque:
        .bg-color-14.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Cumple con requerimientos legales y contractuales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Facilita auditorías y rendición de cuentas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Sirve como base para futuros proyectos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Protege la memoria organizacional.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Apoya la toma de decisiones estratégicas.
        .bg-color-4.p-5(data-aos="fade-left")
          p.mb-0 Una gestión documental deficiente puede generar pérdida de información valiosa, reclamaciones contractuales y dificultades operativas.

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Actividades para el cierre del proyecto
    
    p.mb-5 El cierre de un proyecto comprende un conjunto de acciones planificadas y secuenciales orientadas a:

    .bg-full-width.bg-color-9.mb-5
      .p-4.p-lg-0.px-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Finalizar formalmente el proyecto.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Verificar el cumplimiento del alcance y la calidad de los entregables.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Ejecutar el cierre administrativo y contractual.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Consolidar la documentación final y liberar recursos.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Registrar lecciones aprendidas para futuros proyectos.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema5/19.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-5 El objetivo es garantizar una conclusión ordenada, legal y técnica del proyecto. Las principales actividades de cierre son: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Verificación del cumplimiento del alcance")
            p Incluye una revisión final de todos los entregables frente al plan de gestión. Implica inspecciones, auditorías internas y validación por los interesados clave.
    
          .div(titulo="Entrega de resultados al cliente o usuario final")
            p Se formaliza la aceptación de entregables mediante actas, pruebas funcionales, manuales de usuario y capacitaciones que aseguren el uso correcto del producto o servicio.
    
          .div(titulo="Revisión y cierre de contratos")
            p Se verifica el estado de contratos con proveedores y aliados, liberando pagos pendientes y formalizando el cierre con actas de liquidación contractual.
    
          .div(titulo="Consolidación y archivo de la documentación final")
            p Se recopilan informes, cronogramas, presupuestos, contratos, matrices de riesgos y demás documentos. Se archivan en repositorios físicos o digitales para garantizar trazabilidad y auditoría.
          .div(titulo="Evaluación del desempeño y lecciones aprendidas")
            p El equipo realiza una retrospectiva para identificar aciertos, errores y oportunidades de mejora, documentando KPIs, gestión de riesgos y nivel de satisfacción del cliente.

    h2(data-aos="fade-left") Escenarios de terminación de un proyecto
    p.mb-5 Todo proyecto llega a su término por cumplimiento de objetivos o decisión anticipada, según la aceptación de clientes, patrocinadores o involucrados.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Infraestructura o industrial
              p Cuando se transfiere oficialmente la propiedad del activo al cliente, como en la instalación de una planta industrial o la entrega de un producto terminado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Innovación o desarrollo
              p Con la finalización del diseño y su transferencia al área productiva, incluyendo la creación de nuevos productos o servicios para el portafolio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Iniciativa interna
              p Al incorporar y poner en funcionamiento la solución dentro del sistema productivo de la organización (ej. sistema administrativo o de control).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cierre anticipado
              p Si debe interrumpirse antes de tiempo, se pueden integrar resultados parciales a los procesos existentes para recuperar recursos invertidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Proyectos prolongados
              p Si se extienden por definición inadecuada del alcance, es necesario replantear objetivos, redefinir límites y establecer un plan de cierre ordenado.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Lecciones aprendidas y mejora continua en la gestión de proyectos
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Lecciones aprendidas y mejora continua en la gestión de proyectos, donde se aborda la importancia de identificar, documentar y aplicar experiencias adquiridas durante la ejecución de proyectos, tanto positivas como negativas. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Lecciones aprendidas y mejora continua en la gestión de proyectos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/26.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="file:///E:/Documentos04012024/Downloads/Dialnet-MetodologiaParaElCierreAdministrativoDeLosProyecto-4494921.pdf" target="_blank" rel="noopener noreferrer") García, D., & Gómez Pérez, M. Á. (2013). Metodología para el cierre administrativo de los proyectos de desarrollo de transmisión en el sector eléctrico. Télématique: Revista Electrónica de Estudios Telemáticos, 12(2), 47–64.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://wisc.pb.unizin.org/technicalpm/chapter/project-reviews/ " target="_blank" rel="noopener noreferrer") Unizin. (s. f.). Project Closure and Audits. En Technical Project Management in Practice. Recuperado de 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/_wpuuCSi_Xk?si=0uLs0I_99tgWO77x " target="_blank" rel="noopener noreferrer") Unidad de Innovación UMU (2016, 21 de septiembre) Tema 6 Procesos de seguimiento y cierre [Video]. YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Lc5w5c62zds?si=KLnXAVO-7raUVryG  " target="_blank" rel="noopener noreferrer") Software Guru (2014, 23 de julio) Cierre efectivo de proyectos de Software y resultados [Video]. YouTube  





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el propósito principal del control en la gestión de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Determinar la duración total del cronograma propuesto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estimar los recursos humanos disponibles en el equipo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Medir el desempeño real frente al plan establecido ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Identificar el tipo de contrato aplicable al proyecto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué herramienta se utiliza para evaluar el rendimiento del proyecto integrando alcance, tiempo y costo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Earned Value Management (EVM) ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Análisis PESTEL aplicado al entorno',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Lluvia de ideas para resolución de conflictos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Árbol de decisiones para seleccionar actividades',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo del seguimiento en la gestión de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estimar la inversión inicial del proyecto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Observar el progreso y generar reportes actualizados ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar el diseño gráfico del cronograma',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Aplicar encuestas para evaluar la satisfacción del cliente ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué componente forma parte de la línea base del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Manual de funciones de los colaboradores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Formato de reuniones con el cliente',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Registro histórico de proyectos anteriores',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Plan aprobado de cronograma, costo y alcance ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué función cumple el uso de indicadores clave de desempeño (KPI) en el control del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Controlar exclusivamente los recursos financieros asignados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Determinar la fecha de entrega de cada entregable',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Medir logros en tiempo, costo, calidad y recursos ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Registrar exclusivamente los avances en comunicación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
