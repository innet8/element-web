(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1397:function(t,e,i){"use strict";i.r(e),i.d(e,"DefaultOptions",(function(){return h})),i.d(e,"default",(function(){return a}));var n=i(2),s=i.n(n),o=i(29);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const h={maxCount:600,speed:12};class a{constructor(t){s()(this,"options",void 0),s()(this,"context",null),s()(this,"particles",[]),s()(this,"lastAnimationTime",0),s()(this,"isRunning",!1),s()(this,"start",(async(t,e=3e3)=>{if(!t)return;this.context=t.getContext("2d"),this.particles=[];const i=this.options.maxCount;for(;this.particles.length<i;)this.particles.push(this.resetParticle({},t.width,t.height));this.isRunning=!0,requestAnimationFrame(this.renderLoop),e&&window.setTimeout(this.stop,e)})),s()(this,"stop",(async()=>{this.isRunning=!1})),s()(this,"resetParticle",((t,e,i)=>(t.x=Math.random()*e,t.y=Math.random()*-i,t.width=1.5*Math.random(),t.height=15*t.width+4,t.speed=Math.random()*this.options.speed*4/5+this.options.speed,t))),s()(this,"renderLoop",(()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{(Date.now()-this.lastAnimationTime>=15||!this.lastAnimationTime)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.lastAnimationTime=Date.now(),this.animateAndRenderRaindrops()),requestAnimationFrame(this.renderLoop)}})),s()(this,"animateAndRenderRaindrops",(()=>{if(!this.context||!this.context.canvas)return;const t=this.context.canvas.height;for(const e of Object(o.b)(this.particles)){e.y+=e.speed,this.context.save(),this.context.beginPath(),this.context.rect(e.x,e.y,e.width,e.height),this.context.fillStyle="#5dadec",this.context.fill(),this.context.closePath(),this.context.restore();const i=2*t;if(e.y>t+i){const t=this.particles.indexOf(e);this.particles.splice(t,1)}}})),this.options=c(c({},h),t)}}}}]);
//# sourceMappingURL=3.js.map