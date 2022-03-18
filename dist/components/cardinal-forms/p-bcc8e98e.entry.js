import{r as e,h as t,g as i}from"./p-a9ce478c.js";import"./p-34b2b1d5.js";import{B as s}from"./p-6f441abc.js";import{C as n,T as o}from"./p-bd7ff3ed.js";var a=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const l=class{constructor(t){e(this,t),this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null,this.__inputHandler=e=>{e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)}}render(){return this.htmlElement.isConnected?t("psk-input",{type:"email",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}}):null}get htmlElement(){return i(this)}};a([n(),s()],l.prototype,"modelHandler",void 0),a([o({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],l.prototype,"label",void 0),a([o({description:["Specifies the value of an psk-email-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],l.prototype,"value",void 0),a([o({description:["Specifies the name of a psk-email-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],l.prototype,"name",void 0),a([o({description:["Specifies a short hint that describes the expected value of an psk-email-input component"],isMandatory:!1,propertyType:"string"})],l.prototype,"placeholder",void 0),a([o({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],l.prototype,"required",void 0),a([o({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],l.prototype,"readOnly",void 0),a([o({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],l.prototype,"invalidValue",void 0);export{l as psk_email_input}