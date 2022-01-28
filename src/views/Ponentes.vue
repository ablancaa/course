<template>
    <main class="container d-flex aling-items-center justify-content-center">
        <div class="row">
            <!-- Columna izquierda -->
            <h1 class="titulo">Ponentes</h1>
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12 col-sm-8">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-daniel.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                    <div class="ps-3">
                                        <h6 class="m-0">Daniel Clifford</h6>
                                        <p class="m-0">Cirujano Plástico</p>
                                    </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima voluptates accusantium consectetur, quam necessitatibus. Officiis, assumenda praesentium!</p>
                                    <p class="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-sm-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-kira.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                        <div class="ps-3">
                                            <h6 class="m-0">Laura Gonzalez Clifford</h6>
                                            <p class="m-0">D.U.E Unidad de quemados</p>
                                        </div>
                                </div>
                                    <p class="h6 p-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque</p>
                                    <p class="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing</p>
                            </div>
                        </article>
                        </div>
                    <div class="col-12 col-sm-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-jeanette.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                        <div class="ps-3">
                                           <h6 class="m-0">Miriam Vicente Sánchez</h6>
                                           <p class="m-0">Unidad de prevención de riesgos laborales</p>
                                        </div>
                                </div>
                                    <p class="h6 p-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima voluptates accusantium consectetur, necessitatibus. Officiis, assumenda praesentium!</p>
                                </div>
                        </article>
                    </div>
                    <div class="col-12 col-sm-8">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-patrick.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                        <div class="ps-3">
                                            <h6 class="m-0">José Ignacio Basoco</h6>
                                            <p class="m-0">Rehabilitación y terapia ocupacional</p>
                                        </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima voluptates accusantium consectetur, necessitatibus. Officiis, assumenda praesentium!</p>
                                    <p class="p-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima voluptates accusantium consectetur, necessitatibus. Officiis, assumenda praesentium!</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-sm-8">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-jonathan.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                    <div class="ps-3">
                                        <h6 class="m-0">Jonathan Rubio García</h6>
                                        <p class="m-0">D.U.E Unidad de quemados</p>
                                    </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi mini</p>
                                    <p class="p-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima</p>
                            </div>
                        </article>
                    </div>
                                        <div class="col-12 col-sm-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="../assets/images/image-kira.jpg" alt="" class="border-4 border-secondary rounded-circle" width="100">
                                    <div class="ps-3">
                                        <h6 class="m-0">Marta Barroso Sala</h6>
                                        <p class="m-0">D.U.E Unidad de quemados</p>
                                    </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi mini</p>
                                    <p class="p-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est eius modi minima</p>
                            </div>
                        </article>
                    </div>
                    </div><!-- fin de row -->
            </div>
        </div>
    </main>
 </template>

<script>
export default { name: 'Ponentes' }
</script>

<style lang="scss" scoped>
    .titulo{
    background-color: blue;
    color: white;
    border-radius: 10px;
    padding: 10px;
}
main{
    background-image: url('../assets/images/fons-pantalla-1-TEAMS.png');
    margin-bottom: 50px;
    border-radius: 10px;
}
article{
    text-align: left;
    margin-top:15px;
    margin-bottom: 15px;
}
h1 {
    color: white;
}
img {
    height: 80px;
}

@media (min-width: 762px) {
    .alto-100 {
        height: 100vh;
    }
    flex-column{
        flex-direction: column;
    }
}
</style>
