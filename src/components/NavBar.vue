<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"><img src="../assets/images/logo-VH-Master-RGB-blue.png" width="100"/></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/" class="nav-link active" aria-current="page"><img src="../assets/icons/house-door.svg"/> - Home</router-link>
             <el-radio :label="label"></el-radio>
        </li>
        <li class="nav-item">
          <router-link to="Inscripciones" class="nav-link active"><img src="../assets/icons/mortarboard.svg"/> - Inscripciones</router-link>
        </li>
        <li class="nav-item">
          <router-link to="Horarios" class="nav-link active"><img src="../assets/icons/calendar-event.svg"/> - Horarios</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/icons/card-text.svg"/> - Programa
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/" class="dropdown-item"><li><img src="../assets/icons/house-door.svg"/> - Home</li></router-link>
            <router-link to="Presentacion" class="dropdown-item"><li><img src="../assets/icons/chat-right.svg"/> - Presentación</li></router-link>
            <router-link to="Ponencias" class="dropdown-item"><li><img src="../assets/icons/clipboard.svg"/> - Ponencias</li></router-link>
            <router-link to="Horarios" class="dropdown-item"><li><img src="../assets/icons/calendar-event.svg"/> - Horarios</li></router-link>
            <router-link to="Ponentes" class="dropdown-item"><li><img src="../assets/icons/file-earmark-person.svg"/> - Participantes</li></router-link>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><hr class="dropdown-divider"></li>
            <router-link to="Inscripciones" class="dropdown-item"><li><img src="../assets/icons/mortarboard.svg"/> - Inscripciones</li></router-link>
            <router-link to="Contacto" class="dropdown-item"><li><img src="../assets/icons/mailbox.svg"/> - Contacto</li></router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Documentación</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="Contacto" class="nav-link active" tabindex="-1" aria-disabled="true"><img src="../assets/icons/mailbox.svg"/> - Contacto</router-link>
        </li>
      </ul>
       <!-- <div class="col-12 col-sm-4"><button class="btn btn-secondary">Inicio Sesión</button></div> -->
     <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</div>
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

  router-link {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
