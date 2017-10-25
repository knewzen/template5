<template>
  <div>
    <div class="box shadow FeaturedWork felx-center FeaturedWorkBackground">
      <div class="box FeaturedWorkImg" :style="{ background: fWork.background}"></div>
      <div class="text light" >
        <h2>Featured Work</h2>
      </div>
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
.FeaturedWork {
  width: 80vw;
  height: 40vh;
  position: relative;
  background: linear-gradient(160deg, #02CCBA 0%, #AA7ECD 100%);
}
.FeaturedWorkImg {
  width: 100%;
  height: 100%;
  background-size: cover !important;
  opacity: 0.3;
  transition: all .3s;
} .FeaturedWorkImg:hover {opacity: 0.7;}
.text {
  color: white;
  position: absolute;
  pointer-events: none;
}
</style>
