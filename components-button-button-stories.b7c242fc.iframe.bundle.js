"use strict";(globalThis.webpackChunk_wonderflow_react_components=globalThis.webpackChunk_wonderflow_react_components||[]).push([[4229],{"./src/components/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Grouped:()=>Grouped,WithCustomIcon:()=>WithCustomIcon,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Actions/Button",component:_button__WEBPACK_IMPORTED_MODULE_1__.z,args:{dimension:"regular",kind:"primary",children:"Click me",fullWidth:!1,disabled:!1,busy:!1,pressed:!1},argTypes:{onClick:{action:"clicked",table:{disable:!0}},dimension:{options:["small","regular","big"],control:{type:"radio"}},kind:{options:["primary","secondary","flat"],control:{type:"radio"}},iconPosition:{options:["left","right"],control:{type:"inline-radio"}}}};var CustomReactIcon=function(_ref){var props=_extends({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,viewBox:"0 0 256 256"},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M128 16a96.2 96.2 0 0 0-96 96c0 24 12.6 55.1 33.6 83s44.5 45 62.4 45 41.2-16.8 62.4-45 33.6-59 33.6-83a96.2 96.2 0 0 0-96-96ZM64 116v-4a12 12 0 0 1 12-12 36 36 0 0 1 36 36v4a12 12 0 0 1-12 12 36 36 0 0 1-36-36Zm80 84h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm48-84a36 36 0 0 1-36 36 12 12 0 0 1-12-12v-4a36 36 0 0 1 36-36 12 12 0 0 1 12 12Z"})}))};CustomReactIcon.displayName="CustomReactIcon";var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={disabled:!1};var WithIcon=Template.bind({});WithIcon.args={icon:"bookmark",iconPosition:"left",iconColor:"currentColor"};var WithCustomIcon=Template.bind({});WithCustomIcon.args={icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CustomReactIcon,{})};var GroupTemplate=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_1__.q,Object.assign({},args,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{pressed:!0,children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_1__.z,{disabled:!0,children:"Action"})]}))};GroupTemplate.displayName="GroupTemplate";var Grouped=GroupTemplate.bind({});Grouped.args={},Default.parameters=Object.assign({storySource:{source:"args => <Button {...args} />"}},Default.parameters),WithIcon.parameters=Object.assign({storySource:{source:"args => <Button {...args} />"}},WithIcon.parameters),WithCustomIcon.parameters=Object.assign({storySource:{source:"args => <Button {...args} />"}},WithCustomIcon.parameters),Grouped.parameters=Object.assign({storySource:{source:"args => (\n  <ButtonsGroup {...args}>\n    <Button pressed>Action</Button>\n    <Button>Action</Button>\n    <Button>Action</Button>\n    <Button>Action</Button>\n    <Button>Action</Button>\n    <Button>Action</Button>\n    <Button>Action</Button>\n    <Button disabled>Action</Button>\n  </ButtonsGroup>\n)"}},Grouped.parameters);var __namedExportsOrder=["Default","WithIcon","WithCustomIcon","Grouped"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/button/button.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);