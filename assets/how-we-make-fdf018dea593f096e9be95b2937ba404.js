/*!
 * VERSION: 1.11.5
 * DATE: 2014-02-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals.isSelector,o=i._internals.isArray,h=r.prototype=i.to({},.1,{}),l=[];r.version="1.11.5",h.constructor=r,h.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},h.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,a,o,h,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,m=this._totalTime,d=this._cycle,g=this._duration;if(t>=c?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===g&&(p=this._rawPrevTime,(0===t||0>p||p===n)&&p!==t&&(i=!0,p>n&&(r="onReverseComplete")),this._rawPrevTime=p=!e||t||0===p?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&this._rawPrevTime>n)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===g&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=p=!e||t||0===this._rawPrevTime?t:n)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(o=g+this._repeatDelay,this._cycle=this._totalTime/o>>0,0!==this._cycle&&this._cycle===this._totalTime/o&&this._cycle--,this._time=this._totalTime-this._cycle*o,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),f===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==f&&t>=0&&(this._active=!0),0===m&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||l))),a=this._firstPT;a;)a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||l)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||l),0===g&&this._rawPrevTime===n&&p!==n&&(this._rawPrevTime=0)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,h,_,u,p){h=h||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),_.apply(p||this,u||l)};for(o(t)||("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0))),c=t.length,m=0;c>m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c-1&&_&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=h}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var _=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(_(n,e)),r=s.length),n=n._next;return s},u=r.getAllTweens=function(e){return _(t._rootTimeline,e).concat(_(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=u(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,h,l,_,u,p=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0)),o(t))for(_=t.length;--_>-1;)r.killChildTweensOf(t[_],e);else{n=[];for(l in p)for(h=p[l].target.parentNode;h;)h===t&&(n=n.concat(p[l].tweens)),h=h.parentNode;for(u=n.length,_=0;u>_;_++)e&&n[_].totalTime(n[_].totalDuration()),n[_]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=u(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){p(!0,t,e,i)},r.resumeAll=function(t,e,i){p(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},h.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],a(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));a(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals.isSelector,a=i._internals.isArray,o=[],h=function(t){var e,i={};for(e in t)i[e]=t[e];return i},l=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||o)},_=o.slice,u=s.prototype=new e;return s.version="1.11.5",u.constructor=s,u.kill()._gc=!1,u.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},u.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},u.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},u.staggerTo=function(t,e,r,a,o,l,u,p){var c,f=new s({onComplete:l,onCompleteParams:u,onCompleteScope:p,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=_.call(t,0)),a=a||0,c=0;t.length>c;c++)r.startAt&&(r.startAt=h(r.startAt)),f.to(t[c],e,h(r),c*a);return this.add(f,o)},u.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},u.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},u.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},u.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},u.add=function(r,n,o,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&a(r)){for(o=o||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)a(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===o?l=p._startTime+p.totalDuration()/p._timeScale:"start"===o&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},u.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&a(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},u._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},u.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},u.insert=u.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},u.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},u.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},u.addPause=function(t,e,i,s){return this.call(l,["{self}",e,i,s],this,t)},u.removeLabel=function(t){return delete this._labels[t],this},u.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},u._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&a(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},u.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},u.stop=function(){return this.paused(!0)},u.gotoAndPlay=function(t,e){return this.play(t,e)},u.gotoAndStop=function(t,e){return this.pause(t,e)},u.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._time,p=this._startTime,c=this._timeScale,f=this._paused;if(t>=_?(this._totalTime=this._time=_,this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,t=_+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==u||0===this._duration&&(this._rawPrevTime>r||0>t&&this._rawPrevTime>=0))&&(h="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,t=0,this._initted||(l=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==u&&this._first||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&t>0&&(this._active=!0),0===u&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o)),this._time>=u)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||u>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),h&&(this._gc||(p===this._startTime||c!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||o)))}},u._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},u.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},u.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},u._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},u.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},u._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},u.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},u.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},u._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},u.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},u.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},u.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},u.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=new i(null,null,1,0),o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.11.5",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,r,o,h={ease:a,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)h[r]=i[r];return h.time=this._parseTimeOrLabel(t),s=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,o=new e(this,s,h),h.onStart=function(){o.target.paused(!0),o.vars.time!==o.target.time()&&s===o.duration()&&o.duration(Math.abs(o.vars.time-o.target.time())/o.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||o,i.onStartParams||n)},o},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,o,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,c=this._time,f=this._totalTime,m=this._startTime,d=this._timeScale,g=this._rawPrevTime,v=this._paused,y=this._cycle;if(t>=u?(this._locked||(this._totalTime=u,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,h="onComplete",0===this._duration&&(0===t||0>g||g===r)&&g!==t&&this._first&&(l=!0,g>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==c||0===p&&(g>r||0>t&&g>=0)&&!this._locked)&&(h="onReverseComplete",a=this._reversed),0>t?(this._active=!1,0===p&&g>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=p||!e||t||0===this._rawPrevTime?t:r,t=0,this._initted||(l=!0))):(0===p&&0>g&&(l=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(_=p+this._repeatDelay,this._cycle=this._totalTime/_>>0,0!==this._cycle&&this._cycle===this._totalTime/_&&this._cycle--,this._time=this._totalTime-this._cycle*_,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==y&&!this._locked){var T=this._yoyo&&0!==(1&y),w=T===(this._yoyo&&0!==(1&this._cycle)),x=this._totalTime,b=this._cycle,P=this._rawPrevTime,S=this._time;if(this._totalTime=y*p,y>this._cycle?T=!T:this._totalTime+=p,this._time=c,this._rawPrevTime=0===p?g-1e-4:g,this._cycle=y,this._locked=!0,c=T?0:p,this.render(c,e,0===p),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),w&&(c=T?p+1e-4:-1e-4,this.render(c,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=S,this._totalTime=x,this._cycle=b,this._rawPrevTime=P}if(!(this._time!==c&&this._first||i||l))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=c)for(s=this._first;s&&(o=s._next,!this._paused||v);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;else for(s=this._last;s&&(o=s._prev,!this._paused||v);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),h&&(this._locked||this._gc||(m===this._startTime||d!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(a&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||n)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o
}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.11.5",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,E={},N=document,F=N.createElement("div"),L=N.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=N.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),c=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z)&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},W=N.defaultView?N.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=F.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border:0 solid red;position:"+G(t,"position")+";line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||N.body,h[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Z=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},Q=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:I)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=E;for(i._transform=null,E=e,s=_=i.parse(t,e,s,r),E=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",C&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,c,f,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var S=n[8],k=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=S*D-n[12],O=k*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var E,N,F,L,X,z,U,Y=n[0],j=n[1],B=n[2],q=n[3],V=n[4],W=n[5],$=n[6],Z=n[7],Q=n[11],H=Math.atan2($,R),K=-b>H||H>b;v.rotationX=H*I,H&&(L=Math.cos(-H),X=Math.sin(-H),E=V*L+S*X,N=W*L+k*X,F=$*L+R*X,S=V*-X+S*L,k=W*-X+k*L,R=$*-X+R*L,Q=Z*-X+Q*L,V=E,W=N,$=F),H=Math.atan2(S,Y),v.rotationY=H*I,H&&(z=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),E=Y*L-S*X,N=j*L-k*X,F=B*L-R*X,k=j*X+k*L,R=B*X+R*L,Q=q*X+Q*L,Y=E,j=N,B=F),H=Math.atan2(j,W),v.rotation=H*I,H&&(U=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),Y=Y*L+V*X,N=j*L+W*X,W=j*-X+W*L,$=B*-X+$*L,j=N),U&&K?v.rotation=v.rotationX=0:U&&z?v.rotation=v.rotationY=0:z&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(Y*Y+j*j)*w+.5)/w,v.scaleY=(0|Math.sqrt(W*W+k*k)*w+.5)/w,v.scaleZ=(0|Math.sqrt($*$+R*R)*w+.5)/w,v.skewX=0,v.perspective=Q?1/(0>Q?-Q:Q):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(te*te+ee*ee),u=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*I:v.rotation||0,c=ie||se?Math.atan2(ie,se)*I+p:v.skewX||0,f=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(y?(_*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d=(p-v.rotation)%180,g=(c-v.skewX)%180,(void 0===v.skewX||f>T||-T>f||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=c),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P=this.data,S=this.t.style,k=P.rotation*M,R=P.scaleX,A=P.scaleY,C=P.scaleZ,O=P.perspective;if(p){var D=1e-4;D>R&&R>-D&&(R=C=2e-5),D>A&&A>-D&&(A=C=2e-5),!O||P.z||P.rotationX||P.rotationY||(O=0)}if(k||P.skewX)v=Math.cos(k),y=Math.sin(k),t=v,r=y,P.skewX&&(k-=P.skewX*M,v=Math.cos(k),y=Math.sin(k)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==C||O))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=c=f=0,m=O?-1/O:0,d=P.zOrigin,g=1e5,k=P.rotationY*M,k&&(v=Math.cos(k),y=Math.sin(k),h=_*-y,c=m*-y,i=t*y,a=r*y,_*=v,m*=v,t*=v,r*=v),k=P.rotationX*M,k&&(v=Math.cos(k),y=Math.sin(k),T=e*v+i*y,w=n*v+a*y,x=l*v+_*y,b=f*v+m*y,i=e*-y+i*v,a=n*-y+a*v,_=l*-y+_*v,m=f*-y+m*v,e=T,n=w,l=x,f=b),1!==C&&(i*=C,a*=C,_*=C,m*=C),1!==A&&(e*=A,n*=A,l*=A,f*=A),1!==R&&(t*=R,r*=R,h*=R,c*=R),d&&(u-=d,s=i*u,o=a*u,u=_*u+d),s=(T=(s+=P.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,u=(T=(u+=P.z)-(u|=0))?(0|T*g+(0>T?-.5:.5))/g+u:u,S[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|h*g)/g,(0|c*g)/g,(0|e*g)/g,(0|n*g)/g,(0|l*g)/g,(0|f*g)/g,(0|i*g)/g,(0|a*g)/g,(0|_*g)/g,(0|m*g)/g,s,o,u,O?1+-u/O:1].join(",")+")"},ke=function(t){var e,i,s,r,n,a=this.data,o=this.t,h=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=Se,Se.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,s=1e5,r=a.scaleX*s,n=a.scaleY*s,h[ye]="matrix("+(0|Math.cos(e)*r)/s+","+(0|Math.sin(e)*r)/s+","+(0|Math.sin(i)*-n)/s+","+(0|Math.cos(i)*n)/s+","+a.x+","+a.y+")"):h[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,c,f,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(y.scaleZ,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},f=y.directionalRotation,null!=f)if("object"==typeof f)for(_ in f)y[_]=f[_];else y.rotation=f;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(xe&&null!=y.force3D&&(m.force3D=y.force3D,c=!0),p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=E[i])&&(c=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(c=!0,i=we,u=(u||G(t,i,r,!1,"50% 50%"))+"",n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),c&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||W(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Re=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Re),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=f,_=Q(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,Q(t),h,p),t.className=f,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ae(n,i);r&&(Ae(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=Q(t,r),x.cssText=m+";"+e,h=H(t,h,Q(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),c&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?Se:ye?ke:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,f),"%"===m?(_/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(Q(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)
}}(),window._gsDefine.plugin({propName:"attr",API:2,version:"0.2.0",init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i)&&this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,version:"0.2.0",init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},h=o("com.greensock"),l=1e-10,_=[].slice,u=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},f=function(i,s,r,n){this.sc=c[i]?c[i].sc:[],c[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(h){for(var l,_,u,p,m=s.length,d=m;--m>-1;)(l=c[s[m]]||new f(s[m],[])).gsClass?(a[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),p=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=p,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return p}):"undefined"!=typeof module&&module.exports&&(module.exports=p)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},m=t._gsDefine=function(t,e,i,s){return new f(t,e,i,s)},d=h._class=function(t,e,i){return e=e||function(){},m(t,[],function(){return e},i),e};m.globals=e;var g=[0,0,1,1],v=[],y=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),T=y.map={},w=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?d("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],T[n+"."+o]=T[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,w(new y(null,null,1,s),r,"easeOut",!0),w(new y(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),w(new y(null,null,3,s),r,"easeInOut");T.linear=h.easing.Linear.easeIn,T.swing=h.easing.Quad.easeInOut;var x=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=x.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&r>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,P=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},k=S();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],P=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,h,l=this,_=S(),p=e!==!1&&b,c=function(t){k=S(),l.time=(k-_)/1e3;var e,n=l.time-h;(!i||n>0||t===!0)&&(l.frame++,h+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(c)),e&&l.dispatchEvent("tick")};x.call(l),l.time=l.frame=0,l.tick=function(){c(!0)},l.sleep=function(){null!=r&&(p&&P?P(r):clearTimeout(r),s=u,r=null,l===n&&(a=!1))},l.wake=function(){null!==r&&l.sleep(),s=0===i?u:p&&b?b:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===n&&(a=!0),c(2)},l.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var R=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){a||n.wake();var i=this.vars.useFrames?z:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=R.ticker=new h.Ticker,r=R.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var A=function(){a&&S()-k>2e3&&n.wake(),setTimeout(A,2e3)};A(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||l,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=d("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=C.prototype=new R,r.constructor=C,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var O=d("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:O.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?X[O.defaultOverwrite]:"number"==typeof h?h>>0:X[h],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=Y(n,this,!1),1===h&&this._siblings[r].length>1&&j(n,this,null,1,this._siblings[r])):(n=a[r--]=O.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=Y(e,this,!1),1===h&&this._siblings.length>1&&j(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),D=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},M=function(t,e){var i,s={};for(i in t)L[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=O.prototype=new R,r.constructor=O,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,O.version="1.11.5",O.defaultEase=r._ease=new y(null,null,1,1),O.defaultOverwrite="auto",O.ticker=n,O.autoSleep=!0,O.selector=t.$||t.jQuery||function(e){return t.$?(O.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var I=O._internals={isArray:p,isSelector:D},E=O._plugins={},N=O._tweenLookup={},F=0,L=I.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},z=R._rootFramesTimeline=new C,U=R._rootTimeline=new C;U._startTime=n.time,z._startTime=n.frame,U._active=z._active=!0,R._updateRoot=function(){if(U.render((n.time-U._startTime)*U._timeScale,!1,!1),z.render((n.frame-z._startTime)*z._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=U._first,(!i||i._paused)&&O.autoSleep&&!z._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",R._updateRoot);var Y=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+F++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},j=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+l,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||B(e,0,f),0===B(o,_,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},B=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*l>n-e?l:(n+=t.totalDuration()/t._timeScale/r)>e+l?0:n-e-l};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=O.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)L[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=O.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=h?h instanceof y?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new y(h,r.easeParams):T[h]||O.defaultEase:O.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&O._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&M(this.vars,e);for(n in this.vars){if(_=this.vars[n],L[n])_&&(_ instanceof Array||_.push&&p(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&j(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(a=this._rawPrevTime,(0===t||0>a||a===l)&&a!==t&&(i=!0,a>l&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||0===a?t:l);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&this._rawPrevTime>l)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===h&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t||0===this._rawPrevTime?t:l)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/h,u=this._easeType,p=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===p?_*=_:2===p?_*=_*_:3===p?_*=_*_*_:4===p&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/h?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||v),0===h&&this._rawPrevTime===l&&a!==l&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:O.selector(e)||e;var i,s,r,n,a,o,h,l;if((p(e)||D(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=Y(s[i],this,!0);else this._siblings=Y(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?O._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},O.to=function(t,e,i){return new O(t,e,i)},O.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new O(t,e,i)},O.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new O(t,e,s)},O.delayedCall=function(t,e,i,s,r){return new O(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},O.set=function(t,e){return new O(t,0,e)},O.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:O.selector(t)||t;var i,s,r,n;if((p(t)||D(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(O.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=Y(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},O.killTweensOf=O.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=O.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var q=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=q.prototype},!0);if(r=q.prototype,q.version="1.10.1",q.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},O._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===q.API&&(E[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,q.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in c)c[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}}(window);
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<10
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.10.2",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( jQuery.support.ownLast ) {
			for ( key in obj ) {
				return core_hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {

	var all, a, input, select, fragment, opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Finish early in limited (non-browser) environments
	all = div.getElementsByTagName("*") || [];
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !a || !a.style || !all.length ) {
		return support;
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName("tbody").length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName("link").length;

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Make sure that element opacity exists
	// (IE uses filter instead)
	// Use a regex to work around a WebKit issue. See #5145
	support.opacity = /^0.5/.test( a.style.opacity );

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!a.style.cssFloat;

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone = document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Will be defined later
	support.inlineBlockNeedsLayout = false;
	support.shrinkWrapBlocks = false;
	support.pixelPosition = false;
	support.deleteExpando = true;
	support.noCloneEvent = true;
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: IE<9
	// Iteration over object's inherited properties before its own.
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior.
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})({});

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"applet": true,
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			data = null,
			i = 0,
			elem = this[0];

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( name.indexOf("data-") === 0 ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// Use proper attribute retrieval(#6932, #12072)
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var fn = jQuery.expr.attrHandle[ name ],
				ret = isXML ?
					undefined :
					/* jshint eqeqeq: false */
					(jQuery.expr.attrHandle[ name ] = undefined) !=
						getter( elem, name, isXML ) ?

						name.toLowerCase() :
						null;
			jQuery.expr.attrHandle[ name ] = fn;
			return ret;
		} :
		function( elem, name, isXML ) {
			return isXML ?
				undefined :
				elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};
	jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
		// Some attributes are constructed with empty-string values when not defined
		function( elem, name, isXML ) {
			var ret;
			return isXML ?
				undefined :
				(ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
		};
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ret.specified ?
				ret.value :
				undefined;
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = ret.push( cur );
					break;
				}
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});
jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Otherwise expose jQuery to the global object as usual
	window.jQuery = window.$ = jQuery;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

})( window );

$(function(){
	CT.init();
});


if (/CriOS/.test(navigator.userAgent)) { $('html').addClass('mobile-chrome'); }
if (/MSIE/.test(navigator.userAgent)) { $('html').addClass("MSIE") }
if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) { $('html').addClass("DesktopSafari") }

window.CT = {

	$window: $(window),
	$html: $('html'),
	$body: $('body'),
	$nav: $('.site-nav'),
	$homepage_overlay: $('#homepage-page-overlay'),
	$search: $('#search-wrapper'),
	$searchContainer: $('.search-box-container'),
	searchOn: false,
	
	
	click: Modernizr.touch ? 'tap' : 'click',
	
	touchDragging: false,

	
	init: function(){
		var _self = this;

		// Bind Global Event Handlers
		this.bindEventHandlers();
		
	},
	
	bindEventHandlers:function(){
		var _self = this;

		$(window).on('touchstart', function(e){
			CT.touchDragging = false;
			CT.touchStartY = e.originalEvent.touches[0].pageY;
		});

		$(window).on('touchmove', function(e){
			CT.touchDragging = true;
		});

		$(window).on('touchend', function(e){
			if (!CT.touchDragging) {
				e.preventDefault();
				e.stopPropagation();
				$(e.target).trigger('tap');
			}
		});

		CT.$body.on(CT.click, '.site-nav-click', function(e){
			e.preventDefault();

			CT.showHomepageModal();
		});

		// big links on homepage which trigger Ajax transition
		CT.$body.on(CT.click, '.homepage-link-ajax', function(e) {

			e.preventDefault();

			var $link = $(this);
			var href = $link.attr('href');

			window.location.href = $link.attr('href');

		});

	

		// Search 
		//CT.$body.off('click', '.site-nav-search');
		CT.$body.on(CT.click, '.site-nav-search', function(e) {
			e.preventDefault();

			if (!CT.searchOn) {
				//$(this).addClass('ct-close');
				if( $(this).parent("#homepage-search").length ) {
					CT.hideHomepageModal();
					CT.animateHomePageOut(function() {
						CT.$body.css("overflow", "hidden");
					});
				}
				CT.showSearch();
				$('#search-result-container .background-lines').css("opacity", 0);
			} else {
				//$(this).removeClass('ct-close');
				CT.hideSearch();
				CT._scroll();
			}
			
		});

		CT.$body.on('keydown', '#search-text', function(e) {
			if (e.keyCode === 13) {
				e.preventDefault();
				$('#search-text').val($('#search-placeholder').val());
				$('#search-text').trigger('keyup');
				return false;
			}
		});

		CT.$body.on('keyup', '#search-text', function(e) {
			if (typeof(CT.search_request) == "undefined") CT.search_request = false;
			var keyword = $(this).val();
			if ($('#search-placeholder').val().indexOf(keyword) != 0) $('#search-placeholder').val(keyword);
			$('#search-wrapper .search-result-title').hide();
			if (CT.search_request !== false) CT.search_request.abort();
			if (keyword.length > 0) {
				CT.search_request = $.ajax({
					type: "GET",
					url: "/search",
					data: {'keyword' : keyword},
					success: function(data) {
						CT.processSearch(keyword, data);
						CT._resize(true);
					}
				});
				$('#search-result-container .background-lines').css("opacity", 1);
			} else {
				$('#search-placeholder').val('Search');
				$('#search-result-container .background-lines').css("opacity", 0);
				CT.clearSearchResult();
			}

			if (e.keyCode == 13) {
				CT.showSearchResultTitle();
			}
			
		});

	
		CT.$body.on(CT.click, '.collapsed-menu-button', function(e) {
			e.preventDefault();
			CT.showHomepageModal();
		});

		CT.$body.on(CT.click, '.close-modal', function(e) {
			e.preventDefault();
			CT.hideHomepageModal();
		});

	},

	showNav: function(show) {
		show = typeof(show) !== 'boolean' ? false : show;

		if (CT.navAnimating) return;
		CT.navAnimating = true;

		if (!show) {
			CT.$nav.stop().animate({"margin-top" : -CT.$nav.outerHeight()}, { easing: 'linear',  duration: 150, queue: false, complete: function() { CT.navAnimating = false; } });
			CT.$filterBar.stop().animate({"top" : 0}, { easing: 'linear', duration: 150, queue: false });
		} else {
			CT.$nav.stop().animate({"margin-top" : 0}, { easing: 'linear', duration: 150, queue: false, complete: function() { CT.navAnimating = false; } });
			CT.$filterBar.stop().animate({"top" : CT.$nav.outerHeight()}, { easing: 'linear', duration: 150, queue: false });
		}
	},

	showSearch: function() {
		//var top = CT.$nav.outerHeight();
		var _self = this;

		var top = 0;
		CT.prevScroll = $(window).scrollTop();
		
		$('#search-wrapper .search-result-title').hide();
		CT.clearSearchResult();

		CT.$body.css("overflow", "hidden");
		CT.$search.css({'top': top});
		CT.$search.parent().css({'top': top});
		CT.$search.parent().show();
		CT.$search.show();
		CT.$search.find('#search-text').val('');
		CT.$search.find('#search-placeholder').val('Search');
		CT.$nav.slideUp();
		
		CT.searchOn = true;
		CT._resize(true);

		if( CT.$html.hasClass("touch") ){
			CT.$body.css({ "position" : "fixed"	});
			CT.$searchContainer.css("position", "absolute");
			CT.$homepage.hide();
			CT.$homepage_overlay.hide();
			$("html, body").stop().animate({ scrollTop: 0 });
		} else {
			CT.$search.find('#search-text').focus();
		}

	    if(typeof ga != 'undefined') {
		ga('send', 'event', 'searchmodal', 'show');
	    }
	},

	hideSearch: function() {

		CT.$body.css({'overflow' : ''});
		CT.$search.hide();
		CT.$search.parent().hide();
		
		CT.$search.find('#search-text').val('');
		CT.$search.find('#search-placeholder').val('Search');
		CT.$search.find('#search-text').blur();
		CT.$nav.slideDown(400, function() {
			CT._scroll();
		});

		CT.searchOn = false;

		CT.$body.css({ "position" : "static" });
		CT.$searchContainer.css("position", "fixed");
		if( CT.$body.hasClass("no-touch") ) CT.$homepage.show();
		CT.$homepage_overlay.show();
		
	},

	resizeSearch: function() {
		//var top = CT.$nav.outerHeight();
		//CT.$search.css({'top': top});
	},

	clearSearchResult: function() {
		$('#search-result-container .search-section').remove();
		$('#search-twm').html('');
	},

	showSearchResultTitle: function() {
		if ($('#search-twm .item').length > 0 || $('#search-result-container .search-section').length > 0) {
			$('#search-wrapper .search-result-title').show();
		} else {
			$('#search-wrapper .search-result-title').hide();
		}
	},

	showHomepageModal: function() {
		var _self = this;

		_self.$body.css("overflow", "hidden");

		_self.$homepage_overlay.css({ height: window.innerHeight }).addClass("active").removeClass("inactive");

		_self.$homepage_overlay.show().animate({ top: 0 }, 500);

	    CT.$nav.slideUp();

	    if(typeof ga != 'undefined') {
			ga('send', 'event', 'menu', 'clicked');
	    }
    
	},

	hideHomepageModal: function(cb) {
		var _self = this;

		_self.newWindowHeight = window.innerHeight;

		_self.$homepage_overlay.animate({ top: -CT.newWindowHeight }, 1000, function(){
			CT.$body.css("overflow", "");
			_self.$homepage_overlay.hide();
			if ($.isFunction(cb)) cb.call();
		}).addClass("inactive").removeClass("active");

		CT.$nav.slideDown();
	},

	breakLines: function( paragraphs ){

		if( !paragraphs.hasClass("broken") ){
			$(paragraphs).each(function(){
				var el = this,
					text = $(this).html().split(' '),
			        len = text.length,
			        result = [];

			    for(i = 0; i < len; i++) {
			        result[i] = '<span class="word">' + text[i] + '</span>';
			    }

			    $(el).html(result.join(' '));

			    CT.applyBrokenLines( el );
			});

			paragraphs.addClass("broken");

		} else {
			$(paragraphs).each(function(){
				var el = this;
				CT.applyBrokenLines( el );
			});
		}
		
	},

	applyBrokenLines: function(el){
		inner = 0;
		outer = $(el).parent().width();
		$(el).find("span").removeClass("wordie");

	    $(el).find("span").each(function(index, value){
	    	// console.log("WIDTH is: " + inner + " + " + $($(el).find("span")[index]).outerWidth());

	    	inner += $($(el).find("span")[index]).outerWidth();

	    	// console.log( outer + " against " + inner );

	    	if( inner >= (outer + 3) ) {
	    		$($(el).find("span")[index]).prev("span").addClass("wordie");
	    		inner = $($(el).find("span")[index]).outerWidth();
	    	}
	    });
	},

	processSearch: function(keyword, result) {
		var fullKeyword = false;

		if (result.client_tags.length > 0 && fullKeyword == false) {
			if (String(result.client_tags[0].client).toLowerCase().indexOf(keyword.toLowerCase()) == 0 ) {
				fullKeyword = result.client_tags[0].client;
			}
		}

		if (result.topic_tags.length > 0 && fullKeyword == false) {
			if (String(result.topic_tags[0].tag).toLowerCase().indexOf(keyword.toLowerCase()) == 0 ) {
				fullKeyword = result.topic_tags[0].tag;
			}
		}

		// check if content is close to the keyword
		if (result.contents.length > 0 && fullKeyword == false) {
			if (String(result.contents[0].headline).toLowerCase().indexOf(keyword.toLowerCase()) == 0) {
				fullKeyword = result.contents[0].headline;
			} 
		}

		if (fullKeyword == false) {
			fullKeyword = keyword;
		} else {
			fullKeyword = keyword + fullKeyword.substring(keyword.length);
		}

		$('#search-placeholder').val(fullKeyword);
		
		// populate here
		var idx = 0;
		var _prev_type = '';
		var _curr_container = null;
		var _first_item = true;
		CT.clearSearchResult();
		$.each(result.contents, function(index, value) {

			// Projects, Features
			if (['project', 'feature'].indexOf(value.type) >= 0) {
				idx++;
				var $_html = $('<div class="item item-'+idx+'" data-type="'+value.type+'"> \
					<div class="item-classification">'+value.type+'</div> \
					<div class="item-title"> \
						<a href="/things-we-make/'+value.slug+'" class="item-title-text">'+value.headline+'</a> \
						<span class="item-title-mask"> \
							<span class="item-title-mask-text">'+value.headline+'</span> \
						</span> \
					</div> \
					<div class="item-thumbnail"> \
					  		<a href="/things-we-make/'+value.slug+'" class="item-title-text"> \
							<img src="'+CT.Utils.getMediaUrl({'image_id' : value.thumbnail_id, suffix: "_240x240"})+'" alt="Item" class="lazyload" data-format="'+CT.Utils.getMediaUrl({'image_id' : value.thumbnail_id, suffix:  "_{media_size}"})+'" data-prefix-320="240x240" data-prefix-all="480x480" /> \
						</a> \
					</div> \
				</div>');
				$('#search-twm').append($_html);

				$_html.waypoint(function(){
					$_html.addClass('item-animate-in');

					// Prevent waypoint from firing again
					$_html.on(CT.transitionEnd, function(){
						$_html.addClass('item-animate-over');
						$_html.waypoint('destroy');
					});
				}, {offset: '100%'});

			}

			// Press, Events, Launches, Awards, Press Releases
			if (['press', 'event', 'launches', 'award', 'press release'].indexOf(value.type) >= 0) {
				if (_prev_type != value.type) {
					_curr_container = $('<div class="search-section"><div class="section-title">'+value.type+'</div></div>');
					_prev_type = value.type;
					$('#search-result-container').append(_curr_container);
				}

				var _html = '<div class="section-item"> \
				<div class="section-date"><span>sep 09 2013</span></div> \
				<div class="section-content"><a href="/says-a-lot/'+value.slug+'">'+value.headline+'</a></div></div>';

				if (_curr_container) {
					_curr_container.append(_html);
				}
			}

			// console.log( value.type );

			if (value.type == 'job') {
				if (_first_item) {
					_curr_container = $('<div class="search-section"><div class="section-title">Careers</div><div class="section-item job-items"></div></div>');
					_first_item = false;
					$('#search-result-container').append(_curr_container);
				}

				var _html = '<div class="job"> \
					<a href="/about-us/'+value.slug+'" class="job-title">'+value.headline+'</a> \
					<div class="job-description">'+value.blurb+'</div></div>';

				if (_curr_container) {
					_curr_container.find('.job-items').append(_html);
				}
			}
		});

		CT.breakLines( CT.$body.find('.job-title'), 'resize' );
	}

}

window.CT.Utils = {
	// Tracks the view state, or "active" media query of the app
	mq: 320,
	
	click: 'click',
	
	init:function(){
		this.setMq();
	},

	// Grabs z-index value from the body element
	// which is where we are storing the current media-query's value
	// Modified version of http://bricss.net/post/22198838298/easily-checking-in-javascript-if-a-css-media-query-has
	// Works across all browsers including IE7+, whereas method linked above fails in certain IE versions
	setMq:function(){
		var mq = $('body').css('z-index');
		this.mq = parseInt(mq, 10);
		//console.log(mq+", "+this.mq);
	},
	
	getClickEvent:function(){
		if(Modernizr.touch){
			this.click = 'tap';
		}
		else{
			this.click = 'click';
		}
	},

	resizeMediaContainer: function() {
		if ($('iframe.media-overlay-media-asset').length > 0) {
			var scr_w = $(window).width();
			var scr_h = $(window).height();
			var ratio = 1.7777777777777777;
			var w = scr_w - (scr_w * 0.1);
			var h = Math.round(w/ratio);

			if (h+100 > scr_h) {
				w = Math.round(w/ratio);
				h = Math.round(h/ratio);
			}

			if( $('iframe.media-overlay-media-asset').parent().hasClass("video-inline") && (!$('iframe.media-overlay-media-asset').parent().hasClass("module-media-image")) ){
				$('iframe.media-overlay-media-asset').parent().css({width: $(window).width() });
				$('iframe.media-overlay-media-asset').css({width: $(window).width() });
			} else if( !$('iframe.media-overlay-media-asset').parent().hasClass("module-media-image") ) {
				$('iframe.media-overlay-media-asset').parent().css({width: w, height : h, margin: "0 auto"});
			}
			
		}
	},

	getMediaUrl: function(opts) {
		opts = $.extend({
			image_id : '0', 
			suffix : '', 
			cdnURL : '',
		}, opts);
		
		if (opts.image_id == 0 || typeof(opts.image_id) != 'string') {
			return '/assets/img/noimage-200x200.jpg';
		}

		var _id = opts.image_id.split('-');
		var _filename = _id[0];
		var _ext = _id[1];

		if (opts.cdnURL == '') {
			if (typeof(cdn_url) != 'undefined')
				opts.cdnURL = cdn_url;
		}
		
		var url = (opts.cdnURL == '' ? '' : opts.cdnURL ) + 'assets/media/' + _filename + opts.suffix + '.' +  _ext;
		return url;
	},

	parseUri : function(url) {
		
		var	o   = this.parseUriOptions,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(url),
			uri = {},
			i   = 14;

		while (i--) uri[o.key[i]] = m[i] || "";

		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});

		return uri;
		
	},
	
	parseUriOptions : {
		strictMode: false,
		key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	}
};


/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.11',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $parent = $(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
// jQuery.event.swipe
// 0.5
// Stephen Band

// Dependencies
// jQuery.event.move 1.2

// One of swipeleft, swiperight, swipeup or swipedown is triggered on
// moveend, when the move has covered a threshold ratio of the dimension
// of the target node, or has gone really fast. Threshold and velocity
// sensitivity changed with:
//
// jQuery.event.special.swipe.settings.threshold
// jQuery.event.special.swipe.settings.sensitivity

(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){
	var add = jQuery.event.add,
	   
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    settings = {
	    	// Ratio of distance over target finger must travel to be
	    	// considered a swipe.
	    	threshold: 0.4,
	    	// Faster fingers can travel shorter distances to be considered
	    	// swipes. 'sensitivity' controls how much. Bigger is shorter.
	    	sensitivity: 6
	    };

	function moveend(e) {
		var w, h, event;

		w = e.target.offsetWidth;
		h = e.target.offsetHeight;

		// Copy over some useful properties from the move event
		event = {
			distX: e.distX,
			distY: e.distY,
			velocityX: e.velocityX,
			velocityY: e.velocityY,
			finger: e.finger
		};

		// Find out which of the four directions was swiped
		if (e.distX > e.distY) {
			if (e.distX > -e.distY) {
				if (e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swiperight';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipeup';
					trigger(e.currentTarget, event);
				}
			}
		}
		else {
			if (e.distX > -e.distY) {
				if (e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipedown';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swipeleft';
					trigger(e.currentTarget, event);
				}
			}
		}
	}

	function getData(node) {
		var data = jQuery.data(node, 'event_swipe');
		
		if (!data) {
			data = { count: 0 };
			jQuery.data(node, 'event_swipe', data);
		}
		
		return data;
	}

	jQuery.event.special.swipe =
	jQuery.event.special.swipeleft =
	jQuery.event.special.swiperight =
	jQuery.event.special.swipeup =
	jQuery.event.special.swipedown = {
		setup: function( data, namespaces, eventHandle ) {
			var data = getData(this);

			// If another swipe event is already setup, don't setup again.
			if (data.count++ > 0) { return; }

			add(this, 'moveend', moveend);

			return true;
		},

		teardown: function() {
			var data = getData(this);

			// If another swipe event is still setup, don't teardown.
			if (--data.count > 0) { return; }

			remove(this, 'moveend', moveend);

			return true;
		},

		settings: settings
	};
});
// jquery.event.move
//
// 1.3.6
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.


(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){

	var // Number of pixels a pressed pointer travels before movestart
	    // event is fired.
	    threshold = 6,
	
	    add = jQuery.event.add,
	
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    // Shim for requestAnimationFrame, falling back to timer. See:
	    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    requestFrame = (function(){
	    	return (
	    		window.requestAnimationFrame ||
	    		window.webkitRequestAnimationFrame ||
	    		window.mozRequestAnimationFrame ||
	    		window.oRequestAnimationFrame ||
	    		window.msRequestAnimationFrame ||
	    		function(fn, element){
	    			return window.setTimeout(function(){
	    				fn();
	    			}, 25);
	    		}
	    	);
	    })(),
	    
	    ignoreTags = {
	    	textarea: true,
	    	input: true,
	    	select: true,
	    	button: true
	    },
	    
	    mouseevents = {
	    	move: 'mousemove',
	    	cancel: 'mouseup dragstart',
	    	end: 'mouseup'
	    },
	    
	    touchevents = {
	    	move: 'touchmove',
	    	cancel: 'touchend',
	    	end: 'touchend'
	    };


	// Constructors
	
	function Timer(fn){
		var callback = fn,
		    active = false,
		    running = false;
		
		function trigger(time) {
			if (active){
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			}
			else {
				running = false;
			}
		}
		
		this.kick = function(fn) {
			active = true;
			if (!running) { trigger(); }
		};
		
		this.end = function(fn) {
			var cb = callback;
			
			if (!fn) { return; }
			
			// If the timer is not running, simply call the end callback.
			if (!running) {
				fn();
			}
			// If the timer is running, and has been kicked lately, then
			// queue up the current callback and the end callback, otherwise
			// just the end callback.
			else {
				callback = active ?
					function(){ cb(); fn(); } : 
					fn ;
				
				active = true;
			}
		};
	}


	// Functions
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function preventDefault(e) {
		e.preventDefault();
	}
	
	function preventIgnoreTags(e) {
		// Don't prevent interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
		
		e.preventDefault();
	}

	function isLeftButton(e) {
		// Ignore mousedowns on any button other than the left (or primary)
		// mouse button, or when a modifier key is pressed.
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;

		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}
		
		// touchList.identifiedTouch() does not exist in
		// webkit yet… we must do the search ourselves...
		
		i = -1;
		l = touchList.length;
		
		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, event) {
		var touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		// Chrome Android (at least) includes touches that have not
		// changed in e.changedTouches. That's a bit annoying. Check
		// that this touch has changed.
		if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

		return touch;
	}


	// Handlers that decide when the first movestart is triggered
	
	function mousedown(e){
		var data;

		if (!isLeftButton(e)) { return; }

		data = {
			target: e.target,
			startX: e.pageX,
			startY: e.pageY,
			timeStamp: e.timeStamp
		};

		add(document, mouseevents.move, mousemove, data);
		add(document, mouseevents.cancel, mouseend, data);
	}

	function mousemove(e){
		var data = e.data;

		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e) {
		removeMouse();
	}

	function removeMouse() {
		remove(document, mouseevents.move, mousemove);
		remove(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		var touch, template;

		// Don't get in the way of interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

		touch = e.changedTouches[0];
		
		// iOS live updates the touch objects whereas Android gives us copies.
		// That means we can't trust the touchstart object to stay the same,
		// so we must copy the data. This object acts as a template for
		// movestart, move and moveend event objects.
		template = {
			target: touch.target,
			startX: touch.pageX,
			startY: touch.pageY,
			timeStamp: e.timeStamp,
			identifier: touch.identifier
		};

		// Use the touch identifier as a namespace, so that we can later
		// remove handlers pertaining only to this touch.
		add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
		add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
	}

	function touchmove(e){
		var data = e.data,
		    touch = changedTouch(e, data);

		if (!touch) { return; }

		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e) {
		var template = e.data,
		    touch = identifiedTouch(e.changedTouches, template.identifier);

		if (!touch) { return; }

		removeTouch(template.identifier);
	}

	function removeTouch(identifier) {
		remove(document, '.' + identifier, touchmove);
		remove(document, '.' + identifier, touchend);
	}


	// Logic for deciding when to trigger a movestart.

	function checkThreshold(e, template, touch, fn) {
		var distX = touch.pageX - template.startX,
		    distY = touch.pageY - template.startY;

		// Do nothing if the threshold has not been crossed.
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

		triggerStart(e, template, touch, distX, distY, fn);
	}

	function handled() {
		// this._handled should return false once, and after return true.
		this._handled = returnTrue;
		return false;
	}

	function flagAsHandled(e) {
		e._handled();
	}

	function triggerStart(e, template, touch, distX, distY, fn) {
		var node = template.target,
		    touches, time;

		touches = e.targetTouches;
		time = e.timeStamp - template.timeStamp;

		// Create a movestart object with some special properties that
		// are passed only to the movestart handlers.
		template.type = 'movestart';
		template.distX = distX;
		template.distY = distY;
		template.deltaX = distX;
		template.deltaY = distY;
		template.pageX = touch.pageX;
		template.pageY = touch.pageY;
		template.velocityX = distX / time;
		template.velocityY = distY / time;
		template.targetTouches = touches;
		template.finger = touches ?
			touches.length :
			1 ;

		// The _handled method is fired to tell the default movestart
		// handler that one of the move events is bound.
		template._handled = handled;
			
		// Pass the touchmove event so it can be prevented if or when
		// movestart is handled.
		template._preventTouchmoveDefault = function() {
			e.preventDefault();
		};

		// Trigger the movestart event.
		trigger(template.target, template);

		// Unbind handlers that tracked the touch or mouse up till now.
		fn(template.identifier);
	}


	// Handlers that control what happens following a movestart

	function activeMousemove(e) {
		var timer = e.data.timer;

		e.data.touch = e;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeMouseend(e) {
		var event = e.data.event,
		    timer = e.data.timer;
		
		removeActiveMouse();

		endEvent(event, timer, function() {
			// Unbind the click suppressor, waiting until after mouseup
			// has been handled.
			setTimeout(function(){
				remove(event.target, 'click', returnFalse);
			}, 0);
		});
	}

	function removeActiveMouse(event) {
		remove(document, mouseevents.move, activeMousemove);
		remove(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = changedTouch(e, event);

		if (!touch) { return; }

		// Stop the interface from gesturing
		e.preventDefault();

		event.targetTouches = e.targetTouches;
		e.data.touch = touch;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeTouchend(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		removeActiveTouch(event);
		endEvent(event, timer);
	}

	function removeActiveTouch(event) {
		remove(document, '.' + event.identifier, activeTouchmove);
		remove(document, '.' + event.identifier, activeTouchend);
	}


	// Logic for triggering move and moveend events

	function updateEvent(event, touch, timeStamp, timer) {
		var time = timeStamp - event.timeStamp;

		event.type = 'move';
		event.distX =  touch.pageX - event.startX;
		event.distY =  touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;
		
		// Average the velocity of the last few events using a decay
		// curve to even out spurious jumps in values.
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX =  touch.pageX;
		event.pageY =  touch.pageY;
	}

	function endEvent(event, timer, fn) {
		timer.end(function(){
			event.type = 'moveend';

			trigger(event.target, event);
			
			return fn && fn();
		});
	}


	// jQuery special event definition

	function setup(data, namespaces, eventHandle) {
		// Stop the node from being dragged
		//add(this, 'dragstart.move drag.move', preventDefault);
		
		// Prevent text selection and touch interface scrolling
		//add(this, 'mousedown.move', preventIgnoreTags);
		
		// Tell movestart default handler that we've handled this
		add(this, 'movestart.move', flagAsHandled);

		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function teardown(namespaces) {
		remove(this, 'dragstart drag', preventDefault);
		remove(this, 'mousedown touchstart', preventIgnoreTags);
		remove(this, 'movestart', flagAsHandled);
		
		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function addMethod(handleObj) {
		// We're not interested in preventing defaults for handlers that
		// come from internal move or moveend bindings
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		// Stop the node from being dragged
		add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
		
		// Prevent text selection and touch interface scrolling
		add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
	}
	
	function removeMethod(handleObj) {
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
		remove(this, 'mousedown.' + handleObj.guid);
	}
	
	jQuery.event.special.movestart = {
		setup: setup,
		teardown: teardown,
		add: addMethod,
		remove: removeMethod,

		_default: function(e) {
			var event, data;
			
			// If no move events were bound to any ancestors of this
			// target, high tail it out of here.
			if (!e._handled()) { return; }

			function update(time) {
				updateEvent(event, data.touch, data.timeStamp);
				trigger(e.target, event);
			}

			event = {
				target: e.target,
				startX: e.startX,
				startY: e.startY,
				pageX: e.pageX,
				pageY: e.pageY,
				distX: e.distX,
				distY: e.distY,
				deltaX: e.deltaX,
				deltaY: e.deltaY,
				velocityX: e.velocityX,
				velocityY: e.velocityY,
				timeStamp: e.timeStamp,
				identifier: e.identifier,
				targetTouches: e.targetTouches,
				finger: e.finger
			};

			data = {
				event: event,
				timer: new Timer(update),
				touch: undefined,
				timeStamp: undefined
			};
			
			if (e.identifier === undefined) {
				// We're dealing with a mouse
				// Stop clicks from propagating during a move
				add(e.target, 'click', returnFalse);
				add(document, mouseevents.move, activeMousemove, data);
				add(document, mouseevents.end, activeMouseend, data);
			}
			else {
				// We're dealing with a touch. Stop touchmove doing
				// anything defaulty.
				e._preventTouchmoveDefault();
				add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
				add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
			}
		}
	};

	jQuery.event.special.move = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.move', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.move', jQuery.noop);
		}
	};
	
	jQuery.event.special.moveend = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.moveend', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.moveend', jQuery.noop);
		}
	};

	add(document, 'mousedown.move', mousedown);
	add(document, 'touchstart.move', touchstart);

	// Make jQuery copy touch event properties over to the jQuery event
	// object, if they are not already listed. But only do the ones we
	// really need. IE7/8 do not have Array#indexOf(), but nor do they
	// have touch events, so let's assume we can ignore them.
	if (typeof Array.prototype.indexOf === 'function') {
		(function(jQuery, undefined){
			var props = ["changedTouches", "targetTouches"],
			    l = props.length;
			
			while (l--) {
				if (jQuery.event.props.indexOf(props[l]) === -1) {
					jQuery.event.props.push(props[l]);
				}
			}
		})(jQuery);
	};
});
// Generated by CoffeeScript 1.3.3
(function() {

  $.fn.snappish = function(opts) {
    var $main, $slides, $wrapper, currentSlideNum, inTransition, numberOfSlides, scroll, scrollDistancePerSlide, scrollToSlide, settings, transitionDuration;
    settings = $.extend({}, $.fn.snappish.defaults, opts);
    $wrapper = $(this);
    $main = $(settings.mainSelector);
    $slides = $(settings.slidesSelector);
    numberOfSlides = $slides.length;
    currentSlideNum = 0;
    scrollDistancePerSlide = 100 / numberOfSlides;
    inTransition = false;
    transitionDuration = $main.css('transition-duration').toString();
    if (transitionDuration.match(/s$/)) {
      transitionDuration = transitionDuration.replace(/s$/, '') * 1000;
    } else {
      transitionDuration = transitionDuration.replace(/ms$/, '') * 1;
    }
    $wrapper.addClass('snappish-wrapper');
    $main.addClass('snappish-main');
    $main.addClass("snappish-" + numberOfSlides + "-slides");
    $slides.addClass('snappish-slide');
    scroll = function(direction) {
      var targetSlideNum;
      targetSlideNum = null;
      if (direction === 'down' && currentSlideNum < numberOfSlides - 1) {
        targetSlideNum = currentSlideNum + 1;
      } else if (direction === 'up' && currentSlideNum > 0) {
        targetSlideNum = currentSlideNum - 1;
      }
      if (targetSlideNum != null) {
        return scrollToSlide(targetSlideNum);
      }
    };
    scrollToSlide = function(targetSlideNum) {
      var eventData, targetScrollDistance;
      if (targetSlideNum === currentSlideNum) {
        return;
      }
      inTransition = true;
      targetScrollDistance = targetSlideNum * scrollDistancePerSlide * -1;
      eventData = {
        fromSlideNum: currentSlideNum,
        fromSlide: $slides.eq(currentSlideNum),
        toSlideNum: targetSlideNum,
        toSlide: $slides.eq(targetSlideNum),
        wrapper: $wrapper,
        main: $main,
        transitionDuration: transitionDuration
      };
      $wrapper.trigger('scrollbegin.snappish', eventData);
      $main.css('transform', "translate3d(0," + targetScrollDistance + "%,0)");
      currentSlideNum = targetSlideNum;
      setTimeout(function() {
        return $wrapper.trigger('scrollend.snappish', eventData);
      }, transitionDuration);
      return setTimeout(function() {
        return inTransition = false;
      }, transitionDuration + 300);
    };
    if (settings.mousewheelEnabled) {
      $wrapper.on('mousewheel', function(e, delta, deltaX, deltaY) {
        if (inTransition) {
          return;
        }
        if (deltaY < 0) {
          return scroll('down');
        } else if (deltaY > 0) {
          return scroll('up');
        }
      });
    }
    if (settings.swipeEnabled) {
      $.event.special.swipe.settings.threshold = settings.swipeThreshold;
      $wrapper.on('swipeup', function(e) {
        return scroll('down');
      });
      $wrapper.on('swipedown', function(e) {
        return scroll('up');
      });
    }
    $wrapper.on('scrollup.snappish', function(e) {
      var targetSlideNum;
      targetSlideNum = currentSlideNum - 1;
      if (targetSlideNum >= 0) {
        return scrollToSlide(targetSlideNum);
      }
    });
    $wrapper.on('scrolldown.snappish', function(e) {
      var targetSlideNum;
      targetSlideNum = currentSlideNum + 1;
      if (targetSlideNum < numberOfSlides) {
        return scrollToSlide(targetSlideNum);
      }
    });
    $wrapper.on('scrollto.snappish', function(e, targetSlideNum) {
      return scrollToSlide(targetSlideNum);
    });
    return $wrapper;
  };

  $.fn.snappish.defaults = {
    mainSelector: '.snappish-main',
    slidesSelector: '.snappish-main > *',
    mousewheelEnabled: true,
    swipeEnabled: true,
    swipeThreshold: 0.1
  };

}).call(this);

(function(){var C=this,r=C._,g={},e=Array.prototype,m=Object.prototype,n=e.push,c=e.slice,p=e.concat,l=m.toString,D=m.hasOwnProperty,F=e.forEach,s=e.map,y=e.reduce,d=e.reduceRight,z=e.filter,q=e.every,w=e.some,x=e.indexOf,B=e.lastIndexOf,m=Array.isArray,H=Object.keys,G=Function.prototype.bind,a=function(f){if(f instanceof a)return f;if(!(this instanceof a))return new a(f);this._wrapped=f};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=a),exports._=
a):C._=a;a.VERSION="1.5.1";var b=a.each=a.forEach=function(f,h,E){if(null!=f)if(F&&f.forEach===F)f.forEach(h,E);else if(f.length===+f.length)for(var b=0,d=f.length;b<d&&h.call(E,f[b],b,f)!==g;b++);else for(b in f)if(a.has(f,b)&&h.call(E,f[b],b,f)===g)break};a.map=a.collect=function(a,h,E){var d=[];if(null==a)return d;if(s&&a.map===s)return a.map(h,E);b(a,function(a,f,b){d.push(h.call(E,a,f,b))});return d};a.reduce=a.foldl=a.inject=function(f,h,E,d){var k=2<arguments.length;null==f&&(f=[]);if(y&&f.reduce===
y)return d&&(h=a.bind(h,d)),k?f.reduce(h,E):f.reduce(h);b(f,function(a,f,b){k?E=h.call(d,E,a,f,b):(E=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");return E};a.reduceRight=a.foldr=function(f,h,E,k){var v=2<arguments.length;null==f&&(f=[]);if(d&&f.reduceRight===d)return k&&(h=a.bind(h,k)),v?f.reduceRight(h,E):f.reduceRight(h);var c=f.length;if(c!==+c)var l=a.keys(f),c=l.length;b(f,function(a,b,d){b=l?l[--c]:--c;v?E=h.call(k,E,f[b],b,d):(E=f[b],v=!0)});if(!v)throw new TypeError("Reduce of empty array with no initial value");
return E};a.find=a.detect=function(a,h,b){var d;k(a,function(a,f,k){if(h.call(b,a,f,k))return d=a,!0});return d};a.filter=a.select=function(a,h,E){var d=[];if(null==a)return d;if(z&&a.filter===z)return a.filter(h,E);b(a,function(a,f,b){h.call(E,a,f,b)&&d.push(a)});return d};a.reject=function(f,h,b){return a.filter(f,function(a,f,d){return!h.call(b,a,f,d)},b)};a.every=a.all=function(f,h,E){h||(h=a.identity);var d=!0;if(null==f)return d;if(q&&f.every===q)return f.every(h,E);b(f,function(a,f,b){if(!(d=
d&&h.call(E,a,f,b)))return g});return!!d};var k=a.some=a.any=function(f,h,E){h||(h=a.identity);var d=!1;if(null==f)return d;if(w&&f.some===w)return f.some(h,E);b(f,function(a,f,b){if(d||(d=h.call(E,a,f,b)))return g});return!!d};a.contains=a.include=function(a,h){return null==a?!1:x&&a.indexOf===x?-1!=a.indexOf(h):k(a,function(a){return a===h})};a.invoke=function(f,h){var b=c.call(arguments,2),d=a.isFunction(h);return a.map(f,function(a){return(d?h:a[h]).apply(a,b)})};a.pluck=function(f,h){return a.map(f,
function(a){return a[h]})};a.where=function(f,h,b){return a.isEmpty(h)?b?void 0:[]:a[b?"find":"filter"](f,function(a){for(var f in h)if(h[f]!==a[f])return!1;return!0})};a.findWhere=function(f,h){return a.where(f,h,!0)};a.max=function(f,h,E){if(!h&&a.isArray(f)&&f[0]===+f[0]&&65535>f.length)return Math.max.apply(Math,f);if(!h&&a.isEmpty(f))return-Infinity;var d={computed:-Infinity,value:-Infinity};b(f,function(a,f,b){f=h?h.call(E,a,f,b):a;f>d.computed&&(d={value:a,computed:f})});return d.value};a.min=
function(f,h,E){if(!h&&a.isArray(f)&&f[0]===+f[0]&&65535>f.length)return Math.min.apply(Math,f);if(!h&&a.isEmpty(f))return Infinity;var d={computed:Infinity,value:Infinity};b(f,function(a,f,b){f=h?h.call(E,a,f,b):a;f<d.computed&&(d={value:a,computed:f})});return d.value};a.shuffle=function(f){var h,d=0,k=[];b(f,function(f){h=a.random(d++);k[d-1]=k[h];k[h]=f});return k};var v=function(f){return a.isFunction(f)?f:function(a){return a[f]}};a.sortBy=function(f,h,b){var d=v(h);return a.pluck(a.map(f,function(a,
f,h){return{value:a,index:f,criteria:d.call(b,a,f,h)}}).sort(function(a,f){var h=a.criteria,b=f.criteria;if(h!==b){if(h>b||void 0===h)return 1;if(h<b||void 0===b)return-1}return a.index<f.index?-1:1}),"value")};var K=function(f,h,d,k){var c={},l=v(null==h?a.identity:h);b(f,function(a,h){var b=l.call(d,a,h,f);k(c,b,a)});return c};a.groupBy=function(f,h,b){return K(f,h,b,function(f,h,b){(a.has(f,h)?f[h]:f[h]=[]).push(b)})};a.countBy=function(f,h,b){return K(f,h,b,function(f,h){a.has(f,h)||(f[h]=0);
f[h]++})};a.sortedIndex=function(f,h,b,d){b=null==b?a.identity:v(b);h=b.call(d,h);for(var k=0,c=f.length;k<c;){var l=k+c>>>1;b.call(d,f[l])<h?k=l+1:c=l}return k};a.toArray=function(f){return f?a.isArray(f)?c.call(f):f.length===+f.length?a.map(f,a.identity):a.values(f):[]};a.size=function(f){return null==f?0:f.length===+f.length?f.length:a.keys(f).length};a.first=a.head=a.take=function(a,h,b){return null==a?void 0:null==h||b?a[0]:c.call(a,0,h)};a.initial=function(a,h,b){return c.call(a,0,a.length-
(null==h||b?1:h))};a.last=function(a,h,b){return null==a?void 0:null==h||b?a[a.length-1]:c.call(a,Math.max(a.length-h,0))};a.rest=a.tail=a.drop=function(a,h,b){return c.call(a,null==h||b?1:h)};a.compact=function(f){return a.filter(f,a.identity)};var u=function(f,h,d){if(h&&a.every(f,a.isArray))return p.apply(d,f);b(f,function(f){a.isArray(f)||a.isArguments(f)?h?n.apply(d,f):u(f,h,d):d.push(f)});return d};a.flatten=function(a,h){return u(a,h,[])};a.without=function(f){return a.difference(f,c.call(arguments,
1))};a.uniq=a.unique=function(f,h,d,k){a.isFunction(h)&&(k=d,d=h,h=!1);d=d?a.map(f,d,k):f;var c=[],v=[];b(d,function(b,d){(h?d&&v[v.length-1]===b:a.contains(v,b))||(v.push(b),c.push(f[d]))});return c};a.union=function(){return a.uniq(a.flatten(arguments,!0))};a.intersection=function(f){var h=c.call(arguments,1);return a.filter(a.uniq(f),function(f){return a.every(h,function(h){return 0<=a.indexOf(h,f)})})};a.difference=function(f){var h=p.apply(e,c.call(arguments,1));return a.filter(f,function(f){return!a.contains(h,
f)})};a.zip=function(){for(var f=a.max(a.pluck(arguments,"length").concat(0)),h=Array(f),b=0;b<f;b++)h[b]=a.pluck(arguments,""+b);return h};a.object=function(a,b){if(null==a)return{};for(var d={},k=0,c=a.length;k<c;k++)b?d[a[k]]=b[k]:d[a[k][0]]=a[k][1];return d};a.indexOf=function(f,b,d){if(null==f)return-1;var k=0,c=f.length;if(d)if("number"==typeof d)k=0>d?Math.max(0,c+d):d;else return k=a.sortedIndex(f,b),f[k]===b?k:-1;if(x&&f.indexOf===x)return f.indexOf(b,d);for(;k<c;k++)if(f[k]===b)return k;
return-1};a.lastIndexOf=function(a,b,d){if(null==a)return-1;var k=null!=d;if(B&&a.lastIndexOf===B)return k?a.lastIndexOf(b,d):a.lastIndexOf(b);for(d=k?d:a.length;d--;)if(a[d]===b)return d;return-1};a.range=function(a,b,d){1>=arguments.length&&(b=a||0,a=0);d=arguments[2]||1;for(var k=Math.max(Math.ceil((b-a)/d),0),c=0,v=Array(k);c<k;)v[c++]=a,a+=d;return v};var A=function(){};a.bind=function(f,b){var d,k;if(G&&f.bind===G)return G.apply(f,c.call(arguments,1));if(!a.isFunction(f))throw new TypeError;
d=c.call(arguments,2);return k=function(){if(!(this instanceof k))return f.apply(b,d.concat(c.call(arguments)));A.prototype=f.prototype;var a=new A;A.prototype=null;var v=f.apply(a,d.concat(c.call(arguments)));return Object(v)===v?v:a}};a.partial=function(a){var b=c.call(arguments,1);return function(){return a.apply(this,b.concat(c.call(arguments)))}};a.bindAll=function(f){var d=c.call(arguments,1);if(0===d.length)throw Error("bindAll must be passed function names");b(d,function(b){f[b]=a.bind(f[b],
f)});return f};a.memoize=function(f,b){var d={};b||(b=a.identity);return function(){var k=b.apply(this,arguments);return a.has(d,k)?d[k]:d[k]=f.apply(this,arguments)}};a.delay=function(a,b){var d=c.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};a.defer=function(f){return a.delay.apply(a,[f,1].concat(c.call(arguments,1)))};a.throttle=function(a,b,d){var k,c,v,l=null,e=0;d||(d={});var u=function(){e=!1===d.leading?0:new Date;l=null;v=a.apply(k,c)};return function(){var t=
new Date;e||!1!==d.leading||(e=t);var I=b-(t-e);k=this;c=arguments;0>=I?(clearTimeout(l),l=null,e=t,v=a.apply(k,c)):l||!1===d.trailing||(l=setTimeout(u,I));return v}};a.debounce=function(a,b,d){var k,c=null;return function(){var v=this,l=arguments,e=d&&!c;clearTimeout(c);c=setTimeout(function(){c=null;d||(k=a.apply(v,l))},b);e&&(k=a.apply(v,l));return k}};a.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;d=a.apply(this,arguments);a=null;return d}};a.wrap=function(a,b){return function(){var d=
[a];n.apply(d,arguments);return b.apply(this,d)}};a.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;0<=d;d--)b=[a[d].apply(this,b)];return b[0]}};a.after=function(a,b){return function(){if(1>--a)return b.apply(this,arguments)}};a.keys=H||function(f){if(f!==Object(f))throw new TypeError("Invalid object");var b=[],d;for(d in f)a.has(f,d)&&b.push(d);return b};a.values=function(f){var b=[],d;for(d in f)a.has(f,d)&&b.push(f[d]);return b};a.pairs=function(f){var b=
[],d;for(d in f)a.has(f,d)&&b.push([d,f[d]]);return b};a.invert=function(f){var b={},d;for(d in f)a.has(f,d)&&(b[f[d]]=d);return b};a.functions=a.methods=function(f){var b=[],d;for(d in f)a.isFunction(f[d])&&b.push(d);return b.sort()};a.extend=function(a){b(c.call(arguments,1),function(b){if(b)for(var d in b)a[d]=b[d]});return a};a.pick=function(a){var d={},k=p.apply(e,c.call(arguments,1));b(k,function(b){b in a&&(d[b]=a[b])});return d};a.omit=function(f){var b={},d=p.apply(e,c.call(arguments,1)),
k;for(k in f)a.contains(d,k)||(b[k]=f[k]);return b};a.defaults=function(a){b(c.call(arguments,1),function(b){if(b)for(var d in b)void 0===a[d]&&(a[d]=b[d])});return a};a.clone=function(f){return a.isObject(f)?a.isArray(f)?f.slice():a.extend({},f):f};a.tap=function(a,b){b(a);return a};var L=function(b,d,k,c){if(b===d)return 0!==b||1/b==1/d;if(null==b||null==d)return b===d;b instanceof a&&(b=b._wrapped);d instanceof a&&(d=d._wrapped);var v=l.call(b);if(v!=l.call(d))return!1;switch(v){case "[object String]":return b==
String(d);case "[object Number]":return b!=+b?d!=+d:0==b?1/b==1/d:b==+d;case "[object Date]":case "[object Boolean]":return+b==+d;case "[object RegExp]":return b.source==d.source&&b.global==d.global&&b.multiline==d.multiline&&b.ignoreCase==d.ignoreCase}if("object"!=typeof b||"object"!=typeof d)return!1;for(var e=k.length;e--;)if(k[e]==b)return c[e]==d;var e=b.constructor,u=d.constructor;if(e!==u&&!(a.isFunction(e)&&e instanceof e&&a.isFunction(u)&&u instanceof u))return!1;k.push(b);c.push(d);e=0;
u=!0;if("[object Array]"==v){if(e=b.length,u=e==d.length)for(;e--&&(u=L(b[e],d[e],k,c)););}else{for(var t in b)if(a.has(b,t)&&(e++,!(u=a.has(d,t)&&L(b[t],d[t],k,c))))break;if(u){for(t in d)if(a.has(d,t)&&!e--)break;u=!e}}k.pop();c.pop();return u};a.isEqual=function(a,b){return L(a,b,[],[])};a.isEmpty=function(b){if(null==b)return!0;if(a.isArray(b)||a.isString(b))return 0===b.length;for(var d in b)if(a.has(b,d))return!1;return!0};a.isElement=function(a){return!(!a||1!==a.nodeType)};a.isArray=m||function(a){return"[object Array]"==
l.call(a)};a.isObject=function(a){return a===Object(a)};b("Arguments Function String Number Date RegExp".split(" "),function(b){a["is"+b]=function(a){return l.call(a)=="[object "+b+"]"}});a.isArguments(arguments)||(a.isArguments=function(b){return!(!b||!a.has(b,"callee"))});"function"!==typeof/./&&(a.isFunction=function(a){return"function"===typeof a});a.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};a.isNaN=function(b){return a.isNumber(b)&&b!=+b};a.isBoolean=function(a){return!0===
a||!1===a||"[object Boolean]"==l.call(a)};a.isNull=function(a){return null===a};a.isUndefined=function(a){return void 0===a};a.has=function(a,b){return D.call(a,b)};a.noConflict=function(){C._=r;return this};a.identity=function(a){return a};a.times=function(a,b,d){for(var k=Array(Math.max(0,a)),c=0;c<a;c++)k[c]=b.call(d,c);return k};a.random=function(a,b){null==b&&(b=a,a=0);return a+Math.floor(Math.random()*(b-a+1))};var J={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};
J.unescape=a.invert(J.escape);var O={escape:RegExp("["+a.keys(J.escape).join("")+"]","g"),unescape:RegExp("("+a.keys(J.unescape).join("|")+")","g")};a.each(["escape","unescape"],function(b){a[b]=function(a){return null==a?"":(""+a).replace(O[b],function(a){return J[b][a]})}});a.result=function(b,d){if(null!=b){var k=b[d];return a.isFunction(k)?k.call(b):k}};a.mixin=function(d){b(a.functions(d),function(b){var k=a[b]=d[b];a.prototype[b]=function(){var b=[this._wrapped];n.apply(b,arguments);b=k.apply(a,
b);return this._chain?a(b).chain():b}})};var M=0;a.uniqueId=function(a){var b=++M+"";return a?a+b:b};a.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/,I={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},T=/\\|'|\r|\n|\t|\u2028|\u2029/g;a.template=function(b,d,k){var c;k=a.defaults({},k,a.templateSettings);var v=RegExp([(k.escape||t).source,(k.interpolate||t).source,(k.evaluate||t).source].join("|")+
"|$","g"),l=0,e="__p+='";b.replace(v,function(a,d,k,c,v){e+=b.slice(l,v).replace(T,function(a){return"\\"+I[a]});d&&(e+="'+\n((__t=("+d+"))==null?'':_.escape(__t))+\n'");k&&(e+="'+\n((__t=("+k+"))==null?'':__t)+\n'");c&&(e+="';\n"+c+"\n__p+='");l=v+a.length;return a});e+="';\n";k.variable||(e="with(obj||{}){\n"+e+"}\n");e="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+e+"return __p;\n";try{c=new Function(k.variable||"obj","_",e)}catch(u){throw u.source=
e,u;}if(d)return c(d,a);d=function(b){return c.call(this,b,a)};d.source="function("+(k.variable||"obj")+"){\n"+e+"}";return d};a.chain=function(b){return a(b).chain()};a.mixin(a);b("pop push reverse shift sort splice unshift".split(" "),function(b){var d=e[b];a.prototype[b]=function(){var k=this._wrapped;d.apply(k,arguments);"shift"!=b&&"splice"!=b||0!==k.length||delete k[0];return this._chain?a(k).chain():k}});b(["concat","join","slice"],function(b){var d=e[b];a.prototype[b]=function(){var b=d.apply(this._wrapped,
arguments);return this._chain?a(b).chain():b}});a.extend(a.prototype,{chain:function(){this._chain=!0;return this},value:function(){return this._wrapped}})}).call(this);var Backbone=Backbone||{};
(function(){var C=[].slice,r=function(e,m,g){var c;e=-1;var p=m.length;switch(g.length){case 0:for(;++e<p;)(c=m[e]).callback.call(c.ctx);break;case 1:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0]);break;case 2:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0],g[1]);break;case 3:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0],g[1],g[2]);break;default:for(;++e<p;)(c=m[e]).callback.apply(c.ctx,g)}},g=Backbone.Events={on:function(e,g,n){this._events||(this._events={});(this._events[e]||(this._events[e]=[])).push({callback:g,
context:n,ctx:n||this});return this},once:function(e,g,n){var c=this,p=_.once(function(){c.off(e,p);g.apply(this,arguments)});p._callback=g;this.on(e,p,n);return this},off:function(e,g,n){var c,p,l,D,r,s,y,d;if(!this._events)return this;if(!e&&!g&&!n)return this._events={},this;D=e?[e]:_.keys(this._events);r=0;for(s=D.length;r<s;r++)if(e=D[r],c=this._events[e]){l=[];if(g||n)for(y=0,d=c.length;y<d;y++)p=c[y],(g&&g!==(p.callback._callback||p.callback)||n&&n!==p.context)&&l.push(p);this._events[e]=l}return this},
trigger:function(e){if(!this._events)return this;var g=C.call(arguments,1),n=this._events[e],c=this._events.all;n&&r(this,n,g);c&&r(this,c,arguments);return this},listenTo:function(e,g,n){var c=this._listeners||(this._listeners={}),p=e._listenerId||(e._listenerId=_.uniqueId("l"));c[p]=e;e.on(g,n||this,this);return this},stopListening:function(e,g,n){var c=this._listeners;if(c){if(e)e.off(g,n,this),g||n||delete c[e._listenerId];else{for(var p in c)c[p].off(null,null,this);this._listeners={}}return this}}};
g.bind=g.on;g.unbind=g.off;"undefined"!==typeof exports&&("undefined"!==typeof module&&module.exports&&(exports=module.exports=g),exports.Backbone=exports.Backbone||Backbone)})();(function(){function C(e,c){var p=(new Date).getTime(),l=Math.max(0,16-(p-g)),m=r.setTimeout(function(){e(p+l)},l);g=p+l;return m}var r=this,g=0,e=["ms","moz","webkit","o"];if("undefined"!==typeof exports)"undefined"!==typeof module&&module.exports&&(exports=module.exports=C),exports.requestAnimationFrame=C;else{for(var m=0;m<e.length&&!r.requestAnimationFrame;++m)r.requestAnimationFrame=r[e[m]+"RequestAnimationFrame"],r.cancelAnimationFrame=r[e[m]+"CancelAnimationFrame"]||r[e[m]+"CancelRequestAnimationFrame"];
r.requestAnimationFrame||(r.requestAnimationFrame=C);r.cancelAnimationFrame||(r.cancelAnimationFrame=function(e){clearTimeout(e)})}})();(function(){function C(){var a=document.body.getBoundingClientRect(),b=this.width=a.width,a=this.height=a.height;this.renderer.setSize(b,a,this.ratio);this.trigger(d.Events.resize,b,a)}var r=this,g=r.Two||{},e=Math.sin,m=Math.cos,n=Math.atan2,c=Math.sqrt,p=Math.PI,l=2*p,D=p/2,F=Math.pow,s=0,y={hasEventListeners:_.isFunction(r.addEventListener),bind:function(a,b,d,c){this.hasEventListeners?a.addEventListener(b,d,!!c):a.attachEvent("on"+b,d);return this},unbind:function(a,b,d,c){this.hasEventListeners?
a.removeEventListeners(b,d,!!c):a.detachEvent("on"+b,d);return this}},d=r.Two=function(a){a=_.defaults(a||{},{fullscreen:!1,width:640,height:480,type:d.Types.svg,autostart:!1});_.each(a,function(a,d){"fullscreen"!==d&&("width"!==d&&"height"!==d&&"autostart"!==d)&&(this[d]=a)},this);_.isElement(a.domElement)&&(this.type=d.Types[a.domElement.tagName.toLowerCase()]);this.renderer=new d[this.type](this);d.Utils.setPlaying.call(this,a.autostart);this.frameCount=0;a.fullscreen?(a=_.bind(C,this),_.extend(document.body.style,
{overflow:"hidden",margin:0,padding:0,top:0,left:0,right:0,bottom:0,position:"fixed"}),_.extend(this.renderer.domElement.style,{display:"block",top:0,left:0,right:0,bottom:0,position:"fixed"}),y.bind(r,"resize",a),a()):_.isElement(a.domElement)||(this.renderer.setSize(a.width,a.height,this.ratio),this.width=a.width,this.height=a.height);this.scene=this.renderer.scene;d.Instances.push(this)};_.extend(d,{Array:r.Float32Array||Array,Types:{webgl:"WebGLRenderer",svg:"SVGRenderer",canvas:"CanvasRenderer"},
Version:"v0.4.0",Identifier:"two-",Properties:{hierarchy:"hierarchy",demotion:"demotion"},Events:{play:"play",pause:"pause",update:"update",render:"render",resize:"resize",change:"change",remove:"remove",insert:"insert"},Commands:{move:"M",line:"L",curve:"C",close:"Z"},Resolution:8,Instances:[],noConflict:function(){r.Two=g;return this},uniqueId:function(){var a=s;s++;return a},Utils:{release:function(a){_.isObject(a)&&(_.isFunction(a.unbind)&&a.unbind(),a.vertices&&(_.isFunction(a.vertices.unbind)&&
a.vertices.unbind(),_.each(a.vertices,function(a){_.isFunction(a.unbind)&&a.unbind()})),a.children&&_.each(a.children,function(a){d.Utils.release(a)}))},Curve:{CollinearityEpsilon:F(10,-30),RecursionLimit:16,CuspLimit:0,Tolerance:{distance:0.25,angle:0,epsilon:0.01}},devicePixelRatio:r.devicePixelRatio||1,getBackingStoreRatio:function(a){return a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1},getRatio:function(a){return d.Utils.devicePixelRatio/
H(a)},setPlaying:function(a){this.playing=!!a;return this},getComputedMatrix:function(a,b){var k=[];b=b&&b.identity()||new d.Matrix;for(var c=a;c&&c._matrix;)k.push(c._matrix),c=c.parent;k.reverse();_.each(k,function(a){a=a.elements;b.multiply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9])});return b},applySvgAttributes:function(a,b){_.each(a.attributes,function(a,d){switch(a.nodeName){case "visibility":b.visible=!!a.nodeValue;break;case "stroke-linecap":b.cap=a.nodeValue;break;case "stroke-linejoin":b.join=
a.nodeValue;break;case "stroke-miterlimit":b.miter=a.nodeValue;break;case "stroke-width":b.linewidth=parseFloat(a.nodeValue);break;case "stroke-opacity":case "fill-opacity":case "opacity":b.opacity=a.nodeValue;break;case "fill":b.fill=a.nodeValue;break;case "stroke":b.stroke=a.nodeValue}});return b},read:{svg:function(){return d.Utils.read.g.apply(this,arguments)},g:function(a){var b=new d.Group;this.add(b);_.each(a.childNodes,function(a){var c=a.nodeName;c&&(c=c.replace(/svg\:/ig,"").toLowerCase(),
c in d.Utils.read&&(a=d.Utils.read[c].call(this,a),b.add(a)))},this);return d.Utils.applySvgAttributes(a,b)},polygon:function(a,b){var k=[];a.getAttribute("points").replace(/([\d\.?]+),([\d\.?]+)/g,function(a,b,c){k.push(new d.Anchor(parseFloat(b),parseFloat(c)))});var c=(new d.Polygon(k,!b)).noStroke();c.fill="black";return d.Utils.applySvgAttributes(a,c)},polyline:function(a){return d.Utils.read.polygon(a,!0)},path:function(a){var b,k,c,e=!1,l=!1,g=a.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig),
p=g.length-1,g=_.flatten(_.map(g,function(a,g){var m,t,I=a[0],q=I.toLowerCase();c=a.slice(1).trim();c=c.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g,function(a,b,d){return parseFloat(b)*Math.pow(10,d)});c=c.split(/[\s,]+|(?=\s?[+\-])/);e=I===q;var f,h,w,n;switch(q){case "z":g>=p?l=!0:(t=b.x,m=b.y,m=new d.Anchor(t,m,void 0,void 0,void 0,void 0,d.Commands.close));break;case "m":case "l":t=parseFloat(c[0]);m=parseFloat(c[1]);m=new d.Anchor(t,m,void 0,void 0,void 0,void 0,"m"===q?d.Commands.move:d.Commands.line);
e&&m.addSelf(b);b=m;break;case "h":case "v":t="h"===q?"x":"y";I="x"===t?"y":"x";m=new d.Anchor(void 0,void 0,void 0,void 0,void 0,void 0,d.Commands.line);m[t]=parseFloat(c[0]);m[I]=b[I];e&&(m[t]+=b[t]);b=m;break;case "s":case "c":m=b.x;I=b.y;k||(k=(new d.Vector).copy(b));"c"===q?(f=parseFloat(c[0]),t=parseFloat(c[1]),q=parseFloat(c[2]),h=parseFloat(c[3]),w=parseFloat(c[4]),n=parseFloat(c[5])):(h=d.Utils.getReflection(b,k,e),f=h.x,t=h.y,q=parseFloat(c[0]),h=parseFloat(c[1]),w=parseFloat(c[2]),n=parseFloat(c[3]));
e&&(f+=m,t+=I,q+=m,h+=I,w+=m,n+=I);_.isObject(b.controls)||d.Anchor.AppendCurveProperties(b);b.controls.right.set(f-b.x,t-b.y);b=m=new d.Anchor(w,n,q-w,h-n,void 0,void 0,d.Commands.curve);k=m.controls.left;break;case "t":case "q":m=b.x;I=b.y;k||(k=(new d.Vector).copy(b));k.isZero()?(f=m,t=I):(f=k.x,I=k.y);"q"===q?(q=parseFloat(c[0]),h=parseFloat(c[1]),w=parseFloat(c[1]),n=parseFloat(c[2])):(h=d.Utils.getReflection(b,k,e),q=h.x,h=h.y,w=parseFloat(c[0]),n=parseFloat(c[1]));e&&(f+=m,t+=I,q+=m,h+=I,w+=
m,n+=I);_.isObject(b.controls)||d.Anchor.AppendCurveProperties(b);b.controls.right.set(f-b.x,t-b.y);b=m=new d.Anchor(w,n,q-w,h-n,void 0,void 0,d.Commands.curve);k=m.controls.left;break;case "a":throw new d.Utils.Error("not yet able to interpret Elliptical Arcs.");}return m}));if(!(1>=g.length))return g=_.compact(g),g=(new d.Polygon(g,l,void 0,!0)).noStroke(),g.fill="black",d.Utils.applySvgAttributes(a,g)},circle:function(a){var b=parseFloat(a.getAttribute("cx")),c=parseFloat(a.getAttribute("cy")),
v=parseFloat(a.getAttribute("r")),g=d.Resolution,u=_.map(_.range(g),function(a){var b=a/g*l;a=v*m(b);b=v*e(b);return new d.Anchor(a,b)},this),u=(new d.Polygon(u,!0,!0)).noStroke();u.translation.set(b,c);u.fill="black";return d.Utils.applySvgAttributes(a,u)},ellipse:function(a){var b=parseFloat(a.getAttribute("cx")),c=parseFloat(a.getAttribute("cy")),v=parseFloat(a.getAttribute("rx")),g=parseFloat(a.getAttribute("ry")),u=d.Resolution,p=_.map(_.range(u),function(a){var b=a/u*l;a=v*m(b);b=g*e(b);return new d.Anchor(a,
b)},this),p=(new d.Polygon(p,!0,!0)).noStroke();p.translation.set(b,c);p.fill="black";return d.Utils.applySvgAttributes(a,p)},rect:function(a){var b=parseFloat(a.getAttribute("x")),c=parseFloat(a.getAttribute("y")),e=parseFloat(a.getAttribute("width")),l=parseFloat(a.getAttribute("height")),e=e/2,l=l/2,g=[new d.Anchor(e,l),new d.Anchor(-e,l),new d.Anchor(-e,-l),new d.Anchor(e,-l)],g=(new d.Polygon(g,!0)).noStroke();g.translation.set(b+e,c+l);g.fill="black";return d.Utils.applySvgAttributes(a,g)},
line:function(a){var b=parseFloat(a.getAttribute("x1")),c=parseFloat(a.getAttribute("y1")),e=parseFloat(a.getAttribute("x2")),l=parseFloat(a.getAttribute("y2")),e=(e-b)/2,l=(l-c)/2,g=[new d.Anchor(-e,-l),new d.Anchor(e,l)],g=(new d.Polygon(g)).noFill();g.translation.set(b+e,c+l);return d.Utils.applySvgAttributes(a,g)}},subdivide:function(a,b,c,e,l,g,m,p,q){q=q||d.Utils.Curve.RecursionLimit;var w=q+1;return _.map(_.range(0,w),function(q){var t=q/w;q=G(t,a,c,l,m);t=G(t,b,e,g,p);return new d.Anchor(q,
t)})},getPointOnCubicBezier:function(a,b,d,c,e){var l=1-a;return l*l*l*b+3*l*l*a*d+3*l*a*a*c+a*a*a*e},getCurveFromPoints:function(a,b){for(var c=a.length,e=c-1,l=0;l<c;l++){var g=a[l];_.isObject(g.controls)||d.Anchor.AppendCurveProperties(g);var m=b?B(l-1,c):Math.max(l-1,0),p=b?B(l+1,c):Math.min(l+1,e);x(a[m],g,a[p]);g._command=0===l?d.Commands.move:d.Commands.curve;g.controls.left.x=_.isNumber(g.controls.left.x)?g.controls.left.x:g.x;g.controls.left.y=_.isNumber(g.controls.left.y)?g.controls.left.y:
g.y;g.controls.right.x=_.isNumber(g.controls.right.x)?g.controls.right.x:g.x;g.controls.right.y=_.isNumber(g.controls.right.y)?g.controls.right.y:g.y}},getControlPoints:function(a,b,c){var l=w(a,b),g=w(c,b);a=z(a,b);c=z(c,b);var q=(l+g)/2;b.u=_.isObject(b.controls.left)?b.controls.left:new d.Vector(0,0);b.v=_.isObject(b.controls.right)?b.controls.right:new d.Vector(0,0);if(1E-4>a||1E-4>c)return b._relative||(b.controls.left.copy(b),b.controls.right.copy(b)),b;a*=0.33;c*=0.33;q=g<l?q+D:q-D;b.controls.left.x=
m(q)*a;b.controls.left.y=e(q)*a;q-=p;b.controls.right.x=m(q)*c;b.controls.right.y=e(q)*c;b._relative||(b.controls.left.x+=b.x,b.controls.left.y+=b.y,b.controls.right.x+=b.x,b.controls.right.y+=b.y);return b},getReflection:function(a,b,c){var e=b.distanceTo(d.Vector.zero);b=w(d.Vector.zero,b);return new d.Vector(e*Math.cos(b)+(c?0:a.x),e*Math.sin(b)+(c?0:a.y))},angleBetween:function(a,b){var d,c;if(4<=arguments.length)return d=arguments[0]-arguments[2],c=arguments[1]-arguments[3],n(c,d);d=a.x-b.x;
c=a.y-b.y;return n(c,d)},distanceBetweenSquared:function(a,b){var d=a.x-b.x,c=a.y-b.y;return d*d+c*c},distanceBetween:function(a,b){return c(q(a,b))},mod:function(a,b){for(;0>a;)a+=b;return a%b},Collection:function(){Array.call(this);1<arguments.length?Array.prototype.push.apply(this,arguments):arguments[0]&&Array.isArray(arguments[0])&&Array.prototype.push.apply(this,arguments[0])},Error:function(a){this.name="two.js";this.message=a}}});d.Utils.Error.prototype=Error();d.Utils.Error.prototype.constructor=
d.Utils.Error;d.Utils.Collection.prototype=[];d.Utils.Collection.constructor=d.Utils.Collection;_.extend(d.Utils.Collection.prototype,Backbone.Events,{pop:function(){var a=Array.prototype.pop.apply(this,arguments);this.trigger(d.Events.remove,[a]);return a},shift:function(){var a=Array.prototype.shift.apply(this,arguments);this.trigger(d.Events.remove,[a]);return a},push:function(){var a=Array.prototype.push.apply(this,arguments);this.trigger(d.Events.insert,arguments);return a},unshift:function(){var a=
Array.prototype.unshift.apply(this,arguments);this.trigger(d.Events.insert,arguments);return a},splice:function(){var a=Array.prototype.splice.apply(this,arguments),b;this.trigger(d.Events.remove,a);2<arguments.length&&(b=this.slice(arguments[0],arguments.length-2),this.trigger(d.Events.insert,b));return a}});var z=d.Utils.distanceBetween,q=d.Utils.distanceBetweenSquared,w=d.Utils.angleBetween,x=d.Utils.getControlPoints,B=d.Utils.mod,H=d.Utils.getBackingStoreRatio,G=d.Utils.getPointOnCubicBezier;
_.extend(d.prototype,Backbone.Events,{appendTo:function(a){a.appendChild(this.renderer.domElement);return this},play:function(){d.Utils.setPlaying.call(this,!0);return this.trigger(d.Events.play)},pause:function(){this.playing=!1;return this.trigger(d.Events.pause)},update:function(){var a=!!this._lastFrame,b=(r.performance&&r.performance.now?r.performance:Date).now();this.frameCount++;a&&(this.timeDelta=parseFloat((b-this._lastFrame).toFixed(3)));this._lastFrame=b;var a=this.width,b=this.height,
c=this.renderer;a===c.width&&b===c.height||c.setSize(a,b,this.ratio);this.trigger(d.Events.update,this.frameCount,this.timeDelta);return this.render()},render:function(){this.renderer.render();return this.trigger(d.Events.render,this.frameCount)},add:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));this.scene.add(b);return this},remove:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));this.scene.remove(b);return this},clear:function(){this.scene.remove(_.toArray(this.scene.children));
return this},makeLine:function(a,b,c,e){c=(c-a)/2;e=(e-b)/2;var l=[new d.Anchor(-c,-e),new d.Anchor(c,e)],l=(new d.Polygon(l)).noFill();l.translation.set(a+c,b+e);this.scene.add(l);return l},makeRectangle:function(a,b,c,e){c/=2;e/=2;e=[new d.Anchor(-c,-e),new d.Anchor(c,-e),new d.Anchor(c,e),new d.Anchor(-c,e)];e=new d.Polygon(e,!0);e.translation.set(a,b);this.scene.add(e);return e},makeCircle:function(a,b,d){return this.makeEllipse(a,b,d,d)},makeEllipse:function(a,b,c,g){var q=d.Resolution,p=_.map(_.range(q),
function(a){var b=a/q*l;a=c*m(b);b=g*e(b);return new d.Anchor(a,b)},this),p=new d.Polygon(p,!0,!0);p.translation.set(a,b);this.scene.add(p);return p},makeCurve:function(a){var b=arguments.length,c=a;if(!_.isArray(a))for(var c=[],e=0;e<b;e+=2){var l=arguments[e];if(!_.isNumber(l))break;c.push(new d.Anchor(l,arguments[e+1]))}var b=arguments[b-1],c=new d.Polygon(c,!(_.isBoolean(b)&&b),!0),b=c.getBoundingClientRect(),g=b.left+b.width/2,m=b.top+b.height/2;_.each(c.vertices,function(a){a.x-=g;a.y-=m});
c.translation.set(g,m);this.scene.add(c);return c},makePolygon:function(a){var b=arguments.length,c=a;if(!_.isArray(a))for(var c=[],e=0;e<b;e+=2){var l=arguments[e];if(!_.isNumber(l))break;c.push(new d.Anchor(l,arguments[e+1]))}b=arguments[b-1];c=new d.Polygon(c,!(_.isBoolean(b)&&b));b=c.getBoundingClientRect();c.center().translation.set(b.left+b.width/2,b.top+b.height/2);this.scene.add(c);return c},makeGroup:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));var c=new d.Group;this.scene.add(c);
c.add(b);return c},interpret:function(a){var b=a.tagName.toLowerCase();if(!(b in d.Utils.read))return null;a=d.Utils.read[b].call(this,a);this.add(a);return a}});(function(){requestAnimationFrame(arguments.callee);_.each(d.Instances,function(a){a.playing&&a.update()})})();"function"===typeof define&&define.amd?define(function(){return d}):"undefined"!=typeof module&&module.exports&&(module.exports=d)})();(function(){var C,r,g,e,m=Two.Vector=function(c,e){this.x=c||0;this.y=e||0};_.extend(m,{zero:new Two.Vector});_.extend(m.prototype,Backbone.Events,{set:function(c,e){this.x=c;this.y=e;return this},copy:function(c){this.x=c.x;this.y=c.y;return this},clear:function(){this.y=this.x=0;return this},clone:function(){return new m(this.x,this.y)},add:function(c,e){this.x=c.x+e.x;this.y=c.y+e.y;return this},addSelf:function(c){this.x+=c.x;this.y+=c.y;return this},sub:function(c,e){this.x=c.x-e.x;this.y=c.y-
e.y;return this},subSelf:function(c){this.x-=c.x;this.y-=c.y;return this},multiplySelf:function(c){this.x*=c.x;this.y*=c.y;return this},multiplyScalar:function(c){this.x*=c;this.y*=c;return this},divideScalar:function(c){c?(this.x/=c,this.y/=c):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this.x*c.x+this.y*c.y},lengthSquared:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},
distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){g=this.x-c.x;e=this.y-c.y;return g*g+e*e},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c){return 1E-4>this.distanceTo(c)},lerp:function(c,e){C=(c.x-this.x)*e+this.x;r=(c.y-this.y)*e+this.y;return this.set(C,r)},isZero:function(){return 1E-4>this.length()},toString:function(){return this.x+","+this.y},toObject:function(){return{x:this.x,y:this.y}}});var n={set:function(c,
e){this._x=c;this._y=e;return this.trigger(Two.Events.change)},copy:function(c){this._x=c.x;this._y=c.y;return this.trigger(Two.Events.change)},clear:function(){this._y=this._x=0;return this.trigger(Two.Events.change)},clone:function(){return new m(this._x,this._y)},add:function(c,e){this._x=c.x+e.x;this._y=c.y+e.y;return this.trigger(Two.Events.change)},addSelf:function(c){this._x+=c.x;this._y+=c.y;return this.trigger(Two.Events.change)},sub:function(c,e){this._x=c.x-e.x;this._y=c.y-e.y;return this.trigger(Two.Events.change)},
subSelf:function(c){this._x-=c.x;this._y-=c.y;return this.trigger(Two.Events.change)},multiplySelf:function(c){this._x*=c.x;this._y*=c.y;return this.trigger(Two.Events.change)},multiplyScalar:function(c){this._x*=c;this._y*=c;return this.trigger(Two.Events.change)},divideScalar:function(c){return c?(this._x/=c,this._y/=c,this.trigger(Two.Events.change)):this.clear()},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this._x*c.x+this._y*c.y},lengthSquared:function(){return this._x*
this._x+this._y*this._y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){g=this._x-c.x;e=this._y-c.y;return g*g+e*e},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c){return 1E-4>this.distanceTo(c)},lerp:function(c,e){C=(c.x-this._x)*e+this._x;r=(c.y-this._y)*e+this._y;return this.set(C,r)},isZero:function(){return 1E-4>
this.length()},toString:function(){return this._x+","+this._y},toObject:function(){return{x:this._x,y:this._y}}},c={get:function(){return this._x},set:function(c){this._x=c;this.trigger(Two.Events.change,"x")}},p={get:function(){return this._y},set:function(c){this._y=c;this.trigger(Two.Events.change,"y")}};Two.Vector.prototype.bind=Two.Vector.prototype.on=function(){this._bound||(this._x=this.x,this._y=this.y,Object.defineProperty(this,"x",c),Object.defineProperty(this,"y",p),_.extend(this,n),this._bound=
!0);Backbone.Events.bind.apply(this,arguments);return this}})();(function(){var C=Two.Commands,r,g,e,m=Two.Anchor=function(c,e,g,n,r,s,y){Two.Vector.call(this,c,e);this._broadcast=_.bind(function(){this.trigger(Two.Events.change)},this);this._command=y||C.move;this._relative=!0;if(!y)return this;m.AppendCurveProperties(this);_.isNumber(g)&&(this.controls.left.x=g);_.isNumber(n)&&(this.controls.left.y=n);_.isNumber(r)&&(this.controls.right.x=r);_.isNumber(s)&&(this.controls.right.y=s)};_.extend(m,{AppendCurveProperties:function(c){c.controls={left:new Two.Vector(0,
0),right:new Two.Vector(0,0)}}});var n={listen:function(){_.isObject(this.controls)||m.AppendCurveProperties(this);_.each(this.controls,function(c){c.bind(Two.Events.change,this._broadcast)},this);return this},ignore:function(){_.each(this.controls,function(c){c.unbind(Two.Events.change,this._broadcast)},this);return this},clone:function(){g=this.controls;e=new Two.Anchor(this.x,this.y,g&&g.left.x,g&&g.left.y,g&&g.right.x,g&&g.right.y,this.command);e.relative=this._relative;return e},toObject:function(){r=
{x:this.x,y:this.y};this._command&&(r.command=this._command);this._relative&&(r.relative=this._relative);this.controls&&(r.controls={left:this.controls.left.toObject(),right:this.controls.right.toObject()});return r}};Object.defineProperty(m.prototype,"command",{get:function(){return this._command},set:function(c){this._command=c;this._command!==C.curve||_.isObject(this.controls)||m.AppendCurveProperties(this);return this.trigger(Two.Events.change)}});Object.defineProperty(m.prototype,"relative",
{get:function(){return this._relative},set:function(c){if(this._relative==c)return this;this._relative=!!c;return this.trigger(Two.Events.change)}});_.extend(m.prototype,Two.Vector.prototype,n);Two.Anchor.prototype.bind=Two.Anchor.prototype.on=function(){Two.Vector.prototype.bind.apply(this,arguments);_.extend(this,n)};Two.Anchor.prototype.unbind=Two.Anchor.prototype.off=function(){Two.Vector.prototype.unbind.apply(this,arguments);_.extend(this,n)}})();(function(){_.range(6);var C=Math.cos,r=Math.sin,g=Math.tan,e,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M,t,I,T,f,h,E,ea,P,Q,aa,da,U,V,W,X,Y,ba,ca,Z,R,$=[],fa=Two.Matrix=function(a,b,d,c,f,e){this.elements=new Two.Array(9);var g=a;_.isArray(g)||(g=_.toArray(arguments));this.identity().set(g)};_.extend(fa,{Identity:[1,0,0,0,1,0,0,0,1],Multiply:function(d,c,f){if(3>=c.length)return z,q,w,e=c[0]||0,m=c[1]||0,n=c[2]||0,p=d,z=p[0]*e+p[1]*m+p[2]*n,q=p[3]*e+p[4]*m+p[5]*n,w=p[6]*e+p[7]*m+p[8]*
n,{x:z,y:q,z:w};x=d[0];B=d[1];H=d[2];G=d[3];a=d[4];b=d[5];k=d[6];v=d[7];K=d[8];u=c[0];A=c[1];L=c[2];J=c[3];O=c[4];M=c[5];t=c[6];I=c[7];T=c[8];f=f||new Two.Array(9);f[0]=x*u+B*J+H*t;f[1]=x*A+B*O+H*I;f[2]=x*L+B*M+H*T;f[3]=G*u+a*J+b*t;f[4]=G*A+a*O+b*I;f[5]=G*L+a*M+b*T;f[6]=k*u+v*J+K*t;f[7]=k*A+v*O+K*I;f[8]=k*L+v*M+K*T;return f}});_.extend(fa.prototype,Backbone.Events,{set:function(a,b,c,f,e,g){d=a;E=arguments.length;_.isArray(d)||(d=_.toArray(arguments));_.each(d,function(a,b){_.isNumber(a)&&(this.elements[b]=
a)},this);return this.trigger(Two.Events.change)},identity:function(){this.set(fa.Identity);return this},multiply:function(c,e,g,m,l,p,n,s,ma){d=arguments;E=d.length;if(1>=E)return _.each(this.elements,function(a,b){this.elements[b]=a*c},this),this.trigger(Two.Events.change);if(3>=E)return z,q,w,c=c||0,e=e||0,g=g||0,l=this.elements,z=l[0]*c+l[1]*e+l[2]*g,q=l[3]*c+l[4]*e+l[5]*g,w=l[6]*c+l[7]*e+l[8]*g,{x:z,y:q,z:w};f=this.elements;h=d;x=f[0];B=f[1];H=f[2];G=f[3];a=f[4];b=f[5];k=f[6];v=f[7];K=f[8];u=
h[0];A=h[1];L=h[2];J=h[3];O=h[4];M=h[5];t=h[6];I=h[7];T=h[8];this.elements[0]=x*u+B*J+H*t;this.elements[1]=x*A+B*O+H*I;this.elements[2]=x*L+B*M+H*T;this.elements[3]=G*u+a*J+b*t;this.elements[4]=G*A+a*O+b*I;this.elements[5]=G*L+a*M+b*T;this.elements[6]=k*u+v*J+K*t;this.elements[7]=k*A+v*O+K*I;this.elements[8]=k*L+v*M+K*T;return this.trigger(Two.Events.change)},inverse:function(a){e=this.elements;a=a||new Two.Matrix;P=e[0];Q=e[1];aa=e[2];da=e[3];U=e[4];V=e[5];W=e[6];X=e[7];Y=e[8];ba=Y*U-V*X;ca=-Y*da+
V*W;Z=X*da-U*W;R=P*ba+Q*ca+aa*Z;if(!R)return null;R=1/R;a.elements[0]=ba*R;a.elements[1]=(-Y*Q+aa*X)*R;a.elements[2]=(V*Q-aa*U)*R;a.elements[3]=ca*R;a.elements[4]=(Y*P-aa*W)*R;a.elements[5]=(-V*P+aa*da)*R;a.elements[6]=Z*R;a.elements[7]=(-X*P+Q*W)*R;a.elements[8]=(U*P-Q*da)*R;return a},scale:function(a,b){E=arguments.length;1>=E&&(b=a);return this.multiply(a,0,0,0,b,0,0,0,1)},rotate:function(a){n=C(a);ea=r(a);return this.multiply(n,-ea,0,ea,n,0,0,0,1)},translate:function(a,b){return this.multiply(1,
0,a,0,1,b,0,0,1)},skewX:function(a){e=g(a);return this.multiply(1,e,0,0,1,0,0,0,1)},skewY:function(a){e=g(a);return this.multiply(1,0,0,e,1,0,0,0,1)},toString:function(a){this.toArray(a,$);return $.join(" ")},toArray:function(a,b){d=this.elements;y=!!b;e=parseFloat(d[0].toFixed(3));m=parseFloat(d[1].toFixed(3));n=parseFloat(d[2].toFixed(3));c=parseFloat(d[3].toFixed(3));p=parseFloat(d[4].toFixed(3));l=parseFloat(d[5].toFixed(3));if(a){D=parseFloat(d[6].toFixed(3));F=parseFloat(d[7].toFixed(3));s=
parseFloat(d[8].toFixed(3));if(y){b[0]=e;b[1]=c;b[2]=D;b[3]=m;b[4]=p;b[5]=F;b[6]=n;b[7]=l;b[8]=s;return}return[e,c,D,m,p,F,n,l,s]}if(y)b[0]=e,b[1]=c,b[2]=m,b[3]=p,b[4]=n,b[5]=l;else return[e,c,m,p,n,l]},clone:function(){e=this.elements[0];m=this.elements[1];n=this.elements[2];c=this.elements[3];p=this.elements[4];l=this.elements[5];D=this.elements[6];F=this.elements[7];s=this.elements[8];return new Two.Matrix(e,m,n,c,p,l,D,F,s)}})})();(function(){var C=Two.Utils.mod,r,g,e,m={version:1.1,ns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(c,p){e=c;g=document.createElementNS(this.ns,e);"svg"===e&&(p=_.defaults(p||{},{version:this.version}));_.isObject(p)&&m.setAttributes(g,p);return g},setAttribute:function(c,e){this.setAttribute(e,c)},setAttributes:function(c,e){_.each(e,m.setAttribute,c);return this},removeAttribute:function(c,e){this.removeAttribute(e)},removeAttributes:function(c,e){_.each(e,
m.removeAttribute,c);return this},toString:function(c,e){var g=c.length,m=g-1,n;return _.map(c,function(s,r){var d,z=e?C(r-1,g):Math.max(r-1,0),q=e?C(r+1,g):Math.min(r+1,m);d=c[z];var w=c[q],x,B,H,z=s.x.toFixed(3),w=s.y.toFixed(3);switch(s._command){case Two.Commands.close:d=Two.Commands.close;break;case Two.Commands.curve:x=d.controls&&d.controls.right||d;H=s.controls&&s.controls.left||s;d._relative?(q=(x.x+d.x).toFixed(3),x=(x.y+d.y).toFixed(3)):(q=x.x.toFixed(3),x=x.y.toFixed(3));s._relative?(B=
(H.x+s.x).toFixed(3),H=(H.y+s.y).toFixed(3)):(B=H.x.toFixed(3),H=H.y.toFixed(3));d=(0===r?Two.Commands.move:Two.Commands.curve)+" "+q+" "+x+" "+B+" "+H+" "+z+" "+w;break;case Two.Commands.move:n=s;d=Two.Commands.move+" "+z+" "+w;break;default:d=s._command+" "+z+" "+w}r>=m&&e&&(s._command===Two.Commands.curve&&(w=n,x=s.controls&&s.controls.right||s,z=w.controls&&w.controls.left||w,s._relative?(q=(x.x+s.x).toFixed(3),x=(x.y+s.y).toFixed(3)):(q=x.x.toFixed(3),x=x.y.toFixed(3)),w._relative?(B=(z.x+w.x).toFixed(3),
H=(z.y+w.y).toFixed(3)):(B=z.x.toFixed(3),H=z.y.toFixed(3)),z=w.x.toFixed(3),w=w.y.toFixed(3),d+=" C "+q+" "+x+" "+B+" "+H+" "+z+" "+w),d+=" Z");return d}).join(" ")},group:{appendChild:function(c){(g=this.domElement.querySelector("#"+Two.Identifier+c))&&this.elem.appendChild(g)},removeChild:function(c){(g=this.domElement.querySelector("#"+Two.Identifier+c))&&this.elem.removeChild(g)},renderChild:function(c){m[c._renderer.type].render.call(c,this)},render:function(c){this._update();this._renderer.elem||
(this._renderer.elem=m.createElement("g",{id:Two.Identifier+this.id}),c.appendChild(this._renderer.elem));r=this._matrix.manual||this._flagMatrix;var e={domElement:c,elem:this._renderer.elem};r&&this._renderer.elem.setAttribute("transform","matrix("+this._matrix.toString()+")");_.each(this.children,m.group.renderChild,c);this._flagAdditions&&_.each(this.additions,m.group.appendChild,e);this._flagSubtractions&&_.each(this.subtractions,m.group.removeChild,e);return this.flagReset()}},polygon:{render:function(c){this._update();
this._renderer.elem||(this._renderer.elem=m.createElement("path",{id:Two.Identifier+this.id}),c.appendChild(this._renderer.elem));g=this._renderer.elem;(r=this._matrix.manual||this._flagMatrix)&&g.setAttribute("transform","matrix("+this._matrix.toString()+")");this._flagVertices&&(vertices=m.toString(this._vertices,this._closed),g.setAttribute("d",vertices));this._flagFill&&g.setAttribute("fill",this._fill);this._flagStroke&&g.setAttribute("stroke",this._stroke);this._flagLinewidth&&g.setAttribute("stroke-width",
this._linewidth);this._flagOpacity&&(g.setAttribute("stroke-opacity",this._opacity),g.setAttribute("fill-opacity",this._opacity));this._flagVisible&&g.setAttribute("visibility",this._visible?"visible":"hidden");this._flagCap&&g.setAttribute("stroke-linecap",this._cap);this._flagJoin&&g.setAttribute("stroke-linejoin",this._join);this._flagMiter&&g.setAttribute("stroke-miterlimit",this.miter);return this.flagReset()}}},n=Two[Two.Types.svg]=function(c){this.domElement=c.domElement||m.createElement("svg");
this.scene=new Two.Group;this.scene.parent=this};_.extend(n,{Utils:m});_.extend(n.prototype,Backbone.Events,{setSize:function(c,e){this.width=c;this.height=e;m.setAttributes(this.domElement,{width:c,height:e});return this},render:function(){m.group.render.call(this.scene,this.domElement);return this}})})();(function(){var C=Two.Utils.mod,r=Two.Utils.getRatio,g,e,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O={group:{renderChild:function(a){O[a._renderer.type].render.call(a,this)},render:function(a){this._update();g=this._matrix.elements;a.save();a.transform(g[0],g[3],g[1],g[4],g[2],g[5]);_.each(this.children,O.group.renderChild,a);a.restore();return this.flagReset()}},polygon:{render:function(t){this._update();g=this._matrix.elements;e=this.stroke;m=this.linewidth;n=this.fill;c=this.opacity;
p=this.visible;l=this.cap;D=this.join;F=this.miter;s=this.closed;y=this._vertices;d=y.length;z=d-1;if(!p)return this;t.save();g&&t.transform(g[0],g[3],g[1],g[4],g[2],g[5]);n&&(t.fillStyle=n);e&&(t.strokeStyle=e);m&&(t.lineWidth=m);F&&(t.miterLimit=F);D&&(t.lineJoin=D);l&&(t.lineCap=l);_.isNumber(c)&&(t.globalAlpha=c);t.beginPath();_.each(y,function(c,e){L=c.x.toFixed(3);J=c.y.toFixed(3);switch(c._command){case Two.Commands.close:t.closePath();break;case Two.Commands.curve:w=s?C(e-1,d):Math.max(e-
1,0);q=s?C(e+1,d):Math.min(e+1,z);x=y[w];B=y[q];v=x.controls&&x.controls.right||x;K=c.controls&&c.controls.left||c;x._relative?(b=(v.x+x.x).toFixed(3),k=(v.y+x.y).toFixed(3)):(b=v.x.toFixed(3),k=v.y.toFixed(3));c._relative?(G=(K.x+c.x).toFixed(3),a=(K.y+c.y).toFixed(3)):(G=K.x.toFixed(3),a=K.y.toFixed(3));t.bezierCurveTo(b,k,G,a,L,J);e>=z&&s&&(B=H,u=c.controls&&c.controls.right||c,A=B.controls&&B.controls.left||B,c._relative?(b=(u.x+c.x).toFixed(3),k=(u.y+c.y).toFixed(3)):(b=u.x.toFixed(3),k=u.y.toFixed(3)),
B._relative?(G=(A.x+B.x).toFixed(3),a=(A.y+B.y).toFixed(3)):(G=A.x.toFixed(3),a=A.y.toFixed(3)),L=B.x.toFixed(3),J=B.y.toFixed(3),t.bezierCurveTo(b,k,G,a,L,J));break;case Two.Commands.line:t.lineTo(L,J);break;case Two.Commands.move:H=c,t.moveTo(L,J)}});s&&t.closePath();t.fill();t.stroke();t.restore();return this.flagReset()}}},M=Two[Two.Types.canvas]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.ctx=this.domElement.getContext("2d");this.overdraw=a.overdraw||!1;this.scene=
new Two.Group;this.scene.parent=this};_.extend(M,{Utils:O});_.extend(M.prototype,Backbone.Events,{setSize:function(a,b,c){this.width=a;this.height=b;this.ratio=_.isUndefined(c)?r(this.ctx):c;this.domElement.width=a*this.ratio;this.domElement.height=b*this.ratio;_.extend(this.domElement.style,{width:a+"px",height:b+"px"});return this},render:function(){var a=1===this.ratio;a||(this.ctx.save(),this.ctx.scale(this.ratio,this.ratio));this.overdraw||this.ctx.clearRect(0,0,this.width,this.height);O.group.render.call(this.scene,
this.ctx);a||this.ctx.restore();return this}})})();(function(){var C=Two.Matrix.Multiply,r=Two.Utils.mod,g=[1,0,0,0,1,0,0,0,1],e=new Two.Array(9),m=Two.Utils.getRatio,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M,t,I,T,f,h,E,ea,P,Q,aa,da,U,V,W,X,Y,ba,ca,Z,R,$,fa,ga,N,ia,ja,ka,ha,S={canvas:document.createElement("canvas"),uv:new Two.Array([0,0,1,0,0,1,0,1,1,0,1,1]),group:{renderChild:function(a){S[a._renderer.type].render.call(a,this.gl,this.program)},render:function(a,b){this._update();n=this.parent;c=n._matrix&&n._matrix.manual||n._flagMatrix;
p=this._matrix.manual||this._flagMatrix;if(c||p)this._renderer.matrix||(this._renderer.matrix=new Two.Array(9)),this._matrix.toArray(!0,e),C(e,n._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*n._renderer.scale,c&&(this._flagMatrix=!0);_.each(this.children,S.group.renderChild,{gl:a,program:b});return this.flagReset()}},polygon:{render:function(a,b){if(!this._visible||!this._opacity)return this;n=this.parent;c=n._matrix.manual||n._flagMatrix;p=this._matrix.manual||this._flagMatrix;
l=this._flagVertices||this._flagFill||this._flagStroke||this._flagLinewidth||this._flagOpacity||this._flagVisible||this._flagCap||this._flagJoin||this._flagMiter||this._flagScale;this._update();if(c||p)this._renderer.matrix||(this._renderer.matrix=new Two.Array(9)),this._matrix.toArray(!0,e),C(e,n._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*n._renderer.scale;l&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new Two.Array(12)),
S.getBoundingClientRect(this._vertices,this._linewidth,this._renderer.rect),S.getTriangles(this._renderer.rect,this._renderer.triangles),S.updateBuffer(a,this,b),S.updateTexture(a,this));a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer);a.vertexAttribPointer(b.textureCoords,2,a.FLOAT,!1,0,0);a.bindTexture(a.TEXTURE_2D,this._renderer.texture);a.uniformMatrix3fv(b.matrix,!1,this._renderer.matrix);a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer);a.vertexAttribPointer(b.position,2,a.FLOAT,
!1,0,0);a.drawArrays(a.TRIANGLES,0,6);return this.flagReset()}},getBoundingClientRect:function(c,e,f){D=Infinity;F=-Infinity;s=Infinity;y=-Infinity;_.each(c,function(b,c){d=b.x;z=b.y;q;w;x;B;H=b.controls;s=Math.min(z,s);D=Math.min(d,D);F=Math.max(d,F);y=Math.max(z,y);b.controls&&(G=H.left,a=H.right,G&&a&&(q=b._relative?G.x+d:G.x,w=b._relative?G.y+z:G.y,x=b._relative?a.x+d:a.x,B=b._relative?a.y+z:a.y,q&&(w&&x&&B)&&(s=Math.min(w,B,s),D=Math.min(q,x,D),F=Math.max(q,x,F),y=Math.max(w,B,y))))});_.isNumber(e)&&
(s-=e,D-=e,F+=e,y+=e);b=F-D;k=y-s;f.top=s;f.left=D;f.right=F;f.bottom=y;f.width=b;f.height=k;f.centroid||(f.centroid={});f.centroid.x=-D;f.centroid.y=-s},getTriangles:function(a,b){s=a.top;D=a.left;F=a.right;y=a.bottom;b[0]=D;b[1]=s;b[2]=F;b[3]=s;b[4]=D;b[5]=y;b[6]=D;b[7]=y;b[8]=F;b[9]=s;b[10]=F;b[11]=y},updateCanvas:function(a){v=a._vertices;K=this.canvas;u=this.ctx;A=a._renderer.scale;L=a._stroke;J=a._linewidth*A;O=a._fill;M=a._opacity;t=a._cap;I=a._join;T=a._miter;f=a._closed;h=v.length;E=h-1;
K.width=Math.max(Math.ceil(a._renderer.rect.width*A),1);K.height=Math.max(Math.ceil(a._renderer.rect.height*A),1);ea=a._renderer.rect.centroid;P=ea.x*A;Q=ea.y*A;u.clearRect(0,0,K.width,K.height);O&&(u.fillStyle=O);L&&(u.strokeStyle=L);J&&(u.lineWidth=J);T&&(u.miterLimit=T);I&&(u.lineJoin=I);t&&(u.lineCap=t);_.isNumber(M)&&(u.globalAlpha=M);u.beginPath();_.each(v,function(a,b){aa;da;q;x;U;V;W;X;Y;ba;ca;G;d=(a.x*A+P).toFixed(3);z=(a.y*A+Q).toFixed(3);switch(a._command){case Two.Commands.close:u.closePath();
break;case Two.Commands.curve:da=f?r(b-1,h):Math.max(b-1,0);aa=f?r(b+1,h):Math.min(b+1,E);q=v[da];x=v[aa];Y=q.controls&&q.controls.right||q;ba=a.controls&&a.controls.left||a;q._relative?(W=((Y.x+q.x)*A+P).toFixed(3),X=((Y.y+q.y)*A+Q).toFixed(3)):(W=(Y.x*A+P).toFixed(3),X=(Y.y*A+Q).toFixed(3));a._relative?(U=((ba.x+a.x)*A+P).toFixed(3),V=((ba.y+a.y)*A+Q).toFixed(3)):(U=(ba.x*A+P).toFixed(3),V=(ba.y*A+Q).toFixed(3));u.bezierCurveTo(W,X,U,V,d,z);b>=E&&f&&(x=B,ca=a.controls&&a.controls.right||a,G=x.controls&&
x.controls.left||x,a._relative?(W=((ca.x+a.x)*A+P).toFixed(3),X=((ca.y+a.y)*A+Q).toFixed(3)):(W=(ca.x*A+P).toFixed(3),X=(ca.y*A+Q).toFixed(3)),x._relative?(U=((G.x+x.x)*A+P).toFixed(3),V=((G.y+x.y)*A+P).toFixed(3)):(U=(G.x*A+P).toFixed(3),V=(G.y*A+Q).toFixed(3)),d=(x.x*A+P).toFixed(3),z=(x.y*A+Q).toFixed(3),u.bezierCurveTo(W,X,U,V,d,z));break;case Two.Commands.line:u.lineTo(d,z);break;case Two.Commands.move:B=a,u.moveTo(d,z)}});f&&u.closePath();u.fill();u.stroke()},updateTexture:function(a,b){this.updateCanvas(b);
b._renderer.texture&&a.deleteTexture(b._renderer.texture);a.bindBuffer(a.ARRAY_BUFFER,b._renderer.textureCoordsBuffer);b._renderer.texture=a.createTexture();a.bindTexture(a.TEXTURE_2D,b._renderer.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);0>=this.canvas.width||0>=this.canvas.height||a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.canvas)},
updateBuffer:function(a,b,c){_.isObject(b._renderer.buffer)&&a.deleteBuffer(b._renderer.buffer);b._renderer.buffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b._renderer.buffer);a.enableVertexAttribArray(c.position);a.bufferData(a.ARRAY_BUFFER,b._renderer.triangles,a.STATIC_DRAW);_.isObject(b._renderer.textureCoordsBuffer)&&a.deleteBuffer(b._renderer.textureCoordsBuffer);b._renderer.textureCoordsBuffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b._renderer.textureCoordsBuffer);a.enableVertexAttribArray(c.textureCoords);
a.bufferData(a.ARRAY_BUFFER,this.uv,a.STATIC_DRAW)},program:{create:function(a,b){Z=a.createProgram();_.each(b,function(b){a.attachShader(Z,b)});a.linkProgram(Z);R=a.getProgramParameter(Z,a.LINK_STATUS);if(!R)throw ga=a.getProgramInfoLog(Z),a.deleteProgram(Z),new Two.Utils.Error("unable to link program: "+ga);return Z}},shaders:{create:function(a,b,c){$=a.createShader(a[c]);a.shaderSource($,b);a.compileShader($);fa=a.getShaderParameter($,a.COMPILE_STATUS);if(!fa)throw ga=a.getShaderInfoLog($),a.deleteShader($),
new Two.Utils.Error("unable to compile shader "+$+": "+ga);return $},types:{vertex:"VERTEX_SHADER",fragment:"FRAGMENT_SHADER"},vertex:"attribute vec2 a_position;\nattribute vec2 a_textureCoords;\n\nuniform mat3 u_matrix;\nuniform vec2 u_resolution;\n\nvarying vec2 v_textureCoords;\n\nvoid main() {\n   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;\n   vec2 normal = projected / u_resolution;\n   vec2 clipspace = (normal * 2.0) - 1.0;\n\n   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);\n   v_textureCoords = a_textureCoords;\n}",
fragment:"precision mediump float;\n\nuniform sampler2D u_image;\nvarying vec2 v_textureCoords;\n\nvoid main() {\n  gl_FragColor = texture2D(u_image, v_textureCoords);\n}"}};S.ctx=S.canvas.getContext("2d");var la=Two[Two.Types.webgl]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.scene=new Two.Group;this.scene.parent=this;this._renderer={matrix:new Two.Array(g),scale:1};this._flagMatrix=!0;ha=_.defaults(a||{},{antialias:!1,alpha:!0,premultipliedAlpha:!0,stencil:!0,
preserveDrawingBuffer:!0,overdraw:!1});this.overdraw=ha.overdraw;N=this.ctx=this.domElement.getContext("webgl",ha)||this.domElement.getContext("experimental-webgl",ha);if(!this.ctx)throw new Two.Utils.Error("unable to create a webgl context. Try using another renderer.");ka=S.shaders.create(N,S.shaders.vertex,S.shaders.types.vertex);ja=S.shaders.create(N,S.shaders.fragment,S.shaders.types.fragment);this.program=S.program.create(N,[ka,ja]);N.useProgram(this.program);this.program.position=N.getAttribLocation(this.program,
"a_position");this.program.matrix=N.getUniformLocation(this.program,"u_matrix");this.program.textureCoords=N.getAttribLocation(this.program,"a_textureCoords");N.disable(N.DEPTH_TEST);N.enable(N.BLEND);N.blendEquationSeparate(N.FUNC_ADD,N.FUNC_ADD);N.blendFuncSeparate(N.SRC_ALPHA,N.ONE_MINUS_SRC_ALPHA,N.ONE,N.ONE_MINUS_SRC_ALPHA)};_.extend(la.prototype,Backbone.Events,{setSize:function(a,b,c){this.width=a;this.height=b;this.ratio=_.isUndefined(c)?m(this.ctx):c;this.domElement.width=a*this.ratio;this.domElement.height=
b*this.ratio;_.extend(this.domElement.style,{width:a+"px",height:b+"px"});a*=this.ratio;b*=this.ratio;this._renderer.matrix[0]=this._renderer.matrix[4]=this._renderer.scale=this.ratio;this._flagMatrix=!0;this.ctx.viewport(0,0,a,b);ia=this.ctx.getUniformLocation(this.program,"u_resolution");this.ctx.uniform2f(ia,a,b);return this},render:function(){N=this.ctx;this.overdraw||N.clear(N.COLOR_BUFFER_BIT|N.DEPTH_BUFFER_BIT);S.group.render.call(this.scene,N,this.program);this._flagMatrix=!1;return this}})})();(function(){var C,r=Two.Shape=function(g){this._renderer={};this.id=Two.uniqueId();this._matrix=new Two.Matrix;this.translation=new Two.Vector;this.translation.bind(Two.Events.change,_.bind(r.FlagMatrix,this));this.rotation=0;this.scale=1};_.extend(r,Backbone.Events,{FlagMatrix:function(){this._flagMatrix=!0},MakeObservable:function(g){Object.defineProperty(g,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation=e;this._flagMatrix=!0}});Object.defineProperty(g,"scale",{get:function(){return this._scale},
set:function(e){this._scale=e;this._flagScale=this._flagMatrix=!0}})}});_.extend(r.prototype,{_flagMatrix:!0,_rotation:0,_scale:1,addTo:function(g){g.add(this);return this},clone:function(){C=new r;C.translation.copy(this.translation);C.rotation=this.rotation;C.scale=this.scale;_.each(r.Properties,function(g){C[g]=this[g]},this);return C._update()},_update:function(){!this._matrix.manual&&this._flagMatrix&&this._matrix.identity().translate(this.translation.x,this.translation.y).scale(this.scale).rotate(this.rotation);
this.parent&&_.isFunction(this.parent._update)&&this.parent._update();return this},flagReset:function(){this._flagScale=this._flagMatrix=!1;return this}});r.MakeObservable(r.prototype)})();(function(){var C=Math.min,r=Math.max,g=Math.round,e=Two.Utils.getComputedMatrix,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M=Two.Polygon=function(a,b,c,d){Two.Shape.call(this);this._renderer.type="polygon";this._closed=!!b;this._curved=!!c;this.beginning=0;this.ending=1;this.fill="#fff";this.stroke="#000";this.opacity=this.linewidth=1;this.visible=!0;this.cap="butt";this.join="miter";this.miter=4;this._vertices=[];this.vertices=a;this.automatic=!d};_.extend(M,{Properties:"fill stroke linewidth opacity visible cap join miter closed curved automatic beginning ending".split(" "),
FlagVertices:function(){this._flagVertices=!0},MakeObservable:function(a){Two.Shape.MakeObservable(a);_.each(M.Properties.slice(0,8),function(b){var c="_"+b,d="_flag"+b.charAt(0).toUpperCase()+b.slice(1);Object.defineProperty(a,b,{get:function(){return this[c]},set:function(a){this[c]=a;this[d]=!0}})});Object.defineProperty(a,"closed",{get:function(){return this._closed},set:function(a){this._closed=!!a;this._flagVertices=!0}});Object.defineProperty(a,"curved",{get:function(){return this._curved},
set:function(a){this._curved=!!a;this._flagVertices=!0}});Object.defineProperty(M.prototype,"automatic",{get:function(){return this._automatic},set:function(a){a!==this._automatic&&(method=(this._automatic=!!a)?"ignore":"listen",_.each(this.vertices,function(a){a[method]()}))}});Object.defineProperty(a,"beginning",{get:function(){return this._beginning},set:function(a){this._beginning=C(r(a,0),this._ending);this._flagVertices=!0}});Object.defineProperty(a,"ending",{get:function(){return this._ending},
set:function(a){this._ending=C(r(a,this._beginning),1);this._flagVertices=!0}});Object.defineProperty(a,"vertices",{get:function(){return this._collection},set:function(a){var b=_.bind(M.FlagVertices,this),c=_.bind(function(a){_.each(a,function(a){a.bind(Two.Events.change,b)},this);b()},this),d=_.bind(function(a){_.each(a,function(a){a.unbind(Two.Events.change,b)},this);b()},this);this._collection&&this._collection.unbind();this._collection=new Two.Utils.Collection(a.slice(0));this._collection.bind(Two.Events.insert,
c);this._collection.bind(Two.Events.remove,d);verticesChanged=!0;c(this._collection)}})}});_.extend(M.prototype,Two.Shape.prototype,{_flagVertices:!0,_flagFill:!0,_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagCap:!0,_flagJoin:!0,_flagMiter:!0,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,clone:function(a){a=a||this.parent;s=_.map(this.vertices,function(a){return a.clone()});
y=new M(s,this.closed,this.curved,!this.automatic);_.each(Two.Shape.Properties,function(a){y[a]=this[a]},this);y.translation.copy(this.translation);y.rotation=this.rotation;y.scale=this.scale;a.add(y);return y},toObject:function(){var a={vertices:_.map(this.vertices,function(a){return a.toObject()})};_.each(Two.Shape.Properties,function(b){a[b]=this[b]},this);a.translation=this.translation.toObject;a.rotation=this.rotation;a.scale=this.scale;return a},noFill:function(){this.fill="transparent";return this},
noStroke:function(){this.stroke="transparent";return this},corner:function(){d=this.getBoundingClientRect(!0);d.centroid={x:d.left+d.width/2,y:d.top+d.height/2};_.each(this.vertices,function(a){a.addSelf(d.centroid)});return this},center:function(){d=this.getBoundingClientRect(!0);d.centroid={x:d.left+d.width/2,y:d.top+d.height/2};_.each(this.vertices,function(a){a.subSelf(d.centroid)});return this},remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},getBoundingClientRect:function(a){this._update();
b=a?this._matrix:e(this);z=this.linewidth/2;void 0;q=Infinity;w=-Infinity;x=Infinity;B=-Infinity;_.each(this._vertices,function(a){H=a.x;G=a.y;a=b.multiply(H,G,1);x=C(a.y-z,x);q=C(a.x-z,q);w=r(a.x+z,w);B=r(a.y+z,B)});return{top:x,left:q,right:w,bottom:B,width:w-q,height:B-x}},plot:function(){if(this.curved)return Two.Utils.getCurveFromPoints(this._vertices,this.closed),this;_.each(this._vertices,function(a,b){a._command=0===b?Two.Commands.move:Two.Commands.line},this);return this},subdivide:function(b){this._update();
p=this.vertices.length-1;a=this.vertices[p];l=this._closed||this.vertices[p]._command===Two.Commands.close;s=[];_.each(this.vertices,function(c,d){if(!(0>=d)||l)if(c.command===Two.Commands.move)s.push(new Two.Anchor(a.x,a.y)),0<d&&(s[s.length-1].command=Two.Commands.line);else{w=a.controls&&a.controls.right;q=c.controls&&c.controls.left;k=a.x;v=a.y;K=(w||a).x;u=(w||a).y;A=(q||c).x;L=(q||c).y;J=c.x;O=c.y;w&&a._relative&&(K+=a.x,u+=a.y);q&&c._relative&&(A+=c.x,L+=c.y);var e=Two.Utils.subdivide(k,v,
K,u,A,L,J,O,b);s=s.concat(e);_.each(e,function(b,c){b.command=0>=c&&a.command===Two.Commands.move?Two.Commands.move:Two.Commands.line});d>=p&&(s.push(new Two.Anchor(J,O)),s[s.length-1].command=l?Two.Commands.close:Two.Commands.line)}a=c},this);this._curved=this._automatic=!1;this.vertices=s;return this},_update:function(){if(this._flagVertices){m=this.vertices.length;p=m-1;n=g(this._beginning*p);c=g(this._ending*p);this._vertices.length=0;for(F=n;F<c+1;F++)D=this.vertices[F],this._vertices.push(D);
this._automatic&&this.plot()}Two.Shape.prototype._update.call(this);return this},flagReset:function(){this._flagVertices=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpacity=this._flagVisible=this._flagCap=this._flagJoin=this._flagMiter=!1;Two.Shape.prototype.flagReset.call(this);return this}});M.MakeObservable(M.prototype)})();(function(){var C=Math.min,r=Math.max,g,e,m,n,c,p,l,D,F,s,y,d,z=Two.Group=function(c){Two.Shape.call(this,!0);this._renderer.type="group";this.additions=[];this.subtractions=[];this.children={}};_.extend(z,{MakeObservable:function(c){Two.Shape.MakeObservable(c);z.MakeGetterSetter(c,Two.Polygon.Properties)},MakeGetterSetter:function(c,d){_.isArray(d)||(d=[d]);_.each(d,function(d){g="_"+d;Object.defineProperty(c,d,{get:function(){return this[g]},set:function(c){this[g]=c;_.each(this.children,function(e){e[d]=
c})}})})}});_.extend(z.prototype,Two.Shape.prototype,{_flagAdditions:!1,_flagSubtractions:!1,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,clone:function(c){c=c||this.parent;n=new z;c.add(n);m=_.map(this.children,function(c){return c.clone(n)});n.translation.copy(this.translation);n.rotation=this.rotation;n.scale=this.scale;return n},toObject:function(){var c={children:{},translation:this.translation.toObject(),
rotation:this.rotation,scale:this.scale};_.each(this.children,function(d,e){c.children[e]=d.toObject()},this);return c},corner:function(){c=this.getBoundingClientRect(!0);p={x:c.left,y:c.top};_.each(this.children,function(c){c.translation.subSelf(p)});return this},center:function(){c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/2,y:c.top+c.height/2};_.each(this.children,function(d){d.translation.subSelf(c.centroid)});return this},add:function(c){l=arguments.length;D=c;m=this.children;
F=this.parent;s=this.additions;_.isArray(c)||(D=_.toArray(arguments));_.each(D,function(c){c&&(y=c.id,e=c.parent,_.isUndefined(m[y])&&(e&&(delete e.children[y],d=_.indexOf(e.additions,y),0<=d&&e.additions.splice(d,1)),m[y]=c,c.parent=this,s.push(y),this._flagAdditions=!0))},this);return this},remove:function(c){l=arguments.length;D=c;m=this.children;F=this.parent;s=this.subtractions;if(0>=l&&F)return F.remove(this),this;_.isArray(c)||(D=_.toArray(arguments));_.each(D,function(c){y=c.id;grandchildren=
c.children;e=c.parent;y in m&&(delete m[y],delete c.parent,d=_.indexOf(e.additions,y),0<=d&&e.additions.splice(d,1),s.push(y),this._flagSubtractions=!0)},this);return this},getBoundingClientRect:function(d){this._update();var e=Infinity,g=-Infinity,l=Infinity,m=-Infinity;_.each(this.children,function(d){c=d.getBoundingClientRect();_.isNumber(c.top)&&(_.isNumber(c.left)&&_.isNumber(c.right)&&_.isNumber(c.bottom))&&(l=C(c.top,l),e=C(c.left,e),g=r(c.right,g),m=r(c.bottom,m))},this);return{top:l,left:e,
right:g,bottom:m,width:g-e,height:m-l}},noFill:function(){_.each(this.children,function(c){c.noFill()});return this},noStroke:function(){_.each(this.children,function(c){c.noStroke()});return this},subdivide:function(){var c=arguments;_.each(this.children,function(d){d.subdivide.apply(d,c)});return this},flagReset:function(){this._flagAdditions&&(this.additions.length=0,this._flagAdditions=!1);this._flagSubtractions&&(this.subtractions.length=0,this._flagSubtractions=!1);Two.Shape.prototype.flagReset.call(this);
return this}});z.MakeObservable(z.prototype)})();(function(){var C=this,r=C._,g={},e=Array.prototype,m=Object.prototype,n=e.push,c=e.slice,p=e.concat,l=m.toString,D=m.hasOwnProperty,F=e.forEach,s=e.map,y=e.reduce,d=e.reduceRight,z=e.filter,q=e.every,w=e.some,x=e.indexOf,B=e.lastIndexOf,m=Array.isArray,H=Object.keys,G=Function.prototype.bind,a=function(f){if(f instanceof a)return f;if(!(this instanceof a))return new a(f);this._wrapped=f};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=a),exports._=
a):C._=a;a.VERSION="1.5.1";var b=a.each=a.forEach=function(f,h,E){if(null!=f)if(F&&f.forEach===F)f.forEach(h,E);else if(f.length===+f.length)for(var b=0,d=f.length;b<d&&h.call(E,f[b],b,f)!==g;b++);else for(b in f)if(a.has(f,b)&&h.call(E,f[b],b,f)===g)break};a.map=a.collect=function(a,h,E){var d=[];if(null==a)return d;if(s&&a.map===s)return a.map(h,E);b(a,function(a,f,b){d.push(h.call(E,a,f,b))});return d};a.reduce=a.foldl=a.inject=function(f,h,E,d){var k=2<arguments.length;null==f&&(f=[]);if(y&&f.reduce===
y)return d&&(h=a.bind(h,d)),k?f.reduce(h,E):f.reduce(h);b(f,function(a,f,b){k?E=h.call(d,E,a,f,b):(E=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");return E};a.reduceRight=a.foldr=function(f,h,E,k){var v=2<arguments.length;null==f&&(f=[]);if(d&&f.reduceRight===d)return k&&(h=a.bind(h,k)),v?f.reduceRight(h,E):f.reduceRight(h);var c=f.length;if(c!==+c)var l=a.keys(f),c=l.length;b(f,function(a,b,d){b=l?l[--c]:--c;v?E=h.call(k,E,f[b],b,d):(E=f[b],v=!0)});if(!v)throw new TypeError("Reduce of empty array with no initial value");
return E};a.find=a.detect=function(a,h,b){var d;k(a,function(a,f,k){if(h.call(b,a,f,k))return d=a,!0});return d};a.filter=a.select=function(a,h,E){var d=[];if(null==a)return d;if(z&&a.filter===z)return a.filter(h,E);b(a,function(a,f,b){h.call(E,a,f,b)&&d.push(a)});return d};a.reject=function(f,h,b){return a.filter(f,function(a,f,d){return!h.call(b,a,f,d)},b)};a.every=a.all=function(f,h,E){h||(h=a.identity);var d=!0;if(null==f)return d;if(q&&f.every===q)return f.every(h,E);b(f,function(a,f,b){if(!(d=
d&&h.call(E,a,f,b)))return g});return!!d};var k=a.some=a.any=function(f,h,E){h||(h=a.identity);var d=!1;if(null==f)return d;if(w&&f.some===w)return f.some(h,E);b(f,function(a,f,b){if(d||(d=h.call(E,a,f,b)))return g});return!!d};a.contains=a.include=function(a,h){return null==a?!1:x&&a.indexOf===x?-1!=a.indexOf(h):k(a,function(a){return a===h})};a.invoke=function(f,h){var b=c.call(arguments,2),d=a.isFunction(h);return a.map(f,function(a){return(d?h:a[h]).apply(a,b)})};a.pluck=function(f,h){return a.map(f,
function(a){return a[h]})};a.where=function(f,h,b){return a.isEmpty(h)?b?void 0:[]:a[b?"find":"filter"](f,function(a){for(var f in h)if(h[f]!==a[f])return!1;return!0})};a.findWhere=function(f,h){return a.where(f,h,!0)};a.max=function(f,h,E){if(!h&&a.isArray(f)&&f[0]===+f[0]&&65535>f.length)return Math.max.apply(Math,f);if(!h&&a.isEmpty(f))return-Infinity;var d={computed:-Infinity,value:-Infinity};b(f,function(a,f,b){f=h?h.call(E,a,f,b):a;f>d.computed&&(d={value:a,computed:f})});return d.value};a.min=
function(f,h,E){if(!h&&a.isArray(f)&&f[0]===+f[0]&&65535>f.length)return Math.min.apply(Math,f);if(!h&&a.isEmpty(f))return Infinity;var d={computed:Infinity,value:Infinity};b(f,function(a,f,b){f=h?h.call(E,a,f,b):a;f<d.computed&&(d={value:a,computed:f})});return d.value};a.shuffle=function(f){var h,d=0,k=[];b(f,function(f){h=a.random(d++);k[d-1]=k[h];k[h]=f});return k};var v=function(f){return a.isFunction(f)?f:function(a){return a[f]}};a.sortBy=function(f,h,b){var d=v(h);return a.pluck(a.map(f,function(a,
f,h){return{value:a,index:f,criteria:d.call(b,a,f,h)}}).sort(function(a,f){var h=a.criteria,b=f.criteria;if(h!==b){if(h>b||void 0===h)return 1;if(h<b||void 0===b)return-1}return a.index<f.index?-1:1}),"value")};var K=function(f,h,d,k){var c={},l=v(null==h?a.identity:h);b(f,function(a,h){var b=l.call(d,a,h,f);k(c,b,a)});return c};a.groupBy=function(f,h,b){return K(f,h,b,function(f,h,b){(a.has(f,h)?f[h]:f[h]=[]).push(b)})};a.countBy=function(f,h,b){return K(f,h,b,function(f,h){a.has(f,h)||(f[h]=0);
f[h]++})};a.sortedIndex=function(f,h,b,d){b=null==b?a.identity:v(b);h=b.call(d,h);for(var k=0,c=f.length;k<c;){var l=k+c>>>1;b.call(d,f[l])<h?k=l+1:c=l}return k};a.toArray=function(f){return f?a.isArray(f)?c.call(f):f.length===+f.length?a.map(f,a.identity):a.values(f):[]};a.size=function(f){return null==f?0:f.length===+f.length?f.length:a.keys(f).length};a.first=a.head=a.take=function(a,h,b){return null==a?void 0:null==h||b?a[0]:c.call(a,0,h)};a.initial=function(a,h,b){return c.call(a,0,a.length-
(null==h||b?1:h))};a.last=function(a,h,b){return null==a?void 0:null==h||b?a[a.length-1]:c.call(a,Math.max(a.length-h,0))};a.rest=a.tail=a.drop=function(a,h,b){return c.call(a,null==h||b?1:h)};a.compact=function(f){return a.filter(f,a.identity)};var u=function(f,h,d){if(h&&a.every(f,a.isArray))return p.apply(d,f);b(f,function(f){a.isArray(f)||a.isArguments(f)?h?n.apply(d,f):u(f,h,d):d.push(f)});return d};a.flatten=function(a,h){return u(a,h,[])};a.without=function(f){return a.difference(f,c.call(arguments,
1))};a.uniq=a.unique=function(f,h,d,k){a.isFunction(h)&&(k=d,d=h,h=!1);d=d?a.map(f,d,k):f;var c=[],v=[];b(d,function(b,d){(h?d&&v[v.length-1]===b:a.contains(v,b))||(v.push(b),c.push(f[d]))});return c};a.union=function(){return a.uniq(a.flatten(arguments,!0))};a.intersection=function(f){var h=c.call(arguments,1);return a.filter(a.uniq(f),function(f){return a.every(h,function(h){return 0<=a.indexOf(h,f)})})};a.difference=function(f){var h=p.apply(e,c.call(arguments,1));return a.filter(f,function(f){return!a.contains(h,
f)})};a.zip=function(){for(var f=a.max(a.pluck(arguments,"length").concat(0)),h=Array(f),b=0;b<f;b++)h[b]=a.pluck(arguments,""+b);return h};a.object=function(a,b){if(null==a)return{};for(var d={},k=0,c=a.length;k<c;k++)b?d[a[k]]=b[k]:d[a[k][0]]=a[k][1];return d};a.indexOf=function(f,b,d){if(null==f)return-1;var k=0,c=f.length;if(d)if("number"==typeof d)k=0>d?Math.max(0,c+d):d;else return k=a.sortedIndex(f,b),f[k]===b?k:-1;if(x&&f.indexOf===x)return f.indexOf(b,d);for(;k<c;k++)if(f[k]===b)return k;
return-1};a.lastIndexOf=function(a,b,d){if(null==a)return-1;var k=null!=d;if(B&&a.lastIndexOf===B)return k?a.lastIndexOf(b,d):a.lastIndexOf(b);for(d=k?d:a.length;d--;)if(a[d]===b)return d;return-1};a.range=function(a,b,d){1>=arguments.length&&(b=a||0,a=0);d=arguments[2]||1;for(var k=Math.max(Math.ceil((b-a)/d),0),c=0,v=Array(k);c<k;)v[c++]=a,a+=d;return v};var A=function(){};a.bind=function(f,b){var d,k;if(G&&f.bind===G)return G.apply(f,c.call(arguments,1));if(!a.isFunction(f))throw new TypeError;
d=c.call(arguments,2);return k=function(){if(!(this instanceof k))return f.apply(b,d.concat(c.call(arguments)));A.prototype=f.prototype;var a=new A;A.prototype=null;var v=f.apply(a,d.concat(c.call(arguments)));return Object(v)===v?v:a}};a.partial=function(a){var b=c.call(arguments,1);return function(){return a.apply(this,b.concat(c.call(arguments)))}};a.bindAll=function(f){var d=c.call(arguments,1);if(0===d.length)throw Error("bindAll must be passed function names");b(d,function(b){f[b]=a.bind(f[b],
f)});return f};a.memoize=function(f,b){var d={};b||(b=a.identity);return function(){var k=b.apply(this,arguments);return a.has(d,k)?d[k]:d[k]=f.apply(this,arguments)}};a.delay=function(a,b){var d=c.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};a.defer=function(f){return a.delay.apply(a,[f,1].concat(c.call(arguments,1)))};a.throttle=function(a,b,d){var k,c,v,l=null,e=0;d||(d={});var u=function(){e=!1===d.leading?0:new Date;l=null;v=a.apply(k,c)};return function(){var t=
new Date;e||!1!==d.leading||(e=t);var I=b-(t-e);k=this;c=arguments;0>=I?(clearTimeout(l),l=null,e=t,v=a.apply(k,c)):l||!1===d.trailing||(l=setTimeout(u,I));return v}};a.debounce=function(a,b,d){var k,c=null;return function(){var v=this,l=arguments,e=d&&!c;clearTimeout(c);c=setTimeout(function(){c=null;d||(k=a.apply(v,l))},b);e&&(k=a.apply(v,l));return k}};a.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;d=a.apply(this,arguments);a=null;return d}};a.wrap=function(a,b){return function(){var d=
[a];n.apply(d,arguments);return b.apply(this,d)}};a.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;0<=d;d--)b=[a[d].apply(this,b)];return b[0]}};a.after=function(a,b){return function(){if(1>--a)return b.apply(this,arguments)}};a.keys=H||function(f){if(f!==Object(f))throw new TypeError("Invalid object");var b=[],d;for(d in f)a.has(f,d)&&b.push(d);return b};a.values=function(f){var b=[],d;for(d in f)a.has(f,d)&&b.push(f[d]);return b};a.pairs=function(f){var b=
[],d;for(d in f)a.has(f,d)&&b.push([d,f[d]]);return b};a.invert=function(f){var b={},d;for(d in f)a.has(f,d)&&(b[f[d]]=d);return b};a.functions=a.methods=function(f){var b=[],d;for(d in f)a.isFunction(f[d])&&b.push(d);return b.sort()};a.extend=function(a){b(c.call(arguments,1),function(b){if(b)for(var d in b)a[d]=b[d]});return a};a.pick=function(a){var d={},k=p.apply(e,c.call(arguments,1));b(k,function(b){b in a&&(d[b]=a[b])});return d};a.omit=function(f){var b={},d=p.apply(e,c.call(arguments,1)),
k;for(k in f)a.contains(d,k)||(b[k]=f[k]);return b};a.defaults=function(a){b(c.call(arguments,1),function(b){if(b)for(var d in b)void 0===a[d]&&(a[d]=b[d])});return a};a.clone=function(f){return a.isObject(f)?a.isArray(f)?f.slice():a.extend({},f):f};a.tap=function(a,b){b(a);return a};var L=function(b,d,k,c){if(b===d)return 0!==b||1/b==1/d;if(null==b||null==d)return b===d;b instanceof a&&(b=b._wrapped);d instanceof a&&(d=d._wrapped);var v=l.call(b);if(v!=l.call(d))return!1;switch(v){case "[object String]":return b==
String(d);case "[object Number]":return b!=+b?d!=+d:0==b?1/b==1/d:b==+d;case "[object Date]":case "[object Boolean]":return+b==+d;case "[object RegExp]":return b.source==d.source&&b.global==d.global&&b.multiline==d.multiline&&b.ignoreCase==d.ignoreCase}if("object"!=typeof b||"object"!=typeof d)return!1;for(var e=k.length;e--;)if(k[e]==b)return c[e]==d;var e=b.constructor,u=d.constructor;if(e!==u&&!(a.isFunction(e)&&e instanceof e&&a.isFunction(u)&&u instanceof u))return!1;k.push(b);c.push(d);e=0;
u=!0;if("[object Array]"==v){if(e=b.length,u=e==d.length)for(;e--&&(u=L(b[e],d[e],k,c)););}else{for(var t in b)if(a.has(b,t)&&(e++,!(u=a.has(d,t)&&L(b[t],d[t],k,c))))break;if(u){for(t in d)if(a.has(d,t)&&!e--)break;u=!e}}k.pop();c.pop();return u};a.isEqual=function(a,b){return L(a,b,[],[])};a.isEmpty=function(b){if(null==b)return!0;if(a.isArray(b)||a.isString(b))return 0===b.length;for(var d in b)if(a.has(b,d))return!1;return!0};a.isElement=function(a){return!(!a||1!==a.nodeType)};a.isArray=m||function(a){return"[object Array]"==
l.call(a)};a.isObject=function(a){return a===Object(a)};b("Arguments Function String Number Date RegExp".split(" "),function(b){a["is"+b]=function(a){return l.call(a)=="[object "+b+"]"}});a.isArguments(arguments)||(a.isArguments=function(b){return!(!b||!a.has(b,"callee"))});"function"!==typeof/./&&(a.isFunction=function(a){return"function"===typeof a});a.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};a.isNaN=function(b){return a.isNumber(b)&&b!=+b};a.isBoolean=function(a){return!0===
a||!1===a||"[object Boolean]"==l.call(a)};a.isNull=function(a){return null===a};a.isUndefined=function(a){return void 0===a};a.has=function(a,b){return D.call(a,b)};a.noConflict=function(){C._=r;return this};a.identity=function(a){return a};a.times=function(a,b,d){for(var k=Array(Math.max(0,a)),c=0;c<a;c++)k[c]=b.call(d,c);return k};a.random=function(a,b){null==b&&(b=a,a=0);return a+Math.floor(Math.random()*(b-a+1))};var J={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};
J.unescape=a.invert(J.escape);var O={escape:RegExp("["+a.keys(J.escape).join("")+"]","g"),unescape:RegExp("("+a.keys(J.unescape).join("|")+")","g")};a.each(["escape","unescape"],function(b){a[b]=function(a){return null==a?"":(""+a).replace(O[b],function(a){return J[b][a]})}});a.result=function(b,d){if(null!=b){var k=b[d];return a.isFunction(k)?k.call(b):k}};a.mixin=function(d){b(a.functions(d),function(b){var k=a[b]=d[b];a.prototype[b]=function(){var b=[this._wrapped];n.apply(b,arguments);b=k.apply(a,
b);return this._chain?a(b).chain():b}})};var M=0;a.uniqueId=function(a){var b=++M+"";return a?a+b:b};a.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/,I={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},T=/\\|'|\r|\n|\t|\u2028|\u2029/g;a.template=function(b,d,k){var c;k=a.defaults({},k,a.templateSettings);var v=RegExp([(k.escape||t).source,(k.interpolate||t).source,(k.evaluate||t).source].join("|")+
"|$","g"),l=0,e="__p+='";b.replace(v,function(a,d,k,c,v){e+=b.slice(l,v).replace(T,function(a){return"\\"+I[a]});d&&(e+="'+\n((__t=("+d+"))==null?'':_.escape(__t))+\n'");k&&(e+="'+\n((__t=("+k+"))==null?'':__t)+\n'");c&&(e+="';\n"+c+"\n__p+='");l=v+a.length;return a});e+="';\n";k.variable||(e="with(obj||{}){\n"+e+"}\n");e="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+e+"return __p;\n";try{c=new Function(k.variable||"obj","_",e)}catch(u){throw u.source=
e,u;}if(d)return c(d,a);d=function(b){return c.call(this,b,a)};d.source="function("+(k.variable||"obj")+"){\n"+e+"}";return d};a.chain=function(b){return a(b).chain()};a.mixin(a);b("pop push reverse shift sort splice unshift".split(" "),function(b){var d=e[b];a.prototype[b]=function(){var k=this._wrapped;d.apply(k,arguments);"shift"!=b&&"splice"!=b||0!==k.length||delete k[0];return this._chain?a(k).chain():k}});b(["concat","join","slice"],function(b){var d=e[b];a.prototype[b]=function(){var b=d.apply(this._wrapped,
arguments);return this._chain?a(b).chain():b}});a.extend(a.prototype,{chain:function(){this._chain=!0;return this},value:function(){return this._wrapped}})}).call(this);var Backbone=Backbone||{};
(function(){var C=[].slice,r=function(e,m,g){var c;e=-1;var p=m.length;switch(g.length){case 0:for(;++e<p;)(c=m[e]).callback.call(c.ctx);break;case 1:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0]);break;case 2:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0],g[1]);break;case 3:for(;++e<p;)(c=m[e]).callback.call(c.ctx,g[0],g[1],g[2]);break;default:for(;++e<p;)(c=m[e]).callback.apply(c.ctx,g)}},g=Backbone.Events={on:function(e,g,n){this._events||(this._events={});(this._events[e]||(this._events[e]=[])).push({callback:g,
context:n,ctx:n||this});return this},once:function(e,g,n){var c=this,p=_.once(function(){c.off(e,p);g.apply(this,arguments)});p._callback=g;this.on(e,p,n);return this},off:function(e,g,n){var c,p,l,D,r,s,y,d;if(!this._events)return this;if(!e&&!g&&!n)return this._events={},this;D=e?[e]:_.keys(this._events);r=0;for(s=D.length;r<s;r++)if(e=D[r],c=this._events[e]){l=[];if(g||n)for(y=0,d=c.length;y<d;y++)p=c[y],(g&&g!==(p.callback._callback||p.callback)||n&&n!==p.context)&&l.push(p);this._events[e]=l}return this},
trigger:function(e){if(!this._events)return this;var g=C.call(arguments,1),n=this._events[e],c=this._events.all;n&&r(this,n,g);c&&r(this,c,arguments);return this},listenTo:function(e,g,n){var c=this._listeners||(this._listeners={}),p=e._listenerId||(e._listenerId=_.uniqueId("l"));c[p]=e;e.on(g,n||this,this);return this},stopListening:function(e,g,n){var c=this._listeners;if(c){if(e)e.off(g,n,this),g||n||delete c[e._listenerId];else{for(var p in c)c[p].off(null,null,this);this._listeners={}}return this}}};
g.bind=g.on;g.unbind=g.off;"undefined"!==typeof exports&&("undefined"!==typeof module&&module.exports&&(exports=module.exports=g),exports.Backbone=exports.Backbone||Backbone)})();(function(){function C(e,c){var p=(new Date).getTime(),l=Math.max(0,16-(p-g)),m=r.setTimeout(function(){e(p+l)},l);g=p+l;return m}var r=this,g=0,e=["ms","moz","webkit","o"];if("undefined"!==typeof exports)"undefined"!==typeof module&&module.exports&&(exports=module.exports=C),exports.requestAnimationFrame=C;else{for(var m=0;m<e.length&&!r.requestAnimationFrame;++m)r.requestAnimationFrame=r[e[m]+"RequestAnimationFrame"],r.cancelAnimationFrame=r[e[m]+"CancelAnimationFrame"]||r[e[m]+"CancelRequestAnimationFrame"];
r.requestAnimationFrame||(r.requestAnimationFrame=C);r.cancelAnimationFrame||(r.cancelAnimationFrame=function(e){clearTimeout(e)})}})();(function(){function C(){var a=document.body.getBoundingClientRect(),b=this.width=a.width,a=this.height=a.height;this.renderer.setSize(b,a,this.ratio);this.trigger(d.Events.resize,b,a)}var r=this,g=r.Two||{},e=Math.sin,m=Math.cos,n=Math.atan2,c=Math.sqrt,p=Math.PI,l=2*p,D=p/2,F=Math.pow,s=0,y={hasEventListeners:_.isFunction(r.addEventListener),bind:function(a,b,d,c){this.hasEventListeners?a.addEventListener(b,d,!!c):a.attachEvent("on"+b,d);return this},unbind:function(a,b,d,c){this.hasEventListeners?
a.removeEventListeners(b,d,!!c):a.detachEvent("on"+b,d);return this}},d=r.Two=function(a){a=_.defaults(a||{},{fullscreen:!1,width:640,height:480,type:d.Types.svg,autostart:!1});_.each(a,function(a,d){"fullscreen"!==d&&("width"!==d&&"height"!==d&&"autostart"!==d)&&(this[d]=a)},this);_.isElement(a.domElement)&&(this.type=d.Types[a.domElement.tagName.toLowerCase()]);this.renderer=new d[this.type](this);d.Utils.setPlaying.call(this,a.autostart);this.frameCount=0;a.fullscreen?(a=_.bind(C,this),_.extend(document.body.style,
{overflow:"hidden",margin:0,padding:0,top:0,left:0,right:0,bottom:0,position:"fixed"}),_.extend(this.renderer.domElement.style,{display:"block",top:0,left:0,right:0,bottom:0,position:"fixed"}),y.bind(r,"resize",a),a()):_.isElement(a.domElement)||(this.renderer.setSize(a.width,a.height,this.ratio),this.width=a.width,this.height=a.height);this.scene=this.renderer.scene;d.Instances.push(this)};_.extend(d,{Array:r.Float32Array||Array,Types:{webgl:"WebGLRenderer",svg:"SVGRenderer",canvas:"CanvasRenderer"},
Version:"v0.4.0",Identifier:"two-",Properties:{hierarchy:"hierarchy",demotion:"demotion"},Events:{play:"play",pause:"pause",update:"update",render:"render",resize:"resize",change:"change",remove:"remove",insert:"insert"},Commands:{move:"M",line:"L",curve:"C",close:"Z"},Resolution:8,Instances:[],noConflict:function(){r.Two=g;return this},uniqueId:function(){var a=s;s++;return a},Utils:{release:function(a){_.isObject(a)&&(_.isFunction(a.unbind)&&a.unbind(),a.vertices&&(_.isFunction(a.vertices.unbind)&&
a.vertices.unbind(),_.each(a.vertices,function(a){_.isFunction(a.unbind)&&a.unbind()})),a.children&&_.each(a.children,function(a){d.Utils.release(a)}))},Curve:{CollinearityEpsilon:F(10,-30),RecursionLimit:16,CuspLimit:0,Tolerance:{distance:0.25,angle:0,epsilon:0.01}},devicePixelRatio:r.devicePixelRatio||1,getBackingStoreRatio:function(a){return a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1},getRatio:function(a){return d.Utils.devicePixelRatio/
H(a)},setPlaying:function(a){this.playing=!!a;return this},getComputedMatrix:function(a,b){var k=[];b=b&&b.identity()||new d.Matrix;for(var c=a;c&&c._matrix;)k.push(c._matrix),c=c.parent;k.reverse();_.each(k,function(a){a=a.elements;b.multiply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9])});return b},applySvgAttributes:function(a,b){_.each(a.attributes,function(a,d){switch(a.nodeName){case "visibility":b.visible=!!a.nodeValue;break;case "stroke-linecap":b.cap=a.nodeValue;break;case "stroke-linejoin":b.join=
a.nodeValue;break;case "stroke-miterlimit":b.miter=a.nodeValue;break;case "stroke-width":b.linewidth=parseFloat(a.nodeValue);break;case "stroke-opacity":case "fill-opacity":case "opacity":b.opacity=a.nodeValue;break;case "fill":b.fill=a.nodeValue;break;case "stroke":b.stroke=a.nodeValue}});return b},read:{svg:function(){return d.Utils.read.g.apply(this,arguments)},g:function(a){var b=new d.Group;this.add(b);_.each(a.childNodes,function(a){var c=a.nodeName;c&&(c=c.replace(/svg\:/ig,"").toLowerCase(),
c in d.Utils.read&&(a=d.Utils.read[c].call(this,a),b.add(a)))},this);return d.Utils.applySvgAttributes(a,b)},polygon:function(a,b){var k=[];a.getAttribute("points").replace(/([\d\.?]+),([\d\.?]+)/g,function(a,b,c){k.push(new d.Anchor(parseFloat(b),parseFloat(c)))});var c=(new d.Polygon(k,!b)).noStroke();c.fill="black";return d.Utils.applySvgAttributes(a,c)},polyline:function(a){return d.Utils.read.polygon(a,!0)},path:function(a){var b,k,c,e=!1,l=!1,g=a.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig),
p=g.length-1,g=_.flatten(_.map(g,function(a,g){var m,t,I=a[0],q=I.toLowerCase();c=a.slice(1).trim();c=c.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g,function(a,b,d){return parseFloat(b)*Math.pow(10,d)});c=c.split(/[\s,]+|(?=\s?[+\-])/);e=I===q;var f,h,w,n;switch(q){case "z":g>=p?l=!0:(t=b.x,m=b.y,m=new d.Anchor(t,m,void 0,void 0,void 0,void 0,d.Commands.close));break;case "m":case "l":t=parseFloat(c[0]);m=parseFloat(c[1]);m=new d.Anchor(t,m,void 0,void 0,void 0,void 0,"m"===q?d.Commands.move:d.Commands.line);
e&&m.addSelf(b);b=m;break;case "h":case "v":t="h"===q?"x":"y";I="x"===t?"y":"x";m=new d.Anchor(void 0,void 0,void 0,void 0,void 0,void 0,d.Commands.line);m[t]=parseFloat(c[0]);m[I]=b[I];e&&(m[t]+=b[t]);b=m;break;case "s":case "c":m=b.x;I=b.y;k||(k=(new d.Vector).copy(b));"c"===q?(f=parseFloat(c[0]),t=parseFloat(c[1]),q=parseFloat(c[2]),h=parseFloat(c[3]),w=parseFloat(c[4]),n=parseFloat(c[5])):(h=d.Utils.getReflection(b,k,e),f=h.x,t=h.y,q=parseFloat(c[0]),h=parseFloat(c[1]),w=parseFloat(c[2]),n=parseFloat(c[3]));
e&&(f+=m,t+=I,q+=m,h+=I,w+=m,n+=I);_.isObject(b.controls)||d.Anchor.AppendCurveProperties(b);b.controls.right.set(f-b.x,t-b.y);b=m=new d.Anchor(w,n,q-w,h-n,void 0,void 0,d.Commands.curve);k=m.controls.left;break;case "t":case "q":m=b.x;I=b.y;k||(k=(new d.Vector).copy(b));k.isZero()?(f=m,t=I):(f=k.x,I=k.y);"q"===q?(q=parseFloat(c[0]),h=parseFloat(c[1]),w=parseFloat(c[1]),n=parseFloat(c[2])):(h=d.Utils.getReflection(b,k,e),q=h.x,h=h.y,w=parseFloat(c[0]),n=parseFloat(c[1]));e&&(f+=m,t+=I,q+=m,h+=I,w+=
m,n+=I);_.isObject(b.controls)||d.Anchor.AppendCurveProperties(b);b.controls.right.set(f-b.x,t-b.y);b=m=new d.Anchor(w,n,q-w,h-n,void 0,void 0,d.Commands.curve);k=m.controls.left;break;case "a":throw new d.Utils.Error("not yet able to interpret Elliptical Arcs.");}return m}));if(!(1>=g.length))return g=_.compact(g),g=(new d.Polygon(g,l,void 0,!0)).noStroke(),g.fill="black",d.Utils.applySvgAttributes(a,g)},circle:function(a){var b=parseFloat(a.getAttribute("cx")),c=parseFloat(a.getAttribute("cy")),
v=parseFloat(a.getAttribute("r")),g=d.Resolution,u=_.map(_.range(g),function(a){var b=a/g*l;a=v*m(b);b=v*e(b);return new d.Anchor(a,b)},this),u=(new d.Polygon(u,!0,!0)).noStroke();u.translation.set(b,c);u.fill="black";return d.Utils.applySvgAttributes(a,u)},ellipse:function(a){var b=parseFloat(a.getAttribute("cx")),c=parseFloat(a.getAttribute("cy")),v=parseFloat(a.getAttribute("rx")),g=parseFloat(a.getAttribute("ry")),u=d.Resolution,p=_.map(_.range(u),function(a){var b=a/u*l;a=v*m(b);b=g*e(b);return new d.Anchor(a,
b)},this),p=(new d.Polygon(p,!0,!0)).noStroke();p.translation.set(b,c);p.fill="black";return d.Utils.applySvgAttributes(a,p)},rect:function(a){var b=parseFloat(a.getAttribute("x")),c=parseFloat(a.getAttribute("y")),e=parseFloat(a.getAttribute("width")),l=parseFloat(a.getAttribute("height")),e=e/2,l=l/2,g=[new d.Anchor(e,l),new d.Anchor(-e,l),new d.Anchor(-e,-l),new d.Anchor(e,-l)],g=(new d.Polygon(g,!0)).noStroke();g.translation.set(b+e,c+l);g.fill="black";return d.Utils.applySvgAttributes(a,g)},
line:function(a){var b=parseFloat(a.getAttribute("x1")),c=parseFloat(a.getAttribute("y1")),e=parseFloat(a.getAttribute("x2")),l=parseFloat(a.getAttribute("y2")),e=(e-b)/2,l=(l-c)/2,g=[new d.Anchor(-e,-l),new d.Anchor(e,l)],g=(new d.Polygon(g)).noFill();g.translation.set(b+e,c+l);return d.Utils.applySvgAttributes(a,g)}},subdivide:function(a,b,c,e,l,g,m,p,q){q=q||d.Utils.Curve.RecursionLimit;var w=q+1;return _.map(_.range(0,w),function(q){var t=q/w;q=G(t,a,c,l,m);t=G(t,b,e,g,p);return new d.Anchor(q,
t)})},getPointOnCubicBezier:function(a,b,d,c,e){var l=1-a;return l*l*l*b+3*l*l*a*d+3*l*a*a*c+a*a*a*e},getCurveFromPoints:function(a,b){for(var c=a.length,e=c-1,l=0;l<c;l++){var g=a[l];_.isObject(g.controls)||d.Anchor.AppendCurveProperties(g);var m=b?B(l-1,c):Math.max(l-1,0),p=b?B(l+1,c):Math.min(l+1,e);x(a[m],g,a[p]);g._command=0===l?d.Commands.move:d.Commands.curve;g.controls.left.x=_.isNumber(g.controls.left.x)?g.controls.left.x:g.x;g.controls.left.y=_.isNumber(g.controls.left.y)?g.controls.left.y:
g.y;g.controls.right.x=_.isNumber(g.controls.right.x)?g.controls.right.x:g.x;g.controls.right.y=_.isNumber(g.controls.right.y)?g.controls.right.y:g.y}},getControlPoints:function(a,b,c){var l=w(a,b),g=w(c,b);a=z(a,b);c=z(c,b);var q=(l+g)/2;b.u=_.isObject(b.controls.left)?b.controls.left:new d.Vector(0,0);b.v=_.isObject(b.controls.right)?b.controls.right:new d.Vector(0,0);if(1E-4>a||1E-4>c)return b._relative||(b.controls.left.copy(b),b.controls.right.copy(b)),b;a*=0.33;c*=0.33;q=g<l?q+D:q-D;b.controls.left.x=
m(q)*a;b.controls.left.y=e(q)*a;q-=p;b.controls.right.x=m(q)*c;b.controls.right.y=e(q)*c;b._relative||(b.controls.left.x+=b.x,b.controls.left.y+=b.y,b.controls.right.x+=b.x,b.controls.right.y+=b.y);return b},getReflection:function(a,b,c){var e=b.distanceTo(d.Vector.zero);b=w(d.Vector.zero,b);return new d.Vector(e*Math.cos(b)+(c?0:a.x),e*Math.sin(b)+(c?0:a.y))},angleBetween:function(a,b){var d,c;if(4<=arguments.length)return d=arguments[0]-arguments[2],c=arguments[1]-arguments[3],n(c,d);d=a.x-b.x;
c=a.y-b.y;return n(c,d)},distanceBetweenSquared:function(a,b){var d=a.x-b.x,c=a.y-b.y;return d*d+c*c},distanceBetween:function(a,b){return c(q(a,b))},mod:function(a,b){for(;0>a;)a+=b;return a%b},Collection:function(){Array.call(this);1<arguments.length?Array.prototype.push.apply(this,arguments):arguments[0]&&Array.isArray(arguments[0])&&Array.prototype.push.apply(this,arguments[0])},Error:function(a){this.name="two.js";this.message=a}}});d.Utils.Error.prototype=Error();d.Utils.Error.prototype.constructor=
d.Utils.Error;d.Utils.Collection.prototype=[];d.Utils.Collection.constructor=d.Utils.Collection;_.extend(d.Utils.Collection.prototype,Backbone.Events,{pop:function(){var a=Array.prototype.pop.apply(this,arguments);this.trigger(d.Events.remove,[a]);return a},shift:function(){var a=Array.prototype.shift.apply(this,arguments);this.trigger(d.Events.remove,[a]);return a},push:function(){var a=Array.prototype.push.apply(this,arguments);this.trigger(d.Events.insert,arguments);return a},unshift:function(){var a=
Array.prototype.unshift.apply(this,arguments);this.trigger(d.Events.insert,arguments);return a},splice:function(){var a=Array.prototype.splice.apply(this,arguments),b;this.trigger(d.Events.remove,a);2<arguments.length&&(b=this.slice(arguments[0],arguments.length-2),this.trigger(d.Events.insert,b));return a}});var z=d.Utils.distanceBetween,q=d.Utils.distanceBetweenSquared,w=d.Utils.angleBetween,x=d.Utils.getControlPoints,B=d.Utils.mod,H=d.Utils.getBackingStoreRatio,G=d.Utils.getPointOnCubicBezier;
_.extend(d.prototype,Backbone.Events,{appendTo:function(a){a.appendChild(this.renderer.domElement);return this},play:function(){d.Utils.setPlaying.call(this,!0);return this.trigger(d.Events.play)},pause:function(){this.playing=!1;return this.trigger(d.Events.pause)},update:function(){var a=!!this._lastFrame,b=(r.performance&&r.performance.now?r.performance:Date).now();this.frameCount++;a&&(this.timeDelta=parseFloat((b-this._lastFrame).toFixed(3)));this._lastFrame=b;var a=this.width,b=this.height,
c=this.renderer;a===c.width&&b===c.height||c.setSize(a,b,this.ratio);this.trigger(d.Events.update,this.frameCount,this.timeDelta);return this.render()},render:function(){this.renderer.render();return this.trigger(d.Events.render,this.frameCount)},add:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));this.scene.add(b);return this},remove:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));this.scene.remove(b);return this},clear:function(){this.scene.remove(_.toArray(this.scene.children));
return this},makeLine:function(a,b,c,e){c=(c-a)/2;e=(e-b)/2;var l=[new d.Anchor(-c,-e),new d.Anchor(c,e)],l=(new d.Polygon(l)).noFill();l.translation.set(a+c,b+e);this.scene.add(l);return l},makeRectangle:function(a,b,c,e){c/=2;e/=2;e=[new d.Anchor(-c,-e),new d.Anchor(c,-e),new d.Anchor(c,e),new d.Anchor(-c,e)];e=new d.Polygon(e,!0);e.translation.set(a,b);this.scene.add(e);return e},makeCircle:function(a,b,d){return this.makeEllipse(a,b,d,d)},makeEllipse:function(a,b,c,g){var q=d.Resolution,p=_.map(_.range(q),
function(a){var b=a/q*l;a=c*m(b);b=g*e(b);return new d.Anchor(a,b)},this),p=new d.Polygon(p,!0,!0);p.translation.set(a,b);this.scene.add(p);return p},makeCurve:function(a){var b=arguments.length,c=a;if(!_.isArray(a))for(var c=[],e=0;e<b;e+=2){var l=arguments[e];if(!_.isNumber(l))break;c.push(new d.Anchor(l,arguments[e+1]))}var b=arguments[b-1],c=new d.Polygon(c,!(_.isBoolean(b)&&b),!0),b=c.getBoundingClientRect(),g=b.left+b.width/2,m=b.top+b.height/2;_.each(c.vertices,function(a){a.x-=g;a.y-=m});
c.translation.set(g,m);this.scene.add(c);return c},makePolygon:function(a){var b=arguments.length,c=a;if(!_.isArray(a))for(var c=[],e=0;e<b;e+=2){var l=arguments[e];if(!_.isNumber(l))break;c.push(new d.Anchor(l,arguments[e+1]))}b=arguments[b-1];c=new d.Polygon(c,!(_.isBoolean(b)&&b));b=c.getBoundingClientRect();c.center().translation.set(b.left+b.width/2,b.top+b.height/2);this.scene.add(c);return c},makeGroup:function(a){var b=a;_.isArray(a)||(b=_.toArray(arguments));var c=new d.Group;this.scene.add(c);
c.add(b);return c},interpret:function(a){var b=a.tagName.toLowerCase();if(!(b in d.Utils.read))return null;a=d.Utils.read[b].call(this,a);this.add(a);return a}});(function(){requestAnimationFrame(arguments.callee);_.each(d.Instances,function(a){a.playing&&a.update()})})();"function"===typeof define&&define.amd?define(function(){return d}):"undefined"!=typeof module&&module.exports&&(module.exports=d)})();(function(){var C,r,g,e,m=Two.Vector=function(c,e){this.x=c||0;this.y=e||0};_.extend(m,{zero:new Two.Vector});_.extend(m.prototype,Backbone.Events,{set:function(c,e){this.x=c;this.y=e;return this},copy:function(c){this.x=c.x;this.y=c.y;return this},clear:function(){this.y=this.x=0;return this},clone:function(){return new m(this.x,this.y)},add:function(c,e){this.x=c.x+e.x;this.y=c.y+e.y;return this},addSelf:function(c){this.x+=c.x;this.y+=c.y;return this},sub:function(c,e){this.x=c.x-e.x;this.y=c.y-
e.y;return this},subSelf:function(c){this.x-=c.x;this.y-=c.y;return this},multiplySelf:function(c){this.x*=c.x;this.y*=c.y;return this},multiplyScalar:function(c){this.x*=c;this.y*=c;return this},divideScalar:function(c){c?(this.x/=c,this.y/=c):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this.x*c.x+this.y*c.y},lengthSquared:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},
distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){g=this.x-c.x;e=this.y-c.y;return g*g+e*e},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c){return 1E-4>this.distanceTo(c)},lerp:function(c,e){C=(c.x-this.x)*e+this.x;r=(c.y-this.y)*e+this.y;return this.set(C,r)},isZero:function(){return 1E-4>this.length()},toString:function(){return this.x+","+this.y},toObject:function(){return{x:this.x,y:this.y}}});var n={set:function(c,
e){this._x=c;this._y=e;return this.trigger(Two.Events.change)},copy:function(c){this._x=c.x;this._y=c.y;return this.trigger(Two.Events.change)},clear:function(){this._y=this._x=0;return this.trigger(Two.Events.change)},clone:function(){return new m(this._x,this._y)},add:function(c,e){this._x=c.x+e.x;this._y=c.y+e.y;return this.trigger(Two.Events.change)},addSelf:function(c){this._x+=c.x;this._y+=c.y;return this.trigger(Two.Events.change)},sub:function(c,e){this._x=c.x-e.x;this._y=c.y-e.y;return this.trigger(Two.Events.change)},
subSelf:function(c){this._x-=c.x;this._y-=c.y;return this.trigger(Two.Events.change)},multiplySelf:function(c){this._x*=c.x;this._y*=c.y;return this.trigger(Two.Events.change)},multiplyScalar:function(c){this._x*=c;this._y*=c;return this.trigger(Two.Events.change)},divideScalar:function(c){return c?(this._x/=c,this._y/=c,this.trigger(Two.Events.change)):this.clear()},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this._x*c.x+this._y*c.y},lengthSquared:function(){return this._x*
this._x+this._y*this._y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){g=this._x-c.x;e=this._y-c.y;return g*g+e*e},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c){return 1E-4>this.distanceTo(c)},lerp:function(c,e){C=(c.x-this._x)*e+this._x;r=(c.y-this._y)*e+this._y;return this.set(C,r)},isZero:function(){return 1E-4>
this.length()},toString:function(){return this._x+","+this._y},toObject:function(){return{x:this._x,y:this._y}}},c={get:function(){return this._x},set:function(c){this._x=c;this.trigger(Two.Events.change,"x")}},p={get:function(){return this._y},set:function(c){this._y=c;this.trigger(Two.Events.change,"y")}};Two.Vector.prototype.bind=Two.Vector.prototype.on=function(){this._bound||(this._x=this.x,this._y=this.y,Object.defineProperty(this,"x",c),Object.defineProperty(this,"y",p),_.extend(this,n),this._bound=
!0);Backbone.Events.bind.apply(this,arguments);return this}})();(function(){var C=Two.Commands,r,g,e,m=Two.Anchor=function(c,e,g,n,r,s,y){Two.Vector.call(this,c,e);this._broadcast=_.bind(function(){this.trigger(Two.Events.change)},this);this._command=y||C.move;this._relative=!0;if(!y)return this;m.AppendCurveProperties(this);_.isNumber(g)&&(this.controls.left.x=g);_.isNumber(n)&&(this.controls.left.y=n);_.isNumber(r)&&(this.controls.right.x=r);_.isNumber(s)&&(this.controls.right.y=s)};_.extend(m,{AppendCurveProperties:function(c){c.controls={left:new Two.Vector(0,
0),right:new Two.Vector(0,0)}}});var n={listen:function(){_.isObject(this.controls)||m.AppendCurveProperties(this);_.each(this.controls,function(c){c.bind(Two.Events.change,this._broadcast)},this);return this},ignore:function(){_.each(this.controls,function(c){c.unbind(Two.Events.change,this._broadcast)},this);return this},clone:function(){g=this.controls;e=new Two.Anchor(this.x,this.y,g&&g.left.x,g&&g.left.y,g&&g.right.x,g&&g.right.y,this.command);e.relative=this._relative;return e},toObject:function(){r=
{x:this.x,y:this.y};this._command&&(r.command=this._command);this._relative&&(r.relative=this._relative);this.controls&&(r.controls={left:this.controls.left.toObject(),right:this.controls.right.toObject()});return r}};Object.defineProperty(m.prototype,"command",{get:function(){return this._command},set:function(c){this._command=c;this._command!==C.curve||_.isObject(this.controls)||m.AppendCurveProperties(this);return this.trigger(Two.Events.change)}});Object.defineProperty(m.prototype,"relative",
{get:function(){return this._relative},set:function(c){if(this._relative==c)return this;this._relative=!!c;return this.trigger(Two.Events.change)}});_.extend(m.prototype,Two.Vector.prototype,n);Two.Anchor.prototype.bind=Two.Anchor.prototype.on=function(){Two.Vector.prototype.bind.apply(this,arguments);_.extend(this,n)};Two.Anchor.prototype.unbind=Two.Anchor.prototype.off=function(){Two.Vector.prototype.unbind.apply(this,arguments);_.extend(this,n)}})();(function(){_.range(6);var C=Math.cos,r=Math.sin,g=Math.tan,e,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M,t,I,T,f,h,E,ea,P,Q,aa,da,U,V,W,X,Y,ba,ca,Z,R,$=[],fa=Two.Matrix=function(a,b,d,c,f,e){this.elements=new Two.Array(9);var g=a;_.isArray(g)||(g=_.toArray(arguments));this.identity().set(g)};_.extend(fa,{Identity:[1,0,0,0,1,0,0,0,1],Multiply:function(d,c,f){if(3>=c.length)return z,q,w,e=c[0]||0,m=c[1]||0,n=c[2]||0,p=d,z=p[0]*e+p[1]*m+p[2]*n,q=p[3]*e+p[4]*m+p[5]*n,w=p[6]*e+p[7]*m+p[8]*
n,{x:z,y:q,z:w};x=d[0];B=d[1];H=d[2];G=d[3];a=d[4];b=d[5];k=d[6];v=d[7];K=d[8];u=c[0];A=c[1];L=c[2];J=c[3];O=c[4];M=c[5];t=c[6];I=c[7];T=c[8];f=f||new Two.Array(9);f[0]=x*u+B*J+H*t;f[1]=x*A+B*O+H*I;f[2]=x*L+B*M+H*T;f[3]=G*u+a*J+b*t;f[4]=G*A+a*O+b*I;f[5]=G*L+a*M+b*T;f[6]=k*u+v*J+K*t;f[7]=k*A+v*O+K*I;f[8]=k*L+v*M+K*T;return f}});_.extend(fa.prototype,Backbone.Events,{set:function(a,b,c,f,e,g){d=a;E=arguments.length;_.isArray(d)||(d=_.toArray(arguments));_.each(d,function(a,b){_.isNumber(a)&&(this.elements[b]=
a)},this);return this.trigger(Two.Events.change)},identity:function(){this.set(fa.Identity);return this},multiply:function(c,e,g,m,l,p,n,s,ma){d=arguments;E=d.length;if(1>=E)return _.each(this.elements,function(a,b){this.elements[b]=a*c},this),this.trigger(Two.Events.change);if(3>=E)return z,q,w,c=c||0,e=e||0,g=g||0,l=this.elements,z=l[0]*c+l[1]*e+l[2]*g,q=l[3]*c+l[4]*e+l[5]*g,w=l[6]*c+l[7]*e+l[8]*g,{x:z,y:q,z:w};f=this.elements;h=d;x=f[0];B=f[1];H=f[2];G=f[3];a=f[4];b=f[5];k=f[6];v=f[7];K=f[8];u=
h[0];A=h[1];L=h[2];J=h[3];O=h[4];M=h[5];t=h[6];I=h[7];T=h[8];this.elements[0]=x*u+B*J+H*t;this.elements[1]=x*A+B*O+H*I;this.elements[2]=x*L+B*M+H*T;this.elements[3]=G*u+a*J+b*t;this.elements[4]=G*A+a*O+b*I;this.elements[5]=G*L+a*M+b*T;this.elements[6]=k*u+v*J+K*t;this.elements[7]=k*A+v*O+K*I;this.elements[8]=k*L+v*M+K*T;return this.trigger(Two.Events.change)},inverse:function(a){e=this.elements;a=a||new Two.Matrix;P=e[0];Q=e[1];aa=e[2];da=e[3];U=e[4];V=e[5];W=e[6];X=e[7];Y=e[8];ba=Y*U-V*X;ca=-Y*da+
V*W;Z=X*da-U*W;R=P*ba+Q*ca+aa*Z;if(!R)return null;R=1/R;a.elements[0]=ba*R;a.elements[1]=(-Y*Q+aa*X)*R;a.elements[2]=(V*Q-aa*U)*R;a.elements[3]=ca*R;a.elements[4]=(Y*P-aa*W)*R;a.elements[5]=(-V*P+aa*da)*R;a.elements[6]=Z*R;a.elements[7]=(-X*P+Q*W)*R;a.elements[8]=(U*P-Q*da)*R;return a},scale:function(a,b){E=arguments.length;1>=E&&(b=a);return this.multiply(a,0,0,0,b,0,0,0,1)},rotate:function(a){n=C(a);ea=r(a);return this.multiply(n,-ea,0,ea,n,0,0,0,1)},translate:function(a,b){return this.multiply(1,
0,a,0,1,b,0,0,1)},skewX:function(a){e=g(a);return this.multiply(1,e,0,0,1,0,0,0,1)},skewY:function(a){e=g(a);return this.multiply(1,0,0,e,1,0,0,0,1)},toString:function(a){this.toArray(a,$);return $.join(" ")},toArray:function(a,b){d=this.elements;y=!!b;e=parseFloat(d[0].toFixed(3));m=parseFloat(d[1].toFixed(3));n=parseFloat(d[2].toFixed(3));c=parseFloat(d[3].toFixed(3));p=parseFloat(d[4].toFixed(3));l=parseFloat(d[5].toFixed(3));if(a){D=parseFloat(d[6].toFixed(3));F=parseFloat(d[7].toFixed(3));s=
parseFloat(d[8].toFixed(3));if(y){b[0]=e;b[1]=c;b[2]=D;b[3]=m;b[4]=p;b[5]=F;b[6]=n;b[7]=l;b[8]=s;return}return[e,c,D,m,p,F,n,l,s]}if(y)b[0]=e,b[1]=c,b[2]=m,b[3]=p,b[4]=n,b[5]=l;else return[e,c,m,p,n,l]},clone:function(){e=this.elements[0];m=this.elements[1];n=this.elements[2];c=this.elements[3];p=this.elements[4];l=this.elements[5];D=this.elements[6];F=this.elements[7];s=this.elements[8];return new Two.Matrix(e,m,n,c,p,l,D,F,s)}})})();(function(){var C=Two.Utils.mod,r,g,e,m={version:1.1,ns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(c,p){e=c;g=document.createElementNS(this.ns,e);"svg"===e&&(p=_.defaults(p||{},{version:this.version}));_.isObject(p)&&m.setAttributes(g,p);return g},setAttribute:function(c,e){this.setAttribute(e,c)},setAttributes:function(c,e){_.each(e,m.setAttribute,c);return this},removeAttribute:function(c,e){this.removeAttribute(e)},removeAttributes:function(c,e){_.each(e,
m.removeAttribute,c);return this},toString:function(c,e){var g=c.length,m=g-1,n;return _.map(c,function(s,r){var d,z=e?C(r-1,g):Math.max(r-1,0),q=e?C(r+1,g):Math.min(r+1,m);d=c[z];var w=c[q],x,B,H,z=s.x.toFixed(3),w=s.y.toFixed(3);switch(s._command){case Two.Commands.close:d=Two.Commands.close;break;case Two.Commands.curve:x=d.controls&&d.controls.right||d;H=s.controls&&s.controls.left||s;d._relative?(q=(x.x+d.x).toFixed(3),x=(x.y+d.y).toFixed(3)):(q=x.x.toFixed(3),x=x.y.toFixed(3));s._relative?(B=
(H.x+s.x).toFixed(3),H=(H.y+s.y).toFixed(3)):(B=H.x.toFixed(3),H=H.y.toFixed(3));d=(0===r?Two.Commands.move:Two.Commands.curve)+" "+q+" "+x+" "+B+" "+H+" "+z+" "+w;break;case Two.Commands.move:n=s;d=Two.Commands.move+" "+z+" "+w;break;default:d=s._command+" "+z+" "+w}r>=m&&e&&(s._command===Two.Commands.curve&&(w=n,x=s.controls&&s.controls.right||s,z=w.controls&&w.controls.left||w,s._relative?(q=(x.x+s.x).toFixed(3),x=(x.y+s.y).toFixed(3)):(q=x.x.toFixed(3),x=x.y.toFixed(3)),w._relative?(B=(z.x+w.x).toFixed(3),
H=(z.y+w.y).toFixed(3)):(B=z.x.toFixed(3),H=z.y.toFixed(3)),z=w.x.toFixed(3),w=w.y.toFixed(3),d+=" C "+q+" "+x+" "+B+" "+H+" "+z+" "+w),d+=" Z");return d}).join(" ")},group:{appendChild:function(c){(g=this.domElement.querySelector("#"+Two.Identifier+c))&&this.elem.appendChild(g)},removeChild:function(c){(g=this.domElement.querySelector("#"+Two.Identifier+c))&&this.elem.removeChild(g)},renderChild:function(c){m[c._renderer.type].render.call(c,this)},render:function(c){this._update();this._renderer.elem||
(this._renderer.elem=m.createElement("g",{id:Two.Identifier+this.id}),c.appendChild(this._renderer.elem));r=this._matrix.manual||this._flagMatrix;var e={domElement:c,elem:this._renderer.elem};r&&this._renderer.elem.setAttribute("transform","matrix("+this._matrix.toString()+")");_.each(this.children,m.group.renderChild,c);this._flagAdditions&&_.each(this.additions,m.group.appendChild,e);this._flagSubtractions&&_.each(this.subtractions,m.group.removeChild,e);return this.flagReset()}},polygon:{render:function(c){this._update();
this._renderer.elem||(this._renderer.elem=m.createElement("path",{id:Two.Identifier+this.id}),c.appendChild(this._renderer.elem));g=this._renderer.elem;(r=this._matrix.manual||this._flagMatrix)&&g.setAttribute("transform","matrix("+this._matrix.toString()+")");this._flagVertices&&(vertices=m.toString(this._vertices,this._closed),g.setAttribute("d",vertices));this._flagFill&&g.setAttribute("fill",this._fill);this._flagStroke&&g.setAttribute("stroke",this._stroke);this._flagLinewidth&&g.setAttribute("stroke-width",
this._linewidth);this._flagOpacity&&(g.setAttribute("stroke-opacity",this._opacity),g.setAttribute("fill-opacity",this._opacity));this._flagVisible&&g.setAttribute("visibility",this._visible?"visible":"hidden");this._flagCap&&g.setAttribute("stroke-linecap",this._cap);this._flagJoin&&g.setAttribute("stroke-linejoin",this._join);this._flagMiter&&g.setAttribute("stroke-miterlimit",this.miter);return this.flagReset()}}},n=Two[Two.Types.svg]=function(c){this.domElement=c.domElement||m.createElement("svg");
this.scene=new Two.Group;this.scene.parent=this};_.extend(n,{Utils:m});_.extend(n.prototype,Backbone.Events,{setSize:function(c,e){this.width=c;this.height=e;m.setAttributes(this.domElement,{width:c,height:e});return this},render:function(){m.group.render.call(this.scene,this.domElement);return this}})})();(function(){var C=Two.Utils.mod,r=Two.Utils.getRatio,g,e,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O={group:{renderChild:function(a){O[a._renderer.type].render.call(a,this)},render:function(a){this._update();g=this._matrix.elements;a.save();a.transform(g[0],g[3],g[1],g[4],g[2],g[5]);_.each(this.children,O.group.renderChild,a);a.restore();return this.flagReset()}},polygon:{render:function(t){this._update();g=this._matrix.elements;e=this.stroke;m=this.linewidth;n=this.fill;c=this.opacity;
p=this.visible;l=this.cap;D=this.join;F=this.miter;s=this.closed;y=this._vertices;d=y.length;z=d-1;if(!p)return this;t.save();g&&t.transform(g[0],g[3],g[1],g[4],g[2],g[5]);n&&(t.fillStyle=n);e&&(t.strokeStyle=e);m&&(t.lineWidth=m);F&&(t.miterLimit=F);D&&(t.lineJoin=D);l&&(t.lineCap=l);_.isNumber(c)&&(t.globalAlpha=c);t.beginPath();_.each(y,function(c,e){L=c.x.toFixed(3);J=c.y.toFixed(3);switch(c._command){case Two.Commands.close:t.closePath();break;case Two.Commands.curve:w=s?C(e-1,d):Math.max(e-
1,0);q=s?C(e+1,d):Math.min(e+1,z);x=y[w];B=y[q];v=x.controls&&x.controls.right||x;K=c.controls&&c.controls.left||c;x._relative?(b=(v.x+x.x).toFixed(3),k=(v.y+x.y).toFixed(3)):(b=v.x.toFixed(3),k=v.y.toFixed(3));c._relative?(G=(K.x+c.x).toFixed(3),a=(K.y+c.y).toFixed(3)):(G=K.x.toFixed(3),a=K.y.toFixed(3));t.bezierCurveTo(b,k,G,a,L,J);e>=z&&s&&(B=H,u=c.controls&&c.controls.right||c,A=B.controls&&B.controls.left||B,c._relative?(b=(u.x+c.x).toFixed(3),k=(u.y+c.y).toFixed(3)):(b=u.x.toFixed(3),k=u.y.toFixed(3)),
B._relative?(G=(A.x+B.x).toFixed(3),a=(A.y+B.y).toFixed(3)):(G=A.x.toFixed(3),a=A.y.toFixed(3)),L=B.x.toFixed(3),J=B.y.toFixed(3),t.bezierCurveTo(b,k,G,a,L,J));break;case Two.Commands.line:t.lineTo(L,J);break;case Two.Commands.move:H=c,t.moveTo(L,J)}});s&&t.closePath();t.fill();t.stroke();t.restore();return this.flagReset()}}},M=Two[Two.Types.canvas]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.ctx=this.domElement.getContext("2d");this.overdraw=a.overdraw||!1;this.scene=
new Two.Group;this.scene.parent=this};_.extend(M,{Utils:O});_.extend(M.prototype,Backbone.Events,{setSize:function(a,b,c){this.width=a;this.height=b;this.ratio=_.isUndefined(c)?r(this.ctx):c;this.domElement.width=a*this.ratio;this.domElement.height=b*this.ratio;_.extend(this.domElement.style,{width:a+"px",height:b+"px"});return this},render:function(){var a=1===this.ratio;a||(this.ctx.save(),this.ctx.scale(this.ratio,this.ratio));this.overdraw||this.ctx.clearRect(0,0,this.width,this.height);O.group.render.call(this.scene,
this.ctx);a||this.ctx.restore();return this}})})();(function(){var C=Two.Matrix.Multiply,r=Two.Utils.mod,g=[1,0,0,0,1,0,0,0,1],e=new Two.Array(9),m=Two.Utils.getRatio,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M,t,I,T,f,h,E,ea,P,Q,aa,da,U,V,W,X,Y,ba,ca,Z,R,$,fa,ga,N,ia,ja,ka,ha,S={canvas:document.createElement("canvas"),uv:new Two.Array([0,0,1,0,0,1,0,1,1,0,1,1]),group:{renderChild:function(a){S[a._renderer.type].render.call(a,this.gl,this.program)},render:function(a,b){this._update();n=this.parent;c=n._matrix&&n._matrix.manual||n._flagMatrix;
p=this._matrix.manual||this._flagMatrix;if(c||p)this._renderer.matrix||(this._renderer.matrix=new Two.Array(9)),this._matrix.toArray(!0,e),C(e,n._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*n._renderer.scale,c&&(this._flagMatrix=!0);_.each(this.children,S.group.renderChild,{gl:a,program:b});return this.flagReset()}},polygon:{render:function(a,b){if(!this._visible||!this._opacity)return this;n=this.parent;c=n._matrix.manual||n._flagMatrix;p=this._matrix.manual||this._flagMatrix;
l=this._flagVertices||this._flagFill||this._flagStroke||this._flagLinewidth||this._flagOpacity||this._flagVisible||this._flagCap||this._flagJoin||this._flagMiter||this._flagScale;this._update();if(c||p)this._renderer.matrix||(this._renderer.matrix=new Two.Array(9)),this._matrix.toArray(!0,e),C(e,n._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*n._renderer.scale;l&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new Two.Array(12)),
S.getBoundingClientRect(this._vertices,this._linewidth,this._renderer.rect),S.getTriangles(this._renderer.rect,this._renderer.triangles),S.updateBuffer(a,this,b),S.updateTexture(a,this));a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer);a.vertexAttribPointer(b.textureCoords,2,a.FLOAT,!1,0,0);a.bindTexture(a.TEXTURE_2D,this._renderer.texture);a.uniformMatrix3fv(b.matrix,!1,this._renderer.matrix);a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer);a.vertexAttribPointer(b.position,2,a.FLOAT,
!1,0,0);a.drawArrays(a.TRIANGLES,0,6);return this.flagReset()}},getBoundingClientRect:function(c,e,f){D=Infinity;F=-Infinity;s=Infinity;y=-Infinity;_.each(c,function(b,c){d=b.x;z=b.y;q;w;x;B;H=b.controls;s=Math.min(z,s);D=Math.min(d,D);F=Math.max(d,F);y=Math.max(z,y);b.controls&&(G=H.left,a=H.right,G&&a&&(q=b._relative?G.x+d:G.x,w=b._relative?G.y+z:G.y,x=b._relative?a.x+d:a.x,B=b._relative?a.y+z:a.y,q&&(w&&x&&B)&&(s=Math.min(w,B,s),D=Math.min(q,x,D),F=Math.max(q,x,F),y=Math.max(w,B,y))))});_.isNumber(e)&&
(s-=e,D-=e,F+=e,y+=e);b=F-D;k=y-s;f.top=s;f.left=D;f.right=F;f.bottom=y;f.width=b;f.height=k;f.centroid||(f.centroid={});f.centroid.x=-D;f.centroid.y=-s},getTriangles:function(a,b){s=a.top;D=a.left;F=a.right;y=a.bottom;b[0]=D;b[1]=s;b[2]=F;b[3]=s;b[4]=D;b[5]=y;b[6]=D;b[7]=y;b[8]=F;b[9]=s;b[10]=F;b[11]=y},updateCanvas:function(a){v=a._vertices;K=this.canvas;u=this.ctx;A=a._renderer.scale;L=a._stroke;J=a._linewidth*A;O=a._fill;M=a._opacity;t=a._cap;I=a._join;T=a._miter;f=a._closed;h=v.length;E=h-1;
K.width=Math.max(Math.ceil(a._renderer.rect.width*A),1);K.height=Math.max(Math.ceil(a._renderer.rect.height*A),1);ea=a._renderer.rect.centroid;P=ea.x*A;Q=ea.y*A;u.clearRect(0,0,K.width,K.height);O&&(u.fillStyle=O);L&&(u.strokeStyle=L);J&&(u.lineWidth=J);T&&(u.miterLimit=T);I&&(u.lineJoin=I);t&&(u.lineCap=t);_.isNumber(M)&&(u.globalAlpha=M);u.beginPath();_.each(v,function(a,b){aa;da;q;x;U;V;W;X;Y;ba;ca;G;d=(a.x*A+P).toFixed(3);z=(a.y*A+Q).toFixed(3);switch(a._command){case Two.Commands.close:u.closePath();
break;case Two.Commands.curve:da=f?r(b-1,h):Math.max(b-1,0);aa=f?r(b+1,h):Math.min(b+1,E);q=v[da];x=v[aa];Y=q.controls&&q.controls.right||q;ba=a.controls&&a.controls.left||a;q._relative?(W=((Y.x+q.x)*A+P).toFixed(3),X=((Y.y+q.y)*A+Q).toFixed(3)):(W=(Y.x*A+P).toFixed(3),X=(Y.y*A+Q).toFixed(3));a._relative?(U=((ba.x+a.x)*A+P).toFixed(3),V=((ba.y+a.y)*A+Q).toFixed(3)):(U=(ba.x*A+P).toFixed(3),V=(ba.y*A+Q).toFixed(3));u.bezierCurveTo(W,X,U,V,d,z);b>=E&&f&&(x=B,ca=a.controls&&a.controls.right||a,G=x.controls&&
x.controls.left||x,a._relative?(W=((ca.x+a.x)*A+P).toFixed(3),X=((ca.y+a.y)*A+Q).toFixed(3)):(W=(ca.x*A+P).toFixed(3),X=(ca.y*A+Q).toFixed(3)),x._relative?(U=((G.x+x.x)*A+P).toFixed(3),V=((G.y+x.y)*A+P).toFixed(3)):(U=(G.x*A+P).toFixed(3),V=(G.y*A+Q).toFixed(3)),d=(x.x*A+P).toFixed(3),z=(x.y*A+Q).toFixed(3),u.bezierCurveTo(W,X,U,V,d,z));break;case Two.Commands.line:u.lineTo(d,z);break;case Two.Commands.move:B=a,u.moveTo(d,z)}});f&&u.closePath();u.fill();u.stroke()},updateTexture:function(a,b){this.updateCanvas(b);
b._renderer.texture&&a.deleteTexture(b._renderer.texture);a.bindBuffer(a.ARRAY_BUFFER,b._renderer.textureCoordsBuffer);b._renderer.texture=a.createTexture();a.bindTexture(a.TEXTURE_2D,b._renderer.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);0>=this.canvas.width||0>=this.canvas.height||a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.canvas)},
updateBuffer:function(a,b,c){_.isObject(b._renderer.buffer)&&a.deleteBuffer(b._renderer.buffer);b._renderer.buffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b._renderer.buffer);a.enableVertexAttribArray(c.position);a.bufferData(a.ARRAY_BUFFER,b._renderer.triangles,a.STATIC_DRAW);_.isObject(b._renderer.textureCoordsBuffer)&&a.deleteBuffer(b._renderer.textureCoordsBuffer);b._renderer.textureCoordsBuffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b._renderer.textureCoordsBuffer);a.enableVertexAttribArray(c.textureCoords);
a.bufferData(a.ARRAY_BUFFER,this.uv,a.STATIC_DRAW)},program:{create:function(a,b){Z=a.createProgram();_.each(b,function(b){a.attachShader(Z,b)});a.linkProgram(Z);R=a.getProgramParameter(Z,a.LINK_STATUS);if(!R)throw ga=a.getProgramInfoLog(Z),a.deleteProgram(Z),new Two.Utils.Error("unable to link program: "+ga);return Z}},shaders:{create:function(a,b,c){$=a.createShader(a[c]);a.shaderSource($,b);a.compileShader($);fa=a.getShaderParameter($,a.COMPILE_STATUS);if(!fa)throw ga=a.getShaderInfoLog($),a.deleteShader($),
new Two.Utils.Error("unable to compile shader "+$+": "+ga);return $},types:{vertex:"VERTEX_SHADER",fragment:"FRAGMENT_SHADER"},vertex:"attribute vec2 a_position;\nattribute vec2 a_textureCoords;\n\nuniform mat3 u_matrix;\nuniform vec2 u_resolution;\n\nvarying vec2 v_textureCoords;\n\nvoid main() {\n   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;\n   vec2 normal = projected / u_resolution;\n   vec2 clipspace = (normal * 2.0) - 1.0;\n\n   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);\n   v_textureCoords = a_textureCoords;\n}",
fragment:"precision mediump float;\n\nuniform sampler2D u_image;\nvarying vec2 v_textureCoords;\n\nvoid main() {\n  gl_FragColor = texture2D(u_image, v_textureCoords);\n}"}};S.ctx=S.canvas.getContext("2d");var la=Two[Two.Types.webgl]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.scene=new Two.Group;this.scene.parent=this;this._renderer={matrix:new Two.Array(g),scale:1};this._flagMatrix=!0;ha=_.defaults(a||{},{antialias:!1,alpha:!0,premultipliedAlpha:!0,stencil:!0,
preserveDrawingBuffer:!0,overdraw:!1});this.overdraw=ha.overdraw;N=this.ctx=this.domElement.getContext("webgl",ha)||this.domElement.getContext("experimental-webgl",ha);if(!this.ctx)throw new Two.Utils.Error("unable to create a webgl context. Try using another renderer.");ka=S.shaders.create(N,S.shaders.vertex,S.shaders.types.vertex);ja=S.shaders.create(N,S.shaders.fragment,S.shaders.types.fragment);this.program=S.program.create(N,[ka,ja]);N.useProgram(this.program);this.program.position=N.getAttribLocation(this.program,
"a_position");this.program.matrix=N.getUniformLocation(this.program,"u_matrix");this.program.textureCoords=N.getAttribLocation(this.program,"a_textureCoords");N.disable(N.DEPTH_TEST);N.enable(N.BLEND);N.blendEquationSeparate(N.FUNC_ADD,N.FUNC_ADD);N.blendFuncSeparate(N.SRC_ALPHA,N.ONE_MINUS_SRC_ALPHA,N.ONE,N.ONE_MINUS_SRC_ALPHA)};_.extend(la.prototype,Backbone.Events,{setSize:function(a,b,c){this.width=a;this.height=b;this.ratio=_.isUndefined(c)?m(this.ctx):c;this.domElement.width=a*this.ratio;this.domElement.height=
b*this.ratio;_.extend(this.domElement.style,{width:a+"px",height:b+"px"});a*=this.ratio;b*=this.ratio;this._renderer.matrix[0]=this._renderer.matrix[4]=this._renderer.scale=this.ratio;this._flagMatrix=!0;this.ctx.viewport(0,0,a,b);ia=this.ctx.getUniformLocation(this.program,"u_resolution");this.ctx.uniform2f(ia,a,b);return this},render:function(){N=this.ctx;this.overdraw||N.clear(N.COLOR_BUFFER_BIT|N.DEPTH_BUFFER_BIT);S.group.render.call(this.scene,N,this.program);this._flagMatrix=!1;return this}})})();(function(){var C,r=Two.Shape=function(g){this._renderer={};this.id=Two.uniqueId();this._matrix=new Two.Matrix;this.translation=new Two.Vector;this.translation.bind(Two.Events.change,_.bind(r.FlagMatrix,this));this.rotation=0;this.scale=1};_.extend(r,Backbone.Events,{FlagMatrix:function(){this._flagMatrix=!0},MakeObservable:function(g){Object.defineProperty(g,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation=e;this._flagMatrix=!0}});Object.defineProperty(g,"scale",{get:function(){return this._scale},
set:function(e){this._scale=e;this._flagScale=this._flagMatrix=!0}})}});_.extend(r.prototype,{_flagMatrix:!0,_rotation:0,_scale:1,addTo:function(g){g.add(this);return this},clone:function(){C=new r;C.translation.copy(this.translation);C.rotation=this.rotation;C.scale=this.scale;_.each(r.Properties,function(g){C[g]=this[g]},this);return C._update()},_update:function(){!this._matrix.manual&&this._flagMatrix&&this._matrix.identity().translate(this.translation.x,this.translation.y).scale(this.scale).rotate(this.rotation);
this.parent&&_.isFunction(this.parent._update)&&this.parent._update();return this},flagReset:function(){this._flagScale=this._flagMatrix=!1;return this}});r.MakeObservable(r.prototype)})();(function(){var C=Math.min,r=Math.max,g=Math.round,e=Two.Utils.getComputedMatrix,m,n,c,p,l,D,F,s,y,d,z,q,w,x,B,H,G,a,b,k,v,K,u,A,L,J,O,M=Two.Polygon=function(a,b,c,d){Two.Shape.call(this);this._renderer.type="polygon";this._closed=!!b;this._curved=!!c;this.beginning=0;this.ending=1;this.fill="#fff";this.stroke="#000";this.opacity=this.linewidth=1;this.visible=!0;this.cap="butt";this.join="miter";this.miter=4;this._vertices=[];this.vertices=a;this.automatic=!d};_.extend(M,{Properties:"fill stroke linewidth opacity visible cap join miter closed curved automatic beginning ending".split(" "),
FlagVertices:function(){this._flagVertices=!0},MakeObservable:function(a){Two.Shape.MakeObservable(a);_.each(M.Properties.slice(0,8),function(b){var c="_"+b,d="_flag"+b.charAt(0).toUpperCase()+b.slice(1);Object.defineProperty(a,b,{get:function(){return this[c]},set:function(a){this[c]=a;this[d]=!0}})});Object.defineProperty(a,"closed",{get:function(){return this._closed},set:function(a){this._closed=!!a;this._flagVertices=!0}});Object.defineProperty(a,"curved",{get:function(){return this._curved},
set:function(a){this._curved=!!a;this._flagVertices=!0}});Object.defineProperty(M.prototype,"automatic",{get:function(){return this._automatic},set:function(a){a!==this._automatic&&(method=(this._automatic=!!a)?"ignore":"listen",_.each(this.vertices,function(a){a[method]()}))}});Object.defineProperty(a,"beginning",{get:function(){return this._beginning},set:function(a){this._beginning=C(r(a,0),this._ending);this._flagVertices=!0}});Object.defineProperty(a,"ending",{get:function(){return this._ending},
set:function(a){this._ending=C(r(a,this._beginning),1);this._flagVertices=!0}});Object.defineProperty(a,"vertices",{get:function(){return this._collection},set:function(a){var b=_.bind(M.FlagVertices,this),c=_.bind(function(a){_.each(a,function(a){a.bind(Two.Events.change,b)},this);b()},this),d=_.bind(function(a){_.each(a,function(a){a.unbind(Two.Events.change,b)},this);b()},this);this._collection&&this._collection.unbind();this._collection=new Two.Utils.Collection(a.slice(0));this._collection.bind(Two.Events.insert,
c);this._collection.bind(Two.Events.remove,d);verticesChanged=!0;c(this._collection)}})}});_.extend(M.prototype,Two.Shape.prototype,{_flagVertices:!0,_flagFill:!0,_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagCap:!0,_flagJoin:!0,_flagMiter:!0,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,clone:function(a){a=a||this.parent;s=_.map(this.vertices,function(a){return a.clone()});
y=new M(s,this.closed,this.curved,!this.automatic);_.each(Two.Shape.Properties,function(a){y[a]=this[a]},this);y.translation.copy(this.translation);y.rotation=this.rotation;y.scale=this.scale;a.add(y);return y},toObject:function(){var a={vertices:_.map(this.vertices,function(a){return a.toObject()})};_.each(Two.Shape.Properties,function(b){a[b]=this[b]},this);a.translation=this.translation.toObject;a.rotation=this.rotation;a.scale=this.scale;return a},noFill:function(){this.fill="transparent";return this},
noStroke:function(){this.stroke="transparent";return this},corner:function(){d=this.getBoundingClientRect(!0);d.centroid={x:d.left+d.width/2,y:d.top+d.height/2};_.each(this.vertices,function(a){a.addSelf(d.centroid)});return this},center:function(){d=this.getBoundingClientRect(!0);d.centroid={x:d.left+d.width/2,y:d.top+d.height/2};_.each(this.vertices,function(a){a.subSelf(d.centroid)});return this},remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},getBoundingClientRect:function(a){this._update();
b=a?this._matrix:e(this);z=this.linewidth/2;void 0;q=Infinity;w=-Infinity;x=Infinity;B=-Infinity;_.each(this._vertices,function(a){H=a.x;G=a.y;a=b.multiply(H,G,1);x=C(a.y-z,x);q=C(a.x-z,q);w=r(a.x+z,w);B=r(a.y+z,B)});return{top:x,left:q,right:w,bottom:B,width:w-q,height:B-x}},plot:function(){if(this.curved)return Two.Utils.getCurveFromPoints(this._vertices,this.closed),this;_.each(this._vertices,function(a,b){a._command=0===b?Two.Commands.move:Two.Commands.line},this);return this},subdivide:function(b){this._update();
p=this.vertices.length-1;a=this.vertices[p];l=this._closed||this.vertices[p]._command===Two.Commands.close;s=[];_.each(this.vertices,function(c,d){if(!(0>=d)||l)if(c.command===Two.Commands.move)s.push(new Two.Anchor(a.x,a.y)),0<d&&(s[s.length-1].command=Two.Commands.line);else{w=a.controls&&a.controls.right;q=c.controls&&c.controls.left;k=a.x;v=a.y;K=(w||a).x;u=(w||a).y;A=(q||c).x;L=(q||c).y;J=c.x;O=c.y;w&&a._relative&&(K+=a.x,u+=a.y);q&&c._relative&&(A+=c.x,L+=c.y);var e=Two.Utils.subdivide(k,v,
K,u,A,L,J,O,b);s=s.concat(e);_.each(e,function(b,c){b.command=0>=c&&a.command===Two.Commands.move?Two.Commands.move:Two.Commands.line});d>=p&&(s.push(new Two.Anchor(J,O)),s[s.length-1].command=l?Two.Commands.close:Two.Commands.line)}a=c},this);this._curved=this._automatic=!1;this.vertices=s;return this},_update:function(){if(this._flagVertices){m=this.vertices.length;p=m-1;n=g(this._beginning*p);c=g(this._ending*p);this._vertices.length=0;for(F=n;F<c+1;F++)D=this.vertices[F],this._vertices.push(D);
this._automatic&&this.plot()}Two.Shape.prototype._update.call(this);return this},flagReset:function(){this._flagVertices=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpacity=this._flagVisible=this._flagCap=this._flagJoin=this._flagMiter=!1;Two.Shape.prototype.flagReset.call(this);return this}});M.MakeObservable(M.prototype)})();(function(){var C=Math.min,r=Math.max,g,e,m,n,c,p,l,D,F,s,y,d,z=Two.Group=function(c){Two.Shape.call(this,!0);this._renderer.type="group";this.additions=[];this.subtractions=[];this.children={}};_.extend(z,{MakeObservable:function(c){Two.Shape.MakeObservable(c);z.MakeGetterSetter(c,Two.Polygon.Properties)},MakeGetterSetter:function(c,d){_.isArray(d)||(d=[d]);_.each(d,function(d){g="_"+d;Object.defineProperty(c,d,{get:function(){return this[g]},set:function(c){this[g]=c;_.each(this.children,function(e){e[d]=
c})}})})}});_.extend(z.prototype,Two.Shape.prototype,{_flagAdditions:!1,_flagSubtractions:!1,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,clone:function(c){c=c||this.parent;n=new z;c.add(n);m=_.map(this.children,function(c){return c.clone(n)});n.translation.copy(this.translation);n.rotation=this.rotation;n.scale=this.scale;return n},toObject:function(){var c={children:{},translation:this.translation.toObject(),
rotation:this.rotation,scale:this.scale};_.each(this.children,function(d,e){c.children[e]=d.toObject()},this);return c},corner:function(){c=this.getBoundingClientRect(!0);p={x:c.left,y:c.top};_.each(this.children,function(c){c.translation.subSelf(p)});return this},center:function(){c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/2,y:c.top+c.height/2};_.each(this.children,function(d){d.translation.subSelf(c.centroid)});return this},add:function(c){l=arguments.length;D=c;m=this.children;
F=this.parent;s=this.additions;_.isArray(c)||(D=_.toArray(arguments));_.each(D,function(c){c&&(y=c.id,e=c.parent,_.isUndefined(m[y])&&(e&&(delete e.children[y],d=_.indexOf(e.additions,y),0<=d&&e.additions.splice(d,1)),m[y]=c,c.parent=this,s.push(y),this._flagAdditions=!0))},this);return this},remove:function(c){l=arguments.length;D=c;m=this.children;F=this.parent;s=this.subtractions;if(0>=l&&F)return F.remove(this),this;_.isArray(c)||(D=_.toArray(arguments));_.each(D,function(c){y=c.id;grandchildren=
c.children;e=c.parent;y in m&&(delete m[y],delete c.parent,d=_.indexOf(e.additions,y),0<=d&&e.additions.splice(d,1),s.push(y),this._flagSubtractions=!0)},this);return this},getBoundingClientRect:function(d){this._update();var e=Infinity,g=-Infinity,l=Infinity,m=-Infinity;_.each(this.children,function(d){c=d.getBoundingClientRect();_.isNumber(c.top)&&(_.isNumber(c.left)&&_.isNumber(c.right)&&_.isNumber(c.bottom))&&(l=C(c.top,l),e=C(c.left,e),g=r(c.right,g),m=r(c.bottom,m))},this);return{top:l,left:e,
right:g,bottom:m,width:g-e,height:m-l}},noFill:function(){_.each(this.children,function(c){c.noFill()});return this},noStroke:function(){_.each(this.children,function(c){c.noStroke()});return this},subdivide:function(){var c=arguments;_.each(this.children,function(d){d.subdivide.apply(d,c)});return this},flagReset:function(){this._flagAdditions&&(this.additions.length=0,this._flagAdditions=!1);this._flagSubtractions&&(this.subtractions.length=0,this._flagSubtractions=!1);Two.Shape.prototype.flagReset.call(this);
return this}});z.MakeObservable(z.prototype)})();
/*!
 * VERSION: beta 1.10.2
 * DATE: 2013-08-05
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],i instanceof Array&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));r.tweens instanceof Array&&this.add(r.tweens,0,r.align,r.stagger)},r=[],n=function(t){var e,i={};for(e in t)i[e]=t[e];return i},a=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||r)},o=r.slice,h=s.prototype=new e;return s.version="1.10.2",h.constructor=s,h.kill()._gc=!1,h.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},h.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},h.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},h.staggerTo=function(t,e,r,a,h,l,_,u){var p,f=new s({onComplete:l,onCompleteParams:_,onCompleteScope:u});for("string"==typeof t&&(t=i.selector(t)||t),!(t instanceof Array)&&t.length&&t!==window&&t[0]&&(t[0]===window||t[0].nodeType&&t[0].style&&!t.nodeType)&&(t=o.call(t,0)),a=a||0,p=0;t.length>p;p++)r.startAt&&(r.startAt=n(r.startAt)),f.to(t[p],e,n(r),p*a);return this.add(f,h)},h.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},h.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},h.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},h.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},h.add=function(r,n,a,o){var h,l,_,u,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array){for(a=a||"normal",o=o||0,h=n,l=r.length,_=0;l>_;_++)(u=r[_])instanceof Array&&(u=new s({tweens:u})),this.add(u,h),"string"!=typeof u&&"function"!=typeof u&&("sequence"===a?h=u._startTime+u.totalDuration()/u._timeScale:"start"===a&&(u._startTime-=u.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is neither a tween, timeline, function, nor a string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(p=this;p._gc&&p._timeline;)p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._enabled(!0,!1),p=p._timeline;return this},h.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},h._remove=function(t,i){return e.prototype._remove.call(this,t,i),this._last?this._time>this._last._startTime&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},h.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},h.insert=h.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},h.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},h.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},h.addPause=function(t,e,i,s){return this.call(a,["{self}",e,i,s],this,t)},h.removeLabel=function(t){return delete this._labels[t],this},h.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},h._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r instanceof Array)for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},h.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(t,e){return this.play(t,e)},h.gotoAndStop=function(t,e){return this.pause(t,e)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,l=this._dirty?this.totalDuration():this._totalDuration,_=this._time,u=this._startTime,p=this._timeScale,f=this._paused;if(t>=l?(this._totalTime=this._time=l,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,t=l+1e-6):1e-7>t?(this._totalTime=this._time=0,(0!==_||0===this._duration&&this._rawPrevTime>0)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=t,t=0,this._initted||(h=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==_&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==_&&t>0&&(this._active=!0),0===_&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=_)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||_>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._gc||(u===this._startTime||p!==this._timeScale)&&(0===this._time||l>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))}},h._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},h.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},h.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},h._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},h.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},h._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},h.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},h._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*t,!1):this._time/this.duration()},h.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},h.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: 1.11.5
 * DATE: 2014-02-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.5",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,I=X.createElement("div"),E=X.createElement("img"),F=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||I;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},q=X.defaultView?X.defaultView.getComputedStyle:function(){},H=a.getStyle=function(t,e,i,r,s){var n;return z||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||q(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):U(t)},Q=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a=C.test(e),o=t,l=I.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==r&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+r:(o=t.parentNode||X.body,l[a?"width":"height"]=i+r),o.appendChild(I),n=parseFloat(I[a?"offsetWidth":"offsetHeight"]),o.removeChild(I),0!==n||s||(n=Q(t,e,i,r,!0))),h?-n:n},Z=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=H(t,"margin"+r,i);return t["offset"+r]-(Q(t,e,parseFloat(s),s.replace(y,""))||0)},$=function(t,e){var i,r,s={};if(e=e||q(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(S,k)]=e[i]);return z||(s.opacity=U(t)),r=be(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,we&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},G=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||q(t,null);--n>-1;)r-=parseFloat(H(t,"padding"+s[n],i,!0))||0,r-=parseFloat(H(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=s(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=s(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},_e=(F._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),pe=(F._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,_=r,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,r=u=i.parse(t,e,r,s),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));r&&r!==_;){if(1>=r.type&&(o=r.p,f[o]=r.s+r.c,p[o]=r.s,n||(h=new _e(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,f[o]=r.data[l],p[o]=r[l],n||(h=new _e(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:f,firstMPT:h,pt:u}},F.CSSPropTween=function(t,e,r,s,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?r:_,this.e=void 0===p?r+s:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=r.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=F._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new pe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=j+"transform",xe=V("transformOrigin"),we=null!==V("perspective"),be=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var s,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(H(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?s=H(t,Te,e,!0):t.currentStyle&&(s=t.currentStyle.filter.match(A),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),v.x||0,v.y||0].join(","):""),n=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||r||null==v.rotationX){var N,X,I,E,F,Y,z,U=n[0],B=n[1],j=n[2],W=n[3],V=n[4],q=n[5],Q=n[6],Z=n[7],$=n[11],G=Math.atan2(Q,k),K=-b>G||G>b;v.rotationX=G*L,G&&(E=Math.cos(-G),F=Math.sin(-G),N=V*E+S*F,X=q*E+R*F,I=Q*E+k*F,S=V*-F+S*E,R=q*-F+R*E,k=Q*-F+k*E,$=Z*-F+$*E,V=N,q=X,Q=I),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,E=Math.cos(-G),F=Math.sin(-G),N=U*E-S*F,X=B*E-R*F,I=j*E-k*F,R=B*F+R*E,k=j*F+k*E,$=W*F+$*E,U=N,B=X,j=I),G=Math.atan2(B,q),v.rotation=G*L,G&&(z=-b>G||G>b,E=Math.cos(-G),F=Math.sin(-G),U=U*E+V*F,X=B*E+q*F,q=B*-F+q*E,Q=j*-F+Q*E,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(q*q+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Q*Q+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!r&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===H(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,re=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(re*re+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||re?Math.atan2(ie,re)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x,b=r.y;if(null!=r.ox&&(f=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?f-r.ieOffsetX:d-r.ieOffsetY,_[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,r,s,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P=this.data,S=this.t.style,R=P.rotation*M,k=P.scaleX,C=P.scaleY,A=P.scaleZ,O=P.perspective;if(p){var D=1e-4;D>k&&k>-D&&(k=A=2e-5),D>C&&C>-D&&(C=A=2e-5),!O||P.z||P.rotationX||P.rotationY||(O=0)}if(R||P.skewX)v=Math.cos(R),y=Math.sin(R),t=v,s=y,P.skewX&&(R-=P.skewX*M,v=Math.cos(R),y=Math.sin(R)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==A||O))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==k||1!==C?" scale("+k+","+C+")":""),void 0;t=n=1,e=s=0}u=1,i=r=a=o=l=h=_=f=c=0,d=O?-1/O:0,m=P.zOrigin,g=1e5,R=P.rotationY*M,R&&(v=Math.cos(R),y=Math.sin(R),l=u*-y,f=d*-y,i=t*y,a=s*y,u*=v,d*=v,t*=v,s*=v),R=P.rotationX*M,R&&(v=Math.cos(R),y=Math.sin(R),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==A&&(i*=A,a*=A,u*=A,d*=A),1!==C&&(e*=C,n*=C,h*=C,c*=C),1!==k&&(t*=k,s*=k,l*=k,f*=k),m&&(_-=m,r=i*_,o=a*_,_=u*_+m),r=(T=(r+=P.x)-(r|=0))?(0|T*g+(0>T?-.5:.5))/g+r:r,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=P.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,S[ye]="matrix3d("+[(0|t*g)/g,(0|s*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,r,o,_,O?1+-_/O:1].join(",")+")"},Re=function(t){var e,i,r,s,n,a=this.data,o=this.t,l=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=Se,Se.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,r=1e5,s=a.scaleX*r,n=a.scaleY*r,l[ye]="matrix("+(0|Math.cos(e)*s)/r+","+(0|Math.sin(e)*s)/r+","+(0|Math.sin(i)*-n)/r+","+(0|Math.cos(i)*n)/r+","+a.x+","+a.y+")"):l[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,r,n,a,o){if(r._transform)return n;var l,h,u,_,p,f,c,d=r._transform=be(t,s,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:re(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:re(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:re(y.scaleZ,d.scaleZ),x:re(y.x,d.x),y:re(y.y,d.y),z:re(y.z,d.z),perspective:re(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=se("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=se("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=se("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:se(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:se(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(we&&null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,r._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||H(t,i,s,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(r._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),_=u=H(t,b[l],s,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(T=Q(t,"borderLeft",f,v),x=Q(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Q(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,_,p,f="background-position",d=s||q(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=H(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),E.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-E.width:t.offsetHeight-E.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(H(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",s,!1,"0px")+" "+H(t,"borderTopStyle",s,!1,"solid")+" "+H(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter"),s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("opacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(H(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===H(t,"visibility",s)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,r,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,s),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);s&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new pe(t,r,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=q(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=H(t,"zIndex",s),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,s),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=H(t,"zIndex",s),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,s,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=H(t,a,s)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Z(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=a in r?r[a]:c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Q(t,a,u,c),"%"===d?(u/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Q(t,a,1,"em"):(_=Q(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,s,!0)},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)De(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),s=_.length;--s>-1;)if(n=G(_[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);l.push(e.to(_[s],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: beta 1.3.0
 * DATE: 2013-10-21
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,u=(i+s)/2,_=(h+l)/2,c=(l+u)/2,p=(c-_)/8;return r.b=h+(t-h)/4,n.b=_+p,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(_+c)/2,a.b=c-p,o.b=u+(s-u)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,u,_,c,p,f,d,m,g,v,y,T,w,b=t.length-1,x=0,P=t[0].a;for(l=0;b>l;l++)p=t[x],u=p.a,_=p.d,c=t[x+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=_-(_-u)*(a?.5*r:0!==y?w/y:0),d=_+(c-_)*(a?.5*r:0!==T?w/T:0),m=_-(f+((d-f)*(3*y/(y+T)+.5)/4||0))):(f=_-.5*(_-u)*r,d=_+.5*(c-_)*r,m=_-(f+d)/2),f+=m,d+=m,p.c=g=f,p.b=0!==l?P:P=p.a+.6*(p.c-p.a),p.da=_-u,p.ca=g-u,p.ba=P-u,n?(v=o(u,P,g,_),t.splice(x,1,v[0],v[1],v[2],v[3]),x+=4):x++,P=d;p=t[x],p.b=P,p.c=P+.4*(p.d-P),p.da=p.d-p.a,p.ca=p.c-p.a,p.ba=P-p.a,n&&(v=o(p.a,P,p.c,p.d),t.splice(x,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,u,_,c,p=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=a[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return p[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),p;for(h=0;o>h;h++)l=t[h][s],u=t[h+1][s],p[h]=new n(l,0,0,u),r&&(_=t[h+2][s],e[h]=(e[h]||0)+(u-l)*(u-l),i[h]=(i[h]||0)+(_-u)*(_-u));return p[h]=new n(t[h][s],0,0,t[h+1][s]),p},u=function(t,n,o,u,_,c){var p,f,d,m,g,v,y,T,w={},b=[],x=c||t[0];_="string"==typeof _?","+_+",":a,null==n&&(n=1);for(f in t[0])b.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,p=b.length;--p>-1;)if(f=b[p],Math.abs(x[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,p=b.length;--p>-1;)f=b[p],r[f]=-1!==_.indexOf(","+f+","),w[f]=l(t,f,r[f],c);for(p=e.length;--p>-1;)e[p]=Math.sqrt(e[p]),i[p]=Math.sqrt(i[p]);if(!u){for(p=b.length;--p>-1;)if(r[f])for(d=w[b[p]],v=d.length-1,m=0;v>m;m++)g=d[m+1].da/i[m]+d[m].da/e[m],s[m]=(s[m]||0)+g*g;for(p=s.length;--p>-1;)s[p]=Math.sqrt(s[p])}for(p=b.length,m=o?4:1;--p>-1;)f=b[p],d=w[f],h(d,n,o,u,r[f]),y&&(d.splice(0,m),d.splice(d.length-m,m));return w},_=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,u,_,c,p,f,d={},m="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||m+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],d[c]=h=[],p=0,_=t.length,u=0;_>u;u++)s=null==i?t[u][c]:"string"==typeof(f=t[u][c])&&"="===f.charAt(1)?i[c]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&u>1&&_-1>u&&(h[p++]=(s+h[p-2])/2),h[p++]=s;for(_=p-m+1,p=0,u=0;_>u;u+=m)s=h[u],r=h[u+1],a=h[u+2],o=2===m?0:h[u+3],h[p++]=f=3===m?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=p}return d},c=function(t,e,i){for(var s,r,n,a,o,h,l,u,_,c,p,f=1/i,d=t.length;--d>-1;)for(c=t[d],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,u=1;i>=u;u++)l=f*u,_=1-l,s=r-(r=(l*l*a+3*_*(l*o+_*h))*l),p=d*i+u-1,e[p]=(e[p]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,u=e-1,_=[],p=[];for(i in t)c(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===u&&(l+=h,n=s/e>>0,_[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:_}},f=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},c=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in c)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):_(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var d=p(this._beziers,this._timeRes);this._length=d.length,this._lengths=d.lengths,this._segments=d.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,u,_,c=this._segCount,p=this._func,f=this._target;if(this._timeRes){if(u=this._lengths,_=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=u[++r]););this._l1=u[r-1],this._li=r,this._curSeg=_=this._segments[r],this._s2=_[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=u[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=u[r],this._li=r,this._curSeg=_=this._segments[r],this._s1=_[(this._si=_.length-1)-1]||0,this._s2=_[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&_.length-1>r){for(l=_.length-1;l>r&&e>=(this._s2=_[++r]););this._s1=_[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=_[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=_[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),p[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,m,g,v,y,T,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],T=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],m=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,m+=(v-m)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=d.a+(d.b-d.a)*o,y=d.b+(d.c-d.b)*o,g+=(y-g)*o,y+=(d.c+(d.d-d.c)*o-y)*o,h=Math.atan2(y-g,v-m)*w+T,p[n]?f[n](h):f[n]=h)}}}),d=f.prototype;f.bezierThrough=u,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,u,_,c=e.values,p=c.length-1,d=[],m={};if(0>p)return o;for(l=0;p>=l;l++)_=i(t,c[l],a,o,h,p!==l),d[l]=_.end;for(u in e)m[u]=e[u];return m.values=d,o=new r(t,"bezier",0,0,_.pt,2),o.data=_,o.plugin=h,o.setRatio=s,0===m.autoRotate&&(m.autoRotate=!0),!m.autoRotate||m.autoRotate instanceof Array||(l=m.autoRotate===!0?0:Number(m.autoRotate),m.autoRotate=null!=_.end.left?[["left","top","rotation",l,!1]]:null!=_.end.x?[["x","y","rotation",l,!1]]:!1),m.autoRotate&&(a._transform||a._enableTransforms(!1),_.autoRotate=a._target._gsTransform),h._onInitTween(_.proxy,m,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: 1.1.0
 * DATE: 2013-02-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * This file is to be used as a simple template for writing your own plugin. See the 
 * notes at http://api.greensock.com/js/com/greensock/plugins/TweenPlugin.html for more details.
 *
 * You can start by doing a search for "yourCustomProperty" and replace it with whatever the name
 * of your property is. This way of defining a plugin was introduced in version 1.9.0 - previous versions
 * of TweenLite won't work with this.
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine.plugin({propName:"translation",priority:0,API:2,version:"1.0.0",overwriteProps:["translation"],init:function(e,t,n){this._target=e;this.x=e.translation.x;this.y=e.translation.y;this._addTween(this,"x",e.translation.x,t.x,"translation_x",!1);this._addTween(this,"y",e.translation.y,t.y,"translation_y",!1);return!0},set:function(e){this._super.setRatio.call(this,e);this._target.translation.x=this.x;this._target.translation.y=this.y}})});window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(a){var o,p,q,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},k=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},l=i("Back",k("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),k("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),k("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),m=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),n=m.prototype=new a;return n.constructor=m,n.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},m.ease=new m(.7,.7),n.config=m.config=function(a,b,c){return new m(a,b,c)},o=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),n=o.prototype=new a,n.constructor=o,n.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},n.config=o.config=function(a){return new o(a)},p=f("easing.RoughEase",function(b){b=b||{};for(var m,n,o,p,q,r,c=b.taper||"none",d=[],e=0,f=0|(b.points||20),g=f,h=b.randomize!==!1,i=b.clamp===!0,k=b.template instanceof a?b.template:null,l="number"==typeof b.strength?.4*b.strength:.4;--g>-1;)m=h?Math.random():1/f*g,n=k?k.getRatio(m):m,"none"===c?o=l:"out"===c?(p=1-m,o=p*p*l):"in"===c?o=m*m*l:.5>m?(p=2*m,o=.5*p*p*l):(p=2*(1-m),o=.5*p*p*l),h?n+=Math.random()*o-.5*o:g%2?n+=.5*o:n-=.5*o,i&&(n>1?n=1:0>n&&(n=0)),d[e++]={x:m,y:n};for(d.sort(function(a,b){return a.x-b.x}),r=new j(1,1,null),g=f;--g>-1;)q=d[g],r=new j(q.x,q.y,r);this._prev=new j(0,0,0!==r.t?r:r.next)},!0),n=p.prototype=new a,n.constructor=p,n.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&b.t>=a;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},n.config=function(a){return new p(a)},p.ease=new p,i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),q=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",q("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),q("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),q("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(p,"RoughEase","ease,"),h(o,"SteppedEase","ease,"),l},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);

/**
 * PhysicsJS v0.5.4 - 2014-02-03
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */
!function(a,b){"object"==typeof exports?module.exports=b.call(a):"function"==typeof define&&define.amd?define(function(){return b.call(a)}):a.Physics=b.call(a)}(this,function(){"use strict";var a=this,b=a.document,c=function e(){return e.world.apply(e,arguments)};c.util={},!function(a){function d(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function e(){}function f(a){a.length=0,A.length<D&&A.push(a)}function g(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);var d=-1;c=c-b||0;for(var e=Array(0>c?0:c);++d<c;)e[d]=a[b+d];return e}function h(){}function i(a,b,c,e,h){if(c){var j=c(a);if("undefined"!=typeof j)return j}if(!s(a))return a;var k=hb.call(a);if(!R[k]||!vb.nodeClass&&d(a))return a;var l=tb[k];switch(k){case K:case L:return new l(+a);case N:case Q:return new l(a);case P:return j=l(a.source,E.exec(a)),j.lastIndex=a.lastIndex,j}if(k=xb(a),b){var m=!e;e||(e=A.pop()||[]),h||(h=A.pop()||[]);for(var n=e.length;n--;)if(e[n]==a)return h[n];j=k?l(a.length):{}}else j=k?g(a):Cb({},a);return k&&(db.call(a,"index")&&(j.index=a.index),db.call(a,"input")&&(j.input=a.input)),b?(e.push(a),h.push(j),(k?Bb:Eb)(a,function(a,d){j[d]=i(a,b,c,e,h)}),m&&(f(e),f(h)),j):j}function j(a,b,c){if("function"!=typeof a)return x;if("undefined"==typeof b)return a;var d=a.__bindData__||vb.funcNames&&!a.name;if("undefined"==typeof d){var e=G&&bb.call(a);vb.funcNames||!e||F.test(e)||(d=!0),(vb.funcNames||!d)&&(d=!vb.funcDecomp||G.test(e),wb(a,d))}if(!0!==d&&d&&1&d[1])return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return v(a,b)}function l(a,b,c,e,g,h){if(c){var i=c(a,b);if("undefined"!=typeof i)return!!i}if(a===b)return 0!==a||1/a==1/b;if(a===a&&!(a&&V[typeof a]||b&&V[typeof b]))return!1;if(null==a||null==b)return a===b;var j=hb.call(a),k=hb.call(b);if(j==I&&(j=O),k==I&&(k=O),j!=k)return!1;switch(j){case K:case L:return+a==+b;case N:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case P:case Q:return a==b+""}if(k=j==J,!k){if(db.call(a,"__wrapped__")||db.call(b,"__wrapped__"))return l(a.__wrapped__||a,b.__wrapped__||b,c,e,g,h);if(j!=O||!vb.nodeClass&&(d(a)||d(b)))return!1;var j=!vb.argsObject&&q(a)?Object:a.constructor,m=!vb.argsObject&&q(b)?Object:b.constructor;if(j!=m&&!(r(j)&&j instanceof j&&r(m)&&m instanceof m))return!1}for(m=!g,g||(g=A.pop()||[]),h||(h=A.pop()||[]),j=g.length;j--;)if(g[j]==a)return h[j]==b;var n=0,i=!0;if(g.push(a),h.push(b),k){if(j=a.length,n=b.length,i=n==a.length,!i&&!e)return i;for(;n--;)if(k=j,m=b[n],e)for(;k--&&!(i=l(a[k],m,c,e,g,h)););else if(!(i=l(a[n],m,c,e,g,h)))break;return i}return Db(b,function(b,d,f){return db.call(f,d)?(n++,i=db.call(a,d)&&l(a[d],b,c,e,g,h)):void 0}),i&&!e&&Db(a,function(a,b,c){return db.call(c,b)?i=-1<--n:void 0}),m&&(f(g),f(h)),i}function m(a,b,c,d,e,f){var g=1&b,h=2&b,i=4&b,j=8&b,k=16&b,l=32&b,n=a;if(!h&&!r(a))throw new TypeError;k&&!c.length&&(b&=-17,k=c=!1),l&&!d.length&&(b&=-33,l=d=!1);var p=a&&a.__bindData__;if(p)return!g||1&p[1]||(p[4]=e),!g&&1&p[1]&&(b|=8),!i||4&p[1]||(p[5]=f),k&&fb.apply(p[2]||(p[2]=[]),c),l&&fb.apply(p[3]||(p[3]=[]),d),p[1]|=b,m.apply(null,p);if(!g||h||i||l||!(vb.fastBind||kb&&k))t=function(){var p=arguments,q=g?e:this;return(i||k||l)&&(p=rb.call(p),k&&ib.apply(p,c),l&&fb.apply(p,d),i&&p.length<f)?(b|=16,m(a,j?b:-4&b,p,null,e,f)):(h&&(a=q[n]),this instanceof t?(q=o(a.prototype),p=a.apply(q,p),s(p)?p:q):a.apply(q,p))};else{if(k){var q=[e];fb.apply(q,c)}var t=k?kb.apply(a,q):kb.call(a,e)}return wb(t,rb.call(arguments)),t}function n(){U.h=H,U.b=U.c=U.g=U.i="",U.e="t",U.j=!0;for(var a,b=0;a=arguments[b];b++)for(var c in a)U[c]=a[c];b=U.a,U.d=/^[^,]+/.exec(b)[0],a=Function,b="return function("+b+"){",c=U;var d="var n,t="+c.d+",E="+c.e+";if(!t)return E;"+c.i+";";c.b?(d+="var u=t.length;n=-1;if("+c.b+"){",vb.unindexedChars&&(d+="if(s(t)){t=t.split('')}"),d+="while(++n<u){"+c.g+";}}else{"):vb.nonEnumArgs&&(d+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+c.g+";}}else{"),vb.enumPrototypes&&(d+="var G=typeof t=='function';"),vb.enumErrorProps&&(d+="var F=t===k||t instanceof Error;");var e=[];if(vb.enumPrototypes&&e.push('!(G&&n=="prototype")'),vb.enumErrorProps&&e.push('!(F&&(n=="message"||n=="name"))'),c.j&&c.f)d+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",e.length&&(d+="if("+e.join("&&")+"){"),d+=c.g+";",e.length&&(d+="}"),d+="}";else if(d+="for(n in t){",c.j&&e.push("m.call(t, n)"),e.length&&(d+="if("+e.join("&&")+"){"),d+=c.g+";",e.length&&(d+="}"),d+="}",vb.nonEnumShadows){for(d+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)d+="n='"+c.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",c.j||(d+="||(!x[n]&&t[n]!==A[n])"),d+="){"+c.g+"}";d+="}"}return(c.b||vb.nonEnumArgs)&&(d+="}"),d+=c.c+";return E",a("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",b+d+"}")(j,M,Y,db,C,q,xb,t,U.f,Z,V,ub,Q,$,hb)}function o(a){return s(a)?lb(a):{}}function p(a){var b,c;return!a||hb.call(a)!=O||(b=a.constructor,r(b)&&!(b instanceof b))||!vb.argsClass&&q(a)||!vb.nodeClass&&d(a)?!1:vb.ownLast?(Db(a,function(a,b,d){return c=db.call(d,b),!1}),!1!==c):(Db(a,function(a,b){c=b}),"undefined"==typeof c||db.call(a,c))}function q(a){return a&&"object"==typeof a&&"number"==typeof a.length&&hb.call(a)==I||!1}function r(a){return"function"==typeof a}function s(a){return!(!a||!V[typeof a])}function t(a){return"string"==typeof a||hb.call(a)==Q}function u(a,b,c){if(b&&"undefined"==typeof c&&xb(a)){c=-1;for(var d=a.length;++c<d&&!1!==b(a[c],c,a););}else Bb(a,b,c);return a}function v(a,b){return 2<arguments.length?m(a,17,rb.call(arguments,2),null,b):m(a,1,null,null,b)}function w(a,b,c){var d,e,f,g,h,i,j,k=0,l=!1,m=!0;if(!r(a))throw new TypeError;if(b=ob(0,b)||0,!0===c)var n=!0,m=!1;else s(c)&&(n=c.leading,l="maxWait"in c&&(ob(b,c.maxWait)||0),m="trailing"in c?c.trailing:m);var o=function(){var c=b-(eb()-g);c>0?i=setTimeout(o,c):(e&&clearTimeout(e),c=j,e=i=j=z,c&&(k=eb(),f=a.apply(h,d)))},p=function(){i&&clearTimeout(i),e=i=j=z,(m||l!==b)&&(k=eb(),f=a.apply(h,d))};return function(){if(d=arguments,g=eb(),h=this,j=m&&(i||!n),!1===l)var c=n&&!i;else{e||n||(k=g);var q=l-(g-k);q>0?e||(e=setTimeout(p,q)):(e&&(e=clearTimeout(e)),k=g,f=a.apply(h,d))}return i||b===l||(i=setTimeout(o,b)),c&&(f=a.apply(h,d)),f}}function x(a){return a}function y(a,b,c){var d=null==a,e=null==b;return null==c&&("boolean"==typeof a&&e?(c=a,a=1):e||"boolean"!=typeof b||(c=b,e=!0)),d&&e&&(b=1),a=+a||0,e?(b=a,a=0):b=+b||0,d=qb(),c||a%1||b%1?pb(a+d*(b-a+parseFloat("1e-"+((d+"").length-1))),b):a+ab(d*(b-a+1))}var z,A=[],B=0,C={},D=40,E=/\w*$/,F=/^function[ \n\r\t]+\w/,G=/\bthis\b/,H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),I="[object Arguments]",J="[object Array]",K="[object Boolean]",L="[object Date]",M="[object Error]",N="[object Number]",O="[object Object]",P="[object RegExp]",Q="[object String]",R={"[object Function]":!1};R[I]=R[J]=R[K]=R[L]=R[N]=R[O]=R[P]=R[Q]=!0;var S={leading:!1,maxWait:0,trailing:!1},T={configurable:!1,enumerable:!1,value:null,writable:!1},U={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},W=V[typeof a]&&a||this,X=[],Y=Error.prototype,Z=Object.prototype,$=String.prototype,_=RegExp("^"+(Z.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),ab=Math.floor,bb=Function.prototype.toString,cb=_.test(cb=Object.getPrototypeOf)&&cb,db=Z.hasOwnProperty,eb=_.test(eb=Date.now)&&eb||function(){return+new Date},fb=X.push,gb=Z.propertyIsEnumerable,hb=Z.toString,ib=X.unshift,jb=function(){try{var a={},b=_.test(b=Object.defineProperty)&&b,c=b(a,a,a)&&b}catch(d){}return c}(),kb=_.test(kb=hb.bind)&&kb,lb=_.test(lb=Object.create)&&lb,mb=_.test(mb=Array.isArray)&&mb,nb=_.test(nb=Object.keys)&&nb,ob=Math.max,pb=Math.min,qb=Math.random,rb=X.slice;a=_.test(W.attachEvent);var sb=kb&&!/\n|true/.test(kb+a),tb={};tb[J]=Array,tb[K]=Boolean,tb[L]=Date,tb["[object Function]"]=Function,tb[O]=Object,tb[N]=Number,tb[P]=RegExp,tb[Q]=String;var ub={};ub[J]=ub[L]=ub[N]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},ub[K]=ub[Q]={constructor:!0,toString:!0,valueOf:!0},ub[M]=ub["[object Function]"]=ub[P]={constructor:!0,toString:!0},ub[O]={constructor:!0},function(){for(var a=H.length;a--;){var b,c=H[a];for(b in ub)db.call(ub,b)&&!db.call(ub[b],c)&&(ub[b][c]=!1)}}();var vb=h.support={};!function(){var a=function(){this.x=1},c={0:1,length:1},d=[];a.prototype={valueOf:1,y:1};for(var e in new a)d.push(e);for(e in arguments);vb.argsClass=hb.call(arguments)==I,vb.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),vb.enumErrorProps=gb.call(Y,"message")||gb.call(Y,"name"),vb.enumPrototypes=gb.call(a,"prototype"),vb.fastBind=kb&&!sb,vb.funcDecomp=!_.test(W.WinRTError)&&G.test(function(){return this}),vb.funcNames="string"==typeof Function.name,vb.nonEnumArgs=0!=e,vb.nonEnumShadows=!/valueOf/.test(d),vb.ownLast="x"!=d[0],vb.spliceObjects=(X.splice.call(c,0,1),!c[0]),vb.unindexedChars="xx"!="x"[0]+Object("x")[0];try{vb.nodeClass=!(hb.call(b)==O&&!({toString:0}+""))}catch(f){vb.nodeClass=!0}}(1),lb||(o=function(a){if(s(a)){e.prototype=a;var b=new e;e.prototype=null}return b||{}});var wb=jb?function(a,b){T.value=b,jb(a,"__bindData__",T)}:e;vb.argsClass||(q=function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&db.call(a,"callee")||!1});var xb=mb||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&hb.call(a)==J||!1},yb=n({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),zb=nb?function(a){return s(a)?vb.enumPrototypes&&"function"==typeof a||vb.nonEnumArgs&&a.length&&q(a)?yb(a):nb(a):[]}:yb,mb={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:zb,g:"if(e(t[n],n,g)===false)return E"};a={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:zb,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"};var Ab={i:"if(!B[typeof t])return E;"+mb.i,b:!1},Bb=n(mb),Cb=n(a,{i:a.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),Db=n(mb,Ab,{j:!1}),Eb=n(mb,Ab);r(/x/)&&(r=function(a){return"function"==typeof a&&"[object Function]"==hb.call(a)}),mb=cb?function(a){if(!a||hb.call(a)!=O||!vb.argsClass&&q(a))return!1;var b=a.valueOf,c="function"==typeof b&&(c=cb(b))&&cb(c);return c?a==c||cb(a)==c:p(a)}:p,h.assign=Cb,h.bind=v,h.createCallback=function(a,b,c){var d=typeof a;if(null==a||"function"==d)return j(a,b,c);if("object"!=d)return function(b){return b[a]};var e=zb(a),f=e[0],g=a[f];return 1!=e.length||g!==g||s(g)?function(b){for(var c=e.length,d=!1;c--&&(d=l(b[e[c]],a[e[c]],null,!0)););return d}:function(a){return a=a[f],g===a&&(0!==g||1/g==1/a)}},h.debounce=w,h.forEach=u,h.forIn=Db,h.forOwn=Eb,h.keys=zb,h.shuffle=function(a){var b=-1,c=a?a.length:0,d=Array("number"==typeof c?c:0);return u(a,function(a){var c=y(++b);d[b]=d[c],d[c]=a}),d},h.throttle=function(a,b,c){var d=!0,e=!0;if(!r(a))throw new TypeError;return!1===c?d=!1:s(c)&&(d="leading"in c?c.leading:d,e="trailing"in c?c.trailing:e),S.leading=d,S.maxWait=b,S.trailing=e,w(a,b,S)},h.each=u,h.extend=Cb,h.clone=function(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1),i(a,b,"function"==typeof c&&j(c,d,1))},h.identity=x,h.isArguments=q,h.isArray=xb,h.isFunction=r,h.isObject=s,h.isPlainObject=mb,h.isString=t,h.random=y,h.sortedIndex=function(a,b,c,d){var e=0,f=a?a.length:e;for(c=c?h.createCallback(c,d,1):x,b=c(b);f>e;)d=e+f>>>1,c(a[d])<b?e=d+1:f=d;return e},h.uniqueId=function(a){var b=++B;return(null==a?"":a)+""+b},h.VERSION="2.2.1",h.extend(c.util,h)}(this);var d=c.util.decorator=function(a,b){var d={},e={},f=function(a,b){return c.util.isFunction(b)?b:a},g=Object.getPrototypeOf;"function"!=typeof g&&(g="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var h=Object.create;"function"!=typeof h&&(h=function(a){function b(){}return b.prototype=a,new b});var i=function(b,d){return"object"==typeof b?(e=c.util.extend(e,b,f),e.type=a,void 0):("type"!==b&&c.util.isFunction(d)&&(e[b]=d),void 0)};i(b);var j=function(b,i,j,k){var l,m=e;if("string"!=typeof i)k=j,j=i;else{if(m=d[i],!m)throw'Error: "'+i+'" '+a+" not defined";m=m.prototype}if("function"==typeof j)l=d[b],l?l.prototype=c.util.extend(l.prototype,j(g(l.prototype)),f):(l=d[b]=function(a){this.init&&this.init(a)},l.prototype=h(m),l.prototype=c.util.extend(l.prototype,j(m),f)),l.prototype.type=a,l.prototype.name=b;else if(k=j||{},l=d[b],!l)throw'Error: "'+b+'" '+a+" not defined";return k?new l(k):void 0};return j.mixin=i,j};return function(a){var b=a.Physics;c.noConflict=function(){return a.Physics===c&&(a.Physics=b),c}}(this),function(){var a=function b(a){return this instanceof b?(this.initPubsub(a),void 0):new b(a)};a.prototype={initPubsub:function(a){this._topics={},this._defaultScope=a||this},subscribe:function(a,b,d,e){var f,g=this._topics[a]||(this._topics[a]=[]),h=b;if(c.util.isObject(a)){for(var i in a)this.subscribe(i,a[i],b,d);return this}return c.util.isObject(d)?(b=c.util.bind(b,d),b._bindfn_=h):e||(e=d),b._priority_=e,f=c.util.sortedIndex(g,b,"_priority_"),g.splice(f,0,b),this},unsubscribe:function(a,b){if(a===!0)return this._topics={},this;var c,d=this._topics[a];if(!d)return this;if(b===!0)return this._topics[a]=[],this;for(var e=0,f=d.length;f>e;e++)if(c=d[e],c._bindfn_===b||c===b){d.splice(e,1);break}return this},publish:function(a){"object"!=typeof a&&(a={topic:a});var b=a.topic,c=this._topics[b],d=c&&c.length;if(!b)throw"Error: No topic specified in call to world.publish()";if(!d)return this;for(a.scope=a.scope||this._defaultScope;d--;)a.handler=c[d],a.handler(a);return this}},c.util.pubsub=a}(),function(a){for(var b=0,c=["ms","moz","webkit","o"],d=0;d<c.length&&!a.requestAnimationFrame;++d)a.requestAnimationFrame=a[c[d]+"RequestAnimationFrame"],a.cancelAnimationFrame=a[c[d]+"CancelAnimationFrame"]||a[c[d]+"CancelRequestAnimationFrame"];a.requestAnimationFrame||(a.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-b)),f=a.setTimeout(function(){c(d+e)},e);return b=d+e,f}),a.cancelAnimationFrame||(a.cancelAnimationFrame=function(a){clearTimeout(a)})}(this),function(){var a=100,b=10,d="Error: Scratchpad used after .done() called. (Could it be unintentionally scoped?)",e="Error: Scratchpad usage space out of bounds. (Did you forget to call .done()?)",f="Error: Too many scratchpads created. (Did you forget to call .done()?)",g=[],h=0,i=function(){if(this.objIndex=0,this.arrayIndex=0,this.vectorIndex=0,this.aabbIndex=0,this.transformIndex=0,this.objectStack=[],this.arrayStack=[],this.vectorStack=[],this.aabbStack=[],this.transformStack=[],++h>=a)throw f};i.prototype={done:function(){this._active=!1,this.objIndex=this.arrayIndex=this.vectorIndex=this.aabbIndex=this.transformIndex=0,g.push(this)},object:function(){var a=this.objectStack;if(!this._active)throw d;if(this.objIndex>=b)throw e;return a[this.objIndex++]||a[a.push({})-1]},array:function(){var a=this.arrayStack;if(!this._active)throw d;if(this.arrIndex>=b)throw e;return a[this.arrIndex++]||a[a.push([])-1]},vector:function(){var a=this.vectorStack;if(!this._active)throw d;if(this.vectorIndex>=b)throw e;return a[this.vectorIndex++]||a[a.push(c.vector())-1]},aabb:function(){var a=this.aabbStack;if(!this._active)throw d;if(this.aabbIndex>=b)throw e;return a[this.aabbIndex++]||a[a.push(c.aabb())-1]},transform:function(){var a=this.transformStack;if(!this._active)throw d;if(this.transformIndex>=b)throw e;return a[this.transformIndex++]||a[a.push(c.transform())-1]}},c.scratchpad=function(){var a=g.pop()||new i;return a._active=!0,a}}(),function(a){function b(c){var d=k;if(j){a.requestAnimationFrame(b);for(var e=0,f=d.length;f>e;++e)d[e](c,c-i);i=c}}function d(){return i=(new Date).getTime(),j=!0,b(),this}function e(){return j=!1,this}function f(a){if("function"==typeof a){for(var b=0,c=k.length;c>b;++b)if(a===k[b])return this;k.push(a)}return this}function g(a){for(var b=k,c=0,d=b.length;d>c;++c)if(b[c]===a)return b.splice(c,1),this;return this}function h(){return!!j}var i=0,j=!1,k=[];c.util.ticker={start:d,stop:e,subscribe:f,unsubscribe:g,isActive:h}}(this),function(){var a=function b(a,d,e,f){return this instanceof b?(this._pos=c.vector(),this.set(a,d,e,f),void 0):new b(a,d,e,f)};a.prototype.set=function(a,b,d,e){return c.util.isObject(a)?(this._pos.clone(a.pos),this._hw=a.halfWidth,this._hh=a.halfHeight,this):(this._pos.set(.5*(d+a),.5*(e+b)),this._hw=.5*(d-a),this._hh=.5*(e-b),this)},a.prototype.get=function(){var a=this.halfWidth(),b=this.halfHeight();return{pos:this._pos.values(),halfWidth:a,halfHeight:b,x:a,y:b}},a.prototype.halfWidth=function(){return this._hw},a.prototype.halfHeight=function(){return this._hh},a.prototype.contains=function(a){var b=void 0!==a.x?a.x:a.get(0),c=void 0!==a.y?a.y:a.get(1);return b>this._pos.get(0)-this._hw&&b<this._pos.get(0)+this._hw&&c>this._pos.get(1)-this._hh&&c<this._pos.get(1)+this._hh},a.prototype.transform=function(a){var b=this._hw,d=this._hh,e=c.scratchpad(),f=e.vector().set(b,d),g=e.vector().set(b,-d);return this._pos.translate(a),f.rotate(a),g.rotate(a),this._hw=Math.max(Math.abs(f.get(0)),Math.abs(g.get(0))),this._hh=Math.max(Math.abs(f.get(1)),Math.abs(g.get(1))),e.done(),this},a.contains=function(a,b){var c=void 0!==b.x?b.x:b.get(0),d=void 0!==b.y?b.y:b.get(1);return a=a.get?a.get():a,c>a.pos.x-a.halfWidth&&c<a.pos.x+a.halfWidth&&d>a.pos.y-a.halfHeight&&d<a.pos.y+a.halfHeight},c.aabb=a}(),function(){var a=1e-4,b=100,d=function(a,b,c){var d=b.normSq()-b.dot(a),e=b.dot(a)-a.normSq();return 0>d?c.clone(b).negate():e>0?c.clone(a).negate():(c.clone(b).vsub(a),c.perp(a.cross(c)<0))},e=function(a){var b,d,e=a.length,f=a[e-2],g=a[e-3],h=c.scratchpad(),i=h.vector().clone(f.pt),j=h.vector().clone(g.pt).vsub(i);if(j.equals(c.vector.zero))return h.done(),{a:f.a,b:f.b};if(b=-j.dot(i)/j.normSq(),d=1-b,0>=d)return h.done(),{a:g.a,b:g.b};if(0>=b)return h.done(),{a:f.a,b:f.b};var k={a:i.clone(f.a).mult(d).vadd(j.clone(g.a).mult(b)).values(),b:i.clone(f.b).mult(d).vadd(j.clone(g.b).mult(b)).values()};return h.done(),k},f=function(f,g,h,i){var j,k,l,m,n=!1,o=!1,p=!1,q=[],r=1,s=c.scratchpad(),t=s.vector().clone(g||c.vector.axis[0]),u=s.vector(),v=s.vector(),w=s.vector(),x=s.vector(),y=0;for(m=f(t),r=q.push(m),u.clone(m.pt),t.negate();++y;){if(u.swap(v),m=f(t),r=q.push(m),u.clone(m.pt),i&&i(q),u.equals(c.vector.zero)){n=!0;break}if(!o&&u.dot(t)<=0){if(h)break;o=!0}if(2===r)t=d(u,v,t);else if(o){if(t.normalize(),m=v.dot(t),Math.abs(m-u.dot(t))<a){p=-m;break}v.normSq()<w.clone(q[0].pt).normSq()?q.shift():q.splice(1,1),t=d(w.clone(q[1].pt),x.clone(q[0].pt),t)}else if(j=j||s.vector(),k=k||s.vector(),j.clone(v).vsub(u),k.clone(q[0].pt).vsub(u),l=j.cross(k)>0,l^u.cross(j)>0)q.shift(),j.perp(l),t.swap(j);else{if(!(l^k.cross(u)>0)){n=!0;break}q.splice(1,1),k.perp(!l),t.swap(j)}if(y>b)return s.done(),{simplex:q,iterations:y,distance:0,maxIterationsReached:!0}}return s.done(),m={overlap:n,simplex:q,iterations:y},p!==!1&&(m.distance=p,m.closest=e(q)),m};c.gjk=f}(),function(){var a=function b(a,d,e){return this instanceof b?(this.v=c.vector(),this.o=c.vector(),a instanceof b?(this.clone(a),void 0):(a&&this.setTranslation(a),this.setRotation(d||0,e),void 0)):new b(a,d)};a.prototype.setTranslation=function(a){return this.v.clone(a),this},a.prototype.setRotation=function(a,b){return this.cosA=Math.cos(a),this.sinA=Math.sin(a),b?this.o.clone(b):this.o.zero(),this},a.prototype.clone=function(b){return b?(this.setTranslation(b.v),this.cosA=b.cosA,this.sinA=b.sinA,this.o.clone(b.o),this):new a(this)},c.transform=a}(),function(a){var b=Math.sqrt,d=Math.min,e=Math.max,f=(Math.acos,Math.atan2),g=2*Math.PI,h=!!a.Float64Array,i=function j(a,b){return this instanceof j?(this._=h?new Float64Array(5):[],a&&(void 0!==a.x||a._&&a._.length)?this.clone(a):(this.recalc=!0,this.set(a||0,b||0)),void 0):new j(a,b)};i.prototype.set=function(a,b){return this.recalc=!0,this._[0]=a||0,this._[1]=b||0,this},i.prototype.get=function(a){return this._[a]},i.prototype.vadd=function(a){return this.recalc=!0,this._[0]+=a._[0],this._[1]+=a._[1],this},i.prototype.vsub=function(a){return this.recalc=!0,this._[0]-=a._[0],this._[1]-=a._[1],this},i.prototype.add=function(a,b){return this.recalc=!0,this._[0]+=a,this._[1]+=void 0===b?a:b,this},i.prototype.sub=function(a,b){return this.recalc=!0,this._[0]-=a,this._[1]-=void 0===b?a:b,this},i.prototype.mult=function(a){return this.recalc||(this._[4]*=a*a,this._[3]*=a),this._[0]*=a,this._[1]*=a,this},i.prototype.dot=function(a){return this._[0]*a._[0]+this._[1]*a._[1]},i.prototype.cross=function(a){return-this._[0]*a._[1]+this._[1]*a._[0]},i.prototype.proj=function(a){return this.dot(a)/a.norm()},i.prototype.vproj=function(a){var b=this.dot(a)/a.normSq();return this.clone(a).mult(b)},i.prototype.angle=function(a){var b;if(this.equals(i.zero))return a?a.angle():0/0;for(b=a&&!a.equals(i.zero)?f(this._[1]*a._[0]-this._[0]*a._[1],this._[0]*a._[0]+this._[1]*a._[1]):f(this._[1],this._[0]);b>Math.PI;)b-=g;for(;b<-Math.PI;)b+=g;return b},i.prototype.angle2=function(a,b){for(var c=a._[0]-this._[0],d=a._[1]-this._[1],e=b._[0]-this._[0],h=b._[1]-this._[1],i=f(d*e-c*h,c*e+d*h);i>Math.PI;)i-=g;for(;i<-Math.PI;)i+=g;return i},i.prototype.norm=function(){return this.recalc&&(this.recalc=!1,this._[4]=this._[0]*this._[0]+this._[1]*this._[1],this._[3]=b(this._[4])),this._[3]},i.prototype.normSq=function(){return this.recalc&&(this.recalc=!1,this._[4]=this._[0]*this._[0]+this._[1]*this._[1],this._[3]=b(this._[4])),this._[4]},i.prototype.dist=function(a){var c,d;return b((c=a._[0]-this._[0])*c+(d=a._[1]-this._[1])*d)},i.prototype.distSq=function(a){var b,c;return(b=a._[0]-this._[0])*b+(c=a._[1]-this._[1])*c},i.prototype.perp=function(a){var b=this._[0];return a?(this._[0]=-this._[1],this._[1]=b):(this._[0]=this._[1],this._[1]=-b),this},i.prototype.normalize=function(){var a=this.norm();return 0===a?this:(a=1/a,this._[0]*=a,this._[1]*=a,this._[3]=1,this._[4]=1,this)},i.prototype.transform=function(a){var b=a.sinA,c=a.cosA,d=a.o._[0],e=a.o._[1];return this._[0]-=d,this._[1]-=e,this.set(this._[0]*c-this._[1]*b+d+a.v._[0],this._[0]*b+this._[1]*c+e+a.v._[1])},i.prototype.transformInv=function(a){var b=a.sinA,c=a.cosA,d=a.o._[0],e=a.o._[1];return this._[0]-=d+a.v._[0],this._[1]-=e+a.v._[1],this.set(this._[0]*c+this._[1]*b+d,-this._[0]*b+this._[1]*c+e)},i.prototype.rotate=function(a,b){var c,d,e=0,f=0;return"number"==typeof a?(c=Math.sin(a),d=Math.cos(a),b&&(e=0|(b.x||b._[0]),f=0|(b.y||b._[1]))):(c=a.sinA,d=a.cosA,e=a.o._[0],f=a.o._[1]),this._[0]-=e,this._[1]-=f,this.set(this._[0]*d-this._[1]*c+e,this._[0]*c+this._[1]*d+f)},i.prototype.rotateInv=function(a){return this.set((this._[0]-a.o._[0])*a.cosA+(this._[1]-a.o._[1])*a.sinA+a.o._[0],-(this._[0]-a.o._[0])*a.sinA+(this._[1]-a.o._[1])*a.cosA+a.o._[1])},i.prototype.translate=function(a){return this.vadd(a.v)},i.prototype.translateInv=function(a){return this.vsub(a.v)},i.prototype.clone=function(a){return a?a._?(this.recalc=a.recalc,a.recalc||(this._[3]=a._[3],this._[4]=a._[4]),this._[0]=a._[0],this._[1]=a._[1],this):this.set(a.x,a.y):new i(this)},i.prototype.swap=function(a){var b=this._;return this._=a._,a._=b,b=this.recalc,this.recalc=a.recalc,a.recalc=b,this},i.prototype.values=function(){return{x:this._[0],y:this._[1]}},i.prototype.zero=function(){return this._[3]=0,this._[4]=0,this._[0]=0,this._[1]=0,this},i.prototype.negate=function(a){return void 0!==a?(this._[a]=-this._[a],this):(this._[0]=-this._[0],this._[1]=-this._[1],this)},i.prototype.clamp=function(a,b){return a=a.values?a.values():a,b=b.values?b.values():b,this._[0]=d(e(this._[0],a.x),b.x),this._[1]=d(e(this._[1],a.y),b.y),this.recalc=!0,this},i.prototype.toString=function(){return"("+this._[0]+", "+this._[1]+")"},i.prototype.equals=function(a){return this._[0]===a._[0]&&this._[1]===a._[1]&&this._[2]===a._[2]},i.vadd=function(a,b){return new i(a._[0]+b._[0],a._[1]+b._[1])},i.vsub=function(a,b){return new i(a._[0]-b._[0],a._[1]-b._[1])},i.mult=function(a,b){return new i(b._[0]*a,b._[1]*a)},i.vproj=function(a,b){return i.mult(a.dot(b)/b.normSq(),b)},i.axis=[new i(1,0),new i(0,1)],i.zero=new i(0,0),c.vector=i}(this),function(){c.behavior=c.behaviour=d("behavior",{priority:0,init:function(){this.options={}},connect:function(a){this.behave&&a.subscribe("integrate:positions",this.behave,this,this.priority)},disconnect:function(a){this.behave&&a.unsubscribe("integrate:positions",this.behave)},behave:null})}(),function(){var a={fixed:!1,mass:1,restitution:1,cof:.8,view:null};c.body=d("body",{init:function(b){var d=c.vector;if(this.options=c.util.extend({},a,b),this.fixed=this.options.fixed,this.hidden=this.options.hidden,this.mass=this.options.mass,this.restitution=this.options.restitution,this.cof=this.options.cof,this.view=this.options.view,this.state={pos:d(b.x,b.y),vel:d(b.vx,b.vy),acc:d(),angular:{pos:b.angle||0,vel:b.angularVelocity||0,acc:0},old:{pos:d(),vel:d(),acc:d(),angular:{pos:0,vel:0,acc:0}}},0===this.mass)throw"Error: Bodies must have non-zero mass";this.geometry=c.geometry("point")},accelerate:function(a){return this.state.acc.vadd(a),this},applyForce:function(a,b){var d,e=c.scratchpad(),f=e.vector();return b?this.moi&&(d=this.state,f.clone(b),this.state.angular.acc-=f.cross(a)/this.moi,this.applyForce(a)):this.accelerate(f.clone(a).mult(1/this.mass)),e.done(),this},aabb:function(){var a=c.scratchpad(),b=a.transform(),d=this.state.angular.pos,e=a.aabb().set(this.geometry.aabb(d));return b.setRotation(0).setTranslation(this.state.pos),e.transform(b),e=e.get(),a.done(),e},recalc:function(){}})}(),function(){c.geometry=d("geometry",{init:function(){this._aabb=new c.aabb},aabb:function(){return this._aabb.get()},getFarthestHullPoint:function(a,b){return b=b||c.vector(),b.set(0,0)},getFarthestCorePoint:function(a,b){return b=b||c.vector(),b.set(0,0)}})}(),c.geometry.isPolygonConvex=function(a){var b=c.scratchpad(),d=b.vector(),e=b.vector(),f=b.vector(),g=!0,h=!1,i=a.length;if(!a||!i)return!1;if(3>i)return b.done(),g;d.clone(a[0]).vsub(f.clone(a[i-1]));for(var j=1;i>=j;++j){if(e.clone(a[j%i]).vsub(f.clone(a[(j-1)%i])),h===!1)h=d.cross(e);else if(h>0^d.cross(e)>0){g=!1;break}e.swap(d)}return b.done(),g},c.geometry.getPolygonMOI=function(a){var b,d=c.scratchpad(),e=d.vector(),f=d.vector(),g=0,h=0,i=a.length;if(2>i)return d.done(),0;if(2===i)return b=f.clone(a[1]).distSq(e.clone(a[0])),d.done(),b/12;e.clone(a[0]);for(var j=1;i>j;++j)f.clone(a[j]),b=Math.abs(f.cross(e)),g+=b*(f.normSq()+f.dot(e)+e.normSq()),h+=b,e.swap(f);return d.done(),g/(6*h)},c.geometry.isPointInPolygon=function(a,b){var d=c.scratchpad(),e=d.vector().clone(a),f=d.vector(),g=d.vector(),h=0,i=b.length;if(2>i)return h=e.equals(f.clone(b[0])),d.done(),h;if(2===i)return h=e.angle(f.clone(b[0])),h+=e.angle(f.clone(b[1])),d.done(),Math.abs(h)===Math.PI;f.clone(b[0]).vsub(e);for(var j=1;i>=j;++j)g.clone(b[j%i]).vsub(e),h+=g.angle(f),f.swap(g);return d.done(),Math.abs(h)>1e-6},c.geometry.getPolygonArea=function(a){var b=c.scratchpad(),d=b.vector(),e=b.vector(),f=0,g=a.length;if(3>g)return b.done(),0;d.clone(a[g-1]);for(var h=0;g>h;++h)e.clone(a[h]),f+=d.cross(e),d.swap(e);return b.done(),f/2},c.geometry.getPolygonCentroid=function(a){var b,d=c.scratchpad(),e=d.vector(),f=d.vector(),g=c.vector(),h=a.length;if(2>h)return d.done(),c.vector(a[0]);if(2===h)return d.done(),c.vector((a[1].x+a[0].x)/2,(a[1].y+a[0].y)/2);e.clone(a[h-1]);for(var i=0;h>i;++i)f.clone(a[i]),b=e.cross(f),e.vadd(f).mult(b),g.vadd(e),e.swap(f);return b=1/(6*c.geometry.getPolygonArea(a)),d.done(),g.mult(b)},c.geometry.nearestPointOnLine=function(a,b,d){var e,f,g=c.scratchpad(),h=g.vector().clone(a),i=g.vector().clone(b).vsub(h),j=g.vector().clone(d).vsub(h).vsub(i);return j.equals(c.vector.zero)?(g.done(),c.vector(b)):(e=-j.dot(i)/j.normSq(),f=1-e,0>=f?(g.done(),c.vector(d)):0>=e?(g.done(),c.vector(b)):(h=c.vector(d).mult(e).vadd(i.clone(b).mult(f)),g.done(),h))},function(){var a={drag:0};c.integrator=d("integrator",{init:function(b){this.options=c.util.extend({},a,b)},integrate:function(a,b){var c=this._world;return this.integrateVelocities(a,b),c&&c.publish({topic:"integrate:velocities",bodies:a,dt:b}),this.integratePositions(a,b),c&&c.publish({topic:"integrate:positions",bodies:a,dt:b}),this},integrateVelocities:function(){throw"The integrator.integrateVelocities() method must be overriden"},integratePositions:function(){throw"The integrator.integratePositions() method must be overriden"}})}(),function(){var a={meta:!1,metaRefresh:200,width:600,height:600};c.renderer=d("renderer",{init:function(d){var e="string"==typeof d.el?b.getElementById(d.el):d.el;this.options=c.util.extend({},a,d),this.el=e?e:b.body,this.drawMeta=c.util.throttle(c.util.bind(this.drawMeta,this),this.options.metaRefresh)},render:function(a,b){var c,d;this.beforeRender&&this.beforeRender(),this._world.publish({topic:"beforeRender",renderer:this,bodies:a,meta:b}),this.options.meta&&this.drawMeta(b);for(var e=0,f=a.length;f>e;++e)c=a[e],d=c.view||(c.view=this.createView(c.geometry)),c.hidden||this.drawBody(c,d);return this},createView:function(){throw"You must override the renderer.createView() method."},drawMeta:function(){throw"You must override the renderer.drawMeta() method."},drawBody:function(){throw"You must override the renderer.drawBody() method."}})}(),function(){var a=function(a){this.disconnect&&this._world&&this.disconnect(this._world),this._world=a,this.connect&&a&&this.connect(a)};c.util.each("body,behavior,integrator,renderer".split(","),function(b){c[b].mixin("setWorld",a)});var b=function f(a,b,c){for(var d,e,g=function(){return f(a,b,c)};d=a.shift();)if(e=d.apply(b,c),e&&e.then)return e.then(g)},d={timestep:6.25,maxIPF:16,webworker:!1,integrator:"verlet"},e=function g(a,b){return this instanceof g?(this.init(a,b),void 0):new g(a,b)};e.prototype=c.util.extend({},c.util.pubsub.prototype,{init:function(a,d){(c.util.isFunction(a)||c.util.isArray(a))&&(d=a,a={}),this._stats={fps:0,ipf:0},this._bodies=[],this._behaviors=[],this._integrator=null,this._renderer=null,this._paused=!1,this._opts={},this.initPubsub(this),this.options(a||{}),c.util.isFunction(d)?b([d],this,[this,c]):c.util.isArray(d)&&b(d,this,[this,c])},options:function(a){return a?(c.util.extend(this._opts,d,a),this.timeStep(this._opts.timestep),this.add(c.integrator(this._opts.integrator)),this):c.util.clone(this._opts)},add:function(a){var b=0,c=a&&a.length||0,d=c?a[0]:a;if(!d)return this;do switch(d.type){case"behavior":this.addBehavior(d);break;case"integrator":this.integrator(d);break;case"renderer":this.renderer(d);break;case"body":this.addBody(d);break;default:throw'Error: failed to add item of unknown type "'+d.type+'" to world'}while(++b<c&&(d=a[b]));return this},remove:function(a){var b=0,c=a&&a.length||0,d=c?a[0]:a;if(!d)return this;do switch(d.type){case"behavior":this.removeBehavior(d);break;case"integrator":d===this._integrator&&this.integrator(null);break;case"renderer":d===this._renderer&&this.renderer(null);break;case"body":this.removeBody(d);break;default:throw'Error: failed to remove item of unknown type "'+d.type+'" from world'}while(++b<c&&(d=a[b]));return this},has:function(a){var b,c,d;if(!a)return!1;switch(a.type){case"behavior":b=this._behaviors;break;case"integrator":return this._integrator===a;case"renderer":return this._renderer===a;case"body":b=this._bodies;break;default:throw'Error: unknown type "'+a.type+'"'}for(c=0,d=b.length;d>c;++c)if(a===b[c])return!0;return!1},integrator:function(a){var b;return void 0===a?this._integrator:this._integrator===a?this:(this._integrator&&(this._integrator.setWorld(null),b={topic:"remove:integrator",integrator:this._integrator},this.publish(b)),a&&(this._integrator=a,this._integrator.setWorld(this),b={topic:"add:integrator",integrator:this._integrator},this.publish(b)),this)
},renderer:function(a){var b;return void 0===a?this._renderer:this._renderer===a?this:(this._renderer&&(this._renderer.setWorld(null),b={topic:"remove:renderer",renderer:this._renderer},this.publish(b)),a&&(this._renderer=a,this._renderer.setWorld(this),b={topic:"add:renderer",renderer:this._renderer},this.publish(b)),this)},timeStep:function(a){return a?(this._dt=a,this._maxJump=a*this._opts.maxIPF,this):this._dt},addBehavior:function(a){var b;return this.has(a)?this:(a.setWorld(this),this._behaviors.push(a),b={topic:"add:behavior",behavior:a},this.publish(b),this)},getBehaviors:function(){return[].concat(this._behaviors)},removeBehavior:function(a){var b,c=this._behaviors;if(a)for(var d=0,e=c.length;e>d;++d)if(a===c[d]){c.splice(d,1),a.setWorld(null),b={topic:"remove:behavior",behavior:a},this.publish(b);break}return this},addBody:function(a){var b;return this.has(a)?this:(a.setWorld(this),this._bodies.push(a),b={topic:"add:body",body:a},this.publish(b),this)},getBodies:function(){return[].concat(this._bodies)},removeBody:function(a){var b,c=this._bodies;if(a)for(var d=0,e=c.length;e>d;++d)if(a===c[d]){c.splice(d,1),a.setWorld(null),b={topic:"remove:body",body:a},this.publish(b);break}return this},findOne:function(a){var b={check:function(a){for(var b=this;b=b.next;)if(b(a))return!0;return!1}},d=b,e=this._bodies;a.$within,a.$at&&(d.next=function(b){var d=b.aabb();return c.aabb.contains(d,a.$at)});for(var f=0,g=e.length;g>f;++f)if(b.check(e[f]))return e[f];return!1},iterate:function(a){this._integrator.integrate(this._bodies,a)},step:function(a){if(this._paused)return this._time=!1,this;var b=this._time||(this._time=a),c=a-b,d=this._stats,e=this._dt;if(!c)return this;for(c>this._maxJump&&(this._time=a-this._maxJump,c=this._maxJump),d.fps=1e3/c,d.ipf=Math.ceil(c/this._dt);this._time<a;)this._time+=e,this.iterate(e);return this.publish({topic:"step"}),this},render:function(){if(!this._renderer)throw"No renderer added to world";return this._renderer.render(this._bodies,this._stats),this.publish({topic:"render",bodies:this._bodies,stats:this._stats,renderer:this._renderer}),this},pause:function(){return this._paused=!0,this.publish({topic:"pause"}),this},unpause:function(){return this._paused=!1,this.publish({topic:"unpause"}),this},isPaused:function(){return!!this._paused},destroy:function(){var a=this;a.pause(),this.publish("destroy"),a.unsubscribe(!0),a.remove(a.getBodies()),a.remove(a.getBehaviors()),a.integrator(null),a.renderer(null)}}),c.world=e}(),c.integrator("verlet",function(a){return c.body.mixin({started:function(a){return void 0!==a&&(this._started=!0),!!this._started}}),{init:function(b){a.init.call(this,b)},integrateVelocities:function(a,b){for(var c,d=b*b,e=1-this.options.drag,f=null,g=0,h=a.length;h>g;++g)f=a[g],c=f.state,f.fixed?(c.vel.zero(),c.acc.zero(),c.angular.vel=0,c.angular.acc=0):(c.vel.equals(c.old.vel)&&f.started()?c.vel.clone(c.pos).vsub(c.old.pos):(c.old.pos.clone(c.pos).vsub(c.vel),c.vel.mult(b)),e&&c.vel.mult(e),c.vel.vadd(c.acc.mult(d)),c.vel.mult(1/b),c.old.vel.clone(c.vel),c.acc.zero(),c.angular.vel===c.old.angular.vel&&f.started()?c.angular.vel=c.angular.pos-c.old.angular.pos:(c.old.angular.pos=c.angular.pos-c.angular.vel,c.angular.vel*=b),c.angular.vel+=c.angular.acc*d,c.angular.vel/=b,c.old.angular.vel=c.angular.vel,c.angular.acc=0,f.started(!0))},integratePositions:function(a,b){for(var c,d=null,e=0,f=a.length;f>e;++e)d=a[e],c=d.state,d.fixed||(c.vel.mult(b),c.old.pos.clone(c.pos),c.pos.vadd(c.vel),c.vel.mult(1/b),c.old.vel.clone(c.vel),c.angular.vel*=b,c.old.angular.pos=c.angular.pos,c.angular.pos+=c.angular.vel,c.angular.vel/=b,c.old.angular.vel=c.angular.vel)}}}),c.geometry("point",function(){}),c.geometry("circle",function(a){var b={radius:1};return{init:function(d){a.init.call(this,d),d=c.util.extend({},b,d),this.radius=d.radius,this._aabb=c.aabb()},aabb:function(){var a=this.radius,b=this._aabb;return b.halfWidth()===a?b.get():b.set(-a,-a,a,a).get()},getFarthestHullPoint:function(a,b){return b=b||c.vector(),b.clone(a).normalize().mult(this.radius)},getFarthestCorePoint:function(a,b,d){return b=b||c.vector(),b.clone(a).normalize().mult(this.radius-d)}}}),c.geometry("convex-polygon",function(a){var b="Error: The vertices specified do not match that of a _convex_ polygon.",d={};return{init:function(b){a.init.call(this,b),b=c.util.extend({},d,b),this.setVertices(b.vertices||[])},setVertices:function(a){var d=c.scratchpad(),e=d.transform(),f=this.vertices=[];if(!c.geometry.isPolygonConvex(a))throw b;e.setRotation(0),e.setTranslation(c.geometry.getPolygonCentroid(a).negate());for(var g=0,h=a.length;h>g;++g)f.push(c.vector(a[g]).translate(e));return this._area=c.geometry.getPolygonArea(f),this._aabb=!1,d.done(),this},aabb:function(a){if(!a&&this._aabb)return this._aabb.get();var b,d=c.scratchpad(),e=d.vector(),f=d.transform().setRotation(a||0),g=d.vector().clone(c.vector.axis[0]).rotateInv(f),h=d.vector().clone(c.vector.axis[1]).rotateInv(f),i=this.getFarthestHullPoint(g,e).proj(g),j=-this.getFarthestHullPoint(g.negate(),e).proj(g),k=this.getFarthestHullPoint(h,e).proj(h),l=-this.getFarthestHullPoint(h.negate(),e).proj(h);return b=new c.aabb(j,l,i,k),a||(this._aabb=b),d.done(),b.get()},getFarthestHullPoint:function(a,b,d){var e,f,g,h=this.vertices,i=h.length,j=2;if(b=b||c.vector(),2>i)return d&&(d.idx=0),b.clone(h[0]);if(f=h[0].dot(a),e=h[1].dot(a),2===i)return g=e>=f?1:0,d&&(d.idx=g),b.clone(h[g]);if(e>=f){for(;i>j&&e>=f;)f=e,e=h[j].dot(a),j++;return e>=f&&j++,g=j-2,d&&(d.idx=j-2),b.clone(h[g])}for(j=i;j>1&&f>=e;)j--,e=f,f=h[j].dot(a);return g=(j+1)%i,d&&(d.idx=g),b.clone(h[g])},getFarthestCorePoint:function(a,b,d){var e,f=c.scratchpad(),g=f.vector(),h=f.vector(),i=this.vertices,j=i.length,k=this._area>0,l={};return b=this.getFarthestHullPoint(a,b,l),g.clone(i[(l.idx+1)%j]).vsub(b).normalize().perp(!k),h.clone(i[(l.idx-1+j)%j]).vsub(b).normalize().perp(k),e=d/(1+g.dot(h)),b.vadd(g.vadd(h).mult(e)),f.done(),b}}}),c.body("circle",function(a){var b={radius:1};return{init:function(d){a.init.call(this,d),d=c.util.extend({},b,d),this.geometry=c.geometry("circle",{radius:d.radius}),this.recalc()},recalc:function(){a.recalc.call(this),this.moi=this.mass*this.geometry.radius*this.geometry.radius/2}}}),c.body("convex-polygon",function(a){var b={};return{init:function(d){a.init.call(this,d),d=c.util.extend({},b,d),this.geometry=c.geometry("convex-polygon",{vertices:d.vertices}),this.recalc()},recalc:function(){a.recalc.call(this),this.moi=c.geometry.getPolygonMOI(this.geometry.vertices)}}}),c.body("point",function(){}),c.behavior("body-collision-detection",function(a){var b="collisions:candidates",d="collisions:detected",e=function(a,b){var d;return d=function(e){var f,g=c.scratchpad(),h=g.transform().setTranslation(a.state.pos).setRotation(a.state.angular.pos),i=g.transform().setTranslation(b.state.pos).setRotation(b.state.angular.pos),j=g.vector(),k=g.vector(),l=d.useCore?"getFarthestCorePoint":"getFarthestHullPoint",m=d.marginA,n=d.marginB;return j=a.geometry[l](e.rotateInv(h),j,m).transform(h),k=b.geometry[l](e.rotate(h).rotateInv(i).negate(),k,n).transform(i),e.negate().rotate(i),f={a:j.values(),b:k.values(),pt:j.vsub(k).values()},g.done(),f},d.useCore=!1,d.margin=0,d},f=function(a,b){var d,f,g,h=c.scratchpad(),i=h.vector(),j=h.vector(),k=!1,l=a.aabb(),m=Math.min(l.halfWidth,l.halfHeight),n=b.aabb(),o=Math.min(n.halfWidth,n.halfHeight);if(g=e(a,b),i.clone(a.state.pos).vsub(b.state.pos),f=c.gjk(g,i,!0),f.overlap){for(k={bodyA:a,bodyB:b},g.useCore=!0,g.marginA=0,g.marginB=0;f.overlap&&(g.marginA<m||g.marginB<o);)g.marginA<m&&(g.marginA+=1),g.marginB<o&&(g.marginB+=1),f=c.gjk(g,i);if(f.overlap||f.maxIterationsReached)return h.done(),!1;d=Math.max(0,g.marginA+g.marginB-f.distance),k.overlap=d,k.norm=i.clone(f.closest.b).vsub(j.clone(f.closest.a)).normalize().values(),k.mtv=i.mult(d).values(),k.pos=i.clone(k.norm).mult(g.margin).vadd(j.clone(f.closest.a)).vsub(a.state.pos).values()}return h.done(),k},g=function(a,b){var d,e=c.scratchpad(),f=e.vector(),g=(e.vector(),!1);return f.clone(b.state.pos).vsub(a.state.pos),d=f.norm()-(a.geometry.radius+b.geometry.radius),f.equals(c.vector.zero)&&f.set(1,0),0>=d&&(g={bodyA:a,bodyB:b,norm:f.normalize().values(),mtv:f.mult(-d).values(),pos:f.normalize().mult(a.geometry.radius).values(),overlap:-d}),e.done(),g},h=function(a,b){return"circle"===a.geometry.name&&"circle"===b.geometry.name?g(a,b):f(a,b)},i={checkAll:!1};return{init:function(b){a.init.call(this,b),this.options=c.util.extend({},this.options,i,b)},connect:function(a){this.options.checkAll?a.subscribe("integrate:velocities",this.checkAll,this):a.subscribe(b,this.check,this)},disconnect:function(a){this.options.checkAll?a.unsubscribe("integrate:velocities",this.checkAll):a.unsubscribe(b,this.check)},check:function(a){for(var b,c,e=a.candidates,f=[],g=0,i=e.length;i>g;++g)b=e[g],c=h(b.bodyA,b.bodyB),c&&f.push(c);f.length&&this._world.publish({topic:d,collisions:f})},checkAll:function(a){for(var b,c,e,f=a.bodies,g=(a.dt,[]),i=0,j=f.length;j>i;i++){b=f[i];for(var k=i+1;j>k;k++)c=f[k],b.fixed&&c.fixed||(e=h(b,c),e&&g.push(e))}g.length&&this._world.publish({topic:d,collisions:g})}}}),c.behavior("body-impulse-response",function(){var a="collisions:detected";return{connect:function(b){b.subscribe(a,this.respond,this)},disconnect:function(b){b.unsubscribe(a,this.respond)},collideBodies:function(a,b,d,e,f,g){var h=a.fixed,i=b.fixed,j=c.scratchpad(),k=j.vector().clone(f);if(h&&i)return j.done(),void 0;h?b.state.pos.vadd(k):i?a.state.pos.vsub(k):(k.mult(.5),a.state.pos.vsub(k),b.state.pos.vadd(k));var l,m,n,o=h?0:1/a.moi,p=i?0:1/b.moi,q=h?0:1/a.mass,r=i?0:1/b.mass,s=g?0:a.restitution*b.restitution,t=a.cof*b.cof,u=j.vector().clone(d),v=j.vector().clone(u).perp(!0),w=j.vector().clone(e),x=j.vector().clone(e).vadd(a.state.pos).vsub(b.state.pos),y=j.vector(),z=a.state.angular.vel,A=b.state.angular.vel,B=j.vector().clone(b.state.vel).vadd(y.clone(x).perp(!0).mult(A)).vsub(a.state.vel).vsub(y.clone(w).perp(!0).mult(z)),C=w.proj(u),D=w.proj(v),E=x.proj(u),F=x.proj(v),G=B.proj(u),H=B.proj(v),I=!1;return G>=0?(j.done(),void 0):(l=-((1+s)*G)/(q+r+o*D*D+p*F*F),h?(b.state.vel.vadd(u.mult(l*r)),b.state.angular.vel-=l*p*F):i?(a.state.vel.vsub(u.mult(l*q)),a.state.angular.vel+=l*o*D):(b.state.vel.vadd(u.mult(l*r)),b.state.angular.vel-=l*p*F,a.state.vel.vsub(u.mult(q*b.mass)),a.state.angular.vel+=l*o*D),t&&H&&(n=H/(q+r+o*C*C+p*E*E),I?l=n:(m=0>H?-1:1,l*=m*t,l=1===m?Math.min(l,n):Math.max(l,n)),h?(b.state.vel.vsub(v.mult(l*r)),b.state.angular.vel-=l*p*E):i?(a.state.vel.vadd(v.mult(l*q)),a.state.angular.vel+=l*o*C):(b.state.vel.vsub(v.mult(l*r)),b.state.angular.vel-=l*p*E,a.state.vel.vadd(v.mult(q*b.mass)),a.state.angular.vel+=l*o*C)),j.done(),void 0)},respond:function(a){for(var b,d=this,e=c.util.shuffle(a.collisions),f=0,g=e.length;g>f;++f)b=e[f],d.collideBodies(b.bodyA,b.bodyB,b.norm,b.pos,b.mtv)}}}),c.behavior("constant-acceleration",function(a){var b={acc:{x:0,y:4e-4}};return{init:function(d){a.init.call(this,d),this.options=c.util.extend(this.options,b,d),this._acc=c.vector(),this.setAcceleration(this.options.acc)},setAcceleration:function(a){return this._acc.clone(a),this},behave:function(a){for(var b=a.bodies,c=0,d=b.length;d>c;++c)b[c].accelerate(this._acc)}}}),c.behavior("edge-collision-detection",function(a){var b="collisions:detected",d=function(a,b,d){var e,f=a.aabb(),g=c.scratchpad(),h=g.transform(),i=g.vector(),j=g.vector(),k=!1,l=[];return e=f.pos.x+f.x-b.max.x,e>=0&&(i.set(1,0).rotateInv(h.setRotation(a.state.angular.pos)),k={bodyA:a,bodyB:d,overlap:e,norm:{x:1,y:0},mtv:{x:e,y:0},pos:a.geometry.getFarthestHullPoint(i,j).rotate(h).values()},l.push(k)),e=f.pos.y+f.y-b.max.y,e>=0&&(i.set(0,1).rotateInv(h.setRotation(a.state.angular.pos)),k={bodyA:a,bodyB:d,overlap:e,norm:{x:0,y:1},mtv:{x:0,y:e},pos:a.geometry.getFarthestHullPoint(i,j).rotate(h).values()},l.push(k)),e=b.min.x-(f.pos.x-f.x),e>=0&&(i.set(-1,0).rotateInv(h.setRotation(a.state.angular.pos)),k={bodyA:a,bodyB:d,overlap:e,norm:{x:-1,y:0},mtv:{x:-e,y:0},pos:a.geometry.getFarthestHullPoint(i,j).rotate(h).values()},l.push(k)),e=b.min.y-(f.pos.y-f.y),e>=0&&(i.set(0,-1).rotateInv(h.setRotation(a.state.angular.pos)),k={bodyA:a,bodyB:d,overlap:e,norm:{x:0,y:-1},mtv:{x:0,y:-e},pos:a.geometry.getFarthestHullPoint(i,j).rotate(h).values()},l.push(k)),g.done(),l},e=function(a,b,c){return d(a,b,c)},f={aabb:null,restitution:.99,cof:1};return{init:function(b){a.init.call(this,b),this.options=c.util.extend({},this.options,f,b),this.setAABB(b.aabb),this.restitution=b.restitution,this._dummy=c.body("_dummy",function(){},{fixed:!0,restitution:this.options.restitution,cof:this.options.cof})},setAABB:function(a){if(!a)throw"Error: aabb not set";a=a.get&&a.get()||a,this._edges={min:{x:a.pos.x-a.x,y:a.pos.y-a.y},max:{x:a.pos.x+a.x,y:a.pos.y+a.y}}},connect:function(a){a.subscribe("integrate:velocities",this.checkAll,this)},disconnect:function(a){a.unsubscribe("integrate:velocities",this.checkAll)},checkAll:function(a){for(var c,d,f=a.bodies,g=(a.dt,[]),h=this._edges,i=this._dummy,j=0,k=f.length;k>j;j++)c=f[j],c.fixed||(d=e(c,h,i),d&&g.push.apply(g,d));g.length&&this._world.publish({topic:b,collisions:g})}}}),c.behavior("newtonian",function(a){var b={strength:1};return{init:function(d){a.init.call(this,d),d=c.util.extend({},b,d),this.strength=d.strength,this.tolerance=d.tolerance||100*this.strength},behave:function(a){for(var b,d,e,f,g=a.bodies,h=this.strength,i=this.tolerance,j=c.scratchpad(),k=j.vector(),l=0,m=g.length;m>l;l++){b=g[l];for(var n=l+1;m>n;n++)d=g[n],k.clone(d.state.pos),k.vsub(b.state.pos),e=k.normSq(),e>i&&(f=h/e,b.accelerate(k.normalize().mult(f*d.mass)),d.accelerate(k.mult(b.mass/d.mass).negate()))}j.done()}}}),c.behavior("rigid-constraint-manager",function(a){var b={targetLength:20};return{init:function(d){a.init.call(this,d),c.util.extend(this.options,b,d),this._constraints=[]},connect:function(a){var b=a.integrator();if(b&&b.name.indexOf("verlet")<0)throw'The rigid constraint manager needs a world with a "verlet" compatible integrator.';a.subscribe("integrate:positions",this.resolve,this)},disconnect:function(a){a.unsubscribe("integrate:positions",this.resolve)},drop:function(){return this._constraints=[],this},constrain:function(a,b,d){var e;return a&&b?(this._constraints.push(e={id:c.util.uniqueId("rigid-constraint"),bodyA:a,bodyB:b,targetLength:d||this.options.targetLength}),e):!1},remove:function(a){var b,d=this._constraints;if("number"==typeof a)return d.splice(a,1),this;b=c.util.isObject(a);for(var e=0,f=d.length;f>e;++e)if(b&&d[e]===a||!b&&d[e].id===a)return d.splice(e,1),this;return this},resolve:function(){for(var a,b,d,e,f=this._constraints,g=c.scratchpad(),h=g.vector(),i=g.vector(),j=0,k=f.length;k>j;++j)a=f[j],h.clone(a.bodyA.state.pos),i.clone(a.bodyB.state.pos).vsub(h),b=i.norm(),d=(b-a.targetLength)/b,i.mult(d),e=a.bodyB.mass/(a.bodyA.mass+a.bodyB.mass),a.bodyA.fixed||(i.mult(e),a.bodyA.state.pos.vadd(i),i.mult(1/e)),a.bodyB.fixed||(i.mult(1-e),a.bodyB.state.pos.vsub(i));g.done()},getConstraints:function(){return[].concat(this._constraints)}}}),c.behavior("sweep-prune",function(a){function b(a,b){return a===b?!1:a>b?a<<16|65535&b:b<<16|65535&a}var d="collisions:candidates",e=1,f=function(){return e++},g={x:0,y:1};return{init:function(b){a.init.call(this,b),this.clear()},clear:function(){this.tracked=[],this.pairs=[],this.intervalLists={};for(var a in g)this.intervalLists[a]=[]},connect:function(a){a.subscribe("add:body",this.trackBody,this),a.subscribe("remove:body",this.untrackBody,this),a.subscribe("integrate:velocities",this.sweep,this);for(var b=a.getBodies(),c=0,d=b.length;d>c;++c)this.trackBody({body:b[c]})},disconnect:function(a){a.unsubscribe("add:body",this.trackBody),a.unsubscribe("remove:body",this.untrackBody),a.unsubscribe("integrate:velocities",this.sweep),this.clear()},broadPhase:function(){return this.updateIntervals(),this.sortIntervalLists(),this.checkOverlaps()},sortIntervalLists:function(){var a,b,c,d,e,f,h,i,j;for(var k in g)for(a=this.intervalLists[k],c=0,b=a.length,j=g[k];++c<b;){for(e=a[c],f=e.val.get(j),d=c,h=a[d-1],i=h&&h.val.get(j);d>0&&(i>f||i===f&&h.type&&!e.type);)a[d]=h,d--,h=a[d-1],i=h&&h.val.get(j);a[d]=e}},getPair:function(a,c,d){var e=b(a.id,c.id);if(e===!1)return null;var f=this.pairs[e];if(!f){if(!d)return null;f=this.pairs[e]={bodyA:a.body,bodyB:c.body,flag:0}}return f},checkOverlaps:function(){var a,b,c,d,e,f,h,i,j,k=g.z||g.y||g.x,l=[],m=0,n=[];for(var o in g)for(a="x"===o,e=this.intervalLists[o],h=-1,f=e.length;++h<f;)if(d=e[h],b=d.tracker,d.type)for(i=m;--i>=0;)c=l[i],c===b?(m-1>i?l[i]=l.pop():l.pop(),m--):(j=this.getPair(b,c,a),j&&(j.flag=a?0:j.flag+1,j.flag===k&&n.push(j)));else m=l.push(b);return n},updateIntervals:function(){for(var a,b,d=c.scratchpad(),e=d.vector(),f=d.vector(),g=this.tracked,h=g.length;--h>=0;)a=g[h],b=a.interval,e.clone(a.body.state.pos),f.clone(a.body.aabb()),b.min.val.clone(e).vsub(f),b.max.val.clone(e).vadd(f);d.done()},trackBody:function(a){var b=a.body,d={id:f(),body:b},e={min:{type:!1,val:c.vector(),tracker:d},max:{type:!0,val:c.vector(),tracker:d}};d.interval=e,this.tracked.push(d);for(var h in g)this.intervalLists[h].push(e.min,e.max)},untrackBody:function(a){for(var b,c,d,e,f=a.body,h=this.tracked,i=0,j=h.length;j>i;++i)if(d=h[i],d.body===f){h.splice(i,1);for(var k in g){e=0,b=this.intervalLists[k];for(var l=0,m=b.length;m>l;++l)if(c=b[l],c===d.interval.min||c===d.interval.max){if(b.splice(l,1),l--,j--,e>0)break;e++}}break}},sweep:function(a){var b,c=this;a.bodies,a.dt,b=c.broadPhase(),b.length&&this._world.publish({topic:d,candidates:b})}}}),c.behavior("verlet-constraints",function(a){var b=2*Math.PI,d={iterations:2};return{init:function(b){a.init.call(this,b),c.util.extend(this.options,d,b),this._distanceConstraints=[],this._angleConstraints=[]},connect:function(a){var b=a.integrator();if(b&&b.name.indexOf("verlet")<0)throw'The rigid constraint manager needs a world with a "verlet" compatible integrator.';a.subscribe("integrate:positions",this.resolve,this)},disconnect:function(a){a.unsubscribe("integrate:positions",this.resolve)},drop:function(){return this._distanceConstraints=[],this._angleConstraints=[],this},distanceConstraint:function(a,b,d,e){var f;return a&&b?(f={id:c.util.uniqueId("dis-constraint"),type:"dis",bodyA:a,bodyB:b,stiffness:d||.5,targetLength:e||b.state.pos.dist(a.state.pos)},f.targetLengthSq=f.targetLength*f.targetLength,this._distanceConstraints.push(f),f):!1},angleConstraint:function(a,b,d,e,f){var g;return a&&b?(g={id:c.util.uniqueId("ang-constraint"),type:"ang",bodyA:a,bodyB:b,bodyC:d,stiffness:e||.5,targetAngle:f||b.state.pos.angle2(a.state.pos,d.state.pos)},this._angleConstraints.push(g),g):!1},remove:function(a){var b,d,e,f,g;if(e=c.util.isObject(a),d=e?a.type:a.substr(0,3),b="ang"===d?this._angleConstraints:this._distanceConstraints,e){for(f=0,g=b.length;g>f;++f)if(b[f]===a)return b.splice(f,1),this}else for(f=0,g=b.length;g>f;++f)if(b[f].id===a)return b.splice(f,1),this;return this},resolveAngleConstraints:function(a){for(var d,e,f,g,h=this._angleConstraints,i=c.scratchpad(),j=i.transform(),k=0,l=h.length;l>k;++k)d=h[k],e=d.bodyB.state.pos.angle2(d.bodyA.state.pos,d.bodyC.state.pos),f=e-d.targetAngle,f&&(f<=-Math.PI?f+=b:f>=Math.PI&&(f-=b),j.setTranslation(d.bodyB.state.pos),f*=-a*d.stiffness,d.bodyA.fixed||d.bodyB.fixed||d.bodyC.fixed||(g=1/(d.bodyA.mass+d.bodyB.mass+d.bodyC.mass)),d.bodyA.fixed||(e=d.bodyB.fixed||d.bodyC.fixed?d.bodyB.fixed?f*d.bodyC.mass/(d.bodyC.mass+d.bodyA.mass):f*d.bodyB.mass/(d.bodyB.mass+d.bodyA.mass):f*(d.bodyB.mass+d.bodyC.mass)*g,j.setRotation(e),d.bodyA.state.pos.translateInv(j),d.bodyA.state.pos.rotate(j),d.bodyA.state.pos.translate(j)),d.bodyC.fixed||(e=d.bodyA.fixed||d.bodyB.fixed?d.bodyB.fixed?-f*d.bodyA.mass/(d.bodyC.mass+d.bodyA.mass):-f*d.bodyB.mass/(d.bodyB.mass+d.bodyC.mass):-f*(d.bodyB.mass+d.bodyA.mass)*g,j.setRotation(e),d.bodyC.state.pos.translateInv(j),d.bodyC.state.pos.rotate(j),d.bodyC.state.pos.translate(j)),d.bodyB.fixed||(e=d.bodyA.fixed||d.bodyC.fixed?d.bodyA.fixed?f*d.bodyC.mass/(d.bodyC.mass+d.bodyB.mass):f*d.bodyA.mass/(d.bodyA.mass+d.bodyC.mass):f*(d.bodyA.mass+d.bodyC.mass)*g,j.setRotation(e).setTranslation(d.bodyA.state.pos),d.bodyB.state.pos.translateInv(j),d.bodyB.state.pos.rotate(j),d.bodyB.state.pos.translate(j),j.setTranslation(d.bodyC.state.pos),d.bodyB.state.pos.translateInv(j),d.bodyB.state.pos.rotateInv(j),d.bodyB.state.pos.translate(j)));i.done()},resolveDistanceConstraints:function(a){for(var b,d,e,f,g=this._distanceConstraints,h=c.scratchpad(),i=h.vector(),j=0,k=g.length;k>j;++j)b=g[j],i.clone(b.bodyB.state.pos).vsub(b.bodyA.state.pos),d=i.normSq()||1e-4*Math.random(),e=a*b.stiffness*(d-b.targetLengthSq)/d,i.mult(e),f=b.bodyA.fixed||b.bodyB.fixed?1:b.bodyB.mass/(b.bodyA.mass+b.bodyB.mass),b.bodyA.fixed||(b.bodyB.fixed||i.mult(f),b.bodyA.state.pos.vadd(i),b.bodyB.fixed||i.mult(1/f)),b.bodyB.fixed||(b.bodyA.fixed||i.mult(1-f),b.bodyB.state.pos.vsub(i));h.done()},shuffleConstraints:function(){this._distanceConstraints=c.util.shuffle(this._distanceConstraints),this._angleConstraints=c.util.shuffle(this._angleConstraints)},resolve:function(){for(var a=this.options.iterations,b=1/a,c=0;a>c;c++)this.resolveDistanceConstraints(b),this.resolveAngleConstraints(b)},getConstraints:function(){return{distanceConstraints:[].concat(this._distanceConstraints),angleConstraints:[].concat(this._angleConstraints)}}}}),c.integrator("improved-euler",function(a){return{init:function(b){a.init.call(this,b)},integrateVelocities:function(a,b){for(var c,d=1-this.options.drag,e=null,f=0,g=a.length;g>f;++f)e=a[f],c=e.state,e.fixed?(c.vel.zero(),c.acc.zero(),c.angular.vel=0,c.angular.acc=0):(c.old.vel.clone(c.vel),c.old.acc.clone(c.acc),c.vel.vadd(c.acc.mult(b)),d&&c.vel.mult(d),c.acc.zero(),c.old.angular.vel=c.angular.vel,c.angular.vel+=c.angular.acc*b,c.angular.acc=0)},integratePositions:function(a,b){for(var d,e=.5*b*b,f=null,g=c.scratchpad(),h=g.vector(),i=0,j=a.length;j>i;++i)f=a[i],d=f.state,f.fixed||(d.old.pos.clone(d.pos),h.clone(d.old.vel),d.pos.vadd(h.mult(b)).vadd(d.old.acc.mult(e)),d.old.acc.zero(),d.old.angular.pos=d.angular.pos,d.angular.pos+=d.old.angular.vel*b+d.old.angular.acc*e,d.old.angular.acc=0);g.done()}}}),c.renderer("canvas",function(a){if(!b)return{};var d=2*Math.PI,e=function(a,c){var d=b.createElement(a||"div");return c&&(d.innerHTML=c),d},f={debug:!1,metaEl:null,styles:{point:"rgba(80, 50, 100, 0.7)",circle:{strokeStyle:"rgba(70, 50, 100, 0.7)",lineWidth:1,fillStyle:"rgba(44, 105, 44, 0.7)",angleIndicator:"rgba(69, 51, 78, 0.7)"},"convex-polygon":{strokeStyle:"rgba(80, 50, 100, 0.7)",lineWidth:1,fillStyle:"rgba(114, 105, 124, 0.7)",angleIndicator:"rgba(69, 51, 78, 0.7)"}},offset:{x:0,y:0}},g=function(a,b){return c.util.isPlainObject(b)?c.util.extend({},a,b,g):void 0!==b?b:a};return{init:function(d){if(a.init.call(this,d),this.options=c.util.extend({},f,this.options,g),this.options.offset=c.vector(this.options.offset),this.hiddenCanvas=b.createElement("canvas"),this.hiddenCanvas.width=this.hiddenCanvas.height=100,!this.hiddenCanvas.getContext)throw"Canvas not supported";this.hiddenCtx=this.hiddenCanvas.getContext("2d");var h=this.el;if("CANVAS"!==h.nodeName.toUpperCase()&&(h=b.createElement("canvas"),this.el.appendChild(h),"string"==typeof this.options.el&&this.el===b.body&&(h.id=this.options.el),this.el=h),h.width=this.options.width,h.height=this.options.height,this.ctx=h.getContext("2d"),this.els={},this.options.meta){var i=this.options.metaEl||e();i.className="pjs-meta",this.els.fps=e("span"),this.els.ipf=e("span"),i.appendChild(e("span","fps: ")),i.appendChild(this.els.fps),i.appendChild(e("br")),i.appendChild(e("span","ipf: ")),i.appendChild(this.els.ipf),h.parentNode.insertBefore(i,h)}},setStyle:function(a,b){b=b||this.ctx,c.util.isObject(a)?(b.strokeStyle=a.strokeStyle,b.fillStyle=a.fillStyle,b.lineWidth=a.lineWidth):(b.fillStyle=b.strokeStyle=a,b.lineWidth=1)},drawCircle:function(a,b,c,e,f){f=f||this.ctx,f.beginPath(),this.setStyle(e,f),f.arc(a,b,c,0,d,!1),f.closePath(),f.stroke(),f.fill()},drawPolygon:function(a,b,c){var d=a[0],e=void 0===d.x?d.get(0):d.x,f=void 0===d.y?d.get(1):d.y,g=a.length;c=c||this.ctx,c.beginPath(),this.setStyle(b,c),c.moveTo(e,f);for(var h=1;g>h;++h)d=a[h],e=void 0===d.x?d.get(0):d.x,f=void 0===d.y?d.get(1):d.y,c.lineTo(e,f);g>2&&c.closePath(),c.stroke(),c.fill()},drawLine:function(a,b,c,d){var e=void 0===a.x?a.get(0):a.x,f=void 0===a.y?a.get(1):a.y;d=d||this.ctx,d.beginPath(),this.setStyle(c,d),d.moveTo(e,f),e=void 0===b.x?b.get(0):b.x,f=void 0===b.y?b.get(1):b.y,d.lineTo(e,f),d.stroke(),d.fill()},createView:function(a,b){var c=new Image,d=a.aabb(),e=d.halfWidth+Math.abs(d.pos.x),f=d.halfHeight+Math.abs(d.pos.y),g=e+1,h=f+1,i=this.hiddenCtx,j=this.hiddenCanvas,k=a.name;return b=b||this.options.styles[k],g+=0|b.lineWidth,h+=0|b.lineWidth,j.width=2*e+2+(0|2*b.lineWidth),j.height=2*f+2+(0|2*b.lineWidth),i.save(),i.translate(g,h),"circle"===k?this.drawCircle(0,0,a.radius,b,i):"convex-polygon"===k&&this.drawPolygon(a.vertices,b,i),b.angleIndicator&&(i.beginPath(),this.setStyle(b.angleIndicator,i),i.moveTo(0,0),i.lineTo(e,0),i.closePath(),i.stroke()),i.restore(),c.src=j.toDataURL("image/png"),c.width=j.width,c.height=j.height,c},drawMeta:function(a){this.els.fps.innerHTML=a.fps.toFixed(2),this.els.ipf.innerHTML=a.ipf},beforeRender:function(){this.ctx.clearRect(0,0,this.el.width,this.el.height)},drawBody:function(a,b){var c=this.ctx,d=a.state.pos,e=this.options.offset,f=a.aabb();c.save(),c.translate(d.get(0)+e.get(0),d.get(1)+e.get(1)),c.rotate(a.state.angular.pos),c.drawImage(b,-b.width/2,-b.height/2),c.restore(),this.options.debug&&(c.save(),c.translate(e.get(0),e.get(1)),this.drawPolygon([{x:f.pos.x-f.x,y:f.pos.y-f.y},{x:f.pos.x+f.x,y:f.pos.y-f.y},{x:f.pos.x+f.x,y:f.pos.y+f.y},{x:f.pos.x-f.x,y:f.pos.y+f.y}],"rgba(100, 255, 100, 0.3)"),c.restore())}}}),c.renderer("dom",function(a){if(!b)return{};var c,d={},e=b.createElement("div"),f=function(a){return a.replace(/(?:^|\s)\w/g,function(a){return a.toUpperCase()})},g=function(a){if(d[a])return d[a];for(var b,c=["Webkit","Moz","Ms","O"],g=0,h=c.length;h>g;++g)if(b=c[g]+f(a),b in e.style)return d[a]=b;return b in e.style?d[a]=a:!1},h="pjs-",i="px",j=g("transform"),k=function(a,c){var d=b.createElement(a||"div");return c&&(d.innerHTML=c),d};return c=j?function(a,b){var c=a.state.pos;b.style[j]="translate("+c.get(0)+"px,"+c.get(1)+"px) rotate("+a.state.angular.pos+"rad)"}:function(a,b){var c=a.state.pos;b.style.left=c.get(0)+i,b.style.top=c.get(1)+i},{init:function(b){a.init.call(this,b);var c=this.el;if(c.style.position="relative",c.style.overflow="hidden",c.style[j]="translateZ(0)",c.style.width=this.options.width+i,c.style.height=this.options.height+i,this.els={},b.meta){var d=k();d.className="pjs-meta",this.els.fps=k("span"),this.els.ipf=k("span"),d.appendChild(k("span","fps: ")),d.appendChild(this.els.fps),d.appendChild(k("br")),d.appendChild(k("span","ipf: ")),d.appendChild(this.els.ipf),c.appendChild(d)}},circleProperties:function(a,b){var c=b.aabb();a.style.width=2*c.halfWidth+i,a.style.height=2*c.halfHeight+i,a.style.marginLeft=-c.halfWidth+i,a.style.marginTop=-c.halfHeight+i},createView:function(a){var b=k(),c=a.name+"Properties";return b.className=h+a.name,b.style.position="absolute",b.style.top="0px",b.style.left="0px",this[c]&&this[c](b,a),this.el.appendChild(b),b},connect:function(a){a.subscribe("add:body",this.attach,this),a.subscribe("remove:body",this.detach,this)},disconnect:function(a){a.unsubscribe("add:body",this.attach),a.unsubscribe("remove:body",this.detach)},detach:function(a){var b=a.nodeType&&a||a.body&&a.body.view,c=b&&b.parentNode;return b&&c&&c.removeChild(b),this},attach:function(a){var b=a.nodeType&&a||a.body&&a.body.view;return b&&this.el.appendChild(b),this},drawMeta:function(a){this.els.fps.innerHTML=a.fps.toFixed(2),this.els.ipf.innerHTML=a.ipf},drawBody:c}}),c});
/**
 * A Two renderer
 * Renders physics object with Two components
 * 
 */

Physics.renderer('two', function( proto ){

	if ( !document ){
		// must be in node environment
		return {};
	}
	
	var Pi2 = Math.PI * 2;

	var defaults = {

		offset: {x: 0, y: 0},
		// Provide some default colours
		styles: {
			'circle' : {
				stroke : '#ff0000',
				linewidth : 1,
				fill : '#666666'
			},
			'convex-polygon' : {
				stroke : '#ff0000',
				linewidth : 1,
				fill : '#666666'
			}
		}
	};

	// deep copy callback to extend deeper into options
	var deep = function( a, b ){

		if ( Physics.util.isPlainObject( b ) ){

			return Physics.util.extend({}, a, b, deep );
		}

		return b !== undefined ? b : a;
	};

	return {

		/**
		 * Initialization
		 * @param  {Object} options Config options passed by initializer
		 * @return {void}
		 */
		init: function( options ){

			if (typeof Two === 'undefined') {
				throw "Two obj not present - cannot continue ";
			}
				
			// call proto init
			proto.init.call(this, options);

			// further options
			this.options = Physics.util.extend({}, defaults, this.options, deep);
			this.options.offset = Physics.vector( this.options.offset );

			// Hook in TWO  here
			this.two = this.options.two;
			this.twoGroup = this.options.twoGroup;

		},
		

		drawBody: function( body ){
			if (body.view !== null){
				var view = body.view;
				var x = body.state.pos.get(0);
				var y = body.state.pos.get(1);
				var angle = body.state.angular.pos;
				view.translation.x = x;
				view.translation.y = y;
				view.rotation = angle;
			}
		},
	
		createCircle: function(x, y, r, style){
			var circle  =  this.two.makeCircle(x, y, r);
			circle.stroke = style.stroke
			circle.linewidth = style.linewidth;
			circle.fill = style.fill;
			if(this.twoGroup) this.twoGroup.add(circle);
			return circle;
		},
	
		createPolygon: function(verts, style){
		
			var vert = verts[0]
				,x = vert.x === undefined ? vert.get(0) : vert.x
				,y = vert.y === undefined ? vert.get(1) : vert.y
				,l = verts.length
				;
			var start = {
				x: x,
				y: y
			};
	
			var anchors = [];
			for ( var i = 0; i < l; ++i ){
				
				vert = verts[ i ];
				x = vert.x === undefined ? vert.get(0) : vert.x;
				y = vert.y === undefined ? vert.get(1) : vert.y;
				anchors.push(new Two.Anchor(x, y))
			}
			
			if (l > 2){
				var polygon = this.two.makePolygon(anchors);
				polygon.stroke = style.stroke;
				polygon.linewidth = style.linewidth;
				polygon.fill = style.fill;
			}
			
			if(this.twoGroup) this.twoGroup.add(polygon);

			return polygon;
		},

		createView: function( geometry ){

			var view = null;
			var aabb = geometry.aabb();
			var hw = aabb.halfWidth + Math.abs(aabb.pos.x);
			var hh = aabb.halfHeight + Math.abs(aabb.pos.y);
			var x = hw;
			var y = hh;
			var name = geometry.name;
			var styles = styles || this.options.styles[name];
			
			if (name === 'circle'){
			
				view = this.createCircle(x, y, geometry.radius, styles);
			
			} else if (name === 'convex-polygon'){
			
				view = this.createPolygon(geometry.vertices, styles);
			}
			
		
			if (view) {
				return view;
			} else {
				throw "Invalid view name passed.";
			}

		},

	
		/**
		 * Callback to be run before rendering
		 * @private
		 * @return {void}
		 */
		beforeRender: function(){

			// Do pre-rendering things here (clear stage?)
		},
		
		/**
		* Helper function
		* Centers the anchor to {x: 0.5, y: 0.5} of a view
		* @param  {PIXI.DisplayObject} view The view to center the anchor
		* @return {void}
		*/
		centerAnchor: function( view ) {
			if (view !== null){
				//view.anchor.x = 0.5;
				//view.anchor.y = 0.5;
			}
		}
	};
});

Physics.behavior('demo-mouse-events', function( parent ){

	return {

		init: function( options ){

			var self = this;

			this.mousePos = Physics.vector();
			this.mousePosOld = Physics.vector();
			this.offset = Physics.vector();
			
			this.el = $(options.el).on({
				mousedown: function(e){
					
					var offset = $(this).offset();
					self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);
					
					var body = self._world.findOne({ $at: self.mousePos }) ;
					if ( body ){

						// we're trying to grab a body

						// fix the body in place
						body.fixed = true;
						// remember the currently grabbed body
						self.body = body;
						// remember the mouse offset
						self.offset.clone( self.mousePos ).vsub( body.state.pos );
						return;
					}

					self.mouseDown = true;
				},
				mousemove: function(e){
					var offset = $(this).offset();
					self.mousePosOld.clone( self.mousePos );
					// get new mouse position
					self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);
				},
				mouseup: function(e){
					var offset = $(this).offset();
					self.mousePosOld.clone( self.mousePos );
					self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);

					// release the body
					if (self.body){
						self.body.fixed = false;
						self.body = false;
					}
					self.mouseDown = false;
				}
			});
		},

		connect: function( world ){

			// subscribe the .behave() method to the position integration step
			world.subscribe('integrate:positions', this.behave, this);
		},

		disconnect: function( world ){

			// unsubscribe when disconnected
			world.unsubscribe('integrate:positions', this.behave);
		},

		behave: function( data ){

			if ( this.body ){

				// if we have a body, we need to move it the the new mouse position.
				// we'll also track the velocity of the mouse movement so that when it's released
				// the body can be "thrown"
				this.body.state.pos.clone( this.mousePos ).vsub( this.offset );
				this.body.state.vel.clone( this.body.state.pos ).vsub( this.mousePosOld ).vadd( this.offset ).mult( 1 / 30 );
				this.body.state.vel.clamp( { x: -1, y: -1 }, { x: 1, y: 1 } );
				return;
			}

			if ( !this.mouseDown ){
				return;
			}

			// if we don't have a body, then just accelerate
			// all bodies towards the current mouse position

			var bodies = data.bodies
				// use a scratchpad to speed up calculations
				,scratch = Physics.scratchpad()
				,v = scratch.vector()
				,body
				;

			for ( var i = 0, l = bodies.length; i < l; ++i ){
					
				body = bodies[ i ];

				// simple linear acceleration law towards the mouse position
				v.clone(this.mousePos)
				 .vsub( body.state.pos )
				 .normalize()
				 .mult( 0.001 )
				 ;

				body.accelerate( v );
			}

			scratch.done();
		}
	};
});
var Delaunay = (function() {

    /**
     * Node
     * @public
     */
    function Node(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = !isNaN(id) && isFinite(id) ? id : null;
    }

    Node.prototype = {
        eq: function(p) {
            var dx = this.x - p.x,
                dy = this.y - p.y;
            return (dx < 0 ? -dx : dx) < 0.0001 && (dy < 0 ? -dy : dy) < 0.0001;
        },

        toString: function() {
            return '(x: ' + this.x + ', y: ' + this.y + ')';
        }
    };

    /**
     * Edge
     */
    function Edge(p0, p1) {
        this.nodes = [p0, p1];
    }

    Edge.prototype = {
        eq: function(edge) {
            var na = this.nodes, nb = edge.nodes;
            var na0 = na[0], na1 = na[1], nb0 = nb[0], nb1 = nb[1];
            return (na0.eq(nb0) && na1.eq(nb1)) || (na0.eq(nb1) && na1.eq(nb0));
        }
    };

    /**
     * Triangle
     */
    function Triangle(p0, p1, p2) {
        this.nodes = [p0, p1, p2];
        this.edges = [new Edge(p0, p1), new Edge(p1, p2), new Edge(p2, p0)];
        this._createId();
        this._createCircumscribedCircle();
    }

    Triangle.prototype = {
        id: null,
        _circle: null,

        _createId: function() {
            var nodes, id0, id1, id2;

            nodes = this.nodes;
            id0 = nodes[0].id;
            id1 = nodes[1].id;
            id2 = nodes[2].id;

            if (id0 !== null && id1 !== null && id2 !== null) {
                this.id = [id0, id1, id2].sort().join('_');
            }
        },

        _createCircumscribedCircle: function() {
            var nodes, p0, p1, p2,
                ax, bx, c, t, u,
                circle, dx, dy;

            nodes = this.nodes;
            p0 = nodes[0];
            p1 = nodes[1];
            p2 = nodes[2];

            ax = p1.x - p0.x, ay = p1.y - p0.y;
            bx = p2.x - p0.x, by = p2.y - p0.y;
            c = 2 * (ax * by - ay * bx);

            t = (p1.x * p1.x - p0.x * p0.x + p1.y * p1.y - p0.y * p0.y);
            u = (p2.x * p2.x - p0.x * p0.x + p2.y * p2.y - p0.y * p0.y);

            if (!this._circle) this._circle = {};

            circle = this._circle;
            circle.x = ((p2.y - p0.y) * t + (p0.y - p1.y) * u) / c;
            circle.y = ((p0.x - p2.x) * t + (p1.x - p0.x) * u) / c;

            dx = p0.x - circle.x;
            dy = p0.y - circle.y;
            circle.radiusSq = dx * dx + dy * dy;
        },

        circleContains: function(p) {
            var circle, dx, dy, distSq;

            circle = this._circle;
            dx = circle.x - p.x,
            dy = circle.y - p.y;
            distSq = dx * dx + dy * dy;

            return distSq < circle.radiusSq;
        }
    };


    /**
     * @constructor
     * @public
     */
    function Delaunay(width, height) {
        this.width = width;
        this.height = height;

        this._triangles = null;

        this.clear();
    }

    Delaunay.prototype = {

        clear: function() {
            var p0 = new Node(0, 0),
                p1 = new Node(this.width, 0),
                p2 = new Node(this.width, this.height),
                p3 = new Node(0, this.height);

            this._triangles = [
                new Triangle(p0, p1, p2),
                new Triangle(p0, p2, p3)
            ];

            return this;
        },

        multipleInsert: function(m) {
            for (var i = 0, len = m.length; i < len; i++) {
                this.insert(m[i]);
            }

            return this;
        },

        insert: function(p) {
            var triangles = this._triangles,
                t,
                temps = [],
                edges = [],
                edge,
                polygon = [],
                isDuplicate,
                i, ilen, j, jlen;

            for (ilen = triangles.length, i = 0; i < ilen; i++) {
                t = triangles[i];

                if (t.circleContains(p)) {
                    edges.push(t.edges[0], t.edges[1], t.edges[2]);
                } else {
                    temps.push(t);
                }
            }

            edgesLoop: for (ilen = edges.length, i = 0; i < ilen; i++) {
                edge = edges[i];

                // 辺を比較して重複していれば削除
                for (jlen = polygon.length, j = 0; j < jlen; j++) {
                    if (edge.eq(polygon[j])) {
                        polygon.splice(j, 1);
                        continue edgesLoop;
                    }
                }

                polygon.push(edge);
            }

            for (ilen = polygon.length, i = 0; i < ilen; i++) {
                edge = polygon[i];
                temps.push(new Triangle(edge.nodes[0], edge.nodes[1], p));
            }

            this._triangles = temps;

            return this;
        },

        getTriangles: function() {
            return this._triangles.slice();
        }
    };

    Delaunay.Node = Node;

    return Delaunay;

})();


/**
 * Particle
 * @super Delaunay.Node
 */
var Particle = (function(Node) {

    var currentId = 0,
        getId = function() { return currentId++; };

    function Particle(x, y) {
        //console.log(this, x, y, getId())
        Node.call(this, x, y, getId());
        this.vx = 0;
        this.vy = 0;
    }

    Particle.prototype = new Node();

    return Particle;

})(Delaunay.Node);
var Utils = function(){

	var PARTICLE_AMOUNT = 50;

	function degreesToRadians(deg) {
		return deg * Math.PI/180;
	}

	function random(min, max) {
		if(max){
			return Math.random() * (max - min) + min;
		} else {
			return Math.random() * min;
		}
	}

	function removeTwoObject(object) {
		object.remove();
		//$(object._renderer.elem).remove();
	}

	function bringInLetters(chars, delay){
		delay = delay || 0;
		_.each(chars, function(el, i) {
			TweenLite.from(el, .25, {autoAlpha:0, ease:Sine.easeOut, delay:delay + .25 + (i*.05), onComplete:function(tween){
				TweenLite.set(tween.target, {clearProps:'all'});
			}, onCompleteParams:['{self}']});
		});
	}

	function fadeOutLetters(chars) {
		_.each(chars, function(el, i){
			TweenLite.set(el,{autoAlpha:0});
		});
	}

	function revealShape(shape, time, subdivide){

		var subdivide = subdivide || false;

		var timeline = new TimelineLite({onComplete:function(){
			shape.vertices.pop();
			shape.closed = true;
		}});

		shape.closed = false;
		shape.ending = 0;
		shape.vertices.push(shape.vertices[0].clone());

		if(subdivide) shape.subdivide();

		var vertices = shape.vertices;

		time = time/(shape.vertices.length - 1) || 1/(shape.vertices.length - 1);

		_.each(vertices, function(anchor, i) {
			if(i > 0){
				timeline.to(shape, 0.0001, {ending:"+=" + 1/(vertices.length-1)});
				timeline.to(anchor, 0.0001, {x:vertices[i-1].x, y:vertices[i-1].y});
				timeline.to(anchor, time, {x:anchor.x, y:anchor.y, ease: Sine.easeOut});
			}
		});

		return timeline;
	}

	function lineDistance( point1, point2 ){
		var xs = 0;
		var ys = 0;

		xs = point2.x - point1.x;
		xs = xs * xs;

		ys = point2.y - point1.y;
		ys = ys * ys;

		return Math.sqrt( xs + ys );
	}

	function resetParticle(particle, delay){

		var index = particle.index;

		var ang = (Math.PI * 2) / PARTICLE_AMOUNT * index;

		var delay = delay || 0;

		particle.translation.x = particle.x || 0;
		particle.translation.y = particle.y || 0;

		bezier = particle.bezier || [{scale:1},{scale:0}];

		var tween = TweenLite.to(particle, particle.speed,  {delay: delay, translation: {x: "+=" + particle.targetX, y: "+=" +particle.targetY},  bezier:bezier, ease:Power3.easeOut, onComplete:function(tween){

			resetParticle(tween.target);

		}, onCompleteParams:['{self}'],  onStart:function(tween){

			tween.target.visible = true;

		}, onStartParams:['{self}']});

	}

	// used to return the first child of a Two.Group
	// useful when interpreting an external SVG and isolating that shape
	function getChild(elem) {
		var parentId = elem.id;
		var childId = parentId + 1;

		child = elem.children[childId];

		return child;
	}

	// return the vertices of an element
	// helpful when translating from imported SVG to your own
	function getVertices(elem) {

		var vertices = [];

		for( var i = 0; i < elem.vertices.length; i++) {
			vertices.push(elem.vertices[i].x);
			vertices.push(elem.vertices[i].y);
		}

		return vertices;

	}

	function createCircle(size) {
		var two = Main.getTwo();
		var circle = two.makeCircle(0, 0, size/2); // size/2 will be the radius
		return circle;
	}

	function createSquare(size) {
		var two = Main.getTwo();
		var square = two.makeRectangle(0, 0, size, size);
		return square;
	}

	function createRhombus(size) {
		var two = Main.getTwo();
		var rhombus = two.makeRectangle(0, 0, size, size);
		rhombus.rotation  = degreesToRadians(45);
		return rhombus;
	}

	function createTriangle(size) {
		var two = Main.getTwo();
		var triangle = two.makePolygon(-size/2, -size/2, size/2, -size/2, 0, size/2);
		return triangle;
	}

	function createHeart() {
		var two = Main.getTwo();
		var pathString ='<path d="M 50.000 100.000 C 13.700 73.300 1.300 52.000 0.000 34.700 L 0.000 28.700 C 1.400 10.700 12.700 1.200 22.500 0.200 C 24.100 0.000 25.600 0.000 27.000 0.000 C 38.300 0.000 43.800 5.100 50.000 12.900 C 56.200 5.100 61.600 0.000 73.000 0.000 C 74.400 0.000 75.900 0.100 77.500 0.200 C 87.300 1.200 98.600 10.600 100.000 28.700 L 100.000 34.700 C 100.000 47.200 90.600 66.700 50.000 100.000 C 50.000 100.000 50.000 100.000 50.000 100.000 Z"></path>';
		var pathNode = $(pathString)[0]
		var heart = two.interpret(pathNode);
		heart.center();
		return heart;
	}

	function createStar() {
		var two = Main.getTwo();
		var pathString ='<polygon xmlns="http://www.w3.org/2000/svg" points="150,88 162.8,126.1 202.7,126.1 170.8,149.9 182.3,188 150,165.4 117.7,188 129.2,149.9 97.3,126.1 137.2,126.1 "/>';
		var pathNode = $(pathString)[0]
		var star = two.interpret(pathNode);
		star.center();
		return star;
	}

	function createPlus() {
		var two = Main.getTwo();
		var pathString ='<path xmlns="http://www.w3.org/2000/svg" d="M87.5,50v37.5H50v25h37.5V150h25v-37.5H150v-25h-37.5V50H87.5z"/>';
		var pathNode = $(pathString)[0]
		var plus = two.interpret(pathNode);
		plus.center();
		return plus;
	}

	function createX() {
		var x =createPlus()
		x.rotation  = degreesToRadians(45);
		return x;
	}


	

	function createHexagon() {
		var two = Main.getTwo();
		var pathString ='<polygon xmlns="http://www.w3.org/2000/svg" points="420.7,314 391.9,364 334.1,364 305.3,314 334.1,264 391.9,264 "/>';
		var pathNode = $(pathString)[0]
		var hexagon = two.interpret(pathNode);
		hexagon.center();
		return hexagon;
	}


	function parseSVGFile(path){
		$.get(path, function(doc){
			var two = Main.getTwo();
			var shape = two.interpret($(doc).find('svg')[0]);
			shape.center();
			shape = Utils.getChild(shape);
			two.update();
			console.log(shape);
		});
	}

	function rippleEffect(elem, rippleAmt, startScale) {
		var rippleAmt = rippleAmt || 4;
		//var elem = square; // temp until i build more shapes
		var ripples = [];
		var timeline = new TimelineLite({
			paused: true,
			onComplete: function(){
				for(var i = 0; i < rippleAmt; i++) {
					removeTwoObject(ripples[i]);
				}
			}
		});

		for(var i = 0; i < rippleAmt; i++ ) {
			var clone = elem.clone();
			clone.stroke = "#424242";
			clone.scale = startScale;
			clone.linewidth = 2;
			clone.noFill();
			ripples.push(clone);
		}

		for ( i = rippleAmt - 1; i > 0 ; i-- ) {
			var dur = i * .15 + 1;
			if (i == rippleAmt) {
				timeline.to(ripples[i], 0.75, {scale: dur, opacity: 0, ease:Sine.easeOut});
			} else {
				timeline.to(ripples[i], 0.75, {scale: dur, opacity: 0, ease:Sine.easeOut}, "-=0.45");
			}
		}

		timeline.play();
	}


	function rect(x, y, w, h) {
		return [{x: x, y: y},
				{x: x + w, y: 0},
				{x: x + w, y: y + h},
				{x: x, y: y + h}];
	}


	return {
		degreesToRadians:degreesToRadians,
		random:random,
		revealShape:revealShape,
		resetParticle:resetParticle,
		removeTwoObject:removeTwoObject,
		bringInLetters:bringInLetters,
		fadeOutLetters:fadeOutLetters,
		getParticleAmount:function(){return PARTICLE_AMOUNT;},
		getChild:getChild,
		getVertices:getVertices,
		createCircle:createCircle,
		createSquare:createSquare,
		createTriangle:createTriangle,
		createHeart:createHeart,
		parseSVGFile:parseSVGFile,
		rippleEffect:rippleEffect,
		createRhombus:createRhombus,
		createStar:createStar,
		createHexagon:createHexagon,
		createPlus:createPlus,
		createX:createX,
		rect:rect,
		lineDistance:lineDistance
	}

}();


var Slide1 = function(){

	var chars;
	var two;
	var twoGroup;

	var box;
	var expanded;
	var timeline;


	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();

		expanded = false;

		// animate in small text
		var chars1 = $('article.slide-1 .content small').lettering().find('span').css({'visibility':'hidden'});
		var chars2 = $('article.slide-1 .content h2').lettering().find('span').css({'visibility':'hidden'});
		
		chars = $.merge(chars1, chars2);

		// build out the box around the text
		buildBox();

		timeline = Utils.revealShape(box, .5);

		onEnter();
	}


	function buildBox(){
		var el = $('article.slide-1 h2');

		var w = el.innerWidth();
		var h = el.innerHeight();

		box = two.makeRectangle(0, 0, w, h);
		box.stroke = "#5c5c5c";
		box.linewidth = 1;
		box.fill = "#212121";
		box.id = "box";
		// add it to the main group
		twoGroup.add(box);
	}

	function update(){
		// add anims

	}

	function onEnter(){

		Utils.bringInLetters(chars);

		box.visible = true;

		tweenBox($('article.slide-1 .content h2'), .6);

		expanded = false;

	}

	function tweenBox(el, delay){

		delay = delay || 0;

		var vertices = box.vertices;

		var w = el.innerWidth();
		var h = el.innerHeight();

		el.parents('.content').height(h);

		var oldWidth = vertices[1].x - vertices[0].x;
		var oldHeight = vertices[2].y - vertices[1].y;

		var newWidth = (w - oldWidth)/2
		var newHeight = (h - oldHeight)/2


		for(var i=0;i<4;i++){
			TweenLite.to(vertices[i], .25, {x: (i ==0 ) || (i ==3 )   ? "-="+newWidth: "+="+newWidth,  y: (i ==0 ) || (i ==1 )   ? "-="+newHeight: "+="+newHeight, ease:Bounce.easeInOut, delay:delay + i*.08});
		}

	}

	function onLeave(){

		if(expanded) return;

		timeline.progress(1).pause();

		tweenBox($('article.slide-2 .content h2'));

		expanded = true;

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide2 = function(){

	var chars;
	var two;
	var twoGroup;

	var brandAndProduct;
	var sparkGroup;

	var particleAmount;

	var particles

	function init(){

		chars = $('article.slide-2 .content h2').lettering().find('span');

		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		sparkGroup = two.makeGroup();
		
		twoGroup.add(sparkGroup);

		two.update();
		var el = sparkGroup._renderer.elem;
		el.parentNode.insertBefore(el,el.parentNode.firstChild);

		particleAmount = Utils.getParticleAmount();


	}

	function update(){
		sparkGroup.rotation += 0.005;
	}


	function addParticles(){
		particles = [];

		while(particles.length < particleAmount){

			var i = particles.length - 1;
			var ang = (Math.PI * 2) /particleAmount * i;

			var shape;

			if(Math.floor(Utils.random(6))%4 == 0){
				shape = two.makeCircle(0,0,  Utils.random(1, 4));
				shape.noStroke();
			}else{
				var w = Utils.random(400, 450);
				shape = two.makeLine( 0, 0, w, 0);
				shape.linewidth = Utils.random(0.25, 1);
				shape.stroke = "#ffffff";
			}

			var radius = Utils.random(400, 600);

			shape.targetX = Math.cos(ang)*radius;
			shape.targetY = Math.sin(ang)*radius;
			shape.bezier = [{scale:0},{scale:1},{scale:0}];

			shape.index = i;
			shape.speed = Utils.random(2, 4);
			shape.rotation = Math.abs(ang);
			shape.visible = false;

			Utils.resetParticle(shape,Utils.random(particleAmount) * .001);
			sparkGroup.add(shape);
			particles.push(shape);
		}
			
	}




	function onEnter(){
			
		var box = twoGroup.children["box"];
		
		box.visible = true;

		Utils.bringInLetters(chars);

		addParticles();
	}

	function onLeave(){
		// remove slide specific anims
		for(var i = 0;i < particles.length; i++){
			var particle = particles[i];
			TweenLite.killTweensOf(particle);
			Utils.removeTwoObject(particle);
		}
		particles = [];
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide3 = function(){

	var chars;
	var two;
	var twoGroup;


	var brandAndProduct;
	var brandGroup;
	var productGroup;

	var ang = 0;
	var radius = 85;


	function init(){

		ang = 0;
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();

		TweenLite.set('#brandandproduct-wrapper', {perspective:900});

		brandGroup = $("#brand-group");
		productGroup = $("#product-group");

		chars = $('article.slide-3 .content p').lettering().find('span');

	}


	
	function update(){


		TweenLite.set(brandGroup, {x: Math.cos(ang) * radius, y: Math.sin(ang) * radius})

		var ang2 =  ang +  (180 * Math.PI/180);

		TweenLite.set(productGroup, {x: Math.cos(ang2) * radius, y: Math.sin(ang2) * radius})

		ang += 0.02;
	}

	function onEnter(){

		twoGroup.children["box"].visible = false;

		radius = 85;


		TweenLite.from(brandGroup, 0.3, {scale: 0, delay:.15, ease:Elastic.easeOut});
		TweenLite.from(productGroup, 0.3, {scale: 0, delay:.35, ease:Elastic.easeOut});

		Utils.bringInLetters(chars);


	}

	function onLeave() {
		//Utils.fadeOutLetters(chars);
	}

	function onResize() {

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		getRadius: function() { return radius },
		setRadius: function(rad) { radius = rad },
		onLeave:onLeave
	}

}();


var Slide4 = function(){

	var chars;
	var two;
	var twoGroup;

	var brandAndProduct;
	var brandGroup;
	var productGroup;
	var tween;

	var rotation;

	function init(){

		rotation = 0;
		flipping = false;
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();

		brandGroup = $("#brand-group");
		productGroup = $("#product-group");

		chars = $('article.slide-4 .content p').lettering().find('span');
	}

	
	function update(){

	}

	function onEnter(){
		rotation = 0;
		flipping = false;
		twoGroup.children["box"].visible = false;

		if(Slide3.getRadius() > 0){
			tween = {radius:Slide3.getRadius()};
			TweenLite.to(tween, 1, {radius:0, ease:Sine.easeOut,  onUpdate:function(){
				Slide3.setRadius(tween.radius);
				Slide3.update();
			}})
		}

		flip();

		Utils.bringInLetters(chars);

	}

	function flip(){
		flipping = true;

		TweenLite.set(productGroup, {x:0, y:0, rotationY:rotation});
		TweenLite.set(brandGroup, {x:0, y:0, rotationY:rotation});

		TweenLite.to(productGroup, 2, {bezier:[{z:0, rotationY: rotation}, {z:500, rotationY: rotation + 90 + 360}, {z:0, rotationY: rotation + 180 + 360}], delay:0, onComplete:flip});
		TweenLite.to(brandGroup, 2, {bezier:[{z:0, rotationY: Slide3.getRadius() > 0 ? rotation : rotation + 180}, {z:500, rotationY: rotation + 270 + 360}, {z:0, rotationY: rotation + 360 + 360}], delay:0});

		rotation += 540;

	}

	function onLeave() {
		$('#brand-group').find('.text').show();
		TweenLite.set(productGroup, {rotationY:0,z:0});
		TweenLite.set(brandGroup, {rotationY:0,z:0})

		TweenLite.killTweensOf(productGroup);
		TweenLite.killTweensOf(brandGroup);
		TweenLite.killTweensOf(tween);
	}

	function onResize() {

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide5 = function(){

	var chars;
	var two;
	var twoGroup;

	var world;
	var viewWidth;
	var viewHeight;
	var renderer;

	var collection;

	var outline;
	var circles

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		collection = two.makeGroup();
		twoGroup.add(collection);

		circles = [];

		chars = $('article.slide-5 .content p > span').lettering().find('span');

		viewWidth = $(window).width();
		viewHeight = $(window).height();

		outline = two.makeCircle(0, 0, 140);
		collection.add(outline)
		outline.stroke = "rgba(255, 255,255, 0.5)";
		outline.linewidth = 2;
		outline.noFill();

		collection.visible = false;

		Physics(setupWorld);

	}

	function update(){

		world.render();

	}

	
	function onEnter(){
		twoGroup.children["box"].visible = false;
	
		Utils.revealShape(outline, .5);

		two.update();

		$(outline._renderer.elem).attr({"stroke-dasharray":"3, 12"});

		collection.visible = true;

		Utils.bringInLetters(chars);

		for(var i = 0;  i < 12; i++){
			TweenLite.delayedCall(i, addBodies);
		}

	}

	function onLeave(){
		removeBodies();
		collection.visible = false;
		TweenMax.killDelayedCallsTo(addBodies)
		removeBodies();
	}

	function removeBodies() {
		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
		 	Utils.removeTwoObject(circle.view);
		 	world.remove(circle);
	 	}
	
	}

	function addBodies() {
		
	
        var speed = 0.8;

		var circle = Physics.body('circle', {
			x: 0,
			y: 0,
			vx: Utils.random(-speed, speed),
			vy: Utils.random(-speed, speed),
			radius: Utils.random(6, 40)
		});
		world.add(circle);
		circles.push(circle)
	}


	function setupWorld(w) {

		world = w;

		renderer = Physics.renderer('two', {
			two: two,
			twoGroup: collection,
			width: viewWidth,
			height: viewHeight,
			styles: {
	
				'circle' : {
					stroke : 'rgba(0,0,0,0)',
					linewidth : 1,
					fill : 'rgba(199, 178, 153, .1)'
				}
			}
		});


		// add the renderer
		world.add( renderer );
		// render on each step
		//world.subscribe('step', loop);

		// bounds of the window
		viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);

		world.add( Physics.behavior('body-collision-detection', { checkAll: true }) );

		// ensure objects bounce when edge collision is detected
		world.add( Physics.behavior('body-impulse-response') );

		// add some gravity
	//	world.add( Physics.behavior('constant-acceleration') );

		// subscribe to ticker to advance the simulation
		Physics.util.ticker.subscribe(function( time, dt ){
			world.step( time );
		});	

		$(window).on('resize', function(){

			viewWidth = $(window).width();
			viewHeight = $(window).height();

			renderer.el.width = viewWidth;
			renderer.el.height = viewHeight;

			renderer.options.width = viewWidth;
			renderer.options.height = viewHeight;

		}).trigger('resize');

		Physics.util.ticker.start();

		var radius = 155;
		var amount = 24;
		for ( var i = 0; i < amount; i++ ){

			var ang =  Math.PI*2/amount * i;

			var circle = Physics.body('circle', {
				x: Math.cos(ang) * radius,
				y: Math.sin(ang) * radius,
				radius: 20,
				fixed: true,
				hidden: true
			})
		
			world.add(circle);

			world.render();

			Utils.removeTwoObject(circle.view);

        }


	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide6 = function(){

	var chars;
	var two;
	var twoGroup;

	var machineGroup;

	var wheel;
	var circle;
	var spokes;
	var peg;
	var pegXoffset;
	var pegYoffset;

	var drive;
	var square;
	var arm;
	var fixedArm;
	var armPeg;
	var armPegXoffset;
	var armPegYoffset;

	var freeArm;
	var freeArmX1;
	var freeArmY1;
	var freeArmX2;
	var freeArmXY;

	var delay;

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		
		chars = $('article.slide-6 .content  > p, article.slide-6 .content .concept-utility h3 span, article.slide-6 .content .label p, article.slide-6 .content .concept-content h3 span').lettering().find('span');

		machineGroup = two.makeGroup();
		machineGroup.id = "machine";
		twoGroup.add(machineGroup);

		delay = 0;

		buildMachine();

		machineGroup.visible = false;
	}

	function update(){
		if(delay > 60){
			updateMachine();
		}

		delay++;
	}

	function updateMachine(){
		wheel.rotation += 0.025;

		var armMove = 0;
		var pct = wheel.rotation % 100; 
		var theta = pct * Math.PI * 2; 

		if (arm.translation.x == 0 || arm.translation.x < -123) {
			armDirec = 'left';

		} else if (arm.translation.x <= -62){
			armDirec = 'right';

		}

		if ( armDirec == 'left') {
			armMove = -0.5;
			freeArm.vertices[0].y = Math.sin(wheel.rotation)*160 * 0.575;
			freeArm.vertices[0].x = Math.cos(wheel.rotation)*160 * 0.575 - 175;

		} else if( armDirec == 'right') {
			armMove = 0.5;

			freeArm.vertices[0].y = Math.sin(wheel.rotation)*160 * 0.575;
			freeArm.vertices[0].x = Math.cos(wheel.rotation)*160 * 0.575 - 175;
		}

		arm.translation.x += armMove;
		freeArm.vertices[1].x += armMove;
	}

	function buildMachine(){


		

		// BUILD A WHEEL
		wheel = two.makeGroup();
		// create circle
		// 
		circle = two.makeCircle(0,0,160);
		circle.stroke = "rgba(255,255,255,.65)";
		circle.lineWidth = 2;
		circle.noFill();
		// add circle to the wheel
		wheel.add(circle);

		// create spokes
		spokes = [];
		var spokeAmt = 8
		for (var i = 0; i < spokeAmt; i++) {
			var pct = (i + 1) / spokeAmt; // percent this item represents
			var theta = pct * Math.PI * 2; 

			var x2 = 160 * Math.cos(theta);
			var y2 = 160 * Math.sin(theta);

			var spoke = two.makeLine(0, 0, x2, y2);
			spoke.stroke = "rgba(255,255,255,.65)";
			spoke.linewidth = 2;

			spokes.push(spoke);

			// store a position along a spoke for the peg
			if ( i === spokeAmt - 1 ) {

				pegXoffset = x2 * 0.575;
				pegYoffset = y2 * 0.575;

				freeArmX1 = pegXoffset - 260;
				freeArmY1 = pegYoffset;
			}

		}
		// add the spokes to the wheel
		wheel.add(spokes);

		// // create peg and add it to wheel
		peg = two.makeCircle(pegXoffset, pegYoffset, 6.5);
		peg.stroke = "#212121";
		peg.linewidth = 8;
		peg.id = "peg";
		wheel.add(peg);

		wheel.translation.set(-260, 0);

		// BUILD THE DRIVE MECHANISM
		drive = two.makeGroup();
		arm = two.makeGroup();
		// create fixed arm
		fixedArm = two.makeLine(-260, 0, 0, 0);
		fixedArm.stroke = "rgba(255,255,255,.65)";
		fixedArm.linewidth = 2;
		// add fixedArm to arm
		arm.add(fixedArm);

		// create peg and add it to drive
		armPegXoffset = (fixedArm.vertices[0].x * 2)
		armPeg = two.makeCircle(armPegXoffset, 0, 6.5);
		armPeg.stroke = "#212121";
		armPeg.linewidth = 8;
		arm.add(armPeg);

		drive.add(arm);

		// create square
		square = two.makeRectangle(0,0,280,280);
		square.stroke = "rgba(255,255,255,.65)";
		square.lineWidth = 2;
		square.fill = "#212121";
		// add square to the machine
		drive.add(square);

		drive.translation.set(260, 0);

		// create freeArm
		freeArm = two.makeLine(freeArmX1, freeArmY1, 0, 0);
		freeArm.stroke = "rgba(255,255,255,.65)";
		freeArm.linewidth = 2;

		// add all the parts to the machine
		machineGroup.add(freeArm, drive, wheel);

	}
	
	function onEnter(){

		delay = 0;
		twoGroup.children["box"].visible = false;
		Utils.bringInLetters(chars);
		machineGroup.visible =true;

		// setup the skeleton of the machine

		

		

	}

	function onLeave(){

		_.each(chars, function(char, i) {
			TweenLite.killTweensOf(char);
		})

		machineGroup.visible = false;
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide7 = function(){

	var chars;
	var twoGroup;
	var two;

	var jumpingDot;
	var shapeGroup;
	var shapes;
	var line;


	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		shapeGroup = two.makeGroup();
		twoGroup.add(shapeGroup);
		chars = $('article.slide-7 .content p').lettering().find('span');
		createShapes();
	}

	function update(){

	}

	function onEnter(){
		twoGroup.children["box"].visible = false;
		Utils.bringInLetters(chars);		

		shapes = _.shuffle(shapes);
		jumpingDot.visible = true;
		line.visible = true;
		jumpToRandomShape();

	}

	function createShapes() {

		var circle = two.makeCircle(0, 0, 42);

		var hexagon = Utils.createHexagon()
		hexagon.translation.set(0, 150)

		var diamond = Utils.createRhombus(74)
		diamond.translation.set(-120, 0);

		var rectangle = two.makeRectangle(0,0,36,165);
		rectangle.translation.set(100, 0);

		var square = two.makeRectangle(0,0,84,84);
		square.translation.set(0, -150);

		shapes = [circle, hexagon, diamond, rectangle, square];

		_.each(shapes, function(shape, i) {
			shapeGroup.add(shape);
		});

		shapeGroup.linewidth = 1;
		shapeGroup.stroke = "#5c5c5c";
		shapeGroup.noFill();
		shapeGroup.visible = false;

		// build jumping dot
		jumpingDot = two.makeCircle(0, 0, 7);
		jumpingDot.noStroke();
		jumpingDot.fill = "#c7b299";
		twoGroup.add(jumpingDot);
		jumpingDot.visible = false;

		line = two.makeLine(0, 0, 0, 0);
		line.noFill();
		line.cap = 'round';
		line.linewidth = 4;
		line.stroke = "#424242";
		two.update();
		$(line._renderer.elem).attr({"stroke-dasharray":"1.5, 12"});
		shapeGroup.add(line);
		line.visible = false;
	}

	function jumpToRandomShape() {

		var shape = shapes.shift();
		shapes.push(shape)

		Utils.rippleEffect(shape, 5, .6);

		var randomShape = _.without(shapes, shape).shift();

		jumpingDot.translation.set(shape.translation.x, shape.translation.y);

		var distance = Utils.lineDistance(shape.translation, randomShape.translation);
		
		var xDelta = randomShape.translation.x - shape.translation.x;
		var yDelta = randomShape.translation.y - shape.translation.y;

		var ang = Math.atan2(yDelta, xDelta);

		line.rotation = ang;

		var xOffset = 0; // Math.cos(ang) * distance/2;
		var yOffset = 0; // Math.sin(ang) * distance/2;

		line.translation.set(shape.translation.x + xOffset, shape.translation.y + yOffset);

		line.vertices[1].x = 0;

		TweenLite.to(line.vertices[1], 1, {x:distance, ease:Sine.easeInOut});

		TweenLite.to(jumpingDot, 1, {translation:{x:randomShape.translation.x, y:randomShape.translation.y}, bezier:[{scale:4}, {scale:1}], onComplete:jumpToRandomShape, ease:Sine.easeInOut})
	
	}
	

	function onLeave(){
		TweenLite.killTweensOf(line.vertices[1]);
		TweenLite.killTweensOf(jumpingDot);
		shapeGroup.visible = false;
		line.visible = false;
		jumpingDot.visible = false;
	
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide8 = function(){

	var chars;
	var two;
	var twoGroup;

	var stadium;
	var rows;

	var seatsRight;
	var seatsLeft;
	var seatsTop;
	var seatsBottom;

	var seats

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		stadium = two.makeGroup();
		stadium.id = "stadium";
		//stadium.translation.set(0, 15);
		twoGroup.add(stadium);

		chars = $('article.slide-8 .content > p.top-align, article.slide-8 .content .label p span').lettering().find('span');

	}

	function update(){

		cameraFlash();

	}

	function onEnter(){
		twoGroup.children["box"].visible = false;

		Utils.bringInLetters(chars);

		createStadium();
		
	}

	function createStadium() {

		seats = [];
		var ang = 0;
		var radius = 100;
		var yOffset = 0;
		var x = 0;
		var y = 0;


		while ( ang < Math.PI *2 ) {

			for(var i = 0; i <  4; i++){

				x = Math.cos(ang) * (radius + i*15);
				y = Math.sin(ang) * (radius + i*15);

				if(ang >= 0 * Math.PI/180 && ang < 180 * Math.PI/180) {
					yOffset = 60
				}else{
					yOffset = -60
				}

				addSeat(x, yOffset + y);

			}

			ang += 0.20;
		
		}

		for(var i = 0; i <  4; i++){
			for(var ii = 0; ii <  4; ii++){
				x = (radius + i*15);
				y = 12 +ii * 27
				addSeat(x, yOffset + y);
			}
		}

		for(var i = 0; i <  4; i++){
			for(var ii = 0; ii <  4; ii++){
				x = (-radius - i*15);
				y = 24 +ii * 27
				addSeat(x, yOffset + y);
			}
		}


	}

	function addSeat(x, y){
		var seat = two.makeCircle(x,y, 3);
		seat.noStroke();
		seat.fill = "rgba(230,230,230,.1)";
		stadium.add(seat);
		seats.push(seat);
	}
	

	function cameraFlash() {
		

		var randomSeat = seats[Math.floor( Math.random()*seats.length)];

		var flash = randomSeat.clone();
		flash.fill = "#ffffff";
		flash.stroke = "rgba(255,255,255,0.7)";
		flash.linewidth = 2;
		flash.scale = 0;
		flash.opacity = 0;

		TweenLite.to(flash, 2, {scale: 3});
		TweenLite.to(flash, 0.25, {opacity: 1});
		TweenLite.to(flash, 1, {opacity: 0, delay: 0.25, onComplete: function(tween){
			Utils.removeTwoObject(tween.target);
		}, onCompleteParams:['{self}']});

	}

	function onLeave(){
		for(var id in stadium.children){
			var shape = stadium.children[id];
			TweenLite.killTweensOf(shape);
			Utils.removeTwoObject(shape);
		}
		//Utils.fadeOutLetters(chars);
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide9 = function(){

	var chars;
	var two;
	var twoGroup;
	var shapes;
	var shapeGroup;

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		chars = $('article.slide-9 .content h2').lettering().find('span');
		createShapes();
	}

	function update(){

	}

	function onEnter(){
		Utils.bringInLetters(chars);
		shapes = _.shuffle(shapes);
		twoGroup.children["box"].visible = false;
		dropShape();
	}

	function createShapes() {
		shapeGroup = two.makeGroup();

		var size = 100;
		var circle = Utils.createCircle(size);
		var square = Utils.createSquare(size);
		var triangle = Utils.createTriangle(size);
		var heart = Utils.createHeart();
		var rhombus = Utils.createRhombus(size);
		var star = Utils.createStar();
		var hexagon = Utils.createHexagon();
		var x = Utils.createX();

		shapes = [circle, square, triangle, heart, rhombus, star, hexagon, x];

		_.each(shapes, function(shape, i) {
			shapeGroup.add(shape);
			shape.visible = false;
		});

		shapeGroup.linewidth = 1.5;
		shapeGroup.stroke = "#5c5c5c";
		shapeGroup.noFill();
		twoGroup.add(shapeGroup);
	}

	function dropShape() {
		var shape = shapes.shift();

		shapes.push(shape);
		shape.visible = true;
		var viewHeight = Main.getViewHeight();
		shape.translation.set(0,viewHeight/2 - 50);

		var clone = shape.clone();
		clone.stroke = "#424242";
		clone.linewidth = 2;
		clone.noFill();

		TweenLite.to(clone, 1, {scale:1.5, delay: 0, opacity:0, ease:Power3.easeOut, onComplete:function(shape){
			Utils.removeTwoObject(shape);
		}, onCompleteParams:[clone]});
		
		TweenLite.to(shape, 1, {translation:{y:-viewHeight/2 + 80 + 50}, delay: 0, ease:Expo.easeOut, onComplete:function(shape){
			
			TweenLite.to(shape, 1, {translation:{y:viewHeight/2 - 50 -4}, ease:Expo.easeIn, onComplete:function(shape){
				
				shape.visible = false;
				dropShape();

			}, onCompleteParams:[shape]});

		}, onCompleteParams:[shape]});
	}

	function onLeave(){
		_.each(shapes, function(shape, i) {
			TweenLite.killTweensOf(shape);
			shape.visible = false;
		});
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide10 = function(){

	var chars;
	var twoGroup;


	function init(){
		twoGroup = Main.getTwoGroup();

		chars = $('article.slide-10 .content h2').lettering().find('span');
	}

	function update(){
	}

	
	function onEnter(){

		twoGroup.children["box"].visible = false;

		Utils.bringInLetters(chars);

	}

	function onLeave(){
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide11 = function(){

	var chars;
	var two;
	var twoGroup;

	var world;
	var viewWidth;
	var viewHeight;
	var renderer;
	var machine;
	var circles;

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		circles = [];

		machine = two.makeGroup();
		twoGroup.add(machine);

		chars = $('article.slide-11 .content h2').lettering().find('span');

		viewWidth = Main.getViewWidth();
		viewHeight = Main.getViewHeight();

		Physics(setupWorld);
		
	}

	function update(){
		world.render();

		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
			if(circle.state.pos.get(1) > viewHeight/2){
				circle.fixed = true;
				var w = getMachineWidth() - 40;
				circle.state.pos.set(Utils.random(-w,w), -viewHeight/2);
				TweenLite.delayedCall(0.1, unFreezeBody, [circle]);
		 	}
	 	}
	}

	function unFreezeBody(body){
		body.fixed = false;
	}
	
	function onEnter(){
		twoGroup.children["box"].visible = false;
		machine.visible = true;
		for(var i = 0; i <  10 ; i++){
			TweenLite.delayedCall(i*1, addBodies);
		}
		Utils.bringInLetters(chars);
	}

	function onLeave(){
		removeBodies();
		machine.visible = false;
		TweenMax.killDelayedCallsTo(addBodies)
	}

	function removeBodies() {
		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
		 	Utils.removeTwoObject(circle.view);
		 	world.remove(circle);
	 	}
	
	}

	function addBodies() {
		var w = getMachineWidth()- 40;
		var circle = Physics.body('circle', {
			x: Utils.random(-w,w),
			y: -viewHeight/2,
			vx: 0.01,
			vy: 0.3,
			radius: Utils.random(6, 12)
		});
		world.add(circle);
		circles.push(circle)

	}

	function getMachineWidth() {
		return Math.min(200, viewWidth/2 - 40);
	}


	function buildMachine() {
		var restitution = 0.2;

		var w = getMachineWidth()
		var h = viewHeight - 150;

		var polygon = Physics.body('convex-polygon', {
			x: -w,
			y: 0,
			angle: 0 * Math.PI/180,
			vertices: Utils.rect(0,0,.0001,h),
			restitution: restitution,
			fixed: true
		});
		world.add(polygon);

		var polygon = Physics.body('convex-polygon', {
			x: w,
			y: 0,
			angle: 0 * Math.PI/180,
			vertices: Utils.rect(0,0,.0001,h),
			restitution: restitution,
			fixed: true
		});
		world.add(polygon);

		var amount = 8;

		h -= 60;

		for(var i=0; i < amount; i++){

			var x, angle;

			var length = w;
			var randRotation = 10;

			if(i%2){
				x = -w + length/2 - 10;
				angle = Utils.degreesToRadians(randRotation);
			}else{
				x = w - length/2 +10
				angle = Utils.degreesToRadians(-randRotation);
			}

			polygon = Physics.body('convex-polygon', {
				x: x,
				y: -h/2 + (i/(amount-1) * h),
				angle:angle,
				vertices: Utils.rect(0,0,length,.0001),
				restitution: restitution,
				fixed: true
			});

			world.add(polygon);

		}

	}

	function setupWorld(w) {

		world = w;

		renderer = Physics.renderer('two', {
			two: two,
			twoGroup: machine,
			width: viewWidth,
			height: viewHeight,
			styles: {
				'convex-polygon' : {
					stroke : '#666666',
					linewidth : 1,
					fill : 'rgba(0,0,0,0)'
				},
				'circle' : {
					stroke : '#666666',
					linewidth : 1,
					fill : 'rgba(0,0,0,0)'
				}
			}
		});
		// add the renderer
		world.add( renderer );
		
		// bounds of the window
		viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);


		world.add( Physics.behavior('body-collision-detection', { checkAll: true }) );

		// ensure objects bounce when edge collision is detected
		world.add( Physics.behavior('body-impulse-response') );

		// add some gravity
		world.add( Physics.behavior('constant-acceleration') );

		// subscribe to ticker to advance the simulation
		Physics.util.ticker.subscribe(function( time, dt ){
			world.step(time);
		});	

		$(window).on('resize', function(){

			viewWidth = $(window).width();
			viewHeight = $(window).height();
			renderer.options.width = viewWidth;
			renderer.options.height = viewHeight;

		}).trigger('resize');

		Physics.util.ticker.start();

		buildMachine();

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide12 = function(){

	var chars;
	var two;
	var twoGroup;

	var world;
	var viewWidth;
	var viewHeight;
	var renderer;
	var pinConstraints;

	var circles;

	var spokesA;
	var spokesB;


	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();

		circles = [];
		spokesA = [];
		spokesB = [];

		chars = $('article.slide-12 .content h2').lettering().find('span');

		machine = two.makeGroup();
		twoGroup.add(machine);

		viewWidth = Main.getViewWidth();
		viewHeight = Main.getViewHeight();

		Physics(setupWorld);
	}

	function update(){

		var spoke;

		for(var i=0; i < spokesA.length; i++){
			spoke = spokesA[i];
			spoke.state.angular.pos += 0.01;
		}

		for(var i=0; i < spokesB.length; i++){
			spoke = spokesB[i];
			spoke.state.angular.pos -= 0.01;
		}

		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
			if(circle.state.pos.get(1) > viewHeight/2){
				circle.fixed = true;
				var w = 90;
				circle.state.pos.set(Utils.random(-w,w), -viewHeight/2);
				TweenLite.delayedCall(0.1, unFreezeBody, [circle]);
		 	}
	 	}

		world.render();
	}

	function unFreezeBody(body){
		body.fixed = false;
	}

	
	function onEnter(){
		twoGroup.children["box"].visible = false;
		machine.visible = true;
		for(var i = 0; i < 6; i++){
			TweenLite.delayedCall(i*1, addBodies);
		}
		Utils.bringInLetters(chars);
	}

	function onLeave(){
		removeBodies();
		TweenMax.killDelayedCallsTo(addBodies)
		machine.visible = false;
	}

	function removeBodies() {

		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
		 	Utils.removeTwoObject(circle.view);
		 	world.remove(circle);
	 	}
	}

	function addBodies() {
		var w = 90;
		var circle = Physics.body('circle', {
			x: Utils.random(-w,w),
			y: -viewHeight/2,
			vx: 0,
			vy: 0.3,
			radius: Utils.random(6, 20)
		});
		world.add(circle);
		circles.push(circle);
	}


	function buildMachine() {	

		var restitution = 0.1;

		for(var i=0; i < 6; i++){
			var spoke = Physics.body('convex-polygon', {
				x: -90,
				y: -130,
				angle: (Math.PI*2)/6 *i,
				vertices: Utils.rect(0,0, 80, 0.001),
				restitution:restitution,
				fixed: true
			});
			world.add(spoke);
			spokesA.push(spoke);
		}

		for(var i=0; i < 6; i++){
			var spoke = Physics.body('convex-polygon', {
				x: 90,
				y: -130,
				angle: (Math.PI*2)/6 *i,
				vertices: Utils.rect(0,0, 80, 0.001),
				restitution:restitution,
				fixed: true
			});
			world.add(spoke);
			spokesB.push(spoke);
		}

		var board = Physics.body('convex-polygon', {
			x: 0,
			y: 178,
			angle: 0,
			vertices: Utils.rect(0,0,260,0.001),
			restitution:restitution
		});
		world.add(board);
		pinConstraints.add(board, board.state.pos);

		var base = Physics.body('convex-polygon', {
			x: 0,
			y: 200,
			angle: Utils.degreesToRadians(45),
			vertices: Utils.rect(0,0, 30, 30),
			fixed: true,
			restitution:restitution
		});
		world.add(base);


		var floor = Physics.body('convex-polygon', {
			x: 0,
			y: 220,
			angle: 0,
			vertices: Utils.rect(0,0, 300, 0.001),
			fixed: true,
			restitution:restitution,
			hidden: true
		});
		world.add(floor);
		world.render();
		Utils.removeTwoObject(floor.view);



		board = Physics.body('convex-polygon', {
			x: 0,
			y: 40,
			angle: 0,
			vertices: Utils.rect(0,0, 100, 0.001),
			restitution:restitution
		});
		world.add(board);
		pinConstraints.add(board, board.state.pos);

		base = Physics.body('circle', {
			x: 0,
			y: 40,
			radius: 10, 
			fixed: true,
			restitution:restitution
		});
		world.add(base);

		machine.visible = false
	}

	function setupWorld(w) {

		world = w;
		
		renderer = Physics.renderer('two', {
			two: two,
			twoGroup: machine,
			width: viewWidth,
			height: viewHeight,
			styles: {
				'convex-polygon' : {
					stroke : '#666666',
					linewidth : 1,
					fill : 'rgba(0,0,0,0)'
				},
				'circle' : {
					stroke : '#666666',
					linewidth : 1,
					fill : 'rgba(0,0,0,0)'
				}
			}
		});
		// add the renderer
		world.add( renderer );
		// render on each step
		//world.subscribe('step', loop);

		// bounds of the window
		viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);


		// mouseEvents = Physics.behavior('demo-mouse-events', { el: $('article.slide-14 .content')[0] });

		// world.add( mouseEvents );

		world.add( Physics.behavior('body-collision-detection', { checkAll: true }) );

		// ensure objects bounce when edge collision is detected
		world.add( Physics.behavior('body-impulse-response') );

		// add some gravity
		world.add( Physics.behavior('constant-acceleration') );

		// subscribe to ticker to advance the simulation
		Physics.util.ticker.subscribe(function( time, dt ){
			world.step( time );
		});

		// creat custom behavior to handle pin constraints
		// found @ http://stackoverflow.com/questions/20066434/physicsjs-how-to-create-a-body-which-rotates-about-a-fixed-point-when-struck
		Physics.behavior('pin-contraints', function(parent) {
			return {
				init: function(opts) {
					parent.init.call(this, opts);
					this.pins = [];
				},

				add: function(body, targetPos) {
					this.pins.push({
						body: body,
						target: Physics.vector(targetPos)
					});
				},

				behave: function(data) {
					var pins = this.pins, pin;

					for (var i = 0, l = pins.length; i < l; i++) {
						pin = pins[i];
						// move body to correct position
						pin.body.state.pos.clone(pin.target);
					}

				}
			};
		});

		pinConstraints = Physics.behavior('pin-contraints');

		world.add(pinConstraints);

		$(window).on('resize', function(){

			viewWidth = $(window).width();
			viewHeight = $(window).height();

			viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
			// edgeBounce.setAABB( viewportBounds );

			renderer.el.width = viewWidth;
			renderer.el.height = viewHeight;

			renderer.options.width = viewWidth;
			renderer.options.height = viewHeight;

		}).trigger('resize');

		Physics.util.ticker.start();

		buildMachine();

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide13 = function(){

	var chars;
	var twoGroup;


	function init(){
		twoGroup = Main.getTwoGroup();

		chars = $('article.slide-13 .content h2').lettering().find('span');
	}

	function update(){
	}

	
	function onEnter(){

		twoGroup.children["box"].visible = false;

		Utils.bringInLetters(chars);


	}

	function onLeave(){
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide14 = function(){

	var chars;
	var two;
	var twoGroup;

	var world;
	var viewWidth;
	var viewHeight;
	var renderer;

	var collection;

	var outline;
	var circles;

	var dividerTop;
	var dividerBottom;

	function init(){
		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();
		collection = two.makeGroup();
		twoGroup.add(collection);

		circles = [];

		chars = $('article.slide-14 .content h2').lettering().find('span');

		viewWidth = $(window).width();
		viewHeight = $(window).height();


		collection.visible = false;

		Physics(setupWorld);

	}

	function update(){

		var scratch = Physics.scratchpad()
		var v = scratch.vector()

		for(var i=0; i< world._bodies.length; i++){
			var body = world._bodies[i];

			var pos = Physics.vector();
			pos.set(0,0);

			v.clone(pos).vsub(body.state.pos).normalize().mult( 0.001 );

			body.accelerate(v);
		}

		scratch.done();

		world.render();

	}

	
	function onEnter(){
		twoGroup.children["box"].visible = false;

		collection.visible = true;

		Utils.bringInLetters(chars);

		dividerTop = Physics.body('convex-polygon', {
			x: 0,
			y: -viewHeight/4,
			angle: 0,
			vertices: Utils.rect(0,0,0.001, viewHeight/2),
			fixed: true,
			restitution:0.1
		});
		world.add(dividerTop);

		dividerBottom = Physics.body('convex-polygon', {
			x: 0,
			y: viewHeight/4,
			angle: 0,
			vertices: Utils.rect(0,0,0.001, viewHeight/2),
			fixed: true,
			restitution:0.1
		});
		world.add(dividerBottom);

		world.render();
		two.update();

		var dashedStroke = {"stroke-dasharray":"6, 8"}

		var dividerTopShape = dividerTop.view;
		$(dividerTopShape._renderer.elem).attr(dashedStroke);

		TweenLite.to(dividerTopShape, .5, {translation:{y:"-="+viewHeight/2}, scale:0, rotation:Utils.degreesToRadians(20), delay:4, ease:Power3.easeOut, onComplete:function(){
			Utils.removeTwoObject(dividerTopShape);
			world.remove(dividerTop);
		}})

		var dividerBottomShape = dividerBottom.view;
		$(dividerBottomShape._renderer.elem).attr(dashedStroke);

		TweenLite.to(dividerBottomShape, .5, {translation:{y:"+="+viewHeight/2}, scale:0, rotation:Utils.degreesToRadians(-20), delay:4, ease:Power3.easeOut, onComplete:function(){
			Utils.removeTwoObject(dividerBottomShape);
			world.remove(dividerBottom);
		}})





		for(var i = 0;  i < 12; i++){
			TweenLite.delayedCall(i*.30, addBodies, [true]);
		}

		for(var i = 0;  i < 12; i++){
			TweenLite.delayedCall(i*.30, addBodies, [false]);
		}

	}

	function onLeave(){
		removeBodies();
		collection.visible = false;
		TweenMax.killDelayedCallsTo(addBodies)
		removeBodies();
	}

	function removeBodies() {
		for(var i = 0; i < circles.length; i++){
		 	var circle = circles[i];
		 	Utils.removeTwoObject(circle.view);
		 	world.remove(circle);
	 	}
	
	}


	function addBodies(isLeft) {
	
		var speed = .2;

		var circle = Physics.body('circle', {
			x: isLeft ? -viewWidth/2 : viewWidth/2,
			y: 0,
			vx: isLeft ? speed :  -speed,
			vy: Utils.random(-speed, speed),
			radius: Utils.random(6, 30),
			restitution: 0
		});

		

		world.add(circle);
		circles.push(circle)

		if(!isLeft){
			world.render();
			two.update();
			var shape = circle.view;
			shape.noFill();
			shape.stroke = "rgba(199, 178, 153, .2)";
		}
	}


	function setupWorld(w) {

		world = w;

		renderer = Physics.renderer('two', {
			two: two,
			twoGroup: collection,
			width: viewWidth,
			height: viewHeight,
			styles: {
				'convex-polygon' : {
					stroke : '#c7b299',
					linewidth : 1,
					fill : 'rgba(0,0,0,0)'
				},
				'circle' : {
					stroke : 'rgba(0,0,0,0)',
					linewidth : 1,
					fill : 'rgba(199, 178, 153, .1)'
				}
			}
		});


		// add the renderer
		world.add( renderer );
		// render on each step
		//world.subscribe('step', loop);

		// bounds of the window
		viewportBounds = Physics.aabb(-viewWidth/2, -viewHeight/2, viewWidth/2, viewHeight/2);

		var edgeBounce = Physics.behavior('edge-collision-detection', {
			aabb: viewportBounds,
			restitution: 0.1,
			cof: 0.3
		});

		world.add(edgeBounce);	


		world.add( Physics.behavior('body-collision-detection', { checkAll: true }) );

		// ensure objects bounce when edge collision is detected
		world.add( Physics.behavior('body-impulse-response') );

		// add some gravity
	//	world.add( Physics.behavior('constant-acceleration') );

		// subscribe to ticker to advance the simulation
		Physics.util.ticker.subscribe(function( time, dt ){
			world.step( time );
		});	

		$(window).on('resize', function(){

			viewWidth = $(window).width();
			viewHeight = $(window).height();

			renderer.el.width = viewWidth;
			renderer.el.height = viewHeight;

			renderer.options.width = viewWidth;
			renderer.options.height = viewHeight;

			viewportBounds = Physics.aabb(-viewWidth/2, -viewHeight/2, viewWidth/2, viewHeight/2);
			edgeBounce.setAABB( viewportBounds );

		}).trigger('resize');

		Physics.util.ticker.start();

	

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}
}();


var Slide15 = function(){

	var chars;
	var twoGroup;


	function init(){
		twoGroup = Main.getTwoGroup();

		chars = $('article.slide-15 .content h2').lettering().find('span');
	}

	function update(){
	}

	
	function onEnter(){

		twoGroup.children["box"].visible = false;

		Utils.bringInLetters(chars);


	}

	function onLeave(){
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide16 = function(){

	var chars;
	var twoGroup;


	function init(){
		twoGroup = Main.getTwoGroup();

		chars = $('article.slide-16 .content h2').lettering().find('span');
	}

	function update(){
	}

	
	function onEnter(){

		twoGroup.children["box"].visible = false;

		Utils.bringInLetters(chars);


	}

	function onLeave(){
	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide17 = function(){

	var chars;
	var two;
	var twoGroup;
	var delaunay;
	var particles;
	var maxSpeed;
	var minSpeed;
	var shapes;
	var dots;

	function init(){
		maxSpeed = 2;
		minSpeed = .5;

		delaunay = new Delaunay(500, 500);

		chars = $('article.slide-17 .content h2').lettering().find('span');

		two = Main.getTwo();
		twoGroup = two.makeGroup();

		twoGroup.translation.set(-250, -250);
		Main.getTwoGroup().add(twoGroup);

	}

	function addParticle(x, y) {
		var p = new Particle(x, y);
		var l = Math.random() * (maxSpeed - minSpeed) + minSpeed;
		var a = Math.random() * Math.PI * 2;

		p.vx = l * Math.cos(a);
		p.vy = l * Math.sin(a);

		particles.push(p);
	}

	function update(){

		var w  = 500;
        var h  = 500;

		for (len = particles.length, i = 0; i < len; i++) {
			p = particles[i];

			p.x += p.vx;
			p.y += p.vy;

			if (p.x < 0) {
				p.x = 0;
				if (p.vx < 0) p.vx *= -1;
			}
			if (p.x > w) {
				p.x = w;
				if (p.vx > 0) p.vx *= -1;
			}
			if (p.y < 0) {
				p.y = 0;
				if (p.vy < 0) p.vy *= -1;
			}
			if (p.y > h) {
				p.y = h;
				if (p.vy > 0) p.vy *= -1;
			}

			var dot = dots[i];
			dot.translation.x = p.x;
			dot.translation.y = p.y;

		}

		delaunay.clear();

		var triangles = delaunay.multipleInsert(particles).getTriangles();

		
		for (len = triangles.length, i = 0; i < triangles.length; i++) {
			var t = triangles[i];
			id = t.id;

			p0 = t.nodes[0];
			p1 = t.nodes[1];
			p2 = t.nodes[2];

			var shape = shapes[i];

			if (id === null) {
				shape.visible = false;
				continue;
			}

			shape.visible = true;
		

			shape.vertices[0].x = p0.x;
			shape.vertices[0].y = p0.y;
			shape.vertices[1].x = p1.x;
			shape.vertices[1].y = p1.y;
			shape.vertices[2].x = p2.x;
			shape.vertices[2].y = p2.y;
		
		}

		//twoGroup.center();
	}

	
	function onEnter(){

		twoGroup.visible = true;
		Main.getTwoGroup().children["box"].visible = false;

		for(var id in twoGroup.children){
			var shape = twoGroup.children[id];
			Utils.removeTwoObject(shape);
		}


		particles = [];
		shapes = [];
		dots = [];
		
		var amount = 40;
		for(var i = 0; i < amount; i++){
			var x = 250 + Utils.random(-60, 60);
			var y = 250 + Utils.random(-60, 60);

			var dot =two.makeCircle(x,y, 2);
			dot.noStroke();
			twoGroup.add(dot);
			dots.push(dot);

			addParticle(x,y);
		}

		var triangles = delaunay.multipleInsert(particles).getTriangles();

		for (len = triangles.length, i = 0; i < len; i++) {
			var t = triangles[i];
			id = t.id;

			p0 = t.nodes[0];
			p1 = t.nodes[1];
			p2 = t.nodes[2];


			a0 = new Two.Anchor(p0.x,p0.y);
			a1 = new Two.Anchor(p1.x,p1.y);
			a2 = new Two.Anchor(p2.x,p2.y);


			var shape = new Two.Polygon([a0, a1, a2], true);
			shape.visible =false;
			if( i == 14 || i == 2  || i == 33) {
				shape.fill="#ffffff";
				shape.opacity =0.5;
			}else{
				shape.noFill();
			}
			
			shape.stroke = "#ffffff";
			shape.linewidth = .15;
			twoGroup.add(shape);
			shapes.push(shape);

		}



		Utils.bringInLetters(chars);


	}

	function onLeave(){

		twoGroup.visible = false;


	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave,
		getShapes:function(){ return shapes},
		getDots:function(){ return dots}
	}

}();


var Slide18 = function(){

	var two;
	var twoGroup;
	var chars;
	var dot;

	function init(){

		two = Main.getTwo();
		twoGroup = two.makeGroup();

		chars = $('article.slide-18 .content h2').lettering().find('span');

		dot = two.makeCircle(0, 0, 2);
		dot.visible = false;
		dot.noStroke();
		twoGroup.add(dot);


		Main.getTwoGroup().add(twoGroup);

		

	}

	function update(){

		
	}

	
	function onEnter(){

		chars.css({color:'#fff'});
		dot.scale = 1;
		dot.visible = false;

		var shapes = Slide17.getShapes() ;

		var particle;

		for(var i = 0; i < shapes.length; i++){

			particle = shapes[i];
			particle.visible = false;

			TweenLite.to(particle, Utils.random(.75, 1),  {translation: {x: "+=" + Utils.random(-600, 600), y: "+=" + Utils.random(-600, 600)}, scale: Utils.random(1, 3), ease:Back.easeInOut, onComplete:function(tween){

				var particle = tween.target;
				TweenLite.killTweensOf(particle);
				Utils.removeTwoObject(particle);

			}, onCompleteParams:['{self}'],  onStart:function(tween){

				tween.target.visible = true;

			}, onStartParams:['{self}']});

		}

		var dots = Slide17.getDots();

		for(var i = 0; i < dots.length; i++){

			particle = dots[i];

			TweenLite.to(particle, .5,  {translation: {x: 250, y: 250}, delay:0.1, ease:Power3.easeIn, onComplete:function(tween){

				var particle = tween.target;
				TweenLite.killTweensOf(particle);
				Utils.removeTwoObject(particle);

			}, onCompleteParams:['{self}'],  onStart:function(tween){

				tween.target.visible = true;

			}, onStartParams:['{self}']});
		}


		TweenLite.delayedCall(.15, function(){

			dot.visible = true;

			TweenLite.to(dot, 1,  {scale: 1000, delay:2, delay:.75, ease:Power3.easeOut});

			TweenLite.delayedCall(0.7, toggleTextColor);

		});


	}

	function toggleTextColor() {
		chars.css({"color" : "#212121"})
	}

	function onLeave(){

		dot.scale = 1;
		dot.visible = false;


		/*TweenLite.to(dot, .5,  {scale: 1, ease:Power3.easeOut, onComplete:function(){
			dot.visible = false;
		}});*/

	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide19 = function(){

	var two;
	var twoGroup;
	var chars;

	function init(){

		two = Main.getTwo();
		twoGroup = two.makeGroup();

		chars = $('article.slide-19 .content h2').lettering().find('span');


		Main.getTwoGroup().add(twoGroup);

	
	}

	function update(){

		
	}

	
	function onEnter(){
 
		var amount = 40;

		Utils.bringInLetters(chars);

		for(var i=0; i < amount; i++){

			var ang = (Math.PI * 2) /amount * i;
		
			var shape = two.makeRectangle(0,0,  200, 200);
			shape.rotation = 45 * Math.PI/180;
			shape.fill = "#212121";
			shape.noStroke();


			var radius = Utils.random(100, 500);

			shape.targetX = Math.cos(ang)*radius;
			shape.targetY =Math.sin(ang)*radius;

			shape.index = i;
			shape.speed = Utils.random(2, 4);
			shape.visible = false;
			shape.bezier = [{scale:Utils.random(1, 5)},{scale:0}]

			Utils.resetParticle(shape);
			twoGroup.add(shape);

		}


	}

	function onLeave(){

		for(var id in twoGroup.children){
			var particle = twoGroup.children[id];
			TweenLite.killTweensOf(particle);
			Utils.removeTwoObject(particle);
		}


	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Slide20 = function(){

	var two;
	var twoGroup;

	var words;
	var lastWordChange;
	var el;

	function init(){

		two = Main.getTwo();
		twoGroup = Main.getTwoGroup();

		words =[
			"design",
			"type",
			"fashion",
			"photography",
			"media",
			"product design",
			"social media",
			"people",
			"collaboration",
			"architecture",
			"texture",
			"interactions",
			"structure",
			"process",
			"humility",
			"teams",
			"technology",
			"programming",
			"growth",
			"history",
			"learnings",
			"failures",
			"constructs",
			"experimenting",
			"vulnerability",
			"research",
			"algorithms",
			"workshops",
			"quiet time",
			"distraction",
			"small data",
			"poundtags",
			"distraction",
			/*"Solving Problems",*/
			"Guacamole",
			"Code",
			"Diet Dr Pepper",
			"Making",
			"Bagel Mondays",
			"Theory",
			/*"Gold Status Travel",*/
			"Working Hard",
			"Being Nice",
			"Laughter",
			"Cameras",
			"Liquids",
			"The Cheat Sheet",
			"Summer Fridays",
			"Dogs",
			"Coffee",
			"Whoppers",
			"Instagram",
			"To Love"
		]

		chars = $('article.slide-20 .content h2 > span').lettering().find('span');

		el = $('article.slide-20 .content h2 em .border');

		lastWordChange = new Date();

	}

	function update(){
		var now  = new Date();
		if(now - lastWordChange > 170){
			changeWord();
		}
	}


	function changeWord(){
		lastWordChange = new Date();
		var word = words.shift();
		words.push(word);
		el.removeClass('border').html(word);
		//Utils.bringInLetters(chars);

		var letters = el.lettering().find('span');
		//letters = _.shuffle(letters);
		TweenLite.from(el, .16,  {rotationX:90, ease:Power4.easeInOut, delay: 0});
	
		//el.addClass('border');
	}
	
	function onEnter(){
		words = _.shuffle(words);
		twoGroup.children["box"].visible = false;
		//Utils.bringInLetters(chars);
		changeWord();
		
	}

	function onLeave(){


	}

	return {
		init:init,
		update:update,
		onEnter:onEnter,
		onLeave:onLeave
	}

}();


var Main = function (){

	var viewWidth;
	var viewHeight;
	var snappish;
	var two;
	var currentSlide
	var twoGroup;
	var slide;
	var slideAmount;
	var lastSlideChange;
	var hasTouchEvents;
	var waitForSlide;

	function init(){
		currentSlide = 0;
		slideAmount = 20;

		viewWidth = $(window).width();
		viewHeight = $(window).height();

		hasTouchEvents = typeof(window.ontouchstart) !== 'undefined';

		snappish = $('#slide-container').snappish();

		two = new Two({fullscreen:true, autostart: false, type: Two.Types.svg}).appendTo($('#two-container')[0]);

		twoGroup = two.makeGroup();

		two.add(twoGroup);

		lastSlideChange = new Date();

		addEvents();

		TweenLite.delayedCall(.25, initSlides);
	}

	function initSlide(slideNumber){
		var slide = window['Slide'+slideNumber];
		if(typeof(slide.initiated) === 'undefined'){
			slide.init();
			slide.initiated = true;
		}
	}

	function initSlides(){
		$('#slide-container, #two-container').css({'visibility': 'visible'});
		window.scrollTo(0, 0);
		initSlide(1);
		trackSlide(1);
	}

	function trackSlide(slideNumber){
		if(typeof(ga) !== 'undefined') {
			ga('send', 'event', 'slide', 'view', ''+slideNumber);
		}
	}

	function enterSlide(e, data){

		slide = window['Slide'+(data.fromSlideNum + 1)];

		if(slide){

			//if(!hasTouchEvents){
				var lastSlideElement = 	$('article.slide-'+(data.fromSlideNum + 1));
				TweenLite.set([lastSlideElement,lastSlideElement.find('.content')], {clearProps:'all'});
				lastSlideElement.css({'transform': "translate3d(0,100%,0)"}); 
				TweenLite.to(lastSlideElement.find('.content'), .3, {autoAlpha:0, scale: 1.3, ease:Sine.easeOut});

				var nextSlideElement = 	$('article.slide-'+(data.toSlideNum + 1));
				TweenLite.set([nextSlideElement,nextSlideElement.find('.content')], {clearProps:'all'});
			//}	

			slide.onLeave();
		} 

		slide = window['Slide'+(data.toSlideNum + 1)];

		if(slide) {

			if(typeof(slide.initiated) === 'undefined'){
				slide.init();
				slide.initiated = true;
			}

			slide.onEnter();
		}

		data.toSlide.addClass('active');

		$('body').attr("class", "how-we-make slide-"+(data.toSlideNum +1));

		lastSlideChange = new Date();

		hideScrollArrow();

		trackSlide(data.toSlideNum+1);

	}

	function leaveSlide(e, data){
		data.fromSlide.removeClass('active');
	}


	function update(frameCount, timeDelta){

		two.update();

		if(slide) slide.update();

		var now =  new Date();


		if(now - lastSlideChange >= 3000 && !$('.scroll-down-arrow').hasClass('visible')){
			// three seconds
			showScrollArrow();
		}
	}

	function resize(e){
		viewWidth = $(window).width();
		viewHeight = $(window).height();

		two.width = viewWidth;
		two.height = viewHeight;

		twoGroup.translation.set(viewWidth / 2, viewHeight / 2);
	}

	function showScrollArrow(){

		$('.scroll-down-arrow').addClass('visible');

		var scrollText = $('.scroll-down-arrow > span');
		if( scrollText.length > 0 && scrollText.css('visibility') === 'hidden'){
			if(!hasTouchEvents) scrollText.text(scrollText.text().replace("TAP","CLICK"));
			TweenLite.set(scrollText, {autoAlpha:1});
			var chars = scrollText.lettering().find('span');
			Utils.bringInLetters(chars);
			/*TweenLite.to(scrollText, 1, {autoAlpha:0, ease:Expo.easeOut, delay:3,  onComplete:function(tween){
				$(tween.target).remove();
			}, onCompleteParams:['{self}']})*/
		}

	}

	function hideScrollArrow(){
		var scrollText = $('.scroll-down-arrow > span');
		scrollText.remove();
		$('.scroll-down-arrow').removeClass('visible');
	}

	function scrollArrowClick(e){
		snappish.trigger('scrolldown.snappish');
		e.preventDefault();
	}

	function scrollArrowOver(e){
		showScrollArrow();
		e.preventDefault();
	}

	function scrollArrowOut(e){
		$('.scroll-down-arrow').removeClass('visible');
		e.preventDefault();
	}

	function checkHash(e){

		for(var i = 1; i <= slideAmount; i++){
			initSlide(i);
		}

		if (window.location.hash.indexOf('#slide-') > -1) {
			var index = parseInt( window.location.hash.split("#slide-").join(""), 10);
			snappish.trigger('scrollto.snappish', index - 1);
		}
	}

	function orientationChange(e){
		window.scrollTo(0, 0);
	}

	function addEvents(){
		TweenLite.ticker.addEventListener("tick", update);

		$('.scroll-down-arrow').on('click touchstart', scrollArrowClick);

		if(!hasTouchEvents){
			$('.scroll-down-arrow').on('mouseenter', scrollArrowOver);
			$('.scroll-down-arrow').on('mouseleave', scrollArrowOut);
		} 
		
		snappish.on('scrollbegin.snappish', enterSlide);
		snappish.on('scrollend.snappish', leaveSlide);

		$(window).on("hashchange", checkHash).trigger("hashchange");
		$(window).on("resize", resize).trigger("resize");
		window.onorientationchange = orientationChange;
	}

	return {
		init:init,
		getTwo: function(){ return two },
		getTwoGroup: function(){ return twoGroup },
		getSnappish: function(){ return snappish },
		getViewWidth: function(){ return viewWidth },
		getViewHeight: function(){ return viewHeight }
	}
}();

$(function(){
	Main.init();
});
