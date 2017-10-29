<template>
  <div class="works">
    <div class="message_3">
      <p>
          <span class="inner">Portfolio <span class="outer">/</span> Showcase</span>
      </p>
    </div>

    <div  v-for="item in works"
          class="work-box box shadow flex-center FeaturedWorkBackground"
          :style="{ background: item.background}">
          <div class="work-description">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return  {
        works: [
          {background: "url('./src/assets/img/tk.jpg')"},
          {background: "url('./src/assets/img/tk.jpg')"},
          {background: "url('./src/assets/img/tk.jpg')"}
        ]
      }
    }
  }
</script>
