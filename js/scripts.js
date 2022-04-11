console.log("Hello! Welcome to my portfolio site");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && $(window).width() < 641) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
