import{r as t,c as s,h as e,g as i}from"./p-8419ec55.js";import{b as o,s as n}from"./p-51cfb66d.js";import{T as r}from"./p-7751ffba.js";const h=class{constructor(e){t(this,e),this.getModelEvent=s(this,"getModelEvent",7),this.condition=null,this.conditionResult=!1,this.falseSlot=null,this.trueSlot=null}componentWillLoad(){if(!this._host.isConnected)return;this.modelChain=this.condition,this.modelChain=o(this.modelChain);let t=t=>{if(t.hasExpression(this.modelChain)){let s=()=>{this.condition=t.evaluateExpression(this.modelChain)};t.onChangeExpressionChain(this.modelChain,s),s()}else{let s=()=>{this.condition=t.getChainValue(this.modelChain)};t.onChange(this.modelChain,s),s()}this.falseSlot=null;const s=Array.from(this._host.children);let e=s.filter((t=>"condition-true"===t.getAttribute("slot")));this.trueSlot=e.map((t=>t.outerHTML)).join("");let i=s.filter((t=>"condition-false"===t.getAttribute("slot")));this.falseSlot=i.map((t=>t.outerHTML)).join(""),0===this.trueSlot.length&&0===this.falseSlot.length&&(this.trueSlot=s.map((t=>t.outerHTML)).join("")),this._host.innerHTML=""};return new Promise((s=>{this.getModelEvent.emit({callback:(e,i)=>{e&&console.log(e),t(i),this._updateConditionResult().then((()=>{s()}))}})}))}componentWillUpdate(){return this._updateConditionResult()}_updateConditionResult(){let t;return t=this.condition instanceof Promise?this.condition:Promise.resolve(this.condition),t.then((t=>(this.conditionResult=n(t),Promise.resolve())))}render(){return e("psk-hoc",{innerHTML:this.conditionResult?this.trueSlot:this.falseSlot})}get _host(){return i(this)}};!function(t,s,e,i){var o,n=arguments.length,r=n<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,s,e,i);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(s,e,r):o(s,e))||r);n>3&&r&&Object.defineProperty(s,e,r)}([r({description:"The property value must be the name of a model property or expression. Children are rendered only if the value of the condition is evaluated to true",isMandatory:!0,propertyType:"any"})],h.prototype,"condition",void 0);export{h as psk_condition}