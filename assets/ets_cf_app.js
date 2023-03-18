// ! function() {
// 	"use strict";
// 	var e = ["DAYS", "MONTHS", "YEARS"],
// 		t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
// 		o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 	function n(t, o) {
// 		o = o || {};
// 		var n = {
// 			defaultView: e[0],
// 			dateFormat: "dd/mm/yyyy",
// 			timeFormat: "HH:MM:SS",
// 			showDate: !0,
// 			showTime: !1,
// 			paddingX: 5,
// 			paddingY: 5,
// 			direction: "TOP"
// 		};
// 		if (!t) throw TypeError("input element or selector required for contructor");
// 		if (Object.getPrototypeOf(t) === String.prototype) {
// 			var i = document.querySelectorAll(t);
// 			if (!i[0]) throw Error('"' + t + '" not found.');
// 			t = i[0]
// 		}
// 		this.config = b(o, n), this.dateFormat = this.config.dateFormat, this.timeFormat = this.config.timeFormat, this.dateFormatRegEx = new RegExp("yyyy|yy|mm|dd", "gi"), this.timeFormatRegEx = new RegExp("hh|mm|ss|a", "gi"), this.inputElem = t, this.dtbox = null, this.setup()
// 	}

// 	function i(e, o) {
// 		var n = this,
// 			i = {},
// 			s = {};

// 		function c(e, t) {
// 			return {
// 				get: function() {
// 					var o = s[e];
// 					return void 0 === o ? t : o
// 				},
// 				set: function(t) {
// 					var o = n.state,
// 						c = i[e] || [];
// 					s[e] = t;
// 					for (var r = 0; r < c.length; r++) c[r].bind(n)(s, o)
// 				}
// 			}
// 		}
// 		Object.defineProperties(this, {
// 			visible: c("visible", !1),
// 			bodyType: c("bodyType", o.config.defaultView),
// 			value: c("value"),
// 			year: c("year", 0),
// 			month: c("month", 0),
// 			day: c("day", 0),
// 			hours: c("hours", 0),
// 			minutes: c("minutes", 0),
// 			seconds: c("seconds", 0),
// 			cancelBlur: c("cancelBlur", 0),
// 			addHandler: {
// 				value: function(e, t) {
// 					if (!e || !t) return !1;
// 					i[e] || (i[e] = []), i[e].push(t)
// 				}
// 			},
// 			month_long: {
// 				get: function() {
// 					return t[n.month]
// 				}
// 			},
// 			month_short: {
// 				get: function() {
// 					return n.month_long.slice(0, 3)
// 				}
// 			},
// 			state: {
// 				get: function() {
// 					return Object.assign({}, s)
// 				}
// 			},
// 			time: {
// 				get: function() {
// 					return 60 * n.hours * 60 * 1e3 + 60 * n.minutes * 1e3 + 1e3 * n.seconds
// 				}
// 			}
// 		}), this.el = {}, this.settings = o, this.elem = e, this.setup()
// 	}

// 	function s(e) {
// 		var t = e.getBoundingClientRect(),
// 			o = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
// 			n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
// 		return {
// 			left: t.left + o,
// 			top: t.top + n
// 		}
// 	}

// 	function c(e) {
// 		for (; e.children.length;) e.removeChild(e.children[0])
// 	}

// 	function r(e, t) {
// 		try {
// 			return t.appendChild(e), e
// 		} catch (e) {
// 			console.trace(e)
// 		}
// 	}

// 	function a() {
// 		this._funcs = {}
// 	}

// 	function l(e, t, o, n) {
// 		var i, s, c = {
// 				canSkip: new a,
// 				updateValue: new a
// 			},
// 			r = (i = Object.keys(o), s = t, i.sort((function(e, t) {
// 				var o = s.indexOf(e),
// 					n = s.indexOf(t),
// 					i = 0;
// 				return o < n ? i = -1 : n < o ? i = 1 : e.length > t.length ? i = -1 : t.length > e.length && (i = 1), i
// 			}))),
// 			l = function(e, t) {
// 				for (var o = [], n = 0, i = 0; i < e.length; i++) {
// 					var s = e[i];
// 					t.slice(n).indexOf(s) > -1 && (n += s.length, o.push(s))
// 				}
// 				return o
// 			}(r, t),
// 			_ = 0;
// 		n && n(c);
// 		for (var d = 0; d < r.length; d++) {
// 			var f = r[d],
// 				m = t.indexOf(f),
// 				p = _,
// 				u = null,
// 				b = !1,
// 				h = c.canSkip.get(f);
// 			_ = _ || m;
// 			for (var g = 0; g < h.length; g++)
// 				if (h[g](o)) {
// 					b = !0;
// 					break
// 				} if (m > -1 && !b) {
// 				var v = null,
// 					y = _ + f.length,
// 					S = -1,
// 					$ = d + 1;
// 				for (p += f.length; - 1 == S && $ < r.length;) {
// 					var x = r[$];
// 					$ += 1, -1 !== l.indexOf(x) && (S = x ? t.indexOf(x) : -1)
// 				}
// 				if (S > -1 && (v = t.slice(y, S))) {
// 					var C = e.slice(_).indexOf(v);
// 					C && C > -1 && (p = (y = C + _) + v.length)
// 				}
// 				u = parseInt(e.slice(_, y));
// 				h = c.updateValue.get(f);
// 				for (var T = 0; T < h.length; T++) u = h[T](u, o, _, y)
// 			}
// 			o[f] = {
// 				index: _,
// 				value: u
// 			}, _ = p
// 		}
// 		return o
// 	}

// 	function _(e, t) {
// 		var o = {
// 				yyyy: null,
// 				yy: null,
// 				mm: null,
// 				dd: null
// 			},
// 			n = (t.dateFormat || "").toLowerCase();
// 		if (!n) throw new TypeError("dateFormat not found (" + t.dateFormat + ")");
// 		var i = (o = l(e, n, o, (function(e) {
// 				e.canSkip.add("yy", (function(e) {
// 					return e.yyyy.value
// 				})), e.updateValue.add("yy", (function(e) {
// 					return 100 * Math.floor((new Date).getFullYear() / 100) + e
// 				}))
// 			}))).yyyy.value || o.yy.value,
// 			s = o.mm.value - 1,
// 			c = o.dd.value;
// 		return new Date(i, s, c)
// 	}

// 	function d(e, t) {
// 		var o = (t.timeFormat || "").toLowerCase();
// 		if (!o) throw new TypeError("timeFormat not found (" + t.timeFormat + ")");
// 		var n, i = (n = l(e, o, n = {
// 				hh: null,
// 				mm: null,
// 				ss: null,
// 				a: null
// 			}, (function(t) {
// 				t.updateValue.add("a", (function(t, o, n, i) {
// 					return e.slice(n, n + 2)
// 				}))
// 			}))).hh.value,
// 			s = n.mm.value,
// 			c = n.ss.value,
// 			r = n.a.value,
// 			a = r ? r.toLowerCase() : r;
// 		return r && ["am", "pm"].indexOf(a) > -1 && ("am" == a && 12 == i ? i = 0 : "pm" == a && (i += 12)), 60 * i * 60 * 1e3 + 60 * s * 1e3 + 1e3 * c
// 	}

// 	function f(e, t) {
// 		var o = t.dateFormat.toLowerCase(),
// 			n = e.getDate(),
// 			i = e.getMonth() + 1,
// 			s = e.getFullYear(),
// 			c = s % 100,
// 			r = {
// 				dd: n < 10 ? "0" + n : n,
// 				mm: i < 10 ? "0" + i : i,
// 				yyyy: s,
// 				yy: c < 10 ? "0" + c : c
// 			};
// 		return o.replace(t.dateFormatRegEx, (function(e) {
// 			return r[e]
// 		}))
// 	}

// 	function m(e, t) {
// 		var o = t.timeFormat,
// 			n = o.toLowerCase(),
// 			i = e.getHours(),
// 			s = e.getMinutes(),
// 			c = e.getSeconds(),
// 			r = null,
// 			a = null;
// 		n.indexOf("a") > -1 && (r = i >= 12 ? "pm" : "am", r = o.indexOf("A") > -1 ? r.toUpperCase() : r, a = 0 == i ? "12" : i > 12 ? i % 12 : i);
// 		var l = {
// 			hh: r ? a : i < 10 ? "0" + i : i,
// 			mm: s < 10 ? "0" + s : s,
// 			ss: c < 10 ? "0" + c : c,
// 			a: r
// 		};
// 		return n.replace(t.timeFormatRegEx, (function(e) {
// 			return l[e]
// 		}))
// 	}

// 	function p(e, t) {
// 		return !(!e || !t) && (e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate())
// 	}

// 	function u(e, t, o) {
// 		o = o || 0;
// 		var n = "" + (parseInt(e) || o),
// 			i = Math.max(t, n.length) - n.length;
// 		return ("" + o).repeat(i) + n
// 	}

// 	function b(e, t) {
// 		for (var o = Object.keys(t), n = 0; n < o.length; n++) {
// 			var i = o[n];
// 			Object.prototype.hasOwnProperty.call(e, i) || (e[i] = t[i])
// 		}
// 		return e
// 	}
// 	n.prototype.setup = function() {
// 		var e = this.inputElemHandler.bind(this);
// 		this.inputElem.addEventListener("focus", e, !1), this.inputElem.addEventListener("blur", e, !1)
// 	}, n.prototype.inputElemHandler = function(e) {
// 		if ("focus" == e.type) this.dtbox || (this.dtbox = new i(e.target, this)), this.dtbox.visible = !0;
// 		else if ("blur" == e.type && this.dtbox && this.dtbox.visible) {
// 			var t = this;
// 			setTimeout((function() {
// 				t.dtbox.cancelBlur > 0 ? t.dtbox.cancelBlur -= 1 : (t.dtbox.visible = !1, t.inputElem.blur())
// 			}), 100)
// 		}
// 	}, i.prototype.setup = function() {
// 		Object.defineProperties(this.el, {
// 			wrapper: {
// 				value: null,
// 				configurable: !0
// 			},
// 			header: {
// 				value: null,
// 				configurable: !0
// 			},
// 			body: {
// 				value: null,
// 				configurable: !0
// 			},
// 			footer: {
// 				value: null,
// 				configurable: !0
// 			}
// 		}), this.setupWrapper(), this.settings.config.showDate && (this.setupHeader(), this.setupBody()), this.settings.config.showTime && this.setupFooter();
// 		var e = this;
// 		this.addHandler("visible", (function(t, o) {
// 			if (t.visible && !o.visible) {
// 				document.body.appendChild(this.el.wrapper);
// 				var n = e.elem.value.trim().split(/\s+/),
// 					i = void 0,
// 					s = 0;
// 				e.settings.config.showDate && (i = _(n[0], e.settings)), e.settings.config.showTime && (s = (s = d(n[n.length - 1], e.settings)) || 0), i && i.getTime() || (i = new Date, i = new Date(i.getFullYear(), i.getMonth(), i.getDate()));
// 				var c = new Date(i.getTime() + s);
// 				e.value = c, e.year = c.getFullYear(), e.month = c.getMonth(), e.day = c.getDate(), e.hours = c.getHours(), e.minutes = c.getMinutes(), e.seconds = c.getSeconds(), e.settings.config.showDate && (e.setHeaderContent(), e.setBodyContent()), e.settings.config.showTime && e.setFooterContent()
// 			} else !t.visible && o.visible && document.body.removeChild(this.el.wrapper)
// 		}))
// 	}, i.prototype.setupWrapper = function() {
// 		if (!this.el.wrapper) {
// 			var e = document.createElement("div");
// 			e.classList.add("date-selector-wrapper"), Object.defineProperty(this.el, "wrapper", {
// 				value: e
// 			})
// 		}
// 		var t = this,
// 			o = document.getElementsByTagName("html")[0];

// 		function n(e) {
// 			var n = s(t.elem),
// 				i = t.settings.config,
// 				c = i.paddingY || 5,
// 				r = i.paddingX || 5,
// 				a = n.top + t.elem.offsetHeight + c,
// 				l = n.left + r,
// 				_ = o.clientHeight - n.top + c;
// 			t.el.wrapper.style.left = `${l}px`, n.top > 300 && "BOTTOM" != i.direction ? (t.el.wrapper.style.bottom = `${_}px`, t.el.wrapper.style.top = "") : (t.el.wrapper.style.top = `${a}px`, t.el.wrapper.style.bottom = "")
// 		}

// 		function i(e) {
// 			t.cancelBlur += 1, setTimeout((function() {
// 				t.elem.focus()
// 			}), 50)
// 		}
// 		n(), this.setPosition = n, this.el.wrapper.addEventListener("mousedown", i, !1), this.el.wrapper.addEventListener("touchstart", i, !1), window.addEventListener("resize", this.setPosition)
// 	}, i.prototype.setupHeader = function() {
// 		if (!this.el.header) {
// 			var e = document.createElement("div"),
// 				t = ["cal-nav-prev", "cal-nav-current", "cal-nav-next"];
// 			e.classList.add("cal-header");
// 			for (var o = 0; o < 3; o++) {
// 				var n = document.createElement("div");
// 				n.classList.add("cal-nav", t[o]), n.onclick = this.onHeaderChange.bind(this), e.appendChild(n)
// 			}
// 			e.children[0].innerHTML = "&lt;", e.children[2].innerHTML = "&gt;", Object.defineProperty(this.el, "header", {
// 				value: e
// 			}), r(e, this.el.wrapper)
// 		}
// 		this.setHeaderContent()
// 	}, i.prototype.setHeaderContent = function() {
// 		var e = this.year;
// 		if ("DAYS" == this.bodyType) e = this.month_long + " " + e;
// 		else if ("YEARS" == this.bodyType) {
// 			var t = this.year + 10 - this.year % 10;
// 			e = t - 10 + "-" + (t - 1)
// 		}
// 		this.el.header.children[1].innerText = e
// 	}, i.prototype.setupBody = function() {
// 		if (!this.el.body) {
// 			var e = document.createElement("div");
// 			e.classList.add("cal-body"), Object.defineProperty(this.el, "body", {
// 				value: e
// 			}), r(e, this.el.wrapper)
// 		}
// 		var n = null;

// 		function i(e, t, o, n, i) {
// 			var s = document.createElement("div");
// 			s.classList.add(o);
// 			for (var c = 1; c < e + 1; c++) {
// 				var r = document.createElement("div");
// 				r.classList.add("cal-row", "cal-row-" + c), 1 == c && n && r.classList.add(n);
// 				for (var a = 1; a < t + 1; a++) {
// 					var l = document.createElement("div");
// 					l.classList.add("cal-cell", "cal-col-" + a), l.onclick = i, r.appendChild(l)
// 				}
// 				s.appendChild(r)
// 			}
// 			return s
// 		}
// 		if ("DAYS" == this.bodyType) {
// 			if (!(n = this.el.body.calDays)) {
// 				n = i(7, 7, "cal-days", "cal-day-names", this.onDateSelected.bind(this));
// 				for (var s = 0; s < 7; s++) {
// 					var a = n.children[0].children[s];
// 					a.innerText = o[s].slice(0, 2), a.onclick = null
// 				}
// 				this.el.body.calDays = n
// 			}
// 		} else if ("MONTHS" == this.bodyType) {
// 			if (!(n = this.el.body.calMonths)) {
// 				n = i(3, 4, "cal-months", null, this.onMonthSelected.bind(this));
// 				for (s = 0; s < 3; s++)
// 					for (var l = 0; l < 4; l++) {
// 						var _ = t[4 * s + l].slice(0, 3);
// 						n.children[s].children[l].innerText = _
// 					}
// 				this.el.body.calMonths = n
// 			}
// 		} else "YEARS" == this.bodyType && ((n = this.el.body.calYears) || (n = i(3, 4, "cal-years", null, this.onYearSelected.bind(this)), this.el.body.calYears = n));
// 		c(this.el.body), r(n, this.el.body), this.setBodyContent()
// 	}, i.prototype.setBodyContent = function() {
// 		var e = this.el.body.children[0],
// 			t = ["cal-cell-prev", "cal-cell-next", "cal-value"];
// 		if ("DAYS" == this.bodyType) {
// 			var o = 864e5,
// 				n = new Date(this.year, this.month, 1),
// 				i = new Date(n.getTime() - o * n.getDay());
// 			e.children[6].style.display = "";
// 			for (var s = 1; s < 7; s++)
// 				for (var c = 0; c < 7; c++) {
// 					var r = e.children[s].children[c],
// 						a = i.getMonth(),
// 						l = i.getDate();
// 					if (r.innerText = l, r.classList.remove(t[0], t[1], t[2]), a != this.month) {
// 						if (6 == s && 0 == c) {
// 							e.children[6].style.display = "none";
// 							break
// 						}
// 						r.classList.add(a < this.month ? t[0] : t[1])
// 					} else p(i, this.value) && r.classList.add(t[2]);
// 					i = new Date(i.getTime() + o)
// 				}
// 		} else if ("YEARS" == this.bodyType) {
// 			var _ = this.year - this.year % 10 - 1;
// 			for (s = 0; s < 3; s++)
// 				for (c = 0; c < 4; c++) e.children[s].children[c].innerText = _, _ += 1;
// 			e.children[0].children[0].classList.add(t[0]), e.children[2].children[3].classList.add(t[1])
// 		}
// 	}, i.prototype.onTimeChange = function(e) {
// 		if (e.stopPropagation(), "mousedown" != e.type) {
// 			var t = e.target;
// 			if (this[t.name] = parseInt(t.value) || 0, this.setupFooter(), "change" == e.type) {
// 				var o = this;
// 				setTimeout((function() {
// 					o.elem.focus()
// 				}), 50)
// 			}
// 			this.setInputValue()
// 		} else this.cancelBlur += 1
// 	}, i.prototype.setupFooter = function() {
// 		if (!this.el.footer) {
// 			var e = document.createElement("div"),
// 				t = this.onTimeChange.bind(this),
// 				o = this;

