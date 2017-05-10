(function() {
var hKit = function(arg) {

	if (!(this instanceof hKit)) {
		return new hKit(arg);
	}
};

var fn=hKit.prototype;
fn.bindEvent = function(type, handler,el){

	
	el=this.dom||el;

	if(el&&(el.toString()=='[object HTMLDivElement]')&&!el.nodeType===1){
		throw new Error("Not get dom Element,Please check agrs");
		return ;
	}

	if (el.attachEvent) {
		this.bindEvent = function(el, type, handler) {
			el.attachEvent("on" + type, handler);
		}
	} else {
		this.bindEvent = function(el, type, handler) {
			el.addEventListener(type, handler);
		}
	}

	this.bindEvent(el, type, handler);

	return this;
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