<template>
  <div>
    <Menu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
button {
    border: 0;
}
.navbar-nav {
    justify-content: center;
}
.icon-log {
    justify-content: flex-end;
}
</style>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Menu,
    Footer
  }
}
</script>
