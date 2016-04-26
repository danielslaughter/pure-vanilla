var helper = {
	'addClass': function(el, c) {
		if (!helper.hasClass(el, c)) {
			el.className = helper.trim(el.className + ' ' + c);
		}
	},
	'removeClass': function(el, c) {
		el.className = helper.trim((' ' + el.className + ' ').replace(c, ''));
	},
	'toggleClass': function(el, c) {
		if (helper.hasClass(el, c)) {
			helper.removeClass(el, c);
		} else {
			helper.addClass(el, c);
		}
	},
	'hasClass': function(el, c) {
		return (' ' + el.className + ' ').indexOf(' ' + c + ' ') != -1;
	},
	'trim': function(str) {
		return (str || '').replace(/^\s+|\s+$/g, '');
	},
	'empty': function(el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	},
	'ajax': function(url, success, error) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function() {
		     if (this.readyState !== 4) {
			      return;   
			 } else if (this.status >= 200 && this.status < 400) {
		          success != undefined && success(this.responseText);
		     } else {
		          error != undefined && error();
		     }
		};
		request.send();
		request = null;
	},
	'onEvent': function(e, el, fn) {
		if (el.addEventListener) {
			el.addEventListener(e, fn, false);
		} else {
			el.attachEvent('on' + e, fn);
		}
	}
};