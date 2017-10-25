<template>
  <div>
    <div class="box shadow FeaturedWork flex-center FeaturedWorkBackground">
      <div class="box FeaturedWorkImg" :style="{ background: fWork.background}"></div>
      <div class="text light" >
        <h2>Featured Work</h2>
        <h4>Featured Work WorkFeatured Work WorkFeatured Work WorkFeatured Work WorkFeatured Work WorkFeatured Work Work</h4>
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
  background-position: center !important;

  opacity: 0.3;
  transition: all .5s;
} .FeaturedWorkImg:hover {opacity: 0.5;}
.text {
  color: white;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  pointer-events: none;
}
.text h2 {border-bottom: 3px solid white; margin: 0;}
</style>
