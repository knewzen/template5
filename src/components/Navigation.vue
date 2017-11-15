<template>
  <div>

    <div class="navbar">
      <div id="menuButton"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></div>
    </div>



    <!-- <div class="menu-container">
      <div class="menu"><a class="effect-shine" v-for="item in menu">{{item.name}}</a></div>
    </div>  Menu End -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menu: [
          {
            name: 'Contact',
            link: ''
          },
          {
            name: 'About',
            link: ''
          }
        ]
      }
    }
  }
</script>
