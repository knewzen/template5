import Vue from 'vue'
import App from './App.vue'

import Particles from 'particles.js'
particlesJS.load('particles-js', './src/assets/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// STYLES
import './assets/Font Awesome/fontAwesome.js';
import './assets/css/main.min.css';


new Vue({
  el: '#app',
  render: h => h(App)
})
