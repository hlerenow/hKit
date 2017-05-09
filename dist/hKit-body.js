var hKit = function(arg) {

	if (!(this instanceof hKit)) {
		return new hKit(arg);
	}
};

var fn=hKit.prototype;
fn.bindEvent = function(el, type, handler) {
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
};