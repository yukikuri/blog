"use strict";
/** 
 main
*/

function stickycb(sticky, visible) {
  var elem = sticky.elem;
  elem.classList.toggle('sticky-visible');
}

document.addEventListener('DOMContentLoaded',function(){
  new Sticky('sticky', stickycb);
});
