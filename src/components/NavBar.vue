<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/images/logo-VH-Master-RGB-blue.png" width="100"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
             <el-radio :label="label"></el-radio>
        </li>
        <li class="nav-item">
          <router-link to="Horarios" class="nav-link">Horarios</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programa
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/" class="dropdown-item"><li>Home</li></router-link>
            <router-link to="Presentacion" class="dropdown-item"><li>Presentación</li></router-link>
            <router-link to="Ponencias" class="dropdown-item"><li>Ponencias</li></router-link>
            <router-link to="Horarios" class="dropdown-item"><li>Horarios</li></router-link>
            <router-link to="Ponentes" class="dropdown-item"><li>Ponentes</li></router-link>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Talleres</a></li>
            <li><a class="dropdown-item" href="#">Documentación</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
        </li>
      </ul>
       <div class="col-12 col-sm-4"><button class="btn btn-secondary">Inicio Sesión</button></div>
     <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>

router-link {
    text-decoration: none;
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
</style>
