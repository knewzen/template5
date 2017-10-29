<template>
  <div id="app">

      <div class="page-head-bg"></div>
      <div class="page-head flex-center">

      <!-- LOGO -->
          <div class="banner container">
          <div class="logo" >
            <img class="logo-img" :src="logo">
            <div style="width: 100%" class="wordmark"></div>
          </div>
        </div>
      </div> <!-- LOGO END -->

        <div class="portfolio">
          <!-- Menu -->
          <div>
            <p class="message">Orci varius natoque penatibus <br>et magnis dis parturient montes, <br>nascetur ridiculus mus.</p>
          </div>
          <div class="menu-container">
            <div class="menu"><a v-for="item in menu">{{item.name}}</a></div>
          </div> <!-- Menu End -->

          <FeaturedWork/>
          <Works/>
        </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import FeaturedWork from './components/FeaturedWork.vue'
import Works from './components/Works.vue'


export default {
  name: 'app',
  components: {Navigation, FeaturedWork, Works, Works},
  data () {
    return {
      logo: './src/assets/img/logo_w.svg',
      msg: 'Lorem',
      logoShow: false,
      menu: [
        {
          name: 'Contact',
          link: ''
        },
        {
          name: 'About',
          link: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
