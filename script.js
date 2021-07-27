const switchBtn = document.querySelector(".switchBtn");
const switchWrap = document.querySelector(".switchWrap");
const body = document.querySelector("body");

switchWrap.addEventListener("click", toggleLightMode);

function toggleLightMode() {
  switchBtn.classList.toggle("lightMode");
  switchWrap.classList.toggle("lightMode");
  body.classList.toggle("lightMode");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
