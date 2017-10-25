<template>
  <div id="app">
      <div class="page-head flex-center">
          <div class="banner container">
          <div class="logo" >
            <img class="logo-img" src="./assets/img/logo.svg">
            <div style="width: 100%" class="wordmark"></div>
          </div>

          <!-- <div class="menu">
            <p v-for="item in menu">{{item.name}}</p>
          </div> -->

        </div>
        <FeaturedWork/>
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
          name: 'Lorem',
          link: ''
        },
        {
          name: 'Ipsum',
          link: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
