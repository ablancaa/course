<template>
    <main class="container">
        <h1 class="titulo">Horarios</h1>
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <img src="../assets/images/Nino.jpg" alt="" class="border-4 border-secondary">
                                        <div class="ps-3">
                                            <h6 class="m-0 p-3">Día 1</h6>
                                            <p class="m-0">15 Septiembre 2022</p>
                                            <p class="m-0 p-3"><img src="../assets/images/logo-VH-Master-RGB-blue.png" width="100"/></p>
                                        </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem est</p>
                                    <p class="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            </div>
                            <img src="../assets/images/Salut-Campus-tots-RGB.png"/>
                        </article>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <img src="../assets/images/TAC.jpg" alt="" class="border-4 border-secondary"/>
                                        <div class="ps-3">
                                                <h6 class="m-0 p-3">Día 2</h6>
                                                <p class="m-0">16 Septiembre 2022</p>
                                                <p class="m-0 p-3"><img src="../assets/images/logo-VH-Master-RGB-blue.png" width="100"/></p></div>
                                        </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem </p>
                                    <p class="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            </div>
                            <img src="../assets/images/Salut-Campus-tots-RGB.png"/>
                        </article>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                        <article class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <img src="../assets/images/Cirugia.jpg" alt="" class=" border-4 border-secondary">
                                        <div class="ps-3">
                                            <h6 class="m-0 p-3">Día 3</h6>
                                            <p class="m-0">17 Septiembre 2022</p>
                                            <p class="m-0 p-3"><img src="../assets/images/logo-VH-Master-RGB-blue.png" width="100"/></p>
                                        </div>
                                </div>
                                    <p class="h6 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur neque tenetur deserunt et velit nulla dolores veritatis exercitationem </p>
                                    <p class="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                                    <p class="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quisquam eligendi recusandae
                                        laudantium. Esse fuga exercitationem adipisci,
                                        reiciendis, eos at quia mollitia veniam cumque earum eius distinctio.
                                        Libero, perspiciatis aut?</p>
                                    <p class="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quisquam eligendi recusandae
                                        laudantium. Esse fuga exercitationem adipisci,
                                        reiciendis, eos at quia mollitia veniam cumque earum eius distinctio.
                                        Libero, perspiciatis aut?</p>
                            </div>
                            <div class="imgPequena">
                                <img src="../assets/images/Salut-Campus-tots-RGB.png"/>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
    </main>
</template>

<script>
export default { name: 'Horarios' }
</script>

<style lang="scss" scoped>

@media (min-width: 576px) and (max-width: 767.98px) {
    .imgPequena,img {
        height: 20%;
    }
}

.titulo{
    background-color: blue;
    color: white;
    border-radius: 10px;
    padding: 10px;
}
 .imgPequena > img {
     width: 100%;
 }
</style>
