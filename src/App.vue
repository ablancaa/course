<template>
  <div id="app">
    <Header msg=""></Header>
    <NavBar/>
      <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import NavBar from '../src/components/NavBar.vue'
import Footer from '../src/components/Footer.vue'
export default {
  name: 'App',
  components: { Footer, Header, NavBar }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.color{
  color:chocolate;
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
