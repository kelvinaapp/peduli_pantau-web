"use strict";(self.webpackChunkpantau_dashboard=self.webpackChunkpantau_dashboard||[]).push([[1855],{1855:(U,E,d)=>{d.r(E),d.d(E,{ion_modal:()=>k});var w=d(8239),l=d(3150),g=d(7585),A=d(7330),u=d(7053),C=d(1269),T=d(4001),r=d(4086),D=d(7807),O=d(9461),v=d(2377);d(960);const L=(o,e)=>{const t=(0,r.c)().addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=(0,r.c)().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=(0,r.c)().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(e){const m=window.innerWidth<768,b="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,h=(0,r.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),f=document.body;if(m){const p=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c=`translateY(${b?"-10px":p}) scale(0.93)`;h.afterStyles({transform:c}).beforeAddWrite(()=>f.style.setProperty("background-color","black")).addElement(e).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:c,borderRadius:"10px 10px 0 0"}]),n.addAnimation(h)}else if(n.addAnimation(t),b){const i=`translateY(-10px) scale(${b?.93:1})`;h.afterStyles({transform:i}).addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:i}]);const s=(0,r.c)().afterStyles({transform:i}).addElement(e.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:i}]);n.addAnimation([h,s])}else a.fromTo("opacity","0","1")}else n.addAnimation(t);return n},M=(o,e,t=500)=>{const a=(0,r.c)().addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=(0,r.c)().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),m=(0,r.c)().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(n);if(e){const b=window.innerWidth<768,h="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,f=(0,r.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(i=>{1===i&&(e.style.setProperty("overflow",""),Array.from(p.querySelectorAll("ion-modal")).filter(c=>void 0!==c.presentingElement).length<=1&&p.style.setProperty("background-color",""))}),p=document.body;if(b){const i=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",P=`translateY(${h?"-10px":i}) scale(0.93)`;f.addElement(e).keyframes([{offset:0,filter:"contrast(0.85)",transform:P,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),m.addAnimation(f)}else if(m.addAnimation(a),h){const s=`translateY(-10px) scale(${h?.93:1})`;f.addElement(e.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:s},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const c=(0,r.c)().addElement(e.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:s},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);m.addAnimation([f,c])}else n.fromTo("opacity","1","0")}else m.addAnimation(a);return m},W=o=>{const e=(0,r.c)(),t=(0,r.c)(),a=(0,r.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),e.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([t,a])},Y=o=>{const e=(0,r.c)(),t=(0,r.c)(),a=(0,r.c)(),n=o.querySelector(".modal-wrapper");return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),e.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t,a])},k=class{constructor(o){(0,l.r)(this,o),this.didPresent=(0,l.e)(this,"ionModalDidPresent",7),this.willPresent=(0,l.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,l.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,u.B)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,a=N[e.type];if(t&&a){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}}}swipeToCloseChanged(o){this.gesture?this.gesture.enable(o):o&&this.initSwipeToClose()}connectedCallback(){(0,u.e)(this.el)}present(){var o=this;return(0,w.Z)(function*(){if(o.presented)return;const e=o.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},o.componentProps),{modal:o.el});o.usersElement=yield(0,A.a)(o.delegate,e,o.component,["ion-page"],t),yield(0,T.e)(o.usersElement),(0,l.c)(()=>o.el.classList.add("show-modal")),yield(0,u.d)(o,"modalEnter",L,W,o.presentingElement),o.swipeToClose&&o.initSwipeToClose()})()}initSwipeToClose(){var o=this;if("ios"!==(0,g.b)(this))return;const e=this.leaveAnimation||g.c.get("modalLeave",M),t=this.animation=e(this.el,this.presentingElement);this.gesture=((o,e,t)=>{const a=o.offsetHeight;let n=!1;const p=(0,O.createGesture)({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i=>{const s=i.event.target;return null===s||!s.closest||null===s.closest("ion-content, ion-footer")},onStart:()=>{e.progressStart(!0,n?1:0)},onMove:i=>{const s=(0,v.j)(1e-4,i.deltaY/a,.9999);e.progressStep(s)},onEnd:i=>{const s=i.velocityY,c=(0,v.j)(1e-4,i.deltaY/a,.9999),x=(i.deltaY+1e3*s)/a>=.5;let _=x?-.001:.001;x?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),_+=(0,D.g)([0,0],[.32,.72],[0,1],[1,1],c)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),_+=(0,D.g)([0,0],[1,0],[.68,.28],[1,1],c)[0]);const B=((o,e)=>(0,v.j)(400,o/Math.abs(1.1*e),500))(x?c*a:(1-c)*a,s);n=x,p.enable(!1),e.onFinish(()=>{x||p.enable(!0)}).progressEnd(x?1:0,_,B),x&&t()}});return p})(this.el,t,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,w.Z)(function*(){yield o.dismiss(void 0,"gesture"),o.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}dismiss(o,e){var t=this;return(0,w.Z)(function*(){if(t.gestureAnimationDismissing&&"gesture"!==e)return!1;const a=u.h.get(t)||[],n=yield(0,u.f)(t,o,e,"modalLeave",M,Y,t.presentingElement);return n&&(yield(0,A.d)(t.delegate,t.usersElement),t.animation&&t.animation.destroy(),a.forEach(m=>m.destroy())),t.animation=void 0,n})()}onDidDismiss(){return(0,u.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,u.g)(this.el,"ionModalWillDismiss")}render(){const{htmlAttributes:o}=this,e=(0,g.b)(this);return(0,l.h)(l.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},(0,C.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,l.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===e&&(0,l.h)("div",{class:"modal-shadow"}),(0,l.h)("div",{tabindex:"0"}),(0,l.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,l.h)("div",{tabindex:"0"}))}get el(){return(0,l.i)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},N={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};k.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);