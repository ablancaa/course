<template>
    <div class="container">
        <h1 class="titulo">Contacto</h1>
        <div class="row">
            <div class="col-12 col-md-6 col-sm-6">
                <div class="card margenTop" style="width: 22,5rem;">
                    <div class="card-body">
                        <h5 class="card-title">Aula Vall d´Hebron</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Secretaría Técnica actividades formativas externas</h6>
                        <p class="card-text">Edificio ATR, Planta 5 Paseo Vall d’Hebron, 119 – 129 08035 Barcelona</p>
                        <p><img src="../assets/icons/telephone.svg"> - 693785436 / 93 489 45 68</p>
                        <p></p>
                        <img src="../assets/icons/mailbox.svg"> - <a href="#" class="card-link">gestioaulavh@vhebron.net</a><br/>
                        <a href="#" class="card-link"></a>
                    </div>
                    <img src="../assets/images/UbicacionAula.png" height="300">
                </div>
            </div><!-- Fin col -->
            <br/>
            <div class="col-12 col-lg-6 col-sm-6">
                <div class="card margenTop" style="width: 22,5rem;">
                    <div class="card-body">
                        <h5 class="card-title">Aula Vall d´Hebron</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Secretaría Técnica actividades formativas externas</h6>
                        <p class="card-text"><strong>Inscripciones al curso de quemados</strong></p>
                        <p><img src="../assets/icons/telephone.svg"> - 93 489 45 68</p>
                        <p></p>
                        <img src="../assets/icons/mailbox.svg"> - Inscripciones - <a href="#" class="card-link">inscripcionsaulavh@vhebron.net</a><br/>
                        <a href="#" class="card-link"></a>
                    </div>
                    <img src="../assets/images/ubicacion.png" height="300">
                </div>
            </div>
        </div> <!--fin de row -->
    </div>
</template>

<script>
export default { name: 'Contacto' }
</script>

<style lang="scss" scoped>
.titulo{
    background-color:#3D6DA3;
    color: white;
    border-radius: 10px;
    padding: 3px;
}

.margenTop{
    margin-top: 25px;
}

@media (min-width: 668px) {

  .imgPeque{
      width:  50%;
    }
}
</style>
