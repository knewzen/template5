<template>
  <div id="app">

      <div class="page-head-bg"></div>

      <!-- LOGO -->
      <div class="page-head flex-center">
          <div class="banner container">
          <div class="logo" >
            <img class="logo-img" src="./assets/img/logo_w.svg">
            <div style="width: 100%" class="wordmark"></div>
          </div>
        </div>
      </div> <!-- LOGO END -->

        <div class="works">
          <!-- Menu -->
          <div>
            <p class="message">Orci varius natoque penatibus <br>et magnis dis parturient montes, <br>nascetur ridiculus mus.</p>
          </div>
          <div class="menu-container">


            <div class="menu"><a v-for="item in menu">{{item.name}}</a></div>
          </div> <!-- Menu End -->

          <FeaturedWork/>
        </div>
  </div>
</template>

<script>
import Navigation from './assets/components/Navigation.vue';
import FeaturedWork from './assets/components/FeaturedWork.vue'
import Portfolio from './assets/components/Portfolio.vue'

export default {
  name: 'app',
  components: {Navigation, FeaturedWork, Portfolio},
  data () {
    return {
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
