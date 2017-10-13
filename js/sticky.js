"use strict";

/**
 sticky 
*/
(function () {
  
  function _getScrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop;
  }
  
  var Sticky = function (elemOrId, callback, timeout) {
    this.elem = typeof elemOrId == 'node' ?
      elemOrId : document.getElementById(elemOrId);
    document.addEventListener('scroll', this.scroll.bind(this));
    this.visible = false;
    this.callback = callback;
    this.ontimer = this.ontimer_.bind(this);
    this.timeout = 0;//timeout ? timeout : 100;
    
    // この値を変えると、表示する高さを変更できる
    this.topoffset = 80;
    
    // check
    this.check();
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
      this.tid = 0;
    }
    
    if (this.visible)
      this.check();
    else
      this.tid = window.setTimeout(this.ontimer, this.timeout);
  };
  
  Sticky.prototype.ontimer_ = function(ev) {
    this.tid = 0;
    this.check();
  };
  
  Sticky.prototype.check = function() {
    var scrollTop = _getScrollTop();
    console.log(scrollTop);
    
    var visible;
    if (scrollTop >= this.topoffset){
      visible = true;
    } else {
      visible = false;
    }
    
    this.visibleChange(visible);        
  };

  window.Sticky = Sticky;
})();
