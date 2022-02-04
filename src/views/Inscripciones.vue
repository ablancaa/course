<template>
    <div class="container">
    <h1 class="titulo">Inscripciones</h1>
    <div class="col-12 col-lg-12"></div>
    <br/>
    <div class="row">
    <div class="col-12 col-md-6 col-lg-6">
        <br/>
        <p class=""><img src="../assets/icons/calendar-event.svg" width="50"/> <strong>Hasta el 01/03/2022</strong> -------- <strong>50 €</strong></p>
        <br/>
        <p class=""><img src="../assets/icons/calendar-event.svg" width="50"/> <strong>Desde el 02/03/2022</strong> ------ <strong>100 €</strong></p>
        <p class="izq">La inscripción a las sesiones incluye: asistencia, documentación, cafés pausa y comida del día 28/04.
            Pueden tramitar la inscripción a través de la web de Aula Vall d’Hebron (<a href="https://aula.vallhebron.com">https://aula.vallhebron.com)</a> apartado de
            próximos cursos.</p>
            <p class="izq">No se realizará reserva de plaza ni se admitirán inscripciones que no vayan acompañadas del pago
            correspondiente. Las inscripciones a los talleres se realizarán con un formulario posterior al pago y por riguroso orden
            de inscripción. </p>
            <p class="izq"><em>Se admitirán anulaciones que se realicen antes del 1 de febrero de 2022. Por gastos de anulación, se devolverá el 85% del importe de la inscripción.</em></p>
            </div>
    <div class="col-12 col-md-6 col-lg-6">
        <h2 class="fondo_parrafo d-flex justify-content-around p-1">Acreditación <!-- <img src="../assets/icons/book.svg" width="25" class="m-0"/> --></h2>
        <p class="izq">Solicitada la acreditación por el Consell Català de la Formació Continuada de les Professions Sanitàries – Comisión de
            Formación Continuada del Sistema Nacional de Salud Se entregará certificado a los asistentes que cumplan un mínimo de 100% de asistencia.</p>
        <h2 class="fondo_parrafo d-flex justify-content-around p-1">Secretaría Técnica <!-- <img src="../assets/icons/stack-overflow.svg" width="25" class="m-0"/> --></h2>
        <p class="izq"><strong>Aula Vall d'Hebron</strong> <br/>- Secretaría Técnica actividades formativas externas <br/> - inscripcionsaulavh@vhebron.net<br/> - 693785436</p>
        <h2 class="fondo_parrafo d-flex justify-content-around p-1">Lugar de Realización <!-- <img src="../assets/icons/geo-alt.svg" width="25" class="m-0"/> --></h2>
        <p class="izq">- Sala de actos Pabellón Docente</p>
        <p class="izq">- Módulo Norte HUVH</p>
        <div><img class="card-img-top" src="../assets/images/ubicacion.png"/></div>
    </div>
    </div>
    </div>
</template>

<script>
export default { name: 'Inscripciones' }
</script>

<style lang="scss" scoped>
.izq{
    text-align: justify;
}

.fondo_parrafo{
    background-color: burlywood;
    border-radius: 5px;
}

.titulo {
    background-color:#3D6DA3;
    color: white;
    border-radius: 10px;
    padding: 3px;
}
</style>
