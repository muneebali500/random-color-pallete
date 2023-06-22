"use strict";

var refreshBtn = document.getElementById("refresh");
var colorContainer = document.getElementById("container");
refreshBtn.addEventListener("click", generatePalette);
function generatePalette() {
  colorContainer.innerHTML = "";
  for (var i = 0; i < 60; i++) {
    var chars = "abcdef0123456789";
    var color = "";
    for (var i_1 = 0; i_1 < 6; i_1++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      color += chars[randomNumber];
    }
    var colorEl = document.createElement("div");
    colorEl.innerHTML = '<input value="#'.concat(
      color,
      '" readonly/>\n                        <button onClick=copyColor(this)>copy</button>'
    );
    colorEl.style.backgroundColor = "#".concat(color);
    colorContainer.appendChild(colorEl);
  }
}
generatePalette();
function copyColor(btn) {
  var colorValue = btn.previousElementSibling;
  colorValue.select();
  colorValue.setSelectionRange(0, 99999);
  document.execCommand("copy");
  colorValue.style.animation = "animate .3s linear";
  // remove animation class from color value so it can be animated again when clicked a second time
  setTimeout(function () {
    colorValue.style.animation = "none";
  }, 500);
}
