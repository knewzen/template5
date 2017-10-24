<template>
  <div id="app" class="has-text-centered">
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
