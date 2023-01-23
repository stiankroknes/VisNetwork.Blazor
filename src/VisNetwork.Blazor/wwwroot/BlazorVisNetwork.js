/******/ var __webpack_modules__ = ({

/***/ "./node_modules/vis-data/peer/umd/vis-data.js":
/*!****************************************************!*\
  !*** ./node_modules/vis-data/peer/umd/vis-data.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 7.1.4
 * @date    2022-03-15T15:23:59.245Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

  var defineProperty$e = {exports: {}};

  var check = function (it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$M = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var fails$r = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$q = fails$r;
  var functionBindNative = !fails$q(function () {
    var test = function () {
      /* empty */
    }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;
  var FunctionPrototype$3 = Function.prototype;
  var apply$6 = FunctionPrototype$3.apply;
  var call$c = FunctionPrototype$3.call; // eslint-disable-next-line es/no-reflect -- safe

  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$c.bind(apply$6) : function () {
    return call$c.apply(apply$6, arguments);
  });

  var NATIVE_BIND$3 = functionBindNative;
  var FunctionPrototype$2 = Function.prototype;
  var bind$d = FunctionPrototype$2.bind;
  var call$b = FunctionPrototype$2.call;
  var uncurryThis$t = NATIVE_BIND$3 && bind$d.bind(call$b, call$b);
  var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
    return fn && uncurryThis$t(fn);
  } : function (fn) {
    return fn && function () {
      return call$b.apply(fn, arguments);
    };
  };

  // https://tc39.es/ecma262/#sec-iscallable

  var isCallable$h = function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$p = fails$r; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$p(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var NATIVE_BIND$2 = functionBindNative;
  var call$a = Function.prototype.call;
  var functionCall = NATIVE_BIND$2 ? call$a.bind(call$a) : function () {
    return call$a.apply(call$a, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$2.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$5(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;

  var createPropertyDescriptor$5 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var uncurryThis$s = functionUncurryThis;
  var toString$9 = uncurryThis$s({}.toString);
  var stringSlice$1 = uncurryThis$s(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice$1(toString$9(it), 8, -1);
  };

  var global$L = global$M;
  var uncurryThis$r = functionUncurryThis;
  var fails$o = fails$r;
  var classof$f = classofRaw$1;
  var Object$9 = global$L.Object;
  var split = uncurryThis$r(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$o(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$9('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$f(it) == 'String' ? split(it, '') : Object$9(it);
  } : Object$9;

  var global$K = global$M;
  var TypeError$j = global$K.TypeError; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$5 = function (it) {
    if (it == undefined) throw TypeError$j("Can't call method on " + it);
    return it;
  };

  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var toIndexedObject$b = function (it) {
    return IndexedObject$3(requireObjectCoercible$4(it));
  };

  var isCallable$g = isCallable$h;

  var isObject$f = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$g(it);
  };

  var path$q = {};

  var path$p = path$q;
  var global$J = global$M;
  var isCallable$f = isCallable$h;

  var aFunction = function (variable) {
    return isCallable$f(variable) ? variable : undefined;
  };

  var getBuiltIn$9 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$p[namespace]) || aFunction(global$J[namespace]) : path$p[namespace] && path$p[namespace][method] || global$J[namespace] && global$J[namespace][method];
  };

  var uncurryThis$q = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$q({}.isPrototypeOf);

  var getBuiltIn$8 = getBuiltIn$9;
  var engineUserAgent = getBuiltIn$8('navigator', 'userAgent') || '';

  var global$I = global$M;
  var userAgent$3 = engineUserAgent;
  var process = global$I.process;
  var Deno = global$I.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us

    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0


  if (!version && userAgent$3) {
    match = userAgent$3.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$3.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$2 = engineV8Version;
  var fails$n = fails$r; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$n(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var global$H = global$M;
  var getBuiltIn$7 = getBuiltIn$9;
  var isCallable$e = isCallable$h;
  var isPrototypeOf$i = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var Object$8 = global$H.Object;
  var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$7('Symbol');
    return isCallable$e($Symbol) && isPrototypeOf$i($Symbol.prototype, Object$8(it));
  };

  var global$G = global$M;
  var String$4 = global$G.String;

  var tryToString$4 = function (argument) {
    try {
      return String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var global$F = global$M;
  var isCallable$d = isCallable$h;
  var tryToString$3 = tryToString$4;
  var TypeError$i = global$F.TypeError; // `Assert: IsCallable(argument) is true`

  var aCallable$7 = function (argument) {
    if (isCallable$d(argument)) return argument;
    throw TypeError$i(tryToString$3(argument) + ' is not a function');
  };

  var aCallable$6 = aCallable$7; // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod

  var getMethod$3 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$6(func);
  };

  var global$E = global$M;
  var call$9 = functionCall;
  var isCallable$c = isCallable$h;
  var isObject$e = isObject$f;
  var TypeError$h = global$E.TypeError; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$e(val = call$9(fn, input))) return val;
    if (isCallable$c(fn = input.valueOf) && !isObject$e(val = call$9(fn, input))) return val;
    if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$e(val = call$9(fn, input))) return val;
    throw TypeError$h("Can't convert object to primitive value");
  };

  var shared$4 = {exports: {}};

  var global$D = global$M; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var defineProperty$d = Object.defineProperty;

  var setGlobal$1 = function (key, value) {
    try {
      defineProperty$d(global$D, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$D[key] = value;
    }

    return value;
  };

  var global$C = global$M;
  var setGlobal = setGlobal$1;
  var SHARED = '__core-js_shared__';
  var store$3 = global$C[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store$3;

  var store$2 = sharedStore;
  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.21.1',
    mode: 'pure' ,
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var global$B = global$M;
  var requireObjectCoercible$3 = requireObjectCoercible$5;
  var Object$7 = global$B.Object; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$e = function (argument) {
    return Object$7(requireObjectCoercible$3(argument));
  };

  var uncurryThis$p = functionUncurryThis;
  var toObject$d = toObject$e;
  var hasOwnProperty = uncurryThis$p({}.hasOwnProperty); // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty

  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$d(it), key);
  };

  var uncurryThis$o = functionUncurryThis;
  var id$1 = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$o(1.0.toString);

  var uid$4 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id$1 + postfix, 36);
  };

  var global$A = global$M;
  var shared$3 = shared$4.exports;
  var hasOwn$f = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore$1 = shared$3('wks');
  var Symbol$2 = global$A.Symbol;
  var symbolFor = Symbol$2 && Symbol$2['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$3;

  var wellKnownSymbol$j = function (name) {
    if (!hasOwn$f(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      var description = 'Symbol.' + name;

      if (NATIVE_SYMBOL$1 && hasOwn$f(Symbol$2, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$2[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore$1[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var global$z = global$M;
  var call$8 = functionCall;
  var isObject$d = isObject$f;
  var isSymbol$2 = isSymbol$3;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$i = wellKnownSymbol$j;
  var TypeError$g = global$z.TypeError;
  var TO_PRIMITIVE$1 = wellKnownSymbol$i('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$1 = function (input, pref) {
    if (!isObject$d(input) || isSymbol$2(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE$1);
    var result;

    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$8(exoticToPrim, input, pref);
      if (!isObject$d(result) || isSymbol$2(result)) return result;
      throw TypeError$g("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol$1 = isSymbol$3; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$4 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol$1(key) ? key : key + '';
  };

  var global$y = global$M;
  var isObject$c = isObject$f;
  var document$1 = global$y.document; // typeof document.createElement is 'object' in old IE

  var EXISTS$1 = isObject$c(document$1) && isObject$c(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$h = descriptors;
  var fails$m = fails$r;
  var createElement = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$h && !fails$m(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var DESCRIPTORS$g = descriptors;
  var call$7 = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;
  var toIndexedObject$a = toIndexedObject$b;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$e = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$a(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {
      /* empty */
    }
    if (hasOwn$e(O, P)) return createPropertyDescriptor$4(!call$7(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var fails$l = fails$r;
  var isCallable$b = isCallable$h;
  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$b(detection) ? fails$l(detection) : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';
  var isForced_1 = isForced$1;

  var uncurryThis$n = functionUncurryThis;
  var aCallable$5 = aCallable$7;
  var NATIVE_BIND$1 = functionBindNative;
  var bind$c = uncurryThis$n(uncurryThis$n.bind); // optional / simple context binding

  var functionBindContext = function (fn, that) {
    aCallable$5(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$c(fn, that) : function
      /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$f = descriptors;
  var fails$k = fails$r; // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334

  var v8PrototypeDefineBug = DESCRIPTORS$f && fails$k(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {
      /* empty */
    }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var global$x = global$M;
  var isObject$b = isObject$f;
  var String$3 = global$x.String;
  var TypeError$f = global$x.TypeError; // `Assert: Type(argument) is Object`

  var anObject$b = function (argument) {
    if (isObject$b(argument)) return argument;
    throw TypeError$f(String$3(argument) + ' is not an object');
  };

  var global$w = global$M;
  var DESCRIPTORS$e = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$a = anObject$b;
  var toPropertyKey$2 = toPropertyKey$4;
  var TypeError$e = global$w.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable'; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$a(O);
    P = toPropertyKey$2(P);
    anObject$a(Attributes);

    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);

      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }

    return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$a(O);
    P = toPropertyKey$2(P);
    anObject$a(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$e('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$d = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;
  var createNonEnumerableProperty$6 = DESCRIPTORS$d ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$v = global$M;
  var apply$5 = functionApply;
  var uncurryThis$m = functionUncurryThis;
  var isCallable$a = isCallable$h;
  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
  var isForced = isForced_1;
  var path$o = path$q;
  var bind$b = functionBindContext;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
  var hasOwn$d = hasOwnProperty_1;

  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof Wrapper) {
        switch (arguments.length) {
          case 0:
            return new NativeConstructor();

          case 1:
            return new NativeConstructor(a);

          case 2:
            return new NativeConstructor(a, b);
        }

        return new NativeConstructor(a, b, c);
      }

      return apply$5(NativeConstructor, this, arguments);
    };

    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
  };
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */


  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;
    var nativeSource = GLOBAL ? global$v : STATIC ? global$v[TARGET] : (global$v[TARGET] || {}).prototype;
    var target = GLOBAL ? path$o : path$o[TARGET] || createNonEnumerableProperty$5(path$o, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;
    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

      USE_NATIVE = !FORCED && nativeSource && hasOwn$d(nativeSource, key);
      targetProperty = target[key];
      if (USE_NATIVE) if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$4(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key]; // export native or implementation

      sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue; // bind timers to global for call from export context

      if (options.bind && USE_NATIVE) resultProperty = bind$b(sourceProperty, global$v); // wrap global constructors for prevent changs in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
      else if (PROTO && isCallable$a(sourceProperty)) resultProperty = uncurryThis$m(sourceProperty); // default case
      else resultProperty = sourceProperty; // add a flag to not completely full polyfills

      if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$5(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty$5(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

        if (!hasOwn$d(path$o, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty$5(path$o, VIRTUAL_PROTOTYPE, {});
        } // export virtual prototype methods


        createNonEnumerableProperty$5(path$o[VIRTUAL_PROTOTYPE], key, sourceProperty); // export real prototype methods

        if (options.real && targetPrototype && !targetPrototype[key]) {
          createNonEnumerableProperty$5(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $$C = _export;
  var DESCRIPTORS$c = descriptors;
  var defineProperty$c = objectDefineProperty.f; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe

  $$C({
    target: 'Object',
    stat: true,
    forced: Object.defineProperty !== defineProperty$c,
    sham: !DESCRIPTORS$c
  }, {
    defineProperty: defineProperty$c
  });

  var path$n = path$q;
  var Object$6 = path$n.Object;

  var defineProperty$b = defineProperty$e.exports = function defineProperty(it, key, desc) {
    return Object$6.defineProperty(it, key, desc);
  };

  if (Object$6.defineProperty.sham) defineProperty$b.sham = true;

  var parent$V = defineProperty$e.exports;
  var defineProperty$a = parent$V;

  var parent$U = defineProperty$a;
  var defineProperty$9 = parent$U;

  var parent$T = defineProperty$9;
  var defineProperty$8 = parent$T;

  var defineProperty$7 = defineProperty$8;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      defineProperty$7(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);

    defineProperty$7(Constructor, "prototype", {
      writable: false
    });

    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      defineProperty$7(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var uncurryThis$l = functionUncurryThis;
  var arraySlice$5 = uncurryThis$l([].slice);

  var global$u = global$M;
  var uncurryThis$k = functionUncurryThis;
  var aCallable$4 = aCallable$7;
  var isObject$a = isObject$f;
  var hasOwn$c = hasOwnProperty_1;
  var arraySlice$4 = arraySlice$5;
  var NATIVE_BIND = functionBindNative;
  var Function$2 = global$u.Function;
  var concat$6 = uncurryThis$k([].concat);
  var join = uncurryThis$k([].join);
  var factories = {};

  var construct$4 = function (C, argsLength, args) {
    if (!hasOwn$c(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';

      factories[argsLength] = Function$2('C,a', 'return new C(' + join(list, ',') + ')');
    }

    return factories[argsLength](C, args);
  }; // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind


  var functionBind = NATIVE_BIND ? Function$2.bind : function bind(that
  /* , ...args */
  ) {
    var F = aCallable$4(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$4(arguments, 1);

    var boundFunction = function
      /* args... */
    bound() {
      var args = concat$6(partArgs, arraySlice$4(arguments));
      return this instanceof boundFunction ? construct$4(F, args.length, args) : F.apply(that, args);
    };

    if (isObject$a(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  var $$B = _export;
  var bind$a = functionBind; // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind

  $$B({
    target: 'Function',
    proto: true,
    forced: Function.bind !== bind$a
  }, {
    bind: bind$a
  });

  var path$m = path$q;

  var entryVirtual$k = function (CONSTRUCTOR) {
    return path$m[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual$j = entryVirtual$k;
  var bind$9 = entryVirtual$j('Function').bind;

  var isPrototypeOf$h = objectIsPrototypeOf;
  var method$e = bind$9;
  var FunctionPrototype$1 = Function.prototype;

  var bind$8 = function (it) {
    var own = it.bind;
    return it === FunctionPrototype$1 || isPrototypeOf$h(FunctionPrototype$1, it) && own === FunctionPrototype$1.bind ? method$e : own;
  };

  var parent$S = bind$8;
  var bind$7 = parent$S;

  var bind$6 = bind$7;

  var ceil = Math.ceil;
  var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity

  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument; // eslint-disable-next-line no-self-compare -- safe

    return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
  var min$2 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$1 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike

  var lengthOfArrayLike$d = function (obj) {
    return toLength(obj.length);
  };

  var global$t = global$M;
  var aCallable$3 = aCallable$7;
  var toObject$c = toObject$e;
  var IndexedObject$2 = indexedObject;
  var lengthOfArrayLike$c = lengthOfArrayLike$d;
  var TypeError$d = global$t.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod$5 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable$3(callbackfn);
      var O = toObject$c(that);
      var self = IndexedObject$2(O);
      var length = lengthOfArrayLike$c(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError$d('Reduce of empty array with no initial value');
        }
      }

      for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }

      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$5(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$5(true)
  };

  var fails$j = fails$r;

  var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$j(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };

  var classof$e = classofRaw$1;
  var global$s = global$M;
  var engineIsNode = classof$e(global$s.process) == 'process';

  var $$A = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE = engineIsNode;
  var STRICT_METHOD$4 = arrayMethodIsStrict$4('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  $$A({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$4 || CHROME_BUG
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$i = entryVirtual$k;
  var reduce$3 = entryVirtual$i('Array').reduce;

  var isPrototypeOf$g = objectIsPrototypeOf;
  var method$d = reduce$3;
  var ArrayPrototype$e = Array.prototype;

  var reduce$2 = function (it) {
    var own = it.reduce;
    return it === ArrayPrototype$e || isPrototypeOf$g(ArrayPrototype$e, it) && own === ArrayPrototype$e.reduce ? method$d : own;
  };

  var parent$R = reduce$2;
  var reduce$1 = parent$R;

  var reduce = reduce$1;

  var classof$d = classofRaw$1; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe

  var isArray$d = Array.isArray || function isArray(argument) {
    return classof$d(argument) == 'Array';
  };

  var wellKnownSymbol$h = wellKnownSymbol$j;
  var TO_STRING_TAG$3 = wellKnownSymbol$h('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$3] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';

  var global$r = global$M;
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$9 = isCallable$h;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$g = wellKnownSymbol$j;
  var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
  var Object$5 = global$r.Object; // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$c = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object$5(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$j = functionUncurryThis;
  var isCallable$8 = isCallable$h;
  var store$1 = sharedStore;
  var functionToString = uncurryThis$j(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (!isCallable$8(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var uncurryThis$i = functionUncurryThis;
  var fails$i = fails$r;
  var isCallable$7 = isCallable$h;
  var classof$b = classof$c;
  var getBuiltIn$6 = getBuiltIn$9;
  var inspectSource$1 = inspectSource$2;

  var noop = function () {
    /* empty */
  };

  var empty = [];
  var construct$3 = getBuiltIn$6('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$i(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$7(argument)) return false;

    try {
      construct$3(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$7(argument)) return false;

    switch (classof$b(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }

    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor

  var isConstructor$4 = !construct$3 || fails$i(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var global$q = global$M;
  var isArray$c = isArray$d;
  var isConstructor$3 = isConstructor$4;
  var isObject$9 = isObject$f;
  var wellKnownSymbol$f = wellKnownSymbol$j;
  var SPECIES$3 = wellKnownSymbol$f('species');
  var Array$5 = global$q.Array; // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;

    if (isArray$c(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (isConstructor$3(C) && (C === Array$5 || isArray$c(C.prototype))) C = undefined;else if (isObject$9(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array$5 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$4 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$5 = functionBindContext;
  var uncurryThis$h = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$b = toObject$e;
  var lengthOfArrayLike$b = lengthOfArrayLike$d;
  var arraySpeciesCreate$3 = arraySpeciesCreate$4;
  var push$5 = uncurryThis$h([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$4 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$b($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$5(callbackfn, that);
      var length = lengthOfArrayLike$b(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$3;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push$5(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push$5(target, value);
            // filterReject
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$4(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$4(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$4(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$4(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$4(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$4(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$4(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$4(7)
  };

  var fails$h = fails$r;
  var wellKnownSymbol$e = wellKnownSymbol$j;
  var V8_VERSION$1 = engineV8Version;
  var SPECIES$2 = wellKnownSymbol$e('species');

  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$h(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$2] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$z = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$z({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$h = entryVirtual$k;
  var filter$3 = entryVirtual$h('Array').filter;

  var isPrototypeOf$f = objectIsPrototypeOf;
  var method$c = filter$3;
  var ArrayPrototype$d = Array.prototype;

  var filter$2 = function (it) {
    var own = it.filter;
    return it === ArrayPrototype$d || isPrototypeOf$f(ArrayPrototype$d, it) && own === ArrayPrototype$d.filter ? method$c : own;
  };

  var parent$Q = filter$2;
  var filter$1 = parent$Q;

  var filter = filter$1;

  var $$y = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$y({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$g = entryVirtual$k;
  var map$6 = entryVirtual$g('Array').map;

  var isPrototypeOf$e = objectIsPrototypeOf;
  var method$b = map$6;
  var ArrayPrototype$c = Array.prototype;

  var map$5 = function (it) {
    var own = it.map;
    return it === ArrayPrototype$c || isPrototypeOf$e(ArrayPrototype$c, it) && own === ArrayPrototype$c.map ? method$b : own;
  };

  var parent$P = map$5;
  var map$4 = parent$P;

  var map$3 = map$4;

  var global$p = global$M;
  var isArray$b = isArray$d;
  var lengthOfArrayLike$a = lengthOfArrayLike$d;
  var bind$4 = functionBindContext;
  var TypeError$c = global$p.TypeError; // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

  var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind$4(mapper, thisArg) : false;
    var element, elementLen;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray$b(element)) {
          elementLen = lengthOfArrayLike$a(element);
          targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$c('Exceed the acceptable array length');
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray$1;

  var $$x = _export;
  var flattenIntoArray = flattenIntoArray_1;
  var aCallable$2 = aCallable$7;
  var toObject$a = toObject$e;
  var lengthOfArrayLike$9 = lengthOfArrayLike$d;
  var arraySpeciesCreate$2 = arraySpeciesCreate$4; // `Array.prototype.flatMap` method
  // https://tc39.es/ecma262/#sec-array.prototype.flatmap

  $$x({
    target: 'Array',
    proto: true
  }, {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = toObject$a(this);
      var sourceLen = lengthOfArrayLike$9(O);
      var A;
      aCallable$2(callbackfn);
      A = arraySpeciesCreate$2(O, 0);
      A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  });

  var entryVirtual$f = entryVirtual$k;
  var flatMap$3 = entryVirtual$f('Array').flatMap;

  var isPrototypeOf$d = objectIsPrototypeOf;
  var method$a = flatMap$3;
  var ArrayPrototype$b = Array.prototype;

  var flatMap$2 = function (it) {
    var own = it.flatMap;
    return it === ArrayPrototype$b || isPrototypeOf$d(ArrayPrototype$b, it) && own === ArrayPrototype$b.flatMap ? method$a : own;
  };

  var parent$O = flatMap$2;
  var flatMap$1 = parent$O;

  var flatMap = flatMap$1;

  /**
   * Create new data pipe.
   *
   * @param from - The source data set or data view.
   * @remarks
   * Example usage:
   * ```typescript
   * interface AppItem {
   *   whoami: string;
   *   appData: unknown;
   *   visData: VisItem;
   * }
   * interface VisItem {
   *   id: number;
   *   label: string;
   *   color: string;
   *   x: number;
   *   y: number;
   * }
   *
   * const ds1 = new DataSet<AppItem, "whoami">([], { fieldId: "whoami" });
   * const ds2 = new DataSet<VisItem, "id">();
   *
   * const pipe = createNewDataPipeFrom(ds1)
   *   .filter((item): boolean => item.enabled === true)
   *   .map<VisItem, "id">((item): VisItem => item.visData)
   *   .to(ds2);
   *
   * pipe.start();
   * ```
   * @returns A factory whose methods can be used to configure the pipe.
   */
  function createNewDataPipeFrom(from) {
    return new DataPipeUnderConstruction(from);
  }
  /**
   * Internal implementation of the pipe. This should be accessible only through
   * `createNewDataPipeFrom` from the outside.
   *
   * @typeParam SI - Source item type.
   * @typeParam SP - Source item type's id property name.
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   */

  var SimpleDataPipe = /*#__PURE__*/function () {
    /**
     * Bound listeners for use with `DataInterface['on' | 'off']`.
     */

    /**
     * Create a new data pipe.
     *
     * @param _source - The data set or data view that will be observed.
     * @param _transformers - An array of transforming functions to be used to
     * filter or transform the items in the pipe.
     * @param _target - The data set or data view that will receive the items.
     */
    function SimpleDataPipe(_source, _transformers, _target) {
      var _context, _context2, _context3;

      _classCallCheck(this, SimpleDataPipe);

      _defineProperty(this, "_source", void 0);

      _defineProperty(this, "_transformers", void 0);

      _defineProperty(this, "_target", void 0);

      _defineProperty(this, "_listeners", {
        add: bind$6(_context = this._add).call(_context, this),
        remove: bind$6(_context2 = this._remove).call(_context2, this),
        update: bind$6(_context3 = this._update).call(_context3, this)
      });

      this._source = _source;
      this._transformers = _transformers;
      this._target = _target;
    }
    /** @inheritDoc */


    _createClass(SimpleDataPipe, [{
      key: "all",
      value: function all() {
        this._target.update(this._transformItems(this._source.get()));

        return this;
      }
      /** @inheritDoc */

    }, {
      key: "start",
      value: function start() {
        this._source.on("add", this._listeners.add);

        this._source.on("remove", this._listeners.remove);

        this._source.on("update", this._listeners.update);

        return this;
      }
      /** @inheritDoc */

    }, {
      key: "stop",
      value: function stop() {
        this._source.off("add", this._listeners.add);

        this._source.off("remove", this._listeners.remove);

        this._source.off("update", this._listeners.update);

        return this;
      }
      /**
       * Apply the transformers to the items.
       *
       * @param items - The items to be transformed.
       * @returns The transformed items.
       */

    }, {
      key: "_transformItems",
      value: function _transformItems(items) {
        var _context4;

        return reduce(_context4 = this._transformers).call(_context4, function (items, transform) {
          return transform(items);
        }, items);
      }
      /**
       * Handle an add event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the ids of the added items.
       */

    }, {
      key: "_add",
      value: function _add(_name, payload) {
        if (payload == null) {
          return;
        }

        this._target.add(this._transformItems(this._source.get(payload.items)));
      }
      /**
       * Handle an update event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the ids of the updated items.
       */

    }, {
      key: "_update",
      value: function _update(_name, payload) {
        if (payload == null) {
          return;
        }

        this._target.update(this._transformItems(this._source.get(payload.items)));
      }
      /**
       * Handle a remove event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the data of the removed items.
       */

    }, {
      key: "_remove",
      value: function _remove(_name, payload) {
        if (payload == null) {
          return;
        }

        this._target.remove(this._transformItems(payload.oldData));
      }
    }]);

    return SimpleDataPipe;
  }();
  /**
   * Internal implementation of the pipe factory. This should be accessible
   * only through `createNewDataPipeFrom` from the outside.
   *
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   */


  var DataPipeUnderConstruction = /*#__PURE__*/function () {
    /**
     * Array transformers used to transform items within the pipe. This is typed
     * as any for the sake of simplicity.
     */

    /**
     * Create a new data pipe factory. This is an internal constructor that
     * should never be called from outside of this file.
     *
     * @param _source - The source data set or data view for this pipe.
     */
    function DataPipeUnderConstruction(_source) {
      _classCallCheck(this, DataPipeUnderConstruction);

      _defineProperty(this, "_source", void 0);

      _defineProperty(this, "_transformers", []);

      this._source = _source;
    }
    /**
     * Filter the items.
     *
     * @param callback - A filtering function that returns true if given item
     * should be piped and false if not.
     * @returns This factory for further configuration.
     */


    _createClass(DataPipeUnderConstruction, [{
      key: "filter",
      value: function filter$1(callback) {
        this._transformers.push(function (input) {
          return filter(input).call(input, callback);
        });

        return this;
      }
      /**
       * Map each source item to a new type.
       *
       * @param callback - A mapping function that takes a source item and returns
       * corresponding mapped item.
       * @typeParam TI - Target item type.
       * @typeParam TP - Target item type's id property name.
       * @returns This factory for further configuration.
       */

    }, {
      key: "map",
      value: function map(callback) {
        this._transformers.push(function (input) {
          return map$3(input).call(input, callback);
        });

        return this;
      }
      /**
       * Map each source item to zero or more items of a new type.
       *
       * @param callback - A mapping function that takes a source item and returns
       * an array of corresponding mapped items.
       * @typeParam TI - Target item type.
       * @typeParam TP - Target item type's id property name.
       * @returns This factory for further configuration.
       */

    }, {
      key: "flatMap",
      value: function flatMap$1(callback) {
        this._transformers.push(function (input) {
          return flatMap(input).call(input, callback);
        });

        return this;
      }
      /**
       * Connect this pipe to given data set.
       *
       * @param target - The data set that will receive the items from this pipe.
       * @returns The pipe connected between given data sets and performing
       * configured transformation on the processed items.
       */

    }, {
      key: "to",
      value: function to(target) {
        return new SimpleDataPipe(this._source, this._transformers, target);
      }
    }]);

    return DataPipeUnderConstruction;
  }();

  var global$o = global$M;
  var classof$a = classof$c;
  var String$2 = global$o.String;

  var toString$7 = function (argument) {
    if (classof$a(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$2(argument);
  };

  var uncurryThis$g = functionUncurryThis;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
  var toString$6 = toString$7;
  var requireObjectCoercible$2 = requireObjectCoercible$5;
  var charAt$2 = uncurryThis$g(''.charAt);
  var charCodeAt$1 = uncurryThis$g(''.charCodeAt);
  var stringSlice = uncurryThis$g(''.slice);

  var createMethod$3 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$6(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$2(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };

  var global$n = global$M;
  var isCallable$6 = isCallable$h;
  var inspectSource = inspectSource$2;
  var WeakMap$1 = global$n.WeakMap;
  var nativeWeakMap = isCallable$6(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

  var shared$2 = shared$4.exports;
  var uid$2 = uid$4;
  var keys$7 = shared$2('keys');

  var sharedKey$4 = function (key) {
    return keys$7[key] || (keys$7[key] = uid$2(key));
  };

  var hiddenKeys$6 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$m = global$M;
  var uncurryThis$f = functionUncurryThis;
  var isObject$8 = isObject$f;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
  var hasOwn$b = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$b = global$m.TypeError;
  var WeakMap = global$m.WeakMap;
  var set$3, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$3(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject$8(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$b('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    var wmget = uncurryThis$f(store.get);
    var wmhas = uncurryThis$f(store.has);
    var wmset = uncurryThis$f(store.set);

    set$3 = function (it, metadata) {
      if (wmhas(store, it)) throw new TypeError$b(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };

    get = function (it) {
      return wmget(store, it) || {};
    };

    has = function (it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;

    set$3 = function (it, metadata) {
      if (hasOwn$b(it, STATE)) throw new TypeError$b(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };

    get = function (it) {
      return hasOwn$b(it, STATE) ? it[STATE] : {};
    };

    has = function (it) {
      return hasOwn$b(it, STATE);
    };
  }

  var internalState = {
    set: set$3,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var DESCRIPTORS$b = descriptors;
  var hasOwn$a = hasOwnProperty_1;
  var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$a(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

  var PROPER = EXISTS && function something() {
    /* empty */
  }.name === 'something';

  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$b || DESCRIPTORS$b && getDescriptor(FunctionPrototype, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var objectDefineProperties = {};

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var max$3 = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$5 = function (index, length) {
    var integer = toIntegerOrInfinity$1(index);
    return integer < 0 ? max$3(integer + length, 0) : min$1(integer, length);
  };

  var toIndexedObject$9 = toIndexedObject$b;
  var toAbsoluteIndex$4 = toAbsoluteIndex$5;
  var lengthOfArrayLike$8 = lengthOfArrayLike$d; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$9($this);
      var length = lengthOfArrayLike$8(O);
      var index = toAbsoluteIndex$4(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var uncurryThis$e = functionUncurryThis;
  var hasOwn$9 = hasOwnProperty_1;
  var toIndexedObject$8 = toIndexedObject$b;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;
  var push$4 = uncurryThis$e([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$8(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !hasOwn$9(hiddenKeys$4, key) && hasOwn$9(O, key) && push$4(result, key); // Don't enum bug & hidden keys


    while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
      ~indexOf(result, key) || push$4(result, key);
    }

    return result;
  };

  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$4 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$a = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$9 = anObject$b;
  var toIndexedObject$7 = toIndexedObject$b;
  var objectKeys$3 = objectKeys$4; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$9(O);
    var props = toIndexedObject$7(Properties);
    var keys = objectKeys$3(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);

    return O;
  };

  var getBuiltIn$5 = getBuiltIn$9;
  var html$1 = getBuiltIn$5('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$8 = anObject$b;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$3 = hiddenKeys$6;
  var html = html$1;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function () {
    /* empty */
  };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

    var length = enumBugKeys$1.length;

    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];

    return NullProtoObject();
  };

  hiddenKeys$3[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$8(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();

    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

  var fails$g = fails$r;
  var correctPrototypeGetter = !fails$g(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var global$l = global$M;
  var hasOwn$8 = hasOwnProperty_1;
  var isCallable$5 = isCallable$h;
  var toObject$9 = toObject$e;
  var sharedKey$1 = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
  var IE_PROTO = sharedKey$1('IE_PROTO');
  var Object$4 = global$l.Object;
  var ObjectPrototype$2 = Object$4.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? Object$4.getPrototypeOf : function (O) {
    var object = toObject$9(O);
    if (hasOwn$8(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;

    if (isCallable$5(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }

    return object instanceof Object$4 ? ObjectPrototype$2 : null;
  };

  var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;

  var redefine$4 = function (target, key, value, options) {
    if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty$3(target, key, value);
  };

  var fails$f = fails$r;
  var isCallable$4 = isCallable$h;
  var create$a = objectCreate;
  var getPrototypeOf$6 = objectGetPrototypeOf;
  var redefine$3 = redefine$4;
  var wellKnownSymbol$d = wellKnownSymbol$j;
  var ITERATOR$5 = wellKnownSymbol$d('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object

  var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$6(getPrototypeOf$6(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$f(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$1[ITERATOR$5].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};else IteratorPrototype$1 = create$a(IteratorPrototype$1); // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!isCallable$4(IteratorPrototype$1[ITERATOR$5])) {
    redefine$3(IteratorPrototype$1, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$1,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$9 = classof$c; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$9(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineProperty$6 = objectDefineProperty.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
  var hasOwn$7 = hasOwnProperty_1;
  var toString$5 = objectToString;
  var wellKnownSymbol$c = wellKnownSymbol$j;
  var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');

  var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;

      if (!hasOwn$7(target, TO_STRING_TAG$1)) {
        defineProperty$6(target, TO_STRING_TAG$1, {
          configurable: true,
          value: TAG
        });
      }

      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty$2(target, 'toString', toString$5);
      }
    }
  };

  var iterators = {};

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var create$9 = objectCreate;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;
  var setToStringTag$4 = setToStringTag$5;
  var Iterators$5 = iterators;

  var returnThis$1 = function () {
    return this;
  };

  var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$9(IteratorPrototype, {
      next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators$5[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var global$k = global$M;
  var isCallable$3 = isCallable$h;
  var String$1 = global$k.String;
  var TypeError$a = global$k.TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$3(argument)) return argument;
    throw TypeError$a("Can't set " + String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThis$d = functionUncurryThis;
  var anObject$7 = anObject$b;
  var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe

  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$d(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject$7(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$w = _export;
  var call$6 = functionCall;
  var FunctionName = functionName;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf$5 = objectGetPrototypeOf;
  var setToStringTag$3 = setToStringTag$5;
  var redefine$2 = redefine$4;
  var wellKnownSymbol$b = wellKnownSymbol$j;
  var Iterators$4 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$b('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () {
    return this;
  };

  var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$5(anyNativeIterator.call(new Iterable()));

      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


        setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        Iterators$4[TO_STRING_TAG] = returnThis;
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return call$6(nativeIterator, this);
        };
      }
    } // export additional methods


    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$2(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$w({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    } // define iterator


    if ((FORCED) && IterablePrototype[ITERATOR$4] !== defaultIterator) {
      redefine$2(IterablePrototype, ITERATOR$4, defaultIterator, {
        name: DEFAULT
      });
    }

    Iterators$4[NAME] = defaultIterator;
    return methods;
  };

  var charAt$1 = stringMultibyte.charAt;
  var toString$4 = toString$7;
  var InternalStateModule$4 = internalState;
  var defineIterator$2 = defineIterator$3;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$4 = InternalStateModule$4.set;
  var getInternalState$2 = InternalStateModule$4.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator$2(String, 'String', function (iterated) {
    setInternalState$4(this, {
      type: STRING_ITERATOR,
      string: toString$4(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$1(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var call$5 = functionCall;
  var anObject$6 = anObject$b;
  var getMethod$1 = getMethod$3;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$6(iterator);

    try {
      innerResult = getMethod$1(iterator, 'return');

      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }

      innerResult = call$5(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }

    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$6(innerResult);
    return value;
  };

  var anObject$5 = anObject$b;
  var iteratorClose$1 = iteratorClose$2; // call something on iterator step with safe closing on error

  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$5(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };

  var wellKnownSymbol$a = wellKnownSymbol$j;
  var Iterators$3 = iterators;
  var ITERATOR$3 = wellKnownSymbol$a('iterator');
  var ArrayPrototype$a = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators$3.Array === it || ArrayPrototype$a[ITERATOR$3] === it);
  };

  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;

  var createProperty$6 = function (object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
  };

  var classof$8 = classof$c;
  var getMethod = getMethod$3;
  var Iterators$2 = iterators;
  var wellKnownSymbol$9 = wellKnownSymbol$j;
  var ITERATOR$2 = wellKnownSymbol$9('iterator');

  var getIteratorMethod$8 = function (it) {
    if (it != undefined) return getMethod(it, ITERATOR$2) || getMethod(it, '@@iterator') || Iterators$2[classof$8(it)];
  };

  var global$j = global$M;
  var call$4 = functionCall;
  var aCallable$1 = aCallable$7;
  var anObject$4 = anObject$b;
  var tryToString$2 = tryToString$4;
  var getIteratorMethod$7 = getIteratorMethod$8;
  var TypeError$9 = global$j.TypeError;

  var getIterator$7 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$7(argument) : usingIterator;
    if (aCallable$1(iteratorMethod)) return anObject$4(call$4(iteratorMethod, argument));
    throw TypeError$9(tryToString$2(argument) + ' is not iterable');
  };

  var global$i = global$M;
  var bind$3 = functionBindContext;
  var call$3 = functionCall;
  var toObject$8 = toObject$e;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor$2 = isConstructor$4;
  var lengthOfArrayLike$7 = lengthOfArrayLike$d;
  var createProperty$5 = createProperty$6;
  var getIterator$6 = getIterator$7;
  var getIteratorMethod$6 = getIteratorMethod$8;
  var Array$4 = global$i.Array; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$8(arrayLike);
    var IS_CONSTRUCTOR = isConstructor$2(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$3(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$6(O);
    var index = 0;
    var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod && !(this == Array$4 && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$6(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];

      for (; !(step = call$3(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$5(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$7(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$4(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$5(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var wellKnownSymbol$8 = wellKnownSymbol$j;
  var ITERATOR$1 = wellKnownSymbol$8('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return {
          done: !!called++
        };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$1] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$1] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var $$v = _export;
  var from$6 = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$v({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: from$6
  });

  var path$l = path$q;
  var from$5 = path$l.Array.from;

  var parent$N = from$5;
  var from$4 = parent$N;

  var from$3 = from$4;

  var toIndexedObject$6 = toIndexedObject$b;
  var Iterators$1 = iterators;
  var InternalStateModule$3 = internalState;
  objectDefineProperty.f;
  var defineIterator$1 = defineIterator$3;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$3(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$6(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  Iterators$1.Arguments = Iterators$1.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  var getIteratorMethod$5 = getIteratorMethod$8;
  var getIteratorMethod_1 = getIteratorMethod$5;

  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var DOMIterables$4 = domIterables;
  var global$h = global$M;
  var classof$7 = classof$c;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
  var Iterators = iterators;
  var wellKnownSymbol$7 = wellKnownSymbol$j;
  var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');

  for (var COLLECTION_NAME in DOMIterables$4) {
    var Collection = global$h[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;

    if (CollectionPrototype && classof$7(CollectionPrototype) !== TO_STRING_TAG) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }

    Iterators[COLLECTION_NAME] = Iterators.Array;
  }

  var parent$M = getIteratorMethod_1;
  var getIteratorMethod$4 = parent$M;

  var parent$L = getIteratorMethod$4;
  var getIteratorMethod$3 = parent$L;

  var parent$K = getIteratorMethod$3;
  var getIteratorMethod$2 = parent$K;

  var getIteratorMethod$1 = getIteratorMethod$2;

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$2);
  };

  var objectGetOwnPropertyNamesExternal = {};

  var global$g = global$M;
  var toAbsoluteIndex$3 = toAbsoluteIndex$5;
  var lengthOfArrayLike$6 = lengthOfArrayLike$d;
  var createProperty$4 = createProperty$6;
  var Array$3 = global$g.Array;
  var max$2 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$6(O);
    var k = toAbsoluteIndex$3(start, length);
    var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
    var result = Array$3(max$2(fin - k, 0));

    for (var n = 0; k < fin; k++, n++) createProperty$4(result, n, O[k]);

    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */
  var classof$6 = classofRaw$1;
  var toIndexedObject$5 = toIndexedObject$b;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$3 = arraySliceSimple;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$3(windowNames);
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$6(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$5(it));
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$6 = wellKnownSymbol$j;
  wellKnownSymbolWrapped.f = wellKnownSymbol$6;

  var path$k = path$q;
  var hasOwn$6 = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$5 = objectDefineProperty.f;

  var defineWellKnownSymbol$l = function (NAME) {
    var Symbol = path$k.Symbol || (path$k.Symbol = {});
    if (!hasOwn$6(Symbol, NAME)) defineProperty$5(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var $$u = _export;
  var global$f = global$M;
  var getBuiltIn$4 = getBuiltIn$9;
  var apply$4 = functionApply;
  var call$2 = functionCall;
  var uncurryThis$c = functionUncurryThis;
  var DESCRIPTORS$9 = descriptors;
  var NATIVE_SYMBOL = nativeSymbol;
  var fails$e = fails$r;
  var hasOwn$5 = hasOwnProperty_1;
  var isArray$a = isArray$d;
  var isCallable$2 = isCallable$h;
  var isObject$7 = isObject$f;
  var isPrototypeOf$c = objectIsPrototypeOf;
  var isSymbol = isSymbol$3;
  var anObject$3 = anObject$b;
  var toObject$7 = toObject$e;
  var toIndexedObject$4 = toIndexedObject$b;
  var toPropertyKey = toPropertyKey$4;
  var $toString = toString$7;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var nativeObjectCreate = objectCreate;
  var objectKeys$2 = objectKeys$4;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$1 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var arraySlice$2 = arraySlice$5;
  var redefine$1 = redefine$4;
  var shared = shared$4.exports;
  var sharedKey = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$1 = uid$4;
  var wellKnownSymbol$5 = wellKnownSymbol$j;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$k = defineWellKnownSymbol$l;
  var setToStringTag$2 = setToStringTag$5;
  var InternalStateModule$2 = internalState;
  var $forEach$1 = arrayIteration.forEach;
  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState = InternalStateModule$2.getterFor(SYMBOL);
  var ObjectPrototype$1 = Object[PROTOTYPE];
  var $Symbol = global$f.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$8 = global$f.TypeError;
  var QObject = global$f.QObject;
  var $stringify$1 = getBuiltIn$4('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
  var nativeDefineProperty = definePropertyModule$1.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$3 = uncurryThis$c([].push);
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS$9 && fails$e(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
    nativeDefineProperty(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
      nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap$1 = function (tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
    setInternalState$2(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$9) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$3(O);
    var key = toPropertyKey(P);
    anObject$3(Attributes);

    if (hasOwn$5(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$3(O);
    var properties = toIndexedObject$4(Properties);
    var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$9 || call$2($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$2(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$1 && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$4(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$1 && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

    if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys$1, key)) push$3(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype$1, key))) {
        push$3(result, AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$c(SymbolPrototype, this)) throw TypeError$8('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid$1(description);

      var setter = function (value) {
        if (this === ObjectPrototype$1) call$2(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$5(this, HIDDEN) && hasOwn$5(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };

      if (DESCRIPTORS$9 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
        configurable: true,
        set: setter
      });
      return wrap$1(tag, description);
    };

    SymbolPrototype = $Symbol[PROTOTYPE];
    redefine$1(SymbolPrototype, 'toString', function toString() {
      return getInternalState(this).tag;
    });
    redefine$1($Symbol, 'withoutSetter', function (description) {
      return wrap$1(uid$1(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
    definePropertyModule$1.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap$1(wellKnownSymbol$5(name), name);
    };

    if (DESCRIPTORS$9) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
    }
  }

  $$u({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
  }, {
    Symbol: $Symbol
  });
  $forEach$1(objectKeys$2(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol$k(name);
  });
  $$u({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = $toString(key);
      if (hasOwn$5(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError$8(sym + ' is not a symbol');
      if (hasOwn$5(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () {
      USE_SETTER = true;
    },
    useSimple: function () {
      USE_SETTER = false;
    }
  });
  $$u({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS$9
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  $$u({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  $$u({
    target: 'Object',
    stat: true,
    forced: fails$e(function () {
      getOwnPropertySymbolsModule$2.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule$2.f(toObject$7(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify$1) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$e(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify$1({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify$1(Object(symbol)) != '{}';
    });
    $$u({
      target: 'JSON',
      stat: true,
      forced: FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$2(arguments);
        var $replacer = replacer;
        if (!isObject$7(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

        if (!isArray$a(replacer)) replacer = function (key, value) {
          if (isCallable$2($replacer)) value = call$2($replacer, this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return apply$4($stringify$1, null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!SymbolPrototype[TO_PRIMITIVE]) {
    var valueOf = SymbolPrototype.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length

    redefine$1(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      // TODO: improve hint logic
      return call$2(valueOf, this);
    });
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag$2($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var path$j = path$q;
  var getOwnPropertySymbols$2 = path$j.Object.getOwnPropertySymbols;

  var parent$J = getOwnPropertySymbols$2;
  var getOwnPropertySymbols$1 = parent$J;

  var getOwnPropertySymbols = getOwnPropertySymbols$1;

  var getOwnPropertyDescriptor$3 = {exports: {}};

  var $$t = _export;
  var fails$d = fails$r;
  var toIndexedObject$3 = toIndexedObject$b;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$8 = descriptors;
  var FAILS_ON_PRIMITIVES$3 = fails$d(function () {
    nativeGetOwnPropertyDescriptor(1);
  });
  var FORCED$5 = !DESCRIPTORS$8 || FAILS_ON_PRIMITIVES$3; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  $$t({
    target: 'Object',
    stat: true,
    forced: FORCED$5,
    sham: !DESCRIPTORS$8
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject$3(it), key);
    }
  });

  var path$i = path$q;
  var Object$3 = path$i.Object;

  var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor$3.exports = function getOwnPropertyDescriptor(it, key) {
    return Object$3.getOwnPropertyDescriptor(it, key);
  };

  if (Object$3.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$2.sham = true;

  var parent$I = getOwnPropertyDescriptor$3.exports;
  var getOwnPropertyDescriptor$1 = parent$I;

  var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

  var getBuiltIn$3 = getBuiltIn$9;
  var uncurryThis$b = functionUncurryThis;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$2 = anObject$b;
  var concat$5 = uncurryThis$b([].concat); // all object keys, includes non-enumerable and symbols

  var ownKeys$6 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$2(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$5(keys, getOwnPropertySymbols(it)) : keys;
  };

  var $$s = _export;
  var DESCRIPTORS$7 = descriptors;
  var ownKeys$5 = ownKeys$6;
  var toIndexedObject$2 = toIndexedObject$b;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var createProperty$3 = createProperty$6; // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

  $$s({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$7
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject$2(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var keys = ownKeys$5(O);
      var result = {};
      var index = 0;
      var key, descriptor;

      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty$3(result, key, descriptor);
      }

      return result;
    }
  });

  var path$h = path$q;
  var getOwnPropertyDescriptors$2 = path$h.Object.getOwnPropertyDescriptors;

  var parent$H = getOwnPropertyDescriptors$2;
  var getOwnPropertyDescriptors$1 = parent$H;

  var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

  var defineProperties$4 = {exports: {}};

  var $$r = _export;
  var DESCRIPTORS$6 = descriptors;
  var defineProperties$3 = objectDefineProperties.f; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  $$r({
    target: 'Object',
    stat: true,
    forced: Object.defineProperties !== defineProperties$3,
    sham: !DESCRIPTORS$6
  }, {
    defineProperties: defineProperties$3
  });

  var path$g = path$q;
  var Object$2 = path$g.Object;

  var defineProperties$2 = defineProperties$4.exports = function defineProperties(T, D) {
    return Object$2.defineProperties(T, D);
  };

  if (Object$2.defineProperties.sham) defineProperties$2.sham = true;

  var parent$G = defineProperties$4.exports;
  var defineProperties$1 = parent$G;

  var defineProperties = defineProperties$1;

  var defineProperty$4 = defineProperty$a;

  var $$q = _export;
  var isArray$9 = isArray$d; // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray

  $$q({
    target: 'Array',
    stat: true
  }, {
    isArray: isArray$9
  });

  var path$f = path$q;
  var isArray$8 = path$f.Array.isArray;

  var parent$F = isArray$8;
  var isArray$7 = parent$F;

  var parent$E = isArray$7;
  var isArray$6 = parent$E;

  var parent$D = isArray$6;
  var isArray$5 = parent$D;

  var isArray$4 = isArray$5;

  function _arrayWithHoles(arr) {
    if (isArray$4(arr)) return arr;
  }

  var $$p = _export;
  var global$e = global$M;
  var fails$c = fails$r;
  var isArray$3 = isArray$d;
  var isObject$6 = isObject$f;
  var toObject$6 = toObject$e;
  var lengthOfArrayLike$5 = lengthOfArrayLike$d;
  var createProperty$2 = createProperty$6;
  var arraySpeciesCreate$1 = arraySpeciesCreate$4;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$4 = wellKnownSymbol$j;
  var V8_VERSION = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$4('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var TypeError$7 = global$e.TypeError; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$c(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject$6(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };

  var FORCED$4 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$p({
    target: 'Array',
    proto: true,
    forced: FORCED$4
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$6(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$5(E);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$7(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError$7(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$2(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var defineWellKnownSymbol$j = defineWellKnownSymbol$l; // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator

  defineWellKnownSymbol$j('asyncIterator');

  var defineWellKnownSymbol$i = defineWellKnownSymbol$l; // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance

  defineWellKnownSymbol$i('hasInstance');

  var defineWellKnownSymbol$h = defineWellKnownSymbol$l; // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

  defineWellKnownSymbol$h('isConcatSpreadable');

  var defineWellKnownSymbol$g = defineWellKnownSymbol$l; // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator

  defineWellKnownSymbol$g('iterator');

  var defineWellKnownSymbol$f = defineWellKnownSymbol$l; // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match

  defineWellKnownSymbol$f('match');

  var defineWellKnownSymbol$e = defineWellKnownSymbol$l; // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall

  defineWellKnownSymbol$e('matchAll');

  var defineWellKnownSymbol$d = defineWellKnownSymbol$l; // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace

  defineWellKnownSymbol$d('replace');

  var defineWellKnownSymbol$c = defineWellKnownSymbol$l; // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search

  defineWellKnownSymbol$c('search');

  var defineWellKnownSymbol$b = defineWellKnownSymbol$l; // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species

  defineWellKnownSymbol$b('species');

  var defineWellKnownSymbol$a = defineWellKnownSymbol$l; // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split

  defineWellKnownSymbol$a('split');

  var defineWellKnownSymbol$9 = defineWellKnownSymbol$l; // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive

  defineWellKnownSymbol$9('toPrimitive');

  var defineWellKnownSymbol$8 = defineWellKnownSymbol$l; // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag

  defineWellKnownSymbol$8('toStringTag');

  var defineWellKnownSymbol$7 = defineWellKnownSymbol$l; // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables

  defineWellKnownSymbol$7('unscopables');

  var global$d = global$M;
  var setToStringTag$1 = setToStringTag$5; // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag

  setToStringTag$1(global$d.JSON, 'JSON', true);

  var path$e = path$q;
  var symbol$5 = path$e.Symbol;

  var parent$C = symbol$5;
  var symbol$4 = parent$C;

  var parent$B = symbol$4;
  var symbol$3 = parent$B;

  var defineWellKnownSymbol$6 = defineWellKnownSymbol$l; // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement

  defineWellKnownSymbol$6('asyncDispose');

  var defineWellKnownSymbol$5 = defineWellKnownSymbol$l; // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement

  defineWellKnownSymbol$5('dispose');

  var defineWellKnownSymbol$4 = defineWellKnownSymbol$l; // `Symbol.matcher` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching

  defineWellKnownSymbol$4('matcher');

  var defineWellKnownSymbol$3 = defineWellKnownSymbol$l; // `Symbol.metadata` well-known symbol
  // https://github.com/tc39/proposal-decorators

  defineWellKnownSymbol$3('metadata');

  var defineWellKnownSymbol$2 = defineWellKnownSymbol$l; // `Symbol.observable` well-known symbol
  // https://github.com/tc39/proposal-observable

  defineWellKnownSymbol$2('observable');

  var defineWellKnownSymbol$1 = defineWellKnownSymbol$l; // `Symbol.patternMatch` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching

  defineWellKnownSymbol$1('patternMatch');

  var defineWellKnownSymbol = defineWellKnownSymbol$l;
  defineWellKnownSymbol('replaceAll');

  var parent$A = symbol$3; // TODO: Remove from `core-js@4`
  // TODO: Remove from `core-js@4`

  var symbol$2 = parent$A;

  var symbol$1 = symbol$2;

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof symbol$1 !== "undefined" && getIteratorMethod$1(arr) || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var $$o = _export;
  var global$c = global$M;
  var isArray$2 = isArray$d;
  var isConstructor$1 = isConstructor$4;
  var isObject$5 = isObject$f;
  var toAbsoluteIndex$2 = toAbsoluteIndex$5;
  var lengthOfArrayLike$4 = lengthOfArrayLike$d;
  var toIndexedObject$1 = toIndexedObject$b;
  var createProperty$1 = createProperty$6;
  var wellKnownSymbol$3 = wellKnownSymbol$j;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var un$Slice = arraySlice$5;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
  var SPECIES$1 = wellKnownSymbol$3('species');
  var Array$2 = global$c.Array;
  var max$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$o({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = lengthOfArrayLike$4(O);
      var k = toAbsoluteIndex$2(start, length);
      var fin = toAbsoluteIndex$2(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$2(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (isConstructor$1(Constructor) && (Constructor === Array$2 || isArray$2(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$5(Constructor)) {
          Constructor = Constructor[SPECIES$1];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array$2 || Constructor === undefined) {
          return un$Slice(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array$2 : Constructor)(max$1(fin - k, 0));

      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);

      result.length = n;
      return result;
    }
  });

  var entryVirtual$e = entryVirtual$k;
  var slice$6 = entryVirtual$e('Array').slice;

  var isPrototypeOf$b = objectIsPrototypeOf;
  var method$9 = slice$6;
  var ArrayPrototype$9 = Array.prototype;

  var slice$5 = function (it) {
    var own = it.slice;
    return it === ArrayPrototype$9 || isPrototypeOf$b(ArrayPrototype$9, it) && own === ArrayPrototype$9.slice ? method$9 : own;
  };

  var parent$z = slice$5;
  var slice$4 = parent$z;

  var parent$y = slice$4;
  var slice$3 = parent$y;

  var parent$x = slice$3;
  var slice$2 = parent$x;

  var slice$1 = slice$2;

  var parent$w = from$4;
  var from$2 = parent$w;

  var parent$v = from$2;
  var from$1 = parent$v;

  var from = from$1;

  function _arrayLikeToArray$4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$4(o, minLen) {
    var _context;

    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);

    var n = slice$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest();
  }

  var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var iterator$5 = WrappedWellKnownSymbolModule.f('iterator');

  var parent$u = iterator$5;
  var iterator$4 = parent$u;

  var parent$t = iterator$4;
  var iterator$3 = parent$t;

  var parent$s = iterator$3;
  var iterator$2 = parent$s;

  var iterator$1 = iterator$2;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof symbol$1 && "symbol" == typeof iterator$1 ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof symbol$1 && obj.constructor === symbol$1 && obj !== symbol$1.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _arrayWithoutHoles(arr) {
    if (isArray$4(arr)) return _arrayLikeToArray$4(arr);
  }

  function _iterableToArray(iter) {
    if (typeof symbol$1 !== "undefined" && getIteratorMethod$1(iter) != null || iter["@@iterator"] != null) return from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
  }

  var symbol = symbol$4;

  var entryVirtual$d = entryVirtual$k;
  var concat$4 = entryVirtual$d('Array').concat;

  var isPrototypeOf$a = objectIsPrototypeOf;
  var method$8 = concat$4;
  var ArrayPrototype$8 = Array.prototype;

  var concat$3 = function (it) {
    var own = it.concat;
    return it === ArrayPrototype$8 || isPrototypeOf$a(ArrayPrototype$8, it) && own === ArrayPrototype$8.concat ? method$8 : own;
  };

  var parent$r = concat$3;
  var concat$2 = parent$r;

  var concat$1 = concat$2;

  var slice = slice$4;

  var $$n = _export;
  var ownKeys$4 = ownKeys$6; // `Reflect.ownKeys` method
  // https://tc39.es/ecma262/#sec-reflect.ownkeys

  $$n({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: ownKeys$4
  });

  var path$d = path$q;
  var ownKeys$3 = path$d.Reflect.ownKeys;

  var parent$q = ownKeys$3;
  var ownKeys$2 = parent$q;

  var ownKeys$1 = ownKeys$2;

  var isArray$1 = isArray$7;

  var $$m = _export;
  var toObject$5 = toObject$e;
  var nativeKeys = objectKeys$4;
  var fails$b = fails$r;
  var FAILS_ON_PRIMITIVES$2 = fails$b(function () {
    nativeKeys(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  $$m({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$2
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject$5(it));
    }
  });

  var path$c = path$q;
  var keys$6 = path$c.Object.keys;

  var parent$p = keys$6;
  var keys$5 = parent$p;

  var keys$4 = keys$5;

  var $$l = _export;
  var global$b = global$M;
  var uncurryThis$a = functionUncurryThis;
  var Date$1 = global$b.Date;
  var getTime = uncurryThis$a(Date$1.prototype.getTime); // `Date.now` method
  // https://tc39.es/ecma262/#sec-date.now

  $$l({
    target: 'Date',
    stat: true
  }, {
    now: function now() {
      return getTime(new Date$1());
    }
  });

  var path$b = path$q;
  path$b.Date.now;

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$3 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var $$k = _export;
  var forEach$5 = arrayForEach; // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe

  $$k({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach$5
  }, {
    forEach: forEach$5
  });

  var entryVirtual$c = entryVirtual$k;
  var forEach$4 = entryVirtual$c('Array').forEach;

  var parent$o = forEach$4;
  var forEach$3 = parent$o;

  var classof$5 = classof$c;
  var hasOwn$4 = hasOwnProperty_1;
  var isPrototypeOf$9 = objectIsPrototypeOf;
  var method$7 = forEach$3;
  var ArrayPrototype$7 = Array.prototype;
  var DOMIterables$3 = {
    DOMTokenList: true,
    NodeList: true
  };

  var forEach$2 = function (it) {
    var own = it.forEach;
    return it === ArrayPrototype$7 || isPrototypeOf$9(ArrayPrototype$7, it) && own === ArrayPrototype$7.forEach || hasOwn$4(DOMIterables$3, classof$5(it)) ? method$7 : own;
  };

  var forEach$1 = forEach$2;

  var $$j = _export;
  var uncurryThis$9 = functionUncurryThis;
  var isArray = isArray$d;
  var un$Reverse = uncurryThis$9([].reverse);
  var test$1 = [1, 2]; // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794

  $$j({
    target: 'Array',
    proto: true,
    forced: String(test$1) === String(test$1.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return un$Reverse(this);
    }
  });

  var entryVirtual$b = entryVirtual$k;
  var reverse$3 = entryVirtual$b('Array').reverse;

  var isPrototypeOf$8 = objectIsPrototypeOf;
  var method$6 = reverse$3;
  var ArrayPrototype$6 = Array.prototype;

  var reverse$2 = function (it) {
    var own = it.reverse;
    return it === ArrayPrototype$6 || isPrototypeOf$8(ArrayPrototype$6, it) && own === ArrayPrototype$6.reverse ? method$6 : own;
  };

  var parent$n = reverse$2;
  var reverse$1 = parent$n;

  var reverse = reverse$1;

  var $$i = _export;
  var global$a = global$M;
  var toAbsoluteIndex$1 = toAbsoluteIndex$5;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var lengthOfArrayLike$3 = lengthOfArrayLike$d;
  var toObject$4 = toObject$e;
  var arraySpeciesCreate = arraySpeciesCreate$4;
  var createProperty = createProperty$6;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var TypeError$6 = global$a.TypeError;
  var max = Math.max;
  var min = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$i({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$4(this);
      var len = lengthOfArrayLike$3(O);
      var actualStart = toAbsoluteIndex$1(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError$6(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }

      A.length = actualDeleteCount;

      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }

        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }

      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }

      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var entryVirtual$a = entryVirtual$k;
  var splice$3 = entryVirtual$a('Array').splice;

  var isPrototypeOf$7 = objectIsPrototypeOf;
  var method$5 = splice$3;
  var ArrayPrototype$5 = Array.prototype;

  var splice$2 = function (it) {
    var own = it.splice;
    return it === ArrayPrototype$5 || isPrototypeOf$7(ArrayPrototype$5, it) && own === ArrayPrototype$5.splice ? method$5 : own;
  };

  var parent$m = splice$2;
  var splice$1 = parent$m;

  var splice = splice$1;

  var DESCRIPTORS$5 = descriptors;
  var uncurryThis$8 = functionUncurryThis;
  var call$1 = functionCall;
  var fails$a = fails$r;
  var objectKeys$1 = objectKeys$4;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$3 = toObject$e;
  var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty$3 = Object.defineProperty;
  var concat = uncurryThis$8([].concat); // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails$a(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$5 && $assign({
      b: 1
    }, $assign(defineProperty$3({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$3(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$3(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;

    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$5 || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  var $$h = _export;
  var assign$5 = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  $$h({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign$5
  }, {
    assign: assign$5
  });

  var path$a = path$q;
  var assign$4 = path$a.Object.assign;

  var parent$l = assign$4;
  var assign$3 = parent$l;

  var assign$2 = assign$3;

  var $$g = _export;
  var $includes = arrayIncludes.includes;
  // https://tc39.es/ecma262/#sec-array.prototype.includes

  $$g({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  var entryVirtual$9 = entryVirtual$k;
  entryVirtual$9('Array').includes;

  var isObject$4 = isObject$f;
  var classof$4 = classofRaw$1;
  var wellKnownSymbol$2 = wellKnownSymbol$j;
  var MATCH$1 = wellKnownSymbol$2('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function (it) {
    var isRegExp;
    return isObject$4(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
  };

  var global$9 = global$M;
  var isRegExp = isRegexp;
  var TypeError$5 = global$9.TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw TypeError$5("The method doesn't accept regular expressions");
    }

    return it;
  };

  var wellKnownSymbol$1 = wellKnownSymbol$j;
  var MATCH = wellKnownSymbol$1('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }

    return false;
  };

  var $$f = _export;
  var uncurryThis$7 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var toString$3 = toString$7;
  var correctIsRegExpLogic = correctIsRegexpLogic;
  var stringIndexOf = uncurryThis$7(''.indexOf); // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes

  $$f({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~stringIndexOf(toString$3(requireObjectCoercible$1(this)), toString$3(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$8 = entryVirtual$k;
  entryVirtual$8('String').includes;

  var $$e = _export;
  var fails$9 = fails$r;
  var toObject$2 = toObject$e;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
  var FAILS_ON_PRIMITIVES$1 = fails$9(function () {
    nativeGetPrototypeOf(1);
  }); // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  $$e({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1,
    sham: !CORRECT_PROTOTYPE_GETTER
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$2(it));
    }
  });

  var path$9 = path$q;
  var getPrototypeOf$4 = path$9.Object.getPrototypeOf;

  var parent$k = getPrototypeOf$4;
  var getPrototypeOf$3 = parent$k;

  var DESCRIPTORS$4 = descriptors;
  var uncurryThis$6 = functionUncurryThis;
  var objectKeys = objectKeys$4;
  var toIndexedObject = toIndexedObject$b;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
  var propertyIsEnumerable = uncurryThis$6($propertyIsEnumerable);
  var push$2 = uncurryThis$6([].push); // `Object.{ entries, values }` methods implementation

  var createMethod$1 = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!DESCRIPTORS$4 || propertyIsEnumerable(O, key)) {
          push$2(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $$d = _export;
  var $values = objectToArray.values; // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values

  $$d({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

  var path$8 = path$q;
  path$8.Object.values;

  var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$5 = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$5;
  var toString$2 = toString$7;
  var whitespaces$2 = whitespaces$3;
  var replace$1 = uncurryThis$5(''.replace);
  var whitespace = '[' + whitespaces$2 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$2(requireObjectCoercible($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var global$8 = global$M;
  var fails$8 = fails$r;
  var uncurryThis$4 = functionUncurryThis;
  var toString$1 = toString$7;
  var trim = stringTrim.trim;
  var whitespaces$1 = whitespaces$3;
  var $parseInt$1 = global$8.parseInt;
  var Symbol$1 = global$8.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec$1 = uncurryThis$4(hex.exec);
  var FORCED$3 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
  || ITERATOR && !fails$8(function () {
    $parseInt$1(Object(ITERATOR));
  }); // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  var numberParseInt = FORCED$3 ? function parseInt(string, radix) {
    var S = trim(toString$1(string));
    return $parseInt$1(S, radix >>> 0 || (exec$1(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$c = _export;
  var $parseInt = numberParseInt; // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  $$c({
    global: true,
    forced: parseInt != $parseInt
  }, {
    parseInt: $parseInt
  });

  var path$7 = path$q;
  path$7.parseInt;

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $$b = _export;
  var uncurryThis$3 = functionUncurryThis;
  var $IndexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;
  var un$IndexOf = uncurryThis$3([].indexOf);
  var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  $$b({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD$2
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
    }
  });

  var entryVirtual$7 = entryVirtual$k;
  entryVirtual$7('Array').indexOf;

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$7 = fails$r;
  var whitespaces = whitespaces$3;
  var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function (METHOD_NAME) {
    return fails$7(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$a = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  $$a({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var entryVirtual$6 = entryVirtual$k;
  entryVirtual$6('String').trim;

  var $$9 = _export;
  var DESCRIPTORS$3 = descriptors;
  var create$8 = objectCreate; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  $$9({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$3
  }, {
    create: create$8
  });

  var path$6 = path$q;
  var Object$1 = path$6.Object;

  var create$7 = function create(P, D) {
    return Object$1.create(P, D);
  };

  var parent$j = create$7;
  var create$6 = parent$j;

  var create$5 = create$6;

  var $$8 = _export;
  var global$7 = global$M;
  var getBuiltIn$2 = getBuiltIn$9;
  var apply$3 = functionApply;
  var uncurryThis$2 = functionUncurryThis;
  var fails$6 = fails$r;
  var Array$1 = global$7.Array;
  var $stringify = getBuiltIn$2('JSON', 'stringify');
  var exec = uncurryThis$2(/./.exec);
  var charAt = uncurryThis$2(''.charAt);
  var charCodeAt = uncurryThis$2(''.charCodeAt);
  var replace = uncurryThis$2(''.replace);
  var numberToString = uncurryThis$2(1.0.toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function (match, offset, string) {
    var prev = charAt(string, offset - 1);
    var next = charAt(string, offset + 1);

    if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
      return '\\u' + numberToString(charCodeAt(match, 0), 16);
    }

    return match;
  };

  var FORCED$2 = fails$6(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
  });

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    $$8({
      target: 'JSON',
      stat: true,
      forced: FORCED$2
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++) args[i] = arguments[i];

        var result = apply$3($stringify, null, args);
        return typeof result == 'string' ? replace(result, tester, fix) : result;
      }
    });
  }

  var path$5 = path$q;
  var apply$2 = functionApply; // eslint-disable-next-line es/no-json -- safe

  if (!path$5.JSON) path$5.JSON = {
    stringify: JSON.stringify
  }; // eslint-disable-next-line no-unused-vars -- required for `.length`

  var stringify$3 = function stringify(it, replacer, space) {
    return apply$2(path$5.JSON.stringify, null, arguments);
  };

  var parent$i = stringify$3;
  var stringify$2 = parent$i;

  var stringify$1 = stringify$2;

  var global$6 = global$M;
  var TypeError$4 = global$6.TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw TypeError$4('Not enough arguments');
    return passed;
  };

  var $$7 = _export;
  var global$5 = global$M;
  var apply$1 = functionApply;
  var isCallable$1 = isCallable$h;
  var userAgent$2 = engineUserAgent;
  var arraySlice$1 = arraySlice$5;
  var validateArgumentsLength = validateArgumentsLength$1;
  var MSIE = /MSIE .\./.test(userAgent$2); // <- dirty ie9- check

  var Function$1 = global$5.Function;

  var wrap = function (scheduler) {
    return function (handler, timeout
    /* , ...arguments */
    ) {
      var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
      var fn = isCallable$1(handler) ? handler : Function$1(handler);
      var args = boundArgs ? arraySlice$1(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        apply$1(fn, this, args);
      } : fn, timeout);
    };
  }; // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


  $$7({
    global: true,
    bind: true,
    forced: MSIE
  }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global$5.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global$5.setInterval)
  });

  var path$4 = path$q;
  var setTimeout$2 = path$4.setTimeout;

  var setTimeout$1 = setTimeout$2;

  var toObject$1 = toObject$e;
  var toAbsoluteIndex = toAbsoluteIndex$5;
  var lengthOfArrayLike$2 = lengthOfArrayLike$d; // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  var arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = toObject$1(this);
    var length = lengthOfArrayLike$2(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

    while (endPos > index) O[index++] = value;

    return O;
  };

  var $$6 = _export;
  var fill = arrayFill;
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  $$6({
    target: 'Array',
    proto: true
  }, {
    fill: fill
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  var entryVirtual$5 = entryVirtual$k;
  entryVirtual$5('Array').fill;

  var componentEmitter = {exports: {}};

  (function (module) {
    /**
     * Expose `Emitter`.
     */
    {
      module.exports = Emitter;
    }
    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */


    function Emitter(obj) {
      if (obj) return mixin(obj);
    }
    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */

    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }

      return obj;
    }
    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */


    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
      return this;
    };
    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */


    Emitter.prototype.once = function (event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }

      on.fn = fn;
      this.on(event, on);
      return this;
    };
    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */


    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {}; // all

      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks['$' + event];
      if (!callbacks) return this; // remove all handlers

      if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
      } // remove specific handler


      var cb;

      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];

        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      } // Remove event specific arrays for event types that no
      // one is subscribed for to avoid memory leak.


      if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
      }

      return this;
    };
    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */


    Emitter.prototype.emit = function (event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1),
          callbacks = this._callbacks['$' + event];

      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }

      if (callbacks) {
        callbacks = callbacks.slice(0);

        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }

      return this;
    };
    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */


    Emitter.prototype.listeners = function (event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks['$' + event] || [];
    };
    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */


    Emitter.prototype.hasListeners = function (event) {
      return !!this.listeners(event).length;
    };
  })(componentEmitter);

  var Emitter = componentEmitter.exports;

  /*! Hammer.JS - v2.0.17-rc - 2019-12-16
   * http://naver.github.io/egjs
   *
   * Forked By Naver egjs
   * Copyright (c) hammerjs
   * Licensed under the MIT license */
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }
  /**
   * @private
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */


  var assign;

  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];

        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }

      return output;
    };
  } else {
    assign = Object.assign;
  }

  var assign$1 = assign;
  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = typeof document === "undefined" ? {
    style: {}
  } : document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round,
      abs = Math.abs;
  var now = Date.now;
  /**
   * @private
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */

  function prefixed(obj, property) {
    var prefix;
    var prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;

    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;

      if (prop in obj) {
        return prop;
      }

      i++;
    }

    return undefined;
  }
  /* eslint-disable no-new-func, no-nested-ternary */


  var win;

  if (typeof window === "undefined") {
    // window is undefined in node.js
    win = {};
  } else {
    win = window;
  }

  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }

    var touchMap = {};
    var cssSupports = win.CSS && win.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      return touchMap[val] = cssSupports ? win.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }

  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in win);
  var SUPPORT_POINTER_EVENTS = prefixed(win, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];
  /**
   * @private
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */

  function each(obj, iterator, context) {
    var i;

    if (!obj) {
      return;
    }

    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;

      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  /**
   * @private
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */


  function boolOrFn(val, args) {
    if (typeof val === TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }

    return val;
  }
  /**
   * @private
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */


  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  /**
   * @private
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */


  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning

    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    } // pan-x OR pan-y


    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    } // manipulation


    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
  }
  /**
   * @private
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */


  var TouchAction = /*#__PURE__*/function () {
    function TouchAction(manager, value) {
      this.manager = manager;
      this.set(value);
    }
    /**
     * @private
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */


    var _proto = TouchAction.prototype;

    _proto.set = function set(value) {
      // find out the touch-action by the event handlers
      if (value === TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }

      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }

      this.actions = value.toLowerCase().trim();
    };
    /**
     * @private
     * just re-set the touchAction value
     */


    _proto.update = function update() {
      this.set(this.manager.options.touchAction);
    };
    /**
     * @private
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */


    _proto.compute = function compute() {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    };
    /**
     * @private
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */


    _proto.preventDefaults = function preventDefaults(input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection; // if the touch action did prevented once this session

      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }

      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

      if (hasNone) {
        // do not prevent defaults if this is a tap gesture
        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;

        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }

      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }

      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    };
    /**
     * @private
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */


    _proto.preventSrc = function preventSrc(srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    };

    return TouchAction;
  }();
  /**
   * @private
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */


  function hasParent(node, parent) {
    while (node) {
      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }
  /**
   * @private
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */


  function getCenter(pointers) {
    var pointersLength = pointers.length; // no need to loop when only one touch

    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }

    var x = 0;
    var y = 0;
    var i = 0;

    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }

    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  /**
   * @private
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */


  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;

    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }

    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  /**
   * @private
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */


  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]];
    var y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }
  /**
   * @private
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */


  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]];
    var y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  /**
   * @private
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */


  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }

  function computeDeltaXY(session, input) {
    var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
    // jscs throwing error on defalut destructured values and without defaults tests fail

    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  /**
   * @private
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */


  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  /**
   * @private
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */


  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  /**
   * @private
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */


  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  /**
   * @private
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */


  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input;
    var deltaTime = input.timeStamp - last.timeStamp;
    var velocity;
    var velocityX;
    var velocityY;
    var direction;

    if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  /**
  * @private
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */


  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length; // store the first input to calculate the distance and direction

    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    } // to compute scale and rotation we need to store the multiple touches


    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }

    var firstInput = session.firstInput,
        firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input); // find the correct target

    var target = manager.element;
    var srcEvent = input.srcEvent;
    var srcEventTarget;

    if (srcEvent.composedPath) {
      srcEventTarget = srcEvent.composedPath()[0];
    } else if (srcEvent.path) {
      srcEventTarget = srcEvent.path[0];
    } else {
      srcEventTarget = srcEvent.target;
    }

    if (hasParent(srcEventTarget, target)) {
      target = srcEventTarget;
    }

    input.target = target;
  }
  /**
   * @private
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */


  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
      manager.session = {};
    } // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'


    input.eventType = eventType; // compute scale, rotation etc

    computeInputData(manager, input); // emit secret event

    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  /**
   * @private
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */


  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  /**
   * @private
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }
  /**
   * @private
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }
  /**
   * @private
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */


  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  /**
   * @private
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */


  var Input = /*#__PURE__*/function () {
    function Input(manager, callback) {
      var self = this;
      this.manager = manager;
      this.callback = callback;
      this.element = manager.element;
      this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
      // so when disabled the input events are completely bypassed.

      this.domHandler = function (ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
          self.handler(ev);
        }
      };

      this.init();
    }
    /**
     * @private
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */


    var _proto = Input.prototype;

    _proto.handler = function handler() {};
    /**
     * @private
     * bind the events
     */


    _proto.init = function init() {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    };
    /**
     * @private
     * unbind the events
     */


    _proto.destroy = function destroy() {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    };

    return Input;
  }();
  /**
   * @private
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */


  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;

      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          // do not use === here, test fails
          return i;
        }

        i++;
      }

      return -1;
    }
  }

  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  }; // in IE10 the pointer types is defined as an enum

  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

  if (win.MSPointerEvent && !win.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }
  /**
   * @private
   * Pointer events input
   * @constructor
   * @extends Input
   */


  var PointerEventInput = /*#__PURE__*/function (_Input) {
    _inheritsLoose(PointerEventInput, _Input);

    function PointerEventInput() {
      var _this;

      var proto = PointerEventInput.prototype;
      proto.evEl = POINTER_ELEMENT_EVENTS;
      proto.evWin = POINTER_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.store = _this.manager.session.pointerEvents = [];
      return _this;
    }
    /**
     * @private
     * handle mouse events
     * @param {Object} ev
     */


    var _proto = PointerEventInput.prototype;

    _proto.handler = function handler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

      var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      } // it not found, so the pointer hasn't been down (so it's probably a hover)


      if (storeIndex < 0) {
        return;
      } // update the event in the store


      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });

      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    };

    return PointerEventInput;
  }(Input);
  /**
   * @private
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */


  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  /**
   * @private
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */


  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
      var val = key ? src[i][key] : src[i];

      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }

      values[i] = val;
      i++;
    }

    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function (a, b) {
          return a[key] > b[key];
        });
      }
    }

    return results;
  }

  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * @private
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */

  var TouchInput = /*#__PURE__*/function (_Input) {
    _inheritsLoose(TouchInput, _Input);

    function TouchInput() {
      var _this;

      TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.targetIds = {}; // this.evTarget = TOUCH_TARGET_EVENTS;

      return _this;
    }

    var _proto = TouchInput.prototype;

    _proto.handler = function handler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);

      if (!touches) {
        return;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    };

    return TouchInput;
  }(Input);

  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }

    var i;
    var targetTouches;
    var changedTouches = toArray(ev.changedTouches);
    var changedTargetTouches = [];
    var target = this.target; // get target touches from touches

    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    }); // collect touches

    if (type === INPUT_START) {
      i = 0;

      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    } // filter changed touches to only contain touches that exist in the collected target ids


    i = 0;

    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      } // cleanup removed touches


      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }

      i++;
    }

    if (!changedTargetTouches.length) {
      return;
    }

    return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }

  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
  /**
   * @private
   * Mouse events input
   * @constructor
   * @extends Input
   */

  var MouseInput = /*#__PURE__*/function (_Input) {
    _inheritsLoose(MouseInput, _Input);

    function MouseInput() {
      var _this;

      var proto = MouseInput.prototype;
      proto.evEl = MOUSE_ELEMENT_EVENTS;
      proto.evWin = MOUSE_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.pressed = false; // mousedown state

      return _this;
    }
    /**
     * @private
     * handle mouse events
     * @param {Object} ev
     */


    var _proto = MouseInput.prototype;

    _proto.handler = function handler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }

      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      } // mouse must be down


      if (!this.pressed) {
        return;
      }

      if (eventType & INPUT_END) {
        this.pressed = false;
      }

      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    };

    return MouseInput;
  }(Input);
  /**
   * @private
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */


  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;

  function setLastTouch(eventData) {
    var _eventData$changedPoi = eventData.changedPointers,
        touch = _eventData$changedPoi[0];

    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      var lts = this.lastTouches;
      this.lastTouches.push(lastTouch);

      var removeLastTouch = function removeLastTouch() {
        var i = lts.indexOf(lastTouch);

        if (i > -1) {
          lts.splice(i, 1);
        }
      };

      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }

  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }

  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX;
    var y = eventData.srcEvent.clientY;

    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x);
      var dy = Math.abs(y - t.y);

      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }

    return false;
  }

  var TouchMouseInput = /*#__PURE__*/function () {
    var TouchMouseInput = /*#__PURE__*/function (_Input) {
      _inheritsLoose(TouchMouseInput, _Input);

      function TouchMouseInput(_manager, callback) {
        var _this;

        _this = _Input.call(this, _manager, callback) || this;

        _this.handler = function (manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
          var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputData)) {
            return;
          }

          _this.callback(manager, inputEvent, inputData);
        };

        _this.touch = new TouchInput(_this.manager, _this.handler);
        _this.mouse = new MouseInput(_this.manager, _this.handler);
        _this.primaryTouch = null;
        _this.lastTouches = [];
        return _this;
      }
      /**
       * @private
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */


      var _proto = TouchMouseInput.prototype;
      /**
       * @private
       * remove the event listeners
       */

      _proto.destroy = function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
      };

      return TouchMouseInput;
    }(Input);

    return TouchMouseInput;
  }();
  /**
   * @private
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */


  function createInputInstance(manager) {
    var Type; // let inputClass = manager.options.inputClass;

    var inputClass = manager.options.inputClass;

    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }

    return new Type(manager, inputHandler);
  }
  /**
   * @private
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */


  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }

    return false;
  }

  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;
  /**
   * @private
   * get a unique id
   * @returns {number} uniqueId
   */

  var _uniqueId = 1;

  function uniqueId() {
    return _uniqueId++;
  }
  /**
   * @private
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */


  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;

    if (manager) {
      return manager.get(otherRecognizer);
    }

    return otherRecognizer;
  }
  /**
   * @private
   * get a usable string, used as event postfix
   * @param {constant} state
   * @returns {String} state
   */


  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }

    return '';
  }
  /**
   * @private
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */

  /**
   * @private
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */


  var Recognizer = /*#__PURE__*/function () {
    function Recognizer(options) {
      if (options === void 0) {
        options = {};
      }

      this.options = _extends({
        enable: true
      }, options);
      this.id = uniqueId();
      this.manager = null; // default is enable true

      this.state = STATE_POSSIBLE;
      this.simultaneous = {};
      this.requireFail = [];
    }
    /**
     * @private
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */


    var _proto = Recognizer.prototype;

    _proto.set = function set(options) {
      assign$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

      this.manager && this.manager.touchAction.update();
      return this;
    };
    /**
     * @private
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.recognizeWith = function recognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }

      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }

      return this;
    };
    /**
     * @private
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    };
    /**
     * @private
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.requireFailure = function requireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }

      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }

      return this;
    };
    /**
     * @private
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */


    _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);

      if (index > -1) {
        this.requireFail.splice(index, 1);
      }

      return this;
    };
    /**
     * @private
     * has require failures boolean
     * @returns {boolean}
     */


    _proto.hasRequireFailures = function hasRequireFailures() {
      return this.requireFail.length > 0;
    };
    /**
     * @private
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */


    _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    };
    /**
     * @private
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */


    _proto.emit = function emit(input) {
      var self = this;
      var state = this.state;

      function emit(event) {
        self.manager.emit(event, input);
      } // 'panstart' and 'panmove'


      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }

      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      } // panend and pancancel


      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    };
    /**
     * @private
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */


    _proto.tryEmit = function tryEmit(input) {
      if (this.canEmit()) {
        return this.emit(input);
      } // it's failing anyway


      this.state = STATE_FAILED;
    };
    /**
     * @private
     * can we emit?
     * @returns {boolean}
     */


    _proto.canEmit = function canEmit() {
      var i = 0;

      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }

        i++;
      }

      return true;
    };
    /**
     * @private
     * update the recognizer
     * @param {Object} inputData
     */


    _proto.recognize = function recognize(inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign$1({}, inputData); // is is enabled and allow recognizing?

      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      } // reset when we've reached the end


      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }

      this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
      // so trigger an event

      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    };
    /**
     * @private
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {constant} STATE
     */

    /* jshint ignore:start */


    _proto.process = function process(inputData) {};
    /* jshint ignore:end */

    /**
     * @private
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */


    _proto.getTouchAction = function getTouchAction() {};
    /**
     * @private
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */


    _proto.reset = function reset() {};

    return Recognizer;
  }();
  /**
   * @private
   * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */


  var TapRecognizer = /*#__PURE__*/function (_Recognizer) {
    _inheritsLoose(TapRecognizer, _Recognizer);

    function TapRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _Recognizer.call(this, _extends({
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
      }, options)) || this; // previous time and center,
      // used for tap counting

      _this.pTime = false;
      _this.pCenter = false;
      _this._timer = null;
      _this._input = null;
      _this.count = 0;
      return _this;
    }

    var _proto = TapRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_MANIPULATION];
    };

    _proto.process = function process(input) {
      var _this2 = this;

      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();

      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      } // we only allow little movement
      // and we've reached an end event, so a tap is possible


      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType !== INPUT_END) {
          return this.failTimeout();
        }

        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;

        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }

        this._input = input; // if tap count matches we have recognized it,
        // else it has began recognizing...

        var tapCount = this.count % options.taps;

        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeout(function () {
              _this2.state = STATE_RECOGNIZED;

              _this2.tryEmit();
            }, options.interval);
            return STATE_BEGAN;
          }
        }
      }

      return STATE_FAILED;
    };

    _proto.failTimeout = function failTimeout() {
      var _this3 = this;

      this._timer = setTimeout(function () {
        _this3.state = STATE_FAILED;
      }, this.options.interval);
      return STATE_FAILED;
    };

    _proto.reset = function reset() {
      clearTimeout(this._timer);
    };

    _proto.emit = function emit() {
      if (this.state === STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    };

    return TapRecognizer;
  }(Recognizer);
  /**
   * @private
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */


  var AttrRecognizer = /*#__PURE__*/function (_Recognizer) {
    _inheritsLoose(AttrRecognizer, _Recognizer);

    function AttrRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _Recognizer.call(this, _extends({
        pointers: 1
      }, options)) || this;
    }
    /**
     * @private
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */


    var _proto = AttrRecognizer.prototype;

    _proto.attrTest = function attrTest(input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    };
    /**
     * @private
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */


    _proto.process = function process(input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }

        return state | STATE_CHANGED;
      }

      return STATE_FAILED;
    };

    return AttrRecognizer;
  }(Recognizer);
  /**
   * @private
   * direction cons to string
   * @param {constant} direction
   * @returns {String}
   */


  function directionStr(direction) {
    if (direction === DIRECTION_DOWN) {
      return 'down';
    } else if (direction === DIRECTION_UP) {
      return 'up';
    } else if (direction === DIRECTION_LEFT) {
      return 'left';
    } else if (direction === DIRECTION_RIGHT) {
      return 'right';
    }

    return '';
  }
  /**
   * @private
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */


  var PanRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
    _inheritsLoose(PanRecognizer, _AttrRecognizer);

    function PanRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _AttrRecognizer.call(this, _extends({
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
      }, options)) || this;
      _this.pX = null;
      _this.pY = null;
      return _this;
    }

    var _proto = PanRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      var direction = this.options.direction;
      var actions = [];

      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }

      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }

      return actions;
    };

    _proto.directionTest = function directionTest(input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY; // lock to axis?

      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x !== this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y !== this.pY;
          distance = Math.abs(input.deltaY);
        }
      }

      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    };

    _proto.attrTest = function attrTest(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
      this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    };

    _proto.emit = function emit(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);

      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }

      _AttrRecognizer.prototype.emit.call(this, input);
    };

    return PanRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */


  var SwipeRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
    _inheritsLoose(SwipeRecognizer, _AttrRecognizer);

    function SwipeRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends({
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
      }, options)) || this;
    }

    var _proto = SwipeRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    };

    _proto.attrTest = function attrTest(input) {
      var direction = this.options.direction;
      var velocity;

      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }

      return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    };

    _proto.emit = function emit(input) {
      var direction = directionStr(input.offsetDirection);

      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }

      this.manager.emit(this.options.event, input);
    };

    return SwipeRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */


  var PinchRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
    _inheritsLoose(PinchRecognizer, _AttrRecognizer);

    function PinchRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends({
        event: 'pinch',
        threshold: 0,
        pointers: 2
      }, options)) || this;
    }

    var _proto = PinchRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    };

    _proto.attrTest = function attrTest(input) {
      return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    };

    _proto.emit = function emit(input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }

      _AttrRecognizer.prototype.emit.call(this, input);
    };

    return PinchRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */


  var RotateRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
    _inheritsLoose(RotateRecognizer, _AttrRecognizer);

    function RotateRecognizer(options) {
      if (options === void 0) {
        options = {};
      }

      return _AttrRecognizer.call(this, _extends({
        event: 'rotate',
        threshold: 0,
        pointers: 2
      }, options)) || this;
    }

    var _proto = RotateRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    };

    _proto.attrTest = function attrTest(input) {
      return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    };

    return RotateRecognizer;
  }(AttrRecognizer);
  /**
   * @private
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */


  var PressRecognizer = /*#__PURE__*/function (_Recognizer) {
    _inheritsLoose(PressRecognizer, _Recognizer);

    function PressRecognizer(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _Recognizer.call(this, _extends({
        event: 'press',
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
      }, options)) || this;
      _this._timer = null;
      _this._input = null;
      return _this;
    }

    var _proto = PressRecognizer.prototype;

    _proto.getTouchAction = function getTouchAction() {
      return [TOUCH_ACTION_AUTO];
    };

    _proto.process = function process(input) {
      var _this2 = this;

      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input; // we only allow little movement
      // and we've reached an end event, so a tap is possible

      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeout(function () {
          _this2.state = STATE_RECOGNIZED;

          _this2.tryEmit();
        }, options.time);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }

      return STATE_FAILED;
    };

    _proto.reset = function reset() {
      clearTimeout(this._timer);
    };

    _proto.emit = function emit(input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }

      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + "up", input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    };

    return PressRecognizer;
  }(Recognizer);

  var defaults = {
    /**
     * @private
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * @private
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @private
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * @private
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * @private
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * @private
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * @private
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: "none",

      /**
       * @private
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: "none",

      /**
       * @private
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: "none",

      /**
       * @private
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: "none",

      /**
       * @private
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: "none",

      /**
       * @private
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  /**
   * @private
   * Default recognizer setup when calling `Hammer()`
   * When creating a new Manager these will be skipped.
   * This is separated with other defaults because of tree-shaking.
   * @type {Array}
   */

  var preset = [[RotateRecognizer, {
    enable: false
  }], [PinchRecognizer, {
    enable: false
  }, ['rotate']], [SwipeRecognizer, {
    direction: DIRECTION_HORIZONTAL
  }], [PanRecognizer, {
    direction: DIRECTION_HORIZONTAL
  }, ['swipe']], [TapRecognizer], [TapRecognizer, {
    event: 'doubletap',
    taps: 2
  }, ['tap']], [PressRecognizer]];
  var STOP = 1;
  var FORCED_STOP = 2;
  /**
   * @private
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */

  function toggleCssProps(manager, add) {
    var element = manager.element;

    if (!element.style) {
      return;
    }

    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);

      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || "";
      }
    });

    if (!add) {
      manager.oldCssProps = {};
    }
  }
  /**
   * @private
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */


  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent("Event");
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  /**
  * @private
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */


  var Manager = /*#__PURE__*/function () {
    function Manager(element, options) {
      var _this = this;

      this.options = assign$1({}, defaults, options || {});
      this.options.inputTarget = this.options.inputTarget || element;
      this.handlers = {};
      this.session = {};
      this.recognizers = [];
      this.oldCssProps = {};
      this.element = element;
      this.input = createInputInstance(this);
      this.touchAction = new TouchAction(this, this.options.touchAction);
      toggleCssProps(this, true);
      each(this.options.recognizers, function (item) {
        var recognizer = _this.add(new item[0](item[1]));

        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
      }, this);
    }
    /**
     * @private
     * set options
     * @param {Object} options
     * @returns {Manager}
     */


    var _proto = Manager.prototype;

    _proto.set = function set(options) {
      assign$1(this.options, options); // Options that need a little more setup

      if (options.touchAction) {
        this.touchAction.update();
      }

      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }

      return this;
    };
    /**
     * @private
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */


    _proto.stop = function stop(force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    };
    /**
     * @private
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */


    _proto.recognize = function recognize(inputData) {
      var session = this.session;

      if (session.stopped) {
        return;
      } // run the touch-action polyfill


      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`

      var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
      // or when we're in a new session

      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        session.curRecognizer = null;
        curRecognizer = null;
      }

      var i = 0;

      while (i < recognizers.length) {
        recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.

        if (session.stopped !== FORCED_STOP && ( // 1
        !curRecognizer || recognizer === curRecognizer || // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer


        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          session.curRecognizer = recognizer;
          curRecognizer = recognizer;
        }

        i++;
      }
    };
    /**
     * @private
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */


    _proto.get = function get(recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }

      var recognizers = this.recognizers;

      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event === recognizer) {
          return recognizers[i];
        }
      }

      return null;
    };
    /**
     * @private add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */


    _proto.add = function add(recognizer) {
      if (invokeArrayArg(recognizer, "add", this)) {
        return this;
      } // remove existing


      var existing = this.get(recognizer.options.event);

      if (existing) {
        this.remove(existing);
      }

      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    };
    /**
     * @private
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */


    _proto.remove = function remove(recognizer) {
      if (invokeArrayArg(recognizer, "remove", this)) {
        return this;
      }

      var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, targetRecognizer);

        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }

      return this;
    };
    /**
     * @private
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */


    _proto.on = function on(events, handler) {
      if (events === undefined || handler === undefined) {
        return this;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    };
    /**
     * @private unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */


    _proto.off = function off(events, handler) {
      if (events === undefined) {
        return this;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    };
    /**
     * @private emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */


    _proto.emit = function emit(event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      } // no handlers, so skip it all


      var handlers = this.handlers[event] && this.handlers[event].slice();

      if (!handlers || !handlers.length) {
        return;
      }

      data.type = event;

      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };

      var i = 0;

      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    };
    /**
     * @private
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */


    _proto.destroy = function destroy() {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    };

    return Manager;
  }();

  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * @private
   * Touch events input
   * @constructor
   * @extends Input
   */

  var SingleTouchInput = /*#__PURE__*/function (_Input) {
    _inheritsLoose(SingleTouchInput, _Input);

    function SingleTouchInput() {
      var _this;

      var proto = SingleTouchInput.prototype;
      proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
      proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
      _this = _Input.apply(this, arguments) || this;
      _this.started = false;
      return _this;
    }

    var _proto = SingleTouchInput.prototype;

    _proto.handler = function handler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

      if (type === INPUT_START) {
        this.started = true;
      }

      if (!this.started) {
        return;
      }

      var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    };

    return SingleTouchInput;
  }(Input);

  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
  }
  /**
   * @private
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */


  function deprecate(method, name, message) {
    var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
    return function () {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);

      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }

      return method.apply(this, arguments);
    };
  }
  /**
   * @private
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */


  var extend = deprecate(function (dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;

    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }

      i++;
    }

    return dest;
  }, 'extend', 'Use `assign`.');
  /**
   * @private
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */

  var merge$1 = deprecate(function (dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');
  /**
   * @private
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */

  function inherit(child, base, properties) {
    var baseP = base.prototype;
    var childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
      assign$1(childP, properties);
    }
  }
  /**
   * @private
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */


  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }
  /**
   * @private
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */


  var Hammer = /*#__PURE__*/function () {
    var Hammer =
    /**
      * @private
      * @const {string}
      */
    function Hammer(element, options) {
      if (options === void 0) {
        options = {};
      }

      return new Manager(element, _extends({
        recognizers: preset.concat()
      }, options));
    };

    Hammer.VERSION = "2.0.17-rc";
    Hammer.DIRECTION_ALL = DIRECTION_ALL;
    Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
    Hammer.DIRECTION_LEFT = DIRECTION_LEFT;
    Hammer.DIRECTION_RIGHT = DIRECTION_RIGHT;
    Hammer.DIRECTION_UP = DIRECTION_UP;
    Hammer.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
    Hammer.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
    Hammer.DIRECTION_NONE = DIRECTION_NONE;
    Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
    Hammer.INPUT_START = INPUT_START;
    Hammer.INPUT_MOVE = INPUT_MOVE;
    Hammer.INPUT_END = INPUT_END;
    Hammer.INPUT_CANCEL = INPUT_CANCEL;
    Hammer.STATE_POSSIBLE = STATE_POSSIBLE;
    Hammer.STATE_BEGAN = STATE_BEGAN;
    Hammer.STATE_CHANGED = STATE_CHANGED;
    Hammer.STATE_ENDED = STATE_ENDED;
    Hammer.STATE_RECOGNIZED = STATE_RECOGNIZED;
    Hammer.STATE_CANCELLED = STATE_CANCELLED;
    Hammer.STATE_FAILED = STATE_FAILED;
    Hammer.Manager = Manager;
    Hammer.Input = Input;
    Hammer.TouchAction = TouchAction;
    Hammer.TouchInput = TouchInput;
    Hammer.MouseInput = MouseInput;
    Hammer.PointerEventInput = PointerEventInput;
    Hammer.TouchMouseInput = TouchMouseInput;
    Hammer.SingleTouchInput = SingleTouchInput;
    Hammer.Recognizer = Recognizer;
    Hammer.AttrRecognizer = AttrRecognizer;
    Hammer.Tap = TapRecognizer;
    Hammer.Pan = PanRecognizer;
    Hammer.Swipe = SwipeRecognizer;
    Hammer.Pinch = PinchRecognizer;
    Hammer.Rotate = RotateRecognizer;
    Hammer.Press = PressRecognizer;
    Hammer.on = addEventListeners;
    Hammer.off = removeEventListeners;
    Hammer.each = each;
    Hammer.merge = merge$1;
    Hammer.extend = extend;
    Hammer.bindFn = bindFn;
    Hammer.assign = assign$1;
    Hammer.inherit = inherit;
    Hammer.bindFn = bindFn;
    Hammer.prefixed = prefixed;
    Hammer.toArray = toArray;
    Hammer.inArray = inArray;
    Hammer.uniqueArray = uniqueArray;
    Hammer.splitStr = splitStr;
    Hammer.boolOrFn = boolOrFn;
    Hammer.hasParent = hasParent;
    Hammer.addEventListeners = addEventListeners;
    Hammer.removeEventListeners = removeEventListeners;
    Hammer.defaults = assign$1({}, defaults, {
      preset: preset
    });
    return Hammer;
  }(); //  style loader but by script tag, not by the loader.
  var RealHammer = Hammer;

  function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$1(o) || o["@@iterator"]; if (!it) { if (isArray$1(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$3(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = slice(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

  function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  /**
   * Use this symbol to delete properies in deepObjectAssign.
   */

  var DELETE = symbol("DELETE");
  /**
   * Pure version of deepObjectAssign, it doesn't modify any of it's arguments.
   *
   * @param base - The base object that fullfils the whole interface T.
   * @param updates - Updates that may change or delete props.
   * @returns A brand new instance with all the supplied objects deeply merged.
   */


  function pureDeepObjectAssign(base) {
    var _context;

    for (var _len = arguments.length, updates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      updates[_key - 1] = arguments[_key];
    }

    return deepObjectAssign.apply(void 0, concat$1(_context = [{}, base]).call(_context, updates));
  }
  /**
   * Deep version of object assign with additional deleting by the DELETE symbol.
   *
   * @param values - Objects to be deeply merged.
   * @returns The first object from values.
   */


  function deepObjectAssign() {
    var merged = deepObjectAssignNonentry.apply(void 0, arguments);
    stripDelete(merged);
    return merged;
  }
  /**
   * Deep version of object assign with additional deleting by the DELETE symbol.
   *
   * @remarks
   * This doesn't strip the DELETE symbols so they may end up in the final object.
   * @param values - Objects to be deeply merged.
   * @returns The first object from values.
   */


  function deepObjectAssignNonentry() {
    for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    if (values.length < 2) {
      return values[0];
    } else if (values.length > 2) {
      var _context2;

      return deepObjectAssignNonentry.apply(void 0, concat$1(_context2 = [deepObjectAssign(values[0], values[1])]).call(_context2, _toConsumableArray(slice(values).call(values, 2))));
    }

    var a = values[0];
    var b = values[1];

    var _iterator = _createForOfIteratorHelper$3(ownKeys$1(b)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;else if (b[prop] === DELETE) {
          delete a[prop];
        } else if (a[prop] !== null && b[prop] !== null && _typeof(a[prop]) === "object" && _typeof(b[prop]) === "object" && !isArray$1(a[prop]) && !isArray$1(b[prop])) {
          a[prop] = deepObjectAssignNonentry(a[prop], b[prop]);
        } else {
          a[prop] = clone(b[prop]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return a;
  }
  /**
   * Deep clone given object or array. In case of primitive simply return.
   *
   * @param a - Anything.
   * @returns Deep cloned object/array or unchanged a.
   */


  function clone(a) {
    if (isArray$1(a)) {
      return map$3(a).call(a, function (value) {
        return clone(value);
      });
    } else if (_typeof(a) === "object" && a !== null) {
      return deepObjectAssignNonentry({}, a);
    } else {
      return a;
    }
  }
  /**
   * Strip DELETE from given object.
   *
   * @param a - Object which may contain DELETE but won't after this is executed.
   */


  function stripDelete(a) {
    for (var _i = 0, _Object$keys = keys$4(a); _i < _Object$keys.length; _i++) {
      var prop = _Object$keys[_i];

      if (a[prop] === DELETE) {
        delete a[prop];
      } else if (_typeof(a[prop]) === "object" && a[prop] !== null) {
        stripDelete(a[prop]);
      }
    }
  }
  /**
   * Setup a mock hammer.js object, for unit testing.
   *
   * Inspiration: https://github.com/uber/deck.gl/pull/658
   *
   * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
   */


  function hammerMock() {
    var noop = function noop() {};

    return {
      on: noop,
      off: noop,
      destroy: noop,
      emit: noop,
      get: function get() {
        return {
          set: noop
        };
      }
    };
  }

  var Hammer$1 = typeof window !== "undefined" ? window.Hammer || RealHammer : function () {
    // hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
    return hammerMock();
  };
  /**
   * Turn an element into an clickToUse element.
   * When not active, the element has a transparent overlay. When the overlay is
   * clicked, the mode is changed to active.
   * When active, the element is displayed with a blue border around it, and
   * the interactive contents of the element can be used. When clicked outside
   * the element, the elements mode is changed to inactive.
   *
   * @param {Element} container
   * @class Activator
   */

  function Activator$1(container) {
    var _this = this,
        _context3;

    this._cleanupQueue = [];
    this.active = false;
    this._dom = {
      container: container,
      overlay: document.createElement("div")
    };

    this._dom.overlay.classList.add("vis-overlay");

    this._dom.container.appendChild(this._dom.overlay);

    this._cleanupQueue.push(function () {
      _this._dom.overlay.parentNode.removeChild(_this._dom.overlay);
    });

    var hammer = Hammer$1(this._dom.overlay);
    hammer.on("tap", bind$6(_context3 = this._onTapOverlay).call(_context3, this));

    this._cleanupQueue.push(function () {
      hammer.destroy(); // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
      // from memory)
    }); // block all touch events (except tap)


    var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

    forEach$1(events).call(events, function (event) {
      hammer.on(event, function (event) {
        event.srcEvent.stopPropagation();
      });
    }); // attach a click event to the window, in order to deactivate when clicking outside the timeline


    if (document && document.body) {
      this._onClick = function (event) {
        if (!_hasParent(event.target, container)) {
          _this.deactivate();
        }
      };

      document.body.addEventListener("click", this._onClick);

      this._cleanupQueue.push(function () {
        document.body.removeEventListener("click", _this._onClick);
      });
    } // prepare escape key listener for deactivating when active


    this._escListener = function (event) {
      if ("key" in event ? event.key === "Escape" : event.keyCode === 27
      /* the keyCode is for IE11 */
      ) {
        _this.deactivate();
      }
    };
  } // turn into an event emitter


  Emitter(Activator$1.prototype); // The currently active activator

  Activator$1.current = null;
  /**
   * Destroy the activator. Cleans up all created DOM and event listeners
   */

  Activator$1.prototype.destroy = function () {
    var _context4, _context5;

    this.deactivate();

    var _iterator2 = _createForOfIteratorHelper$3(reverse(_context4 = splice(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var callback = _step2.value;
        callback();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  /**
   * Activate the element
   * Overlay is hidden, element is decorated with a blue shadow border
   */


  Activator$1.prototype.activate = function () {
    // we allow only one active activator at a time
    if (Activator$1.current) {
      Activator$1.current.deactivate();
    }

    Activator$1.current = this;
    this.active = true;
    this._dom.overlay.style.display = "none";

    this._dom.container.classList.add("vis-active");

    this.emit("change");
    this.emit("activate"); // ugly hack: bind ESC after emitting the events, as the Network rebinds all
    // keyboard events on a 'change' event

    document.body.addEventListener("keydown", this._escListener);
  };
  /**
   * Deactivate the element
   * Overlay is displayed on top of the element
   */


  Activator$1.prototype.deactivate = function () {
    this.active = false;
    this._dom.overlay.style.display = "block";

    this._dom.container.classList.remove("vis-active");

    document.body.removeEventListener("keydown", this._escListener);
    this.emit("change");
    this.emit("deactivate");
  };
  /**
   * Handle a tap event: activate the container
   *
   * @param {Event}  event   The event
   * @private
   */


  Activator$1.prototype._onTapOverlay = function (event) {
    // activate the container
    this.activate();
    event.srcEvent.stopPropagation();
  };
  /**
   * Test whether the element has the requested parent element somewhere in
   * its chain of parent nodes.
   *
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   * @returns {boolean} Returns true when the parent is found somewhere in the
   *                    chain of parent nodes.
   * @private
   */


  function _hasParent(element, parent) {
    while (element) {
      if (element === parent) {
        return true;
      }

      element = element.parentNode;
    }

    return false;
  } // utility functions

  var global$4 = global$M;
  var isConstructor = isConstructor$4;
  var tryToString$1 = tryToString$4;
  var TypeError$3 = global$4.TypeError; // `Assert: IsConstructor(argument) is true`

  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw TypeError$3(tryToString$1(argument) + ' is not a constructor');
  };

  var $$5 = _export;
  var getBuiltIn$1 = getBuiltIn$9;
  var apply = functionApply;
  var bind$2 = functionBind;
  var aConstructor = aConstructor$1;
  var anObject$1 = anObject$b;
  var isObject$3 = isObject$f;
  var create$4 = objectCreate;
  var fails$5 = fails$r;
  var nativeConstruct = getBuiltIn$1('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$1 = [].push; // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = fails$5(function () {
    function F() {
      /* empty */
    }

    return !(nativeConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$5(function () {
    nativeConstruct(function () {
      /* empty */
    });
  });
  var FORCED$1 = NEW_TARGET_BUG || ARGS_BUG;
  $$5({
    target: 'Reflect',
    stat: true,
    forced: FORCED$1,
    sham: FORCED$1
  }, {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      aConstructor(Target);
      anObject$1(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        apply(push$1, $args, args);
        return new (apply(bind$2, Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = create$4(isObject$3(proto) ? proto : ObjectPrototype);
      var result = apply(Target, instance, args);
      return isObject$3(result) ? result : instance;
    }
  });

  var path$3 = path$q;
  var construct$2 = path$3.Reflect.construct;

  var parent$h = construct$2;
  var construct$1 = parent$h;

  var construct = construct$1;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var parent$g = create$6;
  var create$3 = parent$g;

  var parent$f = create$3;
  var create$2 = parent$f;

  var create$1 = create$2;

  var $$4 = _export;
  var setPrototypeOf$5 = objectSetPrototypeOf; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof

  $$4({
    target: 'Object',
    stat: true
  }, {
    setPrototypeOf: setPrototypeOf$5
  });

  var path$2 = path$q;
  var setPrototypeOf$4 = path$2.Object.setPrototypeOf;

  var parent$e = setPrototypeOf$4;
  var setPrototypeOf$3 = parent$e;

  var parent$d = setPrototypeOf$3;
  var setPrototypeOf$2 = parent$d;

  var parent$c = setPrototypeOf$2;
  var setPrototypeOf$1 = parent$c;

  var setPrototypeOf = setPrototypeOf$1;

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = create$1(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });

    defineProperty$7(subClass, "prototype", {
      writable: false
    });

    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  var parent$b = getPrototypeOf$3;
  var getPrototypeOf$2 = parent$b;

  var parent$a = getPrototypeOf$2;
  var getPrototypeOf$1 = parent$a;

  var getPrototypeOf = getPrototypeOf$1;

  function _getPrototypeOf(o) {
    _getPrototypeOf = setPrototypeOf ? getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var runtime = {exports: {}};

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function (obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function (skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function (exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function (record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  var regenerator = runtime.exports;

  var internalMetadata = {exports: {}};

  var fails$4 = fails$r;
  var arrayBufferNonExtensible = fails$4(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe

      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
        value: 8
      });
    }
  });

  var fails$3 = fails$r;
  var isObject$2 = isObject$f;
  var classof$3 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible; // eslint-disable-next-line es/no-object-isextensible -- safe

  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES = fails$3(function () {
    $isExtensible(1);
  }); // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible

  var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
    if (!isObject$2(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$2 = fails$r;
  var freezing = !fails$2(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$3 = _export;
  var uncurryThis$1 = functionUncurryThis;
  var hiddenKeys = hiddenKeys$6;
  var isObject$1 = isObject$f;
  var hasOwn$3 = hasOwnProperty_1;
  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid = uid$4;
  var FREEZING = freezing;
  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$2(it, METADATA, {
      value: {
        objectID: 'O' + id++,
        // object ID
        weakData: {} // weak collections IDs

      }
    });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!hasOwn$3(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMetadata(it); // return object ID
    }

    return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn$3(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMetadata(it); // return the store of weak collections IDs
    }

    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling


  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$3(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () {
      /* empty */
    };

    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$1([].splice);
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key

    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);

        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }

        return result;
      };

      $$3({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };
  hiddenKeys[METADATA] = true;

  var global$3 = global$M;
  var bind$1 = functionBindContext;
  var call = functionCall;
  var anObject = anObject$b;
  var tryToString = tryToString$4;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike$1 = lengthOfArrayLike$d;
  var isPrototypeOf$6 = objectIsPrototypeOf;
  var getIterator$5 = getIterator$7;
  var getIteratorMethod = getIteratorMethod$8;
  var iteratorClose = iteratorClose$2;
  var TypeError$2 = global$3.TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$1(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw TypeError$2(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
        }

        return new Result(false);
      }

      iterator = getIterator$5(iterable, iterFn);
    }

    next = iterator.next;

    while (!(step = call(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }

      if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
    }

    return new Result(false);
  };

  var global$2 = global$M;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var TypeError$1 = global$2.TypeError;

  var anInstance$2 = function (it, Prototype) {
    if (isPrototypeOf$5(Prototype, it)) return it;
    throw TypeError$1('Incorrect invocation');
  };

  var $$2 = _export;
  var global$1 = global$M;
  var InternalMetadataModule = internalMetadata.exports;
  var fails$1 = fails$r;
  var createNonEnumerableProperty = createNonEnumerableProperty$6;
  var iterate$1 = iterate$2;
  var anInstance$1 = anInstance$2;
  var isCallable = isCallable$h;
  var isObject = isObject$f;
  var setToStringTag = setToStringTag$5;
  var defineProperty$1 = objectDefineProperty.f;
  var forEach = arrayIteration.forEach;
  var DESCRIPTORS$2 = descriptors;
  var InternalStateModule$1 = internalState;
  var setInternalState$1 = InternalStateModule$1.set;
  var internalStateGetterFor$1 = InternalStateModule$1.getterFor;

  var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var exported = {};
    var Constructor;

    if (!DESCRIPTORS$2 || !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$1(function () {
      new NativeConstructor().entries().next();
    }))) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else {
      Constructor = wrapper(function (target, iterable) {
        setInternalState$1(anInstance$1(target, Prototype), {
          type: CONSTRUCTOR_NAME,
          collection: new NativeConstructor()
        });
        if (iterable != undefined) iterate$1(iterable, target[ADDER], {
          that: target,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';

        if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
          createNonEnumerableProperty(Prototype, KEY, function (a, b) {
            var collection = getInternalState(this).collection;
            if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
            var result = collection[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
        }
      });
      IS_WEAK || defineProperty$1(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).collection.size;
        }
      });
    }

    setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
    exported[CONSTRUCTOR_NAME] = Constructor;
    $$2({
      global: true,
      forced: true
    }, exported);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var redefine = redefine$4;

  var redefineAll$1 = function (target, src, options) {
    for (var key in src) {
      if (options && options.unsafe && target[key]) target[key] = src[key];else redefine(target, key, src[key], options);
    }

    return target;
  };

  var getBuiltIn = getBuiltIn$9;
  var definePropertyModule = objectDefineProperty;
  var wellKnownSymbol = wellKnownSymbol$j;
  var DESCRIPTORS$1 = descriptors;
  var SPECIES = wellKnownSymbol('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;

    if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var defineProperty = objectDefineProperty.f;
  var create = objectCreate;
  var redefineAll = redefineAll$1;
  var bind = functionBindContext;
  var anInstance = anInstance$2;
  var iterate = iterate$2;
  var defineIterator = defineIterator$3;
  var setSpecies = setSpecies$1;
  var DESCRIPTORS = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule = internalState;
  var setInternalState = InternalStateModule.set;
  var internalStateGetterFor = InternalStateModule.getterFor;
  var collectionStrong$2 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          index: create(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (DESCRIPTORS) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS) state.size--;else that.size--;
          }

          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS) defineProperty(Prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) entry = entry.previous; // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species

      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  var collection$1 = collection$2;
  var collectionStrong$1 = collectionStrong$2; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects

  collection$1('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);

  var path$1 = path$q;
  var map$2 = path$1.Map;

  var parent$9 = map$2;
  var map$1 = parent$9;

  var map = map$1;

  var $$1 = _export;
  var $some = arrayIteration.some;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('some'); // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some

  $$1({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1
  }, {
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$4 = entryVirtual$k;
  var some$3 = entryVirtual$4('Array').some;

  var isPrototypeOf$4 = objectIsPrototypeOf;
  var method$4 = some$3;
  var ArrayPrototype$4 = Array.prototype;

  var some$2 = function (it) {
    var own = it.some;
    return it === ArrayPrototype$4 || isPrototypeOf$4(ArrayPrototype$4, it) && own === ArrayPrototype$4.some ? method$4 : own;
  };

  var parent$8 = some$2;
  var some$1 = parent$8;

  var some = some$1;

  var entryVirtual$3 = entryVirtual$k;
  var keys$3 = entryVirtual$3('Array').keys;

  var parent$7 = keys$3;
  var keys$2 = parent$7;

  var classof$2 = classof$c;
  var hasOwn$2 = hasOwnProperty_1;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var method$3 = keys$2;
  var ArrayPrototype$3 = Array.prototype;
  var DOMIterables$2 = {
    DOMTokenList: true,
    NodeList: true
  };

  var keys$1 = function (it) {
    var own = it.keys;
    return it === ArrayPrototype$3 || isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.keys || hasOwn$2(DOMIterables$2, classof$2(it)) ? method$3 : own;
  };

  var keys = keys$1;

  var arraySlice = arraySliceSimple;
  var floor = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];

      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }

      if (j !== i++) array[j] = element;
    }

    return array;
  };

  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }

    return array;
  };

  var arraySort = mergeSort;

  var userAgent$1 = engineUserAgent;
  var firefox = userAgent$1.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;
  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];

  var $ = _export;
  var uncurryThis = functionUncurryThis;
  var aCallable = aCallable$7;
  var toObject = toObject$e;
  var lengthOfArrayLike = lengthOfArrayLike$d;
  var toString = toString$7;
  var fails = fails$r;
  var internalSort = arraySort;
  var arrayMethodIsStrict = arrayMethodIsStrict$5;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var test = [];
  var un$Sort = uncurryThis(test.sort);
  var push = uncurryThis(test.push); // IE8-

  var FAILS_ON_UNDEFINED = fails(function () {
    test.sort(undefined);
  }); // V8 bug

  var FAILS_ON_NULL = fails(function () {
    test.sort(null);
  }); // Old WebKit

  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT = !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;

        case 68:
        case 71:
          value = 4;
          break;

        default:
          value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }

    test.sort(function (a, b) {
      return b.v - a.v;
    });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });
  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString(x) > toString(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort


  $({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);
      var array = toObject(this);
      if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) array[index] = items[index++];

      while (index < arrayLength) delete array[index++];

      return array;
    }
  });

  var entryVirtual$2 = entryVirtual$k;
  var sort$3 = entryVirtual$2('Array').sort;

  var isPrototypeOf$2 = objectIsPrototypeOf;
  var method$2 = sort$3;
  var ArrayPrototype$2 = Array.prototype;

  var sort$2 = function (it) {
    var own = it.sort;
    return it === ArrayPrototype$2 || isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.sort ? method$2 : own;
  };

  var parent$6 = sort$2;
  var sort$1 = parent$6;

  var sort = sort$1;

  var entryVirtual$1 = entryVirtual$k;
  var values$3 = entryVirtual$1('Array').values;

  var parent$5 = values$3;
  var values$2 = parent$5;

  var classof$1 = classof$c;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var method$1 = values$2;
  var ArrayPrototype$1 = Array.prototype;
  var DOMIterables$1 = {
    DOMTokenList: true,
    NodeList: true
  };

  var values$1 = function (it) {
    var own = it.values;
    return it === ArrayPrototype$1 || isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.values || hasOwn$1(DOMIterables$1, classof$1(it)) ? method$1 : own;
  };

  var values = values$1;

  var iterator = iterator$4;

  var entryVirtual = entryVirtual$k;
  var entries$3 = entryVirtual('Array').entries;

  var parent$4 = entries$3;
  var entries$2 = parent$4;

  var classof = classof$c;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var method = entries$2;
  var ArrayPrototype = Array.prototype;
  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
  };

  var entries$1 = function (it) {
    var own = it.entries;
    return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries || hasOwn(DOMIterables, classof(it)) ? method : own;
  };

  var entries = entries$1;

  // Unique ID creation requires a high quality random # generator. In the browser we therefore
  // require the crypto API and do not support built-in fallback to lower quality random number
  // generators (like Math.random()).
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
      // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
      // find the complete implementation of crypto (msCrypto) on IE11.
      getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }
    }

    return getRandomValues(rnds8);
  }

  var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */

  var byteToHex = [];

  for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }

  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields

    if (!validate(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }

    return uuid;
  }

  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return stringify(rnds);
  }

  /**
   * Determine whether a value can be used as an id.
   *
   * @param value - Input value of unknown type.
   * @returns True if the value is valid id, false otherwise.
   */
  function isId(value) {
    return typeof value === "string" || typeof value === "number";
  }

  /**
   * A queue.
   *
   * @typeParam T - The type of method names to be replaced by queued versions.
   */
  var Queue = /*#__PURE__*/function () {
    /** Delay in milliseconds. If defined the queue will be periodically flushed. */

    /** Maximum number of entries in the queue before it will be flushed. */

    /**
     * Construct a new Queue.
     *
     * @param options - Queue configuration.
     */
    function Queue(options) {
      _classCallCheck(this, Queue);

      _defineProperty(this, "delay", void 0);

      _defineProperty(this, "max", void 0);

      _defineProperty(this, "_queue", []);

      _defineProperty(this, "_timeout", null);

      _defineProperty(this, "_extended", null);

      // options
      this.delay = null;
      this.max = Infinity;
      this.setOptions(options);
    }
    /**
     * Update the configuration of the queue.
     *
     * @param options - Queue configuration.
     */


    _createClass(Queue, [{
      key: "setOptions",
      value: function setOptions(options) {
        if (options && typeof options.delay !== "undefined") {
          this.delay = options.delay;
        }

        if (options && typeof options.max !== "undefined") {
          this.max = options.max;
        }

        this._flushIfNeeded();
      }
      /**
       * Extend an object with queuing functionality.
       * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
       *
       * @param object - The object to be extended.
       * @param options - Additional options.
       * @returns The created queue.
       */

    }, {
      key: "destroy",
      value:
      /**
       * Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
       */
      function destroy() {
        this.flush();

        if (this._extended) {
          var object = this._extended.object;
          var methods = this._extended.methods;

          for (var i = 0; i < methods.length; i++) {
            var method = methods[i];

            if (method.original) {
              // @TODO: better solution?
              object[method.name] = method.original;
            } else {
              // @TODO: better solution?
              delete object[method.name];
            }
          }

          this._extended = null;
        }
      }
      /**
       * Replace a method on an object with a queued version.
       *
       * @param object - Object having the method.
       * @param method - The method name.
       */

    }, {
      key: "replace",
      value: function replace(object, method) {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias -- Function this is necessary in the function bellow, so class this has to be saved into a variable here. */
        var me = this;
        var original = object[method];

        if (!original) {
          throw new Error("Method " + method + " undefined");
        }

        object[method] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // add this call to the queue
          me.queue({
            args: args,
            fn: original,
            context: this
          });
        };
      }
      /**
       * Queue a call.
       *
       * @param entry - The function or entry to be queued.
       */

    }, {
      key: "queue",
      value: function queue(entry) {
        if (typeof entry === "function") {
          this._queue.push({
            fn: entry
          });
        } else {
          this._queue.push(entry);
        }

        this._flushIfNeeded();
      }
      /**
       * Check whether the queue needs to be flushed.
       */

    }, {
      key: "_flushIfNeeded",
      value: function _flushIfNeeded() {
        var _this = this;

        // flush when the maximum is exceeded.
        if (this._queue.length > this.max) {
          this.flush();
        } // flush after a period of inactivity when a delay is configured


        if (this._timeout != null) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }

        if (this.queue.length > 0 && typeof this.delay === "number") {
          this._timeout = setTimeout$1(function () {
            _this.flush();
          }, this.delay);
        }
      }
      /**
       * Flush all queued calls
       */

    }, {
      key: "flush",
      value: function flush() {
        var _context, _context2;

        forEach$1(_context = splice(_context2 = this._queue).call(_context2, 0)).call(_context, function (entry) {
          entry.fn.apply(entry.context || entry.fn, entry.args || []);
        });
      }
    }], [{
      key: "extend",
      value: function extend(object, options) {
        var queue = new Queue(options);

        if (object.flush !== undefined) {
          throw new Error("Target object already has a property flush");
        }

        object.flush = function () {
          queue.flush();
        };

        var methods = [{
          name: "flush",
          original: undefined
        }];

        if (options && options.replace) {
          for (var i = 0; i < options.replace.length; i++) {
            var name = options.replace[i];
            methods.push({
              name: name,
              // @TODO: better solution?
              original: object[name]
            }); // @TODO: better solution?

            queue.replace(object, name);
          }
        }

        queue._extended = {
          object: object,
          methods: methods
        };
        return queue;
      }
    }]);

    return Queue;
  }();

  /**
   * [[DataSet]] code that can be reused in [[DataView]] or other similar implementations of [[DataInterface]].
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */
  var DataSetPart = /*#__PURE__*/function () {
    function DataSetPart() {
      _classCallCheck(this, DataSetPart);

      _defineProperty(this, "_subscribers", {
        "*": [],
        add: [],
        remove: [],
        update: []
      });

      _defineProperty(this, "subscribe", DataSetPart.prototype.on);

      _defineProperty(this, "unsubscribe", DataSetPart.prototype.off);
    }

    _createClass(DataSetPart, [{
      key: "_trigger",
      value:
      /**
       * Trigger an event
       *
       * @param event - Event name.
       * @param payload - Event payload.
       * @param senderId - Id of the sender.
       */
      function _trigger(event, payload, senderId) {
        var _context, _context2;

        if (event === "*") {
          throw new Error("Cannot trigger event *");
        }

        forEach$1(_context = concat$1(_context2 = []).call(_context2, _toConsumableArray(this._subscribers[event]), _toConsumableArray(this._subscribers["*"]))).call(_context, function (subscriber) {
          subscriber(event, payload, senderId != null ? senderId : null);
        });
      }
      /**
       * Subscribe to an event, add an event listener.
       *
       * @remarks Non-function callbacks are ignored.
       * @param event - Event name.
       * @param callback - Callback method.
       */

    }, {
      key: "on",
      value: function on(event, callback) {
        if (typeof callback === "function") {
          this._subscribers[event].push(callback);
        } // @TODO: Maybe throw for invalid callbacks?

      }
      /**
       * Unsubscribe from an event, remove an event listener.
       *
       * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
       * @param event - Event name.
       * @param callback - Callback method.
       */

    }, {
      key: "off",
      value: function off(event, callback) {
        var _context3;

        this._subscribers[event] = filter(_context3 = this._subscribers[event]).call(_context3, function (subscriber) {
          return subscriber !== callback;
        });
      }
      /**
       * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
       */

    }]);

    return DataSetPart;
  }();

  var collection = collection$2;
  var collectionStrong = collectionStrong$2; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects

  collection('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var path = path$q;
  var set$2 = path.Set;

  var parent$3 = set$2;
  var set$1 = parent$3;

  var set = set$1;

  var getIterator$4 = getIterator$7;
  var getIterator_1 = getIterator$4;

  var parent$2 = getIterator_1;
  var getIterator$3 = parent$2;

  var parent$1 = getIterator$3;
  var getIterator$2 = parent$1;

  var parent = getIterator$2;
  var getIterator$1 = parent;

  var getIterator = getIterator$1;

  var _Symbol$iterator;

  function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$1(o) || o["@@iterator"]; if (!it) { if (isArray$1(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$2(o, minLen) { var _context10; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = slice(_context10 = Object.prototype.toString.call(o)).call(_context10, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

  function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  _Symbol$iterator = iterator;

  /**
   * Data stream
   *
   * @remarks
   * [[DataStream]] offers an always up to date stream of items from a [[DataSet]] or [[DataView]].
   * That means that the stream is evaluated at the time of iteration, conversion to another data type or when [[cache]] is called, not when the [[DataStream]] was created.
   * Multiple invocations of for example [[toItemArray]] may yield different results (if the data source like for example [[DataSet]] gets modified).
   * @typeParam Item - The item type this stream is going to work with.
   */
  var DataStream = /*#__PURE__*/function () {
    /**
     * Create a new data stream.
     *
     * @param pairs - The id, item pairs.
     */
    function DataStream(pairs) {
      _classCallCheck(this, DataStream);

      _defineProperty(this, "_pairs", void 0);

      this._pairs = pairs;
    }
    /**
     * Return an iterable of key, value pairs for every entry in the stream.
     */


    _createClass(DataStream, [{
      key: _Symbol$iterator,
      value:
      /*#__PURE__*/
      regenerator.mark(function value() {
        var _iterator, _step, _step$value, id, item;

        return regenerator.wrap(function value$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper$2(this._pairs);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 9;
                  break;
                }

                _step$value = _slicedToArray(_step.value, 2), id = _step$value[0], item = _step$value[1];
                _context.next = 7;
                return [id, item];

              case 7:
                _context.next = 3;
                break;

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                _iterator.e(_context.t0);

              case 14:
                _context.prev = 14;

                _iterator.f();

                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, value, this, [[1, 11, 14, 17]]);
      })
      /**
       * Return an iterable of key, value pairs for every entry in the stream.
       */

    }, {
      key: "entries",
      value:
      /*#__PURE__*/
      regenerator.mark(function entries() {
        var _iterator2, _step2, _step2$value, id, item;

        return regenerator.wrap(function entries$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper$2(this._pairs);
                _context2.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 9;
                  break;
                }

                _step2$value = _slicedToArray(_step2.value, 2), id = _step2$value[0], item = _step2$value[1];
                _context2.next = 7;
                return [id, item];

              case 7:
                _context2.next = 3;
                break;

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);

                _iterator2.e(_context2.t0);

              case 14:
                _context2.prev = 14;

                _iterator2.f();

                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, entries, this, [[1, 11, 14, 17]]);
      })
      /**
       * Return an iterable of keys in the stream.
       */

    }, {
      key: "keys",
      value:
      /*#__PURE__*/
      regenerator.mark(function keys() {
        var _iterator3, _step3, _step3$value, id;

        return regenerator.wrap(function keys$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper$2(this._pairs);
                _context3.prev = 1;

                _iterator3.s();

              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 9;
                  break;
                }

                _step3$value = _slicedToArray(_step3.value, 1), id = _step3$value[0];
                _context3.next = 7;
                return id;

              case 7:
                _context3.next = 3;
                break;

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                _iterator3.e(_context3.t0);

              case 14:
                _context3.prev = 14;

                _iterator3.f();

                return _context3.finish(14);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, keys, this, [[1, 11, 14, 17]]);
      })
      /**
       * Return an iterable of values in the stream.
       */

    }, {
      key: "values",
      value:
      /*#__PURE__*/
      regenerator.mark(function values() {
        var _iterator4, _step4, _step4$value, item;

        return regenerator.wrap(function values$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper$2(this._pairs);
                _context4.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context4.next = 9;
                  break;
                }

                _step4$value = _slicedToArray(_step4.value, 2), item = _step4$value[1];
                _context4.next = 7;
                return item;

              case 7:
                _context4.next = 3;
                break;

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);

                _iterator4.e(_context4.t0);

              case 14:
                _context4.prev = 14;

                _iterator4.f();

                return _context4.finish(14);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, values, this, [[1, 11, 14, 17]]);
      })
      /**
       * Return an array containing all the ids in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all ids from this stream.
       */

    }, {
      key: "toIdArray",
      value: function toIdArray() {
        var _context5;

        return map$3(_context5 = _toConsumableArray(this._pairs)).call(_context5, function (pair) {
          return pair[0];
        });
      }
      /**
       * Return an array containing all the items in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all items from this stream.
       */

    }, {
      key: "toItemArray",
      value: function toItemArray() {
        var _context6;

        return map$3(_context6 = _toConsumableArray(this._pairs)).call(_context6, function (pair) {
          return pair[1];
        });
      }
      /**
       * Return an array containing all the entries in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all entries from this stream.
       */

    }, {
      key: "toEntryArray",
      value: function toEntryArray() {
        return _toConsumableArray(this._pairs);
      }
      /**
       * Return an object map containing all the items in this stream accessible by ids.
       *
       * @remarks
       * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
       * @returns The object map of all id → item pairs from this stream.
       */

    }, {
      key: "toObjectMap",
      value: function toObjectMap() {
        var map = create$5(null);

        var _iterator5 = _createForOfIteratorHelper$2(this._pairs),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                id = _step5$value[0],
                item = _step5$value[1];

            map[id] = item;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return map;
      }
      /**
       * Return a map containing all the items in this stream accessible by ids.
       *
       * @returns The map of all id → item pairs from this stream.
       */

    }, {
      key: "toMap",
      value: function toMap() {
        return new map(this._pairs);
      }
      /**
       * Return a set containing all the (unique) ids in this stream.
       *
       * @returns The set of all ids from this stream.
       */

    }, {
      key: "toIdSet",
      value: function toIdSet() {
        return new set(this.toIdArray());
      }
      /**
       * Return a set containing all the (unique) items in this stream.
       *
       * @returns The set of all items from this stream.
       */

    }, {
      key: "toItemSet",
      value: function toItemSet() {
        return new set(this.toItemArray());
      }
      /**
       * Cache the items from this stream.
       *
       * @remarks
       * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
       * It can also be used to optimize performance as [[DataStream]] would otherwise reevaluate everything upon each iteration.
       *
       * ## Example
       * ```javascript
       * const ds = new DataSet([…])
       *
       * const cachedStream = ds.stream()
       *   .filter(…)
       *   .sort(…)
       *   .map(…)
       *   .cached(…) // Data are fetched, processed and cached here.
       *
       * ds.clear()
       * chachedStream // Still has all the items.
       * ```
       * @returns A new [[DataStream]] with cached items (detached from the original [[DataSet]]).
       */

    }, {
      key: "cache",
      value: function cache() {
        return new DataStream(_toConsumableArray(this._pairs));
      }
      /**
       * Get the distinct values of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @typeParam T - The type of the distinct value.
       * @returns A set of all distinct properties.
       */

    }, {
      key: "distinct",
      value: function distinct(callback) {
        var set$1 = new set();

        var _iterator6 = _createForOfIteratorHelper$2(this._pairs),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                id = _step6$value[0],
                item = _step6$value[1];

            set$1.add(callback(item, id));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return set$1;
      }
      /**
       * Filter the items of the stream.
       *
       * @param callback - The function that decides whether an item will be included.
       * @returns A new data stream with the filtered items.
       */

    }, {
      key: "filter",
      value: function filter(callback) {
        var pairs = this._pairs;
        return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee() {
          var _iterator7, _step7, _step7$value, id, item;

          return regenerator.wrap(function _callee$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _iterator7 = _createForOfIteratorHelper$2(pairs);
                  _context7.prev = 1;

                  _iterator7.s();

                case 3:
                  if ((_step7 = _iterator7.n()).done) {
                    _context7.next = 10;
                    break;
                  }

                  _step7$value = _slicedToArray(_step7.value, 2), id = _step7$value[0], item = _step7$value[1];

                  if (!callback(item, id)) {
                    _context7.next = 8;
                    break;
                  }

                  _context7.next = 8;
                  return [id, item];

                case 8:
                  _context7.next = 3;
                  break;

                case 10:
                  _context7.next = 15;
                  break;

                case 12:
                  _context7.prev = 12;
                  _context7.t0 = _context7["catch"](1);

                  _iterator7.e(_context7.t0);

                case 15:
                  _context7.prev = 15;

                  _iterator7.f();

                  return _context7.finish(15);

                case 18:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee, null, [[1, 12, 15, 18]]);
        })));
      }
      /**
       * Execute a callback for each item of the stream.
       *
       * @param callback - The function that will be invoked for each item.
       */

    }, {
      key: "forEach",
      value: function forEach(callback) {
        var _iterator8 = _createForOfIteratorHelper$2(this._pairs),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _step8$value = _slicedToArray(_step8.value, 2),
                id = _step8$value[0],
                item = _step8$value[1];

            callback(item, id);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      /**
       * Map the items into a different type.
       *
       * @param callback - The function that does the conversion.
       * @typeParam Mapped - The type of the item after mapping.
       * @returns A new data stream with the mapped items.
       */

    }, {
      key: "map",
      value: function map(callback) {
        var pairs = this._pairs;
        return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee2() {
          var _iterator9, _step9, _step9$value, id, item;

          return regenerator.wrap(function _callee2$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _iterator9 = _createForOfIteratorHelper$2(pairs);
                  _context8.prev = 1;

                  _iterator9.s();

                case 3:
                  if ((_step9 = _iterator9.n()).done) {
                    _context8.next = 9;
                    break;
                  }

                  _step9$value = _slicedToArray(_step9.value, 2), id = _step9$value[0], item = _step9$value[1];
                  _context8.next = 7;
                  return [id, callback(item, id)];

                case 7:
                  _context8.next = 3;
                  break;

                case 9:
                  _context8.next = 14;
                  break;

                case 11:
                  _context8.prev = 11;
                  _context8.t0 = _context8["catch"](1);

                  _iterator9.e(_context8.t0);

                case 14:
                  _context8.prev = 14;

                  _iterator9.f();

                  return _context8.finish(14);

                case 17:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee2, null, [[1, 11, 14, 17]]);
        })));
      }
      /**
       * Get the item with the maximum value of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @returns The item with the maximum if found otherwise null.
       */

    }, {
      key: "max",
      value: function max(callback) {
        var iter = getIterator(this._pairs);

        var curr = iter.next();

        if (curr.done) {
          return null;
        }

        var maxItem = curr.value[1];
        var maxValue = callback(curr.value[1], curr.value[0]);

        while (!(curr = iter.next()).done) {
          var _curr$value = _slicedToArray(curr.value, 2),
              id = _curr$value[0],
              item = _curr$value[1];

          var _value = callback(item, id);

          if (_value > maxValue) {
            maxValue = _value;
            maxItem = item;
          }
        }

        return maxItem;
      }
      /**
       * Get the item with the minimum value of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @returns The item with the minimum if found otherwise null.
       */

    }, {
      key: "min",
      value: function min(callback) {
        var iter = getIterator(this._pairs);

        var curr = iter.next();

        if (curr.done) {
          return null;
        }

        var minItem = curr.value[1];
        var minValue = callback(curr.value[1], curr.value[0]);

        while (!(curr = iter.next()).done) {
          var _curr$value2 = _slicedToArray(curr.value, 2),
              id = _curr$value2[0],
              item = _curr$value2[1];

          var _value2 = callback(item, id);

          if (_value2 < minValue) {
            minValue = _value2;
            minItem = item;
          }
        }

        return minItem;
      }
      /**
       * Reduce the items into a single value.
       *
       * @param callback - The function that does the reduction.
       * @param accumulator - The initial value of the accumulator.
       * @typeParam T - The type of the accumulated value.
       * @returns The reduced value.
       */

    }, {
      key: "reduce",
      value: function reduce(callback, accumulator) {
        var _iterator10 = _createForOfIteratorHelper$2(this._pairs),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _step10$value = _slicedToArray(_step10.value, 2),
                id = _step10$value[0],
                item = _step10$value[1];

            accumulator = callback(accumulator, item, id);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return accumulator;
      }
      /**
       * Sort the items.
       *
       * @param callback - Item comparator.
       * @returns A new stream with sorted items.
       */

    }, {
      key: "sort",
      value: function sort$1(callback) {
        var _this = this;

        return new DataStream(_defineProperty({}, iterator, function () {
          var _context9;

          return getIterator(sort(_context9 = _toConsumableArray(_this._pairs)).call(_context9, function (_ref, _ref2) {
            var _ref3 = _slicedToArray(_ref, 2),
                idA = _ref3[0],
                itemA = _ref3[1];

            var _ref4 = _slicedToArray(_ref2, 2),
                idB = _ref4[0],
                itemB = _ref4[1];

            return callback(itemA, itemB, idA, idB);
          }));
        }));
      }
    }]);

    return DataStream;
  }();

  function ownKeys(object, enumerableOnly) { var keys = keys$4(object); if (getOwnPropertySymbols) { var symbols = getOwnPropertySymbols(object); enumerableOnly && (symbols = filter(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context10, _context11; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? forEach$1(_context10 = ownKeys(Object(source), !0)).call(_context10, function (key) { _defineProperty(target, key, source[key]); }) : getOwnPropertyDescriptors ? defineProperties(target, getOwnPropertyDescriptors(source)) : forEach$1(_context11 = ownKeys(Object(source))).call(_context11, function (key) { defineProperty$4(target, key, getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$1(o) || o["@@iterator"]; if (!it) { if (isArray$1(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { var _context9; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = slice(_context9 = Object.prototype.toString.call(o)).call(_context9, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !construct) return false; if (construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * Add an id to given item if it doesn't have one already.
   *
   * @remarks
   * The item will be modified.
   * @param item - The item that will have an id after a call to this function.
   * @param idProp - The key of the id property.
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   * @returns true
   */

  function ensureFullItem(item, idProp) {
    if (item[idProp] == null) {
      // generate an id
      item[idProp] = v4();
    }

    return item;
  }
  /**
   * # DataSet
   *
   * Vis.js comes with a flexible DataSet, which can be used to hold and
   * manipulate unstructured data and listen for changes in the data. The DataSet
   * is key/value based. Data items can be added, updated and removed from the
   * DataSet, and one can subscribe to changes in the DataSet. The data in the
   * DataSet can be filtered and ordered. Data can be normalized when appending it
   * to the DataSet as well.
   *
   * ## Example
   *
   * The following example shows how to use a DataSet.
   *
   * ```javascript
   * // create a DataSet
   * var options = {};
   * var data = new vis.DataSet(options);
   *
   * // add items
   * // note that the data items can contain different properties and data formats
   * data.add([
   *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
   *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
   *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
   *   {id: 4, text: 'item 4'}
   * ]);
   *
   * // subscribe to any change in the DataSet
   * data.on('*', function (event, properties, senderId) {
   *   console.log('event', event, properties);
   * });
   *
   * // update an existing item
   * data.update({id: 2, group: 1});
   *
   * // remove an item
   * data.remove(4);
   *
   * // get all ids
   * var ids = data.getIds();
   * console.log('ids', ids);
   *
   * // get a specific item
   * var item1 = data.get(1);
   * console.log('item1', item1);
   *
   * // retrieve a filtered subset of the data
   * var items = data.get({
   *   filter: function (item) {
   *     return item.group == 1;
   *   }
   * });
   * console.log('filtered items', items);
   * ```
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */


  var DataSet = /*#__PURE__*/function (_DataSetPart) {
    _inherits(DataSet, _DataSetPart);

    var _super = _createSuper$1(DataSet);

    /**
     * Construct a new DataSet.
     *
     * @param data - Initial data or options.
     * @param options - Options (type error if data is also options).
     */
    function DataSet(data, options) {
      var _this;

      _classCallCheck(this, DataSet);

      _this = _super.call(this); // correctly read optional arguments

      _defineProperty(_assertThisInitialized(_this), "flush", void 0);

      _defineProperty(_assertThisInitialized(_this), "length", void 0);

      _defineProperty(_assertThisInitialized(_this), "_options", void 0);

      _defineProperty(_assertThisInitialized(_this), "_data", void 0);

      _defineProperty(_assertThisInitialized(_this), "_idProp", void 0);

      _defineProperty(_assertThisInitialized(_this), "_queue", null);

      if (data && !isArray$1(data)) {
        options = data;
        data = [];
      }

      _this._options = options || {};
      _this._data = new map(); // map with data indexed by id

      _this.length = 0; // number of items in the DataSet

      _this._idProp = _this._options.fieldId || "id"; // name of the field containing id
      // add initial data when provided

      if (data && data.length) {
        _this.add(data);
      }

      _this.setOptions(options);

      return _this;
    }
    /**
     * Set new options.
     *
     * @param options - The new options.
     */


    _createClass(DataSet, [{
      key: "idProp",
      get:
      /** Flush all queued calls. */

      /** @inheritDoc */

      /** @inheritDoc */
      function get() {
        return this._idProp;
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (options && options.queue !== undefined) {
          if (options.queue === false) {
            // delete queue if loaded
            if (this._queue) {
              this._queue.destroy();

              this._queue = null;
            }
          } else {
            // create queue and update its options
            if (!this._queue) {
              this._queue = Queue.extend(this, {
                replace: ["add", "update", "remove"]
              });
            }

            if (options.queue && _typeof(options.queue) === "object") {
              this._queue.setOptions(options.queue);
            }
          }
        }
      }
      /**
       * Add a data item or an array with items.
       *
       * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet()
       *
       * // add items
       * const ids = data.add([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { text: 'item without an id' }
       * ])
       *
       * console.log(ids) // [1, 2, '<UUIDv4>']
       * ```
       *
       * @param data - Items to be added (ids will be generated if missing).
       * @param senderId - Sender id.
       * @returns addedIds - Array with the ids (generated if not present) of the added items.
       * @throws When an item with the same id as any of the added items already exists.
       */

    }, {
      key: "add",
      value: function add(data, senderId) {
        var _this2 = this;

        var addedIds = [];
        var id;

        if (isArray$1(data)) {
          // Array
          var idsToAdd = map$3(data).call(data, function (d) {
            return d[_this2._idProp];
          });

          if (some(idsToAdd).call(idsToAdd, function (id) {
            return _this2._data.has(id);
          })) {
            throw new Error("A duplicate id was found in the parameter array.");
          }

          for (var i = 0, len = data.length; i < len; i++) {
            id = this._addItem(data[i]);
            addedIds.push(id);
          }
        } else if (data && _typeof(data) === "object") {
          // Single item
          id = this._addItem(data);
          addedIds.push(id);
        } else {
          throw new Error("Unknown dataType");
        }

        if (addedIds.length) {
          this._trigger("add", {
            items: addedIds
          }, senderId);
        }

        return addedIds;
      }
      /**
       * Update existing items. When an item does not exist, it will be created.
       *
       * @remarks
       * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
       *
       * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' }
       * ])
       *
       * // update items
       * const ids = data.update([
       *   { id: 2, text: 'item 2 (updated)' },
       *   { id: 4, text: 'item 4 (new)' }
       * ])
       *
       * console.log(ids) // [2, 4]
       * ```
       *
       * ## Warning for TypeScript users
       * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
       * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
       * @param senderId - Sender id.
       * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
       * @throws When the supplied data is neither an item nor an array of items.
       */

    }, {
      key: "update",
      value: function update(data, senderId) {
        var _this3 = this;

        var addedIds = [];
        var updatedIds = [];
        var oldData = [];
        var updatedData = [];
        var idProp = this._idProp;

        var addOrUpdate = function addOrUpdate(item) {
          var origId = item[idProp];

          if (origId != null && _this3._data.has(origId)) {
            var fullItem = item; // it has an id, therefore it is a fullitem

            var oldItem = assign$2({}, _this3._data.get(origId)); // update item


            var id = _this3._updateItem(fullItem);

            updatedIds.push(id);
            updatedData.push(fullItem);
            oldData.push(oldItem);
          } else {
            // add new item
            var _id = _this3._addItem(item);

            addedIds.push(_id);
          }
        };

        if (isArray$1(data)) {
          // Array
          for (var i = 0, len = data.length; i < len; i++) {
            if (data[i] && _typeof(data[i]) === "object") {
              addOrUpdate(data[i]);
            } else {
              console.warn("Ignoring input item, which is not an object at index " + i);
            }
          }
        } else if (data && _typeof(data) === "object") {
          // Single item
          addOrUpdate(data);
        } else {
          throw new Error("Unknown dataType");
        }

        if (addedIds.length) {
          this._trigger("add", {
            items: addedIds
          }, senderId);
        }

        if (updatedIds.length) {
          var props = {
            items: updatedIds,
            oldData: oldData,
            data: updatedData
          }; // TODO: remove deprecated property 'data' some day
          //Object.defineProperty(props, 'data', {
          //  'get': (function() {
          //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
          //    return updatedData;
          //  }).bind(this)
          //});

          this._trigger("update", props, senderId);
        }

        return concat$1(addedIds).call(addedIds, updatedIds);
      }
      /**
       * Update existing items. When an item does not exist, an error will be thrown.
       *
       * @remarks
       * The provided properties will be deeply merged into the existing item.
       * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
       *
       * After the items are updated, the DataSet will trigger an event `update`.
       * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' },
       * ])
       *
       * // update items
       * const ids = data.update([
       *   { id: 2, text: 'item 2 (updated)' }, // works
       *   // { id: 4, text: 'item 4 (new)' }, // would throw
       *   // { text: 'item 4 (new)' }, // would also throw
       * ])
       *
       * console.log(ids) // [2]
       * ```
       * @param data - Updates (the id and optionally other props) to the items in this data set.
       * @param senderId - Sender id.
       * @returns updatedIds - The ids of the updated items.
       * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
       */

    }, {
      key: "updateOnly",
      value: function updateOnly(data, senderId) {
        var _context,
            _this4 = this;

        if (!isArray$1(data)) {
          data = [data];
        }

        var updateEventData = map$3(_context = map$3(data).call(data, function (update) {
          var oldData = _this4._data.get(update[_this4._idProp]);

          if (oldData == null) {
            throw new Error("Updating non-existent items is not allowed.");
          }

          return {
            oldData: oldData,
            update: update
          };
        })).call(_context, function (_ref) {
          var oldData = _ref.oldData,
              update = _ref.update;
          var id = oldData[_this4._idProp];
          var updatedData = pureDeepObjectAssign(oldData, update);

          _this4._data.set(id, updatedData);

          return {
            id: id,
            oldData: oldData,
            updatedData: updatedData
          };
        });

        if (updateEventData.length) {
          var props = {
            items: map$3(updateEventData).call(updateEventData, function (value) {
              return value.id;
            }),
            oldData: map$3(updateEventData).call(updateEventData, function (value) {
              return value.oldData;
            }),
            data: map$3(updateEventData).call(updateEventData, function (value) {
              return value.updatedData;
            })
          }; // TODO: remove deprecated property 'data' some day
          //Object.defineProperty(props, 'data', {
          //  'get': (function() {
          //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
          //    return updatedData;
          //  }).bind(this)
          //});

          this._trigger("update", props, senderId);

          return props.items;
        } else {
          return [];
        }
      }
      /** @inheritDoc */

    }, {
      key: "get",
      value: function get(first, second) {
        // @TODO: Woudn't it be better to split this into multiple methods?
        // parse the arguments
        var id = undefined;
        var ids = undefined;
        var options = undefined;

        if (isId(first)) {
          // get(id [, options])
          id = first;
          options = second;
        } else if (isArray$1(first)) {
          // get(ids [, options])
          ids = first;
          options = second;
        } else {
          // get([, options])
          options = first;
        } // determine the return type


        var returnType = options && options.returnType === "Object" ? "Object" : "Array"; // @TODO: WTF is this? Or am I missing something?
        // var returnType
        // if (options && options.returnType) {
        //   var allowedValues = ['Array', 'Object']
        //   returnType =
        //     allowedValues.indexOf(options.returnType) == -1
        //       ? 'Array'
        //       : options.returnType
        // } else {
        //   returnType = 'Array'
        // }
        // build options

        var filter$1 = options && filter(options);

        var items = [];
        var item = undefined;
        var itemIds = undefined;
        var itemId = undefined; // convert items

        if (id != null) {
          // return a single item
          item = this._data.get(id);

          if (item && filter$1 && !filter$1(item)) {
            item = undefined;
          }
        } else if (ids != null) {
          // return a subset of items
          for (var i = 0, len = ids.length; i < len; i++) {
            item = this._data.get(ids[i]);

            if (item != null && (!filter$1 || filter$1(item))) {
              items.push(item);
            }
          }
        } else {
          var _context2;

          // return all items
          itemIds = _toConsumableArray(keys(_context2 = this._data).call(_context2));

          for (var _i = 0, _len = itemIds.length; _i < _len; _i++) {
            itemId = itemIds[_i];
            item = this._data.get(itemId);

            if (item != null && (!filter$1 || filter$1(item))) {
              items.push(item);
            }
          }
        } // order the results


        if (options && options.order && id == undefined) {
          this._sort(items, options.order);
        } // filter fields of the items


        if (options && options.fields) {
          var fields = options.fields;

          if (id != undefined && item != null) {
            item = this._filterFields(item, fields);
          } else {
            for (var _i2 = 0, _len2 = items.length; _i2 < _len2; _i2++) {
              items[_i2] = this._filterFields(items[_i2], fields);
            }
          }
        } // return the results


        if (returnType == "Object") {
          var result = {};

          for (var _i3 = 0, _len3 = items.length; _i3 < _len3; _i3++) {
            var resultant = items[_i3]; // @TODO: Shoudn't this be this._fieldId?
            // result[resultant.id] = resultant

            var _id2 = resultant[this._idProp];
            result[_id2] = resultant;
          }

          return result;
        } else {
          if (id != null) {
            var _item;

            // a single item
            return (_item = item) !== null && _item !== void 0 ? _item : null;
          } else {
            // just return our array
            return items;
          }
        }
      }
      /** @inheritDoc */

    }, {
      key: "getIds",
      value: function getIds(options) {
        var data = this._data;

        var filter$1 = options && filter(options);

        var order = options && options.order;

        var itemIds = _toConsumableArray(keys(data).call(data));

        var ids = [];

        if (filter$1) {
          // get filtered items
          if (order) {
            // create ordered list
            var items = [];

            for (var i = 0, len = itemIds.length; i < len; i++) {
              var id = itemIds[i];

              var item = this._data.get(id);

              if (item != null && filter$1(item)) {
                items.push(item);
              }
            }

            this._sort(items, order);

            for (var _i4 = 0, _len4 = items.length; _i4 < _len4; _i4++) {
              ids.push(items[_i4][this._idProp]);
            }
          } else {
            // create unordered list
            for (var _i5 = 0, _len5 = itemIds.length; _i5 < _len5; _i5++) {
              var _id3 = itemIds[_i5];

              var _item2 = this._data.get(_id3);

              if (_item2 != null && filter$1(_item2)) {
                ids.push(_item2[this._idProp]);
              }
            }
          }
        } else {
          // get all items
          if (order) {
            // create an ordered list
            var _items = [];

            for (var _i6 = 0, _len6 = itemIds.length; _i6 < _len6; _i6++) {
              var _id4 = itemIds[_i6];

              _items.push(data.get(_id4));
            }

            this._sort(_items, order);

            for (var _i7 = 0, _len7 = _items.length; _i7 < _len7; _i7++) {
              ids.push(_items[_i7][this._idProp]);
            }
          } else {
            // create unordered list
            for (var _i8 = 0, _len8 = itemIds.length; _i8 < _len8; _i8++) {
              var _id5 = itemIds[_i8];

              var _item3 = data.get(_id5);

              if (_item3 != null) {
                ids.push(_item3[this._idProp]);
              }
            }
          }
        }

        return ids;
      }
      /** @inheritDoc */

    }, {
      key: "getDataSet",
      value: function getDataSet() {
        return this;
      }
      /** @inheritDoc */

    }, {
      key: "forEach",
      value: function forEach(callback, options) {
        var filter$1 = options && filter(options);

        var data = this._data;

        var itemIds = _toConsumableArray(keys(data).call(data));

        if (options && options.order) {
          // execute forEach on ordered list
          var items = this.get(options);

          for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var id = item[this._idProp];
            callback(item, id);
          }
        } else {
          // unordered
          for (var _i9 = 0, _len9 = itemIds.length; _i9 < _len9; _i9++) {
            var _id6 = itemIds[_i9];

            var _item4 = this._data.get(_id6);

            if (_item4 != null && (!filter$1 || filter$1(_item4))) {
              callback(_item4, _id6);
            }
          }
        }
      }
      /** @inheritDoc */

    }, {
      key: "map",
      value: function map(callback, options) {
        var filter$1 = options && filter(options);

        var mappedItems = [];
        var data = this._data;

        var itemIds = _toConsumableArray(keys(data).call(data)); // convert and filter items


        for (var i = 0, len = itemIds.length; i < len; i++) {
          var id = itemIds[i];

          var item = this._data.get(id);

          if (item != null && (!filter$1 || filter$1(item))) {
            mappedItems.push(callback(item, id));
          }
        } // order items


        if (options && options.order) {
          this._sort(mappedItems, options.order);
        }

        return mappedItems;
      }
      /**
       * Filter the fields of an item.
       *
       * @param item - The item whose fields should be filtered.
       * @param fields - The names of the fields that will be kept.
       * @typeParam K - Field name type.
       * @returns The item without any additional fields.
       */

    }, {
      key: "_filterFields",
      value: function _filterFields(item, fields) {
        var _context3;

        if (!item) {
          // item is null
          return item;
        }

        return reduce(_context3 = isArray$1(fields) ? // Use the supplied array
        fields : // Use the keys of the supplied object
        keys$4(fields)).call(_context3, function (filteredItem, field) {
          filteredItem[field] = item[field];
          return filteredItem;
        }, {});
      }
      /**
       * Sort the provided array with items.
       *
       * @param items - Items to be sorted in place.
       * @param order - A field name or custom sort function.
       * @typeParam T - The type of the items in the items array.
       */

    }, {
      key: "_sort",
      value: function _sort(items, order) {
        if (typeof order === "string") {
          // order by provided field name
          var name = order; // field name

          sort(items).call(items, function (a, b) {
            // @TODO: How to treat missing properties?
            var av = a[name];
            var bv = b[name];
            return av > bv ? 1 : av < bv ? -1 : 0;
          });
        } else if (typeof order === "function") {
          // order by sort function
          sort(items).call(items, order);
        } else {
          // TODO: extend order by an Object {field:string, direction:string}
          //       where direction can be 'asc' or 'desc'
          throw new TypeError("Order must be a function or a string");
        }
      }
      /**
       * Remove an item or multiple items by “reference” (only the id is used) or by id.
       *
       * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
       *
       * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' }
       * ])
       *
       * // remove items
       * const ids = data.remove([2, { id: 3 }, 4])
       *
       * console.log(ids) // [2, 3]
       * ```
       *
       * @param id - One or more items or ids of items to be removed.
       * @param senderId - Sender id.
       * @returns The ids of the removed items.
       */

    }, {
      key: "remove",
      value: function remove(id, senderId) {
        var removedIds = [];
        var removedItems = []; // force everything to be an array for simplicity

        var ids = isArray$1(id) ? id : [id];

        for (var i = 0, len = ids.length; i < len; i++) {
          var item = this._remove(ids[i]);

          if (item) {
            var itemId = item[this._idProp];

            if (itemId != null) {
              removedIds.push(itemId);
              removedItems.push(item);
            }
          }
        }

        if (removedIds.length) {
          this._trigger("remove", {
            items: removedIds,
            oldData: removedItems
          }, senderId);
        }

        return removedIds;
      }
      /**
       * Remove an item by its id or reference.
       *
       * @param id - Id of an item or the item itself.
       * @returns The removed item if removed, null otherwise.
       */

    }, {
      key: "_remove",
      value: function _remove(id) {
        // @TODO: It origianlly returned the item although the docs say id.
        // The code expects the item, so probably an error in the docs.
        var ident; // confirm the id to use based on the args type

        if (isId(id)) {
          ident = id;
        } else if (id && _typeof(id) === "object") {
          ident = id[this._idProp]; // look for the identifier field using ._idProp
        } // do the removing if the item is found


        if (ident != null && this._data.has(ident)) {
          var item = this._data.get(ident) || null;

          this._data.delete(ident);

          --this.length;
          return item;
        }

        return null;
      }
      /**
       * Clear the entire data set.
       *
       * After the items are removed, the [[DataSet]] will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * @param senderId - Sender id.
       * @returns removedIds - The ids of all removed items.
       */

    }, {
      key: "clear",
      value: function clear(senderId) {
        var _context4;

        var ids = _toConsumableArray(keys(_context4 = this._data).call(_context4));

        var items = [];

        for (var i = 0, len = ids.length; i < len; i++) {
          items.push(this._data.get(ids[i]));
        }

        this._data.clear();

        this.length = 0;

        this._trigger("remove", {
          items: ids,
          oldData: items
        }, senderId);

        return ids;
      }
      /**
       * Find the item with maximum value of a specified field.
       *
       * @param field - Name of the property that should be searched for max value.
       * @returns Item containing max value, or null if no items.
       */

    }, {
      key: "max",
      value: function max(field) {
        var _context5;

        var max = null;
        var maxField = null;

        var _iterator = _createForOfIteratorHelper$1(values(_context5 = this._data).call(_context5)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var itemField = item[field];

            if (typeof itemField === "number" && (maxField == null || itemField > maxField)) {
              max = item;
              maxField = itemField;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return max || null;
      }
      /**
       * Find the item with minimum value of a specified field.
       *
       * @param field - Name of the property that should be searched for min value.
       * @returns Item containing min value, or null if no items.
       */

    }, {
      key: "min",
      value: function min(field) {
        var _context6;

        var min = null;
        var minField = null;

        var _iterator2 = _createForOfIteratorHelper$1(values(_context6 = this._data).call(_context6)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            var itemField = item[field];

            if (typeof itemField === "number" && (minField == null || itemField < minField)) {
              min = item;
              minField = itemField;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return min || null;
      }
      /**
       * Find all distinct values of a specified field
       *
       * @param prop - The property name whose distinct values should be returned.
       * @returns Unordered array containing all distinct values. Items without specified property are ignored.
       */

    }, {
      key: "distinct",
      value: function distinct(prop) {
        var data = this._data;

        var itemIds = _toConsumableArray(keys(data).call(data));

        var values = [];
        var count = 0;

        for (var i = 0, len = itemIds.length; i < len; i++) {
          var id = itemIds[i];
          var item = data.get(id);
          var value = item[prop];
          var exists = false;

          for (var j = 0; j < count; j++) {
            if (values[j] == value) {
              exists = true;
              break;
            }
          }

          if (!exists && value !== undefined) {
            values[count] = value;
            count++;
          }
        }

        return values;
      }
      /**
       * Add a single item. Will fail when an item with the same id already exists.
       *
       * @param item - A new item to be added.
       * @returns Added item's id. An id is generated when it is not present in the item.
       */

    }, {
      key: "_addItem",
      value: function _addItem(item) {
        var fullItem = ensureFullItem(item, this._idProp);
        var id = fullItem[this._idProp]; // check whether this id is already taken

        if (this._data.has(id)) {
          // item already exists
          throw new Error("Cannot add item: item with id " + id + " already exists");
        }

        this._data.set(id, fullItem);

        ++this.length;
        return id;
      }
      /**
       * Update a single item: merge with existing item.
       * Will fail when the item has no id, or when there does not exist an item with the same id.
       *
       * @param update - The new item
       * @returns The id of the updated item.
       */

    }, {
      key: "_updateItem",
      value: function _updateItem(update) {
        var id = update[this._idProp];

        if (id == null) {
          throw new Error("Cannot update item: item has no id (item: " + stringify$1(update) + ")");
        }

        var item = this._data.get(id);

        if (!item) {
          // item doesn't exist
          throw new Error("Cannot update item: no item with id " + id + " found");
        }

        this._data.set(id, _objectSpread(_objectSpread({}, item), update));

        return id;
      }
      /** @inheritDoc */

    }, {
      key: "stream",
      value: function stream(ids) {
        if (ids) {
          var data = this._data;
          return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee() {
            var _iterator3, _step3, id, item;

            return regenerator.wrap(function _callee$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _iterator3 = _createForOfIteratorHelper$1(ids);
                    _context7.prev = 1;

                    _iterator3.s();

                  case 3:
                    if ((_step3 = _iterator3.n()).done) {
                      _context7.next = 11;
                      break;
                    }

                    id = _step3.value;
                    item = data.get(id);

                    if (!(item != null)) {
                      _context7.next = 9;
                      break;
                    }

                    _context7.next = 9;
                    return [id, item];

                  case 9:
                    _context7.next = 3;
                    break;

                  case 11:
                    _context7.next = 16;
                    break;

                  case 13:
                    _context7.prev = 13;
                    _context7.t0 = _context7["catch"](1);

                    _iterator3.e(_context7.t0);

                  case 16:
                    _context7.prev = 16;

                    _iterator3.f();

                    return _context7.finish(16);

                  case 19:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee, null, [[1, 13, 16, 19]]);
          })));
        } else {
          var _context8;

          return new DataStream(_defineProperty({}, iterator, bind$6(_context8 = entries(this._data)).call(_context8, this._data)));
        }
      }
    }]);

    return DataSet;
  }(DataSetPart);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$1(o) || o["@@iterator"]; if (!it) { if (isArray$1(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = slice(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct) return false; if (construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * DataView
   *
   * A DataView offers a filtered and/or formatted view on a DataSet. One can subscribe to changes in a DataView, and easily get filtered or formatted data without having to specify filters and field types all the time.
   *
   * ## Example
   * ```javascript
   * // create a DataSet
   * var data = new vis.DataSet();
   * data.add([
   *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
   *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
   *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
   *   {id: 4, text: 'item 4'}
   * ]);
   *
   * // create a DataView
   * // the view will only contain items having a property group with value 1,
   * // and will only output fields id, text, and date.
   * var view = new vis.DataView(data, {
   *   filter: function (item) {
   *     return (item.group == 1);
   *   },
   *   fields: ['id', 'text', 'date']
   * });
   *
   * // subscribe to any change in the DataView
   * view.on('*', function (event, properties, senderId) {
   *   console.log('event', event, properties);
   * });
   *
   * // update an item in the data set
   * data.update({id: 2, group: 1});
   *
   * // get all ids in the view
   * var ids = view.getIds();
   * console.log('ids', ids); // will output [1, 2]
   *
   * // get all items in the view
   * var items = view.get();
   * ```
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */

  var DataView = /*#__PURE__*/function (_DataSetPart) {
    _inherits(DataView, _DataSetPart);

    var _super = _createSuper(DataView);

    /**
     * Create a DataView.
     *
     * @param data - The instance containing data (directly or indirectly).
     * @param options - Options to configure this data view.
     */
    function DataView(data, options) {
      var _context;

      var _this;

      _classCallCheck(this, DataView);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "length", 0);

      _defineProperty(_assertThisInitialized(_this), "_listener", void 0);

      _defineProperty(_assertThisInitialized(_this), "_data", void 0);

      _defineProperty(_assertThisInitialized(_this), "_ids", new set());

      _defineProperty(_assertThisInitialized(_this), "_options", void 0);

      _this._options = options || {};
      _this._listener = bind$6(_context = _this._onEvent).call(_context, _assertThisInitialized(_this));

      _this.setData(data);

      return _this;
    } // TODO: implement a function .config() to dynamically update things like configured filter
    // and trigger changes accordingly

    /**
     * Set a data source for the view.
     *
     * @param data - The instance containing data (directly or indirectly).
     * @remarks
     * Note that when the data view is bound to a data set it won't be garbage
     * collected unless the data set is too. Use `dataView.setData(null)` or
     * `dataView.dispose()` to enable garbage collection before you lose the last
     * reference.
     */


    _createClass(DataView, [{
      key: "idProp",
      get:
      /** @inheritDoc */

      /** @inheritDoc */
      function get() {
        return this.getDataSet().idProp;
      }
    }, {
      key: "setData",
      value: function setData(data) {
        if (this._data) {
          // unsubscribe from current dataset
          if (this._data.off) {
            this._data.off("*", this._listener);
          } // trigger a remove of all items in memory


          var ids = this._data.getIds({
            filter: filter(this._options)
          });

          var items = this._data.get(ids);

          this._ids.clear();

          this.length = 0;

          this._trigger("remove", {
            items: ids,
            oldData: items
          });
        }

        if (data != null) {
          this._data = data; // trigger an add of all added items

          var _ids = this._data.getIds({
            filter: filter(this._options)
          });

          for (var i = 0, len = _ids.length; i < len; i++) {
            var id = _ids[i];

            this._ids.add(id);
          }

          this.length = _ids.length;

          this._trigger("add", {
            items: _ids
          });
        } else {
          this._data = new DataSet();
        } // subscribe to new dataset


        if (this._data.on) {
          this._data.on("*", this._listener);
        }
      }
      /**
       * Refresh the DataView.
       * Useful when the DataView has a filter function containing a variable parameter.
       */

    }, {
      key: "refresh",
      value: function refresh() {
        var ids = this._data.getIds({
          filter: filter(this._options)
        });

        var oldIds = _toConsumableArray(this._ids);

        var newIds = {};
        var addedIds = [];
        var removedIds = [];
        var removedItems = []; // check for additions

        for (var i = 0, len = ids.length; i < len; i++) {
          var id = ids[i];
          newIds[id] = true;

          if (!this._ids.has(id)) {
            addedIds.push(id);

            this._ids.add(id);
          }
        } // check for removals


        for (var _i = 0, _len = oldIds.length; _i < _len; _i++) {
          var _id = oldIds[_i];

          var item = this._data.get(_id);

          if (item == null) {
            // @TODO: Investigate.
            // Doesn't happen during tests or examples.
            // Is it really impossible or could it eventually happen?
            // How to handle it if it does? The types guarantee non-nullable items.
            console.error("If you see this, report it please.");
          } else if (!newIds[_id]) {
            removedIds.push(_id);
            removedItems.push(item);

            this._ids.delete(_id);
          }
        }

        this.length += addedIds.length - removedIds.length; // trigger events

        if (addedIds.length) {
          this._trigger("add", {
            items: addedIds
          });
        }

        if (removedIds.length) {
          this._trigger("remove", {
            items: removedIds,
            oldData: removedItems
          });
        }
      }
      /** @inheritDoc */

    }, {
      key: "get",
      value: function get(first, second) {
        if (this._data == null) {
          return null;
        } // parse the arguments


        var ids = null;
        var options;

        if (isId(first) || isArray$1(first)) {
          ids = first;
          options = second;
        } else {
          options = first;
        } // extend the options with the default options and provided options


        var viewOptions = assign$2({}, this._options, options); // create a combined filter method when needed


        var thisFilter = filter(this._options);

        var optionsFilter = options && filter(options);

        if (thisFilter && optionsFilter) {
          viewOptions.filter = function (item) {
            return thisFilter(item) && optionsFilter(item);
          };
        }

        if (ids == null) {
          return this._data.get(viewOptions);
        } else {
          return this._data.get(ids, viewOptions);
        }
      }
      /** @inheritDoc */

    }, {
      key: "getIds",
      value: function getIds(options) {
        if (this._data.length) {
          var defaultFilter = filter(this._options);

          var optionsFilter = options != null ? filter(options) : null;
          var filter$1;

          if (optionsFilter) {
            if (defaultFilter) {
              filter$1 = function filter(item) {
                return defaultFilter(item) && optionsFilter(item);
              };
            } else {
              filter$1 = optionsFilter;
            }
          } else {
            filter$1 = defaultFilter;
          }

          return this._data.getIds({
            filter: filter$1,
            order: options && options.order
          });
        } else {
          return [];
        }
      }
      /** @inheritDoc */

    }, {
      key: "forEach",
      value: function forEach(callback, options) {
        if (this._data) {
          var _context2;

          var defaultFilter = filter(this._options);

          var optionsFilter = options && filter(options);

          var filter$1;

          if (optionsFilter) {
            if (defaultFilter) {
              filter$1 = function filter(item) {
                return defaultFilter(item) && optionsFilter(item);
              };
            } else {
              filter$1 = optionsFilter;
            }
          } else {
            filter$1 = defaultFilter;
          }

          forEach$1(_context2 = this._data).call(_context2, callback, {
            filter: filter$1,
            order: options && options.order
          });
        }
      }
      /** @inheritDoc */

    }, {
      key: "map",
      value: function map(callback, options) {
        if (this._data) {
          var _context3;

          var defaultFilter = filter(this._options);

          var optionsFilter = options && filter(options);

          var filter$1;

          if (optionsFilter) {
            if (defaultFilter) {
              filter$1 = function filter(item) {
                return defaultFilter(item) && optionsFilter(item);
              };
            } else {
              filter$1 = optionsFilter;
            }
          } else {
            filter$1 = defaultFilter;
          }

          return map$3(_context3 = this._data).call(_context3, callback, {
            filter: filter$1,
            order: options && options.order
          });
        } else {
          return [];
        }
      }
      /** @inheritDoc */

    }, {
      key: "getDataSet",
      value: function getDataSet() {
        return this._data.getDataSet();
      }
      /** @inheritDoc */

    }, {
      key: "stream",
      value: function stream(ids) {
        var _context4;

        return this._data.stream(ids || _defineProperty({}, iterator, bind$6(_context4 = keys(this._ids)).call(_context4, this._ids)));
      }
      /**
       * Render the instance unusable prior to garbage collection.
       *
       * @remarks
       * The intention of this method is to help discover scenarios where the data
       * view is being used when the programmer thinks it has been garbage collected
       * already. It's stricter version of `dataView.setData(null)`.
       */

    }, {
      key: "dispose",
      value: function dispose() {
        var _this$_data;

        if ((_this$_data = this._data) !== null && _this$_data !== void 0 && _this$_data.off) {
          this._data.off("*", this._listener);
        }

        var message = "This data view has already been disposed of.";
        var replacement = {
          get: function get() {
            throw new Error(message);
          },
          set: function set() {
            throw new Error(message);
          },
          configurable: false
        };

        var _iterator = _createForOfIteratorHelper(ownKeys$1(DataView.prototype)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            defineProperty$4(this, key, replacement);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      /**
       * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
       *
       * @param event - The name of the event.
       * @param params - Parameters of the event.
       * @param senderId - Id supplied by the sender.
       */

    }, {
      key: "_onEvent",
      value: function _onEvent(event, params, senderId) {
        if (!params || !params.items || !this._data) {
          return;
        }

        var ids = params.items;
        var addedIds = [];
        var updatedIds = [];
        var removedIds = [];
        var oldItems = [];
        var updatedItems = [];
        var removedItems = [];

        switch (event) {
          case "add":
            // filter the ids of the added items
            for (var i = 0, len = ids.length; i < len; i++) {
              var id = ids[i];
              var item = this.get(id);

              if (item) {
                this._ids.add(id);

                addedIds.push(id);
              }
            }

            break;

          case "update":
            // determine the event from the views viewpoint: an updated
            // item can be added, updated, or removed from this view.
            for (var _i2 = 0, _len2 = ids.length; _i2 < _len2; _i2++) {
              var _id2 = ids[_i2];

              var _item = this.get(_id2);

              if (_item) {
                if (this._ids.has(_id2)) {
                  updatedIds.push(_id2);
                  updatedItems.push(params.data[_i2]);
                  oldItems.push(params.oldData[_i2]);
                } else {
                  this._ids.add(_id2);

                  addedIds.push(_id2);
                }
              } else {
                if (this._ids.has(_id2)) {
                  this._ids.delete(_id2);

                  removedIds.push(_id2);
                  removedItems.push(params.oldData[_i2]);
                }
              }
            }

            break;

          case "remove":
            // filter the ids of the removed items
            for (var _i3 = 0, _len3 = ids.length; _i3 < _len3; _i3++) {
              var _id3 = ids[_i3];

              if (this._ids.has(_id3)) {
                this._ids.delete(_id3);

                removedIds.push(_id3);
                removedItems.push(params.oldData[_i3]);
              }
            }

            break;
        }

        this.length += addedIds.length - removedIds.length;

        if (addedIds.length) {
          this._trigger("add", {
            items: addedIds
          }, senderId);
        }

        if (updatedIds.length) {
          this._trigger("update", {
            items: updatedIds,
            oldData: oldItems,
            data: updatedItems
          }, senderId);
        }

        if (removedIds.length) {
          this._trigger("remove", {
            items: removedIds,
            oldData: removedItems
          }, senderId);
        }
      }
    }]);

    return DataView;
  }(DataSetPart);

  /**
   * Check that given value is compatible with Vis Data Set interface.
   *
   * @param idProp - The expected property to contain item id.
   * @param v - The value to be tested.
   * @returns True if all expected values and methods match, false otherwise.
   */
  function isDataSetLike(idProp, v) {
    return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof forEach$1(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
  }

  /**
   * Check that given value is compatible with Vis Data View interface.
   *
   * @param idProp - The expected property to contain item id.
   * @param v - The value to be tested.
   * @returns True if all expected values and methods match, false otherwise.
   */

  function isDataViewLike(idProp, v) {
    return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof forEach$1(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
  }

  exports.DELETE = DELETE;
  exports.DataSet = DataSet;
  exports.DataStream = DataStream;
  exports.DataView = DataView;
  exports.Queue = Queue;
  exports.createNewDataPipeFrom = createNewDataPipeFrom;
  exports.isDataSetLike = isDataSetLike;
  exports.isDataViewLike = isDataViewLike;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vis-data.js.map


/***/ }),

/***/ "./node_modules/vis-network/peer/umd/vis-network.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/vis-network/peer/umd/vis-network.min.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * vis-network
 * https://visjs.github.io/vis-network/
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 9.1.2
 * @date    2022-03-28T20:13:51.046Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
!function(t,e){ true?e(exports,__webpack_require__(/*! vis-data/peer/umd/vis-data.js */ "./node_modules/vis-data/peer/umd/vis-data.js")):0}(this,(function(t,e){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},n=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),r=function(t){try{return!!t()}catch(t){return!0}},s=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),a=s,h=Function.prototype,d=h.apply,l=h.call,c="object"==typeof Reflect&&Reflect.apply||(a?l.bind(d):function(){return l.apply(d,arguments)}),u=s,f=Function.prototype,p=f.bind,v=f.call,g=u&&p.bind(v,v),y=u?function(t){return t&&g(t)}:function(t){return t&&function(){return v.apply(t,arguments)}},m=function(t){return"function"==typeof t},b={},w=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),k=s,_=Function.prototype.call,x=k?_.bind(_):function(){return _.apply(_,arguments)},E={},O={}.propertyIsEnumerable,C=Object.getOwnPropertyDescriptor,S=C&&!O.call({1:2},1);E.f=S?function(t){var e=C(this,t);return!!e&&e.enumerable}:O;var T,M,P=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},D=y,B=D({}.toString),I=D("".slice),z=function(t){return I(B(t),8,-1)},F=y,N=r,A=z,R=n.Object,j=F("".split),L=N((function(){return!R("z").propertyIsEnumerable(0)}))?function(t){return"String"==A(t)?j(t,""):R(t)}:R,H=n.TypeError,W=function(t){if(null==t)throw H("Can't call method on "+t);return t},V=L,q=W,U=function(t){return V(q(t))},Y=m,X=function(t){return"object"==typeof t?null!==t:Y(t)},G={},K=G,$=n,Z=m,Q=function(t){return Z(t)?t:void 0},J=function(t,e){return arguments.length<2?Q(K[t])||Q($[t]):K[t]&&K[t][e]||$[t]&&$[t][e]},tt=y({}.isPrototypeOf),et=J("navigator","userAgent")||"",it=n,ot=et,nt=it.process,rt=it.Deno,st=nt&&nt.versions||rt&&rt.version,at=st&&st.v8;at&&(M=(T=at.split("."))[0]>0&&T[0]<4?1:+(T[0]+T[1])),!M&&ot&&(!(T=ot.match(/Edge\/(\d+)/))||T[1]>=74)&&(T=ot.match(/Chrome\/(\d+)/))&&(M=+T[1]);var ht=M,dt=ht,lt=r,ct=!!Object.getOwnPropertySymbols&&!lt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&dt&&dt<41})),ut=ct&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ft=J,pt=m,vt=tt,gt=ut,yt=n.Object,mt=gt?function(t){return"symbol"==typeof t}:function(t){var e=ft("Symbol");return pt(e)&&vt(e.prototype,yt(t))},bt=n.String,wt=function(t){try{return bt(t)}catch(t){return"Object"}},kt=m,_t=wt,xt=n.TypeError,Et=function(t){if(kt(t))return t;throw xt(_t(t)+" is not a function")},Ot=Et,Ct=function(t,e){var i=t[e];return null==i?void 0:Ot(i)},St=x,Tt=m,Mt=X,Pt=n.TypeError,Dt={exports:{}},Bt=n,It=Object.defineProperty,zt=function(t,e){try{It(Bt,t,{value:e,configurable:!0,writable:!0})}catch(i){Bt[t]=e}return e},Ft="__core-js_shared__",Nt=n[Ft]||zt(Ft,{}),At=Nt;(Dt.exports=function(t,e){return At[t]||(At[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Rt=W,jt=n.Object,Lt=function(t){return jt(Rt(t))},Ht=Lt,Wt=y({}.hasOwnProperty),Vt=Object.hasOwn||function(t,e){return Wt(Ht(t),e)},qt=y,Ut=0,Yt=Math.random(),Xt=qt(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Xt(++Ut+Yt,36)},Kt=n,$t=Dt.exports,Zt=Vt,Qt=Gt,Jt=ct,te=ut,ee=$t("wks"),ie=Kt.Symbol,oe=ie&&ie.for,ne=te?ie:ie&&ie.withoutSetter||Qt,re=function(t){if(!Zt(ee,t)||!Jt&&"string"!=typeof ee[t]){var e="Symbol."+t;Jt&&Zt(ie,t)?ee[t]=ie[t]:ee[t]=te&&oe?oe(e):ne(e)}return ee[t]},se=x,ae=X,he=mt,de=Ct,le=function(t,e){var i,o;if("string"===e&&Tt(i=t.toString)&&!Mt(o=St(i,t)))return o;if(Tt(i=t.valueOf)&&!Mt(o=St(i,t)))return o;if("string"!==e&&Tt(i=t.toString)&&!Mt(o=St(i,t)))return o;throw Pt("Can't convert object to primitive value")},ce=re,ue=n.TypeError,fe=ce("toPrimitive"),pe=function(t,e){if(!ae(t)||he(t))return t;var i,o=de(t,fe);if(o){if(void 0===e&&(e="default"),i=se(o,t,e),!ae(i)||he(i))return i;throw ue("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},ve=mt,ge=function(t){var e=pe(t,"string");return ve(e)?e:e+""},ye=X,me=n.document,be=ye(me)&&ye(me.createElement),we=function(t){return be?me.createElement(t):{}},ke=we,_e=!w&&!r((function(){return 7!=Object.defineProperty(ke("div"),"a",{get:function(){return 7}}).a})),xe=w,Ee=x,Oe=E,Ce=P,Se=U,Te=ge,Me=Vt,Pe=_e,De=Object.getOwnPropertyDescriptor;b.f=xe?De:function(t,e){if(t=Se(t),e=Te(e),Pe)try{return De(t,e)}catch(t){}if(Me(t,e))return Ce(!Ee(Oe.f,t,e),t[e])};var Be=r,Ie=m,ze=/#|\.prototype\./,Fe=function(t,e){var i=Ae[Ne(t)];return i==je||i!=Re&&(Ie(e)?Be(e):!!e)},Ne=Fe.normalize=function(t){return String(t).replace(ze,".").toLowerCase()},Ae=Fe.data={},Re=Fe.NATIVE="N",je=Fe.POLYFILL="P",Le=Fe,He=Et,We=s,Ve=y(y.bind),qe=function(t,e){return He(t),void 0===e?t:We?Ve(t,e):function(){return t.apply(e,arguments)}},Ue={},Ye=w&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Xe=n,Ge=X,Ke=Xe.String,$e=Xe.TypeError,Ze=function(t){if(Ge(t))return t;throw $e(Ke(t)+" is not an object")},Qe=w,Je=_e,ti=Ye,ei=Ze,ii=ge,oi=n.TypeError,ni=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,si="enumerable",ai="configurable",hi="writable";Ue.f=Qe?ti?function(t,e,i){if(ei(t),e=ii(e),ei(i),"function"==typeof t&&"prototype"===e&&"value"in i&&hi in i&&!i.writable){var o=ri(t,e);o&&o.writable&&(t[e]=i.value,i={configurable:ai in i?i.configurable:o.configurable,enumerable:si in i?i.enumerable:o.enumerable,writable:!1})}return ni(t,e,i)}:ni:function(t,e,i){if(ei(t),e=ii(e),ei(i),Je)try{return ni(t,e,i)}catch(t){}if("get"in i||"set"in i)throw oi("Accessors not supported");return"value"in i&&(t[e]=i.value),t};var di=Ue,li=P,ci=w?function(t,e,i){return di.f(t,e,li(1,i))}:function(t,e,i){return t[e]=i,t},ui=n,fi=c,pi=y,vi=m,gi=b.f,yi=Le,mi=G,bi=qe,wi=ci,ki=Vt,_i=function(t){var e=function(i,o,n){if(this instanceof e){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,o)}return new t(i,o,n)}return fi(t,this,arguments)};return e.prototype=t.prototype,e},xi=function(t,e){var i,o,n,r,s,a,h,d,l=t.target,c=t.global,u=t.stat,f=t.proto,p=c?ui:u?ui[l]:(ui[l]||{}).prototype,v=c?mi:mi[l]||wi(mi,l,{})[l],g=v.prototype;for(n in e)i=!yi(c?n:l+(u?".":"#")+n,t.forced)&&p&&ki(p,n),s=v[n],i&&(a=t.noTargetGet?(d=gi(p,n))&&d.value:p[n]),r=i&&a?a:e[n],i&&typeof s==typeof r||(h=t.bind&&i?bi(r,ui):t.wrap&&i?_i(r):f&&vi(r)?pi(r):r,(t.sham||r&&r.sham||s&&s.sham)&&wi(h,"sham",!0),wi(v,n,h),f&&(ki(mi,o=l+"Prototype")||wi(mi,o,{}),wi(mi[o],n,r),t.real&&g&&!g[n]&&wi(g,n,r)))},Ei=Math.ceil,Oi=Math.floor,Ci=function(t){var e=+t;return e!=e||0===e?0:(e>0?Oi:Ei)(e)},Si=Ci,Ti=Math.max,Mi=Math.min,Pi=function(t,e){var i=Si(t);return i<0?Ti(i+e,0):Mi(i,e)},Di=Ci,Bi=Math.min,Ii=function(t){return t>0?Bi(Di(t),9007199254740991):0},zi=function(t){return Ii(t.length)},Fi=U,Ni=Pi,Ai=zi,Ri=function(t){return function(e,i,o){var n,r=Fi(e),s=Ai(r),a=Ni(o,s);if(t&&i!=i){for(;s>a;)if((n=r[a++])!=n)return!0}else for(;s>a;a++)if((t||a in r)&&r[a]===i)return t||a||0;return!t&&-1}},ji={includes:Ri(!0),indexOf:Ri(!1)},Li={},Hi=Vt,Wi=U,Vi=ji.indexOf,qi=Li,Ui=y([].push),Yi=function(t,e){var i,o=Wi(t),n=0,r=[];for(i in o)!Hi(qi,i)&&Hi(o,i)&&Ui(r,i);for(;e.length>n;)Hi(o,i=e[n++])&&(~Vi(r,i)||Ui(r,i));return r},Xi=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Gi=Yi,Ki=Xi,$i=Object.keys||function(t){return Gi(t,Ki)},Zi={};Zi.f=Object.getOwnPropertySymbols;var Qi=w,Ji=y,to=x,eo=r,io=$i,oo=Zi,no=E,ro=Lt,so=L,ao=Object.assign,ho=Object.defineProperty,lo=Ji([].concat),co=!ao||eo((function(){if(Qi&&1!==ao({b:1},ao(ho({},"a",{enumerable:!0,get:function(){ho(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach((function(t){e[t]=t})),7!=ao({},t)[i]||io(ao({},e)).join("")!=o}))?function(t,e){for(var i=ro(t),o=arguments.length,n=1,r=oo.f,s=no.f;o>n;)for(var a,h=so(arguments[n++]),d=r?lo(io(h),r(h)):io(h),l=d.length,c=0;l>c;)a=d[c++],Qi&&!to(s,h,a)||(i[a]=h[a]);return i}:ao,uo=co;xi({target:"Object",stat:!0,forced:Object.assign!==uo},{assign:uo});var fo=G.Object.assign,po=y([].slice),vo=y,go=Et,yo=X,mo=Vt,bo=po,wo=s,ko=n.Function,_o=vo([].concat),xo=vo([].join),Eo={},Oo=function(t,e,i){if(!mo(Eo,e)){for(var o=[],n=0;n<e;n++)o[n]="a["+n+"]";Eo[e]=ko("C,a","return new C("+xo(o,",")+")")}return Eo[e](t,i)},Co=wo?ko.bind:function(t){var e=go(this),i=e.prototype,o=bo(arguments,1),n=function(){var i=_o(o,bo(arguments));return this instanceof n?Oo(e,i.length,i):e.apply(t,i)};return yo(i)&&(n.prototype=i),n},So=Co;xi({target:"Function",proto:!0,forced:Function.bind!==So},{bind:So});var To=G,Mo=function(t){return To[t+"Prototype"]},Po=Mo("Function").bind,Do=tt,Bo=Po,Io=Function.prototype,zo=function(t){var e=t.bind;return t===Io||Do(Io,t)&&e===Io.bind?Bo:e},Fo=zo;function No(t,e,i,o){t.beginPath(),t.arc(e,i,o,0,2*Math.PI,!1),t.closePath()}function Ao(t,e,i,o,n,r){var s=Math.PI/180;o-2*r<0&&(r=o/2),n-2*r<0&&(r=n/2),t.beginPath(),t.moveTo(e+r,i),t.lineTo(e+o-r,i),t.arc(e+o-r,i+r,r,270*s,360*s,!1),t.lineTo(e+o,i+n-r),t.arc(e+o-r,i+n-r,r,0,90*s,!1),t.lineTo(e+r,i+n),t.arc(e+r,i+n-r,r,90*s,180*s,!1),t.lineTo(e,i+r),t.arc(e+r,i+r,r,180*s,270*s,!1),t.closePath()}function Ro(t,e,i,o,n){var r=.5522848,s=o/2*r,a=n/2*r,h=e+o,d=i+n,l=e+o/2,c=i+n/2;t.beginPath(),t.moveTo(e,c),t.bezierCurveTo(e,c-a,l-s,i,l,i),t.bezierCurveTo(l+s,i,h,c-a,h,c),t.bezierCurveTo(h,c+a,l+s,d,l,d),t.bezierCurveTo(l-s,d,e,c+a,e,c),t.closePath()}function jo(t,e,i,o,n){var r=n*(1/3),s=.5522848,a=o/2*s,h=r/2*s,d=e+o,l=i+r,c=e+o/2,u=i+r/2,f=i+(n-r/2),p=i+n;t.beginPath(),t.moveTo(d,u),t.bezierCurveTo(d,u+h,c+a,l,c,l),t.bezierCurveTo(c-a,l,e,u+h,e,u),t.bezierCurveTo(e,u-h,c-a,i,c,i),t.bezierCurveTo(c+a,i,d,u-h,d,u),t.lineTo(d,f),t.bezierCurveTo(d,f+h,c+a,p,c,p),t.bezierCurveTo(c-a,p,e,f+h,e,f),t.lineTo(e,u)}function Lo(t,e,i,o,n,r){t.beginPath(),t.moveTo(e,i);for(var s=r.length,a=o-e,h=n-i,d=h/a,l=Math.sqrt(a*a+h*h),c=0,u=!0,f=0,p=+r[0];l>=.1;)(p=+r[c++%s])>l&&(p=l),f=Math.sqrt(p*p/(1+d*d)),e+=f=a<0?-f:f,i+=d*f,!0===u?t.lineTo(e,i):t.moveTo(e,i),l-=p,u=!u}var Ho={circle:No,dashedLine:Lo,database:jo,diamond:function(t,e,i,o){t.beginPath(),t.lineTo(e,i+o),t.lineTo(e+o,i),t.lineTo(e,i-o),t.lineTo(e-o,i),t.closePath()},ellipse:Ro,ellipse_vis:Ro,hexagon:function(t,e,i,o){t.beginPath();var n=2*Math.PI/6;t.moveTo(e+o,i);for(var r=1;r<6;r++)t.lineTo(e+o*Math.cos(n*r),i+o*Math.sin(n*r));t.closePath()},roundRect:Ao,square:function(t,e,i,o){t.beginPath(),t.rect(e-o,i-o,2*o,2*o),t.closePath()},star:function(t,e,i,o){t.beginPath(),i+=.1*(o*=.82);for(var n=0;n<10;n++){var r=n%2==0?1.3*o:.5*o;t.lineTo(e+r*Math.sin(2*n*Math.PI/10),i-r*Math.cos(2*n*Math.PI/10))}t.closePath()},triangle:function(t,e,i,o){t.beginPath(),i+=.275*(o*=1.15);var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r);t.moveTo(e,i-(a-s)),t.lineTo(e+r,i+s),t.lineTo(e-r,i+s),t.lineTo(e,i-(a-s)),t.closePath()},triangleDown:function(t,e,i,o){t.beginPath(),i-=.275*(o*=1.15);var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r);t.moveTo(e,i+(a-s)),t.lineTo(e+r,i-s),t.lineTo(e-r,i-s),t.lineTo(e,i+(a-s)),t.closePath()}};var Wo={exports:{}};!function(t){function e(t){if(t)return function(t){for(var i in e.prototype)t[i]=e.prototype[i];return t}(t)}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},e.prototype.once=function(t,e){function i(){this.off(t,i),e.apply(this,arguments)}return i.fn=e,this.on(t,i),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i,o=this._callbacks["$"+t];if(!o)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<o.length;n++)if((i=o[n])===e||i.fn===e){o.splice(n,1);break}return 0===o.length&&delete this._callbacks["$"+t],this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),i=this._callbacks["$"+t],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(i){o=0;for(var n=(i=i.slice(0)).length;o<n;++o)i[o].apply(this,e)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}}(Wo);var Vo=Wo.exports,qo={};qo[re("toStringTag")]="z";var Uo="[object z]"===String(qo),Yo=n,Xo=Uo,Go=m,Ko=z,$o=re("toStringTag"),Zo=Yo.Object,Qo="Arguments"==Ko(function(){return arguments}()),Jo=Xo?Ko:function(t){var e,i,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Zo(t),$o))?i:Qo?Ko(e):"Object"==(o=Ko(e))&&Go(e.callee)?"Arguments":o},tn=Jo,en=n.String,on=function(t){if("Symbol"===tn(t))throw TypeError("Cannot convert a Symbol value to a string");return en(t)},nn=y,rn=Ci,sn=on,an=W,hn=nn("".charAt),dn=nn("".charCodeAt),ln=nn("".slice),cn=function(t){return function(e,i){var o,n,r=sn(an(e)),s=rn(i),a=r.length;return s<0||s>=a?t?"":void 0:(o=dn(r,s))<55296||o>56319||s+1===a||(n=dn(r,s+1))<56320||n>57343?t?hn(r,s):o:t?ln(r,s,s+2):n-56320+(o-55296<<10)+65536}},un={codeAt:cn(!1),charAt:cn(!0)},fn=m,pn=Nt,vn=y(Function.toString);fn(pn.inspectSource)||(pn.inspectSource=function(t){return vn(t)});var gn,yn,mn,bn=pn.inspectSource,wn=m,kn=bn,_n=n.WeakMap,xn=wn(_n)&&/native code/.test(kn(_n)),En=Dt.exports,On=Gt,Cn=En("keys"),Sn=function(t){return Cn[t]||(Cn[t]=On(t))},Tn=xn,Mn=n,Pn=y,Dn=X,Bn=ci,In=Vt,zn=Nt,Fn=Sn,Nn=Li,An="Object already initialized",Rn=Mn.TypeError,jn=Mn.WeakMap;if(Tn||zn.state){var Ln=zn.state||(zn.state=new jn),Hn=Pn(Ln.get),Wn=Pn(Ln.has),Vn=Pn(Ln.set);gn=function(t,e){if(Wn(Ln,t))throw new Rn(An);return e.facade=t,Vn(Ln,t,e),e},yn=function(t){return Hn(Ln,t)||{}},mn=function(t){return Wn(Ln,t)}}else{var qn=Fn("state");Nn[qn]=!0,gn=function(t,e){if(In(t,qn))throw new Rn(An);return e.facade=t,Bn(t,qn,e),e},yn=function(t){return In(t,qn)?t[qn]:{}},mn=function(t){return In(t,qn)}}var Un={set:gn,get:yn,has:mn,enforce:function(t){return mn(t)?yn(t):gn(t,{})},getterFor:function(t){return function(e){var i;if(!Dn(e)||(i=yn(e)).type!==t)throw Rn("Incompatible receiver, "+t+" required");return i}}},Yn=w,Xn=Vt,Gn=Function.prototype,Kn=Yn&&Object.getOwnPropertyDescriptor,$n=Xn(Gn,"name"),Zn={EXISTS:$n,PROPER:$n&&"something"===function(){}.name,CONFIGURABLE:$n&&(!Yn||Yn&&Kn(Gn,"name").configurable)},Qn={},Jn=w,tr=Ye,er=Ue,ir=Ze,or=U,nr=$i;Qn.f=Jn&&!tr?Object.defineProperties:function(t,e){ir(t);for(var i,o=or(e),n=nr(e),r=n.length,s=0;r>s;)er.f(t,i=n[s++],o[i]);return t};var rr,sr=J("document","documentElement"),ar=Ze,hr=Qn,dr=Xi,lr=Li,cr=sr,ur=we,fr=Sn("IE_PROTO"),pr=function(){},vr=function(t){return"<script>"+t+"</"+"script>"},gr=function(t){t.write(vr("")),t.close();var e=t.parentWindow.Object;return t=null,e},yr=function(){try{rr=new ActiveXObject("htmlfile")}catch(t){}var t,e;yr="undefined"!=typeof document?document.domain&&rr?gr(rr):((e=ur("iframe")).style.display="none",cr.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(vr("document.F=Object")),t.close(),t.F):gr(rr);for(var i=dr.length;i--;)delete yr.prototype[dr[i]];return yr()};lr[fr]=!0;var mr,br,wr,kr=Object.create||function(t,e){var i;return null!==t?(pr.prototype=ar(t),i=new pr,pr.prototype=null,i[fr]=t):i=yr(),void 0===e?i:hr.f(i,e)},_r=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),xr=n,Er=Vt,Or=m,Cr=Lt,Sr=_r,Tr=Sn("IE_PROTO"),Mr=xr.Object,Pr=Mr.prototype,Dr=Sr?Mr.getPrototypeOf:function(t){var e=Cr(t);if(Er(e,Tr))return e[Tr];var i=e.constructor;return Or(i)&&e instanceof i?i.prototype:e instanceof Mr?Pr:null},Br=ci,Ir=function(t,e,i,o){o&&o.enumerable?t[e]=i:Br(t,e,i)},zr=r,Fr=m,Nr=kr,Ar=Dr,Rr=Ir,jr=re("iterator"),Lr=!1;[].keys&&("next"in(wr=[].keys())?(br=Ar(Ar(wr)))!==Object.prototype&&(mr=br):Lr=!0);var Hr=null==mr||zr((function(){var t={};return mr[jr].call(t)!==t}));Fr((mr=Hr?{}:Nr(mr))[jr])||Rr(mr,jr,(function(){return this}));var Wr={IteratorPrototype:mr,BUGGY_SAFARI_ITERATORS:Lr},Vr=Jo,qr=Uo?{}.toString:function(){return"[object "+Vr(this)+"]"},Ur=Uo,Yr=Ue.f,Xr=ci,Gr=Vt,Kr=qr,$r=re("toStringTag"),Zr=function(t,e,i,o){if(t){var n=i?t:t.prototype;Gr(n,$r)||Yr(n,$r,{configurable:!0,value:e}),o&&!Ur&&Xr(n,"toString",Kr)}},Qr={},Jr=Wr.IteratorPrototype,ts=kr,es=P,is=Zr,os=Qr,ns=function(){return this},rs=n,ss=m,as=rs.String,hs=rs.TypeError,ds=y,ls=Ze,cs=function(t){if("object"==typeof t||ss(t))return t;throw hs("Can't set "+as(t)+" as a prototype")},us=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=ds(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(i,[]),e=i instanceof Array}catch(t){}return function(i,o){return ls(i),cs(o),e?t(i,o):i.__proto__=o,i}}():void 0),fs=xi,ps=x,vs=function(t,e,i,o){var n=e+" Iterator";return t.prototype=ts(Jr,{next:es(+!o,i)}),is(t,n,!1,!0),os[n]=ns,t},gs=Dr,ys=Zr,ms=Ir,bs=Qr,ws=Zn.PROPER,ks=Wr.BUGGY_SAFARI_ITERATORS,_s=re("iterator"),xs="keys",Es="values",Os="entries",Cs=function(){return this},Ss=function(t,e,i,o,n,r,s){vs(i,e,o);var a,h,d,l=function(t){if(t===n&&v)return v;if(!ks&&t in f)return f[t];switch(t){case xs:case Es:case Os:return function(){return new i(this,t)}}return function(){return new i(this)}},c=e+" Iterator",u=!1,f=t.prototype,p=f[_s]||f["@@iterator"]||n&&f[n],v=!ks&&p||l(n),g="Array"==e&&f.entries||p;if(g&&(a=gs(g.call(new t)))!==Object.prototype&&a.next&&(ys(a,c,!0,!0),bs[c]=Cs),ws&&n==Es&&p&&p.name!==Es&&(u=!0,v=function(){return ps(p,this)}),n)if(h={values:l(Es),keys:r?v:l(xs),entries:l(Os)},s)for(d in h)(ks||u||!(d in f))&&ms(f,d,h[d]);else fs({target:e,proto:!0,forced:ks||u},h);return s&&f[_s]!==v&&ms(f,_s,v,{name:n}),bs[e]=v,h},Ts=un.charAt,Ms=on,Ps=Un,Ds=Ss,Bs="String Iterator",Is=Ps.set,zs=Ps.getterFor(Bs);Ds(String,"String",(function(t){Is(this,{type:Bs,string:Ms(t),index:0})}),(function(){var t,e=zs(this),i=e.string,o=e.index;return o>=i.length?{value:void 0,done:!0}:(t=Ts(i,o),e.index+=t.length,{value:t,done:!1})}));var Fs=x,Ns=Ze,As=Ct,Rs=function(t,e,i){var o,n;Ns(t);try{if(!(o=As(t,"return"))){if("throw"===e)throw i;return i}o=Fs(o,t)}catch(t){n=!0,o=t}if("throw"===e)throw i;if(n)throw o;return Ns(o),i},js=Ze,Ls=Rs,Hs=Qr,Ws=re("iterator"),Vs=Array.prototype,qs=function(t){return void 0!==t&&(Hs.Array===t||Vs[Ws]===t)},Us=y,Ys=r,Xs=m,Gs=Jo,Ks=bn,$s=function(){},Zs=[],Qs=J("Reflect","construct"),Js=/^\s*(?:class|function)\b/,ta=Us(Js.exec),ea=!Js.exec($s),ia=function(t){if(!Xs(t))return!1;try{return Qs($s,Zs,t),!0}catch(t){return!1}},oa=function(t){if(!Xs(t))return!1;switch(Gs(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ea||!!ta(Js,Ks(t))}catch(t){return!0}};oa.sham=!0;var na=!Qs||Ys((function(){var t;return ia(ia.call)||!ia(Object)||!ia((function(){t=!0}))||t}))?oa:ia,ra=ge,sa=Ue,aa=P,ha=function(t,e,i){var o=ra(e);o in t?sa.f(t,o,aa(0,i)):t[o]=i},da=Jo,la=Ct,ca=Qr,ua=re("iterator"),fa=function(t){if(null!=t)return la(t,ua)||la(t,"@@iterator")||ca[da(t)]},pa=x,va=Et,ga=Ze,ya=wt,ma=fa,ba=n.TypeError,wa=function(t,e){var i=arguments.length<2?ma(t):e;if(va(i))return ga(pa(i,t));throw ba(ya(t)+" is not iterable")},ka=qe,_a=x,xa=Lt,Ea=function(t,e,i,o){try{return o?e(js(i)[0],i[1]):e(i)}catch(e){Ls(t,"throw",e)}},Oa=qs,Ca=na,Sa=zi,Ta=ha,Ma=wa,Pa=fa,Da=n.Array,Ba=re("iterator"),Ia=!1;try{var za=0,Fa={next:function(){return{done:!!za++}},return:function(){Ia=!0}};Fa[Ba]=function(){return this},Array.from(Fa,(function(){throw 2}))}catch(t){}var Na=function(t){var e=xa(t),i=Ca(this),o=arguments.length,n=o>1?arguments[1]:void 0,r=void 0!==n;r&&(n=ka(n,o>2?arguments[2]:void 0));var s,a,h,d,l,c,u=Pa(e),f=0;if(!u||this==Da&&Oa(u))for(s=Sa(e),a=i?new this(s):Da(s);s>f;f++)c=r?n(e[f],f):e[f],Ta(a,f,c);else for(l=(d=Ma(e,u)).next,a=i?new this:[];!(h=_a(l,d)).done;f++)c=r?Ea(d,n,[h.value,f],!0):h.value,Ta(a,f,c);return a.length=f,a},Aa=function(t,e){if(!e&&!Ia)return!1;var i=!1;try{var o={};o[Ba]=function(){return{next:function(){return{done:i=!0}}}},t(o)}catch(t){}return i};xi({target:"Array",stat:!0,forced:!Aa((function(t){Array.from(t)}))},{from:Na});var Ra=G.Array.from,ja=Ra,La=U,Ha=Qr,Wa=Un;Ue.f;var Va=Ss,qa="Array Iterator",Ua=Wa.set,Ya=Wa.getterFor(qa);Va(Array,"Array",(function(t,e){Ua(this,{type:qa,target:La(t),index:0,kind:e})}),(function(){var t=Ya(this),e=t.target,i=t.kind,o=t.index++;return!e||o>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:o,done:!1}:"values"==i?{value:e[o],done:!1}:{value:[o,e[o]],done:!1}}),"values"),Ha.Arguments=Ha.Array;var Xa=fa,Ga={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ka=n,$a=Jo,Za=ci,Qa=Qr,Ja=re("toStringTag");for(var th in Ga){var eh=Ka[th],ih=eh&&eh.prototype;ih&&$a(ih)!==Ja&&Za(ih,Ja,th),Qa[th]=Qa.Array}var oh=Xa,nh=z,rh=Array.isArray||function(t){return"Array"==nh(t)},sh={},ah=Yi,hh=Xi.concat("length","prototype");sh.f=Object.getOwnPropertyNames||function(t){return ah(t,hh)};var dh={},lh=Pi,ch=zi,uh=ha,fh=n.Array,ph=Math.max,vh=function(t,e,i){for(var o=ch(t),n=lh(e,o),r=lh(void 0===i?o:i,o),s=fh(ph(r-n,0)),a=0;n<r;n++,a++)uh(s,a,t[n]);return s.length=a,s},gh=z,yh=U,mh=sh.f,bh=vh,wh="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];dh.f=function(t){return wh&&"Window"==gh(t)?function(t){try{return mh(t)}catch(t){return bh(wh)}}(t):mh(yh(t))};var kh={},_h=re;kh.f=_h;var xh=G,Eh=Vt,Oh=kh,Ch=Ue.f,Sh=function(t){var e=xh.Symbol||(xh.Symbol={});Eh(e,t)||Ch(e,t,{value:Oh.f(t)})},Th=n,Mh=rh,Ph=na,Dh=X,Bh=re("species"),Ih=Th.Array,zh=function(t){var e;return Mh(t)&&(e=t.constructor,(Ph(e)&&(e===Ih||Mh(e.prototype))||Dh(e)&&null===(e=e[Bh]))&&(e=void 0)),void 0===e?Ih:e},Fh=function(t,e){return new(zh(t))(0===e?0:e)},Nh=qe,Ah=L,Rh=Lt,jh=zi,Lh=Fh,Hh=y([].push),Wh=function(t){var e=1==t,i=2==t,o=3==t,n=4==t,r=6==t,s=7==t,a=5==t||r;return function(h,d,l,c){for(var u,f,p=Rh(h),v=Ah(p),g=Nh(d,l),y=jh(v),m=0,b=c||Lh,w=e?b(h,y):i||s?b(h,0):void 0;y>m;m++)if((a||m in v)&&(f=g(u=v[m],m,p),t))if(e)w[m]=f;else if(f)switch(t){case 3:return!0;case 5:return u;case 6:return m;case 2:Hh(w,u)}else switch(t){case 4:return!1;case 7:Hh(w,u)}return r?-1:o||n?n:w}},Vh={forEach:Wh(0),map:Wh(1),filter:Wh(2),some:Wh(3),every:Wh(4),find:Wh(5),findIndex:Wh(6),filterReject:Wh(7)},qh=xi,Uh=n,Yh=J,Xh=c,Gh=x,Kh=y,$h=w,Zh=ct,Qh=r,Jh=Vt,td=rh,ed=m,id=X,od=tt,nd=mt,rd=Ze,sd=Lt,ad=U,hd=ge,dd=on,ld=P,cd=kr,ud=$i,fd=sh,pd=dh,vd=Zi,gd=b,yd=Ue,md=Qn,bd=E,wd=po,kd=Ir,_d=Dt.exports,xd=Li,Ed=Gt,Od=re,Cd=kh,Sd=Sh,Td=Zr,Md=Un,Pd=Vh.forEach,Dd=Sn("hidden"),Bd="Symbol",Id=Od("toPrimitive"),zd=Md.set,Fd=Md.getterFor(Bd),Nd=Object.prototype,Ad=Uh.Symbol,Rd=Ad&&Ad.prototype,jd=Uh.TypeError,Ld=Uh.QObject,Hd=Yh("JSON","stringify"),Wd=gd.f,Vd=yd.f,qd=pd.f,Ud=bd.f,Yd=Kh([].push),Xd=_d("symbols"),Gd=_d("op-symbols"),Kd=_d("string-to-symbol-registry"),$d=_d("symbol-to-string-registry"),Zd=_d("wks"),Qd=!Ld||!Ld.prototype||!Ld.prototype.findChild,Jd=$h&&Qh((function(){return 7!=cd(Vd({},"a",{get:function(){return Vd(this,"a",{value:7}).a}})).a}))?function(t,e,i){var o=Wd(Nd,e);o&&delete Nd[e],Vd(t,e,i),o&&t!==Nd&&Vd(Nd,e,o)}:Vd,tl=function(t,e){var i=Xd[t]=cd(Rd);return zd(i,{type:Bd,tag:t,description:e}),$h||(i.description=e),i},el=function(t,e,i){t===Nd&&el(Gd,e,i),rd(t);var o=hd(e);return rd(i),Jh(Xd,o)?(i.enumerable?(Jh(t,Dd)&&t[Dd][o]&&(t[Dd][o]=!1),i=cd(i,{enumerable:ld(0,!1)})):(Jh(t,Dd)||Vd(t,Dd,ld(1,{})),t[Dd][o]=!0),Jd(t,o,i)):Vd(t,o,i)},il=function(t,e){rd(t);var i=ad(e),o=ud(i).concat(sl(i));return Pd(o,(function(e){$h&&!Gh(ol,i,e)||el(t,e,i[e])})),t},ol=function(t){var e=hd(t),i=Gh(Ud,this,e);return!(this===Nd&&Jh(Xd,e)&&!Jh(Gd,e))&&(!(i||!Jh(this,e)||!Jh(Xd,e)||Jh(this,Dd)&&this[Dd][e])||i)},nl=function(t,e){var i=ad(t),o=hd(e);if(i!==Nd||!Jh(Xd,o)||Jh(Gd,o)){var n=Wd(i,o);return!n||!Jh(Xd,o)||Jh(i,Dd)&&i[Dd][o]||(n.enumerable=!0),n}},rl=function(t){var e=qd(ad(t)),i=[];return Pd(e,(function(t){Jh(Xd,t)||Jh(xd,t)||Yd(i,t)})),i},sl=function(t){var e=t===Nd,i=qd(e?Gd:ad(t)),o=[];return Pd(i,(function(t){!Jh(Xd,t)||e&&!Jh(Nd,t)||Yd(o,Xd[t])})),o};if(Zh||(Ad=function(){if(od(Rd,this))throw jd("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?dd(arguments[0]):void 0,e=Ed(t),i=function(t){this===Nd&&Gh(i,Gd,t),Jh(this,Dd)&&Jh(this[Dd],e)&&(this[Dd][e]=!1),Jd(this,e,ld(1,t))};return $h&&Qd&&Jd(Nd,e,{configurable:!0,set:i}),tl(e,t)},kd(Rd=Ad.prototype,"toString",(function(){return Fd(this).tag})),kd(Ad,"withoutSetter",(function(t){return tl(Ed(t),t)})),bd.f=ol,yd.f=el,md.f=il,gd.f=nl,fd.f=pd.f=rl,vd.f=sl,Cd.f=function(t){return tl(Od(t),t)},$h&&Vd(Rd,"description",{configurable:!0,get:function(){return Fd(this).description}})),qh({global:!0,wrap:!0,forced:!Zh,sham:!Zh},{Symbol:Ad}),Pd(ud(Zd),(function(t){Sd(t)})),qh({target:Bd,stat:!0,forced:!Zh},{for:function(t){var e=dd(t);if(Jh(Kd,e))return Kd[e];var i=Ad(e);return Kd[e]=i,$d[i]=e,i},keyFor:function(t){if(!nd(t))throw jd(t+" is not a symbol");if(Jh($d,t))return $d[t]},useSetter:function(){Qd=!0},useSimple:function(){Qd=!1}}),qh({target:"Object",stat:!0,forced:!Zh,sham:!$h},{create:function(t,e){return void 0===e?cd(t):il(cd(t),e)},defineProperty:el,defineProperties:il,getOwnPropertyDescriptor:nl}),qh({target:"Object",stat:!0,forced:!Zh},{getOwnPropertyNames:rl,getOwnPropertySymbols:sl}),qh({target:"Object",stat:!0,forced:Qh((function(){vd.f(1)}))},{getOwnPropertySymbols:function(t){return vd.f(sd(t))}}),Hd){var al=!Zh||Qh((function(){var t=Ad();return"[null]"!=Hd([t])||"{}"!=Hd({a:t})||"{}"!=Hd(Object(t))}));qh({target:"JSON",stat:!0,forced:al},{stringify:function(t,e,i){var o=wd(arguments),n=e;if((id(e)||void 0!==t)&&!nd(t))return td(e)||(e=function(t,e){if(ed(n)&&(e=Gh(n,this,t,e)),!nd(e))return e}),o[1]=e,Xh(Hd,null,o)}})}if(!Rd[Id]){var hl=Rd.valueOf;kd(Rd,Id,(function(t){return Gh(hl,this)}))}Td(Ad,Bd),xd[Dd]=!0;var dl=G.Object.getOwnPropertySymbols,ll={exports:{}},cl=xi,ul=r,fl=U,pl=b.f,vl=w,gl=ul((function(){pl(1)}));cl({target:"Object",stat:!0,forced:!vl||gl,sham:!vl},{getOwnPropertyDescriptor:function(t,e){return pl(fl(t),e)}});var yl=G.Object,ml=ll.exports=function(t,e){return yl.getOwnPropertyDescriptor(t,e)};yl.getOwnPropertyDescriptor.sham&&(ml.sham=!0);var bl=ll.exports,wl=bl,kl=J,_l=sh,xl=Zi,El=Ze,Ol=y([].concat),Cl=kl("Reflect","ownKeys")||function(t){var e=_l.f(El(t)),i=xl.f;return i?Ol(e,i(t)):e},Sl=Cl,Tl=U,Ml=b,Pl=ha;xi({target:"Object",stat:!0,sham:!w},{getOwnPropertyDescriptors:function(t){for(var e,i,o=Tl(t),n=Ml.f,r=Sl(o),s={},a=0;r.length>a;)void 0!==(i=n(o,e=r[a++]))&&Pl(s,e,i);return s}});var Dl=G.Object.getOwnPropertyDescriptors,Bl={exports:{}},Il=xi,zl=w,Fl=Qn.f;Il({target:"Object",stat:!0,forced:Object.defineProperties!==Fl,sham:!zl},{defineProperties:Fl});var Nl=G.Object,Al=Bl.exports=function(t,e){return Nl.defineProperties(t,e)};Nl.defineProperties.sham&&(Al.sham=!0);var Rl=Bl.exports,jl={exports:{}},Ll=xi,Hl=w,Wl=Ue.f;Ll({target:"Object",stat:!0,forced:Object.defineProperty!==Wl,sham:!Hl},{defineProperty:Wl});var Vl=G.Object,ql=jl.exports=function(t,e,i){return Vl.defineProperty(t,e,i)};Vl.defineProperty.sham&&(ql.sham=!0);var Ul=jl.exports,Yl=Ul;function Xl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Gl=Ul;function Kl(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Gl(t,o.key,o)}}function $l(t,e,i){return e&&Kl(t.prototype,e),i&&Kl(t,i),Gl(t,"prototype",{writable:!1}),t}function Zl(t,e,i){return e in t?Gl(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}xi({target:"Array",stat:!0},{isArray:rh});var Ql=G.Array.isArray,Jl=Ql;var tc=r,ec=ht,ic=re("species"),oc=function(t){return ec>=51||!tc((function(){var e=[];return(e.constructor={})[ic]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},nc=xi,rc=n,sc=r,ac=rh,hc=X,dc=Lt,lc=zi,cc=ha,uc=Fh,fc=oc,pc=ht,vc=re("isConcatSpreadable"),gc=9007199254740991,yc="Maximum allowed index exceeded",mc=rc.TypeError,bc=pc>=51||!sc((function(){var t=[];return t[vc]=!1,t.concat()[0]!==t})),wc=fc("concat"),kc=function(t){if(!hc(t))return!1;var e=t[vc];return void 0!==e?!!e:ac(t)};nc({target:"Array",proto:!0,forced:!bc||!wc},{concat:function(t){var e,i,o,n,r,s=dc(this),a=uc(s,0),h=0;for(e=-1,o=arguments.length;e<o;e++)if(kc(r=-1===e?s:arguments[e])){if(h+(n=lc(r))>gc)throw mc(yc);for(i=0;i<n;i++,h++)i in r&&cc(a,h,r[i])}else{if(h>=gc)throw mc(yc);cc(a,h++,r)}return a.length=h,a}}),Sh("asyncIterator"),Sh("hasInstance"),Sh("isConcatSpreadable"),Sh("iterator"),Sh("match"),Sh("matchAll"),Sh("replace"),Sh("search"),Sh("species"),Sh("split"),Sh("toPrimitive"),Sh("toStringTag"),Sh("unscopables"),Zr(n.JSON,"JSON",!0);var _c=G.Symbol,xc=_c;Sh("asyncDispose"),Sh("dispose"),Sh("matcher"),Sh("metadata"),Sh("observable"),Sh("patternMatch"),Sh("replaceAll");var Ec=xc;var Oc=xi,Cc=n,Sc=rh,Tc=na,Mc=X,Pc=Pi,Dc=zi,Bc=U,Ic=ha,zc=re,Fc=po,Nc=oc("slice"),Ac=zc("species"),Rc=Cc.Array,jc=Math.max;Oc({target:"Array",proto:!0,forced:!Nc},{slice:function(t,e){var i,o,n,r=Bc(this),s=Dc(r),a=Pc(t,s),h=Pc(void 0===e?s:e,s);if(Sc(r)&&(i=r.constructor,(Tc(i)&&(i===Rc||Sc(i.prototype))||Mc(i)&&null===(i=i[Ac]))&&(i=void 0),i===Rc||void 0===i))return Fc(r,a,h);for(o=new(void 0===i?Rc:i)(jc(h-a,0)),n=0;a<h;a++,n++)a in r&&Ic(o,n,r[a]);return o.length=n,o}});var Lc=Mo("Array").slice,Hc=tt,Wc=Lc,Vc=Array.prototype,qc=function(t){var e=t.slice;return t===Vc||Hc(Vc,t)&&e===Vc.slice?Wc:e},Uc=qc,Yc=Uc,Xc=Ra;function Gc(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Kc(t,e){var i;if(t){if("string"==typeof t)return Gc(t,e);var o=Yc(i=Object.prototype.toString.call(t)).call(i,8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Xc(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Gc(t,e):void 0}}function $c(t,e){return function(t){if(Jl(t))return t}(t)||function(t,e){var i=null==t?null:void 0!==Ec&&oh(t)||t["@@iterator"];if(null!=i){var o,n,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);s=!0);}catch(t){a=!0,n=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return r}}(t,e)||Kc(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Zc=kh.f("iterator");function Qc(t){return Qc="function"==typeof Ec&&"symbol"==typeof Zc?function(t){return typeof t}:function(t){return t&&"function"==typeof Ec&&t.constructor===Ec&&t!==Ec.prototype?"symbol":typeof t},Qc(t)}function Jc(t){return function(t){if(Jl(t))return Gc(t)}(t)||function(t){if(void 0!==Ec&&null!=oh(t)||null!=t["@@iterator"])return Xc(t)}(t)||Kc(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var tu=_c,eu=Mo("Array").concat,iu=tt,ou=eu,nu=Array.prototype,ru=function(t){var e=t.concat;return t===nu||iu(nu,t)&&e===nu.concat?ou:e},su=ru,au=Uc;xi({target:"Reflect",stat:!0},{ownKeys:Cl}),G.Reflect.ownKeys;var hu=Ql,du=Vh.map;xi({target:"Array",proto:!0,forced:!oc("map")},{map:function(t){return du(this,t,arguments.length>1?arguments[1]:void 0)}});var lu=Mo("Array").map,cu=tt,uu=lu,fu=Array.prototype,pu=function(t){var e=t.map;return t===fu||cu(fu,t)&&e===fu.map?uu:e},vu=pu,gu=Lt,yu=$i;xi({target:"Object",stat:!0,forced:r((function(){yu(1)}))},{keys:function(t){return yu(gu(t))}});var mu=G.Object.keys,bu=xi,wu=y,ku=n.Date,_u=wu(ku.prototype.getTime);bu({target:"Date",stat:!0},{now:function(){return _u(new ku)}});var xu=G.Date.now,Eu=r,Ou=function(t,e){var i=[][t];return!!i&&Eu((function(){i.call(null,e||function(){return 1},1)}))},Cu=Vh.forEach,Su=Ou("forEach")?[].forEach:function(t){return Cu(this,t,arguments.length>1?arguments[1]:void 0)};xi({target:"Array",proto:!0,forced:[].forEach!=Su},{forEach:Su});var Tu=Mo("Array").forEach,Mu=Jo,Pu=Vt,Du=tt,Bu=Tu,Iu=Array.prototype,zu={DOMTokenList:!0,NodeList:!0},Fu=function(t){var e=t.forEach;return t===Iu||Du(Iu,t)&&e===Iu.forEach||Pu(zu,Mu(t))?Bu:e},Nu=xi,Au=rh,Ru=y([].reverse),ju=[1,2];Nu({target:"Array",proto:!0,forced:String(ju)===String(ju.reverse())},{reverse:function(){return Au(this)&&(this.length=this.length),Ru(this)}});var Lu=Mo("Array").reverse,Hu=tt,Wu=Lu,Vu=Array.prototype,qu=function(t){var e=t.reverse;return t===Vu||Hu(Vu,t)&&e===Vu.reverse?Wu:e},Uu=qu,Yu=xi,Xu=n,Gu=Pi,Ku=Ci,$u=zi,Zu=Lt,Qu=Fh,Ju=ha,tf=oc("splice"),ef=Xu.TypeError,of=Math.max,nf=Math.min,rf=9007199254740991,sf="Maximum allowed length exceeded";Yu({target:"Array",proto:!0,forced:!tf},{splice:function(t,e){var i,o,n,r,s,a,h=Zu(this),d=$u(h),l=Gu(t,d),c=arguments.length;if(0===c?i=o=0:1===c?(i=0,o=d-l):(i=c-2,o=nf(of(Ku(e),0),d-l)),d+i-o>rf)throw ef(sf);for(n=Qu(h,o),r=0;r<o;r++)(s=l+r)in h&&Ju(n,r,h[s]);if(n.length=o,i<o){for(r=l;r<d-o;r++)a=r+i,(s=r+o)in h?h[a]=h[s]:delete h[a];for(r=d;r>d-o+i;r--)delete h[r-1]}else if(i>o)for(r=d-o;r>l;r--)a=r+i-1,(s=r+o-1)in h?h[a]=h[s]:delete h[a];for(r=0;r<i;r++)h[r+l]=arguments[r+2];return h.length=d-o+i,n}});var af=Mo("Array").splice,hf=tt,df=af,lf=Array.prototype,cf=function(t){var e=t.splice;return t===lf||hf(lf,t)&&e===lf.splice?df:e},uf=cf,ff=ji.includes;xi({target:"Array",proto:!0},{includes:function(t){return ff(this,t,arguments.length>1?arguments[1]:void 0)}});var pf=Mo("Array").includes,vf=X,gf=z,yf=re("match"),mf=function(t){var e;return vf(t)&&(void 0!==(e=t[yf])?!!e:"RegExp"==gf(t))},bf=n.TypeError,wf=re("match"),kf=xi,_f=function(t){if(mf(t))throw bf("The method doesn't accept regular expressions");return t},xf=W,Ef=on,Of=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[wf]=!1,"/./"[t](e)}catch(t){}}return!1},Cf=y("".indexOf);kf({target:"String",proto:!0,forced:!Of("includes")},{includes:function(t){return!!~Cf(Ef(xf(this)),Ef(_f(t)),arguments.length>1?arguments[1]:void 0)}});var Sf=Mo("String").includes,Tf=tt,Mf=pf,Pf=Sf,Df=Array.prototype,Bf=String.prototype,If=function(t){var e=t.includes;return t===Df||Tf(Df,t)&&e===Df.includes?Mf:"string"==typeof t||t===Bf||Tf(Bf,t)&&e===Bf.includes?Pf:e},zf=If,Ff=Lt,Nf=Dr,Af=_r;xi({target:"Object",stat:!0,forced:r((function(){Nf(1)})),sham:!Af},{getPrototypeOf:function(t){return Nf(Ff(t))}});var Rf=G.Object.getPrototypeOf,jf=Rf,Lf=Vh.filter;xi({target:"Array",proto:!0,forced:!oc("filter")},{filter:function(t){return Lf(this,t,arguments.length>1?arguments[1]:void 0)}});var Hf=Mo("Array").filter,Wf=tt,Vf=Hf,qf=Array.prototype,Uf=function(t){var e=t.filter;return t===qf||Wf(qf,t)&&e===qf.filter?Vf:e},Yf=Uf,Xf=w,Gf=y,Kf=$i,$f=U,Zf=Gf(E.f),Qf=Gf([].push),Jf=function(t){return function(e){for(var i,o=$f(e),n=Kf(o),r=n.length,s=0,a=[];r>s;)i=n[s++],Xf&&!Zf(o,i)||Qf(a,t?[i,o[i]]:o[i]);return a}},tp={entries:Jf(!0),values:Jf(!1)}.values;xi({target:"Object",stat:!0},{values:function(t){return tp(t)}}),G.Object.values;var ep="\t\n\v\f\r                　\u2028\u2029\ufeff",ip=W,op=on,np=y("".replace),rp="[\t\n\v\f\r                　\u2028\u2029\ufeff]",sp=RegExp("^"+rp+rp+"*"),ap=RegExp(rp+rp+"*$"),hp=function(t){return function(e){var i=op(ip(e));return 1&t&&(i=np(i,sp,"")),2&t&&(i=np(i,ap,"")),i}},dp={start:hp(1),end:hp(2),trim:hp(3)},lp=n,cp=r,up=y,fp=on,pp=dp.trim,vp=ep,gp=lp.parseInt,yp=lp.Symbol,mp=yp&&yp.iterator,bp=/^[+-]?0x/i,wp=up(bp.exec),kp=8!==gp(vp+"08")||22!==gp(vp+"0x16")||mp&&!cp((function(){gp(Object(mp))}))?function(t,e){var i=pp(fp(t));return gp(i,e>>>0||(wp(bp,i)?16:10))}:gp;xi({global:!0,forced:parseInt!=kp},{parseInt:kp});var _p=G.parseInt,xp=xi,Ep=ji.indexOf,Op=Ou,Cp=y([].indexOf),Sp=!!Cp&&1/Cp([1],1,-0)<0,Tp=Op("indexOf");xp({target:"Array",proto:!0,forced:Sp||!Tp},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return Sp?Cp(this,t,e)||0:Ep(this,t,e)}});var Mp=Mo("Array").indexOf,Pp=tt,Dp=Mp,Bp=Array.prototype,Ip=function(t){var e=t.indexOf;return t===Bp||Pp(Bp,t)&&e===Bp.indexOf?Dp:e},zp=Ip,Fp=Zn.PROPER,Np=r,Ap=ep,Rp=dp.trim;xi({target:"String",proto:!0,forced:function(t){return Np((function(){return!!Ap[t]()||"​᠎"!=="​᠎"[t]()||Fp&&Ap[t].name!==t}))}("trim")},{trim:function(){return Rp(this)}}),Mo("String").trim,xi({target:"Object",stat:!0,sham:!w},{create:kr});var jp=G.Object,Lp=function(t,e){return jp.create(t,e)},Hp=Lp,Wp=xi,Vp=J,qp=c,Up=y,Yp=r,Xp=n.Array,Gp=Vp("JSON","stringify"),Kp=Up(/./.exec),$p=Up("".charAt),Zp=Up("".charCodeAt),Qp=Up("".replace),Jp=Up(1..toString),tv=/[\uD800-\uDFFF]/g,ev=/^[\uD800-\uDBFF]$/,iv=/^[\uDC00-\uDFFF]$/,ov=function(t,e,i){var o=$p(i,e-1),n=$p(i,e+1);return Kp(ev,t)&&!Kp(iv,n)||Kp(iv,t)&&!Kp(ev,o)?"\\u"+Jp(Zp(t,0),16):t},nv=Yp((function(){return'"\\udf06\\ud834"'!==Gp("\udf06\ud834")||'"\\udead"'!==Gp("\udead")}));Gp&&Wp({target:"JSON",stat:!0,forced:nv},{stringify:function(t,e,i){for(var o=0,n=arguments.length,r=Xp(n);o<n;o++)r[o]=arguments[o];var s=qp(Gp,null,r);return"string"==typeof s?Qp(s,tv,ov):s}});var rv=G,sv=c;rv.JSON||(rv.JSON={stringify:JSON.stringify});var av=function(t,e,i){return sv(rv.JSON.stringify,null,arguments)},hv=av,dv=n.TypeError,lv=xi,cv=n,uv=c,fv=m,pv=po,vv=function(t,e){if(t<e)throw dv("Not enough arguments");return t},gv=/MSIE .\./.test(et),yv=cv.Function,mv=function(t){return function(e,i){var o=vv(arguments.length,1)>2,n=fv(e)?e:yv(e),r=o?pv(arguments,2):void 0;return t(o?function(){uv(n,this,r)}:n,i)}};lv({global:!0,bind:!0,forced:gv},{setTimeout:mv(cv.setTimeout),setInterval:mv(cv.setInterval)});var bv=G.setTimeout,wv=Lt,kv=Pi,_v=zi,xv=function(t){for(var e=wv(this),i=_v(e),o=arguments.length,n=kv(o>1?arguments[1]:void 0,i),r=o>2?arguments[2]:void 0,s=void 0===r?i:kv(r,i);s>n;)e[n++]=t;return e};xi({target:"Array",proto:!0},{fill:xv});var Ev,Ov=Mo("Array").fill,Cv=tt,Sv=Ov,Tv=Array.prototype,Mv=function(t){var e=t.fill;return t===Tv||Cv(Tv,t)&&e===Tv.fill?Sv:e},Pv=Mv;
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
	 * http://naver.github.io/egjs
	 *
	 * Forked By Naver egjs
	 * Copyright (c) hammerjs
	 * Licensed under the MIT license */
function Dv(){return Dv=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Dv.apply(this,arguments)}function Bv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Iv(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ev="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])}return e}:Object.assign;var zv,Fv=Ev,Nv=["","webkit","Moz","MS","ms","o"],Av="undefined"==typeof document?{style:{}}:document.createElement("div"),Rv=Math.round,jv=Math.abs,Lv=Date.now;function Hv(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),r=0;r<Nv.length;){if((o=(i=Nv[r])?i+n:e)in t)return o;r++}}zv="undefined"==typeof window?{}:window;var Wv=Hv(Av.style,"touchAction"),Vv=void 0!==Wv;var qv="compute",Uv="auto",Yv="manipulation",Xv="none",Gv="pan-x",Kv="pan-y",$v=function(){if(!Vv)return!1;var t={},e=zv.CSS&&zv.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||zv.CSS.supports("touch-action",i)})),t}(),Zv="ontouchstart"in zv,Qv=void 0!==Hv(zv,"PointerEvent"),Jv=Zv&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),tg="touch",eg="mouse",ig=16,og=24,ng=["x","y"],rg=["clientX","clientY"];function sg(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function ag(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function hg(t,e){return t.indexOf(e)>-1}var dg=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===qv&&(t=this.compute()),Vv&&this.manager.element.style&&$v[t]&&(this.manager.element.style[Wv]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return sg(this.manager.recognizers,(function(e){ag(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(hg(t,Xv))return Xv;var e=hg(t,Gv),i=hg(t,Kv);return e&&i?Xv:e||i?e?Gv:Kv:hg(t,Yv)?Yv:Uv}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var o=this.actions,n=hg(o,Xv)&&!$v.none,r=hg(o,Kv)&&!$v["pan-y"],s=hg(o,Gv)&&!$v["pan-x"];if(n){var a=1===t.pointers.length,h=t.distance<2,d=t.deltaTime<250;if(a&&h&&d)return}if(!s||!r)return n||r&&6&i||s&&i&og?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function lg(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function cg(t){var e=t.length;if(1===e)return{x:Rv(t[0].clientX),y:Rv(t[0].clientY)};for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++;return{x:Rv(i/e),y:Rv(o/e)}}function ug(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:Rv(t.pointers[i].clientX),clientY:Rv(t.pointers[i].clientY)},i++;return{timeStamp:Lv(),pointers:e,center:cg(e),deltaX:t.deltaX,deltaY:t.deltaY}}function fg(t,e,i){i||(i=ng);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(o*o+n*n)}function pg(t,e,i){i||(i=ng);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return 180*Math.atan2(n,o)/Math.PI}function vg(t,e){return t===e?1:jv(t)>=jv(e)?t<0?2:4:e<0?8:ig}function gg(t,e,i){return{x:e/t||0,y:i/t||0}}function yg(t,e){var i=t.session,o=e.pointers,n=o.length;i.firstInput||(i.firstInput=ug(e)),n>1&&!i.firstMultiple?i.firstMultiple=ug(e):1===n&&(i.firstMultiple=!1);var r=i.firstInput,s=i.firstMultiple,a=s?s.center:r.center,h=e.center=cg(o);e.timeStamp=Lv(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=pg(a,h),e.distance=fg(a,h),function(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},r=t.prevInput||{};1!==e.eventType&&4!==r.eventType||(n=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}(i,e),e.offsetDirection=vg(e.deltaX,e.deltaY);var d,l,c=gg(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=jv(c.x)>jv(c.y)?c.x:c.y,e.scale=s?(d=s.pointers,fg((l=o)[0],l[1],rg)/fg(d[0],d[1],rg)):1,e.rotation=s?function(t,e){return pg(e[1],e[0],rg)+pg(t[1],t[0],rg)}(s.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,o,n,r,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!==e.eventType&&(a>25||void 0===s.velocity)){var h=e.deltaX-s.deltaX,d=e.deltaY-s.deltaY,l=gg(a,h,d);o=l.x,n=l.y,i=jv(l.x)>jv(l.y)?l.x:l.y,r=vg(h,d),t.lastInterval=e}else i=s.velocity,o=s.velocityX,n=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=r}(i,e);var u,f=t.element,p=e.srcEvent;lg(u=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,f)&&(f=u),e.target=f}function mg(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,r=1&e&&o-n==0,s=12&e&&o-n==0;i.isFirst=!!r,i.isFinal=!!s,r&&(t.session={}),i.eventType=e,yg(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function bg(t){return t.trim().split(/\s+/g)}function wg(t,e,i){sg(bg(e),(function(e){t.addEventListener(e,i,!1)}))}function kg(t,e,i){sg(bg(e),(function(e){t.removeEventListener(e,i,!1)}))}function _g(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var xg=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){ag(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&wg(this.element,this.evEl,this.domHandler),this.evTarget&&wg(this.target,this.evTarget,this.domHandler),this.evWin&&wg(_g(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&kg(this.element,this.evEl,this.domHandler),this.evTarget&&kg(this.target,this.evTarget,this.domHandler),this.evWin&&kg(_g(this.element),this.evWin,this.domHandler)},t}();function Eg(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}var Og={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},Cg={2:tg,3:"pen",4:eg,5:"kinect"},Sg="pointerdown",Tg="pointermove pointerup pointercancel";zv.MSPointerEvent&&!zv.PointerEvent&&(Sg="MSPointerDown",Tg="MSPointerMove MSPointerUp MSPointerCancel");var Mg=function(t){function e(){var i,o=e.prototype;return o.evEl=Sg,o.evWin=Tg,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return Bv(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Og[o],r=Cg[t.pointerType]||t.pointerType,s=r===tg,a=Eg(e,t.pointerId,"pointerId");1&n&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&n&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(a,1))},e}(xg);function Pg(t){return Array.prototype.slice.call(t,0)}function Dg(t,e,i){for(var o=[],n=[],r=0;r<t.length;){var s=e?t[r][e]:t[r];Eg(n,s)<0&&o.push(t[r]),n[r]=s,r++}return i&&(o=e?o.sort((function(t,i){return t[e]>i[e]})):o.sort()),o}var Bg={touchstart:1,touchmove:2,touchend:4,touchcancel:8},Ig="touchstart touchmove touchend touchcancel",zg=function(t){function e(){var i;return e.prototype.evTarget=Ig,(i=t.apply(this,arguments)||this).targetIds={},i}return Bv(e,t),e.prototype.handler=function(t){var e=Bg[t.type],i=Fg.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:tg,srcEvent:t})},e}(xg);function Fg(t,e){var i,o,n=Pg(t.touches),r=this.targetIds;if(3&e&&1===n.length)return r[n[0].identifier]=!0,[n,n];var s=Pg(t.changedTouches),a=[],h=this.target;if(o=n.filter((function(t){return lg(t.target,h)})),1===e)for(i=0;i<o.length;)r[o[i].identifier]=!0,i++;for(i=0;i<s.length;)r[s[i].identifier]&&a.push(s[i]),12&e&&delete r[s[i].identifier],i++;return a.length?[Dg(o.concat(a),"identifier",!0),a]:void 0}var Ng={mousedown:1,mousemove:2,mouseup:4},Ag="mousedown",Rg="mousemove mouseup",jg=function(t){function e(){var i,o=e.prototype;return o.evEl=Ag,o.evWin=Rg,(i=t.apply(this,arguments)||this).pressed=!1,i}return Bv(e,t),e.prototype.handler=function(t){var e=Ng[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:eg,srcEvent:t}))},e}(xg);function Lg(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},o=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)}),2500)}}function Hg(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,Lg.call(this,e)):12&t&&Lg.call(this,e)}function Wg(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var n=this.lastTouches[o],r=Math.abs(e-n.x),s=Math.abs(i-n.y);if(r<=25&&s<=25)return!0}return!1}var Vg=function(){return function(t){function e(e,i){var o;return(o=t.call(this,e,i)||this).handler=function(t,e,i){var n=i.pointerType===tg,r=i.pointerType===eg;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)Hg.call(Iv(Iv(o)),e,i);else if(r&&Wg.call(Iv(Iv(o)),i))return;o.callback(t,e,i)}},o.touch=new zg(o.manager,o.handler),o.mouse=new jg(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}return Bv(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(xg)}();function qg(t,e,i){return!!Array.isArray(t)&&(sg(t,i[e],i),!0)}var Ug=32,Yg=1;function Xg(t,e){var i=e.manager;return i?i.get(t):t}function Gg(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var Kg=function(){function t(t){void 0===t&&(t={}),this.options=Dv({enable:!0},t),this.id=Yg++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return Fv(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(qg(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Xg(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return qg(t,"dropRecognizeWith",this)||(t=Xg(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(qg(t,"requireFailure",this))return this;var e=this.requireFail;return-1===Eg(e,t=Xg(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(qg(t,"dropRequireFailure",this))return this;t=Xg(t,this);var e=Eg(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function o(i){e.manager.emit(i,t)}i<8&&o(e.options.event+Gg(i)),o(e.options.event),t.additionalEvent&&o(t.additionalEvent),i>=8&&o(e.options.event+Gg(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=Ug},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=Fv({},t);if(!ag(this.options.enable,[this,e]))return this.reset(),void(this.state=Ug);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),$g=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Dv({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Yv]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime<i.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&r&&o){if(4!==t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<i.interval,a=!this.pCenter||fg(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return Ug},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=Ug}),this.options.interval),Ug},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(Kg),Zg=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Dv({pointers:1},e))||this}Bv(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,o=6&e,n=this.attrTest(t);return o&&(8&i||!n)?16|e:o||n?4&i?8|e:2&e?4|e:2:Ug},e}(Kg);function Qg(t){return t===ig?"down":8===t?"up":2===t?"left":4===t?"right":""}var Jg=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Dv({event:"pan",threshold:10,pointers:1,direction:30},e))||this).pX=null,i.pY=null,i}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return 6&t&&e.push(Kv),t&og&&e.push(Gv),e},i.directionTest=function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,r=t.deltaX,s=t.deltaY;return n&e.direction||(6&e.direction?(n=0===r?1:r<0?2:4,i=r!==this.pX,o=Math.abs(t.deltaX)):(n=0===s?1:s<0?8:ig,i=s!==this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},i.attrTest=function(t){return Zg.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=Qg(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(Zg),ty=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Dv({event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},e))||this}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){return Jg.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,o=this.options.direction;return 30&o?i=e.overallVelocity:6&o?i=e.overallVelocityX:o&og&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&o&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&jv(i)>this.options.velocity&&4&e.eventType},i.emit=function(t){var e=Qg(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(Zg),ey=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Dv({event:"pinch",threshold:0,pointers:2},e))||this}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Xv]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(Zg),iy=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Dv({event:"rotate",threshold:0,pointers:2},e))||this}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Xv]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(Zg),oy=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Dv({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}Bv(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Uv]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime>i.time;if(this._input=t,!n||!o||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(4&t.eventType)return 8;return Ug},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Lv(),this.manager.emit(this.options.event,this._input)))},e}(Kg),ny={domEvents:!1,touchAction:qv,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},ry=[[iy,{enable:!1}],[ey,{enable:!1},["rotate"]],[ty,{direction:6}],[Jg,{direction:6},["swipe"]],[$g],[$g,{event:"doubletap",taps:2},["tap"]],[oy]];function sy(t,e){var i,o=t.element;o.style&&(sg(t.options.cssProps,(function(n,r){i=Hv(o.style,r),e?(t.oldCssProps[i]=o.style[i],o.style[i]=n):o.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var ay=function(){function t(t,e){var i,o=this;this.options=Fv({},ny,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(Qv?Mg:Jv?zg:Zv?Vg:jg))(i,mg),this.touchAction=new dg(this,this.options.touchAction),sy(this,!0),sg(this.options.recognizers,(function(t){var e=o.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return Fv(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var o=this.recognizers,n=e.curRecognizer;(!n||n&&8&n.state)&&(e.curRecognizer=null,n=null);for(var r=0;r<o.length;)i=o[r],2===e.stopped||n&&i!==n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&14&i.state&&(e.curRecognizer=i,n=i),r++}},e.get=function(t){if(t instanceof Kg)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(qg(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(qg(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,o=Eg(i,e);-1!==o&&(i.splice(o,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return sg(bg(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return sg(bg(t),(function(t){e?i[t]&&i[t].splice(Eg(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},e.destroy=function(){this.element&&sy(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),hy={touchstart:1,touchmove:2,touchend:4,touchcancel:8},dy="touchstart",ly="touchstart touchmove touchend touchcancel",cy=function(t){function e(){var i,o=e.prototype;return o.evTarget=dy,o.evWin=ly,(i=t.apply(this,arguments)||this).started=!1,i}return Bv(e,t),e.prototype.handler=function(t){var e=hy[t.type];if(1===e&&(this.started=!0),this.started){var i=uy.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:tg,srcEvent:t})}},e}(xg);function uy(t,e){var i=Pg(t.touches),o=Pg(t.changedTouches);return 12&e&&(i=Dg(i.concat(o),"identifier",!0)),[i,o]}function fy(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=window.console&&(window.console.warn||window.console.log);return n&&n.call(window.console,o,i),t.apply(this,arguments)}}var py=fy((function(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&void 0===t[o[n]])&&(t[o[n]]=e[o[n]]),n++;return t}),"extend","Use `assign`."),vy=fy((function(t,e){return py(t,e,!0)}),"merge","Use `assign`.");function gy(t,e,i){var o,n=e.prototype;(o=t.prototype=Object.create(n)).constructor=t,o._super=n,i&&Fv(o,i)}function yy(t,e){return function(){return t.apply(e,arguments)}}var my=function(){var t=function(t,e){return void 0===e&&(e={}),new ay(t,Dv({recognizers:ry.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=30,t.DIRECTION_DOWN=ig,t.DIRECTION_LEFT=2,t.DIRECTION_RIGHT=4,t.DIRECTION_UP=8,t.DIRECTION_HORIZONTAL=6,t.DIRECTION_VERTICAL=og,t.DIRECTION_NONE=1,t.DIRECTION_DOWN=ig,t.INPUT_START=1,t.INPUT_MOVE=2,t.INPUT_END=4,t.INPUT_CANCEL=8,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=Ug,t.Manager=ay,t.Input=xg,t.TouchAction=dg,t.TouchInput=zg,t.MouseInput=jg,t.PointerEventInput=Mg,t.TouchMouseInput=Vg,t.SingleTouchInput=cy,t.Recognizer=Kg,t.AttrRecognizer=Zg,t.Tap=$g,t.Pan=Jg,t.Swipe=ty,t.Pinch=ey,t.Rotate=iy,t.Press=oy,t.on=wg,t.off=kg,t.each=sg,t.merge=vy,t.extend=py,t.bindFn=yy,t.assign=Fv,t.inherit=gy,t.bindFn=yy,t.prefixed=Hv,t.toArray=Pg,t.inArray=Eg,t.uniqueArray=Dg,t.splitStr=bg,t.boolOrFn=ag,t.hasParent=lg,t.addEventListeners=wg,t.removeEventListeners=kg,t.defaults=Fv({},ny,{preset:ry}),t}(),by=my;function wy(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return ky(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ky(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function ky(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function _y(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return xy(e.length?e:[xu()])}function xy(t){var e=function(){for(var t=Ey(),e=t(" "),i=t(" "),o=t(" "),n=0;n<arguments.length;n++)(e-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(e+=1),(i-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(i+=1),(o-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(o+=1);return[e,i,o]}(t),i=$c(e,3),o=i[0],n=i[1],r=i[2],s=1,a=function(){var t=2091639*o+2.3283064365386963e-10*s;return o=n,n=r,r=t-(s=0|t)};return a.uint32=function(){return 4294967296*a()},a.fract53=function(){return a()+11102230246251565e-32*(2097152*a()|0)},a.algorithm="Alea",a.seed=t,a.version="0.9",a}function Ey(){var t=4022871197;return function(e){for(var i=e.toString(),o=0;o<i.length;o++){var n=.02519603282416938*(t+=i.charCodeAt(o));n-=t=n>>>0,t=(n*=t)>>>0,t+=4294967296*(n-=t)}return 2.3283064365386963e-10*(t>>>0)}}tu("DELETE");var Oy="undefined"!=typeof window?window.Hammer||by:function(){return function(){var t=function(){};return{on:t,off:t,destroy:t,emit:t,get:function(){return{set:t}}}}()};function Cy(t){var e,i=this;this._cleanupQueue=[],this.active=!1,this._dom={container:t,overlay:document.createElement("div")},this._dom.overlay.classList.add("vis-overlay"),this._dom.container.appendChild(this._dom.overlay),this._cleanupQueue.push((function(){i._dom.overlay.parentNode.removeChild(i._dom.overlay)}));var o=Oy(this._dom.overlay);o.on("tap",Fo(e=this._onTapOverlay).call(e,this)),this._cleanupQueue.push((function(){o.destroy()}));var n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Fu(n).call(n,(function(t){o.on(t,(function(t){t.srcEvent.stopPropagation()}))})),document&&document.body&&(this._onClick=function(e){(function(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1})(e.target,t)||i.deactivate()},document.body.addEventListener("click",this._onClick),this._cleanupQueue.push((function(){document.body.removeEventListener("click",i._onClick)}))),this._escListener=function(t){("key"in t?"Escape"===t.key:27===t.keyCode)&&i.deactivate()}}Vo(Cy.prototype),Cy.current=null,Cy.prototype.destroy=function(){var t,e;this.deactivate();var i,o=wy(Uu(t=uf(e=this._cleanupQueue).call(e,0)).call(t));try{for(o.s();!(i=o.n()).done;){(0,i.value)()}}catch(t){o.e(t)}finally{o.f()}},Cy.prototype.activate=function(){Cy.current&&Cy.current.deactivate(),Cy.current=this,this.active=!0,this._dom.overlay.style.display="none",this._dom.container.classList.add("vis-active"),this.emit("change"),this.emit("activate"),document.body.addEventListener("keydown",this._escListener)},Cy.prototype.deactivate=function(){this.active=!1,this._dom.overlay.style.display="block",this._dom.container.classList.remove("vis-active"),document.body.removeEventListener("keydown",this._escListener),this.emit("change"),this.emit("deactivate")},Cy.prototype._onTapOverlay=function(t){this.activate(),t.srcEvent.stopPropagation()};var Sy=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Ty=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,My=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,Py=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;function Dy(t){if(t)for(;!0===t.hasChildNodes();){var e=t.firstChild;e&&(Dy(e),t.removeChild(e))}}function By(t){return t instanceof String||"string"==typeof t}function Iy(t){return"object"===Qc(t)&&null!==t}function zy(t,e,i,o){var n=!1;!0===o&&(n=null===e[i]&&void 0!==t[i]),n?delete t[i]:t[i]=e[i]}function Fy(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var o in t)if(void 0!==e[o])if(null===e[o]||"object"!==Qc(e[o]))zy(t,e,o,i);else{var n=t[o],r=e[o];Iy(n)&&Iy(r)&&Fy(n,r,i)}}function Ny(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(hu(i))throw new TypeError("Arrays are not supported by deepExtend");for(var n=0;n<t.length;n++){var r=t[n];if(Object.prototype.hasOwnProperty.call(i,r))if(i[r]&&i[r].constructor===Object)void 0===e[r]&&(e[r]={}),e[r].constructor===Object?Ry(e[r],i[r],!1,o):zy(e,i,r,o);else{if(hu(i[r]))throw new TypeError("Arrays are not supported by deepExtend");zy(e,i,r,o)}}return e}function Ay(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(hu(i))throw new TypeError("Arrays are not supported by deepExtend");for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)&&!zf(t).call(t,n))if(i[n]&&i[n].constructor===Object)void 0===e[n]&&(e[n]={}),e[n].constructor===Object?Ry(e[n],i[n]):zy(e,i,n,o);else if(hu(i[n])){e[n]=[];for(var r=0;r<i[n].length;r++)e[n].push(i[n][r])}else zy(e,i,n,o);return e}function Ry(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)||!0===i)if("object"===Qc(e[n])&&null!==e[n]&&jf(e[n])===Object.prototype)void 0===t[n]?t[n]=Ry({},e[n],i):"object"===Qc(t[n])&&null!==t[n]&&jf(t[n])===Object.prototype?Ry(t[n],e[n],i):zy(t,e,n,o);else if(hu(e[n])){var r;t[n]=au(r=e[n]).call(r)}else zy(t,e,n,o);return t}function jy(t,e){var i;return su(i=[]).call(i,Jc(t),[e])}function Ly(t){return au(t).call(t)}function Hy(t){return t.getBoundingClientRect().top}function Wy(t,e){if(hu(t))for(var i=t.length,o=0;o<i;o++)e(t[o],o,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function Vy(t){var e;switch(t.length){case 3:case 4:return(e=Ty.exec(t))?{r:_p(e[1]+e[1],16),g:_p(e[2]+e[2],16),b:_p(e[3]+e[3],16)}:null;case 6:case 7:return(e=Sy.exec(t))?{r:_p(e[1],16),g:_p(e[2],16),b:_p(e[3],16)}:null;default:return null}}function qy(t,e){if(zf(t).call(t,"rgba"))return t;if(zf(t).call(t,"rgb")){var i=t.substr(zp(t).call(t,"(")+1).replace(")","").split(",");return"rgba("+i[0]+","+i[1]+","+i[2]+","+e+")"}var o=Vy(t);return null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+e+")"}function Uy(t,e,i){var o;return"#"+au(o=((1<<24)+(t<<16)+(e<<8)+i).toString(16)).call(o,1)}function Yy(t,e){if(By(t)){var i=t;if(Zy(i)){var o,n=vu(o=i.substr(4).substr(0,i.length-5).split(",")).call(o,(function(t){return _p(t)}));i=Uy(n[0],n[1],n[2])}if(!0===$y(i)){var r=function(t){var e=Vy(t);if(!e)throw new TypeError("'".concat(t,"' is not a valid color."));return Xy(e.r,e.g,e.b)}(i),s={h:r.h,s:.8*r.s,v:Math.min(1,1.02*r.v)},a={h:r.h,s:Math.min(1,1.25*r.s),v:.8*r.v},h=Ky(a.h,a.s,a.v),d=Ky(s.h,s.s,s.v);return{background:i,border:h,highlight:{background:d,border:h},hover:{background:d,border:h}}}return{background:i,border:i,highlight:{background:i,border:i},hover:{background:i,border:i}}}return e?{background:t.background||e.background,border:t.border||e.border,highlight:By(t.highlight)?{border:t.highlight,background:t.highlight}:{background:t.highlight&&t.highlight.background||e.highlight.background,border:t.highlight&&t.highlight.border||e.highlight.border},hover:By(t.hover)?{border:t.hover,background:t.hover}:{border:t.hover&&t.hover.border||e.hover.border,background:t.hover&&t.hover.background||e.hover.background}}:{background:t.background||void 0,border:t.border||void 0,highlight:By(t.highlight)?{border:t.highlight,background:t.highlight}:{background:t.highlight&&t.highlight.background||void 0,border:t.highlight&&t.highlight.border||void 0},hover:By(t.hover)?{border:t.hover,background:t.hover}:{border:t.hover&&t.hover.border||void 0,background:t.hover&&t.hover.background||void 0}}}function Xy(t,e,i){t/=255,e/=255,i/=255;var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i));return o===n?{h:0,s:0,v:o}:{h:60*((t===o?3:i===o?1:5)-(t===o?e-i:i===o?t-e:i-t)/(n-o))/360,s:(n-o)/n,v:n}}function Gy(t,e,i){var o,n,r,s=Math.floor(6*t),a=6*t-s,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e);switch(s%6){case 0:o=i,n=l,r=h;break;case 1:o=d,n=i,r=h;break;case 2:o=h,n=i,r=l;break;case 3:o=h,n=d,r=i;break;case 4:o=l,n=h,r=i;break;case 5:o=i,n=h,r=d}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*r)}}function Ky(t,e,i){var o=Gy(t,e,i);return Uy(o.r,o.g,o.b)}function $y(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}function Zy(t){return My.test(t)}function Qy(t){return Py.test(t)}function Jy(t){if(null===t||"object"!==Qc(t))return null;if(t instanceof Element)return t;var e=Hp(t);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&"object"==Qc(t[i])&&(e[i]=Jy(t[i]));return e}function tm(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=function(t){return null!=t},r=function(t){return null!==t&&"object"===Qc(t)},s=function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0};if(!r(t))throw new Error("Parameter mergeTarget must be an object");if(!r(e))throw new Error("Parameter options must be an object");if(!n(i))throw new Error("Parameter option must have a value");if(!r(o))throw new Error("Parameter globalOptions must be an object");var a=function(t,e,i){r(t[i])||(t[i]={});var o=e[i],n=t[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])},h=e[i],d=r(o)&&!s(o),l=d?o[i]:void 0,c=l?l.enabled:void 0;if(void 0!==h){if("boolean"==typeof h)return r(t[i])||(t[i]={}),void(t[i].enabled=h);if(null===h&&!r(t[i])){if(!n(l))return;t[i]=Hp(l)}if(r(h)){var u=!0;void 0!==h.enabled?u=h.enabled:void 0!==c&&(u=l.enabled),a(t,e,i),t[i].enabled=u}}}var em={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};function im(t,e){var i;hu(e)||(e=[e]);var o,n=wy(t);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(r){i=r[e[0]];for(var s=1;s<e.length;s++)i&&(i=i[e[s]]);if(void 0!==i)break}}}catch(t){n.e(t)}finally{n.f()}return i}var om={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"},nm=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Xl(this,t),this.pixelRatio=e,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this.closeCallback=function(){},this._create()}return $l(t,[{key:"insertTo",value:function(t){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=t,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setUpdateCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=t}},{key:"setCloseCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=t}},{key:"_isColorString",value:function(t){if("string"==typeof t)return om[t]}},{key:"setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("none"!==t){var i,o=this._isColorString(t);if(void 0!==o&&(t=o),!0===By(t)){if(!0===Zy(t)){var n=t.substr(4).substr(0,t.length-5).split(",");i={r:n[0],g:n[1],b:n[2],a:1}}else if(!0===Qy(t)){var r=t.substr(5).substr(0,t.length-6).split(",");i={r:r[0],g:r[1],b:r[2],a:r[3]}}else if(!0===$y(t)){var s=Vy(t);i={r:s.r,g:s.g,b:s.b,a:1}}}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){var a=void 0!==t.a?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,a:a}}if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+hv(t));this._setColor(i,e)}}},{key:"show",value:function(){void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),this.applied=!1,this.frame.style.display="block",this._generateHueCircle()}},{key:"_hide",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!0===e&&(this.previousColor=fo({},this.color)),!0===this.applied&&this.updateCallback(this.initialColor),this.frame.style.display="none",bv((function(){void 0!==t.closeCallback&&(t.closeCallback(),t.closeCallback=void 0)}),0)}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!0===e&&(this.initialColor=fo({},t)),this.color=t;var i=Xy(t.r,t.g,t.b),o=2*Math.PI,n=this.r*i.s,r=this.centerCoordinates.x+n*Math.sin(o*i.h),s=this.centerCoordinates.y+n*Math.cos(o*i.h);this.colorPickerSelector.style.left=r-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(t)}},{key:"_setOpacity",value:function(t){this.color.a=t/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(t){var e=Xy(this.color.r,this.color.g,this.color.b);e.v=t/100;var i=Gy(e.h,e.s,e.v);i.a=this.color.a,this.color=i,this._updatePicker()}},{key:"_updatePicker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=Xy(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight;i.clearRect(0,0,o,n),i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),Pv(i).call(i),this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){var t,e,i,o;if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var n=this.colorPickerCanvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var r=document.createElement("DIV");r.style.color="red",r.style.fontWeight="bold",r.style.padding="10px",r.innerText="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(r)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input");try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(t){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(t){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange);var s=this;this.opacityRange.onchange=function(){s._setOpacity(this.value)},this.opacityRange.oninput=function(){s._setOpacity(this.value)},this.brightnessRange.onchange=function(){s._setBrightness(this.value)},this.brightnessRange.oninput=function(){s._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerText="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerText="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerText="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerText="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerText="cancel",this.cancelButton.onclick=Fo(t=this._hide).call(t,this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerText="apply",this.applyButton.onclick=Fo(e=this._apply).call(e,this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerText="save",this.saveButton.onclick=Fo(i=this._save).call(i,this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerText="load last",this.loadButton.onclick=Fo(o=this._loadLast).call(o,this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var t=this;this.drag={},this.pinch={},this.hammer=new Oy(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.on("hammer.input",(function(e){e.isFirst&&t._moveSelector(e)})),this.hammer.on("tap",(function(e){t._moveSelector(e)})),this.hammer.on("panstart",(function(e){t._moveSelector(e)})),this.hammer.on("panmove",(function(e){t._moveSelector(e)})),this.hammer.on("panend",(function(e){t._moveSelector(e)}))}},{key:"_generateHueCircle",value:function(){if(!1===this.generated){var t=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var e,i,o,n,r=this.colorPickerCanvas.clientWidth,s=this.colorPickerCanvas.clientHeight;t.clearRect(0,0,r,s),this.centerCoordinates={x:.5*r,y:.5*s},this.r=.49*r;var a,h=2*Math.PI/360,d=1/this.r;for(o=0;o<360;o++)for(n=0;n<this.r;n++)e=this.centerCoordinates.x+n*Math.sin(h*o),i=this.centerCoordinates.y+n*Math.cos(h*o),a=Gy(.002777777777777778*o,n*d,1),t.fillStyle="rgb("+a.r+","+a.g+","+a.b+")",t.fillRect(e-.5,i-.5,2,2);t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),t.stroke(),this.hueCircle=t.getImageData(0,0,r,s)}this.generated=!0}},{key:"_moveSelector",value:function(t){var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,r=.5*this.colorPickerDiv.clientWidth,s=i-r,a=o-n,h=Math.atan2(s,a),d=.98*Math.min(Math.sqrt(s*s+a*a),r),l=Math.cos(h)*d+n,c=Math.sin(h)*d+r;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=c-.5*this.colorPickerSelector.clientWidth+"px";var u=h/(2*Math.PI);u=u<0?u+1:u;var f=d/this.r,p=Xy(this.color.r,this.color.g,this.color.b);p.h=u,p.s=f;var v=Gy(p.h,p.s,p.v);v.a=this.color.a,this.color=v,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),t}();function rm(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];if(e.length<1)throw new TypeError("Invalid arguments.");if(1===e.length)return document.createTextNode(e[0]);var o=document.createElement(e[0]);return o.appendChild(rm.apply(void 0,Jc(au(e).call(e,1)))),o}var sm,am=function(){function t(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return!1};Xl(this,t),this.parent=e,this.changedOptions=[],this.container=i,this.allowCreation=!1,this.hideOption=r,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},fo(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new nm(n),this.wrapper=void 0}return $l(t,[{key:"setOptions",value:function(t){if(void 0!==t){this.popupHistory={},this._removePopup();var e=!0;if("string"==typeof t)this.options.filter=t;else if(hu(t))this.options.filter=t.join();else if("object"===Qc(t)){if(null==t)throw new TypeError("options cannot be null");void 0!==t.container&&(this.options.container=t.container),void 0!==Yf(t)&&(this.options.filter=Yf(t)),void 0!==t.showButton&&(this.options.showButton=t.showButton),void 0!==t.enabled&&(e=t.enabled)}else"boolean"==typeof t?(this.options.filter=!0,e=t):"function"==typeof t&&(this.options.filter=t,e=!0);!1===Yf(this.options)&&(e=!1),this.options.enabled=e}this._clean()}},{key:"setModuleOptions",value:function(t){this.moduleOptions=t,!0===this.options.enabled&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){this._clean(),this.changedOptions=[];var t=Yf(this.options),e=0,i=!1;for(var o in this.configureOptions)Object.prototype.hasOwnProperty.call(this.configureOptions,o)&&(this.allowCreation=!1,i=!1,"function"==typeof t?i=(i=t(o,[]))||this._handleObject(this.configureOptions[o],[o],!0):!0!==t&&-1===zp(t).call(t,o)||(i=!0),!1!==i&&(this.allowCreation=!0,e>0&&this._makeItem([]),this._makeHeader(o),this._handleObject(this.configureOptions[o],[o])),e++);this._makeButton(),this._push()}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper);for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t]);this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t]);void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(t){for(var e=this.moduleOptions,i=0;i<t.length;i++){if(void 0===e[t[i]]){e=void 0;break}e=e[t[i]]}return e}},{key:"_makeItem",value:function(t){if(!0===this.allowCreation){var e=document.createElement("div");e.className="vis-configuration vis-config-item vis-config-s"+t.length;for(var i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];return Fu(o).call(o,(function(t){e.appendChild(t)})),this.domElements.push(e),this.domElements.length}return 0}},{key:"_makeHeader",value:function(t){var e=document.createElement("div");e.className="vis-configuration vis-config-header",e.innerText=t,this._makeItem([],e)}},{key:"_makeLabel",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.createElement("div");if(o.className="vis-configuration vis-config-label vis-config-s"+e.length,!0===i){for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(rm("i","b",t))}else o.innerText=t+":";return o}},{key:"_makeDropdown",value:function(t,e,i){var o=document.createElement("select");o.className="vis-configuration vis-config-select";var n=0;void 0!==e&&-1!==zp(t).call(t,e)&&(n=zp(t).call(t,e));for(var r=0;r<t.length;r++){var s=document.createElement("option");s.value=t[r],r===n&&(s.selected="selected"),s.innerText=t[r],o.appendChild(s)}var a=this;o.onchange=function(){a._update(this.value,i)};var h=this._makeLabel(i[i.length-1],i);this._makeItem(i,h,o)}},{key:"_makeRange",value:function(t,e,i){var o=t[0],n=t[1],r=t[2],s=t[3],a=document.createElement("input");a.className="vis-configuration vis-config-range";try{a.type="range",a.min=n,a.max=r}catch(t){}a.step=s;var h="",d=0;if(void 0!==e){var l=1.2;e<0&&e*l<n?(a.min=Math.ceil(e*l),d=a.min,h="range increased"):e/l<n&&(a.min=Math.ceil(e/l),d=a.min,h="range increased"),e*l>r&&1!==r&&(a.max=Math.ceil(e*l),d=a.max,h="range increased"),a.value=e}else a.value=o;var c=document.createElement("input");c.className="vis-configuration vis-config-rangeinput",c.value=a.value;var u=this;a.onchange=function(){c.value=this.value,u._update(Number(this.value),i)},a.oninput=function(){c.value=this.value};var f=this._makeLabel(i[i.length-1],i),p=this._makeItem(i,f,a,c);""!==h&&this.popupHistory[p]!==d&&(this.popupHistory[p]=d,this._setupPopup(h,p))}},{key:"_makeButton",value:function(){var t=this;if(!0===this.options.showButton){var e=document.createElement("div");e.className="vis-configuration vis-config-button",e.innerText="generate options",e.onclick=function(){t._printOptions()},e.onmouseover=function(){e.className="vis-configuration vis-config-button hover"},e.onmouseout=function(){e.className="vis-configuration vis-config-button"},this.optionsContainer=document.createElement("div"),this.optionsContainer.className="vis-configuration vis-config-option-container",this.domElements.push(this.optionsContainer),this.domElements.push(e)}}},{key:"_setupPopup",value:function(t,e){var i=this;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){var o=document.createElement("div");o.id="vis-configuration-popup",o.className="vis-configuration-popup",o.innerText=t,o.onclick=function(){i._removePopup()},this.popupCounter+=1,this.popupDiv={html:o,index:e}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var t=this;if(void 0!==this.popupDiv.html){var e=this.domElements[this.popupDiv.index].getBoundingClientRect();this.popupDiv.html.style.left=e.left+"px",this.popupDiv.html.style.top=e.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=bv((function(){t.popupDiv.html.style.opacity=0}),1500),this.popupDiv.deleteTimeout=bv((function(){t._removePopup()}),1800)}}},{key:"_makeCheckbox",value:function(t,e,i){var o=document.createElement("input");o.type="checkbox",o.className="vis-configuration vis-config-checkbox",o.checked=t,void 0!==e&&(o.checked=e,e!==t&&("object"===Qc(t)?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e})));var n=this;o.onchange=function(){n._update(this.checked,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,o)}},{key:"_makeTextInput",value:function(t,e,i){var o=document.createElement("input");o.type="text",o.className="vis-configuration vis-config-text",o.value=e,e!==t&&this.changedOptions.push({path:i,value:e});var n=this;o.onchange=function(){n._update(this.value,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,o)}},{key:"_makeColorField",value:function(t,e,i){var o=this,n=t[1],r=document.createElement("div");"none"!==(e=void 0===e?n:e)?(r.className="vis-configuration vis-config-colorBlock",r.style.backgroundColor=e):r.className="vis-configuration vis-config-colorBlock none",e=void 0===e?n:e,r.onclick=function(){o._showColorPicker(e,r,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,r)}},{key:"_showColorPicker",value:function(t,e,i){var o=this;e.onclick=function(){},this.colorPicker.insertTo(e),this.colorPicker.show(),this.colorPicker.setColor(t),this.colorPicker.setUpdateCallback((function(t){var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")";e.style.backgroundColor=n,o._update(n,i)})),this.colorPicker.setCloseCallback((function(){e.onclick=function(){o._showColorPicker(t,e,i)}}))}},{key:"_handleObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,n=Yf(this.options),r=!1;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){o=!0;var a=t[s],h=jy(e,s);if("function"==typeof n&&!1===(o=n(s,e))&&!hu(a)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,o=this._handleObject(a,h,!0),this.allowCreation=!1===i),!1!==o){r=!0;var d=this._getValue(h);if(hu(a))this._handleArray(a,d,h);else if("string"==typeof a)this._makeTextInput(a,d,h);else if("boolean"==typeof a)this._makeCheckbox(a,d,h);else if(a instanceof Object){if(!this.hideOption(e,s,this.moduleOptions))if(void 0!==a.enabled){var l=jy(h,"enabled"),c=this._getValue(l);if(!0===c){var u=this._makeLabel(s,h,!0);this._makeItem(h,u),r=this._handleObject(a,h)||r}else this._makeCheckbox(a,c,h)}else{var f=this._makeLabel(s,h,!0);this._makeItem(h,f),r=this._handleObject(a,h)||r}}else console.error("dont know how to handle",a,s,h)}}return r}},{key:"_handleArray",value:function(t,e,i){"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),t[1]!==e&&this.changedOptions.push({path:i,value:e})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:e})):"number"==typeof t[0]&&(this._makeRange(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)}))}},{key:"_update",value:function(t,e){var i=this._constructOptions(t,e);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),this.initialized=!0,this.parent.setOptions(i)}},{key:"_constructOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i;t="false"!==(t="true"===t||t)&&t;for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),n!==e.length-1?o=o[e[n]]:o[e[n]]=t);return i}},{key:"_printOptions",value:function(){for(var t=this.getOptions();this.optionsContainer.firstChild;)this.optionsContainer.removeChild(this.optionsContainer.firstChild);this.optionsContainer.appendChild(rm("pre","const options = "+hv(t,null,2)))}},{key:"getOptions",value:function(){for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t);return t}}]),t}(),hm=function(){function t(e,i){Xl(this,t),this.container=e,this.overflowMethod=i||"cap",this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-tooltip",this.container.appendChild(this.frame)}return $l(t,[{key:"setPosition",value:function(t,e){this.x=_p(t),this.y=_p(e)}},{key:"setText",value:function(t){if(t instanceof Element){for(;this.frame.firstChild;)this.frame.removeChild(this.frame.firstChild);this.frame.appendChild(t)}else this.frame.innerText=t}},{key:"show",value:function(t){if(void 0===t&&(t=!0),!0===t){var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,r=0,s=0;if("flip"==this.overflowMethod){var a=!1,h=!0;this.y-e<this.padding&&(h=!1),this.x+i>n-this.padding&&(a=!0),r=a?this.x-i:this.x,s=h?this.y-e:this.y}else(s=this.y-e)+e+this.padding>o&&(s=o-e-this.padding),s<this.padding&&(s=this.padding),(r=this.x)+i+this.padding>n&&(r=n-i-this.padding),r<this.padding&&(r=this.padding);this.frame.style.left=r+"px",this.frame.style.top=s+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",this.frame.style.visibility="hidden"}},{key:"destroy",value:function(){this.frame.parentNode.removeChild(this.frame)}}]),t}(),dm=!1,lm="background: #FFeeee; color: #dd0000",cm=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"validate",value:function(e,i,o){dm=!1,sm=i;var n=i;return void 0!==o&&(n=i[o]),t.parse(e,n,[]),dm}},{key:"parse",value:function(e,i,o){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.check(n,e,i,o)}},{key:"check",value:function(e,i,o,n){if(void 0!==o[e]||void 0!==o.__any__){var r=e,s=!0;void 0===o[e]&&void 0!==o.__any__&&(r="__any__",s="object"===t.getType(i[e]));var a=o[r];s&&void 0!==a.__type__&&(a=a.__type__),t.checkFields(e,i,o,r,a,n)}else t.getSuggestion(e,o,n)}},{key:"checkFields",value:function(e,i,o,n,r,s){var a=function(i){console.error("%c"+i+t.printLocation(s,e),lm)},h=t.getType(i[e]),d=r[h];void 0!==d?"array"===t.getType(d)&&-1===zp(d).call(d,i[e])?(a('Invalid option detected in "'+e+'". Allowed values are:'+t.print(d)+' not "'+i[e]+'". '),dm=!0):"object"===h&&"__any__"!==n&&(s=jy(s,e),t.parse(i[e],o[n],s)):void 0===r.any&&(a('Invalid type received for "'+e+'". Expected: '+t.print(mu(r))+". Received ["+h+'] "'+i[e]+'"'),dm=!0)}},{key:"getType",value:function(t){var e=Qc(t);return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":hu(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":!0===t._isAMomentObject?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e}},{key:"getSuggestion",value:function(e,i,o){var n,r=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,sm,[],!0);n=void 0!==r.indexMatch?" in "+t.printLocation(r.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+r.indexMatch+'"?\n\n':s.distance<=4&&r.distance>s.distance?" in "+t.printLocation(r.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""):r.distance<=8?'. Did you mean "'+r.closestMatch+'"?'+t.printLocation(r.path,e):". Did you mean one of these: "+t.print(mu(i))+t.printLocation(o,e),console.error('%cUnknown option detected: "'+e+'"'+n,lm),dm=!0}},{key:"findInOptions",value:function(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=1e9,s="",a=[],h=e.toLowerCase(),d=void 0;for(var l in i){var c=void 0;if(void 0!==i[l].__type__&&!0===n){var u=t.findInOptions(e,i[l],jy(o,l));r>u.distance&&(s=u.closestMatch,a=u.path,r=u.distance,d=u.indexMatch)}else{var f;-1!==zp(f=l.toLowerCase()).call(f,h)&&(d=l),r>(c=t.levenshteinDistance(e,l))&&(s=l,a=Ly(o),r=c)}}return{closestMatch:s,path:a,distance:r,indexMatch:d}}},{key:"printLocation",value:function(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n",o="\n\n"+i+"options = {\n",n=0;n<t.length;n++){for(var r=0;r<n+1;r++)o+="  ";o+=t[n]+": {\n"}for(var s=0;s<t.length+1;s++)o+="  ";o+=e+"\n";for(var a=0;a<t.length+1;a++){for(var h=0;h<t.length-a;h++)o+="  ";o+="}\n"}return o+"\n\n"}},{key:"print",value:function(t){return hv(t).replace(/(")|(\[)|(\])|(,"__type__")/g,"").replace(/(,)/g,", ")}},{key:"levenshteinDistance",value:function(t,e){if(0===t.length)return e.length;if(0===e.length)return t.length;var i,o,n=[];for(i=0;i<=e.length;i++)n[i]=[i];for(o=0;o<=t.length;o++)n[0][o]=o;for(i=1;i<=e.length;i++)for(o=1;o<=t.length;o++)e.charAt(i-1)==t.charAt(o-1)?n[i][o]=n[i-1][o-1]:n[i][o]=Math.min(n[i-1][o-1]+1,Math.min(n[i][o-1]+1,n[i-1][o]+1));return n[e.length][t.length]}}]),t}(),um=Cy,fm=am,pm=Oy,vm=hm,gm=lm,ym=cm;function mm(t){return Cm=t,function(){var t={};Sm=0,void(Tm=Cm.charAt(0)),jm(),"strict"===Mm&&(t.strict=!0,jm());"graph"!==Mm&&"digraph"!==Mm||(t.type=Mm,jm());Pm===xm&&(t.id=Mm,jm());if("{"!=Mm)throw Um("Angle bracket { expected");if(jm(),Lm(t),"}"!=Mm)throw Um("Angle bracket } expected");if(jm(),""!==Mm)throw Um("End of file expected");return jm(),delete t.node,delete t.edge,delete t.graph,t}()}var bm={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},wm=Hp(bm);wm.color="color.color",wm.style="dashes";var km=0,_m=1,xm=2,Em=3,Om={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},Cm="",Sm=0,Tm="",Mm="",Pm=km;function Dm(){Sm++,Tm=Cm.charAt(Sm)}function Bm(){return Cm.charAt(Sm+1)}function Im(t){var e=t.charCodeAt(0);return e<47?35===e||46===e:e<59?e>47:e<91?e>64:e<96?95===e:e<123&&e>96}function zm(t,e){if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function Fm(t,e,i){for(var o=e.split("."),n=t;o.length;){var r=o.shift();o.length?(n[r]||(n[r]={}),n=n[r]):n[r]=i}}function Nm(t,e){for(var i,o,n=null,r=[t],s=t;s.parent;)r.push(s.parent),s=s.parent;if(s.nodes)for(i=0,o=s.nodes.length;i<o;i++)if(e.id===s.nodes[i].id){n=s.nodes[i];break}for(n||(n={id:e.id},t.node&&(n.attr=zm(n.attr,t.node))),i=r.length-1;i>=0;i--){var a,h=r[i];h.nodes||(h.nodes=[]),-1===zp(a=h.nodes).call(a,n)&&h.nodes.push(n)}e.attr&&(n.attr=zm(n.attr,e.attr))}function Am(t,e){if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){var i=zm({},t.edge);e.attr=zm(i,e.attr)}}function Rm(t,e,i,o,n){var r={from:e,to:i,type:o};return t.edge&&(r.attr=zm({},t.edge)),r.attr=zm(r.attr||{},n),null!=n&&n.hasOwnProperty("arrows")&&null!=n.arrows&&(r.arrows={to:{enabled:!0,type:n.arrows.type}},n.arrows=null),r}function jm(){for(Pm=km,Mm="";" "===Tm||"\t"===Tm||"\n"===Tm||"\r"===Tm;)Dm();do{var t=!1;if("#"===Tm){for(var e=Sm-1;" "===Cm.charAt(e)||"\t"===Cm.charAt(e);)e--;if("\n"===Cm.charAt(e)||""===Cm.charAt(e)){for(;""!=Tm&&"\n"!=Tm;)Dm();t=!0}}if("/"===Tm&&"/"===Bm()){for(;""!=Tm&&"\n"!=Tm;)Dm();t=!0}if("/"===Tm&&"*"===Bm()){for(;""!=Tm;){if("*"===Tm&&"/"===Bm()){Dm(),Dm();break}Dm()}t=!0}for(;" "===Tm||"\t"===Tm||"\n"===Tm||"\r"===Tm;)Dm()}while(t);if(""!==Tm){var i=Tm+Bm();if(Om[i])return Pm=_m,Mm=i,Dm(),void Dm();if(Om[Tm])return Pm=_m,Mm=Tm,void Dm();if(Im(Tm)||"-"===Tm){for(Mm+=Tm,Dm();Im(Tm);)Mm+=Tm,Dm();return"false"===Mm?Mm=!1:"true"===Mm?Mm=!0:isNaN(Number(Mm))||(Mm=Number(Mm)),void(Pm=xm)}if('"'===Tm){for(Dm();""!=Tm&&('"'!=Tm||'"'===Tm&&'"'===Bm());)'"'===Tm?(Mm+=Tm,Dm()):"\\"===Tm&&"n"===Bm()?(Mm+="\n",Dm()):Mm+=Tm,Dm();if('"'!=Tm)throw Um('End of string " expected');return Dm(),void(Pm=xm)}for(Pm=Em;""!=Tm;)Mm+=Tm,Dm();throw new SyntaxError('Syntax error in part "'+Ym(Mm,30)+'"')}Pm=_m}function Lm(t){for(;""!==Mm&&"}"!=Mm;)Hm(t),";"===Mm&&jm()}function Hm(t){var e=Wm(t);if(e)Vm(t,e);else{var i=function(t){if("node"===Mm)return jm(),t.node=qm(),"node";if("edge"===Mm)return jm(),t.edge=qm(),"edge";if("graph"===Mm)return jm(),t.graph=qm(),"graph";return null}(t);if(!i){if(Pm!=xm)throw Um("Identifier expected");var o=Mm;if(jm(),"="===Mm){if(jm(),Pm!=xm)throw Um("Identifier expected");t[o]=Mm,jm()}else!function(t,e){var i={id:e},o=qm();o&&(i.attr=o);Nm(t,i),Vm(t,e)}(t,o)}}}function Wm(t){var e=null;if("subgraph"===Mm&&((e={}).type="subgraph",jm(),Pm===xm&&(e.id=Mm,jm())),"{"===Mm){if(jm(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,Lm(e),"}"!=Mm)throw Um("Angle bracket } expected");jm(),delete e.node,delete e.edge,delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),t.subgraphs.push(e)}return e}function Vm(t,e){for(;"->"===Mm||"--"===Mm;){var i,o=Mm;jm();var n=Wm(t);if(n)i=n;else{if(Pm!=xm)throw Um("Identifier or subgraph expected");Nm(t,{id:i=Mm}),jm()}Am(t,Rm(t,e,i,o,qm())),e=i}}function qm(){for(var t,e,i=null,o={dashed:!0,solid:!1,dotted:[1,5]},n={dot:"circle",box:"box",crow:"crow",curve:"curve",icurve:"inv_curve",normal:"triangle",inv:"inv_triangle",diamond:"diamond",tee:"bar",vee:"vee"},r=new Array,s=new Array;"["===Mm;){for(jm(),i={};""!==Mm&&"]"!=Mm;){if(Pm!=xm)throw Um("Attribute name expected");var a=Mm;if(jm(),"="!=Mm)throw Um("Equal sign = expected");if(jm(),Pm!=xm)throw Um("Attribute value expected");var h=Mm;"style"===a&&(h=o[h]),"arrowhead"===a&&(a="arrows",h={to:{enabled:!0,type:n[h]}}),"arrowtail"===a&&(a="arrows",h={from:{enabled:!0,type:n[h]}}),r.push({attr:i,name:a,value:h}),s.push(a),jm(),","==Mm&&jm()}if("]"!=Mm)throw Um("Bracket ] expected");jm()}if(zf(s).call(s,"dir")){var d={arrows:{}};for(t=0;t<r.length;t++)if("arrows"===r[t].name)if(null!=r[t].value.to)d.arrows.to=t;else{if(null==r[t].value.from)throw Um("Invalid value of arrows");d.arrows.from=t}else"dir"===r[t].name&&(d.dir=t);var l,c,u=r[d.dir].value;if(!zf(s).call(s,"arrows"))if("both"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),d.arrows.to=r.length-1,r.push({attr:r[d.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),d.arrows.from=r.length-1;else if("forward"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),d.arrows.to=r.length-1;else if("back"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),d.arrows.from=r.length-1;else{if("none"!==u)throw Um('Invalid dir type "'+u+'"');r.push({attr:r[d.dir].attr,name:"arrows",value:""}),d.arrows.to=r.length-1}if("both"===u)d.arrows.to&&d.arrows.from?(c=r[d.arrows.to].value.to.type,l=r[d.arrows.from].value.from.type,r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}},uf(r).call(r,d.arrows.from,1)):d.arrows.to?(c=r[d.arrows.to].value.to.type,l="arrow",r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="arrow",l=r[d.arrows.from].value.from.type,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}});else if("back"===u)d.arrows.to&&d.arrows.from?(c="",l=r[d.arrows.from].value.from.type,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.to?(c="",l="arrow",d.arrows.from=d.arrows.to,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="",l=r[d.arrows.from].value.from.type,r[d.arrows.to]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}),r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{from:{enabled:!0,type:r[d.arrows.from].value.from.type}}};else if("none"===u){var f;r[f=d.arrows.to?d.arrows.to:d.arrows.from]={attr:r[f].attr,name:r[f].name,value:""}}else{if("forward"!==u)throw Um('Invalid dir type "'+u+'"');d.arrows.to&&d.arrows.from||d.arrows.to?(c=r[d.arrows.to].value.to.type,l="",r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="arrow",l="",d.arrows.to=d.arrows.from,r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}),r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:r[d.arrows.to].value.to.type}}}}uf(r).call(r,d.dir,1)}if(zf(s).call(s,"penwidth")){var p=[];for(e=r.length,t=0;t<e;t++)"width"!==r[t].name&&("penwidth"===r[t].name&&(r[t].name="width"),p.push(r[t]));r=p}for(e=r.length,t=0;t<e;t++)Fm(r[t].attr,r[t].name,r[t].value);return i}function Um(t){return new SyntaxError(t+', got "'+Ym(Mm,30)+'" (char '+Sm+")")}function Ym(t,e){return t.length<=e?t:t.substr(0,27)+"..."}function Xm(t,e,i){for(var o=e.split("."),n=o.pop(),r=t,s=0;s<o.length;s++){var a=o[s];a in r||(r[a]={}),r=r[a]}return r[n]=i,t}function Gm(t,e){var i={};for(var o in t)if(t.hasOwnProperty(o)){var n=e[o];hu(n)?Fu(n).call(n,(function(e){Xm(i,e,t[o])})):Xm(i,"string"==typeof n?n:o,t[o])}return i}function Km(t){var e,i=mm(t),o={nodes:[],edges:[],options:{}};i.nodes&&Fu(e=i.nodes).call(e,(function(t){var e={id:t.id,label:String(t.label||t.id)};zm(e,Gm(t.attr,bm)),e.image&&(e.shape="image"),o.nodes.push(e)}));if(i.edges){var n,r=function(t){var e={from:t.from,to:t.to};return zm(e,Gm(t.attr,wm)),null==e.arrows&&"->"===t.type&&(e.arrows="to"),e};Fu(n=i.edges).call(n,(function(t){var e,i,n,s,a,h,d;(e=t.from instanceof Object?t.from.nodes:{id:t.from},i=t.to instanceof Object?t.to.nodes:{id:t.to},t.from instanceof Object&&t.from.edges)&&Fu(n=t.from.edges).call(n,(function(t){var e=r(t);o.edges.push(e)}));(a=i,h=function(e,i){var n=Rm(o,e.id,i.id,t.type,t.attr),s=r(n);o.edges.push(s)},hu(s=e)?Fu(s).call(s,(function(t){hu(a)?Fu(a).call(a,(function(e){h(t,e)})):h(t,a)})):hu(a)?Fu(a).call(a,(function(t){h(s,t)})):h(s,a),t.to instanceof Object&&t.to.edges)&&Fu(d=t.to.edges).call(d,(function(t){var e=r(t);o.edges.push(e)}))}))}return i.attr&&(o.options=i.attr),o}var $m=Object.freeze({__proto__:null,parseDOT:mm,DOTToGraph:Km});function Zm(t,e){var i,o={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};null!=e&&(null!=e.fixed&&(o.nodes.fixed=e.fixed),null!=e.parseColor&&(o.nodes.parseColor=e.parseColor),null!=e.inheritColor&&(o.edges.inheritColor=e.inheritColor));var n=t.edges,r=vu(n).call(n,(function(t){var e={from:t.source,id:t.id,to:t.target};return null!=t.attributes&&(e.attributes=t.attributes),null!=t.label&&(e.label=t.label),null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),"Directed"===t.type&&(e.arrows="to"),t.color&&!1===o.edges.inheritColor&&(e.color=t.color),e}));return{nodes:vu(i=t.nodes).call(i,(function(t){var e={id:t.id,fixed:o.nodes.fixed&&null!=t.x&&null!=t.y};return null!=t.attributes&&(e.attributes=t.attributes),null!=t.label&&(e.label=t.label),null!=t.size&&(e.size=t.size),null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),null!=t.title&&(e.title=t.title),null!=t.x&&(e.x=t.x),null!=t.y&&(e.y=t.y),null!=t.color&&(!0===o.nodes.parseColor?e.color=t.color:e.color={background:t.color,border:t.color,highlight:{background:t.color,border:t.color},hover:{background:t.color,border:t.color}}),e})),edges:r}}var Qm=Object.freeze({__proto__:null,parseGephi:Zm}),Jm=Object.freeze({__proto__:null,en:{addDescription:"Click in an empty space to place a new node.",addEdge:"Add Edge",addNode:"Add Node",back:"Back",close:"Close",createEdgeError:"Cannot link edges to a cluster.",del:"Delete selected",deleteClusterError:"Clusters cannot be deleted.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",edit:"Edit",editClusterError:"Clusters cannot be edited.",editEdge:"Edit Edge",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",editNode:"Edit Node"},de:{addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",addEdge:"Kante hinzufügen",addNode:"Knoten hinzufügen",back:"Zurück",close:"Schließen",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",del:"Lösche Auswahl",deleteClusterError:"Cluster können nicht gelöscht werden.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",edit:"Editieren",editClusterError:"Cluster können nicht editiert werden.",editEdge:"Kante editieren",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",editNode:"Knoten editieren"},es:{addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",addEdge:"Añadir arista",addNode:"Añadir nodo",back:"Atrás",close:"Cerrar",createEdgeError:"No se puede conectar una arista a un grupo.",del:"Eliminar selección",deleteClusterError:"No es posible eliminar grupos.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",edit:"Editar",editClusterError:"No es posible editar grupos.",editEdge:"Editar arista",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",editNode:"Editar nodo"},it:{addDescription:"Clicca per aggiungere un nuovo nodo",addEdge:"Aggiungi un vertice",addNode:"Aggiungi un nodo",back:"Indietro",close:"Chiudere",createEdgeError:"Non si possono collegare vertici ad un cluster",del:"Cancella la selezione",deleteClusterError:"I cluster non possono essere cancellati",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",edit:"Modifica",editClusterError:"I clusters non possono essere modificati.",editEdge:"Modifica il vertice",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",editNode:"Modifica il nodo"},nl:{addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",addEdge:"Link toevoegen",addNode:"Node toevoegen",back:"Terug",close:"Sluiten",createEdgeError:"Kan geen link maken naar een cluster.",del:"Selectie verwijderen",deleteClusterError:"Clusters kunnen niet worden verwijderd.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",edit:"Wijzigen",editClusterError:"Clusters kunnen niet worden aangepast.",editEdge:"Link wijzigen",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",editNode:"Node wijzigen"},pt:{addDescription:"Clique em um espaço em branco para adicionar um novo nó",addEdge:"Adicionar aresta",addNode:"Adicionar nó",back:"Voltar",close:"Fechar",createEdgeError:"Não foi possível linkar arestas a um cluster.",del:"Remover selecionado",deleteClusterError:"Clusters não puderam ser removidos.",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",edit:"Editar",editClusterError:"Clusters não puderam ser editados.",editEdge:"Editar aresta",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",editNode:"Editar nó"},ru:{addDescription:"Кликните в свободное место, чтобы добавить новый узел.",addEdge:"Добавить ребро",addNode:"Добавить узел",back:"Назад",close:"Закрывать",createEdgeError:"Невозможно соединить ребра в кластер.",del:"Удалить выбранное",deleteClusterError:"Кластеры не могут быть удалены",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",edit:"Редактировать",editClusterError:"Кластеры недоступны для редактирования.",editEdge:"Редактировать ребро",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",editNode:"Редактировать узел"},cn:{addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",addNode:"添加节点",back:"返回",close:"關閉",createEdgeError:"无法将连接线连接到群集。",del:"删除选定",deleteClusterError:"无法删除群集。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",edit:"编辑",editClusterError:"无法编辑群集。",editEdge:"编辑连接线",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",editNode:"编辑节点"},uk:{addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",addEdge:"Додати край",addNode:"Додати вузол",back:"Назад",close:"Закрити",createEdgeError:"Не можливо об'єднати краї в групу.",del:"Видалити обране",deleteClusterError:"Групи не можуть бути видалені.",edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",edit:"Редагувати",editClusterError:"Групи недоступні для редагування.",editEdge:"Редагувати край",editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",editNode:"Редагувати вузол"},fr:{addDescription:"Cliquez dans un endroit vide pour placer un nœud.",addEdge:"Ajouter un lien",addNode:"Ajouter un nœud",back:"Retour",close:"Fermer",createEdgeError:"Impossible de créer un lien vers un cluster.",del:"Effacer la sélection",deleteClusterError:"Les clusters ne peuvent pas être effacés.",edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",edit:"Éditer",editClusterError:"Les clusters ne peuvent pas être édités.",editEdge:"Éditer le lien",editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",editNode:"Éditer le nœud"},cs:{addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",addEdge:"Přidat hranu",addNode:"Přidat vrchol",back:"Zpět",close:"Zavřít",createEdgeError:"Nelze připojit hranu ke shluku.",del:"Smazat výběr",deleteClusterError:"Nelze mazat shluky.",edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",edit:"Upravit",editClusterError:"Nelze upravovat shluky.",editEdge:"Upravit hranu",editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",editNode:"Upravit vrchol"}});var tb=function(){function t(){Xl(this,t),this.NUM_ITERATIONS=4,this.image=new Image,this.canvas=document.createElement("canvas")}return $l(t,[{key:"init",value:function(){if(!this.initialized()){this.src=this.image.src;var t=this.image.width,e=this.image.height;this.width=t,this.height=e;var i=Math.floor(e/2),o=Math.floor(e/4),n=Math.floor(e/8),r=Math.floor(e/16),s=Math.floor(t/2),a=Math.floor(t/4),h=Math.floor(t/8),d=Math.floor(t/16);this.canvas.width=3*a,this.canvas.height=i,this.coordinates=[[0,0,s,i],[s,0,a,o],[s,o,h,n],[5*h,o,d,r]],this._fillMipMap()}}},{key:"initialized",value:function(){return void 0!==this.coordinates}},{key:"_fillMipMap",value:function(){var t=this.canvas.getContext("2d"),e=this.coordinates[0];t.drawImage(this.image,e[0],e[1],e[2],e[3]);for(var i=1;i<this.NUM_ITERATIONS;i++){var o=this.coordinates[i-1],n=this.coordinates[i];t.drawImage(this.canvas,o[0],o[1],o[2],o[3],n[0],n[1],n[2],n[3])}}},{key:"drawImageAtPosition",value:function(t,e,i,o,n,r){if(this.initialized())if(e>2){e*=.5;for(var s=0;e>2&&s<this.NUM_ITERATIONS;)e*=.5,s+=1;s>=this.NUM_ITERATIONS&&(s=this.NUM_ITERATIONS-1);var a=this.coordinates[s];t.drawImage(this.canvas,a[0],a[1],a[2],a[3],i,o,n,r)}else t.drawImage(this.image,i,o,n,r)}}]),t}(),eb=function(){function t(e){Xl(this,t),this.images={},this.imageBroken={},this.callback=e}return $l(t,[{key:"_tryloadBrokenUrl",value:function(t,e,i){void 0!==t&&void 0!==i&&(void 0!==e?(i.image.onerror=function(){console.error("Could not load brokenImage:",e)},i.image.src=e):console.warn("No broken url image defined"))}},{key:"_redrawWithImage",value:function(t){this.callback&&this.callback(t)}},{key:"load",value:function(t,e){var i=this,o=this.images[t];if(o)return o;var n=new tb;return this.images[t]=n,n.image.onload=function(){i._fixImageCoordinates(n.image),n.init(),i._redrawWithImage(n)},n.image.onerror=function(){console.error("Could not load image:",t),i._tryloadBrokenUrl(t,e,n)},n.image.src=t,n}},{key:"_fixImageCoordinates",value:function(t){0===t.width&&(document.body.appendChild(t),t.width=t.offsetWidth,t.height=t.offsetHeight,document.body.removeChild(t))}}]),t}(),ib={exports:{}},ob=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}})),nb=r,rb=X,sb=z,ab=ob,hb=Object.isExtensible,db=nb((function(){hb(1)}))||ab?function(t){return!!rb(t)&&((!ab||"ArrayBuffer"!=sb(t))&&(!hb||hb(t)))}:hb,lb=!r((function(){return Object.isExtensible(Object.preventExtensions({}))})),cb=xi,ub=y,fb=Li,pb=X,vb=Vt,gb=Ue.f,yb=sh,mb=dh,bb=db,wb=lb,kb=!1,_b=Gt("meta"),xb=0,Eb=function(t){gb(t,_b,{value:{objectID:"O"+xb++,weakData:{}}})},Ob=ib.exports={enable:function(){Ob.enable=function(){},kb=!0;var t=yb.f,e=ub([].splice),i={};i[_b]=1,t(i).length&&(yb.f=function(i){for(var o=t(i),n=0,r=o.length;n<r;n++)if(o[n]===_b){e(o,n,1);break}return o},cb({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:mb.f}))},fastKey:function(t,e){if(!pb(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!vb(t,_b)){if(!bb(t))return"F";if(!e)return"E";Eb(t)}return t[_b].objectID},getWeakData:function(t,e){if(!vb(t,_b)){if(!bb(t))return!0;if(!e)return!1;Eb(t)}return t[_b].weakData},onFreeze:function(t){return wb&&kb&&bb(t)&&!vb(t,_b)&&Eb(t),t}};fb[_b]=!0;var Cb=qe,Sb=x,Tb=Ze,Mb=wt,Pb=qs,Db=zi,Bb=tt,Ib=wa,zb=fa,Fb=Rs,Nb=n.TypeError,Ab=function(t,e){this.stopped=t,this.result=e},Rb=Ab.prototype,jb=function(t,e,i){var o,n,r,s,a,h,d,l=i&&i.that,c=!(!i||!i.AS_ENTRIES),u=!(!i||!i.IS_ITERATOR),f=!(!i||!i.INTERRUPTED),p=Cb(e,l),v=function(t){return o&&Fb(o,"normal",t),new Ab(!0,t)},g=function(t){return c?(Tb(t),f?p(t[0],t[1],v):p(t[0],t[1])):f?p(t,v):p(t)};if(u)o=t;else{if(!(n=zb(t)))throw Nb(Mb(t)+" is not iterable");if(Pb(n)){for(r=0,s=Db(t);s>r;r++)if((a=g(t[r]))&&Bb(Rb,a))return a;return new Ab(!1)}o=Ib(t,n)}for(h=o.next;!(d=Sb(h,o)).done;){try{a=g(d.value)}catch(t){Fb(o,"throw",t)}if("object"==typeof a&&a&&Bb(Rb,a))return a}return new Ab(!1)},Lb=tt,Hb=n.TypeError,Wb=function(t,e){if(Lb(e,t))return t;throw Hb("Incorrect invocation")},Vb=xi,qb=n,Ub=ib.exports,Yb=r,Xb=ci,Gb=jb,Kb=Wb,$b=m,Zb=X,Qb=Zr,Jb=Ue.f,tw=Vh.forEach,ew=w,iw=Un.set,ow=Un.getterFor,nw=function(t,e,i){var o,n=-1!==t.indexOf("Map"),r=-1!==t.indexOf("Weak"),s=n?"set":"add",a=qb[t],h=a&&a.prototype,d={};if(ew&&$b(a)&&(r||h.forEach&&!Yb((function(){(new a).entries().next()})))){var l=(o=e((function(e,i){iw(Kb(e,l),{type:t,collection:new a}),null!=i&&Gb(i,e[s],{that:e,AS_ENTRIES:n})}))).prototype,c=ow(t);tw(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e="add"==t||"set"==t;!(t in h)||r&&"clear"==t||Xb(l,t,(function(i,o){var n=c(this).collection;if(!e&&r&&!Zb(i))return"get"==t&&void 0;var s=n[t](0===i?0:i,o);return e?this:s}))})),r||Jb(l,"size",{configurable:!0,get:function(){return c(this).collection.size}})}else o=i.getConstructor(e,t,n,s),Ub.enable();return Qb(o,t,!1,!0),d[t]=o,Vb({global:!0,forced:!0},d),r||i.setStrong(o,t,n),o},rw=Ir,sw=function(t,e,i){for(var o in e)i&&i.unsafe&&t[o]?t[o]=e[o]:rw(t,o,e[o],i);return t},aw=J,hw=Ue,dw=w,lw=re("species"),cw=Ue.f,uw=kr,fw=sw,pw=qe,vw=Wb,gw=jb,yw=Ss,mw=function(t){var e=aw(t),i=hw.f;dw&&e&&!e[lw]&&i(e,lw,{configurable:!0,get:function(){return this}})},bw=w,ww=ib.exports.fastKey,kw=Un.set,_w=Un.getterFor,xw={getConstructor:function(t,e,i,o){var n=t((function(t,n){vw(t,r),kw(t,{type:e,index:uw(null),first:void 0,last:void 0,size:0}),bw||(t.size=0),null!=n&&gw(n,t[o],{that:t,AS_ENTRIES:i})})),r=n.prototype,s=_w(e),a=function(t,e,i){var o,n,r=s(t),a=h(t,e);return a?a.value=i:(r.last=a={index:n=ww(e,!0),key:e,value:i,previous:o=r.last,next:void 0,removed:!1},r.first||(r.first=a),o&&(o.next=a),bw?r.size++:t.size++,"F"!==n&&(r.index[n]=a)),t},h=function(t,e){var i,o=s(t),n=ww(e);if("F"!==n)return o.index[n];for(i=o.first;i;i=i.next)if(i.key==e)return i};return fw(r,{clear:function(){for(var t=s(this),e=t.index,i=t.first;i;)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete e[i.index],i=i.next;t.first=t.last=void 0,bw?t.size=0:this.size=0},delete:function(t){var e=this,i=s(e),o=h(e,t);if(o){var n=o.next,r=o.previous;delete i.index[o.index],o.removed=!0,r&&(r.next=n),n&&(n.previous=r),i.first==o&&(i.first=n),i.last==o&&(i.last=r),bw?i.size--:e.size--}return!!o},forEach:function(t){for(var e,i=s(this),o=pw(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:i.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!h(this,t)}}),fw(r,i?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return a(this,0===t?0:t,e)}}:{add:function(t){return a(this,t=0===t?0:t,t)}}),bw&&cw(r,"size",{get:function(){return s(this).size}}),n},setStrong:function(t,e,i){var o=e+" Iterator",n=_w(e),r=_w(o);yw(t,e,(function(t,e){kw(this,{type:o,target:t,state:n(t),kind:e,last:void 0})}),(function(){for(var t=r(this),e=t.kind,i=t.last;i&&i.removed;)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),mw(e)}};nw("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),xw);var Ew=G.Map,Ow=function(){function t(){Xl(this,t),this.clear(),this._defaultIndex=0,this._groupIndex=0,this._defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},fo(this.options,this.defaultOptions)}return $l(t,[{key:"setOptions",value:function(t){var e=["useDefaultGroups"];if(void 0!==t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&-1===zp(e).call(e,i)){var o=t[i];this.add(i,o)}}},{key:"clear",value:function(){this._groups=new Ew,this._groupNames=[]}},{key:"get",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._groups.get(t);if(void 0===i&&e)if(!1===this.options.useDefaultGroups&&this._groupNames.length>0){var o=this._groupIndex%this._groupNames.length;++this._groupIndex,(i={}).color=this._groups.get(this._groupNames[o]),this._groups.set(t,i)}else{var n=this._defaultIndex%this._defaultGroups.length;this._defaultIndex++,(i={}).color=this._defaultGroups[n],this._groups.set(t,i)}return i}},{key:"add",value:function(t,e){return this._groups.has(t)||this._groupNames.push(t),this._groups.set(t,e),e}}]),t}();xi({target:"Number",stat:!0},{isNaN:function(t){return t!=t}});var Cw=G.Number.isNaN,Sw=n.isFinite,Tw=Number.isFinite||function(t){return"number"==typeof t&&Sw(t)};xi({target:"Number",stat:!0},{isFinite:Tw});var Mw=G.Number.isFinite,Pw=Vh.some;xi({target:"Array",proto:!0,forced:!Ou("some")},{some:function(t){return Pw(this,t,arguments.length>1?arguments[1]:void 0)}});var Dw=Mo("Array").some,Bw=tt,Iw=Dw,zw=Array.prototype,Fw=function(t){var e=t.some;return t===zw||Bw(zw,t)&&e===zw.some?Iw:e},Nw=Fw,Aw=n,Rw=r,jw=on,Lw=dp.trim,Hw=y("".charAt),Ww=Aw.parseFloat,Vw=Aw.Symbol,qw=Vw&&Vw.iterator,Uw=1/Ww("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0||qw&&!Rw((function(){Ww(Object(qw))}))?function(t){var e=Lw(jw(t)),i=Ww(e);return 0===i&&"-"==Hw(e,0)?-0:i}:Ww;xi({global:!0,forced:parseFloat!=Uw},{parseFloat:Uw});var Yw=G.parseFloat,Xw=xi,Gw=r,Kw=dh.f;Xw({target:"Object",stat:!0,forced:Gw((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:Kw});var $w=G.Object,Zw=function(t){return $w.getOwnPropertyNames(t)},Qw=Zw;function Jw(t,e){var i=["node","edge","label"],o=!0,n=im(e,"chosen");if("boolean"==typeof n)o=n;else if("object"===Qc(n)){if(-1===zp(i).call(i,t))throw new Error("choosify: subOption '"+t+"' should be one of '"+i.join("', '")+"'");var r=im(e,["chosen",t]);"boolean"!=typeof r&&"function"!=typeof r||(o=r)}return o}function tk(t,e,i){if(t.width<=0||t.height<=0)return!1;if(void 0!==i){var o={x:e.x-i.x,y:e.y-i.y};if(0!==i.angle){var n=-i.angle;e={x:Math.cos(n)*o.x-Math.sin(n)*o.y,y:Math.sin(n)*o.x+Math.cos(n)*o.y}}else e=o}var r=t.x+t.width,s=t.y+t.width;return t.left<e.x&&r>e.x&&t.top<e.y&&s>e.y}function ek(t){return"string"==typeof t&&""!==t}function ik(t,e,i,o){var n=o.x,r=o.y;if("function"==typeof o.distanceToBorder){var s=o.distanceToBorder(t,e),a=Math.sin(e)*s,h=Math.cos(e)*s;h===s?(n+=s,r=o.y):a===s?(n=o.x,r-=s):(n+=h,r-=a)}else o.shape.width>o.shape.height?(n=o.x+.5*o.shape.width,r=o.y-i):(n=o.x+i,r=o.y-.5*o.shape.height);return{x:n,y:r}}var ok=Mo("Array").values,nk=Jo,rk=Vt,sk=tt,ak=ok,hk=Array.prototype,dk={DOMTokenList:!0,NodeList:!0},lk=function(t){var e=t.values;return t===hk||sk(hk,t)&&e===hk.values||rk(dk,nk(t))?ak:e},ck=function(){function t(e){Xl(this,t),this.measureText=e,this.current=0,this.width=0,this.height=0,this.lines=[]}return $l(t,[{key:"_add",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";void 0===this.lines[t]&&(this.lines[t]={width:0,height:0,blocks:[]});var o=e;void 0!==e&&""!==e||(o=" ");var n=this.measureText(o,i),r=fo({},lk(n));r.text=e,r.width=n.width,r.mod=i,void 0!==e&&""!==e||(r.width=0),this.lines[t].blocks.push(r),this.lines[t].width+=r.width}},{key:"curWidth",value:function(){var t=this.lines[this.current];return void 0===t?0:t.width}},{key:"append",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e)}},{key:"newLine",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e),this.current++}},{key:"determineLineHeights",value:function(){for(var t=0;t<this.lines.length;t++){var e=this.lines[t],i=0;if(void 0!==e.blocks)for(var o=0;o<e.blocks.length;o++){var n=e.blocks[o];i<n.height&&(i=n.height)}e.height=i}}},{key:"determineLabelSize",value:function(){for(var t=0,e=0,i=0;i<this.lines.length;i++){var o=this.lines[i];o.width>t&&(t=o.width),e+=o.height}this.width=t,this.height=e}},{key:"removeEmptyBlocks",value:function(){for(var t=[],e=0;e<this.lines.length;e++){var i=this.lines[e];if(0!==i.blocks.length&&(e!==this.lines.length-1||0!==i.width)){var o={};fo(o,i),o.blocks=[];for(var n=void 0,r=[],s=0;s<i.blocks.length;s++){var a=i.blocks[s];0!==a.width?r.push(a):void 0===n&&(n=a)}0===r.length&&void 0!==n&&r.push(n),o.blocks=r,t.push(o)}}return t}},{key:"finalize",value:function(){this.determineLineHeights(),this.determineLabelSize();var t=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:t}}}]),t}(),uk={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,"</code>":/<\/code>/,"*":/\*/,_:/_/,"`":/`/,afterBold:/[^*]/,afterItal:/[^_]/,afterMono:/[^`]/},fk=function(){function t(e){Xl(this,t),this.text=e,this.bold=!1,this.ital=!1,this.mono=!1,this.spacing=!1,this.position=0,this.buffer="",this.modStack=[],this.blocks=[]}return $l(t,[{key:"mod",value:function(){return 0===this.modStack.length?"normal":this.modStack[0]}},{key:"modName",value:function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0}},{key:"emitBlock",value:function(){this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(this.blocks.push({text:this.buffer,mod:this.modName()}),this.buffer="")}},{key:"add",value:function(t){" "===t&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)}},{key:"parseWS",value:function(t){return!!/[ \t]/.test(t)&&(this.mono?this.add(t):this.spacing=!0,!0)}},{key:"setTag",value:function(t){this.emitBlock(),this[t]=!0,this.modStack.unshift(t)}},{key:"unsetTag",value:function(t){this.emitBlock(),this[t]=!1,this.modStack.shift()}},{key:"parseStartTag",value:function(t,e){return!(this.mono||this[t]||!this.match(e))&&(this.setTag(t),!0)}},{key:"match",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.prepareRegExp(t),o=$c(i,2),n=o[0],r=o[1],s=n.test(this.text.substr(this.position,r));return s&&e&&(this.position+=r-1),s}},{key:"parseEndTag",value:function(t,e,i){var o=this.mod()===t;return!(!(o="mono"===t?o&&this.mono:o&&!this.mono)||!this.match(e))&&(void 0!==i?(this.position===this.text.length-1||this.match(i,!1))&&this.unsetTag(t):this.unsetTag(t),!0)}},{key:"replace",value:function(t,e){return!!this.match(t)&&(this.add(e),this.position+=length-1,!0)}},{key:"prepareRegExp",value:function(t){var e,i;if(t instanceof RegExp)i=t,e=1;else{var o=uk[t];i=void 0!==o?o:new RegExp(t),e=t.length}return[i,e]}}]),t}(),pk=function(){function t(e,i,o,n){var r=this;Xl(this,t),this.ctx=e,this.parent=i,this.selected=o,this.hover=n;this.lines=new ck((function(t,i){if(void 0===t)return 0;var s=r.parent.getFormattingValues(e,o,n,i),a=0;""!==t&&(a=r.ctx.measureText(t).width);return{width:a,values:s}}))}return $l(t,[{key:"process",value:function(t){if(!ek(t))return this.lines.finalize();var e=this.parent.fontOptions;t=(t=t.replace(/\r\n/g,"\n")).replace(/\r/g,"\n");var i=String(t).split("\n"),o=i.length;if(e.multi)for(var n=0;n<o;n++){var r=this.splitBlocks(i[n],e.multi);if(void 0!==r)if(0!==r.length){if(e.maxWdt>0)for(var s=0;s<r.length;s++){var a=r[s].mod,h=r[s].text;this.splitStringIntoLines(h,a,!0)}else for(var d=0;d<r.length;d++){var l=r[d].mod,c=r[d].text;this.lines.append(c,l)}this.lines.newLine()}else this.lines.newLine("")}else if(e.maxWdt>0)for(var u=0;u<o;u++)this.splitStringIntoLines(i[u]);else for(var f=0;f<o;f++)this.lines.newLine(i[f]);return this.lines.finalize()}},{key:"decodeMarkupSystem",value:function(t){var e="none";return"markdown"===t||"md"===t?e="markdown":!0!==t&&"html"!==t||(e="html"),e}},{key:"splitHtmlBlocks",value:function(t){for(var e=new fk(t),i=function(t){return!!/&/.test(t)&&(e.replace(e.text,"&lt;","<")||e.replace(e.text,"&amp;","&")||e.add("&"),!0)};e.position<e.text.length;){var o=e.text.charAt(e.position);e.parseWS(o)||/</.test(o)&&(e.parseStartTag("bold","<b>")||e.parseStartTag("ital","<i>")||e.parseStartTag("mono","<code>")||e.parseEndTag("bold","</b>")||e.parseEndTag("ital","</i>")||e.parseEndTag("mono","</code>"))||i(o)||e.add(o),e.position++}return e.emitBlock(),e.blocks}},{key:"splitMarkdownBlocks",value:function(t){for(var e=this,i=new fk(t),o=!0,n=function(t){return!!/\\/.test(t)&&(i.position<e.text.length+1&&(i.position++,t=e.text.charAt(i.position),/ \t/.test(t)?i.spacing=!0:(i.add(t),o=!1)),!0)};i.position<i.text.length;){var r=i.text.charAt(i.position);i.parseWS(r)||n(r)||(o||i.spacing)&&(i.parseStartTag("bold","*")||i.parseStartTag("ital","_")||i.parseStartTag("mono","`"))||i.parseEndTag("bold","*","afterBold")||i.parseEndTag("ital","_","afterItal")||i.parseEndTag("mono","`","afterMono")||(i.add(r),o=!1),i.position++}return i.emitBlock(),i.blocks}},{key:"splitBlocks",value:function(t,e){var i=this.decodeMarkupSystem(e);return"none"===i?[{text:t,mod:"normal"}]:"markdown"===i?this.splitMarkdownBlocks(t):"html"===i?this.splitHtmlBlocks(t):void 0}},{key:"overMaxWidth",value:function(t){var e=this.ctx.measureText(t).width;return this.lines.curWidth()+e>this.parent.fontOptions.maxWdt}},{key:"getLongestFit",value:function(t){for(var e="",i=0;i<t.length;){var o=e+(""===e?"":" ")+t[i];if(this.overMaxWidth(o))break;e=o,i++}return i}},{key:"getLongestFitWord",value:function(t){for(var e=0;e<t.length&&!this.overMaxWidth(au(t).call(t,0,e));)e++;return e}},{key:"splitStringIntoLines",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.parent.getFormattingValues(this.ctx,this.selected,this.hover,e);for(var o=(t=(t=t.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");o.length>0;){var n=this.getLongestFit(o);if(0===n){var r=o[0],s=this.getLongestFitWord(r);this.lines.newLine(au(r).call(r,0,s),e),o[0]=au(r).call(r,s)}else{var a=n;" "===o[n-1]?n--:" "===o[a]&&a++;var h=au(o).call(o,0,n).join("");n==o.length&&i?this.lines.append(h,e):this.lines.newLine(h,e),o=au(o).call(o,a)}}}}]),t}(),vk=["bold","ital","boldital","mono"],gk=function(){function t(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Xl(this,t),this.body=e,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(i),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=o}return $l(t,[{key:"setOptions",value:function(t){if(this.elementOptions=t,this.initFontOptions(t.font),ek(t.label)?this.labelDirty=!0:t.label=void 0,void 0!==t.font&&null!==t.font)if("string"==typeof t.font)this.baseSize=this.fontOptions.size;else if("object"===Qc(t.font)){var e=t.font.size;void 0!==e&&(this.baseSize=e)}}},{key:"initFontOptions",value:function(e){var i=this;Wy(vk,(function(t){i.fontOptions[t]={}})),t.parseFontString(this.fontOptions,e)?this.fontOptions.vadjust=0:Wy(e,(function(t,e){null!=t&&"object"!==Qc(t)&&(i.fontOptions[e]=t)}))}},{key:"constrain",value:function(t){var e={constrainWidth:!1,maxWdt:-1,minWdt:-1,constrainHeight:!1,minHgt:-1,valign:"middle"},i=im(t,"widthConstraint");if("number"==typeof i)e.maxWdt=Number(i),e.minWdt=Number(i);else if("object"===Qc(i)){var o=im(t,["widthConstraint","maximum"]);"number"==typeof o&&(e.maxWdt=Number(o));var n=im(t,["widthConstraint","minimum"]);"number"==typeof n&&(e.minWdt=Number(n))}var r=im(t,"heightConstraint");if("number"==typeof r)e.minHgt=Number(r);else if("object"===Qc(r)){var s=im(t,["heightConstraint","minimum"]);"number"==typeof s&&(e.minHgt=Number(s));var a=im(t,["heightConstraint","valign"]);"string"==typeof a&&("top"!==a&&"bottom"!==a||(e.valign=a))}return e}},{key:"update",value:function(t,e){this.setOptions(t,!0),this.propagateFonts(e),Ry(this.fontOptions,this.constrain(e)),this.fontOptions.chooser=Jw("label",e)}},{key:"adjustSizes",value:function(t){var e=t?t.right+t.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=e,this.fontOptions.minWdt-=e);var i=t?t.top+t.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)}},{key:"addFontOptionsToPile",value:function(t,e){for(var i=0;i<e.length;++i)this.addFontToPile(t,e[i])}},{key:"addFontToPile",value:function(t,e){if(void 0!==e&&void 0!==e.font&&null!==e.font){var i=e.font;t.push(i)}}},{key:"getBasicOptions",value:function(e){for(var i={},o=0;o<e.length;++o){var n=e[o],r={};t.parseFontString(r,n)&&(n=r),Wy(n,(function(t,e){void 0!==t&&(Object.prototype.hasOwnProperty.call(i,e)||(-1!==zp(vk).call(vk,e)?i[e]={}:i[e]=t))}))}return i}},{key:"getFontOption",value:function(e,i,o){for(var n,r=0;r<e.length;++r){var s=e[r];if(Object.prototype.hasOwnProperty.call(s,i)){if(null==(n=s[i]))continue;var a={};if(t.parseFontString(a,n)&&(n=a),Object.prototype.hasOwnProperty.call(n,o))return n[o]}}if(Object.prototype.hasOwnProperty.call(this.fontOptions,o))return this.fontOptions[o];throw new Error("Did not find value for multi-font for property: '"+o+"'")}},{key:"getFontOptions",value:function(t,e){for(var i={},o=["color","size","face","mod","vadjust"],n=0;n<o.length;++n){var r=o[n];i[r]=this.getFontOption(t,e,r)}return i}},{key:"propagateFonts",value:function(t){var e=this,i=[];this.addFontOptionsToPile(i,t),this.fontOptions=this.getBasicOptions(i);for(var o=function(t){var o=vk[t],n=e.fontOptions[o];Wy(e.getFontOptions(i,o),(function(t,e){n[e]=t})),n.size=Number(n.size),n.vadjust=Number(n.vadjust)},n=0;n<vk.length;++n)o(n)}},{key:"draw",value:function(t,e,i,o,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var s=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&s<this.elementOptions.scaling.label.drawThreshold-1||(s>=this.elementOptions.scaling.label.maxVisible&&(s=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),this.calculateLabelSize(t,o,n,e,i,r),this._drawBackground(t),this._drawText(t,e,this.size.yLine,r,s))}}},{key:"_drawBackground",value:function(t){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){t.fillStyle=this.fontOptions.background;var e=this.getSize();t.fillRect(e.left,e.top,e.width,e.height)}}},{key:"_drawText",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",n=arguments.length>4?arguments[4]:void 0,r=this._setAlignment(t,e,i,o),s=$c(r,2);e=s[0],i=s[1],t.textAlign="left",e-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(i-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(i+=(this.size.height-this.size.labelHeight)/2));for(var a=0;a<this.lineCount;a++){var h=this.lines[a];if(h&&h.blocks){var d=0;this.isEdgeLabel||"center"===this.fontOptions.align?d+=(this.size.width-h.width)/2:"right"===this.fontOptions.align&&(d+=this.size.width-h.width);for(var l=0;l<h.blocks.length;l++){var c=h.blocks[l];t.font=c.font;var u=this._getColor(c.color,n,c.strokeColor),f=$c(u,2),p=f[0],v=f[1];c.strokeWidth>0&&(t.lineWidth=c.strokeWidth,t.strokeStyle=v,t.lineJoin="round"),t.fillStyle=p,c.strokeWidth>0&&t.strokeText(c.text,e+d,i+c.vadjust),t.fillText(c.text,e+d,i+c.vadjust),d+=c.width}i+=h.height}}}},{key:"_setAlignment",value:function(t,e,i,o){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf){e=0,i=0;"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=4):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",i+=4):t.textBaseline="middle"}else t.textBaseline=o;return[e,i]}},{key:"_getColor",value:function(t,e,i){var o=t||"#000000",n=i||"#ffffff";if(e<=this.elementOptions.scaling.label.drawThreshold){var r=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)));o=qy(o,r),n=qy(n,r)}return[o,n]}},{key:"getTextSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(t,e,i),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"getSize",value:function(){var t=this.size.left,e=this.size.top-1;if(this.isEdgeLabel){var i=.5*-this.size.width;switch(this.fontOptions.align){case"middle":t=i,e=.5*-this.size.height;break;case"top":t=i,e=-(this.size.height+2);break;case"bottom":t=i,e=2}}return{left:t,top:e,width:this.size.width,height:this.size.height}}},{key:"calculateLabelSize",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this._processLabel(t,e,i),this.size.left=o-.5*this.size.width,this.size.top=n-.5*this.size.height,this.size.yLine=n+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===r&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4)}},{key:"getFormattingValues",value:function(t,e,i,o){var n=function(t,e,i){return"normal"===e?"mod"===i?"":t[i]:void 0!==t[e][i]?t[e][i]:t[i]},r={color:n(this.fontOptions,o,"color"),size:n(this.fontOptions,o,"size"),face:n(this.fontOptions,o,"face"),mod:n(this.fontOptions,o,"mod"),vadjust:n(this.fontOptions,o,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(e||i)&&("normal"===o&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?r.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(r,this.elementOptions.id,e,i));var s="";return void 0!==r.mod&&""!==r.mod&&(s+=r.mod+" "),s+=r.size+"px "+r.face,t.font=s.replace(/"/g,""),r.font=t.font,r.height=r.size,r}},{key:"differentState",value:function(t,e){return t!==this.selectedState||e!==this.hoverState}},{key:"_processLabelText",value:function(t,e,i,o){return new pk(t,this,e,i).process(o)}},{key:"_processLabel",value:function(t,e,i){if(!1!==this.labelDirty||this.differentState(e,i)){var o=this._processLabelText(t,e,i,this.elementOptions.label);this.fontOptions.minWdt>0&&o.width<this.fontOptions.minWdt&&(o.width=this.fontOptions.minWdt),this.size.labelHeight=o.height,this.fontOptions.minHgt>0&&o.height<this.fontOptions.minHgt&&(o.height=this.fontOptions.minHgt),this.lines=o.lines,this.lineCount=o.lines.length,this.size.width=o.width,this.size.height=o.height,this.selectedState=e,this.hoverState=i,this.labelDirty=!1}}},{key:"visible",value:function(){return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)}}],[{key:"parseFontString",value:function(t,e){if(!e||"string"!=typeof e)return!1;var i=e.split(" ");return t.size=+i[0].replace("px",""),t.face=i[1],t.color=i[2],!0}}]),t}(),yk=na,mk=wt,bk=n.TypeError,wk=xi,kk=c,_k=Co,xk=function(t){if(yk(t))return t;throw bk(mk(t)+" is not a constructor")},Ek=Ze,Ok=X,Ck=kr,Sk=r,Tk=J("Reflect","construct"),Mk=Object.prototype,Pk=[].push,Dk=Sk((function(){function t(){}return!(Tk((function(){}),[],t)instanceof t)})),Bk=!Sk((function(){Tk((function(){}))})),Ik=Dk||Bk;wk({target:"Reflect",stat:!0,forced:Ik,sham:Ik},{construct:function(t,e){xk(t),Ek(e);var i=arguments.length<3?t:xk(arguments[2]);if(Bk&&!Dk)return Tk(t,e,i);if(t==i){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return kk(Pk,o,e),new(kk(_k,t,o))}var n=i.prototype,r=Ck(Ok(n)?n:Mk),s=kk(t,r,e);return Ok(s)?s:r}});var zk=G.Reflect.construct,Fk=Lp;xi({target:"Object",stat:!0},{setPrototypeOf:us});var Nk=G.Object.setPrototypeOf;function Ak(t,e){return Ak=Nk||function(t,e){return t.__proto__=e,t},Ak(t,e)}function Rk(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Fk(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Gl(t,"prototype",{writable:!1}),e&&Ak(t,e)}function jk(t,e){if(e&&("object"===Qc(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var Lk=Rf;function Hk(t){return Hk=Nk?Lk:function(t){return t.__proto__||Lk(t)},Hk(t)}var Wk=function(){function t(e,i,o){Xl(this,t),this.body=i,this.labelModule=o,this.setOptions(e),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.refreshNeeded=!0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return $l(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"_setMargins",value:function(t){this.margin={},this.options.margin&&("object"==Qc(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),t.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(t,e){var i=this.options.borderWidth;return t&&this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}},{key:"enableShadow",value:function(t,e){e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(t,e){if(!1!==e.borderDashes)if(void 0!==t.setLineDash){var i=e.borderDashes;!0===i&&(i=[5,15]),t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1}},{key:"disableBorderDashes",value:function(t,e){!1!==e.borderDashes&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1))}},{key:"needsRefresh",value:function(t,e){return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(t,e)}},{key:"initContextForDraw",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,i),t.strokeStyle=e.borderColor,t.fillStyle=e.color}},{key:"performStroke",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.save(),i>0&&(this.enableBorderDashes(t,e),t.stroke(),this.disableBorderDashes(t,e)),t.restore()}},{key:"performFill",value:function(t,e){t.save(),t.fillStyle=e.color,this.enableShadow(t,e),Pv(t).call(t),this.disableShadow(t,e),t.restore(),this.performStroke(t,e)}},{key:"_addBoundingBoxMargin",value:function(t){this.boundingBox.left-=t,this.boundingBox.top-=t,this.boundingBox.bottom+=t,this.boundingBox.right+=t}},{key:"_updateBoundingBox",value:function(t,e,i,o,n){void 0!==i&&this.resize(i,o,n),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n)}},{key:"getDimensionsFromLabel",value:function(t,e,i){this.textSize=this.labelModule.getTextSize(t,e,i);var o=this.textSize.width,n=this.textSize.height;return 0===o&&(o=14,n=14),{width:o,height:n}}}]),t}();function Vk(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var qk=function(t){Rk(i,t);var e=Vk(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.width=o.width+this.margin.right+this.margin.left,this.height=o.height+this.margin.top+this.margin.bottom,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,r),Ao(t,this.left,this.top,this.width,this.height,r.borderRadius),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n);var r=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(r)}},{key:"distanceToBorder",value:function(t,e){t&&this.resize(t);var i=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}}]),i}(Wk);function Uk(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Yk=function(t){Rk(i,t);var e=Uk(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n)).labelOffset=0,r.selected=!1,r}return $l(i,[{key:"setOptions",value:function(t,e,i){this.options=t,void 0===e&&void 0===i||this.setImages(e,i)}},{key:"setImages",value:function(t,e){e&&this.selected?(this.imageObj=e,this.imageObjAlt=t):(this.imageObj=t,this.imageObjAlt=e)}},{key:"switchImages",value:function(t){var e=t&&!this.selected||!t&&this.selected;if(this.selected=t,void 0!==this.imageObjAlt&&e){var i=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=i}}},{key:"_getImagePadding",value:function(){var t={top:0,right:0,bottom:0,left:0};if(this.options.imagePadding){var e=this.options.imagePadding;"object"==Qc(e)?(t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left):(t.top=e,t.right=e,t.bottom=e,t.left=e)}return t}},{key:"_resizeImage",value:function(){var t,e;if(!1===this.options.shapeProperties.useImageSize){var i=1,o=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?i=this.imageObj.width/this.imageObj.height:o=this.imageObj.height/this.imageObj.width),t=2*this.options.size*i,e=2*this.options.size*o}else{var n=this._getImagePadding();t=this.imageObj.width+n.left+n.right,e=this.imageObj.height+n.top+n.bottom}this.width=t,this.height=e,this.radius=.5*this.width}},{key:"_drawRawCircle",value:function(t,e,i,o){this.initContextForDraw(t,o),No(t,e,i,o.size),this.performFill(t,o)}},{key:"_drawImageAtPosition",value:function(t,e){if(0!=this.imageObj.width){t.globalAlpha=void 0!==e.opacity?e.opacity:1,this.enableShadow(t,e);var i=1;!0===this.options.shapeProperties.interpolation&&(i=this.imageObj.width/this.width/this.body.view.scale);var o=this._getImagePadding(),n=this.left+o.left,r=this.top+o.top,s=this.width-o.left-o.right,a=this.height-o.top-o.bottom;this.imageObj.drawImageAtPosition(t,i,n,r,s,a),this.disableShadow(t,e)}}},{key:"_drawImageLabel",value:function(t,e,i,o,n){var r=0;if(void 0!==this.height){r=.5*this.height;var s=this.labelModule.getTextSize(t,o,n);s.lineCount>=1&&(r+=s.height/2)}var a=i+r;this.options.label&&(this.labelOffset=r),this.labelModule.draw(t,e,a,o,n,"hanging")}}]),i}(Wk);function Xk(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Gk=function(t){Rk(i,t);var e=Xk(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i),n=Math.max(o.width+this.margin.right+this.margin.left,o.height+this.margin.top+this.margin.bottom);this.options.size=n/2,this.width=n,this.height=n,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,r),this.updateBoundingBox(e,i),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),.5*this.width}}]),i}(Yk);function Kk(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var $k=function(t){Rk(i,t);var e=Kk(i);function i(t,o,n,r,s){var a;return Xl(this,i),(a=e.call(this,t,o,n)).setImages(r,s),a}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(o){var n=2*this.options.size;return this.width=n,this.height=n,void(this.radius=.5*this.width)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,r){this.switchImages(o),this.resize();var s=e,a=i;"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,this.top=i,s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),this._drawRawCircle(t,s,a,r),t.save(),t.clip(),this._drawImageAtPosition(t,r),t.restore(),this._drawImageLabel(t,s,a,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){"top-left"===this.options.shapeProperties.coordinateOrigin?(this.boundingBox.top=e,this.boundingBox.left=t,this.boundingBox.right=t+2*this.options.size,this.boundingBox.bottom=e+2*this.options.size):(this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size),this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),.5*this.width}}]),i}(Yk);function Zk(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Qk=function(t){Rk(i,t);var e=Zk(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:this.options.size};if(this.needsRefresh(e,i)){var n,r;this.labelModule.getTextSize(t,e,i);var s=2*o.size;this.width=null!==(n=this.customSizeWidth)&&void 0!==n?n:s,this.height=null!==(r=this.customSizeHeight)&&void 0!==r?r:s,this.radius=.5*this.width}}},{key:"_drawShape",value:function(t,e,i,o,n,r,s,a){var h,d=this;return this.resize(t,r,s,a),this.left=o-this.width/2,this.top=n-this.height/2,this.initContextForDraw(t,a),(h=e,Object.prototype.hasOwnProperty.call(Ho,h)?Ho[h]:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];CanvasRenderingContext2D.prototype[h].call(t,i)})(t,o,n,a.size),this.performFill(t,a),void 0!==this.options.icon&&void 0!==this.options.icon.code&&(t.font=(r?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",t.fillText(this.options.icon.code,o,n)),{drawExternalLabel:function(){if(void 0!==d.options.label){d.labelModule.calculateLabelSize(t,r,s,o,n,"hanging");var e=n+.5*d.height+.5*d.labelModule.size.height;d.labelModule.draw(t,o,e,r,s,"hanging")}d.updateBoundingBox(o,n)}}}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))}}]),i}(Wk);function Jk(t,e){var i=mu(t);if(dl){var o=dl(t);e&&(o=Yf(o).call(o,(function(e){return wl(t,e).enumerable}))),i.push.apply(i,o)}return i}function t_(t){for(var e=1;e<arguments.length;e++){var i,o,n=null!=arguments[e]?arguments[e]:{};e%2?Fu(i=Jk(Object(n),!0)).call(i,(function(e){Zl(t,e,n[e])})):Dl?Rl(t,Dl(n)):Fu(o=Jk(Object(n))).call(o,(function(e){Yl(t,e,wl(n,e))}))}return t}function e_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var i_=function(t){Rk(i,t);var e=e_(i);function i(t,o,n,r){var s;return Xl(this,i),(s=e.call(this,t,o,n,r)).ctxRenderer=r,s}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n,r),this.left=e-this.width/2,this.top=i-this.height/2,t.save();var s=this.ctxRenderer({ctx:t,id:this.options.id,x:e,y:i,state:{selected:o,hover:n},style:t_({},r),label:this.options.label});if(null!=s.drawNode&&s.drawNode(),t.restore(),s.drawExternalLabel){var a=s.drawExternalLabel;s.drawExternalLabel=function(){t.save(),a(),t.restore()}}return s.nodeDimensions&&(this.customSizeWidth=s.nodeDimensions.width,this.customSizeHeight=s.nodeDimensions.height),s}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function o_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var n_=function(t){Rk(i,t);var e=o_(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return $l(i,[{key:"resize",value:function(t,e,i){if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i).width+this.margin.right+this.margin.left;this.width=o,this.height=o,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,r),jo(t,e-this.width/2,i-this.height/2,this.width,this.height),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Wk);function r_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var s_=function(t){Rk(i,t);var e=r_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"diamond",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function a_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var h_=function(t){Rk(i,t);var e=a_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"circle",2,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),this.options.size}}]),i}(Qk);function d_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var l_=function(t){Rk(i,t);var e=d_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.height=2*o.height,this.width=o.width+o.height,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-.5*this.width,this.top=i-.5*this.height,this.initContextForDraw(t,r),Ro(t,this.left,this.top,this.width,this.height),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){t&&this.resize(t);var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,r=Math.cos(e)*o;return i*o/Math.sqrt(n*n+r*r)}}]),i}(Wk);function c_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var u_=function(t){Rk(i,t);var e=c_(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return $l(i,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,r){var s=this;return this.resize(t,o,n),this.options.icon.size=this.options.icon.size||50,this.left=e-this.width/2,this.top=i-this.height/2,this._icon(t,e,i,o,n,r),{drawExternalLabel:function(){if(void 0!==s.options.label){s.labelModule.draw(t,s.left+s.iconSize.width/2+s.margin.left,i+s.height/2+5,o)}s.updateBoundingBox(e,i)}}}},{key:"updateBoundingBox",value:function(t,e){if(this.boundingBox.top=e-.5*this.options.icon.size,this.boundingBox.left=t-.5*this.options.icon.size,this.boundingBox.right=t+.5*this.options.icon.size,this.boundingBox.bottom=e+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(t,e,i,o,n,r){var s=Number(this.options.icon.size);void 0!==this.options.icon.code?(t.font=[null!=this.options.icon.weight?this.options.icon.weight:o?"bold":"",(null!=this.options.icon.weight&&o?5:0)+s+"px",this.options.icon.face].join(" "),t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",this.enableShadow(t,r),t.fillText(this.options.icon.code,e,i),this.disableShadow(t,r)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Wk);function f_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var p_=function(t){Rk(i,t);var e=f_(i);function i(t,o,n,r,s){var a;return Xl(this,i),(a=e.call(this,t,o,n)).setImages(r,s),a}return $l(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(o){var n=2*this.options.size;return this.width=n,void(this.height=n)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,r){t.save(),this.switchImages(o),this.resize();var s=e,a=i;if("top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,this.top=i,s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),!0===this.options.shapeProperties.useBorderWithImage){var h=this.options.borderWidth,d=this.options.borderWidthSelected||2*this.options.borderWidth,l=(o?d:h)/this.body.view.scale;t.lineWidth=Math.min(this.width,l),t.beginPath();var c=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,u=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background;void 0!==r.opacity&&(c=qy(c,r.opacity),u=qy(u,r.opacity)),t.strokeStyle=c,t.fillStyle=u,t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth),Pv(t).call(t),this.performStroke(t,r),t.closePath()}this._drawImageAtPosition(t,r),this._drawImageLabel(t,s,a,o,n),this.updateBoundingBox(e,i),t.restore()}},{key:"updateBoundingBox",value:function(t,e){this.resize(),"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=t,this.top=e):(this.left=t-this.width/2,this.top=e-this.height/2),this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Yk);function v_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var g_=function(t){Rk(i,t);var e=v_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"square",2,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function y_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var m_=function(t){Rk(i,t);var e=y_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"hexagon",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function b_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var w_=function(t){Rk(i,t);var e=b_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"star",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function k_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var __=function(t){Rk(i,t);var e=k_(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return $l(i,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.textSize=this.labelModule.getTextSize(t,e,i),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.enableShadow(t,r),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n),this.disableShadow(t,r),this.updateBoundingBox(e,i,t,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Wk);function x_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var E_=function(t){Rk(i,t);var e=x_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"triangle",3,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function O_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var C_=function(t){Rk(i,t);var e=O_(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"triangleDown",3,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Qk);function S_(t,e){var i=mu(t);if(dl){var o=dl(t);e&&(o=Yf(o).call(o,(function(e){return wl(t,e).enumerable}))),i.push.apply(i,o)}return i}function T_(t){for(var e=1;e<arguments.length;e++){var i,o,n=null!=arguments[e]?arguments[e]:{};e%2?Fu(i=S_(Object(n),!0)).call(i,(function(e){Zl(t,e,n[e])})):Dl?Rl(t,Dl(n)):Fu(o=S_(Object(n))).call(o,(function(e){Yl(t,e,wl(n,e))}))}return t}var M_=function(){function t(e,i,o,n,r,s){Xl(this,t),this.options=Jy(r),this.globalOptions=r,this.defaultOptions=s,this.body=i,this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=n,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new gk(this.body,this.options,!1),this.setOptions(e)}return $l(t,[{key:"attachEdge",value:function(t){var e;-1===zp(e=this.edges).call(e,t)&&this.edges.push(t)}},{key:"detachEdge",value:function(t){var e,i,o=zp(e=this.edges).call(e,t);-1!=o&&uf(i=this.edges).call(i,o,1)}},{key:"setOptions",value:function(e){var i=this.options.shape;if(e){if(void 0!==e.color&&(this._localColor=e.color),void 0!==e.id&&(this.id=e.id),void 0===this.id)throw new Error("Node must have an id");t.checkMass(e,this.id),void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=_p(e.x),this.predefinedPosition=!0)),void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=_p(e.y),this.predefinedPosition=!0)),void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=Yw(e.value)),t.parseOptions(this.options,e,!0,this.globalOptions,this.grouplist);var o=[e,this.options,this.defaultOptions];return this.chooser=Jw("node",o),this._load_images(),this.updateLabelModule(e),void 0!==e.opacity&&t.checkOpacity(e.opacity)&&(this.options.opacity=e.opacity),this.updateShape(i),void 0!==e.hidden||void 0!==e.physics}}},{key:"_load_images",value:function(){if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(void 0!==this.options.image){if(void 0===this.imagelist)throw new Error("Internal Error: No images provided");if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(void 0===this.options.image.unselected)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}},{key:"getFormattingValues",value:function(){var t={color:this.options.color.background,opacity:this.options.opacity,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};if(this.selected||this.hover?!0===this.chooser?this.selected?(null!=this.options.borderWidthSelected?t.borderWidth=this.options.borderWidthSelected:t.borderWidth*=2,t.color=this.options.color.highlight.background,t.borderColor=this.options.color.highlight.border,t.shadow=this.options.shadow.enabled):this.hover&&(t.color=this.options.color.hover.background,t.borderColor=this.options.color.hover.border,t.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(t,this.options.id,this.selected,this.hover),!1===t.shadow&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=!0))):t.shadow=this.options.shadow.enabled,void 0!==this.options.opacity){var e=this.options.opacity;t.borderColor=qy(t.borderColor,e),t.color=qy(t.color,e),t.shadowColor=qy(t.shadowColor,e)}return t}},{key:"updateLabelModule",value:function(e){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),t.updateGroupOptions(this.options,T_(T_({},e),{},{color:e&&e.color||this._localColor||void 0}),this.grouplist);var i=this.grouplist.get(this.options.group,!1),o=[e,this.options,i,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,o),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new qk(this.options,this.body,this.labelModule);break;case"circle":this.shape=new Gk(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new $k(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"custom":this.shape=new i_(this.options,this.body,this.labelModule,this.options.ctxRenderer);break;case"database":this.shape=new n_(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new s_(this.options,this.body,this.labelModule);break;case"dot":this.shape=new h_(this.options,this.body,this.labelModule);break;case"ellipse":default:this.shape=new l_(this.options,this.body,this.labelModule);break;case"icon":this.shape=new u_(this.options,this.body,this.labelModule);break;case"image":this.shape=new p_(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new g_(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new m_(this.options,this.body,this.labelModule);break;case"star":this.shape=new w_(this.options,this.body,this.labelModule);break;case"text":this.shape=new __(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new E_(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new C_(this.options,this.body,this.labelModule)}this.needsRefresh()}},{key:"select",value:function(){this.selected=!0,this.needsRefresh()}},{key:"unselect",value:function(){this.selected=!1,this.needsRefresh()}},{key:"needsRefresh",value:function(){this.shape.refreshNeeded=!0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(t,e){return this.shape.distanceToBorder(t,e)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"getLabelSize",value:function(){return this.labelModule.size()}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var r=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*r}this.options.size=this.options.scaling.min+o*n}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(t){var e=this.getFormattingValues();return this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)||{}}},{key:"updateBoundingBox",value:function(t){this.shape.updateBoundingBox(this.x,this.y,t)}},{key:"resize",value:function(t){var e=this.getFormattingValues();this.shape.resize(t,this.selected,this.hover,e)}},{key:"getItemsOnPoint",value:function(t){var e=[];return this.labelModule.visible()&&tk(this.labelModule.getSize(),t)&&e.push({nodeId:this.id,labelId:0}),tk(this.shape.boundingBox,t)&&e.push({nodeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}},{key:"isBoundingBoxOverlappingWith",value:function(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}}],[{key:"checkOpacity",value:function(t){return 0<=t&&t<=1}},{key:"checkCoordinateOrigin",value:function(t){return void 0===t||"center"===t||"top-left"===t}},{key:"updateGroupOptions",value:function(e,i,o){var n;if(void 0!==o){var r=e.group;if(void 0!==i&&void 0!==i.group&&r!==i.group)throw new Error("updateGroupOptions: group values in options don't match.");if("number"==typeof r||"string"==typeof r&&""!=r){var s=o.get(r);void 0!==s.opacity&&void 0===i.opacity&&(t.checkOpacity(s.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+s.opacity),s.opacity=void 0));var a=Yf(n=Qw(i)).call(n,(function(t){return null!=i[t]}));a.push("font"),Ay(a,e,s),e.color=Yy(e.color)}}}},{key:"parseOptions",value:function(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0,s=["color","fixed","shadow"];if(Ay(s,e,i,o),t.checkMass(i),void 0!==e.opacity&&(t.checkOpacity(e.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+e.opacity),e.opacity=void 0)),void 0!==i.opacity&&(t.checkOpacity(i.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+i.opacity),i.opacity=void 0)),i.shapeProperties&&!t.checkCoordinateOrigin(i.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+i.shapeProperties.coordinateOrigin),tm(e,i,"shadow",n),void 0!==i.color&&null!==i.color){var a=Yy(i.color);Fy(e.color,a)}else!0===o&&null===i.color&&(e.color=Jy(n.color));void 0!==i.fixed&&null!==i.fixed&&("boolean"==typeof i.fixed?(e.fixed.x=i.fixed,e.fixed.y=i.fixed):(void 0!==i.fixed.x&&"boolean"==typeof i.fixed.x&&(e.fixed.x=i.fixed.x),void 0!==i.fixed.y&&"boolean"==typeof i.fixed.y&&(e.fixed.y=i.fixed.y))),!0===o&&null===i.font&&(e.font=Jy(n.font)),t.updateGroupOptions(e,i,r),void 0!==i.scaling&&tm(e.scaling,i.scaling,"label",n.scaling)}},{key:"checkMass",value:function(t,e){if(void 0!==t.mass&&t.mass<=0){var i="";void 0!==e&&(i=" in node id: "+e),console.error("%cNegative or zero mass disallowed"+i+", setting mass to 1.",gm),t.mass=1}}}]),t}();function P_(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return D_(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return D_(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function D_(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var B_=function(){function t(e,i,o,n){var r,s=this;if(Xl(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=n,this.body.functions.createNode=Fo(r=this.create).call(r,this),this.nodesListeners={add:function(t,e){s.add(e.items)},update:function(t,e){s.update(e.items,e.data,e.oldData)},remove:function(t,e){s.remove(e.items)}},this.defaultOptions={borderWidth:1,borderWidthSelected:void 0,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},opacity:void 0,fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,imagePadding:{top:0,right:0,bottom:0,left:0},label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1,coordinateOrigin:"center"},size:25,title:void 0,value:void 0,x:void 0,y:void 0},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=Jy(this.defaultOptions),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t,e,i=this;this.body.emitter.on("refreshNodes",Fo(t=this.refresh).call(t,this)),this.body.emitter.on("refresh",Fo(e=this.refresh).call(e,this)),this.body.emitter.on("destroy",(function(){Wy(i.nodesListeners,(function(t,e){i.body.data.nodes&&i.body.data.nodes.off(e,t)})),delete i.body.functions.createNode,delete i.nodesListeners.add,delete i.nodesListeners.update,delete i.nodesListeners.remove,delete i.nodesListeners}))}},{key:"setOptions",value:function(t){if(void 0!==t){if(M_.parseOptions(this.options,t),void 0!==t.opacity&&(Cw(t.opacity)||!Mw(t.opacity)||t.opacity<0||t.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity):this.options.opacity=t.opacity),void 0!==t.shape)for(var e in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&this.body.nodes[e].updateShape();if(void 0!==t.font||void 0!==t.widthConstraint||void 0!==t.heightConstraint)for(var i=0,o=mu(this.body.nodes);i<o.length;i++){var n=o[i];this.body.nodes[n].updateLabelModule(),this.body.nodes[n].needsRefresh()}if(void 0!==t.size)for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.body.nodes[r].needsRefresh();void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.body.data.nodes;if(e.isDataViewLike("id",t))this.body.data.nodes=t;else if(hu(t))this.body.data.nodes=new e.DataSet,this.body.data.nodes.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new e.DataSet}if(o&&Wy(this.nodesListeners,(function(t,e){o.off(e,t)})),this.body.nodes={},this.body.data.nodes){var n=this;Wy(this.nodesListeners,(function(t,e){n.body.data.nodes.on(e,t)}));var r=this.body.data.nodes.getIds();this.add(r,!0)}!1===i&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[],n=0;n<t.length;n++){e=t[n];var r=this.body.data.nodes.get(e),s=this.create(r);o.push(s),this.body.nodes[e]=s}this.layoutEngine.positionInitially(o),!1===i&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t,e,i){for(var o=this.body.nodes,n=!1,r=0;r<t.length;r++){var s=t[r],a=o[s],h=e[r];void 0!==a?a.setOptions(h)&&(n=!0):(n=!0,a=this.create(h),o[s]=a)}n||void 0===i||(n=Nw(e).call(e,(function(t,e){var o=i[e];return o&&o.level!==t.level}))),!0===n?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.nodes,i=0;i<t.length;i++){delete e[t[i]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M_;return new e(t,this.body,this.images,this.groups,this.options,this.defaultOptions)}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Wy(this.body.nodes,(function(i,o){var n=t.body.data.nodes.get(o);void 0!==n&&(!0===e&&i.setOptions({x:null,y:null}),i.setOptions({fixed:!1}),i.setOptions(n))}))}},{key:"getPositions",value:function(t){var e={};if(void 0!==t){if(!0===hu(t)){for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){var o=this.body.nodes[t[i]];e[t[i]]={x:Math.round(o.x),y:Math.round(o.y)}}}else if(void 0!==this.body.nodes[t]){var n=this.body.nodes[t];e[t]={x:Math.round(n.x),y:Math.round(n.y)}}}else for(var r=0;r<this.body.nodeIndices.length;r++){var s=this.body.nodes[this.body.nodeIndices[r]];e[this.body.nodeIndices[r]]={x:Math.round(s.x),y:Math.round(s.y)}}return e}},{key:"getPosition",value:function(t){if(null==t)throw new TypeError("No id was specified for getPosition method.");if(null==this.body.nodes[t])throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(t));return{x:Math.round(this.body.nodes[t].x),y:Math.round(this.body.nodes[t].y)}}},{key:"storePositions",value:function(){var t,e=[],i=this.body.data.nodes.getDataSet(),o=P_(i.get());try{for(o.s();!(t=o.n()).done;){var n=t.value,r=n.id,s=this.body.nodes[r],a=Math.round(s.x),h=Math.round(s.y);n.x===a&&n.y===h||e.push({id:r,x:a,y:h})}}catch(t){o.e(t)}finally{o.f()}i.update(e)}},{key:"getBoundingBox",value:function(t){if(void 0!==this.body.nodes[t])return this.body.nodes[t].shape.boundingBox}},{key:"getConnectedNodes",value:function(t,e){var i=[];if(void 0!==this.body.nodes[t])for(var o=this.body.nodes[t],n={},r=0;r<o.edges.length;r++){var s=o.edges[r];"to"!==e&&s.toId==o.id?void 0===n[s.fromId]&&(i.push(s.fromId),n[s.fromId]=!0):"from"!==e&&s.fromId==o.id&&void 0===n[s.toId]&&(i.push(s.toId),n[s.toId]=!0)}return i}},{key:"getConnectedEdges",value:function(t){var e=[];if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id);else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ",t);return e}},{key:"moveNode",value:function(t,e,i){var o=this;void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),bv((function(){o.body.emitter.emit("startSimulation")}),0)):console.error("Node id supplied to moveNode does not exist. Provided: ",t)}}]),t}(),I_=Vt,z_=x,F_=X,N_=Ze,A_=function(t){return void 0!==t&&(I_(t,"value")||I_(t,"writable"))},R_=b,j_=Dr;xi({target:"Reflect",stat:!0},{get:function t(e,i){var o,n,r=arguments.length<3?e:arguments[2];return N_(e)===r?e[i]:(o=R_.f(e,i))?A_(o)?o.value:void 0===o.get?void 0:z_(o.get,r):F_(n=j_(e))?t(n,i,r):void 0}});var L_=G.Reflect.get,H_=bl;function W_(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Hk(t)););return t}function V_(){return V_="undefined"!=typeof Reflect&&L_?L_:function(t,e,i){var o=W_(t,e);if(o){var n=H_(o,e);return n.get?n.get.call(arguments.length<3?t:i):n.value}},V_.apply(this,arguments)}var q_=xi,U_=Math.hypot,Y_=Math.abs,X_=Math.sqrt;q_({target:"Math",stat:!0,forced:!!U_&&U_(1/0,NaN)!==1/0},{hypot:function(t,e){for(var i,o,n=0,r=0,s=arguments.length,a=0;r<s;)a<(i=Y_(arguments[r++]))?(n=n*(o=a/i)*o+1,a=i):n+=i>0?(o=i/a)*o:i;return a===1/0?1/0:a*X_(n)}});var G_=G.Math.hypot;function K_(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var $_=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"transform",value:function(t,e){hu(t)||(t=[t]);for(var i=e.point.x,o=e.point.y,n=e.angle,r=e.length,s=0;s<t.length;++s){var a=t[s],h=a.x*Math.cos(n)-a.y*Math.sin(n),d=a.x*Math.sin(n)+a.y*Math.cos(n);a.x=i+r*h,a.y=o+r*d}}},{key:"drawPath",value:function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y);t.closePath()}}]),t}(),Z_=function(t){Rk(i,t);var e=K_(i);function i(){return Xl(this,i),e.apply(this,arguments)}return $l(i,null,[{key:"draw",value:function(t,e){if(e.image){t.save(),t.translate(e.point.x,e.point.y),t.rotate(Math.PI/2+e.angle);var i=null!=e.imageWidth?e.imageWidth:e.image.width,o=null!=e.imageHeight?e.imageHeight:e.image.height;e.image.drawImageAtPosition(t,1,-i/2,0,i,o),t.restore()}return!1}}]),i}($_),Q_=function(t){Rk(i,t);var e=K_(i);function i(){return Xl(this,i),e.apply(this,arguments)}return $l(i,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),i}($_),J_=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,y:-.3}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),tx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i={x:-.4,y:0};$_.transform(i,e),t.strokeStyle=t.fillStyle,t.fillStyle="rgba(0, 0, 0, 0)";var o=Math.PI,n=e.angle-o/2,r=e.angle+o/2;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),t.stroke(),!0}}]),t}(),ex=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i={x:-.3,y:0};$_.transform(i,e),t.strokeStyle=t.fillStyle,t.fillStyle="rgba(0, 0, 0, 0)";var o=Math.PI,n=e.angle+o/2,r=e.angle+3*o/2;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),t.stroke(),!0}}]),t}(),ix=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:.02,y:0},{x:-1,y:.3},{x:-1,y:-.3}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),ox=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),nx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i={x:-.4,y:0};return $_.transform(i,e),No(t,i.x,i.y,.4*e.length),!0}}]),t}(),rx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),sx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{x:-.6,y:.3}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),ax=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,y:.3}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),hx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,y:0}];return $_.transform(i,e),$_.drawPath(t,i),!0}}]),t}(),dx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"draw",value:function(t,e){var i;switch(e.type&&(i=e.type.toLowerCase()),i){case"image":return Z_.draw(t,e);case"circle":return nx.draw(t,e);case"box":return sx.draw(t,e);case"crow":return J_.draw(t,e);case"curve":return tx.draw(t,e);case"diamond":return ax.draw(t,e);case"inv_curve":return ex.draw(t,e);case"triangle":return ix.draw(t,e);case"inv_triangle":return ox.draw(t,e);case"bar":return rx.draw(t,e);case"vee":return hx.draw(t,e);default:return Q_.draw(t,e)}}}]),t}();function lx(t,e){var i=mu(t);if(dl){var o=dl(t);e&&(o=Yf(o).call(o,(function(e){return wl(t,e).enumerable}))),i.push.apply(i,o)}return i}function cx(t){for(var e=1;e<arguments.length;e++){var i,o,n=null!=arguments[e]?arguments[e]:{};e%2?Fu(i=lx(Object(n),!0)).call(i,(function(e){Zl(t,e,n[e])})):Dl?Rl(t,Dl(n)):Fu(o=lx(Object(n))).call(o,(function(e){Yl(t,e,wl(n,e))}))}return t}var ux=function(){function t(e,i,o){Xl(this,t),this._body=i,this._labelModule=o,this.color={},this.colorDirty=!0,this.hoverWidth=1.5,this.selectionWidth=2,this.setOptions(e),this.fromPoint=this.from,this.toPoint=this.to}return $l(t,[{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(t){this.options=t,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.getViaNode();t.strokeStyle=this.getColor(t,e),t.lineWidth=e.width,!1!==e.dashes?this._drawDashedLine(t,e,n):this._drawLine(t,e,n)}},{key:"_drawLine",value:function(t,e,i,o,n){if(this.from!=this.to)this._line(t,e,i,o,n);else{var r=$c(this._getCircleData(t),3),s=r[0],a=r[1],h=r[2];this._circle(t,e,s,a,h)}}},{key:"_drawDashedLine",value:function(t,e,i,o,n){t.lineCap="round";var r=hu(e.dashes)?e.dashes:[5,5];if(void 0!==t.setLineDash){if(t.save(),t.setLineDash(r),t.lineDashOffset=0,this.from!=this.to)this._line(t,e,i);else{var s=$c(this._getCircleData(t),3),a=s[0],h=s[1],d=s[2];this._circle(t,e,a,h,d)}t.setLineDash([0]),t.lineDashOffset=0,t.restore()}else{if(this.from!=this.to)Lo(t,this.from.x,this.from.y,this.to.x,this.to.y,r);else{var l=$c(this._getCircleData(t),3),c=l[0],u=l[1],f=l[2];this._circle(t,e,c,u,f)}this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}}},{key:"findBorderPosition",value:function(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}},{key:"findBorderPositions",value:function(t){if(this.from!=this.to)return{from:this._findBorderPosition(this.from,t),to:this._findBorderPosition(this.to,t)};var e,i=$c(au(e=this._getCircleData(t)).call(e,0,2),2),o=i[0],n=i[1];return{from:this._findBorderPositionCircle(this.from,t,{x:o,y:n,low:.25,high:.6,direction:-1}),to:this._findBorderPositionCircle(this.from,t,{x:o,y:n,low:.6,high:.8,direction:1})}}},{key:"_getCircleData",value:function(t){var e=this.options.selfReference.size;void 0!==t&&void 0===this.from.shape.width&&this.from.shape.resize(t);var i=ik(t,this.options.selfReference.angle,e,this.from);return[i.x,i.y,e]}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"_findBorderPositionCircle",value:function(t,e,i){var o,n=i.x,r=i.y,s=i.low,a=i.high,h=i.direction,d=this.options.selfReference.size,l=.5*(s+a),c=0;!0===this.options.arrowStrikethrough&&(-1===h?c=this.options.endPointOffset.from:1===h&&(c=this.options.endPointOffset.to));var u=0;do{l=.5*(s+a),o=this._pointOnCircle(n,r,d,l);var f=Math.atan2(t.y-o.y,t.x-o.x),p=t.distanceToBorder(e,f)+c-Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2));if(Math.abs(p)<.05)break;p>0?h>0?s=l:a=l:h>0?a=l:s=l,++u}while(s<=a&&u<10);return cx(cx({},o),{},{t:l})}},{key:"getLineWidth",value:function(t,e){return!0===t?Math.max(this.selectionWidth,.3/this._body.view.scale):!0===e?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)}},{key:"getColor",value:function(t,e){if(!1!==e.inheritsColor){if("both"===e.inheritsColor&&this.from.id!==this.to.id){var i=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),o=this.from.options.color.highlight.border,n=this.to.options.color.highlight.border;return!1===this.from.selected&&!1===this.to.selected?(o=qy(this.from.options.color.border,e.opacity),n=qy(this.to.options.color.border,e.opacity)):!0===this.from.selected&&!1===this.to.selected?n=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(o=this.from.options.color.border),i.addColorStop(0,o),i.addColorStop(1,n),i}return"to"===e.inheritsColor?qy(this.to.options.color.border,e.opacity):qy(this.from.options.color.border,e.opacity)}return qy(e.color,e.opacity)}},{key:"_circle",value:function(t,e,i,o,n){this.enableShadow(t,e);var r=0,s=2*Math.PI;if(!this.options.selfReference.renderBehindTheNode){var a=this.options.selfReference.angle,h=this.options.selfReference.angle+Math.PI,d=this._findBorderPositionCircle(this.from,t,{x:i,y:o,low:a,high:h,direction:-1}),l=this._findBorderPositionCircle(this.from,t,{x:i,y:o,low:a,high:h,direction:1});r=Math.atan2(d.y-o,d.x-i),s=Math.atan2(l.y-o,l.x-i)}t.beginPath(),t.arc(i,o,n,r,s,!1),t.stroke(),this.disableShadow(t,e)}},{key:"getDistanceToEdge",value:function(t,e,i,o,n,r){if(this.from!=this.to)return this._getDistanceToEdge(t,e,i,o,n,r);var s=$c(this._getCircleData(void 0),3),a=s[0],h=s[1],d=s[2],l=a-n,c=h-r;return Math.abs(Math.sqrt(l*l+c*c)-d)}},{key:"_getDistanceToLine",value:function(t,e,i,o,n,r){var s=i-t,a=o-e,h=((n-t)*s+(r-e)*a)/(s*s+a*a);h>1?h=1:h<0&&(h=0);var d=t+h*s-n,l=e+h*a-r;return Math.sqrt(d*d+l*l)}},{key:"getArrowData",value:function(t,e,i,o,n,r){var s,a,h,d,l,c,u,f=r.width;"from"===e?(h=this.from,d=this.to,l=r.fromArrowScale<0,c=Math.abs(r.fromArrowScale),u=r.fromArrowType):"to"===e?(h=this.to,d=this.from,l=r.toArrowScale<0,c=Math.abs(r.toArrowScale),u=r.toArrowType):(h=this.to,d=this.from,l=r.middleArrowScale<0,c=Math.abs(r.middleArrowScale),u=r.middleArrowType);var p=15*c+3*f;if(h!=d){var v=p/G_(h.x-d.x,h.y-d.y);if("middle"!==e)if(!0===this.options.smooth.enabled){var g=this._findBorderPosition(h,t,{via:i}),y=this.getPoint(g.t+v*("from"===e?1:-1),i);s=Math.atan2(g.y-y.y,g.x-y.x),a=g}else s=Math.atan2(h.y-d.y,h.x-d.x),a=this._findBorderPosition(h,t);else{var m=(l?-v:v)/2,b=this.getPoint(.5+m,i),w=this.getPoint(.5-m,i);s=Math.atan2(b.y-w.y,b.x-w.x),a=this.getPoint(.5,i)}}else{var k=$c(this._getCircleData(t),3),_=k[0],x=k[1],E=k[2];if("from"===e){var O=this.options.selfReference.angle,C=this.options.selfReference.angle+Math.PI,S=this._findBorderPositionCircle(this.from,t,{x:_,y:x,low:O,high:C,direction:-1});s=-2*S.t*Math.PI+1.5*Math.PI+.1*Math.PI,a=S}else if("to"===e){var T=this.options.selfReference.angle,M=this.options.selfReference.angle+Math.PI,P=this._findBorderPositionCircle(this.from,t,{x:_,y:x,low:T,high:M,direction:1});s=-2*P.t*Math.PI+1.5*Math.PI-1.1*Math.PI,a=P}else{var D=this.options.selfReference.angle/(2*Math.PI);a=this._pointOnCircle(_,x,E,D),s=-2*D*Math.PI+1.5*Math.PI+.1*Math.PI}}return{point:a,core:{x:a.x-.9*p*Math.cos(s),y:a.y-.9*p*Math.sin(s)},angle:s,length:p,type:u}}},{key:"drawArrowHead",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e),t.fillStyle=t.strokeStyle,t.lineWidth=e.width,dx.draw(t,n)&&(this.enableShadow(t,e),Pv(t).call(t),this.disableShadow(t,e))}},{key:"enableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"drawBackground",value:function(t,e){if(!1!==e.background){var i={strokeStyle:t.strokeStyle,lineWidth:t.lineWidth,dashes:t.dashes};t.strokeStyle=e.backgroundColor,t.lineWidth=e.backgroundSize,this.setStrokeDashed(t,e.backgroundDashes),t.stroke(),t.strokeStyle=i.strokeStyle,t.lineWidth=i.lineWidth,t.dashes=i.dashes,this.setStrokeDashed(t,e.dashes)}}},{key:"setStrokeDashed",value:function(t,e){if(!1!==e)if(void 0!==t.setLineDash){var i=hu(e)?e:[5,5];t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else void 0!==t.setLineDash?t.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")}}]),t}();function fx(t,e){var i=mu(t);if(dl){var o=dl(t);e&&(o=Yf(o).call(o,(function(e){return wl(t,e).enumerable}))),i.push.apply(i,o)}return i}function px(t){for(var e=1;e<arguments.length;e++){var i,o,n=null!=arguments[e]?arguments[e]:{};e%2?Fu(i=fx(Object(n),!0)).call(i,(function(e){Zl(t,e,n[e])})):Dl?Rl(t,Dl(n)):Fu(o=fx(Object(n))).call(o,(function(e){Yl(t,e,wl(n,e))}))}return t}function vx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var gx=function(t){Rk(i,t);var e=vx(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_findBorderPositionBezier",value:function(t,e){var i,o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),r=10,s=.2,a=!1,h=1,d=0,l=this.to,c=this.options.endPointOffset?this.options.endPointOffset.to:0;t.id===this.from.id&&(l=this.from,a=!0,c=this.options.endPointOffset?this.options.endPointOffset.from:0),!1===this.options.arrowStrikethrough&&(c=0);var u=0;do{o=.5*(d+h),i=this.getPoint(o,n);var f=Math.atan2(l.y-i.y,l.x-i.x),p=l.distanceToBorder(e,f)+c,v=Math.sqrt(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2)),g=p-v;if(Math.abs(g)<s)break;g<0?!1===a?d=o:h=o:!1===a?h=o:d=o,++u}while(d<=h&&u<r);return px(px({},i),{},{t:o})}},{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,r,s){var a,h,d,l,c,u=1e9,f=t,p=e;for(h=1;h<10;h++)d=.1*h,l=Math.pow(1-d,2)*t+2*d*(1-d)*s.x+Math.pow(d,2)*i,c=Math.pow(1-d,2)*e+2*d*(1-d)*s.y+Math.pow(d,2)*o,h>0&&(u=(a=this._getDistanceToLine(f,p,l,c,n,r))<u?a:u),f=l,p=c;return u}},{key:"_bezierCurve",value:function(t,e,i,o){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),null!=i&&null!=i.x?null!=o&&null!=o.x?t.bezierCurveTo(i.x,i.y,o.x,o.y,this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y):t.lineTo(this.toPoint.x,this.toPoint.y),this.drawBackground(t,e),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}}]),i}(ux);function yx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var mx=function(t){Rk(i,t);var e=yx(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n)).via=r.via,r._boundFunction=function(){r.positionBezierNode()},r._body.emitter.on("_repositionBezierNodes",r._boundFunction),r}return $l(i,[{key:"setOptions",value:function(t){V_(Hk(i.prototype),"setOptions",this).call(this,t);var e=!1;this.options.physics!==t.physics&&(e=!0),this.options=t,this.id=this.options.id,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.setupSupportNode(),this.connect(),!0===e&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],void 0===this.from||void 0===this.to||!1===this.options.physics||this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this._body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var t="edgeId:"+this.id,e=this._body.functions.createNode({id:t,shape:"circle",physics:!0,hidden:!0});this._body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"_getViaCoordinates",value:function(){return this.via}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via;if(this.from===this.to){var i=this._getCircleData(),o=$c(i,3),n=o[0],r=o[1],s=o[2],a=2*Math.PI*(1-t);return{x:n+s*Math.sin(a),y:r+s-s*(1-Math.cos(a))}}return{x:Math.pow(1-t,2)*this.fromPoint.x+2*t*(1-t)*e.x+Math.pow(t,2)*this.toPoint.x,y:Math.pow(1-t,2)*this.fromPoint.y+2*t*(1-t)*e.y+Math.pow(t,2)*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e,this.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){return this._getDistanceToBezierEdge(t,e,i,o,n,r,this.via)}}]),i}(gx);function bx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var wx=function(t){Rk(i,t);var e=bx(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var t,e,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),r=Math.abs(this.from.y-this.to.y);if("discrete"===o||"diagonalCross"===o){var s,a;s=a=n<=r?i*r:i*n,this.from.x>this.to.x&&(s=-s),this.from.y>=this.to.y&&(a=-a);var h=this.from.x+s,d=this.from.y+a;return"discrete"===o&&(n<=r?h=n<i*r?this.from.x:h:d=r<i*n?this.from.y:d),{x:h,y:d}}if("straightCross"===o){var l=(1-i)*n,c=(1-i)*r;return n<=r?(l=0,this.from.y<this.to.y&&(c=-c)):(this.from.x<this.to.x&&(l=-l),c=0),{x:this.to.x+l,y:this.to.y+c}}if("horizontal"===o){var u=(1-i)*n;return this.from.x<this.to.x&&(u=-u),{x:this.to.x+u,y:this.from.y}}if("vertical"===o){var f=(1-i)*r;return this.from.y<this.to.y&&(f=-f),{x:this.from.x,y:this.to.y+f}}if("curvedCW"===o){n=this.to.x-this.from.x,r=this.from.y-this.to.y;var p=Math.sqrt(n*n+r*r),v=Math.PI,g=(Math.atan2(r,n)+(.5*i+.5)*v)%(2*v);return{x:this.from.x+(.5*i+.5)*p*Math.sin(g),y:this.from.y+(.5*i+.5)*p*Math.cos(g)}}if("curvedCCW"===o){n=this.to.x-this.from.x,r=this.from.y-this.to.y;var y=Math.sqrt(n*n+r*r),m=Math.PI,b=(Math.atan2(r,n)+(.5*-i+.5)*m)%(2*m);return{x:this.from.x+(.5*i+.5)*y*Math.sin(b),y:this.from.y+(.5*i+.5)*y*Math.cos(b)}}t=e=n<=r?i*r:i*n,this.from.x>this.to.x&&(t=-t),this.from.y>=this.to.y&&(e=-e);var w=this.from.x+t,k=this.from.y+e;return n<=r?w=this.from.x<=this.to.x?this.to.x<w?this.to.x:w:this.to.x>w?this.to.x:w:k=this.from.y>=this.to.y?this.to.y>k?this.to.y:k:this.to.y<k?this.to.y:k,{x:w,y:k}}},{key:"_findBorderPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(t,e,i.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(t,e,i,o,n,r,s)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=t,o=Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,n=Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y;return{x:o,y:n}}}]),i}(gx);function kx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var _x=function(t){Rk(i,t);var e=kx(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_getDistanceToBezierEdge2",value:function(t,e,i,o,n,r,s,a){for(var h=1e9,d=t,l=e,c=[0,0,0,0],u=1;u<10;u++){var f=.1*u;c[0]=Math.pow(1-f,3),c[1]=3*f*Math.pow(1-f,2),c[2]=3*Math.pow(f,2)*(1-f),c[3]=Math.pow(f,3);var p=c[0]*t+c[1]*s.x+c[2]*a.x+c[3]*i,v=c[0]*e+c[1]*s.y+c[2]*a.y+c[3]*o;if(u>0){var g=this._getDistanceToLine(d,l,p,v,n,r);h=g<h?g:h}d=p,l=v}return h}}]),i}(gx);function xx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Ex=function(t){Rk(i,t);var e=xx(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_line",value:function(t,e,i){var o=i[0],n=i[1];this._bezierCurve(t,e,o,n)}},{key:"_getViaCoordinates",value:function(){var t,e,i,o,n=this.from.x-this.to.x,r=this.from.y-this.to.y,s=this.options.smooth.roundness;return(Math.abs(n)>Math.abs(r)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(e=this.from.y,o=this.to.y,t=this.from.x-s*n,i=this.to.x+s*n):(e=this.from.y-s*r,o=this.to.y+s*r,t=this.from.x,i=this.to.x),[{x:t,y:e},{x:i,y:o}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),a=$c(s,2),h=a[0],d=a[1];return this._getDistanceToBezierEdge2(t,e,i,o,n,r,h,d)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=$c(e,2),o=i[0],n=i[1],r=t,s=[Math.pow(1-r,3),3*r*Math.pow(1-r,2),3*Math.pow(r,2)*(1-r),Math.pow(r,3)],a=s[0]*this.fromPoint.x+s[1]*o.x+s[2]*n.x+s[3]*this.toPoint.x,h=s[0]*this.fromPoint.y+s[1]*o.y+s[2]*n.y+s[3]*this.toPoint.y;return{x:a,y:h}}}]),i}(_x);function Ox(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Cx=function(t){Rk(i,t);var e=Ox(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_line",value:function(t,e){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),t.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(t){return{x:(1-t)*this.fromPoint.x+t*this.toPoint.x,y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){var i=this.to,o=this.from;t.id===this.from.id&&(i=this.from,o=this.to);var n=Math.atan2(i.y-o.y,i.x-o.x),r=i.x-o.x,s=i.y-o.y,a=Math.sqrt(r*r+s*s),h=(a-t.distanceToBorder(e,n))/a;return{x:(1-h)*o.x+h*i.x,y:(1-h)*o.y+h*i.y,t:0}}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){return this._getDistanceToLine(t,e,i,o,n,r)}}]),i}(ux),Sx=function(){function t(e,i,o,n,r){if(Xl(this,t),void 0===i)throw new Error("No body provided");this.options=Jy(n),this.globalOptions=n,this.defaultOptions=r,this.body=i,this.imagelist=o,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new gk(this.body,this.options,!0),this.setOptions(e)}return $l(t,[{key:"setOptions",value:function(e){if(e){var i=void 0!==e.physics&&this.options.physics!==e.physics||void 0!==e.hidden&&(this.options.hidden||!1)!==(e.hidden||!1)||void 0!==e.from&&this.options.from!==e.from||void 0!==e.to&&this.options.to!==e.to;t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==e.id&&(this.id=e.id),void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),void 0!==e.title&&(this.title=e.title),void 0!==e.value&&(e.value=Yw(e.value));var o=[e,this.options,this.defaultOptions];return this.chooser=Jw("edge",o),this.updateLabelModule(e),i=this.updateEdgeType()||i,this._setInteractionWidths(),this.connect(),i}}},{key:"getFormattingValues",value:function(){var t=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,e=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,i=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,o=this.options.color.inherit,n={toArrow:t,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,toArrowSrc:this.options.arrows.to.src,toArrowImageWidth:this.options.arrows.to.imageWidth,toArrowImageHeight:this.options.arrows.to.imageHeight,middleArrow:i,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,middleArrowSrc:this.options.arrows.middle.src,middleArrowImageWidth:this.options.arrows.middle.imageWidth,middleArrowImageHeight:this.options.arrows.middle.imageHeight,fromArrow:e,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,fromArrowSrc:this.options.arrows.from.src,fromArrowImageWidth:this.options.arrows.from.imageWidth,fromArrowImageHeight:this.options.arrows.from.imageHeight,arrowStrikethrough:this.options.arrowStrikethrough,color:o?void 0:this.options.color.color,inheritsColor:o,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width,background:this.options.background.enabled,backgroundColor:this.options.background.color,backgroundSize:this.options.background.size,backgroundDashes:this.options.background.dashes};if(this.selected||this.hover)if(!0===this.chooser){if(this.selected){var r=this.options.selectionWidth;"function"==typeof r?n.width=r(n.width):"number"==typeof r&&(n.width+=r),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.highlight,n.shadow=this.options.shadow.enabled}else if(this.hover){var s=this.options.hoverWidth;"function"==typeof s?n.width=s(n.width):"number"==typeof s&&(n.width+=s),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.hover,n.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(n,this.options.id,this.selected,this.hover),void 0!==n.color&&(n.inheritsColor=!1),!1===n.shadow&&(n.shadowColor===this.options.shadow.color&&n.shadowSize===this.options.shadow.size&&n.shadowX===this.options.shadow.x&&n.shadowY===this.options.shadow.y||(n.shadow=!0)));else n.shadow=this.options.shadow.enabled,n.width=Math.max(n.width,.3/this.body.view.scale);return n}},{key:"updateLabelModule",value:function(t){var e=[t,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var t=this.options.smooth,e=!1,i=!0;return void 0!==this.edgeType&&((this.edgeType instanceof mx&&!0===t.enabled&&"dynamic"===t.type||this.edgeType instanceof Ex&&!0===t.enabled&&"cubicBezier"===t.type||this.edgeType instanceof wx&&!0===t.enabled&&"dynamic"!==t.type&&"cubicBezier"!==t.type||this.edgeType instanceof Cx&&!1===t.type.enabled)&&(i=!1),!0===i&&(e=this.cleanup())),!0===i?!0===t.enabled?"dynamic"===t.type?(e=!0,this.edgeType=new mx(this.options,this.body,this.labelModule)):"cubicBezier"===t.type?this.edgeType=new Ex(this.options,this.body,this.labelModule):this.edgeType=new wx(this.options,this.body,this.labelModule):this.edgeType=new Cx(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),e}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,!0===this.connected?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var r=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*r}this.options.width=this.options.scaling.min+o*n}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode();this.edgeType.drawLine(t,e,this.selected,this.hover,i),this.drawLabel(t,i)}}},{key:"drawArrows",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode(),o={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,e.fromArrow&&(o.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.fromPoint=o.from.core),e.fromArrowSrc&&(o.from.image=this.imagelist.load(e.fromArrowSrc)),e.fromArrowImageWidth&&(o.from.imageWidth=e.fromArrowImageWidth),e.fromArrowImageHeight&&(o.from.imageHeight=e.fromArrowImageHeight)),e.toArrow&&(o.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.toPoint=o.to.core),e.toArrowSrc&&(o.to.image=this.imagelist.load(e.toArrowSrc)),e.toArrowImageWidth&&(o.to.imageWidth=e.toArrowImageWidth),e.toArrowImageHeight&&(o.to.imageHeight=e.toArrowImageHeight)),e.middleArrow&&(o.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e),e.middleArrowSrc&&(o.middle.image=this.imagelist.load(e.middleArrowSrc)),e.middleArrowImageWidth&&(o.middle.imageWidth=e.middleArrowImageWidth),e.middleArrowImageHeight&&(o.middle.imageHeight=e.middleArrowImageHeight)),e.fromArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.from),e.middleArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.middle),e.toArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.to)}}},{key:"drawLabel",value:function(t,e){if(void 0!==this.options.label){var i,o=this.from,n=this.to;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(t,this.selected,this.hover),o.id!=n.id){this.labelModule.pointToSelf=!1,i=this.edgeType.getPoint(.5,e),t.save();var r=this._getRotation(t);0!=r.angle&&(t.translate(r.x,r.y),t.rotate(r.angle)),this.labelModule.draw(t,i.x,i.y,this.selected,this.hover),t.restore()}else{this.labelModule.pointToSelf=!0;var s=ik(t,this.options.selfReference.angle,this.options.selfReference.size,o);i=this._pointOnCircle(s.x,s.y,this.options.selfReference.size,this.options.selfReference.angle),this.labelModule.draw(t,i.x,i.y,this.selected,this.hover)}}}},{key:"getItemsOnPoint",value:function(t){var e=[];if(this.labelModule.visible()){var i=this._getRotation();tk(this.labelModule.getSize(),t,i)&&e.push({edgeId:this.id,labelId:0})}var o={left:t.x,top:t.y};return this.isOverlappingWith(o)&&e.push({edgeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){if(this.connected){var e=this.from.x,i=this.from.y,o=this.to.x,n=this.to.y,r=t.left,s=t.top;return this.edgeType.getDistanceToEdge(e,i,o,n,r,s)<10}return!1}},{key:"_getRotation",value:function(t){var e=this.edgeType.getViaNode(),i=this.edgeType.getPoint(.5,e);void 0!==t&&this.labelModule.calculateLabelSize(t,this.selected,this.hover,i.x,i.y);var o={x:i.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return o;if("horizontal"===this.options.font.align)return o;var n=this.from.y-this.to.y,r=this.from.x-this.to.x,s=Math.atan2(n,r);return(s<-1&&r<0||s>0&&r<0)&&(s+=Math.PI),o.angle=s,o}},{key:"_pointOnCircle",value:function(t,e,i,o){return{x:t+i*Math.cos(o),y:e-i*Math.sin(o)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}},{key:"remove",value:function(){this.cleanup(),this.disconnect(),delete this.body.edges[this.id]}},{key:"endPointsValid",value:function(){return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"];if(Ny(r,t,e,i),void 0!==e.endPointOffset&&void 0!==e.endPointOffset.from&&(Mw(e.endPointOffset.from)?t.endPointOffset.from=e.endPointOffset.from:(t.endPointOffset.from=void 0!==o.endPointOffset.from?o.endPointOffset.from:0,console.error("endPointOffset.from is not a valid number"))),void 0!==e.endPointOffset&&void 0!==e.endPointOffset.to&&(Mw(e.endPointOffset.to)?t.endPointOffset.to=e.endPointOffset.to:(t.endPointOffset.to=void 0!==o.endPointOffset.to?o.endPointOffset.to:0,console.error("endPointOffset.to is not a valid number"))),ek(e.label)?t.label=e.label:ek(t.label)||(t.label=void 0),tm(t,e,"smooth",o),tm(t,e,"shadow",o),tm(t,e,"background",o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:!0===i&&null===e.dashes&&(t.dashes=Hp(o.dashes)),void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),tm(t.scaling,e.scaling,"label",o.scaling)):!0===i&&null===e.scaling&&(t.scaling=Hp(o.scaling)),void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){var s=e.arrows.toLowerCase();t.arrows.to.enabled=-1!=zp(s).call(s,"to"),t.arrows.middle.enabled=-1!=zp(s).call(s,"middle"),t.arrows.from.enabled=-1!=zp(s).call(s,"from")}else{if("object"!==Qc(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+hv(e.arrows));tm(t.arrows,e.arrows,"to",o.arrows),tm(t.arrows,e.arrows,"middle",o.arrows),tm(t.arrows,e.arrows,"from",o.arrows)}else!0===i&&null===e.arrows&&(t.arrows=Hp(o.arrows));if(void 0!==e.color&&null!==e.color){var a=By(e.color)?{color:e.color,highlight:e.color,hover:e.color,inherit:!1,opacity:1}:e.color,h=t.color;if(n)Ry(h,o.color,!1,i);else for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&delete h[d];if(By(h))h.color=h,h.highlight=h,h.hover=h,h.inherit=!1,void 0===a.opacity&&(h.opacity=1);else{var l=!1;void 0!==a.color&&(h.color=a.color,l=!0),void 0!==a.highlight&&(h.highlight=a.highlight,l=!0),void 0!==a.hover&&(h.hover=a.hover,l=!0),void 0!==a.inherit&&(h.inherit=a.inherit),void 0!==a.opacity&&(h.opacity=Math.min(1,Math.max(0,a.opacity))),!0===l?h.inherit=!1:void 0===h.inherit&&(h.inherit="from")}}else!0===i&&null===e.color&&(t.color=Jy(o.color));!0===i&&null===e.font&&(t.font=Jy(o.font)),Object.prototype.hasOwnProperty.call(e,"selfReferenceSize")&&(console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"),t.selfReference.size=e.selfReferenceSize)}}]),t}(),Tx=function(){function t(e,i,o){var n,r=this;Xl(this,t),this.body=e,this.images=i,this.groups=o,this.body.functions.createEdge=Fo(n=this.create).call(n,this),this.edgesListeners={add:function(t,e){r.add(e.items)},update:function(t,e){r.update(e.items)},remove:function(t,e){r.remove(e.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},endPointOffset:{from:0,to:0},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},selectionWidth:1.5,selfReference:{size:20,angle:Math.PI/4,renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},background:{enabled:!1,color:"rgba(111,111,111,1)",size:10,dashes:!1},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},Ry(this.options,this.defaultOptions),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t,e,i=this;this.body.emitter.on("_forceDisableDynamicCurves",(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"dynamic"===t&&(t="continuous");var o=!1;for(var n in i.body.edges)if(Object.prototype.hasOwnProperty.call(i.body.edges,n)){var r=i.body.edges[n],s=i.body.data.edges.get(n);if(null!=s){var a=s.smooth;void 0!==a&&!0===a.enabled&&"dynamic"===a.type&&(void 0===t?r.setOptions({smooth:!1}):r.setOptions({smooth:{type:t}}),o=!0)}}!0===e&&!0===o&&i.body.emitter.emit("_dataChanged")})),this.body.emitter.on("_dataUpdated",(function(){i.reconnectEdges()})),this.body.emitter.on("refreshEdges",Fo(t=this.refresh).call(t,this)),this.body.emitter.on("refresh",Fo(e=this.refresh).call(e,this)),this.body.emitter.on("destroy",(function(){Wy(i.edgesListeners,(function(t,e){i.body.data.edges&&i.body.data.edges.off(e,t)})),delete i.body.functions.createEdge,delete i.edgesListeners.add,delete i.edgesListeners.update,delete i.edgesListeners.remove,delete i.edgesListeners}))}},{key:"setOptions",value:function(t){if(void 0!==t){Sx.parseOptions(this.options,t,!0,this.defaultOptions,!0);var e=!1;if(void 0!==t.smooth)for(var i in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,i)&&(e=this.body.edges[i].updateEdgeType()||e);if(void 0!==t.font)for(var o in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,o)&&this.body.edges[o].updateLabelModule();void 0===t.hidden&&void 0===t.physics&&!0!==e||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.data.edges;if(e.isDataViewLike("id",t))this.body.data.edges=t;else if(hu(t))this.body.data.edges=new e.DataSet,this.body.data.edges.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.edges=new e.DataSet}if(n&&Wy(this.edgesListeners,(function(t,e){n.off(e,t)})),this.body.edges={},this.body.data.edges){Wy(this.edgesListeners,(function(t,e){i.body.data.edges.on(e,t)}));var r=this.body.data.edges.getIds();this.add(r,!0)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===o&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){var r=t[n],s=i[r];s&&s.disconnect();var a=o.get(r,{showInternalIds:!0});i[r]=this.create(a)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===e&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t){for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){var r=t[n],s=i.get(r),a=e[r];void 0!==a?(a.disconnect(),o=a.setOptions(s)||o,a.connect()):(this.body.edges[r]=this.create(s),o=!0)}!0===o?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0!==t.length){var i=this.body.edges;Wy(t,(function(t){var e=i[t];void 0!==e&&e.remove()})),e&&this.body.emitter.emit("_dataChanged")}}},{key:"refresh",value:function(){var t=this;Wy(this.body.edges,(function(e,i){var o=t.body.data.edges.get(i);void 0!==o&&e.setOptions(o)}))}},{key:"create",value:function(t){return new Sx(t,this.body,this.images,this.options,this.defaultOptions)}},{key:"reconnectEdges",value:function(){var t,e=this.body.nodes,i=this.body.edges;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t].edges=[]);for(t in i)if(Object.prototype.hasOwnProperty.call(i,t)){var o=i[t];o.from=null,o.to=null,o.connect()}}},{key:"getConnectedNodes",value:function(t){var e=[];if(void 0!==this.body.edges[t]){var i=this.body.edges[t];void 0!==i.fromId&&e.push(i.fromId),void 0!==i.toId&&e.push(i.toId)}return e}},{key:"_updateState",value:function(){this._addMissingEdges(),this._removeInvalidEdges()}},{key:"_removeInvalidEdges",value:function(){var t=this,e=[];Wy(this.body.edges,(function(i,o){var n=t.body.nodes[i.toId],r=t.body.nodes[i.fromId];void 0!==n&&!0===n.isCluster||void 0!==r&&!0===r.isCluster||void 0!==n&&void 0!==r||e.push(o)})),this.remove(e,!1)}},{key:"_addMissingEdges",value:function(){var t=this.body.data.edges;if(null!=t){var e=this.body.edges,i=[];Fu(t).call(t,(function(t,o){void 0===e[o]&&i.push(o)})),this.add(i,!0)}}}]),t}(),Mx=function(){function t(e,i,o){Xl(this,t),this.body=e,this.physicsBody=i,this.barnesHutTree,this.setOptions(o),this._rng=_y("BARNES HUT SOLVER")}return $l(t,[{key:"setOptions",value:function(t){this.options=t,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var t,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i);this.barnesHutTree=n;for(var r=0;r<o;r++)(t=e[i[r]]).options.mass>0&&this._getForceContributions(n.root,t)}}},{key:"_getForceContributions",value:function(t,e){this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),this._getForceContribution(t.children.SW,e),this._getForceContribution(t.children.SE,e)}},{key:"_getForceContribution",value:function(t,e){if(t.childrenCount>0){var i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o);n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?this._getForceContributions(t,e):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)}}},{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(e=t=.1),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var r=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),s=e*r,a=i*r;this.physicsBody.forces[o.id].x+=s,this.physicsBody.forces[o.id].y+=a}},{key:"_formBarnesHutTree",value:function(t,e){for(var i,o=e.length,n=t[e[0]].x,r=t[e[0]].y,s=t[e[0]].x,a=t[e[0]].y,h=1;h<o;h++){var d=t[e[h]],l=d.x,c=d.y;d.options.mass>0&&(l<n&&(n=l),l>s&&(s=l),c<r&&(r=c),c>a&&(a=c))}var u=Math.abs(s-n)-Math.abs(a-r);u>0?(r-=.5*u,a+=.5*u):(n+=.5*u,s-=.5*u);var f=Math.max(1e-5,Math.abs(s-n)),p=.5*f,v=.5*(n+s),g=.5*(r+a),y={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:v-p,maxX:v+p,minY:g-p,maxY:g+p},size:f,calcSize:1/f,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(y.root);for(var m=0;m<o;m++)(i=t[e[m]]).options.mass>0&&this._placeInTree(y.root,i);return y}},{key:"_updateBranchMass",value:function(t,e){var i=t.centerOfMass,o=t.mass+e.options.mass,n=1/o;i.x=i.x*t.mass+e.x*e.options.mass,i.x*=n,i.y=i.y*t.mass+e.y*e.options.mass,i.y*=n,t.mass=o;var r=Math.max(Math.max(e.height,e.radius),e.width);t.maxWidth=t.maxWidth<r?r:t.maxWidth}},{key:"_placeInTree",value:function(t,e,i){1==i&&void 0!==i||this._updateBranchMass(t,e);var o,n=t.children.NW.range;o=n.maxX>e.x?n.maxY>e.y?"NW":"SW":n.maxY>e.y?"NE":"SE",this._placeInRegion(t,e,o)}},{key:"_placeInRegion",value:function(t,e,i){var o=t.children[i];switch(o.childrenCount){case 0:o.children.data=e,o.childrenCount=1,this._updateBranchMass(o,e);break;case 1:o.children.data.x===e.x&&o.children.data.y===e.y?(e.x+=this._rng(),e.y+=this._rng()):(this._splitBranch(o),this._placeInTree(o,e));break;case 4:this._placeInTree(o,e)}}},{key:"_splitBranch",value:function(t){var e=null;1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,t.centerOfMass.y=0),t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),this._insertRegion(t,"NE"),this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),null!=e&&this._placeInTree(t,e)}},{key:"_insertRegion",value:function(t,e){var i,o,n,r,s=.5*t.size;switch(e){case"NW":i=t.range.minX,o=t.range.minX+s,n=t.range.minY,r=t.range.minY+s;break;case"NE":i=t.range.minX+s,o=t.range.maxX,n=t.range.minY,r=t.range.minY+s;break;case"SW":i=t.range.minX,o=t.range.minX+s,n=t.range.minY+s,r=t.range.maxY;break;case"SE":i=t.range.minX+s,o=t.range.maxX,n=t.range.minY+s,r=t.range.maxY}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:o,minY:n,maxY:r},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}},{key:"_debug",value:function(t,e){void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))}},{key:"_drawBranch",value:function(t,e,i){void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),this._drawBranch(t.children.NE,e),this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),e.strokeStyle=i,e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),e.stroke()}}]),t}(),Px=function(){function t(e,i,o){Xl(this,t),this._rng=_y("REPULSION SOLVER"),this.body=e,this.physicsBody=i,this.setOptions(o)}return $l(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r,s,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,c=this.options.nodeDistance,u=-2/3/c,f=0;f<d.length-1;f++){s=h[d[f]];for(var p=f+1;p<d.length;p++)t=(a=h[d[p]]).x-s.x,e=a.y-s.y,0===(i=Math.sqrt(t*t+e*e))&&(t=i=.1*this._rng()),i<2*c&&(r=i<.5*c?1:u*i+1.3333333333333333,o=t*(r/=i),n=e*r,l[s.id].x-=o,l[s.id].y-=n,l[a.id].x+=o,l[a.id].y+=n)}}}]),t}(),Dx=function(){function t(e,i,o){Xl(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return $l(t,[{key:"setOptions",value:function(t){this.options=t,this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))}},{key:"solve",value:function(){for(var t=this.body.nodes,e=this.physicsBody.physicsNodeIndices,i=this.physicsBody.forces,o=this.options.nodeDistance,n=0;n<e.length-1;n++)for(var r=t[e[n]],s=n+1;s<e.length;s++){var a=t[e[s]];if(r.level===a.level){var h=o+this.overlapAvoidanceFactor*((r.shape.radius||0)/2+(a.shape.radius||0)/2),d=a.x-r.x,l=a.y-r.y,c=Math.sqrt(d*d+l*l),u=void 0;u=c<h?-Math.pow(.05*c,2)+Math.pow(.05*h,2):0,0!==c&&(u/=c);var f=d*u,p=l*u;i[r.id].x-=f,i[r.id].y-=p,i[a.id].x+=f,i[a.id].y+=p}}}}]),t}(),Bx=function(){function t(e,i,o){Xl(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return $l(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r=this.physicsBody.physicsEdgeIndices,s=this.body.edges,a=0;a<r.length;a++)!0===(e=s[r[a]]).connected&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.to,o=e.edgeType.via,n=e.from,this._calculateSpringForce(i,o,.5*t),this._calculateSpringForce(o,n,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,this._calculateSpringForce(e.from,e.to,t)))}},{key:"_calculateSpringForce",value:function(t,e,i){var o=t.x-e.x,n=t.y-e.y,r=Math.max(Math.sqrt(o*o+n*n),.01),s=this.options.springConstant*(i-r)/r,a=o*s,h=n*s;void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,this.physicsBody.forces[t.id].y+=h),void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,this.physicsBody.forces[e.id].y-=h)}}]),t}(),Ix=function(){function t(e,i,o){Xl(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return $l(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r,s,a,h,d,l=this.body.edges,c=.5,u=this.physicsBody.physicsEdgeIndices,f=this.physicsBody.physicsNodeIndices,p=this.physicsBody.forces,v=0;v<f.length;v++){var g=f[v];p[g].springFx=0,p[g].springFy=0}for(var y=0;y<u.length;y++)!0===(e=l[u[y]]).connected&&(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.from.x-e.to.x,o=e.from.y-e.to.y,a=0===(a=Math.sqrt(i*i+o*o))?.01:a,n=i*(s=this.options.springConstant*(t-a)/a),r=o*s,e.to.level!=e.from.level?(void 0!==p[e.toId]&&(p[e.toId].springFx-=n,p[e.toId].springFy-=r),void 0!==p[e.fromId]&&(p[e.fromId].springFx+=n,p[e.fromId].springFy+=r)):(void 0!==p[e.toId]&&(p[e.toId].x-=c*n,p[e.toId].y-=c*r),void 0!==p[e.fromId]&&(p[e.fromId].x+=c*n,p[e.fromId].y+=c*r)));s=1;for(var m=0;m<f.length;m++){var b=f[m];h=Math.min(s,Math.max(-s,p[b].springFx)),d=Math.min(s,Math.max(-s,p[b].springFy)),p[b].x+=h,p[b].y+=d}for(var w=0,k=0,_=0;_<f.length;_++){var x=f[_];w+=p[x].x,k+=p[x].y}for(var E=w/f.length,O=k/f.length,C=0;C<f.length;C++){var S=f[C];p[S].x-=E,p[S].y-=O}}}]),t}(),zx=function(){function t(e,i,o){Xl(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return $l(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n=this.body.nodes,r=this.physicsBody.physicsNodeIndices,s=this.physicsBody.forces,a=0;a<r.length;a++){t=-(o=n[r[a]]).x,e=-o.y,i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,s,o)}}},{key:"_calculateForces",value:function(t,e,i,o,n){var r=0===t?0:this.options.centralGravity/t;o[n.id].x=e*r,o[n.id].y=i*r}}]),t}();function Fx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Nx=function(t){Rk(i,t);var e=Fx(i);function i(t,o,n){var r;return Xl(this,i),(r=e.call(this,t,o,n))._rng=_y("FORCE ATLAS 2 BASED REPULSION SOLVER"),r}return $l(i,[{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(e=t=.1*this._rng()),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var r=o.edges.length+1,s=this.options.gravitationalConstant*n.mass*o.options.mass*r/Math.pow(t,2),a=e*s,h=i*s;this.physicsBody.forces[o.id].x+=a,this.physicsBody.forces[o.id].y+=h}}]),i}(Mx);function Ax(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var Rx,jx=function(t){Rk(i,t);var e=Ax(i);function i(t,o,n){return Xl(this,i),e.call(this,t,o,n)}return $l(i,[{key:"_calculateForces",value:function(t,e,i,o,n){if(t>0){var r=n.edges.length+1,s=this.options.centralGravity*r*n.options.mass;o[n.id].x=e*s,o[n.id].y=i*s}}}]),i}(zx),Lx=function(){function t(e){Xl(this,t),this.body=e,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0,wind:{x:0,y:0}},fo(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("initPhysics",(function(){t.initPhysics()})),this.body.emitter.on("_layoutFailed",(function(){t.layoutFailed=!0})),this.body.emitter.on("resetPhysics",(function(){t.stopSimulation(),t.ready=!1})),this.body.emitter.on("disablePhysics",(function(){t.physicsEnabled=!1,t.stopSimulation()})),this.body.emitter.on("restorePhysics",(function(){t.setOptions(t.options),!0===t.ready&&t.startSimulation()})),this.body.emitter.on("startSimulation",(function(){!0===t.ready&&t.startSimulation()})),this.body.emitter.on("stopSimulation",(function(){t.stopSimulation()})),this.body.emitter.on("destroy",(function(){t.stopSimulation(!1),t.body.emitter.off()})),this.body.emitter.on("_dataChanged",(function(){t.updatePhysicsData()}))}},{key:"setOptions",value:function(t){if(void 0!==t)if(!1===t)this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation();else if(!0===t)this.options.enabled=!0,this.physicsEnabled=!0,this.startSimulation();else{this.physicsEnabled=!0,Ay(["stabilization"],this.options,t),tm(this.options,t,"stabilization"),void 0===t.enabled&&(this.options.enabled=!0),!1===this.options.enabled&&(this.physicsEnabled=!1,this.stopSimulation());var e=this.options.wind;e&&(("number"!=typeof e.x||Cw(e.x))&&(e.x=0),("number"!=typeof e.y||Cw(e.y))&&(e.y=0)),this.timestep=this.options.timestep}this.init()}},{key:"init",value:function(){var t;"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,this.nodesSolver=new Nx(this.body,this.physicsBody,t),this.edgesSolver=new Bx(this.body,this.physicsBody,t),this.gravitySolver=new jx(this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,this.nodesSolver=new Px(this.body,this.physicsBody,t),this.edgesSolver=new Bx(this.body,this.physicsBody,t),this.gravitySolver=new zx(this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,this.nodesSolver=new Dx(this.body,this.physicsBody,t),this.edgesSolver=new Ix(this.body,this.physicsBody,t),this.gravitySolver=new zx(this.body,this.physicsBody,t)):(t=this.options.barnesHut,this.nodesSolver=new Mx(this.body,this.physicsBody,t),this.edgesSolver=new Bx(this.body,this.physicsBody,t),this.gravitySolver=new zx(this.body,this.physicsBody,t)),this.modelOptions=t}},{key:"initPhysics",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){var t;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=Fo(t=this.simulationStep).call(t,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,!0===t&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,!0===t&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var t=xu();this.physicsTick(),(xu()-t<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),this.runDoubleSpeed=!0),!0===this.stabilized&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||!0===this.startedStabilization)&&bv((function(){t.body.emitter.emit("stabilized",{iterations:e}),t.startedStabilization=!1,t.stabilizationIterations=0}),0)}},{key:"physicsStep",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve(),this.moveNodes()}},{key:"adjustTimeStep",value:function(){!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))}},{key:"physicsTick",value:function(){if(this._startStabilizing(),!0!==this.stabilized){if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled)this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.physicsStep(),this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),this.physicsStep(),this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1;else this.timestep=this.options.timestep,this.physicsStep();!0===this.stabilized&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var t=this.body.nodes,e=this.body.edges;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&!0===t[i].options.physics&&this.physicsBody.physicsNodeIndices.push(t[i].id);for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&!0===e[o].options.physics&&this.physicsBody.physicsEdgeIndices.push(e[o].id);for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){var r=this.physicsBody.physicsNodeIndices[n];this.physicsBody.forces[r]={x:0,y:0},void 0===this.physicsBody.velocities[r]&&(this.physicsBody.velocities[r]={x:0,y:0})}for(var s in this.physicsBody.velocities)void 0===t[s]&&delete this.physicsBody.velocities[s]}},{key:"revert",value:function(){var t=mu(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities;this.referenceState={};for(var o=0;o<t.length;o++){var n=t[o];void 0!==e[n]?!0===e[n].options.physics&&(this.referenceState[n]={positions:{x:e[n].x,y:e[n].y}},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,e[n].x=this.previousStates[n].x,e[n].y=this.previousStates[n].y):delete this.previousStates[n]}}},{key:"_evaluateStepQuality",value:function(){var t,e,i=this.body.nodes,o=this.referenceState;for(var n in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,n)&&void 0!==i[n]&&(t=i[n].x-o[n].positions.x,e=i[n].y-o[n].positions.y,Math.sqrt(Math.pow(t,2)+Math.pow(e,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var t=this.physicsBody.physicsNodeIndices,e=0,i=0,o=0;o<t.length;o++){var n=t[o],r=this._performStep(n);e=Math.max(e,r),i+=r}this.adaptiveTimestepEnabled=i/t.length<5,this.stabilized=e<this.options.minVelocity}},{key:"calculateComponentVelocity",value:function(t,e,i){t+=(e-this.modelOptions.damping*t)/i*this.timestep;var o=this.options.maxVelocity||1e9;return Math.abs(t)>o&&(t=t>0?o:-o),t}},{key:"_performStep",value:function(t){var e=this.body.nodes[t],i=this.physicsBody.forces[t];this.options.wind&&(i.x+=this.options.wind.x,i.y+=this.options.wind.y);var o=this.physicsBody.velocities[t];return this.previousStates[t]={x:e.x,y:e.y,vx:o.x,vy:o.y},!1===e.options.fixed.x?(o.x=this.calculateComponentVelocity(o.x,i.x,e.options.mass),e.x+=o.x*this.timestep):(i.x=0,o.x=0),!1===e.options.fixed.y?(o.y=this.calculateComponentVelocity(o.y,i.y,e.options.mass),e.y+=o.y*this.timestep):(i.y=0,o.y=0),Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2))}},{key:"_freezeNodes",value:function(){var t=this.body.nodes;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].x&&t[e].y){var i=t[e].options.fixed;this.freezeCache[e]={x:i.x,y:i.y},i.x=!0,i.y=!0}}},{key:"_restoreFrozenNodes",value:function(){var t=this.body.nodes;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,t[e].options.fixed.y=this.freezeCache[e].y);this.freezeCache={}}},{key:"stabilize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;"number"!=typeof e&&(e=this.options.stabilization.iterations,console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ",e)),0!==this.physicsBody.physicsNodeIndices.length?(this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=e,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),this.stabilizationIterations=0,bv((function(){return t._stabilizationBatch()}),0)):this.ready=!0}},{key:"_startStabilizing",value:function(){return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0,!0)}},{key:"_stabilizationBatch",value:function(){var t=this,e=function(){return!1===t.stabilized&&t.stabilizationIterations<t.targetIterations},i=function(){t.body.emitter.emit("stabilizationProgress",{iterations:t.stabilizationIterations,total:t.targetIterations})};this._startStabilizing()&&i();for(var o,n=0;e()&&n<this.options.stabilization.updateInterval;)this.physicsTick(),n++;(i(),e())?bv(Fo(o=this._stabilizationBatch).call(o,this),0):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),!0===this.stabilized?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(t){for(var e=0;e<this.physicsBody.physicsNodeIndices.length;e++){var i=this.physicsBody.physicsNodeIndices[e],o=this.body.nodes[i],n=this.physicsBody.forces[i],r=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.x,2)),s=Math.min(Math.max(5,r),15),a=3*s,h=Ky((180-180*Math.min(1,Math.max(0,.03*r)))/360,1,1),d={x:o.x+20*n.x,y:o.y+20*n.y};t.lineWidth=s,t.strokeStyle=h,t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(d.x,d.y),t.stroke();var l=Math.atan2(n.y,n.x);t.fillStyle=h,dx.draw(t,{type:"arrow",point:d,angle:l,length:a}),Pv(t).call(t)}}}]),t}(),Hx=new Uint8Array(16);function Wx(){if(!Rx&&!(Rx="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Rx(Hx)}var Vx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function qx(t){return"string"==typeof t&&Vx.test(t)}for(var Ux=[],Yx=0;Yx<256;++Yx)Ux.push((Yx+256).toString(16).substr(1));function Xx(t,e,i){var o=(t=t||{}).random||(t.rng||Wx)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=o[n];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(Ux[t[e+0]]+Ux[t[e+1]]+Ux[t[e+2]]+Ux[t[e+3]]+"-"+Ux[t[e+4]]+Ux[t[e+5]]+"-"+Ux[t[e+6]]+Ux[t[e+7]]+"-"+Ux[t[e+8]]+Ux[t[e+9]]+"-"+Ux[t[e+10]]+Ux[t[e+11]]+Ux[t[e+12]]+Ux[t[e+13]]+Ux[t[e+14]]+Ux[t[e+15]]).toLowerCase();if(!qx(i))throw TypeError("Stringified UUID is invalid");return i}(o)}var Gx=function(){function t(){Xl(this,t)}return $l(t,null,[{key:"getRange",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).shape.boundingBox.left&&(r=e.shape.boundingBox.left),s<e.shape.boundingBox.right&&(s=e.shape.boundingBox.right),o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom);return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{key:"getRangeCore",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).x&&(r=e.x),s<e.x&&(s=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y);return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{key:"findCenter",value:function(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}},{key:"cloneOptions",value:function(t,e){var i={};return void 0===e||"node"===e?(Ry(i,t.options,!0),i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):Ry(i,t.options,!0),i}}]),t}();function Kx(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var $x=function(t){Rk(i,t);var e=Kx(i);function i(t,o,n,r,s,a){var h;return Xl(this,i),(h=e.call(this,t,o,n,r,s,a)).isCluster=!0,h.containedNodes={},h.containedEdges={},h}return $l(i,[{key:"_openChildCluster",value:function(t){var e=this,i=this.body.nodes[t];if(void 0===this.containedNodes[t])throw new Error("node with id: "+t+" not in current cluster");if(!i.isCluster)throw new Error("node with id: "+t+" is not a cluster");delete this.containedNodes[t],Wy(i.edges,(function(t){delete e.containedEdges[t.id]})),Wy(i.containedNodes,(function(t,i){e.containedNodes[i]=t})),i.containedNodes={},Wy(i.containedEdges,(function(t,i){e.containedEdges[i]=t})),i.containedEdges={},Wy(i.edges,(function(t){Wy(e.edges,(function(i){var o,n,r=zp(o=i.clusteringEdgeReplacingIds).call(o,t.id);-1!==r&&(Wy(t.clusteringEdgeReplacingIds,(function(t){i.clusteringEdgeReplacingIds.push(t),e.body.edges[t].edgeReplacedById=i.id})),uf(n=i.clusteringEdgeReplacingIds).call(n,r,1))}))})),i.edges=[]}}]),i}(M_),Zx=function(){function t(e){var i=this;Xl(this,t),this.body=e,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},fo(this.options,this.defaultOptions),this.body.emitter.on("_resetData",(function(){i.clusteredNodes={},i.clusteredEdges={}}))}return $l(t,[{key:"clusterByHubsize",value:function(t,e){void 0===t?t=this._getHubSize():"object"===Qc(t)&&(e=this._checkOptions(t),t=this._getHubSize());for(var i=[],o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodes[this.body.nodeIndices[o]];n.edges.length>=t&&i.push(n.id)}for(var r=0;r<i.length;r++)this.clusterByConnection(i[r],e,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===e.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");e=this._checkOptions(e);var o={},n={};Wy(this.body.nodes,(function(i,r){i.options&&!0===e.joinCondition(i.options)&&(o[r]=i,Wy(i.edges,(function(e){void 0===t.clusteredEdges[e.id]&&(n[e.id]=e)})))})),this._cluster(o,n,e,i)}},{key:"clusterByEdgeCount",value:function(t,e){var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e=this._checkOptions(e);for(var n,r,s,a=[],h={},d=function(o){var d={},l={},c=i.body.nodeIndices[o],u=i.body.nodes[c];if(void 0===h[c]){s=0,r=[];for(var f=0;f<u.edges.length;f++)n=u.edges[f],void 0===i.clusteredEdges[n.id]&&(n.toId!==n.fromId&&s++,r.push(n));if(s===t){for(var p=function(t){if(void 0===e.joinCondition||null===e.joinCondition)return!0;var i=Gx.cloneOptions(t);return e.joinCondition(i)},v=!0,g=0;g<r.length;g++){n=r[g];var y=i._getConnectedId(n,c);if(!p(u)){v=!1;break}l[n.id]=n,d[c]=u,d[y]=i.body.nodes[y],h[c]=!0}if(mu(d).length>0&&mu(l).length>0&&!0===v){var m=function(){for(var t=0;t<a.length;++t)for(var e in d)if(void 0!==a[t].nodes[e])return a[t]}();if(void 0!==m){for(var b in d)void 0===m.nodes[b]&&(m.nodes[b]=d[b]);for(var w in l)void 0===m.edges[w]&&(m.edges[w]=l[w])}else a.push({nodes:d,edges:l})}}}},l=0;l<this.body.nodeIndices.length;l++)d(l);for(var c=0;c<a.length;c++)this._cluster(a[c].nodes,a[c].edges,e,!1);!0===o&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,t,e)}},{key:"clusterBridges",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,t,e)}},{key:"clusterByConnection",value:function(t,e){var i,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!");if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!");var n=this.body.nodes[t];void 0===(e=this._checkOptions(e,n)).clusterNodeProperties.x&&(e.clusterNodeProperties.x=n.x),void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=n.y),void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},e.clusterNodeProperties.fixed.x=n.options.fixed.x,e.clusterNodeProperties.fixed.y=n.options.fixed.y);var r={},s={},a=n.id,h=Gx.cloneOptions(n);r[a]=n;for(var d=0;d<n.edges.length;d++){var l=n.edges[d];if(void 0===this.clusteredEdges[l.id]){var c=this._getConnectedId(l,a);if(void 0===this.clusteredNodes[c])if(c!==a)if(void 0===e.joinCondition)s[l.id]=l,r[c]=this.body.nodes[c];else{var u=Gx.cloneOptions(this.body.nodes[c]);!0===e.joinCondition(h,u)&&(s[l.id]=l,r[c]=this.body.nodes[c])}else s[l.id]=l}}var f=vu(i=mu(r)).call(i,(function(t){return r[t].id}));for(var p in r)if(Object.prototype.hasOwnProperty.call(r,p))for(var v=r[p],g=0;g<v.edges.length;g++){var y=v.edges[g];zp(f).call(f,this._getConnectedId(y,v.id))>-1&&(s[y.id]=y)}this._cluster(r,s,e,o)}},{key:"_createClusterEdges",value:function(t,e,i,o){for(var n,r,s,a,h,d,l=mu(t),c=[],u=0;u<l.length;u++){s=t[r=l[u]];for(var f=0;f<s.edges.length;f++)n=s.edges[f],void 0===this.clusteredEdges[n.id]&&(n.toId==n.fromId?e[n.id]=n:n.toId==r?(a=i.id,d=h=n.fromId):(a=n.toId,h=i.id,d=a),void 0===t[d]&&c.push({edge:n,fromId:h,toId:a}))}for(var p=[],v=function(t){for(var e=0;e<p.length;e++){var i=p[e],o=t.fromId===i.fromId&&t.toId===i.toId,n=t.fromId===i.toId&&t.toId===i.fromId;if(o||n)return i}return null},g=0;g<c.length;g++){var y=c[g],m=y.edge,b=v(y);null===b?(b=this._createClusteredEdge(y.fromId,y.toId,m,o),p.push(b)):b.clusteringEdgeReplacingIds.push(m.id),this.body.edges[m.id].edgeReplacedById=b.id,this._backupEdgeOptions(m),m.setOptions({physics:!1})}}},{key:"_checkOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),t}},{key:"_cluster",value:function(t,e,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&void 0!==this.clusteredNodes[r]&&n.push(r);for(var s=0;s<n.length;++s)delete t[n[s]];if(0!=mu(t).length&&(1!=mu(t).length||1==i.clusterNodeProperties.allowSingleNodeCluster)){var a=Ry({},i.clusterNodeProperties);if(void 0!==i.processProperties){var h=[];for(var d in t)if(Object.prototype.hasOwnProperty.call(t,d)){var l=Gx.cloneOptions(t[d]);h.push(l)}var c=[];for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)&&"clusterEdge:"!==u.substr(0,12)){var f=Gx.cloneOptions(e[u],"edge");c.push(f)}if(!(a=i.processProperties(a,h,c)))throw new Error("The processProperties function does not return properties!")}void 0===a.id&&(a.id="cluster:"+Xx());var p=a.id;void 0===a.label&&(a.label="cluster");var v=void 0;void 0===a.x&&(v=this._getClusterPosition(t),a.x=v.x),void 0===a.y&&(void 0===v&&(v=this._getClusterPosition(t)),a.y=v.y),a.id=p;var g=this.body.functions.createNode(a,$x);g.containedNodes=t,g.containedEdges=e,g.clusterEdgeProperties=i.clusterEdgeProperties,this.body.nodes[a.id]=g,this._clusterEdges(t,e,a,i.clusterEdgeProperties),a.id=void 0,!0===o&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(t){void 0===this.clusteredEdges[t.id]&&(this.clusteredEdges[t.id]={physics:t.options.physics})}},{key:"_restoreEdge",value:function(t){var e=this.clusteredEdges[t.id];void 0!==e&&(t.setOptions({physics:e.physics}),delete this.clusteredEdges[t.id])}},{key:"isCluster",value:function(t){return void 0!==this.body.nodes[t]?!0===this.body.nodes[t].isCluster:(console.error("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(t){for(var e,i=mu(t),o=t[i[0]].x,n=t[i[0]].x,r=t[i[0]].y,s=t[i[0]].y,a=1;a<i.length;a++)o=(e=t[i[a]]).x<o?e.x:o,n=e.x>n?e.x:n,r=e.y<r?e.y:r,s=e.y>s?e.y:s;return{x:.5*(o+n),y:.5*(r+s)}}},{key:"openCluster",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.");var o=this.body.nodes[t];if(void 0===o)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(!0!==o.isCluster||void 0===o.containedNodes||void 0===o.containedEdges)throw new Error("The node:"+t+" is not a valid cluster.");var n=this.findNode(t),r=zp(n).call(n,t)-1;if(r>=0){var s=n[r],a=this.body.nodes[s];return a._openChildCluster(t),delete this.body.nodes[t],void(!0===i&&this.body.emitter.emit("_dataChanged"))}var h=o.containedNodes,d=o.containedEdges;if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){var l={},c={x:o.x,y:o.y};for(var u in h)if(Object.prototype.hasOwnProperty.call(h,u)){var f=this.body.nodes[u];l[u]={x:f.x,y:f.y}}var p=e.releaseFunction(c,l);for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){var g=this.body.nodes[v];void 0!==p[v]&&(g.x=void 0===p[v].x?o.x:p[v].x,g.y=void 0===p[v].y?o.y:p[v].y)}}else Wy(h,(function(t){!1===t.options.fixed.x&&(t.x=o.x),!1===t.options.fixed.y&&(t.y=o.y)}));for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var m=this.body.nodes[y];m.vx=o.vx,m.vy=o.vy,m.setOptions({physics:!0}),delete this.clusteredNodes[y]}for(var b=[],w=0;w<o.edges.length;w++)b.push(o.edges[w]);for(var k=0;k<b.length;k++){for(var _=b[k],x=this._getConnectedId(_,t),E=this.clusteredNodes[x],O=0;O<_.clusteringEdgeReplacingIds.length;O++){var C=_.clusteringEdgeReplacingIds[O],S=this.body.edges[C];if(void 0!==S)if(void 0!==E){var T=this.body.nodes[E.clusterId];T.containedEdges[S.id]=S,delete d[S.id];var M=S.fromId,P=S.toId;S.toId==x?P=E.clusterId:M=E.clusterId,this._createClusteredEdge(M,P,S,T.clusterEdgeProperties,{hidden:!1,physics:!0})}else this._restoreEdge(S)}_.remove()}for(var D in d)Object.prototype.hasOwnProperty.call(d,D)&&this._restoreEdge(d[D]);delete this.body.nodes[t],!0===i&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(t){var e=[];if(!0===this.isCluster(t)){var i=this.body.nodes[t].containedNodes;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.push(this.body.nodes[o].id)}return e}},{key:"findNode",value:function(t){for(var e,i=[],o=0;void 0!==this.clusteredNodes[t]&&o<100;){if(void 0===(e=this.body.nodes[t]))return[];i.push(e.id),t=this.clusteredNodes[t].clusterId,o++}return void 0===(e=this.body.nodes[t])?[]:(i.push(e.id),Uu(i).call(i),i)}},{key:"updateClusteredNode",value:function(t,e){if(void 0===t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===e)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[t].setOptions(e),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(t,e){if(void 0===t)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===e)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var i=this.getClusteredEdges(t),o=0;o<i.length;o++){this.body.edges[i[o]].setOptions(e)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(t){for(var e=[],i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)e.push(this.body.edges[t].id),t=this.body.edges[t].edgeReplacedById,i++;return Uu(e).call(e),e}},{key:"getBaseEdge",value:function(t){return this.getBaseEdges(t)[0]}},{key:"getBaseEdges",value:function(t){for(var e=[t],i=[],o=[],n=0;e.length>0&&n<100;){var r=e.pop();if(void 0!==r){var s=this.body.edges[r];if(void 0!==s){n++;var a=s.clusteringEdgeReplacingIds;if(void 0===a)o.push(r);else for(var h=0;h<a.length;++h){var d=a[h];-1===zp(e).call(e,a)&&-1===zp(i).call(i,a)&&e.push(d)}i.push(r)}}}return o}},{key:"_getConnectedId",value:function(t,e){return t.toId!=e?t.toId:(t.fromId,t.fromId)}},{key:"_getHubSize",value:function(){for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){var r=this.body.nodes[this.body.nodeIndices[n]];r.edges.length>o&&(o=r.edges.length),t+=r.edges.length,e+=Math.pow(r.edges.length,2),i+=1}t/=i;var s=(e/=i)-Math.pow(t,2),a=Math.sqrt(s),h=Math.floor(t+2*a);return h>o&&(h=o),h}},{key:"_createClusteredEdge",value:function(t,e,i,o,n){var r=Gx.cloneOptions(i,"edge");Ry(r,o),r.from=t,r.to=e,r.id="clusterEdge:"+Xx(),void 0!==n&&Ry(r,n);var s=this.body.functions.createEdge(r);return s.clusteringEdgeReplacingIds=[i.id],s.connect(),this.body.edges[s.id]=s,s}},{key:"_clusterEdges",value:function(t,e,i,o){if(e instanceof Sx){var n=e,r={};r[n.id]=n,e=r}if(t instanceof M_){var s=t,a={};a[s.id]=s,t=a}if(null==i)throw new Error("_clusterEdges: parameter clusterNode required");for(var h in void 0===o&&(o=i.clusterEdgeProperties),this._createClusterEdges(t,e,i,o),e)if(Object.prototype.hasOwnProperty.call(e,h)&&void 0!==this.body.edges[h]){var d=this.body.edges[h];this._backupEdgeOptions(d),d.setOptions({physics:!1})}for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(this.clusteredNodes[l]={clusterId:i.id,node:this.body.nodes[l]},this.body.nodes[l].setOptions({physics:!1}))}},{key:"_getClusterNodeForNode",value:function(t){if(void 0!==t){var e=this.clusteredNodes[t];if(void 0!==e){var i=e.clusterId;if(void 0!==i)return this.body.nodes[i]}}}},{key:"_filter",value:function(t,e){var i=[];return Wy(t,(function(t){e(t)&&i.push(t)})),i}},{key:"_updateState",value:function(){var t,e=this,i=[],o={},n=function(t){Wy(e.body.nodes,(function(e){!0===e.isCluster&&t(e)}))};for(t in this.clusteredNodes){if(Object.prototype.hasOwnProperty.call(this.clusteredNodes,t))void 0===this.body.nodes[t]&&i.push(t)}n((function(t){for(var e=0;e<i.length;e++)delete t.containedNodes[i[e]]}));for(var r=0;r<i.length;r++)delete this.clusteredNodes[i[r]];Wy(this.clusteredEdges,(function(t){var i=e.body.edges[t];void 0!==i&&i.endPointsValid()||(o[t]=t)})),n((function(t){Wy(t.containedEdges,(function(t,e){t.endPointsValid()||o[e]||(o[e]=e)}))})),Wy(this.body.edges,(function(t,i){var n=!0,r=t.clusteringEdgeReplacingIds;if(void 0!==r){var s=0;Wy(r,(function(t){var i=e.body.edges[t];void 0!==i&&i.endPointsValid()&&(s+=1)})),n=s>0}t.endPointsValid()&&n||(o[i]=i)})),n((function(t){Wy(o,(function(i){delete t.containedEdges[i],Wy(t.edges,(function(n,r){n.id!==i?n.clusteringEdgeReplacingIds=e._filter(n.clusteringEdgeReplacingIds,(function(t){return!o[t]})):t.edges[r]=null})),t.edges=e._filter(t.edges,(function(t){return null!==t}))}))})),Wy(o,(function(t){delete e.clusteredEdges[t]})),Wy(o,(function(t){delete e.body.edges[t]})),Wy(mu(this.body.edges),(function(t){var i=e.body.edges[t],o=e._isClusteredNode(i.fromId)||e._isClusteredNode(i.toId);if(o!==e._isClusteredEdge(i.id))if(o){var n=e._getClusterNodeForNode(i.fromId);void 0!==n&&e._clusterEdges(e.body.nodes[i.fromId],i,n);var r=e._getClusterNodeForNode(i.toId);void 0!==r&&e._clusterEdges(e.body.nodes[i.toId],i,r)}else delete e._clusterEdges[t],e._restoreEdge(i)}));for(var s=!1,a=!0,h=function(){var t=[];n((function(e){var i=mu(e.containedNodes).length,o=!0===e.options.allowSingleNodeCluster;(o&&i<1||!o&&i<2)&&t.push(e.id)}));for(var i=0;i<t.length;++i)e.openCluster(t[i],{},!1);a=t.length>0,s=s||a};a;)h();s&&this._updateState()}},{key:"_isClusteredNode",value:function(t){return void 0!==this.clusteredNodes[t]}},{key:"_isClusteredEdge",value:function(t){return void 0!==this.clusteredEdges[t]}}]),t}();function Qx(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Jx(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Jx(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Jx(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var tE=function(){function t(e,i){var o;Xl(this,t),void 0!==window&&(o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),window.requestAnimationFrame=void 0===o?function(t){t()}:o,this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,this.dragging=!1,this.zooming=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1},fo(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t,e=this;this.body.emitter.on("dragStart",(function(){e.dragging=!0})),this.body.emitter.on("dragEnd",(function(){e.dragging=!1})),this.body.emitter.on("zoom",(function(){e.zooming=!0,window.clearTimeout(e.zoomTimeoutId),e.zoomTimeoutId=bv((function(){var t;e.zooming=!1,Fo(t=e._requestRedraw).call(t,e)()}),250)})),this.body.emitter.on("_resizeNodes",(function(){e._resizeNodes()})),this.body.emitter.on("_redraw",(function(){!1===e.renderingActive&&e._redraw()})),this.body.emitter.on("_blockRedraw",(function(){e.allowRedraw=!1})),this.body.emitter.on("_allowRedraw",(function(){e.allowRedraw=!0,e.redrawRequested=!1})),this.body.emitter.on("_requestRedraw",Fo(t=this._requestRedraw).call(t,this)),this.body.emitter.on("_startRendering",(function(){e.renderRequests+=1,e.renderingActive=!0,e._startRendering()})),this.body.emitter.on("_stopRendering",(function(){e.renderRequests-=1,e.renderingActive=e.renderRequests>0,e.renderTimer=void 0})),this.body.emitter.on("destroy",(function(){e.renderRequests=0,e.allowRedraw=!1,e.renderingActive=!1,!0===e.requiresTimeout?clearTimeout(e.renderTimer):window.cancelAnimationFrame(e.renderTimer),e.body.emitter.off()}))}},{key:"setOptions",value:function(t){if(void 0!==t){Ny(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,t)}}},{key:"_requestNextFrame",value:function(t,e){if("undefined"!=typeof window){var i,o=window;return!0===this.requiresTimeout?i=bv(t,e):o.requestAnimationFrame&&(i=o.requestAnimationFrame(t)),i}}},{key:"_startRendering",value:function(){var t;!0===this.renderingActive&&(void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(Fo(t=this._renderStep).call(t,this),this.simulationInterval)))}},{key:"_renderStep",value:function(){!0===this.renderingActive&&(this.renderTimer=void 0,!0===this.requiresTimeout&&this._startRendering(),this._redraw(),!1===this.requiresTimeout&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var t=this;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,this._requestNextFrame((function(){t._redraw(!1)}),0))}},{key:"_redraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===this.allowRedraw){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1;var e={drawExternalLabels:null};0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.canvas.setTransform();var i=this.canvas.getContext(),o=this.canvas.frame.canvas.clientWidth,n=this.canvas.frame.canvas.clientHeight;if(i.clearRect(0,0,o,n),0===this.canvas.frame.clientWidth)return;if(i.save(),i.translate(this.body.view.translation.x,this.body.view.translation.y),i.scale(this.body.view.scale,this.body.view.scale),i.beginPath(),this.body.emitter.emit("beforeDrawing",i),i.closePath(),!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(i),!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag){var r=this._drawNodes(i,t),s=r.drawExternalLabels;e.drawExternalLabels=s}!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawArrows(i),null!=e.drawExternalLabels&&e.drawExternalLabels(),!1===t&&this._drawSelectionBox(i),i.beginPath(),this.body.emitter.emit("afterDrawing",i),i.closePath(),i.restore(),!0===t&&i.clearRect(0,0,o,n)}}},{key:"_resizeNodes",value:function(){this.canvas.setTransform();var t=this.canvas.getContext();t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale);var e,i=this.body.nodes;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&((e=i[o]).resize(t),e.updateBoundingBox(t,e.selected));t.restore()}},{key:"_drawNodes",value:function(t){for(var e,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.nodes,r=this.body.nodeIndices,s=[],a=[],h=20,d=this.canvas.DOMtoCanvas({x:-h,y:-h}),l=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+h,y:this.canvas.frame.canvas.clientHeight+h}),c={top:d.y,left:d.x,bottom:l.y,right:l.x},u=[],f=0;f<r.length;f++)if((e=n[r[f]]).hover)a.push(r[f]);else if(e.isSelected())s.push(r[f]);else if(!0===o){var p=e.draw(t);null!=p.drawExternalLabel&&u.push(p.drawExternalLabel)}else if(!0===e.isBoundingBoxOverlappingWith(c)){var v=e.draw(t);null!=v.drawExternalLabel&&u.push(v.drawExternalLabel)}else e.updateBoundingBox(t,e.selected);var g=s.length,y=a.length;for(i=0;i<g;i++){var m=(e=n[s[i]]).draw(t);null!=m.drawExternalLabel&&u.push(m.drawExternalLabel)}for(i=0;i<y;i++){var b=(e=n[a[i]]).draw(t);null!=b.drawExternalLabel&&u.push(b.drawExternalLabel)}return{drawExternalLabels:function(){var t,e=Qx(u);try{for(e.s();!(t=e.n()).done;){(0,t.value)()}}catch(t){e.e(t)}finally{e.f()}}}}},{key:"_drawEdges",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){var n=e[i[o]];!0===n.connected&&n.draw(t)}}},{key:"_drawArrows",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){var n=e[i[o]];!0===n.connected&&n.drawArrows(t)}}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var t=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,(-1!=zp(t).call(t,"msie 9.0")||-1!=zp(t).call(t,"safari")&&zp(t).call(t,"chrome")<=-1)&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}},{key:"_drawSelectionBox",value:function(t){if(this.body.selectionBox.show){t.beginPath();var e=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x,i=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y;t.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),t.fillStyle="rgba(151, 194, 252, 0.2)",t.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),t.strokeStyle="rgba(151, 194, 252, 1)",t.stroke()}else t.closePath()}}]),t}(),eE=G.setInterval;function iE(t,e){e.inputHandler=function(t){t.isFirst&&e(t)},t.on("hammer.input",e.inputHandler)}function oE(t,e){return e.inputHandler=function(t){t.isFinal&&e(t)},t.on("hammer.input",e.inputHandler)}var nE=function(){function t(e){Xl(this,t),this.body=e,this.pixelRatio=1,this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this._cleanupCallbacks=[],this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},fo(this.options,this.defaultOptions),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t,e=this;this.body.emitter.once("resize",(function(t){0!==t.width&&(e.body.view.translation.x=.5*t.width),0!==t.height&&(e.body.view.translation.y=.5*t.height)})),this.body.emitter.on("setSize",Fo(t=this.setSize).call(t,this)),this.body.emitter.on("destroy",(function(){e.hammerFrame.destroy(),e.hammer.destroy(),e._cleanUp()}))}},{key:"setOptions",value:function(t){var e,i,o,n,r,s=this;if(void 0!==t){Ny(["width","height","autoResize"],this.options,t)}if(this._cleanUp(),!0===this.options.autoResize){var a;if(window.ResizeObserver){var h=new ResizeObserver((function(){!0===s.setSize()&&s.body.emitter.emit("_requestRedraw")})),d=this.frame;h.observe(d),this._cleanupCallbacks.push((function(){h.unobserve(d)}))}else{var l=eE((function(){!0===s.setSize()&&s.body.emitter.emit("_requestRedraw")}),1e3);this._cleanupCallbacks.push((function(){clearInterval(l)}))}var c=Fo(a=this._onResize).call(a,this);e=window,i="resize",o=c,e.addEventListener?(void 0===n&&(n=!1),"mousewheel"===i&&zf(r=navigator.userAgent).call(r,"Firefox")&&(i="DOMMouseScroll"),e.addEventListener(i,o,n)):e.attachEvent("on"+i,o),this._cleanupCallbacks.push((function(){!function(t,e,i,o){var n;t.removeEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&zf(n=navigator.userAgent).call(n,"Firefox")&&(e="DOMMouseScroll"),t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i)}(window,"resize",c)}))}}},{key:"_cleanUp",value:function(){var t,e,i;Fu(t=Uu(e=uf(i=this._cleanupCallbacks).call(i,0)).call(e)).call(t,(function(t){try{t()}catch(t){console.error(t)}}))}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/t,this.cameraState.previousHeight=this.frame.canvas.height/t,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){var t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,i=this.cameraState.scale;1!=t&&1!=e?i=.5*this.cameraState.scale*(t+e):1!=t?i=this.cameraState.scale*t:1!=e&&(i=this.cameraState.scale*e),this.body.view.scale=i;var o=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),n={x:o.x-this.cameraState.position.x,y:o.y-this.cameraState.position.y};this.body.view.translation.x+=n.x*this.body.view.scale,this.body.view.translation.y+=n.y*this.body.view.scale}}},{key:"_prepareValue",value:function(t){if("number"==typeof t)return t+"px";if("string"==typeof t){if(-1!==zp(t).call(t,"%")||-1!==zp(t).call(t,"px"))return t;if(-1===zp(t).call(t,"%"))return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=0,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext)this._setPixelRatio(),this.setTransform();else{var t=document.createElement("DIV");t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerText="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var t=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new pm(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:pm.DIRECTION_ALL}),iE(this.hammer,(function(e){t.body.eventListeners.onTouch(e)})),this.hammer.on("tap",(function(e){t.body.eventListeners.onTap(e)})),this.hammer.on("doubletap",(function(e){t.body.eventListeners.onDoubleTap(e)})),this.hammer.on("press",(function(e){t.body.eventListeners.onHold(e)})),this.hammer.on("panstart",(function(e){t.body.eventListeners.onDragStart(e)})),this.hammer.on("panmove",(function(e){t.body.eventListeners.onDrag(e)})),this.hammer.on("panend",(function(e){t.body.eventListeners.onDragEnd(e)})),this.hammer.on("pinch",(function(e){t.body.eventListeners.onPinch(e)})),this.frame.canvas.addEventListener("wheel",(function(e){t.body.eventListeners.onMouseWheel(e)})),this.frame.canvas.addEventListener("mousemove",(function(e){t.body.eventListeners.onMouseMove(e)})),this.frame.canvas.addEventListener("contextmenu",(function(e){t.body.eventListeners.onContext(e)})),this.hammerFrame=new pm(this.frame),oE(this.hammerFrame,(function(e){t.body.eventListeners.onRelease(e)}))}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;t=this._prepareValue(t),e=this._prepareValue(e);var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,r=this.pixelRatio;if(this._setPixelRatio(),t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e)this._getCameraState(r),this.frame.style.width=t,this.frame.style.height=e,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=t,this.options.height=e,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},i=!0;else{var s=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),a=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.frame.canvas.width===s&&this.frame.canvas.height===a||this._getCameraState(r),this.frame.canvas.width!==s&&(this.frame.canvas.width=s,i=!0),this.frame.canvas.height!==a&&(this.frame.canvas.height=a,i=!0)}return!0===i&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(o/this.pixelRatio),oldHeight:Math.round(n/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,i}},{key:"getContext",value:function(){return this.frame.canvas.getContext("2d")}},{key:"_determinePixelRatio",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");var e=1;return"undefined"!=typeof window&&(e=window.devicePixelRatio||1),e/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}},{key:"_setPixelRatio",value:function(){this.pixelRatio=this._determinePixelRatio()}},{key:"setTransform",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}},{key:"_XconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}},{key:"DOMtoCanvas",value:function(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}]),t}();function rE(t,e){var i=fo({nodes:e,minZoomLevel:Number.MIN_VALUE,maxZoomLevel:1},null!=t?t:{});if(!hu(i.nodes))throw new TypeError("Nodes has to be an array of ids.");if(0===i.nodes.length&&(i.nodes=e),!("number"==typeof i.minZoomLevel&&i.minZoomLevel>0))throw new TypeError("Min zoom level has to be a number higher than zero.");if(!("number"==typeof i.maxZoomLevel&&i.minZoomLevel<=i.maxZoomLevel))throw new TypeError("Max zoom level has to be a number higher than min zoom level.");return i}var sE=function(){function t(e,i){var o,n,r=this;Xl(this,t),this.body=e,this.canvas=i,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",Fo(o=this.fit).call(o,this)),this.body.emitter.on("animationFinished",(function(){r.body.emitter.emit("_stopRendering")})),this.body.emitter.on("unlockNode",Fo(n=this.releaseNode).call(n,this))}return $l(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t}},{key:"fit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=rE(t,this.body.nodeIndices);var i,o,n=this.canvas.frame.canvas.clientWidth,r=this.canvas.frame.canvas.clientHeight;if(0===n||0===r)o=1,i=Gx.getRange(this.body.nodes,t.nodes);else if(!0===e){var s=0;for(var a in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,a)){var h=this.body.nodes[a];!0===h.predefinedPosition&&(s+=1)}if(s>.5*this.body.nodeIndices.length)return void this.fit(t,!1);i=Gx.getRange(this.body.nodes,t.nodes);var d=this.body.nodeIndices.length;o=12.662/(d+7.4147)+.0964822;var l=Math.min(n/600,r/600);o*=l}else{this.body.emitter.emit("_resizeNodes"),i=Gx.getRange(this.body.nodes,t.nodes);var c=1.1*Math.abs(i.maxX-i.minX),u=1.1*Math.abs(i.maxY-i.minY),f=n/c,p=r/u;o=f<=p?f:p}o>t.maxZoomLevel?o=t.maxZoomLevel:o<t.minZoomLevel&&(o=t.minZoomLevel);var v=Gx.findCenter(i),g={position:v,scale:o,animation:t.animation};this.moveTo(g)}},{key:"focus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[t]){var i={x:this.body.nodes[t].x,y:this.body.nodes[t].y};e.position=i,e.lockedOnNode=t,this.moveTo(e)}else console.error("Node: "+t+" cannot be found.")}},{key:"moveTo",value:function(t){if(void 0!==t){if(null!=t.offset){if(null!=t.offset.x){if(t.offset.x=+t.offset.x,!Mw(t.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')}else t.offset.x=0;if(null!=t.offset.y){if(t.offset.y=+t.offset.y,!Mw(t.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')}else t.offset.x=0}else t.offset={x:0,y:0};if(null!=t.position){if(null!=t.position.x){if(t.position.x=+t.position.x,!Mw(t.position.x))throw new TypeError('The option "position.x" has to be a finite number.')}else t.position.x=0;if(null!=t.position.y){if(t.position.y=+t.position.y,!Mw(t.position.y))throw new TypeError('The option "position.y" has to be a finite number.')}else t.position.x=0}else t.position=this.getViewPosition();if(null!=t.scale){if(t.scale=+t.scale,!(t.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')}else t.scale=this.body.view.scale;void 0===t.animation&&(t.animation={duration:0}),!1===t.animation&&(t.animation={duration:0}),!0===t.animation&&(t.animation={}),void 0===t.animation.duration&&(t.animation.duration=1e3),void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),this.animateView(t)}else t={}}},{key:"animateView",value:function(t){if(void 0!==t){this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),!0===t.locked&&(this.lockedOnNodeId=t.lockedOnNode,this.lockedOnNodeOffset=t.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=t.scale,this.body.view.scale=this.targetScale;var e,i,o=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),n=o.x-t.position.x,r=o.y-t.position.y;if(this.targetTranslation={x:this.sourceTranslation.x+n*this.targetScale+t.offset.x,y:this.sourceTranslation.y+r*this.targetScale+t.offset.y},0===t.animation.duration)if(null!=this.lockedOnNodeId)this.viewFunction=Fo(e=this._lockedRedraw).call(e,this),this.body.emitter.on("initRedraw",this.viewFunction);else this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw");else this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,this.animationEasingFunction=t.animation.easingFunction,this.viewFunction=Fo(i=this._transitionRedraw).call(i,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering")}}},{key:"_lockedRedraw",value:function(){var t=this.body.nodes[this.lockedOnNodeId].x,e=this.body.nodes[this.lockedOnNodeId].y,i=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),o=i.x-t,n=i.y-e,r=this.body.view.translation,s={x:r.x+o*this.body.view.scale+this.lockedOnNodeOffset.x,y:r.y+n*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=s}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=!0===t?1:this.easingTime;var e=em[this.animationEasingFunction](this.easingTime);if(this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e},this.easingTime>=1){var i;if(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,null!=this.lockedOnNodeId)this.viewFunction=Fo(i=this._lockedRedraw).call(i,this),this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("animationFinished")}}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),t}();function aE(t){var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},r={keydown:{},keyup:{}},s={};for(e=97;e<=122;e++)s[String.fromCharCode(e)]={code:e-97+65,shift:!1};for(e=65;e<=90;e++)s[String.fromCharCode(e)]={code:e,shift:!0};for(e=0;e<=9;e++)s[""+e]={code:48+e,shift:!1};for(e=1;e<=12;e++)s["F"+e]={code:111+e,shift:!1};for(e=0;e<=9;e++)s["num"+e]={code:96+e,shift:!1};s["num*"]={code:106,shift:!1},s["num+"]={code:107,shift:!1},s["num-"]={code:109,shift:!1},s["num/"]={code:111,shift:!1},s["num."]={code:110,shift:!1},s.left={code:37,shift:!1},s.up={code:38,shift:!1},s.right={code:39,shift:!1},s.down={code:40,shift:!1},s.space={code:32,shift:!1},s.enter={code:13,shift:!1},s.shift={code:16,shift:void 0},s.esc={code:27,shift:!1},s.backspace={code:8,shift:!1},s.tab={code:9,shift:!1},s.ctrl={code:17,shift:!1},s.alt={code:18,shift:!1},s.delete={code:46,shift:!1},s.pageup={code:33,shift:!1},s.pagedown={code:34,shift:!1},s["="]={code:187,shift:!1},s["-"]={code:189,shift:!1},s["]"]={code:221,shift:!1},s["["]={code:219,shift:!1};var a=function(t){d(t,"keydown")},h=function(t){d(t,"keyup")},d=function(t,e){if(void 0!==r[e][t.keyCode]){for(var o=r[e][t.keyCode],n=0;n<o.length;n++)(void 0===o[n].shift||1==o[n].shift&&1==t.shiftKey||0==o[n].shift&&0==t.shiftKey)&&o[n].fn(t);1==i&&t.preventDefault()}};return n.bind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t);void 0===r[i][s[t].code]&&(r[i][s[t].code]=[]),r[i][s[t].code].push({fn:e,shift:s[t].shift})},n.bindAll=function(t,e){for(var i in void 0===e&&(e="keydown"),s)s.hasOwnProperty(i)&&n.bind(i,t,e)},n.getKey=function(t){for(var e in s)if(s.hasOwnProperty(e)){if(1==t.shiftKey&&1==s[e].shift&&t.keyCode==s[e].code)return e;if(0==t.shiftKey&&0==s[e].shift&&t.keyCode==s[e].code)return e;if(t.keyCode==s[e].code&&"shift"==e)return e}return"unknown key, currently not supported"},n.unbind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t);if(void 0!==e){var o=[],n=r[i][s[t].code];if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==s[t].shift||o.push(r[i][s[t].code][a]);r[i][s[t].code]=o}else r[i][s[t].code]=[]},n.reset=function(){r={keydown:{},keyup:{}}},n.destroy=function(){r={keydown:{},keyup:{}},o.removeEventListener("keydown",a,!0),o.removeEventListener("keyup",h,!0)},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),n}var hE=function(){function t(e,i){var o=this;Xl(this,t),this.body=e,this.canvas=i,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",(function(){o.activated=!0,o.configureKeyboardBindings()})),this.body.emitter.on("deactivate",(function(){o.activated=!1,o.configureKeyboardBindings()})),this.body.emitter.on("destroy",(function(){void 0!==o.keycharm&&o.keycharm.destroy()})),this.options={}}return $l(t,[{key:"setOptions",value:function(t){void 0!==t&&(this.options=t,this.create())}},{key:"create",value:function(){!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var t=this;this.cleanNavigation(),this.navigationDOM={};var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var o=0;o<e.length;o++){this.navigationDOM[e[o]]=document.createElement("div"),this.navigationDOM[e[o]].className="vis-button vis-"+e[o],this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]]);var n,r,s=new pm(this.navigationDOM[e[o]]);if("_fit"===i[o])iE(s,Fo(n=this._fit).call(n,this));else iE(s,Fo(r=this.bindToRedraw).call(r,this,i[o]));this.navigationHammers.push(s)}var a=new pm(this.canvas.frame);oE(a,(function(){t._stopMovement()})),this.navigationHammers.push(a),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(t){var e;void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=Fo(e=this[t]).call(e,this),this.body.emitter.on("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(t){void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[t])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var t in this.boundFunctions)Object.prototype.hasOwnProperty.call(this.boundFunctions,t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var t=this.body.view.scale,e=this.body.view.scale*(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:r},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var t=this.body.view.scale,e=this.body.view.scale/(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:r},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var t,e,i,o,n,r,s,a,h,d,l,c,u,f,p,v,g,y,m,b,w,k,_,x,E=this;(void 0!==this.keycharm&&this.keycharm.destroy(),!0===this.options.keyboard.enabled)&&(!0===this.options.keyboard.bindToWindow?this.keycharm=aE({container:window,preventDefault:!0}):this.keycharm=aE({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),!0===this.activated&&(Fo(t=this.keycharm).call(t,"up",(function(){E.bindToRedraw("_moveUp")}),"keydown"),Fo(e=this.keycharm).call(e,"down",(function(){E.bindToRedraw("_moveDown")}),"keydown"),Fo(i=this.keycharm).call(i,"left",(function(){E.bindToRedraw("_moveLeft")}),"keydown"),Fo(o=this.keycharm).call(o,"right",(function(){E.bindToRedraw("_moveRight")}),"keydown"),Fo(n=this.keycharm).call(n,"=",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),Fo(r=this.keycharm).call(r,"num+",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),Fo(s=this.keycharm).call(s,"num-",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),Fo(a=this.keycharm).call(a,"-",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),Fo(h=this.keycharm).call(h,"[",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),Fo(d=this.keycharm).call(d,"]",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),Fo(l=this.keycharm).call(l,"pageup",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),Fo(c=this.keycharm).call(c,"pagedown",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),Fo(u=this.keycharm).call(u,"up",(function(){E.unbindFromRedraw("_moveUp")}),"keyup"),Fo(f=this.keycharm).call(f,"down",(function(){E.unbindFromRedraw("_moveDown")}),"keyup"),Fo(p=this.keycharm).call(p,"left",(function(){E.unbindFromRedraw("_moveLeft")}),"keyup"),Fo(v=this.keycharm).call(v,"right",(function(){E.unbindFromRedraw("_moveRight")}),"keyup"),Fo(g=this.keycharm).call(g,"=",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),Fo(y=this.keycharm).call(y,"num+",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),Fo(m=this.keycharm).call(m,"num-",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),Fo(b=this.keycharm).call(b,"-",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),Fo(w=this.keycharm).call(w,"[",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),Fo(k=this.keycharm).call(k,"]",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),Fo(_=this.keycharm).call(_,"pageup",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),Fo(x=this.keycharm).call(x,"pagedown",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),t}();function dE(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return lE(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return lE(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function lE(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var cE=function(){function t(e,i,o){var n,r,s,a,h,d,l,c,u,f,p,v,g;Xl(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.navigationHandler=new hE(e,i),this.body.eventListeners.onTap=Fo(n=this.onTap).call(n,this),this.body.eventListeners.onTouch=Fo(r=this.onTouch).call(r,this),this.body.eventListeners.onDoubleTap=Fo(s=this.onDoubleTap).call(s,this),this.body.eventListeners.onHold=Fo(a=this.onHold).call(a,this),this.body.eventListeners.onDragStart=Fo(h=this.onDragStart).call(h,this),this.body.eventListeners.onDrag=Fo(d=this.onDrag).call(d,this),this.body.eventListeners.onDragEnd=Fo(l=this.onDragEnd).call(l,this),this.body.eventListeners.onMouseWheel=Fo(c=this.onMouseWheel).call(c,this),this.body.eventListeners.onPinch=Fo(u=this.onPinch).call(u,this),this.body.eventListeners.onMouseMove=Fo(f=this.onMouseMove).call(f,this),this.body.eventListeners.onRelease=Fo(p=this.onRelease).call(p,this),this.body.eventListeners.onContext=Fo(v=this.onContext).call(v,this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=Fo(g=this.getPointer).call(g,this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0,autoFocus:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0,zoomSpeed:1},fo(this.options,this.defaultOptions),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("destroy",(function(){clearTimeout(t.popupTimer),delete t.body.functions.getPointer}))}},{key:"setOptions",value:function(t){if(void 0!==t){Ay(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,t),tm(this.options,t,"keyboard"),t.tooltip&&(fo(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=Yy(t.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(t){return{x:t.x-(e=this.canvas.frame.canvas,e.getBoundingClientRect().left),y:t.y-Hy(this.canvas.frame.canvas)};var e}},{key:"onTouch",value:function(t){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey);this.checkSelectionChanges(e,i),this.selectionHandler.commitAndEmit(e,t),this.selectionHandler.generateClickEvent("click",t,e)}},{key:"onDoubleTap",value:function(t){var e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("doubleClick",t,e)}},{key:"onHold",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect;this.checkSelectionChanges(e,i),this.selectionHandler.commitAndEmit(e,t),this.selectionHandler.generateClickEvent("click",t,e),this.selectionHandler.generateClickEvent("hold",t,e)}},{key:"onRelease",value:function(t){if((new Date).valueOf()-this.touchTime>10){var e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("release",t,e),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(t){var e=this.getPointer({x:t.clientX,y:t.clientY});this.selectionHandler.generateClickEvent("oncontext",t,e)}},{key:"checkSelectionChanges",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===e?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t)}},{key:"_determineDifference",value:function(t,e){var i=function(t,e){for(var i=[],o=0;o<t.length;o++){var n=t[o];-1===zp(e).call(e,n)&&i.push(n)}return i};return{nodes:i(t.nodes,e.nodes),edges:i(t.edges,e.edges)}}},{key:"onDragStart",value:function(t){if(!this.drag.dragging){void 0===this.drag.pointer&&this.onTouch(t);var e=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=fo({},this.body.view.translation),this.drag.nodeId=void 0,t.srcEvent.shiftKey){this.body.selectionBox.show=!0;var i=this.getPointer(t.center);this.body.selectionBox.position.start={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)},this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)}}if(void 0!==e&&!0===this.options.dragNodes){this.drag.nodeId=e.id,!1===e.isSelected()&&this.selectionHandler.setSelection({nodes:[e.id]}),this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer);var o,n=dE(this.selectionHandler.getSelectedNodes());try{for(n.s();!(o=n.n()).done;){var r=o.value,s={id:r.id,node:r,x:r.x,y:r.y,xFixed:r.options.fixed.x,yFixed:r.options.fixed.y};r.options.fixed.x=!0,r.options.fixed.y=!0,this.drag.selection.push(s)}}catch(t){n.e(t)}finally{n.f()}}else this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)}}},{key:"onDrag",value:function(t){var e=this;if(!0!==this.drag.pinched){this.body.emitter.emit("unlockNode");var i=this.getPointer(t.center),o=this.drag.selection;if(o&&o.length&&!0===this.options.dragNodes){this.selectionHandler.generateClickEvent("dragging",t,i);var n=i.x-this.drag.pointer.x,r=i.y-this.drag.pointer.y;Fu(o).call(o,(function(t){var i=t.node;!1===t.xFixed&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),!1===t.yFixed&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+r))})),this.body.emitter.emit("startSimulation")}else{if(t.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)},this.body.emitter.emit("_requestRedraw")}if(!0===this.options.dragView&&!t.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);var s=i.x-this.drag.pointer.x,a=i.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+s,y:this.drag.translation.y+a},this.body.emitter.emit("_requestRedraw")}}}}},{key:"onDragEnd",value:function(t){var e=this;if(this.drag.dragging=!1,this.body.selectionBox.show){var i;this.body.selectionBox.show=!1;var o=this.body.selectionBox.position,n={minX:Math.min(o.start.x,o.end.x),minY:Math.min(o.start.y,o.end.y),maxX:Math.max(o.start.x,o.end.x),maxY:Math.max(o.start.y,o.end.y)},r=Yf(i=this.body.nodeIndices).call(i,(function(t){var i=e.body.nodes[t];return i.x>=n.minX&&i.x<=n.maxX&&i.y>=n.minY&&i.y<=n.maxY}));Fu(r).call(r,(function(t){return e.selectionHandler.selectObject(e.body.nodes[t])}));var s=this.getPointer(t.center);this.selectionHandler.commitAndEmit(s,t),this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw")}else{var a=this.drag.selection;a&&a.length?(Fu(a).call(a,(function(t){t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed})),this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}}},{key:"onPinch",value:function(t){var e=this.getPointer(t.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var i=this.pinch.scale*t.scale;this.zoom(i,e)}},{key:"zoom",value:function(t,e){if(!0===this.options.zoomView){var i=this.body.view.scale;t<1e-5&&(t=1e-5),t>10&&(t=10);var o=void 0;void 0!==this.drag&&!0===this.drag.dragging&&(o=this.canvas.DOMtoCanvas(this.drag.pointer));var n=this.body.view.translation,r=t/i,s=(1-r)*e.x+n.x*r,a=(1-r)*e.y+n.y*r;if(this.body.view.scale=t,this.body.view.translation={x:s,y:a},null!=o){var h=this.canvas.canvasToDOM(o);this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}this.body.emitter.emit("_requestRedraw"),i<t?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:e}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:e})}}},{key:"onMouseWheel",value:function(t){if(!0===this.options.zoomView){if(0!==t.deltaY){var e=this.body.view.scale;e*=1+(t.deltaY<0?1:-1)*(.1*this.options.zoomSpeed);var i=this.getPointer({x:t.clientX,y:t.clientY});this.zoom(e,i)}t.preventDefault()}}},{key:"onMouseMove",value:function(t){var e=this,i=this.getPointer({x:t.clientX,y:t.clientY}),o=!1;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(i),!1===this.popup.hidden&&(o=!0,this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),this.options.keyboard.autoFocus&&!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),!1===o&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=bv((function(){return e._checkShowPopup(i)}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(t,i)}},{key:"_checkShowPopup",value:function(t){var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={left:e,top:i,right:e,bottom:i},n=void 0===this.popupObj?void 0:this.popupObj.id,r=!1,s="node";if(void 0===this.popupObj){for(var a,h=this.body.nodeIndices,d=this.body.nodes,l=[],c=0;c<h.length;c++)!0===(a=d[h[c]]).isOverlappingWith(o)&&(r=!0,void 0!==a.getTitle()&&l.push(h[c]));l.length>0&&(this.popupObj=d[l[l.length-1]],r=!0)}if(void 0===this.popupObj&&!1===r){for(var u,f=this.body.edgeIndices,p=this.body.edges,v=[],g=0;g<f.length;g++)!0===(u=p[f[g]]).isOverlappingWith(o)&&!0===u.connected&&void 0!==u.getTitle()&&v.push(f[g]);v.length>0&&(this.popupObj=p[v[v.length-1]],s="edge")}void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new vm(this.canvas.frame)),this.popup.popupTargetType=s,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(t){var e=this.selectionHandler._pointerToPositionObject(t),i=!1;if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e))){var o=this.selectionHandler.getNodeAt(t);i=void 0!==o&&o.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));!1===i&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),t}();nw("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),xw);var uE=G.Set,fE=y,pE=sw,vE=ib.exports.getWeakData,gE=Ze,yE=X,mE=Wb,bE=jb,wE=Vt,kE=Un.set,_E=Un.getterFor,xE=Vh.find,EE=Vh.findIndex,OE=fE([].splice),CE=0,SE=function(t){return t.frozen||(t.frozen=new TE)},TE=function(){this.entries=[]},ME=function(t,e){return xE(t.entries,(function(t){return t[0]===e}))};TE.prototype={get:function(t){var e=ME(this,t);if(e)return e[1]},has:function(t){return!!ME(this,t)},set:function(t,e){var i=ME(this,t);i?i[1]=e:this.entries.push([t,e])},delete:function(t){var e=EE(this.entries,(function(e){return e[0]===t}));return~e&&OE(this.entries,e,1),!!~e}};var PE,DE={getConstructor:function(t,e,i,o){var n=t((function(t,n){mE(t,r),kE(t,{type:e,id:CE++,frozen:void 0}),null!=n&&bE(n,t[o],{that:t,AS_ENTRIES:i})})),r=n.prototype,s=_E(e),a=function(t,e,i){var o=s(t),n=vE(gE(e),!0);return!0===n?SE(o).set(e,i):n[o.id]=i,t};return pE(r,{delete:function(t){var e=s(this);if(!yE(t))return!1;var i=vE(t);return!0===i?SE(e).delete(t):i&&wE(i,e.id)&&delete i[e.id]},has:function(t){var e=s(this);if(!yE(t))return!1;var i=vE(t);return!0===i?SE(e).has(t):i&&wE(i,e.id)}}),pE(r,i?{get:function(t){var e=s(this);if(yE(t)){var i=vE(t);return!0===i?SE(e).get(t):i?i[e.id]:void 0}},set:function(t,e){return a(this,t,e)}}:{add:function(t){return a(this,t,!0)}}),n}},BE=n,IE=y,zE=sw,FE=ib.exports,NE=nw,AE=DE,RE=X,jE=db,LE=Un.enforce,HE=xn,WE=!BE.ActiveXObject&&"ActiveXObject"in BE,VE=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},qE=NE("WeakMap",VE,AE);if(HE&&WE){PE=AE.getConstructor(VE,"WeakMap",!0),FE.enable();var UE=qE.prototype,YE=IE(UE.delete),XE=IE(UE.has),GE=IE(UE.get),KE=IE(UE.set);zE(UE,{delete:function(t){if(RE(t)&&!jE(t)){var e=LE(this);return e.frozen||(e.frozen=new PE),YE(this,t)||e.frozen.delete(t)}return YE(this,t)},has:function(t){if(RE(t)&&!jE(t)){var e=LE(this);return e.frozen||(e.frozen=new PE),XE(this,t)||e.frozen.has(t)}return XE(this,t)},get:function(t){if(RE(t)&&!jE(t)){var e=LE(this);return e.frozen||(e.frozen=new PE),XE(this,t)?GE(this,t):e.frozen.get(t)}return GE(this,t)},set:function(t,e){if(RE(t)&&!jE(t)){var i=LE(this);i.frozen||(i.frozen=new PE),XE(this,t)?KE(this,t,e):i.frozen.set(t,e)}else KE(this,t,e);return this}})}var $E,ZE,QE,JE,tO,eO=G.WeakMap;
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
function iO(t,e,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(t):o?o.value:e.get(t)}function oO(t,e,i,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(t,i):n?n.value=i:e.set(t,i),i}function nO(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return rO(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return rO(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function rO(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function sO(t,e){var i,o=new uE,n=nO(e);try{for(n.s();!(i=n.n()).done;){var r=i.value;t.has(r)||o.add(r)}}catch(t){n.e(t)}finally{n.f()}return o}var aO=function(){function t(){Xl(this,t),$E.set(this,new uE),ZE.set(this,new uE)}return $l(t,[{key:"size",get:function(){return iO(this,ZE,"f").size}},{key:"add",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];iO(this,ZE,"f").add(r)}}},{key:"delete",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];iO(this,ZE,"f").delete(r)}}},{key:"clear",value:function(){iO(this,ZE,"f").clear()}},{key:"getSelection",value:function(){return Jc(iO(this,ZE,"f"))}},{key:"getChanges",value:function(){return{added:Jc(sO(iO(this,$E,"f"),iO(this,ZE,"f"))),deleted:Jc(sO(iO(this,ZE,"f"),iO(this,$E,"f"))),previous:Jc(new uE(iO(this,$E,"f"))),current:Jc(new uE(iO(this,ZE,"f")))}}},{key:"commit",value:function(){var t=this.getChanges();oO(this,$E,iO(this,ZE,"f"),"f"),oO(this,ZE,new uE(iO(this,$E,"f")),"f");var e,i=nO(t.added);try{for(i.s();!(e=i.n()).done;){e.value.select()}}catch(t){i.e(t)}finally{i.f()}var o,n=nO(t.deleted);try{for(n.s();!(o=n.n()).done;){o.value.unselect()}}catch(t){n.e(t)}finally{n.f()}return t}}]),t}();$E=new eO,ZE=new eO;var hO=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Xl(this,t),QE.set(this,new aO),JE.set(this,new aO),tO.set(this,void 0),oO(this,tO,e,"f")}return $l(t,[{key:"sizeNodes",get:function(){return iO(this,QE,"f").size}},{key:"sizeEdges",get:function(){return iO(this,JE,"f").size}},{key:"getNodes",value:function(){return iO(this,QE,"f").getSelection()}},{key:"getEdges",value:function(){return iO(this,JE,"f").getSelection()}},{key:"addNodes",value:function(){var t;(t=iO(this,QE,"f")).add.apply(t,arguments)}},{key:"addEdges",value:function(){var t;(t=iO(this,JE,"f")).add.apply(t,arguments)}},{key:"deleteNodes",value:function(t){iO(this,QE,"f").delete(t)}},{key:"deleteEdges",value:function(t){iO(this,JE,"f").delete(t)}},{key:"clear",value:function(){iO(this,QE,"f").clear(),iO(this,JE,"f").clear()}},{key:"commit",value:function(){for(var t,e,i={nodes:iO(this,QE,"f").commit(),edges:iO(this,JE,"f").commit()},o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=iO(this,tO,"f")).call.apply(t,su(e=[this,i]).call(e,n)),i}}]),t}();function dO(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return lO(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return lO(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function lO(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}QE=new eO,JE=new eO,tO=new eO;var cO=function(){function t(e,i){var o=this;Xl(this,t),this.body=e,this.canvas=i,this._selectionAccumulator=new hO,this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},fo(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",(function(){o.updateSelection()}))}return $l(t,[{key:"setOptions",value:function(t){if(void 0!==t){Ny(["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"],this.options,t)}}},{key:"selectOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),this.body.emitter.emit("_requestRedraw")}return e}},{key:"selectAdditionalOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);void 0!==i&&(e=!0,!0===i.isSelected()?this.deselectObject(i):this.selectObject(i),this.body.emitter.emit("_requestRedraw"))}return e}},{key:"_initBaseEvent",value:function(t,e){var i={};return i.pointer={DOM:{x:e.x,y:e.y},canvas:this.canvas.DOMtoCanvas(e)},i.event=t,i}},{key:"generateClickEvent",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this._initBaseEvent(e,i);if(!0===n)r.nodes=[],r.edges=[];else{var s=this.getSelection();r.nodes=s.nodes,r.edges=s.edges}void 0!==o&&(r.previousSelection=o),"click"==t&&(r.items=this.getClickedItems(i)),void 0!==e.controlEdge&&(r.controlEdge=e.controlEdge),this.body.emitter.emit(t,r)}},{key:"selectObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges;if(void 0!==t){if(t instanceof M_){var i;if(!0===e)(i=this._selectionAccumulator).addEdges.apply(i,Jc(t.edges));this._selectionAccumulator.addNodes(t)}else this._selectionAccumulator.addEdges(t);return!0}return!1}},{key:"deselectObject",value:function(t){!0===t.isSelected()&&(t.selected=!1,this._removeFromSelection(t))}},{key:"_getAllNodesOverlappingWith",value:function(t){for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}return e}},{key:"_pointerToPositionObject",value:function(t){var e=this.canvas.DOMtoCanvas(t);return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{key:"getNodeAt",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i);return o.length>0?!0===e?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(t,e){for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){var n=this.body.edgeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}}},{key:"_getAllEdgesOverlappingWith",value:function(t){var e=[];return this._getEdgesOverlappingWith(t,e),e}},{key:"getEdgeAt",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas.DOMtoCanvas(t),o=10,n=null,r=this.body.edges,s=0;s<this.body.edgeIndices.length;s++){var a=this.body.edgeIndices[s],h=r[a];if(h.connected){var d=h.from.x,l=h.from.y,c=h.to.x,u=h.to.y,f=h.edgeType.getDistanceToEdge(d,l,c,u,i.x,i.y);f<o&&(n=a,o=f)}}return null!==n?!0===e?this.body.edges[n]:n:void 0}},{key:"_addToHover",value:function(t){t instanceof M_?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}},{key:"_removeFromSelection",value:function(t){var e;t instanceof M_?(this._selectionAccumulator.deleteNodes(t),(e=this._selectionAccumulator).deleteEdges.apply(e,Jc(t.edges))):this._selectionAccumulator.deleteEdges(t)}},{key:"unselectAll",value:function(){this._selectionAccumulator.clear()}},{key:"getSelectedNodeCount",value:function(){return this._selectionAccumulator.sizeNodes}},{key:"getSelectedEdgeCount",value:function(){return this._selectionAccumulator.sizeEdges}},{key:"_hoverConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.hover=!0,this._addToHover(i)}}},{key:"emitBlurEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e);!0===i.hover&&(i.hover=!1,i instanceof M_?(o.node=i.id,this.body.emitter.emit("blurNode",o)):(o.edge=i.id,this.body.emitter.emit("blurEdge",o)))}},{key:"emitHoverEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e),n=!1;return!1===i.hover&&(i.hover=!0,this._addToHover(i),n=!0,i instanceof M_?(o.node=i.id,this.body.emitter.emit("hoverNode",o)):(o.edge=i.id,this.body.emitter.emit("hoverEdge",o))),n}},{key:"hoverObject",value:function(t,e){var i=this.getNodeAt(e);void 0===i&&(i=this.getEdgeAt(e));var o=!1;for(var n in this.hoverObj.nodes)Object.prototype.hasOwnProperty.call(this.hoverObj.nodes,n)&&(void 0===i||i instanceof M_&&i.id!=n||i instanceof Sx)&&(this.emitBlurEvent(t,e,this.hoverObj.nodes[n]),delete this.hoverObj.nodes[n],o=!0);for(var r in this.hoverObj.edges)Object.prototype.hasOwnProperty.call(this.hoverObj.edges,r)&&(!0===o?(this.hoverObj.edges[r].hover=!1,delete this.hoverObj.edges[r]):(void 0===i||i instanceof Sx&&i.id!=r||i instanceof M_&&!i.hover)&&(this.emitBlurEvent(t,e,this.hoverObj.edges[r]),delete this.hoverObj.edges[r],o=!0));if(void 0!==i){var s=mu(this.hoverObj.edges).length,a=mu(this.hoverObj.nodes).length;(o||i instanceof Sx&&0===s&&0===a||i instanceof M_&&0===s&&0===a)&&(o=this.emitHoverEvent(t,e,i)),i instanceof M_&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(i)}!0===o&&this.body.emitter.emit("_requestRedraw")}},{key:"commitWithoutEmitting",value:function(){this._selectionAccumulator.commit()}},{key:"commitAndEmit",value:function(t,e){var i=!1,o=this._selectionAccumulator.commit(),n={nodes:o.nodes.previous,edges:o.edges.previous};o.edges.deleted.length>0&&(this.generateClickEvent("deselectEdge",e,t,n),i=!0),o.nodes.deleted.length>0&&(this.generateClickEvent("deselectNode",e,t,n),i=!0),o.nodes.added.length>0&&(this.generateClickEvent("selectNode",e,t),i=!0),o.edges.added.length>0&&(this.generateClickEvent("selectEdge",e,t),i=!0),!0===i&&this.generateClickEvent("select",e,t)}},{key:"getSelection",value:function(){return{nodes:this.getSelectedNodeIds(),edges:this.getSelectedEdgeIds()}}},{key:"getSelectedNodes",value:function(){return this._selectionAccumulator.getNodes()}},{key:"getSelectedEdges",value:function(){return this._selectionAccumulator.getEdges()}},{key:"getSelectedNodeIds",value:function(){var t;return vu(t=this._selectionAccumulator.getNodes()).call(t,(function(t){return t.id}))}},{key:"getSelectedEdgeIds",value:function(){var t;return vu(t=this._selectionAccumulator.getEdges()).call(t,(function(t){return t.id}))}},{key:"setSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!t.nodes&&!t.edges)throw new TypeError("Selection must be an object with nodes and/or edges properties");if((e.unselectAll||void 0===e.unselectAll)&&this.unselectAll(),t.nodes){var i,o=dO(t.nodes);try{for(o.s();!(i=o.n()).done;){var n=i.value,r=this.body.nodes[n];if(!r)throw new RangeError('Node with id "'+n+'" not found');this.selectObject(r,e.highlightEdges)}}catch(t){o.e(t)}finally{o.f()}}if(t.edges){var s,a=dO(t.edges);try{for(a.s();!(s=a.n()).done;){var h=s.value,d=this.body.edges[h];if(!d)throw new RangeError('Edge with id "'+h+'" not found');this.selectObject(d)}}catch(t){a.e(t)}finally{a.f()}}this.body.emitter.emit("_requestRedraw"),this._selectionAccumulator.commit()}},{key:"selectNodes",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({nodes:t},{highlightEdges:e})}},{key:"selectEdges",value:function(t){if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({edges:t})}},{key:"updateSelection",value:function(){for(var t in this._selectionAccumulator.getNodes())Object.prototype.hasOwnProperty.call(this.body.nodes,t.id)||this._selectionAccumulator.deleteNodes(t);for(var e in this._selectionAccumulator.getEdges())Object.prototype.hasOwnProperty.call(this.body.edges,e.id)||this._selectionAccumulator.deleteEdges(e)}},{key:"getClickedItems",value:function(t){for(var e=this.canvas.DOMtoCanvas(t),i=[],o=this.body.nodeIndices,n=this.body.nodes,r=o.length-1;r>=0;r--){var s=n[o[r]].getItemsOnPoint(e);i.push.apply(i,s)}for(var a=this.body.edgeIndices,h=this.body.edges,d=a.length-1;d>=0;d--){var l=h[a[d]].getItemsOnPoint(e);i.push.apply(i,l)}return i}}]),t}(),uO=vh,fO=Math.floor,pO=function(t,e){var i=t.length,o=fO(i/2);return i<8?vO(t,e):gO(t,pO(uO(t,0,o),e),pO(uO(t,o),e),e)},vO=function(t,e){for(var i,o,n=t.length,r=1;r<n;){for(o=r,i=t[r];o&&e(t[o-1],i)>0;)t[o]=t[--o];o!==r++&&(t[o]=i)}return t},gO=function(t,e,i,o){for(var n=e.length,r=i.length,s=0,a=0;s<n||a<r;)t[s+a]=s<n&&a<r?o(e[s],i[a])<=0?e[s++]:i[a++]:s<n?e[s++]:i[a++];return t},yO=pO,mO=et.match(/firefox\/(\d+)/i),bO=!!mO&&+mO[1],wO=/MSIE|Trident/.test(et),kO=et.match(/AppleWebKit\/(\d+)\./),_O=!!kO&&+kO[1],xO=xi,EO=y,OO=Et,CO=Lt,SO=zi,TO=on,MO=r,PO=yO,DO=Ou,BO=bO,IO=wO,zO=ht,FO=_O,NO=[],AO=EO(NO.sort),RO=EO(NO.push),jO=MO((function(){NO.sort(void 0)})),LO=MO((function(){NO.sort(null)})),HO=DO("sort"),WO=!MO((function(){if(zO)return zO<70;if(!(BO&&BO>3)){if(IO)return!0;if(FO)return FO<603;var t,e,i,o,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(o=0;o<47;o++)NO.push({k:e+o,v:i})}for(NO.sort((function(t,e){return e.v-t.v})),o=0;o<NO.length;o++)e=NO[o].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));xO({target:"Array",proto:!0,forced:jO||!LO||!HO||!WO},{sort:function(t){void 0!==t&&OO(t);var e=CO(this);if(WO)return void 0===t?AO(e):AO(e,t);var i,o,n=[],r=SO(e);for(o=0;o<r;o++)o in e&&RO(n,e[o]);for(PO(n,function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:TO(e)>TO(i)?1:-1}}(t)),i=n.length,o=0;o<i;)e[o]=n[o++];for(;o<r;)delete e[o++];return e}});var VO=Mo("Array").sort,qO=tt,UO=VO,YO=Array.prototype,XO=function(t){var e=t.sort;return t===YO||qO(YO,t)&&e===YO.sort?UO:e},GO=XO,KO=Et,$O=Lt,ZO=L,QO=zi,JO=n.TypeError,tC=function(t){return function(e,i,o,n){KO(i);var r=$O(e),s=ZO(r),a=QO(r),h=t?a-1:0,d=t?-1:1;if(o<2)for(;;){if(h in s){n=s[h],h+=d;break}if(h+=d,t?h<0:a<=h)throw JO("Reduce of empty array with no initial value")}for(;t?h>=0:a>h;h+=d)h in s&&(n=i(n,s[h],h,r));return n}},eC={left:tC(!1),right:tC(!0)},iC="process"==z(n.process),oC=eC.left,nC=ht,rC=iC;xi({target:"Array",proto:!0,forced:!Ou("reduce")||!rC&&nC>79&&nC<83},{reduce:function(t){var e=arguments.length;return oC(this,t,e,e>1?arguments[1]:void 0)}});var sC=Mo("Array").reduce,aC=tt,hC=sC,dC=Array.prototype,lC=function(t){var e=t.reduce;return t===dC||aC(dC,t)&&e===dC.reduce?hC:e},cC=lC,uC={};!function(t){!function(t){function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0,t.sort=v;var i=32,o=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9];function s(t){return t<1e5?t<100?t<10?0:1:t<1e4?t<1e3?2:3:4:t<1e7?t<1e6?5:6:t<1e9?t<1e8?7:8:9}function a(t,e){if(t===e)return 0;if(~~t===t&&~~e===e){if(0===t||0===e)return t<e?-1:1;if(t<0||e<0){if(e>=0)return-1;if(t>=0)return 1;t=-t,e=-e}var i=s(t),o=s(e),n=0;return i<o?(t*=r[o-i-1],e/=10,n=-1):i>o&&(e*=r[i-o-1],t/=10,n=1),t===e?n:t<e?-1:1}var a=String(t),h=String(e);return a===h?0:a<h?-1:1}function h(t){for(var e=0;t>=i;)e|=1&t,t>>=1;return t+e}function d(t,e,i,o){var n=e+1;if(n===i)return 1;if(o(t[n++],t[e])<0){for(;n<i&&o(t[n],t[n-1])<0;)n++;l(t,e,n)}else for(;n<i&&o(t[n],t[n-1])>=0;)n++;return n-e}function l(t,e,i){for(i--;e<i;){var o=t[e];t[e++]=t[i],t[i--]=o}}function c(t,e,i,o,n){for(o===e&&o++;o<i;o++){for(var r=t[o],s=e,a=o;s<a;){var h=s+a>>>1;n(r,t[h])<0?a=h:s=h+1}var d=o-s;switch(d){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;d>0;)t[s+d]=t[s+d-1],d--}t[s]=r}}function u(t,e,i,o,n,r){var s=0,a=0,h=1;if(r(t,e[i+n])>0){for(a=o-n;h<a&&r(t,e[i+n+h])>0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a),s+=n,h+=n}else{for(a=n+1;h<a&&r(t,e[i+n-h])<=0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a);var d=s;s=n-h,h=n-d}for(s++;s<h;){var l=s+(h-s>>>1);r(t,e[i+l])>0?s=l+1:h=l}return h}function f(t,e,i,o,n,r){var s=0,a=0,h=1;if(r(t,e[i+n])<0){for(a=n+1;h<a&&r(t,e[i+n-h])<0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a);var d=s;s=n-h,h=n-d}else{for(a=o-n;h<a&&r(t,e[i+n+h])>=0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a),s+=n,h+=n}for(s++;s<h;){var l=s+(h-s>>>1);r(t,e[i+l])<0?h=l:s=l+1}return h}var p=function(){function t(i,r){e(this,t),this.array=null,this.compare=null,this.minGallop=o,this.length=0,this.tmpStorageLength=n,this.stackLength=0,this.runStart=null,this.runLength=null,this.stackSize=0,this.array=i,this.compare=r,this.length=i.length,this.length<2*n&&(this.tmpStorageLength=this.length>>>1),this.tmp=new Array(this.tmpStorageLength),this.stackLength=this.length<120?5:this.length<1542?10:this.length<119151?19:40,this.runStart=new Array(this.stackLength),this.runLength=new Array(this.stackLength)}return t.prototype.pushRun=function(t,e){this.runStart[this.stackSize]=t,this.runLength[this.stackSize]=e,this.stackSize+=1},t.prototype.mergeRuns=function(){for(;this.stackSize>1;){var t=this.stackSize-2;if(t>=1&&this.runLength[t-1]<=this.runLength[t]+this.runLength[t+1]||t>=2&&this.runLength[t-2]<=this.runLength[t]+this.runLength[t-1])this.runLength[t-1]<this.runLength[t+1]&&t--;else if(this.runLength[t]>this.runLength[t+1])break;this.mergeAt(t)}},t.prototype.forceMergeRuns=function(){for(;this.stackSize>1;){var t=this.stackSize-2;t>0&&this.runLength[t-1]<this.runLength[t+1]&&t--,this.mergeAt(t)}},t.prototype.mergeAt=function(t){var e=this.compare,i=this.array,o=this.runStart[t],n=this.runLength[t],r=this.runStart[t+1],s=this.runLength[t+1];this.runLength[t]=n+s,t===this.stackSize-3&&(this.runStart[t+1]=this.runStart[t+2],this.runLength[t+1]=this.runLength[t+2]),this.stackSize--;var a=f(i[r],i,o,n,0,e);o+=a,0!=(n-=a)&&0!==(s=u(i[o+n-1],i,r,s,s-1,e))&&(n<=s?this.mergeLow(o,n,r,s):this.mergeHigh(o,n,r,s))},t.prototype.mergeLow=function(t,e,i,n){var r=this.compare,s=this.array,a=this.tmp,h=0;for(h=0;h<e;h++)a[h]=s[t+h];var d=0,l=i,c=t;if(s[c++]=s[l++],0!=--n)if(1!==e){for(var p=this.minGallop;;){var v=0,g=0,y=!1;do{if(r(s[l],a[d])<0){if(s[c++]=s[l++],g++,v=0,0==--n){y=!0;break}}else if(s[c++]=a[d++],v++,g=0,1==--e){y=!0;break}}while((v|g)<p);if(y)break;do{if(0!==(v=f(s[l],a,d,e,0,r))){for(h=0;h<v;h++)s[c+h]=a[d+h];if(c+=v,d+=v,(e-=v)<=1){y=!0;break}}if(s[c++]=s[l++],0==--n){y=!0;break}if(0!==(g=u(a[d],s,l,n,0,r))){for(h=0;h<g;h++)s[c+h]=s[l+h];if(c+=g,l+=g,0==(n-=g)){y=!0;break}}if(s[c++]=a[d++],1==--e){y=!0;break}p--}while(v>=o||g>=o);if(y)break;p<0&&(p=0),p+=2}if(this.minGallop=p,p<1&&(this.minGallop=1),1===e){for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]}else{if(0===e)throw new Error("mergeLow preconditions were not respected");for(h=0;h<e;h++)s[c+h]=a[d+h]}}else{for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]}else for(h=0;h<e;h++)s[c+h]=a[d+h]},t.prototype.mergeHigh=function(t,e,i,n){var r=this.compare,s=this.array,a=this.tmp,h=0;for(h=0;h<n;h++)a[h]=s[i+h];var d=t+e-1,l=n-1,c=i+n-1,p=0,v=0;if(s[c--]=s[d--],0!=--e)if(1!==n){for(var g=this.minGallop;;){var y=0,m=0,b=!1;do{if(r(a[l],s[d])<0){if(s[c--]=s[d--],y++,m=0,0==--e){b=!0;break}}else if(s[c--]=a[l--],m++,y=0,1==--n){b=!0;break}}while((y|m)<g);if(b)break;do{if(0!=(y=e-f(a[l],s,t,e,e-1,r))){for(e-=y,v=1+(c-=y),p=1+(d-=y),h=y-1;h>=0;h--)s[v+h]=s[p+h];if(0===e){b=!0;break}}if(s[c--]=a[l--],1==--n){b=!0;break}if(0!=(m=n-u(s[d],a,0,n,n-1,r))){for(n-=m,v=1+(c-=m),p=1+(l-=m),h=0;h<m;h++)s[v+h]=a[p+h];if(n<=1){b=!0;break}}if(s[c--]=s[d--],0==--e){b=!0;break}g--}while(y>=o||m>=o);if(b)break;g<0&&(g=0),g+=2}if(this.minGallop=g,g<1&&(this.minGallop=1),1===n){for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h];s[c]=a[l]}else{if(0===n)throw new Error("mergeHigh preconditions were not respected");for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]}}else{for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h];s[c]=a[l]}else for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]},t}();function v(t,e,o,n){if(!Array.isArray(t))throw new TypeError("Can only sort arrays");e?"function"!=typeof e&&(n=o,o=e,e=a):e=a,o||(o=0),n||(n=t.length);var r=n-o;if(!(r<2)){var s=0;if(r<i)c(t,o,n,o+(s=d(t,o,n,e)),e);else{var l=new p(t,e),u=h(r);do{if((s=d(t,o,n,e))<u){var f=r;f>u&&(f=u),c(t,o,o+f,o+s,e),s=f}l.pushRun(o,s),l.mergeRuns(),r-=s,o+=s}while(0!==r);l.forceMergeRuns()}}}}(t)}(uC);var fC=uC;function pC(t){var e=function(){if("undefined"==typeof Reflect||!zk)return!1;if(zk.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(zk(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Hk(t);if(e){var n=Hk(this).constructor;i=zk(o,arguments,n)}else i=o.apply(this,arguments);return jk(this,i)}}var vC=function(){function t(){Xl(this,t)}return $l(t,[{key:"abstract",value:function(){throw new Error("Can't instantiate abstract class!")}},{key:"fake_use",value:function(){}},{key:"curveType",value:function(){return this.abstract()}},{key:"getPosition",value:function(t){return this.fake_use(t),this.abstract()}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.fake_use(t,e,i),this.abstract()}},{key:"getTreeSize",value:function(t){return this.fake_use(t),this.abstract()}},{key:"sort",value:function(t){this.fake_use(t),this.abstract()}},{key:"fix",value:function(t,e){this.fake_use(t,e),this.abstract()}},{key:"shift",value:function(t,e){this.fake_use(t,e),this.abstract()}}]),t}(),gC=function(t){Rk(i,t);var e=pC(i);function i(t){var o;return Xl(this,i),(o=e.call(this)).layout=t,o}return $l(i,[{key:"curveType",value:function(){return"horizontal"}},{key:"getPosition",value:function(t){return t.x}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.x=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_x,max:e.max_x}}},{key:"sort",value:function(t){fC.sort(t,(function(t,e){return t.x-e.x}))}},{key:"fix",value:function(t,e){t.y=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.y=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].x+=e}}]),i}(vC),yC=function(t){Rk(i,t);var e=pC(i);function i(t){var o;return Xl(this,i),(o=e.call(this)).layout=t,o}return $l(i,[{key:"curveType",value:function(){return"vertical"}},{key:"getPosition",value:function(t){return t.y}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.y=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_y,max:e.max_y}}},{key:"sort",value:function(t){fC.sort(t,(function(t,e){return t.y-e.y}))}},{key:"fix",value:function(t,e){t.x=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.x=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].y+=e}}]),i}(vC),mC=Vh.every;xi({target:"Array",proto:!0,forced:!Ou("every")},{every:function(t){return mC(this,t,arguments.length>1?arguments[1]:void 0)}});var bC=Mo("Array").every,wC=tt,kC=bC,_C=Array.prototype,xC=function(t){var e=t.every;return t===_C||wC(_C,t)&&e===_C.every?kC:e},EC=xC;function OC(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return CC(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return CC(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function CC(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function SC(t,e){var i=new uE;return Fu(t).call(t,(function(t){var e;Fu(e=t.edges).call(e,(function(t){t.connected&&i.add(t)}))})),Fu(i).call(i,(function(t){var i=t.from.id,o=t.to.id;null==e[i]&&(e[i]=0),(null==e[o]||e[i]>=e[o])&&(e[o]=e[i]+1)})),e}function TC(t,e,i,o){var n,r,s=Hp(null),a=cC(n=Jc(lk(o).call(o))).call(n,(function(t,e){return t+1+e.edges.length}),0),h=i+"Id",d="to"===i?1:-1,l=OC(o);try{var c=function(){var n=$c(r.value,2),l=n[0],c=n[1];if(!o.has(l)||!t(c))return"continue";s[l]=0;for(var u=[c],f=0,p=void 0,v=function(){var t,n;if(!o.has(l))return"continue";var r=s[p.id]+d;if(Fu(t=Yf(n=p.edges).call(n,(function(t){return t.connected&&t.to!==t.from&&t[i]!==p&&o.has(t.toId)&&o.has(t.fromId)}))).call(t,(function(t){var o=t[h],n=s[o];(null==n||e(r,n))&&(s[o]=r,u.push(t[i]))})),f>a)return{v:{v:SC(o,s)}};++f};p=u.pop();){var g=v();if("continue"!==g&&"object"===Qc(g))return g.v}};for(l.s();!(r=l.n()).done;){var u=c();if("continue"!==u&&"object"===Qc(u))return u.v}}catch(t){l.e(t)}finally{l.f()}return s}var MC=function(){function t(){Xl(this,t),this.childrenReference={},this.parentReference={},this.trees={},this.distributionOrdering={},this.levels={},this.distributionIndex={},this.isTree=!1,this.treeIndex=-1}return $l(t,[{key:"addRelation",value:function(t,e){void 0===this.childrenReference[t]&&(this.childrenReference[t]=[]),this.childrenReference[t].push(e),void 0===this.parentReference[e]&&(this.parentReference[e]=[]),this.parentReference[e].push(t)}},{key:"checkIfTree",value:function(){for(var t in this.parentReference)if(this.parentReference[t].length>1)return void(this.isTree=!1);this.isTree=!0}},{key:"numTrees",value:function(){return this.treeIndex+1}},{key:"setTreeIndex",value:function(t,e){void 0!==e&&void 0===this.trees[t.id]&&(this.trees[t.id]=e,this.treeIndex=Math.max(e,this.treeIndex))}},{key:"ensureLevel",value:function(t){void 0===this.levels[t]&&(this.levels[t]=0)}},{key:"getMaxLevel",value:function(t){var e=this,i={};return function t(o){if(void 0!==i[o])return i[o];var n=e.levels[o];if(e.childrenReference[o]){var r=e.childrenReference[o];if(r.length>0)for(var s=0;s<r.length;s++)n=Math.max(n,t(r[s]))}return i[o]=n,n}(t)}},{key:"levelDownstream",value:function(t,e){void 0===this.levels[e.id]&&(void 0===this.levels[t.id]&&(this.levels[t.id]=0),this.levels[e.id]=this.levels[t.id]+1)}},{key:"setMinLevelToZero",value:function(t){var e=1e9;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&void 0!==this.levels[i]&&(e=Math.min(this.levels[i],e));for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&void 0!==this.levels[o]&&(this.levels[o]-=e)}},{key:"getTreeSize",value:function(t,e){var i=1e9,o=-1e9,n=1e9,r=-1e9;for(var s in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees,s)&&this.trees[s]===e){var a=t[s];i=Math.min(a.x,i),o=Math.max(a.x,o),n=Math.min(a.y,n),r=Math.max(a.y,r)}return{min_x:i,max_x:o,min_y:n,max_y:r}}},{key:"hasSameParent",value:function(t,e){var i=this.parentReference[t.id],o=this.parentReference[e.id];if(void 0===i||void 0===o)return!1;for(var n=0;n<i.length;n++)for(var r=0;r<o.length;r++)if(i[n]==o[r])return!0;return!1}},{key:"inSameSubNetwork",value:function(t,e){return this.trees[t.id]===this.trees[e.id]}},{key:"getLevels",value:function(){return mu(this.distributionOrdering)}},{key:"addToOrdering",value:function(t,e){void 0===this.distributionOrdering[e]&&(this.distributionOrdering[e]=[]);var i=!1,o=this.distributionOrdering[e];for(var n in o)if(o[n]===t){i=!0;break}i||(this.distributionOrdering[e].push(t),this.distributionIndex[t.id]=this.distributionOrdering[e].length-1)}}]),t}(),PC=function(){function t(e){Xl(this,t),this.body=e,this._resetRNG(Math.random()+":"+xu()),this.setPhysics=!1,this.options={},this.optionsBackup={physics:{}},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,clusterThreshold:150,hierarchical:{enabled:!1,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:"UD",sortMethod:"hubsize"}},fo(this.options,this.defaultOptions),this.bindEventListeners()}return $l(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_dataChanged",(function(){t.setupHierarchicalLayout()})),this.body.emitter.on("_dataLoaded",(function(){t.layoutNetwork()})),this.body.emitter.on("_resetHierarchicalLayout",(function(){t.setupHierarchicalLayout()})),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(function(){if(!0===t.options.hierarchical.enabled){var e=t.direction.curveType();t.body.emitter.emit("_forceDisableDynamicCurves",e,!1)}}))}},{key:"setOptions",value:function(t,e){if(void 0!==t){var i=this.options.hierarchical,o=i.enabled;if(Ny(["randomSeed","improvedLayout","clusterThreshold"],this.options,t),tm(this.options,t,"hierarchical"),void 0!==t.randomSeed&&this._resetRNG(t.randomSeed),!0===i.enabled)return!0===o&&this.body.emitter.emit("refresh",!0),"RL"===i.direction||"DU"===i.direction?i.levelSeparation>0&&(i.levelSeparation*=-1):i.levelSeparation<0&&(i.levelSeparation*=-1),this.setDirectionStrategy(),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(e);if(!0===o)return this.body.emitter.emit("refresh"),Ry(e,this.optionsBackup)}return e}},{key:"_resetRNG",value:function(t){this.initialRandomSeed=t,this._rng=_y(this.initialRandomSeed)}},{key:"adaptAllOptionsForHierarchicalLayout",value:function(t){if(!0===this.options.hierarchical.enabled){var e=this.optionsBackup.physics;void 0===t.physics||!0===t.physics?(t.physics={enabled:void 0===e.enabled||e.enabled,solver:"hierarchicalRepulsion"},e.enabled=void 0===e.enabled||e.enabled,e.solver=e.solver||"barnesHut"):"object"===Qc(t.physics)?(e.enabled=void 0===t.physics.enabled||t.physics.enabled,e.solver=t.physics.solver||"barnesHut",t.physics.solver="hierarchicalRepulsion"):!1!==t.physics&&(e.solver="barnesHut",t.physics={solver:"hierarchicalRepulsion"});var i=this.direction.curveType();if(void 0===t.edges)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges={smooth:!1};else if(void 0===t.edges.smooth)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges.smooth=!1;else if("boolean"==typeof t.edges.smooth)this.optionsBackup.edges={smooth:t.edges.smooth},t.edges.smooth={enabled:t.edges.smooth,type:i};else{var o=t.edges.smooth;void 0!==o.type&&"dynamic"!==o.type&&(i=o.type),this.optionsBackup.edges={smooth:{enabled:void 0===o.enabled||o.enabled,type:void 0===o.type?"dynamic":o.type,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection}},t.edges.smooth={enabled:void 0===o.enabled||o.enabled,type:i,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection}}this.body.emitter.emit("_forceDisableDynamicCurves",i)}return t}},{key:"positionInitially",value:function(t){if(!0!==this.options.hierarchical.enabled){this._resetRNG(this.initialRandomSeed);for(var e=t.length+50,i=0;i<t.length;i++){var o=t[i],n=2*Math.PI*this._rng();void 0===o.x&&(o.x=e*Math.cos(n)),void 0===o.y&&(o.y=e*Math.sin(n))}}}},{key:"layoutNetwork",value:function(){if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){for(var t=this.body.nodeIndices,e=0,i=0;i<t.length;i++){!0===this.body.nodes[t[i]].predefinedPosition&&(e+=1)}if(e<.5*t.length){var o=0,n=this.options.clusterThreshold,r={clusterNodeProperties:{shape:"ellipse",label:"",group:"",font:{multi:!1}},clusterEdgeProperties:{label:"",font:{multi:!1},smooth:{enabled:!1}}};if(t.length>n){for(var s=t.length;t.length>n&&o<=10;){o+=1;var a=t.length;if(o%3==0?this.body.modules.clustering.clusterBridges(r):this.body.modules.clustering.clusterOutliers(r),a==t.length&&o%3!=0)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*s)})}o>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),this.body.modules.kamadaKawai.solve(t,this.body.edgeIndices,!0),this._shiftToCenter();for(var h=0;h<t.length;h++){var d=this.body.nodes[t[h]];!1===d.predefinedPosition&&(d.x+=70*(.5-this._rng()),d.y+=70*(.5-this._rng()))}this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var t=Gx.getRangeCore(this.body.nodes,this.body.nodeIndices),e=Gx.findCenter(t),i=0;i<this.body.nodeIndices.length;i++){var o=this.body.nodes[this.body.nodeIndices[i]];o.x-=e.x,o.y-=e.y}}},{key:"_declusterAll",value:function(){for(var t=!0;!0===t;){t=!1;for(var e=0;e<this.body.nodeIndices.length;e++)!0===this.body.nodes[this.body.nodeIndices[e]].isCluster&&(t=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1));!0===t&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(!0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0){var t,e,i=!1,o=!1;for(e in this.lastNodeOnLevel={},this.hierarchical=new MC,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&(void 0!==(t=this.body.nodes[e]).options.level?(i=!0,this.hierarchical.levels[e]=t.options.level):o=!0);if(!0===o&&!0===i)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");if(!0===o){var n=this.options.hierarchical.sortMethod;"hubsize"===n?this._determineLevelsByHubsize():"directed"===n?this._determineLevelsDirected():"custom"===n&&this._determineLevelsCustomCallback()}for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.hierarchical.ensureLevel(r);var s=this._getDistribution();this._generateMap(),this._placeNodesByHierarchy(s),this._condenseHierarchy(),this._shiftToCenter()}}},{key:"_condenseHierarchy",value:function(){var t=this,e=!1,i={},o=function(e,i){var o=t.hierarchical.trees;for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&o[n]===e&&t.direction.shift(n,i)},n=function(){for(var e=[],i=0;i<t.hierarchical.numTrees();i++)e.push(t.direction.getTreeSize(i));return e},r=function e(i,o){if(!o[i.id]&&(o[i.id]=!0,t.hierarchical.childrenReference[i.id])){var n=t.hierarchical.childrenReference[i.id];if(n.length>0)for(var r=0;r<n.length;r++)e(t.body.nodes[n[r]],o)}},s=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,o=1e9,n=1e9,r=1e9,s=-1e9;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var h=t.body.nodes[a],d=t.hierarchical.levels[h.id],l=t.direction.getPosition(h),c=t._getSpaceAroundNode(h,e),u=$c(c,2),f=u[0],p=u[1];o=Math.min(f,o),n=Math.min(p,n),d<=i&&(r=Math.min(l,r),s=Math.max(l,s))}return[r,s,o,n]},a=function(e,i){var o=t.hierarchical.getMaxLevel(e.id),n=t.hierarchical.getMaxLevel(i.id);return Math.min(o,n)},h=function(e,i,o){for(var n=t.hierarchical,r=0;r<i.length;r++){var s=i[r],a=n.distributionOrdering[s];if(a.length>1)for(var h=0;h<a.length-1;h++){var d=a[h],l=a[h+1];n.hasSameParent(d,l)&&n.inSameSubNetwork(d,l)&&e(d,l,o)}}},d=function(i,o){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=t.direction.getPosition(i),d=t.direction.getPosition(o),l=Math.abs(d-h),c=t.options.hierarchical.nodeSpacing;if(l>c){var u={},f={};r(i,u),r(o,f);var p=a(i,o),v=s(u,p),g=s(f,p),y=v[1],m=g[0],b=g[2],w=Math.abs(y-m);if(w>c){var k=y-m+c;k<-b+c&&(k=-b+c),k<0&&(t._shiftBlock(o.id,k),e=!0,!0===n&&t._centerParent(o))}}},l=function(o,n){for(var a=n.id,h=n.edges,d=t.hierarchical.levels[n.id],l=t.options.hierarchical.levelSeparation*t.options.hierarchical.levelSeparation,c={},u=[],f=0;f<h.length;f++){var p=h[f];if(p.toId!=p.fromId){var v=p.toId==a?p.from:p.to;c[h[f].id]=v,t.hierarchical.levels[v.id]<d&&u.push(p)}}var g=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var r=t.direction.getPosition(c[i[n].id])-e;o+=r/Math.sqrt(r*r+l)}return o},y=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var r=t.direction.getPosition(c[i[n].id])-e;o-=l*Math.pow(r*r+l,-1.5)}return o},m=function(e,i){for(var o=t.direction.getPosition(n),r={},s=0;s<e;s++){var a=g(o,i),h=y(o,i);if(void 0!==r[o-=Math.max(-40,Math.min(40,Math.round(a/h)))])break;r[o]=s}return o},b=m(o,u);!function(o){var a=t.direction.getPosition(n);if(void 0===i[n.id]){var h={};r(n,h),i[n.id]=h}var d=s(i[n.id]),l=d[2],c=d[3],u=o-a,f=0;u>0?f=Math.min(u,c-t.options.hierarchical.nodeSpacing):u<0&&(f=-Math.min(-u,l-t.options.hierarchical.nodeSpacing)),0!=f&&(t._shiftBlock(n.id,f),e=!0)}(b),function(i){var o=t.direction.getPosition(n),r=$c(t._getSpaceAroundNode(n),2),s=r[0],a=r[1],h=i-o,d=o;h>0?d=Math.min(o+(a-t.options.hierarchical.nodeSpacing),i):h<0&&(d=Math.max(o-(s-t.options.hierarchical.nodeSpacing),i)),d!==o&&(t.direction.setPosition(n,d),e=!0)}(b=m(o,h))};!0===this.options.hierarchical.blockShifting&&(function(i){var o=t.hierarchical.getLevels();o=Uu(o).call(o);for(var n=0;n<i&&(e=!1,h(d,o,!0),!0===e);n++);}(5),function(){for(var e in t.body.nodes)Object.prototype.hasOwnProperty.call(t.body.nodes,e)&&t._centerParent(t.body.nodes[e])}()),!0===this.options.hierarchical.edgeMinimization&&function(i){var o=t.hierarchical.getLevels();o=Uu(o).call(o);for(var n=0;n<i;n++){e=!1;for(var r=0;r<o.length;r++)for(var s=o[r],a=t.hierarchical.distributionOrdering[s],h=0;h<a.length;h++)l(1e3,a[h]);if(!0!==e)break}}(20),!0===this.options.hierarchical.parentCentralization&&function(){var e=t.hierarchical.getLevels();e=Uu(e).call(e);for(var i=0;i<e.length;i++)for(var o=e[i],n=t.hierarchical.distributionOrdering[o],r=0;r<n.length;r++)t._centerParent(n[r])}(),function(){for(var e=n(),i=0,r=0;r<e.length-1;r++){i+=e[r].max-e[r+1].min+t.options.hierarchical.treeSpacing,o(r+1,i)}}()}},{key:"_getSpaceAroundNode",value:function(t,e){var i=!0;void 0===e&&(i=!1);var o=this.hierarchical.levels[t.id];if(void 0!==o){var n=this.hierarchical.distributionIndex[t.id],r=this.direction.getPosition(t),s=this.hierarchical.distributionOrdering[o],a=1e9,h=1e9;if(0!==n){var d=s[n-1];if(!0===i&&void 0===e[d.id]||!1===i)a=r-this.direction.getPosition(d)}if(n!=s.length-1){var l=s[n+1];if(!0===i&&void 0===e[l.id]||!1===i){var c=this.direction.getPosition(l);h=Math.min(h,c-r)}}return[a,h]}return[0,0]}},{key:"_centerParent",value:function(t){if(this.hierarchical.parentReference[t.id])for(var e=this.hierarchical.parentReference[t.id],i=0;i<e.length;i++){var o=e[i],n=this.body.nodes[o],r=this.hierarchical.childrenReference[o];if(void 0!==r){var s=this._getCenterPosition(r),a=this.direction.getPosition(n),h=$c(this._getSpaceAroundNode(n),2),d=h[0],l=h[1],c=a-s;(c<0&&Math.abs(c)<l-this.options.hierarchical.nodeSpacing||c>0&&Math.abs(c)<d-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(n,s)}}}},{key:"_placeNodesByHierarchy",value:function(t){for(var e in this.positionedNodes={},t)if(Object.prototype.hasOwnProperty.call(t,e)){var i,o=mu(t[e]);o=this._indexArrayToNodes(o),GO(i=this.direction).call(i,o);for(var n=0,r=0;r<o.length;r++){var s=o[r];if(void 0===this.positionedNodes[s.id]){var a=this.options.hierarchical.nodeSpacing,h=a*n;n>0&&(h=this.direction.getPosition(o[r-1])+a),this.direction.setPosition(s,h,e),this._validatePositionAndContinue(s,e,h),n++}}}}},{key:"_placeBranchNodes",value:function(t,e){var i,o=this.hierarchical.childrenReference[t];if(void 0!==o){for(var n=[],r=0;r<o.length;r++)n.push(this.body.nodes[o[r]]);GO(i=this.direction).call(i,n);for(var s=0;s<n.length;s++){var a=n[s],h=this.hierarchical.levels[a.id];if(!(h>e&&void 0===this.positionedNodes[a.id]))return;var d=this.options.hierarchical.nodeSpacing,l=void 0;l=0===s?this.direction.getPosition(this.body.nodes[t]):this.direction.getPosition(n[s-1])+d,this.direction.setPosition(a,l,h),this._validatePositionAndContinue(a,h,l)}var c=this._getCenterPosition(n);this.direction.setPosition(this.body.nodes[t],c,e)}}},{key:"_validatePositionAndContinue",value:function(t,e,i){if(this.hierarchical.isTree){if(void 0!==this.lastNodeOnLevel[e]){var o=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[e]]);if(i-o<this.options.hierarchical.nodeSpacing){var n=o+this.options.hierarchical.nodeSpacing-i,r=this._findCommonParent(this.lastNodeOnLevel[e],t.id);this._shiftBlock(r.withChild,n)}}this.lastNodeOnLevel[e]=t.id,this.positionedNodes[t.id]=!0,this._placeBranchNodes(t.id,e)}}},{key:"_indexArrayToNodes",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push(this.body.nodes[t[i]]);return e}},{key:"_getDistribution",value:function(){var t,e,i={};for(t in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,t)){e=this.body.nodes[t];var o=void 0===this.hierarchical.levels[t]?0:this.hierarchical.levels[t];this.direction.fix(e,o),void 0===i[o]&&(i[o]={}),i[o][t]=e}return i}},{key:"_getActiveEdges",value:function(t){var e=this,i=[];return Wy(t.edges,(function(t){var o;-1!==zp(o=e.body.edgeIndices).call(o,t.id)&&i.push(t)})),i}},{key:"_getHubSizes",value:function(){var t=this,e={};Wy(this.body.nodeIndices,(function(i){var o=t.body.nodes[i],n=t._getActiveEdges(o).length;e[n]=!0}));var i=[];return Wy(e,(function(t){i.push(Number(t))})),GO(fC).call(fC,i,(function(t,e){return e-t})),i}},{key:"_determineLevelsByHubsize",value:function(){for(var t=this,e=function(e,i){t.hierarchical.levelDownstream(e,i)},i=this._getHubSizes(),o=function(o){var n=i[o];if(0===n)return"break";Wy(t.body.nodeIndices,(function(i){var o=t.body.nodes[i];n===t._getActiveEdges(o).length&&t._crawlNetwork(e,i)}))},n=0;n<i.length;++n){if("break"===o(n))break}}},{key:"_determineLevelsCustomCallback",value:function(){var t=this;this._crawlNetwork((function(e,i,o){var n=t.hierarchical.levels[e.id];void 0===n&&(n=t.hierarchical.levels[e.id]=1e5);var r=(Gx.cloneOptions(e,"node"),Gx.cloneOptions(i,"node"),void Gx.cloneOptions(o,"edge"));t.hierarchical.levels[i.id]=n+r})),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_determineLevelsDirected",value:function(){var t,e=this,i=cC(t=this.body.nodeIndices).call(t,(function(t,i){return t.set(i,e.body.nodes[i]),t}),new Ew);"roots"===this.options.hierarchical.shakeTowards?this.hierarchical.levels=function(t){return TC((function(e){var i,o;return EC(i=Yf(o=e.edges).call(o,(function(e){return t.has(e.toId)}))).call(i,(function(t){return t.from===e}))}),(function(t,e){return e<t}),"to",t)}(i):this.hierarchical.levels=function(t){return TC((function(e){var i,o;return EC(i=Yf(o=e.edges).call(o,(function(e){return t.has(e.toId)}))).call(i,(function(t){return t.to===e}))}),(function(t,e){return e>t}),"from",t)}(i),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_generateMap",value:function(){var t=this;this._crawlNetwork((function(e,i){t.hierarchical.levels[i.id]>t.hierarchical.levels[e.id]&&t.hierarchical.addRelation(e.id,i.id)})),this.hierarchical.checkIfTree()}},{key:"_crawlNetwork",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1?arguments[1]:void 0,o={},n=function i(n,r){if(void 0===o[n.id]){var s;t.hierarchical.setTreeIndex(n,r),o[n.id]=!0;for(var a=t._getActiveEdges(n),h=0;h<a.length;h++){var d=a[h];!0===d.connected&&(s=d.toId==n.id?d.from:d.to,n.id!=s.id&&(e(n,s,d),i(s,r)))}}};if(void 0===i)for(var r=0,s=0;s<this.body.nodeIndices.length;s++){var a=this.body.nodeIndices[s];if(void 0===o[a]){var h=this.body.nodes[a];n(h,r),r+=1}}else{var d=this.body.nodes[i];if(void 0===d)return void console.error("Node not found:",i);n(d)}}},{key:"_shiftBlock",value:function(t,e){var i=this,o={};!function t(n){if(!o[n]){o[n]=!0,i.direction.shift(n,e);var r=i.hierarchical.childrenReference[n];if(void 0!==r)for(var s=0;s<r.length;s++)t(r[s])}}(t)}},{key:"_findCommonParent",value:function(t,e){var i=this,o={};return function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var r=0;r<n.length;r++){var s=n[r];e[s]=!0,t(e,s)}}(o,t),function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var r=0;r<n.length;r++){var s=n[r];if(void 0!==e[s])return{foundParent:s,withChild:o};var a=t(e,s);if(null!==a.foundParent)return a}return{foundParent:null,withChild:o}}(o,e)}},{key:"setDirectionStrategy",value:function(){var t="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction;this.direction=t?new gC(this):new yC(this)}},{key:"_getCenterPosition",value:function(t){for(var e=1e9,i=-1e9,o=0;o<t.length;o++){var n=void 0;if(void 0!==t[o].id)n=t[o];else{var r=t[o];n=this.body.nodes[r]}var s=this.direction.getPosition(n);e=Math.min(e,s),i=Math.max(i,s)}return.5*(e+i)}}]),t}();function DC(t,e){var i=void 0!==tu&&oh(t)||t["@@iterator"];if(!i){if(hu(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return BC(t,e);var o=au(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return ja(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return BC(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function BC(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var IC=function(){function t(e,i,o,n){var r,s,a=this;Xl(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.interactionHandler=n,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this._domEventListenerCleanupQueue=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},fo(this.options,this.defaultOptions),this.body.emitter.on("destroy",(function(){a._clean()})),this.body.emitter.on("_dataChanged",Fo(r=this._restore).call(r,this)),this.body.emitter.on("_resetData",Fo(s=this._restore).call(s,this))}return $l(t,[{key:"_restore",value:function(){!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(t,e,i){void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,Ry(this.options,t)),!0===this.options.initiallyActive&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){!0===this.editMode?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},!0===this.guiEnabled){var t,e;this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block";var i=this.selectionHandler.getSelectedNodeCount(),o=this.selectionHandler.getSelectedEdgeCount(),n=i+o,r=this.options.locales[this.options.locale],s=!1;!1!==this.options.addNode&&(this._createAddNodeButton(r),s=!0),!1!==this.options.addEdge&&(!0===s?this._createSeperator(1):s=!0,this._createAddEdgeButton(r)),1===i&&"function"==typeof this.options.editNode?(!0===s?this._createSeperator(2):s=!0,this._createEditNodeButton(r)):1===o&&0===i&&!1!==this.options.editEdge&&(!0===s?this._createSeperator(3):s=!0,this._createEditEdgeButton(r)),0!==n&&(i>0&&!1!==this.options.deleteNode||0===i&&!1!==this.options.deleteEdge)&&(!0===s&&this._createSeperator(4),this._createDeleteButton(r)),this._bindElementEvents(this.closeDiv,Fo(t=this.toggleEditMode).call(t,this)),this._temporaryBindEvent("select",Fo(e=this.showManipulatorToolbar).call(e,this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){var t;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addNode",!0===this.guiEnabled){var e,i=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(i),this._createSeperator(),this._createDescription(i.addDescription||this.options.locales.en.addDescription),this._bindElementEvents(this.closeDiv,Fo(e=this.toggleEditMode).call(e,this))}this._temporaryBindEvent("click",Fo(t=this._performAddNode).call(t,this))}},{key:"editNode",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean();var e=this.selectionHandler.getSelectedNodes()[0];if(void 0!==e){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");if(!0!==e.isCluster){var i=Ry({},e.options,!1);if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(i,(function(e){null!=e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),t.showManipulatorToolbar()}))}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){var t,e,i,o,n;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addEdge",!0===this.guiEnabled){var r,s=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(s),this._createSeperator(),this._createDescription(s.edgeDescription||this.options.locales.en.edgeDescription),this._bindElementEvents(this.closeDiv,Fo(r=this.toggleEditMode).call(r,this))}this._temporaryBindUI("onTouch",Fo(t=this._handleConnect).call(t,this)),this._temporaryBindUI("onDragEnd",Fo(e=this._finishConnect).call(e,this)),this._temporaryBindUI("onDrag",Fo(i=this._dragControlNode).call(i,this)),this._temporaryBindUI("onRelease",Fo(o=this._finishConnect).call(o,this)),this._temporaryBindUI("onDragStart",Fo(n=this._dragStartEdge).call(n,this)),this._temporaryBindUI("onHold",(function(){}))}},{key:"editEdgeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="editEdge","object"!==Qc(this.options.editEdge)||"function"!=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0===this.edgeBeingEditedId)){if(!0===this.guiEnabled){var t,e=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(e),this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindElementEvents(this.closeDiv,Fo(t=this.toggleEditMode).call(t,this))}if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0!==this.edgeBeingEditedId){var i,o,n,r,s=this.body.edges[this.edgeBeingEditedId],a=this._getNewTargetNode(s.from.x,s.from.y),h=this._getNewTargetNode(s.to.x,s.to.y);this.temporaryIds.nodes.push(a.id),this.temporaryIds.nodes.push(h.id),this.body.nodes[a.id]=a,this.body.nodeIndices.push(a.id),this.body.nodes[h.id]=h,this.body.nodeIndices.push(h.id),this._temporaryBindUI("onTouch",Fo(i=this._controlNodeTouch).call(i,this)),this._temporaryBindUI("onTap",(function(){})),this._temporaryBindUI("onHold",(function(){})),this._temporaryBindUI("onDragStart",Fo(o=this._controlNodeDragStart).call(o,this)),this._temporaryBindUI("onDrag",Fo(n=this._controlNodeDrag).call(n,this)),this._temporaryBindUI("onDragEnd",Fo(r=this._controlNodeDragEnd).call(r,this)),this._temporaryBindUI("onMouseMove",(function(){})),this._temporaryBindEvent("beforeDrawing",(function(t){var e=s.edgeType.findBorderPositions(t);!1===a.selected&&(a.x=e.from.x,a.y=e.from.y),!1===h.selected&&(h.x=e.to.x,h.y=e.to.y)})),this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}else{var d=this.body.edges[this.edgeBeingEditedId];this._performEditEdge(d.from.id,d.to.id)}}},{key:"deleteSelected",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="delete";var e=this.selectionHandler.getSelectedNodeIds(),i=this.selectionHandler.getSelectedEdgeIds(),o=void 0;if(e.length>0){for(var n=0;n<e.length;n++)if(!0===this.body.nodes[e[n]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge);if("function"==typeof o){var r={nodes:e,edges:i};if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)");o(r,(function(e){null!=e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),t.body.data.nodes.getDataSet().remove(e.nodes),t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().remove(i),this.body.data.nodes.getDataSet().remove(e),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){var t,e;(void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",!0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",!0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv)&&(this.closeDiv=document.createElement("button"),this.closeDiv.className="vis-close",this.closeDiv.setAttribute("aria-label",null!==(t=null===(e=this.options.locales[this.options.locale])||void 0===e?void 0:e.close)&&void 0!==t?t:this.options.locales.en.close),this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(t,e){var i=Ry({},this.options.controlNodeStyle);i.id="targetNode"+Xx(),i.hidden=!1,i.physics=!1,i.x=t,i.y=e;var o=this.body.functions.createNode(i);return o.shape.boundingBox={left:t,right:t,top:e,bottom:e},o}},{key:"_createEditButton",value:function(){var t;this._clean(),this.manipulationDOM={},Dy(this.editModeDiv);var e=this.options.locales[this.options.locale],i=this._createButton("editMode","vis-edit vis-edit-mode",e.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(i),this._bindElementEvents(i,Fo(t=this.toggleEditMode).call(t,this))}},{key:"_clean",value:function(){this.inMode=!1,!0===this.guiEnabled&&(Dy(this.editModeDiv),Dy(this.manipulationDiv),this._cleanupDOMEventListeners()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanupDOMEventListeners",value:function(){var t,e,i=DC(uf(t=this._domEventListenerCleanupQueue).call(t,0));try{for(i.s();!(e=i.n()).done;){(0,e.value)()}}catch(t){i.e(t)}finally{i.f()}}},{key:"_removeManipulationDOM",value:function(){this._clean(),Dy(this.manipulationDiv),Dy(this.editModeDiv),Dy(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}},{key:"_createAddNodeButton",value:function(t){var e,i=this._createButton("addNode","vis-add",t.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,Fo(e=this.addNodeMode).call(e,this))}},{key:"_createAddEdgeButton",value:function(t){var e,i=this._createButton("addEdge","vis-connect",t.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,Fo(e=this.addEdgeMode).call(e,this))}},{key:"_createEditNodeButton",value:function(t){var e,i=this._createButton("editNode","vis-edit",t.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,Fo(e=this.editNode).call(e,this))}},{key:"_createEditEdgeButton",value:function(t){var e,i=this._createButton("editEdge","vis-edit",t.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,Fo(e=this.editEdgeMode).call(e,this))}},{key:"_createDeleteButton",value:function(t){var e,i;i=this.options.rtl?"vis-delete-rtl":"vis-delete";var o=this._createButton("delete",i,t.del||this.options.locales.en.del);this.manipulationDiv.appendChild(o),this._bindElementEvents(o,Fo(e=this.deleteSelected).call(e,this))}},{key:"_createBackButton",value:function(t){var e,i=this._createButton("back","vis-back",t.back||this.options.locales.en.back);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,Fo(e=this.showManipulatorToolbar).call(e,this))}},{key:"_createButton",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label";return this.manipulationDOM[t+"Div"]=document.createElement("button"),this.manipulationDOM[t+"Div"].className="vis-button "+e,this.manipulationDOM[t+"Label"]=document.createElement("div"),this.manipulationDOM[t+"Label"].className=o,this.manipulationDOM[t+"Label"].innerText=i,this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),this.manipulationDOM[t+"Div"]}},{key:"_createDescription",value:function(t){this.manipulationDOM.descriptionLabel=document.createElement("div"),this.manipulationDOM.descriptionLabel.className="vis-none",this.manipulationDOM.descriptionLabel.innerText=t,this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel)}},{key:"_temporaryBindEvent",value:function(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e}),this.body.emitter.on(t,e)}},{key:"_temporaryBindUI",value:function(t,e){if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+hv(mu(this.body.eventListeners)));this.temporaryUIFunctions[t]=this.body.eventListeners[t],this.body.eventListeners[t]=e}},{key:"_unbindTemporaryUIs",value:function(){for(var t in this.temporaryUIFunctions)Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions,t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],delete this.temporaryUIFunctions[t]);this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var t=0;t<this.temporaryEventFunctions.length;t++){var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction;this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}},{key:"_bindElementEvents",value:function(t,e){var i=new pm(t,{});iE(i,e),this._domEventListenerCleanupQueue.push((function(){i.destroy()}));var o=function(t){var i=t.keyCode,o=t.key;"Enter"!==o&&" "!==o&&13!==i&&32!==i||e()};t.addEventListener("keyup",o,!1),this._domEventListenerCleanupQueue.push((function(){t.removeEventListener("keyup",o,!1)}))}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var t=0;t<this.temporaryIds.edges.length;t++){var e;this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]];var i,o=zp(e=this.body.edgeIndices).call(e,this.temporaryIds.edges[t]);if(-1!==o)uf(i=this.body.edgeIndices).call(i,o,1)}for(var n=0;n<this.temporaryIds.nodes.length;n++){var r;delete this.body.nodes[this.temporaryIds.nodes[n]];var s,a=zp(r=this.body.nodeIndices).call(r,this.temporaryIds.nodes[n]);if(-1!==a)uf(s=this.body.nodeIndices).call(s,a,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(t){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=fo({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(){var t=this.lastTouch,e=this.selectionHandler._pointerToPositionObject(t),i=this.body.nodes[this.temporaryIds.nodes[0]],o=this.body.nodes[this.temporaryIds.nodes[1]],n=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;var r=i.isOverlappingWith(e),s=o.isOverlappingWith(e);!0===r?(this.selectedControlNode=i,n.edgeType.from=i):!0===s&&(this.selectedControlNode=o,n.edgeType.to=o),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(t){this.body.emitter.emit("disablePhysics");var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e);void 0!==this.selectedControlNode?(this.selectedControlNode.x=i.x,this.selectedControlNode.y=i.y):this.interactionHandler.onDrag(t),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId];if(void 0!==this.selectedControlNode){this.selectionHandler.unselectAll();for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--)if(n[s]!==this.selectedControlNode.id){r=this.body.nodes[n[s]];break}if(void 0!==r&&void 0!==this.selectedControlNode)if(!0===r.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var a=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===a.id?this._performEditEdge(r.id,o.to.id):this._performEditEdge(o.from.id,r.id)}else o.updateEdgeType(),this.body.emitter.emit("restorePhysics");this.body.emitter.emit("_redraw")}}},{key:"_handleConnect",value:function(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=fo({},this.body.view.translation),this.interactionHandler.drag.pointer=this.lastTouch,this.interactionHandler.drag.translation=this.lastTouch.translation;var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e);if(void 0!==i)if(!0===i.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var o=this._getNewTargetNode(i.x,i.y);this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id);var n=this.body.functions.createEdge({id:"connectionEdge"+Xx(),from:i.id,to:o.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}});this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),this.temporaryIds.edges.push(n.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){var a;if(-1===zp(a=this.temporaryIds.nodes).call(a,n[s])){r=this.body.nodes[n[s]];break}}if(t.controlEdge={from:o,to:r?r.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragging",t,e),void 0!==this.temporaryIds.nodes[0]){var h=this.body.nodes[this.temporaryIds.nodes[0]];h.x=this.canvas._XconvertDOMtoCanvas(e.x),h.y=this.canvas._YconvertDOMtoCanvas(e.y),this.body.emitter.emit("_redraw")}else this.interactionHandler.onDrag(t)}},{key:"_finishConnect",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){var a;if(-1===zp(a=this.temporaryIds.nodes).call(a,n[s])){r=this.body.nodes[n[s]];break}}this._cleanupTemporaryNodesAndEdges(),void 0!==r&&(!0===r.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[r.id]&&this._performAddEdge(o,r.id)),t.controlEdge={from:o,to:r?r.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragEnd",t,e),this.body.emitter.emit("_redraw")}},{key:"_dragStartEdge",value:function(t){var e=this.lastTouch;this.selectionHandler.generateClickEvent("dragStart",t,e,void 0,!0)}},{key:"_performAddNode",value:function(t){var e=this,i={id:Xx(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"};if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),new Error("The function for add does not support two arguments (data,callback)");this.options.addNode(i,(function(t){null!=t&&"addNode"===e.inMode&&e.body.data.nodes.getDataSet().add(t),e.showManipulatorToolbar()}))}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(t,e){var i=this,o={from:t,to:e};if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(o,(function(t){null!=t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(t,e){var i=this,o={id:this.edgeBeingEditedId,from:t,to:e,label:this.body.data.edges.get(this.edgeBeingEditedId).label},n=this.options.editEdge;if("object"===Qc(n)&&(n=n.editWithoutDrag),"function"==typeof n){if(2!==n.length)throw new Error("The function for edit does not support two arguments (data, callback)");n(o,(function(t){null==t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),i.body.emitter.emit("_redraw"),i.showManipulatorToolbar()):(i.body.data.edges.getDataSet().update(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().update(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),t}(),zC="string",FC="boolean",NC="number",AC="array",RC="object",jC=["arrow","bar","box","circle","crow","curve","diamond","image","inv_curve","inv_triangle","triangle","vee"],LC={borderWidth:{number:NC},borderWidthSelected:{number:NC,undefined:"undefined"},brokenImage:{string:zC,undefined:"undefined"},chosen:{label:{boolean:FC,function:"function"},node:{boolean:FC,function:"function"},__type__:{object:RC,boolean:FC}},color:{border:{string:zC},background:{string:zC},highlight:{border:{string:zC},background:{string:zC},__type__:{object:RC,string:zC}},hover:{border:{string:zC},background:{string:zC},__type__:{object:RC,string:zC}},__type__:{object:RC,string:zC}},opacity:{number:NC,undefined:"undefined"},fixed:{x:{boolean:FC},y:{boolean:FC},__type__:{object:RC,boolean:FC}},font:{align:{string:zC},color:{string:zC},size:{number:NC},face:{string:zC},background:{string:zC},strokeWidth:{number:NC},strokeColor:{string:zC},vadjust:{number:NC},multi:{boolean:FC,string:zC},bold:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},boldital:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},ital:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},mono:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},__type__:{object:RC,string:zC}},group:{string:zC,number:NC,undefined:"undefined"},heightConstraint:{minimum:{number:NC},valign:{string:zC},__type__:{object:RC,boolean:FC,number:NC}},hidden:{boolean:FC},icon:{face:{string:zC},code:{string:zC},size:{number:NC},color:{string:zC},weight:{string:zC,number:NC},__type__:{object:RC}},id:{string:zC,number:NC},image:{selected:{string:zC,undefined:"undefined"},unselected:{string:zC,undefined:"undefined"},__type__:{object:RC,string:zC}},imagePadding:{top:{number:NC},right:{number:NC},bottom:{number:NC},left:{number:NC},__type__:{object:RC,number:NC}},label:{string:zC,undefined:"undefined"},labelHighlightBold:{boolean:FC},level:{number:NC,undefined:"undefined"},margin:{top:{number:NC},right:{number:NC},bottom:{number:NC},left:{number:NC},__type__:{object:RC,number:NC}},mass:{number:NC},physics:{boolean:FC},scaling:{min:{number:NC},max:{number:NC},label:{enabled:{boolean:FC},min:{number:NC},max:{number:NC},maxVisible:{number:NC},drawThreshold:{number:NC},__type__:{object:RC,boolean:FC}},customScalingFunction:{function:"function"},__type__:{object:RC}},shadow:{enabled:{boolean:FC},color:{string:zC},size:{number:NC},x:{number:NC},y:{number:NC},__type__:{object:RC,boolean:FC}},shape:{string:["custom","ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]},ctxRenderer:{function:"function"},shapeProperties:{borderDashes:{boolean:FC,array:AC},borderRadius:{number:NC},interpolation:{boolean:FC},useImageSize:{boolean:FC},useBorderWithImage:{boolean:FC},coordinateOrigin:{string:["center","top-left"]},__type__:{object:RC}},size:{number:NC},title:{string:zC,dom:"dom",undefined:"undefined"},value:{number:NC,undefined:"undefined"},widthConstraint:{minimum:{number:NC},maximum:{number:NC},__type__:{object:RC,boolean:FC,number:NC}},x:{number:NC},y:{number:NC},__type__:{object:RC}},HC={configure:{enabled:{boolean:FC},filter:{boolean:FC,string:zC,array:AC,function:"function"},container:{dom:"dom"},showButton:{boolean:FC},__type__:{object:RC,boolean:FC,string:zC,array:AC,function:"function"}},edges:{arrows:{to:{enabled:{boolean:FC},scaleFactor:{number:NC},type:{string:jC},imageHeight:{number:NC},imageWidth:{number:NC},src:{string:zC},__type__:{object:RC,boolean:FC}},middle:{enabled:{boolean:FC},scaleFactor:{number:NC},type:{string:jC},imageWidth:{number:NC},imageHeight:{number:NC},src:{string:zC},__type__:{object:RC,boolean:FC}},from:{enabled:{boolean:FC},scaleFactor:{number:NC},type:{string:jC},imageWidth:{number:NC},imageHeight:{number:NC},src:{string:zC},__type__:{object:RC,boolean:FC}},__type__:{string:["from","to","middle"],object:RC}},endPointOffset:{from:{number:NC},to:{number:NC},__type__:{object:RC,number:NC}},arrowStrikethrough:{boolean:FC},background:{enabled:{boolean:FC},color:{string:zC},size:{number:NC},dashes:{boolean:FC,array:AC},__type__:{object:RC,boolean:FC}},chosen:{label:{boolean:FC,function:"function"},edge:{boolean:FC,function:"function"},__type__:{object:RC,boolean:FC}},color:{color:{string:zC},highlight:{string:zC},hover:{string:zC},inherit:{string:["from","to","both"],boolean:FC},opacity:{number:NC},__type__:{object:RC,string:zC}},dashes:{boolean:FC,array:AC},font:{color:{string:zC},size:{number:NC},face:{string:zC},background:{string:zC},strokeWidth:{number:NC},strokeColor:{string:zC},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:NC},multi:{boolean:FC,string:zC},bold:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},boldital:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},ital:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},mono:{color:{string:zC},size:{number:NC},face:{string:zC},mod:{string:zC},vadjust:{number:NC},__type__:{object:RC,string:zC}},__type__:{object:RC,string:zC}},hidden:{boolean:FC},hoverWidth:{function:"function",number:NC},label:{string:zC,undefined:"undefined"},labelHighlightBold:{boolean:FC},length:{number:NC,undefined:"undefined"},physics:{boolean:FC},scaling:{min:{number:NC},max:{number:NC},label:{enabled:{boolean:FC},min:{number:NC},max:{number:NC},maxVisible:{number:NC},drawThreshold:{number:NC},__type__:{object:RC,boolean:FC}},customScalingFunction:{function:"function"},__type__:{object:RC}},selectionWidth:{function:"function",number:NC},selfReferenceSize:{number:NC},selfReference:{size:{number:NC},angle:{number:NC},renderBehindTheNode:{boolean:FC},__type__:{object:RC}},shadow:{enabled:{boolean:FC},color:{string:zC},size:{number:NC},x:{number:NC},y:{number:NC},__type__:{object:RC,boolean:FC}},smooth:{enabled:{boolean:FC},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:NC},forceDirection:{string:["horizontal","vertical","none"],boolean:FC},__type__:{object:RC,boolean:FC}},title:{string:zC,undefined:"undefined"},width:{number:NC},widthConstraint:{maximum:{number:NC},__type__:{object:RC,boolean:FC,number:NC}},value:{number:NC,undefined:"undefined"},__type__:{object:RC}},groups:{useDefaultGroups:{boolean:FC},__any__:LC,__type__:{object:RC}},interaction:{dragNodes:{boolean:FC},dragView:{boolean:FC},hideEdgesOnDrag:{boolean:FC},hideEdgesOnZoom:{boolean:FC},hideNodesOnDrag:{boolean:FC},hover:{boolean:FC},keyboard:{enabled:{boolean:FC},speed:{x:{number:NC},y:{number:NC},zoom:{number:NC},__type__:{object:RC}},bindToWindow:{boolean:FC},autoFocus:{boolean:FC},__type__:{object:RC,boolean:FC}},multiselect:{boolean:FC},navigationButtons:{boolean:FC},selectable:{boolean:FC},selectConnectedEdges:{boolean:FC},hoverConnectedEdges:{boolean:FC},tooltipDelay:{number:NC},zoomView:{boolean:FC},zoomSpeed:{number:NC},__type__:{object:RC}},layout:{randomSeed:{undefined:"undefined",number:NC,string:zC},improvedLayout:{boolean:FC},clusterThreshold:{number:NC},hierarchical:{enabled:{boolean:FC},levelSeparation:{number:NC},nodeSpacing:{number:NC},treeSpacing:{number:NC},blockShifting:{boolean:FC},edgeMinimization:{boolean:FC},parentCentralization:{boolean:FC},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},shakeTowards:{string:["leaves","roots"]},__type__:{object:RC,boolean:FC}},__type__:{object:RC}},manipulation:{enabled:{boolean:FC},initiallyActive:{boolean:FC},addNode:{boolean:FC,function:"function"},addEdge:{boolean:FC,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:RC,boolean:FC,function:"function"}},deleteNode:{boolean:FC,function:"function"},deleteEdge:{boolean:FC,function:"function"},controlNodeStyle:LC,__type__:{object:RC,boolean:FC}},nodes:LC,physics:{enabled:{boolean:FC},barnesHut:{theta:{number:NC},gravitationalConstant:{number:NC},centralGravity:{number:NC},springLength:{number:NC},springConstant:{number:NC},damping:{number:NC},avoidOverlap:{number:NC},__type__:{object:RC}},forceAtlas2Based:{theta:{number:NC},gravitationalConstant:{number:NC},centralGravity:{number:NC},springLength:{number:NC},springConstant:{number:NC},damping:{number:NC},avoidOverlap:{number:NC},__type__:{object:RC}},repulsion:{centralGravity:{number:NC},springLength:{number:NC},springConstant:{number:NC},nodeDistance:{number:NC},damping:{number:NC},__type__:{object:RC}},hierarchicalRepulsion:{centralGravity:{number:NC},springLength:{number:NC},springConstant:{number:NC},nodeDistance:{number:NC},damping:{number:NC},avoidOverlap:{number:NC},__type__:{object:RC}},maxVelocity:{number:NC},minVelocity:{number:NC},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:FC},iterations:{number:NC},updateInterval:{number:NC},onlyDynamicEdges:{boolean:FC},fit:{boolean:FC},__type__:{object:RC,boolean:FC}},timestep:{number:NC},adaptiveTimestep:{boolean:FC},wind:{x:{number:NC},y:{number:NC},__type__:{object:RC}},__type__:{object:RC,boolean:FC}},autoResize:{boolean:FC},clickToUse:{boolean:FC},locale:{string:zC},locales:{__any__:{any:"any"},__type__:{object:RC}},height:{string:zC},width:{string:zC},__type__:{object:RC}},WC={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},opacity:[0,0,1,.1],fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],interpolation:!0,useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},endPointOffset:{from:[0,-10,10,1],to:[0,-10,10,1]},arrowStrikethrough:!0,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],selfReference:{size:[20,0,200,1],angle:[Math.PI/2,-6*Math.PI,6*Math.PI,Math.PI/8],renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"],shakeTowards:["leaves","roots"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0,autoFocus:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0,zoomSpeed:[1,.1,2,.1]},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{theta:[.5,.1,1,.05],gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{theta:[.5,.1,1,.05],gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01],wind:{x:[0,-10,10,.1],y:[0,-10,10,.1]}}},VC=function(t,e,i){var o;return!(!zf(t).call(t,"physics")||!zf(o=WC.physics.solver).call(o,e)||i.physics.solver===e||"wind"===e)},qC=Object.freeze({__proto__:null,configuratorHideOption:VC,allOptions:HC,configureOptions:WC}),UC=function(){function t(){Xl(this,t)}return $l(t,[{key:"getDistances",value:function(t,e,i){for(var o={},n=t.edges,r=0;r<e.length;r++){var s={};o[e[r]]=s;for(var a=0;a<e.length;a++)s[e[a]]=r==a?0:1e9}for(var h=0;h<i.length;h++){var d=n[i[h]];!0===d.connected&&void 0!==o[d.fromId]&&void 0!==o[d.toId]&&(o[d.fromId][d.toId]=1,o[d.toId][d.fromId]=1)}for(var l=e.length,c=0;c<l;c++)for(var u=e[c],f=o[u],p=0;p<l-1;p++)for(var v=e[p],g=o[v],y=p+1;y<l;y++){var m=e[y],b=o[m],w=Math.min(g[m],g[u]+f[m]);g[m]=w,b[v]=w}return o}}]),t}(),YC=function(){function t(e,i,o){Xl(this,t),this.body=e,this.springLength=i,this.springConstant=o,this.distanceSolver=new UC}return $l(t,[{key:"setOptions",value:function(t){t&&(t.springLength&&(this.springLength=t.springLength),t.springConstant&&(this.springConstant=t.springConstant))}},{key:"solve",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.distanceSolver.getDistances(this.body,t,e);this._createL_matrix(o),this._createK_matrix(o),this._createE_matrix();for(var n=.01,r=1,s=0,a=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),h=5,d=1e9,l=0,c=0,u=0,f=0,p=0;d>n&&s<a;){s+=1;var v=this._getHighestEnergyNode(i),g=$c(v,4);for(l=g[0],d=g[1],c=g[2],u=g[3],f=d,p=0;f>r&&p<h;){p+=1,this._moveNode(l,c,u);var y=this._getEnergy(l),m=$c(y,3);f=m[0],c=m[1],u=m[2]}}}},{key:"_getHighestEnergyNode",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,s=0,a=0;a<e.length;a++){var h=e[a];if(!0!==i[h].predefinedPosition||!0===i[h].isCluster&&!0===t||!0!==i[h].options.fixed.x||!0!==i[h].options.fixed.y){var d=$c(this._getEnergy(h),3),l=d[0],c=d[1],u=d[2];o<l&&(o=l,n=h,r=c,s=u)}}return[n,o,r,s]}},{key:"_getEnergy",value:function(t){var e=$c(this.E_sums[t],2),i=e[0],o=e[1];return[Math.sqrt(Math.pow(i,2)+Math.pow(o,2)),i,o]}},{key:"_moveNode",value:function(t,e,i){for(var o=this.body.nodeIndices,n=this.body.nodes,r=0,s=0,a=0,h=n[t].x,d=n[t].y,l=this.K_matrix[t],c=this.L_matrix[t],u=0;u<o.length;u++){var f=o[u];if(f!==t){var p=n[f].x,v=n[f].y,g=l[f],y=c[f],m=1/Math.pow(Math.pow(h-p,2)+Math.pow(d-v,2),1.5);r+=g*(1-y*Math.pow(d-v,2)*m),s+=g*(y*(h-p)*(d-v)*m),a+=g*(1-y*Math.pow(h-p,2)*m)}}var b=(e/r+i/s)/(s/r-a/s),w=-(s*b+e)/r;n[t].x+=w,n[t].y+=b,this._updateE_matrix(t)}},{key:"_createL_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springLength;this.L_matrix=[];for(var o=0;o<e.length;o++){this.L_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]}}},{key:"_createK_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springConstant;this.K_matrix=[];for(var o=0;o<e.length;o++){this.K_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)}}},{key:"_createE_matrix",value:function(){var t=this.body.nodeIndices,e=this.body.nodes;this.E_matrix={},this.E_sums={};for(var i=0;i<t.length;i++)this.E_matrix[t[i]]=[];for(var o=0;o<t.length;o++){for(var n=t[o],r=e[n].x,s=e[n].y,a=0,h=0,d=o;d<t.length;d++){var l=t[d];if(l!==n){var c=e[l].x,u=e[l].y,f=1/Math.sqrt(Math.pow(r-c,2)+Math.pow(s-u,2));this.E_matrix[n][d]=[this.K_matrix[n][l]*(r-c-this.L_matrix[n][l]*(r-c)*f),this.K_matrix[n][l]*(s-u-this.L_matrix[n][l]*(s-u)*f)],this.E_matrix[l][o]=this.E_matrix[n][d],a+=this.E_matrix[n][d][0],h+=this.E_matrix[n][d][1]}}this.E_sums[n]=[a,h]}}},{key:"_updateE_matrix",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=this.E_matrix[t],n=this.K_matrix[t],r=this.L_matrix[t],s=i[t].x,a=i[t].y,h=0,d=0,l=0;l<e.length;l++){var c=e[l];if(c!==t){var u=o[l],f=u[0],p=u[1],v=i[c].x,g=i[c].y,y=1/Math.sqrt(Math.pow(s-v,2)+Math.pow(a-g,2)),m=n[c]*(s-v-r[c]*(s-v)*y),b=n[c]*(a-g-r[c]*(a-g)*y);o[l]=[m,b],h+=m,d+=b;var w=this.E_sums[c];w[0]+=m-f,w[1]+=b-p}}this.E_sums[t]=[h,d]}}]),t}();function XC(t,e,i){var o,n,r,s,a=this;if(!(this instanceof XC))throw new SyntaxError("Constructor must be called with the new operator");this.options={},this.defaultOptions={locale:"en",locales:Jm,clickToUse:!1},fo(this.options,this.defaultOptions),this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:Fo(o=this.on).call(o,this),off:Fo(n=this.off).call(n,this),emit:Fo(r=this.emit).call(r,this),once:Fo(s=this.once).call(s,this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}},selectionBox:{show:!1,position:{start:{x:0,y:0},end:{x:0,y:0}}}},this.bindEventListeners(),this.images=new eb((function(){return a.body.emitter.emit("_requestRedraw")})),this.groups=new Ow,this.canvas=new nE(this.body),this.selectionHandler=new cO(this.body,this.canvas),this.interactionHandler=new cE(this.body,this.canvas,this.selectionHandler),this.view=new sE(this.body,this.canvas),this.renderer=new tE(this.body,this.canvas),this.physics=new Lx(this.body),this.layoutEngine=new PC(this.body),this.clustering=new Zx(this.body),this.manipulation=new IC(this.body,this.canvas,this.selectionHandler,this.interactionHandler),this.nodesHandler=new B_(this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new Tx(this.body,this.images,this.groups),this.body.modules.kamadaKawai=new YC(this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(i),this.setData(e)}Vo(XC.prototype),XC.prototype.setOptions=function(t){var e=this;if(null===t&&(t=void 0),void 0!==t){!0===ym.validate(t,HC)&&console.error("%cErrors have been found in the supplied options object.",gm);if(Ny(["locale","locales","clickToUse"],this.options,t),void 0!==t.locale&&(t.locale=function(t,e){try{var i=$c(e.split(/[-_ /]/,2),2),o=i[0],n=i[1],r=null!=o?o.toLowerCase():null,s=null!=n?n.toUpperCase():null;if(r&&s){var a,h=r+"-"+s;if(Object.prototype.hasOwnProperty.call(t,h))return h;console.warn(su(a="Unknown variant ".concat(s," of language ")).call(a,r,"."))}if(r){var d=r;if(Object.prototype.hasOwnProperty.call(t,d))return d;console.warn("Unknown language ".concat(r))}return console.warn("Unknown locale ".concat(e,", falling back to English.")),"en"}catch(t){return console.error(t),console.warn("Unexpected error while normalizing locale ".concat(e,", falling back to English.")),"en"}}(t.locales||this.options.locales,t.locale)),t=this.layoutEngine.setOptions(t.layout,t),this.canvas.setOptions(t),this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),this.edgesHandler.setOptions(t.edges),this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),this.interactionHandler.setOptions(t.interaction),this.renderer.setOptions(t.interaction),this.selectionHandler.setOptions(t.interaction),void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),"configure"in t&&(this.configurator||(this.configurator=new fm(this,this.body.container,WC,this.canvas.pixelRatio,VC)),this.configurator.setOptions(t.configure)),this.configurator&&!0===this.configurator.options.enabled){var i={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};Ry(i.nodes,this.nodesHandler.options),Ry(i.edges,this.edgesHandler.options),Ry(i.layout,this.layoutEngine.options),Ry(i.interaction,this.selectionHandler.options),Ry(i.interaction,this.renderer.options),Ry(i.interaction,this.interactionHandler.options),Ry(i.manipulation,this.manipulation.options),Ry(i.physics,this.physics.options),Ry(i.global,this.canvas.options),Ry(i.global,this.options),this.configurator.setModuleOptions(i)}void 0!==t.clickToUse?!0===t.clickToUse?void 0===this.activator&&(this.activator=new um(this.canvas.frame),this.activator.on("change",(function(){e.body.emitter.emit("activate")}))):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},XC.prototype._updateVisibleIndices=function(){var t=this.body.nodes,e=this.body.edges;for(var i in this.body.nodeIndices=[],this.body.edgeIndices=[],t)Object.prototype.hasOwnProperty.call(t,i)&&(this.clustering._isClusteredNode(i)||!1!==t[i].options.hidden||this.body.nodeIndices.push(t[i].id));for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=e[o],r=t[n.fromId],s=t[n.toId],a=void 0!==r&&void 0!==s;!this.clustering._isClusteredEdge(o)&&!1===n.options.hidden&&a&&!1===r.options.hidden&&!1===s.options.hidden&&this.body.edgeIndices.push(n.id)}},XC.prototype.bindEventListeners=function(){var t=this;this.body.emitter.on("_dataChanged",(function(){t.edgesHandler._updateState(),t.body.emitter.emit("_dataUpdated")})),this.body.emitter.on("_dataUpdated",(function(){t.clustering._updateState(),t._updateVisibleIndices(),t._updateValueRange(t.body.nodes),t._updateValueRange(t.body.edges),t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")}))},XC.prototype.setData=function(t){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');if(this.setOptions(t&&t.options),t&&t.dot){console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");var e=Km(t.dot);this.setData(e)}else if(t&&t.gephi){console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");var i=Zm(t.gephi);this.setData(i)}else this.nodesHandler.setData(t&&t.nodes,!0),this.edgesHandler.setData(t&&t.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},XC.prototype.destroy=function(){for(var t in this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&delete this.body.nodes[t];for(var e in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,e)&&delete this.body.edges[e];Dy(this.body.container)},XC.prototype._updateValueRange=function(t){var e,i=void 0,o=void 0,n=0;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var r=t[e].getValue();void 0!==r&&(i=void 0===i?r:Math.min(r,i),o=void 0===o?r:Math.max(r,o),n+=r)}if(void 0!==i&&void 0!==o)for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e].setValueRange(i,o,n)},XC.prototype.isActive=function(){return!this.activator||this.activator.active},XC.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},XC.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},XC.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},XC.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},XC.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},XC.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},XC.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},XC.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},XC.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},XC.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},XC.prototype.updateClusteredNode=function(){return this.clustering.updateClusteredNode.apply(this.clustering,arguments)},XC.prototype.getClusteredEdges=function(){return this.clustering.getClusteredEdges.apply(this.clustering,arguments)},XC.prototype.getBaseEdge=function(){return this.clustering.getBaseEdge.apply(this.clustering,arguments)},XC.prototype.getBaseEdges=function(){return this.clustering.getBaseEdges.apply(this.clustering,arguments)},XC.prototype.updateEdge=function(){return this.clustering.updateEdge.apply(this.clustering,arguments)},XC.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},XC.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},XC.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},XC.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},XC.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},XC.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},XC.prototype.editNodeMode=function(){return console.warn("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},XC.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},XC.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},XC.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},XC.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},XC.prototype.getPosition=function(){return this.nodesHandler.getPosition.apply(this.nodesHandler,arguments)},XC.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},XC.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},XC.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},XC.prototype.getConnectedNodes=function(t){return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},XC.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},XC.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},XC.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},XC.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},XC.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},XC.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)},XC.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler,arguments)},XC.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler,arguments)},XC.prototype.getNodeAt=function(){var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},XC.prototype.getEdgeAt=function(){var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},XC.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},XC.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},XC.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler),this.redraw()},XC.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},XC.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},XC.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},XC.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},XC.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},XC.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},XC.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},XC.prototype.getOptionsFromConfigurator=function(){var t={};return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),t};var GC=Km;t.Network=XC,t.NetworkImages=eb,t.networkDOTParser=$m,t.networkGephiParser=Qm,t.networkOptions=qC,t.parseDOTNetwork=GC,t.parseGephiNetwork=Zm,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=vis-network.min.js.map


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./BlazorVisNetwork.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clusterOutliers": () => (/* binding */ clusterOutliers),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "getSelectedEdges": () => (/* binding */ getSelectedEdges),
/* harmony export */   "getSelectedNodes": () => (/* binding */ getSelectedNodes),
/* harmony export */   "getSelection": () => (/* binding */ getSelection),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "parseDOTNetwork": () => (/* binding */ parseDOTNetwork),
/* harmony export */   "redraw": () => (/* binding */ redraw),
/* harmony export */   "selectEdges": () => (/* binding */ selectEdges),
/* harmony export */   "selectNodes": () => (/* binding */ selectNodes),
/* harmony export */   "setData": () => (/* binding */ setData),
/* harmony export */   "setOptions": () => (/* binding */ setOptions),
/* harmony export */   "setSelection": () => (/* binding */ setSelection),
/* harmony export */   "setSize": () => (/* binding */ setSize),
/* harmony export */   "unselectAll": () => (/* binding */ unselectAll)
/* harmony export */ });
/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vis-network */ "./node_modules/vis-network/peer/umd/vis-network.min.js");
/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vis_network__WEBPACK_IMPORTED_MODULE_0__);

var _networks = [];
function getNetworkById(id, unobstrusive) {
    if (unobstrusive === void 0) { unobstrusive = false; }
    var networkHolder = _networks.find(function (e) { return e.id === id; });
    if (!networkHolder) {
        if (unobstrusive) {
            return null;
        }
        throw new Error("Could not find the network with id: '" + id + "', network.length: " + _networks.length);
    }
    else if (!networkHolder.network) {
        if (unobstrusive) {
            return null;
        }
        throw new Error("network is null in networkHolder for network with id:  " + id);
    }
    return networkHolder.network;
}
function create(element, component, options, data) {
    console.log('VisNetwork.Blazor: [create]', element, options, data);
    var oldNetwork = getNetworkById(element.id, true);
    if (oldNetwork !== null) {
        _networks.splice(_networks.findIndex(function (item) { return item.id === element.id; }), 1);
        oldNetwork.destroy();
        console.log('VisNetwork.Blazor: [destroy] old network destroyed.');
    }
    var control = new vis_network__WEBPACK_IMPORTED_MODULE_0__.Network(element, data, options);
    console.log('VisNetwork.Blazor: [create] network created.', control);
    _networks.push({ id: element.id, network: control });
}
function setData(element, data) {
    console.log('VisNetwork.Blazor: [setData].', data);
    var network = getNetworkById(element.id);
    network.setData(data);
}
function setOptions(element, options) {
    console.log('VisNetwork.Blazor: [setOptions].', options);
    var network = getNetworkById(element.id);
    network.setOptions(options);
}
function setSize(element, width, height) {
    console.log('VisNetwork.Blazor: [setSize].', element, width, height);
    var network = getNetworkById(element.id);
    network.setSize(width, height);
}
function destroy(element) {
    console.log('VisNetwork.Blazor: [destroy] ', element);
    var network = getNetworkById(element.id);
    if (network !== null && network !== undefined) {
        network.destroy();
        _networks.splice(_networks.findIndex(function (item) { return item.id === element.id; }), 1);
        console.log('VisNetwork.Blazor: [destroy] done.');
    }
}
function on(element, component, eventName) {
    console.log('VisNetwork.Blazor: [on] ', element, eventName);
    var network = getNetworkById(element.id);
    var listener = function (e) {
        console.log('VisNetwork.Blazor: [on] ' + eventName + ' fired.', e);
        if (eventName === 'afterDrawing' ||
            eventName === 'beforeDrawing') {
            var data = { canvasDataUrl: '' };
            var canvasContext = e;
            component.invokeMethodAsync("EventCallback", eventName, JSON.stringify(data));
        }
        else {
            var params;
            try {
                params = JSON.stringify(e);
            }
            catch (error) {
                var seen_1 = [];
                params = JSON.stringify(e, function (key, val) {
                    if (val != null && typeof val == 'object') {
                        if (seen_1.indexOf(val) >= 0) {
                            return;
                        }
                        seen_1.push(val);
                    }
                    return val;
                });
            }
            component.invokeMethodAsync("EventCallback", eventName, params);
        }
    };
    network.on(eventName, listener);
}
function off(element, component, eventName) {
    console.log('VisNetwork.Blazor: [off] ', element, eventName);
    var network = getNetworkById(element.id);
    network.off(eventName);
}
function redraw(element) {
    console.log('VisNetwork.Blazor: [redraw] ', element);
    var network = getNetworkById(element.id);
    network.redraw();
}
function clusterOutliers(element) {
    console.log('VisNetwork.Blazor: [clusterOutliers] ', element);
    var network = getNetworkById(element.id);
    network.clusterOutliers();
}
function getSelectedNodes(element) {
    console.log('VisNetwork.Blazor: [getSelectedNodes] ', element);
    var network = getNetworkById(element.id);
    return network.getSelectedNodes();
}
function selectNodes(element, nodeIds, higlightEdges) {
    console.log('VisNetwork.Blazor: [selectNodes] ', element, nodeIds, higlightEdges);
    var network = getNetworkById(element.id);
    network.selectNodes(nodeIds, higlightEdges);
}
function getSelectedEdges(element) {
    console.log('VisNetwork.Blazor: [getSelectedEdges] ', element);
    var network = getNetworkById(element.id);
    return network.getSelectedEdges();
}
function selectEdges(element, edgeIds) {
    console.log('VisNetwork.Blazor: [selectEdges] ', element, edgeIds);
    var network = getNetworkById(element.id);
    network.selectEdges(edgeIds);
}
function getSelection(element) {
    console.log('VisNetwork.Blazor: [getSelection] ', element);
    var network = getNetworkById(element.id);
    return network.getSelection();
}
function setSelection(element, selection, options) {
    console.log('VisNetwork.Blazor: [setSelection] ', element, selection, options);
    var network = getNetworkById(element.id);
    network.setSelection(selection, options);
}
function unselectAll(element) {
    console.log('VisNetwork.Blazor: [unselectAll] ', element);
    var network = getNetworkById(element.id);
    network.unselectAll();
}
function parseDOTNetwork(dot) {
    console.log('VisNetwork.Blazor: [parseDOTNetwork before]', dot);
    var parsedData = vis_network__WEBPACK_IMPORTED_MODULE_0__.network.convertDot(dot);
    console.log('VisNetwork.Blazor: [parseDOTNetwork after]', parsedData);
    return JSON.stringify(parsedData);
}

})();

var __webpack_exports__clusterOutliers = __webpack_exports__.clusterOutliers;
var __webpack_exports__create = __webpack_exports__.create;
var __webpack_exports__destroy = __webpack_exports__.destroy;
var __webpack_exports__getSelectedEdges = __webpack_exports__.getSelectedEdges;
var __webpack_exports__getSelectedNodes = __webpack_exports__.getSelectedNodes;
var __webpack_exports__getSelection = __webpack_exports__.getSelection;
var __webpack_exports__off = __webpack_exports__.off;
var __webpack_exports__on = __webpack_exports__.on;
var __webpack_exports__parseDOTNetwork = __webpack_exports__.parseDOTNetwork;
var __webpack_exports__redraw = __webpack_exports__.redraw;
var __webpack_exports__selectEdges = __webpack_exports__.selectEdges;
var __webpack_exports__selectNodes = __webpack_exports__.selectNodes;
var __webpack_exports__setData = __webpack_exports__.setData;
var __webpack_exports__setOptions = __webpack_exports__.setOptions;
var __webpack_exports__setSelection = __webpack_exports__.setSelection;
var __webpack_exports__setSize = __webpack_exports__.setSize;
var __webpack_exports__unselectAll = __webpack_exports__.unselectAll;
export { __webpack_exports__clusterOutliers as clusterOutliers, __webpack_exports__create as create, __webpack_exports__destroy as destroy, __webpack_exports__getSelectedEdges as getSelectedEdges, __webpack_exports__getSelectedNodes as getSelectedNodes, __webpack_exports__getSelection as getSelection, __webpack_exports__off as off, __webpack_exports__on as on, __webpack_exports__parseDOTNetwork as parseDOTNetwork, __webpack_exports__redraw as redraw, __webpack_exports__selectEdges as selectEdges, __webpack_exports__selectNodes as selectNodes, __webpack_exports__setData as setData, __webpack_exports__setOptions as setOptions, __webpack_exports__setSelection as setSelection, __webpack_exports__setSize as setSize, __webpack_exports__unselectAll as unselectAll };

//# sourceMappingURL=BlazorVisNetwork.js.map