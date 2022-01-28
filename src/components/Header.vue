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
    <h1>{{ msg }}</h1>
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
  background-color: #1600dd;
  width: 100%;
}
.logotipoCabecera{
  padding-top: 20px;
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
