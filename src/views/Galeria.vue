<template>
    <div class="container">
        <h1 class="titulo">Galería</h1>
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">
                <div class="carrusel">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="../assets/carousel/foto1.png" class="d-block w-100" alt="foto1">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/carousel/foto2.png" class="d-block w-100" alt="foto2">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/carousel/foto3.png" class="d-block w-100" alt="foto3">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/carousel/foto4.png" class="d-block w-100" alt="foto4">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/carousel/foto5.png" class="d-block w-100" alt="foto5">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                </div> <!-- Fin carrusel -->
            </div> <!-- FIN col-12 col-lg-6 col-md-6 -->
        </div><!-- FIN ROW -->
    </div>
</template>

<script>
export default { name: 'Galeria' }
</script>

<style lang="scss" scoped>
.titulo{
    background-color:#3D6DA3;
    color: white;
    border-radius: 10px;
    padding: 3px;
}

.carrusel {
    height: 50%;
}

@media (min-width: 576px) {
    .carrusel, img{
        height: 30%;
    }
}
</style>
