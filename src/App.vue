<template>
  <div id="app">
      <div class="page-head-bg">

      </div>
      <div class="page-head flex-center">
          <div class="banner container">
          <div class="logo" >
            <img class="logo-img" src="./assets/img/logo.svg">
            <div style="width: 100%" class="wordmark"></div>
          </div>



        </div>



          <div style="position: absolute; top: 220px;">
            <div class="menu">
              <a v-for="item in menu">{{item.name}}</a>
            </div>
            <div class="works">
              <FeaturedWork/>
            </div>
          </div>

        </div>



  </div>
</template>

<script>
import Navigation from './assets/components/Navigation.vue';
import FeaturedWork from './assets/components/FeaturedWork.vue'

export default {
  name: 'app',
  components: {Navigation, FeaturedWork},
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
