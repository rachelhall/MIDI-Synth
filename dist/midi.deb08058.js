// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/tone/build/Tone.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tone=e():t.Tone=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=148)}([function(t,e,i){"use strict";i.r(e),function(t){var s=i(93),n=function(){if(!(this instanceof n))throw new Error("constructor needs to be called with the 'new' keyword")};
/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */n.prototype.toString=function(){for(var t in n){var e=t[0].match(/^[A-Z]$/),i=n[t]===this.constructor;if(n.isFunction(n[t])&&e&&i)return t}return"Tone"},n.prototype.dispose=function(){return this},n.prototype.set=function(t,e){if(n.isString(t)){var i={};i[t]=e,t=i}t:for(var s in t){e=t[s];var o=this;if(-1!==s.indexOf(".")){for(var a=s.split("."),r=0;r<a.length-1;r++)if((o=o[a[r]])instanceof n){a.splice(0,r+1);var l=a.join(".");o.set(l,e);continue t}s=a[a.length-1]}var u=o[s];n.isUndef(u)||(n.Signal&&u instanceof n.Signal||n.Param&&u instanceof n.Param?u.value!==e&&(u.value=e):u instanceof AudioParam?u.value!==e&&(u.value=e):n.TimeBase&&u instanceof n.TimeBase?o[s]=e:u instanceof n?u.set(e):u!==e&&(o[s]=e))}return this},n.prototype.get=function(t){n.isUndef(t)?t=this._collectDefaults(this.constructor):n.isString(t)&&(t=[t]);for(var e={},i=0;i<t.length;i++){var s=t[i],o=this,a=e;if(-1!==s.indexOf(".")){for(var r=s.split("."),l=0;l<r.length-1;l++){var u=r[l];a[u]=a[u]||{},a=a[u],o=o[u]}s=r[r.length-1]}var d=o[s];n.isObject(t[s])?a[s]=d.get():n.Signal&&d instanceof n.Signal?a[s]=d.value:n.Param&&d instanceof n.Param?a[s]=d.value:d instanceof AudioParam?a[s]=d.value:d instanceof n?a[s]=d.get():!n.isFunction(d)&&n.isDefined(d)&&(a[s]=d)}return e},n.prototype._collectDefaults=function(t){var e=[];if(n.isDefined(t.defaults)&&(e=Object.keys(t.defaults)),n.isDefined(t._super))for(var i=this._collectDefaults(t._super),s=0;s<i.length;s++)-1===e.indexOf(i[s])&&e.push(i[s]);return e},n.defaults=function(t,e,i){var s={};if(1===t.length&&n.isObject(t[0]))s=t[0];else for(var o=0;o<e.length;o++)s[e[o]]=t[o];return n.isDefined(i.defaults)?n.defaultArg(s,i.defaults):n.isObject(i)?n.defaultArg(s,i):s},n.defaultArg=function(t,e){if(n.isObject(t)&&n.isObject(e)){var i={};for(var s in t)i[s]=n.defaultArg(e[s],t[s]);for(var o in e)i[o]=n.defaultArg(t[o],e[o]);return i}return n.isUndef(t)?e:t},n.prototype.log=function(){if(this.debug||this.toString()===n.global.TONE_DEBUG_CLASS){var t=Array.from(arguments);t.unshift(this.toString()+":"),console.log.apply(void 0,t)}},n.prototype.assert=function(t,e){if(!t)throw new Error(e)},n.connectSeries=function(){for(var t=arguments[0],e=1;e<arguments.length;e++){var i=arguments[e];n.connect(t,i),t=i}return n},n.connect=function(t,e,i,s){for(;n.isDefined(e.input);)n.isArray(e.input)?(s=n.defaultArg(s,0),e=e.input[s],s=0):e.input&&(e=e.input);return e instanceof AudioParam?t.connect(e,i):e instanceof AudioNode&&t.connect(e,i,s),n},n.disconnect=function(t,e,i,s){if(e){for(var o=!1;!o;)n.isArray(e.input)?(n.isDefined(s)?n.disconnect(t,e.input[s],i):e.input.forEach(function(e){try{n.disconnect(t,e,i)}catch(t){}}),o=!0):e.input?e=e.input:o=!0;e instanceof AudioParam?t.disconnect(e,i):e instanceof AudioNode&&t.disconnect(e,i,s)}else t.disconnect();return n},n.isUndef=function(t){return void 0===t},n.isDefined=function(t){return!n.isUndef(t)},n.isFunction=function(t){return"function"==typeof t},n.isNumber=function(t){return"number"==typeof t},n.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},n.isBoolean=function(t){return"boolean"==typeof t},n.isArray=function(t){return Array.isArray(t)},n.isString=function(t){return"string"==typeof t},n.isNote=function(t){return n.isString(t)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)},n.noOp=function(){},n.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},n.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},n.State={Started:"started",Stopped:"stopped",Paused:"paused"},n.global=n.isUndef(t)?window:t,n.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},n.dbToGain=function(t){return Math.pow(10,t/20)},n.gainToDb=function(t){return Math.log(t)/Math.LN10*20},n.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},n.prototype.now=function(){return n.context.now()},n.now=function(){return n.context.now()},n.prototype.immediate=function(){return n.context.currentTime},n.immediate=function(){return n.context.currentTime},n.extend=function(t,e){function i(){}n.isUndef(e)&&(e=n),i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t,t._super=e},n._audioContext=null,n.start=function(){return n.context.resume()},Object.defineProperty(n,"context",{get:function(){return n._audioContext},set:function(t){t.isContext?n._audioContext=t:n._audioContext=new n.Context(t),n.Context.emit("init",n._audioContext)}}),Object.defineProperty(n.prototype,"context",{get:function(){return n.context}}),n.setContext=function(t){n.context=t},Object.defineProperty(n.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(n.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(n,"supported",{get:function(){var t=n.global.hasOwnProperty("AudioContext")||n.global.hasOwnProperty("webkitAudioContext"),e=n.global.hasOwnProperty("Promise");return t&&e}}),Object.defineProperty(n,"initialized",{get:function(){return Boolean(n.context)}}),n.getContext=function(t){if(n.initialized)t(n.context);else{var e=function(){t(n.context),n.Context.off("init",e)};n.Context.on("init",e)}return n},n.version=s.a,e.default=n}.call(this,i(147))},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20);if(s.default.supported){var n=new OfflineAudioContext(2,1,44100),o=n.createGain(),a=n.createGain();if(o.connect(a)!==a){var r=AudioNode.prototype.connect;AudioNode.prototype.connect=function(){return r.apply(this,arguments),arguments[0]}}}s.default.AudioNode=function(){s.default.call(this);var t=s.default.defaults(arguments,["context"],{context:s.default.context});this._context=t.context},s.default.extend(s.default.AudioNode),Object.defineProperty(s.default.AudioNode.prototype,"context",{get:function(){return this._context}}),s.default.AudioNode.prototype.createInsOuts=function(t,e){1===t?this.input=this.context.createGain():t>1&&(this.input=new Array(t)),1===e?this.output=this.context.createGain():e>1&&(this.output=new Array(e))},Object.defineProperty(s.default.AudioNode.prototype,"channelCount",{get:function(){return this.output.channelCount},set:function(t){return this.output.channelCount=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelCountMode",{get:function(){return this.output.channelCountMode},set:function(t){return this.output.channelCountMode=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelInterpretation",{get:function(){return this.output.channelInterpretation},set:function(t){return this.output.channelInterpretation=t}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfInputs",{get:function(){return this.input?s.default.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfOutputs",{get:function(){return this.output?s.default.isArray(this.output)?this.output.length:1:0}}),s.default.AudioNode.prototype.connect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].connect(t,0,i)):s.default.connect(this.output,t,e,i),this},s.default.AudioNode.prototype.disconnect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].disconnect(t,0,i)):s.default.disconnect(this.output,t,e,i),this},s.default.AudioNode.prototype.chain=function(){var t=Array.from(arguments);return t.unshift(this),s.default.connectSeries.apply(void 0,t),this},s.default.AudioNode.prototype.fan=function(){for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},s.default.AudioNode.prototype.dispose=function(){return s.default.isDefined(this.input)&&(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),s.default.isDefined(this.output)&&(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this._context=null,this};e.default=s.default.AudioNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(14),i(30),i(44),i(20),i(3);if(s.default.supported&&!s.default.global.AudioContext.prototype.createConstantSource){var n=function(t){this.context=t;for(var e=t.createBuffer(1,128,t.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=1;this._bufferSource=t.createBufferSource(),this._bufferSource.channelCount=1,this._bufferSource.channelCountMode="explicit",this._bufferSource.buffer=e,this._bufferSource.loop=!0;var n=this._output=t.createGain();this.offset=n.gain,this._bufferSource.connect(n)};n.prototype.start=function(t){return this._bufferSource.start(t),this},n.prototype.stop=function(t){return this._bufferSource.stop(t),this},n.prototype.connect=function(){return this._output.connect.apply(this._output,arguments),this},n.prototype.disconnect=function(){return this._output.disconnect.apply(this._output,arguments),this},AudioContext.prototype.createConstantSource=function(){return new n(this)},s.default.Context.prototype.createConstantSource=function(){return new n(this)}}s.default.Signal=function(){var t=s.default.defaults(arguments,["value","units"],s.default.Signal);s.default.Param.call(this,t),this._constantSource=this.context.createConstantSource(),this._constantSource.start(0),this._param=this._constantSource.offset,this.value=t.value,this.output=this._constantSource,this.input=this._param=this.output.offset},s.default.extend(s.default.Signal,s.default.Param),s.default.Signal.defaults={value:0,units:s.default.Type.Default,convert:!0},s.default.Signal.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Signal.prototype.disconnect=s.default.SignalBase.prototype.disconnect,s.default.Signal.prototype.getValueAtTime=function(t){return this._param.getValueAtTime?this._param.getValueAtTime(t):s.default.Param.prototype.getValueAtTime.call(this,t)},s.default.Signal.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._constantSource.stop(),this._constantSource.disconnect(),this._constantSource=null,this};e.default=s.default.Signal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(4),i(1);s.default.Gain=function(){var t=s.default.defaults(arguments,["gain","units"],s.default.Gain);s.default.AudioNode.call(this,t),this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new s.default.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},s.default.extend(s.default.Gain,s.default.AudioNode),s.default.Gain.defaults={gain:1,convert:!0},s.default.Gain.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},e.default=s.default.Gain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63),i(46),i(45),i(20);s.default.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Gain:"gain",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},s.default.prototype.toSeconds=function(t){return s.default.isNumber(t)?t:s.default.isUndef(t)?this.now():s.default.isString(t)||s.default.isObject(t)?new s.default.Time(t).toSeconds():t instanceof s.default.TimeBase?t.toSeconds():void 0},s.default.prototype.toFrequency=function(t){return s.default.isNumber(t)?t:s.default.isString(t)||s.default.isUndef(t)||s.default.isObject(t)?new s.default.Frequency(t).valueOf():t instanceof s.default.TimeBase?t.toFrequency():void 0},s.default.prototype.toTicks=function(t){return s.default.isNumber(t)||s.default.isString(t)||s.default.isObject(t)?new s.default.TransportTime(t).toTicks():s.default.isUndef(t)?s.default.Transport.ticks:t instanceof s.default.TimeBase?t.toTicks():void 0},e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(3),i(30);s.default.Multiply=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new s.default.Gain,this._param=this.input[1]=this.output.gain,this.value=s.default.defaultArg(t,0)},s.default.extend(s.default.Multiply,s.default.Signal),s.default.Multiply.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},e.default=s.default.Multiply},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(27),i(40),i(4),i(34),i(2),i(1);s.default.Source=function(t){t=s.default.defaultArg(t,s.default.Source.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.memory=100,this._synced=!1,this._scheduled=[],this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=t.mute},s.default.extend(s.default.Source,s.default.AudioNode),s.default.Source.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Source.prototype,"state",{get:function(){return this._synced?s.default.Transport.state===s.default.State.Started?this._state.getValueAtTime(s.default.Transport.seconds):s.default.State.Stopped:this._state.getValueAtTime(this.now())}}),Object.defineProperty(s.default.Source.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Source.prototype._start=s.default.noOp,s.default.Source.prototype.restart=s.default.noOp,s.default.Source.prototype._stop=s.default.noOp,s.default.Source.prototype.start=function(t,e,i){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._state.getValueAtTime(t)===s.default.State.Started)this._state.cancel(t),this._state.setStateAtTime(s.default.State.Started,t),this.restart(t,e,i);else if(this._state.setStateAtTime(s.default.State.Started,t),this._synced){var n=this._state.get(t);n.offset=s.default.defaultArg(e,0),n.duration=i;var o=s.default.Transport.schedule(function(t){this._start(t,e,i)}.bind(this),t);this._scheduled.push(o),s.default.Transport.state===s.default.State.Started&&this._syncedStart(this.now(),s.default.Transport.seconds)}else this._start.apply(this,arguments);return this},s.default.Source.prototype.stop=function(t){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._synced){var e=s.default.Transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}else this._stop.apply(this,arguments);return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this},s.default.Source.prototype.sync=function(){return this._synced=!0,this._syncedStart=function(t,e){if(e>0){var i=this._state.get(e);if(i&&i.state===s.default.State.Started&&i.time!==e){var n,o=e-this.toSeconds(i.time);i.duration&&(n=this.toSeconds(i.duration)-o),this._start(t,this.toSeconds(i.offset)+o,n)}}}.bind(this),this._syncedStop=function(t){var e=s.default.Transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)===s.default.State.Started&&this._stop(t)}.bind(this),s.default.Transport.on("start loopStart",this._syncedStart),s.default.Transport.on("stop pause loopEnd",this._syncedStop),this},s.default.Source.prototype.unsync=function(){this._synced&&(s.default.Transport.off("stop pause loopEnd",this._syncedStop),s.default.Transport.off("start loopStart",this._syncedStart)),this._synced=!1;for(var t=0;t<this._scheduled.length;t++){var e=this._scheduled[t];s.default.Transport.clear(e)}return this._scheduled=[],this._state.cancel(0),this},s.default.Source.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this.unsync(),this._scheduled=null,this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this._state.dispose(),this._state=null},e.default=s.default.Source},function(t,e,i){"use strict";i.r(e);var s=i(0);i(30),i(44);if(s.default.supported&&!s.default.global.AudioContext.prototype._native_createWaveShaper){var n=navigator.userAgent.toLowerCase();if(n.includes("safari")&&!n.includes("chrome")){var o=function(t){for(var e in this._internalNode=this.input=this.output=t._native_createWaveShaper(),this._curve=null,this._internalNode)this._defineProperty(this._internalNode,e)};Object.defineProperty(o.prototype,"curve",{get:function(){return this._curve},set:function(t){this._curve=t;var e=new Float32Array(t.length+1);e.set(t,1),e[0]=t[0],this._internalNode.curve=e}}),o.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return"function"==typeof t[e]?t[e].bind(t):t[e]},set:function(i){t[e]=i}})},s.default.global.AudioContext.prototype._native_createWaveShaper=s.default.global.AudioContext.prototype.createWaveShaper,s.default.global.AudioContext.prototype.createWaveShaper=function(){return new o(this)}}}s.default.WaveShaper=function(t,e){s.default.SignalBase.call(this),this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(t)?this.curve=t:isFinite(t)||s.default.isUndef(t)?this._curve=new Float32Array(s.default.defaultArg(t,1024)):s.default.isFunction(t)&&(this._curve=new Float32Array(s.default.defaultArg(e,1024)),this.setMap(t))},s.default.extend(s.default.WaveShaper,s.default.SignalBase),s.default.WaveShaper.prototype.setMap=function(t){for(var e=new Array(this._curve.length),i=0,s=this._curve.length;i<s;i++){var n=i/(s-1)*2-1;e[i]=t(n,i)}return this.curve=e,this},Object.defineProperty(s.default.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(t){this._curve=new Float32Array(t),this._shaper.curve=this._curve}}),Object.defineProperty(s.default.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){if(!["none","2x","4x"].includes(t))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=t}}),s.default.WaveShaper.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this};e.default=s.default.WaveShaper},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(1);s.default.Effect=function(){var t=s.default.defaults(arguments,["wet"],s.default.Effect);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this.effectSend=new s.default.Gain,this.effectReturn=new s.default.Gain,s.default.connect(this.input,this._dryWet.a),s.default.connect(this.input,this.effectSend),this.effectReturn.connect(this._dryWet.b),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.Effect,s.default.AudioNode),s.default.Effect.defaults={wet:1},s.default.Effect.prototype.connectEffect=function(t){return this.effectSend.chain(t,this.effectReturn),this},s.default.Effect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this.effectSend.dispose(),this.effectSend=null,this.effectReturn.dispose(),this.effectReturn=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.Effect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(1);s.default.Filter=function(){var t=s.default.defaults(arguments,["frequency","type","rolloff"],s.default.Filter);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._filters=[],this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(0,s.default.Type.Cents),this.gain=new s.default.Signal({value:t.gain,convert:!0,type:s.default.Type.Decibels}),this.Q=new s.default.Signal(t.Q),this._type=t.type,this._rolloff=t.rolloff,this.rolloff=t.rolloff,this._readOnly(["detune","frequency","gain","Q"])},s.default.extend(s.default.Filter,s.default.AudioNode),s.default.Filter.defaults={type:"lowpass",frequency:350,rolloff:-12,Q:1,gain:0},Object.defineProperty(s.default.Filter.prototype,"type",{get:function(){return this._type},set:function(t){if(-1===["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t))throw new TypeError("Tone.Filter: invalid type "+t);this._type=t;for(var e=0;e<this._filters.length;e++)this._filters[e].type=t}}),Object.defineProperty(s.default.Filter.prototype,"rolloff",{get:function(){return this._rolloff},set:function(t){t=parseInt(t,10);var e=[-12,-24,-48,-96].indexOf(t);if(-1===e)throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");e+=1,this._rolloff=t,this.input.disconnect();for(var i=0;i<this._filters.length;i++)this._filters[i].disconnect(),this._filters[i]=null;this._filters=new Array(e);for(var n=0;n<e;n++){var o=this.context.createBiquadFilter();o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[n]=o}var a=[this.input].concat(this._filters).concat([this.output]);s.default.connectSeries.apply(s.default,a)}}),s.default.Filter.prototype.getFrequencyResponse=function(t){t=s.default.defaultArg(t,128);for(var e=new Float32Array(t).map(function(){return 1}),i=new Float32Array(t),n=0;n<t;n++){var o=19980*Math.pow(n/t,2)+20;i[n]=o}var a=new Float32Array(t),r=new Float32Array(t);return this._filters.forEach(function(){var t=this.context.createBiquadFilter();t.type=this._type,t.Q.value=this.Q.value,t.frequency.value=this.frequency.value,t.gain.value=this.gain.value,t.getFrequencyResponse(i,a,r),a.forEach(function(t,i){e[i]*=t})}.bind(this)),e},s.default.Filter.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this);for(var t=0;t<this._filters.length;t++)this._filters[t].disconnect(),this._filters[t]=null;return this._filters=null,this._writable(["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.frequency=null,this.Q=null,this.detune.dispose(),this.detune=null,this.gain.dispose(),this.gain=null,this},e.default=s.default.Filter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.Merge=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(t,0),this._merger=this.output=this.context.createChannelMerger(t);for(var e=0;e<t;e++)this.input[e]=new s.default.Gain,this.input[e].connect(this._merger,0,e),this.input[e].channelCount=1,this.input[e].channelCountMode="explicit";this.left=this.input[0],this.right=this.input[1]},s.default.extend(s.default.Merge,s.default.AudioNode),s.default.Merge.prototype.dispose=function(){return this.input.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this.left=null,this.right=null,this._merger.disconnect(),this._merger=null,this},e.default=s.default.Merge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(35),i(4);s.default.supported&&(AudioBuffer.prototype.copyToChannel||(AudioBuffer.prototype.copyToChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<s.length;n++)s[n+i]=t[n]},AudioBuffer.prototype.copyFromChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<t.length;n++)t[n]=s[n+i]})),s.default.Buffer=function(){var t=s.default.defaults(arguments,["url","onload","onerror"],s.default.Buffer);s.default.call(this),this._buffer=null,this._reversed=t.reverse,this._xhr=null,this.onload=s.default.noOp,t.url instanceof AudioBuffer||t.url instanceof s.default.Buffer?(this.set(t.url),this.loaded||(this.onload=t.onload)):s.default.isString(t.url)&&this.load(t.url).then(t.onload).catch(t.onerror)},s.default.extend(s.default.Buffer),s.default.Buffer.defaults={url:void 0,reverse:!1,onload:s.default.noOp,onerror:s.default.noOp},s.default.Buffer.prototype.set=function(t){return t instanceof s.default.Buffer?t.loaded?this._buffer=t.get():t.onload=function(){this.set(t),this.onload(this)}.bind(this):this._buffer=t,this._reversed&&this._reverse(),this},s.default.Buffer.prototype.get=function(){return this._buffer},s.default.Buffer.prototype.load=function(t,e,i){return new Promise(function(n,o){this._xhr=s.default.Buffer.load(t,function(t){this._xhr=null,this.set(t),n(this),this.onload(this),e&&e(this)}.bind(this),function(t){this._xhr=null,o(t),i&&i(t)}.bind(this))}.bind(this))},s.default.Buffer.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._buffer=null,this._xhr&&(s.default.Buffer._removeFromDownloadQueue(this._xhr),this._xhr.abort(),this._xhr=null),this},Object.defineProperty(s.default.Buffer.prototype,"loaded",{get:function(){return this.length>0}}),Object.defineProperty(s.default.Buffer.prototype,"duration",{get:function(){return this._buffer?this._buffer.duration:0}}),Object.defineProperty(s.default.Buffer.prototype,"length",{get:function(){return this._buffer?this._buffer.length:0}}),Object.defineProperty(s.default.Buffer.prototype,"numberOfChannels",{get:function(){return this._buffer?this._buffer.numberOfChannels:0}}),s.default.Buffer.prototype.fromArray=function(t){var e=t[0].length>0,i=e?t.length:1,s=e?t[0].length:t.length,n=this.context.createBuffer(i,s,this.context.sampleRate);e||1!==i||(t=[t]);for(var o=0;o<i;o++)n.copyToChannel(t[o],o);return this._buffer=n,this},s.default.Buffer.prototype.toMono=function(t){if(s.default.isNumber(t))this.fromArray(this.toArray(t));else{for(var e=new Float32Array(this.length),i=this.numberOfChannels,n=0;n<i;n++)for(var o=this.toArray(n),a=0;a<o.length;a++)e[a]+=o[a];e=e.map(function(t){return t/i}),this.fromArray(e)}return this},s.default.Buffer.prototype.toArray=function(t){if(s.default.isNumber(t))return this.getChannelData(t);if(1===this.numberOfChannels)return this.toArray(0);for(var e=[],i=0;i<this.numberOfChannels;i++)e[i]=this.getChannelData(i);return e},s.default.Buffer.prototype.getChannelData=function(t){return this._buffer.getChannelData(t)},s.default.Buffer.prototype.slice=function(t,e){e=s.default.defaultArg(e,this.duration);for(var i=Math.floor(this.context.sampleRate*this.toSeconds(t)),n=Math.floor(this.context.sampleRate*this.toSeconds(e)),o=[],a=0;a<this.numberOfChannels;a++)o[a]=this.toArray(a).slice(i,n);return(new s.default.Buffer).fromArray(o)},s.default.Buffer.prototype._reverse=function(){if(this.loaded)for(var t=0;t<this.numberOfChannels;t++)Array.prototype.reverse.call(this.getChannelData(t));return this},Object.defineProperty(s.default.Buffer.prototype,"reverse",{get:function(){return this._reversed},set:function(t){this._reversed!==t&&(this._reversed=t,this._reverse())}}),s.default.Emitter.mixin(s.default.Buffer),s.default.Buffer._downloadQueue=[],s.default.Buffer.baseUrl="",s.default.Buffer.fromArray=function(t){return(new s.default.Buffer).fromArray(t)},s.default.Buffer.fromUrl=function(t){var e=new s.default.Buffer;return e.load(t).then(function(){return e})},s.default.Buffer._removeFromDownloadQueue=function(t){var e=s.default.Buffer._downloadQueue.indexOf(t);-1!==e&&s.default.Buffer._downloadQueue.splice(e,1)},s.default.Buffer.load=function(t,e,i){e=s.default.defaultArg(e,s.default.noOp);var n=t.match(/\[(.+\|?)+\]$/);if(n){for(var o=n[1].split("|"),a=o[0],r=0;r<o.length;r++)if(s.default.Buffer.supportsType(o[r])){a=o[r];break}t=t.replace(n[0],a)}function l(t){if(s.default.Buffer._removeFromDownloadQueue(d),s.default.Buffer.emit("error",t),!i)throw t;i(t)}function u(){for(var t=0,e=0;e<s.default.Buffer._downloadQueue.length;e++)t+=s.default.Buffer._downloadQueue[e].progress;s.default.Buffer.emit("progress",t/s.default.Buffer._downloadQueue.length)}var d=new XMLHttpRequest;return d.open("GET",s.default.Buffer.baseUrl+t,!0),d.responseType="arraybuffer",d.progress=0,s.default.Buffer._downloadQueue.push(d),d.addEventListener("load",function(){200===d.status?s.default.context.decodeAudioData(d.response).then(function(t){d.progress=1,u(),e(t),s.default.Buffer._removeFromDownloadQueue(d),0===s.default.Buffer._downloadQueue.length&&s.default.Buffer.emit("load")}).catch(function(){s.default.Buffer._removeFromDownloadQueue(d),l("Tone.Buffer: could not decode audio data: "+t)}):l("Tone.Buffer: could not locate file: "+t)}),d.addEventListener("error",l),d.addEventListener("progress",function(t){t.lengthComputable&&(d.progress=t.loaded/t.total*.95,u())}),d.send(),d},s.default.Buffer.cancelDownloads=function(){return s.default.Buffer._downloadQueue.slice().forEach(function(t){s.default.Buffer._removeFromDownloadQueue(t),t.abort()}),s.default.Buffer},s.default.Buffer.supportsType=function(t){var e=t.split(".");return e=e[e.length-1],""!==document.createElement("audio").canPlayType("audio/"+e)},s.default.loaded=function(){var t,e;function i(){s.default.Buffer.off("load",t),s.default.Buffer.off("error",e)}return new Promise(function(i,n){t=function(){i()},e=function(){n()},s.default.Buffer.on("load",t),s.default.Buffer.on("error",e)}).then(i).catch(function(t){throw i(),new Error(t)})};e.default=s.default.Buffer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(17),i(26),i(1),i(2),i(22),i(4),i(28);s.default.LFO=function(){var t=s.default.defaults(arguments,["frequency","min","max"],s.default.LFO);s.default.AudioNode.call(this),this._oscillator=new s.default.Oscillator({frequency:t.frequency,type:t.type}),this.frequency=this._oscillator.frequency,this.amplitude=this._oscillator.volume,this.amplitude.units=s.default.Type.NormalRange,this.amplitude.value=t.amplitude,this._stoppedSignal=new s.default.Signal(0,s.default.Type.AudioRange),this._zeros=new s.default.Zero,this._stoppedValue=0,this._a2g=new s.default.AudioToGain,this._scaler=this.output=new s.default.Scale(t.min,t.max),this._units=s.default.Type.Default,this.units=t.units,this._oscillator.chain(this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),this._readOnly(["amplitude","frequency"]),this.phase=t.phase},s.default.extend(s.default.LFO,s.default.AudioNode),s.default.LFO.defaults={type:"sine",min:0,max:1,phase:0,frequency:"4n",amplitude:1,units:s.default.Type.Default},s.default.LFO.prototype.start=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this},s.default.LFO.prototype.stop=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this},s.default.LFO.prototype.sync=function(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this},s.default.LFO.prototype.unsync=function(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this},Object.defineProperty(s.default.LFO.prototype,"min",{get:function(){return this._toUnits(this._scaler.min)},set:function(t){t=this._fromUnits(t),this._scaler.min=t}}),Object.defineProperty(s.default.LFO.prototype,"max",{get:function(){return this._toUnits(this._scaler.max)},set:function(t){t=this._fromUnits(t),this._scaler.max=t}}),Object.defineProperty(s.default.LFO.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"units",{get:function(){return this._units},set:function(t){var e=this.min,i=this.max;this._units=t,this.min=e,this.max=i}}),Object.defineProperty(s.default.LFO.prototype,"state",{get:function(){return this._oscillator.state}}),s.default.LFO.prototype.connect=function(t){return t.constructor!==s.default.Signal&&t.constructor!==s.default.Param||(this.convert=t.convert,this.units=t.units),s.default.SignalBase.prototype.connect.apply(this,arguments),this},s.default.LFO.prototype._fromUnits=s.default.Param.prototype._fromUnits,s.default.LFO.prototype._toUnits=s.default.Param.prototype._toUnits,s.default.LFO.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["amplitude","frequency"]),this._oscillator.dispose(),this._oscillator=null,this._stoppedSignal.dispose(),this._stoppedSignal=null,this._zeros.dispose(),this._zeros=null,this._scaler.dispose(),this._scaler=null,this._a2g.dispose(),this._a2g=null,this.frequency=null,this.amplitude=null,this},e.default=s.default.LFO},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(90),i(2),i(3);s.default.Subtract=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new s.default.Gain,this._neg=new s.default.Negate,this._param=this.input[1]=new s.default.Signal(t),this._param.chain(this._neg,this._sum)},s.default.extend(s.default.Subtract,s.default.Signal),s.default.Subtract.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this},e.default=s.default.Subtract},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(1),i(24);s.default.Param=function(){var t=s.default.defaults(arguments,["param","units","convert"],s.default.Param);s.default.AudioNode.call(this,t),this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._events=new s.default.Timeline(1e3),s.default.isDefined(t.value)&&this._param&&this.setValueAtTime(t.value,0)},s.default.extend(s.default.Param,s.default.AudioNode),s.default.Param.defaults={units:s.default.Type.Default,convert:!0,param:void 0},Object.defineProperty(s.default.Param.prototype,"value",{get:function(){var t=this.now();return this._toUnits(this.getValueAtTime(t))},set:function(t){this._initialValue=this._fromUnits(t),this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}}),Object.defineProperty(s.default.Param.prototype,"minValue",{get:function(){return this.units===s.default.Type.Time||this.units===s.default.Type.Frequency||this.units===s.default.Type.NormalRange||this.units===s.default.Type.Positive||this.units===s.default.Type.BPM?0:this.units===s.default.Type.AudioRange?-1:this.units===s.default.Type.Decibels?-1/0:this._param.minValue}}),Object.defineProperty(s.default.Param.prototype,"maxValue",{get:function(){return this.units===s.default.Type.NormalRange||this.units===s.default.Type.AudioRange?1:this._param.maxValue}}),s.default.Param.prototype._fromUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert)||this.overridden)return t;switch(this.units){case s.default.Type.Time:return this.toSeconds(t);case s.default.Type.Frequency:return this.toFrequency(t);case s.default.Type.Decibels:return s.default.dbToGain(t);case s.default.Type.NormalRange:return Math.min(Math.max(t,0),1);case s.default.Type.AudioRange:return Math.min(Math.max(t,-1),1);case s.default.Type.Positive:return Math.max(t,0);default:return t}},s.default.Param.prototype._toUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert))return t;switch(this.units){case s.default.Type.Decibels:return s.default.gainToDb(t);default:return t}},s.default.Param.prototype._minOutput=1e-5,s.default.Param.AutomationType={Linear:"linearRampToValueAtTime",Exponential:"exponentialRampToValueAtTime",Target:"setTargetAtTime",SetValue:"setValueAtTime",Cancel:"cancelScheduledValues"},s.default.Param.prototype.setValueAtTime=function(t,e){return e=this.toSeconds(e),t=this._fromUnits(t),this._events.add({type:s.default.Param.AutomationType.SetValue,value:t,time:e}),this.log(s.default.Param.AutomationType.SetValue,t,e),this._param.setValueAtTime(t,e),this},s.default.Param.prototype.getValueAtTime=function(t){t=this.toSeconds(t);var e=this._events.getAfter(t),i=this._events.get(t),n=s.default.defaultArg(this._initialValue,this._param.defaultValue),o=n;if(null===i)o=n;else if(i.type===s.default.Param.AutomationType.Target){var a,r=this._events.getBefore(i.time);a=null===r?n:r.value,o=this._exponentialApproach(i.time,a,i.value,i.constant,t)}else o=null===e?i.value:e.type===s.default.Param.AutomationType.Linear?this._linearInterpolate(i.time,i.value,e.time,e.value,t):e.type===s.default.Param.AutomationType.Exponential?this._exponentialInterpolate(i.time,i.value,e.time,e.value,t):i.value;return o},s.default.Param.prototype.setRampPoint=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),0===e&&(e=this._minOutput),this.setValueAtTime(this._toUnits(e),t),this},s.default.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Linear,value:t,time:e}),this.log(s.default.Param.AutomationType.Linear,t,e),this._param.linearRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Exponential,time:e,value:t}),this.log(s.default.Param.AutomationType.Exponential,t,e),this._param.exponentialRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.linearRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.targetRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialApproachValueAtTime(t,i,e),this},s.default.Param.prototype.exponentialApproachValueAtTime=function(t,e,i){var s=Math.log(this.toSeconds(i)+1)/Math.log(200);return e=this.toSeconds(e),this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+.9*i),this.linearRampToValueAtTime(t,e+i),this},s.default.Param.prototype.setTargetAtTime=function(t,e,i){if(t=this._fromUnits(t),i<=0)throw new Error("timeConstant must be greater than 0");return e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Target,value:t,time:e,constant:i}),this.log(s.default.Param.AutomationType.Target,t,e,i),this._param.setTargetAtTime(t,e,i),this},s.default.Param.prototype.setValueCurveAtTime=function(t,e,i,n){n=s.default.defaultArg(n,1),i=this.toSeconds(i),e=this.toSeconds(e),this.setValueAtTime(t[0]*n,e);for(var o=i/(t.length-1),a=1;a<t.length;a++)this.linearRampToValueAtTime(t[a]*n,e+a*o);return this},s.default.Param.prototype.cancelScheduledValues=function(t){return t=this.toSeconds(t),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(s.default.Param.AutomationType.Cancel,t),this},s.default.Param.prototype.cancelAndHoldAtTime=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);this.log("cancelAndHoldAtTime",t,"value="+e),this._param.cancelScheduledValues(t);var i=this._events.get(t),n=this._events.getAfter(t);return i&&i.time===t?n?this._events.cancel(n.time):this._events.cancel(t+this.sampleTime):n&&(this._events.cancel(n.time),n.type===s.default.Param.AutomationType.Linear?this.linearRampToValueAtTime(e,t):n.type===s.default.Param.AutomationType.Exponential&&this.exponentialRampToValueAtTime(e,t)),this._events.add({type:s.default.Param.AutomationType.SetValue,value:e,time:t}),this._param.setValueAtTime(e,t),this},s.default.Param.prototype.rampTo=function(t,e,i){return e=s.default.defaultArg(e,.1),this.units===s.default.Type.Frequency||this.units===s.default.Type.BPM||this.units===s.default.Type.Decibels?this.exponentialRampTo(t,e,i):this.linearRampTo(t,e,i),this},s.default.Param.prototype._exponentialApproach=function(t,e,i,s,n){return i+(e-i)*Math.exp(-(n-t)/s)},s.default.Param.prototype._linearInterpolate=function(t,e,i,s,n){return e+(n-t)/(i-t)*(s-e)},s.default.Param.prototype._exponentialInterpolate=function(t,e,i,s,n){return e*Math.pow(s/e,(n-t)/(i-t))},s.default.Param.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._param=null,this._events=null,this},e.default=s.default.Param},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(19),i(10),i(23);s.default.StereoEffect=function(){s.default.AudioNode.call(this);var t=s.default.defaults(arguments,["wet"],s.default.Effect);this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this._split=new s.default.Split,this.effectSendL=this._split.left,this.effectSendR=this._split.right,this._merge=new s.default.Merge,this.effectReturnL=this._merge.left,this.effectReturnR=this._merge.right,s.default.connect(this.input,this._split),s.default.connect(this.input,this._dryWet,0,0),this._merge.connect(this._dryWet,0,1),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.StereoEffect,s.default.Effect),s.default.StereoEffect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this._split.dispose(),this._split=null,this._merge.dispose(),this._merge=null,this.effectSendL=null,this.effectSendR=null,this.effectReturnL=null,this.effectReturnR=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.StereoEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(83),i(4),i(24),i(35),i(3),i(81),i(80),i(56);s.default.Transport=function(){s.default.Emitter.call(this),s.default.getContext(function(){this.loop=!1,this._loopStart=0,this._loopEnd=0,this._ppq=n.defaults.PPQ,this._clock=new s.default.Clock({callback:this._processTick.bind(this),frequency:0}),this._bindClockEvents(),this.bpm=this._clock.frequency,this.bpm._toUnits=this._toUnits.bind(this),this.bpm._fromUnits=this._fromUnits.bind(this),this.bpm.units=s.default.Type.BPM,this.bpm.value=n.defaults.bpm,this._readOnly("bpm"),this._timeSignature=n.defaults.timeSignature,this._scheduledEvents={},this._timeline=new s.default.Timeline,this._repeatedEvents=new s.default.IntervalTimeline,this._syncedSignals=[],this._swingTicks=n.defaults.PPQ/2,this._swingAmount=0,this.context.transport=this}.bind(this))},s.default.extend(s.default.Transport,s.default.Emitter),s.default.Transport.defaults={bpm:120,swing:0,swingSubdivision:"8n",timeSignature:4,loopStart:0,loopEnd:"4m",PPQ:192},s.default.Transport.prototype.isTransport=!0,s.default.Transport.prototype._processTick=function(t,e){if(this._swingAmount>0&&e%this._ppq!=0&&e%(2*this._swingTicks)!=0){var i=e%(2*this._swingTicks)/(2*this._swingTicks),n=Math.sin(i*Math.PI)*this._swingAmount;t+=s.default.Ticks(2*this._swingTicks/3).toSeconds()*n}this.loop&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._timeline.forEachAtTime(e,function(e){e.invoke(t)})},s.default.Transport.prototype.schedule=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.scheduleRepeat=function(t,e,i,n){var o=new s.default.TransportRepeatEvent(this,{callback:t,interval:s.default.Time(e),time:s.default.TransportTime(i),duration:s.default.Time(s.default.defaultArg(n,1/0))});return this._addEvent(o,this._repeatedEvents)},s.default.Transport.prototype.scheduleOnce=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t,once:!0});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.clear=function(t){if(this._scheduledEvents.hasOwnProperty(t)){var e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this},s.default.Transport.prototype._addEvent=function(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id},s.default.Transport.prototype.cancel=function(t){return t=s.default.defaultArg(t,0),t=this.toTicks(t),this._timeline.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this._repeatedEvents.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this},s.default.Transport.prototype._bindClockEvents=function(){this._clock.on("start",function(t,e){e=s.default.Ticks(e).toSeconds(),this.emit("start",t,e)}.bind(this)),this._clock.on("stop",function(t){this.emit("stop",t)}.bind(this)),this._clock.on("pause",function(t){this.emit("pause",t)}.bind(this))},Object.defineProperty(s.default.Transport.prototype,"state",{get:function(){return this._clock.getStateAtTime(this.now())}}),s.default.Transport.prototype.start=function(t,e){return s.default.isDefined(e)&&(e=this.toTicks(e)),this._clock.start(t,e),this},s.default.Transport.prototype.stop=function(t){return this._clock.stop(t),this},s.default.Transport.prototype.pause=function(t){return this._clock.pause(t),this},s.default.Transport.prototype.toggle=function(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!==s.default.State.Started?this.start(t):this.stop(t),this},Object.defineProperty(s.default.Transport.prototype,"timeSignature",{get:function(){return this._timeSignature},set:function(t){s.default.isArray(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}}),Object.defineProperty(s.default.Transport.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t)}}),s.default.Transport.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Transport.prototype,"swing",{get:function(){return this._swingAmount},set:function(t){this._swingAmount=t}}),Object.defineProperty(s.default.Transport.prototype,"swingSubdivision",{get:function(){return s.default.Ticks(this._swingTicks).toNotation()},set:function(t){this._swingTicks=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"position",{get:function(){var t=this.now(),e=this._clock.getTicksAtTime(t);return s.default.Ticks(e).toBarsBeatsSixteenths()},set:function(t){var e=this.toTicks(t);this.ticks=e}}),Object.defineProperty(s.default.Transport.prototype,"seconds",{get:function(){return this._clock.seconds},set:function(t){var e=this.now(),i=this.bpm.timeToTicks(t,e);this.ticks=i}}),Object.defineProperty(s.default.Transport.prototype,"progress",{get:function(){if(this.loop){var t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}}),Object.defineProperty(s.default.Transport.prototype,"ticks",{get:function(){return this._clock.ticks},set:function(t){if(this._clock.ticks!==t){var e=this.now();this.state===s.default.State.Started?(this.emit("stop",e),this._clock.setTicksAtTime(t,e),this.emit("start",e,this.seconds)):this._clock.setTicksAtTime(t,e)}}}),s.default.Transport.prototype.getTicksAtTime=function(t){return Math.round(this._clock.getTicksAtTime(t))},s.default.Transport.prototype.getSecondsAtTime=function(t){return this._clock.getSecondsAtTime(t)},Object.defineProperty(s.default.Transport.prototype,"PPQ",{get:function(){return this._ppq},set:function(t){var e=this.bpm.value;this._ppq=t,this.bpm.value=e}}),s.default.Transport.prototype._fromUnits=function(t){return 1/(60/t/this.PPQ)},s.default.Transport.prototype._toUnits=function(t){return t/this.PPQ*60},s.default.Transport.prototype.nextSubdivision=function(t){if(t=this.toTicks(t),this.state!==s.default.State.Started)return 0;var e=this.now(),i=t-this.getTicksAtTime(e)%t;return this._clock.nextTickTime(i,e)},s.default.Transport.prototype.syncSignal=function(t,e){if(!e){var i=this.now();e=0!==t.getValueAtTime(i)?t.getValueAtTime(i)/this.bpm.getValueAtTime(i):0}var n=new s.default.Gain(e);return this.bpm.chain(n,t._param),this._syncedSignals.push({ratio:n,signal:t,initial:t.value}),t.value=0,this},s.default.Transport.prototype.unsyncSignal=function(t){for(var e=this._syncedSignals.length-1;e>=0;e--){var i=this._syncedSignals[e];i.signal===t&&(i.ratio.dispose(),i.signal.value=i.initial,this._syncedSignals.splice(e,1))}return this},s.default.Transport.prototype.dispose=function(){return s.default.Emitter.prototype.dispose.call(this),this._clock.dispose(),this._clock=null,this._writable("bpm"),this.bpm=null,this._timeline.dispose(),this._timeline=null,this._repeatedEvents.dispose(),this._repeatedEvents=null,this};var n=s.default.Transport;s.default.Transport=new n,s.default.Context.on("init",function(t){t.transport&&t.transport.isTransport?s.default.Transport=t.transport:s.default.Transport=new n}),s.default.Context.on("close",function(t){t.transport&&t.transport.isTransport&&t.transport.dispose()}),e.default=s.default.Transport},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(6),i(16),i(64);s.default.Oscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.Oscillator);s.default.Source.call(this,t),this._oscillator=null,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._wave=null,this._partials=t.partials,this._partialCount=t.partialCount,this._phase=t.phase,this._type=t.type,t.partialCount&&t.type!==s.default.Oscillator.Type.Custom&&(this._type=this.baseType+t.partialCount.toString()),this.phase=this._phase,this._readOnly(["frequency","detune"])},s.default.extend(s.default.Oscillator,s.default.Source),s.default.Oscillator.defaults={type:"sine",frequency:440,detune:0,phase:0,partials:[],partialCount:0},s.default.Oscillator.Type={Sine:"sine",Triangle:"triangle",Sawtooth:"sawtooth",Square:"square",Custom:"custom"},s.default.Oscillator.prototype._start=function(t){this.log("start",t);var e=new s.default.OscillatorNode;this._oscillator=e,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),t=this.toSeconds(t),this._oscillator.start(t)},s.default.Oscillator.prototype._stop=function(t){return this.log("stop",t),this._oscillator&&(t=this.toSeconds(t),this._oscillator.stop(t)),this},s.default.Oscillator.prototype.restart=function(t){return this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(this.toSeconds(t)),this},s.default.Oscillator.prototype.syncFrequency=function(){return s.default.Transport.syncSignal(this.frequency),this},s.default.Oscillator.prototype.unsyncFrequency=function(){return s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Oscillator.prototype,"type",{get:function(){return this._type},set:function(t){var e=[s.default.Oscillator.Type.Sine,s.default.Oscillator.Type.Square,s.default.Oscillator.Type.Triangle,s.default.Oscillator.Type.Sawtooth].includes(t);if(0===this._phase&&e)this._wave=null,this._partialCount=0,null!==this._oscillator&&(this._oscillator.type=t);else{var i=this._getRealImaginary(t,this._phase),n=this.context.createPeriodicWave(i[0],i[1]);this._wave=n,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave)}this._type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"baseType",{get:function(){return this._type.replace(this.partialCount,"")},set:function(t){this.partialCount&&this._type!==s.default.Oscillator.Type.Custom&&t!==s.default.Oscillator.Type.Custom?this.type=t+this.partialCount:this.type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"partialCount",{get:function(){return this._partialCount},set:function(t){var e=this._type,i=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);i&&(e=i[1]),this._type!==s.default.Oscillator.Type.Custom&&(this.type=0===t?e:e+t.toString())}}),s.default.Oscillator.prototype.get=function(){var t=s.default.prototype.get.apply(this,arguments);return t.type!==s.default.Oscillator.Type.Custom&&delete t.partials,t},s.default.Oscillator.prototype._getRealImaginary=function(t,e){var i=2048,n=new Float32Array(i),o=new Float32Array(i),a=1;if(t===s.default.Oscillator.Type.Custom)a=this._partials.length+1,this._partialCount=this._partials.length,i=a;else{var r=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);r?(a=parseInt(r[2])+1,this._partialCount=parseInt(r[2]),t=r[1],i=a=Math.max(a,2)):this._partialCount=0,this._partials=[]}for(var l=1;l<i;++l){var u,d=2/(l*Math.PI);switch(t){case s.default.Oscillator.Type.Sine:u=l<=a?1:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Square:u=1&l?2*d:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Sawtooth:u=d*(1&l?1:-1),this._partials[l-1]=u;break;case s.default.Oscillator.Type.Triangle:u=1&l?d*d*2*(l-1>>1&1?-1:1):0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Custom:u=this._partials[l-1];break;default:throw new TypeError("Tone.Oscillator: invalid type: "+t)}0!==u?(n[l]=-u*Math.sin(e*l),o[l]=u*Math.cos(e*l)):(n[l]=0,o[l]=0)}return[n,o]},s.default.Oscillator.prototype._inverseFFT=function(t,e,i){for(var s=0,n=t.length,o=0;o<n;o++)s+=t[o]*Math.cos(o*i)+e[o]*Math.sin(o*i);return s},s.default.Oscillator.prototype._getInitialValue=function(){for(var t=this._getRealImaginary(this._type,0),e=t[0],i=t[1],s=0,n=2*Math.PI,o=0;o<8;o++)s=Math.max(this._inverseFFT(e,i,o/8*n),s);return-this._inverseFFT(e,i,this._phase)/s},Object.defineProperty(s.default.Oscillator.prototype,"partials",{get:function(){return this._partials},set:function(t){this._partials=t,this.type=s.default.Oscillator.Type.Custom}}),Object.defineProperty(s.default.Oscillator.prototype,"phase",{get:function(){return this._phase*(180/Math.PI)},set:function(t){this._phase=t*Math.PI/180,this.type=this._type}}),s.default.Oscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._oscillator&&(this._oscillator.dispose(),this._oscillator=null),this._wave=null,this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._partials=null,this},e.default=s.default.Oscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Delay=function(){var t=s.default.defaults(arguments,["delayTime","maxDelay"],s.default.Delay);s.default.AudioNode.call(this,t),this._maxDelay=Math.max(this.toSeconds(t.maxDelay),this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(this._maxDelay),this.delayTime=new s.default.Param({param:this._delayNode.delayTime,units:s.default.Type.Time,value:t.delayTime}),this._readOnly("delayTime")},s.default.extend(s.default.Delay,s.default.AudioNode),s.default.Delay.defaults={maxDelay:1,delayTime:0},Object.defineProperty(s.default.Delay.prototype,"maxDelay",{get:function(){return this._maxDelay}}),s.default.Delay.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._delayNode.disconnect(),this._delayNode=null,this._writable("delayTime"),this.delayTime=null,this},e.default=s.default.Delay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Split=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(0,t),this._splitter=this.input=this.context.createChannelSplitter(t);for(var e=0;e<t;e++)this.output[e]=new s.default.Gain,s.default.connect(this._splitter,this.output[e],e,0),this.output[e].channelCount=1,this.output[e].channelCountMode="explicit";this.left=this.output[0],this.right=this.output[1]},s.default.extend(s.default.Split,s.default.AudioNode),s.default.Split.prototype.dispose=function(){return this.output.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this._splitter.disconnect(),this.left=null,this.right=null,this._splitter=null,this},e.default=s.default.Split},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(35),i(24),i(44),["baseLatency","destination","currentTime","sampleRate","listener","state"]),o=["suspend","close","resume","getOutputTimestamp","createMediaElementSource","createMediaStreamSource","createMediaStreamDestination","createBuffer","decodeAudioData","createBufferSource","createConstantSource","createGain","createDelay","createBiquadFilter","createIIRFilter","createWaveShaper","createPanner","createConvolver","createDynamicsCompressor","createAnalyser","createScriptProcessor","createStereoPanner","createOscillator","createPeriodicWave","createChannelSplitter","createChannelMerger","audioWorklet"];s.default.Context=function(){s.default.Emitter.call(this);var t=s.default.defaults(arguments,["context"],s.default.Context);if(!t.context&&(t.context=new s.default.global.AudioContext,!t.context))throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");for(this._context=t.context;this._context.rawContext;)this._context=this._context.rawContext;n.forEach(function(t){this._defineProperty(this._context,t)}.bind(this)),o.forEach(function(t){this._defineMethod(this._context,t)}.bind(this)),this._latencyHint=t.latencyHint,this._constants={},this.lookAhead=t.lookAhead,this._computedUpdateInterval=0,this._ticker=new a(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this._timeouts=new s.default.Timeline,this._timeoutIds=0,this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=function(t){this.emit("statechange",t)}.bind(this)},s.default.extend(s.default.Context,s.default.Emitter),s.default.Emitter.mixin(s.default.Context),s.default.Context.defaults={clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.03},s.default.Context.prototype.isContext=!0,s.default.Context.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e]},set:function(i){t[e]=i}})},s.default.Context.prototype._defineMethod=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e].bind(t)}})},s.default.Context.prototype.now=function(){return this._context.currentTime+this.lookAhead},Object.defineProperty(s.default.Context.prototype,"destination",{get:function(){return this.master?this.master:this._context.destination}}),s.default.Context.prototype.resume=function(){return"suspended"===this._context.state&&this._context instanceof AudioContext?this._context.resume():Promise.resolve()},s.default.Context.prototype.close=function(){var t=Promise.resolve();return this!==s.default.global.TONE_AUDIO_CONTEXT&&(t=this.rawContext.close()),t.then(function(){s.default.Context.emit("close",this)}.bind(this))},s.default.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=t;var n=this._context.createBufferSource();return n.channelCount=1,n.channelCountMode="explicit",n.buffer=e,n.loop=!0,n.start(0),this._constants[t]=n,n},s.default.Context.prototype._timeoutLoop=function(){for(var t=this.now();this._timeouts&&this._timeouts.length&&this._timeouts.peek().time<=t;)this._timeouts.shift().callback()},s.default.Context.prototype.setTimeout=function(t,e){this._timeoutIds++;var i=this.now();return this._timeouts.add({callback:t,time:i+e,id:this._timeoutIds}),this._timeoutIds},s.default.Context.prototype.clearTimeout=function(t){return this._timeouts.forEach(function(e){e.id===t&&this.remove(e)}),this},Object.defineProperty(s.default.Context.prototype,"updateInterval",{get:function(){return this._ticker.updateInterval},set:function(t){this._ticker.updateInterval=t}}),Object.defineProperty(s.default.Context.prototype,"rawContext",{get:function(){return this._context}}),Object.defineProperty(s.default.Context.prototype,"clockSource",{get:function(){return this._ticker.type},set:function(t){this._ticker.type=t}}),Object.defineProperty(s.default.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,s.default.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":this._context.latencyHint="interactive",e=.01}this.lookAhead=e,this.updateInterval=e/3}}),s.default.Context.prototype.dispose=function(){return this.close().then(function(){for(var t in s.default.Emitter.prototype.dispose.call(this),this._ticker.dispose(),this._ticker=null,this._timeouts.dispose(),this._timeouts=null,this._constants)this._constants[t].disconnect();this._constants=null}.bind(this))};var a=function(t,e,i){this._type=e,this._updateInterval=i,this._callback=s.default.defaultArg(t,s.default.noOp),this._createClock()};if(a.Type={Worker:"worker",Timeout:"timeout",Offline:"offline"},a.prototype._createWorker=function(){s.default.global.URL=s.default.global.URL||s.default.global.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),i=new Worker(e);i.onmessage=this._callback.bind(this),this._worker=i},a.prototype._createTimeout=function(){this._timeout=setTimeout(function(){this._createTimeout(),this._callback()}.bind(this),1e3*this._updateInterval)},a.prototype._createClock=function(){if(this._type===a.Type.Worker)try{this._createWorker()}catch(t){this._type=a.Type.Timeout,this._createClock()}else this._type===a.Type.Timeout&&this._createTimeout()},Object.defineProperty(a.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,128/44100),this._type===a.Type.Worker&&this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(a.prototype,"type",{get:function(){return this._type},set:function(t){this._disposeClock(),this._type=t,this._createClock()}}),a.prototype._disposeClock=function(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this._worker&&(this._worker.terminate(),this._worker.onmessage=null,this._worker=null)},a.prototype.dispose=function(){this._disposeClock(),this._callback=null},s.default.supported&&!s.default.initialized){if(s.default.global.TONE_AUDIO_CONTEXT||(s.default.global.TONE_AUDIO_CONTEXT=new s.default.Context),s.default.context=s.default.global.TONE_AUDIO_CONTEXT,!s.default.global.TONE_SILENCE_LOGGING){var r="v";"dev"===s.default.version&&(r="");var l=" * Tone.js "+r+s.default.version+" * ";console.log("%c"+l,"background: #000; color: #fff")}}else s.default.supported||s.default.global.TONE_SILENCE_LOGGING||console.warn("This browser does not support Tone.js");e.default=s.default.Context},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(40);s.default.Instrument=function(t){t=s.default.defaultArg(t,s.default.Instrument.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._scheduledEvents=[]},s.default.extend(s.default.Instrument,s.default.AudioNode),s.default.Instrument.defaults={volume:0},s.default.Instrument.prototype.triggerAttack=s.default.noOp,s.default.Instrument.prototype.triggerRelease=s.default.noOp,s.default.Instrument.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this},s.default.Instrument.prototype._syncMethod=function(t,e){var i=this["_original_"+t]=this[t];this[t]=function(){var t=Array.prototype.slice.call(arguments),n=t[e],o=s.default.Transport.schedule(function(s){t[e]=s,i.apply(this,t)}.bind(this),n);this._scheduledEvents.push(o)}.bind(this)},s.default.Instrument.prototype.unsync=function(){return this._scheduledEvents.forEach(function(t){s.default.Transport.clear(t)}),this._scheduledEvents=[],this._original_triggerAttack&&(this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this},s.default.Instrument.prototype.triggerAttackRelease=function(t,e,i,s){return i=this.toSeconds(i),e=this.toSeconds(e),this.triggerAttack(t,i,s),this.triggerRelease(i+e),this},s.default.Instrument.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable(["volume"]),this.volume=null,this.unsync(),this._scheduledEvents=null,this},e.default=s.default.Instrument},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.AudioToGain=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return(t+1)/2})},s.default.extend(s.default.AudioToGain,s.default.SignalBase),s.default.AudioToGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.AudioToGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(89),i(3),i(1);s.default.CrossFade=function(t){s.default.AudioNode.call(this),this.createInsOuts(2,1),this.a=this.input[0]=new s.default.Gain,this.b=this.input[1]=new s.default.Gain,this.fade=new s.default.Signal(s.default.defaultArg(t,.5),s.default.Type.NormalRange),this._equalPowerA=new s.default.EqualPowerGain,this._equalPowerB=new s.default.EqualPowerGain,this._one=this.context.getConstant(1),this._invert=new s.default.Subtract,this.a.connect(this.output),this.b.connect(this.output),this.fade.chain(this._equalPowerB,this.b.gain),s.default.connect(this._one,this._invert,0,0),this.fade.connect(this._invert,0,1),this._invert.chain(this._equalPowerA,this.a.gain),this._readOnly("fade")},s.default.extend(s.default.CrossFade,s.default.AudioNode),s.default.CrossFade.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("fade"),this._equalPowerA.dispose(),this._equalPowerA=null,this._equalPowerB.dispose(),this._equalPowerB=null,this.fade.dispose(),this.fade=null,this._invert.dispose(),this._invert=null,this._one=null,this.a.dispose(),this.a=null,this.b.dispose(),this.b=null,this},e.default=s.default.CrossFade},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Timeline=function(){var t=s.default.defaults(arguments,["memory"],s.default.Timeline);s.default.call(this),this._timeline=[],this.memory=t.memory},s.default.extend(s.default.Timeline),s.default.Timeline.defaults={memory:1/0},Object.defineProperty(s.default.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),s.default.Timeline.prototype.add=function(t){if(s.default.isUndef(t.time))throw new Error("Tone.Timeline: events must have a time attribute");t.time=t.time.valueOf();var e=this._search(t.time);if(this._timeline.splice(e+1,0,t),this.length>this.memory){var i=this.length-this.memory;this._timeline.splice(0,i)}return this},s.default.Timeline.prototype.remove=function(t){var e=this._timeline.indexOf(t);return-1!==e&&this._timeline.splice(e,1),this},s.default.Timeline.prototype.get=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return-1!==i?this._timeline[i]:null},s.default.Timeline.prototype.peek=function(){return this._timeline[0]},s.default.Timeline.prototype.shift=function(){return this._timeline.shift()},s.default.Timeline.prototype.getAfter=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return i+1<this._timeline.length?this._timeline[i+1]:null},s.default.Timeline.prototype.getBefore=function(t,e){e=s.default.defaultArg(e,"time");var i=this._timeline.length;if(i>0&&this._timeline[i-1][e]<t)return this._timeline[i-1];var n=this._search(t,e);return n-1>=0?this._timeline[n-1]:null},s.default.Timeline.prototype.cancel=function(t){if(this._timeline.length>1){var e=this._search(t);if(e>=0)if(this._timeline[e].time===t){for(var i=e;i>=0&&this._timeline[i].time===t;i--)e=i;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=t&&(this._timeline=[]);return this},s.default.Timeline.prototype.cancelBefore=function(t){var e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this},s.default.Timeline.prototype.previousEvent=function(t){var e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null},s.default.Timeline.prototype._search=function(t,e){if(0===this._timeline.length)return-1;e=s.default.defaultArg(e,"time");var i=0,n=this._timeline.length,o=n;if(n>0&&this._timeline[n-1][e]<=t)return n-1;for(;i<o;){var a=Math.floor(i+(o-i)/2),r=this._timeline[a],l=this._timeline[a+1];if(r[e]===t){for(var u=a;u<this._timeline.length;u++){this._timeline[u][e]===t&&(a=u)}return a}if(r[e]<t&&l[e]>t)return a;r[e]>t?o=a:i=a+1}return-1},s.default.Timeline.prototype._iterate=function(t,e,i){e=s.default.defaultArg(e,0),i=s.default.defaultArg(i,this._timeline.length-1),this._timeline.slice(e,i+1).forEach(function(e){t.call(this,e)}.bind(this))},s.default.Timeline.prototype.forEach=function(t){return this._iterate(t),this},s.default.Timeline.prototype.forEachBefore=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(e,0,i),this},s.default.Timeline.prototype.forEachAfter=function(t,e){var i=this._search(t);return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachBetween=function(t,e,i){var s=this._search(t),n=this._search(e);return-1!==s&&-1!==n?(this._timeline[s].time!==t&&(s+=1),this._timeline[n].time===e&&(n-=1),this._iterate(i,s,n)):-1===s&&this._iterate(i,0,n),this},s.default.Timeline.prototype.forEachFrom=function(t,e){for(var i=this._search(t);i>=0&&this._timeline[i].time>=t;)i--;return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachAtTime=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(function(i){i.time===t&&e.call(this,i)},0,i),this},s.default.Timeline.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._timeline=null,this},e.default=s.default.Timeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(2);s.default.Monophonic=function(t){t=s.default.defaultArg(t,s.default.Monophonic.defaults),s.default.Instrument.call(this,t),this.portamento=t.portamento},s.default.extend(s.default.Monophonic,s.default.Instrument),s.default.Monophonic.defaults={portamento:0},s.default.Monophonic.prototype.triggerAttack=function(t,e,i){return this.log("triggerAttack",t,e,i),e=this.toSeconds(e),this._triggerEnvelopeAttack(e,i),this.setNote(t,e),this},s.default.Monophonic.prototype.triggerRelease=function(t){return this.log("triggerRelease",t),t=this.toSeconds(t),this._triggerEnvelopeRelease(t),this},s.default.Monophonic.prototype._triggerEnvelopeAttack=function(){},s.default.Monophonic.prototype._triggerEnvelopeRelease=function(){},s.default.Monophonic.prototype.getLevelAtTime=function(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)},s.default.Monophonic.prototype.setNote=function(t,e){if(e=this.toSeconds(e),this.portamento>0&&this.getLevelAtTime(e)>.05){var i=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(t,i,e)}else this.frequency.setValueAtTime(t,e);return this},e.default=s.default.Monophonic},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5),i(2);s.default.Scale=function(t,e){s.default.SignalBase.call(this),this._outputMin=s.default.defaultArg(t,0),this._outputMax=s.default.defaultArg(e,1),this._scale=this.input=new s.default.Multiply(1),this._add=this.output=new s.default.Add(0),this._scale.connect(this._add),this._setRange()},s.default.extend(s.default.Scale,s.default.SignalBase),Object.defineProperty(s.default.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(s.default.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),s.default.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},s.default.Scale.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},e.default=s.default.Scale},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3),i(1);s.default.Volume=function(){var t=s.default.defaults(arguments,["volume"],s.default.Volume);s.default.AudioNode.call(this,t),this.output=this.input=new s.default.Gain(t.volume,s.default.Type.Decibels),this._unmutedVolume=t.volume,this.volume=this.output.gain,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.Volume,s.default.AudioNode),s.default.Volume.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Volume.prototype,"mute",{get:function(){return this.volume.value===-1/0},set:function(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}}),s.default.Volume.prototype.dispose=function(){return this.input.dispose(),s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this.volume.dispose(),this.volume=null,this},e.default=s.default.Volume},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(30);s.default.Zero=function(){s.default.SignalBase.call(this),this._gain=this.input=this.output=new s.default.Gain,s.default.connect(this.context.getConstant(0),this._gain)},s.default.extend(s.default.Zero,s.default.SignalBase),s.default.Zero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._gain.dispose(),this._gain=null,this},e.default=s.default.Zero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3);s.default.Add=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new s.default.Gain,this._param=this.input[1]=new s.default.Signal(t),this._param.connect(this._sum)},s.default.extend(s.default.Add,s.default.Signal),s.default.Add.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this},e.default=s.default.Add},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.SignalBase=function(){s.default.AudioNode.call(this)},s.default.extend(s.default.SignalBase,s.default.AudioNode),s.default.SignalBase.prototype.connect=function(t,e,i){return s.default.Signal&&s.default.Signal===t.constructor||s.default.Param&&s.default.Param===t.constructor?(t._param.cancelScheduledValues(0),t._param.setValueAtTime(0,0),t.overridden=!0):t instanceof AudioParam&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0)),s.default.AudioNode.prototype.connect.call(this,t,e,i),this},e.default=s.default.SignalBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(3);s.default.AmplitudeEnvelope=function(){s.default.Envelope.apply(this,arguments),this.input=this.output=new s.default.Gain,this._sig.connect(this.output.gain)},s.default.extend(s.default.AmplitudeEnvelope,s.default.Envelope),s.default.AmplitudeEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this},e.default=s.default.AmplitudeEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.BufferSource=function(){var t=s.default.defaults(arguments,["buffer","onload"],s.default.BufferSource);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._sourceStarted=!1,this._sourceStopped=!1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._source=this.context.createBufferSource(),s.default.connect(this._source,this._gainNode),this._source.onended=this._onended.bind(this),this._buffer=new s.default.Buffer(t.buffer,t.onload),this.playbackRate=new s.default.Param({param:this._source.playbackRate,units:s.default.Type.Positive,value:t.playbackRate}),this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut,this.curve=t.curve,this._onendedTimeout=-1,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd},s.default.extend(s.default.BufferSource,s.default.AudioNode),s.default.BufferSource.defaults={onended:s.default.noOp,onload:s.default.noOp,loop:!1,loopStart:0,loopEnd:0,fadeIn:0,fadeOut:0,curve:"linear",playbackRate:1},Object.defineProperty(s.default.BufferSource.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.BufferSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&this._startTime<=t&&(-1===this._stopTime||t<this._stopTime)&&!this._sourceStopped?s.default.State.Started:s.default.State.Stopped},s.default.BufferSource.prototype.start=function(t,e,i,n){this.log("start",t,e,i,n),this.assert(-1===this._startTime,"can only be started once"),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),e=this.loop?s.default.defaultArg(e,this.loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),e=Math.max(e,0),n=s.default.defaultArg(n,1);var o=this.toSeconds(this.fadeIn);if(o>0?(this._gainNode.gain.setValueAtTime(0,t),"linear"===this.curve?this._gainNode.gain.linearRampToValueAtTime(n,t+o):this._gainNode.gain.exponentialApproachValueAtTime(n,t,o)):this._gainNode.gain.setValueAtTime(n,t),this._startTime=t,s.default.isDefined(i)){var a=this.toSeconds(i);a=Math.max(a,0),this.stop(t+a)}if(this.loop){var r=this.loopEnd||this.buffer.duration,l=this.loopStart;e>=r&&(e=(e-l)%(r-l)+l)}return this._source.buffer=this.buffer.get(),this._source.loopEnd=this.loopEnd||this.buffer.duration,e<this.buffer.duration&&(this._sourceStarted=!0,this._source.start(t,e)),this},s.default.BufferSource.prototype.stop=function(t){this.log("stop",t),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),-1!==this._stopTime&&this.cancelStop();var e=this.toSeconds(this.fadeOut);return this._stopTime=t+e,e>0?"linear"===this.curve?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),s.default.context.clearTimeout(this._onendedTimeout),this._onendedTimeout=s.default.context.setTimeout(this._onended.bind(this),this._stopTime-this.now()),this},s.default.BufferSource.prototype.cancelStop=function(){if(-1!==this._startTime&&!this._sourceStopped){var t=this.toSeconds(this.fadeIn);this._gainNode.gain.cancelScheduledValues(this._startTime+t+this.sampleTime),this.context.clearTimeout(this._onendedTimeout),this._stopTime=-1}return this},s.default.BufferSource.prototype._onended=function(){if(!this._sourceStopped){this._sourceStopped=!0;var t="exponential"===this.curve?2*this.fadeOut:0;this._sourceStarted&&-1!==this._stopTime&&this._source.stop(this._stopTime+t),this.onended(this),setTimeout(function(){this._source&&(this._source.disconnect(),this._gainNode.disconnect())}.bind(this),1e3*t+100)}},Object.defineProperty(s.default.BufferSource.prototype,"loopStart",{get:function(){return this._source.loopStart},set:function(t){this._source.loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loopEnd",{get:function(){return this._source.loopEnd},set:function(t){this._source.loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loop",{get:function(){return this._source.loop},set:function(t){this._source.loop=t,this.cancelStop()}}),s.default.BufferSource.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._source.onended=null,this._source.disconnect(),this._source=null,this._gainNode.dispose(),this._gainNode=null,this._buffer.dispose(),this._buffer=null,this._startTime=-1,this.playbackRate=null,s.default.context.clearTimeout(this._onendedTimeout)),this},e.default=s.default.BufferSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(2),i(5),i(3);s.default.FeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.Effect.call(this,t),this._feedbackGain=new s.default.Gain(t.feedback,s.default.Type.NormalRange),this.feedback=this._feedbackGain.gain,this.effectReturn.chain(this._feedbackGain,this.effectSend),this._readOnly(["feedback"])},s.default.extend(s.default.FeedbackEffect,s.default.Effect),s.default.FeedbackEffect.defaults={feedback:.125},s.default.FeedbackEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._writable(["feedback"]),this._feedbackGain.dispose(),this._feedbackGain=null,this.feedback=null,this},e.default=s.default.FeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24),i(4);s.default.TimelineState=function(t){s.default.Timeline.call(this),this._initial=t},s.default.extend(s.default.TimelineState,s.default.Timeline),s.default.TimelineState.prototype.getValueAtTime=function(t){var e=this.get(t);return null!==e?e.state:this._initial},s.default.TimelineState.prototype.setStateAtTime=function(t,e){return this.add({state:t,time:e}),this},s.default.TimelineState.prototype.getLastState=function(t,e){e=this.toSeconds(e);for(var i=this._search(e);i>=0;i--){var s=this._timeline[i];if(s.state===t)return s}},s.default.TimelineState.prototype.getNextState=function(t,e){e=this.toSeconds(e);var i=this._search(e);if(-1!==i)for(var s=i;s<this._timeline.length;s++){var n=this._timeline[s];if(n.state===t)return n}},e.default=s.default.TimelineState},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Emitter=function(){s.default.call(this),this._events={}},s.default.extend(s.default.Emitter),s.default.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),s=0;s<i.length;s++){var n=i[s];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},s.default.Emitter.prototype.once=function(t,e){var i=function(){e.apply(this,arguments),this.off(t,i)}.bind(this);return this.on(t,i),this},s.default.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),n=0;n<i.length;n++)if(t=i[n],this._events.hasOwnProperty(t))if(s.default.isUndef(e))this._events[t]=[];else for(var o=this._events[t],a=0;a<o.length;a++)o[a]===e&&o.splice(a,1);return this},s.default.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t].slice(0),s=0,n=i.length;s<n;s++)i[s].apply(this,e)}return this},s.default.Emitter.mixin=function(t){var e=["on","once","off","emit"];t._events={};for(var i=0;i<e.length;i++){var n=e[i],o=s.default.Emitter.prototype[n];t[n]=o}return s.default.Emitter},s.default.Emitter.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._events=null,this},e.default=s.default.Emitter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1),i(44);s.default.supported&&(AnalyserNode.prototype.getFloatTimeDomainData||(AnalyserNode.prototype.getFloatTimeDomainData=function(t){var e=new Uint8Array(t.length);this.getByteTimeDomainData(e);for(var i=0;i<e.length;i++)t[i]=(e[i]-128)/128})),s.default.Analyser=function(){var t=s.default.defaults(arguments,["type","size"],s.default.Analyser);s.default.AudioNode.call(this),this._analyser=this.input=this.output=this.context.createAnalyser(),this._type=t.type,this._buffer=null,this.size=t.size,this.type=t.type},s.default.extend(s.default.Analyser,s.default.AudioNode),s.default.Analyser.defaults={size:1024,type:"fft",smoothing:.8},s.default.Analyser.Type={Waveform:"waveform",FFT:"fft"},s.default.Analyser.prototype.getValue=function(){return this._type===s.default.Analyser.Type.FFT?this._analyser.getFloatFrequencyData(this._buffer):this._type===s.default.Analyser.Type.Waveform&&this._analyser.getFloatTimeDomainData(this._buffer),this._buffer},Object.defineProperty(s.default.Analyser.prototype,"size",{get:function(){return this._analyser.frequencyBinCount},set:function(t){this._analyser.fftSize=2*t,this._buffer=new Float32Array(t)}}),Object.defineProperty(s.default.Analyser.prototype,"type",{get:function(){return this._type},set:function(t){if(t!==s.default.Analyser.Type.Waveform&&t!==s.default.Analyser.Type.FFT)throw new TypeError("Tone.Analyser: invalid type: "+t);this._type=t}}),Object.defineProperty(s.default.Analyser.prototype,"smoothing",{get:function(){return this._analyser.smoothingTimeConstant},set:function(t){this._analyser.smoothingTimeConstant=t}}),s.default.Analyser.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.disconnect(),this._analyser=null,this._buffer=null};e.default=s.default.Analyser},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(50),i(69),i(49),i(68),i(67);s.default.OmniOscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OmniOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._sourceType=void 0,this._oscillator=null,this.type=t.type,this._readOnly(["frequency","detune"]),this.set(t)},s.default.extend(s.default.OmniOscillator,s.default.Source),s.default.OmniOscillator.defaults={frequency:440,detune:0,type:"sine",phase:0};var n="PulseOscillator",o="PWMOscillator",a="Oscillator",r="FMOscillator",l="AMOscillator",u="FatOscillator";s.default.OmniOscillator.prototype._start=function(t){this._oscillator.start(t)},s.default.OmniOscillator.prototype._stop=function(t){this._oscillator.stop(t)},s.default.OmniOscillator.prototype.restart=function(t){this._oscillator.restart(t)},Object.defineProperty(s.default.OmniOscillator.prototype,"type",{get:function(){var t="";return this._sourceType===r?t="fm":this._sourceType===l?t="am":this._sourceType===u&&(t="fat"),t+this._oscillator.type},set:function(t){"fm"===t.substr(0,2)?(this._createNewOscillator(r),this._oscillator.type=t.substr(2)):"am"===t.substr(0,2)?(this._createNewOscillator(l),this._oscillator.type=t.substr(2)):"fat"===t.substr(0,3)?(this._createNewOscillator(u),this._oscillator.type=t.substr(3)):"pwm"===t?this._createNewOscillator(o):"pulse"===t?this._createNewOscillator(n):(this._createNewOscillator(a),this._oscillator.type=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partials",{get:function(){return this._oscillator.partials},set:function(t){this._oscillator.partials=t}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partialCount",{get:function(){return this._oscillator.partialCount},set:function(t){this._oscillator.partialCount=t}}),s.default.OmniOscillator.prototype.set=function(t,e){return"type"===t?this.type=e:s.default.isObject(t)&&t.hasOwnProperty("type")&&(this.type=t.type),s.default.prototype.set.apply(this,arguments),this},s.default.OmniOscillator.prototype.get=function(t){var e=this._oscillator.get(t);return e.type=this.type,e},s.default.OmniOscillator.prototype._createNewOscillator=function(t){if(t!==this._sourceType){this._sourceType=t;var e=s.default[t],i=this.now();if(null!==this._oscillator){var n=this._oscillator;n.stop(i),this.context.setTimeout(function(){n.dispose(),n=null},this.blockTime)}this._oscillator=new e,this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this.state===s.default.State.Started&&this._oscillator.start(i)}},Object.defineProperty(s.default.OmniOscillator.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t}});var d={PulseOscillator:"pulse",PWMOscillator:"pwm",Oscillator:"oscillator",FMOscillator:"fm",AMOscillator:"am",FatOscillator:"fat"};Object.defineProperty(s.default.OmniOscillator.prototype,"sourceType",{get:function(){return d[this._sourceType]},set:function(t){var e="sine";"pwm"!==this._oscillator.type&&"pulse"!==this._oscillator.type&&(e=this._oscillator.type),t===d.FMOscillator?this.type="fm"+e:t===d.AMOscillator?this.type="am"+e:t===d.FatOscillator?this.type="fat"+e:t===d.Oscillator?this.type=e:t===d.PulseOscillator?this.type="pulse":t===d.PWMOscillator&&(this.type="pwm")}}),Object.defineProperty(s.default.OmniOscillator.prototype,"baseType",{get:function(){return this._oscillator.baseType},set:function(t){this.sourceType!==d.PulseOscillator&&this.sourceType!==d.PWMOscillator&&(this._oscillator.baseType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"width",{get:function(){return this._sourceType===n?this._oscillator.width:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"count",{get:function(){return this._sourceType===u?this._oscillator.count:void 0},set:function(t){this._sourceType===u&&(this._oscillator.count=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"spread",{get:function(){return this._sourceType===u?this._oscillator.spread:void 0},set:function(t){this._sourceType===u&&(this._oscillator.spread=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationType",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.modulationType:void 0},set:function(t){this._sourceType!==r&&this._sourceType!==l||(this._oscillator.modulationType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationIndex",{get:function(){return this._sourceType===r?this._oscillator.modulationIndex:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"harmonicity",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.harmonicity:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationFrequency",{get:function(){return this._sourceType===o?this._oscillator.modulationFrequency:void 0}}),s.default.OmniOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.detune.dispose(),this.detune=null,this.frequency.dispose(),this.frequency=null,this._oscillator.dispose(),this._oscillator=null,this._sourceType=null,this},e.default=s.default.OmniOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(37),i(25);s.default.Synth=function(t){t=s.default.defaultArg(t,s.default.Synth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","frequency","detune","envelope"])},s.default.extend(s.default.Synth,s.default.Monophonic),s.default.Synth.defaults={oscillator:{type:"triangle"},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},s.default.Synth.prototype._triggerEnvelopeAttack=function(t,e){return this.envelope.triggerAttack(t,e),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this},s.default.Synth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release)),this},s.default.Synth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.frequency=null,this.detune=null,this},e.default=s.default.Synth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.Noise=function(){var t=s.default.defaults(arguments,["type"],s.default.Noise);s.default.Source.call(this,t),this._source=null,this._type=t.type,this._playbackRate=t.playbackRate},s.default.extend(s.default.Noise,s.default.Source),s.default.Noise.defaults={type:"white",playbackRate:1},Object.defineProperty(s.default.Noise.prototype,"type",{get:function(){return this._type},set:function(t){if(this._type!==t){if(!(t in n))throw new TypeError("Tone.Noise: invalid type: "+t);if(this._type=t,this.state===s.default.State.Started){var e=this.now();this._stop(e),this._start(e)}}}}),Object.defineProperty(s.default.Noise.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}}),s.default.Noise.prototype._start=function(t){var e=n[this._type];this._source=new s.default.BufferSource(e).connect(this.output),this._source.loop=!0,this._source.playbackRate.value=this._playbackRate,this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))},s.default.Noise.prototype._stop=function(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)},s.default.Noise.prototype.restart=function(t){return this._stop(t),this._start(t),this},s.default.Noise.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._source&&(this._source.disconnect(),this._source=null),this._buffer=null,this};var n={},o={};Object.defineProperty(n,"pink",{get:function(){if(!o.pink){for(var t=[],e=0;e<2;e++){var i,n,a,r,l,u,d,f=new Float32Array(220500);t[e]=f,i=n=a=r=l=u=d=0;for(var h=0;h<220500;h++){var c=2*Math.random()-1;i=.99886*i+.0555179*c,n=.99332*n+.0750759*c,a=.969*a+.153852*c,r=.8665*r+.3104856*c,l=.55*l+.5329522*c,u=-.7616*u-.016898*c,f[h]=i+n+a+r+l+u+d+.5362*c,f[h]*=.11,d=.115926*c}}o.pink=(new s.default.Buffer).fromArray(t)}return o.pink}}),Object.defineProperty(n,"brown",{get:function(){if(!o.brown){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0,a=0;a<220500;a++){var r=2*Math.random()-1;i[a]=(n+.02*r)/1.02,n=i[a],i[a]*=3.5}}o.brown=(new s.default.Buffer).fromArray(t)}return o.brown}}),Object.defineProperty(n,"white",{get:function(){if(!o.white){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0;n<220500;n++)i[n]=2*Math.random()-1}o.white=(new s.default.Buffer).fromArray(t)}return o.white}}),e.default=s.default.Noise},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(20),i(1);s.default.Master=function(){s.default.AudioNode.call(this),s.default.getContext(function(){this.createInsOuts(1,0),this._volume=this.output=new s.default.Volume,this.volume=this._volume.volume,this._readOnly("volume"),s.default.connectSeries(this.input,this.output,this.context.destination),this.context.master=this}.bind(this))},s.default.extend(s.default.Master,s.default.AudioNode),s.default.Master.defaults={volume:0,mute:!1},s.default.Master.prototype.isMaster=!0,Object.defineProperty(s.default.Master.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Master.prototype.chain=function(){this.input.disconnect();var t=Array.from(arguments);t.unshift(this.input),t.push(this.output),s.default.connectSeries.apply(void 0,t)},s.default.Master.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null},s.default.AudioNode.prototype.toMaster=function(){return this.connect(this.context.master),this};var n=s.default.Master;s.default.Master=new n,s.default.Context.on("init",function(t){t.master&&t.master.isMaster?s.default.Master=t.master:s.default.Master=new n}),s.default.Context.on("close",function(t){t.master&&t.master.isMaster&&t.master.dispose()}),e.default=s.default.Master},function(t,e,i){"use strict";i.r(e);var s=i(0);i(86),i(47);s.default.FrequencyEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);t=s.default.defaultArg(t,s.default.FrequencyEnvelope.defaults),s.default.ScaledEnvelope.call(this,t),this._octaves=t.octaves,this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this.exponent=t.exponent},s.default.extend(s.default.FrequencyEnvelope,s.default.Envelope),s.default.FrequencyEnvelope.defaults={baseFrequency:200,octaves:4,exponent:1},Object.defineProperty(s.default.FrequencyEnvelope.prototype,"baseFrequency",{get:function(){return this._scale.min},set:function(t){this._scale.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._scale.max=this.baseFrequency*Math.pow(2,t)}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.FrequencyEnvelope.prototype.dispose=function(){return s.default.ScaledEnvelope.prototype.dispose.call(this),this},e.default=s.default.FrequencyEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(26),i(61);s.default.ScaleExp=function(t,e,i){s.default.SignalBase.call(this),this._scale=this.output=new s.default.Scale(t,e),this._exp=this.input=new s.default.Pow(s.default.defaultArg(i,2)),this._exp.connect(this._scale)},s.default.extend(s.default.ScaleExp,s.default.SignalBase),Object.defineProperty(s.default.ScaleExp.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),s.default.ScaleExp.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaleExp},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Compressor=function(){var t=s.default.defaults(arguments,["threshold","ratio"],s.default.Compressor);s.default.AudioNode.call(this),this._compressor=this.input=this.output=this.context.createDynamicsCompressor(),this.threshold=new s.default.Param({param:this._compressor.threshold,units:s.default.Type.Decibels,convert:!1}),this.attack=new s.default.Param(this._compressor.attack,s.default.Type.Time),this.release=new s.default.Param(this._compressor.release,s.default.Type.Time),this.knee=new s.default.Param({param:this._compressor.knee,units:s.default.Type.Decibels,convert:!1}),this.ratio=new s.default.Param({param:this._compressor.ratio,convert:!1}),this._readOnly(["knee","release","attack","ratio","threshold"]),this.set(t)},s.default.extend(s.default.Compressor,s.default.AudioNode),s.default.Compressor.defaults={ratio:12,threshold:-24,release:.25,attack:.003,knee:30},s.default.Compressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["knee","release","attack","ratio","threshold"]),this._compressor.disconnect(),this._compressor=null,this.attack.dispose(),this.attack=null,this.release.dispose(),this.release=null,this.threshold.dispose(),this.threshold=null,this.ratio.dispose(),this.ratio=null,this.knee.dispose(),this.knee=null,this},e.default=s.default.Compressor},function(t,e,i){"use strict";var s=i(0);i(92);if(s.default.supported){!s.default.global.hasOwnProperty("AudioContext")&&s.default.global.hasOwnProperty("webkitAudioContext")&&(s.default.global.AudioContext=s.default.global.webkitAudioContext),AudioContext.prototype.close||(AudioContext.prototype.close=function(){return s.default.isFunction(this.suspend)&&this.suspend(),Promise.resolve()}),AudioContext.prototype.resume||(AudioContext.prototype.resume=function(){var t=this.createBuffer(1,1,this.sampleRate),e=this.createBufferSource();return e.buffer=t,e.connect(this.destination),e.start(0),Promise.resolve()}),!AudioContext.prototype.createGain&&AudioContext.prototype.createGainNode&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),!AudioContext.prototype.createDelay&&AudioContext.prototype.createDelayNode&&(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode);var n=!1,o=new OfflineAudioContext(1,1,44100),a=new Uint32Array([1179011410,48,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,8,0,0,0,0]).buffer;try{var r=o.decodeAudioData(a);r&&s.default.isFunction(r.then)&&(n=!0)}catch(t){n=!1}n||(AudioContext.prototype._native_decodeAudioData=AudioContext.prototype.decodeAudioData,AudioContext.prototype.decodeAudioData=function(t){return new Promise(function(e,i){this._native_decodeAudioData(t,e,i)}.bind(this))})}},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63);s.default.TransportTime=function(t,e){if(!(this instanceof s.default.TransportTime))return new s.default.TransportTime(t,e);s.default.Time.call(this,t,e)},s.default.extend(s.default.TransportTime,s.default.Time),s.default.TransportTime.prototype._now=function(){return s.default.Transport.seconds},e.default=s.default.TransportTime},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62);s.default.Frequency=function(t,e){if(!(this instanceof s.default.Frequency))return new s.default.Frequency(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Frequency,s.default.TimeBase),s.default.Frequency.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method:function(t){return"midi"===this._defaultUnits?t:s.default.Frequency.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method:function(t,e){var i=n[t.toLowerCase()]+12*(parseInt(e)+1);return"midi"===this._defaultUnits?i:s.default.Frequency.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(t,e,i){var s=1;return t&&"0"!==t&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s*=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s*=this._beatsToUnits(parseFloat(i)/4)),s}}}),s.default.Frequency.prototype.transpose=function(t){return new this.constructor(this.valueOf()*s.default.intervalToFrequencyRatio(t))},s.default.Frequency.prototype.harmonize=function(t){return t.map(function(t){return this.transpose(t)}.bind(this))},s.default.Frequency.prototype.toMidi=function(){return s.default.Frequency.ftom(this.valueOf())},s.default.Frequency.prototype.toNote=function(){var t=this.toFrequency(),e=Math.log2(t/s.default.Frequency.A4),i=Math.round(12*e)+57,n=Math.floor(i/12);return n<0&&(i+=-12*n),o[i%12]+n.toString()},s.default.Frequency.prototype.toSeconds=function(){return 1/s.default.TimeBase.prototype.toSeconds.call(this)},s.default.Frequency.prototype.toFrequency=function(){return s.default.TimeBase.prototype.toFrequency.call(this)},s.default.Frequency.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*s.default.Transport.PPQ)},s.default.Frequency.prototype._noArg=function(){return 0},s.default.Frequency.prototype._frequencyToUnits=function(t){return t},s.default.Frequency.prototype._ticksToUnits=function(t){return 1/(60*t/(s.default.Transport.bpm.value*s.default.Transport.PPQ))},s.default.Frequency.prototype._beatsToUnits=function(t){return 1/s.default.TimeBase.prototype._beatsToUnits.call(this,t)},s.default.Frequency.prototype._secondsToUnits=function(t){return 1/t},s.default.Frequency.prototype._defaultUnits="hz";var n={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},o=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];s.default.Frequency.A4=440,s.default.Frequency.mtof=function(t){return s.default.Frequency.A4*Math.pow(2,(t-69)/12)},s.default.Frequency.ftom=function(t){return 69+Math.round(12*Math.log2(t/s.default.Frequency.A4))},e.default=s.default.Frequency},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(61),i(4),i(1);s.default.Envelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.AudioNode.call(this),this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this._attackCurve="linear",this._releaseCurve="exponential",this._sig=this.output=new s.default.Signal(0),this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve},s.default.extend(s.default.Envelope,s.default.AudioNode),s.default.Envelope.defaults={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"},Object.defineProperty(s.default.Envelope.prototype,"value",{get:function(){return this.getValueAtTime(this.now())}}),s.default.Envelope.prototype._getCurve=function(t,e){if(s.default.isString(t))return t;if(s.default.isArray(t))for(var i in s.default.Envelope.Type)if(s.default.Envelope.Type[i][e]===t)return i},s.default.Envelope.prototype._setCurve=function(t,e,i){if(s.default.Envelope.Type.hasOwnProperty(i)){var n=s.default.Envelope.Type[i];s.default.isObject(n)?this[t]=n[e]:this[t]=n}else{if(!s.default.isArray(i))throw new Error("Tone.Envelope: invalid curve: "+i);this[t]=i}},Object.defineProperty(s.default.Envelope.prototype,"attackCurve",{get:function(){return this._getCurve(this._attackCurve,"In")},set:function(t){this._setCurve("_attackCurve","In",t)}}),Object.defineProperty(s.default.Envelope.prototype,"releaseCurve",{get:function(){return this._getCurve(this._releaseCurve,"Out")},set:function(t){this._setCurve("_releaseCurve","Out",t)}}),Object.defineProperty(s.default.Envelope.prototype,"decayCurve",{get:function(){return this._decayCurve},set:function(t){if(!["linear","exponential"].includes(t))throw new Error("Tone.Envelope: invalid curve: "+t);this._decayCurve=t}}),s.default.Envelope.prototype.triggerAttack=function(t,e){this.log("triggerAttack",t,e),t=this.toSeconds(t);var i=this.toSeconds(this.attack),n=this.toSeconds(this.decay);e=s.default.defaultArg(e,1);var o=this.getValueAtTime(t);o>0&&(i=(1-o)/(1/i));if(0===i)this._sig.setValueAtTime(e,t);else if("linear"===this._attackCurve)this._sig.linearRampTo(e,i,t);else if("exponential"===this._attackCurve)this._sig.targetRampTo(e,i,t);else if(i>0){this._sig.cancelAndHoldAtTime(t);for(var a=this._attackCurve,r=1;r<a.length;r++)if(a[r-1]<=o&&o<=a[r]){(a=this._attackCurve.slice(r))[0]=o;break}this._sig.setValueCurveAtTime(a,t,i,e)}if(n){var l=e*this.sustain,u=t+i;this.log("decay",u),"linear"===this._decayCurve?this._sig.linearRampTo(l,n,u+this.sampleTime):"exponential"===this._decayCurve&&this._sig.exponentialApproachValueAtTime(l,u,n)}return this},s.default.Envelope.prototype.triggerRelease=function(t){this.log("triggerRelease",t),t=this.toSeconds(t);var e=this.getValueAtTime(t);if(e>0){var i=this.toSeconds(this.release);if("linear"===this._releaseCurve)this._sig.linearRampTo(0,i,t);else if("exponential"===this._releaseCurve)this._sig.targetRampTo(0,i,t);else{var n=this._releaseCurve;s.default.isArray(n)&&(this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(n,t,i,e))}}return this},s.default.Envelope.prototype.getValueAtTime=function(t){return this._sig.getValueAtTime(t)},s.default.Envelope.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),this.triggerAttack(e,i),this.triggerRelease(e+this.toSeconds(t)),this},s.default.Envelope.prototype.cancel=function(t){return this._sig.cancelScheduledValues(t),this},s.default.Envelope.prototype.connect=s.default.SignalBase.prototype.connect,function(){var t,e,i=[];for(t=0;t<128;t++)i[t]=Math.sin(t/127*(Math.PI/2));var n=[];for(t=0;t<127;t++){e=t/127;var o=Math.sin(e*(2*Math.PI)*6.4-Math.PI/2)+1;n[t]=o/10+.83*e}n[127]=1;var a=[];for(t=0;t<128;t++)a[t]=Math.ceil(t/127*5)/5;var r=[];for(t=0;t<128;t++)e=t/127,r[t]=.5*(1-Math.cos(Math.PI*e));var l,u=[];for(t=0;t<128;t++){e=t/127;var d=4*Math.pow(e,3)+.2,f=Math.cos(d*Math.PI*2*e);u[t]=Math.abs(f*(1-e))}function h(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=1-t[i];return e}s.default.Envelope.Type={linear:"linear",exponential:"exponential",bounce:{In:h(u),Out:u},cosine:{In:i,Out:(l=i,l.slice(0).reverse())},step:{In:a,Out:h(a)},ripple:{In:n,Out:h(n)},sine:{In:r,Out:h(r)}}}(),s.default.Envelope.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._sig.dispose(),this._sig=null,this._attackCurve=null,this._releaseCurve=null,this},e.default=s.default.Envelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(7),i(28),i(3),i(2),i(20);if(s.default.supported&&!s.default.global.AudioContext.prototype.createStereoPanner){var n=function(t){this.context=t,this.pan=new s.default.Signal(0,s.default.Type.AudioRange);var e=new s.default.WaveShaper(function(t){return s.default.equalPowerScale((t+1)/2)},4096),i=new s.default.WaveShaper(function(t){return s.default.equalPowerScale(1-(t+1)/2)},4096),n=new s.default.Gain,o=new s.default.Gain,a=this.input=new s.default.Split;a._splitter.channelCountMode="explicit",(new s.default.Zero).fan(e,i);var r=this.output=new s.default.Merge;a.left.chain(n,r.left),a.right.chain(o,r.right),this.pan.chain(i,n.gain),this.pan.chain(e,o.gain)};n.prototype.disconnect=function(){this.output.disconnect.apply(this.output,arguments)},n.prototype.connect=function(){this.output.connect.apply(this.output,arguments)},AudioContext.prototype.createStereoPanner=function(){return new n(this)},s.default.Context.prototype.createStereoPanner=function(){return new n(this)}}i(22),i(1);s.default.Panner=function(){var t=s.default.defaults(arguments,["pan"],s.default.Panner);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createStereoPanner(),this.pan=this._panner.pan,this.pan.value=t.pan,this._readOnly("pan")},s.default.extend(s.default.Panner,s.default.AudioNode),s.default.Panner.defaults={pan:0},s.default.Panner.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("pan"),this._panner.disconnect(),this._panner=null,this.pan=null,this};e.default=s.default.Panner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.FMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=this._carrier.detune,this.detune.value=t.detune,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),this.phase=t.phase,this._readOnly(["modulationIndex","frequency","detune","harmonicity"])},s.default.extend(s.default.FMOscillator,s.default.Source),s.default.FMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationIndex:2,modulationType:"square",harmonicity:1},s.default.FMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.FMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.FMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.FMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.FMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["modulationIndex","frequency","detune","harmonicity"]),this.frequency.dispose(),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this.modulationIndex.dispose(),this.modulationIndex=null,this},e.default=s.default.FMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(2),i(7),i(3);s.default.PulseOscillator=function(){var t=s.default.defaults(arguments,["frequency","width"],s.default.Oscillator);s.default.Source.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._widthGate=new s.default.Gain(0),this._sawtooth=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,type:"sawtooth",phase:t.phase}),this.frequency=this._sawtooth.frequency,this.detune=this._sawtooth.detune,this._thresh=new s.default.WaveShaper(function(t){return t<0?-1:1}),this._sawtooth.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),this._readOnly(["width","frequency","detune"])},s.default.extend(s.default.PulseOscillator,s.default.Source),s.default.PulseOscillator.defaults={frequency:440,detune:0,phase:0,width:.2},s.default.PulseOscillator.prototype._start=function(t){t=this.toSeconds(t),this._sawtooth.start(t),this._widthGate.gain.setValueAtTime(1,t)},s.default.PulseOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._sawtooth.stop(t),this._widthGate.gain.setValueAtTime(0,t)},s.default.PulseOscillator.prototype.restart=function(t){this._sawtooth.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)},Object.defineProperty(s.default.PulseOscillator.prototype,"phase",{get:function(){return this._sawtooth.phase},set:function(t){this._sawtooth.phase=t}}),Object.defineProperty(s.default.PulseOscillator.prototype,"type",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"baseType",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"partials",{get:function(){return[]}}),s.default.PulseOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._sawtooth.dispose(),this._sawtooth=null,this._writable(["width","frequency","detune"]),this.width.dispose(),this.width=null,this._widthGate.dispose(),this._widthGate=null,this._thresh.dispose(),this._thresh=null,this.frequency=null,this.detune=null,this},e.default=s.default.PulseOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(4),i(34);s.default.Event=function(){var t=s.default.defaults(arguments,["callback","value"],s.default.Event);s.default.call(this),this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._state=new s.default.TimelineState(s.default.State.Stopped),this._playbackRate=1,this._startOffset=0,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate},s.default.extend(s.default.Event),s.default.Event.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,value:null,probability:1,mute:!1,humanize:!1},s.default.Event.prototype._rescheduleEvents=function(t){return t=s.default.defaultArg(t,-1),this._state.forEachFrom(t,function(t){var e;if(t.state===s.default.State.Started){s.default.isDefined(t.id)&&s.default.Transport.clear(t.id);var i=t.time+Math.round(this.startOffset/this._playbackRate);if(!0===this._loop||s.default.isNumber(this._loop)&&this._loop>1){e=1/0,s.default.isNumber(this._loop)&&(e=this._loop*this._getLoopDuration());var n=this._state.getAfter(i);null!==n&&(e=Math.min(e,n.time-i)),e!==1/0&&(this._state.setStateAtTime(s.default.State.Stopped,i+e+1),e=s.default.Ticks(e));var o=s.default.Ticks(this._getLoopDuration());t.id=s.default.Transport.scheduleRepeat(this._tick.bind(this),o,s.default.Ticks(i),e)}else t.id=s.default.Transport.schedule(this._tick.bind(this),s.default.Ticks(i))}}.bind(this)),this},Object.defineProperty(s.default.Event.prototype,"state",{get:function(){return this._state.getValueAtTime(s.default.Transport.ticks)}}),Object.defineProperty(s.default.Event.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t}}),Object.defineProperty(s.default.Event.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t}}),Object.defineProperty(s.default.Event.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t}}),s.default.Event.prototype.start=function(t){return t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Stopped&&(this._state.add({state:s.default.State.Started,time:t,id:void 0}),this._rescheduleEvents(t)),this},s.default.Event.prototype.stop=function(t){if(this.cancel(t),t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Started){this._state.setStateAtTime(s.default.State.Stopped,t);var e=this._state.getBefore(t),i=t;null!==e&&(i=e.time),this._rescheduleEvents(i)}return this},s.default.Event.prototype.cancel=function(t){return t=s.default.defaultArg(t,-1/0),t=this.toTicks(t),this._state.forEachFrom(t,function(t){s.default.Transport.clear(t.id)}),this._state.cancel(t),this},s.default.Event.prototype._tick=function(t){var e=s.default.Transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)===s.default.State.Started){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){var i=.02;s.default.isBoolean(this.humanize)||(i=this.toSeconds(this.humanize)),t+=(2*Math.random()-1)*i}this.callback(t,this.value)}},s.default.Event.prototype._getLoopDuration=function(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)},Object.defineProperty(s.default.Event.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"progress",{get:function(){if(this._loop){var t=s.default.Transport.ticks,e=this._state.get(t);if(null!==e&&e.state===s.default.State.Started){var i=this._getLoopDuration();return(t-e.time)%i/i}return 0}return 0}}),s.default.Event.prototype.dispose=function(){this.cancel(),this._state.dispose(),this._state=null,this.callback=null,this.value=null},e.default=s.default.Event},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(29),i(10),i(3),i(1);s.default.MidSideMerge=function(){s.default.AudioNode.call(this),this.createInsOuts(2,0),this.mid=this.input[0]=new s.default.Gain,this._left=new s.default.Add,this._timesTwoLeft=new s.default.Multiply(Math.SQRT1_2),this.side=this.input[1]=new s.default.Gain,this._right=new s.default.Subtract,this._timesTwoRight=new s.default.Multiply(Math.SQRT1_2),this._merge=this.output=new s.default.Merge,this.mid.connect(this._left,0,0),this.side.connect(this._left,0,1),this.mid.connect(this._right,0,0),this.side.connect(this._right,0,1),this._left.connect(this._timesTwoLeft),this._right.connect(this._timesTwoRight),this._timesTwoLeft.connect(this._merge,0,0),this._timesTwoRight.connect(this._merge,0,1)},s.default.extend(s.default.MidSideMerge,s.default.AudioNode),s.default.MidSideMerge.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._left.dispose(),this._left=null,this._timesTwoLeft.dispose(),this._timesTwoLeft=null,this._right.dispose(),this._right=null,this._timesTwoRight.dispose(),this._timesTwoRight=null,this._merge.dispose(),this._merge=null,this},e.default=s.default.MidSideMerge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(13),i(2),i(19),i(1);s.default.MidSideSplit=function(){s.default.AudioNode.call(this),this.createInsOuts(0,2),this._split=this.input=new s.default.Split,this._midAdd=new s.default.Add,this.mid=this.output[0]=new s.default.Multiply(Math.SQRT1_2),this._sideSubtract=new s.default.Subtract,this.side=this.output[1]=new s.default.Multiply(Math.SQRT1_2),this._split.connect(this._midAdd,0,0),this._split.connect(this._midAdd,1,1),this._split.connect(this._sideSubtract,0,0),this._split.connect(this._sideSubtract,1,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)},s.default.extend(s.default.MidSideSplit,s.default.AudioNode),s.default.MidSideSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midAdd.dispose(),this._midAdd=null,this._sideSubtract.dispose(),this._sideSubtract=null,this._split.dispose(),this._split=null,this},e.default=s.default.MidSideSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(9),i(1),i(59);s.default.LowpassCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance","dampening"],s.default.LowpassCombFilter);s.default.AudioNode.call(this),this._combFilter=this.output=new s.default.FeedbackCombFilter(t.delayTime,t.resonance),this.delayTime=this._combFilter.delayTime,this._lowpass=this.input=new s.default.Filter({frequency:t.dampening,type:"lowpass",Q:0,rolloff:-12}),this.dampening=this._lowpass.frequency,this.resonance=this._combFilter.resonance,this._lowpass.connect(this._combFilter),this._readOnly(["dampening","resonance","delayTime"])},s.default.extend(s.default.LowpassCombFilter,s.default.AudioNode),s.default.LowpassCombFilter.defaults={delayTime:.1,resonance:.5,dampening:3e3},s.default.LowpassCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["dampening","resonance","delayTime"]),this._combFilter.dispose(),this._combFilter=null,this.resonance=null,this.delayTime=null,this._lowpass.dispose(),this._lowpass=null,this.dampening=null,this},e.default=s.default.LowpassCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(45);s.default.Ticks=function(t,e){if(!(this instanceof s.default.Ticks))return new s.default.Ticks(t,e);s.default.TransportTime.call(this,t,e)},s.default.extend(s.default.Ticks,s.default.TransportTime),s.default.Ticks.prototype._defaultUnits="i",s.default.Ticks.prototype._now=function(){return s.default.Transport.ticks},s.default.Ticks.prototype._beatsToUnits=function(t){return this._getPPQ()*t},s.default.Ticks.prototype._secondsToUnits=function(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())},s.default.Ticks.prototype._ticksToUnits=function(t){return t},s.default.Ticks.prototype.toTicks=function(){return this.valueOf()},s.default.Ticks.prototype.toSeconds=function(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())},e.default=s.default.Ticks},function(t,e,i){"use strict";i.r(e);var s=i(0);i(55);s.default.TransportEvent=function(t,e){e=s.default.defaultArg(e,s.default.TransportEvent.defaults),s.default.call(this),this.Transport=t,this.id=s.default.TransportEvent._eventId++,this.time=s.default.Ticks(e.time),this.callback=e.callback,this._once=e.once},s.default.extend(s.default.TransportEvent),s.default.TransportEvent.defaults={once:!1,callback:s.default.noOp},s.default.TransportEvent._eventId=0,s.default.TransportEvent.prototype.invoke=function(t){this.callback&&(this.callback(t),this._once&&this.Transport&&this.Transport.clear(this.id))},s.default.TransportEvent.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this.Transport=null,this.callback=null,this.time=null,this},e.default=s.default.TransportEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(82),i(34),i(24),i(14);s.default.TickSource=function(){var t=s.default.defaults(arguments,["frequency"],s.default.TickSource);this.frequency=new s.default.TickSignal(t.frequency),this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._tickOffset=new s.default.Timeline,this.setTicksAtTime(0,0)},s.default.extend(s.default.TickSource),s.default.TickSource.defaults={frequency:1},Object.defineProperty(s.default.TickSource.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.TickSource.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),s.default.isDefined(e)&&this.setTicksAtTime(e,t)),this},s.default.TickSource.prototype.stop=function(t){if(t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Stopped){var e=this._state.get(t);e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this.setTicksAtTime(0,t),this},s.default.TickSource.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&this._state.setStateAtTime(s.default.State.Paused,t),this},s.default.TickSource.prototype.cancel=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this},s.default.TickSource.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.ticks,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=this.frequency.getTicksAtTime(t.time)-this.frequency.getTicksAtTime(e)),n=t}.bind(this)),this._state.remove(i),o},Object.defineProperty(s.default.TickSource.prototype,"ticks",{get:function(){return this.getTicksAtTime(this.now())},set:function(t){this.setTicksAtTime(t,this.now())}}),Object.defineProperty(s.default.TickSource.prototype,"seconds",{get:function(){return this.getSecondsAtTime(this.now())},set:function(t){var e=this.now(),i=this.frequency.timeToTicks(t,e);this.setTicksAtTime(i,e)}}),s.default.TickSource.prototype.getSecondsAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.seconds,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=t.time-e),n=t}.bind(this)),this._state.remove(i),o},s.default.TickSource.prototype.setTicksAtTime=function(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({time:e,ticks:t,seconds:this.frequency.getDurationOfTicks(t,e)}),this},s.default.TickSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.TickSource.prototype.getTimeOfTick=function(t,e){e=s.default.defaultArg(e,this.now());var i=this._tickOffset.get(e),n=this._state.get(e),o=Math.max(i.time,n.time),a=this.frequency.getTicksAtTime(o)+t-i.ticks;return this.frequency.getTimeOfTick(a)},s.default.TickSource.prototype.forEachTickBetween=function(t,e,i){var n=this._state.get(t);if(this._state.forEachBetween(t,e,function(e){n.state===s.default.State.Started&&e.state!==s.default.State.Started&&this.forEachTickBetween(Math.max(n.time,t),e.time-this.sampleTime,i),n=e}.bind(this)),t=Math.max(n.time,t),n.state===s.default.State.Started&&this._state){var o=this.frequency.getTicksAtTime(t),a=(o-this.frequency.getTicksAtTime(n.time))%1;0!==a&&(a=1-a);for(var r=this.frequency.getTimeOfTick(o+a),l=null;r<e&&this._state;){try{i(r,Math.round(this.getTicksAtTime(r)))}catch(t){l=t;break}this._state&&(r+=this.frequency.getDurationOfTicks(1,r))}}if(l)throw l;return this},s.default.TickSource.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._state.dispose(),this._state=null,this._tickOffset.dispose(),this._tickOffset=null,this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this},e.default=s.default.TickSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(87),i(13),i(2),i(4),i(18),i(1);s.default.Follower=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Follower);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._abs=new s.default.Abs,this._filter=this.context.createBiquadFilter(),this._filter.type="lowpass",this._filter.frequency.value=0,this._filter.Q.value=0,this._sub=new s.default.Subtract,this._delay=new s.default.Delay(this.blockTime),this._smoothing=t.smoothing,s.default.connect(this.input,this._delay),s.default.connect(this.input,this._sub,0,1),this._sub.chain(this._abs,this._filter,this.output),this.smoothing=t.smoothing},s.default.extend(s.default.Follower,s.default.AudioNode),s.default.Follower.defaults={smoothing:.05},Object.defineProperty(s.default.Follower.prototype,"smoothing",{get:function(){return this._smoothing},set:function(t){this._smoothing=t,this._filter.frequency.value=.5*s.default.Time(t).toFrequency()}}),s.default.Follower.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Follower.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._filter.disconnect(),this._filter=null,this._delay.dispose(),this._delay=null,this._sub.disconnect(),this._sub=null,this._abs.dispose(),this._abs=null,this},e.default=s.default.Follower},function(t,e,i){"use strict";i.r(e);var s=i(0);i(42),i(2),i(14),i(18),i(3),i(1);s.default.FeedbackCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance"],s.default.FeedbackCombFilter);s.default.AudioNode.call(this),this._delay=this.input=this.output=new s.default.Delay(t.delayTime),this.delayTime=this._delay.delayTime,this._feedback=new s.default.Gain(t.resonance,s.default.Type.NormalRange),this.resonance=this._feedback.gain,this._delay.chain(this._feedback,this._delay),this._readOnly(["resonance","delayTime"])},s.default.extend(s.default.FeedbackCombFilter,s.default.AudioNode),s.default.FeedbackCombFilter.defaults={delayTime:.1,resonance:.5},s.default.FeedbackCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["resonance","delayTime"]),this._delay.dispose(),this._delay=null,this.delayTime=null,this._feedback.dispose(),this._feedback=null,this.resonance=null,this},e.default=s.default.FeedbackCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(9),i(2),i(3),i(1);s.default.MultibandSplit=function(){var t=s.default.defaults(arguments,["lowFrequency","highFrequency"],s.default.MultibandSplit);s.default.AudioNode.call(this),this.input=new s.default.Gain,this.output=new Array(3),this.low=this.output[0]=new s.default.Filter(0,"lowpass"),this._lowMidFilter=new s.default.Filter(0,"highpass"),this.mid=this.output[1]=new s.default.Filter(0,"lowpass"),this.high=this.output[2]=new s.default.Filter(0,"highpass"),this.lowFrequency=new s.default.Signal(t.lowFrequency,s.default.Type.Frequency),this.highFrequency=new s.default.Signal(t.highFrequency,s.default.Type.Frequency),this.Q=new s.default.Signal(t.Q),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.connect(this.low.frequency),this.lowFrequency.connect(this._lowMidFilter.frequency),this.highFrequency.connect(this.mid.frequency),this.highFrequency.connect(this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandSplit,s.default.AudioNode),s.default.MultibandSplit.defaults={lowFrequency:400,highFrequency:2500,Q:1},s.default.MultibandSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.low=null,this._lowMidFilter.dispose(),this._lowMidFilter=null,this.mid.dispose(),this.mid=null,this.high.dispose(),this.high=null,this.lowFrequency.dispose(),this.lowFrequency=null,this.highFrequency.dispose(),this.highFrequency=null,this.Q.dispose(),this.Q=null,this},e.default=s.default.MultibandSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.Pow=function(t){s.default.SignalBase.call(this),this._exp=s.default.defaultArg(t,1),this._expScaler=this.input=this.output=new s.default.WaveShaper(this._expFunc(this._exp),8192)},s.default.extend(s.default.Pow,s.default.SignalBase),Object.defineProperty(s.default.Pow.prototype,"value",{get:function(){return this._exp},set:function(t){this._exp=t,this._expScaler.setMap(this._expFunc(this._exp))}}),s.default.Pow.prototype._expFunc=function(t){return function(e){return Math.pow(Math.abs(e),t)}},s.default.Pow.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._expScaler.dispose(),this._expScaler=null,this},e.default=s.default.Pow},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.TimeBase=function(t,e){if(!(this instanceof s.default.TimeBase))return new s.default.TimeBase(t,e);if(this._val=t,this._units=e,s.default.isUndef(this._units)&&s.default.isString(this._val)&&parseFloat(this._val)==this._val&&"+"!==this._val.charAt(0))this._val=parseFloat(this._val),this._units=this._defaultUnits;else if(t&&t.constructor===this.constructor)this._val=t._val,this._units=t._units;else if(t instanceof s.default.TimeBase)switch(this._defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break;default:throw new Error("Unrecognized default units "+this._defaultUnits)}},s.default.extend(s.default.TimeBase),s.default.TimeBase.prototype._expressions={n:{regexp:/^(\d+)n(\.?)$/i,method:function(t,e){t=parseInt(t);var i="."===e?1.5:1;return 1===t?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/t)*i}},t:{regexp:/^(\d+)t$/i,method:function(t){return t=parseInt(t),this._beatsToUnits(8/(3*parseInt(t)))}},m:{regexp:/^(\d+)m$/i,method:function(t){return this._beatsToUnits(parseInt(t)*this._getTimeSignature())}},i:{regexp:/^(\d+)i$/i,method:function(t){return this._ticksToUnits(parseInt(t))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz$/i,method:function(t){return this._frequencyToUnits(parseFloat(t))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,method:function(t,e,i){var s=0;return t&&"0"!==t&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s+=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s+=this._beatsToUnits(parseFloat(i)/4)),s}},s:{regexp:/^(\d+(?:\.\d+)?)s$/,method:function(t){return this._secondsToUnits(parseFloat(t))}},samples:{regexp:/^(\d+)samples$/,method:function(t){return parseInt(t)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)$/,method:function(t){return this._expressions[this._defaultUnits].method.call(this,t)}}},s.default.TimeBase.prototype._defaultUnits="s",s.default.TimeBase.prototype._getBpm=function(){return s.default.Transport?s.default.Transport.bpm.value:120},s.default.TimeBase.prototype._getTimeSignature=function(){return s.default.Transport?s.default.Transport.timeSignature:4},s.default.TimeBase.prototype._getPPQ=function(){return s.default.Transport?s.default.Transport.PPQ:192},s.default.TimeBase.prototype._now=function(){return this.now()},s.default.TimeBase.prototype._frequencyToUnits=function(t){return 1/t},s.default.TimeBase.prototype._beatsToUnits=function(t){return 60/this._getBpm()*t},s.default.TimeBase.prototype._secondsToUnits=function(t){return t},s.default.TimeBase.prototype._ticksToUnits=function(t){return t*(this._beatsToUnits(1)/this._getPPQ())},s.default.TimeBase.prototype._noArg=function(){return this._now()},s.default.TimeBase.prototype.valueOf=function(){if(s.default.isUndef(this._val))return this._noArg();if(s.default.isString(this._val)&&s.default.isUndef(this._units)){for(var t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(s.default.isObject(this._val)){var e=0;for(var i in this._val){var n=this._val[i];e+=new this.constructor(i).valueOf()*n}return e}if(s.default.isDefined(this._units)){var o=this._expressions[this._units],a=this._val.toString().trim().match(o.regexp);return a?o.method.apply(this,a.slice(1)):o.method.call(this,parseFloat(this._val))}return this._val},s.default.TimeBase.prototype.toSeconds=function(){return this.valueOf()},s.default.TimeBase.prototype.toFrequency=function(){return 1/this.toSeconds()},s.default.TimeBase.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},s.default.TimeBase.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},s.default.TimeBase.prototype.dispose=function(){this._val=null,this._units=null},e.default=s.default.TimeBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62),i(46);s.default.Time=function(t,e){if(!(this instanceof s.default.Time))return new s.default.Time(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Time,s.default.TimeBase),s.default.Time.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{quantize:{regexp:/^@(.+)/,method:function(t){if(s.default.Transport){var e=new this.constructor(t);return this._secondsToUnits(s.default.Transport.nextSubdivision(e))}return 0}},now:{regexp:/^\+(.+)/,method:function(t){return this._now()+new this.constructor(t)}}}),s.default.Time.prototype.quantize=function(t,e){e=s.default.defaultArg(e,1);var i=new this.constructor(t),n=this.valueOf();return n+(Math.round(n/i)*i-n)*e},s.default.Time.prototype.toNotation=function(){for(var t=this.toSeconds(),e=["1m"],i=1;i<8;i++){var n=Math.pow(2,i);e.push(n+"n."),e.push(n+"n"),e.push(n+"t")}e.push("0");var o=e[0],a=s.default.Time(e[0]).toSeconds();return e.forEach(function(e){var i=s.default.Time(e).toSeconds();Math.abs(i-t)<Math.abs(a-t)&&(o=e,a=i)}),o},s.default.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;e=parseFloat(e.toFixed(4));var i=Math.floor(e/this._getTimeSignature()),s=e%1*4;return e=Math.floor(e)%this._getTimeSignature(),(s=s.toString()).length>3&&(s=parseFloat(parseFloat(s).toFixed(3))),[i,e,s].join(":")},s.default.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())},s.default.Time.prototype.toSeconds=function(){return this.valueOf()},s.default.Time.prototype.toMidi=function(){return s.default.Frequency.ftom(this.toFrequency())},e.default=s.default.Time},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.supported&&(OscillatorNode.prototype.setPeriodicWave||(OscillatorNode.prototype.setPeriodicWave=OscillatorNode.prototype.setWaveTable),AudioContext.prototype.createPeriodicWave||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable)),s.default.OscillatorNode=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OscillatorNode);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._oscillator=this.context.createOscillator(),s.default.connect(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new s.default.Param({param:this._oscillator.frequency,units:s.default.Type.Frequency,value:t.frequency}),this.detune=new s.default.Param({param:this._oscillator.detune,units:s.default.Type.Cents,value:t.detune}),this._gain=1},s.default.extend(s.default.OscillatorNode,s.default.AudioNode),s.default.OscillatorNode.defaults={frequency:440,detune:0,type:"sine",onended:s.default.noOp},Object.defineProperty(s.default.OscillatorNode.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.OscillatorNode.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&t>=this._startTime&&(-1===this._stopTime||t<=this._stopTime)?s.default.State.Started:s.default.State.Stopped},s.default.OscillatorNode.prototype.start=function(t){if(this.log("start",t),-1!==this._startTime)throw new Error("cannot call OscillatorNode.start more than once");return this._startTime=this.toSeconds(t),this._startTime=Math.max(this._startTime,this.context.currentTime),this._oscillator.start(this._startTime),this._gainNode.gain.setValueAtTime(1,this._startTime),this},s.default.OscillatorNode.prototype.setPeriodicWave=function(t){return this._oscillator.setPeriodicWave(t),this},s.default.OscillatorNode.prototype.stop=function(t){return this.log("stop",t),this.assert(-1!==this._startTime,"'start' must be called before 'stop'"),this.cancelStop(),this._stopTime=this.toSeconds(t),this._stopTime=Math.max(this._stopTime,this.context.currentTime),this._stopTime>this._startTime?(this._gainNode.gain.setValueAtTime(0,this._stopTime),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(function(){this._oscillator.stop(this.now()),this.onended(),setTimeout(function(){this._oscillator&&(this._oscillator.disconnect(),this._gainNode.disconnect())}.bind(this),100)}.bind(this),this._stopTime-this.context.currentTime)):this._gainNode.gain.cancelScheduledValues(this._startTime),this},s.default.OscillatorNode.prototype.cancelStop=function(){return-1!==this._startTime&&(this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1),this},Object.defineProperty(s.default.OscillatorNode.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t}}),s.default.OscillatorNode.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,this.context.clearTimeout(this._timeout),s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._oscillator.disconnect(),this._oscillator=null,this._gainNode.dispose(),this._gainNode=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null),this};e.default=s.default.OscillatorNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(57),i(32);s.default.Player=function(t){var e;t instanceof s.default.Buffer&&t.loaded?(t=t.get(),e=s.default.Player.defaults):e=s.default.defaults(arguments,["url","onload"],s.default.Player),s.default.Source.call(this,e),this.autostart=e.autostart,this._buffer=new s.default.Buffer({url:e.url,onload:this._onload.bind(this,e.onload),reverse:e.reverse}),t instanceof AudioBuffer&&this._buffer.set(t),this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this._activeSources=[],this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut},s.default.extend(s.default.Player,s.default.Source),s.default.Player.defaults={onload:s.default.noOp,playbackRate:1,loop:!1,autostart:!1,loopStart:0,loopEnd:0,reverse:!1,fadeIn:0,fadeOut:0},s.default.Player.prototype.load=function(t,e){return this._buffer.load(t,this._onload.bind(this,e))},s.default.Player.prototype._onload=function(t){(t=s.default.defaultArg(t,s.default.noOp))(this),this.autostart&&this.start()},s.default.Player.prototype._onSourceEnd=function(t){var e=this._activeSources.indexOf(t);this._activeSources.splice(e,1),0!==this._activeSources.length||this._synced||this._state.setStateAtTime(s.default.State.Stopped,s.default.now())},s.default.Player.prototype._start=function(t,e,i){e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),this._synced&&(e*=this._playbackRate);var n=s.default.defaultArg(i,Math.max(this._buffer.duration-e,0));n=this.toSeconds(n),n/=this._playbackRate,t=this.toSeconds(t);var o=new s.default.BufferSource({buffer:this._buffer,loop:this._loop,loopStart:this._loopStart,loopEnd:this._loopEnd,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate,fadeIn:this.fadeIn,fadeOut:this.fadeOut}).connect(this.output);return this._loop||this._synced||this._state.setStateAtTime(s.default.State.Stopped,t+n),this._activeSources.push(o),this._loop&&s.default.isUndef(i)?o.start(t,e):o.start(t,e,n-this.toSeconds(this.fadeOut)),this},s.default.Player.prototype._stop=function(t){return t=this.toSeconds(t),this._activeSources.forEach(function(e){e.stop(t)}),this},s.default.Player.prototype.restart=function(t,e,i){return this._stop(t),this._start(t,e,i),this},s.default.Player.prototype.seek=function(t,e){return e=this.toSeconds(e),this._state.getValueAtTime(e)===s.default.State.Started&&(t=this.toSeconds(t),this._stop(e),this._start(e,t)),this},s.default.Player.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Player.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=t,this._activeSources.forEach(function(e){e.loopStart=t})}}),Object.defineProperty(s.default.Player.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=t,this._activeSources.forEach(function(e){e.loopEnd=t})}}),Object.defineProperty(s.default.Player.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.Player.prototype,"loop",{get:function(){return this._loop},set:function(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(function(e){e.loop=t}),t)){var e=this._state.getNextState(s.default.State.Stopped,this.now());e&&this._state.cancel(e.time)}}}),Object.defineProperty(s.default.Player.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t;var e=this.now(),i=this._state.getNextState(s.default.State.Stopped,e);i&&this._state.cancel(i.time),this._activeSources.forEach(function(i){i.cancelStop(),i.playbackRate.setValueAtTime(t,e)})}}),Object.defineProperty(s.default.Player.prototype,"reverse",{get:function(){return this._buffer.reverse},set:function(t){this._buffer.reverse=t}}),Object.defineProperty(s.default.Player.prototype,"loaded",{get:function(){return this._buffer.loaded}}),s.default.Player.prototype.dispose=function(){return this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,s.default.Source.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this},e.default=s.default.Player},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(37),i(2),i(9),i(25);s.default.MonoSynth=function(t){t=s.default.defaultArg(t,s.default.MonoSynth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new s.default.Filter(t.filter),this.filter.frequency.value=5e3,this.filterEnvelope=new s.default.FrequencyEnvelope(t.filterEnvelope),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),this._readOnly(["oscillator","frequency","detune","filter","filterEnvelope","envelope"])},s.default.extend(s.default.MonoSynth,s.default.Monophonic),s.default.MonoSynth.defaults={frequency:"C4",detune:0,oscillator:{type:"square"},filter:{Q:6,type:"lowpass",rolloff:-24},envelope:{attack:.005,decay:.1,sustain:.9,release:1},filterEnvelope:{attack:.06,decay:.2,sustain:.5,release:2,baseFrequency:200,octaves:7,exponent:2}},s.default.MonoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.MonoSynth.prototype._triggerEnvelopeRelease=function(t){return this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MonoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","filter","filterEnvelope","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.filterEnvelope.dispose(),this.filterEnvelope=null,this.filter.dispose(),this.filter=null,this.frequency=null,this.detune=null,this},e.default=s.default.MonoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FatOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","spread"],s.default.FatOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._oscillators=[],this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,this._readOnly(["frequency","detune"])},s.default.extend(s.default.FatOscillator,s.default.Source),s.default.FatOscillator.defaults={frequency:440,detune:0,phase:0,spread:20,count:3,type:"sawtooth",partials:[],partialCount:0},s.default.FatOscillator.prototype._start=function(t){t=this.toSeconds(t),this._forEach(function(e){e.start(t)})},s.default.FatOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._forEach(function(e){e.stop(t)})},s.default.FatOscillator.prototype.restart=function(t){t=this.toSeconds(t),this._forEach(function(e){e.restart(t)})},s.default.FatOscillator.prototype._forEach=function(t){for(var e=0;e<this._oscillators.length;e++)t.call(this,this._oscillators[e],e)},Object.defineProperty(s.default.FatOscillator.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._forEach(function(e){e.type=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"spread",{get:function(){return this._spread},set:function(t){if(this._spread=t,this._oscillators.length>1){var e=-t/2,i=t/(this._oscillators.length-1);this._forEach(function(t,s){t.detune.value=e+i*s})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"count",{get:function(){return this._oscillators.length},set:function(t){if(t=Math.max(t,1),this._oscillators.length!==t){this._forEach(function(t){t.dispose()}),this._oscillators=[];for(var e=0;e<t;e++){var i=new s.default.Oscillator;this.type===s.default.Oscillator.Type.Custom?i.partials=this._partials:i.type=this._type,i.partialCount=this._partialCount,i.phase=this._phase+e/t*360,i.volume.value=-6-1.1*t,this.frequency.connect(i.frequency),this.detune.connect(i.detune),i.connect(this.output),this._oscillators[e]=i}this.spread=this._spread,this.state===s.default.State.Started&&this._forEach(function(t){t.start()})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"phase",{get:function(){return this._phase},set:function(t){this._phase=t,this._forEach(function(e){e.phase=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"baseType",{get:function(){return this._oscillators[0].baseType},set:function(t){this._forEach(function(e){e.baseType=t}),this._type=this._oscillators[0].type}}),Object.defineProperty(s.default.FatOscillator.prototype,"partials",{get:function(){return this._oscillators[0].partials},set:function(t){this._partials=t,this._type=s.default.Oscillator.Type.Custom,this._forEach(function(e){e.partials=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"partialCount",{get:function(){return this._oscillators[0].partialCount},set:function(t){this._partialCount=t,this._forEach(function(e){e.partialCount=t}),this._type=this._oscillators[0].type}}),s.default.FatOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._forEach(function(t){t.dispose()}),this._oscillators=null,this._partials=null,this},e.default=s.default.FatOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3),i(22);s.default.AMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.AMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this.detune.value=t.detune,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this._modulationScale=new s.default.AudioToGain,this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.connect(this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this.phase=t.phase,this._readOnly(["frequency","detune","harmonicity"])},s.default.extend(s.default.AMOscillator,s.default.Oscillator),s.default.AMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationType:"square",harmonicity:1},s.default.AMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.AMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.AMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.AMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.AMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune","harmonicity"]),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this._modulationScale.dispose(),this._modulationScale=null,this},e.default=s.default.AMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(50),i(17),i(5);s.default.PWMOscillator=function(){var t=s.default.defaults(arguments,["frequency","modulationFrequency"],s.default.PWMOscillator);s.default.Source.call(this,t),this._pulse=new s.default.PulseOscillator(t.modulationFrequency),this._pulse._sawtooth.type="sine",this._modulator=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,phase:t.phase}),this._scale=new s.default.Multiply(2),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this.modulationFrequency=this._pulse.frequency,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),this._readOnly(["modulationFrequency","frequency","detune"])},s.default.extend(s.default.PWMOscillator,s.default.Source),s.default.PWMOscillator.defaults={frequency:440,detune:0,phase:0,modulationFrequency:.4},s.default.PWMOscillator.prototype._start=function(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)},s.default.PWMOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)},s.default.PWMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._pulse.restart(t)},Object.defineProperty(s.default.PWMOscillator.prototype,"type",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"baseType",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"partials",{get:function(){return[]}}),Object.defineProperty(s.default.PWMOscillator.prototype,"phase",{get:function(){return this._modulator.phase},set:function(t){this._modulator.phase=t}}),s.default.PWMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._pulse.dispose(),this._pulse=null,this._scale.dispose(),this._scale=null,this._modulator.dispose(),this._modulator=null,this._writable(["modulationFrequency","frequency","detune"]),this.frequency=null,this.detune=null,this.modulationFrequency=null,this},e.default=s.default.PWMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51),i(4),i(16);s.default.Part=function(){var t=s.default.defaults(arguments,["callback","events"],s.default.Part);s.default.Event.call(this,t),this._events=[];for(var e=0;e<t.events.length;e++)Array.isArray(t.events[e])?this.add(t.events[e][0],t.events[e][1]):this.add(t.events[e])},s.default.extend(s.default.Part,s.default.Event),s.default.Part.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,probability:1,humanize:!1,mute:!1,events:[]},s.default.Part.prototype.start=function(t,e){var i=this.toTicks(t);return this._state.getValueAtTime(i)!==s.default.State.Started&&(e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toTicks(e),this._state.add({state:s.default.State.Started,time:i,offset:e}),this._forEach(function(t){this._startNote(t,i,e)})),this},s.default.Part.prototype._startNote=function(t,e,i){e-=i,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<i&&(e+=this._getLoopDuration()),t.start(s.default.Ticks(e))):t.startOffset<this._loopStart&&t.startOffset>=i&&(t.loop=!1,t.start(s.default.Ticks(e))):t.startOffset>=i&&t.start(s.default.Ticks(e))},Object.defineProperty(s.default.Part.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t,this._forEach(function(t){t.startOffset+=this._startOffset})}}),s.default.Part.prototype.stop=function(t){var e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime(s.default.State.Stopped,e),this._forEach(function(e){e.stop(t)}),this},s.default.Part.prototype.at=function(t,e){t=s.default.TransportTime(t);for(var i=s.default.Ticks(1).toSeconds(),n=0;n<this._events.length;n++){var o=this._events[n];if(Math.abs(t.toTicks()-o.startOffset)<i)return s.default.isDefined(e)&&(o.value=e),o}return s.default.isDefined(e)?(this.add(t,e),this._events[this._events.length-1]):null},s.default.Part.prototype.add=function(t,e){var i;return t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t),e instanceof s.default.Event?(i=e).callback=this._tick.bind(this):i=new s.default.Event({callback:this._tick.bind(this),value:e}),i.startOffset=t,i.set({loopEnd:this.loopEnd,loopStart:this.loopStart,loop:this.loop,humanize:this.humanize,playbackRate:this.playbackRate,probability:this.probability}),this._events.push(i),this._restartEvent(i),this},s.default.Part.prototype._restartEvent=function(t){this._state.forEach(function(e){e.state===s.default.State.Started?this._startNote(t,e.time,e.offset):t.stop(s.default.Ticks(e.time))}.bind(this))},s.default.Part.prototype.remove=function(t,e){t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n.startOffset===t&&(s.default.isUndef(e)||s.default.isDefined(e)&&n.value===e)&&(this._events.splice(i,1),n.dispose())}return this},s.default.Part.prototype.removeAll=function(){return this._forEach(function(t){t.dispose()}),this._events=[],this},s.default.Part.prototype.cancel=function(t){return this._forEach(function(e){e.cancel(t)}),this._state.cancel(this.toTicks(t)),this},s.default.Part.prototype._forEach=function(t,e){if(this._events){e=s.default.defaultArg(e,this);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n instanceof s.default.Part?n._forEach(t,e):t.call(e,n)}}return this},s.default.Part.prototype._setAll=function(t,e){this._forEach(function(i){i[t]=e})},s.default.Part.prototype._tick=function(t,e){this.mute||this.callback(t,e)},s.default.Part.prototype._testLoopBoundries=function(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):t.state===s.default.State.Stopped&&this._restartEvent(t)},Object.defineProperty(s.default.Part.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t,this._setAll("probability",t)}}),Object.defineProperty(s.default.Part.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t,this._setAll("humanize",t)}}),Object.defineProperty(s.default.Part.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._forEach(function(e){e._loopStart=this._loopStart,e._loopEnd=this._loopEnd,e.loop=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(function(e){e.loopEnd=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(function(t){t.loopStart=this.loopStart,this._testLoopBoundries(t)})}}),Object.defineProperty(s.default.Part.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._setAll("playbackRate",t)}}),Object.defineProperty(s.default.Part.prototype,"length",{get:function(){return this._events.length}}),s.default.Part.prototype.dispose=function(){return s.default.Event.prototype.dispose.call(this),this.removeAll(),this.callback=null,this._events=null,this},e.default=s.default.Part},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51);s.default.Loop=function(){var t=s.default.defaults(arguments,["callback","interval"],s.default.Loop);s.default.call(this),this._event=new s.default.Event({callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations},s.default.extend(s.default.Loop),s.default.Loop.defaults={interval:"4n",callback:s.default.noOp,playbackRate:1,iterations:1/0,probability:!0,mute:!1},s.default.Loop.prototype.start=function(t){return this._event.start(t),this},s.default.Loop.prototype.stop=function(t){return this._event.stop(t),this},s.default.Loop.prototype.cancel=function(t){return this._event.cancel(t),this},s.default.Loop.prototype._tick=function(t){this.callback(t)},Object.defineProperty(s.default.Loop.prototype,"state",{get:function(){return this._event.state}}),Object.defineProperty(s.default.Loop.prototype,"progress",{get:function(){return this._event.progress}}),Object.defineProperty(s.default.Loop.prototype,"interval",{get:function(){return this._event.loopEnd},set:function(t){this._event.loopEnd=t}}),Object.defineProperty(s.default.Loop.prototype,"playbackRate",{get:function(){return this._event.playbackRate},set:function(t){this._event.playbackRate=t}}),Object.defineProperty(s.default.Loop.prototype,"humanize",{get:function(){return this._event.humanize},set:function(t){this._event.humanize=t}}),Object.defineProperty(s.default.Loop.prototype,"probability",{get:function(){return this._event.probability},set:function(t){this._event.probability=t}}),Object.defineProperty(s.default.Loop.prototype,"mute",{get:function(){return this._event.mute},set:function(t){this._event.mute=t}}),Object.defineProperty(s.default.Loop.prototype,"iterations",{get:function(){return!0===this._event.loop?1/0:this._event.loop},set:function(t){this._event.loop=t===1/0||t}}),s.default.Loop.prototype.dispose=function(){this._event.dispose(),this._event=null,this.callback=null},e.default=s.default.Loop},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33);s.default.StereoXFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackLR=new s.default.Gain,this._feedbackRL=new s.default.Gain,this.effectReturnL.chain(this._feedbackLR,this.effectSendR),this.effectReturnR.chain(this._feedbackRL,this.effectSendL),this.feedback.fan(this._feedbackLR.gain,this._feedbackRL.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoXFeedbackEffect,s.default.StereoEffect),s.default.StereoXFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackLR.dispose(),this._feedbackLR=null,this._feedbackRL.dispose(),this._feedbackRL=null,this},e.default=s.default.StereoXFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(53),i(52);s.default.MidSideEffect=function(){s.default.Effect.apply(this,arguments),this._midSideSplit=new s.default.MidSideSplit,this._midSideMerge=new s.default.MidSideMerge,this.midSend=this._midSideSplit.mid,this.sideSend=this._midSideSplit.side,this.midReturn=this._midSideMerge.mid,this.sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)},s.default.extend(s.default.MidSideEffect,s.default.Effect),s.default.MidSideEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this.midSend=null,this.sideSend=null,this.midReturn=null,this.sideReturn=null,this},e.default=s.default.MidSideEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(8);s.default.Convolver=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.Convolver);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this._buffer=new s.default.Buffer(t.url,function(e){this.buffer=e.get(),t.onload()}.bind(this)),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.connectEffect(this._convolver)},s.default.extend(s.default.Convolver,s.default.Effect),s.default.Convolver.defaults={onload:s.default.noOp,normalize:!0},Object.defineProperty(s.default.Convolver.prototype,"buffer",{get:function(){return this._buffer.length?this._buffer:null},set:function(t){this._buffer.set(t),this._convolver.buffer&&(this.effectSend.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.connectEffect(this._convolver)),this._convolver.buffer=this._buffer.get()}}),Object.defineProperty(s.default.Convolver.prototype,"normalize",{get:function(){return this._convolver.normalize},set:function(t){this._convolver.normalize=t}}),s.default.Convolver.prototype.load=function(t,e){return this._buffer.load(t,function(t){this.buffer=t,e&&e()}.bind(this))},s.default.Convolver.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Convolver},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(5),i(13);s.default.Modulo=function(t){s.default.SignalBase.call(this),this.createInsOuts(1,0),this._shaper=new s.default.WaveShaper(Math.pow(2,16)),this._multiply=new s.default.Multiply,this._subtract=this.output=new s.default.Subtract,this._modSignal=new s.default.Signal(t),s.default.connect(this.input,this._shaper),s.default.connect(this.input,this._subtract),this._modSignal.connect(this._multiply,0,0),this._shaper.connect(this._multiply,0,1),this._multiply.connect(this._subtract,0,1),this._setWaveShaper(t)},s.default.extend(s.default.Modulo,s.default.SignalBase),s.default.Modulo.prototype._setWaveShaper=function(t){this._shaper.setMap(function(e){return Math.floor((e+1e-4)/t)})},Object.defineProperty(s.default.Modulo.prototype,"value",{get:function(){return this._modSignal.value},set:function(t){this._modSignal.value=t,this._setWaveShaper(t)}}),s.default.Modulo.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this._multiply.dispose(),this._multiply=null,this._subtract.dispose(),this._subtract=null,this._modSignal.dispose(),this._modSignal=null,this},e.default=s.default.Modulo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20),i(92);s.default.OfflineContext=function(t,e,i){var n=new OfflineAudioContext(t,e*i,i);s.default.Context.call(this,{context:n,clockSource:"offline",lookAhead:0,updateInterval:128/i}),this._duration=e,this._currentTime=0},s.default.extend(s.default.OfflineContext,s.default.Context),s.default.OfflineContext.prototype.now=function(){return this._currentTime},s.default.OfflineContext.prototype.resume=function(){return Promise.resolve()},s.default.OfflineContext.prototype.render=function(){for(;this._duration-this._currentTime>=0;)this.emit("tick"),this._currentTime+=.005;return this._context.startRendering()},s.default.OfflineContext.prototype.close=function(){return this._context=null,Promise.resolve()},e.default=s.default.OfflineContext},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(11),i(76),i(40);s.default.Offline=function(t,e){var i=s.default.context.sampleRate,n=s.default.context,o=new s.default.OfflineContext(2,e,i);s.default.context=o;var a=t(s.default.Transport),r=null;return r=a&&s.default.isFunction(a.then)?a.then(function(){return o.render()}):o.render(),s.default.context=n,r.then(function(t){return new s.default.Buffer(t)})},e.default=s.default.Offline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11);s.default.Buffers=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Buffers);for(var n in s.default.call(this),this._buffers={},this.baseUrl=i.baseUrl,this._loadingCount=0,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Buffers),s.default.Buffers.defaults={onload:s.default.noOp,baseUrl:""},s.default.Buffers.prototype.has=function(t){return this._buffers.hasOwnProperty(t)},s.default.Buffers.prototype.get=function(t){if(this.has(t))return this._buffers[t];throw new Error("Tone.Buffers: no buffer named "+t)},s.default.Buffers.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Buffers.prototype,"loaded",{get:function(){var t=!0;for(var e in this._buffers){var i=this.get(e);t=t&&i.loaded}return t}}),s.default.Buffers.prototype.add=function(t,e,i){return i=s.default.defaultArg(i,s.default.noOp),e instanceof s.default.Buffer?(this._buffers[t]=e,i(this)):e instanceof AudioBuffer?(this._buffers[t]=new s.default.Buffer(e),i(this)):s.default.isString(e)&&(this._buffers[t]=new s.default.Buffer(this.baseUrl+e,i)),this},s.default.Buffers.prototype.dispose=function(){for(var t in s.default.prototype.dispose.call(this),this._buffers)this._buffers[t].dispose();return this._buffers=null,this},e.default=s.default.Buffers},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlPattern=function(){var t=s.default.defaults(arguments,["values","type"],s.default.CtrlPattern);s.default.call(this),this.values=t.values,this.index=0,this._type=null,this._shuffled=null,this._direction=null,this.type=t.type},s.default.extend(s.default.CtrlPattern),s.default.CtrlPattern.Type={Up:"up",Down:"down",UpDown:"upDown",DownUp:"downUp",AlternateUp:"alternateUp",AlternateDown:"alternateDown",Random:"random",RandomWalk:"randomWalk",RandomOnce:"randomOnce"},s.default.CtrlPattern.defaults={type:s.default.CtrlPattern.Type.Up,values:[]},Object.defineProperty(s.default.CtrlPattern.prototype,"value",{get:function(){if(0!==this.values.length){if(1===this.values.length)return this.values[0];this.index=Math.min(this.index,this.values.length-1);var t=this.values[this.index];return this.type===s.default.CtrlPattern.Type.RandomOnce&&(this.values.length!==this._shuffled.length&&this._shuffleValues(),t=this.values[this._shuffled[this.index]]),t}}}),Object.defineProperty(s.default.CtrlPattern.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._shuffled=null,this._type===s.default.CtrlPattern.Type.Up||this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.RandomOnce||this._type===s.default.CtrlPattern.Type.AlternateUp?this.index=0:this._type!==s.default.CtrlPattern.Type.Down&&this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this.index=this.values.length-1),this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.AlternateUp?this._direction=s.default.CtrlPattern.Type.Up:this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this._direction=s.default.CtrlPattern.Type.Down),this._type===s.default.CtrlPattern.Type.RandomOnce?this._shuffleValues():this._type===s.default.CtrlPattern.Type.Random&&(this.index=Math.floor(Math.random()*this.values.length))}}),s.default.CtrlPattern.prototype.next=function(){var t=this.type;return t===s.default.CtrlPattern.Type.Up?(this.index++,this.index>=this.values.length&&(this.index=0)):t===s.default.CtrlPattern.Type.Down?(this.index--,this.index<0&&(this.index=this.values.length-1)):t===s.default.CtrlPattern.Type.UpDown||t===s.default.CtrlPattern.Type.DownUp?(this._direction===s.default.CtrlPattern.Type.Up?this.index++:this.index--,this.index<0?(this.index=1,this._direction=s.default.CtrlPattern.Type.Up):this.index>=this.values.length&&(this.index=this.values.length-2,this._direction=s.default.CtrlPattern.Type.Down)):t===s.default.CtrlPattern.Type.Random?this.index=Math.floor(Math.random()*this.values.length):t===s.default.CtrlPattern.Type.RandomWalk?Math.random()<.5?(this.index--,this.index=Math.max(this.index,0)):(this.index++,this.index=Math.min(this.index,this.values.length-1)):t===s.default.CtrlPattern.Type.RandomOnce?(this.index++,this.index>=this.values.length&&(this.index=0,this._shuffleValues())):t===s.default.CtrlPattern.Type.AlternateUp?(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=2,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=1,this._direction=s.default.CtrlPattern.Type.Up),this.index>=this.values.length&&(this.index=0,this._direction=s.default.CtrlPattern.Type.Up)):t===s.default.CtrlPattern.Type.AlternateDown&&(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=1,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=2,this._direction=s.default.CtrlPattern.Type.Up),this.index<0&&(this.index=this.values.length-1,this._direction=s.default.CtrlPattern.Type.Down)),this.value},s.default.CtrlPattern.prototype._shuffleValues=function(){var t=[];this._shuffled=[];for(var e=0;e<this.values.length;e++)t[e]=e;for(;t.length>0;){var i=t.splice(Math.floor(t.length*Math.random()),1);this._shuffled.push(i[0])}},s.default.CtrlPattern.prototype.dispose=function(){this._shuffled=null,this.values=null},e.default=s.default.CtrlPattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(56),i(55);s.default.TransportRepeatEvent=function(t,e){s.default.TransportEvent.call(this,t,e),e=s.default.defaultArg(e,s.default.TransportRepeatEvent.defaults),this.duration=s.default.Ticks(e.duration),this._interval=s.default.Ticks(e.interval),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this),this.Transport.on("start loopStart",this._boundRestart),this._restart()},s.default.extend(s.default.TransportRepeatEvent,s.default.TransportEvent),s.default.TransportRepeatEvent.defaults={duration:1/0,interval:1},s.default.TransportRepeatEvent.prototype.invoke=function(t){this._createEvents(t),s.default.TransportEvent.prototype.invoke.call(this,t)},s.default.TransportRepeatEvent.prototype._createEvents=function(t){var e=this.Transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)))},s.default.TransportRepeatEvent.prototype._restart=function(t){this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this._nextTick=this.time;var e=this.Transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)),this._nextTick+=this._interval,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick))},s.default.TransportRepeatEvent.prototype.dispose=function(){return this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this.Transport.off("start loopStart",this._boundRestart),this._boundCreateEvents=null,s.default.TransportEvent.prototype.dispose.call(this),this.duration=null,this._interval=null,this},e.default=s.default.TransportRepeatEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.IntervalTimeline=function(){s.default.call(this),this._root=null,this._length=0},s.default.extend(s.default.IntervalTimeline),s.default.IntervalTimeline.prototype.add=function(t){if(s.default.isUndef(t.time)||s.default.isUndef(t.duration))throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");t.time=t.time.valueOf();var e=new n(t.time,t.time+t.duration,t);for(null===this._root?this._root=e:this._root.insert(e),this._length++;null!==e;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this},s.default.IntervalTimeline.prototype.remove=function(t){if(null!==this._root){var e=[];this._root.search(t.time,e);for(var i=0;i<e.length;i++){var s=e[i];if(s.event===t){this._removeNode(s),this._length--;break}}}return this},Object.defineProperty(s.default.IntervalTimeline.prototype,"length",{get:function(){return this._length}}),s.default.IntervalTimeline.prototype.cancel=function(t){return this.forEachFrom(t,function(t){this.remove(t)}.bind(this)),this},s.default.IntervalTimeline.prototype._setRoot=function(t){this._root=t,null!==this._root&&(this._root.parent=null)},s.default.IntervalTimeline.prototype._replaceNodeInParent=function(t,e){null!==t.parent?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)},s.default.IntervalTimeline.prototype._removeNode=function(t){if(null===t.left&&null===t.right)this._replaceNodeInParent(t,null);else if(null===t.right)this._replaceNodeInParent(t,t.left);else if(null===t.left)this._replaceNodeInParent(t,t.right);else{var e,i;if(t.getBalance()>0)if(null===t.left.right)(e=t.left).right=t.right,i=e;else{for(e=t.left.right;null!==e.right;)e=e.right;e.parent.right=e.left,i=e.parent,e.left=t.left,e.right=t.right}else if(null===t.right.left)(e=t.right).left=t.left,i=e;else{for(e=t.right.left;null!==e.left;)e=e.left;e.parent.left=e.right,i=e.parent,e.left=t.left,e.right=t.right}null!==t.parent?t.isLeftChild()?t.parent.left=e:t.parent.right=e:this._setRoot(e),this._rebalance(i)}t.dispose()},s.default.IntervalTimeline.prototype._rotateLeft=function(t){var e=t.parent,i=t.isLeftChild(),s=t.right;t.right=s.left,s.left=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rotateRight=function(t){var e=t.parent,i=t.isLeftChild(),s=t.left;t.left=s.right,s.right=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rebalance=function(t){var e=t.getBalance();e>1?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))},s.default.IntervalTimeline.prototype.get=function(t){if(null!==this._root){var e=[];if(this._root.search(t,e),e.length>0){for(var i=e[0],s=1;s<e.length;s++)e[s].low>i.low&&(i=e[s]);return i.event}}return null},s.default.IntervalTimeline.prototype.forEach=function(t){if(null!==this._root){var e=[];this._root.traverse(function(t){e.push(t)});for(var i=0;i<e.length;i++){var s=e[i].event;s&&t(s)}}return this},s.default.IntervalTimeline.prototype.forEachAtTime=function(t,e){if(null!==this._root){var i=[];this._root.search(t,i);for(var s=i.length-1;s>=0;s--){var n=i[s].event;n&&e(n)}}return this},s.default.IntervalTimeline.prototype.forEachFrom=function(t,e){if(null!==this._root){var i=[];this._root.searchAfter(t,i);for(var s=i.length-1;s>=0;s--){e(i[s].event)}}return this},s.default.IntervalTimeline.prototype.dispose=function(){var t=[];null!==this._root&&this._root.traverse(function(e){t.push(e)});for(var e=0;e<t.length;e++)t[e].dispose();return t=null,this._root=null,this};var n=function(t,e,i){this.event=i,this.low=t,this.high=e,this.max=this.high,this._left=null,this._right=null,this.parent=null,this.height=0};n.prototype.insert=function(t){t.low<=this.low?null===this.left?this.left=t:this.left.insert(t):null===this.right?this.right=t:this.right.insert(t)},n.prototype.search=function(t,e){t>this.max||(null!==this.left&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),this.low>t||null!==this.right&&this.right.search(t,e))},n.prototype.searchAfter=function(t,e){this.low>=t&&(e.push(this),null!==this.left&&this.left.searchAfter(t,e)),null!==this.right&&this.right.searchAfter(t,e)},n.prototype.traverse=function(t){t(this),null!==this.left&&this.left.traverse(t),null!==this.right&&this.right.traverse(t)},n.prototype.updateHeight=function(){null!==this.left&&null!==this.right?this.height=Math.max(this.left.height,this.right.height)+1:null!==this.right?this.height=this.right.height+1:null!==this.left?this.height=this.left.height+1:this.height=0},n.prototype.updateMax=function(){this.max=this.high,null!==this.left&&(this.max=Math.max(this.max,this.left.max)),null!==this.right&&(this.max=Math.max(this.max,this.right.max))},n.prototype.getBalance=function(){var t=0;return null!==this.left&&null!==this.right?t=this.left.height-this.right.height:null!==this.left?t=this.left.height+1:null!==this.right&&(t=-(this.right.height+1)),t},n.prototype.isLeftChild=function(){return null!==this.parent&&this.parent.left===this},Object.defineProperty(n.prototype,"left",{get:function(){return this._left},set:function(t){this._left=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),Object.defineProperty(n.prototype,"right",{get:function(){return this._right},set:function(t){this._right=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),n.prototype.dispose=function(){this.parent=null,this._left=null,this._right=null,this.event=null},e.default=s.default.IntervalTimeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2);function n(t){return function(e,i){i=this.toSeconds(i),t.apply(this,arguments);var s=this._events.get(i),n=this._events.previousEvent(s),o=this._getTicksUntilEvent(n,i);return s.ticks=Math.max(o,0),this}}s.default.TickSignal=function(t){t=s.default.defaultArg(t,1),s.default.Signal.call(this,{units:s.default.Type.Ticks,value:t}),this._events.memory=1/0,this.cancelScheduledValues(0),this._events.add({type:s.default.Param.AutomationType.SetValue,time:0,value:t})},s.default.extend(s.default.TickSignal,s.default.Signal),s.default.TickSignal.prototype.setValueAtTime=n(s.default.Signal.prototype.setValueAtTime),s.default.TickSignal.prototype.linearRampToValueAtTime=n(s.default.Signal.prototype.linearRampToValueAtTime),s.default.TickSignal.prototype.setTargetAtTime=function(t,e,i){e=this.toSeconds(e),this.setRampPoint(e),t=this._fromUnits(t);for(var s=this._events.get(e),n=Math.round(Math.max(1/i,1)),o=0;o<=n;o++){var a=i*o+e,r=this._exponentialApproach(s.time,s.value,t,i,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype.exponentialRampToValueAtTime=function(t,e){e=this.toSeconds(e),t=this._fromUnits(t);for(var i=this._events.get(e),s=Math.round(Math.max(10*(e-i.time),1)),n=(e-i.time)/s,o=0;o<=s;o++){var a=n*o+i.time,r=this._exponentialInterpolate(i.time,i.value,e,t,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype._getTicksUntilEvent=function(t,e){if(null===t)t={ticks:0,time:0};else if(s.default.isUndef(t.ticks)){var i=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(i,t.time)}var n=this.getValueAtTime(t.time),o=this.getValueAtTime(e);return this._events.get(e).time===e&&this._events.get(e).type===s.default.Param.AutomationType.SetValue&&(o=this.getValueAtTime(e-this.sampleTime)),.5*(e-t.time)*(n+o)+t.ticks},s.default.TickSignal.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._events.get(t);return Math.max(this._getTicksUntilEvent(e,t),0)},s.default.TickSignal.prototype.getDurationOfTicks=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-e},s.default.TickSignal.prototype.getTimeOfTick=function(t){var e=this._events.get(t,"ticks"),i=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&i&&i.type===s.default.Param.AutomationType.Linear&&e.value!==i.value){var n=this.getValueAtTime(e.time),o=(this.getValueAtTime(i.time)-n)/(i.time-e.time),a=Math.sqrt(Math.pow(n,2)-2*o*(e.ticks-t)),r=(-n+a)/o;return(r>0?r:(-n-a)/o)+e.time}return e?0===e.value?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue},s.default.TickSignal.prototype.ticksToTime=function(t,e){return e=this.toSeconds(e),new s.default.Time(this.getDurationOfTicks(t,e))},s.default.TickSignal.prototype.timeToTicks=function(t,e){e=this.toSeconds(e),t=this.toSeconds(t);var i=this.getTicksAtTime(e),n=this.getTicksAtTime(e+t);return new s.default.Ticks(n-i)},e.default=s.default.TickSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(57),i(34),i(35),i(20);s.default.Clock=function(){var t=s.default.defaults(arguments,["callback","frequency"],s.default.Clock);s.default.Emitter.call(this),this.callback=t.callback,this._nextTick=0,this._tickSource=new s.default.TickSource(t.frequency),this._lastUpdate=0,this.frequency=this._tickSource.frequency,this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},s.default.extend(s.default.Clock,s.default.Emitter),s.default.Clock.defaults={callback:s.default.noOp,frequency:1},Object.defineProperty(s.default.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.Clock.prototype.start=function(t,e){return this.context.resume(),t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),this._tickSource.start(t,e),t<this._lastUpdate&&this.emit("start",t,e)),this},s.default.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this},s.default.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Paused,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this},Object.defineProperty(s.default.Clock.prototype,"ticks",{get:function(){return Math.ceil(this.getTicksAtTime(this.now()))},set:function(t){this._tickSource.ticks=t}}),Object.defineProperty(s.default.Clock.prototype,"seconds",{get:function(){return this._tickSource.seconds},set:function(t){this._tickSource.seconds=t}}),s.default.Clock.prototype.getSecondsAtTime=function(t){return this._tickSource.getSecondsAtTime(t)},s.default.Clock.prototype.setTicksAtTime=function(t,e){return this._tickSource.setTicksAtTime(t,e),this},s.default.Clock.prototype.getTicksAtTime=function(t){return this._tickSource.getTicksAtTime(t)},s.default.Clock.prototype.nextTickTime=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this._tickSource.getTimeOfTick(i+t,e)},s.default.Clock.prototype._loop=function(){var t=this._lastUpdate,e=this.now();this._lastUpdate=e,t!==e&&(this._state.forEachBetween(t,e,function(t){switch(t.state){case s.default.State.Started:var e=this._tickSource.getTicksAtTime(t.time);this.emit("start",t.time,e);break;case s.default.State.Stopped:0!==t.time&&this.emit("stop",t.time);break;case s.default.State.Paused:this.emit("pause",t.time)}}.bind(this)),this._tickSource.forEachTickBetween(t,e,function(t,e){this.callback(t,e)}.bind(this)))},s.default.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.Clock.prototype.dispose=function(){s.default.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this._tickSource.dispose(),this._tickSource=null,this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},e.default=s.default.Clock},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(5),i(7);s.default.GreaterThanZero=function(){s.default.SignalBase.call(this),this._thresh=this.output=new s.default.WaveShaper(function(t){return t<=0?0:1},127),this._scale=this.input=new s.default.Multiply(1e4),this._scale.connect(this._thresh)},s.default.extend(s.default.GreaterThanZero,s.default.SignalBase),s.default.GreaterThanZero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.default=s.default.GreaterThanZero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(84),i(13),i(2);s.default.GreaterThan=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._param=this.input[0]=new s.default.Subtract(t),this.input[1]=this._param.input[1],this._gtz=this.output=new s.default.GreaterThanZero,this._param.connect(this._gtz)},s.default.extend(s.default.GreaterThan,s.default.Signal),s.default.GreaterThan.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._gtz.dispose(),this._gtz=null,this},e.default=s.default.GreaterThan},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(26);s.default.ScaledEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.Envelope.call(this,t),t=s.default.defaultArg(t,s.default.ScaledEnvelope.defaults),this._exp=this.output=new s.default.Pow(t.exponent),this._scale=this.output=new s.default.Scale(t.min,t.max),this._sig.chain(this._exp,this._scale)},s.default.extend(s.default.ScaledEnvelope,s.default.Envelope),s.default.ScaledEnvelope.defaults={min:0,max:1,exponent:1},Object.defineProperty(s.default.ScaledEnvelope.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.ScaledEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaledEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(30);s.default.Abs=function(){s.default.SignalBase.call(this),this._abs=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:Math.abs(t)},1024)},s.default.extend(s.default.Abs,s.default.SignalBase),s.default.Abs.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._abs.dispose(),this._abs=null,this},e.default=s.default.Abs},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Solo=function(){var t=s.default.defaults(arguments,["solo"],s.default.Solo);s.default.AudioNode.call(this),this.input=this.output=new s.default.Gain,this._soloBind=this._soloed.bind(this),this.context.on("solo",this._soloBind),this.solo=t.solo},s.default.extend(s.default.Solo,s.default.AudioNode),s.default.Solo.defaults={solo:!1},Object.defineProperty(s.default.Solo.prototype,"solo",{get:function(){return this._isSoloed()},set:function(t){t?this._addSolo():this._removeSolo(),this.context.emit("solo",this)}}),Object.defineProperty(s.default.Solo.prototype,"muted",{get:function(){return 0===this.input.gain.value}}),s.default.Solo.prototype._addSolo=function(){s.default.isArray(this.context._currentSolo)||(this.context._currentSolo=[]),this._isSoloed()||this.context._currentSolo.push(this)},s.default.Solo.prototype._removeSolo=function(){if(this._isSoloed()){var t=this.context._currentSolo.indexOf(this);this.context._currentSolo.splice(t,1)}},s.default.Solo.prototype._isSoloed=function(){return!!s.default.isArray(this.context._currentSolo)&&(0!==this.context._currentSolo.length&&-1!==this.context._currentSolo.indexOf(this))},s.default.Solo.prototype._noSolos=function(){return!s.default.isArray(this.context._currentSolo)||0===this.context._currentSolo.length},s.default.Solo.prototype._soloed=function(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0},s.default.Solo.prototype.dispose=function(){return this.context.off("solo",this._soloBind),this._removeSolo(),this._soloBind=null,s.default.AudioNode.prototype.dispose.call(this),this},e.default=s.default.Solo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.EqualPowerGain=function(){s.default.SignalBase.call(this),this._eqPower=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:s.default.equalPowerScale(t)}.bind(this),4096)},s.default.extend(s.default.EqualPowerGain,s.default.SignalBase),s.default.EqualPowerGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._eqPower.dispose(),this._eqPower=null,this},e.default=s.default.EqualPowerGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(5),i(2);s.default.Negate=function(){s.default.SignalBase.call(this),this._multiply=this.input=this.output=new s.default.Multiply(-1)},s.default.extend(s.default.Negate,s.default.SignalBase),s.default.Negate.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},e.default=s.default.Negate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(48),i(27),i(1);s.default.PanVol=function(){var t=s.default.defaults(arguments,["pan","volume"],s.default.PanVol);s.default.AudioNode.call(this),this._panner=this.input=new s.default.Panner(t.pan),this.pan=this._panner.pan,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,this._readOnly(["pan","volume"])},s.default.extend(s.default.PanVol,s.default.AudioNode),s.default.PanVol.defaults={pan:0,volume:0,mute:!1},Object.defineProperty(s.default.PanVol.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.PanVol.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panner.dispose(),this._panner=null,this.pan=null,this._volume.dispose(),this._volume=null,this.volume=null,this},e.default=s.default.PanVol},function(t,e,i){"use strict";var s=i(0);if(s.default.supported){!s.default.global.hasOwnProperty("OfflineAudioContext")&&s.default.global.hasOwnProperty("webkitOfflineAudioContext")&&(s.default.global.OfflineAudioContext=s.default.global.webkitOfflineAudioContext);var n=new OfflineAudioContext(1,1,44100).startRendering();n&&s.default.isFunction(n.then)||(OfflineAudioContext.prototype._native_startRendering=OfflineAudioContext.prototype.startRendering,OfflineAudioContext.prototype.startRendering=function(){return new Promise(function(t){this.oncomplete=function(e){t(e.renderedBuffer)},this._native_startRendering()}.bind(this))})}},function(t,e,i){"use strict";e.a="13.8.25"},function(t,e,i){"use strict";i.r(e);var s=i(0);i(46);s.default.Midi=function(t,e){if(!(this instanceof s.default.Midi))return new s.default.Midi(t,e);s.default.Frequency.call(this,t,e)},s.default.extend(s.default.Midi,s.default.Frequency),s.default.Midi.prototype._defaultUnits="midi",s.default.Midi.prototype._frequencyToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._frequencyToUnits.call(this,t))},s.default.Midi.prototype._ticksToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._ticksToUnits.call(this,t))},s.default.Midi.prototype._beatsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._beatsToUnits.call(this,t))},s.default.Midi.prototype._secondsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._secondsToUnits.call(this,t))},s.default.Midi.prototype.toMidi=function(){return this.valueOf()},s.default.Midi.prototype.toFrequency=function(){return s.default.Frequency.mtof(this.toMidi())},s.default.Midi.prototype.transpose=function(t){return new this.constructor(this.toMidi()+t)},e.default=s.default.Midi},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(1);s.default.UserMedia=function(){var t=s.default.defaults(arguments,["volume"],s.default.UserMedia);s.default.AudioNode.call(this),this._mediaStream=null,this._stream=null,this._device=null,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.UserMedia,s.default.AudioNode),s.default.UserMedia.defaults={volume:0,mute:!1},s.default.UserMedia.prototype.open=function(t){return this.state===s.default.State.Started&&this.close(),s.default.UserMedia.enumerateDevices().then(function(e){var i;if(s.default.isNumber(t))i=e[t];else if(!(i=e.find(function(e){return e.label===t||e.deviceId===t}))&&e.length>0)i=e[0];else if(!i&&s.default.isDefined(t))throw new Error("Tone.UserMedia: no matching device: "+t);this._device=i;var n={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};return i&&(n.audio.deviceId=i.deviceId),navigator.mediaDevices.getUserMedia(n).then(function(t){return this._stream||(this._stream=t,this._mediaStream=this.context.createMediaStreamSource(t),s.default.connect(this._mediaStream,this.output)),this}.bind(this))}.bind(this))},s.default.UserMedia.prototype.close=function(){return this._stream&&(this._stream.getAudioTracks().forEach(function(t){t.stop()}),this._stream=null,this._mediaStream.disconnect(),this._mediaStream=null),this._device=null,this},s.default.UserMedia.enumerateDevices=function(){return navigator.mediaDevices.enumerateDevices().then(function(t){return t.filter(function(t){return"audioinput"===t.kind})})},Object.defineProperty(s.default.UserMedia.prototype,"state",{get:function(){return this._stream&&this._stream.active?s.default.State.Started:s.default.State.Stopped}}),Object.defineProperty(s.default.UserMedia.prototype,"deviceId",{get:function(){return this._device?this._device.deviceId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"groupId",{get:function(){return this._device?this._device.groupId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"label",{get:function(){return this._device?this._device.label:null}}),Object.defineProperty(s.default.UserMedia.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.UserMedia.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.close(),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this},Object.defineProperty(s.default.UserMedia,"supported",{get:function(){return s.default.isDefined(navigator.mediaDevices)&&s.default.isFunction(navigator.mediaDevices.getUserMedia)}}),e.default=s.default.UserMedia},function(t,e,i){"use strict";i.r(e);var s=i(0);i(65),i(27),i(1);s.default.Players=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload"],s.default.Players);for(var n in s.default.AudioNode.call(this,i),this._volume=this.output=new s.default.Volume(i.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=i.mute,this._players={},this._loadingCount=0,this._fadeIn=i.fadeIn,this._fadeOut=i.fadeOut,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Players,s.default.AudioNode),s.default.Players.defaults={volume:0,mute:!1,onload:s.default.noOp,fadeIn:0,fadeOut:0},s.default.Players.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Players.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),Object.defineProperty(s.default.Players.prototype,"fadeIn",{get:function(){return this._fadeIn},set:function(t){this._fadeIn=t,this._forEach(function(e){e.fadeIn=t})}}),Object.defineProperty(s.default.Players.prototype,"fadeOut",{get:function(){return this._fadeOut},set:function(t){this._fadeOut=t,this._forEach(function(e){e.fadeOut=t})}}),Object.defineProperty(s.default.Players.prototype,"state",{get:function(){var t=!1;return this._forEach(function(e){t=t||e.state===s.default.State.Started}),t?s.default.State.Started:s.default.State.Stopped}}),s.default.Players.prototype.has=function(t){return this._players.hasOwnProperty(t)},s.default.Players.prototype.get=function(t){if(this.has(t))return this._players[t];throw new Error("Tone.Players: no player named "+t)},s.default.Players.prototype._forEach=function(t){for(var e in this._players)t(this._players[e],e);return this},Object.defineProperty(s.default.Players.prototype,"loaded",{get:function(){var t=!0;return this._forEach(function(e){t=t&&e.loaded}),t}}),s.default.Players.prototype.add=function(t,e,i){return this._players[t]=new s.default.Player(e,i).connect(this.output),this._players[t].fadeIn=this._fadeIn,this._players[t].fadeOut=this._fadeOut,this},s.default.Players.prototype.stopAll=function(t){this._forEach(function(e){e.stop(t)})},s.default.Players.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable("volume"),this.volume=null,this.output=null,this._forEach(function(t){t.dispose()}),this._players=null,this},e.default=s.default.Players},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.GrainPlayer=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.GrainPlayer);s.default.Source.call(this,t),this.buffer=new s.default.Buffer(t.url,t.onload.bind(void 0,this)),this._clock=new s.default.Clock(this._tick.bind(this),t.grainSize),this._loopStart=0,this._loopEnd=0,this._activeSources=[],this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))},s.default.extend(s.default.GrainPlayer,s.default.Source),s.default.GrainPlayer.defaults={onload:s.default.noOp,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1},s.default.GrainPlayer.prototype._start=function(t,e,i){e=s.default.defaultArg(e,0),e=this.toSeconds(e),t=this.toSeconds(t),this._offset=e,this._clock.start(t),i&&this.stop(t+this.toSeconds(i))},s.default.GrainPlayer.prototype._stop=function(t){this._clock.stop(t)},s.default.GrainPlayer.prototype._onstop=function(t){this._activeSources.forEach(function(e){e.fadeOut=0,e.stop(t)})},s.default.GrainPlayer.prototype._tick=function(t){if(!this.loop&&this._offset>this.buffer.duration)this.stop(t);else{var e=this._offset<this._overlap?0:this._overlap,i=new s.default.BufferSource({buffer:this.buffer,fadeIn:e,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:s.default.intervalToFrequencyRatio(this.detune/100)}).connect(this.output);i.start(t,this._offset),this._offset+=this.grainSize,i.stop(t+this.grainSize/this.playbackRate),this._activeSources.push(i),i.onended=function(){var t=this._activeSources.indexOf(i);-1!==t&&this._activeSources.splice(t,1)}.bind(this)}},Object.defineProperty(s.default.GrainPlayer.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this.grainSize=this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"reverse",{get:function(){return this.buffer.reverse},set:function(t){this.buffer.reverse=t}}),Object.defineProperty(s.default.GrainPlayer.prototype,"grainSize",{get:function(){return this._grainSize},set:function(t){this._grainSize=this.toSeconds(t),this._clock.frequency.value=this._playbackRate/this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"overlap",{get:function(){return this._overlap},set:function(t){this._overlap=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loaded",{get:function(){return this.buffer.loaded}}),s.default.GrainPlayer.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this.buffer.dispose(),this.buffer=null,this._clock.dispose(),this._clock=null,this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,this},e.default=s.default.GrainPlayer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(2),i(45);s.default.TransportTimelineSignal=function(){s.default.Signal.apply(this,arguments),this.output=this._outputSig=new s.default.Signal(this._initialValue),this._lastVal=this.value,this._synced=s.default.Transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._bindAnchorValue=this._anchorValue.bind(this),s.default.Transport.on("start stop pause",this._bindAnchorValue),this._events.memory=1/0},s.default.extend(s.default.TransportTimelineSignal,s.default.Signal),s.default.TransportTimelineSignal.prototype._onTick=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._outputSig.linearRampToValueAtTime(e,t))},s.default.TransportTimelineSignal.prototype._anchorValue=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);return this._lastVal=e,this._outputSig.cancelScheduledValues(t),this._outputSig.setValueAtTime(e,t),this},s.default.TransportTimelineSignal.prototype.getValueAtTime=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.getValueAtTime.call(this,t)},s.default.TransportTimelineSignal.prototype.setValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.setValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.linearRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.linearRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.exponentialRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.setTargetAtTime=function(t,e,i){return e=s.default.TransportTime(e),s.default.Signal.prototype.setTargetAtTime.call(this,t,e,i),this},s.default.TransportTimelineSignal.prototype.cancelScheduledValues=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.cancelScheduledValues.call(this,t),this},s.default.TransportTimelineSignal.prototype.setValueCurveAtTime=function(t,e,i,n){return e=s.default.TransportTime(e),i=s.default.TransportTime(i),s.default.Signal.prototype.setValueCurveAtTime.call(this,t,e,i,n),this},s.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime=function(t){return s.default.Signal.prototype.cancelAndHoldAtTime.call(this,s.default.TransportTime(t))},s.default.TransportTimelineSignal.prototype.dispose=function(){s.default.Transport.clear(this._synced),s.default.Transport.off("start stop pause",this._syncedCallback),this._events.cancel(0),s.default.Signal.prototype.dispose.call(this),this._outputSig.dispose(),this._outputSig=null},e.default=s.default.TransportTimelineSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5);s.default.Normalize=function(t,e){s.default.SignalBase.call(this),this._inputMin=s.default.defaultArg(t,0),this._inputMax=s.default.defaultArg(e,1),this._sub=this.input=new s.default.Add(0),this._div=this.output=new s.default.Multiply(1),this._sub.connect(this._div),this._setRange()},s.default.extend(s.default.Normalize,s.default.SignalBase),Object.defineProperty(s.default.Normalize.prototype,"min",{get:function(){return this._inputMin},set:function(t){this._inputMin=t,this._setRange()}}),Object.defineProperty(s.default.Normalize.prototype,"max",{get:function(){return this._inputMax},set:function(t){this._inputMax=t,this._setRange()}}),s.default.Normalize.prototype._setRange=function(){this._sub.value=-this._inputMin,this._div.value=1/(this._inputMax-this._inputMin)},s.default.Normalize.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._sub.dispose(),this._sub=null,this._div.dispose(),this._div=null,this},e.default=s.default.Normalize},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.GainToAudio=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return 2*Math.abs(t)-1})},s.default.extend(s.default.GainToAudio,s.default.SignalBase),s.default.GainToAudio.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.GainToAudio},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(78),i(32);s.default.Sampler=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Sampler);s.default.Instrument.call(this,i);var n={};for(var o in t)if(s.default.isNote(o)){n[s.default.Frequency(o).toMidi()]=t[o]}else{if(isNaN(parseFloat(o)))throw new Error("Tone.Sampler: url keys must be the note's pitch");n[o]=t[o]}this._buffers=new s.default.Buffers(n,i.onload,i.baseUrl),this._activeSources={},this.attack=i.attack,this.release=i.release,this.curve=i.curve},s.default.extend(s.default.Sampler,s.default.Instrument),s.default.Sampler.defaults={attack:0,release:.1,onload:s.default.noOp,baseUrl:"",curve:"exponential"},s.default.Sampler.prototype._findClosest=function(t){for(var e=0;e<96;){if(this._buffers.has(t+e))return-e;if(this._buffers.has(t-e))return e;e++}throw new Error("No available buffers for note: "+t)},s.default.Sampler.prototype.triggerAttack=function(t,e,i){this.log("triggerAttack",t,e,i),Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var o=s.default.Frequency(t[n]).toMidi(),a=this._findClosest(o),r=o-a,l=this._buffers.get(r),u=s.default.intervalToFrequencyRatio(a),d=new s.default.BufferSource({buffer:l,playbackRate:u,fadeIn:this.attack,fadeOut:this.release,curve:this.curve}).connect(this.output);d.start(e,0,l.duration/u,i),s.default.isArray(this._activeSources[o])||(this._activeSources[o]=[]),this._activeSources[o].push(d),d.onended=function(){if(this._activeSources&&this._activeSources[o]){var t=this._activeSources[o].indexOf(d);-1!==t&&this._activeSources[o].splice(t,1)}}.bind(this)}return this},s.default.Sampler.prototype.triggerRelease=function(t,e){this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=s.default.Frequency(t[i]).toMidi();this._activeSources[n]&&this._activeSources[n].length&&(e=this.toSeconds(e),this._activeSources[n].forEach(function(t){t.stop(e)}),this._activeSources[n]=[])}return this},s.default.Sampler.prototype.releaseAll=function(t){for(var e in t=this.toSeconds(t),this._activeSources)for(var i=this._activeSources[e];i.length;){i.shift().stop(t)}return this},s.default.Sampler.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.Sampler.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.Sampler.prototype.add=function(t,e,i){if(s.default.isNote(t)){var n=s.default.Frequency(t).toMidi();this._buffers.add(n,e,i)}else{if(isNaN(parseFloat(t)))throw new Error("Tone.Sampler: note must be the note's pitch. Instead got "+t);this._buffers.add(t,e,i)}},Object.defineProperty(s.default.Sampler.prototype,"loaded",{get:function(){return this._buffers.loaded}}),s.default.Sampler.prototype.dispose=function(){for(var t in s.default.Instrument.prototype.dispose.call(this),this._buffers.dispose(),this._buffers=null,this._activeSources)this._activeSources[t].forEach(function(t){t.dispose()});return this._activeSources=null,this},e.default=s.default.Sampler},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(6);s.default.PolySynth=function(){var t=s.default.defaults(arguments,["polyphony","voice"],s.default.PolySynth);s.default.Instrument.call(this,t),(t=s.default.defaultArg(t,s.default.Instrument.defaults)).polyphony=Math.min(s.default.PolySynth.MAX_POLYPHONY,t.polyphony),this.voices=new Array(t.polyphony),this.assert(t.polyphony>0,"polyphony must be greater than 0"),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._readOnly("detune");for(var e=0;e<t.polyphony;e++){var i=new t.voice(arguments[2],arguments[3]);if(!(i instanceof s.default.Monophonic))throw new Error("Synth constructor must be instance of Tone.Monophonic");this.voices[e]=i,i.index=e,i.connect(this.output),i.hasOwnProperty("detune")&&this.detune.connect(i.detune)}},s.default.extend(s.default.PolySynth,s.default.Instrument),s.default.PolySynth.defaults={polyphony:4,volume:0,detune:0,voice:s.default.Synth},s.default.PolySynth.prototype._getClosestVoice=function(t,e){var i=this.voices.find(function(i){if(Math.abs(i.frequency.getValueAtTime(t)-s.default.Frequency(e))<1e-4&&i.getLevelAtTime(t)>1e-5)return i});return i||this.voices.slice().sort(function(e,i){var s=e.getLevelAtTime(t+this.blockTime),n=i.getLevelAtTime(t+this.blockTime);return s<1e-5&&(s=0),n<1e-5&&(n=0),s-n}.bind(this))[0]},s.default.PolySynth.prototype.triggerAttack=function(t,e,i){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var s=this._getClosestVoice(e,t);s.triggerAttack(t,e,i),this.log("triggerAttack",s.index,t)}.bind(this)),this},s.default.PolySynth.prototype.triggerRelease=function(t,e){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var i=this._getClosestVoice(e,t);this.log("triggerRelease",i.index,t),i.triggerRelease(e)}.bind(this)),this},s.default.PolySynth.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.PolySynth.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.PolySynth.prototype.set=function(t,e,i){for(var s=0;s<this.voices.length;s++)this.voices[s].set(t,e,i);return this},s.default.PolySynth.prototype.get=function(t){return this.voices[0].get(t)},s.default.PolySynth.prototype.releaseAll=function(t){return t=this.toSeconds(t),this.voices.forEach(function(e){e.triggerRelease(t)}),this},s.default.PolySynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this.voices.forEach(function(t){t.dispose()}),this._writable("detune"),this.detune.dispose(),this.detune=null,this.voices=null,this},s.default.PolySynth.MAX_POLYPHONY=20,e.default=s.default.PolySynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(39),i(54);s.default.PluckSynth=function(t){t=s.default.defaultArg(t,s.default.PluckSynth.defaults),s.default.Instrument.call(this,t),this._noise=new s.default.Noise("pink"),this.attackNoise=t.attackNoise,this._lfcf=new s.default.LowpassCombFilter({resonance:t.resonance,dampening:t.dampening}),this.resonance=this._lfcf.resonance,this.dampening=this._lfcf.dampening,this._noise.connect(this._lfcf),this._lfcf.connect(this.output),this._readOnly(["resonance","dampening"])},s.default.extend(s.default.PluckSynth,s.default.Instrument),s.default.PluckSynth.defaults={attackNoise:1,dampening:4e3,resonance:.7},s.default.PluckSynth.prototype.triggerAttack=function(t,e){t=this.toFrequency(t),e=this.toSeconds(e);var i=1/t;return this._lfcf.delayTime.setValueAtTime(i,e),this._noise.start(e),this._noise.stop(e+i*this.attackNoise),this},s.default.PluckSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._noise.dispose(),this._lfcf.dispose(),this._noise=null,this._lfcf=null,this._writable(["resonance","dampening"]),this.dampening=null,this.resonance=null,this},e.default=s.default.PluckSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(39),i(2),i(9),i(21);s.default.NoiseSynth=function(t){t=s.default.defaultArg(t,s.default.NoiseSynth.defaults),s.default.Instrument.call(this,t),this.noise=new s.default.Noise(t.noise),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.noise.chain(this.envelope,this.output),this._readOnly(["noise","envelope"])},s.default.extend(s.default.NoiseSynth,s.default.Instrument),s.default.NoiseSynth.defaults={noise:{type:"white"},envelope:{attack:.005,decay:.1,sustain:0}},s.default.NoiseSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),0===this.envelope.sustain&&this.noise.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.NoiseSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.envelope.release),this},s.default.NoiseSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.NoiseSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},s.default.NoiseSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["noise","envelope"]),this.noise.dispose(),this.noise=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.NoiseSynth},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(21),i(49),i(9),i(41),i(31),i(3),i(26),i(5),[1,1.483,1.932,2.546,2.63,3.897]);s.default.MetalSynth=function(t){t=s.default.defaultArg(t,s.default.MetalSynth.defaults),s.default.Instrument.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this._oscillators=[],this._freqMultipliers=[],this._amplitue=new s.default.Gain(0).connect(this.output),this._highpass=new s.default.Filter({type:"highpass",Q:-3.0102999566398125}).connect(this._amplitue),this._octaves=t.octaves,this._filterFreqScaler=new s.default.Scale(t.resonance,7e3),this.envelope=new s.default.Envelope({attack:t.envelope.attack,attackCurve:"linear",decay:t.envelope.decay,sustain:0,release:t.envelope.release}).chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitue.gain);for(var e=0;e<n.length;e++){var i=new s.default.FMOscillator({type:"square",modulationType:"square",harmonicity:t.harmonicity,modulationIndex:t.modulationIndex});i.connect(this._highpass),this._oscillators[e]=i;var o=new s.default.Multiply(n[e]);this._freqMultipliers[e]=o,this.frequency.chain(o,i.frequency)}this.octaves=t.octaves},s.default.extend(s.default.MetalSynth,s.default.Instrument),s.default.MetalSynth.defaults={frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5},s.default.MetalSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),e=s.default.defaultArg(e,1),this.envelope.triggerAttack(t,e),this._oscillators.forEach(function(e){e.start(t)}),0===this.envelope.sustain&&this._oscillators.forEach(function(e){e.stop(t+this.envelope.attack+this.envelope.decay)}.bind(this)),this},s.default.MetalSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this._oscillators.forEach(function(e){e.stop(t+this.envelope.release)}.bind(this)),this},s.default.MetalSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.MetalSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},Object.defineProperty(s.default.MetalSynth.prototype,"modulationIndex",{get:function(){return this._oscillators[0].modulationIndex.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].modulationIndex.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"harmonicity",{get:function(){return this._oscillators[0].harmonicity.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].harmonicity.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"resonance",{get:function(){return this._filterFreqScaler.min},set:function(t){this._filterFreqScaler.min=t,this.octaves=this._octaves}}),Object.defineProperty(s.default.MetalSynth.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}}),s.default.MetalSynth.prototype.dispose=function(){s.default.Instrument.prototype.dispose.call(this);for(var t=0;t<this._oscillators.length;t++)this._oscillators[t].dispose(),this._freqMultipliers[t].dispose();this._oscillators=null,this._freqMultipliers=null,this.frequency.dispose(),this.frequency=null,this._filterFreqScaler.dispose(),this._filterFreqScaler=null,this._amplitue.dispose(),this._amplitue=null,this.envelope.dispose(),this.envelope=null,this._highpass.dispose(),this._highpass=null},e.default=s.default.MetalSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(37),i(21),i(31);s.default.MembraneSynth=function(t){t=s.default.defaultArg(t,s.default.MembraneSynth.defaults),s.default.Instrument.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.octaves=t.octaves,this.pitchDecay=t.pitchDecay,this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","envelope"])},s.default.extend(s.default.MembraneSynth,s.default.Instrument),s.default.MembraneSynth.defaults={pitchDecay:.05,octaves:10,oscillator:{type:"sine"},envelope:{attack:.001,decay:.4,sustain:.01,release:1.4,attackCurve:"exponential"}},s.default.MembraneSynth.prototype.triggerAttack=function(t,e,i){e=this.toSeconds(e);var s=(t=this.toFrequency(t))*this.octaves;return this.oscillator.frequency.setValueAtTime(s,e),this.oscillator.frequency.exponentialRampToValueAtTime(t,e+this.toSeconds(this.pitchDecay)),this.envelope.triggerAttack(e,i),this.oscillator.start(e),0===this.envelope.sustain&&this.oscillator.stop(e+this.envelope.attack+this.envelope.decay),this},s.default.MembraneSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MembraneSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["oscillator","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.MembraneSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25);s.default.FMSynth=function(t){t=s.default.defaultArg(t,s.default.FMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth(t.carrier),this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth(t.modulator),this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this._readOnly(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.FMSynth,s.default.Monophonic),s.default.FMSynth.defaults={harmonicity:3,modulationIndex:10,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.FMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.FMSynth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.FMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.modulationIndex.dispose(),this.modulationIndex=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.FMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(66),i(12),i(2),i(5),i(25),i(14);s.default.DuoSynth=function(t){t=s.default.defaultArg(t,s.default.DuoSynth.defaults),s.default.Monophonic.call(this,t),this.voice0=new s.default.MonoSynth(t.voice0),this.voice0.volume.value=-10,this.voice1=new s.default.MonoSynth(t.voice1),this.voice1.volume.value=-10,this._vibrato=new s.default.LFO(t.vibratoRate,-50,50),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new s.default.Gain(t.vibratoAmount,s.default.Type.Positive),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),this._readOnly(["voice0","voice1","frequency","vibratoAmount","vibratoRate"])},s.default.extend(s.default.DuoSynth,s.default.Monophonic),s.default.DuoSynth.defaults={vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}},voice1:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}},s.default.DuoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e),this},s.default.DuoSynth.prototype._triggerEnvelopeRelease=function(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this},s.default.DuoSynth.prototype.getLevelAtTime=function(t){return(this.voice0.getLevelAtTime(t)+this.voice1.getLevelAtTime(t))/2},s.default.DuoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["voice0","voice1","frequency","vibratoAmount","vibratoRate"]),this.voice0.dispose(),this.voice0=null,this.voice1.dispose(),this.voice1=null,this.frequency.dispose(),this.frequency=null,this._vibratoGain.dispose(),this._vibratoGain=null,this._vibrato=null,this.harmonicity.dispose(),this.harmonicity=null,this.vibratoAmount.dispose(),this.vibratoAmount=null,this.vibratoRate=null,this},e.default=s.default.DuoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25),i(22),i(3);s.default.AMSynth=function(t){t=s.default.defaultArg(t,s.default.AMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth,this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator.set(t.oscillator),this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth,this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationScale=new s.default.AudioToGain,this._modulationNode=new s.default.Gain,this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this._readOnly(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.AMSynth,s.default.Monophonic),s.default.AMSynth.defaults={harmonicity:3,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.AMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.AMSynth.prototype._triggerEnvelopeRelease=function(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.AMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationScale.dispose(),this._modulationScale=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.AMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(70),i(16);s.default.Sequence=function(){var t=s.default.defaults(arguments,["callback","events","subdivision"],s.default.Sequence),e=t.events;if(delete t.events,s.default.Part.call(this,t),this._subdivision=this.toTicks(t.subdivision),s.default.isUndef(t.loopEnd)&&s.default.isDefined(e)&&(this._loopEnd=e.length*this._subdivision),this._loop=!0,s.default.isDefined(e))for(var i=0;i<e.length;i++)this.add(i,e[i])},s.default.extend(s.default.Sequence,s.default.Part),s.default.Sequence.defaults={subdivision:"4n"},Object.defineProperty(s.default.Sequence.prototype,"subdivision",{get:function(){return s.default.Ticks(this._subdivision).toSeconds()}}),s.default.Sequence.prototype.at=function(t,e){return s.default.isArray(e)&&this.remove(t),s.default.Part.prototype.at.call(this,this._indexTime(t),e)},s.default.Sequence.prototype.add=function(t,e){if(null===e)return this;if(s.default.isArray(e)){var i=Math.round(this._subdivision/e.length);e=new s.default.Sequence(this._tick.bind(this),e,s.default.Ticks(i))}return s.default.Part.prototype.add.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype.remove=function(t,e){return s.default.Part.prototype.remove.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype._indexTime=function(t){return t instanceof s.default.TransportTime?t:s.default.Ticks(t*this._subdivision+this.startOffset).toSeconds()},s.default.Sequence.prototype.dispose=function(){return s.default.Part.prototype.dispose.call(this),this},e.default=s.default.Sequence},function(t,e,i){"use strict";i.r(e);var s=i(0);i(71),i(79);s.default.Pattern=function(){var t=s.default.defaults(arguments,["callback","values","pattern"],s.default.Pattern);s.default.Loop.call(this,t),this._pattern=new s.default.CtrlPattern({values:t.values,type:t.pattern,index:t.index})},s.default.extend(s.default.Pattern,s.default.Loop),s.default.Pattern.defaults={pattern:s.default.CtrlPattern.Type.Up,callback:s.default.noOp,values:[]},s.default.Pattern.prototype._tick=function(t){this.callback(t,this._pattern.value),this._pattern.next()},Object.defineProperty(s.default.Pattern.prototype,"index",{get:function(){return this._pattern.index},set:function(t){this._pattern.index=t}}),Object.defineProperty(s.default.Pattern.prototype,"values",{get:function(){return this._pattern.values},set:function(t){this._pattern.values=t}}),Object.defineProperty(s.default.Pattern.prototype,"value",{get:function(){return this._pattern.value}}),Object.defineProperty(s.default.Pattern.prototype,"pattern",{get:function(){return this._pattern.type},set:function(t){this._pattern.type=t}}),s.default.Pattern.prototype.dispose=function(){s.default.Loop.prototype.dispose.call(this),this._pattern.dispose(),this._pattern=null},e.default=s.default.Pattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(18),i(12);s.default.Vibrato=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Vibrato);s.default.Effect.call(this,t),this._delayNode=new s.default.Delay(0,t.maxDelay),this._lfo=new s.default.LFO({type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,this._readOnly(["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)},s.default.extend(s.default.Vibrato,s.default.Effect),s.default.Vibrato.defaults={maxDelay:.005,frequency:5,depth:.1,type:"sine"},Object.defineProperty(s.default.Vibrato.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.Vibrato.prototype.dispose=function(){s.default.Effect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._lfo.dispose(),this._lfo=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null},e.default=s.default.Vibrato},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15);s.default.Tremolo=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Tremolo);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO({phase:t.spread,min:1,max:0}),this._lfoR=new s.default.LFO({phase:t.spread,min:1,max:0}),this._amplitudeL=new s.default.Gain,this._amplitudeR=new s.default.Gain,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.depth=new s.default.Signal(t.depth,s.default.Type.NormalRange),this._readOnly(["frequency","depth"]),this.effectSendL.chain(this._amplitudeL,this.effectReturnL),this.effectSendR.chain(this._amplitudeR,this.effectReturnR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.type=t.type,this.spread=t.spread},s.default.extend(s.default.Tremolo,s.default.StereoEffect),s.default.Tremolo.defaults={frequency:10,type:"sine",depth:.5,spread:180},s.default.Tremolo.prototype.start=function(t){return this._lfoL.start(t),this._lfoR.start(t),this},s.default.Tremolo.prototype.stop=function(t){return this._lfoL.stop(t),this._lfoR.stop(t),this},s.default.Tremolo.prototype.sync=function(t){return this._lfoL.sync(t),this._lfoR.sync(t),s.default.Transport.syncSignal(this.frequency),this},s.default.Tremolo.prototype.unsync=function(){return this._lfoL.unsync(),this._lfoR.unsync(),s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Tremolo.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Tremolo.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Tremolo.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","depth"]),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._amplitudeL.dispose(),this._amplitudeL=null,this._amplitudeR.dispose(),this._amplitudeR=null,this.frequency=null,this.depth=null,this},e.default=s.default.Tremolo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(73),i(2),i(5),i(13);s.default.StereoWidener=function(){var t=s.default.defaults(arguments,["width"],s.default.StereoWidener);s.default.MidSideEffect.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._readOnly(["width"]),this._twoTimesWidthMid=new s.default.Multiply(2),this._twoTimesWidthSide=new s.default.Multiply(2),this._midMult=new s.default.Multiply,this._twoTimesWidthMid.connect(this._midMult,0,1),this.midSend.chain(this._midMult,this.midReturn),this._oneMinusWidth=new s.default.Subtract,this._oneMinusWidth.connect(this._twoTimesWidthMid),s.default.connect(this.context.getConstant(1),this._oneMinusWidth,0,0),this.width.connect(this._oneMinusWidth,0,1),this._sideMult=new s.default.Multiply,this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult,0,1),this.sideSend.chain(this._sideMult,this.sideReturn)},s.default.extend(s.default.StereoWidener,s.default.MidSideEffect),s.default.StereoWidener.defaults={width:.5},s.default.StereoWidener.prototype.dispose=function(){return s.default.MidSideEffect.prototype.dispose.call(this),this._writable(["width"]),this.width.dispose(),this.width=null,this._midMult.dispose(),this._midMult=null,this._sideMult.dispose(),this._sideMult=null,this._twoTimesWidthMid.dispose(),this._twoTimesWidthMid=null,this._twoTimesWidthSide.dispose(),this._twoTimesWidthSide=null,this._oneMinusWidth.dispose(),this._oneMinusWidth=null,this},e.default=s.default.StereoWidener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33),i(3);s.default.StereoFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackL=new s.default.Gain,this._feedbackR=new s.default.Gain,this.effectReturnL.chain(this._feedbackL,this.effectSendL),this.effectReturnR.chain(this._feedbackR,this.effectSendR),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoFeedbackEffect,s.default.StereoEffect),s.default.StereoFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackL.dispose(),this._feedbackL=null,this._feedbackR.dispose(),this._feedbackR=null,this},e.default=s.default.StereoFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(77),i(9),i(10),i(39),i(3),i(74);s.default.Reverb=function(){var t=s.default.defaults(arguments,["decay"],s.default.Reverb);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this.decay=t.decay,this.preDelay=t.preDelay,this.connectEffect(this._convolver)},s.default.extend(s.default.Reverb,s.default.Effect),s.default.Reverb.defaults={decay:1.5,preDelay:.01},s.default.Reverb.prototype.generate=function(){return s.default.Offline(function(){var t=new s.default.Noise,e=new s.default.Noise,i=new s.default.Merge;t.connect(i.left),e.connect(i.right);var n=(new s.default.Gain).toMaster();i.connect(n),t.start(0),e.start(0),n.gain.setValueAtTime(0,0),n.gain.setValueAtTime(1,this.preDelay),n.gain.exponentialApproachValueAtTime(0,this.preDelay,this.decay+this.preDelay)}.bind(this),this.decay+this.preDelay).then(function(t){return this._convolver.buffer=t.get(),this}.bind(this))},s.default.Reverb.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Reverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(23),i(2),i(33),i(18);s.default.PitchShift=function(){var t=s.default.defaults(arguments,["pitch"],s.default.PitchShift);s.default.FeedbackEffect.call(this,t),this._frequency=new s.default.Signal(0),this._delayA=new s.default.Delay(0,1),this._lfoA=new s.default.LFO({min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new s.default.Delay(0,1),this._lfoB=new s.default.LFO({min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new s.default.CrossFade,this._crossFadeLFO=new s.default.LFO({min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new s.default.Delay(t.delayTime),this.delayTime=this._feedbackDelay.delayTime,this._readOnly("delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);var e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize},s.default.extend(s.default.PitchShift,s.default.FeedbackEffect),s.default.PitchShift.defaults={pitch:0,windowSize:.1,delayTime:0,feedback:0},Object.defineProperty(s.default.PitchShift.prototype,"pitch",{get:function(){return this._pitch},set:function(t){this._pitch=t;var e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=s.default.intervalToFrequencyRatio(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=s.default.intervalToFrequencyRatio(t)-1),this._frequency.value=e*(1.2/this._windowSize)}}),Object.defineProperty(s.default.PitchShift.prototype,"windowSize",{get:function(){return this._windowSize},set:function(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}}),s.default.PitchShift.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._frequency.dispose(),this._frequency=null,this._delayA.disconnect(),this._delayA=null,this._delayB.disconnect(),this._delayB=null,this._lfoA.dispose(),this._lfoA=null,this._lfoB.dispose(),this._lfoB=null,this._crossFade.dispose(),this._crossFade=null,this._crossFadeLFO.dispose(),this._crossFadeLFO=null,this._writable("delayTime"),this._feedbackDelay.dispose(),this._feedbackDelay=null,this.delayTime=null,this},e.default=s.default.PitchShift},function(t,e,i){"use strict";i.r(e);var s=i(0);i(72),i(2),i(18);s.default.PingPongDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.PingPongDelay);s.default.StereoXFeedbackEffect.call(this,t),this._leftDelay=new s.default.Delay(0,t.maxDelayTime),this._rightDelay=new s.default.Delay(0,t.maxDelayTime),this._rightPreDelay=new s.default.Delay(0,t.maxDelayTime),this.delayTime=new s.default.Signal(t.delayTime,s.default.Type.Time),this.effectSendL.chain(this._leftDelay,this.effectReturnL),this.effectSendR.chain(this._rightPreDelay,this._rightDelay,this.effectReturnR),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackLR.disconnect(),this._feedbackLR.connect(this._rightDelay),this._readOnly(["delayTime"])},s.default.extend(s.default.PingPongDelay,s.default.StereoXFeedbackEffect),s.default.PingPongDelay.defaults={delayTime:.25,maxDelayTime:1},s.default.PingPongDelay.prototype.dispose=function(){return s.default.StereoXFeedbackEffect.prototype.dispose.call(this),this._leftDelay.dispose(),this._leftDelay=null,this._rightDelay.dispose(),this._rightDelay=null,this._rightPreDelay.dispose(),this._rightPreDelay=null,this._writable(["delayTime"]),this.delayTime.dispose(),this.delayTime=null,this},e.default=s.default.PingPongDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(9),i(15);s.default.Phaser=function(){var t=s.default.defaults(arguments,["frequency","octaves","baseFrequency"],s.default.Phaser);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO(t.frequency,0,1),this._lfoR=new s.default.LFO(t.frequency,0,1),this._lfoR.phase=180,this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this.Q=new s.default.Signal(t.Q,s.default.Type.Positive),this._filtersL=this._makeFilters(t.stages,this._lfoL,this.Q),this._filtersR=this._makeFilters(t.stages,this._lfoR,this.Q),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.effectSendL.connect(this._filtersL[0]),this.effectSendR.connect(this._filtersR[0]),s.default.connect(this._filtersL[t.stages-1],this.effectReturnL),s.default.connect(this._filtersR[t.stages-1],this.effectReturnR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),this._readOnly(["frequency","Q"])},s.default.extend(s.default.Phaser,s.default.StereoEffect),s.default.Phaser.defaults={frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350},s.default.Phaser.prototype._makeFilters=function(t,e,i){for(var n=new Array(t),o=0;o<t;o++){var a=this.context.createBiquadFilter();a.type="allpass",i.connect(a.Q),e.connect(a.frequency),n[o]=a}return s.default.connectSeries.apply(s.default,n),n},Object.defineProperty(s.default.Phaser.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t;var e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}}),Object.defineProperty(s.default.Phaser.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._lfoL.min=t,this._lfoR.min=t,this.octaves=this._octaves}}),s.default.Phaser.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","Q"]),this.Q.dispose(),this.Q=null,this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null;for(var t=0;t<this._filtersL.length;t++)this._filtersL[t].disconnect(),this._filtersL[t]=null;this._filtersL=null;for(var e=0;e<this._filtersR.length;e++)this._filtersR[e].disconnect(),this._filtersR[e]=null;return this._filtersR=null,this.frequency=null,this},e.default=s.default.Phaser},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(59),i(15),i(26),[.06748,.06404,.08212,.09004]),o=[.773,.802,.753,.733],a=[347,113,37];s.default.JCReverb=function(){var t=s.default.defaults(arguments,["roomSize"],s.default.JCReverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this._scaleRoomSize=new s.default.Scale(-.733,.197),this._allpassFilters=[],this._feedbackCombFilters=[];for(var e=0;e<a.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=a[e],this._allpassFilters.push(i)}for(var r=0;r<n.length;r++){var l=new s.default.FeedbackCombFilter(n[r],.1);this._scaleRoomSize.connect(l.resonance),l.resonance.value=o[r],s.default.connect(this._allpassFilters[this._allpassFilters.length-1],l),r<n.length/2?l.connect(this.effectReturnL):l.connect(this.effectReturnR),this._feedbackCombFilters.push(l)}this.roomSize.connect(this._scaleRoomSize),s.default.connectSeries.apply(s.default,this._allpassFilters),this.effectSendL.connect(this._allpassFilters[0]),this.effectSendR.connect(this._allpassFilters[0]),this._readOnly(["roomSize"])},s.default.extend(s.default.JCReverb,s.default.StereoEffect),s.default.JCReverb.defaults={roomSize:.5},s.default.JCReverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFilters.length;t++)this._allpassFilters[t].disconnect(),this._allpassFilters[t]=null;this._allpassFilters=null;for(var e=0;e<this._feedbackCombFilters.length;e++)this._feedbackCombFilters[e].dispose(),this._feedbackCombFilters[e]=null;return this._feedbackCombFilters=null,this._writable(["roomSize"]),this.roomSize.dispose(),this.roomSize=null,this._scaleRoomSize.dispose(),this._scaleRoomSize=null,this},e.default=s.default.JCReverb},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(54),i(15),i(2),i(19),i(10),i(42),[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100]),o=[225,556,441,341];s.default.Freeverb=function(){var t=s.default.defaults(arguments,["roomSize","dampening"],s.default.Freeverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this.dampening=new s.default.Signal(t.dampening,s.default.Type.Frequency),this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[];for(var e=0;e<o.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=o[e],this._allpassFiltersL.push(i)}for(var a=0;a<o.length;a++){var r=this.context.createBiquadFilter();r.type="allpass",r.frequency.value=o[a],this._allpassFiltersR.push(r)}for(var l=0;l<n.length;l++){var u=new s.default.LowpassCombFilter(n[l]);l<n.length/2?this.effectSendL.chain(u,this._allpassFiltersL[0]):this.effectSendR.chain(u,this._allpassFiltersR[0]),this.roomSize.connect(u.resonance),this.dampening.connect(u.dampening),this._combFilters.push(u)}s.default.connectSeries.apply(s.default,this._allpassFiltersL),s.default.connectSeries.apply(s.default,this._allpassFiltersR),s.default.connect(this._allpassFiltersL[this._allpassFiltersL.length-1],this.effectReturnL),s.default.connect(this._allpassFiltersR[this._allpassFiltersR.length-1],this.effectReturnR),this._readOnly(["roomSize","dampening"])},s.default.extend(s.default.Freeverb,s.default.StereoEffect),s.default.Freeverb.defaults={roomSize:.7,dampening:3e3},s.default.Freeverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFiltersL.length;t++)this._allpassFiltersL[t].disconnect(),this._allpassFiltersL[t]=null;this._allpassFiltersL=null;for(var e=0;e<this._allpassFiltersR.length;e++)this._allpassFiltersR[e].disconnect(),this._allpassFiltersR[e]=null;this._allpassFiltersR=null;for(var i=0;i<this._combFilters.length;i++)this._combFilters[i].dispose(),this._combFilters[i]=null;return this._combFilters=null,this._writable(["roomSize","dampening"]),this.roomSize.dispose(),this.roomSize=null,this.dampening.dispose(),this.dampening=null,this},e.default=s.default.Freeverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(33),i(2),i(18);s.default.FeedbackDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.FeedbackDelay);s.default.FeedbackEffect.call(this,t),this._delayNode=new s.default.Delay(t.delayTime,t.maxDelay),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),this._readOnly(["delayTime"])},s.default.extend(s.default.FeedbackDelay,s.default.FeedbackEffect),s.default.FeedbackDelay.defaults={delayTime:.25,maxDelay:1},s.default.FeedbackDelay.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._writable(["delayTime"]),this.delayTime=null,this},e.default=s.default.FeedbackDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Distortion=function(){var t=s.default.defaults(arguments,["distortion"],s.default.Distortion);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample},s.default.extend(s.default.Distortion,s.default.Effect),s.default.Distortion.defaults={distortion:.4,oversample:"none"},Object.defineProperty(s.default.Distortion.prototype,"distortion",{get:function(){return this._distortion},set:function(t){this._distortion=t;var e=100*t,i=Math.PI/180;this._shaper.setMap(function(t){return Math.abs(t)<.001?0:(3+e)*t*20*i/(Math.PI+e*Math.abs(t))})}}),Object.defineProperty(s.default.Distortion.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Distortion.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Distortion},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15),i(18);s.default.Chorus=function(){var t=s.default.defaults(arguments,["frequency","delayTime","depth"],s.default.Chorus);s.default.StereoEffect.call(this,t),this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new s.default.LFO({frequency:t.frequency,min:0,max:1}),this._lfoR=new s.default.LFO({frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new s.default.Delay,this._delayNodeR=new s.default.Delay,this.frequency=this._lfoL.frequency,this.effectSendL.chain(this._delayNodeL,this.effectReturnL),this.effectSendR.chain(this._delayNodeR,this.effectReturnR),this.effectSendL.connect(this.effectReturnL),this.effectSendR.connect(this.effectReturnR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this._lfoL.start(),this._lfoR.start(),this._lfoL.frequency.connect(this._lfoR.frequency),this.depth=this._depth,this.frequency.value=t.frequency,this.type=t.type,this._readOnly(["frequency"]),this.spread=t.spread},s.default.extend(s.default.Chorus,s.default.StereoEffect),s.default.Chorus.defaults={frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180},Object.defineProperty(s.default.Chorus.prototype,"depth",{get:function(){return this._depth},set:function(t){this._depth=t;var e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}}),Object.defineProperty(s.default.Chorus.prototype,"delayTime",{get:function(){return 1e3*this._delayTime},set:function(t){this._delayTime=t/1e3,this.depth=this._depth}}),Object.defineProperty(s.default.Chorus.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Chorus.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Chorus.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._delayNodeL.dispose(),this._delayNodeL=null,this._delayNodeR.dispose(),this._delayNodeR=null,this._writable("frequency"),this.frequency=null,this},e.default=s.default.Chorus},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Chebyshev=function(){var t=s.default.defaults(arguments,["order"],s.default.Chebyshev);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample},s.default.extend(s.default.Chebyshev,s.default.Effect),s.default.Chebyshev.defaults={order:1,oversample:"none"},s.default.Chebyshev.prototype._getCoefficient=function(t,e,i){return i.hasOwnProperty(e)?i[e]:(i[e]=0===e?0:1===e?t:2*t*this._getCoefficient(t,e-1,i)-this._getCoefficient(t,e-2,i),i[e])},Object.defineProperty(s.default.Chebyshev.prototype,"order",{get:function(){return this._order},set:function(t){this._order=t;for(var e=new Array(4096),i=e.length,s=0;s<i;++s){var n=2*s/i-1;e[s]=0===n?0:this._getCoefficient(n,t,{})}this._shaper.curve=e}}),Object.defineProperty(s.default.Chebyshev.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Chebyshev.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Chebyshev},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(13),i(75);s.default.BitCrusher=function(){var t=s.default.defaults(arguments,["bits"],s.default.BitCrusher);s.default.Effect.call(this,t);var e=1/Math.pow(2,t.bits-1);this._subtract=new s.default.Subtract,this._modulo=new s.default.Modulo(e),this._bits=t.bits,this.effectSend.fan(this._subtract,this._modulo),this._modulo.connect(this._subtract,0,1),this._subtract.connect(this.effectReturn)},s.default.extend(s.default.BitCrusher,s.default.Effect),s.default.BitCrusher.defaults={bits:4},Object.defineProperty(s.default.BitCrusher.prototype,"bits",{get:function(){return this._bits},set:function(t){this._bits=t;var e=1/Math.pow(2,t-1);this._modulo.value=e}}),s.default.BitCrusher.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._subtract.dispose(),this._subtract=null,this._modulo.dispose(),this._modulo=null,this},e.default=s.default.BitCrusher},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(42),i(8),i(9);s.default.AutoWah=function(){var t=s.default.defaults(arguments,["baseFrequency","octaves","sensitivity"],s.default.AutoWah);s.default.Effect.call(this,t),this.follower=new s.default.Follower(t.follower),this._sweepRange=new s.default.ScaleExp(0,1,.5),this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this._inputBoost=new s.default.Gain,this._bandpass=new s.default.Filter({rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new s.default.Filter(0,"peaking"),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this.follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,this._readOnly(["gain","Q"])},s.default.extend(s.default.AutoWah,s.default.Effect),s.default.AutoWah.defaults={baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:{attack:.3,release:.5}},Object.defineProperty(s.default.AutoWah.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"sensitivity",{get:function(){return s.default.gainToDb(1/this._inputBoost.gain.value)},set:function(t){this._inputBoost.gain.value=1/s.default.dbToGain(t)}}),s.default.AutoWah.prototype._setSweepRange=function(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)},s.default.AutoWah.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this.follower.dispose(),this.follower=null,this._sweepRange.dispose(),this._sweepRange=null,this._bandpass.dispose(),this._bandpass=null,this._peaking.dispose(),this._peaking=null,this._inputBoost.dispose(),this._inputBoost=null,this._writable(["gain","Q"]),this.gain=null,this.Q=null,this},e.default=s.default.AutoWah},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(48);s.default.AutoPanner=function(){var t=s.default.defaults(arguments,["frequency"],s.default.AutoPanner);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth,min:-1,max:1}),this.depth=this._lfo.amplitude,this._panner=new s.default.Panner,this.frequency=this._lfo.frequency,this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this.type=t.type,this._readOnly(["depth","frequency"])},s.default.extend(s.default.AutoPanner,s.default.Effect),s.default.AutoPanner.defaults={frequency:1,type:"sine",depth:1},s.default.AutoPanner.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoPanner.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoPanner.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoPanner.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoPanner.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.AutoPanner.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this._panner.dispose(),this._panner=null,this._writable(["depth","frequency"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoPanner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(9);s.default.AutoFilter=function(){var t=s.default.defaults(arguments,["frequency","baseFrequency","octaves"],s.default.AutoFilter);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.filter=new s.default.Filter(t.filter),this._octaves=0,this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.type=t.type,this._readOnly(["frequency","depth"]),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency},s.default.extend(s.default.AutoFilter,s.default.Effect),s.default.AutoFilter.defaults={frequency:1,type:"sine",depth:1,baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}},s.default.AutoFilter.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoFilter.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoFilter.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoFilter.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoFilter.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),Object.defineProperty(s.default.AutoFilter.prototype,"baseFrequency",{get:function(){return this._lfo.min},set:function(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.AutoFilter.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._lfo.max=this.baseFrequency*Math.pow(2,t)}}),s.default.AutoFilter.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this.filter.dispose(),this.filter=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28);s.default.Listener=function(){s.default.call(this),this._orientation=[0,0,0,0,0,0],this._position=[0,0,0],s.default.getContext(function(){this.set(n.defaults)}.bind(this))},s.default.extend(s.default.Listener),s.default.Listener.defaults={positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:1,upX:0,upY:1,upZ:0},s.default.Listener.prototype.isListener=!0,s.default.Listener.prototype._rampTimeConstant=.01,s.default.Listener.prototype.setPosition=function(t,e,i){if(this.context.rawContext.listener.positionX){var s=this.now();this.context.rawContext.listener.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this.context.rawContext.listener.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this.context.rawContext.listener.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this.context.rawContext.listener.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Listener.prototype.setOrientation=function(t,e,i,s,n,o){if(this.context.rawContext.listener.forwardX){var a=this.now();this.context.rawContext.listener.forwardX.setTargetAtTime(t,a,this._rampTimeConstant),this.context.rawContext.listener.forwardY.setTargetAtTime(e,a,this._rampTimeConstant),this.context.rawContext.listener.forwardZ.setTargetAtTime(i,a,this._rampTimeConstant),this.context.rawContext.listener.upX.setTargetAtTime(s,a,this._rampTimeConstant),this.context.rawContext.listener.upY.setTargetAtTime(n,a,this._rampTimeConstant),this.context.rawContext.listener.upZ.setTargetAtTime(o,a,this._rampTimeConstant)}else this.context.rawContext.listener.setOrientation(t,e,i,s,n,o);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Listener.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Listener.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Listener.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Listener.prototype,"forwardX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Listener.prototype,"forwardY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Listener.prototype,"forwardZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),Object.defineProperty(s.default.Listener.prototype,"upX",{set:function(t){this._orientation[3]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[3]}}),Object.defineProperty(s.default.Listener.prototype,"upY",{set:function(t){this._orientation[4]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[4]}}),Object.defineProperty(s.default.Listener.prototype,"upZ",{set:function(t){this._orientation[5]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[5]}}),s.default.Listener.prototype.dispose=function(){return this._orientation=null,this._position=null,this};var n=s.default.Listener;s.default.Listener=new n,s.default.Context.on("init",function(t){t.listener&&t.listener.isListener?s.default.Listener=t.listener:s.default.Listener=new n}),e.default=s.default.Listener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24);s.default.Draw=function(){s.default.call(this),this._events=new s.default.Timeline,this.expiration=.25,this.anticipation=.008,this._boundDrawLoop=this._drawLoop.bind(this)},s.default.extend(s.default.Draw),s.default.Draw.prototype.schedule=function(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),1===this._events.length&&requestAnimationFrame(this._boundDrawLoop),this},s.default.Draw.prototype.cancel=function(t){return this._events.cancel(this.toSeconds(t)),this},s.default.Draw.prototype._drawLoop=function(){for(var t=s.default.context.currentTime;this._events.length&&this._events.peek().time-this.anticipation<=t;){var e=this._events.shift();t-e.time<=this.expiration&&e.callback()}this._events.length>0&&requestAnimationFrame(this._boundDrawLoop)},s.default.Draw=new s.default.Draw,e.default=s.default.Draw},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(3),{});s.default.prototype.send=function(t,e){n.hasOwnProperty(t)||(n[t]=this.context.createGain()),e=s.default.defaultArg(e,0);var i=new s.default.Gain(e,s.default.Type.Decibels);return this.connect(i),i.connect(n[t]),i},s.default.prototype.receive=function(t,e){return n.hasOwnProperty(t)||(n[t]=this.context.createGain()),s.default.connect(n[t],this,0,e),this},s.default.Context.on("init",function(t){t.buses?n=t.buses:(n={},t.buses=n)}),e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlRandom=function(){var t=s.default.defaults(arguments,["min","max"],s.default.CtrlRandom);s.default.call(this),this.min=t.min,this.max=t.max,this.integer=t.integer},s.default.extend(s.default.CtrlRandom),s.default.CtrlRandom.defaults={min:0,max:1,integer:!1},Object.defineProperty(s.default.CtrlRandom.prototype,"value",{get:function(){var t=this.toSeconds(this.min),e=this.toSeconds(this.max),i=Math.random(),s=i*t+(1-i)*e;return this.integer&&(s=Math.floor(s)),s}}),e.default=s.default.CtrlRandom},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlMarkov=function(t,e){s.default.call(this),this.values=s.default.defaultArg(t,{}),this.value=s.default.defaultArg(e,Object.keys(this.values)[0])},s.default.extend(s.default.CtrlMarkov),s.default.CtrlMarkov.prototype.next=function(){if(this.values.hasOwnProperty(this.value)){var t=this.values[this.value];if(s.default.isArray(t))for(var e=this._getProbDistribution(t),i=Math.random(),n=0,o=0;o<e.length;o++){var a=e[o];if(i>n&&i<n+a){var r=t[o];s.default.isObject(r)?this.value=r.value:this.value=r}n+=a}else this.value=t}return this.value},s.default.CtrlMarkov.prototype._getProbDistribution=function(t){for(var e=[],i=0,n=!1,o=0;o<t.length;o++){var a=t[o];s.default.isObject(a)?(n=!0,e[o]=a.probability):e[o]=1/t.length,i+=e[o]}if(n)for(var r=0;r<e.length;r++)e[r]=e[r]/i;return e},s.default.CtrlMarkov.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlMarkov},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlInterpolate=function(){var t=s.default.defaults(arguments,["values","index"],s.default.CtrlInterpolate);s.default.call(this),this.values=t.values,this.index=t.index},s.default.extend(s.default.CtrlInterpolate),s.default.CtrlInterpolate.defaults={index:0,values:[]},Object.defineProperty(s.default.CtrlInterpolate.prototype,"value",{get:function(){var t=this.index;t=Math.min(t,this.values.length-1);var e=Math.floor(t),i=this.values[e],s=this.values[Math.ceil(t)];return this._interpolate(t-e,i,s)}}),s.default.CtrlInterpolate.prototype._interpolate=function(t,e,i){if(s.default.isArray(e)){for(var n=[],o=0;o<e.length;o++)n[o]=this._interpolate(t,e[o],i[o]);return n}if(s.default.isObject(e)){var a={};for(var r in e)a[r]=this._interpolate(t,e[r],i[r]);return a}return(1-t)*(e=this._toNumber(e))+t*(i=this._toNumber(i))},s.default.CtrlInterpolate.prototype._toNumber=function(t){return s.default.isNumber(t)?t:this.toSeconds(t)},s.default.CtrlInterpolate.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlInterpolate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Waveform=function(){var t=s.default.defaults(arguments,["size"],s.default.Waveform);t.type=s.default.Analyser.Type.Waveform,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.Waveform,s.default.AudioNode),s.default.Waveform.defaults={size:1024},s.default.Waveform.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.Waveform.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.Waveform.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.Waveform},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28),i(1);s.default.Panner3D=function(){var t=s.default.defaults(arguments,["positionX","positionY","positionZ"],s.default.Panner3D);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createPanner(),this._panner.panningModel=t.panningModel,this._panner.maxDistance=t.maxDistance,this._panner.distanceModel=t.distanceModel,this._panner.coneOuterGain=t.coneOuterGain,this._panner.coneOuterAngle=t.coneOuterAngle,this._panner.coneInnerAngle=t.coneInnerAngle,this._panner.refDistance=t.refDistance,this._panner.rolloffFactor=t.rolloffFactor,this._orientation=[t.orientationX,t.orientationY,t.orientationZ],this._position=[t.positionX,t.positionY,t.positionZ],this.orientationX=t.orientationX,this.orientationY=t.orientationY,this.orientationZ=t.orientationZ,this.positionX=t.positionX,this.positionY=t.positionY,this.positionZ=t.positionZ},s.default.extend(s.default.Panner3D,s.default.AudioNode),s.default.Panner3D.defaults={positionX:0,positionY:0,positionZ:0,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",maxDistance:1e4,distanceModel:"inverse",coneOuterGain:0,coneOuterAngle:360,coneInnerAngle:360,refDistance:1,rolloffFactor:1},s.default.Panner3D.prototype._rampTimeConstant=.01,s.default.Panner3D.prototype.setPosition=function(t,e,i){if(this._panner.positionX){var s=this.now();this._panner.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Panner3D.prototype.setOrientation=function(t,e,i){if(this._panner.orientationX){var s=this.now();this._panner.orientationX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.orientationY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.orientationZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setOrientation(t,e,i);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Panner3D.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),s.default.Panner3D._aliasProperty=function(t){Object.defineProperty(s.default.Panner3D.prototype,t,{set:function(e){this._panner[t]=e},get:function(){return this._panner[t]}})},s.default.Panner3D._aliasProperty("panningModel"),s.default.Panner3D._aliasProperty("refDistance"),s.default.Panner3D._aliasProperty("rolloffFactor"),s.default.Panner3D._aliasProperty("distanceModel"),s.default.Panner3D._aliasProperty("coneInnerAngle"),s.default.Panner3D._aliasProperty("coneOuterAngle"),s.default.Panner3D._aliasProperty("coneOuterGain"),s.default.Panner3D._aliasProperty("maxDistance"),s.default.Panner3D.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._panner.disconnect(),this._panner=null,this._orientation=null,this._position=null,this},e.default=s.default.Panner3D},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(43),i(1);s.default.MultibandCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(arguments,s.default.MultibandCompressor.defaults),this._splitter=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new s.default.Gain,this.low=new s.default.Compressor(t.low),this.mid=new s.default.Compressor(t.mid),this.high=new s.default.Compressor(t.high),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandCompressor,s.default.AudioNode),s.default.MultibandCompressor.defaults={low:s.default.Compressor.defaults,mid:s.default.Compressor.defaults,high:s.default.Compressor.defaults,lowFrequency:250,highFrequency:2e3},s.default.MultibandCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._splitter.dispose(),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this._splitter=null,this.low=null,this.mid=null,this.high=null,this.lowFrequency=null,this.highFrequency=null,this},e.default=s.default.MultibandCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(10),i(1);s.default.Mono=function(){s.default.AudioNode.call(this),this.createInsOuts(1,0),this._merge=this.output=new s.default.Merge,s.default.connect(this.input,this._merge,0,0),s.default.connect(this.input,this._merge,0,1)},s.default.extend(s.default.Mono,s.default.AudioNode),s.default.Mono.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._merge.dispose(),this._merge=null,this},e.default=s.default.Mono},function(t,e,i){"use strict";i.r(e);var s=i(0);i(53),i(52),i(43),i(1);s.default.MidSideCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(t,s.default.MidSideCompressor.defaults),this._midSideSplit=this.input=new s.default.MidSideSplit,this._midSideMerge=this.output=new s.default.MidSideMerge,this.mid=new s.default.Compressor(t.mid),this.side=new s.default.Compressor(t.side),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),this._readOnly(["mid","side"])},s.default.extend(s.default.MidSideCompressor,s.default.AudioNode),s.default.MidSideCompressor.defaults={mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}},s.default.MidSideCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["mid","side"]),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this},e.default=s.default.MidSideCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Meter=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Meter);s.default.AudioNode.call(this),this.smoothing=t.smoothing,this._rms=0,this.input=this.output=this._analyser=new s.default.Analyser("waveform",256)},s.default.extend(s.default.Meter,s.default.AudioNode),s.default.Meter.defaults={smoothing:.8},s.default.Meter.prototype.getLevel=function(){for(var t=this._analyser.getValue(),e=0,i=0;i<t.length;i++){var n=t[i];e+=n*n}var o=Math.sqrt(e/t.length);return this._rms=Math.max(o,this._rms*this.smoothing),s.default.gainToDb(this._rms)},s.default.Meter.prototype.getValue=function(){return this._analyser.getValue()[0]},s.default.Meter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null,this},e.default=s.default.Meter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(43),i(1);s.default.Limiter=function(){var t=s.default.defaults(arguments,["threshold"],s.default.Limiter);s.default.AudioNode.call(this),this._compressor=this.input=this.output=new s.default.Compressor({attack:.001,decay:.001,threshold:t.threshold}),this.threshold=this._compressor.threshold,this._readOnly("threshold")},s.default.extend(s.default.Limiter,s.default.AudioNode),s.default.Limiter.defaults={threshold:-12},s.default.Limiter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._compressor.dispose(),this._compressor=null,this._writable("threshold"),this.threshold=null,this},e.default=s.default.Limiter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(85),i(1);s.default.Gate=function(){var t=s.default.defaults(arguments,["threshold","smoothing"],s.default.Gate);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._follower=new s.default.Follower(t.smoothing),this._gt=new s.default.GreaterThan(s.default.dbToGain(t.threshold)),s.default.connect(this.input,this.output),s.default.connectSeries(this.input,this._follower,this._gt,this.output.gain)},s.default.extend(s.default.Gate,s.default.AudioNode),s.default.Gate.defaults={smoothing:.1,threshold:-40},Object.defineProperty(s.default.Gate.prototype,"threshold",{get:function(){return s.default.gainToDb(this._gt.value)},set:function(t){this._gt.value=s.default.dbToGain(t)}}),Object.defineProperty(s.default.Gate.prototype,"smoothing",{get:function(){return this._follower.smoothing},set:function(t){this._follower.smoothing=t}}),s.default.Gate.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._follower.dispose(),this._gt.dispose(),this._follower=null,this._gt=null,this},e.default=s.default.Gate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.FFT=function(){var t=s.default.defaults(arguments,["size"],s.default.FFT);t.type=s.default.Analyser.Type.FFT,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.FFT,s.default.AudioNode),s.default.FFT.defaults={size:1024},s.default.FFT.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.FFT.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.FFT.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.FFT},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(3),i(1);s.default.EQ3=function(){var t=s.default.defaults(arguments,["low","mid","high"],s.default.EQ3);s.default.AudioNode.call(this),this.output=new s.default.Gain,this._multibandSplit=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this._lowGain=new s.default.Gain(t.low,s.default.Type.Decibels),this._midGain=new s.default.Gain(t.mid,s.default.Type.Decibels),this._highGain=new s.default.Gain(t.high,s.default.Type.Decibels),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),this._readOnly(["low","mid","high","lowFrequency","highFrequency"])},s.default.extend(s.default.EQ3,s.default.AudioNode),s.default.EQ3.defaults={low:0,mid:0,high:0,lowFrequency:400,highFrequency:2500},s.default.EQ3.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this._multibandSplit=null,this.lowFrequency=null,this.highFrequency=null,this._lowGain.dispose(),this._lowGain=null,this._midGain.dispose(),this._midGain=null,this._highGain.dispose(),this._highGain=null,this.low=null,this.mid=null,this.high=null,this.Q=null,this},e.default=s.default.EQ3},function(t,e,i){"use strict";i.r(e);var s=i(0);i(91),i(88),i(1);s.default.Channel=function(){var t=s.default.defaults(arguments,["volume","pan"],s.default.PanVol);s.default.AudioNode.call(this,t),this._solo=this.input=new s.default.Solo(t.solo),this._panVol=this.output=new s.default.PanVol({pan:t.pan,volume:t.volume,mute:t.mute}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),this._readOnly(["pan","volume"])},s.default.extend(s.default.Channel,s.default.AudioNode),s.default.Channel.defaults={pan:0,volume:0,mute:!1,solo:!1},Object.defineProperty(s.default.Channel.prototype,"solo",{get:function(){return this._solo.solo},set:function(t){this._solo.solo=t}}),Object.defineProperty(s.default.Channel.prototype,"muted",{get:function(){return this._solo.muted||this.mute}}),Object.defineProperty(s.default.Channel.prototype,"mute",{get:function(){return this._panVol.mute},set:function(t){this._panVol.mute=t}}),s.default.Channel.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panVol.dispose(),this._panVol=null,this.pan=null,this.volume=null,this._solo.dispose(),this._solo=null,this},e.default=s.default.Channel},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){i(31),i(36),i(146),i(43),i(23),i(47),i(145),i(59),i(144),i(9),i(58),i(41),i(143),i(12),i(142),i(54),i(10),i(141),i(140),i(52),i(53),i(139),i(138),i(60),i(48),i(137),i(91),i(86),i(88),i(19),i(27),i(136),i(135),i(134),i(79),i(133),i(1),i(11),i(78),i(132),i(83),i(20),i(18),i(131),i(35),i(3),i(81),i(130),i(40),i(77),i(76),i(14),i(24),i(34),i(16),i(56),i(80),i(129),i(128),i(127),i(126),i(125),i(124),i(74),i(123),i(8),i(122),i(33),i(121),i(120),i(73),i(119),i(118),i(117),i(116),i(15),i(115),i(114),i(72),i(113),i(112),i(51),i(71),i(70),i(111),i(110),i(109),i(108),i(107),i(21),i(106),i(105),i(25),i(66),i(104),i(103),i(102),i(101),i(38),i(87),i(29),i(22),i(89),i(100),i(85),i(84),i(75),i(5),i(90),i(99),i(61),i(26),i(42),i(2),i(30),i(13),i(82),i(98),i(7),i(28),i(68),i(32),i(67),i(49),i(97),i(39),i(37),i(17),i(64),i(65),i(96),i(50),i(69),i(6),i(57),i(95),i(46),i(94),i(55),i(63),i(62),i(45),i(4),t.exports=i(0).default}])});

},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/nexusui/dist/NexusUI.js":[function(require,module,exports) {
var define;
var process = require("process");
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Nexus"] = factory();else root["Nexus"] = factory();
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/

        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var NexusUI = _interopRequire(__webpack_require__(1));

      module.exports = NexusUI;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      exports.colors = colors;
      exports.context = context;
      exports.clock = clock;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      "use strict";

      var Interfaces = _interopRequire(__webpack_require__(2));

      var math = _interopRequire(__webpack_require__(5));

      var Rack = _interopRequire(__webpack_require__(37));

      var Tune = _interopRequire(__webpack_require__(39));

      var Transform = _interopRequireWildcard(__webpack_require__(38));

      var Counter = __webpack_require__(28);

      var Radio = __webpack_require__(40);

      var Drunk = __webpack_require__(27);

      var Sequence = __webpack_require__(26);

      var Matrix = __webpack_require__(25);

      var WAAClock = _interopRequire(__webpack_require__(41));

      var Interval = _interopRequire(__webpack_require__(44));
      /**
      NexusUI => created as Nexus
      */


      var NexusUI = function () {
        function NexusUI(context) {
          _classCallCheck(this, NexusUI);

          for (var key in Interfaces) {
            this[key] = Interfaces[key];
          }

          for (var key in math) {
            this[key] = math[key];
          }

          var Core = {
            Rack: Rack
          };
          var Models = {
            Counter: Counter,
            Radio: Radio,
            Drunk: Drunk,
            Sequence: Sequence,
            Matrix: Matrix
          };

          for (var key in Models) {
            this[key] = Models[key];
          }

          for (var key in Core) {
            this[key] = Core[key];
          }

          var DefaultContext = window.AudioContext || window.webkitAudioContext;
          this._context = context || new DefaultContext();
          this.tune = new Tune();
          this.note = this.tune.note.bind(this.tune);
          this.clock = new WAAClock(this._context);
          this.clock.start();
          this.Interval = Interval;
          this.colors = {
            accent: "#2bb",
            fill: "#eee",
            light: "#fff",
            dark: "#333",
            mediumLight: "#ccc",
            mediumDark: "#666"
          };
          this.transform = Transform;
          this.add = Transform.add;
          this.Add = {};

          for (var key in Interfaces) {
            this.Add[key] = Transform.add.bind(this, key);
          }
          /* create default component size */

          /* jshint ignore:start */


          var existingStylesheets = document.getElementsByTagName("style");
          var defaultSizeDeclaration = "[nexus-ui]{height:5000px;width:5000px}";
          var defaultStyleNode = document.createElement("style");
          defaultStyleNode.type = "text/css";
          defaultStyleNode.innerHTML = defaultSizeDeclaration;

          if (existingStylesheets.length > 0) {
            var parent = existingStylesheets[0].parentNode;
            parent.insertBefore(defaultStyleNode, existingStylesheets[0]);
          } else {
            document.write("<style>" + defaultSizeDeclaration + "</style>");
          }
          /* jshint ignore:end */

        }

        _createClass(NexusUI, {
          context: {
            get: function () {
              return this._context;
            },
            set: function (ctx) {
              this.clock.stop();
              this._context = ctx;
              this.clock = new WAAClock(this.context);
              this.clock.start();
            }
          }
        });

        return NexusUI;
      }();

      var Nexus = new NexusUI();

      function colors() {
        return Nexus.colors;
      }

      function context() {
        return Nexus.context;
      }

      function clock() {
        return Nexus.clock;
      }

      exports["default"] = Nexus;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = {
        Position: __webpack_require__(3),
        Slider: __webpack_require__(14),
        Toggle: __webpack_require__(15),

        /*  Range: require('./rangeslider'),
          Waveform: require('./waveform'), */
        Button: __webpack_require__(16),
        TextButton: __webpack_require__(18),
        RadioButton: __webpack_require__(19),
        Number: __webpack_require__(20),
        Select: __webpack_require__(21),
        Dial: __webpack_require__(22),
        Piano: __webpack_require__(23),
        Sequencer: __webpack_require__(24),
        Pan2D: __webpack_require__(29),
        Tilt: __webpack_require__(30),
        Multislider: __webpack_require__(31),
        Pan: __webpack_require__(32),
        Envelope: __webpack_require__(33),
        Spectrogram: __webpack_require__(34),
        Meter: __webpack_require__(35),
        Oscilloscope: __webpack_require__(36)
      };
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var Interaction = _interopRequireWildcard(__webpack_require__(12));
      /**
      * Position
      *
      * @description Two-dimensional touch slider.
      *
      * @demo <span nexus-ui="position"></span>
      *
      * @example
      * var position = new Nexus.Position('#target')
      *
      * @example
      * var position = new Nexus.Position('#target',{
      *   'size': [200,200],
      *   'mode': 'absolute',  // "absolute" or "relative"
      *   'x': 0.5,  // initial x value
      *   'minX': 0,
      *   'maxX': 1,
      *   'stepX': 0,
      *   'y': 0.5,  // initial y value
      *   'minY': 0,
      *   'maxY': 1,
      *   'stepY': 0
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is an object with x and y properties containing the x and y values of the interface.
      *
      * @outputexample
      * position.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Position = function (_Interface) {
        function Position() {
          _classCallCheck(this, Position);

          var options = ["value"];
          var defaults = {
            size: [200, 200],
            mode: "absolute",
            minX: 0,
            maxX: 1,
            stepX: 0,
            x: 0.5,
            minY: 0,
            maxY: 1,
            stepY: 0,
            y: 0.5
          };

          _get(Object.getPrototypeOf(Position.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._x = new Step(this.settings.minX, this.settings.maxX, this.settings.stepX, this.settings.x);
          this._y = new Step(this.settings.minY, this.settings.maxY, this.settings.stepY, this.settings.y);
          this.position = {
            x: new Interaction.Handle(this.settings.mode, "horizontal", [0, this.width], [this.height, 0]),
            y: new Interaction.Handle(this.settings.mode, "vertical", [0, this.width], [this.height, 0])
          };
          this.position.x.value = this._x.normalized;
          this.position.y.value = this._y.normalized;
          this.init();
          this.render();
        }

        _inherits(Position, _Interface);

        _createClass(Position, {
          buildInterface: {
            value: function buildInterface() {
              this.knob = svg.create("circle");
              this.element.appendChild(this.knob);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.position.x.resize([0, this.width], [this.height, 0]);
              this.position.y.resize([0, this.width], [this.height, 0]);
              this._minDimension = Math.min(this.width, this.height);
              this.knobRadius = {
                off: ~~(this._minDimension / 100) * 5 + 5
              };
              this.knobRadius.on = this.knobRadius.off * 2;
              this.knob.setAttribute("cx", this.width / 2);
              this.knob.setAttribute("cy", this.height / 2);
              this.knob.setAttribute("r", this.knobRadius.off);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.element.style.backgroundColor = this.colors.fill;
              this.knob.setAttribute("fill", this.colors.accent);
            }
          },
          render: {
            value: function render() {
              if (this.clicked) {
                //  this.knobRadius = 30;
                this.knob.setAttribute("r", this.knobRadius.on);
              } else {
                //  this.knobRadius = 15;
                this.knob.setAttribute("r", this.knobRadius.off);
              }

              this.knobCoordinates = {
                x: this._x.normalized * this.width,
                y: this.height - this._y.normalized * this.height
              };
              this.knob.setAttribute("cx", this.knobCoordinates.x);
              this.knob.setAttribute("cy", this.knobCoordinates.y);
            }
          },
          click: {
            value: function click() {
              this.position.x.anchor = this.mouse;
              this.position.y.anchor = this.mouse;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.position.x.update(this.mouse);
                this.position.y.update(this.mouse);

                this._x.updateNormal(this.position.x.value);

                this._y.updateNormal(this.position.y.value);

                this.emit("change", {
                  x: this._x.value,
                  y: this._y.value
                });
                this.render();
              }
            }
          },
          release: {
            value: function release() {
              this.render();
            }
          },
          x: {
            /**
            * The interface's x value. When set, it will automatically adjust to fit min/max/step settings of the interface.
            * @type {object}
            * @example position.x = 0.5;
            */
            get: function () {
              return this._x.value;
            },
            set: function (value) {
              this._x.update(value);

              this.emit("change", {
                x: this._x.value,
                y: this._y.value
              });
              this.render();
            }
          },
          y: {
            /**
            * The interface's y values. When set, it will automatically adjust to fit min/max/step settings of the interface.
            * @type {object}
            * @example position.x = 0.5;
            */
            get: function () {
              return this._y.value;
            },
            set: function (value) {
              this._y.update(value);

              this.emit("change", {
                x: this._x.value,
                y: this._y.value
              });
              this.render();
            }
          },
          normalized: {
            get: function () {
              return {
                x: this._x.normalized,
                y: this._y.normalized
              };
            }
          },
          minX: {
            /**
            * The lower limit of value on the x axis
            * @type {object}
            */
            get: function () {
              return this._x.min;
            },
            set: function (v) {
              this._x.min = v;
              this.render();
            }
          },
          minY: {
            /**
            * The lower limit of value on the y axis
            * @type {object}
            */
            get: function () {
              return this._y.min;
            },
            set: function (v) {
              this._y.min = v;
              this.render();
            }
          },
          maxX: {
            /**
            * The upper limit of value on the x axis
            * @type {object}
            */
            get: function () {
              return this._x.max;
            },
            set: function (v) {
              this._x.max = v;
              this.render();
            }
          },
          maxY: {
            /**
            * The upper limit of value on the y axis
            * @type {object}
            */
            get: function () {
              return this._y.max;
            },
            set: function (v) {
              this._y.max = v;
              this.render();
            }
          },
          stepX: {
            /**
            * The incremental step of values on the x axis
            * @type {object}
            */
            get: function () {
              return this._x.step;
            },
            set: function (v) {
              this._x.step = v;
              this.render();
            }
          },
          stepY: {
            /**
            * The incremental step of values on the y axis
            * @type {object}
            */
            get: function () {
              return this._y.step;
            },
            set: function (v) {
              this._y.step = v;
              this.render();
            }
          },
          mode: {
            /**
            Absolute mode (position's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "absolute".
            @type {string}
            @example position.mode = "relative";
            */
            get: function () {
              return this.position.x.mode;
            },
            set: function (v) {
              this.position.x.mode = v;
              this.position.y.mode = v;
            }
          }
        });

        return Position;
      }(Interface);

      module.exports = Position;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var math = __webpack_require__(5);

      module.exports = {
        create: function (type) {
          return document.createElementNS("http://www.w3.org/2000/svg", type);
        },
        arc: function (x, y, radius, startAngle, endAngle) {
          var start = math.toCartesian(radius, endAngle);
          var end = math.toCartesian(radius, startAngle);
          var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          var d = ["M", start.x + x, start.y + y, "A", radius, radius, 0, largeArcFlag, 0, end.x + x, end.y + y].join(" ");
          return d;
        },
        radialGradient: function (defs, numberOfStops) {
          var id = "gradient" + math.ri(100000000000);
          var stops = [];
          var gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
          gradient.setAttribute("id", id);
          gradient.setAttribute("cx", "50%");
          gradient.setAttribute("cy", "50%");
          gradient.setAttribute("r", "50%");
          defs.appendChild(gradient);

          for (var i = 0; i < numberOfStops; i++) {
            var _stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");

            _stop.setAttribute("id", "stop" + i); //stop.setAttribute('offset', '70%');
            //stop.setAttribute('stop-color', 'White');


            gradient.appendChild(_stop);
            stops.push(_stop);
          }

          return {
            id: id,
            stops: stops,
            element: gradient
          };
        }
      };
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {
      "use strict";
      /**
       * Limit a number to within a minimum and maximum
       * @param  {number} value Input value
       * @param  {number} min   Lower limit
       * @param  {number} max   Upper limit
       * @return {number}       The input value constrained within the lower and upper limits
       * @example
       * Nexus.clip(11,0,10)   // returns 10
       * Nexus.clip(-1,0,10)   // returns 0
       * Nexus.clip(5,0,10)    // returns 5
       */

      exports.clip = function (value, min, max) {
        return Math.min(Math.max(value, min), max);
      };

      exports.normalize = function (value, min, max) {
        return (value - min) / (max - min);
      };
      /**
       * Scale a value from one range to another range.
       * @param  {number} inNum  Input value
       * @param  {number} inMin  Input range minimum
       * @param  {number} inMax  Input range maximum
       * @param  {number} outMin Output range minimum
       * @param  {number} outMax Output range maximum
       * @return {number}        The input value scaled to its new range
       * @example
       * Nexus.scale(0.5,0,1,0,10)   // returns 5
       * Nexus.scale(0.9,0,1,1,0)    // returns 0.1
       */


      exports.scale = function (inNum, inMin, inMax, outMin, outMax) {
        if (inMin === inMax) {
          return outMin;
        }

        return (inNum - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
      };

      exports.toPolar = function (x, y) {
        var r = Math.sqrt(x * x + y * y);
        var theta = Math.atan2(y, x);

        if (theta < 0) {
          theta = theta + 2 * Math.PI;
        }

        return {
          radius: r,
          angle: theta
        };
      };

      exports.toCartesian = function (radius, angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        return {
          x: radius * cos,
          y: radius * sin * -1
        };
      };
      /*
      exports.polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
      
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
      }  */


      exports.prune = function (data, scale) {
        return parseFloat(data.toFixed(scale));
      };

      exports.invert = function (inNum) {
        return exports.scale(inNum, 1, 0, 0, 1);
      };
      /**
       * Convert a MIDi note number to a frequency value in equal temperament.
       * @param  {number} midi MIDI note value
       * @return {number}      Frequence value
       * @example
       * Nexus.mtof(60)  // returns the frequency number of Middle C
       */


      exports.mtof = function (midi) {
        return Math.pow(2, (midi - 69) / 12) * 440;
      };
      /**
       * Interpolate between two numbers
       * @param  {number} loc Interpolation index (0-1)
       * @param  {number} min Lower value
       * @param  {number} max Upper value
       * @return {number}     Interpolated value
       * @example
       * Nexus.interp(0.5,2,4)   // returns 3
       * Nexus.interp(0.1,0,10)     // returns 1
       */


      exports.interp = function (loc, min, max) {
        return loc * (max - min) + min;
      };
      /**
       * Return a random choice from a list of arguments
       * @return {various} One random argument
       * @example
       * Nexus.pick(1,2,3,4)   // returns 1, 2, 3, or 4
       * Nexus.pick(function1,function2)   // returns either function1 or function2
       */


      exports.pick = function () {
        return arguments[~~(Math.random() * arguments.length)];
      };
      /**
       * Returns an octave multiplier for frequency values
       * @param  {number} num Relative octave number (e.g. -1 for one octave down, 1 for one octave up)
       * @return {number}     Octave multiplier
       * @example
       * Nexus.octave(-1)  // returns 0.5
       * Nexus.octave(0)   // returns 1
       * Nexus.octave(1)   // returns 2
       * Nexus.octave(2)   // returns 4
       */


      exports.octave = function (num) {
        return Math.pow(2, num);
      };
      /**
       * Random integer generator. If no second argument is given, will return random integer from 0 to bound1.
       * @param  {number} bound1 Minimum random value
       * @param  {number} bound2 Maximum random value
       * @return {number}        Random integer between lower and upper boundary
       * @example
       * Nexus.ri(10)    // returns random int from 0 to 10
       * Nexus.ri(20,2000) // returns random int from 20 to 2000
       */


      exports.ri = function (bound1, bound2) {
        if (!bound2) {
          bound2 = bound1;
          bound1 = 0;
        }

        var low = Math.min(bound1, bound2);
        var high = Math.max(bound1, bound2);
        return Math.floor(Math.random() * (high - low) + low);
      };
      /**
       * Random float number generator. If no second argument is given, will return random float from 0 to bound1.
       * @param  {number} bound1 Minimum random value
       * @param  {number} bound2 Maximum random value
       * @return {number}        Random float between lower and upper boundary
       * @example
       * Nexus.rf(1)    // returns random float from 0 to 1
       * Nexus.rf(1,2) // returns random float from 1 to 2
       */


      exports.rf = function (bound1, bound2) {
        if (!bound2) {
          bound2 = bound1;
          bound1 = 0;
        }

        var low = Math.min(bound1, bound2);
        var high = Math.max(bound1, bound2);
        return Math.random() * (high - low) + low;
      };

      exports.cycle = function (input, min, max) {
        input++;

        if (input >= max) {
          input = min;
        }

        return input;
      };
      /**
       * Average an array of numbers
       * @param  {Array} data Array of numbers to average
       * @return {number}      Average of the input data
       * @example
       * Nexus.average([0,2,4,6,8,10])   // returns 5
       */


      exports.average = function (data) {
        var total = 0;

        for (var i = 0; i < data.length; i++) {
          total += data[i];
        }

        return total / data.length;
      };
      /**
       * Get the distance from one (x,y) point to another (x,y) point
       * @param  {number} x1 x of first point
       * @param  {number} y1 y of first point
       * @param  {number} x2 x of second point
       * @param  {number} y2 y of second poiny
       * @return {number}    Distance
       * @example
       * Nexus.distance(0,0,3,4)   // returns 5
       */


      exports.distance = function (x1, y1, x2, y2) {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.sqrt(a * a + b * b);
      };

      exports.gainToDB = function (gain) {
        return 20 * Math.log10(gain);
      };
      /**
       * Flip a coin, returning either 0 or 1 according to a probability
       * @param  {number} [odds=0.5] Likelihood of returning 1
       * @return {number}            1 or 0
       * @example
       * Nexus.coin(0.1)   // returns 1 (10% of the time) or 0 (90% of the time)
       */


      exports.coin = function () {
        var odds = arguments[0] === undefined ? 0.5 : arguments[0];

        if (exports.rf(0, 1) < odds) {
          return 1;
        } else {
          return 0;
        }
      };
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var dom = __webpack_require__(7);

      var util = __webpack_require__(8);

      var touch = __webpack_require__(9);

      var EventEmitter = __webpack_require__(10);

      var colors = __webpack_require__(1).colors;
      /**
      Interface
      */


      var Interface = function (_EventEmitter) {
        function Interface(args, options, defaults) {
          _classCallCheck(this, Interface);

          _get(Object.getPrototypeOf(Interface.prototype), "constructor", this).call(this);

          this.type = this.constructor.name;
          this.settings = this.parseSettings(args, options, defaults);
          this.mouse = {};
          this.wait = false;
          this.colors = {};
          var defaultColors = colors(); // jshint ignore:line

          this.colors.accent = defaultColors.accent;
          this.colors.fill = defaultColors.fill;
          this.colors.light = defaultColors.light;
          this.colors.dark = defaultColors.dark;
          this.colors.mediumLight = defaultColors.mediumLight;
          this.colors.mediumDark = defaultColors.mediumDark;
        }

        _inherits(Interface, _EventEmitter);

        _createClass(Interface, {
          parseSettings: {
            value: function parseSettings(args, options, defaults) {
              options.unshift("target");
              defaults.defaultSize = defaults.size.splice(0, 2);
              defaults.size = false;
              var settings = {
                target: document.body,
                colors: {},
                // should inherit from a colors module,
                snapWithParent: true,
                event: function event() {},
                component: false
              };

              for (var key in defaults) {
                settings[key] = defaults[key];
              }

              for (var i = 0; i < args.length; i++) {
                // grabs the next argument
                var setting = args[i]; // if it's an object, it must be the settings object

                if (util.isObject(setting)) {
                  for (var key in setting) {
                    settings[key] = setting[key];
                  } // if it's a function, it must be the event setting

                } else if (typeof setting === "function") {
                  settings.event = setting; // otherwise, consider it one of the widget's custom options
                } else if (options.length >= 1) {
                  // grab the first option -- i.e. 'target'
                  var key = options.splice(0, 1)[0];
                  settings[key] = setting;
                }
              }
              /*  handle common settings  */
              // target


              this.parent = dom.parseElement(settings.target); // nexus-ui attribute

              if (this.parent && this.parent instanceof HTMLElement && !settings.component) {
                if (!this.parent.hasAttribute("nexus-ui")) {
                  this.parent.setAttribute("nexus-ui", "");
                }
              } // size


              if (settings.size && Array.isArray(settings.size) && settings.snapWithParent) {
                this.width = settings.size[0];
                this.height = settings.size[1];
                this.parent.style.width = this.width + "px";
                this.parent.style.height = this.height + "px";
              } else if (settings.snapWithParent && !settings.component) {
                this.width = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("width").replace("px", ""));
                this.height = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("height").replace("px", ""));

                if (this.width == 5000) {
                  this.width = settings.defaultSize[0];
                  this.parent.style.width = this.parent.width = this.width + "px";
                }

                if (this.height == 5000) {
                  this.height = settings.defaultSize[1];
                  this.parent.style.height = this.parent.height = this.height + "px";
                }
              } else {
                settings.size = settings.defaultSize;
                this.width = settings.size[0];
                this.height = settings.size[1];
              } // event


              if (settings.event) {
                this.event = this.on("change", settings.event);
              } else {
                this.event = false;
              }

              return settings;
            }
          },
          init: {
            value: function init() {
              this.buildFrame();
              this.buildInterface();
              this.sizeInterface();
              this.attachListeners();
              this.colorInterface();
              this.finalTouches();
            }
          },
          buildFrame: {
            value: function buildFrame() {
              this.element = svg.create("svg");
              this.element.setAttribute("width", this.width);
              this.element.setAttribute("height", this.height);
              this.parent.appendChild(this.element);
            }
          },
          buildInterface: {
            value: function buildInterface() {}
          },
          sizeInterface: {
            value: function sizeInterface() {}
          },
          colorInterface: {
            value: function colorInterface() {}
          },
          attachListeners: {
            value: function attachListeners() {
              var _this = this;

              this.interactionTarget = this.interactionTarget || this.element; // Setup interaction

              if (touch.exists) {
                this.interactionTarget.addEventListener("touchstart", function (evt) {
                  return _this.preTouch(evt);
                });
                this.interactionTarget.addEventListener("touchmove", function (evt) {
                  return _this.preTouchMove(evt);
                });
                this.interactionTarget.addEventListener("touchend", function (evt) {
                  return _this.preTouchRelease(evt);
                });
              }

              this.boundPreMove = function (evt) {
                return _this.preMove(evt);
              };

              this.boundPreRelease = function (evt) {
                return _this.preRelease(evt);
              };

              this.interactionTarget.addEventListener("mousedown", function (evt) {
                return _this.preClick(evt);
              });
            }
          },
          finalTouches: {
            value: function finalTouches() {
              this.element.style.cursor = "pointer";
            }
          },
          preClick: {
            value: function preClick(e) {
              // 10000 getComputedStyle calls takes 100 ms.
              // .:. one takes about .01ms
              if (this.element instanceof HTMLElement) {
                this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
              } // 10000 getComputedStyle calls takes 40 ms.
              // .:. one takes about .004ms


              this.offset = dom.findPosition(this.element);
              this.mouse = dom.locateMouse(e, this.offset);
              this.clicked = true;
              this.click();
              this.moveEvent = document.addEventListener("mousemove", this.boundPreMove);
              this.releaseEvent = document.addEventListener("mouseup", this.boundPreRelease);
              this.emit("click");
              e.preventDefault();
              e.stopPropagation();
            }
          },
          preMove: {
            value: function preMove(e) {
              var _this = this;

              if (!this.wait) {
                this.mouse = dom.locateMouse(e, this.offset);
                this.move();
                this.wait = true;
                setTimeout(function () {
                  _this.wait = false;
                }, 25);
              }

              e.preventDefault();
              e.stopPropagation();
            }
          },
          preRelease: {
            value: function preRelease(e) {
              this.mouse = dom.locateMouse(e, this.offset);
              this.clicked = false;
              this.release();
              this.emit("release");
              document.removeEventListener("mousemove", this.boundPreMove);
              document.removeEventListener("mouseup", this.boundPreRelease);
              e.preventDefault();
              e.stopPropagation();
            }
          },
          click: {
            value: function click() {}
          },
          move: {
            value: function move() {}
          },
          release: {
            value: function release() {}
          },
          preTouch: {
            /* touch */
            value: function preTouch(e) {
              if (this.element instanceof HTMLElement) {
                this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
              }

              this.offset = dom.findPosition(this.element);
              this.mouse = dom.locateTouch(e, this.offset);
              this.clicked = true;
              this.touch(e);
              this.emit("click");
              e.preventDefault();
              e.stopPropagation();
            }
          },
          preTouchMove: {
            value: function preTouchMove(e) {
              if (this.clicked) {
                this.mouse = dom.locateTouch(e, this.offset);
                this.touchMove();
                e.preventDefault();
                e.stopPropagation();
              }
            }
          },
          preTouchRelease: {
            value: function preTouchRelease(e) {
              this.mouse = dom.locateTouch(e, this.offset);
              this.clicked = false;
              this.touchRelease();
              this.emit("release");
              e.preventDefault();
              e.stopPropagation();
            }
          },
          touch: {
            value: function touch() {
              this.click();
            }
          },
          touchMove: {
            value: function touchMove() {
              this.move();
            }
          },
          touchRelease: {
            value: function touchRelease() {
              this.release();
            }
          },
          resize: {
            /**
            * Resize the interface
            * @param width {number} New width in pixels
            * @param height {number} New height in pixels
            *
            * @example
            * button.resize(100,100);
            */
            value: function resize(width, height) {
              this.width = width;
              this.height = height;
              this.parent.style.width = this.width + "px";
              this.parent.style.height = this.height + "px";
              this.element.setAttribute("width", this.width);
              this.element.setAttribute("height", this.height);
              this.sizeInterface();
            }
          },
          empty: {
            value: function empty() {
              while (this.element.lastChild) {
                this.element.removeChild(this.element.lastChild);
              }
            }
          },
          destroy: {
            /**
            * Remove the interface from the page and cancel its event listener(s).
            *
            * @example
            * button.destroy();
            */
            value: function destroy() {
              this.empty();
              this.parent.removeChild(this.element);
              this.removeAllListeners();

              if (this.instrument) {
                delete this.instrument[this.id];
              }

              this.customDestroy();
            }
          },
          customDestroy: {
            value: function customDestroy() {}
          },
          colorize: {
            value: function colorize(type, color) {
              this.colors[type] = color;
              this.colorInterface();
            }
          }
        });

        return Interface;
      }(EventEmitter);

      module.exports = Interface;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      "use strict";

      exports.findPosition = function (el) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top + window.scrollY;
        var left = viewportOffset.left + window.scrollX;
        return {
          top: top,
          left: left
        };
      };

      exports.parseElement = function (parent) {
        if (typeof parent === "string") {
          parent = document.getElementById(parent.replace("#", ""));
        }

        if (parent instanceof HTMLElement || parent instanceof SVGElement) {
          return parent;
        } else {
          return "No valid parent argument";
        }
      };

      exports.locateMouse = function (e, offset) {
        return {
          x: e.pageX - offset.left,
          y: e.pageY - offset.top
        };
      };

      exports.locateTouch = function (e, offset) {
        return {
          x: e.targetTouches.length ? e.targetTouches[0].pageX - offset.left : false,
          y: e.targetTouches.length ? e.targetTouches[0].pageY - offset.top : false
        };
      };

      exports.SmartCanvas = function (parent) {
        var _this = this;

        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        parent.appendChild(this.element);

        this.resize = function (w, h) {
          _this.element.width = w * 2;
          _this.element.height = h * 2;
          _this.element.style.width = w + "px";
          _this.element.style.height = h + "px";
        };
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports) {
      "use strict";

      exports.isObject = function (obj) {
        if (typeof obj === "object" && !Array.isArray(obj) && obj !== null && obj instanceof SVGElement === false && obj instanceof HTMLElement === false) {
          return true;
        } else {
          return false;
        }
      };
      /***/

    },
    /* 9 */

    /***/
    function (module, exports) {
      "use strict";

      exports.exists = "ontouchstart" in document.documentElement;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }

      module.exports = EventEmitter; // Backwards-compat with node 0.10.x

      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.

      EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.

      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;
        if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

        if (type === 'error') {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];

            if (er instanceof Error) {
              throw er; // Unhandled 'error' event
            } else {
              // At least give some kind of context to the user
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];
        if (isUndefined(handler)) return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            // fast cases
            case 1:
              handler.call(this);
              break;

            case 2:
              handler.call(this, arguments[1]);
              break;

            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            // slower

            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;

          for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".

        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
          this._events[type].push(listener);else // Adding the second element, need to change to array.
          this._events[type] = [this._events[type], listener]; // Check for listener leak

        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

            if (typeof console.trace === 'function') {
              // not supported in IE 10
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        var fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);
        return this;
      }; // emits a 'removeListener' event iff the listener was removed


      EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError('listener must be a function');
        if (!this._events || !this._events[type]) return this;
        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener) this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
              position = i;
              break;
            }
          }

          if (position < 0) return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener) this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;
        if (!this._events) return this; // not listening for removeListener, no need to emit

        if (!this._events.removeListener) {
          if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
          return this;
        } // emit removeListener for all listeners on all events


        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }

          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
        }

        delete this._events[type];
        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          var evlistener = this._events[type];
          if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
        }

        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }
      /***/

    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = __webpack_require__(5);
      /**
        Creates a steppable value with minimum, maximum, and step size. This is used in many interfaces to constrict their values to certain ranges.
        @param {number} [min=0] minimum
        @param {number} [max=1] maximum
        @param {number} [step=0]
        @param {number} [value=0] initial value
        @returns {Object} Step
      */


      var Step = function () {
        function Step() {
          var min = arguments[0] === undefined ? 0 : arguments[0];
          var max = arguments[1] === undefined ? 1 : arguments[1];
          var step = arguments[2] === undefined ? 0 : arguments[2];
          var value = arguments[3] === undefined ? 0 : arguments[3];

          _classCallCheck(this, Step); //Object.assign(this,{min,max,step});
          //Cannot use Object.assign because not supported in Safari.
          //I would expect for Babel to take care of this but it is not.


          this.min = min;
          this.max = max;
          this.step = step;
          this.value = value;
          this.changed = false;
          this.oldValue = false;
          this.update(this.value);
        }

        _createClass(Step, {
          update: {
            /**
              Update with a new value. The value will be auto-adjusted to fit the min/max/step.
              @param {number} value
            */
            value: function update(value) {
              if (this.step) {
                // this.value = math.clip(Math.round(value / (this.step)) * this.step, this.min,this.max);
                this.value = math.clip(Math.round((value - this.min) / this.step) * this.step + this.min, this.min, this.max);
              } else {
                this.value = math.clip(value, this.min, this.max);
              }

              if (this.oldValue !== this.value) {
                this.oldValue = this.value;
                this.changed = true;
              } else {
                this.changed = false;
              }

              return this.value;
            }
          },
          updateNormal: {
            /**
              Update with a normalized value 0-1.
              @param {number} value
            */
            value: function updateNormal(value) {
              this.value = math.scale(value, 0, 1, this.min, this.max);
              return this.update(this.value);
            }
          },
          normalized: {
            /**
              Get a normalized version of this.value . Not settable.
            */
            get: function () {
              return math.normalize(this.value, this.min, this.max);
            }
          }
        });

        return Step;
      }();

      module.exports = Step;
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      "use strict";

      var math = _interopRequire(__webpack_require__(5));

      var ToggleModel = _interopRequire(__webpack_require__(13));
      /*
      how to use :
      
      dial.interaction = new Handle('radial','relative',this.width,this.height);
      // dial.interaction.mode = 'relative'
      // dial.interaction.direction = 'radial'
      
      on click:
      dial.interaction.anchor = this.mouse;
      
      on move:
      dial.interaction.update(this.mouse);
      
      console.log( dial.interaction.value ); should be a normalized value.
      
      */

      /*
        absolute/relative are property: mode
        radial/vertical/horizontal/2d are property: direction
      
        plan :
      
        if relative --
        NO on click, get value offset between current value and click value.
        NO on move, use click value - offset
        INSTEAD
        use delta -- bc vertical motion on dial is impossible otherwise
        also allow to set sensitivity
      
      */


      var Handle = exports.Handle = function () {
        function Handle() {
          var mode = arguments[0] === undefined ? "absolute" : arguments[0];
          var direction = arguments[1] === undefined ? "vertical" : arguments[1];
          var xbound = arguments[2] === undefined ? [0, 100] : arguments[2];
          var ybound = arguments[3] === undefined ? [0, 100] : arguments[3];

          _classCallCheck(this, Handle);

          this.mode = mode;
          this.direction = direction;
          this.previous = 0;
          this.value = 0;
          this.sensitivity = 1;
          this.resize(xbound, ybound);
        }

        _createClass(Handle, {
          resize: {
            value: function resize(xbound, ybound) {
              this.boundary = {
                min: {
                  x: xbound[0],
                  y: ybound[0]
                },
                max: {
                  x: xbound[1],
                  y: ybound[1]
                },
                center: {
                  x: (xbound[1] - xbound[0]) / 2 + xbound[0],
                  y: (ybound[1] - ybound[0]) / 2 + ybound[0]
                }
              };
            }
          },
          anchor: {
            set: function (mouse) {
              this._anchor = this.convertPositionToValue(mouse);
            },
            get: function () {
              return this._anchor;
            }
          },
          update: {
            value: function update(mouse) {
              if (this.mode === "relative") {
                var increment = this.convertPositionToValue(mouse) - this.anchor;

                if (Math.abs(increment) > 0.5) {
                  increment = 0;
                }

                this.anchor = mouse;
                this.value = this.value + increment * this.sensitivity;
              } else {
                this.value = this.convertPositionToValue(mouse);
              }

              this.value = math.clip(this.value, 0, 1);
            }
          },
          convertPositionToValue: {
            value: function convertPositionToValue(current) {
              switch (this.direction) {
                case "radial":
                  var position = math.toPolar(current.x - this.boundary.center.x, current.y - this.boundary.center.y);
                  position = position.angle / (Math.PI * 2);
                  position = (position - 0.25 + 1) % 1;
                  return position;

                case "vertical":
                  return math.scale(current.y, this.boundary.min.y, this.boundary.max.y, 0, 1);

                case "horizontal":
                  return math.scale(current.x, this.boundary.min.x, this.boundary.max.x, 0, 1);
              }
            }
          }
        });

        return Handle;
      }();

      var Button = exports.Button = function () {
        function Button() {
          var mode = arguments[0] === undefined ? "button" : arguments[0];

          _classCallCheck(this, Button);

          this.mode = mode;
          this.state = new ToggleModel();
          this.paintbrush = false;
        }

        _createClass(Button, {
          click: {
            value: function click() {
              switch (this.mode) {
                case "impulse":
                  this.state.on();

                  if (this.timeout) {
                    clearTimeout(this.timeout);
                  }

                  this.timeout = setTimeout(this.state.off.bind(this), 30);
                  this.emit("change", this.state);
                  break;

                case "button":
                  this.turnOn();
                  this.emit("change", this.state);
                  break;

                case "aftertouch":
                  this.position = {
                    x: math.clip(this.mouse.x / this.width, 0, 1),
                    y: math.clip(1 - this.mouse.y / this.height, 0, 1)
                  };
                  this.turnOn();
                  this.emit("change", {
                    state: this.state,
                    x: this.position.x,
                    y: this.position.y
                  });
                  break;

                case "toggle":
                  this.flip();
                  this.emit("change", this.state);
                  break;
              }
            }
          },
          move: {
            value: function move() {
              if (this.mode === "aftertouch") {
                this.position = {
                  x: math.clip(this.mouse.x / this.width, 0, 1),
                  y: math.clip(1 - this.mouse.y / this.height, 0, 1)
                };
                this.emit("change", {
                  state: this.state,
                  x: this.position.x,
                  y: this.position.y
                });
                this.render();
              }
            }
          },
          release: {
            value: function release() {
              switch (this.mode) {
                case "button":
                  this.turnOff();
                  this.emit("change", this.state);
                  break;

                case "aftertouch":
                  this.turnOff();
                  this.position = {
                    x: this.mouse.x / this.width,
                    y: 1 - this.mouse.y / this.height
                  };
                  this.emit("change", {
                    state: this.state,
                    x: this.position.x,
                    y: this.position.y
                  });
                  break;
              }
            }
          }
        });

        return Button;
      }();
      /***/

    },
    /* 13 */

    /***/
    function (module, exports) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var Toggle = function () {
        function Toggle(state) {
          _classCallCheck(this, Toggle);

          this.state = state || false;
        }

        _createClass(Toggle, {
          flip: {
            value: function flip(state) {
              if (state || state === false) {
                this.state = state;
              } else {
                this.state = !this.state;
              }
            }
          },
          on: {
            value: function on() {
              this.state = true;
            }
          },
          off: {
            value: function off() {
              this.state = false;
            }
          }
        });

        return Toggle;
      }();

      module.exports = Toggle;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var Interaction = _interopRequireWildcard(__webpack_require__(12));
      /**
      * Slider
      *
      * @description Horizontal or vertical slider with settable interaction modes.
      *
      * @demo <span nexus-ui="slider" step=0.2></span>
      *
      * @example
      * var slider = new Nexus.Slider('#target')
      *
      * @example
      * var slider = new Nexus.Slider('#target',{
      *     'size': [120,20],
      *     'mode': 'relative',  // 'relative' or 'absolute'
      *     'min': 0,
      *     'max': 1,
      *     'step': 0,
      *     'value': 0
      * })
      *
      * @output
      * change
      * Fires when the interface's value changes. <br>
      * Event data: <i>number</i> The number value of the interface.
      *
      * @outputexample
      * slider.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Slider = function (_Interface) {
        function Slider() {
          _classCallCheck(this, Slider);

          var options = ["min", "max", "value"];
          var defaults = {
            size: [120, 20],
            mode: "relative",
            // 'relative' or 'absolute'
            min: 0,
            max: 1,
            step: 0,
            value: 0
          };

          _get(Object.getPrototypeOf(Slider.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.orientation = "vertical"; // This will change automatically to 'horizontal'if the interface is wider than it is tall.

          this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
          this.position = new Interaction.Handle(this.settings.mode, this.orientation, [0, this.width], [this.height, 0]);
          this.position.value = this._value.normalized;
          this.init();
          this.position.direction = this.orientation;
          this.emit("change", this.value);
        }

        _inherits(Slider, _Interface);

        _createClass(Slider, {
          buildInterface: {
            value: function buildInterface() {
              this.bar = svg.create("rect");
              this.fillbar = svg.create("rect");
              this.knob = svg.create("circle");
              this.element.appendChild(this.bar);
              this.element.appendChild(this.fillbar);
              this.element.appendChild(this.knob);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              if (this.width < this.height) {
                this.orientation = "vertical";
              } else {
                this.orientation = "horizontal";
              }

              if (this.position) {
                this.position.resize([0, this.width], [this.height, 0]);
              }

              var x = undefined,
                  y = undefined,
                  w = undefined,
                  h = undefined,
                  barOffset = undefined,
                  cornerRadius = undefined;
              this.knobData = {
                level: 0,
                r: 0
              };

              if (this.orientation === "vertical") {
                this.thickness = this.width / 2;
                x = this.width / 2;
                y = 0;
                w = this.thickness;
                h = this.height;
                this.knobData.r = this.thickness * 0.8;
                this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
                barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
                cornerRadius = w / 2;
              } else {
                this.thickness = this.height / 2;
                x = 0;
                y = this.height / 2;
                w = this.width;
                h = this.thickness;
                this.knobData.r = this.thickness * 0.8;
                this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
                barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
                cornerRadius = h / 2;
              }

              this.bar.setAttribute("x", x);
              this.bar.setAttribute("y", y);
              this.bar.setAttribute("transform", barOffset);
              this.bar.setAttribute("rx", cornerRadius); // corner radius

              this.bar.setAttribute("ry", cornerRadius);
              this.bar.setAttribute("width", w);
              this.bar.setAttribute("height", h);

              if (this.orientation === "vertical") {
                this.fillbar.setAttribute("x", x);
                this.fillbar.setAttribute("y", this.knobData.level);
                this.fillbar.setAttribute("width", w);
                this.fillbar.setAttribute("height", h - this.knobData.level);
              } else {
                this.fillbar.setAttribute("x", 0);
                this.fillbar.setAttribute("y", y);
                this.fillbar.setAttribute("width", this.knobData.level);
                this.fillbar.setAttribute("height", h);
              }

              this.fillbar.setAttribute("transform", barOffset);
              this.fillbar.setAttribute("rx", cornerRadius);
              this.fillbar.setAttribute("ry", cornerRadius);

              if (this.orientation === "vertical") {
                this.knob.setAttribute("cx", x);
                this.knob.setAttribute("cy", this.knobData.level);
              } else {
                this.knob.setAttribute("cx", this.knobData.level);
                this.knob.setAttribute("cy", y);
              }

              this.knob.setAttribute("r", this.knobData.r);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.bar.setAttribute("fill", this.colors.fill);
              this.fillbar.setAttribute("fill", this.colors.accent);
              this.knob.setAttribute("fill", this.colors.accent);
            }
          },
          render: {
            value: function render() {
              if (!this.clicked) {
                this.knobData.r = this.thickness * 0.75;
              }

              this.knob.setAttribute("r", this.knobData.r);

              if (this.orientation === "vertical") {
                this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
                this.knob.setAttribute("cy", this.height - this.knobData.level);
                this.fillbar.setAttribute("y", this.height - this.knobData.level);
                this.fillbar.setAttribute("height", this.knobData.level);
              } else {
                this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
                this.knob.setAttribute("cx", this.knobData.level);
                this.fillbar.setAttribute("x", 0);
                this.fillbar.setAttribute("width", this.knobData.level);
              }
            }
          },
          click: {
            value: function click() {
              this.knobData.r = this.thickness * 0.9;
              this.position.anchor = this.mouse;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.position.update(this.mouse);

                this._value.updateNormal(this.position.value);

                this.emit("change", this._value.value);
                this.render();
              }
            }
          },
          release: {
            value: function release() {
              this.render();
            }
          },
          normalized: {
            get: function () {
              return this._value.normalized;
            }
          },
          value: {
            /**
            The slider's current value. If set manually, will update the interface and trigger the output event.
            @type {number}
            @example slider.value = 10;
            */
            get: function () {
              return this._value.value;
            },
            set: function (v) {
              this._value.update(v);

              this.position.value = this._value.normalized;
              this.emit("change", this._value.value);
              this.render();
            }
          },
          min: {
            /**
            Lower limit of the sliders's output range
            @type {number}
            @example slider.min = 1000;
            */
            get: function () {
              return this._value.min;
            },
            set: function (v) {
              this._value.min = v;
            }
          },
          max: {
            /**
            Upper limit of the slider's output range
            @type {number}
            @example slider.max = 1000;
            */
            get: function () {
              return this._value.max;
            },
            set: function (v) {
              this._value.max = v;
            }
          },
          step: {
            /**
            The increment that the slider's value changes by.
            @type {number}
            @example slider.step = 5;
            */
            get: function () {
              return this._value.step;
            },
            set: function (v) {
              this._value.step = v;
            }
          },
          mode: {
            /**
            Absolute mode (slider's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
            @type {string}
            @example slider.mode = "relative";
            */
            get: function () {
              return this.position.mode;
            },
            set: function (v) {
              this.position.mode = v;
            }
          }
        });

        return Slider;
      }(Interface);

      module.exports = Slider;
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var ToggleModel = __webpack_require__(13);

      var Interface = __webpack_require__(6);
      /**
      * Toggle
      *
      * @description Binary switch
      *
      * @demo <span nexus-ui="toggle"></span>
      *
      * @example
      * var toggle = new Nexus.Toggle('#target')
      *
      * @example
      * var toggle = new Nexus.Toggle('#target',{
      *     'size': [40,20],
      *     'state': false
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * Parameter: The boolean state of the interface.
      *
      * @outputexample
      * toggle.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Toggle = function (_Interface) {
        function Toggle() {
          _classCallCheck(this, Toggle);

          var options = ["value"];
          var defaults = {
            size: [40, 20],
            target: false,
            state: false
          };

          _get(Object.getPrototypeOf(Toggle.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._state = new ToggleModel(this.settings.state);
          this.init();
        }

        _inherits(Toggle, _Interface);

        _createClass(Toggle, {
          buildInterface: {
            value: function buildInterface() {
              this.bar = svg.create("rect");
              this.knob = svg.create("circle");
              this.element.appendChild(this.bar);
              this.element.appendChild(this.knob);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              if (this.height < this.width / 2) {
                this.knobSize = this.height / 2;
              } else {
                this.knobSize = this.width / 4;
              }

              this.bar.setAttribute("x", this.width / 2 - this.knobSize * 1.5);
              this.bar.setAttribute("y", this.height / 2 - this.knobSize / 2);
              this.bar.setAttribute("rx", this.knobSize / 2);
              this.bar.setAttribute("ry", this.knobSize / 2);
              this.bar.setAttribute("width", this.knobSize * 3);
              this.bar.setAttribute("height", this.knobSize);
              this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
              this.knob.setAttribute("cy", this.height / 2);
              this.knob.setAttribute("r", this.knobSize);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.knob.setAttribute("fill", this.colors.accent);
              this.render();
            }
          },
          render: {
            value: function render() {
              if (!this.state) {
                this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
                this.bar.setAttribute("fill", this.colors.fill);
              } else {
                this.knob.setAttribute("cx", this.width / 2 + this.knobSize);
                this.bar.setAttribute("fill", this.colors.accent);
              }
            }
          },
          click: {
            value: function click() {
              this.flip();
              this.render();
              this.emit("change", this.state);
            }
          },
          state: {
            /**
            Whether the toggle is currently on or off. Setting this property will update the toggle interface and trigger the output event.
            @type {boolean}
            @example toggle.state = false;
            */
            get: function () {
              return this._state.state;
            },
            set: function (value) {
              this._state.flip(value);

              this.emit("change", this.state);
              this.render();
            }
          },
          flip: {
            /**
            * Switch the toggle state to its opposite state
            * @example
            * toggle.flip();
            */
            value: function flip() {
              this._state.flip();

              this.render();
            }
          }
        });

        return Toggle;
      }(Interface);

      module.exports = Toggle;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var ButtonTemplate = __webpack_require__(17);
      /**
      * Button
      *
      * @description Circular button with optional aftertouch.
      *
      * @demo <span nexus-ui="button"></span>
      *
      * @example
      * var button = new Nexus.Button('#target')
      *
      * @example
      * var button = new Nexus.Button('#target',{
      *   'size': [80,80],
      *   'mode': 'aftertouch',
      *   'state': false
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * In <b>button mode</b>, <b>toggle mode</b>, and <b>impulse mode</b>, the output data is a boolean describing the state of the button.<br>
      * In <b>aftertouch mode</b>, the output data is an object containing x (0-1) and y (0-1) positions of aftertouch.
      *
      * @outputexample
      * button.on('change',function(v) {
      *   // v is the value of the button
      *   console.log(v);
      * })
      *
      */


      var Button = function (_ButtonTemplate) {
        function Button() {
          _classCallCheck(this, Button);

          var options = ["mode"];
          var defaults = {
            size: [80, 80],
            mode: "aftertouch",
            // button, aftertouch, impulse, toggle
            state: false
          };

          _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, arguments, options, defaults);
          /**
          * Interaction mode: supports "button", "aftertouch", "impulse", or "toggle"
          * @type {string}
          * @example button.mode = 'toggle';
          */


          this.mode = this.settings.mode;
          this.init();
          this.render();
        }

        _inherits(Button, _ButtonTemplate);

        _createClass(Button, {
          buildInterface: {
            value: function buildInterface() {
              this.pad = svg.create("circle");
              this.element.appendChild(this.pad);
              this.interactionTarget = this.pad; // only used if in 'aftertouch' mode

              this.defs = svg.create("defs");
              this.element.appendChild(this.defs);
              this.gradient = svg.radialGradient(this.defs, 2);
              this.gradient.stops[0].setAttribute("offset", "30%");
              this.gradient.stops[1].setAttribute("offset", "100%");
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.pad.setAttribute("cx", this.width / 2);
              this.pad.setAttribute("cy", this.height / 2);
              this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - this.width / 40);
              this.pad.setAttribute("stroke-width", this.width / 20);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.gradient.stops[0].setAttribute("stop-color", this.colors.accent);
              this.gradient.stops[1].setAttribute("stop-color", this.colors.fill);
              this.render();
            }
          },
          render: {
            /*
            * Update the visual interface using its current state
            *
            * @example
            * button.render();
            */
            value: function render() {
              if (!this.state) {
                this.pad.setAttribute("fill", this.colors.fill);
                this.pad.setAttribute("stroke", this.colors.mediumLight);
              } else {
                if (this.mode === "aftertouch") {
                  this.pad.setAttribute("stroke", "url(#" + this.gradient.id + ")");
                  this.gradient.element.setAttribute("cx", this.position.x * 100 + "%");
                  this.gradient.element.setAttribute("cy", (1 - this.position.y) * 100 + "%");
                } else {
                  this.pad.setAttribute("stroke", this.colors.accent);
                }

                this.pad.setAttribute("fill", this.colors.accent);
              }
            }
          }
        });

        return Button;
      }(ButtonTemplate);

      module.exports = Button;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var math = __webpack_require__(5);

      var ToggleModel = __webpack_require__(13);

      var Interface = __webpack_require__(6);
      /**
      Button Template
      */


      var ButtonTemplate = function (_Interface) {
        function ButtonTemplate(args, options, defaults) {
          _classCallCheck(this, ButtonTemplate);

          _get(Object.getPrototypeOf(ButtonTemplate.prototype), "constructor", this).call(this, args, options, defaults);

          this.mode = this.settings.mode || "button";
          this.position = {
            x: 0,
            y: 0
          };
          this._state = new ToggleModel(this.settings.state);
        }

        _inherits(ButtonTemplate, _Interface);

        _createClass(ButtonTemplate, {
          buildInterface: {
            value: function buildInterface() {
              this.pad = svg.create("circle");
              this.pad.setAttribute("fill", "#d18");
              this.pad.setAttribute("stroke", "#d18");
              this.pad.setAttribute("stroke-width", 4);
              this.element.appendChild(this.pad);
              this.interactionTarget = this.pad;
              this.sizeInterface();
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.pad.setAttribute("cx", this.width / 2);
              this.pad.setAttribute("cy", this.height / 2);
              this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - 2);
            }
          },
          render: {
            value: function render() {
              if (!this.state) {
                this.pad.setAttribute("fill", this.colors.fill);
                this.pad.setAttribute("stroke", this.colors.mediumLight);
              } else {
                this.pad.setAttribute("fill", this.colors.accent);
                this.pad.setAttribute("stroke", this.colors.accent);
              }
            }
          },
          down: {
            value: function down(paintbrush) {
              switch (this.mode) {
                case "impulse":
                  this.turnOn();

                  if (this.timeout) {
                    clearTimeout(this.timeout);
                  }

                  this.timeout = setTimeout(this.turnOff.bind(this), 30); //    this.emit('change',this.state);

                  break;

                case "button":
                  this.turnOn(); //    this.emit('change',this.state);

                  break;

                case "aftertouch":
                  this.position = {
                    x: math.clip(this.mouse.x / this.width, 0, 1),
                    y: math.clip(1 - this.mouse.y / this.height, 0, 1)
                  };
                  this.turnOn(); //    this.emit('change',{
                  //      state: this.state,
                  //      x: this.position.x,
                  //      y: this.position.y,
                  //    });

                  break;

                case "toggle":
                  this.flip(paintbrush); //    this.emit('change',this.state);

                  break;
              }
            }
          },
          bend: {
            value: function bend(mouse) {
              if (this.mode === "aftertouch") {
                this.mouse = mouse || this.mouse;
                this.position = {
                  x: math.clip(this.mouse.x / this.width, 0, 1),
                  y: math.clip(1 - this.mouse.y / this.height, 0, 1)
                };
                this.emit("change", {
                  state: this.state,
                  x: this.position.x,
                  y: this.position.y
                });
                this.render();
              }
            }
          },
          up: {
            value: function up() {
              switch (this.mode) {
                case "button":
                  this.turnOff(); //  this.emit('change',this.state);

                  break;

                case "aftertouch":
                  this.turnOff();
                  this.position = {
                    x: math.clip(this.mouse.x / this.width, 0, 1),
                    y: math.clip(1 - this.mouse.y / this.height, 0, 1)
                  }; //  this.emit('change',{
                  //    state: this.state,
                  //    x: this.position.x,
                  //    y: this.position.y,
                  //  });

                  break;
              }
            }
          },
          click: {
            /* overwritable interaction handlers */
            value: function click() {
              this.down();
            }
          },
          move: {
            value: function move() {
              this.bend();
            }
          },
          release: {
            value: function release() {
              this.up();
            }
          },
          state: {
            /**
            Whether the button is on (pressed) or off (not pressed)
            @type {boolean}
            @example button.state = true;
            */
            get: function () {
              return this._state.state;
            },
            set: function (value) {
              this._state.flip(value);

              if (this.mode === "aftertouch") {
                this.emit("change", {
                  state: this.state,
                  x: this.position.x,
                  y: this.position.y
                });
              } else {
                this.emit("change", this.state);
              }

              this.render();
            }
          },
          flip: {
            /**
            Change the button to its alternate state (off=>on, on=>off), or flip it to a specified state.
            @param value {boolean} (Optional) State to flip to.
            @example button.flip();
            */
            value: function flip(value) {
              this._state.flip(value);

              if (this.mode === "aftertouch") {
                this.emit("change", {
                  state: this.state,
                  x: this.position.x,
                  y: this.position.y
                });
              } else {
                this.emit("change", this.state);
              }

              this.render();
            }
          },
          turnOn: {
            /**
            Turn the button's state to true.
            @example button.turnOn();
            */
            value: function turnOn(emitting) {
              this._state.on();

              if (emitting !== false) {
                if (this.mode === "aftertouch") {
                  this.emit("change", {
                    state: this.state,
                    x: this.position.x,
                    y: this.position.y
                  });
                } else {
                  this.emit("change", this.state);
                }
              }

              this.render();
            }
          },
          turnOff: {
            /**
            Turn the button's state to false.
            @example button.turnOff();
            */
            value: function turnOff(emitting) {
              this._state.off();

              if (emitting !== false) {
                if (this.mode === "aftertouch") {
                  this.emit("change", {
                    state: this.state,
                    x: this.position.x,
                    y: this.position.y
                  });
                } else {
                  this.emit("change", this.state);
                }
              }

              this.render();
            }
          }
        });

        return ButtonTemplate;
      }(Interface);

      module.exports = ButtonTemplate;
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var ButtonTemplate = __webpack_require__(17);
      /**
      * TextButton
      *
      * @description Text button
      *
      * @demo <span nexus-ui="textButton"></span>
      *
      * @example
      * var textbutton = new Nexus.TextButton('#target')
      *
      * @example
      * var textbutton = new Nexus.TextButton('#target',{
      *     'size': [150,50],
      *     'state': false,
      *     'text': 'Play',
      *     'alternateText': 'Stop'
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is a <i>string</i> of the text on the button at the moment it was clicked.
      *
      * @outputexample
      * textbutton.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var TextButton = function (_ButtonTemplate) {
        function TextButton() {
          _classCallCheck(this, TextButton);

          var options = ["value"];
          var defaults = {
            size: [150, 50],
            state: false,
            text: "Play"
          };

          _get(Object.getPrototypeOf(TextButton.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._text = this.settings.text;

          if (this.settings.alternate) {
            //TODO: Remove this conditional in a breaking-changes release
            this.settings.alternateText = this.settings.alternate;
            console.warn("'alternate' initiator is deprecated. Use 'alternateText' instead.");
          }

          this._alternateText = this.settings.alternateText;
          this.mode = this.settings.alternateText ? "toggle" : "button";
          this.init();
          this.render();
          this.state = this.settings.state;
        }

        _inherits(TextButton, _ButtonTemplate);

        _createClass(TextButton, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("div");
              this.parent.appendChild(this.element);
              this.textElement = document.createElement("div");
              this.textElement.innerHTML = this._text;
              this.element.appendChild(this.textElement);
            }
          },
          buildInterface: {
            value: function buildInterface() {}
          },
          colorInterface: {
            value: function colorInterface() {
              this.element.style.color = this.colors.dark;
              this.render();
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              var textsize = this.height / 3;
              var textsize2 = this.width / (this._text.length + 2);
              textsize = Math.min(textsize, textsize2);

              if (this.alternateText) {
                var textsize3 = this.width / (this.alternateText.length + 2);
                textsize = Math.min(textsize, textsize3);
              }

              var styles = "width: " + this.width + "px;";
              styles += "height: " + this.height + "px;";
              styles += "padding: " + (this.height - textsize) / 2 + "px 0px;";
              styles += "box-sizing: border-box;";
              styles += "text-align: center;";
              styles += "font-family: inherit;";
              styles += "font-weight: 700;";
              styles += "opacity: 1;";
              styles += "font-size:" + textsize + "px;";
              this.textElement.style.cssText = styles;
              this.render();
            }
          },
          render: {
            value: function render() {
              if (!this.state) {
                this.element.style.backgroundColor = this.colors.fill;
                this.textElement.style.color = this.colors.dark;
                this.textElement.innerHTML = this._text;
              } else {
                this.element.style.backgroundColor = this.colors.accent;
                this.textElement.style.color = this.colors.fill;

                if (this.alternateText) {
                  this.textElement.innerHTML = this._alternateText;
                } else {
                  this.textElement.innerHTML = this._text;
                }
              }
            }
          },
          alternateText: {
            /**
            The text to display when the button is in its "on" state. If set, this puts the button in "toggle" mode.
            @type {String}
            */
            get: function () {
              return this._alternateText;
            },
            set: function (text) {
              if (text) {
                this.mode = "toggle";
              } else {
                this.mode = "button";
              }

              this._alternateText = text;
              this.render();
            }
          },
          text: {
            /**
            The text to display. (If .alternateText exists, then this .text will only be displayed when the button is in its "off" state.)
            @type {String}
            */
            get: function () {
              return this._text;
            },
            set: function (text) {
              this._text = text;
              this.sizeInterface();
              this.render();
            }
          }
        });

        return TextButton;
      }(ButtonTemplate);

      module.exports = TextButton;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }; //let svg = require('../util/svg');


      var Interface = __webpack_require__(6);

      var Button = __webpack_require__(16);
      /**
      * RadioButton
      *
      * @description An array of buttons. By default, selecting one button will deselect all other buttons, but this can be customized using the API below.
      *
      * @demo <div nexus-ui="RadioButton"></div>
      *
      * @example
      * var radiobutton = new Nexus.RadioButton('#target')
      *
      * @example
      * var radiobutton = new Nexus.RadioButton('#target',{
      *   'size': [120,25],
      *   'numberOfButtons': 4,
      *   'active': -1
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data an <i>integer</i>, the index of the button that is currently on. If no button is selected, the value will be -1.
      *
      * @outputexample
      * radiobutton.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var RadioButton = function (_Interface) {
        function RadioButton() {
          _classCallCheck(this, RadioButton);

          var options = ["value"];
          var defaults = {
            size: [120, 25],
            numberOfButtons: 4,
            active: -1
          };

          _get(Object.getPrototypeOf(RadioButton.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.buttons = [];
          this._numberOfButtons = this.settings.numberOfButtons;
          this.active = this.settings.active;
          this.init();
          this.render();
        }

        _inherits(RadioButton, _Interface);

        _createClass(RadioButton, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("div");
              this.parent.appendChild(this.element);
            }
          },
          buildInterface: {
            value: function buildInterface() {
              for (var i = 0; i < this._numberOfButtons; i++) {
                var container = document.createElement("span");
                var button = new Button(container, {
                  mode: "toggle",
                  component: true
                }, this.update.bind(this, i));
                this.buttons.push(button);
                this.element.appendChild(container);
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              var buttonWidth = this.width / this._numberOfButtons;
              var buttonHeight = this.height;

              for (var i = 0; i < this._numberOfButtons; i++) {
                this.buttons[i].resize(buttonWidth, buttonHeight);
              }
            }
          },
          colorInterface: {
            value: function colorInterface() {
              for (var i = 0; i < this._numberOfButtons; i++) {
                this.buttons[i].colors = this.colors;
                this.buttons[i].render();
              }
            }
          },
          update: {
            value: function update(index) {
              if (this.buttons[index].state) {
                this.select(index);
              } else {
                this.deselect();
              } //  this.render();

            }
          },
          render: {
            value: function render() {
              for (var i = 0; i < this.buttons.length; i++) {
                if (i === this.active) {
                  this.buttons[i].turnOn(false);
                } else {
                  this.buttons[i].turnOff(false);
                }
              }
            }
          },
          select: {
            /**
            Select one button and deselect all other buttons.
            @param index {number} The index of the button to select
            */
            value: function select(index) {
              if (index >= 0 && index < this.buttons.length) {
                this.active = index;
                this.emit("change", this.active);
                this.render();
              }
            }
          },
          deselect: {
            /**
            Deselect all buttons.
            */
            value: function deselect() {
              this.active = -1;
              this.emit("change", this.active);
              this.render();
            }
          },
          numberOfButtons: {
            get: function () {
              return this._numberOfButtons;
            },

            /**
             * Update how many buttons are in the interface
             * @param  {number} buttons How many buttons are in the interface
             */
            set: function (buttons) {
              this._numberOfButtons = buttons;

              for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].destroy();
              }

              this.buttons = []; //  for (let i=0;i<this.buttons.length;i++) {
              //    this.buttons[i].destroy();
              //  }

              this.empty();
              this.buildInterface();
            }
          }
        });

        return RadioButton;
      }(Interface);

      module.exports = RadioButton;
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var math = __webpack_require__(5);
      /**
      * Number
      *
      * @description Number interface which is controllable by dragging or typing.
      *
      * @demo <span nexus-ui="number"></span>
      *
      * @example
      * var number = new Nexus.Number('#target')
      *
      * @example
      * var number = new Nexus.Number('#target',{
      *   'size': [60,30],
      *   'value': 0,
      *   'min': 0,
      *   'max': 20000,
      *   'step': 1
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is the number value of the interface.
      *
      * @outputexample
      * number.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Number = function (_Interface) {
        function Number() {
          _classCallCheck(this, Number);

          var options = ["value"];
          var defaults = {
            size: [60, 30],
            value: 0,
            min: 0,
            max: 20000,
            step: 1
          };

          _get(Object.getPrototypeOf(Number.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
          /*
          Default: 2. How many decimal places to clip the number's visual rendering to. This does not affect number's actual value output -- for that, set the step property to .01, .1, or 1.
          @type {number}
          @example number.decimalPlaces = 2;
          */

          this.decimalPlaces = 2;
          this.actual = 0;
          this.max = this._value.max;
          this.min = this._value.min;
          this.step = this._value.step;
          this.init();
          this.render();
        }

        _inherits(Number, _Interface);

        _createClass(Number, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("input");
              this.element.type = "text";
              this.element.addEventListener("blur", function () {
                this.element.style.backgroundColor = this.colors.fill;
                this.element.style.color = this.colors.dark;

                if (this.element.value !== this.value) {
                  this.value = parseFloat(this.element.value);
                  this.render();
                }
              }.bind(this));
              this.element.addEventListener("keydown", function (e) {
                if (e.which < 48 || e.which > 57) {
                  if (e.which !== 189 && e.which !== 190 && e.which !== 8) {
                    e.preventDefault();
                  }
                }

                if (e.which === 13) {
                  this.element.blur();
                  this.value = this.element.value;
                  this.emit("change", this.value);
                  this.render();
                }
              }.bind(this));
              this.parent.appendChild(this.element);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this._minDimension = Math.min(this.width, this.height);
              var styles = "width: " + this.width + "px;";
              styles += "height: " + this.height + "px;";
              styles += "background-color: #e7e7e7;";
              styles += "color: #333;";
              styles += "font-family: arial;";
              styles += "font-weight: 500;";
              styles += "font-size:" + this._minDimension / 2 + "px;"; //  styles += 'highlight: #d18;';

              styles += "border: none;";
              styles += "outline: none;";
              styles += "padding: " + this._minDimension / 4 + "px " + this._minDimension / 4 + "px;";
              styles += "box-sizing: border-box;";
              styles += "userSelect: text;";
              styles += "mozUserSelect: text;";
              styles += "webkitUserSelect: text;";
              this.element.style.cssText += styles; // to add eventually
              // var css = '#'+this.elementID+'::selection{ background-color: transparent }';

              this.element.value = this.value;
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.element.style.backgroundColor = this.colors.fill;
              this.element.style.color = this.colors.dark;
            }
          },
          render: {
            value: function render() {
              this.element.value = math.prune(this.value, this.decimalPlaces);
            }
          },
          click: {
            value: function click() {
              this.hasMoved = false;
              this.element.readOnly = true;
              this.actual = this.value;
              this.initial = {
                y: this.mouse.y
              };
              this.changeFactor = math.invert(this.mouse.x / this.width);
              console.log(this.changeFactor);
            }
          },
          move: {
            value: function move() {
              this.hasMoved = true;

              if (this.clicked) {
                var newvalue = this.actual - (this.mouse.y - this.initial.y) * (math.clip(this.max - this.min, 0, 1000) / 200) * Math.pow(this.changeFactor, 2);
                this.value = newvalue;
                this.render();

                if (this._value.changed) {
                  this.emit("change", this.value);
                }
              }
            }
          },
          release: {
            value: function release() {
              if (!this.hasMoved) {
                this.element.readOnly = false;
                this.element.focus();
                this.element.setSelectionRange(0, this.element.value.length);
                this.element.style.backgroundColor = this.colors.accent;
                this.element.style.color = this.colors.light;
              } else {
                document.body.focus();
              }
            }
          },
          link: {
            /**
            Connect this number interface to a dial or slider
            @param {Interface} element Element to connect to.
            @example number.link(slider)
            */
            value: function link(destination) {
              var _this = this;

              this.min = destination.min;
              this.max = destination.max;
              this.step = destination.step;
              destination.on("change", function (v) {
                _this.passiveUpdate(v);
              });
              this.on("change", function (v) {
                destination.value = v;
              });
              this.value = destination.value;
              /*  return {
                  listener1: listener1,
                  listener2: listener2,
                  destroy: () => {
                    listener1.remove() (or similar)
                    listener2.remove() (or similar)
                  }
                } */
            }
          },
          passiveUpdate: {
            value: function passiveUpdate(v) {
              this._value.update(v);

              this.render();
            }
          },
          value: {
            /**
            The interface's current value. If set manually, will update the interface and trigger the output event.
            @type {number}
            @example number.value = 10;
            */
            get: function () {
              return this._value.value;
            },
            set: function (v) {
              this._value.update(v);

              this.emit("change", this.value);
              this.render();
            }
          },
          min: {
            /**
            Lower limit of the number's output range
            @type {number}
            @example number.min = 1000;
            */
            get: function () {
              return this._value.min;
            },
            set: function (v) {
              this._value.min = v;
            }
          },
          max: {
            /**
            Upper limit of the number's output range
            @type {number}
            @example number.max = 1000;
            */
            get: function () {
              return this._value.max;
            },
            set: function (v) {
              this._value.max = v;
            }
          },
          step: {
            /**
            The increment that the number's value changes by.
            @type {number}
            @example number.step = 5;
            */
            get: function () {
              return this._value.step;
            },
            set: function (v) {
              this._value.step = v;
            }
          }
        });

        return Number;
      }(Interface);

      module.exports = Number;
      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var Interface = __webpack_require__(6);
      /**
      * Select
      *
      * @description Dropdown menu
      *
      * @demo <span nexus-ui="select"></span>
      *
      * @example
      * var select = new Nexus.Select('#target')
      *
      * @example
      * var select = new Nexus.Select('#target',{
      *   'size': [100,30],
      *   'options': ['default','options']
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is an object containing the text value of the selected option, as well as the numeric index of the selection.
      *
      * @outputexample
      * select.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Select = function (_Interface) {
        function Select() {
          _classCallCheck(this, Select);

          var options = ["value"];
          var defaults = {
            size: [100, 30],
            options: ["default", "options"]
          };

          _get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._selectedIndex = -1;
          this._value = false;
          this._options = this.settings.options;
          this.init();
          this.render();
        }

        _inherits(Select, _Interface);

        _createClass(Select, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("select");
              this.element.style.fontSize = this.height / 2 + "px";
              this.element.style.outline = "none";
              this.element.style.highlight = "none";
              this.element.style.width = this.width + "px";
              this.element.style.height = this.height + "px";
              this.boundRender = this.render.bind(this);
              this.element.addEventListener("change", this.boundRender);
              this.parent.appendChild(this.element);
            }
          },
          attachListeners: {
            value: function attachListeners() {}
          },
          buildInterface: {
            value: function buildInterface() {
              this.defineOptions();
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.element.style.backgroundColor = this.colors.fill;
              this.element.style.color = this.colors.dark;
              this.element.style.border = "solid 0px " + this.colors.mediumLight;
            }
          },
          render: {
            value: function render() {
              this._value = this.element.options[this.element.selectedIndex].text;
              this._selectedIndex = this.element.selectedIndex;
              this.emit("change", {
                value: this._value,
                index: this._selectedIndex
              });
            }
          },
          click: {
            value: function click() {}
          },
          move: {
            value: function move() {}
          },
          release: {
            value: function release() {}
          },
          defineOptions: {
            /**
             * Update the list of options. This removes all existing options and creates a new list of options.
             * @param  {array} options New array of options
             */
            value: function defineOptions(options) {
              /*  function removeOptions(selectbox)
                {
                    var i;
                    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
                    {
                        selectbox.remove(i);
                    }
                }
                //using the function:
                removeOptions(document.getElementById("mySelectObject")); */
              if (options) {
                this._options = options;
              }

              for (var i = this.element.options.length - 1; i >= 0; i--) {
                this.element.remove(i);
              }

              for (var i = 0; i < this._options.length; i++) {
                this.element.options.add(new Option(this._options[i], i));
              }
            }
          },
          value: {
            /**
            The text of the option that is currently selected. If set, will update the interface and trigger the output event.
            @type {String}
            @example select.value = "sawtooth";
            */
            get: function () {
              return this._value;
            },
            set: function (v) {
              this._value = v;

              for (var i = 0; i < this.element.options.length; i++) {
                if (v === this.element.options[i].text) {
                  this.selectedIndex = i;
                  break;
                }
              }
            }
          },
          selectedIndex: {
            /**
            The numeric index of the option that is currently selected. If set, will update the interface and trigger the output event.
            @type {number}
            @example select.selectedIndex = 2;
            */
            get: function () {
              return this._selectedIndex;
            },
            set: function (v) {
              this._selectedIndex = v;
              this.element.selectedIndex = v;
              this.render();
            }
          },
          customDestroy: {
            value: function customDestroy() {
              this.element.removeEventListener("change", this.boundRender);
            }
          }
        });

        return Select;
      }(Interface);

      module.exports = Select;
      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var math = __webpack_require__(5);

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var Interaction = _interopRequireWildcard(__webpack_require__(12));
      /**
      * Dial
      *
      *
      * @description Dial with radial or linear interaction.
      *
      * @demo <span nexus-ui="dial"></span>
      *
      * @example
      * var dial = new Nexus.Dial('#target')
      *
      * @example
      * var dial = new Nexus.Dial('#target',{
      *   'size': [75,75],
      *   'interaction': 'radial', // "radial", "vertical", or "horizontal"
      *   'mode': 'relative', // "absolute" or "relative"
      *   'min': 0,
      *   'max': 1,
      *   'step': 0,
      *   'value': 0
      * })
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is the number value of the interface.
      *
      * @outputexample
      * dial.on('change',function(v) {
      *   console.log(v);
      * })
      *
      * @tutorial
      * Dial
      * ygGMxq
      *
      */


      var Dial = function (_Interface) {
        function Dial() {
          _classCallCheck(this, Dial);

          var options = ["min", "max", "value"];
          var defaults = {
            size: [75, 75],
            interaction: "radial",
            // radial, vertical, horizontal
            mode: "relative",
            // absolute, relative
            min: 0,
            max: 1,
            step: 0,
            value: 0
          };

          _get(Object.getPrototypeOf(Dial.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.interaction = this.settings.interaction;
          this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
          this.position = new Interaction.Handle(this.settings.mode, this.interaction, [0, this.width], [this.height, 0]);
          this.init();
          this.value = this._value.value;
          this.position.value = this._value.normalized;
          this.previousAngle = false;
          this.emit("change", this.value);
        }

        _inherits(Dial, _Interface);

        _createClass(Dial, {
          buildInterface: {
            value: function buildInterface() {
              this.background = svg.create("circle");
              this.screw = svg.create("circle");
              this.handle = svg.create("path");
              this.handle2 = svg.create("path");
              this.handleFill = svg.create("path");
              this.handle2Fill = svg.create("path");
              this.handleLine = svg.create("path");
              this.element.appendChild(this.background);
              this.element.appendChild(this.handle);
              this.element.appendChild(this.handle2);
              this.element.appendChild(this.handleFill);
              this.element.appendChild(this.handle2Fill);
              this.element.appendChild(this.handleLine);
              this.element.appendChild(this.screw);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.position.resize([0, this.width], [this.height, 0]);
              var center = {
                x: this.width / 2,
                y: this.height / 2
              };
              var diameter = Math.min(this.width, this.height);
              this.background.setAttribute("cx", center.x);
              this.background.setAttribute("cy", center.y);
              this.background.setAttribute("r", diameter / 2 - diameter / 40);
              this.screw.setAttribute("cx", center.x);
              this.screw.setAttribute("cy", center.y);
              this.screw.setAttribute("r", diameter / 12);
              var value = this.value;
              var handlePoints = {
                start: Math.PI * 1.5,
                end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
              };
              var handle2Points = {
                start: Math.PI * 2.5,
                end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
              };
              var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
              var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
              this.handle.setAttribute("d", handlePath);
              this.handle.setAttribute("stroke-width", diameter / 20);
              this.handle.setAttribute("fill", "none");
              this.handle2.setAttribute("d", handle2Path);
              this.handle2.setAttribute("stroke-width", diameter / 20);
              this.handle2.setAttribute("fill", "none");
              handlePath += " L " + center.x + " " + center.y;
              this.handleFill.setAttribute("d", handlePath);
              this.handleFill.setAttribute("fill-opacity", "0.3");
              handle2Path += " L " + center.x + " " + center.y;
              this.handle2Fill.setAttribute("d", handle2Path);
              this.handle2Fill.setAttribute("fill-opacity", "0.3");
              var arcEndingA = undefined;

              if (value < 0.5) {
                arcEndingA = handlePoints.end;
              } else {
                arcEndingA = handle2Points.end;
              }

              var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
              var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
              this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
              this.handleLine.setAttribute("stroke-width", diameter / 20);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.background.setAttribute("fill", this.colors.fill);
              this.screw.setAttribute("fill", this.colors.accent);
              this.handle.setAttribute("stroke", this.colors.accent);
              this.handle2.setAttribute("stroke", this.colors.accent);
              this.handleFill.setAttribute("fill", this.colors.accent);
              this.handle2Fill.setAttribute("fill", this.colors.accent);
              this.handleLine.setAttribute("stroke", this.colors.accent);
            }
          },
          render: {
            value: function render() {
              var value = this._value.normalized;
              var center = {
                x: this.width / 2,
                y: this.height / 2
              };
              var diameter = Math.min(this.width, this.height);
              var handlePoints = {
                start: Math.PI * 1.5,
                end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
              };
              var handle2Points = {
                start: Math.PI * 2.5,
                end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
              };
              var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
              var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
              this.handle.setAttribute("d", handlePath);
              this.handle2.setAttribute("d", handle2Path);
              handlePath += " L " + center.x + " " + center.y;
              this.handleFill.setAttribute("d", handlePath);
              handle2Path += " L " + center.x + " " + center.y;
              this.handle2Fill.setAttribute("d", handle2Path);
              var arcEndingA = undefined;

              if (value <= 0.5) {
                arcEndingA = handlePoints.end;
              } else {
                arcEndingA = handle2Points.end;
              }

              var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
              var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
              this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
            }
          },
          click: {
            value: function click() {
              if (this.mode === "relative") {
                this.previousAngle = false;
              }

              this.position.anchor = this.mouse;
              this.position.value = this._value.normalized;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.position.update(this.mouse);
                var angle = this.position.value * Math.PI * 2;

                if (angle < 0) {
                  angle += Math.PI * 2;
                }

                if (this.mode === "relative") {
                  if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
                    if (this.previousAngle > 3) {
                      angle = Math.PI * 2;
                    } else {
                      angle = 0;
                    }
                  }
                }
                /* else {
                if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
                  if (this.previousAngle > 3) {
                    angle = Math.PI*2;
                  } else {
                    angle = 0;
                  }
                }
                } */


                this.previousAngle = angle;
                var realValue = angle / (Math.PI * 2);
                this.value = this._value.updateNormal(realValue);

                if (this.mode === "relative") {
                  this.position.value = realValue;
                }

                this.emit("change", this._value.value);
                this.render();
              }
            }
          },
          release: {
            value: function release() {}
          },
          value: {
            /*
            Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
            @type {number}
            @example dial.value = 10;
             get value() {
              return this._value.value;
            }
             set value(value) {
              this._value.update(value);
              this.emit('change',this.value);
              this.render();
            }
            */

            /**
            Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
            @type {number}
            @example dial.value = 10;
            */
            get: function () {
              return this._value.value;
            },
            set: function (v) {
              this._value.update(v);

              this.position.value = this._value.normalized;
              this.emit("change", this._value.value);
              this.render();
            }
          },
          min: {
            /**
            Lower limit of the dial's output range
            @type {number}
            @example dial.min = 1000;
            */
            get: function () {
              return this._value.min;
            },
            set: function (v) {
              this._value.min = v;
            }
          },
          max: {
            /**
            Upper limit of the dial's output range
            @type {number}
            @example dial.max = 1000;
            */
            get: function () {
              return this._value.max;
            },
            set: function (v) {
              this._value.max = v;
            }
          },
          step: {
            /**
            The increment that the dial's value changes by.
            @type {number}
            @example dial.step = 5;
            */
            get: function () {
              return this._value.step;
            },
            set: function (v) {
              this._value.step = v;
            }
          },
          mode: {
            /**
            Absolute mode (dial's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
            @type {string}
            @example dial.mode = "relative";
            */
            get: function () {
              return this.position.mode;
            },
            set: function (v) {
              this.position.mode = v;
            }
          },
          normalized: {
            /**
            Normalized value of the dial.
            @type {number}
            @example dial.normalized = 0.5;
            */
            get: function () {
              return this._value.normalized;
            },
            set: function (v) {
              this._value.updateNormal(v);

              this.emit("change", this.value);
            }
          }
        });

        return Dial;
      }(Interface);

      module.exports = Dial;
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);

      var ButtonTemplate = __webpack_require__(17);

      var touch = __webpack_require__(9);

      var PianoKey = function (_ButtonTemplate) {
        function PianoKey() {
          _classCallCheck(this, PianoKey);

          var options = ["value", "note", "color"];
          var defaults = {
            size: [80, 80],
            target: false,
            mode: "button",
            value: 0
          };

          _get(Object.getPrototypeOf(PianoKey.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.note = this.settings.note;
          this.color = this.settings.color;
          this.colors = {
            w: "#fff",
            b: "#666"
          };
          this.init();
          this.render();
        }

        _inherits(PianoKey, _ButtonTemplate);

        _createClass(PianoKey, {
          buildFrame: {
            value: function buildFrame() {
              this.element = svg.create("svg");
              this.element.setAttribute("width", this.width);
              this.element.setAttribute("height", this.height);
              this.parent.appendChild(this.element);
            }
          },
          buildInterface: {
            value: function buildInterface() {
              var _this = this;

              this.pad = svg.create("rect");
              this.element.appendChild(this.pad);
              this.interactionTarget = this.pad;
              /* events */

              if (!touch.exists) {
                this.click = function () {
                  //  console.log('click');
                  _this.piano.interacting = true;
                  _this.piano.paintbrush = !_this.state;

                  _this.down(_this.piano.paintbrush);
                };

                this.pad.addEventListener("mouseover", function () {
                  if (_this.piano.interacting) {
                    //    console.log('mouseover');
                    _this.down(_this.piano.paintbrush);
                  }
                });

                this.move = function () {
                  if (_this.piano.interacting) {
                    //  console.log('move');
                    _this.bend();
                  }
                };

                this.release = function () {
                  _this.piano.interacting = false; //  console.log('release');
                  //  this.up();
                };

                this.pad.addEventListener("mouseup", function () {
                  if (_this.piano.interacting) {
                    //  console.log('mouseup');
                    _this.up();
                  }
                });
                this.pad.addEventListener("mouseout", function () {
                  if (_this.piano.interacting) {
                    //  console.log('mouseout');
                    _this.up();
                  }
                });
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              //let radius = Math.min(this.width,this.height) / 5;
              var radius = 0;
              this.pad.setAttribute("x", 0.5);
              this.pad.setAttribute("y", 0.5);

              if (this.width > 2) {
                this.pad.setAttribute("width", this.width - 1);
              } else {
                this.pad.setAttribute("width", this.width);
              }

              if (this.height > 2) {
                this.pad.setAttribute("height", this.height);
              } else {
                this.pad.setAttribute("height", this.height);
              }

              this.pad.setAttribute("rx", radius);
              this.pad.setAttribute("ry", radius);
            }
          },
          render: {
            value: function render() {
              if (!this.state) {
                this.pad.setAttribute("fill", this.colors[this.color]);
              } else {
                this.pad.setAttribute("fill", this.colors.accent);
              }
            }
          }
        });

        return PianoKey;
      }(ButtonTemplate);
      /**
      * Piano
      *
      * @description Piano keyboard interface
      *
      * @demo <div nexus-ui="piano"></div>
      *
      * @example
      * var piano = new Nexus.Piano('#target')
      *
      * @example
      * var piano = new Nexus.Piano('#target',{
      *     'size': [500,125],
      *     'mode': 'button',  // 'button', 'toggle', or 'impulse'
      *     'lowNote': 24,
      *     'highNote': 60
      * })
      *
      * @output
      * change
      * Fires any time a new key is pressed or released <br>
      * The event data is an object containing <i>note</i> and <i>state</i> properties.
      *
      * @outputexample
      * piano.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var Piano = function (_Interface) {
        function Piano() {
          _classCallCheck(this, Piano);

          var options = ["value"];
          var defaults = {
            size: [500, 125],
            lowNote: 24,
            highNote: 60,
            mode: "button"
          };

          _get(Object.getPrototypeOf(Piano.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.keyPattern = ["w", "b", "w", "b", "w", "w", "b", "w", "b", "w", "b", "w"];
          this.paintbrush = false;
          this.mode = this.settings.mode;
          this.range = {
            low: this.settings.lowNote,
            high: this.settings.highNote
          };
          this.range.size = this.range.high - this.range.low + 1;
          this.keys = [];
          this.toggleTo = false;
          this.init();
          this.render();
        }

        _inherits(Piano, _Interface);

        _createClass(Piano, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("div");
              this.element.style.position = "relative";
              this.element.style.borderRadius = "0px";
              this.element.style.display = "block";
              this.element.style.width = "100%";
              this.element.style.height = "100%";
              this.parent.appendChild(this.element);
            }
          },
          buildInterface: {
            value: function buildInterface() {
              this.keys = [];

              for (var i = 0; i < this.range.size; i++) {
                var container = document.createElement("span");
                var scaleIndex = (i + this.range.low) % this.keyPattern.length;
                var key = new PianoKey(container, {
                  component: true,
                  note: i + this.range.low,
                  color: this.keyPattern[scaleIndex],
                  mode: this.mode
                }, this.keyChange.bind(this, i + this.range.low));
                key.piano = this;

                if (touch.exists) {
                  key.pad.index = i;

                  key.preClick = key.preMove = key.preRelease = function () {};

                  key.click = key.move = key.release = function () {};

                  key.preTouch = key.preTouchMove = key.preTouchRelease = function () {};

                  key.touch = key.touchMove = key.touchRelease = function () {};
                }

                this.keys.push(key);
                this.element.appendChild(container);
              }

              if (touch.exists) {
                this.addTouchListeners();
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              var keyX = 0;
              var keyPositions = [];

              for (var i = 0; i < this.range.size; i++) {
                keyPositions.push(keyX);
                var scaleIndex = (i + this.range.low) % this.keyPattern.length;
                var nextScaleIndex = (i + 1 + this.range.low) % this.keyPattern.length;

                if (i + 1 + this.range.low >= this.range.high) {
                  keyX += 1;
                } else if (this.keyPattern[scaleIndex] === "w" && this.keyPattern[nextScaleIndex] === "w") {
                  keyX += 1;
                } else {
                  keyX += 0.5;
                }
              }

              var keysWide = keyX; //  let padding = this.width / 120;

              var padding = 1;
              var buttonWidth = (this.width - padding * 2) / keysWide;
              var buttonHeight = (this.height - padding * 2) / 2;

              for (var i = 0; i < this.keys.length; i++) {
                var container = this.keys[i].parent;
                container.style.position = "absolute";
                container.style.left = keyPositions[i] * buttonWidth + padding + "px";

                if (this.keys[i].color === "w") {
                  container.style.top = padding + "px";
                  this.keys[i].resize(buttonWidth, buttonHeight * 2);
                } else {
                  container.style.zIndex = 1;
                  container.style.top = padding + "px";
                  this.keys[i].resize(buttonWidth, buttonHeight * 1.1);
                }
              }
            }
          },
          colorInterface: {
            value: function colorInterface() {
              // Piano keys don't actually have a stroke border
              // They have space between them, which shows the Piano bg color
              this.element.style.backgroundColor = this.colors.mediumLight;

              for (var i = 0; i < this.keys.length; i++) {
                this.keys[i].colors = {
                  w: this.colors.light,
                  b: this.colors.dark,
                  accent: this.colors.accent,
                  border: this.colors.mediumLight
                };
                this.keys[i].colorInterface();
                this.keys[i].render();
              }
            }
          },
          keyChange: {
            value: function keyChange(note, on) {
              // emit data for any key turning on/off
              // "note" is the note value
              // "on" is a boolean whether it is on or off
              // in aftertouch mode, "on: is an object with state/x/y properties
              var data = {
                note: note
              };

              if (typeof on === "object") {
                data.state = on.state; //  data.x = on.x
                //  data.y = on.y
              } else {
                data.state = on;
              }

              this.emit("change", data);
            }
          },
          render: {
            /* drag(note,on) {
              this.emit('change',{
                note: note,
                state: on
              });
            } */
            value: function render() {}
          },
          addTouchListeners: {
            value: function addTouchListeners() {
              var _this = this;

              this.preClick = this.preMove = this.preRelease = function () {};

              this.click = this.move = this.release = function () {};

              this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};

              this.touch = this.touchMove = this.touchRelease = function () {};

              this.currentElement = false;
              this.element.addEventListener("touchstart", function (e) {
                console.log("touchstart");
                var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
                var key = _this.keys[element.index];
                _this.paintbrush = !key.state;
                key.down(_this.paintbrush);
                _this.currentElement = element.index;
                e.preventDefault();
                e.stopPropagation();
              });
              this.element.addEventListener("touchmove", function (e) {
                var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
                var key = _this.keys[element.index];

                if (element.index !== _this.currentElement) {
                  if (_this.currentElement) {
                    var pastKey = _this.keys[_this.currentElement];
                    pastKey.up();
                  }

                  key.down(_this.paintbrush);
                } else {
                  key.bend();
                }

                _this.currentElement = element.index;
                e.preventDefault();
                e.stopPropagation();
              });
              this.element.addEventListener("touchend", function (e) {
                // no touches to calculate because none remaining
                var key = _this.keys[_this.currentElement];
                key.up();
                _this.interacting = false;
                _this.currentElement = false;
                e.preventDefault();
                e.stopPropagation();
              });
            }
          },
          setRange: {
            /**
            Define the pitch range (lowest and highest note) of the piano keyboard.
            @param low {number} MIDI note value of the lowest note on the keyboard
            @param high {number} MIDI note value of the highest note on the keyboard
            */
            value: function setRange(low, high) {
              this.range.low = low;
              this.range.high = high;
              this.empty();
              this.buildInterface();
            }
          },
          toggleKey: {
            /**
            Turn a key on or off using its MIDI note value;
            @param note {number} MIDI note value of the key to change
            @param on {boolean} Whether the note should turn on or off
            */
            value: function toggleKey(note, on) {
              this.keys[note - this.range.low].flip(on);
            }
          },
          toggleIndex: {
            /**
            Turn a key on or off using its key index on the piano interface.
            @param index {number} Index of the key to change
            @param on {boolean} Whether the note should turn on or off
            */
            value: function toggleIndex(index, on) {
              this.keys[index].flip(on);
            }
          }
        });

        return Piano;
      }(Interface);

      module.exports = Piano; // loop through and render the keys?

      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var dom = __webpack_require__(7);

      var Interface = __webpack_require__(6);

      var ButtonTemplate = __webpack_require__(17);

      var MatrixModel = __webpack_require__(25);

      var CounterModel = __webpack_require__(28);

      var touch = __webpack_require__(9);

      var MatrixCell = function (_ButtonTemplate) {
        function MatrixCell() {
          _classCallCheck(this, MatrixCell);

          var options = ["value"];
          var defaults = {
            size: [80, 80],
            target: false,
            mode: "toggle",
            value: 0
          };

          _get(Object.getPrototypeOf(MatrixCell.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.index = this.settings.index;
          this.row = this.settings.row;
          this.column = this.settings.column;
          this.matrix = this.settings.matrix;
          this.interacting = false;
          this.paintbrush = false;
          this.init();
          this.render();
        }

        _inherits(MatrixCell, _ButtonTemplate);

        _createClass(MatrixCell, {
          buildFrame: {
            value: function buildFrame() {
              this.element = svg.create("svg");
              this.element.setAttribute("width", this.width);
              this.element.setAttribute("height", this.height);
              this.element.style.top = "0px";
              this.element.style.left = "0px";
              this.element.style.position = "absolute";
              this.parent.appendChild(this.element);
            }
          },
          buildInterface: {
            value: function buildInterface() {
              var _this = this;

              this.pad = svg.create("rect");
              this.element.appendChild(this.pad);
              this.interactionTarget = this.pad;
              /* events */

              if (!touch.exists) {
                this.click = function () {
                  _this.matrix.interacting = true;
                  _this.matrix.paintbrush = !_this.state;

                  _this.down(_this.matrix.paintbrush);
                };

                this.pad.addEventListener("mouseover", function () {
                  if (_this.matrix.interacting) {
                    _this.down(_this.matrix.paintbrush);
                  }
                });

                this.move = function () {};

                this.pad.addEventListener("mousemove", function (e) {
                  if (_this.matrix.interacting) {
                    if (!_this.offset) {
                      _this.offset = dom.findPosition(_this.element);
                    }

                    _this.mouse = dom.locateMouse(e, _this.offset);

                    _this.bend();
                  }
                });

                this.release = function () {
                  _this.matrix.interacting = false;
                };

                this.pad.addEventListener("mouseup", function () {
                  if (_this.matrix.interacting) {
                    _this.up();
                  }
                });
                this.pad.addEventListener("mouseout", function () {
                  if (_this.matrix.interacting) {
                    _this.up();
                  }
                });
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.pad.setAttribute("x", 1);
              this.pad.setAttribute("y", 1);

              if (this.width > 2) {
                this.pad.setAttribute("width", this.width - 2);
              } else {
                this.pad.setAttribute("width", this.width);
              }

              if (this.height > 2) {
                this.pad.setAttribute("height", this.height - 2);
              } else {
                this.pad.setAttribute("height", this.height);
              } //this.pad.setAttribute('height', this.height - 2);


              this.pad.setAttribute("fill", this.matrix.colors.fill);
            }
          },
          render: {
            value: function render() {
              if (!this.state) {
                this.pad.setAttribute("fill", this.matrix.colors.fill);
              } else {
                this.pad.setAttribute("fill", this.matrix.colors.accent);
              }
            }
          }
        });

        return MatrixCell;
      }(ButtonTemplate);
      /**
      * Sequencer
      *
      * @description Grid of buttons with built-in step sequencer.
      *
      * @demo <div nexus-ui="sequencer" style="width:400px;height:200px;"></div>
      *
      * @example
      * var sequencer = new Nexus.Sequencer('#target')
      *
      * @example
      * var sequencer = new Nexus.Sequencer('#target',{
      *  'size': [400,200],
      *  'mode': 'toggle',
      *  'rows': 5,
      *  'columns': 10
      *})
      *
      * @output
      * change
      * Fires any time the interface's matrix changes. <br>
      * The event data is an object containing <i>row</i> (number), <i>column</i> (number), and <i>state</i> (boolean) properties.
      *
      * @outputexample
      * sequencer.on('change',function(v) {
      *   console.log(v);
      * })
      *
      * @output
      * step
      * Fires any time the sequencer steps to the next column, in sequece mode. <br>
      * The event data is an <i>array</i> containing all values in the column, <i>bottom row first</i>.
      *
      * @outputexample
      * sequencer.on('step',function(v) {
      *   console.log(v);
      * })
      */


      var Sequencer = function (_Interface) {
        function Sequencer() {
          _classCallCheck(this, Sequencer);

          var options = ["value"];
          var defaults = {
            size: [400, 200],
            mode: "toggle",
            rows: 5,
            columns: 10
          };

          _get(Object.getPrototypeOf(Sequencer.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.active = -1;
          /**
          * Button interaction mode: see Button
          * @type {string}
          * @example button.mode = 'toggle';
          */

          this.mode = this.settings.mode;
          /**
          * The interval object which controls timing and sequence scheduling.
          * @type {interval}
          */

          this.interval = new Nexus.Interval(200, function () {}, false); // jshint ignore:line

          /**
          * A Matrix model containing methods for manipulating the sequencer's array of values. To learn how to manipulate the matrix, read about the matrix model.
          * @type {matrix}
          */

          this.matrix = new MatrixModel(this.settings.rows, this.settings.columns);
          this.matrix.ui = this;
          /**
          * A Counter model which the sequencer steps through. For example, you could use this model to step through the sequencer in reverse, randomly, or in a drunk walk.
          * @type {counter}
          */

          this.stepper = new CounterModel(0, this.columns);
          this.init();
        }

        _inherits(Sequencer, _Interface);

        _createClass(Sequencer, {
          buildFrame: {
            value: function buildFrame() {
              this.element = document.createElement("div");
              this.element.style.position = "relative";
              this.element.style.display = "block";
              this.element.style.width = "100%";
              this.element.style.height = "100%";
              this.parent.appendChild(this.element);

              if (touch.exists) {
                this.addTouchListeners();
              }
            }
          },
          buildInterface: {
            value: function buildInterface() {
              this.cells = [];

              for (var i = 0; i < this.matrix.length; i++) {
                var _location = this.matrix.locate(i); // returns {row,col}


                var container = document.createElement("span");
                container.style.position = "absolute";
                var cell = new MatrixCell(container, {
                  component: true,
                  index: i,
                  row: _location.row,
                  column: _location.column,
                  mode: this.mode,
                  matrix: this
                }, this.keyChange.bind(this, i)); //  cell.matrix = this;

                if (touch.exists) {
                  cell.pad.index = i;

                  cell.preClick = cell.preMove = cell.preRelease = function () {};

                  cell.click = cell.move = cell.release = function () {};

                  cell.preTouch = cell.preTouchMove = cell.preTouchRelease = function () {};

                  cell.touch = cell.touchMove = cell.touchRelease = function () {};
                }

                this.cells.push(cell);
                this.element.appendChild(container);
              }

              this.sizeInterface();
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              var cellWidth = this.width / this.columns;
              var cellHeight = this.height / this.rows;

              for (var i = 0; i < this.cells.length; i++) {
                var container = this.cells[i].parent;
                container.style.left = this.cells[i].column * cellWidth + "px";
                container.style.top = this.cells[i].row * cellHeight + "px";
                this.cells[i].resize(cellWidth, cellHeight);
              }
            }
          },
          colorInterface: {
            value: function colorInterface() {
              for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].render();
              }
            }
          },
          update: {
            value: function update() {
              var _this = this; //  console.log("updating...")
              //on = on || false;


              this.matrix.iterate(function (r, c, i) {
                //  console.log(this.matrix.pattern[r][c], this.cells[i].state);
                if (_this.matrix.pattern[r][c] !== _this.cells[i].state) {
                  if (_this.matrix.pattern[r][c] > 0) {
                    _this.cells[i].turnOn();
                  } else {
                    _this.cells[i].turnOff();
                  }
                }
              });
            }
          },
          keyChange: {
            // update => cell.turnOn => cell.emit => keyChange (seq.emit) => matrix.set.cell => update
            //
            // interaction => keyChange => matrix.set.cell => update => cell.turnOn
            //                                             => emit
            //
            // set.cell => update => needs to emit.
            value: function keyChange(note, on) {
              // emit data for any key turning on/off
              // i is the note index
              // v is whether it is on or off
              var cell = this.matrix.locate(note); //  this.matrix.set.cell(cell.column,cell.row,on);

              this.matrix.pattern[cell.row][cell.column] = on;
              var data = {
                row: cell.row,
                column: cell.column,
                state: on
              };
              this.emit("change", data);
            }
          },
          render: {
            value: function render() {
              var _this = this;

              if (this.stepper.value >= 0) {
                this.matrix.iterate(function (r, c, i) {
                  if (c === _this.stepper.value) {
                    _this.cells[i].pad.setAttribute("stroke", _this.colors.mediumLight);

                    _this.cells[i].pad.setAttribute("stroke-width", "1");

                    _this.cells[i].pad.setAttribute("stroke-opacity", "1");
                  } else {
                    _this.cells[i].pad.setAttribute("stroke", "none");
                  }
                });
              }
            }
          },
          start: {
            /**
             * Start sequencing
             * @param  {number} ms Beat tempo in milliseconds
             */
            value: function start(ms) {
              this.interval.event = this.next.bind(this);

              if (ms) {
                this.interval.ms(ms);
              }

              this.interval.start();
            }
          },
          stop: {
            /**
            Stop sequencing
            */
            value: function stop() {
              this.interval.stop();
            }
          },
          next: {
            /**
            Manually jump to the next column and trigger the 'change' event. The "next" column is determined by your mode of sequencing.
            */
            value: function next() {
              this.stepper.next();
              this.emit("step", this.matrix.column(this.stepper.value).reverse());
              this.render();
            }
          },
          addTouchListeners: {
            value: function addTouchListeners() {
              var _this = this;

              this.preClick = this.preMove = this.preRelease = function () {};

              this.click = this.move = this.release = function () {};

              this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};

              this.touch = this.touchMove = this.touchRelease = function () {};

              this.currentElement = false;
              this.element.addEventListener("touchstart", function (e) {
                var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
                var cell = _this.cells[element.index];
                _this.paintbrush = !cell.state;
                cell.down(_this.paintbrush);
                _this.currentElement = element.index;
                e.preventDefault();
                e.stopPropagation();
              });
              this.element.addEventListener("touchmove", function (e) {
                var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
                var cell = _this.cells[element.index];

                if (element.index !== _this.currentElement) {
                  if (_this.currentElement >= 0) {
                    var pastCell = _this.cells[_this.currentElement];
                    pastCell.up();
                  }

                  cell.down(_this.paintbrush);
                } else {
                  cell.bend();
                }

                _this.currentElement = element.index;
                e.preventDefault();
                e.stopPropagation();
              });
              this.element.addEventListener("touchend", function (e) {
                // no touches to calculate because none remaining
                var cell = _this.cells[_this.currentElement];
                cell.up();
                _this.interacting = false;
                _this.currentElement = false;
                e.preventDefault();
                e.stopPropagation();
              });
            }
          },
          rows: {
            /**
            Number of rows in the sequencer
            @type {number}
            */
            get: function () {
              return this.matrix.rows;
            },
            set: function (v) {
              this.matrix.rows = v;
              this.empty();
              this.buildInterface();
              this.update();
            }
          },
          columns: {
            /**
            Number of columns in the sequencer
            @type {number}
            */
            get: function () {
              return this.matrix.columns;
            },
            set: function (v) {
              this.matrix.columns = v;
              this.stepper.max = v;
              this.empty();
              this.buildInterface();
              this.update();
            }
          }
        });

        return Sequencer;
      }(Interface);

      module.exports = Sequencer;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = _interopRequire(__webpack_require__(5));

      var Sequence = _interopRequire(__webpack_require__(26)); // For the tutorial, looking at
      //Pattern section:
      // .create(), .rows, .columns,
      // .pattern, .length, .formatAsText(), .log(),
      // .locate(i), .indexOf(c,r)
      // row(), column() (returns contents of row or colum)
      //Control section:
      // toggle x3
      // set x4
      // rotate x3
      // populate x3
      // erase x3
      // should some version of this have a float value for each cell?
      // could be like a mirror .pattern that has values. by default, everything is 1, but could be set...
      // not a good way to do that on interface, but as a model it would be nice...
      // for .formatAsText(), could multiply by 100 and floor, so each cell is an int from 0 to 9


      var Matrix = function () {
        function Matrix(rows, columns) {
          var _this = this;

          _classCallCheck(this, Matrix); // should also have ability to create using an existing matrix (2d array)


          this.pattern = [];
          this.create(rows, columns);
          this.toggle = {
            cell: function (column, row) {
              _this.pattern[row][column] = !_this.pattern[row][column]; // math.invert(this.pattern[row][column]);

              if (_this.ui) {
                _this.ui.update();
              }

              return _this.pattern[row][column];
            },
            all: function () {
              _this.iterate(function (r, c) {
                _this.toggle.cell(c, r);
              });

              if (_this.ui) {
                _this.ui.update();
              }
            },
            row: function (row) {
              for (var i = 0; i < _this.columns; i++) {
                _this.toggle.cell(i, row);
              }

              if (_this.ui) {
                _this.ui.update();
              }
            },
            column: function (column) {
              for (var i = 0; i < _this.rows; i++) {
                _this.toggle.cell(column, i);
              }

              if (_this.ui) {
                _this.ui.update();
              }
            }
          };
          this.set = {
            cell: function (column, row, value) {
              _this.pattern[row][column] = value;

              if (_this.ui) {
                _this.ui.update();
              }
            },
            all: function (values) {
              // set the whole matrix using a 2d array as input
              // this should also resize the array?
              _this.pattern = values;

              if (_this.ui) {
                _this.ui.update();
              }
            },
            row: function (row, values) {
              // set a row using an array as input
              _this.pattern[row] = values;

              if (_this.ui) {
                _this.ui.update();
              }
            },
            column: function (column, values) {
              // set a column using an array as input
              _this.pattern.forEach(function (row, i) {
                _this.pattern[i][column] = values[i];
              });

              if (_this.ui) {
                _this.ui.update();
              }
            }
          };
          this.rotate = {
            //should eventually do (amountX, amountY) here
            // could just use a loop and this.rotate.row(i,amountX);
            all: function (amount) {
              if (!amount && amount !== 0) {
                amount = 1;
              }

              amount %= _this.pattern[0].length;

              if (amount < 0) {
                amount = _this.pattern[0].length + amount;
              }

              for (var i = 0; i < _this.rows; i++) {
                var cut = _this.pattern[i].splice(_this.pattern[i].length - amount, amount);

                _this.pattern[i] = cut.concat(_this.pattern[i]);
              }

              if (_this.ui) {
                _this.ui.update();
              }
            },
            row: function (row, amount) {
              if (!amount && amount !== 0) {
                amount = 1;
              }

              amount %= _this.pattern[0].length;

              if (amount < 0) {
                amount = _this.pattern[0].length + amount;
              }

              var cut = _this.pattern[row].splice(_this.pattern[row].length - amount, amount);

              _this.pattern[row] = cut.concat(_this.pattern[row]);

              if (_this.ui) {
                _this.ui.update();
              }
            },
            column: function (column, amount) {
              if (!amount && amount !== 0) {
                amount = 1;
              }

              amount %= _this.pattern.length;

              if (amount < 0) {
                amount = _this.pattern.length + amount;
              }

              var proxy = [];

              _this.pattern.forEach(function (row) {
                proxy.push(row[column]);
              });

              var cut = proxy.splice(proxy.length - amount, amount);
              proxy = cut.concat(proxy);

              _this.pattern.forEach(function (row, i) {
                row[column] = proxy[i];
              });

              if (_this.ui) {
                _this.ui.update();
              }
            }
          }; // the idea behind populate is to be able to set a whole row or column to 0 or 1
          // IF the value is a float, such as 0.7, then it would become a probability
          // so populate(0.7) would give each cell a 70% chance of being 1

          this.populate = {
            all: function (odds) {
              var oddsSequence = new Sequence(odds);

              _this.iterate(function (r, c) {
                _this.pattern[r][c] = math.coin(oddsSequence.next());
              }); // This could be used so that each row has same odds pattern, even if row length is not divisibly by sequence length.
              //,() => {
              //  odds.pos = -1;
              // }


              if (_this.ui) {
                _this.ui.update();
              }
            },
            row: function () {
              var row = arguments[0] === undefined ? 0 : arguments[0];
              var odds = arguments[1] === undefined ? 1 : arguments[1];
              var oddsSequence = new Sequence(odds);

              _this.pattern[row].forEach(function (cell, i) {
                _this.pattern[row][i] = math.coin(oddsSequence.next());
              });

              if (_this.ui) {
                _this.ui.update();
              }
            },
            column: function () {
              var column = arguments[0] === undefined ? 0 : arguments[0];
              var odds = arguments[1] === undefined ? 1 : arguments[1];
              var oddsSequence = new Sequence(odds);

              _this.pattern.forEach(function (row, i) {
                _this.pattern[i][column] = math.coin(oddsSequence.next());
              });

              if (_this.ui) {
                _this.ui.update();
              }
            }
          }; // essentiall populate(0) so i'm not sure if this is necessary but is nice

          this.erase = {
            all: function () {
              _this.set.all(0);
            },
            row: function (row) {
              _this.set.row(row, 0);
            },
            column: function (column) {
              _this.set.column(column, 0);
            }
          }; // end constructor
        }

        _createClass(Matrix, {
          create: {
            value: function create(rows, columns) {
              var _this = this;

              this.pattern = [];

              for (var row = 0; row < rows; row++) {
                var arr = new Array(columns);
                this.pattern.push(arr);
              }

              this.iterate(function (r, c) {
                _this.pattern[r][c] = false;
              });
            }
          },
          iterate: {
            value: function iterate(f, f2) {
              var i = 0;

              for (var row = 0; row < this.rows; row++) {
                if (f2) {
                  f2(row);
                }

                for (var column = 0; column < this.columns; column++) {
                  f(row, column, i);
                  i++;
                }
              }
            }
          },
          formatAsText: {
            value: function formatAsText() {
              var _this = this;

              var patternString = "";
              this.iterate(function (r, c) {
                patternString += (_this.pattern[r][c] ? 1 : 0) + " ";
              }, function () {
                patternString += "\n";
              });
              return patternString;
            }
          },
          log: {
            value: function log() {
              console.log(this.formatAsText());
            }
          },
          update: {
            value: function update(pattern) {
              this.pattern = pattern || this.pattern;
            }
          },
          length: {
            get: function () {
              return this.rows * this.columns;
            }
          },
          locate: {
            value: function locate(index) {
              // returns row and column of cell by index
              return {
                row: ~~(index / this.columns),
                column: index % this.columns
              };
            }
          },
          indexOf: {
            value: function indexOf(row, column) {
              return column + row * this.columns; // returns index of cell by row and column
            }
          },
          row: {
            value: function (_row) {
              var _rowWrapper = function row(_x) {
                return _row.apply(this, arguments);
              };

              _rowWrapper.toString = function () {
                return _row.toString();
              };

              return _rowWrapper;
            }(function (row) {
              var data = [];

              for (var i = 0; i < this.columns; i++) {
                data.push(this.pattern[row] ? 1 : 0);
              }

              return data;
            })
          },
          column: {
            value: function (_column) {
              var _columnWrapper = function column(_x2) {
                return _column.apply(this, arguments);
              };

              _columnWrapper.toString = function () {
                return _column.toString();
              };

              return _columnWrapper;
            }(function (column) {
              var data = [];

              for (var i = 0; i < this.rows; i++) {
                data.push(this.pattern[i][column] ? 1 : 0);
              }

              return data;
            })
          },
          rows: {
            get: function () {
              return this.pattern.length;
            },
            set: function (v) {
              var _this = this;

              var previous = this.pattern.slice(0);
              this.create(v, this.columns);
              this.iterate(function (r, c) {
                if (previous[r] && previous[r][c]) {
                  _this.pattern[r][c] = previous[r][c];
                }
              });
            }
          },
          columns: {
            get: function () {
              return this.pattern[0].length;
            },
            set: function (v) {
              var _this = this;

              var previous = this.pattern.slice(0);
              this.create(this.rows, v);
              this.iterate(function (r, c) {
                if (previous[r] && previous[r][c]) {
                  _this.pattern[r][c] = previous[r][c];
                }
              });
            }
          }
        });

        return Matrix;
      }();

      module.exports = Matrix;
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = _interopRequire(__webpack_require__(5));

      var Drunk = _interopRequire(__webpack_require__(27));

      var Sequence = function () {
        function Sequence() {
          var sequence = arguments[0] === undefined ? [0, 10, 20, 30] : arguments[0];
          var mode = arguments[1] === undefined ? "up" : arguments[1];
          var position = arguments[2] === undefined ? false : arguments[2];

          _classCallCheck(this, Sequence);

          this.values = sequence;

          if (!Array.isArray(this.values)) {
            this.values = [this.values];
          }

          this._mode = mode;
          this.position = position;
          this.drunkWalk = new Drunk(0, this.values.length - 1);
          this.startValues = {
            up: 0,
            down: this.values.length - 1,
            drunk: ~~(this.values.length / 2),
            random: math.ri(this.values.length)
          };

          if (this.position !== false) {
            this.next = this[this._mode];
          } else {
            this.next = this.first;
          }
        }

        _createClass(Sequence, {
          mode: {
            get: function () {
              return this._mode;
            },
            set: function (mode) {
              if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
                console.error("The only modes currently allowed are: up, down, random, drunk");
                return;
              }

              this._mode = mode;

              if (this.position) {
                this.next = this[this._mode];
              }
            }
          },
          value: {
            get: function () {
              return this.values[this.position];
            },
            set: function (v) {
              this.position = this.values.indexOf(v);
            }
          },
          first: {
            value: function first() {
              if (this.position !== false) {
                this.next = this[this._mode];
                return this.next();
              }

              this.position = this.startValues[this._mode];
              this.next = this[this._mode];
              return this.value;
            }
          },
          up: {
            value: function up() {
              this.position++;
              this.position %= this.values.length;
              return this.value;
            }
          },
          down: {
            value: function down() {
              this.position--;

              if (this.position < 0) {
                this.position = (this.position + this.values.length) % this.values.length;
              }

              return this.value;
            }
          },
          random: {
            value: function random() {
              this.position = math.ri(0, this.values.length);
              return this.value;
            }
          },
          drunk: {
            value: function drunk() {
              this.drunkWalk.max = this.values.length;
              this.drunkWalk.value = this.position;
              this.position = this.drunkWalk.next();
              return this.value;
            }
            /* future methods
            .group(start,stop) -- outputs a group of n items from the list, with wrapping
            .loop(start,stop) -- confines sequencing to a subset of the values
                (could even have a distinction between .originalValues and the array of values being used)
            */

          }
        });

        return Sequence;
      }();

      module.exports = Sequence;
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = _interopRequire(__webpack_require__(5));

      var Drunk = function () {
        function Drunk() {
          var min = arguments[0] === undefined ? 0 : arguments[0];
          var max = arguments[1] === undefined ? 9 : arguments[1];
          var value = arguments[2] === undefined ? 0 : arguments[2];
          var increment = arguments[3] === undefined ? 1 : arguments[3];
          var loop = arguments[4] === undefined ? false : arguments[4];

          _classCallCheck(this, Drunk);

          this.min = min;
          this.max = max;
          this.value = value;
          this.increment = increment;
          this.loop = loop;
        }

        _createClass(Drunk, {
          next: {
            value: function next() {
              this.value += math.pick(-1 * this.increment, this.increment);

              if (this.value > this.max) {
                if (this.loop) {
                  this.value = this.min;
                } else {
                  this.value = this.max - this.increment;
                }
              }

              if (this.value < this.min) {
                if (this.loop) {
                  this.value = this.max;
                } else {
                  this.value = this.min + this.increment;
                }
              }

              return this.value;
            }
          }
        });

        return Drunk;
      }();

      module.exports = Drunk;
      /***/
    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = _interopRequire(__webpack_require__(5));

      var Drunk = _interopRequire(__webpack_require__(27));

      var Counter = function () {
        function Counter() {
          var min = arguments[0] === undefined ? 0 : arguments[0];
          var max = arguments[1] === undefined ? 10 : arguments[1];
          var mode = arguments[2] === undefined ? "up" : arguments[2];
          var value = arguments[3] === undefined ? false : arguments[3];

          _classCallCheck(this, Counter);

          this.min = min;
          this.max = max;
          this.value = value;
          this.mode = mode;
          this.drunkWalk = new Drunk(this.min, this.max);

          if (this.value !== false) {
            this.next = this[this._mode];
          } else {
            this.next = this.first;
          }
        }

        _createClass(Counter, {
          mode: {
            set: function (mode) {
              if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
                console.error("The only modes currently allowed are: up, down, random, drunk");
                return;
              }

              this._mode = mode;

              if (this.value) {
                this.next = this[this._mode];
              }
            },
            get: function () {
              return this._mode;
            }
          },
          first: {
            value: function first() {
              if (this.value !== false) {
                this.next = this[this._mode];
                return this.next();
              }

              this.startValues = {
                up: this.min,
                down: this.max,
                drunk: ~~math.average(this.min, this.max),
                random: math.ri(this.min, this.max)
              };
              this.value = this.startValues[this._mode];
              this.next = this[this._mode];
              return this.value;
            }
          },
          up: {
            value: function up() {
              this.value++;

              if (this.value >= this.max) {
                this.value = this.min;
              }

              return this.value;
            }
          },
          down: {
            value: function down() {
              this.value--;

              if (this.value < this.min) {
                this.value = this.max;
              }

              return this.value;
            }
          },
          random: {
            value: function random() {
              this.value = math.ri(this.min, this.max);
              return this.value;
            }
          },
          drunk: {
            value: function drunk() {
              this.drunkWalk.min = this.min;
              this.drunkWalk.max = this.max;
              this.drunkWalk.value = this.value;
              this.value = this.drunkWalk.next();
              return this.value;
            }
          }
        });

        return Counter;
      }();

      module.exports = Counter;
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var math = __webpack_require__(5);

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var Interaction = _interopRequireWildcard(__webpack_require__(12));
      /**
      * Pan2D
      *
      * @description Interface for moving a sound around an array of speakers. Speaker locations can be customized. The interface calculates the closeness of the sound source to each speaker and returns that distance as a numeric value.
      *
      * @demo <span nexus-ui="pan2D"></span>
      *
      * @example
      * var pan2d = new Nexus.Pan2d('#target')
      *
      * @example
      * var pan2d = new Nexus.Pan2D('#target',{
      *   'size': [200,200],
      *   'range': 0.5,  // detection radius of each speaker
      *   'mode': 'absolute',   // 'absolute' or 'relative' sound movement
      *   'speakers': [  // the speaker [x,y] positions
      *       [0.5,0.2],
      *       [0.75,0.25],
      *       [0.8,0.5],
      *       [0.75,0.75],
      *       [0.5,0.8],
      *       [0.25,0.75]
      *       [0.2,0.5],
      *       [0.25,0.25]
      *   ]
      * })
      *
      * @output
      * change
      * Fires any time the "source" node's position changes. <br>
      * The event data is an array of the amplitudes (0-1), representing the level of each speaker (as calculated by its distance to the audio source).
      *
      * @outputexample
      * pan2d.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var Pan2D = function (_Interface) {
        function Pan2D() {
          _classCallCheck(this, Pan2D);

          var options = ["range"];
          var defaults = {
            size: [200, 200],
            range: 0.5,
            mode: "absolute",
            speakers: [[0.5, 0.2], [0.75, 0.25], [0.8, 0.5], [0.75, 0.75], [0.5, 0.8], [0.25, 0.75], [0.2, 0.5], [0.25, 0.25]]
          };

          _get(Object.getPrototypeOf(Pan2D.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.value = {
            x: new Step(0, 1, 0, 0.5),
            y: new Step(0, 1, 0, 0.5)
          };
          /**
          Absolute or relative mouse interaction. In "absolute" mode, the source node will jump to your mouse position on mouse click. In "relative" mode, it does not.
          */

          this.mode = this.settings.mode;
          this.position = {
            x: new Interaction.Handle(this.mode, "horizontal", [0, this.width], [this.height, 0]),
            y: new Interaction.Handle(this.mode, "vertical", [0, this.width], [this.height, 0])
          };
          this.position.x.value = this.value.x.normalized;
          this.position.y.value = this.value.y.normalized;
          /**
          An array of speaker locations. Update this with .moveSpeaker() or .moveAllSpeakers()
          */

          this.speakers = this.settings.speakers;
          /**
          Rewrite: The maximum distance from a speaker that the source node can be for it to be heard from that speaker. A low range (0.1) will result in speakers only playing when the sound is very close it. Default is 0.5 (half of the interface).
          */

          this.range = this.settings.range;
          /**
          The current levels for each speaker. This is calculated when a source node or speaker node is moved through interaction or programatically.
          */

          this.levels = [];
          this.init();
          this.calculateLevels();
          this.render();
        }

        _inherits(Pan2D, _Interface);

        _createClass(Pan2D, {
          buildInterface: {
            value: function buildInterface() {
              this.knob = svg.create("circle");
              this.element.appendChild(this.knob); // add speakers

              this.speakerElements = [];

              for (var i = 0; i < this.speakers.length; i++) {
                var speakerElement = svg.create("circle");
                this.element.appendChild(speakerElement);
                this.speakerElements.push(speakerElement);
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this._minDimension = Math.min(this.width, this.height);
              this.knobRadius = {
                off: ~~(this._minDimension / 100) * 3 + 5
              };
              this.knobRadius.on = this.knobRadius.off * 2;
              this.knob.setAttribute("cx", this.width / 2);
              this.knob.setAttribute("cy", this.height / 2);
              this.knob.setAttribute("r", this.knobRadius.off);

              for (var i = 0; i < this.speakers.length; i++) {
                var speakerElement = this.speakerElements[i];
                var speaker = this.speakers[i];
                speakerElement.setAttribute("cx", speaker[0] * this.width);
                speakerElement.setAttribute("cy", speaker[1] * this.height);
                speakerElement.setAttribute("r", this._minDimension / 20 + 5);
                speakerElement.setAttribute("fill-opacity", "0");
              }

              this.position.x.resize([0, this.width], [this.height, 0]);
              this.position.y.resize([0, this.width], [this.height, 0]); // next, need to
              // resize positions
              // calculate speaker distances

              this.calculateLevels();
              this.render();
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.element.style.backgroundColor = this.colors.fill;
              this.knob.setAttribute("fill", this.colors.mediumLight);

              for (var i = 0; i < this.speakers.length; i++) {
                var speakerElement = this.speakerElements[i];
                speakerElement.setAttribute("fill", this.colors.accent);
                speakerElement.setAttribute("stroke", this.colors.accent);
              }
            }
          },
          render: {
            value: function render() {
              this.knobCoordinates = {
                x: this.value.x.normalized * this.width,
                y: this.height - this.value.y.normalized * this.height
              };
              this.knob.setAttribute("cx", this.knobCoordinates.x);
              this.knob.setAttribute("cy", this.knobCoordinates.y);
            }
          },
          click: {
            value: function click() {
              this.position.x.anchor = this.mouse;
              this.position.y.anchor = this.mouse;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.position.x.update(this.mouse);
                this.position.y.update(this.mouse); // position.x and position.y are normalized
                // so are the levels
                // likely don't need this.value at all -- only used for drawing
                // not going to be a 'step' or 'min' and 'max' in this one.

                this.calculateLevels();
                this.emit("change", this.levels);
                this.render();
              }
            }
          },
          release: {
            value: function release() {
              this.render();
            }
          },
          normalized: {
            get: function () {
              return {
                x: this.value.x.normalized,
                y: this.value.y.normalized
              };
            }
          },
          calculateLevels: {
            value: function calculateLevels() {
              var _this = this;

              this.value.x.updateNormal(this.position.x.value);
              this.value.y.updateNormal(this.position.y.value);
              this.levels = [];
              this.speakers.forEach(function (s, i) {
                var distance = math.distance(s[0] * _this.width, s[1] * _this.height, _this.position.x.value * _this.width, (1 - _this.position.y.value) * _this.height);
                var level = math.clip(1 - distance / (_this.range * _this.width), 0, 1);

                _this.levels.push(level);

                _this.speakerElements[i].setAttribute("fill-opacity", level);
              });
            }
          },
          moveSource: {
            /**
            Move the audio source node and trigger the output event.
            @param x {number} New x location, normalized 0-1
            @param y {number} New y location, normalized 0-1
            */
            value: function moveSource(x, y) {
              var location = {
                x: x * this.width,
                y: y * this.height
              };
              this.position.x.update(location);
              this.position.y.update(location);
              this.calculateLevels();
              this.emit("change", this.levels);
              this.render();
            }
          },
          moveSpeaker: {
            /**
            Move a speaker node and trigger the output event.
            @param index {number} Index of the speaker to move
            @param x {number} New x location, normalized 0-1
            @param y {number} New y location, normalized 0-1
            */
            value: function moveSpeaker(index, x, y) {
              this.speakers[index] = [x, y];
              this.speakerElements[index].setAttribute("cx", x * this.width);
              this.speakerElements[index].setAttribute("cy", y * this.height);
              this.calculateLevels();
              this.emit("change", this.levels);
              this.render();
            }
            /**
            Set all speaker locations
            @param locations {Array} Array of speaker locations. Each item in the array should be an array of normalized x and y coordinates.
             setSpeakers(locations) {
             }
            */

          }
        });

        return Pan2D;
      }(Interface);

      module.exports = Pan2D;
      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = __webpack_require__(5);

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);
      /**
      * Tilt
      *
      * @description Device tilt sensor with 2 or 3 axes (depending on your device and browser).
      *
      * @demo <span nexus-ui='tilt'></span>
      *
      * @example
      * var tilt = new Nexus.Tilt('#target')
      *
      * @output
      * change
      * Fires at a regular interval, as long as this interface is active (see the interface's <i>.active</i> property)<br>
      * The event data is an <i>object</i> containing x (number) and y (number) properties which represent the current tilt state of the device.
      *
      * @outputexample
      * tilt.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Tilt = function (_Interface) {
        function Tilt() {
          _classCallCheck(this, Tilt);

          var options = ["value"];
          var defaults = {
            size: [80, 80]
          };

          _get(Object.getPrototypeOf(Tilt.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._active = true;
          this.init(); // add event listener for device orientation

          this.boundUpdate = this.update.bind(this); //	this.boundMozTilt = this.mozTilt.bind(this)

          if (window.DeviceOrientationEvent) {
            this.orientationListener = window.addEventListener("deviceorientation", this.boundUpdate, false);
          } else {
            this._active = false;
            this.colorInterface();
          }
          /*else if (window.OrientationEvent) {
          //	  	window.addEventListener('MozOrientation', this.boundMozTilt, false);
          } else {
          console.log('Not supported on your device or browser.');
          } */

        }

        _inherits(Tilt, _Interface);

        _createClass(Tilt, {
          buildInterface: {
            value: function buildInterface() {
              this.title = svg.create("text");
              this.circleX = svg.create("circle");
              this.circleY = svg.create("circle");
              this.circleZ = svg.create("circle");
              this.barX = svg.create("path");
              this.barY = svg.create("path");
              this.barZ = svg.create("path");
              this.barX2 = svg.create("path");
              this.barY2 = svg.create("path");
              this.barZ2 = svg.create("path");
              this.barX.setAttribute("opacity", "0.8");
              this.barY.setAttribute("opacity", "0.8");
              this.barZ.setAttribute("opacity", "0.8");
              this.barX2.setAttribute("opacity", "0.8");
              this.barY2.setAttribute("opacity", "0.8");
              this.barZ2.setAttribute("opacity", "0.8");
              this.circleX.setAttribute("cx", this.width * 3 / 12);
              this.circleX.setAttribute("cy", this.height * 3 / 4);
              this.circleX.setAttribute("r", this.height / 10);
              this.circleX.setAttribute("opacity", "0.4");
              this.circleY.setAttribute("cx", this.width * 6 / 12);
              this.circleY.setAttribute("cy", this.height * 3 / 4);
              this.circleY.setAttribute("r", this.height / 10);
              this.circleY.setAttribute("opacity", "0.4");
              this.circleZ.setAttribute("cx", this.width * 9 / 12);
              this.circleZ.setAttribute("cy", this.height * 3 / 4);
              this.circleZ.setAttribute("r", this.height / 10);
              this.circleZ.setAttribute("opacity", "0.4");
              this.barX.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barY.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barZ.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barX.setAttribute("fill", "none");
              this.barY.setAttribute("fill", "none");
              this.barZ.setAttribute("fill", "none");
              this.barX2.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barY2.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barZ2.setAttribute("stroke-width", Math.round(this.height / 30));
              this.barX2.setAttribute("fill", "none");
              this.barY2.setAttribute("fill", "none");
              this.barZ2.setAttribute("fill", "none");
              this.title.setAttribute("x", this.width / 2);
              this.title.setAttribute("y", this.height / 3 + 7);
              this.title.setAttribute("font-size", "15px");
              this.title.setAttribute("font-weight", "bold");
              this.title.setAttribute("letter-spacing", "2px");
              this.title.setAttribute("opacity", "0.7");
              this.title.setAttribute("text-anchor", "middle");
              this.title.textContent = "TILT";
              this.element.appendChild(this.circleX);
              this.element.appendChild(this.circleY);
              this.element.appendChild(this.circleZ);
              this.element.appendChild(this.barX);
              this.element.appendChild(this.barY);
              this.element.appendChild(this.barZ);
              this.element.appendChild(this.barX2);
              this.element.appendChild(this.barY2);
              this.element.appendChild(this.barZ2);
              this.element.appendChild(this.title);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              if (this._active) {
                this.element.style.backgroundColor = this.colors.accent;
                this.circleX.setAttribute("fill", this.colors.light);
                this.circleY.setAttribute("fill", this.colors.light);
                this.circleZ.setAttribute("fill", this.colors.light);
                this.circleX.setAttribute("stroke", this.colors.light);
                this.circleY.setAttribute("stroke", this.colors.light);
                this.circleZ.setAttribute("stroke", this.colors.light);
                this.barX.setAttribute("stroke", this.colors.light);
                this.barY.setAttribute("stroke", this.colors.light);
                this.barZ.setAttribute("stroke", this.colors.light);
                this.barX2.setAttribute("stroke", this.colors.light);
                this.barY2.setAttribute("stroke", this.colors.light);
                this.barZ2.setAttribute("stroke", this.colors.light);
                this.title.setAttribute("fill", this.colors.light);
              } else {
                this.element.style.backgroundColor = this.colors.fill;
                this.circleX.setAttribute("fill", this.colors.mediumLight);
                this.circleY.setAttribute("fill", this.colors.mediumLight);
                this.circleZ.setAttribute("fill", this.colors.mediumLight);
                this.circleX.setAttribute("stroke", this.colors.mediumLight);
                this.circleY.setAttribute("stroke", this.colors.mediumLight);
                this.circleZ.setAttribute("stroke", this.colors.mediumLight);
                this.barX.setAttribute("stroke", this.colors.mediumLight);
                this.barY.setAttribute("stroke", this.colors.mediumLight);
                this.barZ.setAttribute("stroke", this.colors.mediumLight);
                this.barX2.setAttribute("stroke", this.colors.mediumLight);
                this.barY2.setAttribute("stroke", this.colors.mediumLight);
                this.barZ2.setAttribute("stroke", this.colors.mediumLight);
                this.title.setAttribute("fill", this.colors.mediumLight);
              }
            }
          },
          update: {
            value: function update(v) {
              if (this._active) {
                var y = v.beta;
                var x = v.gamma;
                var z = v.alpha; // take the original -90 to 90 scale and normalize it 0-1

                x = math.scale(x, -90, 90, 0, 1);
                y = math.scale(y, -90, 90, 0, 1);
                z = math.scale(z, 0, 360, 0, 1);
                var handlePoints = {
                  start: Math.PI * 1.5,
                  end: math.clip(math.scale(x, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
                };
                var handle2Points = {
                  start: Math.PI * 2.5,
                  end: math.clip(math.scale(x, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
                };
                var handlePath = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handlePoints.start, handlePoints.end);
                var handle2Path = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handle2Points.start, handle2Points.end);
                this.barX.setAttribute("d", handlePath);
                this.barX2.setAttribute("d", handle2Path);
                handlePoints = {
                  start: Math.PI * 1.5,
                  end: math.clip(math.scale(y, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
                };
                handle2Points = {
                  start: Math.PI * 2.5,
                  end: math.clip(math.scale(y, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
                };
                handlePath = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handlePoints.start, handlePoints.end);
                handle2Path = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handle2Points.start, handle2Points.end);
                this.barY.setAttribute("d", handlePath);
                this.barY2.setAttribute("d", handle2Path);
                handlePoints = {
                  start: Math.PI * 1.5,
                  end: math.clip(math.scale(z, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
                };
                handle2Points = {
                  start: Math.PI * 2.5,
                  end: math.clip(math.scale(z, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
                };
                handlePath = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handlePoints.start, handlePoints.end);
                handle2Path = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handle2Points.start, handle2Points.end);
                this.barZ.setAttribute("d", handlePath);
                this.barZ2.setAttribute("d", handle2Path);
                /*
                 let pointsX = {
                  start: 0,
                  end: math.scale( x, 0, 1, 0, Math.PI*2 )
                };
                //  console.log(this.circleX.cx.baseVal.value);
                 let pathX = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value*2, pointsX.start, pointsX.end);
                 this.barX.setAttribute('d',pathX); */
                //this.textH.textContent = math.prune(x,2);
                //this.textV.textContent = math.prune(y,2);
                //
                //  this.circleX.setAttribute('opacity',x);
                //  this.circleY.setAttribute('opacity',y);
                //  this.circleZ.setAttribute('opacity',z);

                this.emit("change", {
                  x: x,
                  y: y,
                  z: z
                });
              }
            }
          },
          click: {
            value: function click() {
              if (window.DeviceOrientationEvent) {
                this.active = !this.active;
              }
            }
          },
          active: {
            /**
            Whether the interface is on (emitting values) or off (paused & not emitting values). Setting this property will update it.
            @type {boolean}
            */
            get: function () {
              return this._active;
            },
            set: function (on) {
              this._active = on;
              this.colorInterface();
            }
          },
          customDestroy: {
            value: function customDestroy() {
              window.removeEventListener("deviceorientation", this.boundUpdate, false);
            }
          }
        });

        return Tilt;
      }(Interface);

      module.exports = Tilt;
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = __webpack_require__(5);

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);
      /**
      * Multislider
      *
      * @description Multislider
      *
      * @demo <span nexus-ui="multislider"></span>
      *
      * @example
      * var multislider = new Nexus.Multislider('#target')
      *
      * @example
      * var multislider = new Nexus.Multislider('#target',{
      *  'size': [200,100],
      *  'numberOfSliders': 5,
      *  'min': 0,
      *  'max': 1,
      *  'step': 0,
      *  'candycane': 3,
      *  'values': [0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1],
      *  'smoothing': 0,
      *  'mode': 'bar'  // 'bar' or 'line'
      *})
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is an object containing <i>index</i> and <i>value</i> properties
      *
      * @outputexample
      * multislider.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var Multislider = function (_Interface) {
        function Multislider() {
          _classCallCheck(this, Multislider);

          var options = ["value"];
          var defaults = {
            size: [200, 100],
            numberOfSliders: 5,
            min: 0,
            max: 1,
            step: 0,
            candycane: 3,
            values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
            smoothing: 0,
            mode: "bar" // 'bar', 'line'

          };

          _get(Object.getPrototypeOf(Multislider.prototype), "constructor", this).call(this, arguments, options, defaults);

          this._numberOfSliders = this.settings.numberOfSliders;
          this._min = this.settings.min;
          this._max = this.settings.max;
          this._step = this.settings.step;
          this._mode = this.settings.mode;
          /**
          The current values of the slider. NOTE: Use this only to get the current values. Setting this array will not update the multislider. To set the multislider's values, use setSlider() or setAllSliders()
          @type {Array}
          */

          this.values = this.settings.values;
          this.candycane = this.settings.candycane;
          this.sliderWidth = this.width / this.values.length;
          /**
          Applies a simple low-pass filter to the multislider as it is interacted with. A smoothing of 0 will be no smoothing. A smoothing of 1 will smooth 1 slider on each side of the interaction. A smoothing of 2 will smooth 2 sliders on each side, and so on.
          @type {Number}
          */

          this.smoothing = this.settings.smoothing;
          this.init();
          this.render();
        }

        _inherits(Multislider, _Interface);

        _createClass(Multislider, {
          buildInterface: {
            value: function buildInterface() {
              if (this._mode == "line") {
                this.line = svg.create("polyline");
                this.line.setAttribute("stroke-width", 2);
                this.line.setAttribute("fill", "none");
                this.element.appendChild(this.line);
                this.fill = svg.create("polyline");
                this.fill.setAttribute("fill-opacity", "0.2");
                this.element.appendChild(this.fill);
                this.nodes = [];
                this.values.forEach(function (value, index) {
                  var node = svg.create("circle");
                  node.setAttribute("cx", this.getX(index));
                  node.setAttribute("cy", this.getY(value));
                  this.element.appendChild(node);
                  this.nodes.push(node);
                }.bind(this));
              } else {
                this.bars = [];
                this.caps = [];
                this.values.forEach(function (value, index) {
                  var bar = svg.create("rect");
                  var x = this.getBarX(index);
                  var y = this.getY(value);
                  bar.setAttribute("x", x - 0.1);
                  bar.setAttribute("y", y);
                  bar.setAttribute("width", this.sliderWidth + 0.2);
                  bar.setAttribute("height", this.height);
                  bar.setAttribute("opacity", 1 - (index % this.candycane + 1) / (this.candycane + 1));
                  this.element.appendChild(bar);
                  this.bars.push(bar);
                  var cap = svg.create("rect");
                  cap.setAttribute("x", x - 0.1);
                  cap.setAttribute("y", y);
                  cap.setAttribute("width", this.sliderWidth + 0.2);
                  cap.setAttribute("height", 5);
                  this.element.appendChild(cap);
                  this.caps.push(cap);
                }.bind(this));
              }
            }
          },
          getBarX: {
            value: function getBarX(index) {
              return this.getX(index) - this.sliderWidth / 2;
            }
          },
          getX: {
            value: function getX(index) {
              //return Math.floor( index * this.sliderWidth + this.sliderWidth/2 );
              return index * this.sliderWidth + this.sliderWidth / 2;
            }
          },
          getY: {
            value: function getY(value) {
              return math.scale(value, this._min, this._max, this.height, 0); //(1 - value) * this.height;
            }
          },
          getValueFromY: {
            value: function getValueFromY(y) {
              var scaleAdjusted = math.scale(y, this.height, 0, this._min, this._max);
              return this.adjustValueToStep(scaleAdjusted);
            }
          },
          getIndexFromX: {
            value: function getIndexFromX(x) {
              return math.clip(Math.floor(x / this.width * this.values.length), 0, this.values.length - 1);
            }
          },
          adjustValueToStep: {
            value: function adjustValueToStep(value) {
              if (!this._step) {
                return value;
              }

              var offset = value % this._step;
              value = value - value % this._step;

              if (offset > this._step / 2) {
                value += this._step;
              }

              return value;
            }
          },
          adjustAllValues: {
            value: function adjustAllValues() {
              this.values.forEach(function (value, index) {
                value = this.adjustValueToStep(value);
                this.values[index] = math.clip(value, this._min, this._max);
              }.bind(this));
            }
          },
          getNormalizedValues: {
            value: function getNormalizedValues() {
              this.normalizedValues = [];
              this.values.forEach(function (value) {
                this.normalizedValues.push(math.scale(value, this._min, this._max, 0, 1));
              }.bind(this));
            }
          },
          colorInterface: {
            value: function colorInterface() {
              var _this = this;

              this.element.style.backgroundColor = this.colors.fill;

              if (this._mode == "line") {
                this.line.setAttribute("stroke", this.colors.accent);
                this.fill.setAttribute("fill", this.colors.accent);
                this.nodes.forEach(function (node) {
                  node.setAttribute("fill", _this.colors.accent);
                });
              } else {
                this.bars.forEach(function (bar) {
                  bar.setAttribute("fill", _this.colors.accent);
                });
                this.caps.forEach(function (cap) {
                  cap.setAttribute("fill", _this.colors.accent);
                });
              }
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.sliderWidth = this.width / this.values.length;

              if (this._mode == "line") {
                this.nodes.forEach(function (node) {
                  var r = ~~(Math.min(this.width, this.height) / 50) + 2;
                  r = Math.min(this.sliderWidth, r);
                  node.setAttribute("r", r);
                }.bind(this));
              }

              this.render();
            }
          },
          render: {
            value: function render() {
              var _this = this;

              if (this._mode == "line") {
                (function () {
                  var data = "0 " + _this.getY(_this.values[0]) + ", ";

                  _this.values.forEach(function (value, index) {
                    var x = _this.getX(index);

                    var y = _this.getY(value);

                    data += x + " " + y + ", ";

                    _this.nodes[index].setAttribute("cx", _this.getX(index));

                    _this.nodes[index].setAttribute("cy", _this.getY(value));
                  });

                  data += _this.width + " " + _this.getY(_this.values[_this.values.length - 1]);

                  _this.line.setAttribute("points", data); // fill data
                  // add bottom corners


                  data += ", " + _this.width + " " + _this.height + ", ";
                  data += "0 " + _this.height;

                  _this.fill.setAttribute("points", data);
                })();
              } else {
                this.values.forEach(function (value, index) {
                  _this.bars[index].setAttribute("y", _this.getY(value));

                  _this.caps[index].setAttribute("y", _this.getY(value));
                });
              }
            }
          },
          click: {
            value: function click() {
              this.hasMoved = false;
              this.previousSlider = false;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.mouse.x = math.clip(this.mouse.x, 0, this.width);
                this.mouse.y = math.clip(this.mouse.y, 0, this.height);
                this.hasMoved = true;
                this.selectedSlider = this.getIndexFromX(this.mouse.x);
                this.values[this.selectedSlider] = this.getValueFromY(this.mouse.y);
                /* handle interpolation for in-between sliders */

                if (this.previousSlider !== false) {
                  var distance = Math.abs(this.previousSlider - this.selectedSlider);

                  if (distance > 1) {
                    var low = Math.min(this.previousSlider, this.selectedSlider);
                    var high = Math.max(this.previousSlider, this.selectedSlider);
                    var lowValue = this.values[low];
                    var highValue = this.values[high];

                    for (var _i = low; _i < high; _i++) {
                      this.values[_i] = math.interp((_i - low) / distance, lowValue, highValue);
                      this.values[_i] = this.adjustValueToStep(this.values[_i]);
                    }
                  }
                }

                if (this.smoothing > 0) {
                  for (var i = 1; i <= this.smoothing; i++) {
                    var downCenter = this.selectedSlider - i;
                    var upCenter = this.selectedSlider + i;

                    if (downCenter >= 1) {
                      var downLowerNeighbor = downCenter - 1 >= 0 ? downCenter - 1 : 0;
                      var downUpperNeighbor = downCenter + 1;
                      this.values[downCenter] = (this.values[downLowerNeighbor] + this.values[downUpperNeighbor]) / 2;
                      this.values[downCenter] = this.adjustValueToStep(this.values[downCenter]);
                    }

                    if (upCenter < this.values.length - 1) {
                      var upLowerNeighbor = upCenter - 1;
                      var upUpperNeighbor = upCenter + 1 < this.values.length ? upCenter + 1 : this.values.length - 1;
                      this.values[upCenter] = (this.values[upLowerNeighbor] + this.values[upUpperNeighbor]) / 2;
                      this.values[upCenter] = this.adjustValueToStep(this.values[upCenter]);
                    }
                  }
                }

                this.previousSlider = this.selectedSlider;
                this.emit("change", this.values);
                this.render();
              }
            }
          },
          scan: {
            // would be a cool API call to have for later...
            value: function scan() {}
          },
          update: {
            value: function update(index, value) {
              this.values[index] = this.adjustValueToStep(value);
              this.emit("change", {
                index: index,
                value: value
              });
            }
          },
          numberOfSliders: {
            /**
            Get the number of sliders
            @type {Number}
            */
            get: function () {
              return this.values.length;
            }
          },
          min: {
            /**
            Lower limit of the multislider's output range
            @type {number}
            @example multislider.min = 1000;
            */
            get: function () {
              return this._min;
            },
            set: function (v) {
              this._min = v;
              this.adjustAllValues();
              this.render();
            }
          },
          max: {
            /**
            Upper limit of the multislider's output range
            @type {number}
            @example multislider.max = 1000;
            */
            get: function () {
              return this._max;
            },
            set: function (v) {
              this._max = v;
              this.adjustAllValues();
              this.render();
            }
          },
          step: {
            /**
            The increment that the multislider's value changes by.
            @type {number}
            @example multislider.step = 5;
            */
            get: function () {
              return this._step;
            },
            set: function (v) {
              this._step = v;
              this.adjustAllValues();
              this.render();
            }
          },
          setSlider: {
            /**
            Set the value of an individual slider
            @param index {number} Slider index
            @param value {number} New slider value
            @example
            // Set the first slider to value 0.5
            multislider.setSlider(0,0.5)
            */
            value: function setSlider(index, value) {
              this.values[index] = this.adjustValueToStep(value);
              this.values[index] = math.clip(this.values[index], this._min, this._max);
              this.emit("change", {
                index: index,
                value: value
              });
            }
          },
          setAllSliders: {
            /**
            Set the value of all sliders at once. If the size of the input array does not match the current number of sliders, the value array will repeat until all sliders have been set. I.e. an input array of length 1 will set all sliders to that value.
            @param values {Array} All slider values
            @example
            multislider.setAllSliders([0.2,0.3,0.4,0.5,0.6])
            */
            value: function setAllSliders(values) {
              var previousLength = this.values.length;
              var newLength = values.length;
              this.values = values;
              this.adjustAllValues();

              if (previousLength != newLength) {
                this.empty();
                this.buildInterface();
                this.colorInterface();
              }

              this.sizeInterface();
            }
          }
        });

        return Multislider;
      }(Interface);

      module.exports = Multislider;
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var svg = __webpack_require__(4);

      var math = __webpack_require__(5);

      var Interface = __webpack_require__(6);

      var Step = __webpack_require__(11);

      var Interaction = _interopRequireWildcard(__webpack_require__(12));
      /**
      * Pan
      *
      * @description Stereo crossfader.
      *
      * @demo <span nexus-ui="pan"></span>
      *
      * @example
      * var pan = new Nexus.Pan('#target')
      *
      * @output
      * change
      * Fires any time the interface's value changes. <br>
      * The event data is an object containing the interface's <i>value</i> (-1 to 1), as well as <i>L</i> and <i>R</i> amplitude values (0-1) for left and right speakers, calculated by a square-root crossfade algorithm.
      *
      * @outputexample
      * pan.on('change',function(v) {
      *   console.log(v);
      * })
      *
      *
      */


      var Pan = function (_Interface) {
        function Pan() {
          _classCallCheck(this, Pan);

          var options = ["scale", "value"];
          var defaults = {
            size: [120, 20],
            orientation: "horizontal",
            mode: "relative",
            scale: [-1, 1],
            step: 0,
            value: 0,
            hasKnob: true
          };

          _get(Object.getPrototypeOf(Pan.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.orientation = this.settings.orientation;
          this.mode = this.settings.mode;
          this.hasKnob = this.settings.hasKnob; // this.step should eventually be get/set
          // updating it will update the _value step model

          this.step = this.settings.step; // float

          this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
          this.init();
          this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
          this.position.value = this._value.normalized;
          this.value = this._value.value;
          this.emit("change", this.value);
        }

        _inherits(Pan, _Interface);

        _createClass(Pan, {
          buildInterface: {
            value: function buildInterface() {
              this.bar = svg.create("rect");
              this.knob = svg.create("circle");
              this.element.appendChild(this.bar);
              this.element.appendChild(this.knob);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              if (this.position) {
                this.position.resize([0, this.width], [this.height, 0]);
              }

              if (this.width < this.height) {
                this.orientation = "vertical";
              } else {
                this.orientation = "horizontal";
              }

              var x = undefined,
                  y = undefined,
                  w = undefined,
                  h = undefined,
                  barOffset = undefined,
                  cornerRadius = undefined;
              this.knobData = {
                level: 0,
                r: 0
              };

              if (this.orientation === "vertical") {
                this.thickness = this.width / 2;
                x = this.width / 2;
                y = 0;
                w = this.thickness;
                h = this.height;
                this.knobData.r = this.thickness * 0.8;
                this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
                barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
                cornerRadius = w / 2;
              } else {
                this.thickness = this.height / 2;
                x = 0;
                y = this.height / 2;
                w = this.width;
                h = this.thickness;
                this.knobData.r = this.thickness * 0.8;
                this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
                barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
                cornerRadius = h / 2;
              }

              this.bar.setAttribute("x", x);
              this.bar.setAttribute("y", y);
              this.bar.setAttribute("transform", barOffset);
              this.bar.setAttribute("rx", cornerRadius); // corner radius

              this.bar.setAttribute("ry", cornerRadius);
              this.bar.setAttribute("width", w);
              this.bar.setAttribute("height", h);

              if (this.orientation === "vertical") {
                this.knob.setAttribute("cx", x);
                this.knob.setAttribute("cy", this.knobData.level);
              } else {
                this.knob.setAttribute("cx", this.knobData.level);
                this.knob.setAttribute("cy", y);
              }

              this.knob.setAttribute("r", this.knobData.r);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.bar.setAttribute("fill", this.colors.fill);
              this.knob.setAttribute("fill", this.colors.accent);

              if (!this.hasKnob) {
                this.knob.setAttribute("fill", "transparent");
              }
            }
          },
          render: {
            value: function render() {
              if (!this.clicked) {
                this.knobData.r = this.thickness * 0.75;
              }

              this.knob.setAttribute("r", this.knobData.r);

              if (this.orientation === "vertical") {
                this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
                this.knob.setAttribute("cy", this.height - this.knobData.level);
              } else {
                this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
                this.knob.setAttribute("cx", this.knobData.level);
              }
            }
          },
          click: {
            value: function click() {
              this.knobData.r = this.thickness * 0.9;
              this.position.anchor = this.mouse;
              this.move();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.position.update(this.mouse);
                this.value = this._value.updateNormal(this.position.value);
                this.emit("change", {
                  value: this.value,
                  L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
                  R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
                });
              }
            }
          },
          release: {
            value: function release() {
              this.render();
            }
          },
          value: {
            /**
            The position of crossfader, from -1 (left) to 1 (right). Setting this value updates the interface and triggers the output event.
            @type {number}
            */
            get: function () {
              return this._value.value;
            },
            set: function (value) {
              this._value.update(value);

              this.position.value = this._value.normalized;
              this.emit("change", {
                value: this.value,
                L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
                R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
              });
              this.render();
            }
          },
          normalized: {
            get: function () {
              return this._value.normalized;
            }
          }
        });

        return Pan;
      }(Interface);

      module.exports = Pan;
      /***/
    },
    /* 33 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = __webpack_require__(5);

      var svg = __webpack_require__(4);

      var Interface = __webpack_require__(6);

      var Point = function Point(point, envelope) {
        this.x = point.x;
        this.y = point.y;
        this.xMin = point.xMin || 0;
        this.xMax = point.xMax || 1;
        this.yMin = point.yMin || 0;
        this.yMax = point.yMax || 1;
        this.envelope = envelope;
        this.element = svg.create("circle");
        this.element.setAttribute("fill", this.envelope.colors.accent);
        this.envelope.element.appendChild(this.element);

        this.resize = function () {
          var r = ~~(Math.min(this.envelope.width, this.envelope.height) / 50) + 2;
          this.element.setAttribute("r", r);
        };

        this.move = function (x, y) {
          this.x = x || x === 0 ? x : this.x;
          this.y = y || y === 0 ? y : this.y;

          if (this.envelope.nodes.indexOf(this) >= 0) {
            var prevIndex = this.envelope.nodes.indexOf(this) - 1;
            var nextIndex = this.envelope.nodes.indexOf(this) + 1;
            var prevNode = this.envelope.nodes[prevIndex];
            var nextNode = this.envelope.nodes[nextIndex];
            var lowX = prevIndex >= 0 ? prevNode.x : 0;
            lowX = lowX < this.xMin ? this.xMin : lowX;
            var highX = nextIndex < this.envelope.nodes.length ? nextNode.x : 1;
            highX = highX > this.xMax ? this.xMax : highX;

            if (this.x < lowX) {
              this.x = lowX;
            }

            if (this.x > highX) {
              this.x = highX;
            }

            if (this.y < this.yMin) {
              this.y = this.yMin;
            }

            if (this.y > this.yMax) {
              this.y = this.yMax;
            }
          }

          this.location = this.getCoordinates();
          this.element.setAttribute("cx", this.location.x);
          this.element.setAttribute("cy", this.location.y);
        };

        this.getCoordinates = function () {
          return {
            x: this.x * this.envelope.width,
            y: (1 - this.y) * this.envelope.height
          };
        };

        this.move(this.x, this.y, true);
        this.resize();

        this.destroy = function () {
          this.envelope.element.removeChild(this.element);
          this.envelope.nodes.splice(this.envelope.nodes.indexOf(this), 1);
        };
      };
      /**
      * Envelope
      *
      * @description Interactive linear ramp visualization.
      *
      * @demo <span nexus-ui="envelope"></span>
      *
      * @example
      * var envelope = new Nexus.Envelope('#target')
      *
      * @example
      * var envelope = new Nexus.Envelope('#target',{
      *   'size': [300,150],
      *   'noNewPoints': false,
      *   'points': [
      *     {
      *       x: 0.1,
      *       y: 0.4
      *     },
      *     {
      *       x: 0.35,
      *       y: 0.6
      *     },
      *     {
      *       x: 0.65,
      *       y: 0.2
      *     },
      *     {
      *       x: 0.9,
      *       y: 0.4
      *     },
      *   ]
      * })
      *
      * @output
      * change
      * Fires any time a node is moved. <br>
      * The event data is an array of point locations. Each item in the array is an object containing <i>x</i> and <i>y</i> properties describing the location of a point on the envelope.
      *
      * @outputexample
      * envelope.on('change',function(v) {
      *   console.log(v);
      * })
      *
      */


      var Envelope = function (_Interface) {
        function Envelope() {
          _classCallCheck(this, Envelope);

          var options = ["value"];
          var defaults = {
            size: [300, 150],
            noNewPoints: false,
            points: [{
              x: 0.1,
              y: 0.4
            }, {
              x: 0.35,
              y: 0.6
            }, {
              x: 0.65,
              y: 0.2
            }, {
              x: 0.9,
              y: 0.4
            }]
          };

          _get(Object.getPrototypeOf(Envelope.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.points = this.settings.points;
          this.nodes = [];
          this.selected = false;
          this.init();
        }

        _inherits(Envelope, _Interface);

        _createClass(Envelope, {
          buildInterface: {
            value: function buildInterface() {
              var _this = this;

              this.points.forEach(function (point) {
                var node = new Point(point, _this);

                _this.nodes.push(node);
              });
              this.sortPoints();
              this.line = svg.create("polyline");
              this.line.setAttribute("stroke-width", 2);
              this.line.setAttribute("fill", "none");
              this.element.appendChild(this.line);
              this.fill = svg.create("polyline");
              this.fill.setAttribute("fill-opacity", "0.2");
              this.element.appendChild(this.fill);
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              for (var i = 0; i < this.nodes.length; i++) {
                this.nodes[i].resize();
                this.nodes[i].move();
              }

              this.render();
            }
          },
          colorInterface: {
            value: function colorInterface() {
              var _this = this;

              this.element.style.backgroundColor = this.colors.fill;
              this.line.setAttribute("stroke", this.colors.accent);
              this.fill.setAttribute("fill", this.colors.accent);
              this.nodes.forEach(function (node) {
                node.element.setAttribute("fill", _this.colors.accent);
              });
            }
          },
          render: {
            value: function render() {
              //  this.nodes[this.selected].move( this.points )
              this.calculatePath();
            }
          },
          calculatePoints: {
            value: function calculatePoints() {
              var _this = this;

              this.points = [];
              this.nodes.forEach(function (node) {
                _this.points.push({
                  x: node.x,
                  y: node.y
                });
              });
            }
          },
          calculatePath: {
            value: function calculatePath() {
              //stroke data
              var data = "0 " + this.nodes[0].location.y + ", "; // data should be re-ordered based on x location.
              // whatever function adds a node should add it at the right index

              this.nodes.forEach(function (node) {
                //  let location = node.getCoordinates();
                data += node.location.x + " " + node.location.y + ", ";
              }); //  data += point.x*this.width+' '+ point.y*this.height+', ';

              data += this.width + " " + this.nodes[this.nodes.length - 1].location.y;
              this.line.setAttribute("points", data); // fill data
              // add bottom corners

              data += ", " + this.width + " " + this.height + ", ";
              data += "0 " + this.height;
              this.fill.setAttribute("points", data);
            }
          },
          click: {
            value: function click() {
              // find nearest node and set this.selected (index)
              this.hasMoved = false;
              this.selected = this.findNearestNode();
              this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
              this.scaleNode(this.selected); // must do this b/c new node may have been created

              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          },
          move: {
            value: function move() {
              if (this.clicked) {
                this.mouse.x = math.clip(this.mouse.x, 0, this.width);
                this.hasMoved = true;
                this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
                this.scaleNode(this.selected);
                this.calculatePoints();
                this.emit("change", this.points);
                this.render();
              }
            }
          },
          release: {
            value: function release() {
              if (!this.hasMoved) {
                this.nodes[this.selected].destroy();
              }

              this.calculatePoints();
              this.emit("change", this.points);
              this.render(); // reset this.selected

              this.selected = null;
            }
          },
          findNearestNode: {
            value: function findNearestNode() {
              var nearestIndex = null; // set this unreasonably high so that every distance will be lower than it.

              var nearestDist = 10000;
              var before = false;
              var x = this.mouse.x / this.width;
              var y = 1 - this.mouse.y / this.height;
              var nodes = this.nodes;

              for (var i = 0; i < nodes.length; i++) {
                // calculate the distance from mouse to this node using pythagorean theorem
                var distance = Math.sqrt(Math.pow(nodes[i].x - x, 2) + Math.pow(nodes[i].y - y, 2)); // if this distance is less than the previous shortest distance, use this index

                if (distance < nearestDist) {
                  nearestDist = distance;
                  nearestIndex = i;
                  before = x > nodes[i].x;
                }
              } // if not very close to any node, create a node


              if (!this.settings.noNewPoints && nearestDist > 0.07) {
                nearestIndex = this.getIndexFromX(this.mouse.x / this.width);
                this.nodes.splice(nearestIndex, 0, new Point({
                  x: this.mouse.x / this.width,
                  y: 1 - this.mouse.y / this.height
                }, this));
                this.hasMoved = true;
              }

              return nearestIndex;
            }
          },
          getIndexFromX: {
            value: function getIndexFromX(x) {
              var _this = this;

              var index = 0;
              this.nodes.forEach(function (node, i) {
                if (_this.nodes[i].x <= x) {
                  index = i + 1;
                }
              });
              return index;
            }
          },
          scaleNode: {
            value: function scaleNode(i) {
              var clippedX = math.clip(this.nodes[i].x, 0, 1);
              var clippedY = math.clip(this.nodes[i].y, 0, 1);
              this.nodes[i].move(clippedX, clippedY);
            }
          },
          sortPoints: {
            /**
            Sort the this.points array from left-most point to right-most point. You should not regularly need to use this, however it may be useful if the points get unordered.
            */
            value: function sortPoints() {
              this.nodes.sort(function (a, b) {
                return a.x > b.x;
              });
            }
          },
          addPoint: {
            /**
            Add a breakpoint on the envelope.
            @param x {number} x location of the point, normalized (0-1)
            @param y {number} y location of the point, normalized (0-1)
            */
            value: function addPoint(x, y) {
              var index = this.nodes.length;
              this.sortPoints();

              for (var i = 0; i < this.nodes.length; i++) {
                if (x < this.nodes[i].x) {
                  index = i;
                  break;
                }
              }

              this.nodes.splice(index, 0, new Point({
                x: x,
                y: y
              }, this));
              this.scaleNode(index);
              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          },
          scan: {
            /**
            Find the level at a certain x location on the envelope.
            @param x {number} The x location to find the level of, normalized 0-1
            */
            value: function scan(x) {
              // find surrounding points
              var nextIndex = this.getIndexFromX(x);
              var priorIndex = nextIndex - 1;

              if (priorIndex < 0) {
                priorIndex = 0;
              }

              if (nextIndex >= this.nodes.length) {
                nextIndex = this.nodes.length - 1;
              }

              var priorPoint = this.nodes[priorIndex];
              var nextPoint = this.nodes[nextIndex];
              var loc = math.scale(x, priorPoint.x, nextPoint.x, 0, 1);
              var value = math.interp(loc, priorPoint.y, nextPoint.y);
              this.emit("scan", value);
              return value;
            }
          },
          movePoint: {
            /**
            Move a breakpoint on the envelope.
            @param index {number} The index of the breakpoint to move
            @param x {number} New x location, normalized 0-1
            @param y {number} New y location, normalized 0-1
            */
            value: function movePoint(index, x, y) {
              this.nodes[index].move(x, y);
              this.scaleNode(index);
              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          },
          adjustPoint: {
            /**
            Move a breakpoint on the envelope by a certain amount.
            @param index {number} The index of the breakpoint to move
            @param xOffset {number} X displacement, normalized 0-1
            @param yOffset {number} Y displacement, normalized 0-1
            */
            value: function adjustPoint(index, xOffset, yOffset) {
              this.nodes[index].move(this.nodes[index].x + xOffset, this.nodes[index].y + yOffset);
              this.scaleNode(index);
              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          },
          destroyPoint: {
            /**
            Remove a breakpoint from the envelope.
            @param index {number} Index of the breakpoint to remove
            */
            value: function destroyPoint(index) {
              this.nodes[index].destroy();
              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          },
          setPoints: {
            /**
            Remove all existing breakpoints and add an entirely new set of breakpoints.
            @param allPoints {array} An array of objects with x/y properties (normalized 0-1). Each object in the array specifices the x/y location of a new breakpoint to be added.
            */
            value: function setPoints(allPoints) {
              var _this = this;

              while (this.nodes.length) {
                this.nodes[0].destroy();
              }

              allPoints.forEach(function (point) {
                _this.addPoint(point.x, point.y);
              });
              this.calculatePoints();
              this.emit("change", this.points);
              this.render();
            }
          }
        });

        return Envelope;
      }(Interface);

      module.exports = Envelope;
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var dom = __webpack_require__(7); //let math = require('../util/math');


      var Interface = __webpack_require__(6);
      /**
      * Spectrogram
      *
      * @description Audio spectrum visualization
      *
      * @demo <span nexus-ui="spectrogram"></span>
      *
      * @example
      * var spectrogram = new Nexus.Spectrogram('#target')
      *
      * @example
      * var spectrogram = new Nexus.Spectrogram('#target',{
      *   'size': [300,150]
      * })
      *
      * @output
      * &nbsp;
      * No events
      *
      */


      var context = __webpack_require__(1).context;

      var Spectrogram = function (_Interface) {
        function Spectrogram() {
          _classCallCheck(this, Spectrogram);

          var options = ["scale", "value"];
          var defaults = {
            size: [300, 150]
          };

          _get(Object.getPrototypeOf(Spectrogram.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.context = context(); // jshint ignore:line

          this.analyser = this.context.createAnalyser();
          this.analyser.fftSize = 2048;
          this.bufferLength = this.analyser.frequencyBinCount;
          this.dataArray = new Uint8Array(this.bufferLength);
          this.active = true;
          this.source = false;
          this.init();
        }

        _inherits(Spectrogram, _Interface);

        _createClass(Spectrogram, {
          buildFrame: {
            value: function buildFrame() {
              this.canvas = new dom.SmartCanvas(this.parent);
              this.element = this.canvas.element;
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.canvas.resize(this.width, this.height);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.canvas.element.style.backgroundColor = this.colors.fill;
            }
          },
          render: {
            value: function render() {
              if (this.active) {
                requestAnimationFrame(this.render.bind(this));
              }

              this.analyser.getByteFrequencyData(this.dataArray);
              this.canvas.context.fillStyle = this.colors.fill;
              this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);

              if (this.source && this.dataArray) {
                //console.log(this.dataArray);
                var barWidth = this.canvas.element.width / this.bufferLength;
                var barHeight = undefined;
                var x = 0;
                var definition = this.canvas.element.width / 50;

                for (var i = 0; i < this.bufferLength; i = i + definition) {
                  barHeight = Math.max.apply(null, this.dataArray.subarray(i, i + definition));
                  barHeight /= 255;
                  barHeight *= this.canvas.element.height;
                  this.canvas.context.fillStyle = this.colors.accent;
                  this.canvas.context.fillRect(x, this.canvas.element.height - barHeight, barWidth * definition, barHeight);
                  x += barWidth * definition;
                }
              }
            }
          },
          connect: {
            /**
            Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
            @param node {AudioNode} The audio node to visualize
            @example Nexus.context = Tone.context // or another audio context you have created
            spectrogram.connect( Tone.Master );
            */
            value: function connect(node) {
              if (this.source) {
                this.disconnect();
              }

              this.source = node;
              this.source.connect(this.analyser);
              this.render();
            }
          },
          disconnect: {
            /**
            Stop visualizing the source node and disconnect it.
            */
            value: function disconnect() {
              this.source.disconnect(this.analyser);
              this.source = null;
            }
          },
          click: {
            value: function click() {
              this.active = !this.active;
              this.render();
            }
          },
          customDestroy: {
            value: function customDestroy() {
              this.active = false;
            }
          }
        });

        return Spectrogram;
      }(Interface);

      module.exports = Spectrogram;
      /***/
    },
    /* 35 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var dom = __webpack_require__(7);

      var math = __webpack_require__(5);

      var Interface = __webpack_require__(6);
      /**
      * Meter
      *
      * @description Stereo decibel meter
      *
      * @demo <span nexus-ui="meter"></span>
      *
      * @example
      * var meter = new Nexus.Meter('#target')
      *
      * @example
      * var meter = new Nexus.Meter('#target',{
      *   size: [75,75]
      * })
      *
      * @output
      * &nbsp;
      * No events
      *
      */


      var context = __webpack_require__(1).context;

      var Meter = function (_Interface) {
        function Meter() {
          _classCallCheck(this, Meter);

          var options = ["scale", "value"];
          var defaults = {
            size: [30, 100]
          };

          _get(Object.getPrototypeOf(Meter.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.context = context(); // jshint ignore:line

          this.channels = 2;
          this.splitter = this.context.createChannelSplitter(this.channels);
          this.analysers = [];

          for (var i = 0; i < this.channels; i++) {
            var analyser = this.context.createAnalyser();
            this.splitter.connect(analyser, i);
            analyser.fftSize = 1024;
            analyser.smoothingTimeConstant = 1;
            this.analysers.push(analyser);
          }

          this.bufferLength = this.analysers[0].frequencyBinCount;
          this.dataArray = new Float32Array(this.bufferLength);
          /*
              // add linear gradient
              var grd = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
              // light blue
              grd.addColorStop(0, '#000');
              grd.addColorStop(0.2, '#bbb');
              grd.addColorStop(0.4, '#d18');
              // dark blue
              grd.addColorStop(1, '#d18');
              canvasCtx.fillStyle = grd; */

          this.active = true;
          this.db = -Infinity;
          this.init();
          this.meterWidth = this.canvas.element.width / this.channels;
          this.render();
        }

        _inherits(Meter, _Interface);

        _createClass(Meter, {
          buildFrame: {
            value: function buildFrame() {
              this.canvas = new dom.SmartCanvas(this.parent);
              this.element = this.canvas.element;
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.canvas.resize(this.width, this.height);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.canvas.element.style.backgroundColor = this.colors.fill;
            }
          },
          render: {
            value: function render() {
              if (this.active) {
                requestAnimationFrame(this.render.bind(this));
              }

              this.canvas.context.fillStyle = this.colors.fill;
              this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);

              for (var i = 0; i < this.analysers.length; i++) {
                if (this.source) {
                  this.analysers[i].getFloatTimeDomainData(this.dataArray);
                  var rms = 0;

                  for (var _i = 0; _i < this.dataArray.length; _i++) {
                    rms += this.dataArray[_i] * this.dataArray[_i];
                  }

                  rms = Math.sqrt(rms / this.dataArray.length);
                  this.db = 20 * Math.log10(rms);
                } else if (this.db > -200 && this.db !== -Infinity) {
                  this.db -= 1;
                } else {
                  this.db = -Infinity;
                } //console.log(db)


                if (this.db > -70) {
                  var linear = math.normalize(this.db, -70, 5);
                  var exp = linear * linear;
                  var y = math.scale(exp, 0, 1, this.element.height, 0);
                  this.canvas.context.fillStyle = this.colors.accent;
                  this.canvas.context.fillRect(this.meterWidth * i, y, this.meterWidth, this.canvas.element.height - y); //console.log("rendering...")
                }
              }
            }
          },
          connect: {
            /**
            Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
            @param node {AudioNode} The audio node to visualize
            @param channels {number} (optional) The number of channels in the source node to watch. If not specified, the interface will look for a .channelCount property on the input node. If it does not exist, the interface will default to 1 channel.
            @example Nexus.context = Tone.context // or another audio context you have created
            meter.connect( Tone.Master, 2 );
            */
            value: function connect(node, channels) {
              if (this.source) {
                this.disconnect();
              } //this.dummy.disconnect(this.splitter);


              if (channels) {
                this.channels = channels;
              } else if (node.channelCount) {
                this.channels = node.channelCount;
              } else {
                this.channels = 2;
              }

              this.meterWidth = this.canvas.element.width / this.channels;
              this.source = node;
              this.source.connect(this.splitter); //  this.render();
            }
          },
          disconnect: {
            /**
            Stop visualizing the source node and disconnect it.
            */
            value: function disconnect() {
              this.source.disconnect(this.splitter);
              this.source = false; //  this.dummy.connect(this.splitter);

              this.meterWidth = this.canvas.element.width / this.channels;
            }
          },
          click: {
            value: function click() {
              this.active = !this.active;
              this.render();
            }
          },
          customDestroy: {
            value: function customDestroy() {
              this.active = false;
            }
          }
        });

        return Meter;
      }(Interface);

      module.exports = Meter;
      /***/
    },
    /* 36 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      var _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) subClass.__proto__ = superClass;
      };

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var dom = __webpack_require__(7);

      var Interface = __webpack_require__(6);
      /**
      * Oscilloscope
      *
      * @description Visualizes a waveform's stream of values.
      *
      * @demo <span nexus-ui="oscilloscope"></span>
      *
      * @example
      * var oscilloscope = new Nexus.Oscilloscope('#target')
      *
      * @example
      * var oscilloscope = new Nexus.Oscilloscope('#target',{
      *   'size': [300,150]
      * })
      *
      * @output
      * &nbsp;
      * No events
      *
      */


      var context = __webpack_require__(1).context;

      var Oscilloscope = function (_Interface) {
        function Oscilloscope() {
          _classCallCheck(this, Oscilloscope);

          var options = ["scale", "value"];
          var defaults = {
            size: [300, 150]
          };

          _get(Object.getPrototypeOf(Oscilloscope.prototype), "constructor", this).call(this, arguments, options, defaults);

          this.context = context(); // jshint ignore:line

          this.analyser = this.context.createAnalyser();
          this.analyser.fftSize = 2048;
          this.bufferLength = this.analyser.frequencyBinCount;
          this.dataArray = new Uint8Array(this.bufferLength);
          this.analyser.getByteTimeDomainData(this.dataArray);
          this.active = true;
          this.source = false;
          this.init();
          this.render();
        }

        _inherits(Oscilloscope, _Interface);

        _createClass(Oscilloscope, {
          buildFrame: {
            value: function buildFrame() {
              this.canvas = new dom.SmartCanvas(this.parent);
              this.element = this.canvas.element;
            }
          },
          sizeInterface: {
            value: function sizeInterface() {
              this.canvas.resize(this.width, this.height);
            }
          },
          colorInterface: {
            value: function colorInterface() {
              this.canvas.element.style.backgroundColor = this.colors.fill;
            }
          },
          render: {
            value: function render() {
              if (this.active) {
                requestAnimationFrame(this.render.bind(this));
              }

              this.analyser.getByteTimeDomainData(this.dataArray);
              this.canvas.context.fillStyle = this.colors.fill;
              this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
              this.canvas.context.lineWidth = ~~(this.height / 100 + 2);
              this.canvas.context.strokeStyle = this.colors.accent;
              this.canvas.context.beginPath();

              if (this.source) {
                var sliceWidth = this.canvas.element.width * 1 / this.bufferLength;
                var x = 0;

                for (var i = 0; i < this.bufferLength; i++) {
                  var v = this.dataArray[i] / 128;
                  var y = v * this.canvas.element.height / 2;

                  if (i === 0) {
                    this.canvas.context.moveTo(x, y);
                  } else {
                    this.canvas.context.lineTo(x, y);
                  }

                  x += sliceWidth;
                }
              } else {
                this.canvas.context.moveTo(0, this.canvas.element.height / 2);
                this.canvas.context.lineTo(this.canvas.element.width, this.canvas.element.height / 2);
              }

              this.canvas.context.stroke();
            }
          },
          connect: {
            /**
            Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
            @param node {AudioNode} The audio node to visualize
            @example Nexus.context = Tone.context // or another audio context you have created
            oscilloscope.connect( Tone.Master );
            */
            value: function connect(node) {
              if (this.source) {
                this.disconnect();
              }

              this.source = node;
              this.source.connect(this.analyser);
              this.render();
            }
          },
          disconnect: {
            /**
            Stop visualizing the source node and disconnect it.
            */
            value: function disconnect() {
              if (this.source) {
                this.source.disconnect(this.analyser);
                this.source = null;
              }
            }
          },
          click: {
            value: function click() {
              this.active = !this.active;
              this.render();
            }
          },
          customDestroy: {
            value: function customDestroy() {
              this.active = false;
            }
          }
        });

        return Oscilloscope;
      }(Interface);

      module.exports = Oscilloscope;
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _interopRequireWildcard = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      /*
      Main concept:
      synth = new Nexus.Rack('elementID');
      
      Transform all elements inside the div
      synth.elementID will hold the first slider interface
      
      2) In future, potentially writing a rack that is re-usable?
      Could also take JSON
      
      new Nexus.Rack('#target',{
        pre: () => {
          create some divs here, or some audio code
        },
        interface: {
          slider1: Nexus.add.slider({
            top:10,
            left:10,
            width:50,
            height:100,
            min: 0,
            max: 100,
            step: 1
          }),
          wave1: Nexus.add.waveform({
            file: './path/to/file.mp3',
            width:500,
            height:100,
            mode: 'range'
          })
        },
        init: () => {
          // some audio init code goes here...
        }
      });
      
      */


      var transform = _interopRequireWildcard(__webpack_require__(38));

      var dom = _interopRequire(__webpack_require__(7));

      var colors = __webpack_require__(1).colors;

      var Rack = function () {
        function Rack(target, settings) {
          _classCallCheck(this, Rack);

          this.meta = {};
          this.meta.target = target;
          this.meta.parent = dom.parseElement(target); // should be a generic function for parsing a 'target' argument that checks for string/DOM/jQUERY

          this.meta.colors = {};

          if (settings) {
            this.meta.attribute = settings.attribute || "nexus-ui";
            this.meta.title = settings.name || false;
            this.meta.open = settings.open || false;
          } else {
            this.meta.attribute = "nexus-ui";
            this.meta.title = false;
            this.meta.open = false;
          }

          var defaultColors = colors(); // jshint ignore:line

          this.meta.colors.accent = defaultColors.accent;
          this.meta.colors.fill = defaultColors.fill;
          this.meta.colors.light = defaultColors.light;
          this.meta.colors.dark = defaultColors.dark;
          this.meta.colors.mediumLight = defaultColors.mediumLight;
          this.meta.colors.mediumDark = defaultColors.mediumDark;
          this.buildInterface();
          this.colorInterface();
        }

        _createClass(Rack, {
          buildInterface: {
            value: function buildInterface() {
              var _this = this;

              this.meta.parent.style.boxSizing = "border-box";
              this.meta.parent.style.userSelect = "none";
              this.meta.parent.style.mozUserSelect = "none";
              this.meta.parent.style.webkitUserSelect = "none";
              this.meta.contents = document.createElement("div");

              while (this.meta.parent.childNodes.length > 0) {
                this.meta.contents.appendChild(this.meta.parent.childNodes[0]);
              }

              this.meta.contents.style.padding = "0px";
              this.meta.contents.style.boxSizing = "border-box";

              if (this.meta.title) {
                this.meta.titleBar = document.createElement("div");
                this.meta.titleBar.innerHTML = this.meta.title;
                this.meta.titleBar.style.fontFamily = "arial";
                this.meta.titleBar.style.position = "relative";
                this.meta.titleBar.style.color = "#888";
                this.meta.titleBar.style.padding = "7px";
                this.meta.titleBar.style.fontSize = "12px";
                this.meta.button = document.createElement("div");
                this.meta.button.style.position = "absolute";
                this.meta.button.style.top = "5px";
                this.meta.button.style.right = "5px";
                this.meta.button.innerHTML = "-";
                this.meta.button.style.padding = "0px 5px 2px";
                this.meta.button.style.lineHeight = "12px";
                this.meta.button.style.fontSize = "15px";
                this.meta.button.style.cursor = "pointer";
                this.meta.button.addEventListener("mouseover", function () {
                  _this.meta.button.style.backgroundColor = _this.meta.colors.mediumDark;
                });
                this.meta.button.addEventListener("mouseleave", function () {
                  _this.meta.button.style.backgroundColor = _this.meta.colors.mediumLight;
                });
                this.meta.button.addEventListener("click", function () {
                  if (_this.meta.open) {
                    _this.hide();
                  } else {
                    _this.show();
                  }
                });
                this.meta.titleBar.appendChild(this.meta.button);
                this.meta.parent.appendChild(this.meta.titleBar);
              }

              this.meta.parent.appendChild(this.meta.contents); //  var width = this.meta.parent.style.width = getComputedStyle(this.meta.parent).getPropertyValue('width');
              //    this.meta.parent.style.width = width;

              var ui = transform.section(this.meta.target, this.meta.attribute);

              for (var key in ui) {
                this[key] = ui[key];
              }
            }
          },
          colorInterface: {
            value: function colorInterface() {
              if (this.meta.title) {
                this.meta.button.style.backgroundColor = this.meta.colors.mediumLight;
                this.meta.button.style.border = "solid 0px " + this.meta.colors.fill;
                this.meta.parent.style.border = "solid 1px " + this.meta.colors.mediumLight;
                this.meta.parent.style.backgroundColor = this.meta.colors.light;
                this.meta.titleBar.style.backgroundColor = this.meta.colors.fill;
              }
            }
          },
          show: {
            value: function show() {
              this.meta.contents.style.display = "block";
              this.meta.open = true;
            }
          },
          hide: {
            value: function hide() {
              this.meta.contents.style.display = "none";
              this.meta.open = false;
            }
          },
          colorize: {
            value: function colorize(type, color) {
              for (var key in this) {
                if (this[key].colorize) {
                  this[key].colorize(type, color);
                }
              }

              this.meta.colors[type] = color;
              this.colorInterface();
            }
          },
          empty: {
            value: function empty() {
              for (var key in this) {
                if (this[key].destroy) {
                  this[key].destroy();
                }
              }
            }
          }
        });

        return Rack;
      }();

      module.exports = Rack;
      /***/
    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      "use strict";

      var dom = _interopRequire(__webpack_require__(7));

      var Interfaces = _interopRequire(__webpack_require__(2));

      var createInterfaceID = function (widget, interfaceIDs) {
        var type = widget.type;

        if (interfaceIDs[type]) {
          interfaceIDs[type]++;
        } else {
          interfaceIDs[type] = 1;
        }

        return type + interfaceIDs[type];
      };

      var element = function (element, type, options) {
        options = options || {};

        for (var i = 0; i < element.attributes.length; i++) {
          var att = element.attributes[i]; //  try {
          //    options[att.nodeName] = eval(att.nodeValue);
          //  } catch(e) {

          options[att.nodeName] = att.nodeValue; //  }
        }

        type = type[0].toUpperCase() + type.slice(1);
        var widget = new Interfaces[type](element, options);
        widget.id = element.id;
        return widget;
      };

      var section = function (parent, keyword) {
        keyword = keyword || "nexus-ui";
        var interfaceIDs = {};
        var container = dom.parseElement(parent);
        var ui = {};
        var htmlElements = container.getElementsByTagName("*");
        var elements = [];

        for (var i = 0; i < htmlElements.length; i++) {
          elements.push(htmlElements[i]);
        }

        for (var i = 0; i < elements.length; i++) {
          var type = elements[i].getAttribute(keyword);

          if (type) {
            var formattedType = false;

            for (var key in Interfaces) {
              if (type.toLowerCase() === key.toLowerCase()) {
                formattedType = key;
              }
            }

            console.log(formattedType);
            var widget = element(elements[i], formattedType);

            if (widget.id) {
              ui[widget.id] = widget;
            } else {
              var id = createInterfaceID(widget, interfaceIDs);
              ui[id] = widget;
            }
          }
        }

        return ui;
      };

      var add = function (type, parent, options) {
        var target = document.createElement("div");
        options = options || {};

        if (parent) {
          parent = dom.parseElement(parent);
        } else {
          parent = document.body;
        }

        parent.appendChild(target);
        options.target = target;

        if (options.size) {
          target.style.width = options.size[0] + "px";
          target.style.height = options.size[1] + "px";
        }

        return element(target, type, options);
      };

      exports.element = element;
      exports.section = section;
      exports.add = add;
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj["default"] : obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var math = _interopRequire(__webpack_require__(5));

      var Tune = function () {
        function Tune() {
          _classCallCheck(this, Tune); // the scale as ratios


          this.scale = []; // i/o modes

          this.mode = {
            output: "frequency",
            input: "step"
          }; // ET major

          this.etmajor = [261.62558, 293.664764, 329.627563, 349.228241, 391.995422, 440, 493.883301, 523.25116]; // Root frequency.

          this.root = math.mtof(60); // * Math.pow(2,(60-69)/12);
          // default is a major scale

          this.createScale(0, 2, 4, 5, 7, 9, 11);
        }

        _createClass(Tune, {
          note: {
            /* Return data in the mode you are in (freq, ratio, or midi) */
            value: function note(input, octave) {
              var newvalue = undefined;

              if (this.mode.output === "frequency") {
                newvalue = this.frequency(input, octave);
              } else if (this.mode.output === "ratio") {
                newvalue = this.ratio(input, octave);
              } else if (this.mode.output === "MIDI") {
                newvalue = this.MIDI(input, octave);
              } else {
                newvalue = this.frequency(input, octave);
              }

              return newvalue;
            }
          },
          frequency: {
            /* Return freq data */
            value: function frequency(stepIn, octaveIn) {
              if (this.mode.input === "midi" || this.mode.input === "MIDI") {
                this.stepIn += 60;
              } // what octave is our input


              var octave = Math.floor(stepIn / this.scale.length);

              if (octaveIn) {
                octave += octaveIn;
              } // which scale degree (0 - scale length) is our input


              var scaleDegree = stepIn % this.scale.length;

              while (scaleDegree < 0) {
                scaleDegree += this.scale.length;
              }

              var ratio = this.scale[scaleDegree];
              var freq = this.root * ratio;
              freq = freq * Math.pow(2, octave); // truncate irrational numbers

              freq = Math.floor(freq * 100000000000) / 100000000000;
              return freq;
            }
          },
          ratio: {
            /* Force return ratio data */
            value: function ratio(stepIn, octaveIn) {
              if (this.mode.input === "midi" || this.mode.input === "MIDI") {
                this.stepIn += 60;
              } // what octave is our input


              var octave = Math.floor(stepIn / this.scale.length);

              if (octaveIn) {
                octave += octaveIn;
              } // which scale degree (0 - scale length) is our input


              var scaleDegree = stepIn % this.scale.length; // what ratio is our input to our key

              var ratio = Math.pow(2, octave) * this.scale[scaleDegree];
              ratio = Math.floor(ratio * 100000000000) / 100000000000;
              return ratio;
            }
          },
          MIDI: {
            /* Force return adjusted MIDI data */
            value: function MIDI(stepIn, octaveIn) {
              var newvalue = this.frequency(stepIn, octaveIn);
              var n = 69 + 12 * Math.log(newvalue / 440) / Math.log(2);
              n = Math.floor(n * 1000000000) / 1000000000;
              return n;
            }
          },
          createScale: {
            value: function createScale() {
              var newScale = [];

              for (var i = 0; i < arguments.length; i++) {
                newScale.push(math.mtof(60 + arguments[i]));
              }

              this.loadScaleFromFrequencies(newScale);
            }
          },
          createJIScale: {
            value: function createJIScale() {
              this.scale = [];

              for (var i = 0; i < arguments.length; i++) {
                this.scale.push(arguments[i]);
              }
            }
          },
          loadScaleFromFrequencies: {
            value: function loadScaleFromFrequencies(freqs) {
              this.scale = [];

              for (var i = 0; i < freqs.length - 1; i++) {
                this.scale.push(freqs[i] / freqs[0]);
              }
            }
          },
          loadScale: {
            /* Load a new scale */
            value: function loadScale(name) {
              /* load the scale */
              var freqs = this.scales[name].frequencies;
              this.loadScaleFromFrequencies(freqs);
            }
          },
          search: {
            /* Search the names of tunings
            	 Returns an array of names of tunings */
            value: function search(letters) {
              var possible = [];

              for (var key in this.scales) {
                if (key.toLowerCase().indexOf(letters.toLowerCase()) !== -1) {
                  possible.push(key);
                }
              }

              return possible;
            }
          },
          chord: {
            /* Return a collection of notes as an array */
            value: function chord(midis) {
              var output = [];

              for (var i = 0; i < midis.length; i++) {
                output.push(this.note(midis[i]));
              }

              return output;
            }
          }
        });

        return Tune;
      }();

      module.exports = Tune;
      /***/
    },
    /* 40 */

    /***/
    function (module, exports) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }; //Disable jshint warning concerning trailing regular params

      /*jshint -W138 */


      var Radio = function () {
        //if non-existent buttons are switched, they are ignored
        function Radio() {
          for (var _len = arguments.length, onVals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            onVals[_key - 1] = arguments[_key];
          }

          var length = arguments[0] === undefined ? 3 : arguments[0];

          _classCallCheck(this, Radio); //each optional 'onVals' argument switches on that value in the Radio if it exists
          //In the example below, a 3-button radio is created, index 0 is switched on, index 1 is switched on then then attempted again producing an warning, and the final argument produces a warning because the index value does not exist.
          //Example:
          //`  radio = new Radio(3, 0, 1, 1, 3);
          //…  [1,1,0]


          if (length < 0) {
            length = 1;
          }

          this.length = length;
          this.onVals = onVals;
          this.array = new Array(length).fill(0);

          if (onVals.length > 0) {
            this.on.apply(this, onVals);
          }
        }

        _createClass(Radio, {
          select: {
            value: function select(value) {
              this.array.fill(0);
              this.array[value] = 1;
              return this.array;
            }
          },
          flip: {
            value: function flip() {
              for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
              } //flips the specified values. if no value is specified, flips all buttons


              var a = this.array;

              if (values.length > 0) {
                values.forEach(function (v) {
                  if (v > a.length - 1) {
                    console.warn("Warning: AnonRadio[" + v + "] does not exist");
                  } else {
                    a[v] = a[v] ? 0 : 1;
                  }
                });
              } else {
                a.forEach(function (v, i, arr) {
                  arr[i] = v ? 0 : 1;
                });
              }

              return a;
            }
          },
          on: {
            value: function on() {
              for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
              } //switch on the specified values. if no value specified, flips on all buttons


              var a = this.array;

              if (values.length > 0) {
                values.forEach(function (v) {
                  if (v > a.length - 1) {
                    console.warn("Warning: AnonRadio[" + v + "] exceeds size of object");
                  } else {
                    if (a[v] === 1) {
                      console.warn("Warning: AnonRadio[" + v + "] was already on.");
                    }

                    a[v] = 1;
                  }
                });
              } else {
                a.fill(1);
              }

              return a;
            }
          },
          off: {
            value: function off() {
              for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
              } //switch off the specified values. if no value specified, flips off all buttons


              var a = this.array;

              if (values.length > 0) {
                values.forEach(function (v) {
                  a[v] = 0;
                });
              } else {
                a.fill(0);
              }

              return a;
            }
          }
        });

        return Radio;
      }();

      module.exports = Radio;
      /***/
    },
    /* 41 */

    /***/
    function (module, exports, __webpack_require__) {
      var WAAClock = __webpack_require__(42);

      module.exports = WAAClock;
      if (typeof window !== 'undefined') window.WAAClock = WAAClock;
      /***/
    },
    /* 42 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (process) {
        var isBrowser = typeof window !== 'undefined';
        var CLOCK_DEFAULTS = {
          toleranceLate: 0.10,
          toleranceEarly: 0.001 // ==================== Event ==================== //

        };

        var Event = function (clock, deadline, func) {
          this.clock = clock;
          this.func = func;
          this._cleared = false; // Flag used to clear an event inside callback

          this.toleranceLate = clock.toleranceLate;
          this.toleranceEarly = clock.toleranceEarly;
          this._latestTime = null;
          this._earliestTime = null;
          this.deadline = null;
          this.repeatTime = null;
          this.schedule(deadline);
        }; // Unschedules the event


        Event.prototype.clear = function () {
          this.clock._removeEvent(this);

          this._cleared = true;
          return this;
        }; // Sets the event to repeat every `time` seconds.


        Event.prototype.repeat = function (time) {
          if (time === 0) throw new Error('delay cannot be 0');
          this.repeatTime = time;
          if (!this.clock._hasEvent(this)) this.schedule(this.deadline + this.repeatTime);
          return this;
        }; // Sets the time tolerance of the event.
        // The event will be executed in the interval `[deadline - early, deadline + late]`
        // If the clock fails to execute the event in time, the event will be dropped.


        Event.prototype.tolerance = function (values) {
          if (typeof values.late === 'number') this.toleranceLate = values.late;
          if (typeof values.early === 'number') this.toleranceEarly = values.early;

          this._refreshEarlyLateDates();

          if (this.clock._hasEvent(this)) {
            this.clock._removeEvent(this);

            this.clock._insertEvent(this);
          }

          return this;
        }; // Returns true if the event is repeated, false otherwise


        Event.prototype.isRepeated = function () {
          return this.repeatTime !== null;
        }; // Schedules the event to be ran before `deadline`.
        // If the time is within the event tolerance, we handle the event immediately.
        // If the event was already scheduled at a different time, it is rescheduled.


        Event.prototype.schedule = function (deadline) {
          this._cleared = false;
          this.deadline = deadline;

          this._refreshEarlyLateDates();

          if (this.clock.context.currentTime >= this._earliestTime) {
            this._execute();
          } else if (this.clock._hasEvent(this)) {
            this.clock._removeEvent(this);

            this.clock._insertEvent(this);
          } else this.clock._insertEvent(this);
        };

        Event.prototype.timeStretch = function (tRef, ratio) {
          if (this.isRepeated()) this.repeatTime = this.repeatTime * ratio;
          var deadline = tRef + ratio * (this.deadline - tRef); // If the deadline is too close or past, and the event has a repeat,
          // we calculate the next repeat possible in the stretched space.

          if (this.isRepeated()) {
            while (this.clock.context.currentTime >= deadline - this.toleranceEarly) deadline += this.repeatTime;
          }

          this.schedule(deadline);
        }; // Executes the event


        Event.prototype._execute = function () {
          if (this.clock._started === false) return;

          this.clock._removeEvent(this);

          if (this.clock.context.currentTime < this._latestTime) this.func(this);else {
            if (this.onexpired) this.onexpired(this);
            console.warn('event expired');
          } // In the case `schedule` is called inside `func`, we need to avoid
          // overrwriting with yet another `schedule`.

          if (!this.clock._hasEvent(this) && this.isRepeated() && !this._cleared) this.schedule(this.deadline + this.repeatTime);
        }; // Updates cached times


        Event.prototype._refreshEarlyLateDates = function () {
          this._latestTime = this.deadline + this.toleranceLate;
          this._earliestTime = this.deadline - this.toleranceEarly;
        }; // ==================== WAAClock ==================== //


        var WAAClock = module.exports = function (context, opts) {
          var self = this;
          opts = opts || {};
          this.tickMethod = opts.tickMethod || 'ScriptProcessorNode';
          this.toleranceEarly = opts.toleranceEarly || CLOCK_DEFAULTS.toleranceEarly;
          this.toleranceLate = opts.toleranceLate || CLOCK_DEFAULTS.toleranceLate;
          this.context = context;
          this._events = [];
          this._started = false;
        }; // ---------- Public API ---------- //
        // Schedules `func` to run after `delay` seconds.


        WAAClock.prototype.setTimeout = function (func, delay) {
          return this._createEvent(func, this._absTime(delay));
        }; // Schedules `func` to run before `deadline`.


        WAAClock.prototype.callbackAtTime = function (func, deadline) {
          return this._createEvent(func, deadline);
        }; // Stretches `deadline` and `repeat` of all scheduled `events` by `ratio`, keeping
        // their relative distance to `tRef`. In fact this is equivalent to changing the tempo.


        WAAClock.prototype.timeStretch = function (tRef, events, ratio) {
          events.forEach(function (event) {
            event.timeStretch(tRef, ratio);
          });
          return events;
        }; // Removes all scheduled events and starts the clock 


        WAAClock.prototype.start = function () {
          if (this._started === false) {
            var self = this;
            this._started = true;
            this._events = [];

            if (this.tickMethod === 'ScriptProcessorNode') {
              var bufferSize = 256; // We have to keep a reference to the node to avoid garbage collection

              this._clockNode = this.context.createScriptProcessor(bufferSize, 1, 1);

              this._clockNode.connect(this.context.destination);

              this._clockNode.onaudioprocess = function () {
                process.nextTick(function () {
                  self._tick();
                });
              };
            } else if (this.tickMethod === 'manual') null; // _tick is called manually
            else throw new Error('invalid tickMethod ' + this.tickMethod);
          }
        }; // Stops the clock


        WAAClock.prototype.stop = function () {
          if (this._started === true) {
            this._started = false;

            this._clockNode.disconnect();
          }
        }; // ---------- Private ---------- //
        // This function is ran periodically, and at each tick it executes
        // events for which `currentTime` is included in their tolerance interval.


        WAAClock.prototype._tick = function () {
          var event = this._events.shift();

          while (event && event._earliestTime <= this.context.currentTime) {
            event._execute();

            event = this._events.shift();
          } // Put back the last event


          if (event) this._events.unshift(event);
        }; // Creates an event and insert it to the list


        WAAClock.prototype._createEvent = function (func, deadline) {
          return new Event(this, deadline, func);
        }; // Inserts an event to the list


        WAAClock.prototype._insertEvent = function (event) {
          this._events.splice(this._indexByTime(event._earliestTime), 0, event);
        }; // Removes an event from the list


        WAAClock.prototype._removeEvent = function (event) {
          var ind = this._events.indexOf(event);

          if (ind !== -1) this._events.splice(ind, 1);
        }; // Returns true if `event` is in queue, false otherwise


        WAAClock.prototype._hasEvent = function (event) {
          return this._events.indexOf(event) !== -1;
        }; // Returns the index of the first event whose deadline is >= to `deadline`


        WAAClock.prototype._indexByTime = function (deadline) {
          // performs a binary search
          var low = 0,
              high = this._events.length,
              mid;

          while (low < high) {
            mid = Math.floor((low + high) / 2);
            if (this._events[mid]._earliestTime < deadline) low = mid + 1;else high = mid;
          }

          return low;
        }; // Converts from relative time to absolute time


        WAAClock.prototype._absTime = function (relTime) {
          return relTime + this.context.currentTime;
        }; // Converts from absolute time to relative time 


        WAAClock.prototype._relTime = function (absTime) {
          return absTime - this.context.currentTime;
        };
        /* WEBPACK VAR INJECTION */

      }).call(exports, __webpack_require__(43));
      /***/
    },
    /* 43 */

    /***/
    function (module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
      /***/

    },
    /* 44 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var key in props) {
            var prop = props[key];
            prop.configurable = true;
            if (prop.value) prop.writable = true;
          }

          Object.defineProperties(target, props);
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var clock = __webpack_require__(1).clock;

      var Interval = function () {
        function Interval(rate, func, on) {
          _classCallCheck(this, Interval);

          this.rate = rate;
          this.on = on;
          this.clock = clock(); // jshint ignore:line

          this.pattern = [1];
          this.index = 0;
          this.event = func ? func : function () {};

          if (this.on) {
            this.start();
          }
        }

        _createClass(Interval, {
          _event: {
            value: function _event(e) {
              //  if (this.pattern[this.index%this.pattern.length]) {
              this.event(e); //  }

              this.index++;
            }
          },
          stop: {
            value: function stop() {
              this.on = false;
              this.interval.clear();
            }
          },
          start: {
            value: function start() {
              this.on = true;
              this.interval = this.clock.callbackAtTime(this._event.bind(this), this.clock.context.currentTime).repeat(this.rate / 1000).tolerance({
                early: 0.1,
                late: 1
              });
            }
          },
          ms: {
            value: function ms(newrate) {
              if (this.on) {
                var ratio = newrate / this.rate;
                this.rate = newrate;
                this.clock.timeStretch(this.clock.context.currentTime, [this.interval], ratio);
              } else {
                this.rate = newrate;
              }
            }
          }
        });

        return Interval;
      }();

      module.exports = Interval;
      /***/
    }])
  );
});

;
},{"process":"../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"js/midi.js":[function(require,module,exports) {
"use strict";

var _tone = _interopRequireDefault(require("tone"));

var _nexusui = _interopRequireDefault(require("nexusui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Let's import everything we're gonna need
// Build the synth with Tone.js
var synth = new _tone.default.Synth();
var delay = new _tone.default.FeedbackDelay({
  delayTime: 0.125,
  maxDelay: .5
}).toMaster();
var reverb = new _tone.default.Reverb({
  decay: 1.5,
  preDelay: 0.01
}).toMaster();
var volumeLevel;
var gain = new _tone.default.Gain(10).toMaster();
var wave = "triangle";
synth.oscillator.type = wave; // Some funcgtions that allow our buttons to change their wavetypes

function waveSine() {
  wave = "sine";
  synth.oscillator.type = wave;
}

;

function waveTriangle() {
  wave = "triangle";
  synth.oscillator.type = wave;
}

;

function waveSquare() {
  wave = "sawtooth";
}

var sineButton = document.querySelector(".wave-sine");
sineButton.addEventListener('click', function () {
  waveSine();
  console.log(wave);
  sineButton.classList.toggle("wavebutton-active"); // squareButton.classList.remove("wavebutton-active")

  triangleButton.classList.remove("wavebutton-active");
});
var triangleButton = document.querySelector(".wave-triangle");
triangleButton.addEventListener('click', function () {
  waveTriangle();
  console.log(wave);
  sineButton.classList.remove("wavebutton-active"); // squareButton.classList.remove("wavebutton-active")

  triangleButton.classList.toggle("wavebutton-active");
}); // const squareButton = document.querySelector(".wave-square");
// squareButton.addEventListener('click', function() {
// 	waveSquare();
// 	console.log(wave);
// 	sineButton.classList.remove("wavebutton-active")
// 	triangleButton.classList.remove("wavebutton-active")
// 	squareButton.classList.toggle("wavebutton-active")
// })
// toMaster() sends our chain to the speakers

synth.chain(delay, reverb, gain).toMaster(); //--------------------------------------------------------------------
//Get the broswer listening for MIDI

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}

function success(midi) {
  var inputs = midi.inputs.values(); // inputs is an Iterator

  for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
    // each time there is a midi message call the onMIDIMessage function
    input.value.onmidimessage = onMIDIMessage;
  }
}

function failure() {
  console.error('No access to your midi devices.');
}

function onMIDIMessage(message) {
  var frequency = midiNoteToFrequency(message.data[1]);
  var command = message.data[0];
  var note = message.data[1];
  var velocity = message.data.length > 2 ? message.data[2] : 0; // a velocity value might not be included with a noteOff comman

  console.log('the note is ' + note);
  var A3 = document.querySelector(".A3");
  var ASharp3 = document.querySelector(".ASharp3");
  var B3 = document.querySelector(".B3");
  var C4 = document.querySelector(".C4");
  var CSharp4 = document.querySelector(".CSharp4");
  var D4 = document.querySelector(".D4");
  var DSharp4 = document.querySelector(".DSharp4");
  var E4 = document.querySelector(".E4");
  var F4 = document.querySelector(".F4");
  var FSharp4 = document.querySelector(".FSharp4");
  var G4 = document.querySelector(".G4");
  var GSharp4 = document.querySelector(".GSharp4");
  var A4 = document.querySelector(".A4");
  var ASharp4 = document.querySelector(".ASharp4");
  var B4 = document.querySelector(".B4"); //map the midi value to note values

  switch (note) {
    case 28:
      note = 'E1';
      break;

    case 29:
      note = 'F1';
      break;

    case 30:
      note = 'F#1';
      break;

    case 31:
      note = 'G1';
      break;

    case 32:
      note = 'G#1';
      break;

    case 33:
      note = 'A1';
      break;

    case 34:
      note = 'A#1';
      break;

    case 35:
      note = 'B1';
      break;

    case 36:
      note = 'C2';
      break;

    case 37:
      note = 'C#2';
      break;

    case 38:
      note = 'D2';
      break;

    case 39:
      note = 'D#2';
      break;

    case 40:
      note = 'E2';
      break;

    case 41:
      note = 'F2';
      break;

    case 42:
      note = 'F#2';
      break;

    case 43:
      note = 'G2';
      break;

    case 44:
      note = 'G#2';
      break;

    case 45:
      note = 'A2';
      break;

    case 46:
      note = 'A#2';
      break;

    case 47:
      note = 'B2';
      break;

    case 48:
      note = 'C3';
      break;

    case 49:
      note = 'C#3';
      break;

    case 50:
      note = 'D3';
      break;

    case 51:
      note = 'D#3';
      break;

    case 52:
      note = 'E3';
      break;

    case 53:
      note = 'F3';
      break;

    case 54:
      note = 'F#3';
      break;

    case 55:
      note = 'G3';
      break;

    case 56:
      note = 'G#3';
      break;

    case 57:
      note = 'A3';
      A3.classList.toggle("active-white");
      break;

    case 58:
      note = 'A#3';
      ASharp3.classList.toggle("active-black");
      break;

    case 59:
      note = 'B3';
      B3.classList.toggle("active-white");
      break;

    case 60:
      note = 'C4';
      C4.classList.toggle("active-white");
      break;

    case 61:
      note = 'C#4';
      CSharp4.classList.toggle("active-black");
      break;

    case 62:
      note = 'D4';
      D4.classList.toggle("active-white");
      break;

    case 63:
      note = 'D#4';
      DSharp4.classList.toggle("active-black");
      break;

    case 64:
      note = 'E4';
      E4.classList.toggle("active-white");
      break;

    case 65:
      note = 'F4';
      F4.classList.toggle("active-white");
      break;

    case 66:
      note = 'F#4';
      FSharp4.classList.toggle("active-black");
      break;

    case 67:
      note = 'G4';
      G4.classList.toggle("active-white");
      break;

    case 68:
      note = 'G#4';
      GSharp4.classList.toggle("active-black");
      break;

    case 69:
      note = 'A4';
      A4.classList.toggle("active-white");
      break;

    case 70:
      note = 'A#4';
      ASharp4.classList.toggle("active-black");
      break;

    case 71:
      note = 'B4';
      B4.classList.toggle("active-white");
      break;

    case 72:
      note = 'C5';
      break;

    case 73:
      note = 'C#5';
      break;

    case 74:
      note = 'D5';
      break;

    case 75:
      note = 'D#5';
      break;

    case 76:
      note = 'E5';
      break;

    case 77:
      note = 'F5';
      break;

    case 78:
      note = 'F#5';
      break;

    case 79:
      note = 'G5';
      break;

    case 80:
      note = 'G#5';
      break;

    case 81:
      note = 'A5';
      break;

    case 82:
      note = 'A#5';
      break;

    case 83:
      note = 'B5';
      break;

    case 84:
      note = 'C6';
      break;

    case 85:
      note = 'C#6';
      break;

    case 86:
      note = 'D6';
      break;

    case 87:
      note = 'D#6';
      break;

    case 88:
      note = 'E6';
      break;

    case 89:
      note = 'F6';
      break;

    case 90:
      note = 'F#6';
      break;

    case 91:
      note = 'G6';
      break;

    case 92:
      note = 'G#6';
      break;

    case 93:
      note = 'A6';
      break;

    case 94:
      note = 'A#6';
      break;

    case 95:
      note = 'B6';
      break;

    case 96:
      note = 'C7';
      break;

    case 97:
      note = 'C#7';
      break;

    case 98:
      note = 'D7';
      break;

    case 99:
      note = 'D#7';
      break;

    case 100:
      note = 'E7';
      break;

    case 101:
      note = 'F7';
      break;

    case 102:
      note = 'F#7';
      break;

    case 103:
      note = 'G7';
      break;
  } //pass notes into the playNote() and stopNote() functions


  if (message.data[0] === 144 && message.data[2] > 0) {
    playNote(note);
  }

  if (message.data[0] === 128 || message.data[2] === 0) {
    stopNote();
  }
}

function playNote(note) {
  console.log('the note is ' + note);
  synth.triggerAttack(note);
}

function stopNote() {
  synth.triggerRelease();
} // Not using this, but it's there in case I need to do some frequency conversion


function midiNoteToFrequency(note) {
  return Math.pow(2, (note - 69) / 12) * 440;
} //-----------------------------------------------------------------------
//Now let's hook up our on-screen keyboard


var piano = document.getElementById("piano"); // Let's listen for the mouse events

piano.addEventListener("mousedown", function (e) {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
  console.log(e.target);
  e.target.classList.toggle("active-white");
});
piano.addEventListener("mouseup", function (e) {
  // stops the trigger
  synth.triggerRelease();
  e.target.classList.toggle("active-white");
}); // Now turn your ear to the keyboard events

document.addEventListener("keydown", function (e) {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "a":
      synth.triggerAttack("A3"); //e.target.classList.toggle("active-white");

      console.log("the key is " + e.key);
      break;

    case "w":
      return synth.triggerAttack("A#3");

    case "s":
      return synth.triggerAttack("B3");

    case "d":
      return synth.triggerAttack("C4");

    case "r":
      return synth.triggerAttack("C#4");

    case "f":
      return synth.triggerAttack("D4");

    case "t":
      return synth.triggerAttack("D#4");

    case "g":
      return synth.triggerAttack("E4");

    case "h":
      return synth.triggerAttack("F4");

    case "u":
      return synth.triggerAttack("F#4");

    case "j":
      return synth.triggerAttack("G4");

    case "i":
      return synth.triggerAttack("G#4");

    case "k":
      return synth.triggerAttack("A4");

    case "o":
      return synth.triggerAttack("A#4");

    case "l":
      return synth.triggerAttack("B4");

    default:
      return;
  }
}); // when the key is released, audio is released as well

document.addEventListener("keyup", function (e) {
  switch (e.key) {
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
      synth.triggerRelease();
  }
}); //--------------------------------------------------------
// Now let's get some buttons cooking on the control panel

var powerButton = document.querySelector('.power-button');
var logo = document.querySelector(".logo");
powerButton.addEventListener('click', function () {
  powerButton.classList.toggle("power-on");
  logo.classList.toggle("glow");
});
},{"tone":"node_modules/tone/build/Tone.js","nexusui":"node_modules/nexusui/dist/NexusUI.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65262" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/midi.js"], null)
//# sourceMappingURL=/midi.deb08058.js.map