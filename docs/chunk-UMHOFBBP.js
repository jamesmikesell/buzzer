import{A as Gt,B as Kt,C as Jt,D as Xt,E as Zt,F as Yt,G as ue,a as Dt,b as It,c as Ot,d as Nt,g as Rt,i as Lt,j as zt,k as Ft,l as Ht,m as jt,n as Oe,o as Vt,p as le,q as Ne,r as Bt,s as Re,t as Le,u as ze,v as Fe,w as qt,x as Wt,y as Ut,z as Qt}from"./chunk-2PYCG3QJ.js";import{f as At,g as Ie,h as Pt}from"./chunk-VKVKV5MI.js";import{$ as G,$b as j,Ab as Te,Bb as Ge,C as ke,Cb as vt,D as mt,Db as re,E as pe,Eb as Ct,H as pt,Hb as v,Ib as C,Jb as Y,Kb as N,Lb as wt,Mb as Ae,Nb as $,Ob as ee,Q as ht,S as ye,Sa as m,Sb as te,T as ut,Tb as St,U as ft,Ub as R,Vb as Mt,Wb as u,X as bt,Xa as qe,Y as _t,Yb as F,Z as Q,Za as gt,Zb as Et,_b as H,a as P,ab as Me,ac as V,ba as b,bb as kt,bc as se,cc as ne,dc as Tt,eb as O,ec as ce,f as W,fb as K,ga as E,gb as X,ha as T,ia as ve,ib as Ee,ja as xt,jb as yt,k as ge,kc as Pe,la as Ce,n as U,oa as D,p as ct,pa as we,pc as de,q as dt,qb as Z,rb as g,rc as I,sa as Se,sb as k,sc as De,tb as We,ub as Ue,vb as Qe,w as lt,wa as he,wb as A,xb as l,ya as J,yb as c,zb as B}from"./chunk-54WRSH5G.js";var xn=["mat-internal-form-field",""],gn=["*"],$t=(()=>{class o{labelPosition="after";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=O({type:o,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&R("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:xn,ngContentSelectors:gn,decls:1,vars:0,template:function(t,n){t&1&&(Y(),N(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return o})();var kn=["input"],yn=["label"],vn=["*"],Ke={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Cn=new G("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ke}),S=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(S||{}),Je=class{source;checked},Xe=(()=>{class o{_elementRef=b(J);_changeDetectorRef=b(de);_ngZone=b(we);_animationsDisabled=Ne();_options=b(Cn,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Je;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new D;indeterminateChange=new D;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=S.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(Oe).load(Re);let e=b(new Pe("tabindex"),{optional:!0});this._options=this._options||Ke,this.color=this._options.color||Ke.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(le).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(S.Indeterminate):this._transitionCheckState(this.checked?S.Checked:S.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Se(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?S.Checked:S.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case S.Init:if(t===S.Checked)return this._animationClasses.uncheckedToChecked;if(t==S.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case S.Unchecked:return t===S.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case S.Checked:return t===S.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case S.Indeterminate:return t===S.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=O({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&Ae(kn,5)(yn,5),t&2){let a;$(a=ee())&&(n._inputElement=a.first),$(a=ee())&&(n._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Ct("id",n.id),Z("tabindex",null)("aria-label",null)("aria-labelledby",null),Mt(n.color?"mat-"+n.color:"mat-accent"),R("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",I],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",I],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:De(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],indeterminate:[2,"indeterminate","indeterminate",I]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[se([{provide:Dt,useExisting:bt(()=>o),multi:!0},{provide:Ot,useExisting:o,multi:!0}]),he],ngContentSelectors:vn,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(Y(),l(0,"div",3),v("click",function(s){return n._preventBubblingFromLabel(s)}),l(1,"div",4,0)(3,"div",5),v("click",function(){return n._onTouchTargetClick()}),c(),l(4,"input",6,1),v("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(s){return n._onInteractionEvent(s)}),c(),B(6,"div",7),l(7,"div",8),ve(),l(8,"svg",9),B(9,"path",10),c(),xt(),B(10,"div",11),c(),B(11,"div",12),c(),l(12,"label",13,2),N(14),c()()),t&2){let a=te(2);A("labelPosition",n.labelPosition),m(4),R("mdc-checkbox--selected",n.checked),A("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Z("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),m(7),A("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),A("for",n.inputId)}},dependencies:[Bt,$t],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return o})(),en=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[Xe,Le]})}return o})();var fe=(()=>{class o{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||o)};static \u0275prov=_t({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var tn=new G("CdkAccordion");var nn=(()=>{class o{accordion=b(tn,{optional:!0,skipSelf:!0});_changeDetectorRef=b(de);_expansionDispatcher=b(fe);_openCloseAllSubscription=ge.EMPTY;closed=new D;opened=new D;destroyed=new D;expandedChange=new D;id=b(le).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Se(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||o)};static \u0275dir=X({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",I],disabled:[2,"disabled","disabled",I]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[se([{provide:tn,useValue:void 0}])]})}return o})(),on=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=Q({})}return o})();var be=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ze=class extends be{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,n,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=a||null}},_e=class extends be{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ye=class extends be{element;constructor(i){super(),this.element=i instanceof J?i.nativeElement:i}},$e=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ze)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof _e)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ye)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var an=(()=>{class o extends $e{_moduleRef=b(kt,{optional:!0});_document=b(Ce);_viewContainerRef=b(Me);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new D;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||o)};static \u0275dir=X({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ee]})}return o})(),rn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=Q({})}return o})();var En=["body"],Tn=["bodyWrapper"],An=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Pn=["mat-expansion-panel-header","*","mat-action-row"];function Dn(o,i){}var In=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],On=["mat-panel-title","mat-panel-description","*"];function Nn(o,i){o&1&&(Te(0,"span",1),ve(),Te(1,"svg",2),vt(2,"path",3),Ge()())}var sn=new G("MAT_ACCORDION"),cn=new G("MAT_EXPANSION_PANEL"),Rn=(()=>{class o{_template=b(qe);_expansionPanel=b(cn,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=X({type:o,selectors:[["ng-template","matExpansionPanelContent",""]]})}return o})(),dn=new G("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),et=(()=>{class o extends nn{_viewContainerRef=b(Me);_animationsDisabled=Ne();_document=b(Ce);_ngZone=b(we);_elementRef=b(J);_renderer=b(gt);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new D;afterCollapse=new D;_inputChanges=new U;accordion=b(sn,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=b(le).getId("mat-expansion-panel-header-");constructor(){super();let e=b(dn,{optional:!0});this._expansionDispatcher=b(fe),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ht(null),pe(()=>this.expanded&&!this._portal),pt(1)).subscribe(()=>{this._portal=new _e(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=O({type:o,selectors:[["mat-expansion-panel"]],contentQueries:function(t,n,a){if(t&1&&wt(a,Rn,5),t&2){let s;$(s=ee())&&(n._lazyContent=s.first)}},viewQuery:function(t,n){if(t&1&&Ae(En,5)(Tn,5),t&2){let a;$(a=ee())&&(n._body=a.first),$(a=ee())&&(n._bodyWrapper=a.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,n){t&2&&R("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[se([{provide:sn,useValue:void 0},{provide:cn,useExisting:o}]),Ee,he],ngContentSelectors:Pn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(Y(An),N(0),l(1,"div",2,0)(3,"div",3,1)(5,"div",4),N(6,1),yt(7,Dn,0,0,"ng-template",5),c(),N(8,2),c()()),t&2&&(m(),Z("inert",n.expanded?null:""),m(2),A("id",n.id),Z("aria-labelledby",n._headerId),m(4),A("cdkPortalOutlet",n._portal))},dependencies:[an],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return o})();var ln=(()=>{class o{panel=b(et,{host:!0});_element=b(J);_focusMonitor=b(jt);_changeDetectorRef=b(de);_parentChangeSubscription=ge.EMPTY;constructor(){b(Oe).load(Re);let e=this.panel,t=b(dn,{optional:!0}),n=b(new Pe("tabindex"),{optional:!0}),a=e.accordion?e.accordion._stateChanges.pipe(pe(s=>!!(s.hideToggle||s.togglePosition))):ct;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=mt(e.opened,e.closed,a,e._inputChanges.pipe(pe(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(pe(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Vt(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=O({type:o,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,n){t&1&&v("click",function(){return n._toggle()})("keydown",function(s){return n._keydown(s)}),t&2&&(Z("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),St("height",n._getHeaderHeight()),R("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)]},ngContentSelectors:On,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,n){t&1&&(Y(In),Te(0,"span",0),N(1),N(2,1),N(3,2),Ge(),g(4,Nn,3,0,"span",1)),t&2&&(R("mat-content-hide-toggle",!n._showToggle()),m(4),k(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var mn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=X({type:o,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return o})();var pn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[on,rn,Le]})}return o})();var h=(function(o){return o[o.PLAIN_TO_CLASS=0]="PLAIN_TO_CLASS",o[o.CLASS_TO_PLAIN=1]="CLASS_TO_PLAIN",o[o.CLASS_TO_CLASS=2]="CLASS_TO_CLASS",o})(h||{});var He=class{constructor(){this._typeMetadatas=new Map,this._transformMetadatas=new Map,this._exposeMetadatas=new Map,this._excludeMetadatas=new Map,this._ancestorsMap=new Map}addTypeMetadata(i){this._typeMetadatas.has(i.target)||this._typeMetadatas.set(i.target,new Map),this._typeMetadatas.get(i.target).set(i.propertyName,i)}addTransformMetadata(i){this._transformMetadatas.has(i.target)||this._transformMetadatas.set(i.target,new Map),this._transformMetadatas.get(i.target).has(i.propertyName)||this._transformMetadatas.get(i.target).set(i.propertyName,[]),this._transformMetadatas.get(i.target).get(i.propertyName).push(i)}addExposeMetadata(i){this._exposeMetadatas.has(i.target)||this._exposeMetadatas.set(i.target,new Map),this._exposeMetadatas.get(i.target).set(i.propertyName,i)}addExcludeMetadata(i){this._excludeMetadatas.has(i.target)||this._excludeMetadatas.set(i.target,new Map),this._excludeMetadatas.get(i.target).set(i.propertyName,i)}findTransformMetadatas(i,e,t){return this.findMetadatas(this._transformMetadatas,i,e).filter(n=>!n.options||n.options.toClassOnly===!0&&n.options.toPlainOnly===!0?!0:n.options.toClassOnly===!0?t===h.CLASS_TO_CLASS||t===h.PLAIN_TO_CLASS:n.options.toPlainOnly===!0?t===h.CLASS_TO_PLAIN:!0)}findExcludeMetadata(i,e){return this.findMetadata(this._excludeMetadatas,i,e)}findExposeMetadata(i,e){return this.findMetadata(this._exposeMetadatas,i,e)}findExposeMetadataByCustomName(i,e){return this.getExposedMetadatas(i).find(t=>t.options&&t.options.name===e)}findTypeMetadata(i,e){return this.findMetadata(this._typeMetadatas,i,e)}getStrategy(i){let e=this._excludeMetadatas.get(i),t=e&&e.get(void 0),n=this._exposeMetadatas.get(i),a=n&&n.get(void 0);return t&&a||!t&&!a?"none":t?"excludeAll":"exposeAll"}getExposedMetadatas(i){return this.getMetadata(this._exposeMetadatas,i)}getExcludedMetadatas(i){return this.getMetadata(this._excludeMetadatas,i)}getExposedProperties(i,e){return this.getExposedMetadatas(i).filter(t=>!t.options||t.options.toClassOnly===!0&&t.options.toPlainOnly===!0?!0:t.options.toClassOnly===!0?e===h.CLASS_TO_CLASS||e===h.PLAIN_TO_CLASS:t.options.toPlainOnly===!0?e===h.CLASS_TO_PLAIN:!0).map(t=>t.propertyName)}getExcludedProperties(i,e){return this.getExcludedMetadatas(i).filter(t=>!t.options||t.options.toClassOnly===!0&&t.options.toPlainOnly===!0?!0:t.options.toClassOnly===!0?e===h.CLASS_TO_CLASS||e===h.PLAIN_TO_CLASS:t.options.toPlainOnly===!0?e===h.CLASS_TO_PLAIN:!0).map(t=>t.propertyName)}clear(){this._typeMetadatas.clear(),this._exposeMetadatas.clear(),this._excludeMetadatas.clear(),this._ancestorsMap.clear()}getMetadata(i,e){let t=i.get(e),n;t&&(n=Array.from(t.values()).filter(s=>s.propertyName!==void 0));let a=[];for(let s of this.getAncestors(e)){let r=i.get(s);if(r){let d=Array.from(r.values()).filter(f=>f.propertyName!==void 0);a.push(...d)}}return a.concat(n||[])}findMetadata(i,e,t){let n=i.get(e);if(n){let a=n.get(t);if(a)return a}for(let a of this.getAncestors(e)){let s=i.get(a);if(s){let r=s.get(t);if(r)return r}}}findMetadatas(i,e,t){let n=i.get(e),a;n&&(a=n.get(t));let s=[];for(let r of this.getAncestors(e)){let d=i.get(r);d&&d.has(t)&&s.push(...d.get(t))}return s.slice().reverse().concat((a||[]).slice().reverse())}getAncestors(i){if(!i)return[];if(!this._ancestorsMap.has(i)){let e=[];for(let t=Object.getPrototypeOf(i.prototype.constructor);typeof t.prototype<"u";t=Object.getPrototypeOf(t.prototype.constructor))e.push(t);this._ancestorsMap.set(i,e)}return this._ancestorsMap.get(i)}};var w=new He;function hn(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof window<"u")return window;if(typeof self<"u")return self}function un(o){return o!==null&&typeof o=="object"&&typeof o.then=="function"}function zn(o){let i=new o;return!(i instanceof Set)&&!("push"in i)?[]:i}var q=class{constructor(i,e){this.transformationType=i,this.options=e,this.recursionStack=new Set}transform(i,e,t,n,a,s=0){if(Array.isArray(e)||e instanceof Set){let r=n&&this.transformationType===h.PLAIN_TO_CLASS?zn(n):[];return e.forEach((d,f)=>{let L=i?i[f]:void 0;if(!this.options.enableCircularCheck||!this.isCircular(d)){let y;if(typeof t!="function"&&t&&t.options&&t.options.discriminator&&t.options.discriminator.property&&t.options.discriminator.subTypes){if(this.transformationType===h.PLAIN_TO_CLASS){y=t.options.discriminator.subTypes.find(ae=>ae.name===d[t.options.discriminator.property]);let _={newObject:r,object:d,property:void 0},M=t.typeFunction(_);y===void 0?y=M:y=y.value,t.options.keepDiscriminatorProperty||delete d[t.options.discriminator.property]}this.transformationType===h.CLASS_TO_CLASS&&(y=d.constructor),this.transformationType===h.CLASS_TO_PLAIN&&(d[t.options.discriminator.property]=t.options.discriminator.subTypes.find(_=>_.value===d.constructor).name)}else y=t;let z=this.transform(L,d,y,void 0,d instanceof Map,s+1);r instanceof Set?r.add(z):r.push(z)}else this.transformationType===h.CLASS_TO_CLASS&&(r instanceof Set?r.add(d):r.push(d))}),r}else{if(t===String&&!a)return e==null?e:String(e);if(t===Number&&!a)return e==null?e:Number(e);if(t===Boolean&&!a)return e==null?e:!!e;if((t===Date||e instanceof Date)&&!a)return e instanceof Date?new Date(e.valueOf()):e==null?e:new Date(e);if(hn().Buffer&&(t===Buffer||e instanceof Buffer)&&!a)return e==null?e:Buffer.from(e);if(un(e)&&!a)return new Promise((r,d)=>{e.then(f=>r(this.transform(void 0,f,t,void 0,void 0,s+1)),d)});if(!a&&e!==null&&typeof e=="object"&&typeof e.then=="function")return e;if(typeof e=="object"&&e!==null){!t&&e.constructor!==Object&&(!Array.isArray(e)&&e.constructor===Array||(t=e.constructor)),!t&&i&&(t=i.constructor),this.options.enableCircularCheck&&this.recursionStack.add(e);let r=this.getKeys(t,e,a),d=i||{};!i&&(this.transformationType===h.PLAIN_TO_CLASS||this.transformationType===h.CLASS_TO_CLASS)&&(a?d=new Map:t?d=new t:d={});for(let f of r){if(f==="__proto__"||f==="constructor")continue;let L=f,y=f,z=f;if(!this.options.ignoreDecorators&&t){if(this.transformationType===h.PLAIN_TO_CLASS){let p=w.findExposeMetadataByCustomName(t,f);p&&(z=p.propertyName,y=p.propertyName)}else if(this.transformationType===h.CLASS_TO_PLAIN||this.transformationType===h.CLASS_TO_CLASS){let p=w.findExposeMetadata(t,f);p&&p.options&&p.options.name&&(y=p.options.name)}}let _;this.transformationType===h.PLAIN_TO_CLASS?_=e[L]:e instanceof Map?_=e.get(L):e[L]instanceof Function?_=e[L]():_=e[L];let M,ae=_ instanceof Map;if(t&&a)M=t;else if(t){let p=w.findTypeMetadata(t,z);if(p){let x={newObject:d,object:e,property:z},st=p.typeFunction?p.typeFunction(x):p.reflectedType;p.options&&p.options.discriminator&&p.options.discriminator.property&&p.options.discriminator.subTypes?e[L]instanceof Array?M=p:(this.transformationType===h.PLAIN_TO_CLASS&&(M=p.options.discriminator.subTypes.find(Be=>{if(_&&_ instanceof Object&&p.options.discriminator.property in _)return Be.name===_[p.options.discriminator.property]}),M===void 0?M=st:M=M.value,p.options.keepDiscriminatorProperty||_&&_ instanceof Object&&p.options.discriminator.property in _&&delete _[p.options.discriminator.property]),this.transformationType===h.CLASS_TO_CLASS&&(M=_.constructor),this.transformationType===h.CLASS_TO_PLAIN&&_&&(_[p.options.discriminator.property]=p.options.discriminator.subTypes.find(Be=>Be.value===_.constructor).name)):M=st,ae=ae||p.reflectedType===Map}else if(this.options.targetMaps)this.options.targetMaps.filter(x=>x.target===t&&!!x.properties[z]).forEach(x=>M=x.properties[z]);else if(this.options.enableImplicitConversion&&this.transformationType===h.PLAIN_TO_CLASS){let x=Reflect.getMetadata("design:type",t.prototype,z);x&&(M=x)}}let at=Array.isArray(e[L])?this.getReflectedType(t,z):void 0,rt=i?i[L]:void 0;if(d.constructor.prototype){let p=Object.getOwnPropertyDescriptor(d.constructor.prototype,y);if((this.transformationType===h.PLAIN_TO_CLASS||this.transformationType===h.CLASS_TO_CLASS)&&(p&&!p.set||d[y]instanceof Function))continue}if(!this.options.enableCircularCheck||!this.isCircular(_)){let p=this.transformationType===h.PLAIN_TO_CLASS?y:f,x;this.transformationType===h.CLASS_TO_PLAIN?(x=e[p],x=this.applyCustomTransformations(x,t,p,e,this.transformationType),x=e[p]===x?_:x,x=this.transform(rt,x,M,at,ae,s+1)):_===void 0&&this.options.exposeDefaultValues?x=d[y]:(x=this.transform(rt,_,M,at,ae,s+1),x=this.applyCustomTransformations(x,t,p,e,this.transformationType)),(x!==void 0||this.options.exposeUnsetFields)&&(d instanceof Map?d.set(y,x):d[y]=x)}else if(this.transformationType===h.CLASS_TO_CLASS){let p=_;p=this.applyCustomTransformations(p,t,f,e,this.transformationType),(p!==void 0||this.options.exposeUnsetFields)&&(d instanceof Map?d.set(y,p):d[y]=p)}}return this.options.enableCircularCheck&&this.recursionStack.delete(e),d}else return e}}applyCustomTransformations(i,e,t,n,a){let s=w.findTransformMetadatas(e,t,this.transformationType);return this.options.version!==void 0&&(s=s.filter(r=>r.options?this.checkVersion(r.options.since,r.options.until):!0)),this.options.groups&&this.options.groups.length?s=s.filter(r=>r.options?this.checkGroups(r.options.groups):!0):s=s.filter(r=>!r.options||!r.options.groups||!r.options.groups.length),s.forEach(r=>{i=r.transformFn({value:i,key:t,obj:n,type:a,options:this.options})}),i}isCircular(i){return this.recursionStack.has(i)}getReflectedType(i,e){if(!i)return;let t=w.findTypeMetadata(i,e);return t?t.reflectedType:void 0}getKeys(i,e,t){let n=w.getStrategy(i);n==="none"&&(n=this.options.strategy||"exposeAll");let a=[];if((n==="exposeAll"||t)&&(e instanceof Map?a=Array.from(e.keys()):a=Object.keys(e)),t)return a;if(this.options.ignoreDecorators&&this.options.excludeExtraneousValues&&i){let s=w.getExposedProperties(i,this.transformationType),r=w.getExcludedProperties(i,this.transformationType);a=[...s,...r]}if(!this.options.ignoreDecorators&&i){let s=w.getExposedProperties(i,this.transformationType);this.transformationType===h.PLAIN_TO_CLASS&&(s=s.map(d=>{let f=w.findExposeMetadata(i,d);return f&&f.options&&f.options.name?f.options.name:d})),this.options.excludeExtraneousValues?a=s:a=a.concat(s);let r=w.getExcludedProperties(i,this.transformationType);r.length>0&&(a=a.filter(d=>!r.includes(d))),this.options.version!==void 0&&(a=a.filter(d=>{let f=w.findExposeMetadata(i,d);return!f||!f.options?!0:this.checkVersion(f.options.since,f.options.until)})),this.options.groups&&this.options.groups.length?a=a.filter(d=>{let f=w.findExposeMetadata(i,d);return!f||!f.options?!0:this.checkGroups(f.options.groups)}):a=a.filter(d=>{let f=w.findExposeMetadata(i,d);return!f||!f.options||!f.options.groups||!f.options.groups.length})}return this.options.excludePrefixes&&this.options.excludePrefixes.length&&(a=a.filter(s=>this.options.excludePrefixes.every(r=>s.substr(0,r.length)!==r))),a=a.filter((s,r,d)=>d.indexOf(s)===r),a}checkVersion(i,e){let t=!0;return t&&i&&(t=this.options.version>=i),t&&e&&(t=this.options.version<e),t}checkGroups(i){return i?this.options.groups.some(e=>i.includes(e)):!0}};var oe={enableCircularCheck:!1,enableImplicitConversion:!1,excludeExtraneousValues:!1,excludePrefixes:void 0,exposeDefaultValues:!1,exposeUnsetFields:!0,groups:void 0,ignoreDecorators:!1,strategy:void 0,targetMaps:void 0,version:void 0};var je=class{instanceToPlain(i,e){return new q(h.CLASS_TO_PLAIN,P(P({},oe),e)).transform(void 0,i,void 0,void 0,void 0,void 0)}classToPlainFromExist(i,e,t){return new q(h.CLASS_TO_PLAIN,P(P({},oe),t)).transform(e,i,void 0,void 0,void 0,void 0)}plainToInstance(i,e,t){return new q(h.PLAIN_TO_CLASS,P(P({},oe),t)).transform(void 0,e,i,void 0,void 0,void 0)}plainToClassFromExist(i,e,t){return new q(h.PLAIN_TO_CLASS,P(P({},oe),t)).transform(i,e,void 0,void 0,void 0,void 0)}instanceToInstance(i,e){return new q(h.CLASS_TO_CLASS,P(P({},oe),e)).transform(void 0,i,void 0,void 0,void 0,void 0)}classToClassFromExist(i,e,t){return new q(h.CLASS_TO_CLASS,P(P({},oe),t)).transform(e,i,void 0,void 0,void 0,void 0)}serialize(i,e){return JSON.stringify(this.instanceToPlain(i,e))}deserialize(i,e,t){let n=JSON.parse(e);return this.plainToInstance(i,n,t)}deserializeArray(i,e,t){let n=JSON.parse(e);return this.plainToInstance(i,n,t)}};function fn(o,i={}){return function(e,t){let n=Reflect.getMetadata("design:type",e,t);w.addTypeMetadata({target:e.constructor,propertyName:t,reflectedType:n,typeFunction:o,options:i})}}var bn=new je;function tt(o,i){return bn.instanceToPlain(o,i)}function nt(o,i,e){return bn.plainToInstance(o,i,e)}var me=class{constructor(){this.initAlarm(),this.initBuzzer()}initAlarm(){this.alarm=new Audio,this.alarm.src="assets/alarm.mp3",this.alarm.load()}initBuzzer(){this.buzzer=new Audio,this.buzzer.src="assets/buzzer.mp3",this.buzzer.load()}playAlarm(){this.alarm.play()}playBuzzer(){this.buzzer.play()}};var _n=(()=>{class o{constructor(){this.timerSeconds=10,this.destroy=new U,this.audioService=new me}timerButtonClick(){this.secondLeft?this.cancelTimer():this.startTimer()}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}startTimer(){let e=Date.now()+this.timerSeconds*1e3;this.timerSubscription=ke(50).pipe(lt(()=>e-Date.now()),ut(t=>t>=0),ye(this.destroy),ft({complete:()=>{this.alarm(),this.cancelTimer()}})).subscribe(t=>{this.secondLeft||(this.secondLeft=new U),this.secondLeft.next(t/1e3)})}cancelTimer(){this.timerSubscription&&this.timerSubscription.unsubscribe(),this.secondLeft&&this.secondLeft.complete(),this.secondLeft=void 0}alarm(){return W(this,null,function*(){this.audioService.playAlarm()})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=O({type:o,selectors:[["app-timer"]],inputs:{timerSeconds:"timerSeconds"},decls:4,vars:7,consts:[["mat-raised-button","",1,"timer-button",3,"click","color"]],template:function(t,n){t&1&&(l(0,"button",0),v("click",function(){return n.timerButtonClick()}),u(1),ne(2,"async"),ne(3,"number"),c()),t&2&&(A("color",n.secondLeft?"warn":"primary"),m(),F(" ",n.secondLeft?"stop - "+ce(3,4,Tt(2,2,n.secondLeft),"1.1-1"):"start timer",`
`))},dependencies:[Fe,ze,At,Ie],styles:[".timer-button[_ngcontent-%COMP%]{width:120px}"]})}}return o})();function Hn(o,i){o&1&&(l(0,"mat-error"),u(1,"Required"),c())}function jn(o,i){o&1&&(l(0,"mat-error"),u(1,"Required"),c())}function Vn(o,i){o&1&&(l(0,"mat-error"),u(1,"Must be >0"),c())}function Bn(o,i){if(o&1){let e=re();l(0,"mat-form-field")(1,"mat-label"),u(2,"Timer Seconds"),c(),l(3,"input",12,3),V("ngModelChange",function(n){E(e);let a=C();return j(a.gameConfig.timerSeconds,n)||(a.gameConfig.timerSeconds=n),T(n)}),c(),g(5,jn,2,0,"mat-error"),g(6,Vn,2,0,"mat-error"),c()}if(o&2){let e=te(4),t=C();m(3),H("ngModel",t.gameConfig.timerSeconds),m(2),k(e.hasError("required")?5:-1),m(),k(e.hasError("min")?6:-1)}}function qn(o,i){o&1&&(l(0,"mat-error"),u(1,"Required"),c())}function Wn(o,i){o&1&&(l(0,"mat-error"),u(1,"Must be >0"),c())}function Un(o,i){o&1&&(l(0,"mat-error"),u(1,"Required"),c())}function Qn(o,i){o&1&&(l(0,"mat-error"),u(1,"Must be >0"),c())}function Gn(o,i){if(o&1){let e=re();l(0,"button",14),v("click",function(){E(e);let n=C(2);return T(n.connect())}),u(1," create room "),c()}}function Kn(o,i){if(o&1&&B(0,"app-timer",16),o&2){let e=C(3);A("timerSeconds",e.gameConfig.timerSeconds)}}function Jn(o,i){if(o&1){let e=re();l(0,"div",5)(1,"button",15),v("click",function(){E(e);let n=C(2);return T(n.enabled=!n.enabled)}),u(2),c(),g(3,Kn,1,1,"app-timer",16),c()}if(o&2){let e=C(2);m(),R("enable-buzzers-attention",!e.enabled&&e.gameConfig.highlightEnableBuzzers),A("color",e.enabled?"warn":"accent"),m(),F(" ",e.enabled?"disable buzzers":"enable buzzers"," "),m(),k(e.gameConfig.showTimer?3:-1)}}function Xn(o,i){if(o&1&&(g(0,Gn,2,0,"button",13),g(1,Jn,4,5,"div",5)),o&2){let e=C();k(e.client?-1:0),m(),k(e.client?1:-1)}}function Zn(o,i){if(o&1&&(l(0,"span"),u(1),c()),o&2){let e=C(2);m(),F("(",e.responses.length,")")}}function Yn(o,i){o&1&&(l(0,"div"),u(1,'Buzzers are disabled. Click "enable" to enable buzzers.'),c())}function $n(o,i){o&1&&(l(0,"div"),u(1,"... Waiting for players"),c())}function ei(o,i){if(o&1&&(l(0,"span"),u(1),ne(2,"number"),ne(3,"number"),c()),o&2){let e=C().$implicit;m(),Et(" [+",ce(2,2,e.responseTimeDelta/1e3,"1.1-1")," : -",ce(3,5,e.contestant.averageResponseTimeDelta()/1e3,"1.1-1"),"] - ")}}function ti(o,i){if(o&1){let e=re();l(0,"div",18)(1,"button",19),v("click",function(){let n=E(e).$implicit,a=C(2);return T(a.adjustPoints(n.contestant.name,-1))}),u(2," - "),c(),l(3,"div",20),u(4),g(5,ei,4,8,"span"),u(6),c(),l(7,"button",21),v("click",function(){let n=E(e).$implicit,a=C(2);return T(a.adjustPoints(n.contestant.name,1))}),u(8," + "),c()()}if(o&2){let e=i.$implicit,t=C(2);m(4),F(" (",e.contestant.score,") "),m(),k(t.gameConfig.handicapQuickPlayers?5:-1),m(),F(" ",e.contestant.name," ")}}function ni(o,i){if(o&1&&(l(0,"div")(1,"h2"),u(2," Responses "),g(3,Zn,2,1,"span"),c(),g(4,Yn,2,0,"div"),g(5,$n,2,0,"div"),l(6,"div",17),Ue(7,ti,9,3,"div",18,We),c()()),o&2){let e=C();m(3),k(e.responses.length?3:-1),m(),k(!e.enabled&&!e.responses.length?4:-1),m(),k(e.enabled&&!e.responses.length?5:-1),m(2),Qe(e.responses)}}function ii(o,i){if(o&1&&(l(0,"span"),u(1),ne(2,"number"),c()),o&2){let e=C().$implicit;m(),F(" -",ce(2,1,e.averageResponseTimeDelta()/1e3,"1.1-1"),"s handicap ")}}function oi(o,i){if(o&1&&(l(0,"li"),u(1),g(2,ii,3,4,"span"),u(3),c()),o&2){let e=i.$implicit,t=C(2);m(),F(" ",e.score," points "),m(),k(t.gameConfig.handicapQuickPlayers?2:-1),m(),F(" - ",e.name," ")}}function ai(o,i){if(o&1&&(l(0,"div",11)(1,"h2"),u(2,"Scores"),c(),l(3,"ol",22),Ue(4,oi,4,3,"li",null,We),c()()),o&2){let e=C();m(4),Qe(e.sortedScores)}}var ha=(()=>{class o{get roomName(){return this._roomName}set roomName(e){localStorage.setItem(this.ROOM_NAME,""+e),this._roomName=e}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.resetBuzzers()}constructor(){this.responses=[],this.sortedScores=[],this.contestants=new Map,this._enabled=!1,this.KEY_PERSISTED_SCORES="persisted_scores",this.KEY_PERSISTED_CONFIG="persisted_config",this.ROOM_NAME="roomName",this.encryption=new Yt,this.audioService=new me,this.destroy=new U,this._roomName=localStorage.getItem(this.ROOM_NAME),this.loadPersistedScores(),this.loadPersistedConfig(),ke(5e3).pipe(ye(this.destroy)).subscribe(()=>{this.persistConfig()})}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}connect(){return W(this,null,function*(){this.topicBuzz=yield ue.buzz(this.roomName),this.topicReset=yield ue.reset(this.roomName),this.topicScoreboard=yield ue.scoreboard(this.roomName),this.client=Zt.connect("wss://broker.hivemq.com:8884/mqtt"),this.client.on("connect",()=>W(this,null,function*(){this.client.subscribe(this.topicBuzz,e=>{}),yield this.publishScoreboard()})),this.client.on("message",(e,t)=>{e===this.topicBuzz&&this.handleBuzzerResponse(t.toString())})})}loadPersistedScores(){let e=localStorage.getItem(this.KEY_PERSISTED_SCORES)||"{}",t=nt(xe,JSON.parse(e));this.sortedScores=t.sortedScores,this.sortedScores.forEach(n=>this.contestants.set(n.name,n))}loadPersistedConfig(){let e=localStorage.getItem(this.KEY_PERSISTED_CONFIG)||"{}";this.gameConfig=nt(ot,JSON.parse(e))}handleBuzzerResponse(e){return W(this,null,function*(){let t=JSON.parse(yield this.encryption.decryptData(e,this.roomName)),n=this.contestants.get(t.playerName);n||(n=new Ve,n.name=t.playerName,this.contestants.set(t.playerName,n));let a=Date.now();if(this.firstAnswerTime||(this.firstAnswerTime=a),this.responses.filter(d=>d.contestant===n).length){console.log("Player already responded this round");return}this.gameConfig.audio&&this.audioService.playBuzzer();let r=a-this.firstAnswerTime;n.speedDelta.push(r),this.responses.push(new it(n,r)),this.gameConfig.handicapQuickPlayers&&this.responses.sort((d,f)=>d.handicapAdjustedResponseTime()-f.handicapAdjustedResponseTime())})}resetBuzzers(){return W(this,null,function*(){this.enabled&&(this.responses.length=0),this.firstAnswerTime=void 0;let e={enableBuzzers:this.enabled},t=yield this.encryption.encryptData(JSON.stringify(e),this.roomName);this.client.publish(this.topicReset,t)})}adjustPoints(e,t){let n=this.contestants.get(e),a=t>0?this.gameConfig.pointsPositive:this.gameConfig.pointsNegative;n.score+=t*a,n.hasScoreBeenAdjusted=!0,this.sortedScores.length=0,this.contestants.forEach(s=>{this.sortedScores.push(s)}),this.sortedScores.sort((s,r)=>r.score-s.score),this.persistScores(this.sortedScores),this.publishScoreboard(),this.gameConfig.hapticFeedback&&navigator.vibrate(150)}absolute(){this.gameConfig.pointsNegative=Math.abs(this.gameConfig.pointsNegative),this.gameConfig.pointsPositive=Math.abs(this.gameConfig.pointsPositive)}persistScores(e){let t=new xe;t.sortedScores=e;let n=tt(t),a=JSON.stringify(n);localStorage.setItem(this.KEY_PERSISTED_SCORES,a)}persistConfig(){let e=tt(this.gameConfig),t=JSON.stringify(e);localStorage.setItem(this.KEY_PERSISTED_CONFIG,t)}cleanRoomName(){this.roomName=ue.trimAndRemoveDoubleSpaces(this.roomName)}clearScores(){localStorage.setItem(this.KEY_PERSISTED_SCORES,"{}"),this.contestants.clear(),this.sortedScores.length=0,this.publishScoreboard()}publishScoreboard(){return W(this,null,function*(){if(!this.client||!this.topicScoreboard)return;let t={players:this.scoreboardPlayers()},n=yield this.encryption.encryptData(JSON.stringify(t),this.roomName);this.client.publish(this.topicScoreboard,n,{retain:!0})})}scoreboardPlayers(){let e=this.sortedScores.filter(a=>a.hasScoreBeenAdjusted),t,n=0;return e.map((a,s)=>(a.score!==t&&(n=s+1,t=a.score),{rank:n,name:a.name,score:a.score}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=O({type:o,selectors:[["app-host"]],decls:49,vars:18,consts:[["uxRoomName","ngModel"],["uxWrong","ngModel"],["uxRight","ngModel"],["uxTimerSeconds","ngModel"],[1,"page"],[1,"input-list"],["matInput","","required","",3,"ngModelChange","focusout","ngModel","disabled"],["matPrefix",""],[3,"ngModelChange","ngModel"],["matInput","","type","number","min","1","step","1","required","",3,"ngModelChange","blur","ngModel"],["mat-raised-button","","color","warn",3,"click"],[1,"scores"],["matInput","","type","number","min","1","step","1","required","",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click","color"],[3,"timerSeconds"],[1,"players"],[1,"player-container"],["mat-raised-button","","color","warn",1,"player-button",3,"click"],[1,"player-name"],["mat-raised-button","","color","accent",1,"player-button",3,"click"],["type","1"]],template:function(t,n){if(t&1){let a=re();l(0,"div",4)(1,"h1"),u(2,"Presenter Mode"),c(),l(3,"div",5)(4,"mat-form-field")(5,"mat-label"),u(6,"Room Name"),c(),l(7,"input",6,0),V("ngModelChange",function(r){return E(a),j(n.roomName,r)||(n.roomName=r),T(r)}),v("focusout",function(){return n.cleanRoomName()}),c(),g(9,Hn,2,0,"mat-error"),l(10,"mat-icon",7),u(11,"house"),c()()(),l(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),u(15," Settings "),c()(),l(16,"div",5)(17,"mat-checkbox",8),V("ngModelChange",function(r){return E(a),j(n.gameConfig.audio,r)||(n.gameConfig.audio=r),T(r)}),u(18,"Audio on Buzz-in"),c(),l(19,"mat-checkbox",8),V("ngModelChange",function(r){return E(a),j(n.gameConfig.handicapQuickPlayers,r)||(n.gameConfig.handicapQuickPlayers=r),T(r)}),u(20,"Handicap Quick Players"),c(),l(21,"mat-checkbox",8),V("ngModelChange",function(r){return E(a),j(n.gameConfig.hapticFeedback,r)||(n.gameConfig.hapticFeedback=r),T(r)}),u(22,"Haptic Feedback on Scoring"),c(),l(23,"mat-checkbox",8),V("ngModelChange",function(r){return E(a),j(n.gameConfig.showTimer,r)||(n.gameConfig.showTimer=r),T(r)}),u(24,"Show Timer"),c(),l(25,"mat-checkbox",8),V("ngModelChange",function(r){return E(a),j(n.gameConfig.highlightEnableBuzzers,r)||(n.gameConfig.highlightEnableBuzzers=r),T(r)}),u(26,"Highlight Enable Buzzers Button"),c(),g(27,Bn,7,3,"mat-form-field"),l(28,"mat-form-field")(29,"mat-label"),u(30,"Wrong Answer Subtracts Points"),c(),l(31,"input",9,1),V("ngModelChange",function(r){return E(a),j(n.gameConfig.pointsNegative,r)||(n.gameConfig.pointsNegative=r),T(r)}),v("blur",function(){return n.absolute()}),c(),g(33,qn,2,0,"mat-error"),g(34,Wn,2,0,"mat-error"),c(),l(35,"mat-form-field")(36,"mat-label"),u(37,"Correct Answer Adds Points"),c(),l(38,"input",9,2),V("ngModelChange",function(r){return E(a),j(n.gameConfig.pointsPositive,r)||(n.gameConfig.pointsPositive=r),T(r)}),v("blur",function(){return n.absolute()}),c(),g(40,Un,2,0,"mat-error"),g(41,Qn,2,0,"mat-error"),c(),l(42,"button",10),v("click",function(){return n.clearScores()}),u(43," \xA1\xA1\xA1 Clear and Reset All Scores !!! "),c()()(),B(44,"br"),g(45,Xn,2,2),B(46,"br"),g(47,ni,9,3,"div"),g(48,ai,6,0,"div",11),c()}if(t&2){let a=te(8),s=te(32),r=te(39);m(7),H("ngModel",n.roomName),A("disabled",!!n.client),m(2),k(a.hasError("required")?9:-1),m(8),H("ngModel",n.gameConfig.audio),m(2),H("ngModel",n.gameConfig.handicapQuickPlayers),m(2),H("ngModel",n.gameConfig.hapticFeedback),m(2),H("ngModel",n.gameConfig.showTimer),m(2),H("ngModel",n.gameConfig.highlightEnableBuzzers),m(2),k(n.gameConfig.showTimer?27:-1),m(4),H("ngModel",n.gameConfig.pointsNegative),m(2),k(s.hasError("required")?33:-1),m(),k(s.hasError("min")?34:-1),m(4),H("ngModel",n.gameConfig.pointsPositive),m(2),k(r.hasError("required")?40:-1),m(),k(r.hasError("min")?41:-1),m(4),k(n.roomName?45:-1),m(2),k(n.client?47:-1),m(),k(n.client?48:-1)}},dependencies:[Xt,Jt,Kt,Ut,Qt,Gt,Pt,Ht,It,Lt,Nt,Ft,zt,Rt,Fe,ze,en,Xe,pn,et,ln,mn,_n,Wt,qt,Ie],styles:[".page[_ngcontent-%COMP%]{margin:20px}.players[_ngcontent-%COMP%]{margin-top:-10px;max-width:350px}.players[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:20px}.player-container[_ngcontent-%COMP%]{display:flex}.player-button[_ngcontent-%COMP%]{flex:0}.player-name[_ngcontent-%COMP%]{flex:1;overflow:hidden;white-space:nowrap;margin-left:5px;margin-right:5px;align-content:center}.scores[_ngcontent-%COMP%]{margin-top:60px}.enable-buzzers-attention[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_enable-buzzers-pulse 1s ease-in-out infinite}@keyframes _ngcontent-%COMP%_enable-buzzers-pulse{0%,to{filter:brightness(1);transform:scale(1)}50%{filter:brightness(.6);transform:scale(1.06)}}"]})}}return o})(),Ve=class{constructor(){this.speedDelta=[],this.score=0,this.hasScoreBeenAdjusted=!1}averageResponseTimeDelta(){return this.speedDelta.length<3?0:this.speedDelta.reduce((i,e)=>i+e)/this.speedDelta.length}},it=class{constructor(i,e){this.contestant=i,this.responseTimeDelta=e}handicapAdjustedResponseTime(){return this.responseTimeDelta-this.contestant.averageResponseTimeDelta()}},ot=class{constructor(){this.audio=!0,this.handicapQuickPlayers=!1,this.hapticFeedback=!0,this.showTimer=!0,this.highlightEnableBuzzers=!1,this.timerSeconds=10,this.pointsNegative=1,this.pointsPositive=1}},xe=class{constructor(){this.sortedScores=[]}};dt([fn(()=>Ve)],xe.prototype,"sortedScores",void 0);export{ha as HostComponent};