// 			function n(t, n, i, s) {
// 				var c = document.createElement("div");
// 				c.classList.add("cal-time");
// 				var r = c.appendChild(document.createElement("div"));
// 				r.classList.add("cal-time-label"), r.innerText = t;
// 				var a = c.appendChild(document.createElement("div"));
// 				a.classList.add("cal-time-value"), a.innerText = "00";
// 				var l = c.appendChild(document.createElement("div")),
// 					_ = l.appendChild(document.createElement("input"));
// 				Object.assign(_, {
// 					step: 1,
// 					min: 0,
// 					max: i,
// 					name: n,
// 					type: "range"
// 				}), Object.defineProperty(e, n, {
// 					value: _
// 				}), l.classList.add("cal-time-slider"), _.onchange = s, _.oninput = s, _.onmousedown = s, o[n] = o[n] || parseInt(_.value) || 0, e.appendChild(c)
// 			}
// 			n("HH:", "hours", 23, t), n("MM:", "minutes", 59, t), n("SS:", "seconds", 59, t), e.classList.add("cal-footer"), Object.defineProperty(this.el, "footer", {
// 				value: e
// 			}), r(e, this.el.wrapper)
// 		}
// 		this.setFooterContent()
// 	}, i.prototype.setFooterContent = function() {
// 		if (this.el.footer) {
// 			var e = this.el.footer;
// 			e.hours.value = this.hours, e.children[0].children[1].innerText = u(this.hours, 2), e.minutes.value = this.minutes, e.children[1].children[1].innerText = u(this.minutes, 2), e.seconds.value = this.seconds, e.children[2].children[1].innerText = u(this.seconds, 2)
// 		}
// 	}, i.prototype.setInputValue = function() {
// 		var e = new Date(this.year, this.month, this.day),
// 			t = [];
// 		if (this.settings.config.showDate && t.push(f(e, this.settings)), this.settings.config.showTime) {
// 			var o = new Date(e.getTime() + this.time);
// 			t.push(m(o, this.settings))
// 		}
// 		this.elem.value = t.join(" ")
// 	}, i.prototype.onDateSelected = function(e) {
// 		var t = e.target.parentNode,
// 			o = parseInt(e.target.innerText);
// 		t.nextSibling && t.nextSibling.nextSibling || !(o < 8) ? t.previousSibling && t.previousSibling.previousSibling || !(o > 7) || (this.month -= 1) : this.month += 1, this.day = parseInt(e.target.innerText), this.value = new Date(this.year, this.month, this.day), this.setInputValue(), this.setHeaderContent(), this.setBodyContent()
// 	}, i.prototype.onMonthSelected = function(e) {
// 		var t = 0,
// 			o = 2,
// 			n = e.target;
// 		n.parentNode.nextSibling && (o = n.parentNode.previousSibling ? 1 : 0), n.previousSibling && (t = 3, n.nextSibling && (t = n.previousSibling.previousSibling ? 2 : 1)), this.month = 4 * o + t, this.bodyType = "DAYS", this.setHeaderContent(), this.setupBody()
// 	}, i.prototype.onYearSelected = function(e) {
// 		this.year = parseInt(e.target.innerText), this.bodyType = "MONTHS", this.setHeaderContent(), this.setupBody()
// 	}, i.prototype.onHeaderChange = function(t) {
// 		var o = t.target;
// 		if (o.previousSibling && o.nextSibling) {
// 			var n = e.indexOf(this.bodyType);
// 			if (n < 0 || !e[n + 1]) return;
// 			this.bodyType = e[n + 1], this.setupBody()
// 		} else {
// 			var i = o.previousSibling ? 1 : -1;
// 			switch (this.bodyType) {
// 				case "DAYS":
// 					this.month += 1 * i;
// 					break;
// 				case "MONTHS":
// 					this.year += 1 * i;
// 					break;
// 				case "YEARS":
// 					this.year += 10 * i
// 			}(this.month > 11 || this.month < 0) && (this.year += Math.floor(this.month / 11), this.month = this.month > 11 ? 0 : 11)
// 		}
// 		this.setHeaderContent(), this.setBodyContent()
// 	}, a.prototype.add = function(e, t) {
// 		this._funcs[e] || (this._funcs[e] = []), this._funcs[e].push(t)
// 	}, a.prototype.get = function(e) {
// 		return this._funcs[e] ? this._funcs[e] : []
// 	}, window.dtsel = Object.create({}, {
// 		DTS: {
// 			value: n
// 		},
// 		DTObj: {
// 			value: i
// 		},
// 		fn: {
// 			value: Object.defineProperties({}, {
// 				empty: {
// 					value: c
// 				},
// 				appendAfter: {
// 					value: function(e, t) {
// 						t.parentNode.insertBefore(e, t.nextSibling)
// 					}
// 				},
// 				getOffset: {
// 					value: s
// 				},
// 				parseDate: {
// 					value: _
// 				},
// 				renderDate: {
// 					value: f
// 				},
// 				parseTime: {
// 					value: d
// 				},
// 				renderTime: {
// 					value: m
// 				},
// 				setDefaults: {
// 					value: b
// 				}
// 			})
// 		}
// 	})
// }(),
// function(e, t) {
// 	"object" == typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.findAndReplaceDOMText = t()
// }(this, (function() {
// 	var e = "first",
// 		t = document,
// 		o = {}.hasOwnProperty;

// 	function n() {
// 		return i.apply(null, arguments) || s.apply(null, arguments)
// 	}

// 	function i(e, t, o, i, c) {
// 		if (t && !t.nodeType && arguments.length <= 2) return !1;
// 		var r, a = "function" == typeof o;
// 		a && (r = o, o = function(e, t) {
// 			return r(e.text, t.startIndex)
// 		});
// 		var l = s(t, {
// 			find: e,
// 			wrap: a ? null : o,
// 			replace: a ? o : "$" + (i || "&"),
// 			prepMatch: function(e, t) {
// 				if (!e[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
// 				if (i > 0) {
// 					var o = e[i];
// 					e.index += e[0].indexOf(o), e[0] = o
// 				}
// 				return e.endIndex = e.index + e[0].length, e.startIndex = e.index, e.index = t, e
// 			},
// 			filterElements: c
// 		});
// 		return n.revert = function() {
// 			return l.revert()
// 		}, !0
// 	}

// 	function s(e, t) {
// 		return new c(e, t)
// 	}

