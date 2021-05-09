var items = document.querySelectorAll('.anim');
var logo = document.querySelector('.logo');
logo.addEventListener('click', anim);

function anim() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('run')) {
      items[i].classList.remove('run');
    } else {
      items[i].classList.add('run');
    }
  }
}