//Load Web App JavaScript Dependencies/Plugins

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
	  if (document.addEventListener) {
    	  document.addEventListener('DOMContentLoaded', fn);
		}
		else {
			document.attachEvent('DOMContentLoaded', fn);
		}
  }
}


require(["event-emitter"], function () {

	function setup(){

    var ee = require('event-emitter');

    var emitter = ee({}), listener;

    function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
    }

    function addClass(el, className) {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className += ' ' + className;
    }

    function removeClass(el, className) {
        if (el.classList) el.classList.remove(className);
        else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
    }



	}

	ready(setup);



});
