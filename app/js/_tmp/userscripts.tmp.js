"use strict";

document.addEventListener('DOMContentLoaded', function () {// Custom JS
});
var line = document.querySelector('.line');
var slides = document.querySelectorAll('.slide');
var sliderWidth = document.querySelector('.slider').offsetWidth;
var widthArray = [0];
var lineWidth = 0;
var offset = 0;
var step = 0;
var rest = 0;

for (var i = 0; i < slides.length; i++) {
  widthArray.push(slides[i].offsetWidth);
  lineWidth += slides[i].offsetWidth;
}

line.style.width = lineWidth + 'px';
console.log(widthArray);

document.onclick = function () {
  rest = lineWidth - sliderWidth - (offset + widthArray[step]);

  if (rest >= 0) {
    offset = offset + widthArray[step];
    line.style.left = -offset + 'px';
    step++;
  } else {
    line.style.left = -(lineWidth - sliderWidth) + 'px';
    offset = 0;
    step = -1;
  }

  if (step + 1 == slides.length) {
    step = 0;
    offset = 0;
  } else {
    step++;
  }
};