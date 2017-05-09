"use strict";

var hKit = function hKit() {

	if (!(this instanceof hKit)) {
		return new hKit();
	}
};

var fn = hKit.prototype;
"use strict";

fn.bindEvent = function (el, type, handler) {
	if (el.attachEvent) {
		fn.bindEvent = function (el, type, handler) {
			el.attachEvent("on" + type, handler);
		};
	} else {
		fn.bindEvent = function (el, type, handler) {
			el.addEventListener(type, handler);
		};
	}

	undefined.bindEvent(el, type, handler);
};