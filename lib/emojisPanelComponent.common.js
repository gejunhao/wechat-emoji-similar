module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9c46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16512024_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e0ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16512024_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16512024_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e0ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a06a7c1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/emojis-component/src/index.vue?vue&type=template&id=16512024&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel",style:({'width':"" + (_vm.width*_vm.columns+10)+'px',height:"" + (_vm.height*_vm.row+20)+'px','overflow-Y':'scroll'})},[_c('div',{staticClass:"panel-content"},_vm._l((_vm.emojis_path),function(item,index){return _c('a',{key:index,ref:'emoji-element'+'-'+index,refInFor:true,staticClass:"emojis-icon icon-background",style:({'display':'inline-block','width':_vm.width+'px','height': _vm.height+'px','background':'url('+"" + (item.path)+') no-repeat','background-position':'center center','background-size':'80% 80%'}),attrs:{"name":item.name},on:{"click":function($event){return _vm.handlerEmoji(item,index)}}})}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/emojis-component/src/index.vue?vue&type=template&id=16512024&scoped=true&

// CONCATENATED MODULE: ./packages/emojis-component/src/js/filename.js
const code1 = ['/::)', '/::~', '/::B', '/::|', '/:8-)', '/::<', '/::$', '/::X']
const code2 = ['/::Z', "/::'(", '/::-|', '/::@', '/::P', '/::D', '/::O', '/::(']
const code3 = ['/:--b', '/::Q', '/::T', '/:,@P', '/:,@-D', '/::d', '/:,@o', '/:|-)']
const code4 = ['/::!', '/::>', '/::,@', '/::-S', '/:?', '/:,@x', '/:,@@', '/:,@!']
const code5 = ['/:!!!', '/:xx', '/:bye', '/:wipe', '/:dig', '/:handclap', '/:B-)', '/:@>']
const code6 = ['/:>-|', '/:P-(', "/::'|", '/:X-)', '/::*', '/:8*', '[Happy]', '[Sick]']
const code7 = ['[Flushed]', '[Lol]', '[Terror]', '[LetDown]', '[Duh]', '[Hey]', '[Facepalm]', '[Smirk]']
const code8 = ['[Smart]', '[Concerned]', '[Yeah!]', '[Onlooker]', '[GoForIt]', '[Sweats]', '[OMG]', '[Emm]']
const code9 = ['[Respect]', '[Doge]', '[NoProb]', '[MyBad]', '[Wow]', '[Boring]', '[Awesome]', '[LetMeSee]']
const code10 = ['[Sigh]', '[Hurt]', '[Broken]', '/:showlove', '/:heart', '/:break', '/:hug', '/:strong']
const code11 = ['/:weak', '/:share', '/:v', '/:@)', '/:jj', '/:@@', '/:ok', '[Worship]']
const code12 = ['/:beer', '/:coffee', '/:cake', '/:rose', '/:fade', '/:pd', '/:bome', '/:shit']
const code13 = ['/:moon', '/:sun', '[Party]', '/:gift', '[Packet]', '[Rich]', '[Blessing]', '[Fireworks]']
const code14 = ['[爆竹]', '/:pig', '/:jump', '/:shake', '/:circle']

const emojis_text = {
  '[微笑]': '0',
  '[撇嘴]': '1',
  '[色]': '2',
  '[发呆]': '3',
  '[得意]': '4',
  '[流泪]': '5',
  '[害羞]': '6',
  '[闭嘴]': '7',
  '[睡]': '8',
  '[大哭]': '9',
  '[尴尬]': '10',
  '[发怒]': '11',
  '[调皮]': '12',
  '[呲牙]': '13',
  '[惊讶]': '14',
  '[难过]': '15',
  '[破涕为笑]': '16',
  '[囧]': '17',
  '[抓狂]': '18',
  '[吐]': '19',
  '[偷笑]': '20',
  '[愉快]': '21',
  '[白眼]': '22',
  '[傲慢]': '23',
  '[失望]': '24',
  '[困]': '25',
  '[惊恐]': '26',
  '[无语]': '27',
  '[憨笑]': '28',
  '[悠闲]': '29',
  '[嘿哈]': '30',
  '[咒骂]': '31',
  '[疑问]': '32',
  '[嘘]': '33',
  '[晕]': '34',
  '[脸红]': '35',
  '[衰]': '36',
  '[骷髅]': '37',
  '[敲打]': '38',
  '[再见]': '39',
  '[擦汗]': '40',
  '[抠鼻]': '41',
  '[鼓掌]': '42',
  '[捂脸]': '43',
  '[坏笑]': '44',
  '[恐惧]': '45',
  '[右哼哼]': '46',
  '[口罩]': '47',
  '[鄙视]': '48',
  '[委屈]': '49',
  '[快哭了]': '50',
  '[阴险]': '51',
  '[亲亲]': '52',
  '[笑脸]': '53',
  '[可怜]': '54',
  '[奸笑]': '55',
  '[机智]': '56',
  '[皱眉]': '57',
  '[耶]': '58',
  '[吃瓜]': '59',
  '[加油]': '60',
  '[汗]': '61',
  '[天啦]': '62',
  '[社会]': '63',
  '[旺柴]': '64',
  '[好的]': '65',
  '[打脸]': '66',
  '[哇]': '67',
  '[翻白眼]': '68',
  '[666]': '69',
  '[让我看看]': '70',
  '[叹气]': '71',
  '[苦涩]': '72',
  '[裂开]': '73',
  '[Emm]': '74',
  '[嘴唇]': '75',
  '[爱心]': '76',
  '[心碎]': '77',
  '[拥抱]': '78',
  '[强]': '79',
  '[弱]': '80',
  '[握手]': '81',
  '[胜利]': '82',
  '[抱拳]': '83',
  '[勾引]': '84',
  '[拳头]': '85',
  '[OK]': '86',
  '[合十]': '87',
  '[啤酒]': '88',
  '[咖啡]': '89',
  '[蛋糕]': '90',
  '[玫瑰]': '91',
  '[凋谢]': '92',
  '[菜刀]': '93',
  '[炸弹]': '94',
  '[便便]': '95',
  '[月亮]': '96',
  '[太阳]': '97',
  '[庆祝]': '98',
  '[礼物]': '99',
  '[红包]': '100',
  '[發]': '101',
  '[福]': '102',
  '[烟花]': '103',
  '[爆竹]': '104',
  '[猪头]': '105',
  '[跳跳]': '106',
  '[发抖]': '107',
  '[转圈]': '108',
}
const emojis_code = [...code1, ...code2, ...code3, ...code4, ...code5, ...code6, ...code7, ...code8, ...code9, ...code10, ...code11, ...code12, ...code13, ...code14]
// 生成wangeditor需要的数组
const wangEditorEmoji = () => {
  const arr = []
  emojis_code.forEach((item, index) => {
    const obj = {
      alt: `{{${item}}}`,
      src: `/emojis_png/${index + 1}.png`,
    }
    arr.push(obj)
  })
  return arr
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/emojis-component/src/index.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'WechatEmojiSimilar',
  props: {
    _path: {
      type: String,
      default: '/emojis_png/'
    },
    width: {
      type: Number,
      default: 30
    },
    height: {
      type: Number,
      default: 30
    },
    columns: {
      type: Number,
      default: 8
    },
    row: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {}
  },
  computed: {
    emojis_path() {
      const code_arr = []
      emojis_code.forEach((item, index) => {
        const obj = {
          index: index,
          code: item,
          path: '/emojis_png' + '/' + (index + 1) + '.png'
        }
        code_arr.push(obj)
      })
      return code_arr
    }
  },
  mounted() {},
  methods: {
    handlerEmoji(row, index) {
      const scope = {
        row: row,
        $el: this.$refs['emoji-element' + '-' + index][0]
      }
      this.$emit('handlerEmoji', scope)
    }
  }
});

