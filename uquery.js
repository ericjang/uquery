var uQuery = (function(){
	// SELECTORS
	
	var $ = function(obj) {

		// if is element, 

		// or instance of selector

		return document.querySelectorAll(selectorString);
	};
	// private methods go here





	$.getJSON = function(url, fn) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				// success!
				var data = JSON.parse(request.responseText);
			} else {
				// there was an error
			}
		}
		request.send()
	};

	// GET or POST requests
	$.ajax = function(options) {
		var request = new XMLHttpRequest();
		request.open(options.type, options.url, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				// Success!
				options.success(request.responseText);
			} else {
				// target server reached, returned error
			}
		};
		request.onerror = function() {
			// connection error of some sort
		}
		request.send();
	};

	//request.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');

	$.each = function(array, fn) {
		array.forEach(fn);
	}

	// BIND
	$.proxy = function(fn, context) {
		fn.bind(context);
	};	

	// DEEP extend
	// USAGE: $.extend(true, {}, objA, objB);
	$.deepExtend = function(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
		var obj = arguments[i];

		if (!obj)
		  continue;

		for (var key in obj) {
		  if (obj.hasOwnProperty(key)) {
		    if (typeof obj[key] === 'object')
		      deepExtend(out[key], obj[key]);
		    else
		      out[key] = obj[key];
		  }
		}
		}

		return out;
	};


	//USAGE = $.extend({}, objA, objB);
	$.extend = function(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
		if (!arguments[i])
		  continue;

		for (var key in arguments[i]) {
		  if (arguments[i].hasOwnProperty(key))
		    out[key] = arguments[i][key];
		}
		}

		return out;
	};


	$.inArray = function(item, array) {
		return array.indexOf(item);
	};

	$.isArray = function(arr) {
		return Array.isArray(arr);
	}

	// usage: $.map(array, function(value,index){})
	$.map = function(array, cb) {
		array.map(cb);
	};

	$.now = function() {
		return Date.now();
	}

	$.parseHTML = function(str) {
		var tmp = document.implementation.createHTMLDocument();
		tmp.body.innerHTML = str;
		return tmp.body.children;
	}

	$.parseJSON = function(string) {
		JSON.parse(string)
	};

	$.trim = function(string) {
		return string.trim();
	}

	$.type = function(obj) {
		return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
	};








	return $;
}());

