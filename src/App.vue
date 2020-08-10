<template>
  <div id="app">
    <Alert/>
    <header class="header">
      <Nav /> 
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    
    <footer class="footer">
      <Footer/>
    </footer>
  </div>

</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Alert from '@/components/Alert.vue'
export default {
  name: 'App',
  components: {
    Alert,
    Nav,
    Footer
  }
}
</script>

<style lang="less" scoped>

#app {
  height: 100%;
  font-family: 'Open Sans' ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  position: fixed;
  top: 0;
  z-index: 9;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0,0,0,.16);
}
.main {
  padding-top: 70px;
  min-height: ~ 'calc(100% - 286px)';
}
.footer {
  background-color: #0A5C7B;
}
</style>
