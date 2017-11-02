var menuButton = document.querySelector('#menuButton');
var menu = document.querySelector('.menu-container');
var menuItem = document.querySelector('.menu');
var navbar = document.querySelector('.navbar');

// setTimeout(function() {
//   navbar.style.top = '20px';
// }, 600);


// SHOW MENU
menuButton.addEventListener('click', function () {
  menu.style.opacity = '0';
  menu.style.top = '25%';
  menu.style.opacity = '1';
  menu.style.transform = 'translateY(0)';
  menu.className += ' activeMenu';
  event.stopPropagation();
  // HIDE MENU
  document.addEventListener('click', function () {
    if(menu.classList.contains('activeMenu')){
      menu.style.top = '-40vh';
      menu.style.opacity = '0';
      menu.classList.remove("activeMenu");
    }
  });
});

// toggle class
var box = document.querySelectorAll('.work-box');
document.querySelector('.modal-mask').addEventListener('click', function () {
  box.classList.remove('noHover');
});
for (i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    if (!this.classList.contains('noHover')) {
      this.className += ' noHover';
    } else {
      setTimeout(() => {
          this.classList.remove('noHover');
      }, 500);
    }
  });
};
