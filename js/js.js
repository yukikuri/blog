"use strict";

function article_ani() {
  var ar = document.querySelector('.articles');
  if (ar) {
    ar.classList.remove('ani');
  }
}

function hide_new(){
  var es = document.querySelectorAll('span.new');
  if (es&&es.length) {
    var nowS = Math.floor(Date.now()/1000), i, len, e, time;
    for (i=0,len=es.length;i<len;++i){
      e = es[i];
      time = parseInt(e.getAttribute('data-time'), 10);
      console.log('nows:'+nowS+' time:'+time+' diff:'+(nowS-time));
      if ((nowS-time) > 432000) {
      //if ((nowS-time) > (-100000)) {
        e.style.display='none';
      }
    }
  }
}

/** 
 main
*/

function stickycb(sticky, visible) {
  var elem = sticky.elem;
  elem.classList.toggle('sticky-visible');
}

AOS.init({duration: 1000});
document.addEventListener('DOMContentLoaded',function(){
  new Sticky('sticky', stickycb);
  window.setTimeout(hide_new(), 0);
  //article_ani();
  
  // scroll top
  var goTop = document.getElementById('goPageTop');
  goTop.addEventListener('click', function(e) {
    scrollTo(
      document.documentElement ? document.documentElement : document.body, 0, 400);
    e.preventDefault();
  });

});
