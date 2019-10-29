import t from"eventemitter3";import i from"fps-throttler";import e from"lodash";import n from"eases";var r=function(t,i){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)};function o(t,i){function e(){this.constructor=t}r(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}var a=function(){return(a=Object.assign||function(t){for(var i,e=1,n=arguments.length;e<n;e++)for(var r in i=arguments[e])Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);return t}).apply(this,arguments)};function s(t,i){var e,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=i.call(t,a)}catch(t){o=[6,t],n=0}finally{e=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var c,p=function(){function i(i,e){var n=this;this.canvasElement=i,this.screenSize=e,this.events=new t,this.handleCanvasResize=function(){var t=n.canvasElement.getBoundingClientRect();n.canvasElement.width=t.width,n.canvasElement.height=t.height,n.events.emit("screenResized")},this.canvasContext=i.getContext("2d"),"undefined"!=typeof window&&window.addEventListener("resize",this.handleCanvasResize),this.handleCanvasResize()}return i.prototype.prepareScene=function(){this.canvasContext.fillStyle="#000",this.canvasContext.fillRect(0,0,this.screenSize.width,this.screenSize.height)},i.prototype.destroy=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.handleCanvasResize)},i}(),h=function(){function t(t){this.canvasElement=t}return Object.defineProperty(t.prototype,"width",{get:function(){return this.canvasElement.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.canvasElement.height},enumerable:!0,configurable:!0}),t}();!function(t){t.Particle="element--particle",t.Ripple="element--ripple"}(c||(c={}));var l=function(t,i,e){void 0===e&&(e=.1),this.x=t,this.y=i,this.speed=e,this.type=c.Particle,this.size=1,this.opacity=.5,this.maxOpacity=1,this.vX=0,this.vY=0},u=function(){function t(t,i){this.screenSize=t,this.particleBuilders=i,this.particles=[]}return t.prototype.create=function(t){void 0===t&&(t=1);for(var i=0;i<t;i++){for(var e=new l(Math.random()*this.screenSize.width,Math.random()*this.screenSize.height),n=0,r=this.particleBuilders;n<r.length;n++){r[n].build(e)}this.particles.push(e)}},t.prototype.destroy=function(t){var i=this.particles.indexOf(t);this.particles.splice(i,1)},t}(),f=function(t){this.canvasElement=t,this.canvasContext=t.getContext("2d")};function y(t,i){t.beginPath(),t.fillStyle=i.color,t.arc(i.x,i.y,i.radius<0?0:i.radius,0,2*Math.PI),t.fill()}function g(t,i){return Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2))}function m(t,i){var e=i.x>t.width/2?i.x:t.width-i.x,n=i.y>t.height/2?i.y:t.height-i.y;return Math.sqrt(Math.pow(e,2)+Math.pow(n,2))}var d=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return o(i,t),i.prototype.render=function(t){for(var i=0,e=t;i<e.length;i++){var n=e[i],r=this.canvasContext.globalAlpha;this.canvasContext.globalAlpha=n.opacity,y(this.canvasContext,{color:"#fff",x:n.x,y:n.y,radius:n.size/2}),this.canvasContext.globalAlpha=r}},i}(f),v=function(){function t(t){this.gravitySource=t}return t.prototype.build=function(t){var i=this.gravitySource.generatePointWithinRegion(),e=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2));t.vX=(t.x-i.x)/e,t.vY=(t.y-i.y)/e},t}(),x=function(){function t(t,i){void 0===i&&(i={}),this.propertyAnimation=t,this.options={spawnAnimationEasing:"cubicOut",spawnAnimationDuration:300,minSize:1,maxSize:4,minOpacity:.01,maxOpacity:.7,minSpeed:.001,maxSpeed:.1},Object.assign(this.options,i)}return t.prototype.build=function(t){var i=e.random(this.options.minOpacity,this.options.maxOpacity,!0),n=e.random(this.options.minSize,this.options.maxSize);t.speed=e.random(this.options.minSpeed,this.options.maxSpeed,!0),t.opacity=0,this.propertyAnimation.animate(t,{maxOpacity:[0,i],size:[0,n]},{functionName:this.options.spawnAnimationEasing,duration:this.options.spawnAnimationDuration})},t}(),w=function(){function t(t){this.gravityRegion=t}return Object.defineProperty(t.prototype,"region",{get:function(){return this.gravityRegion},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"center",{get:function(){return{x:this.region.x+this.region.width/2,y:this.region.y+this.region.height/2}},enumerable:!0,configurable:!0}),t.prototype.setRegion=function(t){this.gravityRegion=t},t.prototype.generatePointWithinRegion=function(){return{x:this.gravityRegion.x+Math.random()*this.gravityRegion.width,y:this.gravityRegion.y+Math.random()*this.gravityRegion.height}},t}(),S=function(t){return function(t,i){t.x-=t.vX*t.speed,t.y-=t.vY*t.speed}},b=function(t){return function(i,e){var n=t.bounds,r=t.particles;(i.x>n.width||i.x<0||i.y>n.height||i.y<0)&&(r.destroy(i),r.create(1))}},C=function(t){return function(i,e){var r=a({easing:"cubicIn"},t.particleConfig),o=t.gravitySource,s=t.screenSize,c=g(i,o.center),p=m(s,o.center),h=(p-c)/p,l=n[r.easing](h)*i.maxOpacity;i.opacity=l}},z=function(){function t(t,i){this.modifiers=t,this.particles=i}return t.prototype.update=function(t){for(var i=0,e=this.particles.particles;i<e.length;i++)for(var n=e[i],r=0,o=this.modifiers;r<o.length;r++){(0,o[r])(n,t)}},t}(),O={duration:200,functionName:"linear"},P=function(){function t(){this.animationStates=[]}return t.prototype.animate=function(t,i,e){var r=this;void 0===e&&(e={});var o=a({},O,e);if("function"!=typeof n[o.functionName])throw Error("Provided easing function name "+o.functionName+" is not recognized.");return new Promise(function(e){var n={element:t,startTime:Date.now(),params:i,options:o,finishResolver:e};r.animationStates.push(n)})},t.prototype.finishAnimation=function(t){var i=this.animationStates.find(function(i){return i.element===t});if(i){for(var e=0,n=Object.keys(i.params);e<n.length;e++){var r=n[e];t[r]=i.params[r][1]}var o=this.animationStates.indexOf(i);this.animationStates.splice(o,1),i.finishResolver(i.element)}},t.prototype.update=function(t){for(var i=0,e=this.animationStates;i<e.length;i++){var r=e[i],o=r.element,a=r.startTime,s=r.params,c=r.options;r.finishResolver;if(t>=a+c.duration)this.finishAnimation(o);else for(var p=0,h=Object.keys(s);p<h.length;p++){var l=h[p],u=s[l],f=u[0],y=u[1],g=(t-a)/c.duration,m=f+n[c.functionName](g)*(y-f);o[l]=m}}},t}(),R=function(){function t(t,i,e,n){this.particles=i,this.screenSize=e,this.propertyAnimation=n,this.startTime=0,this.rippleOrigin={x:0,y:0},this.animatedParticles=[],this.params={rippleAnimationDuration:1e3,rippleAnimationEasing:"cubicOut",particleAnimationDuration:75,particleAnimationEasing:"cubicOut",targetParticleOpacity:.8,targetParticleSize:4},Object.assign(this.params,t)}return t.prototype.trigger=function(t){this.startTime=Date.now(),this.rippleOrigin=t,this.animatedParticles.length=0;for(var i=0,e=this.particles.particles;i<e.length;i++){var n=e[i];this.propertyAnimation.finishAnimation(n)}},t.prototype.update=function(t){var i=this,e=this.params,r=e.rippleAnimationDuration,o=e.rippleAnimationEasing,a=e.particleAnimationDuration,c=e.particleAnimationEasing,p=e.targetParticleOpacity,h=e.targetParticleSize;if(this.startTime+r>t){var l=(t-this.startTime)/r,u=n[o](l)*m(this.screenSize,this.rippleOrigin);this.particles.particles.forEach(function(t){return e=i,n=void 0,o=function(){var i,e,n;return s(this,function(r){switch(r.label){case 0:return this.animatedParticles.indexOf(t)<0&&g(t,this.rippleOrigin)<=u?(i=t.opacity,e=t.size,n={duration:a,easing:c},this.animatedParticles.push(t),[4,this.propertyAnimation.animate(t,{opacity:[t.opacity,p],size:[t.size,h]},n)]):[3,2];case 1:r.sent(),this.propertyAnimation.animate(t,{opacity:[t.opacity,i],size:[t.size,e]},n),r.label=2;case 2:return[2]}})},new((r=void 0)||(r=Promise))(function(t,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(i){i.done?t(i.value):new r(function(t){t(i.value)}).then(a,s)}c((o=o.apply(e,n||[])).next())});var e,n,r,o})}},t}(),A=function(){function t(t,i,e){this.params=t,this.screenSize=i,this.gravitySource=e,this.type=c.Ripple,this.x=0,this.y=0,this.canvasElement=null,this.canvasContext=null,this.startTime=0,this.originPoint={x:0,y:0},this.nextColor="#fff",this.animationInProgress=!1,"undefined"!=typeof document&&(this.canvasElement=document.createElement("canvas"),this.updateSize(),this.canvasContext=this.canvasElement.getContext("2d"),this.currentColor=t.initialColor,this.fillTexture({color:this.currentColor}))}return Object.defineProperty(t.prototype,"texture",{get:function(){return this.canvasElement},enumerable:!0,configurable:!0}),t.prototype.updateSize=function(){this.canvasElement.width=this.screenSize.width,this.canvasElement.height=this.screenSize.height},t.prototype.trigger=function(t,i){this.startTime=Date.now(),this.animationInProgress=!0,this.currentColor=this.nextColor,this.nextColor=t,this.originPoint=i},t.prototype.update=function(t){var i=this.params,e=i.duration,r=i.easingFunc;if(this.animationInProgress)if(this.startTime+e>t){var o=(t-this.startTime)/e,a=n[r](o)*m(this.screenSize,this.originPoint);this.generateTexture(a)}else this.fillTexture({color:this.nextColor}),this.animationInProgress=!1},t.prototype.fillTexture=function(t){this.canvasContext.fillStyle=t.color,this.canvasContext.fillRect(0,0,this.screenSize.width,this.screenSize.height)},t.prototype.generateTexture=function(t){var i=this.params.waveLength;this.fillTexture({color:this.currentColor});var e=i/2,n=this.canvasContext.createRadialGradient(this.originPoint.x,this.originPoint.y,t-e<0?0:t-e,this.originPoint.x,this.originPoint.y,t+i);n.addColorStop(0,this.nextColor),n.addColorStop(.2,"#fff"),n.addColorStop(.8,"#fff"),n.addColorStop(1,this.currentColor),y(this.canvasContext,a({},this.originPoint,{radius:t+e,color:n}))},t}(),E=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return o(i,t),i.prototype.render=function(t){var i=this.canvasContext.globalCompositeOperation;this.canvasContext.globalCompositeOperation="multiply",this.canvasContext.drawImage(t.texture,t.x,t.y),this.canvasContext.globalCompositeOperation=i},i}(f),T={gravitySourceRect:{x:.75,y:.75,width:100,height:100},particleConfig:{minSize:1,maxSize:4,minOpacity:.1,maxOpacity:.9,minSpeed:.001,maxSpeed:.1,gravityOpacityFunc:"cubicOut"},rippleConfig:{rippleAnimationDuration:1e3,rippleAnimationEasing:"cubicOut",waveLength:300},initialColor:"hotpink",fpsLimit:30},M=function(){function n(n,r){var o=this;this.events=new t;var s=this.options=e.merge({},T,r),c=this.screenSize=new h(n),l=this.screen=new p(n,c);this.particleRenderer=new d(n),this.rippleRenderer=new E(n);var f=this.propertyAnimation=new P,y=this.gravitySource=new w(a({},s.gravitySourceRect,{x:s.gravitySourceRect.x*c.width,y:s.gravitySourceRect.x*c.height})),g=this.gravityRectParticleBuilder=new v(y),m=new x(f,s.particleConfig),O=this.particles=new u(c,[g,m]),M=S(),j=b({bounds:c,particles:O}),D=C({screenSize:c,gravitySource:y,particleConfig:r.particleConfig});this.particleUpdater=new z([M,j,D],O),this.rippleGenerator=new R(s.rippleConfig,O,c,f),this.rippleTexture=new A({duration:s.rippleConfig.rippleAnimationDuration,easingFunc:s.rippleConfig.rippleAnimationEasing,waveLength:s.rippleConfig.waveLength,initialColor:s.initialColor},c,y),this.fpsThrottler=new i(this.loop.bind(this),r.fpsLimit);var L,_=(void 0===(L=300)&&(L=100),function(t){clearTimeout(0),setTimeout(t,L)});l.events.on("screenResized",function(){_(o.reset.bind(o))}),this.fpsThrottler.start()}return n.prototype.createParticles=function(t){this.particles.create(t)},n.prototype.setGravitySource=function(t){this.gravitySource.setRegion(t);for(var i=0,e=this.particles.particles;i<e.length;i++){var n=e[i];this.gravityRectParticleBuilder.build(n)}},n.prototype.trigger=function(t,i){this.rippleGenerator.trigger(t),this.rippleTexture.trigger(i,t)},n.prototype.destroy=function(){this.fpsThrottler.stop(),this.screen.destroy()},n.prototype.reset=function(){this.rippleTexture.updateSize(),this.gravitySource.setRegion(a({},this.options.gravitySourceRect,{x:this.options.gravitySourceRect.x*this.screenSize.width,y:this.options.gravitySourceRect.y*this.screenSize.height}));for(var t=0,i=this.particles.particles;t<i.length;t++){var e=i[t];this.particles.destroy(e)}this.events.emit("reset")},n.prototype.loop=function(){var t=Date.now();this.screen.prepareScene(),this.particleUpdater.update(t),this.rippleTexture.update(t),this.rippleGenerator.update(t),this.propertyAnimation.update(t),this.particleRenderer.render(this.particles.particles),this.rippleRenderer.render(this.rippleTexture)},n}();export default M;
