
	
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