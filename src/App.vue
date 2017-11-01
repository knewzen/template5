<template>
  <div id="app">
      <!-- HERO BACKGROUND -->
      <div id="particles-js" class="page-head-bg"></div>
      <div class="page-head flex-center"></div>

        <!-- LOGO -->
        <div class="logo" >
          <img class="logo-img" :src="logo">
          <div style="width: 100%" class="wordmark"></div>
        </div>
       <!-- LOGO END -->
        <div class="portfolio">
          <Navigation/>
          <WelcomeMessage/>

          <div class="title">
            <p><span class="inner">Portfolio <span class="outer">/</span> Showcase</span></p>
          </div>

          <Works/>
        </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import WelcomeMessage from './components/WelcomeMessage.vue'
import Works from './components/Works.vue'


export default {
  name: 'app',
  components: {Navigation, WelcomeMessage, Works, Works},
  data () {
    return {
      logo: './src/assets/img/logo_w.svg',
      msg: 'Lorem',
      logoShow: false
    }
  }
}
</script>

<style>

</style>
