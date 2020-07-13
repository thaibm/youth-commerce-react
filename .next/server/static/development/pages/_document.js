module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./images/favicon.png":
/*!****************************!*\
  !*** ./images/favicon.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RTNGNzdBOEFGNjkxMUU5QkFBNUU0NTMwNzhBQkNCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTNGNzdBOUFGNjkxMUU5QkFBNUU0NTMwNzhBQkNCQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdFM0Y3N0E2QUY2OTExRTlCQUE1RTQ1MzA3OEFCQ0JCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdFM0Y3N0E3QUY2OTExRTlCQUE1RTQ1MzA3OEFCQ0JCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BJWXngAAEWhJREFUeNrsXQl0E9e5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"

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicon.png */ "./images/favicon.png")
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImZpbGVzIiwia2VwdCIsImJ1bmRsZSIsInByb2Nlc3MiLCJDb21wb25lbnQiLCJlbmhhbmNlcnMiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZXIiLCJwcm9wcyIsImN0eCIsInN0eWxlcyIsIl9kb2N1bWVudFByb3BzIiwiX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyIsIkRhdGUiLCJyZW5kZXIiLCJEb2N1bWVudCIsImhlYWRUYWdzTWlkZGxld2FyZSIsImJvZHlUYWdzTWlkZGxld2FyZSIsImh0bWxQcm9wc01pZGRsZXdhcmUiLCJpbkFtcE1vZGUiLCJIdG1sIiwiY29udGV4dFR5cGUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwiY3NzTGlua0VsZW1lbnRzIiwiZmlsZSIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsIlJlYWN0IiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwiY29uc29sZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJoZWFkIiwiYmFkUHJvcCIsInR5cGUiLCJPYmplY3QiLCJwcm9wIiwiX19ORVhUX0RBVEFfXyIsInBhZ2UiLCJjdXJTdHlsZXMiLCJBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX19odG1sIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImJ1aWxkSWQiLCJnZXRQYWdlRmlsZSIsImhlYWRUYWdzIiwiSGVhZCIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJBTVBfUkVOREVSX1RBUkdFVCIsIk1haW4iLCJnZXREeW5hbWljQ2h1bmtzIiwiZGVkdXBlIiwibW9kZXJuUHJvcHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImVyciIsImRldkZpbGVzIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0giLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0siLCJzdGF0aWNNYXJrdXAiLCJOZXh0U2NyaXB0IiwiYm9keVRhZ3MiLCJwYWdlU2NyaXB0IiwiYXBwU2NyaXB0Iiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhbXBQYXRoIiwiYXNQYXRoIiwic3RhcnRpbmdVcmwiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdGlhbFByb3BzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLG1FOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyx3L047Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQzs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFDQTs7Ozs7O0FBS0E7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bUM7QUFDakwsc0M7Ozs7Ozs7Ozs7O0FDSEEsaUJBQWlCLG1CQUFPLENBQUMsMkVBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakQ7O0FBRUEsTUFBTUMsVUFBTixTQUF5Qi9FLG9EQUF6QixDQUFrQztBQUU5QixlQUFhZ0YsZUFBYixDQUE2QnRGLEdBQTdCLEVBQWtDO0FBQzlCLFVBQU11RixZQUFZLEdBQUcsTUFBTWpGLG9EQUFRLENBQUNnRixlQUFULENBQXlCdEYsR0FBekIsQ0FBM0I7QUFDQSw2QkFBWXVGLFlBQVo7QUFDSDs7QUFFRGxGLFFBQU0sR0FBRztBQUNMLFdBQ0ksTUFBQyxrREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE9BQ0ksTUFBQyxrREFBRCxRQUNJO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCLE1BREosRUFFSTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQyxXQUF0QjtBQUFrQyxVQUFJLEVBQUVtRixtQkFBTyxDQUFDLG1EQUFEO0FBQS9DLE1BRkosQ0FESixFQUtJLG9CQUNJLE1BQUMsa0RBQUQsT0FESixFQUVJLE1BQUMsd0RBQUQsT0FGSixDQUxKLENBREo7QUFZSDs7QUFwQjZCOztBQXVCbkJILHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZBQUFBQlFDQVlBQUFDT0VmS3RBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzNSVE5HTnpkQk9FRkdOamt4TVVVNVFrRkJOVVUwTlRNd056aEJRa05DUWlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM1JUTkdOemRCT1VGR05qa3hNVVU1UWtGQk5VVTBOVE13TnpoQlFrTkNRaUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pkRk0wWTNOMEUyUVVZMk9URXhSVGxDUVVFMVJUUTFNekEzT0VGQ1EwSkNJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPamRGTTBZM04wRTNRVVkyT1RFeFJUbENRVUUxUlRRMU16QTNPRUZDUTBKQ0lpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtCSldYbmdBQUVXaEpSRUZVZU5yc1hRbDBFOWU1dmlQWjJtekoyb1dGRFhqakVNem1GQklXc3hoTUNFbUFCa0plSGtuWmNrclljdEp6bWtCS1R3TUhzaldQMEZkSTJqeHdTaDcwSkpBU0RHMURta0lXVnRkQXNObHNBL0dXMkVheXRZNzJ2ZjgvUmtZWXlmRVlaTnpZbHpOSDhveG1kT2U3Ly9KOS83MGpxRkFvUlBwYTExdENyQU8xdGJWMzV3c1NFa2hEUXdPNWNQNDhDUkdLVUJSRjNHNDNDUVFDeE9OeEU3bE1Ubmc4SHJsNDhhSTRJVEZ4aEY2dkgxdFRVM09mM1diUE1oZ00vZUJ2aVVLaHNHczBtdWJrNU9UcXRQUzBxMWxaV1NWT3A3TWNYczF1bDR2NW5oRDhFNG1TNEZxSkJJN0I5eVlTUTBzTGVXTCtmQ0lRQ0Vnd0dMemplOG5KeWU0OGdQRnNDQ0tmenlkK240OVVWRlJNdjNUNTBwUG55ODhYR2szR1FkRStyOU5meDIwd3ZNMFA3MHRKa1RZTkhUcjA2NXpzbkk5SGpoeHhLQ0V4d1lmWDdURVdHTGN2Qkl0RWE2aXNxSGowMEtGREwxWFhWRStPUEM0U2lwd3FsYm8yVlp2YUtKUEptMlZTYVlDMjBSeVQwYVRVNlhYYVpyMCt3KzZ3UzZ4V2k3YWs1TlFDM0RLT1o1eWRObTNhbHRGanhueVVtSmo0NHdWUUNLNWtOSnI2Ny8xNDcxdW5UNTllZ0k2SFRjQVhHaVpQbm5Ra0l6T2oyT1AybEk3S0cxV2ZuajZBSkNXQlN3SWdmbkIzQUkwME5qUWk4RnFYMnozYVpETE8vdXJMcjJkWWFVdGFiVjN0NktMM2l6NHNQWDM2Wjg4ODgvUXZwU25TU3AvZjN6M2VGQ3VKM08wWWVPM3FOVkpaVlRYdC9hS2lvaFpEQytPcVNxV3FjZmFzV1Z2Rll2SC81K2JtNnBVcUpXbHBNWkR2NnV2Rk9wMWVMUVB6S3lzclQ4ek5IZXIzK254MGNsSlNjM1pPamdWaUlySGJiYVNtdWtaaU5wdWZLaTR1L21WalV5TzZPSkZJVW94UHpKdTNhdUtraVh2cjYrci84Mk1neGlVQWlCdzVjbVRoWC9idDIrNTJ1L2k0Zjl6WThYc1hMVjY0V2lLUkdMZ2NMdm5peXk5SDFOWFdMcml1MCtVM2ZOK1E2WERZWmNGZ1NJQURmUFRvVVVKeEtDKzR0MFhiWDF1WGxwWldxbEdyUHlvc0xDeUI4N2ZuRHN2ZGZhRDQ0RzgvLytjL25xZHBxMkxuQngvc01SaU5tZVBIalh1RHc2SHVqUVZldVhMMXJvQW5GQXJJMXQ5dlhiVDU3YzA3Y1JlWG14QmN0SERoMnZFVEpteTIyMnppRXlkT0xMbDgrZkxUMWRVMTkzdDluazRQS0plVFFBWmxETHFVbloyOTk5RkhIdG1oMXFqMXBmOHFYYmg5eDQ0L0FQaEorSm5IZi9yNHI5N2U4dmFiZUl1WTllTmhnVEVCcktpb2pBVUxDY2V1SDJwb2VmdjI3WnU1WnMyYWczNi9ENk83ZStQR2pVL201Zzc3MjU0OWU1WWRQbng0bmNWaUh0aisraEt4eEFMbjZ1Unl1Um5jMVdPMVdoT0IwcVRZYkxaVW1xWVZ3ZEN0WUVpbHNwYnAwNmYvYnQ2OGVXOWN1M1oxOU1hTm13NzVmRjRWaCtLUWRldCsvZXlxMWF2K1pMZmI3eGpBN095c3pnTllYbDUrRzNBQkNNeUJUc1dTRUJOM2FtdHFCeTFac3FUVWJER3JnZXY1WG5qaEZ6T0hEQmx5ZGR1MmJYOHFMeThyREgrYUF5NmMxcjkvK1lNUFB2anB5RkVqaitqMXpWVkpJcEZ4OE9EQnZvbVRKcEd5c2pKeTRjSUZyc3Zsa2dHZ09kQzN5V1huenMycXI2OGY1L1Y1MjN3ME15UHo3TXBWcTU0MW0weitkOTU5OXloa2FpWFFKVmZSanFKSkR6end3RmtIOE1QT09EU0VDNlpQN2R2dzRjTTZEMkJWVmRWdCsydzBEY0U0Ukg2b0Z4d09oM0M1WEdyRjhwV2ZuVDVUT2dQY05yRCtsVmNlQTZKcy81KzMzdG9IZ0dyQ2JnZ2Nycmlnb09DZDFOVFVZMUtwMUMrVlN3bTRJa0hyeWNqSUlCUHk4NW5CeFA1Z0lzakx5eVBOemMwRXJCRUorUU5mZkhGaytaa3paMzhHcER5aE5kTUxIYXVmZjM1UlptYm1sWmRlZXZFVVdKNDRPeXY3d29jZmZUZ1dCdEhWR1ZmRzd4R0pSS1E5cjd6dnZ2dHVEeVViTm15SWVwRVdZUEh0bXhOWXZ3QmlHcEpnNUZ2UnR3UndLU2s1Y09EQWd0MjdkNjNCODVZc1hyd0pRSFMrL3RwckI1d3Vwd1QzYVZPMU5jdWVXN2JvNFprek4vSDQvTnJXZmdlWmF6YzFOVEdkbDhsa1pNQ0FBVVNuMHpIOXdlTktwWkpZekdiaUF4S3VWQ2dhODBibEhSd3pac3hYVFkxTnd3MUdRMysvMzg4N2RlcmtrMnFWcW01aS9zUy9scFNVekRLWlRSb1lFTnZvMGFOUG9rcUJ6OFRjZkY0ZjhmbDlVUUZVcVZTM0d3dWJoSUNqNTNBNGdVSTRDTWFVYUp2VDZVSXFrckJyMSs2MWVGN0dvTXdLdU9uclczNjNaWGNnR0dDc0pIZG9idW1LbFN1bjVnNGQramVVZFFnR1cwMk9uOGZ6d0szUlVrKzgrT0tMMC9NbjVQODFmSHpuQnp2ZkFpNG92ai92SjEvajMvdUxpMStnYVZ1S1VDaUVRZWJGM2tBSzRyVTdxMnBZMHhnSStyQlptUmpSL2pzUUE4eTZ4NDhmZi9US2xhb1JvRWREWVBZWGk0cmUzeFFJK0puQmdnVHk5elZyWGxwZ3RkSTI1dzBkZTZjTkIwRW9FbG1YTGwzNk9NUzU5OHJLenYwYzkrL1l2bjFUWWVIMFR5cXJLbjB0TGMycE8zZnVYRGgzN3R4dGFJVlJYUmNNSkZtY0RESlIwdW52NXJBZGRYUXh0Vm9Gc1lZUGllTFdEY0ZEdFZGeXF1VG5OMlFaSm9DNUpyT1JzZjFodzRaL3VYejU4di9pOHdVMnZPbjIxdzV2WVhkQ2w4VjRpcS9oZlhnYy8yNXZzUjZQaDNDNDNPRHpxMWN2bTE3NDBDN2M1M0s3Uk9EQ0M2QWZURVk0ZWZMa3MyZzBBcmdIUHA5M3k0WUZEWVZTd2JndUcyZm9BcEZ1dlVtanljUzRVS1Nwbytwb2FXNGVDS0JOWVpLT3pVYlJObXRpS3dYSXFkcTJiZXNDclZickJEa0hidDdNaElRd0lIem1wdmhNOWg0NGNDQW1BNEtLQTJnTHFBc0puSi9OdUN1NklONWtNQUp3UEI5ZEx5c3JHK0tVa2d3Zk1mdzVoOE9oUFZWeXN0QmdiT0cyWmoyS1ZILzc3WWlTVTZkK2tqTjRjS25YNjcxbDhIQ2dCSUkwNWpXdVdoaEhCNzhrTXpPREtSbEZNbjBzSngwOGVIQ1MyK05Lb3RxTW0xRWk5bGRmZmZWSmtHNTZzOW5DSkJ0d1pmTDk5OTh4WU9EMWtwT1RtY0hBOTVocHc5a1FsQVVBS0liRWxOSUdGcm9ZZ2grT24yaDlHbzJHS1dVWmpVWWNCUGY2RGVzWExGNjArTngxWFZNYWRZTTJCRU5CeW1RMlQ4KzdQNi9VRWNFTGtWbWdkVU9ZWVIyTHV5emw4RVpzTnBxSmgxeTQ2UkFEb0lpY0xpMmQxTjVpLy91cHAvNDRidHpZaXhhTEJkeGF5RmdQdWp4SXNsdXNJUHpxanlnRWhGMjR2WlpGYTBlaWpxRGpNYUJOREpnTVc0QVlsNXJhcjJYcHMwczN2ZmJhcS84WGVkNDMzM3lUWDFkVHk0Q09EUXNWS1dEaG9pUlJsM0RnZEJWQXZGR01HMTZ2aDZFZEpoaDUzZlhycEs2dWZ2Qk42SUpFbWlLelBEWnIxdGJyY0l5MjBnUlVCVmlKZ2NuWVlXRENNWTNONklldE1Sd0dFSFMwU01hZHdUT1FqanoyMktOL3pzek0raGI3RVc1QWR6SytiMmhJTkVFSWFvSSt1UUJzSHNUQXJsYm1PWGVTL1hEMHNld0VCSmxVVmxhUlM1Y3VDMEJ5cFVWK3BtQnF3VjZJWVEyd255bEp1VDJ0TnhtUDRpZGVGeTBMdjZmK3UzcHdmNXR6YXNIVUhaR2ZnUUZNcjZpb1NLK29yR1NVRmVocHhwcnZDWUN0d1pjQ1YreFArdmZYRXFsTW1nU0JQaVZjWXVkeXVLSFpzMmZ2VGdMM0VFQlN3STdHdTJHZjBDb3gyV0RBTGlpWXNqYzVXZXhvdFVJSzNOc2hEQWFDNmVucGFRUzNjSUgzcmhkVTIxc0kvbzBaRWwvYkh3TVpCa2tsazV3L2Z5RVJia0FVZG1Dd3pxdlEwNU40UXhqenVudmFnTW1zUWtGOVRuWk9TVm41dWNMd3dHcjdhM21QUERLVEVRWG8rcEZWN0hCb3duTTdZNVV4QVN3N1YzWkxBUVl6MmQ4Ly9YU1R3ZEF5aUlvaWhvR0RoVURFUzhFQytlSGo4RjZ5WmN1V1hVQlF1ZmRtem95QzVNSUpRdVlkU04yZ01vd3ErV1QvcjgrZU9mTU1nTWVKUXRKSWNsS3llYzZjT1d1QkdybEN3WnNnRGhreXBQUEZoUDM3aXlNeUlZVVpUckJxNWVycUZrT3p0dU11YzBoa0V1a3BqVTIvRXJpSmdhS2lIV2t5dVV6bjk5OHNQc3lkKzNqbkxURFNySkVpZUR6ZUpCZ3hmdnZPZExiVFBhbDExQzhFRis0M0JQY3I1L0g0T29yeWRjMkYvWDdmTFplMTBiUVVhRUlTK2RFM2ltQmwzRXBiWmNGZ29CME9MQUEwZ2R5S3RFYmdlakt2enlzZ2hQcVJ3MGRCOGdnaXAxV205dXZYUnJoWkF4aDVJc1pKSzAwclVlcjgyQUc4V1hXeWFEeWdsN3NNWUNSbnc3UU8ybEVSSHFIZTBHaWJUWWx6MG9FZm1GK09DV0JqWTJQYmU2eVNnQlJUa1Y3VVdwcWJWU0Q1aUtkZDJhM1RBR0paUHR5UTFRY0NRV1Z2QXREbjh5dWxLU25FQStLaGEwbkVmRE9KOEoxOG5NanBWUllJMmwxbE1CcHZWSGhDN0FFY1AzNUMyM3VVY0o5Ly9zOSt2UWxBNElMS3NXTWZwSUxCVUtnalNkY0pIa2d4bWNocXNmWXFGN2JaYlRLSHd5RUFNdTFDUHNnYVFKZkwzU2JqWEM0bnoyNjN5M3NUZ0E2N1EwYlRkRkp5Y3JJTDRqOTdBT0VDTjRvRUhPSjJ1UVVBb0tRM0FRaXFTMmcwbUNRVXhURUUvRjJ3UUp6MENldGdtODBtY1RxZHZRakExdUpKVTFPam5LSklUWGlxZ0IyUnZsRk1TQVJDN2ZmN1pYQVJVVyt5UUgvQWh5REtFMEZFaExwQ1k4S1R6OGpHSWFYTGZINGZwN2ZJT0VZUHc3L201aFlWVG54NUlxWkFPdzBnTGlRS3l6alFoVW9VMlBlaVBQWEVFL1BJbkRsenlLaThVY3lTMzBHREJrV0VtUlptb2RHeFk4Zkl4M3MvSmtlUEhydXIzMjIxV3RTMGpTWmVUeGNBSEpvN3RFMkY2UFI2UlhlQ2xwT2RRMTVaL3h2eTBJeUhvaTdvQ1RjOGhsdHViaTZaT1hNbXljekl1cXY5QVA0ckh6RmlKTTZqc0FjUUo2cXg0YWdIZzBGTmQ0RzM3TGxsWk5PbWpSMENGNjE5OXRsbjhaQnovVFFhTlltMWxxWkRBTU1WYVZ4OUFPN2NMU3BrOSs1ZDVPbG5udTdTdWYrNzVmZHhxTWpRR21RaENZa0pNYXRRTVFFMDNpaW80c3dWQkZOMXZNRTdmT1F3bVRadGF1enFDTVM3Q3hjdU1wUDM0WVp4RVJkaFhyeDRpVno3OXRwZDd4TSttd0wzM3Jhb2lTV1J0dDh3WXg4VFRPTUozcnQvZUNjbWVLV2xwOG5ibXplVGZmcys2VEJteHFPQmVGQll6R1llUlZGZTFnRGFIUTVtYmhYOG43SmFyWEVqMFpobFY2eFlFZlhZbTIvK2xxejcxYm9mdkVZOHJJOWhJamFiMkdReUN3UkNnVGZXNUhzSExtd2tuTlpWcVVLbjB5V0xGNERyTjZ5L0kvRGlMT2ZFb01na2tFanBXSXZyWXhJNzVIOVlpUVphMmJaY0l4NFpGeWxJTkxlOTErQXhzM05lcjlEdkQwajVBZ0dEQnlzTDFPdDBqQTYyV0t3NG5TbUtod3FaUDM5KzFQMHZyMTNiSXhSSklPRG5OalEyeUZDVitHUG80WmdBVHBreWhmREFBaXNySzJWd29iZ3NiQmszYnV4dCsrcnE2dTY2b3VpcW5BdUMrc3JLeWxUbDUrZGpSWW9kZ0ZLWnRIV0ZFd2twQXNIQVhaZHhtRHh3UVdiN2R2TEV5UjZsaThHTjFYSzVJcVlhNGNSbTRmaThoSjlBRm9xTENwRXJvcXZENHlkTzlDZ0FMV2FMaG5sK2hLMEw0MHBTUEVtdmk0OE9ucGlmL3g5Um1RRWlyY0JITzJMSnVkZzB4bUFnVHFFSUxxRHZWWk5KN1J2K2JrT3p2cG41ZlFkV0xoek91bmE3UTkyZEhZNHNWL1dFQm1wRUZZbEhwd0YwZXp5TURqYVpUSEdaRDQ0VjY4YU1HZE9qQUlSUUpxTnBHeWZXR2hsT1J5Nk04eUoydXkwdXMzRmZmZkZWMVAyb2llT2xiYnZTWEM2bkZNS1lFSlVaS3dCVmFqVkpTVW5oZVR6ZXVLZ1ExSy9JK2FLMXp3Ly9vOGVBNkFJNUo1RkloR3ExbWlXQUtpVStlQ2ZFaDV6ajFiazllL2JHaklNblRoMG5yNy94ZW9jeWNQTGtTZkhuZ1I1dkVvL1BrNm5VS25ZQXBxV2xvd1ZLd2ZmRjhlb2M2dDNMbHkvSEdFQVZlZm5sdFFRZjc3OTQ2VUxiVmxOYnpleDc3NzAva2hrUFB4eDNQZUx6ZWZsQStPWHA2ZW5zYUl6RmFpRk5UZGZsQUtBd25sMmMrOU41ak10MmxIMmpGUnl3cGFlbGRZdWMwd0VYeGdlS1dGbWdCN1NmMldSUytBTStLcDdUbVJnTFoweC9PS1lsOWhRdTZIWTUyUUZvTnB2eFVYdFplQ1RpMlJERTRjTkdNRFhBYUQ4MUVLdjFTMDN0RmdCQmpjbE5aZ3M3RjhabmN5MFdxNlk3UnhwakltNVlhQ2lZV2tDMFdpM3puSEM0Z1NzeGN5S1hMbDhpKy9jVng2MFMzYjdSTksxaExlV3dpQWdnM3BORmxUai8wZEVjU0hjM0FFL0ZpL0dqWnB3Ty9CNTFzSnIwdGRiVnFvQUhLd0R4dHcrOFBwK3FEejZtSnFob25kNWdBZUNBZ1FPUVJDcjc0R01BbEVMQzRyRUNFT1FMMStQMXlQdmdZeEtxVEN3V0o3R3J4cmc5UXJ2Tkx1dURqd0V3R1JKSkNpc0FtNjQzaWUxMmUwb2ZmSXdMaXhvYUd1U3NBSFE1bkhJOHNROCswTU4rTDFJWmRnQldWMWVuZ0pEbTlwWlZxUjNwWVd3MU5UVUtWZ0RhN0haRmtGbVZTdlVaSWVKQjIxU3NBT3lqTU8yVHFsdkpMb2swTmZXUjZJZ0dxb3lkQldvMDZuNTlzTjFzWXJHa0h5c0FhWnROMndkYkJCNDBIUldQbU5VWXM4bU00ZzhWZE45Lzl3REoyR1F5UlgzZWkrcjc3ekR1clAxYmdBRUEwYlBpR1FqWkYyWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZSh7IHJlcSwgcmVzIH06IERvY3VtZW50Q29udGV4dCkge31cblxuZnVuY3Rpb24gZGVkdXBlKGJ1bmRsZXM6IGFueVtdKTogYW55W10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBrZXB0ID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuanMkLywgJy5tb2R1bGUuanMnKVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG4gIHN0YXRpYyBib2R5VGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWJvZHktdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGh0bWxQcm9wc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWh0bWwtcHJvcHMtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VycyA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZW5oYW5jZS1hcHAtc2VydmVyISdcbiAgICAgICAgKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KGN0eCkpXG4gICAgICA6IFtdXG5cbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVuaGFuY2VyIG9mIGVuaGFuY2Vycykge1xuICAgICAgICBBcHAgPSBlbmhhbmNlcihBcHApXG4gICAgICB9XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgLi4uZmx1c2goKSxcbiAgICAgIC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgICAgICA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyISdcbiAgICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgICAgOiBbXSksXG4gICAgXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIF9kb2N1bWVudFByb3BzOiBwcm9wcyxcbiAgICAgICAgICAvLyBJbiBkZXYgd2UgaW52YWxpZGF0ZSB0aGUgY2FjaGUgYnkgYXBwZW5kaW5nIGEgdGltZXN0YW1wIHRvIHRoZSByZXNvdXJjZSBVUkwuXG4gICAgICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvNTg2MFxuICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJz90cz0nICsgRGF0ZS5ub3coKSA6ICcnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RG9jdW1lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sIGV4dGVuZHMgQ29tcG9uZW50PFxuICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWxQcm9wcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sXG4gICAgICAgIHsuLi5odG1sUHJvcHN9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICBhbXA9e2luQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIE9yaWdpblByb3BzICZcbiAgICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkRWxlbWVudD4sXG4gICAgICBIVE1MSGVhZEVsZW1lbnRcbiAgICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIGdldENzc0xpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPyBmaWxlcy5maWx0ZXIoKGYpID0+IC9cXC5jc3MkLy50ZXN0KGYpKSA6IFtdXG5cbiAgICBjb25zdCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cywgYXNzZXRQcmVmaXggfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgZGVkdXBlKGR5bmFtaWNJbXBvcnRzKVxuICAgICAgICAubWFwKChidW5kbGU6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG5cbiAgZ2V0UHJlbG9hZE1haW5MaW5rcygpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPVxuICAgICAgZmlsZXMgJiYgZmlsZXMubGVuZ3RoXG4gICAgICAgID8gZmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuXG4gICAgICAgICAgICAvLyB0aGUgZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZVxuICAgICAgICAgICAgLy8gbW9kZXJuIHZhcmlhbnRzIG9ubHkuXG4gICAgICAgICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKVxuICAgICAgICAgIH0pXG4gICAgICAgIDogW11cblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCB7IHBhZ2UsIGJ1aWxkSWQgfSA9IF9fTkVYVF9EQVRBX19cblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnICYmICFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmdldENzc0xpbmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gQU1QX1JFTkRFUl9UQVJHRVRcbiAgICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCwgZmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSAvXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEvXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKSB8fCBmaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoKSB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMsIGxvd1ByaW9yaXR5RmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXM/LmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gbG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApXG5cbiAgICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBmaWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgICAgICA/IHsgdHlwZTogJ21vZHVsZScgfVxuICAgICAgICAgIDogeyBub01vZHVsZTogdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIHBvbHlmaWxsRmlsZXMgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gcG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhL1xcLm1vZHVsZVxcLmpzJC8udGVzdChwb2x5ZmlsbClcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IERvY3VtZW50UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhdGljTWFya3VwLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBkZXZGaWxlcyxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBib2R5VGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGNvbnN0IHsgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZGaWxlcyA9IFtcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsXG4gICAgICAgIENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXZGaWxlc1xuICAgICAgICAgICAgPyBkZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPXtwYWdlfVxuICAgICAgICAgIGtleT17YCR7cGFnZX0tbW9kZXJuYH1cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YClcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICBjb25zdCBhcHBTY3JpcHQgPSBbXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgICtcbiAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAga2V5PVwiX2FwcFwiXG4gICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICB7Li4uKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgPyB7IG5vTW9kdWxlOiB0cnVlIH0gOiB7fSl9XG4gICAgICAvPixcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBkYXRhLW5leHQtcGFnZT1cIi9fYXBwXCJcbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLm1vZHVsZS5qc2AgK1xuICAgICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXk9XCJfYXBwLW1vZGVyblwiXG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBkZXZGaWxlc1xuICAgICAgICAgID8gZGV2RmlsZXMubWFwKFxuICAgICAgICAgICAgICAoZmlsZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICFmaWxlLm1hdGNoKC9cXC5qc1xcLm1hcC8pICYmIChcbiAgICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7c3RhdGljTWFya3VwIHx8IGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAhZGlzYWJsZVJ1bnRpbWVKUyA/IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYXBwU2NyaXB0fVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgcGFnZSAhPT0gJy9fZXJyb3InICYmIHBhZ2VTY3JpcHR9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTIHx8IHN0YXRpY01hcmt1cCA/IG51bGwgOiB0aGlzLmdldER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cygpfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihib2R5VGFncyB8fCBbXSkpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuXG5mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlOiBzdHJpbmcsIGJ1aWxkSWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzdGFydGluZ1VybCA9IHBhZ2UgPT09ICcvJyA/ICcvaW5kZXgnIDogcGFnZVxuICByZXR1cm4gYnVpbGRJZCA/IGAke3N0YXJ0aW5nVXJsfS4ke2J1aWxkSWR9LmpzYCA6IGAke3N0YXJ0aW5nVXJsfS5qc2Bcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5cbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgICAgcmV0dXJuIHsgLi4uaW5pdGlhbFByb3BzIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXtyZXF1aXJlKFwiLi4vaW1hZ2VzL2Zhdmljb24ucG5nXCIpfT48L2xpbms+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvSHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=