// 	function c(e, t) {
// 		var i = t.preset && n.PRESETS[t.preset];
// 		if (t.portionMode = t.portionMode || "retain", i)
// 			for (var s in i) o.call(i, s) && !o.call(t, s) && (t[s] = i[s]);
// 		this.node = e, this.options = t, this.prepMatch = t.prepMatch || this.prepMatch, this.reverts = [], this.matches = this.search(), this.matches.length && this.processMatches()
// 	}
// 	return n.NON_PROSE_ELEMENTS = {
// 		br: 1,
// 		hr: 1,
// 		script: 1,
// 		style: 1,
// 		img: 1,
// 		video: 1,
// 		audio: 1,
// 		canvas: 1,
// 		svg: 1,
// 		map: 1,
// 		object: 1,
// 		input: 1,
// 		textarea: 1,
// 		select: 1,
// 		option: 1,
// 		optgroup: 1,
// 		button: 1
// 	}, n.NON_CONTIGUOUS_PROSE_ELEMENTS = {
// 		address: 1,
// 		article: 1,
// 		aside: 1,
// 		blockquote: 1,
// 		dd: 1,
// 		div: 1,
// 		dl: 1,
// 		fieldset: 1,
// 		figcaption: 1,
// 		figure: 1,
// 		footer: 1,
// 		form: 1,
// 		h1: 1,
// 		h2: 1,
// 		h3: 1,
// 		h4: 1,
// 		h5: 1,
// 		h6: 1,
// 		header: 1,
// 		hgroup: 1,
// 		hr: 1,
// 		main: 1,
// 		nav: 1,
// 		noscript: 1,
// 		ol: 1,
// 		output: 1,
// 		p: 1,
// 		pre: 1,
// 		section: 1,
// 		ul: 1,
// 		br: 1,
// 		li: 1,
// 		summary: 1,
// 		dt: 1,
// 		details: 1,
// 		rp: 1,
// 		rt: 1,
// 		rtc: 1,
// 		script: 1,
// 		style: 1,
// 		img: 1,
// 		video: 1,
// 		audio: 1,
// 		canvas: 1,
// 		svg: 1,
// 		map: 1,
// 		object: 1,
// 		input: 1,
// 		textarea: 1,
// 		select: 1,
// 		option: 1,
// 		optgroup: 1,
// 		button: 1,
// 		table: 1,
// 		tbody: 1,
// 		thead: 1,
// 		th: 1,
// 		tr: 1,
// 		td: 1,
// 		caption: 1,
// 		col: 1,
// 		tfoot: 1,
// 		colgroup: 1
// 	}, n.NON_INLINE_PROSE = function(e) {
// 		return o.call(n.NON_CONTIGUOUS_PROSE_ELEMENTS, e.nodeName.toLowerCase())
// 	}, n.PRESETS = {
// 		prose: {
// 			forceContext: n.NON_INLINE_PROSE,
// 			filterElements: function(e) {
// 				return !o.call(n.NON_PROSE_ELEMENTS, e.nodeName.toLowerCase())
// 			}
// 		}
// 	}, n.Finder = c, c.prototype = {
// 		search: function() {
// 			var e, t = 0,
// 				o = 0,
// 				n = this.options.find,
// 				i = this.getAggregateText(),
// 				s = [],
// 				c = this;
// 			return n = "string" == typeof n ? RegExp(String(n).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g") : n,
// 				function i(r) {
// 					for (var a = 0, l = r.length; a < l; ++a) {
// 						var _ = r[a];
// 						if ("string" == typeof _) {
// 							if (n.global)
// 								for (; e = n.exec(_);) s.push(c.prepMatch(e, t++, o));
// 							else(e = _.match(n)) && s.push(c.prepMatch(e, 0, o));
// 							o += _.length
// 						} else i(_)
// 					}
// 				}(i), s
// 		},
// 		prepMatch: function(e, t, o) {
// 			if (!e[0]) throw new Error("findAndReplaceDOMText cannot handle zero-length matches");
// 			return e.endIndex = o + e.index + e[0].length, e.startIndex = o + e.index, e.index = t, e
// 		},
// 		getAggregateText: function() {
// 			var e = this.options.filterElements,
// 				t = this.options.forceContext;
// 			return function o(n) {
// 				if (n.nodeType === Node.TEXT_NODE) return [n.data];
// 				if (e && !e(n)) return [];
// 				var i = [""],
// 					s = 0;
// 				if (n = n.firstChild)
// 					do {
// 						if (n.nodeType !== Node.TEXT_NODE) {
// 							var c = o(n);
// 							t && n.nodeType === Node.ELEMENT_NODE && (!0 === t || t(n)) ? (i[++s] = c, i[++s] = "") : ("string" == typeof c[0] && (i[s] += c.shift()), c.length && (i[++s] = c, i[++s] = ""))
// 						} else i[s] += n.data
// 					} while (n = n.nextSibling);
// 				return i
// 			}(this.node)
// 		},
// 		processMatches: function() {
// 			var e, t, o, n = this.matches,
// 				i = this.node,
// 				s = this.options.filterElements,
// 				c = [],
// 				r = i,
// 				a = n.shift(),
// 				l = 0,
// 				_ = 0,
// 				d = [i];
// 			e: for (;;) {
// 				if (r.nodeType === Node.TEXT_NODE && (!t && r.length + l >= a.endIndex ? t = {
// 						node: r,
// 						index: _++,
// 						text: r.data.substring(a.startIndex - l, a.endIndex - l),
// 						indexInMatch: 0 === l ? 0 : l - a.startIndex,
// 						indexInNode: a.startIndex - l,
// 						endIndexInNode: a.endIndex - l,
// 						isEnd: !0
// 					} : e && c.push({
// 						node: r,
// 						index: _++,
// 						text: r.data,
// 						indexInMatch: l - a.startIndex,
// 						indexInNode: 0
// 					}), !e && r.length + l > a.startIndex && (e = {
// 						node: r,
// 						index: _++,
// 						indexInMatch: 0,
// 						indexInNode: a.startIndex - l,
// 						endIndexInNode: a.endIndex - l,
// 						text: r.data.substring(a.startIndex - l, a.endIndex - l)
// 					}), l += r.data.length), o = r.nodeType === Node.ELEMENT_NODE && s && !s(r), e && t) {
// 					if (r = this.replaceMatch(a, e, c, t), l -= t.node.data.length - t.endIndexInNode, e = null, t = null, c = [], _ = 0, !(a = n.shift())) break
// 				} else if (!o && (r.firstChild || r.nextSibling)) {
// 					r.firstChild ? (d.push(r), r = r.firstChild) : r = r.nextSibling;
// 					continue
// 				}
// 				for (;;) {
// 					if (r.nextSibling) {
// 						r = r.nextSibling;
// 						break
// 					}
// 					if ((r = d.pop()) === i) break e
// 				}
// 			}
// 		},
// 		revert: function() {
// 			for (var e = this.reverts.length; e--;) this.reverts[e]();
// 			this.reverts = []
// 		},
// 		prepareReplacementString: function(t, o, n) {
// 			var i = this.options.portionMode;
// 			return i === e && o.indexInMatch > 0 ? "" : (t = t.replace(/\$(\d+|&|`|')/g, (function(e, t) {
// 				var o;
// 				switch (t) {
// 					case "&":
// 						o = n[0];
// 						break;
// 					case "`":
// 						o = n.input.substring(0, n.startIndex);
// 						break;
// 					case "'":
// 						o = n.input.substring(n.endIndex);
// 						break;
// 					default:
// 						o = n[+t] || ""
// 				}
// 				return o
// 			})), i === e ? t : o.isEnd ? t.substring(o.indexInMatch) : t.substring(o.indexInMatch, o.indexInMatch + o.text.length))
// 		},
// 		getPortionReplacementNode: function(e, o) {
// 			var n = this.options.replace || "$&",
// 				i = this.options.wrap,
// 				s = this.options.wrapClass;
// 			if (i && i.nodeType) {
// 				var c = t.createElement("div");
// 				c.innerHTML = i.outerHTML || (new XMLSerializer).serializeToString(i), i = c.firstChild
// 			}
// 			if ("function" == typeof n) return (n = n(e, o)) && n.nodeType ? n : t.createTextNode(String(n));
// 			var r = "string" == typeof i ? t.createElement(i) : i;
// 			return r && s && (r.className = s), (n = t.createTextNode(this.prepareReplacementString(n, e, o))).data && r ? (r.appendChild(n), r) : n
// 		},
// 		replaceMatch: function(e, o, n, i) {
// 			var s, c, r = o.node,
// 				a = i.node;
// 			if (r === a) {
// 				var l = r;
// 				o.indexInNode > 0 && (s = t.createTextNode(l.data.substring(0, o.indexInNode)), l.parentNode.insertBefore(s, l));
// 				var _ = this.getPortionReplacementNode(i, e);
// 				return l.parentNode.insertBefore(_, l), i.endIndexInNode < l.length && (c = t.createTextNode(l.data.substring(i.endIndexInNode)), l.parentNode.insertBefore(c, l)), l.parentNode.removeChild(l), this.reverts.push((function() {
// 					s === _.previousSibling && s.parentNode.removeChild(s), c === _.nextSibling && c.parentNode.removeChild(c), _.parentNode.replaceChild(l, _)
// 				})), _
// 			}
// 			s = t.createTextNode(r.data.substring(0, o.indexInNode)), c = t.createTextNode(a.data.substring(i.endIndexInNode));
// 			for (var d = this.getPortionReplacementNode(o, e), f = [], m = 0, p = n.length; m < p; ++m) {
// 				var u = n[m],
// 					b = this.getPortionReplacementNode(u, e);
// 				u.node.parentNode.replaceChild(b, u.node), this.reverts.push(function(e, t) {
// 					return function() {
// 						t.parentNode.replaceChild(e.node, t)
// 					}
// 				}(u, b)), f.push(b)
// 			}
// 			var h = this.getPortionReplacementNode(i, e);
// 			return r.parentNode.insertBefore(s, r), r.parentNode.insertBefore(d, r), r.parentNode.removeChild(r), a.parentNode.insertBefore(h, a), a.parentNode.insertBefore(c, a), a.parentNode.removeChild(a), this.reverts.push((function() {
// 				s.parentNode.removeChild(s), d.parentNode.replaceChild(r, d), c.parentNode.removeChild(c), h.parentNode.replaceChild(a, h)
// 			})), h
// 		}
// 	}, n
// }));
// var etsCf = {
// 	isAppInit: !1,
// 	baseUrl: "",
// 	submitLink: "",
// 	recaptchaItems: {},
// 	shortcodeNodes: null,
// 	initApp: function() {
// 		if (this.isAppInit) return console.log("dd"), !1;
// 		if ("undefined" != typeof ETS_CF_BASE_URL && (etsCf.baseUrl = ETS_CF_BASE_URL), etsCf.submitLink = etsCf.baseUrl + "/contact-form/submit-form", "undefined" == typeof ETS_CF_INIT || !ETS_CF_INIT || "undefined" == typeof ETS_CF_DATA || !ETS_CF_DATA) return !1;
// 		if (this.isAppInit = !0, console.log("init"), console.log(ETS_CF_DATA), ETS_CF_DATA.length)
// 			for (var e = 0; e < ETS_CF_DATA.length; e++) console.log("kkkkkk"), console.log(etsCf.isPageHasShortcode(ETS_CF_DATA[e].shortcode)), ("floating" == ETS_CF_DATA[e].form_content.type_form || etsCf.isPageHasShortcode(ETS_CF_DATA[e].shortcode)) && etsCf.createForm(ETS_CF_DATA[e]);
// 		var t = document.querySelectorAll(".ets_cf_input_datetime");
// 		if (t.length)
// 			for (var o = 0; o < t.length; o++) new dtsel.DTS("#" + t[o].getAttribute("id"), {
// 				direction: "TOP",
// 				dateFormat: "dd/mm/yyyy",
// 				showTime: !0,
// 				timeFormat: "HH:MM:SS"
// 			});
// 		var n = document.querySelectorAll(".ets_cf_input_date");
// 		if (n.length)
// 			for (o = 0; o < n.length; o++) new dtsel.DTS("#" + n[o].getAttribute("id"), {
// 				direction: "TOP",
// 				dateFormat: "dd/mm/yyyy",
// 				showTime: !1
// 			});
// 		etsCf.setReCaptcha(), etsCf.initNumberRange(), etsCf.initEvents()
// 	},
// 	isPageHasShortcode: function(e) {
// 		var t = document.body.innerHTML;
// 		return new RegExp("\\{ets_cf_" + e + "\\}").test(t)
// 	},
// 	createForm: function(e) {
// 		var t = !1;
// 		"floating" == e.form_content.type_form && (t = !0), this.addForm(e, e.shortcode, t)
// 	},
// 	renderHtmlFrom: function(e) {
// 		var t = "";
// 		e.form_content.info.description && (t = `<div class="ets_cf_desc"><p>${e.form_content.info.description}</p></div>`);
// 		var o = `etsCfBox${etsCf.makeRandom(10)}`,
// 			n = `<div class="ets_cf_box" id="${o}">\n\t\t\t\t\t\t<div class="clearfix"></div>\n            <div class="ets_cf_wrapper">\n\x3c!--                <div class="ets_cf_form_errors ets_cf_form_errors_top"></div>--\x3e\n                <div class="ets_cf_header ${e.form_content.info.display_title_on_store||t?"":"ets_cf_hidden"}">\n                    <h3 class="ets_cf_title ${e.form_content.info.alignment_title?"ets_cf_align_"+e.form_content.info.alignment_title:""} ${e.form_content.info.bold_title?"ets_cf_bold":""} ${e.form_content.info.uppercase_title?"ets_cf_uppercase":""} ${e.form_content.info.display_title_on_store?"":"ets_cf_hidden"}">${e.title}</h3>\n                    ${t?`<div class="${e.form_content.info.alignment_description?"ets_cf_align_"+e.form_content.info.alignment_description:""} ${e.form_content.info.display_description_on_store?"":"ets_cf_hidden"}">${t}</div>`:""}\n                </div>\n                <div class="ets_cf_body">\n                    <form class="ets_cf_form_data_contact" autocomplete="off" action="${this.submitLink}" method="post" enctype="multipart/form-data">\n                        ${etsCf.createFormData(e)}\n                        <input type="hidden" name="shortcode" value="${e.shortcode}" />\n                        <input type="hidden" name="form_id" value="${e.id}" />\n                        <input type="hidden" name="shop_domain" value="${ETS_CF_SHOP_DOMAIN}" />\n                    </form>\n                </div>\n                <div class="ets_cf_form_errors ets_cf_form_errors_bottom"></div>\n            </div>\n\t\t\t\t\t\t<div class="clearfix"></div>\n        </div>`;
// 		if (e.form_content.decoration && e.form_content.decoration.length) {
// 			var i = e.form_content.decoration[0];
// 			n += `<style type="text/css">\n                #${o}{\n                    ${i.form_background_color?`background-color: ${i.form_background_color};`:""};\n                    ${i.form_width?"width:"+i.form_width+"px;":""}\n                    ${i.form_padding?"padding:"+i.form_padding+"px;":""}\n                    ${i.enable_background_image?`background-image:url('${i.form_decoration_image}'); background-position: ${i.background_position};background-size: ${i.background_size};background-repeat: ${i.repeat_image};`:""}}\n\n                ${i.title_color?`#${o} .ets_cf_title{color: ${i.title_color};}`:""}\n                ${i.form_description_color?`#${o} .ets_cf_desc, #${o} .ets_cf_desc p{color: ${i.form_description_color};}`:""}\n                ${i.label_color?`#${o} .ets_cf_form_label{color: ${i.label_color};}`:""}\n                ${i.hover_color?` #${o} .ets_cf_btn:hover, #${o} .ets_cf_btn:focus{background-color: ${i.hover_color};}`:""}\n\n               ${i.other_color_1?`#${o} .ets_cf_form_control, #${o} .ets_cf_radio_item input:checked+.ets_cf_radio_check,#${o} .ets_cf_radio_item input +.ets_cf_radio_check,#${o} .ets_cf_checkbox_item .ets_cf_checkbox_check, #${o} .ets_cf_radio_item .ets_cf_radio_check{border-color: ${i.other_color_1};}#${o} .ets_cf_checkbox_item input:checked + .ets_cf_checkbox_check, #${o} .ets_cf_checkbox_item input:checked+.ets_cf_checkbox_check,#${o} .ets_cf_radio_item input:checked + .ets_cf_radio_check:after{background-color: ${i.other_color_1};}`:""}\n               ${i.other_color_1?`#${o} .ets_cf_toggle_view_password svg{color: ${i.other_color_1};fill: ${i.other_color_1};}`:""}\n               ${i.other_color_2?`#${o} .ets_cf_form_control,#${o} .ets_cf_custom_select i.ets_icon_arrow:before{color: ${i.other_color_2};}`:""}\n                ${i.other_color_2?`#${o} .ets_cf_custom_select i.ets_icon_arrow:before{border-color: ${i.other_color_2};}`:""}\n               ${i.other_color_2?`#${o} .ets_cf_field_desc, #${o} .ets_cf_file_type_txt, #${o} span.ets_cf_file_size_txt{color: ${i.other_color_2}; opacity: 0.85;}`:""}\n\n                ${i.btn_text_submit_color?`#${o} .ets_cf_btn_submit, #${o} .ets_cf_btn_submit_step{color: ${i.btn_text_submit_color};}#${o} .ets_cf_btn_submit .ets_cf_icon svg, #${o} .ets_cf_btn_submit_step .ets_cf_icon svg{color: ${i.btn_text_submit_color};fill: ${i.btn_text_submit_color};}`:""}\n                ${i.btn_background_color?`#${o} .ets_cf_btn_submit, #${o} .ets_cf_btn_submit_step{background-color: ${i.btn_background_color};border-color: ${i.btn_background_color};}`:""}\n                ${i.btn_text_hover_color?`#${o} .ets_cf_btn_submit:hover,#${o} .ets_cf_btn_submit:focus, #${o} .ets_cf_btn_submit_step:hover,#${o} .ets_cf_btn_submit_step:focus{color: ${i.btn_text_hover_color};}#${o} .ets_cf_btn_submit:hover .ets_cf_icon svg,#${o} .ets_cf_btn_submit:focus .ets_cf_icon svg, #${o} .ets_cf_btn_submit_step:hover .ets_cf_icon svg,#${o} .ets_cf_btn_submit_step:focus .ets_cf_icon svg{color: ${i.btn_text_hover_color};fill: ${i.btn_text_hover_color};}`:""}\n                ${i.btn_background_hover_color?`#${o} .ets_cf_btn_submit:hover,#${o} .ets_cf_btn_submit:focus, #${o} .ets_cf_btn_submit_step:hover,#${o} .ets_cf_btn_submit_step:focus{background-color: ${i.btn_background_hover_color};border-color: ${i.btn_background_hover_color};}`:""}\n\n                ${i.btn_text_next_color?`#${o} .ets_cf_btn_next_step{color: ${i.btn_text_next_color};}#${o} .ets_cf_btn_next_step .ets_cf_icon svg{color: ${i.btn_text_next_color};fill: ${i.btn_text_next_color};}`:""}\n                ${i.btn_background_next_color?`#${o} .ets_cf_btn_next_step{background-color: ${i.btn_background_next_color}; border-color: ${i.btn_background_next_color};}`:""}\n                ${i.btn_text_hover_next_color?`#${o} .ets_cf_btn_next_step:hover,#${o} .ets_cf_btn_next_step:focus{color: ${i.btn_text_hover_next_color};}#${o} .ets_cf_btn_next_step:hover .ets_cf_icon svg,#${o} .ets_cf_btn_next_step:focus .ets_cf_icon svg{color: ${i.btn_text_hover_next_color};fill: ${i.btn_text_hover_next_color};}`:""}\n                ${i.btn_background_hover_next_color?`#${o} .ets_cf_btn_next_step:hover,#${o} .ets_cf_btn_next_step:focus{background-color: ${i.btn_background_hover_next_color};border-color: ${i.btn_background_hover_next_color};}`:""}\n\n                ${i.btn_text_previous_color?`#${o} .ets_cf_btn_back_step{color: ${i.btn_text_previous_color};}#${o} .ets_cf_btn_back_step .ets_cf_icon svg{color: ${i.btn_text_previous_color};fill: ${i.btn_text_previous_color};}`:""}\n                ${i.btn_background_previous_color?`#${o} .ets_cf_btn_back_step{background-color: ${i.btn_background_previous_color};border-color: ${i.btn_background_previous_color};}`:""}\n                ${i.btn_text_hover_previous_color?`#${o} .ets_cf_btn_back_step:hover,#${o} .ets_cf_btn_back_step:focus{color: ${i.btn_text_hover_previous_color};}#${o} .ets_cf_btn_back_step:hover .ets_cf_icon svg,#${o} .ets_cf_btn_back_step:focus .ets_cf_icon svg{color: ${i.btn_text_hover_previous_color};fill: ${i.btn_text_hover_previous_color};}`:""}\n                ${i.btn_background_hover_previous_color?`#${o} .ets_cf_btn_back_step:hover,#${o} .ets_cf_btn_back_step:focus{background-color: ${i.btn_background_hover_previous_color};border-color: ${i.btn_background_hover_previous_color};}`:""}\n\n                ${i.inactive_step?`#${o} .ets_cf_step_item .ets_cf_step_number, #${o} .step-line:before{background-color: ${i.inactive_step};}`:""}\n                ${i.completed_step?`#${o} .ets_cf_step_item.ets_cf_step_completed .ets_cf_step_number, #${o} .ets_cf_step_completed .step-line:before{background-color: ${i.completed_step};}`:""}\n                ${i.activating_step?`#${o} .ets_cf_step_item.ets_cf_step_active .ets_cf_step_number, #${o} .ets_cf_step_active .step-line:before{background-color: ${i.activating_step};}`:""}\n                ${i.label_step_color?`#${o}  .ets_cf_step_title {color: ${i.label_step_color};}`:""}\n                ${i.description_step_color?`#${o} .ets_cf_step_desc {color: ${i.description_step_color};}`:""}\n                ${i.round_corner_input_field?`#${o} .ets_cf_form_control{border-radius: ${i.radius_pixel}px;}`:""}\n            </style>`
// 		}
// 		return n
// 	},
// 	createFormData: function(e) {
// 		var t = "",
// 			o = e.form_content.form;
// 		if ("multiple" !== e.form_content.type_form) {
// 			for (var n = 0; n < o.length; n++) t += `<div class="ets_cf_row ets_cf_row_${n}" data-row="${n}">${etsCf.createCol(o[n],e)}</div>`;
// 			var i = null;
// 			e.form_content.decoration && e.form_content.decoration.length && (i = e.form_content.decoration[0]);
// 			var s = "";
// 			"label" != e.form_content.btn_submit.btn_type && (e.form_content.btn_submit.btn_custom_icon ? s += `<i class="ets_cf_icon_img"><img src="${e.form_content.btn_submit.btn_custom_icon}" alt="" /> </i>` : s += `<i class="ets_cf_icon">${e.form_content.btn_submit.btn_icon}</i>`), "icon" != e.form_content.btn_submit.btn_type && (s += ` ${e.form_content.btn_submit.btn_label}`), t += `<div class="ets_cf_content_footer ets_cf_submit_${i?e.form_content.btn_submit.btn_submit_position:""}">\n                            <button type="submit" class="ets_cf_btn ets_cf_btn_submit ets_cf_btn_${e.form_content.btn_submit.btn_type}">${s}</button>\n                        </div>`
// 		} else "multiple" == e.form_content.type_form && (t += etsCf.createStepForm(e.form_content.step_multiple_form, e.form_content.form, e));
// 		return t
// 	},
// 	createPopupForm: function(e, t) {
// 		t = t || !1;
// 		var o = e.form_content.buttonDecoration,
// 			n = `etsCfBtnPopup${this.makeRandom(10)}`,
// 			i = "",
// 			s = "margin-right";
// 		return t && ("bottom_left" != (i = "ets_cf_btn_pos_" + o.btn_position) && "top_left" != i && "middle_left" != i || (s = "margin-left")), `${`<style type="text/css">\n                  ${o.btn_background?`#${n}{background-color: ${o.btn_background};}`:""}\n                  ${o.btn_text_color?`#${n}{color: ${o.btn_text_color};fill: ${o.btn_text_color};}#${n} .ets_cf_icon svg{color: ${o.btn_text_color};fill: ${o.btn_text_color};}`:""}\n                  ${o.btn_border?`#${n}{border-color: ${o.btn_border};}`:""}\n                  #${n}{border-radius: ${o.btn_round_button?o.btn_round_button:"0"}px;}\n\n                  ${o.btn_background_hover?`#${n}:hover,#${n}:focus{background-color: ${o.btn_background_hover};}`:""}\n                  ${o.btn_border_hover?`#${n}:hover,#${n}:focus{border-color: ${o.btn_border_hover};}`:""}\n                  ${o.btn_text_color_hover?`#${n}:hover,#${n}:focus{color: ${o.btn_text_color_hover};fill: ${o.btn_text_color_hover};}#${n}:hover .ets_cf_icon svg,#${n}:focus .ets_cf_icon svg{color: ${o.btn_text_color_hover};fill: ${o.btn_text_color_hover};}`:""}\n                  ${""!=o.btn_position_up?`#${n}{margin-bottom: ${o.btn_position_up}px;}`:""}\n                  ${""!=o.btn_position_left?`#${n}{${s}: ${o.btn_position_left}px;}`:""}\n            </style>`}<div class="ets_cf_section form_${i} ${t?"ets_cf_floating_open_form":"ets_cf_popup_open_form"}">\n                <button type="button" class="ets_cf_btn ${t?"ets_cf_btn_floating_open_form":"ets_cf_btn_popup_open_form"} js-ets_cf_btn_popup_open_form ${i} ${t&&o.btn_circle_icon?"ets_cf_circle_icon":""}"\n                    id="${n}">${t&&"label"!=o.btn_type&&o.btn_icon&&!o.btn_custom_icon?`<i class="ets_cf_icon">${o.btn_icon}</i>`:""}${t&&"label"!=o.btn_type&&o.btn_custom_icon?`<i class="ets_cf_icon_img"><img src="${o.btn_custom_icon}" alt="" class="ets_cf_img_icon" /> </i>`:""}${t&&"icon"!=o.btn_type||!t?o.btn_label:""}</button>\n                <div class="ets_cf_popup">\n                    <div class="ets_cf_popup_table">\n                        <div class="ets_cf_popup_table-cell">\n                            <div class="ets_cf_popup_content">\n                                <button class="ets_cf_btn_close_popup js-ets_cf_btn_close_popup"><i class="ets_cf_icon">${this.icons.close}</i></button>\n                                ${this.renderHtmlFrom(e)}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>`
// 	},
// 	createStepForm: function(e, t, o) {
// 		var n = null;
// 		o.form_content.decoration && o.form_content.decoration.length && (n = o.form_content.decoration[0]);
// 		var i = '<div class="ets_cf_form_step_box">';
// 		i += `<div class="ets_cf_form_step_header ${"all"!==n.step_type?"ets_cf_hidden":""}">`;
// 		for (var s = 0; s < e.length; s++) i += `<div class="step-ets-step ets_cf_step_item ${0==s?"ets_cf_step_active":""}" data-step-index="${s}">\n                                    <span class="step-line"></span>\n                                    <div class="ets_cf_step_number js-ets_cf_step_number">${s+1}</div>\n                                    <div class="ets_cf_step_title step-ets-label-title">${e[s].step_label_title?e[s].step_label_title:""}</div>\n                                    <div class="ets_cf_step_desc step-ets-description">${e[s].step_description?e[s].step_description:""}</div>\n                            </div>`;
// 		i += "</div>", i += '<div class="ets_cf_form_step_body">';
// 		for (var c = 0; c < t.length; c++) {
// 			var r = "";
// 			"label" != o.form_content.btn_previous.btn_type && (o.form_content.btn_previous.btn_custom_icon ? r += `<i class="ets_cf_icon_img"><img src="${o.form_content.btn_previous.btn_custom_icon}" alt="" /> </i>` : r += `<i class="ets_cf_icon">${o.form_content.btn_previous.btn_icon}</i>`), "icon" != o.form_content.btn_previous.btn_type && (r += ` ${o.form_content.btn_previous.btn_label}`);
// 			var a = "";
// 			"label" != o.form_content.btn_next.btn_type && (o.form_content.btn_next.btn_custom_icon ? a += `<i class="ets_cf_icon_img"><img src="${o.form_content.btn_next.btn_custom_icon}" alt="" /> </i>` : a += `<i class="ets_cf_icon">${o.form_content.btn_next.btn_icon}</i>`), "icon" != o.form_content.btn_next.btn_type && (a += ` ${o.form_content.btn_next.btn_label}`);
// 			var l = "";
// 			"label" != o.form_content.btn_submit.btn_type && (o.form_content.btn_submit.btn_custom_icon ? l += `<i class="ets_cf_icon_img"><img src="${o.form_content.btn_submit.btn_custom_icon}" alt="" /> </i>` : l += `<i class="ets_cf_icon">${o.form_content.btn_submit.btn_icon}</i>`), "icon" != o.form_content.btn_submit.btn_type && (l += ` ${o.form_content.btn_submit.btn_label}`);
// 			var _ = "";
// 			"all" != n.step_type && (_ = `<div class="ets_cf_header_single">\n                                <div class="ets_cf_step_title step-ets-label-title">${e[c].step_label_title?e[c].step_label_title:""}</div>\n                                 <div class="ets_cf_step_desc step-ets-description">${e[c].step_description?e[c].step_description:""}</div>\n                            </div>`), i += `<div class="ets_cf_step_form_item ets_cf_step_form_item_${c} ${0==c?"ets_cf_step_active":""}" data-step-index="${c}">\n                                ${_}\n                                <div class="ets_cf_step_content">\n                                      `;
// 			for (s = 0; s < t[c].length; s++) i += `<div class="ets_cf_row ets_cf_row_${s}" data-row="${s}">${etsCf.createCol(t[c][s],o)}</div>`;
// 			i += `\n                                </div>\n                                <div class="ets_cf_step_footer ets_cf_submit_${n?o.form_content.btn_submit.btn_submit_position:""}">\n                                    ${c>0?`<button type="button" class="ets_cf_btn ets_cf_btn_back_step js-ets_cf_btn_back_step">${r}</button>`:""}\n                                    ${c<t.length-1?`<button type="button" class="ets_cf_btn ets_cf_btn_next_step js-ets_cf_btn_next_step">${a}</button>`:""}\n                                    ${c==t.length-1?`<button type="submit" class="ets_cf_btn ets_cf_btn_submit_step js-ets_cf_btn_submit_step ets_cf_btn_${o.form_content.btn_submit.btn_type}" >${l}</button>`:""}\n                                </div>\n                        </div>`
// 		}
// 		return i += " </div>\n                </div>"
// 	},
// 	createCol: function(e, t) {
// 		if (!e || !e.length) return "";
// 		for (var o = "", n = 0; n < e.length; n++) o += `<div class="ets_cf_col_item ets_cf_col_${e[n].width}">${e[n].fields&&e[n].fields.length?etsCf.createInputField(e[n].fields,t):"&nbsp;"}</div>`;
// 		return o
// 	},
// 	createInputField: function(e, t) {
// 		if (!e || !e.length) return "";
// 		for (var o = "", n = 0; n < e.length; n++) o += etsCf.createFieldItem(e[n], t);
// 		return o
// 	},
// 	createFieldItem: function(e, t) {
// 		var o = "";
// 		if ("reCaptcha" == e.key && ETS_CF_CONFIG.recaptcha && ETS_CF_CONFIG.recaptcha.enable) {
// 			if ("v2" == ETS_CF_CONFIG.recaptcha.type) return `<div class="ets_cf_form_group" id="ets_cf_ipg_${etsCf.makeRandom(10)}">\n                            ${e.options.label?`<label class="ets_cf_form_label required" data-key=${e.key}>${e.options.label}</label>`:""}\n\n                            <div id="etsCfRecaptchav2${etsCf.makeRandom(5)}" data-theme="${e.options.theme}"\n                                data-size="${e.options.size}" class="ets_cf_recaptcha ets_cf_recaptcha_v2"></div>\n                            <input type="hidden" class="ets_cf_reacptcha_response" name="recaptcha_${etsCf.makeRandom(5)}" />\n                            <div class="ets_cf_item_error"></div>\n                        </div>`;
// 			if ("v3" == ETS_CF_CONFIG.recaptcha.type) return `<input type="hidden" class="ets_cf_recaptcha_v3" id="etsCfRecaptchaV3${etsCf.makeRandom(5)}" value="">`
// 		}
// 		var n = "";
// 		!e.options.label && e.options.required && (n = "*");
// 		var i = t.form_content.decoration[0],
// 			s = "";
// 		switch (i.other_color_2 && (s = `color:${i.other_color_2};`), e.key) {
// 			case "text":
// 				o = `<input type="text" data-required="${e.options.required}" data-validate="isString" autocomplete="off" class="ets_cf_form_control" name="${e.options.name}"\n                            value="${e.options.default_value?e.options.default_value:""}"\n                            data-default="${e.options.default_value?e.options.default_value:""}"\n                            placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}"/>`;
// 				break;
// 			case "url":
// 				var c = window.location.href;
// 				o = `<input type="text" data-required="${e.options.required}" data-valiadte="isUrl" autocomplete="off"\n                    class="ets_cf_form_control" ${e.options.read_only?"readonly":""} name="${e.options.name}"\n                    value="${e.options.use_current_page_url_as_default?c:e.options.default_value?e.options.default_value:""}"\n                    data-default="${e.options.use_current_page_url_as_default?c:e.options.default_value?e.options.default_value:""}"\n                    placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}" />`;
// 				break;
// 			case "email":
// 				var r = "";
// 				e.options.default_value && (r = e.options.default_value), void 0 !== e.options.use_customer_email_as_default && e.options.use_customer_email_as_default && "undefined" != typeof ETS_CF_CUSTOMER_EMAIL && ETS_CF_CUSTOMER_EMAIL && (r = ETS_CF_CUSTOMER_EMAIL), o = `<input type="${e.key}" data-required="${e.options.required}" autocomplete="off"  class="ets_cf_form_control" data-validate="isEmail" name="${e.options.name}"\n                            value="${r}"\n                            data-default="${r}"\n                             placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>`;
// 				break;
// 			case "textarea":
// 				var a = 3;
// 				e.options.rows && (a = e.options.rows), o = `<textarea name="${e.options.name}" id="textarea${etsCf.makeRandom(10)}" data-required="${e.options.required}" data-validate="isString" class="ets_cf_form_control"\n                             rows="${a}"\n                             placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}"\n                             data-default="${e.options.default_value?e.options.default_value:""}"\n                             data-limit-char="${e.options.max_character?e.options.max_character:""}">${e.options.default_value?e.options.default_value:""}</textarea>`;
// 				break;
// 			case "phone":
// 				var l = "";
// 				if (e.options.default_value && (l = e.options.default_value), void 0 !== e.options.use_customer_phone_number_as_default && e.options.use_customer_phone_number_as_default)
// 					if ("undefined" != typeof ETS_CF_CUSTOMER_PHONE && ETS_CF_CUSTOMER_PHONE) l = ETS_CF_CUSTOMER_PHONE;
// 					else if ("undefined" != typeof ETS_CF_CUSTOMER_ADDRESS && ETS_CF_CUSTOMER_ADDRESS && ETS_CF_CUSTOMER_ADDRESS.length)
// 					for (var _ = 0; _ < ETS_CF_CUSTOMER_ADDRESS.length; _++)(ETS_CF_CUSTOMER_ADDRESS[_].default && ETS_CF_CUSTOMER_ADDRESS[_].phone || ETS_CF_CUSTOMER_ADDRESS[_].phone) && (l = ETS_CF_CUSTOMER_ADDRESS[_].phone);
// 				o = `<input type="tel" class="ets_cf_form_control" autocomplete="off"  data-required="${e.options.required}" data-validate="isPhoneNumber" name="${e.options.name}"\n                            value="${l}"\n                            data-default="${l}"\n                             placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>`;
// 				break;
// 			case "password":
// 				o = `<div class="ets_cf_input_group_password">\n                                <input type="password" class="ets_cf_form_control" data-required="${e.options.required}" data-validate="isPassword" name="${e.options.name}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>\n                             <span class="ets_cf_toggle_view_password js-ets_cf_toggle_view_password js-ets_cf_show_password ets_cf_active" onclick="etsSfToggleViewPassword(this)"><i class="ets_cf_icon">${etsCf.icons.eye}</i></span>\n                             <span class="ets_cf_toggle_view_password js-ets_cf_toggle_view_password js-ets_cf_hide_password" onclick="etsSfToggleViewPassword(this)"><i class="ets_cf_icon">${etsCf.icons.eye_slash}</i></span>\n                        </div>`;
// 				break;
// 			case "number":
// 				o = "slider" == e.options.field_type ? `<div class="ets_cf_range_wrap">\n                                <div class="ets_cf_range_value"></div>\n                                <input class="ets_cf_input_range" type="range" autocomplete="off"\n                                data-required="${e.options.required}" data-validate="isNumber" name="${e.options.name}"\n                                min="${"number"!=typeof e.options.min&&"string"!=typeof e.options.min||""==e.options.min?"0":e.options.min}"\n                                 max="${"number"!=typeof e.options.max&&"string"!=typeof e.options.max||""==e.options.max?"100":e.options.max}"\n                                 value="${e.options.default_value?e.options.default_value:"0"}"\n                                 data-default="${e.options.default_value?e.options.default_value:"0"}"\n                                 step="${e.options.step?e.options.step:1}"\n                                 max-char="${e.options.max_character?e.options.max_character:""}" />\n                                <span class="ets_cf_rang_min">${null!==e.options.min?e.options.min:""}</span>\n                                <span class="ets_cf_rang_max">${null!==e.options.max?e.options.max:""}</span>\n                            </div>` : `<input type="number" class="ets_cf_form_control" autocomplete="off"  data-required="${e.options.required}" data-validate="isNumber" name="${e.options.name}"\n                                value="${e.options.default_value?e.options.default_value:""}"\n                                data-default="${e.options.default_value?e.options.default_value:""}"\n                                placeholder="${e.options.placeholder?e.options.default_value:""}"\n                                min="${"number"!=typeof e.options.min&&"string"!=typeof e.options.min||""==e.options.min?"0":e.options.min}"\n                                 max="${"number"!=typeof e.options.max&&"string"!=typeof e.options.max||""==e.options.max?"100":e.options.max}"\n                             step="${e.options.step?e.options.step:1}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>`;
// 				break;
// 			case "date":
// 				var d = "ets_cf_input_date",
// 					f = "isDate";
// 				e.options.allow_customer_select_time && (d = "ets_cf_input_datetime", f = "isDatetime"), o = `<div class="input_group"><input type="text" autocomplete="off" id="etsCfDate_${etsCf.makeRandom(16)}"\n                            data-required="${e.options.required}" data-validate="${f}" class="ets_cf_form_control ${d}" name="${e.options.name}"\n                            value="${e.options.default_value?e.options.default_value:""}"\n                            data-default="${e.options.default_value?e.options.default_value:""}"\n                             placeholder="${e.options.placeholder?e.options.placeholder:""} ${n}"\n                             ${null!==e.options.min?`min="${e.options.min}"`:""}\n                             ${null!==e.options.max?`max="${e.options.max}"`:""}\n                             step="${e.options.step?e.options.step:1}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>\n                             <span class="suffix">\n                                <i class="ets_cf_icon">\n                                    <svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg>\n                                </i>\n                             </span>\n                             </div>`;
// 				break;
// 			case "file":
// 				o = `<input type="file" class="ets_cf_form_control" data-required="${e.options.required}" data-validate="isFile"name="${e.options.name}"\n                              max-size="${e.options.file_size}" file-types="${e.options.acceptable_file?e.options.acceptable_file.join(","):""}"\n                             max-char="${e.options.max_character?e.options.max_character:""}"/>\n                            <div class="ets_cf_file_desc" style="${s}">\n                                 Max file size: 10Mb. Accepted formats: .pdf, .jpg, .png, .gif, .doc, .docx, .csv, .xls, .xlsx, .txt, .zip, .rar\n                            </div>`;
// 				break;
// 			case "dropdown":
// 				var m = "",
// 					p = [];
// 				if (e.options.options)
// 					for (_ = 0; _ < e.options.options.length; _++) e.options.options[_].disabled || (e.options.options[_].default && p.push(e.options.options[_].value), m += `<option value="${void 0!==e.options.options[_].static&&e.options.options[_].static?"":e.options.options[_].value}" ${e.options.options[_].default?' selected="selected"':""}>${e.options.options[_].label}</option>`);
// 				o = `<div class="ets_cf_custom_select"> ${e.options.multiline?"":'<i class="ets_icon_arrow"></i>'} <select class="ets_cf_form_control"\n                            data-required="${e.options.required}" data-valiadte="isString"\n                            data-default="${p.join("|")}"\n                            name="${e.options.name}${e.options.multiline?"[]":""}" ${e.options.multiline?"multiple":""}>\n                    ${m}\n                </select></div>`;
// 				break;
// 			case "checkbox":
// 				var u = "";
// 				if (e.options.options)
// 					for (_ = 0; _ < e.options.options.length; _++) {
// 						var b = `<span class="ets_cf_checkbox_title">${(g=e.options.options[_]).label}</span>`;
// 						u += `<div class="ets_cf_checkbox_item ${e.options.in_line?"ets_cf_checkbox_inline":"ets_cf_checkbox_block"}">\n                                        <label>\n                                            ${e.options.label_first?b:""}\n                                             <input type="checkbox" name="${e.options.name}[]"\n                                                data-required="${e.options.required}" data-default="${g.default?g.default:""}"\n                                                value="${g.value}" ${g.default?' checked="checked"':""}/>\n                                                <span class="ets_cf_checkbox_check"></span>\n                                             ${e.options.label_first?"":b}\n                                        </label>\n                                    </div>`
// 					}
// 				o = `<div class="ets_cf_checkbox_group">${u}</div>`;
// 				break;
// 			case "radio":
// 				var h = "";
// 				if (e.options.options)
// 					for (_ = 0; _ < e.options.options.length; _++) {
// 						var g;
// 						b = `<span class="ets_cf_radio_title">${(g=e.options.options[_]).label}</span>`;
// 						h += `<div class="ets_cf_radio_item  ${e.options.in_line?"ets_cf_radio_inline":"ets_cf_radio_block"}">\n                                        <label>\n                                            ${e.options.label_first?b:""}\n                                             <input type="radio" name="${e.options.name}"\n                                                data-required="${e.options.required}" data-default="${g.default?g.default:""}"\n                                                data-required="${e.options.required}" value="${g.value}" ${g.default?' checked="checked"':""}/>\n                                                <span class="ets_cf_radio_check"></span>\n                                             ${e.options.label_first?"":b}\n                                        </label>\n                                    </div>`
// 					}
// 				o = `<div class="ets_cf_radio_group">${h}</div>`;
// 				break;
// 			case "html":
// 				o = `<div class="ets_cf_html">${e.options.html?etsCf.nl2br(e.options.html):""}</div>`;
// 				break;
// 			case "quiz":
// 				o = `<div class="ets_cf_quiz">\n                          <label class="ets_cf_quiz_question">${e.options.question}</label>\n                          <input class="ets_cf_quiz_answer ets_cf_form_control" data-required="${e.options.required}" data-answer="${e.options.answer}"\n                            name="${e.options.name}" type="text" placeholder="${e.options.placeholder?e.options.placeholder:""}${e.options.label?"":"*"}" value="" />\n                    </div>`;
// 				break;
// 			case "acceptance":
// 				o = `<div class="ets_cf_acpt ets_cf_checkbox_item ets_cf_checkbox_block">\n                          <label class="ets_cf_quiz_question">\n                               <input type="checkbox" data-required="true" data-acceptance="true" name="${e.options.name}" value="1" ${e.options.default?' checked="checked"':""} />\n                               <span class="ets_cf_checkbox_check"></span>\n                               <span class="ets_cf_acpt_title">${e.options.condition}</span>\n                          </label>\n                    </div>`;
// 				break;
// 			case "image":
// 				var v = "width: 100%; background-repeat: no-repeat; display: block;";
// 				e.options.image && (v += "background-image: url(" + e.options.image + ");", v += `min-height: ${parseFloat(e.options.min_height)??100}px;`, e.options.position && ("custom" == e.options.position ? v += `background-size: ${parseFloat(e.options.custom_width)}px;` : v += `background-size: ${e.options.position};`), v += `background-position-x: ${e.options.horizontal};`, v += `background-position-y: ${e.options.vertical};`), o = e.options.link && etsCf.isUrl(e.options.link) ? `<a href="${e.options.link}"><div style="${v}" class="ets_cf_image" title="${e.options.alt}"></div></a>` : `<div style="${v}" class="ets_cf_image" title="${e.options.alt}"></div>`;
// 				break;
// 			case "ratings":
// 				var y = e.options.star_color ?? "",
// 					S = etsCf.renderStarRating(e.options.default_value, y, 5),
// 					$ = "";
// 				e.options.default_value && ($ = e.options.default_value), o = `<div class="ets_cf_ratings">\n\t\t\t\t\t\t\t<div class="ets_cf_ratings_stars" data-default="${$}" data-star="0" data-color="${y}" onclick="etsCf.onClickRating(event)">${S}</div>\n\t\t\t\t\t\t\t<input type="hidden" data-default="${e.options.default_value}" data-required="${e.options.required}" name="${e.options.name}" value="${$}">\n\t\t\t\t\t</div>`;
// 				break;
// 			case "countries":
// 				var x = etsCf.renderContentListCountries("");
// 				o = `<div class="ets_cf_countries ets_cf_custom_autocomplete">\n\t\t\t\t\t<div data-open="0" data-select="" data-label="" class="ets_cf_value_box js-ets_cf_custom_autocomplete f32">\n\t\t\t\t\t\t<span class="ets_cf_flag js-ets_cf_custom_autocomplete ets_cf_hidden"></span>\n\t\t\t\t\t\t<span class="ets_cf_label_country js-ets_cf_custom_autocomplete">--Select country--</span>\n\t\t\t\t\t\t<i class="ets_cf_icon js-ets_cf_custom_autocomplete">${etsCf.icons.up}</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="ets_cf_custom_select ets_cf_custom_select_autocomplete ets_cf_hidden">\n\t\t\t\t\t\t<ul style="max-height: 250px; overflow: auto; scroll-behavior: smooth;" class="ets_cf_list_select ets_cf_list_select_autocomplete ets_cf_list_countries f32">${x}</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type="hidden" data-default="" data-required="${e.options.required}" name="${e.options.name}" value="" />\n\t\t\t\t</div>`
// 		}
// 		return `<div class="ets_cf_form_group" id="ets_cf_ipg_${etsCf.makeRandom(10)}">\n                ${e.options.label?`<label class="ets_cf_form_label ${e.options.required?"required":""}" data-key=${e.key}>${e.options.label}</label>`:""}\n                ${o}\n                <div class="ets_cf_field_desc" style="${s}">${e.options.description?e.options.description:""}</div>\n                <div class="ets_cf_item_error"></div>\n            </div>`
// 	},
// 	renderContentListCountries: function(e) {
// 		var t = "",
// 			o = etsCf.getListCountries(e);
// 		return t += '<li class="ets_cf_list_item ets_cf_country_item ets_cf_country_item_default" data-value="" data-label="--Select country--" onclick="etsCf.onSelectCountry(this)">--Select country--</li>', o && o.map((function(e, o) {
// 			var n = e.code.toLowerCase();
// 			t += `<li data-first-character="${e.name[0]}" data-index="${o}" class="ets_cf_list_item ets_cf_country_item " data-value="${e.code}" data-label="${e.name}" onclick="etsCf.onSelectCountry(this)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style="background-image: url(${e.img})" class="flag ${n}"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="ets_cf_country_name">${e.name}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>`
// 		})), t
// 	},
// 	addForm: function(e, t, o) {
// 		if (console.log("---------addForm---------"), console.log(t, o), o = o || !1) {
// 			var n = document.createElement("div");
// 			n.innerHTML = etsCf.createPopupForm(e, !0), document.body.appendChild(n)
// 		} else {
// 			var i = new RegExp("\\{ets_cf_" + t + "\\}", "g");
// 			findAndReplaceDOMText(document.body, {
// 				find: i,
// 				replace: function() {
// 					var t;
// 					console.log("replace"), etsCf.removeInitClass(), t = "popup" == e.form_content.type_form ? etsCf.createPopupForm(e) : etsCf.renderHtmlFrom(e);
// 					var o = document.createElement("DIV");
// 					return o.setAttribute("class", "ets_cf_box_wrap"), o.innerHTML = t, o
// 				}
// 			})
// 		}
// 	},
// 	removeInitClass: function() {
// 		var e = document.querySelectorAll(".ets_cf_wrapper");
// 		if (e && e.length)
// 			for (var t = 0; t < e.length; t++) {
// 				var o = e[t].closest("ets_cf_shortcode");
// 				o && o.classList.remove("ets_cf_shortcode")
// 			}
// 	},
// 	initEvents: function() {
// 		document.addEventListener("click", (function(e) {
// 			(e.target.classList.contains("js-ets_cf_close_thank_msg") || e.target.closest(".js-ets_cf_close_thank_msg")) && (e.target.closest(".ets_cf_thank_msg").classList.contains("ets_cf_remove_form") && (e.target.closest(".ets_cf_popup") ? e.target.closest(".ets_cf_popup").classList.remove("ets_cf_popup_active") : e.target.closest(".ets_cf_box").querySelector(".ets_cf_wrapper ").classList.remove("ets_cf_hidden")), e.target.closest(".ets_cf_box").classList.remove("ets_cf_only_thank"), e.target.closest(".ets_cf_thank_msg").remove());
// 			for (var t = document.querySelectorAll(".ets_cf_popup"), o = 0; o < t.length; o++) e.target == t[o] && t[o].closest(".ets_cf_popup").classList.remove("ets_cf_popup_active");
// 			if (!e.target.classList.contains("ets_cf_custom_autocomplete") && !e.target.closest(".ets_cf_custom_autocomplete")) {
// 				var n = document.querySelectorAll(".ets_cf_value_box");
// 				n && n.length && n.forEach((function(e) {
// 					var t = e.getAttribute("data-open");
// 					if (t && "0" != t) {
// 						var o = e.querySelector(".ets_cf_label_country");
// 						o && etsCf.onToggleAutoComplete(o)
// 					}
// 				}))
// 			}
// 			if (e.target.classList.contains("js-ets_cf_custom_autocomplete") || e.target.closest(".js-ets_cf_custom_autocomplete")) {
// 				var i = e.target.closest(".ets_cf_value_box");
// 				if (i) {
// 					var s = i.querySelector(".ets_cf_label_country");
// 					s && etsCf.onToggleAutoComplete(s)
// 				}
// 			}
// 		}));
// 		var e = document.querySelectorAll("form.ets_cf_form_data_contact");
// 		if (e.length)
// 			for (var t = 0; t < e.length; t++) {
// 				var o = e[t].querySelector('button[type="submit"]');
// 				o && o.addEventListener("click", (function(e) {
// 					e.preventDefault();
// 					var t = this.closest("form");
// 					return etsCf.validateSubmitForm(t) ? etsCf.submitContactForm(t) : etsCf.resetCatchav2(t), !1
// 				}))
// 			}
// 		var n = document.querySelectorAll(".ets_cf_input_range");
// 		if (n.length)
// 			for (t = 0; t < n.length; t++) n[t].addEventListener("input", (function() {
// 				etsCf.setInputRange(this)
// 			}));
// 		var i = document.querySelectorAll("input,textarea,select");
// 		if (i.length)
// 			for (t = 0; t < i.length; t++) {
// 				var s = i[t].getAttribute("type"); - 1 !== ["file", "checkbox", "radio"].indexOf(s) || "select" == i[t].tagName ? i[t].addEventListener("change", (function() {
// 					etsCf.clearInputError(this);
// 					var e = this.closest("form");
// 					e && etsCf.clearErrorAllForm(e)
// 				})) : i[t].addEventListener("input", (function() {
// 					etsCf.clearInputError(this);
// 					var e = this.closest("form");
// 					e && etsCf.clearErrorAllForm(e)
// 				}))
// 			}
// 		this.onClick(".js-ets_cf_btn_next_step", (function(e) {
// 			etsCf.nextStep(e)
// 		})), this.onClick(".js-ets_cf_btn_back_step", (function(e) {
// 			etsCf.backStep(e)
// 		})), this.onClick(".js-ets_cf_step_number", (function(e) {
// 			etsCf.onClickStep(e)
// 		})), this.onClick(".js-ets_cf_btn_popup_open_form", (function(e) {
// 			etsCf.onOpenPopupForm(e)
// 		})), this.onClick(".js-ets_cf_btn_close_popup", (function(e) {
// 			etsCf.onClosePopupForm(e)
// 		})), document.addEventListener("keyup", (function(e) {
// 			var t = document.querySelectorAll(".ets_cf_custom_select_autocomplete");
// 			t && t.length && t.forEach((function(t) {
// 				if (!t.classList.contains("ets_cf_hidden")) {
// 					var o = t.querySelectorAll(".ets_cf_country_name"),
// 						n = t.querySelector("ul");
// 					if (n && o && o.length)
// 						for (var i = 0; i < o.length; i++)
// 							if (0 == o[i].innerHTML.toLowerCase().indexOf(e.key)) {
// 								var s = o[i].closest("li").offsetTop,
// 									c = n.offsetTop;
// 								n.scroll({
// 									top: s - c,
// 									behavior: "smooth"
// 								});
// 								break
// 							}
// 				}
// 			}))
// 		}))
// 	},
// 	onClick: function(e, t) {
// 		var o = document.querySelectorAll(e);
// 		if (o.length)
// 			for (var n = 0; n < o.length; n++) o[n].addEventListener("click", (function() {
// 				t(this)
// 			}))
// 	},
// 	onSelectCountry: function(e, t) {
// 		var o = e.getAttribute("data-value"),
// 			n = e.getAttribute("data-label"),
// 			i = e.closest(".ets_cf_countries"),
// 			s = i.querySelector('input[type="hidden"]');
// 		if (s) {
// 			s.value = o, etsCf.clearInputError(s);
// 			var c = s.closest("form");
// 			c && etsCf.clearErrorAllForm(c)
// 		}
// 		var r = i.querySelector(".ets_cf_value_box");
// 		if (r) {
// 			r.querySelector(".ets_cf_label_country").innerHTML = n ?? "--Select country--", r.setAttribute("data-value", o), r.setAttribute("data-label", n);
// 			var a = r.querySelector(".ets_cf_flag"),
// 				l = e.querySelector(".flag");
// 			if (a) {
// 				var _ = `ets_cf_flag js-ets_cf_custom_autocomplete flag ${o.toLowerCase()}`;
// 				a.setAttribute("class", _), l ? (a.setAttribute("style", l.getAttribute("style")), a.classList.remove("ets_cf_hidden")) : (a.setAttribute("style", ""), a.classList.add("ets_cf_hidden"))
// 			}
// 			etsCf.onToggleAutoComplete(r.querySelector(".ets_cf_label_country"), t)
// 		}
// 	},
// 	onToggleAutoComplete: function(e, t) {
// 		t || console.log("!isReset: ", typeof t);
// 		var o = e.closest(".ets_cf_value_box");
// 		if (o) {
// 			var n = !1;
// 			void 0 !== o.getAttribute("data-open") && (n = "1" != o.getAttribute("data-open"));
// 			var i = o.closest(".ets_cf_custom_autocomplete").querySelector(".ets_cf_custom_select");
// 			n && !t ? (o.setAttribute("data-open", "1"), i.classList.remove("ets_cf_hidden"), o.querySelector(".ets_cf_icon").innerHTML = etsCf.icons.down) : (i.classList.add("ets_cf_hidden"), o.setAttribute("data-open", "0"), o.querySelector(".ets_cf_icon").innerHTML = etsCf.icons.up)
// 		}
// 	},
// 	renderStarRating: function(e, t, o) {
// 		o || (o = 5);
// 		for (var n = "", i = 1; i <= o; i++) n += e >= i ? `<i data-star="${i}" data-color="${t}" class="ets-icon ets-icon-star-full js-ets_cf_star_rating" onclick="etsCf.onClickRating(event)">\n            <svg style="${t?`color: ${t}; fill: ${t};`:""}" width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">\n              <path\n                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>\n            </svg>\n          </i>` : `<i data-star="${i}" data-color="${t}" class="ets-icon ets-icon-star-o js-ets_cf_star_rating" onclick="etsCf.onClickRating(event)">\n            <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">\n              <path\n                d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>\n            </svg>\n          </i>`;
// 		return n
// 	},
// 	handleClickRating: function(e) {
// 		var t = e.getAttribute("data-star");
// 		t = parseInt(t) < 0 ? 0 : parseInt(t);
// 		var o = e.getAttribute("data-color"),
// 			n = e.closest(".ets_cf_ratings");
// 		if (t >= 0 && t <= 5 && n) {
// 			var i = n.querySelector('input[type="hidden"]');
// 			if (i) {
// 				i.value = t || "", etsCf.clearInputError(i);
// 				var s = i.closest("form");
// 				s && etsCf.clearErrorAllForm(s)
// 			}
// 			var c = etsCf.renderStarRating(t, o, 5);
// 			n.querySelector(".ets_cf_ratings_stars").innerHTML = c
// 		}
// 	},
// 	onClickRating: function(e) {
// 		(e.target.classList.contains("js-ets_cf_star_rating") || e.target.closest(".js-ets_cf_star_rating")) && e.target.closest(".js-ets_cf_star_rating") ? etsCf.handleClickRating(e.target.closest(".js-ets_cf_star_rating")) : etsCf.handleClickRating(e.target)
// 	},
// 	onClickOutsideRating: function(e) {
// 		etsCf.handleClickRating(e.target)
// 	},
// 	onClosePopupForm: function(e) {
// 		e.closest(".ets_cf_popup").classList.remove("ets_cf_popup_active")
// 	},
// 	onOpenPopupForm: function(e) {
// 		e.nextElementSibling.classList.add("ets_cf_popup_active");
// 		var t = e.nextElementSibling.querySelector(".ets_cf_thank_msg");
// 		t && t.remove(), e.nextElementSibling.classList.remove("ets_cf_only_thank"), e.nextElementSibling.querySelector(".ets_cf_box").classList.remove("ets_cf_hidden"), e.nextElementSibling.querySelector(".ets_cf_wrapper").classList.remove("ets_cf_hidden")
// 	},
// 	toggleViewPassword: function(e) {
// 		if (e.classList.remove("ets_cf_active"), e.classList.contains("js-ets_cf_show_password")) {
// 			var t = e.closest(".ets_cf_input_group_password").querySelector("input[type=password]");
// 			t && t.setAttribute("type", "text"), e.closest(".ets_cf_input_group_password").querySelector(".js-ets_cf_hide_password").classList.add("ets_cf_active")
// 		} else if (e.classList.contains("js-ets_cf_hide_password")) {
// 			var o = e.closest(".ets_cf_input_group_password").querySelector("input[type=text]");
// 			o && o.setAttribute("type", "password"), e.closest(".ets_cf_input_group_password").querySelector(".js-ets_cf_show_password").classList.add("ets_cf_active")
// 		}
// 	},
// 	validateSubmitForm: function(e) {
// 		var t = e.closest(".ets_cf_box").querySelector(".ets_cf_thank_msg");
// 		t && t.remove(), etsCf.clearFormErrors(e);
// 		var o = e.querySelectorAll("input,textarea,select");
// 		if (!o.length) return !1;
// 		for (var n = !1, i = 0; i < o.length; i++) etsCf.validateInput(o[i]) || n || (n = !0);
// 		return n && etsCf.setErrorAllform(e, "Please fill in all required fields with valid information."), this.validateRecaptcha(e) || (etsCf.setErrorAllform(e, "Please check on CAPTCHA to make sure you're not a robot."), n = !0), !n
// 	},
// 	validateInput: function(e) {
// 		var t = {};
// 		"undefined" != typeof ETS_CF_CONFIG && void 0 !== ETS_CF_CONFIG.translations && (t = ETS_CF_CONFIG.translations);
// 		var o = e.getAttribute("data-required"),
// 			n = e.value,
// 			i = e.type;
// 		if (o && "true" == o && ("checkbox" == i || "radio" == i)) {
// 			for (var s = e.closest(".ets_cf_form_group").querySelectorAll('input[type="' + i + '"]'), c = !1, r = 0; r < s.length; r++)
// 				if (s[r].checked) {
// 					c = !0;
// 					break
// 				} if (!c) {
// 				e.closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid");
// 				var a = e.getAttribute("data-acceptance");
// 				return e.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = a && "true" == a ? t.translation_field_4 : t.translation_field_5, !1
// 			}
// 			return !0
// 		}
// 		if (o && "true" == o && !n) return e.closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid"), e.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t.translation_field_5, !1;
// 		var l = e.getAttribute("data-validate");
// 		if (l || (l = "isString"), n && l && "function" == typeof etsCf[l]) {
// 			var _;
// 			if ("isFile" == l) {
// 				var d = e.getAttribute("max-size");
// 				d = d ? parseFloat(d) : 10, _ = etsCf.isFile(e, ["png", "jpg", "jpeg", "gif", "pdf", "doc", "docx", "csv", "xls", "xlsx", "txt", "zip", "rar"], d)
// 			} else _ = etsCf[l](n);
// 			if (!_) return e.closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid"), e.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t.translation_field_7, !1
// 		}
// 		return !0
// 	},
// 	clearInputError: function(e) {
// 		e.closest(".ets_cf_form_group") && e.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error") && (e.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = "")
// 	},
// 	submitContactForm: function(e) {
// 		var t = e.getAttribute("action"),
// 			o = new FormData(e);
// 		o.append("browser", this.detectBrowser()), etsCf.clearFormErrors(e);
// 		var n = e.querySelectorAll('button[type="submit"]');
// 		if (n.length) {
// 			if (n[0].classList.contains("ets_cf_btn_loading")) return !1;
// 			for (var i = 0; i < n.length; i++) n[i].disabled = !0, n[i].classList.add("ets_cf_btn_loading")
// 		}
// 		var s = new XMLHttpRequest;
// 		s.onreadystatechange = function() {
// 			if (4 == s.readyState && n.length)
// 				for (var t = 0; t < n.length; t++) n[t].disabled = !1, n[t].classList.remove("ets_cf_btn_loading");
// 			if (4 == s.readyState && 200 == s.status) {
// 				var o = s.responseText,
// 					i = JSON.parse(o);
// 				if (i.success) {
// 					if (etsCf.resetCatchav2(e), i.thank_msg) {
// 						etsCf.showThankMessage(e, i.thank_msg, i.keep_form);
// 						var c = e.closest(".ets_cf_box").querySelector(".ets_cf_thank_msg");
// 						c ? setTimeout((function() {
// 							c.scrollIntoView({
// 								block: "center"
// 							})
// 						}), 100) : console.log("Show message")
// 					}
// 					i.keep_form || (e.closest(".ets_cf_popup") ? e.closest(".ets_cf_popup").classList.add("ets_cf_only_thank") : e.closest(".ets_cf_box").classList.add("ets_cf_only_thank"), e.closest(".ets_cf_wrapper").classList.add("ets_cf_hidden")), etsCf.clearForm(e)
// 				} else i.errors && etsCf.setFormError(e, i.errors), etsCf.setErrorAllform(e, i.message)
// 			}
// 		}, s.open("POST", t), s.send(o)
// 	},
// 	resetCatchav2: function(e) {
// 		var t = e.querySelectorAll(".ets_cf_recaptcha_v2");
// 		if (t.length && "undefined" != typeof grecaptcha)
// 			for (var o = 0; o < t.length; o++) {
// 				var n = t[o].getAttribute("id");
// 				void 0 !== etsCf.recaptchaItems[n] && grecaptcha.reset(etsCf.recaptchaItems[n])
// 			}
// 	},
// 	setErrorAllform: function(e, t) {
// 		alert()
// 		var o = `<div class="ets_cf_alert ets_cf_alert_error">\n              ${t}\n        </div>`,
// 			n = e.closest(".ets_cf_wrapper").querySelectorAll(".ets_cf_form_errors");
// 		n && n.length && n.forEach((function(e) {
// 			e.innerHTML = o
// 		}))
// 	},
// 	clearErrorAllForm: function(e, t) {
// 		var o = e.closest(".ets_cf_wrapper").querySelectorAll(".ets_cf_form_errors");
// 		o && o.length && o.forEach((function(e) {
// 			e.innerHTML = ""
// 		}))
// 	},
// 	clearFormErrors: function(e) {
// 		etsCf.clearErrorAllForm(e);
// 		for (var t = e.querySelectorAll(".ets_cf_field_invalid"), o = 0; o < t.length; o++) t[o].classList.remove("ets_cf_field_invalid"), t[o].querySelector(".ets_cf_item_error").innerHTML = ""
// 	},
// 	setFormError: function(e, t) {
// 		var o = null;
// 		if (Object.keys(t).forEach((function(n) {
// 				if (o || (o = {
// 						key: n,
// 						error: t[n][0]
// 					}), "g-recaptcha-response" == n) {
// 					var i = e.querySelectorAll(".ets_cf_recaptcha");
// 					if (i && i.length)
// 						for (var s = 0; s < i.length; s++) i[s].closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid"), i[s].closest(".ets_cf_form_group").querySelector(".ets_cf_item_error") && (i[s].closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t[n][0]);
// 					else etsCf.setErrorAllform(e, t[n][0])
// 				} else e.querySelector('[name="' + n + '"]') ? (e.querySelector('[name="' + n + '"]').closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid"), e.querySelector('[name="' + n + '"]').closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t[n][0]) : e.querySelector('[name="' + n + '[]"]') && (e.querySelector('[name="' + n + '[]"]').closest(".ets_cf_form_group").classList.add("ets_cf_field_invalid"), e.querySelector('[name="' + n + '[]"]').closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t[n][0])
// 			})), !o) return !1;
// 		if (e.querySelector(".ets_cf_form_step_box")) {
// 			var n = -1;
// 			if ("g-recaptcha-response" == o.key && e.querySelector(".ets_cf_recaptcha") ? n = e.querySelector(".ets_cf_recaptcha").closest(".ets_cf_step_form_item").getAttribute("data-step-index") : e.querySelector('[name="' + o.key + '"]') && (n = e.querySelector('[name="' + o.key + '"]').closest(".ets_cf_step_form_item").getAttribute("data-step-index")), -1 !== n) {
// 				var i = e.querySelectorAll(".ets_cf_step_form_item");
// 				if (i.length)
// 					for (var s = 0; s < i.length; s++) parseInt(n) > s && e.querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (s + 1) + ")").classList.remove("ets_cf_step_completed"), i[s].getAttribute("data-step-index") != n ? (i[s].classList.remove("ets_cf_step_active"), e.querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (s + 1) + ")").classList.remove("ets_cf_step_active")) : (i[s].classList.add("ets_cf_step_active"), e.querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (s + 1) + ")").classList.add("ets_cf_step_active"))
// 			}
// 		}
// 		var c = null;
// 		"g-recaptcha-response" == o.key && e.querySelector(".ets_cf_recaptcha") ? c = e.querySelector(".ets_cf_recaptcha").closest(".ets_cf_form_group").getAttribute("id") : e.querySelector('[name="' + o.key + '"]') && (c = e.querySelector('[name="' + o.key + '"]').closest(".ets_cf_form_group").getAttribute("id")), c && document.getElementById(c).scrollIntoView({
// 			block: "center"
// 		})
// 	},
// 	clearForm: function(e) {
// 		e.reset();
// 		var t = e.querySelectorAll("input, textarea, select");
// 		if (!t.length) return !1;
// 		for (var o = 0; o < t.length; o++)
// 			if (t[o].closest(".ets_cf_form_group")) {
// 				t[o].closest(".ets_cf_form_group").classList.remove("ets_cf_field_invalid"), t[o].closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = "";
// 				var n = t[o].getAttribute("data-default");
// 				if ("checkbox" == t[o].getAttribute("type") || "radio" == t[o].getAttribute("type")) t[o].checked = !(!n || "true" != n);
// 				else if ("file" == t[o].getAttribute("type")) t[o].value = "";
// 				else if ("SELECT" == t[o].tagName && t[o].multiple) {
// 					var i = t[o].querySelectorAll("option"),
// 						s = n.split("|");
// 					if (i.length && s.length)
// 						for (var c = 0; c < i.length; c++) - 1 !== s.indexOf(i[c].value) && (i.selected = !0)
// 				} else {
// 					t[o].value = n || "";
// 					var r = t[o].closest(".ets_cf_ratings");
// 					if (r)
// 						if (n && "0" != n) {
// 							var a = r.querySelector('.js-ets_cf_star_rating[data-star="' + n + '"]');
// 							etsCf.onClickRating(a)
// 						} else a = r.querySelector(".ets_cf_ratings_stars"), etsCf.handleClickRating(a)
// 				}
// 			} var l = e.querySelectorAll(".ets_cf_country_item_default");
// 		l.length && l.forEach((function(e) {
// 			etsCf.onSelectCountry(e, !0)
// 		}))
// 	},
// 	showThankMessage: function(e, t, o) {
// 		var n = `<div class="ets_cf_thank_msg ${o?"":"ets_cf_remove_form"}">\n                    <button class="ets_cf_close_thank_msg js-ets_cf_close_thank_msg"><i class="ets_cf_icon">${etsCf.icons.close}</i></button>\n                    ${etsCf.nl2br(t)}\n            </div>`;
// 		e.closest(".ets_cf_box").querySelector(".ets_cf_thank_msg") && e.closest(".ets_cf_box").querySelector(".ets_cf_thank_msg").remove(), e.closest(".ets_cf_box").appendChild(this.createElementFromHTML(n))
// 	},
// 	setReCaptcha: function() {
// 		if (!ETS_CF_CONFIG || !ETS_CF_CONFIG.recaptcha || !ETS_CF_CONFIG.recaptcha.enable) return !1;
// 		if (document.querySelectorAll(".ets_cf_recaptcha_v2").length && "v2" == ETS_CF_CONFIG.recaptcha.type)(e = document.createElement("script")).setAttribute("src", "https://www.google.com/recaptcha/api.js?onload=etsCfLoadRecaptcha&render=explicit"), e.setAttribute("async", "async"), e.setAttribute("defer", "defer"), document.getElementsByTagName("head")[0].append(e);
// 		else if (document.querySelectorAll(".ets_cf_recaptcha_v3").length && "v3" == ETS_CF_CONFIG.recaptcha.type) {
// 			var e;
// 			(e = document.createElement("script")).setAttribute("src", "https://www.google.com/recaptcha/api.js?onload=etsCfLoadRecaptchaV3&render=" + ETS_CF_CONFIG.recaptcha.site_key_v3), document.getElementsByTagName("head")[0].append(e)
// 		}
// 	},
// 	validateNextStep: function(e) {
// 		var t = e.querySelectorAll("input,textarea,select");
// 		if (!t.length) return !1;
// 		for (var o = !1, n = 0; n < t.length; n++) etsCf.validateInput(t[n]) || o || (o = !0);
// 		return this.validateRecaptcha(e) || (o = !0), !o
// 	},
// 	validateRecaptcha: function(e) {
// 		var t = {};
// 		"undefined" != typeof ETS_CF_CONFIG && void 0 !== ETS_CF_CONFIG.translations && (t = ETS_CF_CONFIG.translations);
// 		var o = e.querySelector(".ets_cf_recaptcha_v2");
// 		if (o && "undefined" != typeof grecaptcha) {
// 			var n = o.getAttribute("id");
// 			if (void 0 !== etsCf.recaptchaItems[n])
// 				if (!grecaptcha.getResponse(etsCf.recaptchaItems[n])) return o.closest(".ets_cf_form_group").querySelector(".ets_cf_item_error").innerHTML = t.translation_field_8, !1
// 		}
// 		return !0
// 	},
// 	onClickStep: function(e) {
// 		if (!e.closest(".ets_cf_step_item").classList.contains("ets_cf_step_completed")) return !1;
// 		var t = etsCf.getIndex(e.closest(".ets_cf_step_item"));
// 		if (-1 !== t) {
// 			for (var o = e.closest(".ets_cf_box").querySelectorAll(".ets_cf_step_form_item"), n = 0; n < o.length; n++) o[n].classList.remove("ets_cf_step_active"), n > t && o[n].closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (n + 1) + ")").classList.remove("ets_cf_step_completed");
// 			e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item:nth-child(" + (t + 1) + ")").classList.add("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item.ets_cf_step_active").classList.remove("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (t + 1) + ")").classList.add("ets_cf_step_active")
// 		}
// 	},
// 	nextStep: function(e) {
// 		if (e.closest(".ets_cf_step_form_item").classList.add("ets_cf_step_completed"), !this.validateNextStep(e.closest(".ets_cf_step_form_item"))) return !1;
// 		if (e.closest(".ets_cf_step_form_item").classList.remove("ets_cf_step_active"), e.closest(".ets_cf_step_form_item").nextElementSibling && e.closest(".ets_cf_step_form_item").nextElementSibling.classList.add("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item.ets_cf_step_active")) {
// 			var t = etsCf.getIndex(e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item.ets_cf_step_active")); - 1 !== t && (e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item.ets_cf_step_active").classList.add("ets_cf_step_completed"), e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item.ets_cf_step_active").classList.remove("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (t + 1) + ")").classList.add("ets_cf_step_active"))
// 		}
// 	},
// 	backStep: function(e) {
// 		var t = etsCf.getIndex(e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item.ets_cf_step_active"));
// 		if (e.closest(".ets_cf_step_form_item").classList.remove("ets_cf_step_active"), -1 !== t && e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (t + 1) + ")").classList.remove("ets_cf_step_completed"), e.closest(".ets_cf_step_form_item").previousElementSibling && e.closest(".ets_cf_step_form_item").previousElementSibling.classList.add("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item.ets_cf_step_active")) {
// 			var o = etsCf.getIndex(e.closest(".ets_cf_box").querySelector(".ets_cf_step_form_item.ets_cf_step_active")); - 1 !== o && (e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item.ets_cf_step_active").classList.remove("ets_cf_step_active"), e.closest(".ets_cf_box").querySelector(".ets_cf_form_step_header .ets_cf_step_item:nth-child(" + (o + 1) + ")").classList.add("ets_cf_step_active"))
// 		}
// 	},
// 	getIndex: function(e) {
// 		for (var t = e.parentNode.childNodes, o = 0, n = 0; n < t.length; n++) {
// 			if (t[n] == e) return o;
// 			1 == t[n].nodeType && o++
// 		}
// 		return -1
// 	},
// 	makeRandom: function(e) {
// 		e = e || 16;
// 		for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = o.length, i = 0; i < e; i++) t += o.charAt(Math.floor(Math.random() * n));
// 		return t
// 	},
// 	icons: {
// 		eye: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n</svg>',
// 		eye_slash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg>',
// 		save: '<svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"></path></svg>',
// 		close: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>\n</svg>',
// 		up: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" class="svg-inline--fa fa-angle-up fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>',
// 		down: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>'
// 	},
// 	recaptchaOnloadCallback: function() {
// 		var e = document.querySelectorAll(".ets_cf_recaptcha_v2");
// 		if (e.length && "v2" == ETS_CF_CONFIG.recaptcha.type)
// 			for (var t = 0; t < e.length; t++) {
// 				var o = e[t].getAttribute("id");
// 				if (o) {
// 					var n = grecaptcha.render(o, {
// 						sitekey: ETS_CF_CONFIG.recaptcha.site_key_v2,
// 						theme: e[t].getAttribute("data-theme"),
// 						size: e[t].getAttribute("data-size")
// 					});
// 					etsCf.recaptchaItems[o] = n
// 				}
// 			}
// 	},
// 	getRecaptchaV3: function() {
// 		var e = document.querySelectorAll(".ets_cf_recaptcha_v3");
// 		e.length && "v3" == ETS_CF_CONFIG.recaptcha.type && grecaptcha.ready((function() {
// 			try {
// 				grecaptcha.execute(ETS_CF_CONFIG.recaptcha.site_key_v3, {
// 					action: "validate_captcha"
// 				}).then((function(t) {
// 					for (var o = 0; o < e.length; o++) e[o].value = t
// 				}))
// 			} catch (e) {
// 				console.log("Error captcha key")
// 			}
// 		}))
// 	},
// 	isFill: function(e) {
// 		return "string" == typeof(e = e.trim()) && e.length > 0
// 	},
// 	isString: function(e) {
// 		return "string" == typeof(e = e.trim()) || e instanceof String
// 	},
// 	isInt: function(e) {
// 		return Number(e) === e && e % 1 == 0
// 	},
// 	isFloat: function(e) {
// 		return Number(e) === e && e % 1 != 0
// 	},
// 	isNumber: function(e) {
// 		return !isNaN(e)
// 	},
// 	isEmail: function(e) {
// 		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
// 	},
// 	isPhoneNumber: function(e) {
// 		return e = e.trim(), /^([0-9\s\-\+\(\)]*)$/g.test(e)
// 	},
// 	isUrl: function(e) {
// 		return e = e.trim(), new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
// 	},
// 	isDate: function(e) {
// 		return /^(\d{2})\/(\d{2})\/(\d{4})$/g.test(e)
// 	},
// 	isDatetime: function(e) {
// 		return /^(\d{2})\/(\d{2})\/(\d{4})\s(\d{2}):(\d{2}):(\d{2})$/g.test(e)
// 	},
// 	isFileName: function(e) {
// 		if ("file" == e.type) {
// 			var t = e.value.replace(/^.*[\\\/]/, "");
// 			return t = t.replace(/\s+/g, "_"), /^[a-zA-Z0-9_\.\-\(\)]+$/.test(t)
// 		}
// 		return !1
// 	},
// 	isFile: function(e, t, o) {
// 		if (!this.isFileName(e)) return !1;
// 		if ("file" == e.type) {
// 			var n = e.value;
// 			if (n.length > 0) {
// 				var i = !1;
// 				t.length || (i = !0);
// 				for (var s = 0; s < t.length; s++) {
// 					var c = t[s];
// 					if (n.substr(n.length - c.length, c.length).toLowerCase() == c.toLowerCase()) {
// 						i = !0;
// 						break
// 					}
// 				}
// 				if (!i) return !1
// 			}
// 			if ((e.files[0].size / 1024 / 1024).toFixed(2) > o) return !1
// 		}
// 		return !0
// 	},
// 	initNumberRange: function() {
// 		var e = document.querySelectorAll(".ets_cf_input_range");
// 		if (e.length)
// 			for (var t = 0; t < e.length; t++) this.setInputRange(e[t])
// 	},
// 	setInputRange: function(e) {
// 		var t = e.previousElementSibling,
// 			o = e.value,
// 			n = 0;
// 		e.getAttribute("min") && (n = e.getAttribute("min"));
// 		var i = 0;
// 		e.getAttribute("max") && (i = e.getAttribute("max")), o && "0" != o || (o = 0);
// 		try {
// 			n && parseFloat(n) > parseFloat(o) ? o = n : i && parseFloat(i) < parseFloat(o) && (o = i)
// 		} catch (e) {}
// 		const s = Number(100 * (o - n) / (i - n));
// 		t.innerHTML = "<span>" + o + "</span>", t.style.left = "calc(" + s + "% + (" + (10 - .2 * s) + "px))"
// 	},
// 	nl2br: function(e, t) {
// 		return null == e ? "" : (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + (t || void 0 === t ? "<br />" : "<br>") + "$2")
// 	},
// 	createElementFromHTML: function(e) {
// 		var t = document.createElement("div");
// 		return t.innerHTML = e.trim(), t.firstChild
// 	},
// 	detectBrowser: function() {
// 		return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "Opera" : -1 != navigator.userAgent.indexOf("Edg") ? "Edge" : -1 != navigator.userAgent.indexOf("Chrome") ? "Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : "Unknown"
// 	},
// 	getTextNodesContaining: function(e) {
// 		for (var t, o = document.body, n = [], i = document.createTreeWalker(o, 4, {
// 				acceptNode: t => RegExp(e).test(t.data)
// 			}); t = i.nextNode();) n.push(t);
// 		return n
// 	},
// 	getListCountries: function(e) {
// 		var t = [];
// 		return [{
// 			code: "AF",
// 			code3: "AFG",
// 			name: "Afghanistan",
// 			number: "004",
// 			img: "https://i.ibb.co/447cG9c/af.gif"
// 		}, {
// 			code: "AL",
// 			code3: "ALB",
// 			name: "Albania",
// 			number: "008",
// 			img: "https://i.ibb.co/JqN4n4C/al.gif"
// 		}, {
// 			code: "DZ",
// 			code3: "DZA",
// 			name: "Algeria",
// 			number: "012",
// 			img: "https://i.ibb.co/RcNS8c1/dz.gif"
// 		}, {
// 			code: "AS",
// 			code3: "ASM",
// 			name: "American Samoa",
// 			number: "016",
// 			img: "https://i.ibb.co/HXkBTbc/as.gif"
// 		}, {
// 			code: "AD",
// 			code3: "AND",
// 			name: "Andorra",
// 			number: "020",
// 			img: "https://i.ibb.co/bHzvBpz/ad.gif"
// 		}, {
// 			code: "AO",
// 			code3: "AGO",
// 			name: "Angola",
// 			number: "024",
// 			img: "https://i.ibb.co/3ysRP7T/ao.gif"
// 		}, {
// 			code: "AI",
// 			code3: "AIA",
// 			name: "Anguilla",
// 			number: "660",
// 			img: "https://i.ibb.co/X4j18SX/ai.gif"
// 		}, {
// 			code: "AQ",
// 			code3: "ATA",
// 			name: "Antarctica",
// 			number: "010",
// 			img: "https://i.ibb.co/YZ3xXB1/aq.jpg"
// 		}, {
// 			code: "AG",
// 			code3: "ATG",
// 			name: "Antigua and Barbuda",
// 			number: "028",
// 			img: "https://i.ibb.co/J578qHq/ag.gif"
// 		}, {
// 			code: "AR",
// 			code3: "ARG",
// 			name: "Argentina",
// 			number: "032",
// 			img: "https://i.ibb.co/S3TjkLD/ar.gif"
// 		}, {
// 			code: "AM",
// 			code3: "ARM",
// 			name: "Armenia",
// 			number: "051",
// 			img: "https://i.ibb.co/0mjzNWY/am.gif"
// 		}, {
// 			code: "AW",
// 			code3: "ABW",
// 			name: "Aruba",
// 			number: "533",
// 			img: "https://i.ibb.co/YdfLVR4/aw.gif"
// 		}, {
// 			code: "AU",
// 			code3: "AUS",
// 			name: "Australia",
// 			number: "036",
// 			img: "https://i.ibb.co/cykGbq7/au.gif"
// 		}, {
// 			code: "AT",
// 			code3: "AUT",
// 			name: "Austria",
// 			number: "040",
// 			img: "https://i.ibb.co/Cn7XbYt/at.gif"
// 		}, {
// 			code: "AZ",
// 			code3: "AZE",
// 			name: "Azerbaijan",
// 			number: "031",
// 			img: "https://i.ibb.co/Qky5VP3/az.gif"
// 		}, {
// 			code: "BS",
// 			code3: "BHS",
// 			name: "Bahamas (the)",
// 			number: "044",
// 			img: "https://i.ibb.co/hZCGxy4/bs.gif"
// 		}, {
// 			code: "BH",
// 			code3: "BHR",
// 			name: "Bahrain",
// 			number: "048",
// 			img: "https://i.ibb.co/CwpysDh/bh.gif"
// 		}, {
// 			code: "BD",
// 			code3: "BGD",
// 			name: "Bangladesh",
// 			number: "050",
// 			img: "https://i.ibb.co/6vdtrZR/bd.gif"
// 		}, {
// 			code: "BB",
// 			code3: "BRB",
// 			name: "Barbados",
// 			number: "052",
// 			img: "https://i.ibb.co/FBV4jcP/bb.gif"
// 		}, {
// 			code: "BY",
// 			code3: "BLR",
// 			name: "Belarus",
// 			number: "112",
// 			img: "https://i.ibb.co/LYp5j7x/by.gif"
// 		}, {
// 			code: "BE",
// 			code3: "BEL",
// 			name: "Belgium",
// 			number: "056",
// 			img: "https://i.ibb.co/wQfjX3f/be.gif"
// 		}, {
// 			code: "BZ",
// 			code3: "BLZ",
// 			name: "Belize",
// 			number: "084",
// 			img: "https://i.ibb.co/2v9t2qt/bz.gif"
// 		}, {
// 			code: "BJ",
// 			code3: "BEN",
// 			name: "Benin",
// 			number: "204",
// 			img: "https://i.ibb.co/Jpkm7gT/bj.gif"
// 		}, {
// 			code: "BM",
// 			code3: "BMU",
// 			name: "Bermuda",
// 			number: "060",
// 			img: "https://i.ibb.co/sHMK6Jg/bm.gif"
// 		}, {
// 			code: "BT",
// 			code3: "BTN",
// 			name: "Bhutan",
// 			number: "064",
// 			img: "https://i.ibb.co/YR6PbnS/bt.gif"
// 		}, {
// 			code: "BO",
// 			code3: "BOL",
// 			name: "Bolivia (Plurinational State of)",
// 			number: "068",
// 			img: "https://i.ibb.co/3c6WHSr/bo.gif"
// 		}, {
// 			code: "BQ",
// 			code3: "BES",
// 			name: "Bonaire, Sint Eustatius and Saba",
// 			number: "535",
// 			img: "https://i.ibb.co/tQ6L5HN/bq.png"
// 		}, {
// 			code: "BA",
// 			code3: "BIH",
// 			name: "Bosnia and Herzegovina",
// 			number: "070",
// 			img: "https://i.ibb.co/QPQt7DQ/ba.gif"
// 		}, {
// 			code: "BW",
// 			code3: "BWA",
// 			name: "Botswana",
// 			number: "072",
// 			img: "https://i.ibb.co/PMLhfKt/bw.gif"
// 		}, {
// 			code: "BV",
// 			code3: "BVT",
// 			name: "Bouvet Island",
// 			number: "074",
// 			img: "https://i.ibb.co/WFn8R5K/bv.gif"
// 		}, {
// 			code: "BR",
// 			code3: "BRA",
// 			name: "Brazil",
// 			number: "076",
// 			img: "https://i.ibb.co/qy0KRJ7/br.gif"
// 		}, {
// 			code: "IO",
// 			code3: "IOT",
// 			name: "British Indian Ocean Territory (the)",
// 			number: "086",
// 			img: "https://i.ibb.co/HKNpWhY/io.gif"
// 		}, {
// 			code: "BN",
// 			code3: "BRN",
// 			name: "Brunei Darussalam",
// 			number: "096",
// 			img: "https://i.ibb.co/qnG0qpm/bn.gif"
// 		}, {
// 			code: "BG",
// 			code3: "BGR",
// 			name: "Bulgaria",
// 			number: "100",
// 			img: "https://i.ibb.co/Lx6DJWT/bg.gif"
// 		}, {
// 			code: "BF",
// 			code3: "BFA",
// 			name: "Burkina Faso",
// 			number: "854",
// 			img: "https://i.ibb.co/BKgYrK6/bf.gif"
// 		}, {
// 			code: "BI",
// 			code3: "BDI",
// 			name: "Burundi",
// 			number: "108",
// 			img: "https://i.ibb.co/tM5xkz6/bi.gif"
// 		}, {
// 			code: "CV",
// 			code3: "CPV",
// 			name: "Cabo Verde",
// 			number: "132",
// 			img: "https://i.ibb.co/nLXr9GN/cv.gif"
// 		}, {
// 			code: "KH",
// 			code3: "KHM",
// 			name: "Cambodia",
// 			number: "116",
// 			img: "https://i.ibb.co/Sx06TRY/kh.gif"
// 		}, {
// 			code: "CM",
// 			code3: "CMR",
// 			name: "Cameroon",
// 			number: "120",
// 			img: "https://i.ibb.co/6gqqCXb/cm.gif"
// 		}, {
// 			code: "CA",
// 			code3: "CAN",
// 			name: "Canada",
// 			number: "124",
// 			img: "https://i.ibb.co/1nbCdNv/ca.gif"
// 		}, {
// 			code: "KY",
// 			code3: "CYM",
// 			name: "Cayman Islands (the)",
// 			number: "136",
// 			img: "https://i.ibb.co/0G15xnN/ky.gif"
// 		}, {
// 			code: "CF",
// 			code3: "CAF",
// 			name: "Central African Republic (the)",
// 			number: "140",
// 			img: "https://i.ibb.co/F03ccjs/cf.gif"
// 		}, {
// 			code: "TD",
// 			code3: "TCD",
// 			name: "Chad",
// 			number: "148",
// 			img: "https://i.ibb.co/Ws5tWw4/td.gif"
// 		}, {
// 			code: "CL",
// 			code3: "CHL",
// 			name: "Chile",
// 			number: "152",
// 			img: "https://i.ibb.co/vsNn83x/cl.gif"
// 		}, {
// 			code: "CN",
// 			code3: "CHN",
// 			name: "China",
// 			number: "156",
// 			img: "https://i.ibb.co/j5f0vQW/cn.gif"
// 		}, {
// 			code: "CX",
// 			code3: "CXR",
// 			name: "Christmas Island",
// 			number: "162",
// 			img: "https://i.ibb.co/qF2XC4v/cx.gif"
// 		}, {
// 			code: "CC",
// 			code3: "CCK",
// 			name: "Cocos (Keeling) Islands (the)",
// 			number: "166",
// 			img: "https://i.ibb.co/QdWjthK/cc.gif"
// 		}, {
// 			code: "CO",
// 			code3: "COL",
// 			name: "Colombia",
// 			number: "170",
// 			img: "https://i.ibb.co/mCVYzQp/co.gif"
// 		}, {
// 			code: "KM",
// 			code3: "COM",
// 			name: "Comoros (the)",
// 			number: "174",
// 			img: "https://i.ibb.co/PxmqyMX/km.gif"
// 		}, {
// 			code: "CD",
// 			code3: "COD",
// 			name: "Congo (the Democratic Republic of the)",
// 			number: "180",
// 			img: "https://i.ibb.co/GRjppz3/cd.gif"
// 		}, {
// 			code: "CG",
// 			code3: "COG",
// 			name: "Congo (the)",
// 			number: "178",
// 			img: "https://i.ibb.co/q1Qf9BY/cg.gif"
// 		}, {
// 			code: "CK",
// 			code3: "COK",
// 			name: "Cook Islands (the)",
// 			number: "184",
// 			img: "https://i.ibb.co/3Fywwrt/ck.gif"
// 		}, {
// 			code: "CR",
// 			code3: "CRI",
// 			name: "Costa Rica",
// 			number: "188",
// 			img: "https://i.ibb.co/SK17Kfs/cr.gif"
// 		}, {
// 			code: "HR",
// 			code3: "HRV",
// 			name: "Croatia",
// 			number: "191",
// 			img: "https://i.ibb.co/HqQRDBc/hr.gif"
// 		}, {
// 			code: "CU",
// 			code3: "CUB",
// 			name: "Cuba",
// 			number: "192",
// 			img: "https://i.ibb.co/QDprBx5/cu.gif"
// 		}, {
// 			code: "CW",
// 			code3: "CUW",
// 			name: "Curaçao",
// 			number: "531",
// 			img: "https://i.ibb.co/FmSLjMJ/cw.png"
// 		}, {
// 			code: "CY",
// 			code3: "CYP",
// 			name: "Cyprus",
// 			number: "196",
// 			img: "https://i.ibb.co/ckWDXQw/cy.gif"
// 		}, {
// 			code: "CZ",
// 			code3: "CZE",
// 			name: "Czechia",
// 			number: "203",
// 			img: "https://i.ibb.co/c34bkDJ/cz.gif"
// 		}, {
// 			code: "CI",
// 			code3: "CIV",
// 			name: "Côte d'Ivoire",
// 			number: "384",
// 			img: "https://i.ibb.co/S7CkhYH/ci.gif"
// 		}, {
// 			code: "DK",
// 			code3: "DNK",
// 			name: "Denmark",
// 			number: "208",
// 			img: "https://i.ibb.co/fxpVpdj/dk.gif"
// 		}, {
// 			code: "DJ",
// 			code3: "DJI",
// 			name: "Djibouti",
// 			number: "262",
// 			img: "https://i.ibb.co/LpjR4tz/dj.gif"
// 		}, {
// 			code: "DM",
// 			code3: "DMA",
// 			name: "Dominica",
// 			number: "212",
// 			img: "https://i.ibb.co/h1FH6St/dm.gif"
// 		}, {
// 			code: "DO",
// 			code3: "DOM",
// 			name: "Dominican Republic (the)",
// 			number: "214",
// 			img: "https://i.ibb.co/sQQG6kN/do.gif"
// 		}, {
// 			code: "EC",
// 			code3: "ECU",
// 			name: "Ecuador",
// 			number: "218",
// 			img: "https://i.ibb.co/9G5Zy83/ec.gif"
// 		}, {
// 			code: "EG",
// 			code3: "EGY",
// 			name: "Egypt",
// 			number: "818",
// 			img: "https://i.ibb.co/FbcgL2B/eg.gif"
// 		}, {
// 			code: "SV",
// 			code3: "SLV",
// 			name: "El Salvador",
// 			number: "222",
// 			img: "https://i.ibb.co/GsJXB3m/sv.gif"
// 		}, {
// 			code: "GQ",
// 			code3: "GNQ",
// 			name: "Equatorial Guinea",
// 			number: "226",
// 			img: "https://i.ibb.co/H2WNKhB/gq.gif"
// 		}, {
// 			code: "ER",
// 			code3: "ERI",
// 			name: "Eritrea",
// 			number: "232",
// 			img: "https://i.ibb.co/t3WxNY9/er.gif"
// 		}, {
// 			code: "EE",
// 			code3: "EST",
// 			name: "Estonia",
// 			number: "233",
// 			img: "https://i.ibb.co/d2SW1wZ/ee.gif"
// 		}, {
// 			code: "SZ",
// 			code3: "SWZ",
// 			name: "Eswatini",
// 			number: "748",
// 			img: "https://i.ibb.co/RDGWS0h/sz.gif"
// 		}, {
// 			code: "ET",
// 			code3: "ETH",
// 			name: "Ethiopia",
// 			number: "231",
// 			img: "https://i.ibb.co/KWvg9KD/et.gif"
// 		}, {
// 			code: "FK",
// 			code3: "FLK",
// 			name: "Falkland Islands (the) [Malvinas]",
// 			number: "238",
// 			img: "https://i.ibb.co/Mny7KDF/fk.gif"
// 		}, {
// 			code: "FO",
// 			code3: "FRO",
// 			name: "Faroe Islands (the)",
// 			number: "234",
// 			img: "https://i.ibb.co/ys4ydCw/fo.gif"
// 		}, {
// 			code: "FJ",
// 			code3: "FJI",
// 			name: "Fiji",
// 			number: "242",
// 			img: "https://i.ibb.co/RY2Wgyh/fj.gif"
// 		}, {
// 			code: "FI",
// 			code3: "FIN",
// 			name: "Finland",
// 			number: "246",
// 			img: "https://i.ibb.co/MBDXZHm/fi.gif"
// 		}, {
// 			code: "FR",
// 			code3: "FRA",
// 			name: "France",
// 			number: "250",
// 			img: "https://i.ibb.co/cyn94p1/fr.gif"
// 		}, {
// 			code: "GF",
// 			code3: "GUF",
// 			name: "French Guiana",
// 			number: "254",
// 			img: "https://i.ibb.co/YX2pcMt/gf.png"
// 		}, {
// 			code: "PF",
// 			code3: "PYF",
// 			name: "French Polynesia",
// 			number: "258",
// 			img: "https://i.ibb.co/GvJBxSz/pf.gif"
// 		}, {
// 			code: "TF",
// 			code3: "ATF",
// 			name: "French Southern Territories (the)",
// 			number: "260",
// 			img: "https://i.ibb.co/bWMQnLs/tf.gif"
// 		}, {
// 			code: "GA",
// 			code3: "GAB",
// 			name: "Gabon",
// 			number: "266",
// 			img: "https://i.ibb.co/vXf2P42/ga.gif"
// 		}, {
// 			code: "GM",
// 			code3: "GMB",
// 			name: "Gambia (the)",
// 			number: "270",
// 			img: "https://i.ibb.co/M7Vv68b/gm.gif"
// 		}, {
// 			code: "GE",
// 			code3: "GEO",
// 			name: "Georgia",
// 			number: "268",
// 			img: "https://i.ibb.co/9nzvJ85/ge.gif"
// 		}, {
// 			code: "DE",
// 			code3: "DEU",
// 			name: "Germany",
// 			number: "276",
// 			img: "https://i.ibb.co/kc8RnPF/de.gif"
// 		}, {
// 			code: "GH",
// 			code3: "GHA",
// 			name: "Ghana",
// 			number: "288",
// 			img: "https://i.ibb.co/9YgzYWy/gh.gif"
// 		}, {
// 			code: "GI",
// 			code3: "GIB",
// 			name: "Gibraltar",
// 			number: "292",
// 			img: "https://i.ibb.co/n082Zf0/gi.gif"
// 		}, {
// 			code: "GR",
// 			code3: "GRC",
// 			name: "Greece",
// 			number: "300",
// 			img: "https://i.ibb.co/c1m7yqH/gr.gif"
// 		}, {
// 			code: "GL",
// 			code3: "GRL",
// 			name: "Greenland",
// 			number: "304",
// 			img: "https://i.ibb.co/86hsYb6/gl.gif"
// 		}, {
// 			code: "GD",
// 			code3: "GRD",
// 			name: "Grenada",
// 			number: "308",
// 			img: "https://i.ibb.co/wBT7fB8/gd.gif"
// 		}, {
// 			code: "GP",
// 			code3: "GLP",
// 			name: "Guadeloupe",
// 			number: "312",
// 			img: "https://i.ibb.co/1Gfcc4T/gp.gif"
// 		}, {
// 			code: "GU",
// 			code3: "GUM",
// 			name: "Guam",
// 			number: "316",
// 			img: "https://i.ibb.co/2F2yKYp/gu.gif"
// 		}, {
// 			code: "GT",
// 			code3: "GTM",
// 			name: "Guatemala",
// 			number: "320",
// 			img: "https://i.ibb.co/svRYXBy/gt.gif"
// 		}, {
// 			code: "GG",
// 			code3: "GGY",
// 			name: "Guernsey",
// 			number: "831",
// 			img: "https://i.ibb.co/kHRttsq/gg.gif"
// 		}, {
// 			code: "GN",
// 			code3: "GIN",
// 			name: "Guinea",
// 			number: "324",
// 			img: "https://i.ibb.co/sqxnbT9/gn.gif"
// 		}, {
// 			code: "GW",
// 			code3: "GNB",
// 			name: "Guinea-Bissau",
// 			number: "624",
// 			img: "https://i.ibb.co/rd5TxDq/gw.gif"
// 		}, {
// 			code: "GY",
// 			code3: "GUY",
// 			name: "Guyana",
// 			number: "328",
// 			img: "https://i.ibb.co/V2Zh9WX/gy.gif"
// 		}, {
// 			code: "HT",
// 			code3: "HTI",
// 			name: "Haiti",
// 			number: "332",
// 			img: "https://i.ibb.co/kqKY7dY/ht.gif"
// 		}, {
// 			code: "HM",
// 			code3: "HMD",
// 			name: "Heard Island and McDonald Islands",
// 			number: "334",
// 			img: "https://i.ibb.co/0tVXvd5/hm.png"
// 		}, {
// 			code: "VA",
// 			code3: "VAT",
// 			name: "Holy See (the)",
// 			number: "336",
// 			img: "https://i.ibb.co/pKX8Z3b/va.gif"
// 		}, {
// 			code: "HN",
// 			code3: "HND",
// 			name: "Honduras",
// 			number: "340",
// 			img: "https://i.ibb.co/93Lf5NH/hn.gif"
// 		}, {
// 			code: "HK",
// 			code3: "HKG",
// 			name: "Hong Kong",
// 			number: "344",
// 			img: "https://i.ibb.co/1nxhB51/hk.gif"
// 		}, {
// 			code: "HU",
// 			code3: "HUN",
// 			name: "Hungary",
// 			number: "348",
// 			img: "https://i.ibb.co/pj27tDh/hu.gif"
// 		}, {
// 			code: "IS",
// 			code3: "ISL",
// 			name: "Iceland",
// 			number: "352",
// 			img: "https://i.ibb.co/V3gC2Hc/is.gif"
// 		}, {
// 			code: "IN",
// 			code3: "IND",
// 			name: "India",
// 			number: "356",
// 			img: "https://i.ibb.co/xLzRmDN/in.gif"
// 		}, {
// 			code: "ID",
// 			code3: "IDN",
// 			name: "Indonesia",
// 			number: "360",
// 			img: "https://i.ibb.co/bbm1ymR/id.gif"
// 		}, {
// 			code: "IR",
// 			code3: "IRN",
// 			name: "Iran (Islamic Republic of)",
// 			number: "364",
// 			img: "https://i.ibb.co/zrTCvwX/ir.gif"
// 		}, {
// 			code: "IQ",
// 			code3: "IRQ",
// 			name: "Iraq",
// 			number: "368",
// 			img: "https://i.ibb.co/mCwP0Kc/iq.gif"
// 		}, {
// 			code: "IE",
// 			code3: "IRL",
// 			name: "Ireland",
// 			number: "372",
// 			img: "https://i.ibb.co/rs6vVQ9/ie.gif"
// 		}, {
// 			code: "IM",
// 			code3: "IMN",
// 			name: "Isle of Man",
// 			number: "833",
// 			img: "https://i.ibb.co/pzvT713/im.jpg"
// 		}, {
// 			code: "IL",
// 			code3: "ISR",
// 			name: "Israel",
// 			number: "376",
// 			img: "https://i.ibb.co/6H09FT3/il.gif"
// 		}, {
// 			code: "IT",
// 			code3: "ITA",
// 			name: "Italy",
// 			number: "380",
// 			img: "https://i.ibb.co/Bw3LDpB/it.gif"
// 		}, {
// 			code: "JM",
// 			code3: "JAM",
// 			name: "Jamaica",
// 			number: "388",
// 			img: "https://i.ibb.co/SsMTH1v/jm.gif"
// 		}, {
// 			code: "JP",
// 			code3: "JPN",
// 			name: "Japan",
// 			number: "392",
// 			img: "https://i.ibb.co/yYNZ0G7/jp.gif"
// 		}, {
// 			code: "JE",
// 			code3: "JEY",
// 			name: "Jersey",
// 			number: "832",
// 			img: "https://i.ibb.co/CWR719K/je.jpg"
// 		}, {
// 			code: "JO",
// 			code3: "JOR",
// 			name: "Jordan",
// 			number: "400",
// 			img: "https://i.ibb.co/qjvbWS1/jo.gif"
// 		}, {
// 			code: "KZ",
// 			code3: "KAZ",
// 			name: "Kazakhstan",
// 			number: "398",
// 			img: "https://i.ibb.co/k0vwZ6Y/kz.gif"
// 		}, {
// 			code: "KE",
// 			code3: "KEN",
// 			name: "Kenya",
// 			number: "404",
// 			img: "https://i.ibb.co/TgBfjcf/ke.gif"
// 		}, {
// 			code: "KI",
// 			code3: "KIR",
// 			name: "Kiribati",
// 			number: "296",
// 			img: "https://i.ibb.co/f2g2mZP/ki.gif"
// 		}, {
// 			code: "KP",
// 			code3: "PRK",
// 			name: "Korea (the Democratic People's Republic of)",
// 			number: "408",
// 			img: "https://i.ibb.co/0FGY2r6/kp.gif"
// 		}, {
// 			code: "KR",
// 			code3: "KOR",
// 			name: "Korea (the Republic of)",
// 			number: "410",
// 			img: "https://i.ibb.co/2Fbpv70/kr.gif"
// 		}, {
// 			code: "KW",
// 			code3: "KWT",
// 			name: "Kuwait",
// 			number: "414",
// 			img: "https://i.ibb.co/KG5fhj1/kw.gif"
// 		}, {
// 			code: "KG",
// 			code3: "KGZ",
// 			name: "Kyrgyzstan",
// 			number: "417",
// 			img: "https://i.ibb.co/BtVwcrd/kg.gif"
// 		}, {
// 			code: "LA",
// 			code3: "LAO",
// 			name: "Lao People's Democratic Republic (the)",
// 			number: "418",
// 			img: "https://i.ibb.co/DgXKpGq/la.gif"
// 		}, {
// 			code: "LV",
// 			code3: "LVA",
// 			name: "Latvia",
// 			number: "428",
// 			img: "https://i.ibb.co/0D1NZhf/lv.gif"
// 		}, {
// 			code: "LB",
// 			code3: "LBN",
// 			name: "Lebanon",
// 			number: "422",
// 			img: "https://i.ibb.co/zS3cL1F/lb.gif"
// 		}, {
// 			code: "LS",
// 			code3: "LSO",
// 			name: "Lesotho",
// 			number: "426",
// 			img: "https://i.ibb.co/Y2F1rMR/ls.gif"
// 		}, {
// 			code: "LR",
// 			code3: "LBR",
// 			name: "Liberia",
// 			number: "430",
// 			img: "https://i.ibb.co/jzpj13b/lr.gif"
// 		}, {
// 			code: "LY",
// 			code3: "LBY",
// 			name: "Libya",
// 			number: "434",
// 			img: "https://i.ibb.co/RSc8YBt/ly.gif"
// 		}, {
// 			code: "LI",
// 			code3: "LIE",
// 			name: "Liechtenstein",
// 			number: "438",
// 			img: "https://i.ibb.co/j87Z1c3/li.gif"
// 		}, {
// 			code: "LT",
// 			code3: "LTU",
// 			name: "Lithuania",
// 			number: "440",
// 			img: "https://i.ibb.co/p1M0RJq/lt.gif"
// 		}, {
// 			code: "LU",
// 			code3: "LUX",
// 			name: "Luxembourg",
// 			number: "442",
// 			img: "https://i.ibb.co/JxK7FJG/lu.gif"
// 		}, {
// 			code: "MO",
// 			code3: "MAC",
// 			name: "Macao",
// 			number: "446",
// 			img: "https://i.ibb.co/RvxXD9D/mo.gif"
// 		}, {
// 			code: "MG",
// 			code3: "MDG",
// 			name: "Madagascar",
// 			number: "450",
// 			img: "https://i.ibb.co/nMNNP6Q/mg.gif"
// 		}, {
// 			code: "MW",
// 			code3: "MWI",
// 			name: "Malawi",
// 			number: "454",
// 			img: "https://i.ibb.co/GktXNHP/mw.gif"
// 		}, {
// 			code: "MY",
// 			code3: "MYS",
// 			name: "Malaysia",
// 			number: "458",
// 			img: "https://i.ibb.co/BPT56Sz/my.gif"
// 		}, {
// 			code: "MV",
// 			code3: "MDV",
// 			name: "Maldives",
// 			number: "462",
// 			img: "https://i.ibb.co/hYKmMTF/mv.gif"
// 		}, {
// 			code: "ML",
// 			code3: "MLI",
// 			name: "Mali",
// 			number: "466",
// 			img: "https://i.ibb.co/ncgFg1q/ml.gif"
// 		}, {
// 			code: "MT",
// 			code3: "MLT",
// 			name: "Malta",
// 			number: "470",
// 			img: "https://i.ibb.co/SKQwfv1/mt.gif"
// 		}, {
// 			code: "MH",
// 			code3: "MHL",
// 			name: "Marshall Islands (the)",
// 			number: "584",
// 			img: "https://i.ibb.co/nkF8kJP/mh.gif"
// 		}, {
// 			code: "MQ",
// 			code3: "MTQ",
// 			name: "Martinique",
// 			number: "474",
// 			img: "https://i.ibb.co/Kr2rQhx/mq.gif"
// 		}, {
// 			code: "MR",
// 			code3: "MRT",
// 			name: "Mauritania",
// 			number: "478",
// 			img: "https://i.ibb.co/nbPfPFW/mr.gif"
// 		}, {
// 			code: "MU",
// 			code3: "MUS",
// 			name: "Mauritius",
// 			number: "480",
// 			img: "https://i.ibb.co/2F3GYmY/mu.gif"
// 		}, {
// 			code: "YT",
// 			code3: "MYT",
// 			name: "Mayotte",
// 			number: "175",
// 			img: "https://i.ibb.co/tHRYKQK/yt.gif"
// 		}, {
// 			code: "MX",
// 			code3: "MEX",
// 			name: "Mexico",
// 			number: "484",
// 			img: "https://i.ibb.co/LvJ4Pg7/mx.gif"
// 		}, {
// 			code: "FM",
// 			code3: "FSM",
// 			name: "Micronesia (Federated States of)",
// 			number: "583",
// 			img: "https://i.ibb.co/vkFB0Gy/fm.gif"
// 		}, {
// 			code: "MD",
// 			code3: "MDA",
// 			name: "Moldova (the Republic of)",
// 			number: "498",
// 			img: "https://i.ibb.co/xLBnB9T/md.gif"
// 		}, {
// 			code: "MC",
// 			code3: "MCO",
// 			name: "Monaco",
// 			number: "492",
// 			img: "https://i.ibb.co/Y8Kgztm/mc.gif"
// 		}, {
// 			code: "MN",
// 			code3: "MNG",
// 			name: "Mongolia",
// 			number: "496",
// 			img: "https://i.ibb.co/XsmctJk/mn.gif"
// 		}, {
// 			code: "ME",
// 			code3: "MNE",
// 			name: "Montenegro",
// 			number: "499",
// 			img: "https://i.ibb.co/TBmJNxh/me.gif"
// 		}, {
// 			code: "MS",
// 			code3: "MSR",
// 			name: "Montserrat",
// 			number: "500",
// 			img: "https://i.ibb.co/bJ96Xk6/ms.gif"
// 		}, {
// 			code: "MA",
// 			code3: "MAR",
// 			name: "Morocco",
// 			number: "504",
// 			img: "https://i.ibb.co/jz7ZKgm/ma.gif"
// 		}, {
// 			code: "MZ",
// 			code3: "MOZ",
// 			name: "Mozambique",
// 			number: "508",
// 			img: "https://i.ibb.co/vBswH0F/mz.gif"
// 		}, {
// 			code: "MM",
// 			code3: "MMR",
// 			name: "Myanmar",
// 			number: "104",
// 			img: "https://i.ibb.co/fQJsQh1/mm.gif"
// 		}, {
// 			code: "NA",
// 			code3: "NAM",
// 			name: "Namibia",
// 			number: "516",
// 			img: "https://i.ibb.co/C8n6QwP/na.gif"
// 		}, {
// 			code: "NR",
// 			code3: "NRU",
// 			name: "Nauru",
// 			number: "520",
// 			img: "https://i.ibb.co/gPpN7cb/nr.gif"
// 		}, {
// 			code: "NP",
// 			code3: "NPL",
// 			name: "Nepal",
// 			number: "524",
// 			img: "https://i.ibb.co/MNhpKHt/np.gif"
// 		}, {
// 			code: "NL",
// 			code3: "NLD",
// 			name: "Netherlands (the)",
// 			number: "528",
// 			img: "https://i.ibb.co/6rSKkfw/nl.gif"
// 		}, {
// 			code: "NC",
// 			code3: "NCL",
// 			name: "New Caledonia",
// 			number: "540",
// 			img: "https://i.ibb.co/X22HWFc/nc.gif"
// 		}, {
// 			code: "NZ",
// 			code3: "NZL",
// 			name: "New Zealand",
// 			number: "554",
// 			img: "https://i.ibb.co/DM5H6KC/nz.gif"
// 		}, {
// 			code: "NI",
// 			code3: "NIC",
// 			name: "Nicaragua",
// 			number: "558",
// 			img: "https://i.ibb.co/ySt7745/ni.gif"
// 		}, {
// 			code: "NE",
// 			code3: "NER",
// 			name: "Niger (the)",
// 			number: "562",
// 			img: "https://i.ibb.co/cD9gL6J/ne.gif"
// 		}, {
// 			code: "NG",
// 			code3: "NGA",
// 			name: "Nigeria",
// 			number: "566",
// 			img: "https://i.ibb.co/J3Dk776/ng.gif"
// 		}, {
// 			code: "NU",
// 			code3: "NIU",
// 			name: "Niue",
// 			number: "570",
// 			img: "https://i.ibb.co/fx3nsmf/nu.gif"
// 		}, {
// 			code: "NF",
// 			code3: "NFK",
// 			name: "Norfolk Island",
// 			number: "574",
// 			img: "https://i.ibb.co/r5YNbVw/nf.gif"
// 		}, {
// 			code: "MP",
// 			code3: "MNP",
// 			name: "Northern Mariana Islands (the)",
// 			number: "580",
// 			img: "https://i.ibb.co/DYHxGVj/mp.gif"
// 		}, {
// 			code: "NO",
// 			code3: "NOR",
// 			name: "Norway",
// 			number: "578",
// 			img: "https://i.ibb.co/g4vwvC4/no.png"
// 		}, {
// 			code: "OM",
// 			code3: "OMN",
// 			name: "Oman",
// 			number: "512",
// 			img: "https://i.ibb.co/gv5W5Cr/om.gif"
// 		}, {
// 			code: "PK",
// 			code3: "PAK",
// 			name: "Pakistan",
// 			number: "586",
// 			img: "https://i.ibb.co/2kxfxjS/pk.gif"
// 		}, {
// 			code: "PW",
// 			code3: "PLW",
// 			name: "Palau",
// 			number: "585",
// 			img: "https://i.ibb.co/pZG9G9D/pw.gif"
// 		}, {
// 			code: "PS",
// 			code3: "PSE",
// 			name: "Palestine, State of",
// 			number: "275",
// 			img: "https://i.ibb.co/Jq4fTmL/ps.gif"
// 		}, {
// 			code: "PA",
// 			code3: "PAN",
// 			name: "Panama",
// 			number: "591",
// 			img: "https://i.ibb.co/X8yHGfq/pa.gif"
// 		}, {
// 			code: "PG",
// 			code3: "PNG",
// 			name: "Papua New Guinea",
// 			number: "598",
// 			img: "https://i.ibb.co/THymrvq/pg.gif"
// 		}, {
// 			code: "PY",
// 			code3: "PRY",
// 			name: "Paraguay",
// 			number: "600",
// 			img: "https://i.ibb.co/VgZ8JRg/py.gif"
// 		}, {
// 			code: "PE",
// 			code3: "PER",
// 			name: "Peru",
// 			number: "604",
// 			img: "https://i.ibb.co/XVM2WTf/pe.gif"
// 		}, {
// 			code: "PH",
// 			code3: "PHL",
// 			name: "Philippines (the)",
// 			number: "608",
// 			img: "https://i.ibb.co/n1D6hpz/ph.gif"
// 		}, {
// 			code: "PN",
// 			code3: "PCN",
// 			name: "Pitcairn",
// 			number: "612",
// 			img: "https://i.ibb.co/f0CRjgX/pn.gif"
// 		}, {
// 			code: "PL",
// 			code3: "POL",
// 			name: "Poland",
// 			number: "616",
// 			img: "https://i.ibb.co/bBHhCNM/pl.gif"
// 		}, {
// 			code: "PT",
// 			code3: "PRT",
// 			name: "Portugal",
// 			number: "620",
// 			img: "https://i.ibb.co/wMfzmgW/pt.gif"
// 		}, {
// 			code: "PR",
// 			code3: "PRI",
// 			name: "Puerto Rico",
// 			number: "630",
// 			img: "https://i.ibb.co/Wvw4h2m/pr.gif"
// 		}, {
// 			code: "QA",
// 			code3: "QAT",
// 			name: "Qatar",
// 			number: "634",
// 			img: "https://i.ibb.co/n1xbvHS/qa.gif"
// 		}, {
// 			code: "MK",
// 			code3: "MKD",
// 			name: "Republic of North Macedonia",
// 			number: "807",
// 			img: "https://i.ibb.co/R7p8jqm/mk.gif"
// 		}, {
// 			code: "RO",
// 			code3: "ROU",
// 			name: "Romania",
// 			number: "642",
// 			img: "https://i.ibb.co/71CQZwY/ro.gif"
// 		}, {
// 			code: "RU",
// 			code3: "RUS",
// 			name: "Russian Federation (the)",
// 			number: "643",
// 			img: "https://i.ibb.co/n8bfn3L/ru.gif"
// 		}, {
// 			code: "RW",
// 			code3: "RWA",
// 			name: "Rwanda",
// 			number: "646",
// 			img: "https://i.ibb.co/mqbXSGc/rw.gif"
// 		}, {
// 			code: "RE",
// 			code3: "REU",
// 			name: "Réunion",
// 			number: "638",
// 			img: "https://i.ibb.co/TqTGMdx/re.png"
// 		}, {
// 			code: "BL",
// 			code3: "BLM",
// 			name: "Saint Barthélemy",
// 			number: "652",
// 			img: "https://i.ibb.co/1Mt6J0C/bl.png"
// 		}, {
// 			code: "SH",
// 			code3: "SHN",
// 			name: "Saint Helena, Ascension and Tristan da Cunha",
// 			number: "654",
// 			img: "https://i.ibb.co/KbDz9yw/sh.gif"
// 		}, {
// 			code: "KN",
// 			code3: "KNA",
// 			name: "Saint Kitts and Nevis",
// 			number: "659",
// 			img: "https://i.ibb.co/W5m2TYC/kn.gif"
// 		}, {
// 			code: "LC",
// 			code3: "LCA",
// 			name: "Saint Lucia",
// 			number: "662",
// 			img: "https://i.ibb.co/Pr467pt/lc.gif"
// 		}, {
// 			code: "MF",
// 			code3: "MAF",
// 			name: "Saint Martin (French part)",
// 			number: "663",
// 			img: "https://i.ibb.co/ngry7LB/mf.png"
// 		}, {
// 			code: "PM",
// 			code3: "SPM",
// 			name: "Saint Pierre and Miquelon",
// 			number: "666",
// 			img: "https://i.ibb.co/qm7ssXb/pm.gif"
// 		}, {
// 			code: "VC",
// 			code3: "VCT",
// 			name: "Saint Vincent and the Grenadines",
// 			number: "670",
// 			img: "https://i.ibb.co/WVZQysT/vc.gif"
// 		}, {
// 			code: "WS",
// 			code3: "WSM",
// 			name: "Samoa",
// 			number: "882",
// 			img: "https://i.ibb.co/T4n5p7C/ws.gif"
// 		}, {
// 			code: "SM",
// 			code3: "SMR",
// 			name: "San Marino",
// 			number: "674",
// 			img: "https://i.ibb.co/ypTrT85/sm.gif"
// 		}, {
// 			code: "ST",
// 			code3: "STP",
// 			name: "Sao Tome and Principe",
// 			number: "678",
// 			img: "https://i.ibb.co/0qkg79h/st.gif"
// 		}, {
// 			code: "SA",
// 			code3: "SAU",
// 			name: "Saudi Arabia",
// 			number: "682",
// 			img: "https://i.ibb.co/r6wK2X1/sa.gif"
// 		}, {
// 			code: "SN",
// 			code3: "SEN",
// 			name: "Senegal",
// 			number: "686",
// 			img: "https://i.ibb.co/vVVR2XG/sn.gif"
// 		}, {
// 			code: "RS",
// 			code3: "SRB",
// 			name: "Serbia",
// 			number: "688",
// 			img: "https://i.ibb.co/1bJwZC8/rs.gif"
// 		}, {
// 			code: "SC",
// 			code3: "SYC",
// 			name: "Seychelles",
// 			number: "690",
// 			img: "https://i.ibb.co/z4fYMYx/sc.gif"
// 		}, {
// 			code: "SL",
// 			code3: "SLE",
// 			name: "Sierra Leone",
// 			number: "694",
// 			img: "https://i.ibb.co/dg2QqW1/sl.gif"
// 		}, {
// 			code: "SG",
// 			code3: "SGP",
// 			name: "Singapore",
// 			number: "702",
// 			img: "https://i.ibb.co/B2WCqR2/sg.gif"
// 		}, {
// 			code: "SX",
// 			code3: "SXM",
// 			name: "Sint Maarten (Dutch part)",
// 			number: "534",
// 			img: "https://i.ibb.co/SVJ9vGb/sx.png"
// 		}, {
// 			code: "SK",
// 			code3: "SVK",
// 			name: "Slovakia",
// 			number: "703",
// 			img: "https://i.ibb.co/frng52m/sk.gif"
// 		}, {
// 			code: "SI",
// 			code3: "SVN",
// 			name: "Slovenia",
// 			number: "705",
// 			img: "https://i.ibb.co/HX0WgSy/si.gif"
// 		}, {
// 			code: "SB",
// 			code3: "SLB",
// 			name: "Solomon Islands",
// 			number: "090",
// 			img: "https://i.ibb.co/HKTZ1pc/sb.gif"
// 		}, {
// 			code: "SO",
// 			code3: "SOM",
// 			name: "Somalia",
// 			number: "706",
// 			img: "https://i.ibb.co/551GbYg/so.gif"
// 		}, {
// 			code: "ZA",
// 			code3: "ZAF",
// 			name: "South Africa",
// 			number: "710",
// 			img: "https://i.ibb.co/VtjM6qD/za.gif"
// 		}, {
// 			code: "GS",
// 			code3: "SGS",
// 			name: "South Georgia and the South Sandwich Islands",
// 			number: "239",
// 			img: "https://i.ibb.co/Wcx4CJB/gs.gif"
// 		}, {
// 			code: "SS",
// 			code3: "SSD",
// 			name: "South Sudan",
// 			number: "728",
// 			img: "https://i.ibb.co/vLWYQhm/ss.png"
// 		}, {
// 			code: "ES",
// 			code3: "ESP",
// 			name: "Spain",
// 			number: "724",
// 			img: "https://i.ibb.co/2tyz5J3/es.gif"
// 		}, {
// 			code: "LK",
// 			code3: "LKA",
// 			name: "Sri Lanka",
// 			number: "144",
// 			img: "https://i.ibb.co/jThh9df/lk.gif"
// 		}, {
// 			code: "SD",
// 			code3: "SDN",
// 			name: "Sudan (the)",
// 			number: "729",
// 			img: "https://i.ibb.co/Pj9LNGb/sd.gif"
// 		}, {
// 			code: "SR",
// 			code3: "SUR",
// 			name: "Suriname",
// 			number: "740",
// 			img: "https://i.ibb.co/6P98J1X/sr.gif"
// 		}, {
// 			code: "SJ",
// 			code3: "SJM",
// 			name: "Svalbard and Jan Mayen",
// 			number: "744",
// 			img: "https://i.ibb.co/yQ5S6jx/sj.png"
// 		}, {
// 			code: "SE",
// 			code3: "SWE",
// 			name: "Sweden",
// 			number: "752",
// 			img: "https://i.ibb.co/j306Dsc/se.gif"
// 		}, {
// 			code: "CH",
// 			code3: "CHE",
// 			name: "Switzerland",
// 			number: "756",
// 			img: "https://i.ibb.co/yX1ysLj/ch.gif"
// 		}, {
// 			code: "SY",
// 			code3: "SYR",
// 			name: "Syrian Arab Republic",
// 			number: "760",
// 			img: "https://i.ibb.co/jVtDwx1/sy.gif"
// 		}, {
// 			code: "TW",
// 			code3: "TWN",
// 			name: "Taiwan",
// 			number: "158",
// 			img: "https://i.ibb.co/DCqLsgJ/tw.gif"
// 		}, {
// 			code: "TJ",
// 			code3: "TJK",
// 			name: "Tajikistan",
// 			number: "762",
// 			img: "https://i.ibb.co/7KVT4XT/tj.gif"
// 		}, {
// 			code: "TZ",
// 			code3: "TZA",
// 			name: "Tanzania, United Republic of",
// 			number: "834",
// 			img: "https://i.ibb.co/5cV0MB5/tz.gif"
// 		}, {
// 			code: "TH",
// 			code3: "THA",
// 			name: "Thailand",
// 			number: "764",
// 			img: "https://i.ibb.co/bbZ7Kdt/th.gif"
// 		}, {
// 			code: "TL",
// 			code3: "TLS",
// 			name: "Timor-Leste",
// 			number: "626",
// 			img: "https://i.ibb.co/CMXvn3Y/tl.gif"
// 		}, {
// 			code: "TG",
// 			code3: "TGO",
// 			name: "Togo",
// 			number: "768",
// 			img: "https://i.ibb.co/w6LVSQD/tg.gif"
// 		}, {
// 			code: "TK",
// 			code3: "TKL",
// 			name: "Tokelau",
// 			number: "772",
// 			img: "https://i.ibb.co/XWJS823/tk.gif"
// 		}, {
// 			code: "TO",
// 			code3: "TON",
// 			name: "Tonga",
// 			number: "776",
// 			img: "https://i.ibb.co/t3rkp11/to.gif"
// 		}, {
// 			code: "TT",
// 			code3: "TTO",
// 			name: "Trinidad and Tobago",
// 			number: "780",
// 			img: "https://i.ibb.co/pZBfcfd/tt.gif"
// 		}, {
// 			code: "TN",
// 			code3: "TUN",
// 			name: "Tunisia",
// 			number: "788",
// 			img: "https://i.ibb.co/8NBLfKX/tn.gif"
// 		}, {
// 			code: "TR",
// 			code3: "TUR",
// 			name: "Turkey",
// 			number: "792",
// 			img: "https://i.ibb.co/YdbYjJJ/tr.gif"
// 		}, {
// 			code: "TM",
// 			code3: "TKM",
// 			name: "Turkmenistan",
// 			number: "795",
// 			img: "https://i.ibb.co/Cz4zn07/tm.gif"
// 		}, {
// 			code: "TC",
// 			code3: "TCA",
// 			name: "Turks and Caicos Islands (the)",
// 			number: "796",
// 			img: "https://i.ibb.co/s2D3x53/tc.gif"
// 		}, {
// 			code: "TV",
// 			code3: "TUV",
// 			name: "Tuvalu",
// 			number: "798",
// 			img: "https://i.ibb.co/qRWJgfw/tv.gif"
// 		}, {
// 			code: "UG",
// 			code3: "UGA",
// 			name: "Uganda",
// 			number: "800",
// 			img: "https://i.ibb.co/GvcmYmW/ug.gif"
// 		}, {
// 			code: "UA",
// 			code3: "UKR",
// 			name: "Ukraine",
// 			number: "804",
// 			img: "https://i.ibb.co/m0QXC5q/ua.gif"
// 		}, {
// 			code: "AE",
// 			code3: "ARE",
// 			name: "United Arab Emirates (the)",
// 			number: "784",
// 			img: "https://i.ibb.co/sRmsdtk/ae.gif"
// 		}, {
// 			code: "GB",
// 			code3: "GBR",
// 			name: "United Kingdom of Great Britain and Northern Ireland (the)",
// 			number: "826",
// 			img: "https://i.ibb.co/FnNWWRN/gb.gif"
// 		}, {
// 			code: "UM",
// 			code3: "UMI",
// 			name: "United States Minor Outlying Islands (the)",
// 			number: "581",
// 			img: "https://i.ibb.co/dpP35wK/um.gif"
// 		}, {
// 			code: "US",
// 			code3: "USA",
// 			name: "United States of America (the)",
// 			number: "840",
// 			img: "https://i.ibb.co/PQ0gTrm/us.gif"
// 		}, {
// 			code: "UY",
// 			code3: "URY",
// 			name: "Uruguay",
// 			number: "858",
// 			img: "https://i.ibb.co/1rK4jxm/uy.gif"
// 		}, {
// 			code: "UZ",
// 			code3: "UZB",
// 			name: "Uzbekistan",
// 			number: "860",
// 			img: "https://i.ibb.co/rGbZ2XT/uz.gif"
// 		}, {
// 			code: "VU",
// 			code3: "VUT",
// 			name: "Vanuatu",
// 			number: "548",
// 			img: "https://i.ibb.co/HHt0vPz/vu.gif"
// 		}, {
// 			code: "VE",
// 			code3: "VEN",
// 			name: "Venezuela (Bolivarian Republic of)",
// 			number: "862",
// 			img: "https://i.ibb.co/4Jg6CTy/ve.gif"
// 		}, {
// 			code: "VN",
// 			code3: "VNM",
// 			name: "Viet Nam",
// 			number: "704",
// 			img: "https://i.ibb.co/cTTwLMs/vn.gif"
// 		}, {
// 			code: "VG",
// 			code3: "VGB",
// 			name: "Virgin Islands (British)",
// 			number: "092",
// 			img: "https://i.ibb.co/xMy8XTG/vg.gif"
// 		}, {
// 			code: "VI",
// 			code3: "VIR",
// 			name: "Virgin Islands (U.S.)",
// 			number: "850",
// 			img: "https://i.ibb.co/5jkMDzf/vi.gif"
// 		}, {
// 			code: "WF",
// 			code3: "WLF",
// 			name: "Wallis and Futuna",
// 			number: "876",
// 			img: "https://i.ibb.co/6Jmxnbk/wf.gif"
// 		}, {
// 			code: "EH",
// 			code3: "ESH",
// 			name: "Western Sahara",
// 			number: "732",
// 			img: "https://i.ibb.co/RD2xFsX/eh.gif"
// 		}, {
// 			code: "YE",
// 			code3: "YEM",
// 			name: "Yemen",
// 			number: "887",
// 			img: "https://i.ibb.co/JRvjNvV/ye.gif"
// 		}, {
// 			code: "ZM",
// 			code3: "ZMB",
// 			name: "Zambia",
// 			number: "894",
// 			img: "https://i.ibb.co/Qdx6bn2/zm.gif"
// 		}, {
// 			code: "ZW",
// 			code3: "ZWE",
// 			name: "Zimbabwe",
// 			number: "716",
// 			img: "https://i.ibb.co/6HWQk8m/zw.gif"
// 		}, {
// 			code: "AX",
// 			code3: "ALA",
// 			name: "Åland Islands",
// 			number: "248",
// 			img: "https://i.ibb.co/mXnZjDx/ax.gif"
// 		}].forEach((function(o, n) {
// 			e ? o.name.substring(0, 1).toLowerCase() == (e = e.toLowerCase()) && t.push(o) : t.push(o)
// 		})), t
// 	}
// };

// function ets_cf_animate(e, t, o, n, i, s, c) {
// 	if (e) {
// 		var r = (new Date).getTime(),
// 			a = setInterval((function() {
// 				var l = Math.min(1, ((new Date).getTime() - r) / s);
// 				c ? e[t] = n + l * (i - n) + o : e.style[t] = n + l * (i - n) + o, 1 === l && clearInterval(a)
// 			}), 25);
// 		c ? e[t] = n + o : e.style[t] = n + o
// 	}
// }

// function ets_cf_scrollTo(e, t, o) {
// 	if (!(o <= 0)) {
// 		var n = (t - e.scrollTop) / o * 10;
// 		setTimeout((() => {
// 			e.scrollTop = e.scrollTop + n, e.scrollTop !== t && scrollTo(e, t, o - 10)
// 		}), 10)
// 	}
// }
// setTimeout((function() {
// 	etsCf.initApp()
// }), 500);
// var etsCfLoadRecaptcha = function() {
// 		etsCf.recaptchaOnloadCallback()
// 	},
// 	etsCfLoadRecaptchaV3 = function() {
// 		etsCf.getRecaptchaV3()
// 	};
