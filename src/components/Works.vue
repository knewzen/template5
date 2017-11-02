<template>
  <div class="works">
    <div  v-for="item in works"
          class="work-box box shadow flex-center FeaturedWorkBackground"
          :style="{ background: item.background}"
          >
          <div class="work-description" @click="test(item)">
            <h3 class="title subtitle">
              <span class="inner1" >Portfolio<br>
                <span class="outer" v-html="item.icon"></span>
                <br>{{item.workType}}</span>
            </h3>
          </div>

            <!-- use the modal component, pass in the prop -->
            <ShowcaseModal v-show="item.modalShow" @close="item.modalShow = false">
              <h3 slot="header">{{item.name}}</h3>
              <h3 slot="body" v-html="item.icon"></h3>
            </ShowcaseModal>
      </div>
    </div>
</template>

<script>
  import ShowcaseModal from './ShowcaseModal.vue'
  export default {
    components: {ShowcaseModal},
    data () {
      return  {
        works: [
          {
            name: 'Tumiladnie',
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
      test: function (item) {
        setTimeout(() => {
            item.modalShow = 1
        }, 400);


      }
    }
  }
</script>

<style>
.work-box:not(.noHover):hover {
  transform: scale(1.03);
}

</style>
