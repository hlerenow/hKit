fn.bindEvent = (el, type, handler) => {
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