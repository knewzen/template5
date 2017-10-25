<template>
  <div id="app">
      <div class="logo" >
        <img class="logo-img" src="./assets/img/logo.svg">
        <div style="width: 100%" class="wordmark"></div>
      </div>
      <Navigation/>
      <FeaturedWork/>



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
      logoShow: false
    }
  }
}
</script>

<style>

</style>
