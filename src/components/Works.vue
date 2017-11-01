<template>
  <div class="works">
    

    <div  v-for="item in works"
          class="work-box box shadow flex-center FeaturedWorkBackground"
          :style="{ background: item.background}"
          @click="item.modalShow = !item.modalShow">
          <div class="work-description"></div>
          <ShowcaseModal v-if="item.modalShow" />
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
          {
            background: "url('./src/assets/img/tk.png')",
            modalShow: false
          },
          {
            background: "url('./src/assets/img/tk2.png')",
            modalShow: false
          },
          {
            background: "url('./src/assets/img/tk3.gif')",
            modalShow: false
          },
          {
            background: "url('./src/assets/img/tk3.gif')",
            modalShow: false
          }
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
