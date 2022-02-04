<template>
  <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 col-sm-4">
          <div class="card separadorCards">
     <router-link to="/Presentacion" class="link"><img src="../assets/images/Cirugia2.jpg" class="card-img-top" alt="Presentación" title="Presentación">
   <div class="card-body">
     <h5 class="card-title"><!-- <img src="../assets/icons/chat-right.svg"/>-->Presentación</h5>
     <p class="card-text">Más información</p>
     <!-- <router-link to="/Presentacion" class="btn btn-primary">Ver +</router-link> -->
   </div></router-link>
 </div>
 </div>
        <div class="col-12 col-md-3 col-sm-4">
                    <div class="card separadorCards">
     <router-link to="/Inscripciones" class="link"><img src="../assets/images/Cirugia.jpg" class="card-img-top" alt="Inscripciones" title="Inscripciones">
   <div class="card-body">
     <h5 class="card-title"><!-- <img src="../assets/icons/mortarboard.svg"/> -->Inscripciones</h5>
     <p class="card-text">Más información</p>
     <!-- <router-link to="Inscripciones" class="btn btn-primary">Ver +</router-link> -->
   </div></router-link>
 </div>
        </div>
                <div class="col-12 col-md-3 col-sm-4">
                    <div class="card separadorCards">
    <router-link to="/Horarios" class="link"><img src="../assets/images/Nino.jpg" class="card-img-top" alt="Horarios" title="Horarios">
   <div class="card-body">
     <h5 class="card-title"><!-- <img src="../assets/icons/calendar-event.svg"/> -->Horarios</h5>
     <p class="card-text">Programa científico</p>
     <!-- <router-link to="/Horarios" class="btn btn-primary">Ver +</router-link> -->
   </div></router-link>
 </div>
        </div>
                <div class="col-12 col-md-3 col-sm-4">
                    <div class="card separadorCards">
    <router-link to="/Ponentes" class="link"><img src="../assets/images/TAC.jpg" class="card-img-top" alt="Participantes" title="Participantes">
   <div class="card-body">
     <h5 class="card-title"><!-- <img src="../assets/icons/file-earmark-person.svg"/> -->Participantes</h5>
     <p class="card-text">Más información</p>
     <!-- <router-link to="/Ponentes" class="btn btn-primary">Ver +</router-link> -->
   </div></router-link>
 </div>
        </div>
                        <!-- <div class="col-12 col-md-3"> -->
                    <!-- <div class="card separadorCards"> -->
     <!-- <img src="../assets/images/Covid.jpg" class="card-img-top" alt="..."> -->
   <!-- <div class="card-body"> -->
     <!-- <h5 class="card-title">Documentación</h5> -->
     <!-- <p class="card-text">Documentación del curso</p> -->
     <!-- <router-link to="/Ponentes" class="btn btn-primary btn_color">Ver +</router-link> -->
   <!-- </div> -->
 <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
     <!-- <div class="esponsor"></div> -->
     </div>
  </div>
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
}

.btn_color {
  color:#3D6DA3;
}

.card{
  border-color: rgba(253, 253, 255, 0.808);
}

.esponsor{
  margin-top:50px;
}

.link {
  text-decoration: none;
  color: black;
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

    .card-title{
      font-size: 19px;
    }

    .prueba{
      color:black;
    }
}
</style>
