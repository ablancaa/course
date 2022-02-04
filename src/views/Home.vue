<template>
  <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 col-sm-4">
          <div class="card separadorCards">
            <img src="../assets/images/Cirugia2.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Presentación</h5>
                <p class="card-text">Más información</p>
                <!-- <a href="#" class="btn btn-primary">Ver +</a> -->
              </div>
          </div>
        </div> <!-- fin de col-12 col-md-3 col-sm-4 -->
        <div class="col-12 col-md-3 col-sm-4">
          <div class="card separadorCards">
            <img src="../assets/images/Cirugia.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Inscripción</h5>
                <p class="card-text">Más información</p>
                <!-- <a href="#" class="btn btn-primary">Ver +</a> -->
              </div>
          </div>
        </div> <!-- fin de col-12 col-md-3 col-sm-4 -->
        <div class="col-12 col-md-3 col-sm-4">
          <div class="card separadorCards">
            <img src="../assets/images/Nino.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Horarios</h5>
                <p class="card-text">Programa científico</p>
                <!-- <a href="#" class="btn btn-primary">Ver +</a> -->
              </div>
          </div>
        </div> <!-- fin de col-12 col-md-3 col-sm-4 -->
        <div class="col-12 col-md-3 col-sm-4">
          <div class="card separadorCards">
            <router-link to="/Ponentes" class="link"><img src="../assets/images/TAC.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Participantes</h5>
                <p class="card-text">Más información</p>
                <!-- <router-link to="/Ponentes" class="btn btn-primary">Ver +</router-link> -->
              </div></router-link>
          </div>
        </div> <!-- fin de col-12 col-md-3 col-sm-4 -->
        <div class="col-12 col-md-3">
        </div>
      </div>  <!-- fin de row -->
     <div class="esponsor"></div>
  </div> <!-- fin container -->
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.separadorCards{
  margin-top: 10px;
  border-color: grey;
}

.link {
  text-decoration: none;
  color: black;
}

.card{
  border-color: grey;
}
.esponsor{
  margin-top:50px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (min-width: 576px) {
    .alto-100 {
        height: 100vh;
    }
}
</style>
