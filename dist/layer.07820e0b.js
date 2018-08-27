// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"..\\src\\components\\button\\button.vue":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        btn: { //btn的样式
            type: String,
            default: 'primary'
        },
        size: String,
        type: { //类型，
            type: String,
            default: 'button'
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {},
    mounted: function mounted() {},

    methods: {
        clickon: function clickon() {
            this.$emit("click", "");
        }
    },
    components: {}
};
        var $7f28c1 = exports.default || module.exports;
      
      if (typeof $7f28c1 === 'function') {
        $7f28c1 = $7f28c1.options;
      }
    
        /* template */
        Object.assign($7f28c1, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "notify-btn",
      class: [
        _vm.btn ? "notify-btn-" + _vm.btn : "",
        _vm.size ? "notify-btn-" + _vm.size : "",
        {
          disabled: _vm.disabled
        }
      ],
      attrs: { type: _vm.type, name: "button" },
      on: { click: _vm.clickon }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-7f28c1",
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$7f28c1', $7f28c1);
          } else {
            api.reload('$7f28c1', $7f28c1);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"..\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\alert.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _button = require("./components/button/button.vue");

var _button2 = _interopRequireDefault(_button);

var _helper = require("./helper/helper.js");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      moveLeft: 0, //左移的距离
      moveTop: 0, //上移的距离
      ismove: false
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    close: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _helper2.default.btncancel(event, this.options);

              case 2:
                _helper2.default.clickMaskCloseAll(event, this.options.layer, this.options.id);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function close(_x) {
        return _ref.apply(this, arguments);
      }

      return close;
    }(),
    btnyes: function btnyes(event) {
      _helper2.default.btnyes(event, this.options);
    },
    btncancel: function btncancel(event) {
      _helper2.default.btncancel(event, this.options);
    },
    moveStart: function moveStart(event) {
      _helper2.default.moveStart(event, this.options);
      this.moveLeft = event.clientX;
      this.moveTop = event.clientY;
      this.ismove = true;
    },
    move: function move(event) {
      if (this.ismove) {
        var o = document.getElementById(this.options.id + "");
        o.style.left = this.options.offset[0] + (event.clientX - this.moveLeft) + "px";
        o.style.top = this.options.offset[1] + (event.clientY - this.moveTop) + "px";
      }
    },
    moveEnd: function moveEnd(event) {
      this.ismove = false;
    }
  },
  mounted: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var _this = this;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _helper2.default.sleep(20);

            case 2:
              if (this.options.shade) {
                //是否显示遮罩
                document.getElementById(this.options.id + "_mask").addEventListener("mousemove", function (event) {
                  _this.move(event);
                });
                document.getElementById(this.options.id + "_mask").addEventListener("mouseup", function (event) {
                  _this.moveEnd(event);
                });
              } else {
                document.addEventListener("mousemove", function (event) {
                  _this.move(event);
                });
                document.addEventListener("mouseup", function (event) {
                  _this.moveEnd(event);
                });
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }(),

  components: {
    pzbutton: _button2.default
  }
};
        var $46061f = exports.default || module.exports;
      
      if (typeof $46061f === 'function') {
        $46061f = $46061f.options;
      }
    
        /* template */
        Object.assign($46061f, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vl-notify vl-notify-main vl-notify-alert",
      staticStyle: { "max-width": "500px" },
      style: {
        left: _vm.options.offset[0] + "px",
        top: _vm.options.offset[1] + "px",
        margin: _vm.options.offset[2]
      },
      attrs: { id: _vm.options.id },
      on: { mousemove: _vm.move, mouseup: _vm.moveEnd }
    },
    [
      _c(
        "h2",
        { staticClass: "vl-notice-title", on: { mousedown: _vm.moveStart } },
        [
          _vm._v(_vm._s(_vm.options.title)),
          _c("i", { staticClass: "icon-remove", on: { click: _vm.close } })
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "vl-notify-content",
        domProps: { innerHTML: _vm._s(_vm.options.content) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vl-notify-btns" },
        [
          _c(
            "pzbutton",
            {
              attrs: { btn: "primary", size: "small" },
              nativeOn: {
                click: function($event) {
                  return _vm.btnyes($event)
                }
              }
            },
            [_vm._v("确定")]
          ),
          _vm._v(" "),
          typeof _vm.options.cancel == "function" ||
          _vm.options.cancel == "cancel"
            ? _c(
                "pzbutton",
                {
                  attrs: { btn: "default", size: "small" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.btncancel($event)
                    }
                  }
                },
                [_vm._v("取消")]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$46061f', $46061f);
          } else {
            api.reload('$46061f', $46061f);
          }
        }

        
      }
    })();
},{"babel-runtime/regenerator":"..\\node_modules\\babel-runtime\\regenerator\\index.js","babel-runtime/helpers/asyncToGenerator":"..\\node_modules\\babel-runtime\\helpers\\asyncToGenerator.js","./components/button/button.vue":"..\\src\\components\\button\\button.vue","./helper/helper.js":"..\\src\\helper\\helper.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\loading.vue":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      timeout: ''
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  mounted: function mounted() {
    var self = this;
    setTimeout(function () {
      self.options.layer.close(self.options.id);
    }, self.options.time * 1000);
  }
};
        var $f948b9 = exports.default || module.exports;
      
      if (typeof $f948b9 === 'function') {
        $f948b9 = $f948b9.options;
      }
    
        /* template */
        Object.assign($f948b9, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vl-notify vl-notify-loading",
      attrs: { id: _vm.options.id }
    },
    [_c("span")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$f948b9', $f948b9);
          } else {
            api.reload('$f948b9', $f948b9);
          }
        }

        
      }
    })();
},{"vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\msg.vue":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helper = require('./helper/helper.js');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      timeout: ''
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  mounted: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var self;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = this;
              _context.next = 3;
              return _helper2.default.sleep(this.options.time * 1000);

            case 3:
              this.btnyes();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),

  methods: {
    btnyes: function btnyes(event) {
      var o = document.getElementById(this.options.id);
      if (o) {
        _helper2.default.btnyes(event, this.options);
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
        var $898094 = exports.default || module.exports;
      
      if (typeof $898094 === 'function') {
        $898094 = $898094.options;
      }
    
        /* template */
        Object.assign($898094, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", {
    staticClass: "vl-notify vl-notify-msg",
    attrs: { id: _vm.options.id },
    domProps: { innerHTML: _vm._s(_vm.options.content) }
  })
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$898094', $898094);
          } else {
            api.reload('$898094', $898094);
          }
        }

        
      }
    })();
},{"babel-runtime/regenerator":"..\\node_modules\\babel-runtime\\regenerator\\index.js","babel-runtime/helpers/asyncToGenerator":"..\\node_modules\\babel-runtime\\helpers\\asyncToGenerator.js","./helper/helper.js":"..\\src\\helper\\helper.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\tips.vue":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      timeout: ''
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    'offset': function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getOffset();

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function offset() {
        return _ref.apply(this, arguments);
      }

      return offset;
    }()
  },
  mounted: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var self;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              self = this;

              if (this.options.time == 0) {
                this.options.time = 2;
              }

              setTimeout(function () {
                self.btnyes();
              }, self.options.time * 1000);

              _context2.next = 5;
              return this.getOffset();

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }(),

  methods: {
    'btnyes': function btnyes(event) {
      var o = document.getElementById(this.options.id);
      if (o) {
        if (typeof this.options.yes == "function") {
          this.options.yes();
        }
        this.options.layer.close(this.options.id);
        // delete this.$layer.instances[this.options.id];
        // o.remove();
      }
    },
    sleep: function sleep(ms) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
      });
    },
    getOffset: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var o, bound, oTips, boundTips, scrollTop, left, top, jiantou, offset;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.sleep(1);

              case 2:
                o = document.querySelector(this.options.title); //用title传递that元素

                bound = o.getBoundingClientRect();
                oTips = document.querySelector("#" + this.options.id);
                boundTips = oTips.getBoundingClientRect();
                scrollTop = 0; //this.getScrollTop();

                left = o.offsetLeft;
                top = o.offsetTop - scrollTop;
                jiantou = 8 + 1;
                offset = {};
                _context3.t0 = this.options.tips[0];
                _context3.next = _context3.t0 === 0 ? 14 : _context3.t0 === 1 ? 16 : _context3.t0 === 2 ? 18 : _context3.t0 === 3 ? 20 : 22;
                break;

              case 14:
                offset = {
                  left: left + "px",
                  top: top - boundTips.height - jiantou + "px"
                };
                return _context3.abrupt('break', 22);

              case 16:
                offset = {
                  left: left + bound.width + jiantou + "px",
                  top: top + "px"
                };
                return _context3.abrupt('break', 22);

              case 18:
                offset = {
                  left: left + "px",
                  top: top + bound.height + jiantou + "px"
                };
                return _context3.abrupt('break', 22);

              case 20:
                offset = {
                  left: left - boundTips.width - jiantou + "px",
                  top: top + "px"
                };
                return _context3.abrupt('break', 22);

              case 22:
                oTips.style.left = offset.left;
                oTips.style.top = offset.top;
                // return offset;

              case 24:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getOffset() {
        return _ref3.apply(this, arguments);
      }

      return getOffset;
    }(),
    getScrollTop: function getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    }
  }
};
        var $ee319e = exports.default || module.exports;
      
      if (typeof $ee319e === 'function') {
        $ee319e = $ee319e.options;
      }
    
        /* template */
        Object.assign($ee319e, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vl-notify vl-notify-tips",
      class: [this.options.tips[1], "vl-notify-tips-" + this.options.tips[0]],
      attrs: { id: _vm.options.id },
      domProps: { innerHTML: _vm._s(_vm.options.content) }
    },
    [_c("em")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$ee319e', $ee319e);
          } else {
            api.reload('$ee319e', $ee319e);
          }
        }

        
      }
    })();
},{"babel-runtime/regenerator":"..\\node_modules\\babel-runtime\\regenerator\\index.js","babel-runtime/helpers/asyncToGenerator":"..\\node_modules\\babel-runtime\\helpers\\asyncToGenerator.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\page.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            moveLeft: 0, //左移的距离
            moveTop: 0, //上移的距离
            ismove: false
        };
    },

    props: {
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    computed: {},
    mounted: function mounted() {},

    methods: {
        'close': function close(event) {
            var mask = event.target.getAttribute("class");
            if (mask && mask.indexOf("notify-mask") > -1) {
                this.options.layer.close(this.options.id);
            }
        },
        'btnyes': function btnyes(event) {
            if (typeof this.options.yes == "function") {
                this.options.yes();
            } else {
                this.options.layer.close(this.options.id);
            }
        },
        'btncancel': function btncancel(event) {
            if (typeof this.options.cancel == "function") {
                this.options.cancel();
            } else {
                this.options.layer.close(this.options.id);
            }
        },
        'moveStart': function moveStart(event) {
            this.options.offset = this.options.offset == 'auto' ? [] : this.options.offset;
            if (this.options.offset.length == 0) {
                this.options.offset.push(document.getElementById(this.options.id + "_alert").offsetLeft);
                this.options.offset.push(document.getElementById(this.options.id + "_alert").offsetTop);
                this.options.offset.push(0);
            }
            if (this.options.offset.length == 2) {
                this.options.offset.push(0);
            }
            this.options.offset[0] = document.getElementById(this.options.id + "_alert").offsetLeft;
            this.options.offset[1] = document.getElementById(this.options.id + "_alert").offsetTop;
            this.moveLeft = event.clientX;
            this.moveTop = event.clientY;
            this.ismove = true;
        },
        'move': function move(event) {
            if (this.ismove) {
                var o = document.getElementById(this.options.id + "_alert");
                o.style.left = this.options.offset[0] + (event.clientX - this.moveLeft) + "px";
                o.style.top = this.options.offset[1] + (event.clientY - this.moveTop) + "px";
            }
        },
        'moveEnd': function moveEnd(event) {
            this.ismove = false;
        }
    },
    watch: {},
    components: {}
};
        var $658bd6 = exports.default || module.exports;
      
      if (typeof $658bd6 === 'function') {
        $658bd6 = $658bd6.options;
      }
    
        /* template */
        Object.assign($658bd6, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "notify",
      on: { mousemove: _vm.move, mouseup: _vm.moveEnd }
    },
    [
      _c("div", { staticClass: "notify-mask", on: { click: _vm.close } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "notify-main notify-alert",
          style: {
            left: _vm.options.offset[0] + "px",
            top: _vm.options.offset[1] + "px",
            margin: _vm.options.offset[2]
          },
          attrs: { id: _vm.options.id + "_alert" }
        },
        [
          _c("h2", { staticClass: "title", on: { mousedown: _vm.moveStart } }, [
            _vm._v(_vm._s(_vm.options.title))
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "notify-content",
            domProps: { innerHTML: _vm._s(_vm.options.content) }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$658bd6', $658bd6);
          } else {
            api.reload('$658bd6', $658bd6);
          }
        }

        
      }
    })();
},{"vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\iframe.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helper = require("./helper/helper.js");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      moveLeft: 0, //左移的距离
      moveTop: 0, //上移的距离
      ismove: false,
      id: "vlip" + new Date().getTime(),
      zindex: 0
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    contentStyle: function contentStyle() {
      return {
        height: parseInt(this.options.area[1]) - 50 + "px",
        minHeight: "inherit",
        overflow: "auto"
      };
    }
  },
  mounted: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var _this = this;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.getContent();
              _context.next = 3;
              return _helper2.default.sleep(20);

            case 3:
              if (this.options.shade) {
                //是否显示遮罩
                document.getElementById(this.options.id + "_mask").addEventListener("mousemove", function (event) {
                  _this.move(event);
                });
                document.getElementById(this.options.id + "_mask").addEventListener("mouseup", function (event) {
                  _this.moveEnd(event);
                });
              } else {
                document.addEventListener("mousemove", function (event) {
                  _this.move(event);
                });
                document.addEventListener("mouseup", function (event) {
                  _this.moveEnd(event);
                });
              }
              this.resetZIndex();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),

  methods: {
    getStyle: function getStyle(el, styleProp) {
      var x = document.getElementById(el);
      if (window.getComputedStyle) {
        var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
      } else if (x.currentStyle) {
        var y = x.currentStyle[styleProp];
      }
      return y;
    },
    resetZIndex: function resetZIndex() {
      var max = 500;
      var doms = document.querySelectorAll(".vl-notify-iframe");
      var domZindex = 0;
      for (var i = 0, len = doms.length; i < len; i++) {
        var value = parseInt(this.getStyle(doms[i].id, "z-index"));
        if (this.options.id == doms[i].id) {
          domZindex = value;
        }
        if (max < value) {
          max = value;
        }
      }
      if (domZindex == max && max != 500) {
        return;
      }
      this.zindex = max + 1;
    },
    getContent: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var propsData, instance;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _helper2.default.sleep(10);

              case 2:
                propsData = JSON.parse(JSON.stringify(this.options.content.data));

                propsData["layerid"] = this.options.id;
                instance = new this.options.content.content({
                  //具体参数信息，请参考vue源码
                  parent: this.options.content.parent,
                  propsData: propsData
                });

                instance.vm = instance.$mount();
                document.getElementById(this.id).appendChild(instance.vm.$el);
                this.options.layer.instancesVue[this.options.id].iframe = instance.vm;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getContent() {
        return _ref2.apply(this, arguments);
      }

      return getContent;
    }(),
    close: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(event) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _helper2.default.btncancel(event, this.options);

              case 2:
                _helper2.default.clickMaskCloseAll(event, this.options.layer, this.options.id);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function close(_x) {
        return _ref3.apply(this, arguments);
      }

      return close;
    }(),
    btnyes: function btnyes(event) {
      _helper2.default.btnyes(event, this.options);
    },
    btncancel: function btncancel(event) {
      _helper2.default.btncancel(event, this.options);
    },
    moveStart: function moveStart(event) {
      _helper2.default.moveStart(event, this.options);
      this.moveLeft = event.clientX;
      this.moveTop = event.clientY;
      this.ismove = true;
    },
    move: function move(event) {
      if (this.ismove) {
        var o = document.getElementById(this.options.id + "");
        o.style.left = this.options.offset[0] + (event.clientX - this.moveLeft) + "px";
        o.style.top = this.options.offset[1] + (event.clientY - this.moveTop) + "px";
        this.resetZIndex();
      }
    },
    moveEnd: function moveEnd(event) {
      this.ismove = false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
        var $0f62fd = exports.default || module.exports;
      
      if (typeof $0f62fd === 'function') {
        $0f62fd = $0f62fd.options;
      }
    
        /* template */
        Object.assign($0f62fd, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vl-notify vl-notify-main vl-notify-alert vl-notify-iframe",
      style: {
        left: _vm.options.offset[0] + "px",
        top: _vm.options.offset[1] + "px",
        margin: _vm.options.offset[2],
        zIndex: _vm.zindex,
        width: _vm.options.area[0],
        height: _vm.options.area[1]
      },
      attrs: { tabindex: "1", id: _vm.options.id },
      on: { mousemove: _vm.move, mouseup: _vm.moveEnd, focus: _vm.resetZIndex }
    },
    [
      _c(
        "h2",
        { staticClass: "vl-notice-title", on: { mousedown: _vm.moveStart } },
        [
          _vm._v(_vm._s(_vm.options.title)),
          _c("i", { staticClass: "icon-remove", on: { click: _vm.close } })
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "vl-notify-content",
        style: _vm.contentStyle,
        attrs: { id: _vm.id }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$0f62fd', $0f62fd);
          } else {
            api.reload('$0f62fd', $0f62fd);
          }
        }

        
      }
    })();
},{"babel-runtime/regenerator":"..\\node_modules\\babel-runtime\\regenerator\\index.js","babel-runtime/helpers/asyncToGenerator":"..\\node_modules\\babel-runtime\\helpers\\asyncToGenerator.js","./helper/helper.js":"..\\src\\helper\\helper.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\src\\layer.vue":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = require('./alert.vue');

var _alert2 = _interopRequireDefault(_alert);

var _loading = require('./loading.vue');

var _loading2 = _interopRequireDefault(_loading);

var _msg = require('./msg.vue');

var _msg2 = _interopRequireDefault(_msg);

var _tips = require('./tips.vue');

var _tips2 = _interopRequireDefault(_tips);

var _page = require('./page.vue');

var _page2 = _interopRequireDefault(_page);

var _iframe = require('./iframe.vue');

var _iframe2 = _interopRequireDefault(_iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      id: '',
      type: 0, //0（alert默认）1（页面层）2（iframe层）3（loading）4（tips层）,5(msg)
      title: '信息',
      content: '',
      area: 'auto',
      offset: 'auto',
      icon: -1,
      btn: '确定',
      time: 0,
      shade: true,
      yes: '',
      cancel: ''
    };
  },

  computed: {
    getActiveName: function getActiveName() {
      var comps = ['pzalert', 'pzpage', 'pziframe', 'pzloading', 'pztips', 'pzmsg'];
      return comps[this.$data.type];
    },

    "isMsg": function isMsg() {
      return this.type == 5 ? true : false;
    },
    "isTips": function isTips() {
      return this.type == 4 ? true : false;
    }
  },
  mounted: function mounted() {},

  methods: {},
  watch: {},
  components: {
    pzalert: _alert2.default,
    pzloading: _loading2.default,
    pzmsg: _msg2.default,
    pztips: _tips2.default,
    pzpage: _page2.default,
    pziframe: _iframe2.default
  }
};
        var $820e0b = exports.default || module.exports;
      
      if (typeof $820e0b === 'function') {
        $820e0b = $820e0b.options;
      }
    
        /* template */
        Object.assign($820e0b, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.getActiveName, {
    tag: "component",
    attrs: { options: this.$data }
  })
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$820e0b', $820e0b);
          } else {
            api.reload('$820e0b', $820e0b);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"./alert.vue":"..\\src\\alert.vue","./loading.vue":"..\\src\\loading.vue","./msg.vue":"..\\src\\msg.vue","./tips.vue":"..\\src\\tips.vue","./page.vue":"..\\src\\page.vue","./iframe.vue":"..\\src\\iframe.vue","_css_loader":"..\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js","vue-hot-reload-api":"..\\node_modules\\vue-hot-reload-api\\dist\\index.js","vue":"..\\node_modules\\vue\\dist\\vue.runtime.esm.js"}],"..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58836' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","..\\src\\layer.vue"], null)
//# sourceMappingURL=/layer.07820e0b.map