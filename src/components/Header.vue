<template>
<header>
  <div class="container">
      <div class="row">
      <div class="col-4">
      <router-link to="/"><img class="logotipoCabecera" alt="Logo" src="..\assets\images\logo-VH-Master-RGB-blanc.png" width="250"></router-link>
      </div>
      <div class="col-4"></div>
      <!-- <div class="col-4"><button class="btn btn-secondary">Inicio Sesión</button></div> -->
      </div>
      <br/>
    <h1>XVI EDICIÓN<br/><span class="color">CURSO DE QUEMADOS</span>{{ msg }}</h1>
    <br/>
    <br/>
  </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header {
  //background-color: #1600dd;
  width: 100%;
  height: 230px;
  background-image: url("../assets/images/Cabecera_Neutra.svg"), url("../assets/images/Silueta_Barcelona.png"), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: repeat, no-repeat, no-repeat;
  background-position:  right,bottom left, right;
}
.logotipoCabecera{
  padding-top: 20px;
}

.color{
  color:rgb(255, 167, 104);
}
.btn {
    margin-top: 30px;
  }

h1 {
  color: aliceblue;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
