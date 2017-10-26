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

  opacity: 0.1;
  transition: all .9s;
} .FeaturedWorkImg:hover {opacity: 0.3;}
.text {
  color: white;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  pointer-events: none;
  padding-top: 20px;
  padding-bottom: 20px;
}
.text h2 {margin: 0;}
.text h4 {margin-bottom: 0; width: 90%}
@media only screen and (max-width: 768px) {
  .text h4 {display: none;}
}
</style>
