<template>
  <div class="works">
    <div v-for="item in works" class="work-box box shadow flex-center FeaturedWorkBackground">{{msg}}</div>


    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return  {
        msg: 'Hello World',
        works: [
          {},
          {},
          {},
          {},
          {},

        ]
      }
    }
  }
</script>
