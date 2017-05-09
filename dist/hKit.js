(function() {
var hKit = function(arg) {

	if (!(this instanceof hKit)) {
		return new hKit(arg);
	}
};

var fn=hKit.prototype;
fn.bindEvent = function(el, type, handler) {
	if (el.attachEvent) {
		fn.bindEvent = function(el, type, handler) {
			el.attachEvent("on" + type, handler);
		}
	} else {
		fn.bindEvent = function(el, type, handler) {
			el.addEventListener(type, handler);
		}
	}

	this.bindEvent(el, type, handler);
};

	
	if (typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = hKit;
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function() {
			return hKit;
		});
	} else {
		this.hKit = hKit;
	}
}).call(function() {
	return this || (typeof window !== 'undefined' ? window : global);
}());