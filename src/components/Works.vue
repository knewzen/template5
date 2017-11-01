<template>
  <div class="works">
    <div class="message_3">
      <p>
          <span class="inner">Portfolio <span class="outer">/</span> Showcase</span>
      </p>
    </div>

    <div  v-for="item in works"
          class="work-box box shadow flex-center FeaturedWorkBackground"
          :style="{ background: item.background}"
          @click="item.modalShow = !item.modalShow">
          <div class="work-description"></div>
          <ShowcaseModal v-if="item.modalShow" />
      </div>
    </div>

  </div>
</template>

<script>
  import ShowcaseModal from './ShowcaseModal.vue'
  export default {
    components: {ShowcaseModal},
    data () {
      return  {
        show: false,
        works: [
          {background: "url('./src/assets/img/tk.png')",
          modalShow: false},
        ]
      }
    },
    methods: {
      toggleModal: function () {
          this.show = !this.show
        }
    }
  }
</script>
