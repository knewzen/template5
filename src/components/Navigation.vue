<template>
  <div>

    <button id="menuButton">menu</button>
    <div>
      <p class="message">Orci varius natoque penatibus <br>et magnis dis parturient montes, <br>nascetur ridiculus mus.</p>
    </div>
    <div class="menu-container">
      <div class="menu"><a class="effect-shine" v-for="item in menu">{{item.name}}</a></div>
    </div> <!-- Menu End -->
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
