!function n(o, a, h) {
   function l(e, t) {
       if (!a[e]) {
           if (!o[e]) {
               var i = "function" == typeof require && require;
               if (!t && i) return i(e, !0);
               if (p) return p(e, !0);
               var s = new Error("Cannot find module '" + e + "'");
               throw s.code = "MODULE_NOT_FOUND", s
           }
           var r = a[e] = {exports: {}};
           o[e][0].call(r.exports, function (t) {
               return l(o[e][1][t] || t)
           }, r, r.exports, n, o, a, h)
       }
       return a[e].exports
   }

   for (var p = "function" == typeof require && require, t = 0; t < h.length; t++) l(h[t]);
   return l
}({
   1: [function (t, e, i) {
       "use strict";
       var s = new (t("../v-js/v-export").V)({
           console: !!(null !== document.body.getAttribute("data-v-console") & "false" !== document.body.getAttribute("data-v-console")),
           page: document.body.getAttribute("data-v-page")
       });
       s = s.init(), window.v = s
   }, {"../v-js/v-export": 2}], 2: [function (t, e, i) {
       "use strict";
       Object.defineProperty(i, "__esModule", {value: !0});
       var p = function (t, e) {}, u = function t(e, i, s) {
           null === e && (e = Function.prototype);
           var r = Object.getOwnPropertyDescriptor(e, i);
           if (void 0 === r) {
               var n = Object.getPrototypeOf(e);
               return null === n ? void 0 : t(n, i, s)
           }
           if ("value" in r) return r.value;
           var o = r.get;
           return void 0 !== o ? o.call(s) : void 0
       }, n = function () {
           function s(t, e) {
               for (var i = 0; i < e.length; i++) {
                   var s = e[i];
                   s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
               }
           }

           return function (t, e, i) {
               return e && s(t.prototype, e), i && s(t, i), t
           }
       }(), d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
           return typeof t
       } : function (t) {};

       function h(t, e) {
           if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
           return !e || "object" != typeof e && "function" != typeof e ? t : e
       }

       function c(t, e) {
           if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
           t.prototype = Object.create(e && e.prototype, {
               constructor: {
                   value: t,
                   enumerable: !1,
                   writable: !0,
                   configurable: !0
               }
           }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
       }

       function f(t, e) {
           if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
       }

       var g = i.V = function t(e) {
           for (var i in f(this, t), this.time = +new Date, this.prop = {
               console: !0,
               page: "index"
           }, e) this.prop[i] = e[i];
           this.name = "V", this.eventListenerAttribute = "v_eventListeners"
       };
       Number.isInteger = Number.isInteger || function (t) {}, Number.isFinite = Number.isFinite || function (t) {
       }, [].includes || (Array.prototype.includes = function (t) {}), String.prototype.includes || (String.prototype.includes = function () {

       }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
           value: function (t, e) {}, writable: !0, configurable: !0
       }), "remove" in Element.prototype || (Element.prototype.remove = function () {}), g.prototype.page = [], g.prototype.doc = document, g.prototype.document = document.documentElement, g.prototype.body = document.body, g.prototype.resize = [], g.prototype.timeMin = 25, g.prototype.console = function () {
           var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
               e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
               i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
           if (!0 !== (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.prop.console)) return !1;
           if (0 < t.length) {
               var s = "font: 2.5em/1 Arial; color: #298DA4;", r = "font: 1.25em/1 Arial; color: dodgerblue;",
                   n = "font: 1.25em/1 Arial; color: crimson;", o = "font: 1.25em/1 Arial; color: orange;",
                   a = "font: 1.25em/1 Arial; color: darkgray;";
               switch (i) {
                   case"title":
                       console.log("%c" + t, s);
                       break;
                   case"info":
                       console.info("%c" + t, r);
                       break;
                   case"error":
                       console.error("%c" + t, n);
                       break;
                   case"warn":
                       console.warn("%c" + t, o);
                       break;
                   default:
                       console.log("%c" + t, a)
               }
           }
           return null !== e && console.dir(e), !0
       }, g.prototype.checkType = function () {
           var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "function",
               e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
               i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
           if ("function" === t) {
               return e && "[object Function]" === {}.toString.call(e)
           }
           if ("dom" === t) return null !== this.doc.querySelector(e);
           if ("htmlElement" === t) return e instanceof HTMLElement;
           if ("object" === t) return "object" === (void 0 === e ? "undefined" : d(e));
           if ("string" === t) return "string" == typeof e;
           if ("number" === t) return "number" == typeof e;
           if ("integer" === t) return !!Number.isInteger(e);
           if ("boolean" === t) return "boolean" == typeof e;
           if ("array" === t) return !!Array.isArray(e);
           if ("numberArray" === t) {
               if (!Array.isArray(e)) return !1;
               if (e.length < i.count) return !1;
               for (var n = 0; n < e.length; n++) if ("number" != typeof e[n]) return !1;
               return !0
           }
           if ("functionArray" === t) {
               if (!Array.isArray(e)) return !1;
               if (e.length < i.count) return !1;
               for (var o = 0; o < e.length; o++) if ("function" != typeof e[o]) return !1;
               return !0
           }
           if ("stringArray" === t) {
               if (!Array.isArray(e)) return !1;
               if (e.length < i.count) return !1;
               for (var a = 0; a < e.length; a++) if ("string" != typeof e[a]) return !1;
               return !0
           }
           if ("callback" === t) return void 0 !== e.target && ("number" == typeof e.target && (void 0 !== e.do && !!this.checkType("function", e.do)));
           if ("callbacks" === t) {
               if (!Array.isArray(e)) return !1;
               for (var h = 0; h < e.length; h++) if (!this.checkType("callback", e[h])) return !1;
               return !0
           }
           if ("styleCallback" === t) return void 0 !== e.scope && (!!this.checkType("numberArray", e.scope, {count: 2}) && (void 0 !== e.property && ("string" == typeof e.property && (void 0 !== e.value && !!this.checkType("function", e.value)))));
           if ("styleCallbacks" === t) {
               if (!Array.isArray(e)) return !1;
               for (var l = 0; l < e.length; l++) if (!this.checkType("styleCallback", e[l])) return !1;
               return !0
           }
           return !1
       }, g.prototype.checkTypes = function () {
           var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                   obj: {},
                   name: "Name",
                   console: !0,
                   vars: []
               }, e = t.obj, i = void 0 === e ? {} : e, s = t.name, r = void 0 === s ? "Name" : s, n = t.console,
               o = void 0 === n || n, a = t.vars, h = void 0 === a ? [] : a;
           if (!this.checkType("object", i)) return !1;
           if (!this.checkType("string", r)) return !1;
           if (!this.checkType("boolean", o)) return !1;
           if (!this.checkType("array", h)) return !1;
           for (var l = [], p = 0; p < h.length; p++) void 0 === i[h[p][0]] ? l.push(r + ". " + h[p][0] + " doesn't exist in") : this.checkType(h[p][1], i[h[p][0]], h[p][2]) || l.push(r + ". " + h[p][0] + " must be a " + h[p][1]);
           if (0 === l.length) return !0;
           for (var u = 0; u < l.length; u++) this.console(l[u], i, "error", o);
           return !1
       }, g.prototype.getEventListener = function (t) {
       }, g.prototype.loadEvent = function () {
           return this.load = [], window.addEventListener("load", function () {
               for (var t = 0; t < this.load.length; t++) {
                   var e = this.load[t][1];
                   this.checkType("function", e) && e()
               }
               this.body.classList.remove("v-loading"), this.time = +new Date - this.time, this.console("The page has been loaded for " + this.time / 1e3 + "s")
           }.bind(this)), !0
       }, g.prototype.addLoad = function (t) {
           var e = "load-" + +new Date / Math.random() * Math.random();
           return this.load.push([e, t]), e
       }, g.prototype.setPage = function () {
           for (var t = this.prop.page.split(" "), e = 0; e < t.length; e++) this.page.push(t[e]);
           return this.console("Page:", this.page), this.page
       }, g.prototype.Event = function (t) {
           function s() {
               var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
               f(this, s);
               var e = h(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));
               for (var i in e.prop = {console: e.prop.console}, t) e.prop[i] = t[i];
               return e.name = "Event", e.events = [], e.targets = [], e.setEvent(), e
           }

           return c(s, g), n(s, [{
               key: "init", value: function () {
                   var t = this;
                   return {
                       add: this.add.bind(this),
                       delete: this.delete.bind(this),
                       turn: this.turn.bind(this),
                       get: this.getEvent.bind(this),
                       events: function () {
                           return t.events
                       }
                   }
               }
           }, {
               key: "target", value: function () {
                   for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = !1, i = 0; i < this.targets.length; i++) t === this.targets[i] && (e = !0);
                   return 0 === this.targets.length && (e = !0), e
               }
           }, {
               key: "do", value: function (t) {
                   return !!this.checkType("function", t)
               }
           }, {
               key: "checkEvent", value: function () {
                   var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                   return !!this.do(t.do)
               }
           }, {
               key: "add", value: function () {
                   var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                       e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                       i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console;
                   if (this.checkEvent(t)) {
                       var s = this.name + "-" + +new Date + "-" + Math.random(), r = {id: s, on: e, data: t};
                       return this.events.push(r), this.console(this.name + '. Event "' + s + '" added', r, "info", i), this.addCallback(s), s
                   }
                   return !1
               }
           }, {
               key: "delete", value: function () {}
           },{
               key: "turn", value: function () {}
           }, {
               key: "setEvent", value: function () {
                   return !0
               }
           }, {
               key: "addCallback", value: function () {
                   0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                   return !0
               }
           }, {
               key: "turnCallback", value: function () {}
           }, {
               key: "deleteCallback", value: function () {}
           }, {
               key: "getEvent", value: function () {}
           }, {
               key: "launchEvent", value: function () {}
           }, {
               key: "launchEvents", value: function () {
                   for (var t = 0; t < this.events.length; t++) null !== this.events[t] && this.events[t].on && this.launchEvent(this.events[t], this.events[t].data.do.bind(this));
                   return !0
               }
           }, {
               key: "launchEventsByTarget", value: function () {}
           }]), s
       }(), g.prototype.Viewport = function (t) {
           function i() {
               var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
               f(this, i);
               var e = h(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
               return e.name = "Viewport", e.targets = ["w", "h", "wh", "hw"], e
           }

           return c(i, g.prototype.Event), n(i, [{
               key: "init", value: function () {
                   var t = this;
                   return {
                       add: this.add.bind(this),
                       delete: this.delete.bind(this),
                       turn: this.turn.bind(this),
                       get: this.getEvent.bind(this),
                       events: function () {
                           return t.events
                       }
                   }
               }
           }, {
               key: "checkEvent", value: function () {
                   var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                   return !!u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "checkEvent", this).call(this, t) && (!!this.target(t.target) && !(t.timeout && !Number.isInteger(t.timeout)))
               }
           }, {
               key: "setEvent", value: function () {

               }
           }, {
               key: "implement", value: function () {}
           }
           ]), i
       }(),g.prototype.Interval = function (t) {
           function i() {
               var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
               f(this, i);
               var e = h(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
               return e.name = "Interval", e
           }

           return c(i, g.prototype.Event), n(i, [{
               key: "checkEvent", value: function () {}
           }, {
               key: "addCallback", value: function () {}
           }, {
               key: "turnCallback", value: function () {}
           }, {
               key: "deleteCallback", value: function () {}
           }, {
               key: "on", value: function () {}
           }, {
               key: "off", value: function () {}
           }]), i
       }(),g.prototype.init = function () {
           var t = this;
           if (!this.checkTypes({
               obj: this.prop,
               name: this.name,
               console: this.prop.console,
               vars: [["console", "boolean"], ["page", "string"]]
           })) return !1;
           this.loadEvent(), this.setPage(), this.viewport = new this.Viewport(this.prop), this.viewport = this.viewport.init();
           var n = new this.Interval({console: this.prop.console});
           return n = n.init(), {
               prop: function () {
                   return t.prop
               },
               time: function () {
                   return t.time
               },
               addLoad: this.addLoad.bind(this),
               checkType: this.checkType.bind(this),
               checkTypes: this.checkTypes.bind(this),
               getEventListener: this.getEventListener.bind(this),
               getPage: function () {
                   return t.page
               },
               console: this.console.bind(this),
               timeMin: function () {
                   return t.timeMin
               },
               doc: function () {
                   return t.doc
               },
               document: function () {
                   return t.document
               },
               body: function () {
                   return t.body
               },
               viewport: this.viewport,
               Event: this.Event,
               interval: n,
               Page: this.Page,
               Clear: this.Clear
           }
       }
   }, {}]
}, {}, [1]), function n(o, a, h) {
   function l(e, t) {
       if (!a[e]) {
           if (!o[e]) {
               var i = "function" == typeof require && require;
               if (!t && i) return i(e, !0);
               if (p) return p(e, !0);
               var s = new Error("Cannot find module '" + e + "'");
               throw s.code = "MODULE_NOT_FOUND", s
           }
           var r = a[e] = {exports: {}};
           o[e][0].call(r.exports, function (t) {
               return l(o[e][1][t] || t)
           }, r, r.exports, n, o, a, h)
       }
       return a[e].exports
   }

   for (var p = "function" == typeof require && require, t = 0; t < h.length; t++) l(h[t]);
   return l
}({
   1: [function (t, e, i) {
       "use strict";
       var r = function () {
           function s(t, e) {
               for (var i = 0; i < e.length; i++) {
                   var s = e[i];
                   s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
               }
           }

           return function (t, e, i) {
               return e && s(t.prototype, e), i && s(t, i), t
           }
       }(), n = function t(e, i, s) {
           null === e && (e = Function.prototype);
           var r = Object.getOwnPropertyDescriptor(e, i);
           if (void 0 === r) {
               var n = Object.getPrototypeOf(e);
               return null === n ? void 0 : t(n, i, s)
           }
           if ("value" in r) return r.value;
           var o = r.get;
           return void 0 !== o ? o.call(s) : void 0
       };

       function o(t, e) {
       }

       function a(t, e) {
       }



       v.addLoad(function () {
       }.bind(void 0)), window.page = {
       };
       var l = document.querySelector(".canvas");
       l.width = l.clientWidth, l.height = l.clientHeight;
       var u = {
           SIM_RESOLUTION: 128,
           DYE_RESOLUTION: 512,
           DENSITY_DISSIPATION: .97,
           VELOCITY_DISSIPATION: .98,
           PRESSURE_DISSIPATION: .8,
           PRESSURE_ITERATIONS: 20,
           CURL: 0,
           SPLAT_RADIUS: .25,
           SHADING: !0,
           COLORFUL: !0,
           PAUSED: !1,
           BACK_COLOR: {r: 5, g: 0, b: 8},
           TRANSPARENT: !1,
           BLOOM: !0,
           BLOOM_ITERATIONS: 8,
           BLOOM_RESOLUTION: 256,
           BLOOM_INTENSITY: .8,
           BLOOM_THRESHOLD: .6,
           BLOOM_SOFT_KNEE: .7
       };

       function s() {
           this.id = -1, this.x = 0, this.y = 0, this.dx = 0, this.dy = 0, this.down = !1, this.moved = !1, this.color = [30, 0, 300]
       }

       var p = [], d = [], c = [];
       p.push(new s);
       var f = function (t) {
           var e, i, s = {alpha: !0, depth: !1, stencil: !1, antialias: !1, preserveDrawingBuffer: !1},
               r = t.getContext("webgl2", s), n = !!r;
           n || (r = t.getContext("webgl", s) || t.getContext("experimental-webgl", s));
           n ? (r.getExtension("EXT_color_buffer_float"), i = r.getExtension("OES_texture_float_linear")) : (e = r.getExtension("OES_texture_half_float"), i = r.getExtension("OES_texture_half_float_linear"));
           r.clearColor(0, 0, 0, 1);
           var o, a, h, l = n ? r.HALF_FLOAT : e.HALF_FLOAT_OES;
           n ? (o = y(r, r.RGBA16F, r.RGBA, l), a = y(r, r.RG16F, r.RG, l), h = y(r, r.R16F, r.RED, l)) : (o = y(r, r.RGBA, r.RGBA, l), a = y(r, r.RGBA, r.RGBA, l), h = y(r, r.RGBA, r.RGBA, l));
           return {
               gl: r,
               ext: {formatRGBA: o, formatRG: a, formatR: h, halfFloatTexType: l, supportLinearFiltering: i}
           }
       }(l), g = f.gl, m = f.ext;

       function y(t, e, i, s) {
           if (!function (t, e, i, s) {
               var r = t.createTexture();
               t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, e, 4, 4, 0, i, s, null);
               var n = t.createFramebuffer();
               if (t.bindFramebuffer(t.FRAMEBUFFER, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.checkFramebufferStatus(t.FRAMEBUFFER) != t.FRAMEBUFFER_COMPLETE) return !1;
               return !0
           }(t, e, i, s)) switch (e) {
               case t.R16F:
                   return y(t, t.RG16F, t.RG, s);
               case t.RG16F:
                   return y(t, t.RGBA16F, t.RGBA, s);
               default:
                   return null
           }
           return {internalFormat: e, format: i}
       }

       /Mobi|Android/i.test(navigator.userAgent) && (u.SHADING = !1), m.supportLinearFiltering || (u.SHADING = !1, u.BLOOM = !1);
       var b = function (t, e) {
           if (this.uniforms = {}, this.program = g.createProgram(), g.attachShader(this.program, t), g.attachShader(this.program, e), g.linkProgram(this.program), !g.getProgramParameter(this.program, g.LINK_STATUS)) throw g.getProgramInfoLog(this.program);
           for (var i = g.getProgramParameter(this.program, g.ACTIVE_UNIFORMS), s = 0; s < i; s++) {
               var r = g.getActiveUniform(this.program, s).name;
               this.uniforms[r] = g.getUniformLocation(this.program, r)
           }
       };

       function _(t, e) {
           var i = g.createShader(t);
           if (g.shaderSource(i, e), g.compileShader(i), !g.getShaderParameter(i, g.COMPILE_STATUS)) throw g.getShaderInfoLog(i);
           return i
       }

       b.prototype.bind = function () {
           g.useProgram(this.program)
       };
       var x, k, w, E, T, L, A, S, C, O,
           I = _(g.VERTEX_SHADER, "\n    precision highp float;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),
           P = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),
           z = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n\n    uniform vec4 color;\n\n    void main () {\n        gl_FragColor = color;\n    }\n"),
           D = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n\n    #define SCALE 25.0\n\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"),
           j = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
           M = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
           R = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C.rgb *= diffuse;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
           B = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C *= diffuse;\n\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),
           H = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"),
           F = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"),
           U = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"),
           N = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"),
           q = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n\n    void main () {\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n        gl_FragColor.a = 1.0;\n    }\n"),
           V = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"),
           X = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"),
           G = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"),
           W = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"),
           Y = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uncomment if you use wrap or repeat texture mode\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"),
           K = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"),
           Q = (g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer()), g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), g.STATIC_DRAW), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, g.createBuffer()), g.bufferData(g.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), g.STATIC_DRAW), g.vertexAttribPointer(0, 2, g.FLOAT, !1, 0, 0), g.enableVertexAttribArray(0), function (t) {
               g.bindFramebuffer(g.FRAMEBUFFER, t), g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0)
           }), J = function (t) {
               var e = g.createTexture();
               g.bindTexture(g.TEXTURE_2D, e), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.REPEAT), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.REPEAT), g.texImage2D(g.TEXTURE_2D, 0, g.RGB, 1, 1, 0, g.RGB, g.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
               var i = {
                   texture: e, width: 1, height: 1, attach: function (t) {
                       return g.activeTexture(g.TEXTURE0 + t), g.bindTexture(g.TEXTURE_2D, e), t
                   }
               }, s = new Image;
               return s.onload = function () {
                   i.width = s.width, i.height = s.height, g.bindTexture(g.TEXTURE_2D, e), g.texImage2D(g.TEXTURE_2D, 0, g.RGB, g.RGB, g.UNSIGNED_BYTE, s)
               }, s.src = t, i
           }(""), Z = new b(I, P), tt = new b(I, z), et = new b(I, D), it = new b(I, j), st = new b(I, M),
           rt = new b(I, R), nt = new b(I, B), ot = new b(I, H), at = new b(I, F), ht = new b(I, U), lt = new b(I, N),
           pt = new b(I, m.supportLinearFiltering ? V : q), ut = new b(I, X), dt = new b(I, G), ct = new b(I, W),
           vt = new b(I, Y), ft = new b(I, K);

       function gt() {
           var t = Et(u.SIM_RESOLUTION), e = Et(u.DYE_RESOLUTION);
           x = t.width, k = t.height, w = e.width, E = e.height;
           var i = m.halfFloatTexType, s = m.formatRGBA, r = m.formatRG, n = m.formatR,
               o = m.supportLinearFiltering ? g.LINEAR : g.NEAREST;
           T = null == T ? yt(w, E, s.internalFormat, s.format, i, o) : bt(T, w, E, s.internalFormat, s.format, i, o), L = null == L ? yt(x, k, r.internalFormat, r.format, i, o) : bt(L, x, k, r.internalFormat, r.format, i, o), A = mt(x, k, n.internalFormat, n.format, i, g.NEAREST), S = mt(x, k, n.internalFormat, n.format, i, g.NEAREST), C = yt(x, k, n.internalFormat, n.format, i, g.NEAREST), function () {
               var t = Et(u.BLOOM_RESOLUTION), e = m.halfFloatTexType, i = m.formatRGBA,
                   s = m.supportLinearFiltering ? g.LINEAR : g.NEAREST;
               O = mt(t.width, t.height, i.internalFormat, i.format, e, s);
               for (var r = c.length = 0; r < u.BLOOM_ITERATIONS; r++) {
                   var n = t.width >> r + 1, o = t.height >> r + 1;
                   if (n < 2 || o < 2) break;
                   var a = mt(n, o, i.internalFormat, i.format, e, s);
                   c.push(a)
               }
           }()
       }

       function mt(t, e, i, s, r, n) {
           g.activeTexture(g.TEXTURE0);
           var o = g.createTexture();
           g.bindTexture(g.TEXTURE_2D, o), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, n), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, n), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.texImage2D(g.TEXTURE_2D, 0, i, t, e, 0, s, r, null);
           var a = g.createFramebuffer();
           return g.bindFramebuffer(g.FRAMEBUFFER, a), g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, o, 0), g.viewport(0, 0, t, e), g.clear(g.COLOR_BUFFER_BIT), {
               texture: o,
               fbo: a,
               width: t,
               height: e,
               attach: function (t) {
                   return g.activeTexture(g.TEXTURE0 + t), g.bindTexture(g.TEXTURE_2D, o), t
               }
           }
       }

       function yt(t, e, i, s, r, n) {
           var o = mt(t, e, i, s, r, n), a = mt(t, e, i, s, r, n);
           return {
               get read() {
                   return o
               }, set read(t) {
                   o = t
               }, get write() {
                   return a
               }, set write(t) {
                   a = t
               }, swap: function () {
                   var t = o;
                   o = a, a = t
               }
           }
       }

       function bt(t, e, i, s, r, n, o) {
           var a, h;
           return t.read = (a = t.read, h = mt(e, i, s, r, n, o), Z.bind(), g.uniform1i(Z.uniforms.uTexture, a.attach(0)), g.uniform1f(Z.uniforms.value, 1), Q(h.fbo), h), t.write = mt(e, i, s, r, n, o), t
       }

       gt(), kt(parseInt(20 * Math.random()) + 5);
       var _t = Date.now();

       function xt(t, e, i, s, r) {
           g.viewport(0, 0, x, k), lt.bind(), g.uniform1i(lt.uniforms.uTarget, L.read.attach(0)), g.uniform1f(lt.uniforms.aspectRatio, l.width / l.height), g.uniform2f(lt.uniforms.point, t / l.width, 1 - e / l.height), g.uniform3f(lt.uniforms.color, i, -s, 1), g.uniform1f(lt.uniforms.radius, u.SPLAT_RADIUS / 100), Q(L.write.fbo), L.swap(), g.viewport(0, 0, w, E), g.uniform1i(lt.uniforms.uTarget, T.read.attach(0)), g.uniform3f(lt.uniforms.color, r.r, r.g, r.b), Q(T.write.fbo), T.swap()
       }

       function kt(t) {
           for (var e = 0; e < t; e++) {
               var i = wt();
               i.r *= 10, i.g *= 10, i.b *= 10, xt(l.width * Math.random(), l.height * Math.random(), 1e3 * (Math.random() - .5), 1e3 * (Math.random() - .5), i)
           }
       }

       function wt() {
           var t = function (t, e, i) {
               var s, r, n, o, a, h, l, p;
               switch (o = Math.floor(6 * t), h = i * (1 - e), l = i * (1 - (a = 6 * t - o) * e), p = i * (1 - (1 - a) * e), o % 6) {
                   case 0:
                       s = i, r = p, n = h;
                       break;
                   case 1:
                       s = l, r = i, n = h;
                       break;
                   case 2:
                       s = h, r = i, n = p;
                       break;
                   case 3:
                       s = h, r = l, n = i;
                       break;
                   case 4:
                       s = p, r = h, n = i;
                       break;
                   case 5:
                       s = i, r = h, n = l
               }
               return {r: s, g: r, b: n}
           }(Math.random(), 1, 1);
           return t.r *= .15, t.g *= .15, t.b *= .15, t
       }

       function Et(t) {
           var e = g.drawingBufferWidth / g.drawingBufferHeight;
           e < 1 && (e = 1 / e);
           var i = Math.round(t * e), s = Math.round(t);
           return g.drawingBufferWidth > g.drawingBufferHeight ? {width: i, height: s} : {width: s, height: i}
       }

       function Tt(t, e, i) {
           return {x: e / t.width, y: i / t.height}
       }

       !function t() {
           l.width == l.clientWidth && l.height == l.clientHeight || (l.width = l.clientWidth, l.height = l.clientHeight, gt());
           !function () {
               0 < d.length && kt(d.pop());
               for (var t = 0; t < p.length; t++) {
                   var e = p[t];
                   e.moved && (xt(e.x, e.y, e.dx, e.dy, e.color), e.moved = !1)
               }
               if (!u.COLORFUL) return;
               if (_t + 100 < Date.now()) {
                   _t = Date.now();
                   for (var i = 0; i < p.length; i++) {
                       var s = p[i];
                       s.color = wt()
                   }
               }
           }();
           u.PAUSED || function (t) {
               g.disable(g.BLEND), g.viewport(0, 0, x, k), dt.bind(), g.uniform2f(dt.uniforms.texelSize, 1 / x, 1 / k), g.uniform1i(dt.uniforms.uVelocity, L.read.attach(0)), Q(S.fbo), ct.bind(), g.uniform2f(ct.uniforms.texelSize, 1 / x, 1 / k), g.uniform1i(ct.uniforms.uVelocity, L.read.attach(0)), g.uniform1i(ct.uniforms.uCurl, S.attach(1)), g.uniform1f(ct.uniforms.curl, u.CURL), g.uniform1f(ct.uniforms.dt, t), Q(L.write.fbo), L.swap(), ut.bind(), g.uniform2f(ut.uniforms.texelSize, 1 / x, 1 / k), g.uniform1i(ut.uniforms.uVelocity, L.read.attach(0)), Q(A.fbo), Z.bind(), g.uniform1i(Z.uniforms.uTexture, C.read.attach(0)), g.uniform1f(Z.uniforms.value, u.PRESSURE_DISSIPATION), Q(C.write.fbo), C.swap(), vt.bind(), g.uniform2f(vt.uniforms.texelSize, 1 / x, 1 / k), g.uniform1i(vt.uniforms.uDivergence, A.attach(0));
               for (var e = 0; e < u.PRESSURE_ITERATIONS; e++) g.uniform1i(vt.uniforms.uPressure, C.read.attach(1)), Q(C.write.fbo), C.swap();
               ft.bind(), g.uniform2f(ft.uniforms.texelSize, 1 / x, 1 / k), g.uniform1i(ft.uniforms.uPressure, C.read.attach(0)), g.uniform1i(ft.uniforms.uVelocity, L.read.attach(1)), Q(L.write.fbo), L.swap(), pt.bind(), g.uniform2f(pt.uniforms.texelSize, 1 / x, 1 / k), m.supportLinearFiltering || g.uniform2f(pt.uniforms.dyeTexelSize, 1 / x, 1 / k);
               var i = L.read.attach(0);
               g.uniform1i(pt.uniforms.uVelocity, i), g.uniform1i(pt.uniforms.uSource, i), g.uniform1f(pt.uniforms.dt, t), g.uniform1f(pt.uniforms.dissipation, u.VELOCITY_DISSIPATION), Q(L.write.fbo), L.swap(), g.viewport(0, 0, w, E), m.supportLinearFiltering || g.uniform2f(pt.uniforms.dyeTexelSize, 1 / w, 1 / E);
               g.uniform1i(pt.uniforms.uVelocity, L.read.attach(0)), g.uniform1i(pt.uniforms.uSource, T.read.attach(1)), g.uniform1f(pt.uniforms.dissipation, u.DENSITY_DISSIPATION), Q(T.write.fbo), T.swap()
           }(.016);
           !function (t) {
               u.BLOOM && function (t, e) {
                   if (c.length < 2) return;
                   var i = e;
                   g.disable(g.BLEND), ot.bind();
                   var s = u.BLOOM_THRESHOLD * u.BLOOM_SOFT_KNEE + 1e-4, r = u.BLOOM_THRESHOLD - s, n = 2 * s,
                       o = .25 / s;
                   g.uniform3f(ot.uniforms.curve, r, n, o), g.uniform1f(ot.uniforms.threshold, u.BLOOM_THRESHOLD), g.uniform1i(ot.uniforms.uTexture, t.attach(0)), g.viewport(0, 0, i.width, i.height), Q(i.fbo), at.bind();
                   for (var a = 0; a < c.length; a++) {
                       var h = c[a];
                       g.uniform2f(at.uniforms.texelSize, 1 / i.width, 1 / i.height), g.uniform1i(at.uniforms.uTexture, i.attach(0)), g.viewport(0, 0, h.width, h.height), Q(h.fbo), i = h
                   }
                   g.blendFunc(g.ONE, g.ONE), g.enable(g.BLEND);
                   for (var l = c.length - 2; 0 <= l; l--) {
                       var p = c[l];
                       g.uniform2f(at.uniforms.texelSize, 1 / i.width, 1 / i.height), g.uniform1i(at.uniforms.uTexture, i.attach(0)), g.viewport(0, 0, p.width, p.height), Q(p.fbo), i = p
                   }
                   g.disable(g.BLEND), ht.bind(), g.uniform2f(ht.uniforms.texelSize, 1 / i.width, 1 / i.height), g.uniform1i(ht.uniforms.uTexture, i.attach(0)), g.uniform1f(ht.uniforms.intensity, u.BLOOM_INTENSITY), g.viewport(0, 0, e.width, e.height), Q(e.fbo)
               }(T.read, O);
               null != t && u.TRANSPARENT ? g.disable(g.BLEND) : (g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA), g.enable(g.BLEND));
               var e = null == t ? g.drawingBufferWidth : w, i = null == t ? g.drawingBufferHeight : E;
               if (g.viewport(0, 0, e, i), !u.TRANSPARENT) {
                   tt.bind();
                   
                   var s = u.BACK_COLOR;
                   g.uniform4f(tt.uniforms.color, s.r / 255, s.g / 255, s.b / 255, 1), Q(t)
               }
               null == t && u.TRANSPARENT && (et.bind(), g.uniform1f(et.uniforms.aspectRatio, l.width / l.height), Q(null));
               if (u.SHADING) {
                   var r = u.BLOOM ? nt : rt;
                   if (r.bind(), g.uniform2f(r.uniforms.texelSize, 1 / e, 1 / i), g.uniform1i(r.uniforms.uTexture, T.read.attach(0)), u.BLOOM) {
                       g.uniform1i(r.uniforms.uBloom, O.attach(1)), g.uniform1i(r.uniforms.uDithering, J.attach(2));
                       var n = Tt(J, e, i);
                       g.uniform2f(r.uniforms.ditherScale, n.x, n.y)
                   }
               } else {
                   var o = u.BLOOM ? st : it;
                   if (o.bind(), g.uniform1i(o.uniforms.uTexture, T.read.attach(0)), u.BLOOM) {
                       g.uniform1i(o.uniforms.uBloom, O.attach(1)), g.uniform1i(o.uniforms.uDithering, J.attach(2));
                       var a = Tt(J, e, i);
                       g.uniform2f(o.uniforms.ditherScale, a.x, a.y)
                   }
               }
               Q(t)
           }(null);
           requestAnimationFrame(t)
       }(), window.addEventListener("mousemove", function (t) {
           p[0].moved = p[0].down, p[0].dx = 5 * (t.pageX - p[0].x), p[0].dy = 5 * (t.pageY - p[0].y), p[0].x = t.pageX, p[0].y = t.pageY
       }), window.addEventListener("touchmove", function (t) {

           for (var e = t.targetTouches, i = 0; i < e.length; i++) {
               var s = p[i];
               s.moved = s.down, s.dx = 8 * (e[i].pageX - s.x), s.dy = 8 * (e[i].pageY - s.y), s.x = e[i].pageX, s.y = e[i].pageY
           }
       }, !1), window.addEventListener("touchstart", function (t) {
           for (var e = t.targetTouches, i = 0; i < e.length; i++) i >= p.length && p.push(new s), p[i].id = e[i].identifier, p[i].down = !0, p[i].x = e[i].pageX, p[i].y = e[i].pageY, p[i].color = wt()
       }), window.addEventListener("touchend", function (t) {
           for (var e = t.changedTouches, i = 0; i < e.length; i++) for (var s = 0; s < p.length; s++) e[i].identifier == p[s].id && (p[s].down = !1)
       }), v.addLoad(function () {
           p[0].down = !0, p[0].color = wt()
       });

   }, {}]
}, {}, [1]);