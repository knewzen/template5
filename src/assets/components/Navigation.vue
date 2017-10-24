<template>
  <div>
    <div  @click="toggleMenu = !toggleMenu; activeMenu = !activeMenu" :class="{ 'active': toggleMenu }" class="hamburger hamburger--spring">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>


    <transition name="slide-fade">
      <div v-if="activeMenu" class="notification is-primary">
        <div v-for="item in menu">{{item.link}}</div>
      </div>
    </transition>

  </div>



</template>

<script>
  import HamburgerMenu from './HamburgerMenu.vue'
  export default {
      components: {HamburgerMenu},
      data () {
        return {
          toggleMenu: false,
          activeMenu: false,
          menu: [
                      {
                        link: 'Lorem Ipsum'
                      },
                      {
                        link: 'Lorem Ipsum'
                      },
                  ]
        }
      }

  }
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
