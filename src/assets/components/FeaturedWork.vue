<template>

    <div class="box shadow FeaturedWork flex-center FeaturedWorkBackground">
      <div class="box FeaturedWorkImg" :style="{ background: fWork.background}"></div>
      <div class="text light" >
        <h2>Featured Work</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
      </div>
    </div>


</template>

<script>
  export default {
    data () {
      return {
        fWork: {background: "url('./src/assets/img/tk.jpg')"}
      }
    }
  }
</script>

<style>

</style>
