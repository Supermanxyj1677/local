! function(e) {
	function t(r) {
		if(n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	var n = {};
	t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}([function(e, t, n) {
	e.exports = n(1)
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function o(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function a(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function s(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function u(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function c(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function p(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function f(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function d(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function h(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function y(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function m(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function _(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function v(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function b(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function g(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function w(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function E(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function O(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function S(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function k(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function P(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function j(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function A(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function C(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function T(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function R(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function I(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function q(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function M(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function N(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function x(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function L(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function F(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function B(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function D(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function U(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function z(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function H(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function W(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function K(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function Y(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function V(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function J(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function $(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function G(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function Q(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function Z(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function X(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function ee(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function te(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function ne(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function re(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function oe(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function ie(e) {
		if(Array.isArray(e)) {
			for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}

	function ae(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function se(e, t) {
		var n = {};
		for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
		return n
	}

	function ue(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function ce(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var le, pe, fe, de, he, ye, me = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e), n.name = "IntegrationError", Object.defineProperty(n, "message", {
					value: n.message,
					enumerable: !0
				}), n
			}
			return i(t, e), t
		}(Error),
		_e = me,
		ve = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "absurd";
			throw new Error(t)
		},
		be = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		we = function(e, t) {
			for(var n = 0; n < e.length; n++)
				if(t(e[n])) return e[n]
		},
		Ee = function(e, t) {
			for(var n = 0; n < e.length; n++)
				if(t(e[n])) return n;
			return -1
		},
		Oe = function(e) {
			return e && "object" === (void 0 === e ? "undefined" : ge(e)) && (e.constructor === Array || e.constructor === Object)
		},
		Se = function(e) {
			return Oe(e) ? Array.isArray(e) ? e.slice(0, e.length) : be({}, e) : e
		},
		ke = function e(t) {
			return function() {
				for(var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
				if(Array.isArray(r[0]) && t) return Se(r[0]);
				var i = Array.isArray(r[0]) ? [] : {};
				return r.forEach(function(n) {
					n && Object.keys(n).forEach(function(r) {
						var o = i[r],
							a = n[r],
							s = Oe(o) && !(t && Array.isArray(o));
						"object" === (void 0 === a ? "undefined" : ge(a)) && s ? i[r] = e(t)(o, Se(a)) : void 0 !== a ? i[r] = Oe(a) ? e(t)(a) : Se(a) : void 0 !== o && (i[r] = o)
					})
				}), i
			}
		},
		Pe = (ke(!1), ke(!0)),
		je = function(e, t) {
			for(var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
			for(var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
			return o
		},
		Ae = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"],
		Ce = Ae,
		Te = ["AT", "AU", "BE", "BR", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "HK", "IE", "IN", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NZ", "NO", "PH", "PL", "PT", "RO", "SE", "SG", "SK", "US"],
		Re = Te,
		Ie = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		Me = function(e, t, n) {
			return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "."
		},
		Ne = function(e) {
			return {
				type: "valid",
				value: e,
				warnings: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
			}
		},
		xe = function(e) {
			return {
				error: e,
				errorType: "full",
				type: "error"
			}
		},
		Le = function(e, t, n) {
			var r = new _e(Me(e, t, n));
			return xe(r)
		},
		Fe = function(e, t, n) {
			return {
				expected: e,
				actual: String(t),
				options: n,
				errorType: "mismatch",
				type: "error"
			}
		},
		Be = function(e) {
			return function(t, n) {
				return void 0 === t ? Ne(t) : e(t, n)
			}
		},
		De = function(e, t) {
			return function(n, r) {
				var o = e(n, r),
					i = t(n, r);
				if("error" === o.type && "error" === i.type) {
					if("mismatch" === o.errorType) {
						if("mismatch" === i.errorType) {
							var a = (o.options.path.join(".") || "value") + " should be " + o.expected,
								s = (i.options.path.join(".") || "value") + " should be " + i.expected,
								u = (o.options.path.join(".") || "value") + " as " + o.actual,
								c = (i.options.path.join(".") || "value") + " as " + i.actual;
							return xe(new _e("Invalid value for " + r.label + ": " + (a === s ? a : a + " or " + s) + ". You specified " + (u === c ? u : u + " and " + c) + "."))
						}
						return xe(i.error)
					}
					return xe(o.error)
				}
				return "valid" === o.type ? o : i
			}
		},
		Ue = function(e, t) {
			return function(n, r) {
				return n instanceof e ? Ne(n) : Fe("a " + t + " instance", n, r)
			}
		},
		ze = function(e, t) {
			return function(n, r) {
				var o = we(e, function(e) {
					return e === n
				});
				if(void 0 === o) {
					var i = t ? "a recognized string." : "one of the following strings: " + e.join(", ");
					return Fe(i, n, r)
				}
				return Ne(o)
			}
		},
		He = function(e) {
			return function(t, n) {
				return "string" == typeof t && 0 === t.indexOf(e) ? Ne(t) : Fe("a string starting with " + e, t, n)
			}
		},
		We = function() {
			for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return ze(t, !1)
		},
		Ke = function() {
			for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return ze(t, !0)
		},
		Ye = We.apply(void 0, s(Re)),
		Ve = We.apply(void 0, s(Ce)),
		Je = function(e, t) {
			return "string" == typeof e ? Ne(e) : Fe("a string", e, t)
		},
		$e = function(e, t) {
			return function(n, r) {
				return void 0 === n ? Ne(t()) : e(n, r)
			}
		},
		Ge = function(e, t) {
			return "boolean" == typeof e ? Ne(e) : Fe("a boolean", e, t)
		},
		Qe = function(e, t) {
			return "number" == typeof e && e === parseInt(e, 10) ? Ne(e) : Fe("an amount in the currency's subunit", e, t)
		},
		Ze = function(e, t) {
			return e && "object" === (void 0 === e ? "undefined" : qe(e)) ? Ne(e) : Fe("an object", e, t)
		},
		Xe = function(e) {
			return function(t, n) {
				if(Array.isArray(t)) {
					return t.map(function(t, r) {
						return e(t, Ie({}, n, {
							path: [].concat(s(n.path), [String(r)])
						}))
					}).reduce(function(e, t) {
						return "error" === e.type ? e : "error" === t.type ? t : Ne([].concat(s(e.value), [t.value]), [].concat(s(e.warnings), s(t.warnings)))
					}, Ne([]))
				}
				return Fe("array", t, n)
			}
		},
		et = function(e) {
			return function(t) {
				return function(n, r) {
					if(Array.isArray(n)) {
						var o = t(n, r);
						if("valid" === o.type)
							for(var i = {}, a = 0; a < o.value.length; a += 1) {
								var s = o.value[a];
								if("object" === (void 0 === s ? "undefined" : qe(s)) && s && "string" == typeof s[e]) {
									var u = s[e];
									if(i[u]) return xe(new _e("Duplicate value for " + e + ": " + u + ". The property '" + e + "' of '" + r.path.join(".") + "' has to be unique."));
									i[u] = !0
								}
							}
						return o
					}
					return Fe("array", n, r)
				}
			}
		},
		tt = function(e) {
			return function(t, n) {
				return void 0 === t ? Ne(void 0) : Fe("used in " + e + " instead", t, n)
			}
		},
		nt = function(e) {
			return function(t) {
				return function(n, r) {
					if(n && "object" === (void 0 === n ? "undefined" : qe(n)) && !Array.isArray(n)) {
						var o = n,
							i = we(Object.keys(o), function(e) {
								return !t[e]
							});
						if(i && e) return xe(new _e("Invalid " + r.label + " parameter: " + [].concat(s(r.path), [i]).join(".") + " is not an accepted parameter."));
						var u = Ne({});
						return i && (u = Object.keys(o).reduce(function(e, n) {
							return t[n] ? e : Ne(e.value, [].concat(s(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(s(r.path), [n]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."]))
						}, u)), Object.keys(t).reduce(function(e, n) {
							if("error" === e.type) return e;
							var i = t[n],
								u = i(o[n], Ie({}, r, {
									path: [].concat(s(r.path), [n])
								}));
							return "valid" === u.type && void 0 !== u.value ? Ne(Ie({}, e.value, a({}, n, u.value)), [].concat(s(e.warnings), s(u.warnings))) : "valid" === u.type ? Ne(e.value, [].concat(s(e.warnings), s(u.warnings))) : u
						}, u)
					}
					return Fe("an object", n, r)
				}
			}
		},
		rt = nt(!0),
		ot = nt(!1),
		it = function(e, t, n, r) {
			var o = r || {},
				i = e(t, {
					origin: o.origin || "",
					element: o.element || "",
					label: n,
					path: []
				});
			return "valid" === i.type ? i : "full" === i.errorType ? i : {
				type: "error",
				errorType: "full",
				error: new _e(Me(i.expected, i.actual, i.options))
			}
		},
		at = function(e, t, n, r) {
			var o = it(e, t, n, r);
			switch(o.type) {
				case "valid":
					return {
						value: o.value,
						warnings: o.warnings
					};
				case "error":
					throw o.error;
				default:
					return ve(o)
			}
		},
		st = function(e) {
			return /^http(s)?:\/\//.test(e)
		},
		ut = function(e) {
			if(!st(e)) return null;
			var t = document.createElement("a");
			t.href = e;
			var n = t.protocol,
				r = t.host,
				o = /:80$/,
				i = /:443$/;
			return "http:" === n && o.test(r) ? r = r.replace(o, "") : "https:" === n && i.test(r) && (r = r.replace(i, "")), {
				host: r,
				protocol: n,
				origin: n + "//" + r
			}
		},
		ct = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
				n = ut(e);
			return !!n && n.host !== (t || window.location.host)
		},
		lt = function(e, t) {
			if("/" === t[0]) {
				var n = ut(e);
				return n ? "" + n.origin + t : t
			}
			return "" + e.replace(/\/[^\/]*$/, "/") + t
		},
		pt = {
			CARD_ELEMENT: "CARD_ELEMENT",
			CONTROLLER: "CONTROLLER",
			METRICS_CONTROLLER: "METRICS_CONTROLLER",
			PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
			PAYMENT_REQUEST: "PAYMENT_REQUEST",
			IBAN_ELEMENT: "IBAN_ELEMENT",
			IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
			AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL"
		},
		ft = pt,
		dt = function(e) {
			return "https://js.stripe.com/v3/" + (e || "")
		},
		ht = function(e) {
			switch(e) {
				case "CARD_ELEMENT":
					return dt("elements-inner-card-3e83b64fd0e6f6e0a268e558ad66e17a.html");
				case "CONTROLLER":
					return dt("controller-dfde4a870330f414f4bffd17f5e41710.html");
				case "METRICS_CONTROLLER":
					return "https://js.stripe.com/v2/m/outer.html";
				case "PAYMENT_REQUEST_ELEMENT":
					return dt("elements-inner-payment-request-80d03f6a34923ed69b960687738e9934.html");
				case "PAYMENT_REQUEST":
					return dt("payment-request-inner-aa0a39f7595a8289c4a941437e063669.html");
				case "IBAN_ELEMENT":
					return dt("elements-inner-iban-66c659a45ce89972bede5da984b5f4a1.html");
				case "IDEAL_BANK_ELEMENT":
					return dt("elements-inner-ideal-bank-47a226c6b09db5d7f196023622824577.html");
				case "AUTHORIZE_WITH_URL":
					return dt("authorize-with-url-inner-3501fcef21ca4fd04813075b264bd4df.html");
				default:
					return ve(e)
			}
		},
		yt = ht,
		mt = {
			card: "card",
			cardNumber: "cardNumber",
			cardExpiry: "cardExpiry",
			cardCvc: "cardCvc",
			postalCode: "postalCode",
			iban: "iban",
			idealBank: "idealBank",
			idealBankSecondary: "idealBankSecondary",
			paymentRequestButton: "paymentRequestButton"
		},
		_t = mt,
		vt = [_t.card, _t.cardNumber, _t.cardExpiry, _t.cardCvc, _t.postalCode],
		bt = vt,
		gt = ut("https://js.stripe.com/v3/"),
		wt = gt ? gt.origin : "",
		Et = {
			family: "font-family",
			src: "src",
			unicodeRange: "unicode-range",
			style: "font-style",
			variant: "font-variant",
			stretch: "font-stretch",
			weight: "font-weight",
			display: "font-display"
		},
		Ot = Object.keys(Et).reduce(function(e, t) {
			return e[Et[t]] = t, e
		}, {}),
		St = [_t.idealBank, _t.idealBankSecondary],
		kt = 0,
		Pt = function(e) {
			return "" + e + kt++
		},
		jt = function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e)
		},
		At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		Ct = function e(t, n) {
			var r = [];
			return Object.keys(t).forEach(function(o) {
				var i = t[o],
					a = n ? n + "[" + o + "]" : o;
				if(i && "object" === (void 0 === i ? "undefined" : At(i))) {
					var s = e(i, a);
					"" !== s && (r = [].concat(u(r), [s]))
				} else void 0 !== i && null !== i && (r = [].concat(u(r), [a + "=" + encodeURIComponent(String(i))]))
			}), r.join("&").replace(/%20/g, "+")
		},
		Tt = Ct,
		Rt = n(2),
		It = n.n(Rt),
		qt = window.Promise ? Promise : It.a,
		Mt = qt,
		Nt = n(6),
		xt = n.n(Nt),
		Lt = function() {
			function e(e, t) {
				var n = [],
					r = !0,
					o = !1,
					i = void 0;
				try {
					for(var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
				} catch(e) {
					o = !0, i = e
				} finally {
					try {
						!r && s.return && s.return()
					} finally {
						if(o) throw i
					}
				}
				return n
			}
			return function(t, n) {
				if(Array.isArray(t)) return t;
				if(Symbol.iterator in Object(t)) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		Ft = function(e, t) {
			var n = {};
			t.forEach(function(e) {
				var t = Lt(e, 2),
					r = t[0],
					o = t[1];
				r.split(/\s+/).forEach(function(e) {
					e && (n[e] = n[e] || o)
				})
			}), e.className = xt()(e.className, n)
		},
		Bt = function(e, t) {
			e.style.cssText = Object.keys(t).map(function(e) {
				return e + ": " + t[e] + " !important;"
			}).join(" ")
		},
		Dt = function(e) {
			try {
				return window.parent.frames[e]
			} catch(e) {
				return null
			}
		},
		Ut = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		zt = function(e) {
			var t = e.frameId,
				n = e.controllerId,
				r = e.type,
				o = wt,
				i = void 0;
			"controller" === r ? i = Dt(t) : "group" === r ? i = Dt(n) : "outer" === r ? i = window.frames[t] : "inner" === r && (o = "*", i = window.parent), i && i.postMessage(JSON.stringify(Ut({}, e, {
				__stripeJsV3: !0
			})), o)
		},
		Ht = function(e) {
			try {
				var t = "string" == typeof e ? JSON.parse(e) : e;
				return t.__stripeJsV3 ? t : null
			} catch(e) {
				return null
			}
		},
		Wt = (n(7), function(e, t) {
			var n = e._isUserError || "IntegrationError" === e.name;
			throw t && !n && t.report("fatal.uncaught_error", {
				iframe: !1,
				name: e.name,
				element: "outer",
				message: e.message || e.description,
				fileName: e.fileName,
				lineNumber: e.lineNumber,
				columnNumber: e.columnNumber,
				stack: e.stack && e.stack.substring(0, 1e3)
			}), e
		}),
		Kt = function(e, t) {
			return function(n) {
				try {
					return e.call(this, n)
				} catch(e) {
					return Wt(e, t || this && this._controller)
				}
			}
		},
		Yt = function(e, t) {
			return function(n, r) {
				try {
					return e.call(this, n, r)
				} catch(e) {
					return Wt(e, t || this && this._controller)
				}
			}
		},
		Vt = function(e, t) {
			return function(n, r, o) {
				try {
					return e.call(this, n, r, o)
				} catch(e) {
					return Wt(e, t || this && this._controller)
				}
			}
		},
		Jt = function(e, t) {
			return function() {
				try {
					for(var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return e.call.apply(e, [this].concat(r))
				} catch(e) {
					return Wt(e, t || this && this._controller)
				}
			}
		},
		$t = function e() {
			var t = this;
			c(this, e), this._emit = function(e) {
				for(var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
				return(t._callbacks[e] || []).forEach(function(e) {
					var t = e.fn;
					if(t._isUserCallback) try {
						t.apply(void 0, r)
					} catch(e) {
						throw e._isUserError = !0, e
					} else t.apply(void 0, r)
				}), t
			}, this._once = function(e, n) {
				var r = function r() {
					t._off(e, r), n.apply(void 0, arguments)
				};
				return t._on(e, r, n)
			}, this._removeAllListeners = function() {
				return t._callbacks = {}, t
			}, this._on = function(e, n, r) {
				return t._callbacks[e] = t._callbacks[e] || [], t._callbacks[e].push({
					original: r,
					fn: n
				}), t
			}, this._userOn = function(e, n) {
				if("string" != typeof e) throw new _e("When adding an event listener, the first argument should be a string event name.");
				if("function" != typeof n) throw new _e("When adding an event listener, the second argument should be a function callback.");
				return n._isUserCallback = !0, t._on(e, n)
			}, this._hasRegisteredListener = function(e) {
				return t._callbacks[e] && t._callbacks[e].length > 0
			}, this._off = function(e, n) {
				if(n) {
					for(var r = t._callbacks[e], o = void 0, i = 0; i < r.length; i++)
						if(o = r[i], o.fn === n || o.original === n) {
							r.splice(i, 1);
							break
						}
				} else delete t._callbacks[e];
				return t
			}, this._callbacks = {};
			var n = Yt(this._userOn),
				r = Yt(this._off),
				o = Yt(this._once),
				i = Kt(this._hasRegisteredListener),
				a = Kt(this._removeAllListeners),
				s = Jt(this._emit);
			this.on = this.addListener = this.addEventListener = n, this.off = this.removeListener = this.removeEventListener = r, this.once = o, this.hasRegisteredListener = i, this.removeAllListeners = a, this.emit = s
		},
		Gt = $t,
		Qt = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Zt = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		Xt = function(e) {
			function t(e, n, r) {
				p(this, t);
				var o = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return o.type = e, o.loaded = !1, o._controllerId = n, o._persistentMessages = [], o._queuedMessages = [], o._requests = {}, o.id = o._generateId(), o._iframe = o._createIFrame(r), o._on("load", function() {
					o.loaded = !0, o._ensureMounted(), o.loaded && (o._persistentMessages.forEach(function(e) {
						return o._send(e)
					}), o._queuedMessages.forEach(function(e) {
						return o._send(e)
					}), o._queuedMessages = [])
				}), o
			}
			return d(t, e), Zt(t, [{
				key: "_generateId",
				value: function() {
					return Pt("__privateStripeFrame")
				}
			}, {
				key: "send",
				value: function(e) {
					this._send({
						message: e,
						type: "outer",
						frameId: this.id,
						controllerId: this._controllerId
					})
				}
			}, {
				key: "sendPersistent",
				value: function(e) {
					this._ensureMounted();
					var t = {
						message: e,
						type: "outer",
						frameId: this.id,
						controllerId: this._controllerId
					};
					this._persistentMessages = [].concat(l(this._persistentMessages), [t]), this.loaded && zt(t)
				}
			}, {
				key: "action",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = Pt(e),
						o = new Mt(function(o, i) {
							t._requests[r] = Qt({}, t._requests[r], {
								resolve: o,
								reject: i
							}), t._send({
								message: {
									action: "stripe-frame-action",
									payload: {
										type: e,
										nonce: r,
										options: n
									}
								},
								type: "outer",
								frameId: t.id,
								controllerId: t._controllerId
							})
						});
					return this._requests[r] = Qt({}, this._requests[r], {
						promise: o
					}), o
				}
			}, {
				key: "resolve",
				value: function(e, t) {
					this._requests[e] && this._requests[e].resolve(t)
				}
			}, {
				key: "_send",
				value: function(e) {
					this._ensureMounted(), this.loaded ? zt(e) : this._queuedMessages = [].concat(l(this._queuedMessages), [e])
				}
			}, {
				key: "appendTo",
				value: function(e) {
					e.appendChild(this._iframe)
				}
			}, {
				key: "unmount",
				value: function() {
					this.loaded = !1, this._emit("unload")
				}
			}, {
				key: "destroy",
				value: function() {
					this.unmount();
					var e = this._iframe.parentElement;
					e && e.removeChild(this._iframe), this._emit("destroy")
				}
			}, {
				key: "_ensureMounted",
				value: function() {
					this._isMounted() || this.unmount()
				}
			}, {
				key: "_isMounted",
				value: function() {
					return !!document.body && document.body.contains(this._iframe)
				}
			}, {
				key: "_createIFrame",
				value: function(e) {
					var t = window.location.href.toString(),
						n = ut(t),
						r = n ? n.origin : "",
						o = e.queryString && "string" == typeof e.queryString ? e.queryString : Tt(Qt({}, e, {
							origin: r,
							referrer: t,
							controllerId: this._controllerId
						})),
						i = document.createElement("iframe");
					return i.setAttribute("frameborder", "0"), i.setAttribute("allowTransparency", "true"), i.setAttribute("scrolling", "no"), i.setAttribute("name", this.id), i.setAttribute("allowpaymentrequest", "true"), i.src = yt(this.type) + "#" + o, i
				}
			}]), t
		}(Gt),
		en = Xt,
		tn = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		nn = function e(t, n, r) {
			null === t && (t = Function.prototype);
			var o = Object.getOwnPropertyDescriptor(t, n);
			if(void 0 === o) {
				var i = Object.getPrototypeOf(t);
				return null === i ? void 0 : e(i, n, r)
			}
			if("value" in o) return o.value;
			var a = o.get;
			if(void 0 !== a) return a.call(r)
		},
		rn = {
			border: "none",
			margin: "0",
			padding: "0",
			width: "1px",
			"min-width": "100%",
			overflow: "hidden",
			display: "block",
			visibility: "hidden",
			position: "fixed",
			height: "1px",
			"pointer-events": "none"
		},
		on = function(e) {
			function t(e, n, r) {
				h(this, t);
				var o = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
				if(o.autoload = r.autoload || !1, "complete" === document.readyState) o._ensureMounted();
				else {
					var i = o._ensureMounted.bind(o);
					document.addEventListener("DOMContentLoaded", i), window.addEventListener("load", i), setTimeout(i, 5e3)
				}
				return o
			}
			return m(t, e), tn(t, [{
				key: "_ensureMounted",
				value: function() {
					nn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_ensureMounted", this).call(this), this._isMounted() || this._autoMount()
				}
			}, {
				key: "_autoMount",
				value: function() {
					if(document.body) this.appendTo(document.body);
					else if("complete" === document.readyState || "interactive" === document.readyState) throw new _e("Stripe.js requires that your page has a <body> element.");
					this.autoload && (this.loaded = !0)
				}
			}, {
				key: "_createIFrame",
				value: function(e) {
					var n = nn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
					return n.setAttribute("aria-hidden", "true"), n.setAttribute("allowpaymentrequest", "true"), n.setAttribute("tabIndex", "-1"), Bt(n, rn), n
				}
			}]), t
		}(en),
		an = on,
		sn = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		un = function(e) {
			function t() {
				return _(this, t), v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return b(t, e), sn(t, [{
				key: "_generateId",
				value: function() {
					return this._controllerId
				}
			}]), t
		}(an),
		cn = un,
		ln = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		pn = function e(t, n, r) {
			null === t && (t = Function.prototype);
			var o = Object.getOwnPropertyDescriptor(t, n);
			if(void 0 === o) {
				var i = Object.getPrototypeOf(t);
				return null === i ? void 0 : e(i, n, r)
			}
			if("value" in o) return o.value;
			var a = o.get;
			if(void 0 !== a) return a.call(r)
		},
		fn = {
			border: "none",
			margin: "0",
			padding: "0",
			width: "1px",
			"min-width": "100%",
			overflow: "hidden",
			display: "block"
		},
		dn = function(e) {
			function t() {
				return g(this, t), w(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return E(t, e), ln(t, [{
				key: "update",
				value: function(e) {
					this.send({
						action: "stripe-user-update",
						payload: e
					})
				}
			}, {
				key: "updateStyle",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						t._iframe.style[n] = e[n]
					})
				}
			}, {
				key: "focus",
				value: function() {
					this.loaded && this.send({
						action: "stripe-user-focus",
						payload: {}
					})
				}
			}, {
				key: "blur",
				value: function() {
					this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur())
				}
			}, {
				key: "clear",
				value: function() {
					this.send({
						action: "stripe-user-clear",
						payload: {}
					})
				}
			}, {
				key: "_createIFrame",
				value: function(e) {
					var n = pn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
					return n.setAttribute("title", "Secure payment input frame"), Bt(n, fn), n
				}
			}]), t
		}(en),
		hn = dn,
		yn = function(e) {
			e.preventDefault()
		},
		mn = [32, 33, 34, 35, 36, 37, 38, 39, 40],
		_n = function(e) {
			mn.indexOf(e.keyCode) >= 0 && yn(e)
		},
		vn = {
			capture: !0,
			passive: !1
		},
		bn = function() {
			return window.addEventListener("wheel", yn, vn), window.addEventListener("touchmove", yn, vn), window.addEventListener("keydown", _n),
				function() {
					window.removeEventListener("wheel", yn, vn), window.removeEventListener("touchmove", yn, vn), window.removeEventListener("keydown", _n)
				}
		},
		gn = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		wn = function e(t, n, r) {
			null === t && (t = Function.prototype);
			var o = Object.getOwnPropertyDescriptor(t, n);
			if(void 0 === o) {
				var i = Object.getPrototypeOf(t);
				return null === i ? void 0 : e(i, n, r)
			}
			if("value" in o) return o.value;
			var a = o.get;
			if(void 0 !== a) return a.call(r)
		},
		En = function(e) {
			return {
				display: e ? "block" : "none",
				visibility: "visible",
				position: "fixed",
				"z-index": "2147483647",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				margin: "0px",
				padding: "0px",
				border: "0px none transparent",
				"overflow-x": "hidden",
				"overflow-y": "auto"
			}
		},
		On = En(!1),
		Sn = En(!0),
		kn = function(e) {
			function t(e, n, r) {
				O(this, t);
				var o = S(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
				return o._mountAfterBody = function() {
					if(!o._isMounted())
						if(document.body) o.appendTo(document.body);
						else if("complete" === document.readyState || "interactive" === document.readyState) throw new _e("Stripe.js requires that your page has a <body> element.")
				}, o._autoMount = function() {
					"complete" === document.readyState ? o._mountAfterBody() : (document.addEventListener("DOMContentLoaded", o._mountAfterBody), window.addEventListener("load", o._mountAfterBody))
				}, o._tryRestoreBodyScroll = function() {
					o.restoreBodyScroll && (o.restoreBodyScroll(), o.restoreBodyScroll = null)
				}, o.show = function() {
					o.restoreBodyScroll = bn(), Bt(o._iframe, Sn)
				}, o.hide = function() {
					Bt(o._iframe, On), o._tryRestoreBodyScroll()
				}, o.destroy = function() {
					o._tryRestoreBodyScroll(), wn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", o).call(o)
				}, o.restoreBodyScroll = null, o._autoMount(), o
			}
			return k(t, e), gn(t, [{
				key: "_createIFrame",
				value: function(e) {
					var n = wn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
					return Bt(n, On), n
				}
			}]), t
		}(en),
		Pn = kn,
		jn = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		An = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		Cn = function e(t, n, r) {
			null === t && (t = Function.prototype);
			var o = Object.getOwnPropertyDescriptor(t, n);
			if(void 0 === o) {
				var i = Object.getPrototypeOf(t);
				return null === i ? void 0 : e(i, n, r)
			}
			if("value" in o) return o.value;
			var a = o.get;
			if(void 0 !== a) return a.call(r)
		},
		Tn = {
			display: "block",
			position: "absolute",
			"z-index": "1000",
			width: "1px",
			"min-width": "100%",
			margin: "2px 0 0 0",
			padding: "0",
			border: "none",
			overflow: "hidden"
		},
		Rn = function(e) {
			function t() {
				return P(this, t), j(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return A(t, e), An(t, [{
				key: "updateStyle",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						t._iframe.style[n] = e[n]
					})
				}
			}, {
				key: "update",
				value: function(e) {
					this.send({
						action: "stripe-user-update",
						payload: e
					})
				}
			}, {
				key: "_createIFrame",
				value: function(e) {
					var n = Cn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, jn({}, e, {
						isSecondaryFrame: !0
					}));
					return Bt(n, Tn), n.style.height = "0", n
				}
			}]), t
		}(en),
		In = Rn,
		qn = function(e) {
			var t = ut(e),
				n = t ? t.host : "";
			return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/)
		},
		Mn = function(e, t) {
			var n = ut(e),
				r = ut(t);
			return !(!n || !r) && n.origin === r.origin
		},
		Nn = function(e) {
			return Mn(e, "https://js.stripe.com/v3/")
		},
		xn = function(e) {
			return Nn(e) || qn(e)
		},
		Ln = ["button", "checkbox", "file", "hidden", "image", "submit", "radio", "reset"],
		Fn = function(e) {
			var t = e.tagName;
			if(e.isContentEditable || "TEXTAREA" === t) return !0;
			if("INPUT" !== t) return !1;
			var n = e.getAttribute("type");
			return -1 === Ln.indexOf(n)
		},
		Bn = Fn,
		Dn = function(e) {
			return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e)
		},
		Un = function(e) {
			return /SamsungBrowser/.test(e)
		},
		zn = function(e) {
			return /iPad|iPhone/i.test(e) && !Dn(e)
		},
		Hn = function(e) {
			return /Android/i.test(e) && !Dn(e)
		},
		Wn = window.navigator.userAgent,
		Kn = (function(e) {
			/Edge\//i.test(e)
		}(Wn), Dn(Wn), function(e) {
			/MSIE 9/i.test(e)
		}(Wn), function(e) {
			/MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e)
		}(Wn), zn(Wn)),
		Yn = (function(e) {
			zn(e) || Hn(e)
		}(Wn), Hn(Wn), function(e) {
			/Android 4\./i.test(e) && !/Chrome/i.test(e) && Hn(e)
		}(Wn), function(e) {
			/^((?!chrome|android).)*safari/i.test(e) && Un(e)
		}(Wn), function(e) {
			/Firefox\//i.test(e)
		}(Wn), function(e) {
			/Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e)
		}(Wn), Un(Wn)),
		Vn = (function(e) {
			Hn(e) && /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e)
		}(Wn), window.ApplePaySession, le = {}, C(le, _t.card, {
			unique: !0,
			conflict: [_t.cardNumber, _t.cardExpiry, _t.cardCvc, _t.postalCode]
		}), C(le, _t.cardNumber, {
			unique: !0,
			conflict: [_t.card]
		}), C(le, _t.cardExpiry, {
			unique: !0,
			conflict: [_t.card]
		}), C(le, _t.cardCvc, {
			unique: !0,
			conflict: [_t.card]
		}), C(le, _t.postalCode, {
			unique: !0,
			conflict: [_t.card]
		}), C(le, _t.paymentRequestButton, {
			unique: !0,
			conflict: []
		}), C(le, _t.iban, {
			unique: !0,
			conflict: []
		}), C(le, _t.idealBank, {
			unique: !0,
			conflict: []
		}), le),
		Jn = Vn,
		$n = (pe = {}, T(pe, _t.card, ft.CARD_ELEMENT), T(pe, _t.cardNumber, ft.CARD_ELEMENT), T(pe, _t.cardExpiry, ft.CARD_ELEMENT), T(pe, _t.cardCvc, ft.CARD_ELEMENT), T(pe, _t.postalCode, ft.CARD_ELEMENT), T(pe, _t.paymentRequestButton, ft.PAYMENT_REQUEST_ELEMENT), T(pe, _t.iban, ft.IBAN_ELEMENT), T(pe, _t.idealBank, ft.IDEAL_BANK_ELEMENT), pe),
		Gn = $n,
		Qn = ["brand"],
		Zn = ["country", "bankName"],
		Xn = (fe = {}, R(fe, _t.card, Qn), R(fe, _t.cardNumber, Qn), R(fe, _t.iban, Zn), fe),
		er = R({}, _t.idealBank, {
			secondary: _t.idealBankSecondary
		}),
		tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		nr = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		rr = !1,
		or = function(e, t) {
			return document.activeElement === e._iframe || e._iframe.parentElement && document.activeElement === t
		},
		ir = function e(t) {
			q(this, e), ar.call(this);
			var n = t.apiKey,
				r = t.stripeAccount,
				o = t.stripeJsId,
				i = t.features;
			this._id = Pt("__privateStripeController"), this._stripeJsId = o, this._apiKey = n, this._stripeAccount = r, this._features = i || {}, this._controllerFrame = new cn(ft.CONTROLLER, this._id, t), this._frames = {}, this._requests = {}, this._setupPostMessage(), this._handleMessage = Kt(this._handleMessage, this)
		},
		ar = function() {
			var e = this;
			this._sendCAReq = function(t) {
				var n = Pt(t.tag);
				return new Mt(function(r, o) {
					e._requests[n] = {
						resolve: r,
						reject: o
					}, e._controllerFrame.send({
						action: "stripe-safe-controller-action-request",
						payload: {
							nonce: n,
							caReq: t
						}
					})
				})
			}, this.action = {
				retrievePaymentIntent: function(t) {
					return e._sendCAReq({
						tag: "RETRIEVE_PAYMENT_INTENT",
						value: t
					})
				},
				confirmPaymentIntent: function(t) {
					return e._sendCAReq({
						tag: "CONFIRM_PAYMENT_INTENT",
						value: t
					})
				},
				fetchLocale: function(t) {
					return e._sendCAReq({
						tag: "FETCH_LOCALE",
						value: t
					})
				},
				updateCSSFonts: function(t) {
					return e._sendCAReq({
						tag: "UPDATE_CSS_FONTS",
						value: t
					})
				},
				createApplePaySession: function(t) {
					return e._sendCAReq({
						tag: "CREATE_APPLE_PAY_SESSION",
						value: t
					})
				},
				retrieveSource: function(t) {
					return e._sendCAReq({
						tag: "RETRIEVE_SOURCE",
						value: t
					})
				},
				tokenizeWithElement: function(t) {
					return e._sendCAReq({
						tag: "TOKENIZE_WITH_ELEMENT",
						value: t
					})
				},
				tokenizeWithData: function(t) {
					return e._sendCAReq({
						tag: "TOKENIZE_WITH_DATA",
						value: t
					})
				},
				createSourceWithElement: function(t) {
					return e._sendCAReq({
						tag: "CREATE_SOURCE_WITH_ELEMENT",
						value: t
					})
				},
				createSourceWithData: function(t) {
					return e._sendCAReq({
						tag: "CREATE_SOURCE_WITH_DATA",
						value: t
					})
				},
				redirectToPaymentPage: function(t) {
					return e._sendCAReq({
						tag: "REDIRECT_TO_PAYMENT_PAGE",
						value: t
					})
				}
			}, this.createElementFrame = function(t, n) {
				var r = n.groupId,
					o = I(n, ["groupId"]),
					i = new hn(t, e._id, nr({}, o, {
						features: e._features
					}));
				return e._setupFrame(i, t, r)
			}, this.createSecondaryElementFrame = function(t, n) {
				var r = n.groupId,
					o = I(n, ["groupId"]),
					i = new In(t, e._id, nr({}, o, {
						features: e._features
					}));
				return e._setupFrame(i, t, r)
			}, this.createHiddenFrame = function(t, n) {
				var r = new an(t, e._id, nr({}, n, {
					features: e._features
				}));
				return e._setupFrame(r, t)
			}, this.createLightboxFrame = function(t, n) {
				var r = new Pn(t, e._id, nr({}, n, {
					features: e._features
				}));
				return e._setupFrame(r, t)
			}, this._setupFrame = function(t, n, r) {
				return e._frames[t.id] = t, e._controllerFrame.sendPersistent({
					action: "stripe-user-createframe",
					payload: {
						newFrameId: t.id,
						frameType: n,
						groupId: r
					}
				}), t._on("unload", function() {
					e._controllerFrame.sendPersistent({
						action: "stripe-frame-unload",
						payload: {
							unloadedFrameId: t.id
						}
					})
				}), t._on("destroy", function() {
					delete e._frames[t.id], e._controllerFrame.sendPersistent({
						action: "stripe-frame-destroy",
						payload: {
							destroyedFrameId: t.id
						}
					})
				}), t._on("load", function() {
					e._controllerFrame.sendPersistent({
						action: "stripe-frame-load",
						payload: {
							loadedFrameId: t.id
						}
					}), e._controllerFrame.loaded && t.send({
						action: "stripe-controller-load",
						payload: {}
					})
				}), t
			}, this.report = function(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				e._controllerFrame.send({
					action: "stripe-controller-report",
					payload: {
						event: t,
						data: n
					}
				})
			}, this.warn = function() {
				for(var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				e._controllerFrame.send({
					action: "stripe-controller-warn",
					payload: {
						args: n
					}
				})
			}, this.controllerFor = function() {
				return "outer"
			}, this._setupPostMessage = function() {
				window.addEventListener("message", function(t) {
					var n = t.data,
						r = t.origin,
						o = Ht(n);
					o && Mn(wt, r) && e._handleMessage(o)
				})
			}, this._handleMessage = function(t) {
				var n = t.controllerId,
					r = t.frameId,
					o = t.message,
					i = e._frames[r];
				if(n === e._id) switch(o.action) {
					case "stripe-frame-event":
						var a = o.payload,
							s = a.event,
							u = a.data;
						if(i) {
							if(Kn) {
								var c = i._iframe.parentElement,
									l = c && c.querySelector(".__PrivateStripeElement-input");
								if("focus" === s && !rr && !or(i, l)) {
									l && l.focus(), rr = !0;
									break
								}
								if("blur" === s && rr) {
									rr = !1;
									break
								}
								"blur" === s && setTimeout(function() {
									var e = document.activeElement;
									if(e && !or(i, l) && !Bn(e)) {
										var t = c && c.querySelector(".__PrivateStripeElement-safariInput");
										t && (t.focus(), t.blur()), e.focus()
									}
								}, 400)
							}
							i._emit(s, u)
						}
						break;
					case "stripe-frame-action-complete":
						i && i.resolve(o.payload.nonce, o.payload.result);
						break;
					case "stripe-frame-error":
						throw new _e(o.payload.message);
					case "stripe-integration-error":
						i && i._emit("__privateIntegrationError", {
							message: o.payload.message
						});
						break;
					case "stripe-controller-load":
						e._controllerFrame._emit("load"), Object.keys(e._frames).forEach(function(t) {
							return e._frames[t].send({
								action: "stripe-controller-load",
								payload: {}
							})
						});
						break;
					case "stripe-safe-controller-action-response":
						e._requests[o.payload.nonce] && e._requests[o.payload.nonce].resolve(o.payload.caRes);
						break;
					case "stripe-safe-controller-action-error":
						if(e._requests[o.payload.nonce]) {
							var p = o.payload.caErr;
							"object" === (void 0 === p ? "undefined" : tr(p)) && null !== p && "string" == typeof p.name && "IntegrationError" === p.name ? e._requests[o.payload.nonce].reject(new _e("string" == typeof p.message ? p.message : "")) : e._requests[o.payload.nonce].reject(p)
						}
				}
			}
		},
		sr = ir,
		ur = function(e) {
			function t() {
				M(this, t);
				var e = N(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.name = "NetworkError", e
			}
			return x(t, e), t
		}(Error),
		cr = ur,
		lr = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		pr = {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		fr = function(e) {
			return Object.keys(pr).forEach(function(t) {
				e.setRequestHeader(t, pr[t])
			}), e
		},
		dr = function e(t) {
			return new Mt(function(n, r) {
				var o = t.method,
					i = t.url,
					a = t.data,
					s = t.withCredentials,
					u = a ? Tt(a) : "",
					c = !window.XMLHttpRequest || ct(i) && void 0 === (new XMLHttpRequest).withCredentials,
					l = "GET" === o && u ? i + "?" + u : i,
					p = "GET" === o ? "" : u;
				if(c) {
					var f = new window.XDomainRequest;
					try {
						f.open(o, l)
					} catch(e) {
						r(e)
					}
					f.onerror = function() {
						n({
							responseText: JSON.stringify({
								error: {
									type: "api_error"
								}
							})
						})
					}, f.onload = function() {
						n({
							status: 200,
							responseText: f.responseText
						})
					}, setTimeout(function() {
						f.send(p)
					}, 0)
				} else {
					var d = new XMLHttpRequest;
					s && (d.withCredentials = s), d.open(o, l, !0), fr(d), d.onreadystatechange = function() {
						4 === d.readyState && (d.onreadystatechange = function() {}, 0 === d.status ? s ? r(new cr) : e(lr({}, t, {
							withCredentials: !0
						})).then(n, r) : n(d))
					};
					try {
						d.send(p)
					} catch(e) {
						r(e)
					}
				}
			})
		},
		hr = dr,
		yr = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		mr = function(e, t) {
			var n = /@font-face[ ]?{[^}]*}/g,
				r = e.match(n);
			if(!r) throw new _e("No @font-face rules found in file from " + t);
			return r
		},
		_r = function(e) {
			var t = e.match(/@font-face[ ]?{([^}]*)}/);
			return t ? t[1] : ""
		},
		vr = function(e, t) {
			var n = e.replace(/\/\*.*\*\//g, "").trim(),
				r = n.length && /;$/.test(n) ? n : n + ";",
				o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
			if(!o) throw new _e("Found @font-face rule containing no valid font-properties in file from " + t);
			return o
		},
		br = function(e, t) {
			var n = e.indexOf(":");
			if(-1 === n) throw new _e("Invalid css declaration in file from " + t + ': "' + e + '"');
			var r = e.slice(0, n).trim(),
				o = Ot[r];
			if(!o) throw new _e("Unsupported css property in file from " + t + ': "' + r + '"');
			return {
				property: o,
				value: e.slice(n + 1).trim()
			}
		},
		gr = function(e, t) {
			var n = e.reduce(function(e, n) {
				var r = br(n, t),
					o = r.property,
					i = r.value;
				return yr({}, e, L({}, o, i))
			}, {});
			return ["family", "src"].forEach(function(e) {
				if(!n[e]) throw new _e("Missing css property in file from " + t + ': "' + Et[e] + '"')
			}), n
		},
		wr = function(e) {
			return hr({
				url: e,
				method: "GET"
			}).then(function(e) {
				return e.responseText
			}).then(function(t) {
				return mr(t, e).map(function(t) {
					var n = _r(t),
						r = vr(n, e);
					return gr(r, e)
				})
			})
		},
		Er = wr,
		Or = function(e, t) {
			if(!(e && e in Jn)) throw new _e("A valid Element name must be provided. Valid Elements are:\n" + Object.keys(Jn).filter(function(e) {
				return !Jn[e].beta
			}).join(", ") + "; you passed: " + e + ".");
			if(Jn[e].unique && -1 !== t.indexOf(e)) throw new _e("Can only create one Element of type " + e + ".");
			var n = je(t, Jn[e].conflict);
			if(n.length) {
				var r = n[0];
				throw new _e("Cannot create an Element of type " + e + " after an Element of type " + r + " has already been created.")
			}
		},
		Sr = function(e, t) {
			var n = Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")),
				r = [];
			n.forEach(function(e) {
				var t = e.getAttribute("tabindex"),
					n = !t || parseInt(t, 10) >= 0,
					o = e.getBoundingClientRect(),
					i = o.width > 0 && o.height > 0;
				n && i && r.push(e)
			});
			var o = Ee(r, function(t) {
				return t === e || e.contains(t)
			});
			return r[o + ("previous" === t ? -1 : 1)]
		},
		kr = Sr,
		Pr = "14px",
		jr = function(e) {
			var t = e.split(" ").map(function(e) {
				return parseInt(e.trim(), 10)
			});
			return 1 === t.length || 2 === t.length ? 2 * t[0] : 3 === t.length || 4 === t.length ? t[0] + t[2] : 0
		},
		Ar = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.2em",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pr,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0",
				r = jr(n);
			if("string" == typeof e && /^[0-9.]+px$/.test(e)) {
				return parseFloat(e.toString().replace(/[^0-9.]/g, "")) + r + "px"
			}
			var o = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
				i = parseFloat(Pr.replace(/[^0-9.]/g, "")),
				a = parseFloat(t.toString().replace(/[^0-9.]/g, "")),
				s = void 0;
			if("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) s = a;
			else if("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t)) s = a * i;
			else if("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t)) s = a / 100 * i;
			else {
				if("string" != typeof t || !/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t)) return "100%";
				s = i
			}
			var u = o * s + r,
				c = u + "px";
			return /^[0-9.]+px$/.test(c) ? c : "100%"
		},
		Cr = Ar,
		Tr = function(e, t) {
			return e ? window.getComputedStyle(e, t) : null
		},
		Rr = Tr,
		Ir = function() {
			if(!window.PaymentRequest) return null;
			if(/CriOS\/59/.test(navigator.userAgent)) return null;
			if(/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)) return null;
			var e = window.PaymentRequest;
			return e.prototype.canMakePayment || (e.prototype.canMakePayment = function() {
				return Mt.resolve(!1)
			}), e
		}(),
		qr = {
			CAN_MAKE_PAYMENT: "CAN_MAKE_PAYMENT"
		},
		Mr = function() {
			try {
				return window.location.origin === window.top.location.origin
			} catch(e) {
				return !1
			}
		},
		Nr = void 0,
		xr = function(e) {
			var t = {};
			return function(n) {
				if(void 0 !== t[n]) return t[n];
				var r = e(n);
				return t[n] = r, r
			}
		}(function(e) {
			return window.ApplePaySession.canMakePaymentsWithActiveCard(e).then(function(e) {
				return Nr && Nr("payreq.can_make_payment_native_response", {
					available: e
				}), e
			})
		}),
		Lr = function(e, t, n, r) {
			if(Nr = r, window.ApplePaySession) {
				if(Mr()) {
					if(n && "https:" !== window.location.protocol) return window.console && window.console.warn("To test Apple Pay, you must serve this page over HTTPS."), Mt.resolve(!1);
					if(window.ApplePaySession.supportsVersion(2)) {
						var o = t ? [e, t] : [e],
							i = "merchant." + o.join(".") + ".stripe";
						return xr(i).then(function(r) {
							if(n && !r && window.console) {
								var o = t ? "or stripeAccount parameter (" + t + ") " : "";
								window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + e + ") " + o + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")
							}
							return r
						})
					}
					return n && window.console && window.console.warn("This version of Safari does not support ApplePay JS version 2."), Mt.resolve(!1)
				}
				return Mt.resolve(!1)
			}
			return Mt.resolve(!1)
		},
		Fr = null,
		Br = function(e, t) {
			return null !== Fr ? Mt.resolve(Fr) : Ir ? Yn ? Mt.resolve(!1) : t && "https:" !== window.location.protocol ? (window.console && window.console.warn("To test Payment Request, you must serve this page over HTTPS."), Mt.resolve(!1)) : e ? e.action(qr.CAN_MAKE_PAYMENT).then(function(e) {
				var t = e.available;
				return Fr = "boolean" == typeof t && t
			}) : Mt.resolve(!1) : Mt.resolve(!1)
		},
		Dr = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Ur = {
			merchantCapabilities: ["supports3DS"],
			displayItems: []
		},
		zr = {
			amount: Qe,
			label: Je,
			pending: Be(Ge)
		},
		Hr = Dr({}, zr, {
			id: $e(Je, function() {
				return Pt("shippingOption")
			}),
			detail: $e(Je, function() {
				return ""
			})
		}),
		Wr = {
			displayItems: Be(Xe(ot(zr))),
			shippingOptions: Be(et("id")(Xe(ot(Hr)))),
			total: Be(ot(zr))
		},
		Kr = {
			shipping: "shipping",
			delivery: "delivery",
			pickup: "pickup"
		},
		Yr = {
			requestShipping: Be(Ge),
			requestPayerName: Be(Ge),
			requestPayerEmail: Be(Ge),
			requestPayerPhone: Be(Ge),
			shippingType: Be(We.apply(void 0, F(Object.keys(Kr))))
		},
		Vr = Dr({}, Yr, {
			displayItems: Be(Xe(ot(zr))),
			shippingOptions: Be(et("id")(Xe(ot(Hr)))),
			total: ot(zr),
			currency: Ve,
			country: Ye,
			jcbEnabled: Be(Ge)
		}),
		Jr = {
			success: "success",
			fail: "fail",
			invalid_payer_name: "invalid_payer_name",
			invalid_payer_email: "invalid_payer_email",
			invalid_payer_phone: "invalid_payer_phone",
			invalid_shipping_address: "invalid_shipping_address"
		},
		$r = Dr({}, Wr, {
			status: We.apply(void 0, F(Object.keys(Jr)))
		}),
		Gr = Dr({}, Wr, {
			currency: Be(Ve)
		}),
		Qr = ot($r),
		Zr = rt(Gr),
		Xr = ot(Vr),
		eo = ["mastercard", "visa"],
		to = ["AT", "AU", "BE", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "HK", "IE", "IT", "JP", "LU", "NL", "NO", "NZ", "PT", "SE", "SG", "US"],
		no = function(e, t) {
			var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(eo) : eo;
			return -1 !== to.indexOf(e) ? ["amex"].concat(B(n)) : n
		},
		ro = function(e, t) {
			return no(e, t).reduce(function(e, t) {
				return "mastercard" === t ? [].concat(B(e), ["masterCard"]) : "diners" === t ? e : [].concat(B(e), [t])
			}, [])
		},
		oo = {
			bif: 1,
			clp: 1,
			djf: 1,
			gnf: 1,
			jpy: 1,
			kmf: 1,
			krw: 1,
			mga: 1,
			pyg: 1,
			rwf: 1,
			vnd: 1,
			vuv: 1,
			xaf: 1,
			xof: 1,
			xpf: 1
		},
		io = function(e, t) {
			var n = oo[t.toLowerCase()] || 100,
				r = e / n,
				o = Math.log(n) / Math.log(10);
			return r.toFixed(Math.round(o))
		},
		ao = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		so = function(e, t) {
			return {
				amount: io(e.amount, t.currency),
				label: e.label,
				type: e.pending ? "pending" : "final"
			}
		},
		uo = function(e, t) {
			return {
				amount: io(e.amount, t.currency),
				label: e.label,
				detail: e.detail,
				identifier: e.id
			}
		},
		co = function(e) {
			return function(t) {
				return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null
			}
		},
		lo = (de = {}, D(de, Jr.success, 0), D(de, Jr.fail, 1), D(de, Jr.invalid_payer_name, 2), D(de, Jr.invalid_shipping_address, 3), D(de, Jr.invalid_payer_phone, 4), D(de, Jr.invalid_payer_email, 4), de),
		po = (he = {}, D(he, Kr.pickup, "storePickup"), D(he, Kr.shipping, "shipping"), D(he, Kr.delivery, "delivery"), he),
		fo = {
			total: function(e) {
				return so(e.total, e)
			},
			lineItems: function(e) {
				return e.displayItems ? e.displayItems.map(function(t) {
					return so(t, e)
				}) : []
			},
			shippingMethods: function(e) {
				return e.shippingOptions ? e.shippingOptions.map(function(t) {
					return uo(t, e)
				}) : []
			}
		},
		ho = ao({}, fo, {
			shippingType: function(e) {
				var t = e.shippingType;
				if(!t) return null;
				var n = po[t];
				if(void 0 !== n) return n;
				throw new _e("Invalid value for shippingType: " + t)
			},
			requiredBillingContactFields: function(e) {
				return e.requestPayerName ? ["postalAddress"] : null
			},
			requiredShippingContactFields: function(e) {
				var t = [];
				return e.requestShipping && t.push("postalAddress"), e.requestPayerEmail && t.push("email"), e.requestPayerPhone && t.push("phone"), t.length ? t : null
			},
			countryCode: co("country"),
			currencyCode: co("currency"),
			merchantCapabilities: function(e) {
				return function(t) {
					return t[e] || null
				}
			}("merchantCapabilities"),
			supportedNetworks: function(e) {
				return ro(e.country, e.jcbEnabled || !1)
			}
		}),
		yo = ao({}, fo, {
			status: function(e) {
				return lo[e.status] || 0
			}
		}),
		mo = (ao({}, yo, ho), function(e) {
			var t = {},
				n = ao({}, Ur, e);
			return Object.keys(ho).forEach(function(e) {
				var r = ho[e],
					o = r(n);
				null !== o && (t[e] = o)
			}), t
		}),
		_o = function(e) {
			var t = {};
			return Object.keys(yo).forEach(function(n) {
				var r = yo[n],
					o = r(e);
				null !== o && (t[n] = o)
			}), t
		},
		vo = mo,
		bo = function(e) {
			return "string" == typeof e ? e : null
		},
		go = function(e) {
			return e ? bo(e.phoneNumber) : null
		},
		wo = function(e) {
			return e ? bo(e.emailAddress) : null
		},
		Eo = function(e) {
			return e ? [e.givenName, e.familyName].filter(function(e) {
				return e && "string" == typeof e
			}).join(" ") : null
		},
		Oo = function(e) {
			if(e) {
				var t = e.addressLines,
					n = e.countryCode,
					r = e.postalCode,
					o = e.administrativeArea,
					i = e.locality,
					a = e.phoneNumber,
					s = bo(n);
				return {
					addressLine: Array.isArray(t) ? t.reduce(function(e, t) {
						return "string" == typeof t ? [].concat(U(e), [t]) : e
					}, []) : [],
					country: s ? s.toUpperCase() : "",
					postalCode: bo(r) || "",
					recipient: Eo(e) || "",
					region: bo(o) || "",
					city: bo(i) || "",
					phone: bo(a) || "",
					sortingCode: "",
					dependentLocality: "",
					organization: ""
				}
			}
			return null
		},
		So = function(e, t) {
			if(e && t.shippingOptions) {
				var n = e.identifier,
					r = e.label;
				return t.shippingOptions.filter(function(e) {
					return e.id === n && e.label === r
				})[0] || null
			}
			return null
		},
		ko = function(e, t) {
			var n = e.shippingContact,
				r = e.shippingMethod,
				o = e.billingContact;
			return {
				shippingOption: So(r, t),
				shippingAddress: Oo(n),
				payerEmail: wo(n),
				payerPhone: go(n),
				payerName: Eo(o),
				methodName: "apple-pay"
			}
		},
		Po = ko,
		jo = function(e) {
			if(!e || !e.length) throw new _e("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
			return e
		},
		Ao = jo,
		Co = {
			live: "live",
			test: "test",
			unknown: "unknown"
		},
		To = function(e) {
			return /^pk_test_/.test(e) ? Co.test : /^pk_live_/.test(e) ? Co.live : Co.unknown
		},
		Ro = function(e) {
			if(e === Co.unknown) throw new _e("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys")
		},
		Io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		qo = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Mo = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		No = {
			australia: "AU",
			austria: "AT",
			canada: "CA",
			schweiz: "CH",
			deutschland: "DE",
			hongkong: "HK",
			saudiarabia: "SA",
			espaa: "ES",
			singapore: "SG",
			us: "US",
			usa: "US",
			unitedstatesofamerica: "US",
			unitedstates: "US",
			england: "GB",
			gb: "GB",
			uk: "GB",
			unitedkingdom: "GB"
		},
		xo = function(e) {
			function t(e, n, r, o, i, a, s) {
				H(this, t);
				var u = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				Lo.call(u), u._controllerReport = e, u._controllerWarn = n, u._createApplePaySession = r, u._tokenizeWithData = o, u._createSourceWithData = i, u._showCalledByButtonElement = null, u._authentication = a, u._report("payreq.options", {
					options: s
				});
				var c = at(Xr, s || {}, "paymentRequest()"),
					l = c.value;
				return c.warnings.forEach(function(e) {
					return u._controllerWarn(e)
				}), u._cachedCanMakePayment = null, u._canMakePaymentCalled = !1, u._initialPaymentRequest = l, u._isShowing = !1, u._initializeSessionState(), u
			}
			return K(t, e), Mo(t, [{
				key: "_initializeSessionState",
				value: function() {
					this._paymentRequestOptions = qo({}, this._initialPaymentRequest, {
						status: Jr.success
					}), this._privateSession = null, this._privateShippingOption = null;
					var e = this._paymentRequestOptions.shippingOptions;
					e && e.length && (this._privateShippingOption = e[0])
				}
			}, {
				key: "_setupSession",
				value: function(e, t) {
					var n = this;
					e.addEventListener("validatemerchant", Kt(this._validateMerchant(e, t))), e.addEventListener("paymentauthorized", Kt(this._paymentAuthorized(e))), e.addEventListener("cancel", Kt(function() {
						n._report("payreq.show_rejected"), n._isShowing = !1, n._emit("cancel")
					})), e.addEventListener("shippingcontactselected", Kt(this._shippingContactSelected(e))), e.addEventListener("shippingmethodselected", Kt(this._shippingMethodSelected(e)))
				}
			}]), t
		}(Gt),
		Lo = function() {
			var e = this;
			this.canMakePayment = Kt(function() {
				return null === e._cachedCanMakePayment ? Lr(window.location.hostname, e._authentication.stripeAccount, To(e._authentication.apiKey) === Co.test, e._report).then(function(t) {
					return e._canMakePaymentCalled = !0, e._cachedCanMakePayment = t, e._report("payreq.can_make_payment_response", {
						available: e._cachedCanMakePayment
					}), e._cachedCanMakePayment ? {
						applePay: !0
					} : null
				}) : Mt.resolve().then(function() {
					return e._canMakePaymentCalled = !0, e._report("payreq.can_make_payment_response", {
						available: e._cachedCanMakePayment,
						cached: !0
					}), e._cachedCanMakePayment ? {
						applePay: !0
					} : null
				})
			}), this.update = Kt(function(t) {
				if(e._isShowing) throw new _e("You cannot update Payment Request options while the payment sheet is showing.");
				var n = at(Zr, t, "PaymentRequest update()"),
					r = n.value;
				n.warnings.forEach(function(t) {
					return e._controllerWarn(t)
				}), e._initialPaymentRequest = Pe(e._paymentRequestOptions, r), e._initializeSessionState(), e._report("payreq.update", {
					updates: t
				})
			}), this.show = Kt(function() {
				null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1);
				var t = e._showCalledByButtonElement;
				if(e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"), e._controllerWarn("Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet.")), !e._canMakePaymentCalled) throw new _e("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
				if(!e._cachedCanMakePayment) throw new _e("Payment Request is not available in this browser.");
				e._initializeSessionState();
				try {
					e._controllerWarn(vo(e._paymentRequestOptions));
					var n = new window.ApplePaySession(2, vo(e._paymentRequestOptions));
					e._privateSession = n, e._setupSession(n, t), n.begin(), e._isShowing = !0, e._report("payreq.show", {
						listeners: Object.keys(e._callbacks).sort()
					})
				} catch(e) {
					throw "Must create a new ApplePaySession from a user gesture handler." === e.message ? new _e("show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).") : e
				}
			}), this.abort = Kt(function() {
				e._privateSession && (e._privateSession.abort(), e._report("payreq.abort"))
			}), this._report = function(t, n) {
				e._controllerReport(t, qo({}, n, null !== e._showCalledByButtonElement ? {
					usesButtonElement: e._showCalledByButtonElement
				} : {}, {
					impl: "applepay"
				}))
			}, this._elementShow = function() {
				e._showCalledByButtonElement = !0, e.show()
			}, this._registerElement = function() {
				e._usedByButtonElement = !0
			}, this._validateMerchant = function(t, n) {
				return function(r) {
					e._createApplePaySession({
						data: {
							validation_url: r.validationURL,
							domain_name: window.location.hostname,
							display_name: e._paymentRequestOptions.total.label
						},
						usesButtonElement: n
					}).then(function(n) {
						switch(n.type) {
							case "object":
								t.completeMerchantValidation(JSON.parse(n.object.session));
								break;
							case "error":
								e._handleValidationError(t)(n.error);
								break;
							default:
								ve(n)
						}
					}, e._handleValidationError(t))
				}
			}, this._handleValidationError = function(t) {
				return function(n) {
					var r = n.message;
					t.abort(), "string" == typeof r ? (e._controllerWarn(n.message), e._report("user_error.apple_pay_session_error", {
						error: n
					})) : e._report("fatal.payreq.unexpected_error", {
						error: n
					})
				}
			}, this._paymentAuthorized = function(t) {
				return function(n) {
					var r = n.payment;
					e._report("payreq.paymentauthorized");
					var o = e._showCalledByButtonElement ? _t.paymentRequestButton : null;
					e._tokenizeWithData({
						type: "apple_pay",
						elementName: o,
						tokenData: qo({}, r, {
							billingContact: e._normalizeContact(r.billingContact)
						}),
						mids: null
					}).then(function(n) {
						if("error" === n.type) t.completePayment(window.ApplePaySession.STATUS_FAILURE), e._report("fatal.payreq.on_error", {
							error: n.error
						});
						else {
							var o = e._normalizeContact(r.shippingContact),
								i = e._normalizeContact(r.billingContact);
							o && e._paymentRequestOptions.requestShipping && !o.countryCode && t.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS);
							var a = Po({
								shippingContact: o,
								billingContact: i
							}, e._paymentRequestOptions);
							e._onToken(t)(qo({}, a, {
								shippingOption: e._privateShippingOption,
								token: n.object
							}))
						}
					})
				}
			}, this._normalizeContact = function(t) {
				if(t && "object" === (void 0 === t ? "undefined" : Io(t)) && t.country && "string" == typeof t.country) {
					var n = t.country.toLowerCase().replace(/[^a-z]+/g, ""),
						r = void 0;
					return t.countryCode ? "string" == typeof t.countryCode && (r = t.countryCode.toUpperCase()) : (r = No[n]) || e._report("fatal.payreq.missing_country_code", {
						country: t.country
					}), qo({}, t, {
						countryCode: r
					})
				}
				return "object" === (void 0 === t ? "undefined" : Io(t)) ? t : null
			}, this._onToken = function(t) {
				return function(n) {
					if(e._hasRegisteredListener("token") && e._maybeEmitSourceOrToken("token", qo({}, n, {
							complete: e._completePayment(t)
						})), e._hasRegisteredListener("source")) {
						var r = n.token,
							o = z(n, ["token"]),
							i = o.payerPhone,
							a = o.payerEmail,
							s = e._showCalledByButtonElement ? _t.paymentRequestButton : null;
						e._createSourceWithData({
							elementName: s,
							type: "card",
							sourceData: {
								token: r.id,
								owner: {
									phone: i,
									email: a
								}
							},
							mids: null
						}).then(function(n) {
							"error" === n.type ? (e._report("fatal.payreq.source_failed", {
								error: n.error,
								token: r
							}), t.completePayment(window.ApplePaySession.STATUS_FAILURE)) : e._maybeEmitSourceOrToken("source", qo({}, o, {
								source: n.object,
								complete: e._completePayment(t)
							}))
						})
					}
				}
			}, this._maybeEmitSourceOrToken = function(t, n) {
				e._isShowing && e._emit(t, n)
			}, this._completePayment = function(t) {
				return function(n) {
					var r = at(Qr, {
							status: n
						}, "status for PaymentRequest completion"),
						o = r.value;
					r.warnings.forEach(function(t) {
						return e._controllerWarn(t)
					}), e._paymentRequestOptions = Pe(e._paymentRequestOptions, o);
					var i = _o(e._paymentRequestOptions),
						a = i.status;
					t.completePayment(a), e._isShowing = !1
				}
			}, this._shippingContactSelected = function(t) {
				return function(n) {
					var r = Po({
						shippingContact: e._normalizeContact(n.shippingContact)
					}, e._paymentRequestOptions).shippingAddress;
					if(e._hasRegisteredListener("shippingaddresschange")) {
						var o = {
							shippingAddress: r,
							updateWith: e._completeShippingContactSelection(t)
						};
						e._emit("shippingaddresschange", o)
					} else {
						Ao(e._paymentRequestOptions.shippingOptions);
						var i = _o(e._paymentRequestOptions),
							a = i.total,
							s = i.lineItems,
							u = i.shippingMethods;
						t.completeShippingContactSelection(window.ApplePaySession.STATUS_SUCCESS, u, a, s)
					}
				}
			}, this._completeShippingContactSelection = function(t) {
				return function(n) {
					var r = at(Qr, n || {}, "shipping address selection callback"),
						o = r.value;
					if(r.warnings.forEach(function(t) {
							return e._controllerWarn(t)
						}), e._paymentRequestOptions = Pe(e._paymentRequestOptions, o), e._paymentRequestOptions.status === Jr.success) {
						var i = Ao(e._paymentRequestOptions.shippingOptions);
						e._privateShippingOption = i[0]
					}
					var a = _o(e._paymentRequestOptions),
						s = a.status,
						u = a.shippingMethods,
						c = a.total,
						l = a.lineItems;
					t.completeShippingContactSelection(s, u, c, l)
				}
			}, this._shippingMethodSelected = function(t) {
				return function(n) {
					if(e._privateShippingOption = Po({
							shippingMethod: n.shippingMethod
						}, e._paymentRequestOptions).shippingOption, e._hasRegisteredListener("shippingoptionchange")) {
						var r = {
							shippingOption: e._privateShippingOption,
							updateWith: e._completeShippingMethodSelection(t)
						};
						e._emit("shippingoptionchange", r)
					} else {
						var o = _o(e._paymentRequestOptions),
							i = o.total,
							a = o.lineItems;
						t.completeShippingMethodSelection(window.ApplePaySession.STATUS_SUCCESS, i, a)
					}
				}
			}, this._completeShippingMethodSelection = function(t) {
				return function(n) {
					var r = at(Qr, n || {}, "shipping option selection callback"),
						o = r.value;
					r.warnings.forEach(function(t) {
						return e._controllerWarn(t)
					}), e._paymentRequestOptions = Pe(e._paymentRequestOptions, o);
					var i = _o(e._paymentRequestOptions),
						a = i.status,
						s = i.total,
						u = i.lineItems;
					t.completeShippingMethodSelection(a, s, u)
				}
			}
		},
		Fo = xo,
		Bo = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Do = function(e) {
			function t(e, n, r) {
				V(this, t);
				var o = J(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				Uo.call(o), o._showCalledByButtonElement = null, o._authentication = n, o._controller = e, o._report("payreq.options", {
					options: r
				}), o._cachedCanMakePayment = null, o._canMakePaymentCalled = !1;
				var i = at(Xr, r || {}, "paymentRequest()"),
					a = i.value;
				if(i.warnings.forEach(function(e) {
						return o._controller.warn(e)
					}), Ir && "https:" === window.location.protocol) {
					o._controller.action.fetchLocale({
						locale: "auto"
					});
					var s = o._controller.createHiddenFrame(ft.PAYMENT_REQUEST, {
						authentication: n
					});
					o._setupPrFrame(s, a), o._prFrame = s
				} else o._prFrame = null;
				return o
			}
			return $(t, e), t
		}(Gt),
		Uo = function() {
			var e = this;
			this.canMakePayment = Kt(function() {
				return null === e._cachedCanMakePayment ? Br(e._prFrame, To(e._authentication.apiKey) === Co.test).then(function(t) {
					return e._canMakePaymentCalled = !0, e._cachedCanMakePayment = t, e._report("payreq.can_make_payment_response", {
						available: e._cachedCanMakePayment
					}), e._cachedCanMakePayment ? {
						applePay: !1
					} : null
				}) : Mt.resolve().then(function() {
					return e._canMakePaymentCalled = !0, e._report("payreq.can_make_payment_response", {
						available: e._cachedCanMakePayment,
						cached: !0
					}), e._cachedCanMakePayment ? {
						applePay: !1
					} : null
				})
			}), this.update = Kt(function(t) {
				var n = e._prFrame;
				if(n) {
					var r = at(Zr, t, "PaymentRequest update()"),
						o = r.value;
					r.warnings.forEach(function(t) {
						return e._controller.warn(t)
					}), n.send({
						action: "stripe-pr-update",
						payload: {
							data: o
						}
					})
				}
				e._report("payreq.update", {
					updates: t
				})
			}), this.show = Kt(function() {
				if(null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1), e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"), e._controller.warn("Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet.")), !e._canMakePaymentCalled) throw new _e("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
				if(!e._cachedCanMakePayment || !e._prFrame) throw new _e("Payment Request is not available in this browser.");
				e._prFrame.send({
					action: "stripe-pr-show",
					payload: {
						data: {
							usesButtonElement: e._showCalledByButtonElement
						}
					}
				}), e._report("payreq.show", {
					listeners: Object.keys(e._callbacks).sort()
				})
			}), this.abort = Kt(function() {
				e._prFrame && (e._prFrame.send({
					action: "stripe-pr-abort",
					payload: {}
				}), e._report("payreq.abort"))
			}), this._report = function(t, n) {
				e._controller.report(t, Bo({}, n, null !== e._showCalledByButtonElement ? {
					usesButtonElement: e._showCalledByButtonElement
				} : {}, {
					impl: "prapi"
				}))
			}, this._elementShow = function() {
				e._showCalledByButtonElement = !0, e.show()
			}, this._registerElement = function() {
				e._usedByButtonElement = !0
			}, this._setupPrFrame = function(t, n) {
				t.send({
					action: "stripe-pr-initialize",
					payload: {
						data: n
					}
				}), t._on("pr-cancel", function() {
					e._emit("cancel")
				}), t._on("pr-error", function(t) {
					e._report("fatal.payreq.on_error", {
						error: "Would have emitted 'error' event, but 'error' is silenced."
					})
				}), t._on("pr-callback", function(r) {
					var o = r.event,
						i = r.nonce,
						a = r.options;
					if("token" === o) {
						var s = function(n) {
							var r = at(Qr, {
									status: n
								}, "status for PaymentRequest completion"),
								o = r.value;
							r.warnings.forEach(function(t) {
								return e._controller.warn(t)
							}), t.send({
								action: "stripe-pr-callback-complete",
								payload: {
									data: o,
									nonce: i
								}
							})
						};
						e._handleToken(t, a, s)
					} else if("shippingaddresschange" === o || "shippingoptionchange" === o)
						if(e._hasRegisteredListener(o)) {
							var u = a.shippingAddress,
								c = a.shippingOption,
								l = "shippingaddresschange" === o ? {
									shippingAddress: u
								} : {
									shippingOption: c
								};
							e._emit(o, Bo({}, l, {
								updateWith: function(r) {
									var a = at(Qr, r || {}, o + " callback"),
										s = a.value;
									a.warnings.forEach(function(t) {
										return e._controller.warn(t)
									}), "shippingaddresschange" === o && s.status === Jr.success && Ao(s.shippingOptions || n.shippingOptions), t.send({
										action: "stripe-pr-callback-complete",
										payload: {
											nonce: i,
											data: s
										}
									})
								}
							}))
						} else "shippingaddresschange" === o && Ao(n.shippingOptions), t.send({
							action: "stripe-pr-callback-complete",
							payload: {
								nonce: i,
								data: {
									status: Jr.success
								}
							}
						});
					else e._report("error.payreq.unknown_event", {
						event: o,
						options: a
					})
				})
			}, this._handleToken = function(t, n, r) {
				var o = n._privateOwner,
					i = Y(n, ["_privateOwner"]);
				if(e._hasRegisteredListener("token") && e._emit("token", Bo({}, i, {
						complete: r
					})), e._hasRegisteredListener("source")) {
					var a = i.token,
						s = Y(i, ["token"]),
						u = n.payerPhone || null,
						c = n.payerEmail || null,
						l = e._showCalledByButtonElement ? _t.paymentRequestButton : null;
					e._controller.action.createSourceWithData({
						elementName: l,
						type: "card",
						sourceData: {
							token: a.id,
							owner: Bo({
								phone: u,
								email: c
							}, o || {})
						},
						mids: null
					}).then(function(t) {
						"error" === t.type ? (e._report("fatal.payreq.source_failed", {
							error: t.error,
							token: a
						}), r(Jr.fail)) : e._emit("source", Bo({}, s, {
							source: t.object,
							complete: r
						}))
					})
				}
			}
		},
		zo = Do,
		Ho = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Wo = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		Ko = {
			base: Be(Ze),
			complete: Be(Ze),
			empty: Be(Ze),
			invalid: Be(Ze),
			paymentRequestButton: Be(Ze)
		},
		Yo = {
			classes: Be(ot({
				base: Be(Je),
				complete: Be(Je),
				empty: Be(Je),
				focus: Be(Je),
				invalid: Be(Je),
				webkitAutofill: Be(Je)
			})),
			hidePostalCode: Be(Ge),
			hideIcon: Be(Ge),
			style: Be(ot(Ko)),
			iconStyle: Be(We("solid", "default")),
			value: Be(De(Je, Ze)),
			__privateCvcOptional: Be(Ge),
			__privateValue: Be(De(Je, Ze)),
			__privateEmitIbanValue: Be(Ge),
			error: Be(ot({
				type: Je,
				code: Be(Je),
				decline_code: Be(Je),
				param: Be(Je)
			})),
			locale: tt("elements()"),
			fonts: tt("elements()"),
			placeholder: Be(Je),
			disabled: Be(Ge),
			placeholderCountry: Be(Je),
			paymentRequest: Be(De(Ue(Fo, "stripe.paymentRequest(...)"), Ue(zo, "stripe.paymentRequest(...)"))),
			supportedCountries: Be(Xe(Je))
		},
		Vo = ot(Yo),
		Jo = {
			base: "StripeElement",
			focus: "StripeElement--focus",
			invalid: "StripeElement--invalid",
			complete: "StripeElement--complete",
			empty: "StripeElement--empty",
			webkitAutofill: "StripeElement--webkit-autofill"
		},
		$o = {
			margin: "0",
			padding: "0",
			border: "none",
			display: "block",
			background: "transparent",
			position: "relative",
			opacity: "1"
		},
		Go = {
			border: "none",
			display: "block",
			position: "absolute",
			height: "1px",
			top: "0",
			left: "0",
			padding: "0",
			margin: "0",
			width: "100%",
			opacity: "0",
			background: "transparent",
			"pointer-events": "none",
			"font-size": "16px"
		},
		Qo = function(e) {
			return parseFloat(e.toFixed(1))
		},
		Zo = function(e) {
			return /^\d+(\.\d*)?px$/.test(e)
		},
		Xo = function(e) {
			function t(e) {
				Z(this, t);
				var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				ei.call(n);
				var r = e.controller,
					o = e.componentName,
					i = e.paymentRequest;
				n._controller = r, n._componentName = o;
				var a = "paymentRequestButton" === n._componentName;
				if(a) {
					if(!i) throw new _e("You must pass in a stripe.paymentRequest object in order to use this Element.");
					n._paymentRequest = i, n._paymentRequest._registerElement()
				}
				return n._createComponent(e, o), n._classes = Ho({}, Jo), n._changeClasses(e.classes || {}), n._lastBackgroundColor = "", n._destroyed = !1, n._focused = !1, n._empty = !a, n._invalid = !1, n._complete = !1, n._autofilled = !1, n._lastSubmittedAt = null, n
			}
			return ee(t, e), Wo(t, [{
				key: "_checkDestroyed",
				value: function() {
					if(this._destroyed) throw new _e("This Element has already been destroyed. Please create a new one.")
				}
			}, {
				key: "_isMounted",
				value: function() {
					return !!document.body && document.body.contains(this._component)
				}
			}, {
				key: "_mountToParent",
				value: function(e) {
					var t = this._component.parentElement,
						n = this._isMounted();
					if(e === t) {
						if(n) return;
						this.unmount(), this._mountTo(e)
					} else if(t) {
						if(n) throw new _e("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
						this.unmount(), this._mountTo(e)
					} else this._mountTo(e)
				}
			}, {
				key: "_mountTo",
				value: function(e) {
					var t = Date.now(),
						n = Rr(e, null),
						r = !!n && "rtl" === n.getPropertyValue("direction");
					for(this._parent = e; e.firstChild;) e.removeChild(e.firstChild);
					e.appendChild(this._component), this._frame.send({
						action: "stripe-user-mount",
						payload: {
							mountTime: t,
							rtl: r
						}
					}), this._findPossibleLabel(), this._updateClasses()
				}
			}, {
				key: "_updateClasses",
				value: function() {
					this._parent && Ft(this._parent, [
						[this._classes.base, !0],
						[this._classes.empty, this._empty],
						[this._classes.focus, this._focused],
						[this._classes.invalid, this._invalid],
						[this._classes.complete, this._complete],
						[this._classes.webkitAutofill, this._autofilled]
					])
				}
			}, {
				key: "_removeClasses",
				value: function() {
					this._parent && Ft(this._parent, [
						[this._classes.base, !1],
						[this._classes.empty, !1],
						[this._classes.focus, !1],
						[this._classes.invalid, !1],
						[this._classes.complete, !1],
						[this._classes.webkitAutofill, !1]
					])
				}
			}, {
				key: "_findPossibleLabel",
				value: function() {
					var e = this._parent;
					if(e) {
						var t = e.getAttribute("id"),
							n = void 0;
						if(t && (n = document.querySelector("label[for=" + t + "]")), n) e.addEventListener("click", this.focus);
						else
							for(n = n || e.parentElement; n && "LABEL" !== n.nodeName;) n = n.parentElement;
						n ? (this._label = n, n.addEventListener("click", this.focus)) : e.addEventListener("click", this.focus)
					}
				}
			}, {
				key: "_changeClasses",
				value: function(e) {
					var t = {};
					return Object.keys(e).forEach(function(n) {
						if(!Jo[n]) throw new _e(n + " is not a customizable class name.\nYou can customize: " + Object.keys(Jo).join(", "));
						var r = e[n] || Jo[n];
						t[n] = r.replace(/\./g, " ")
					}), this._classes = Ho({}, this._classes, t), this
				}
			}, {
				key: "_emitEvent",
				value: function(e, t) {
					return this._emit(e, Ho({
						elementType: this._componentName
					}, t))
				}
			}, {
				key: "_setupEvents",
				value: function() {
					var e = this;
					this._frame._on("redirectfocus", function(t) {
						var n = t.focusDirection,
							r = kr(e._component, n);
						r && r.focus()
					}), this._frame._on("focus", function() {
						e._focused = !0, e._updateClasses()
					}), this._frame._on("blur", function() {
						e._focused = !1, e._updateClasses(), e._lastSubmittedAt && "paymentRequestButton" === e._componentName && (e._controller.report("payment_request_button.sheet_visible", {
							latency: new Date - e._lastSubmittedAt
						}), e._lastSubmittedAt = null)
					}), this._frame._on("submit", function() {
						if("paymentRequestButton" === e._componentName) {
							e._lastSubmittedAt = new Date;
							var t = !1,
								n = !1;
							e._emitEvent("click", {
								preventDefault: function() {
									e._controller.report("payment_request_button.default_prevented"), t && e._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."), n = !0
								}
							}), !n && e._paymentRequest && (e._paymentRequest._elementShow(), t = !0)
						} else e._emitEvent("submit"), e._formSubmit()
					}), ["ready", "focus", "blur", "escape"].forEach(function(t) {
						e._frame._on(t, function() {
							e._emitEvent(t)
						})
					}), this._frame._on("change", function(t) {
						var n = {};
						["error", "value", "empty", "complete"].concat(Q(Xn[e._componentName] || [])).forEach(function(e) {
							return n[e] = t[e]
						}), e._emitEvent("change", n), e._empty = n.empty, e._invalid = !!n.error, e._complete = n.complete, e._updateClasses()
					}), this._frame._on("__privateIntegrationError", function(t) {
						var n = t.message;
						e._emitEvent("__privateIntegrationError", {
							message: n
						})
					}), this._frame._on("dimensions", function(t) {
						if(e._parent) {
							var n = Rr(e._parent, null);
							if(n) {
								var r = parseFloat(n.getPropertyValue("height")),
									o = t.height;
								if("border-box" === n.getPropertyValue("box-sizing")) {
									var i = parseFloat(n.getPropertyValue("padding-top")),
										a = parseFloat(n.getPropertyValue("padding-bottom"));
									r = r - parseFloat(n.getPropertyValue("border-top")) - parseFloat(n.getPropertyValue("border-bottom")) - i - a
								}
								0 !== r && Qo(r) < Qo(o) && e._controller.report("wrapper_height_mismatch", {
									height: o,
									outer_height: r
								});
								var s = e._component.getBoundingClientRect().height;
								0 !== s && 0 !== o && Qo(s) !== Qo(o) && (e._frame.updateStyle({
									height: o + "px"
								}), e._controller.report("iframe_height_update", {
									height: o,
									calculated_height: s
								}))
							}
						}
					}), this._frame._on("autofill", function() {
						if(e._parent) {
							var t = e._parent.style.backgroundColor,
								n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
							e._lastBackgroundColor = n ? e._lastBackgroundColor : t, e._parent.style.backgroundColor = "#faffbd", e._autofilled = !0, e._updateClasses()
						}
					}), this._frame._on("autofill-cleared", function() {
						e._autofilled = !1, e._parent && (e._parent.style.backgroundColor = e._lastBackgroundColor), e._updateClasses()
					})
				}
			}, {
				key: "_handleOutsideClick",
				value: function() {
					this._secondaryFrame && this._secondaryFrame.send({
						action: "stripe-outside-click",
						payload: {}
					})
				}
			}, {
				key: "_createSecondFrame",
				value: function(e, t, n) {
					var r = this._controller.createSecondaryElementFrame(e, Ho({}, n, {
						componentName: t
					}));
					return r && r.on && r.on("height-change", function(e) {
						r.updateStyle({
							height: e.height + "px"
						})
					}), r
				}
			}, {
				key: "_createComponent",
				value: function(e, t) {
					this._createElement(e, t), this._setupEvents(), this._updateFrameHeight(e, !0)
				}
			}, {
				key: "_updateFrameHeight",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if("paymentRequestButton" === this._componentName) {
						var n = e.style && e.style.paymentRequestButton || {},
							r = n.height,
							o = "string" == typeof r ? r : void 0;
						(t || o) && (this._frame.updateStyle({
							height: o || this._lastHeight || "40px"
						}), this._lastHeight = o || this._lastHeight)
					} else {
						var i = e.style && e.style.base || {},
							a = i.lineHeight,
							s = i.fontSize,
							u = i.padding,
							c = "string" != typeof a || isNaN(parseFloat(a)) ? void 0 : a,
							l = "string" == typeof s ? s : void 0,
							p = "string" == typeof u ? u : void 0;
						if(l && !Zo(l) && this._controller.warn("The fontSize style you specified (" + l + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."), t || c || l) {
							var f = -1 === St.indexOf(this._componentName) ? void 0 : p || this._lastPadding,
								d = Cr(c || this._lastHeight, l || this._lastFontSize, f);
							this._frame.updateStyle({
								height: d
							}), this._lastFontSize = l || this._lastFontSize, this._lastHeight = c || this._lastHeight, this._lastPadding = f
						}
					}
				}
			}, {
				key: "_createElement",
				value: function(e, t) {
					var n = this,
						r = (e.classes, e.controller, e.paymentRequest, G(e, ["classes", "controller", "paymentRequest"])),
						o = document.createElement("div");
					o.className = "__PrivateStripeElement";
					var i = document.createElement("input");
					i.className = "__PrivateStripeElement-input", i.setAttribute("aria-hidden", "true"), i.disabled = !0;
					var a = document.createElement("input");
					a.className = "__PrivateStripeElement-safariInput", a.setAttribute("aria-hidden", "true"), a.setAttribute("tabindex", "-1"), Bt(o, $o), Bt(i, Go), Bt(a, Go);
					var s = Rr(document.body),
						u = !!s && "rtl" === s.getPropertyValue("direction"),
						c = Gn[t],
						l = Ho({}, r, {
							rtl: u
						}),
						p = this._controller.createElementFrame(c, l);
					if(p._on("load", function() {
							i.disabled = !1
						}), i.addEventListener("focus", function() {
							p.focus()
						}), p.appendTo(o), er[t]) {
						var f = er[t].secondary;
						this._secondaryFrame = this._createSecondFrame(c, f, Ho({}, l, {
							primaryElementType: t
						})), this._secondaryFrame.appendTo(o), window.addEventListener("click", function() {
							return n._handleOutsideClick()
						})
					}
					o.appendChild(i), o.appendChild(a), this._component = o, this._frame = p, this._fakeInput = i
				}
			}]), t
		}(Gt),
		ei = function() {
			var e = this;
			this.mount = Kt(function(t) {
				e._checkDestroyed();
				var n = void 0;
				if(!t) throw new _e("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
				if("string" == typeof t) {
					var r = document.querySelectorAll(t);
					if(r.length > 1 && e._controller.warn("The selector you specified (" + t + ") applies to " + r.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !r.length) throw new _e("The selector you specified (" + t + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
					n = r[0]
				} else {
					if(!t.appendChild) throw new _e("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
					n = t
				}
				if("INPUT" === n.nodeName) throw new _e("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
				if(n.children.length && e._controller.warn("This Element will be mounted to a DOM element that contains child nodes."), e._paymentRequest) {
					if(!e._paymentRequest._canMakePaymentCalled) throw new _e("For paymentRequest Elements, you must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before mounting the Element.");
					if(!e._paymentRequest._cachedCanMakePayment) throw new _e("The " + e._componentName + " Element is not available in the current environment.");
					e._mountToParent(n)
				} else e._mountToParent(n)
			}), this.update = Kt(function(t) {
				e._checkDestroyed();
				var n = at(Vo, t || {}, "element.update()"),
					r = n.value;
				if(n.warnings.forEach(function(t) {
						return e._controller.warn(t)
					}), r) {
					var o = r.classes,
						i = G(r, ["classes"]);
					e._changeClasses(o || {}), e._updateFrameHeight(r), Object.keys(i).length && (e._frame.update(i), e._secondaryFrame && e._secondaryFrame.update(i))
				}
				return e
			}), this.focus = Kt(function(t) {
				return e._checkDestroyed(), t && t.preventDefault(), document.activeElement && document.activeElement.blur && document.activeElement.blur(), e._fakeInput.focus(), e
			}), this.blur = Kt(function() {
				return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e
			}), this.clear = Kt(function() {
				return e._checkDestroyed(), e._frame.clear(), e
			}), this.unmount = Kt(function() {
				e._checkDestroyed();
				var t = e._component.parentElement,
					n = e._label;
				return t && (t.removeChild(e._component), t.removeEventListener("click", e.focus), e._removeClasses()), e._parent = null, n && (n.removeEventListener("click", e.focus), e._label = null), e._secondaryFrame && (e._secondaryFrame.unmount(), window.removeEventListener("click", e._handleOutsideClick)), e._fakeInput.disabled = !0, e._frame.unmount(), e
			}), this.destroy = Kt(function() {
				return e._checkDestroyed(), e.unmount(), e._destroyed = !0, e._emitEvent("destroy"), e
			}), this._formSubmit = function() {
				for(var t = e._component.parentElement; t && "FORM" !== t.nodeName;) t = t.parentElement;
				if(t) {
					var n = document.createEvent("Event");
					n.initEvent("submit", !0, !0), t.dispatchEvent(n)
				}
			}
		},
		ti = Xo,
		ni = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		ri = {
			locale: Be(Je),
			fonts: Be(Xe(Ze))
		},
		oi = ot(ri),
		ii = function e(t, n) {
			var r = this;
			ne(this, e), ai.call(this);
			var o = at(oi, n || {}, "elements()"),
				i = o.value;
			o.warnings.forEach(function(e) {
				return t.warn(e)
			}), t.report("elements", {
				options: n
			}), this._elements = [], this._id = Pt("elements"), this._controller = t;
			var a = i.locale,
				s = i.fonts || [];
			this._controller.action.fetchLocale({
				locale: a || "auto"
			});
			var u = s.filter(function(e) {
					return !e.cssSrc || "string" != typeof e.cssSrc
				}),
				c = s.map(function(e) {
					return e.cssSrc
				}).reduce(function(e, t) {
					return "string" == typeof t ? [].concat(te(e), [t]) : e
				}, []).map(function(e) {
					return st(e) ? e : lt(window.location.href, e)
				});
			return this._pendingFonts = c.length, this._commonOptions = ni({}, i, {
				fonts: u
			}), c.forEach(function(e) {
				if("string" == typeof e) {
					var t = Date.now();
					Er(e).then(function(n) {
						r._controller.report("font.loaded", {
							load_time: Date.now() - t,
							font_count: n.length,
							css_src: e
						});
						var o = n.map(function(t) {
							return ni({}, t, {
								__privateCssSrc: e
							})
						});
						r._controller.action.updateCSSFonts({
							fonts: o,
							groupId: r._id
						}), r._commonOptions = ni({}, r._commonOptions, {
							fonts: [].concat(te(r._commonOptions.fonts ? r._commonOptions.fonts : []), te(o))
						})
					}).catch(function(n) {
						r._controller.report("error.font.not_loaded", {
							load_time: Date.now() - t,
							message: n && n.message && n.message,
							css_src: e
						}), r._controller.warn("Failed to load CSS file at " + e + ".")
					})
				}
			}), this
		},
		ai = function() {
			var e = this;
			this.create = Yt(function(t, n) {
				Or(t, e._elements);
				var r = at(Vo, n || {}, "create()"),
					o = r.value;
				r.warnings.forEach(function(t) {
					return e._controller.warn(t)
				});
				var i = !!e._pendingFonts,
					a = new ti(ni({}, o, e._commonOptions, {
						controller: e._controller,
						componentName: t,
						groupId: e._id,
						wait: i
					}));
				return e._elements = [].concat(te(e._elements), [t]), a._on("destroy", function() {
					e._elements = e._elements.filter(function(e) {
						return e !== t
					})
				}), a
			})
		},
		si = ii,
		ui = function(e, t, n) {
			return window.ApplePaySession ? new Fo(e.report, e.warn, e.action.createApplePaySession, e.action.tokenizeWithData, e.action.createSourceWithData, t, n) : new zo(e, t, n)
		},
		ci = ui,
		li = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if("complete" === window.document.readyState) e();
			else {
				var n = !1,
					r = function() {
						n || (n = !0, e())
					};
				window.addEventListener("DOMContentLoaded", r), window.addEventListener("load", r), t && setTimeout(r, 5e3)
			}
		},
		pi = li,
		fi = {
			payment_pages_beta_1: "payment_pages_beta_1",
			payment_intent_beta_1: "payment_intent_beta_1",
			payment_intent_beta_2: "payment_intent_beta_2",
			payment_intent_beta_3: "payment_intent_beta_3"
		},
		di = Object.keys(fi),
		hi = function(e, t) {
			return e.indexOf(t) >= 0
		},
		yi = {
			card: "card",
			ideal: "ideal",
			sepa_debit: "sepa_debit",
			three_d_secure: "three_d_secure"
		},
		mi = (ye = {}, re(ye, _t.card, yi.card), re(ye, _t.cardNumber, yi.card), re(ye, _t.cardExpiry, yi.card), re(ye, _t.cardCvc, yi.card), re(ye, _t.postalCode, yi.card), re(ye, _t.iban, yi.sepa_debit), re(ye, _t.idealBank, yi.ideal), ye),
		_i = function(e) {
			return -1 === bt.indexOf(e)
		},
		vi = function(e, t) {
			return null != t ? t : _i(e) ? null : mi[e] || null
		},
		bi = function(e) {
			var t = e.name,
				n = e.value,
				r = e.expiresIn,
				o = e.path,
				i = e.domain,
				a = new Date,
				s = r || 31536e6;
			a.setTime(a.getTime() + s);
			var u = o || "/",
				c = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
				l = encodeURIComponent(t) + "=" + c + ";expires=" + a.toGMTString() + ";path=" + u;
			i && (l += ";domain=" + i), document.cookie = l
		},
		gi = function(e) {
			var t = we(document.cookie.split("; "), function(t) {
				var n = t.indexOf("=");
				return decodeURIComponent(t.substr(0, n)) === e
			});
			if(t) {
				var n = t.indexOf("=");
				return decodeURIComponent(t.substr(n + 1))
			}
			return null
		},
		wi = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		Ei = "__privateStripeMetricsController",
		Oi = {
			MERCHANT: "merchant",
			SESSION: "session"
		},
		Si = function() {
			function e() {
				oe(this, e), this._muid = this._getID(Oi.MERCHANT), this._sid = this._getID(Oi.SESSION), this._id = Pt(Ei), this._controllerFrame = new cn(ft.METRICS_CONTROLLER, this._id, {
					autoload: !0,
					queryString: this._buildFrameQueryString()
				}), this._establishMessageChannel(), this._startIntervalCheck(), setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random())
			}
			return wi(e, [{
				key: "ids",
				value: function() {
					return {
						guid: this._guid || "NA",
						muid: this._muid || "NA",
						sid: this._sid || "NA"
					}
				}
			}, {
				key: "_establishMessageChannel",
				value: function() {
					var e = this;
					window.addEventListener("message", function(t) {
						try {
							var n = JSON.parse(t.data),
								r = n.originatingScript,
								o = n.payload;
							"m" === r && (e._guid = o)
						} catch(e) {}
					})
				}
			}, {
				key: "_startIntervalCheck",
				value: function() {
					var e = this,
						t = window.location.href;
					setInterval(function() {
						var n = window.location.href;
						n !== t && (e.send({
							action: "ping",
							payload: {
								sid: e._getID(Oi.SESSION),
								muid: e._getID(Oi.MERCHANT),
								title: document.title,
								referrer: document.referrer,
								url: document.location.href
							}
						}), t = n)
					}, 5e3)
				}
			}, {
				key: "report",
				value: function(e, t) {
					try {
						this.send({
							action: "track",
							payload: {
								sid: this._getID(Oi.SESSION),
								muid: this._getID(Oi.MERCHANT),
								url: document.location.href,
								source: e,
								data: t
							}
						})
					} catch(e) {}
				}
			}, {
				key: "send",
				value: function(e) {
					var t = yt(ft.METRICS_CONTROLLER);
					Nn(t) && this._controllerFrame.send(e)
				}
			}, {
				key: "_testLatency",
				value: function() {
					var e = this,
						t = [],
						n = new Date,
						r = function r() {
							try {
								var o = new Date;
								t.push(o - n), t.length >= 10 && (e.report("mouse-timings-10", t), document.removeEventListener("mousemove", r)), n = o
							} catch(e) {}
						};
					document.addEventListener("mousemove", r)
				}
			}, {
				key: "_extractMetaReferrerPolicy",
				value: function() {
					var e = document.querySelector("meta[name=referrer]");
					return null != e && e instanceof HTMLMetaElement ? e.content.toLowerCase() : null
				}
			}, {
				key: "_extractUrl",
				value: function(e) {
					var t = document.location.href;
					switch(e) {
						case "origin":
						case "strict-origin":
						case "origin-when-cross-origin":
						case "strict-origin-when-cross-origin":
							return document.location.origin;
						case "unsafe-url":
							return t.split("#")[0];
						default:
							return t
					}
				}
			}, {
				key: "_buildFrameQueryString",
				value: function() {
					var e = this._extractMetaReferrerPolicy(),
						t = this._extractUrl(e),
						n = {
							url: t,
							title: document.title,
							referrer: document.referrer,
							muid: this._muid,
							sid: this._sid,
							preview: xn(t)
						};
					return null != e && (n.metaReferrerPolicy = e), Object.keys(n).map(function(e) {
						return null != n[e] ? e + "=" + encodeURIComponent(n[e].toString()) : null
					}).join("&")
				}
			}, {
				key: "_getID",
				value: function(e) {
					switch(e) {
						case Oi.MERCHANT:
							try {
								var t = gi("__stripe_mid") || jt();
								return bi({
									name: "__stripe_mid",
									value: t,
									domain: "." + document.location.hostname
								}), t
							} catch(e) {
								return "NA"
							}
						case Oi.SESSION:
							try {
								var n = gi("__stripe_sid") || jt();
								return bi({
									name: "__stripe_sid",
									value: n,
									domain: "." + document.location.hostname,
									expiresIn: 18e5
								}), n
							} catch(e) {
								return "NA"
							}
						default:
							throw new Error("Invalid ID type specified: " + e)
					}
				}
			}]), e
		}(),
		ki = Si,
		Pi = function(e) {
			for(var t = 0, n = 0; n < e.length; n++) {
				t = 31 * t + e.charCodeAt(n), t |= 0
			}
			return t.toString()
		},
		ji = Pi,
		Ai = {
			noop: {
				likelihood: .3
			}
		},
		Ci = function(e, t) {
			return e + "-" + t
		},
		Ti = function(e) {
			try {
				window.localStorage.setItem("__stripe-js-v3-features__", JSON.stringify(e))
			} catch(e) {}
		},
		Ri = function() {
			var e = {};
			try {
				e = JSON.parse(window.localStorage.getItem("__stripe-js-v3-features__")) || {}
			} catch(e) {}
			return e
		},
		Ii = function(e) {
			var t = Ri(),
				n = {},
				r = {};
			return Object.keys(Ai).forEach(function(o) {
				if(Ai[o]) {
					var i = Ai[o],
						a = i.likelihood,
						s = i.whitelist,
						u = Ci(o, a);
					if(s && -1 === s.indexOf(ji(e))) n[o] = r[u] = !1;
					else {
						var c = t[u],
							l = Math.random() < a;
						n[o] = r[u] = void 0 !== c ? c : l
					}
				}
			}), Ti(r), n
		},
		qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		Mi = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Ni = function(e, t) {
			switch(e.type) {
				case "object":
					return {
						paymentIntent: e.object
					};
				case "error":
					return {
						error: Mi({}, t ? {
							payment_intent: t
						} : {}, e.error)
					};
				default:
					return ve(e)
			}
		},
		xi = function(e) {
			var t = e.match(/^(pi_[^_]+)_secret_[^-]+$/);
			return t ? {
				id: t[1],
				clientSecret: t[0]
			} : null
		},
		Li = function(e, t) {
			if("string" != typeof e) return Fe("a client_secret string", e, t);
			var n = xi(e);
			return null === n ? Fe("a client secret of the form pi_${id}_secret_${secret}", e, t) : Ne(n, [])
		},
		Fi = function(e, t) {
			if(null == e) return Ne(null);
			var n = e.type,
				r = ae(e, ["type"]),
				o = Mi({}, t, {
					path: [].concat(ie(t.path), ["type"])
				}),
				i = $e(Je, function() {
					return null
				})(n, o);
			return "error" === i.type ? i : Ne({
				type: i.value,
				data: r
			})
		},
		Bi = function(e) {
			return function(t, n) {
				if("object" === (void 0 === t ? "undefined" : qi(t)) && null !== t) {
					var r = t.source,
						o = t.source_data,
						i = ae(t, ["source", "source_data"]);
					if(null != r && "string" != typeof r) {
						var a = Mi({}, n, {
							path: [].concat(ie(n.path), ["source"])
						});
						return Le("string", void 0 === r ? "undefined" : qi(r), a)
					}
					if(null != o && "object" !== (void 0 === o ? "undefined" : qi(o))) {
						var s = Mi({}, n, {
							path: [].concat(ie(n.path), ["source_data"])
						});
						return Le("object", void 0 === o ? "undefined" : qi(o), s)
					}
					var u = Mi({}, n, {
							path: [].concat(ie(n.path), ["source_data"])
						}),
						c = Fi(o, u);
					if("error" === c.type) return c;
					var l = c.value;
					return Ne({
						dataAndType: l,
						source: null == r ? null : r,
						otherParams: Mi({}, e, i)
					})
				}
				return null === t ? Le("object", "null", n) : Le("object", void 0 === t ? "undefined" : qi(t), n)
			}
		},
		Di = function(e) {
			return function(t, n) {
				if(void 0 === t) return Ne({
					dataAndType: null,
					source: null,
					otherParams: {}
				});
				if("object" !== (void 0 === t ? "undefined" : qi(t))) return Le("object", void 0 === t ? "undefined" : qi(t), n);
				if(null === t) return Le("object", "null", n);
				if(e) {
					if(!t.payment_intent) return Ne({
						dataAndType: null,
						source: null,
						otherParams: t
					});
					var r = t.payment_intent,
						o = ae(t, ["payment_intent"]),
						i = Mi({}, n, {
							path: [].concat(ie(n.path), ["payment_intent"])
						});
					return Bi(o)(r, i)
				}
				return t.payment_intent ? xe(new _e("The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.")) : Bi({})(t, n)
			}
		},
		Ui = function(e) {
			return new Mt(function(t, n) {
				setTimeout(function() {
					t({
						type: "error",
						error: {
							code: "redirect_error",
							message: "Failed to redirect to " + e
						}
					})
				}, 1e3), window.top.location.href = e
			})
		},
		zi = function(e, t, n) {
			e.report("redirect_error", {
				initiator: t,
				error: n.error
			})
		},
		Hi = {
			_frame: ot({
				id: Je
			}),
			_componentName: Je
		},
		Wi = ot(Hi),
		Ki = function(e) {
			var t = it(Wi, e, "");
			return "error" === t.type ? null : t.value
		},
		Yi = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		Vi = function(e, t, n) {
			if(null === e) {
				if(null === t) throw new _e(n + ": you must additionally specify which source type to create using source_data in the options.");
				return t
			}
			if(null === t) return e;
			if(t !== e) throw new _e(n + ": you specified a source type of " + t + ", but " + n + " will create a source of type " + e + ".");
			return e
		},
		Ji = function(e, t, n, r, o) {
			var i = it(Wi, r, n);
			if("error" === i.type) return null;
			var a = i.value,
				s = at(Di(e), o, n),
				u = s.value,
				c = u.dataAndType,
				l = u.source,
				p = u.otherParams;
			if(null != l) throw new _e("When calling " + n + " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element.");
			var f = a._componentName,
				d = a._frame.id,
				h = c ? c.type : null,
				y = vi(f, h);
			return {
				confirmMode: {
					tag: "element",
					elementName: f,
					frameId: d,
					sourceType: Vi(t, y, n),
					sourceData: c ? c.data : {}
				},
				otherParams: p
			}
		},
		$i = function(e, t, n, r, o) {
			var i = at(Di(e), r, n),
				a = i.value,
				s = a.dataAndType,
				u = a.source,
				c = a.otherParams;
			if(null !== u && null !== s) throw new _e(n + ": Expected either source or source_data, but not both.");
			if(null !== s) {
				var l = s.type,
					p = s.data;
				return {
					confirmMode: {
						tag: "sourceData",
						sourceType: Vi(t, l, n),
						sourceData: p
					},
					otherParams: c
				}
			}
			return null !== u ? {
				confirmMode: {
					tag: "source",
					source: u
				},
				otherParams: c
			} : {
				confirmMode: {
					tag: "noSource"
				},
				otherParams: c
			}
		},
		Gi = function(e, t, n) {
			return function(r, o) {
				var i = Ji(e, t, n, r, o);
				if(i) return i;
				var a = $i(e, t, n, r);
				if(a) return a;
				throw new _e("Expected: stripe." + n + "(intentSecret, element[, data]) or stripe." + n + "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication")
			}
		},
		Qi = function(e, t) {
			return e.createLightboxFrame(ft.AUTHORIZE_WITH_URL, {
				url: t
			})
		},
		Zi = function(e, t, n) {
			var r = Qi(n, t);
			return r.show(), new Mt(function(e, t) {
				r._once("authorize_with_url_done", function(t) {
					return r.destroy(), e(t)
				})
			})
		},
		Xi = function(e, t, n) {
			if("requires_source_action" !== t.status) return Mt.resolve({
				paymentIntent: t
			});
			var r = t.next_source_action;
			if("authorize_with_url" === r.type && n === yi.card) return Zi(t.client_secret, r.value.url, e);
			if("authorize_with_url" === r.type && n === yi.ideal) {
				var o = function(n) {
					return zi(e, "ideal redirect", n), Ni(n, t)
				};
				return Ui(r.value.url).then(o)
			}
			return Mt.resolve({
				paymentIntent: t
			})
		},
		ea = function(e) {
			switch(e.type) {
				case "error":
					return "payment_intent_unexpected_state" === e.error.code && "requires_source_action" === e.error.payment_intent.status ? {
						type: "object",
						object: e.error.payment_intent
					} : e;
				case "object":
					return e;
				default:
					return ve(e)
			}
		},
		ta = function(e, t) {
			return function(n) {
				var r = ea(n);
				switch(r.type) {
					case "error":
						return Mt.resolve(Ni(n));
					case "object":
						var o = r.object;
						return Xi(e, o, t);
					default:
						return ve(r)
				}
			}
		},
		na = function(e, t) {
			var n = at(Li, e, "retrievePaymentIntent"),
				r = n.value;
			return t.action.retrievePaymentIntent(r).then(Ni)
		},
		ra = function(e, t) {
			return function(n, r, o) {
				var i = at(Li, n, "stripe.confirmPaymentIntent intent secret"),
					a = i.value,
					s = Gi(!1, null, "confirmPaymentIntent")(r, o);
				return e.action.confirmPaymentIntent(Yi({}, s, {
					intentSecret: a,
					expectedType: null,
					mids: t
				})).then(Ni)
			}
		},
		oa = function(e, t, n) {
			return function(r, o, i) {
				var a = at(Li, r, "stripe.handleCardPayment intent secret"),
					s = a.value,
					u = yi.card,
					c = Gi(n, u, "handleCardPayment")(o, i);
				return e.action.confirmPaymentIntent(Yi({}, c, {
					intentSecret: s,
					expectedType: u,
					mids: t
				})).then(ta(e, u))
			}
		},
		ia = function(e, t, n) {
			return function(r, o, i) {
				var a = at(Li, r, "stripe.handleSepaDebitPayment intent secret"),
					s = a.value,
					u = yi.sepa_debit,
					c = Gi(n, u, "handleSepaDebitPayment")(o, i);
				return e.action.confirmPaymentIntent(Yi({}, c, {
					intentSecret: s,
					expectedType: u,
					mids: t
				})).then(ta(e, u))
			}
		},
		aa = function(e, t, n) {
			return function(r, o, i) {
				var a = at(Li, r, "stripe.handleIdealPayment intent secret"),
					s = a.value,
					u = yi.ideal,
					c = Gi(n, u, "handleIdealPayment")(o, i);
				return e.action.confirmPaymentIntent(Yi({}, c, {
					intentSecret: s,
					expectedType: u,
					mids: t
				})).then(ta(e, u))
			}
		},
		sa = function(e) {
			return function(t) {
				var n = at(rt({
						sku: Be(Je),
						plan: Be(Je),
						succeeded_url: Je,
						canceled_url: Je,
						locale: Be(Je)
					}), t, "stripe.redirectToPaymentPage"),
					r = n.value;
				if(r.sku && r.plan) throw new _e("stripe.redirectToPaymentPage: Expected either sku or plan, but not both.");
				if(!r.sku && !r.plan) throw new _e("stripe.redirectToPaymentPage: You must provide either sku or plan.");
				return e.action.redirectToPaymentPage(r).then(function(e) {
					return {
						error: e.error
					}
				})
			}
		},
		ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		ca = function(e) {
			switch(e.type) {
				case "object":
					return {
						token: e.object
					};
				case "error":
					return {
						error: e.error
					};
				default:
					return ve(e)
			}
		},
		la = function(e) {
			return "object" === (void 0 === e ? "undefined" : ua(e)) && null !== e ? e : {}
		},
		pa = function(e, t) {
			return function(n, r) {
				var o = Ki(n);
				if(o) {
					var i = o._frame.id,
						a = o._componentName,
						s = la(r);
					return e.action.tokenizeWithElement({
						frameId: i,
						elementName: a,
						tokenData: s,
						mids: t
					}).then(ca)
				}
				if("string" == typeof n) {
					var u = n,
						c = la(r);
					return e.action.tokenizeWithData({
						elementName: null,
						type: u,
						tokenData: c,
						mids: t
					}).then(ca)
				}
				throw new _e("You must provide a Stripe Element or a valid token type to create a Token.")
			}
		},
		fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		da = function(e) {
			if(!e || "object" !== (void 0 === e ? "undefined" : fa(e))) return null;
			var t = e.type,
				n = se(e, ["type"]);
			return {
				type: "string" == typeof t ? t : null,
				sourceData: n
			}
		},
		ha = function(e) {
			switch(e.type) {
				case "object":
					return {
						source: e.object
					};
				case "error":
					return {
						error: e.error
					};
				default:
					return ve(e)
			}
		},
		ya = {
			source: ot({
				id: He("src_"),
				client_secret: He("src_client_secret_")
			})
		},
		ma = ot(ya),
		_a = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		va = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		ba = ot({
			apiKey: Je,
			stripeAccount: Be(Je),
			__privateForcedFeatures: Be(Ze),
			__privateApiUrl: Be(Je),
			betas: Be(Xe(Ke.apply(void 0, function(e) {
				if(Array.isArray(e)) {
					for(var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}(di))))
		}),
		ga = null,
		wa = function() {
			return ga || (ga = new ki), ga
		},
		Ea = function() {
			function e(t, n) {
				var r = this;
				ce(this, e), Oa.call(this);
				var o = at(ba, t || {}, "Stripe()"),
					i = o.value,
					a = o.warnings,
					s = i.apiKey,
					u = i.stripeAccount,
					c = i.__privateForcedFeatures,
					l = i.__privateApiUrl,
					p = i.betas;
				if("" === s) throw new _e("Please call Stripe() with your publishable key. You used an empty string.");
				if(0 === s.indexOf("sk_")) throw new _e("You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.");
				pi(function() {
					r._ec || (r._ec = wa())
				}), this._apiKey = s, this._keyMode = To(s);
				var f = this._initFeatures(c || {});
				this._betas = p || [], this._stripeAccount = u || null, this._controller = new sr({
					apiKey: s,
					__privateApiUrl: l,
					stripeAccount: u,
					stripeJsId: e.stripeJsId,
					features: f
				}), a.forEach(function(e) {
					return r._controller.warn(e)
				}), this._ensureHTTPS(), this._ensureStripeHosted(n), this._attachPaymentIntentMethods(this._betas), this._attachPaymentPagesMethods(this._betas)
			}
			return va(e, [{
				key: "_attachPaymentIntentMethods",
				value: function(e) {
					var t = this,
						n = hi(this._betas, fi.payment_intent_beta_1) || hi(this._betas, fi.payment_intent_beta_2),
						r = this._mids() || null,
						o = Kt(function(e) {
							return na(e, t._controller)
						}),
						i = Vt(ra(this._controller, r)),
						a = Vt(oa(this._controller, r, n)),
						s = Vt(ia(this._controller, r, n)),
						u = Vt(aa(this._controller, r, n));
					hi(this._betas, fi.payment_intent_beta_1) ? (this.retrievePaymentIntent = o, this.fulfillPaymentIntent = a) : (hi(this._betas, fi.payment_intent_beta_2) || hi(this._betas, fi.payment_intent_beta_3)) && (this.retrievePaymentIntent = o, this.handleCardPayment = a), hi(this._betas, fi.payment_intent_beta_3) && (this.confirmPaymentIntent = i, this.handleSepaDebitPayment = s, this.handleIdealPayment = u)
				}
			}, {
				key: "_attachPaymentPagesMethods",
				value: function(e) {
					if(hi(this._betas, fi.payment_pages_beta_1)) {
						var t = sa(this._controller);
						this.redirectToPaymentPage = t
					}
				}
			}, {
				key: "_ensureHTTPS",
				value: function() {
					var e = window.location.protocol,
						t = -1 !== ["https:", "file:"].indexOf(e),
						n = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname),
						r = this._keyMode === Co.live,
						o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/stripe-js/elements/quickstart#http-requirements";
					if(!t) {
						if(r && !n) throw this._controller.report("user_error.non_https_error", {
							protocol: e
						}), new _e(o);
						!r || n ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o)
					}
				}
			}, {
				key: "_ensureStripeHosted",
				value: function(e) {
					if(!e) throw this._controller.report("user_error.self_hosted"), new _e("Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs")
				}
			}, {
				key: "_mids",
				value: function() {
					return this._ec ? this._ec.ids() : void 0
				}
			}, {
				key: "_initFeatures",
				value: function(e) {
					var t = Ii(this._apiKey),
						n = _a({}, t);
					return e && (Object.keys(e).forEach(function(e) {
						Ai.hasOwnProperty(e) || console.error('Unrecognized feature "' + e + '" passed to "forcedFeatures".')
					}), Object.keys(t).forEach(function(t) {
						void 0 !== e[t] && (n = _a({}, n, ue({}, t, !!e[t])))
					})), n
				}
			}]), e
		}();
	Ea.version = 3, Ea.stripeJsId = jt();
	var Oa = function() {
			var e = this;
			this.elements = Kt(function(t) {
				return new si(e._controller, t)
			}), this.createToken = Yt(function(t, n) {
				var r = e._mids() || null;
				return pa(e._controller, r)(t, n)
			}), this.createSource = Yt(function(t, n) {
				var r = Ki(t);
				if(r) {
					var o = r._frame.id,
						i = r._componentName,
						a = da(n);
					if(!a && _i(i)) return Mt.reject(new _e("Please provide Source creation parameters to createSource."));
					var s = a || {
							type: null,
							sourceData: {}
						},
						u = s.type,
						c = s.sourceData;
					return e._controller.action.createSourceWithElement({
						frameId: o,
						elementName: i,
						type: u,
						sourceData: c,
						mids: e._mids() || null
					}).then(ha)
				}
				var l = da(t);
				if(!l) return Mt.reject(new _e("Please provide either an Element or Source creation parameters to createSource."));
				var p = l.type,
					f = l.sourceData;
				return p ? e._controller.action.createSourceWithData({
					elementName: null,
					type: p,
					sourceData: f,
					mids: e._mids() || null
				}).then(ha) : Mt.reject(new _e("Please provide a source type to createSource."))
			}), this.retrieveSource = Kt(function(t) {
				var n = at(ma, {
						source: t
					}, "retrieveSource"),
					r = n.value;
				return n.warnings.forEach(function(t) {
					return e._controller.warn(t)
				}), e._controller.action.retrieveSource(r).then(ha)
			}), this.paymentRequest = Kt(function(t) {
				return Ro(e._keyMode), ci(e._controller, {
					apiKey: e._apiKey,
					stripeAccount: e._stripeAccount
				}, t)
			})
		},
		Sa = Ea,
		ka = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		Pa = Object.assign || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		ja = function() {
			if(document.currentScript) {
				var e = ut(document.currentScript.src);
				return !e || xn(e.origin)
			}
			return !0
		}(),
		Aa = function(e, t) {
			return new Sa(Pa({
				apiKey: e
			}, t && "object" === (void 0 === t ? "undefined" : ka(t)) ? t : {}), ja)
		};
	Aa.version = Sa.version, window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = Aa : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = Aa;
	t.default = Aa
}, function(e, t, n) {
	"use strict";

	function r(e) {
		var t = new o(o._61);
		return t._81 = 1, t._65 = e, t
	}
	var o = n(3);
	e.exports = o;
	var i = r(!0),
		a = r(!1),
		s = r(null),
		u = r(void 0),
		c = r(0),
		l = r("");
	o.resolve = function(e) {
		if(e instanceof o) return e;
		if(null === e) return s;
		if(void 0 === e) return u;
		if(!0 === e) return i;
		if(!1 === e) return a;
		if(0 === e) return c;
		if("" === e) return l;
		if("object" == typeof e || "function" == typeof e) try {
			var t = e.then;
			if("function" == typeof t) return new o(t.bind(e))
		} catch(e) {
			return new o(function(t, n) {
				n(e)
			})
		}
		return r(e)
	}, o.all = function(e) {
		var t = Array.prototype.slice.call(e);
		return new o(function(e, n) {
			function r(a, s) {
				if(s && ("object" == typeof s || "function" == typeof s)) {
					if(s instanceof o && s.then === o.prototype.then) {
						for(; 3 === s._81;) s = s._65;
						return 1 === s._81 ? r(a, s._65) : (2 === s._81 && n(s._65), void s.then(function(e) {
							r(a, e)
						}, n))
					}
					var u = s.then;
					if("function" == typeof u) {
						return void new o(u.bind(s)).then(function(e) {
							r(a, e)
						}, n)
					}
				}
				t[a] = s, 0 == --i && e(t)
			}
			if(0 === t.length) return e([]);
			for(var i = t.length, a = 0; a < t.length; a++) r(a, t[a])
		})
	}, o.reject = function(e) {
		return new o(function(t, n) {
			n(e)
		})
	}, o.race = function(e) {
		return new o(function(t, n) {
			e.forEach(function(e) {
				o.resolve(e).then(t, n)
			})
		})
	}, o.prototype.catch = function(e) {
		return this.then(null, e)
	}
}, function(e, t, n) {
	"use strict";

	function r() {}

	function o(e) {
		try {
			return e.then
		} catch(e) {
			return _ = e, v
		}
	}

	function i(e, t) {
		try {
			return e(t)
		} catch(e) {
			return _ = e, v
		}
	}

	function a(e, t, n) {
		try {
			e(t, n)
		} catch(e) {
			return _ = e, v
		}
	}

	function s(e) {
		if("object" != typeof this) throw new TypeError("Promises must be constructed via new");
		if("function" != typeof e) throw new TypeError("not a function");
		this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== r && y(e, this)
	}

	function u(e, t, n) {
		return new e.constructor(function(o, i) {
			var a = new s(r);
			a.then(o, i), c(e, new h(t, n, a))
		})
	}

	function c(e, t) {
		for(; 3 === e._81;) e = e._65;
		if(s._10 && s._10(e), 0 === e._81) return 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t);
		l(e, t)
	}

	function l(e, t) {
		m(function() {
			var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
			if(null === n) return void(1 === e._81 ? p(t.promise, e._65) : f(t.promise, e._65));
			var r = i(n, e._65);
			r === v ? f(t.promise, _) : p(t.promise, r)
		})
	}

	function p(e, t) {
		if(t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
		if(t && ("object" == typeof t || "function" == typeof t)) {
			var n = o(t);
			if(n === v) return f(e, _);
			if(n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void d(e);
			if("function" == typeof n) return void y(n.bind(t), e)
		}
		e._81 = 1, e._65 = t, d(e)
	}

	function f(e, t) {
		e._81 = 2, e._65 = t, s._97 && s._97(e, t), d(e)
	}

	function d(e) {
		if(1 === e._45 && (c(e, e._54), e._54 = null), 2 === e._45) {
			for(var t = 0; t < e._54.length; t++) c(e, e._54[t]);
			e._54 = null
		}
	}

	function h(e, t, n) {
		this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
	}

	function y(e, t) {
		var n = !1,
			r = a(e, function(e) {
				n || (n = !0, p(t, e))
			}, function(e) {
				n || (n = !0, f(t, e))
			});
		n || r !== v || (n = !0, f(t, _))
	}
	var m = n(4),
		_ = null,
		v = {};
	e.exports = s, s._10 = null, s._97 = null, s._61 = r, s.prototype.then = function(e, t) {
		if(this.constructor !== s) return u(this, e, t);
		var n = new s(r);
		return c(this, new h(e, t, n)), n
	}
}, function(e, t, n) {
	"use strict";
	(function(t) {
		function n(e) {
			a.length || (i(), s = !0), a[a.length] = e
		}

		function r() {
			for(; u < a.length;) {
				var e = u;
				if(u += 1, a[e].call(), u > c) {
					for(var t = 0, n = a.length - u; t < n; t++) a[t] = a[t + u];
					a.length -= u, u = 0
				}
			}
			a.length = 0, u = 0, s = !1
		}

		function o(e) {
			return function() {
				function t() {
					clearTimeout(n), clearInterval(r), e()
				}
				var n = setTimeout(t, 0),
					r = setInterval(t, 50)
			}
		}
		e.exports = n;
		var i, a = [],
			s = !1,
			u = 0,
			c = 1024,
			l = void 0 !== t ? t : self,
			p = l.MutationObserver || l.WebKitMutationObserver;
		i = "function" == typeof p ? function(e) {
			var t = 1,
				n = new p(e),
				r = document.createTextNode("");
			return n.observe(r, {
					characterData: !0
				}),
				function() {
					t = -t, r.data = t
				}
		}(r) : o(r), n.requestFlush = i, n.makeRequestCallFromTimer = o
	}).call(t, n(5))
}, function(e, t) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch(e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t, n) {
	var r, o;
	! function() {
		"use strict";
		var n = function() {
			function e() {}

			function t(e, t) {
				for(var n = t.length, r = 0; r < n; ++r) i(e, t[r])
			}

			function n(e, t) {
				e[t] = !0
			}

			function r(e, t) {
				for(var n in t) s.call(t, n) && (e[n] = !!t[n])
			}

			function o(e, t) {
				for(var n = t.split(u), r = n.length, o = 0; o < r; ++o) e[n[o]] = !0
			}

			function i(e, i) {
				if(i) {
					var a = typeof i;
					"string" === a ? o(e, i) : Array.isArray(i) ? t(e, i) : "object" === a ? r(e, i) : "number" === a && n(e, i)
				}
			}

			function a() {
				for(var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
				var i = new e;
				t(i, r);
				var a = [];
				for(var s in i) i[s] && a.push(s);
				return a.join(" ")
			}
			e.prototype = Object.create(null);
			var s = {}.hasOwnProperty,
				u = /\s+/;
			return a
		}();
		void 0 !== e && e.exports ? e.exports = n : (r = [], void 0 !== (o = function() {
			return n
		}.apply(t, r)) && (e.exports = o))
	}()
}, function(e, t) {}]);