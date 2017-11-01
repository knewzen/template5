<template>
  <div class="works">
    <div  v-for="item in works"
          class="work-box box shadow flex-center FeaturedWorkBackground"
          :style="{ background: item.background}">
          <div class="work-description">
            <h3 class="title subtitle">
              <span class="inner1">Portfolio<br>
                <span class="outer" v-html="item.icon"></span>
                <br>{{item.workType}}</span>
            </h3>
          </div>
          <div class="modal">

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
          {
            name: 'modal 1',
            background: "url('./src/assets/img/tk.png')",
            workType: 'www',
            icon: '<i class="fa fa-code" aria-hidden="true"></i>',
            modalShow: false
          },
          {
            name: 'modal 2',
            background: "url('./src/assets/img/tk2.png')",
            workType: 'www',
            icon: '<i class="fa fa-code" aria-hidden="true"></i>',
            modalShow: false
          },
          {
            background: "url('./src/assets/img/tk3.gif')",
            workType: 'www',
            icon: '<i class="fa fa-code" aria-hidden="true"></i>',
            modalShow: false
          },
          {
            background: "url('./src/assets/img/tk3.gif')",
            workType: 'www',
            icon: '<i class="fa fa-code" aria-hidden="true"></i>',
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

<style>
.work-box:not(.no-hover):hover {
  transform: scale(1.03)
}
</style>
