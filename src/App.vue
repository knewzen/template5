<template>
  <div id="app">

      <div class="page-head-bg"></div>

      <div class="page-head flex-center">
          <div class="banner container">
          <div class="logo" >
            <img class="logo-img" src="./assets/img/logo.svg">
            <div style="width: 100%" class="wordmark"></div>
          </div>
        </div>



        </div>

        <div class="works">
          <div class="menu-container">
            <div class="message"><p>HI</p></div>
            <div class="menu"><a v-for="item in menu">{{item.name}}</a></div>
          </div>

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
