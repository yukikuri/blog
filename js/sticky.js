"use strict";

/**
 sticky 
*/
function _getScrollTop(){
  return document.documentElement.scrollTop || document.body.scrollTop;
}

(function () {
  var Sticky = function (elemOrId, callback, timeout) {
    this.elem = typeof elemOrId == 'node' ?
      elemOrId : document.getElementById(elemOrId);
    document.addEventListener('scroll', this.scroll.bind(this));
    this.visible = false;
    this.callback = callback;
    this.timeout = timeout ? timeout : 100;
  };
  
  Sticky.prototype.visibleChange = function(visible){
    if (this.visible != visible) {
      this.visible = visible;
      this.callback(this, this.visible);
    }  
  };

  Sticky.prototype.scroll = function (ev) {
    if (this.tid){
      window.clearTimeout(this.tid);
    }

    if (this.visible) {
      var scrollTop = _getScrollTop();
      if (scrollTop <= 70){
        this.visibleChange(false);
      }
    }else {
      this.tid = window.setTimeout(this.ontimer.bind(this), this.timeout);
    }
  };
  
  Sticky.prototype.ontimer = function(ev) {
    this.tid = 0;
    var scrollTop = _getScrollTop();
    
    var visible;
    if (scrollTop > 200){
      visible = true;
    } else {
      visible = false;
    }
    
    this.visibleChange(visible);    
  };

  window.Sticky = Sticky;
})();
