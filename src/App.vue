<template>
  <div id="app">
    <Navbar :logo="logo_src" :alt="alt_name"/>
    <router-view />
    <Footer />
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src: "/img/logo.png",
        alt_name: 'Make Your Burger Logo'
      }
    }
  }
</script>
<style>
  * {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }
  h1{
    text-align: center;
    margin-top: 20px; 
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