// CONCATENATED MODULE: ./packages/emojis-component/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var emojis_component_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/emojis-component/src/index.vue?vue&type=style&index=0&id=16512024&scoped=true&lang=css&
var srcvue_type_style_index_0_id_16512024_scoped_true_lang_css_ = __webpack_require__("9c46");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/emojis-component/src/index.vue






/* normalize component */

var component = normalizeComponent(
  emojis_component_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "16512024",
  null
  
)

/* harmony default export */ var emojis_component_src = (component.exports);
// CONCATENATED MODULE: ./packages/emojis-component/index.js
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
emojis_component_src.install = function (Vue) {
  Vue.component(emojis_component_src.name, emojis_component_src)
}
// 默认导出组件
/* harmony default export */ var emojis_component = (emojis_component_src);

// CONCATENATED MODULE: ./packages/emojis-component/src/js/escapecode.js
function escapecode(code) {
  var a = JSON.parse(JSON.stringify(code))
  a = a.replaceAll('/', '\\/')
  a = a.replaceAll('-', '\\-')
  a = a.replaceAll('(', '\\(')
  a = a.replaceAll(')', '\\)')
  a = a.replaceAll('[', '\\[')
  a = a.replaceAll(']', '\\]')
  a = a.replaceAll('$', '\\$')
  a = a.replaceAll('*', '\\*')
  a = a.replaceAll('?', '\\?')
  a = a.replaceAll('|', '\\|')
  return a
}

// CONCATENATED MODULE: ./packages/emojis-component/src/js/parsecode.js


const keys = Object.keys(emojis_text)
const searchTable = new Array([])
keys.forEach((item, index) => {
  searchTable[emojis_code[index]] = item
})
function parseText(text) {
  // var flag = false // 判定字符解析模式
  var _text = JSON.parse(JSON.stringify(text))
  emojis_code.forEach((item, index) => {
    const regCode = new RegExp('(' + escapecode(item) + ')', 'g')
    if (regCode.test(_text)) {
      // flag = true
      const path = '/emojis_png' + '/' + (index + 1) + '.png'
      const img = `<span class="emoji-span" style="display:inline-block"><img class="wx-emoji" name="{{${item}}}" code-type="{emojis_code}" src="${path}" ref="" style="display:inline-block;width:18px;height:18px;vertical-align:middle"></span>`
      _text = _text.replace(regCode, img)
    } else {
      return
    }
  })
  return _text
}
function replaceEmoji(t) {
  var text = t.replaceAll('<span class="emoji-span" style="display:inline-block">', '')
  text = text.replaceAll('</span>', '')
  const reg = /<img class="wx-emoji" name="{{.*?}}".*?>/g
  const flag = reg.test(text)
  if (flag) {
    var _text = text
    var emoji_code = [] // 存放取出的code
    const nameReg = /{{.*?}}/g
    const arr = _text.match(reg)
    arr.forEach((item) => {
      emoji_code = item.match(nameReg)
      var a = emoji_code[0].replace('{{', '')
      a = a.replace('}}', '')
      _text = _text.replace(item, a)
    })
    return _text
  } else {
    return text
  }
}

// CONCATENATED MODULE: ./packages/index.js
// 导出所有组件



// 存储组件列表
const components = [emojis_component]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$parseText = parseText
  Vue.prototype.$replaceEmoji = replaceEmoji
}
// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install,
  // 具体的组件列表
  WechatEmojiSimilar: emojis_component,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=emojisPanelComponent.common.js.map