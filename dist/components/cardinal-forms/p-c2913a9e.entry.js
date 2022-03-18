import{r as e,h as t,g as i}from"./p-a9ce478c.js";import{g as s}from"./p-34b2b1d5.js";import{B as o}from"./p-6f441abc.js";import{E as a,C as n,T as l}from"./p-bd7ff3ed.js";const r=a.PSK_BUTTON_EVT;class p extends CustomEvent{constructor(e,t,i){super(e,i),this.getEventType=function(){return r},this.data=t}}var d=function(e,t,i,s){var o,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const h=/[^A-Za-z0-9_-]/g,c=class{constructor(t){e(this,t),this.options=[],this.selectOptions=null,this.label=null,this.value=null,this.selectionType="single",this.placeholder=null,this.required=!1,this.disabled=!1,this.invalidValue=null}componentWillLoad(){"single"!==this.selectionType&&"multiple"!==this.selectionType&&(this.selectionType="single"),this.selectOptions&&this.__createOptions()}__onChangeHandler(e){e.preventDefault(),e.stopImmediatePropagation();let t=Array.from(e.target.selectedOptions).map((e=>e.value));const i="multiple"===this.selectionType?t:t[0];this.modelHandler&&this.modelHandler.updateModel("value",i),this.eventName&&(e.preventDefault(),e.stopImmediatePropagation(),this._host.dispatchEvent(new p(this.eventName,{value:i,payload:this.eventData},{bubbles:!0,composed:!0,cancelable:!0})))}__createOptions(){let e=this.selectOptions.split("|");this.options=e.map((e=>{let t,i=e.trim().split(","),o=i[0].trim();return t=1===i.length?s(o,h,""):i[1].trim(),{label:o,value:t}}))}render(){if(!this._host.isConnected)return null;const e=this.label&&s(this.label,h,"").toLowerCase(),i=-1===this.options.findIndex((e=>e.value===this.value));let o=null;this.placeholder&&(o=t("option",{disabled:!0,label:this.placeholder,value:"",selected:i}));let a=[];return this.options&&(a=this.options.map((e=>{const i=void 0!==e.value?e.value:e.label&&s(e.label,h,"");return t("option",{value:i,label:e.label,selected:!0===e.selected||this.value===i},e.label)}))),t("div",{class:"form-group"},t("psk-label",{for:e,label:this.label}),t("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:"multiple"===this.selectionType,onChange:this.__onChangeHandler.bind(this)},o,a))}get _host(){return i(this)}};d([n(),o()],c.prototype,"modelHandler",void 0),d([l({description:["This property is providing the list of the options available for selection.",'Each option is separated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).',"For each option, as a recommendation, you should add a value separated by comma.",'Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"',"If no value is provided for an option, the component will create one. It will take the option and will normalize it creating the value. Any character which does not comply to the rule, will be removed.",'The rule is that a label must match the following regular expression: "A-Za-z0-9_-"., which means that all the characters should be alpha-numeric and only two special characters are allowed (_ and -).'],isMandatory:!1,propertyType:"string"})],c.prototype,"selectOptions",void 0),d([l({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"label",void 0),d([l({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],c.prototype,"value",void 0),d([l({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:!1,propertyType:"string",defaultValue:"single"})],c.prototype,"selectionType",void 0),d([l({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],c.prototype,"placeholder",void 0),d([l({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],c.prototype,"required",void 0),d([l({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],c.prototype,"disabled",void 0),d([l({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],c.prototype,"invalidValue",void 0),d([l({description:"By defining this attribute, the component will be able to trigger an event.",isMandatory:!1,propertyType:"string"})],c.prototype,"eventName",void 0),d([l({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the eventName has a value. If not, it is ignored."],isMandatory:!1,propertyType:"any"})],c.prototype,"eventData",void 0);export{c as psk_select}