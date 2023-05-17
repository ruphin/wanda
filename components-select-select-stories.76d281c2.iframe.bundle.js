"use strict";(globalThis.webpackChunk_wonderflow_react_components=globalThis.webpackChunk_wonderflow_react_components||[]).push([[9596],{"./src/components/select/select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiple:()=>Multiple,Single:()=>Single,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/select/select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Select",component:_select__WEBPACK_IMPORTED_MODULE_1__.P,argTypes:{onChange:{action:"changed",table:{disable:!0}},kind:{options:["single","multiple"],control:{type:"radio"}},dimension:{options:["small","regular","big"],control:{type:"radio"}},disabled:{options:[!0,!1],control:{type:"inline-radio"}}},args:{dimension:"regular",label:"",message:""}};var SingleTemplate=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_select__WEBPACK_IMPORTED_MODULE_1__.P,Object.assign({defaultValue:"placeholder"},args,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"placeholder",hidden:!0,disabled:!0,children:"Pick an option"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("optgroup",{label:"Option Group One",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"1",children:"This is a very long option selected"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"2",children:"Option 2"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("optgroup",{label:"Option Group Two",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"3",children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"4",children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:"5",children:"Option 3"})]})]}))};SingleTemplate.displayName="SingleTemplate";var MultipleTemplate=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_select__WEBPACK_IMPORTED_MODULE_1__.P,Object.assign({},args,{kind:"multiple",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("optgroup",{label:"Option Group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 3"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("optgroup",{label:"Option Group 2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 6"})]})]}))};MultipleTemplate.displayName="MultipleTemplate";var Single=SingleTemplate.bind({});Single.args={disabled:!1,kind:"single"};var Multiple=MultipleTemplate.bind({});Multiple.args={kind:"multiple"};var WithLabel=SingleTemplate.bind({});WithLabel.args={disabled:!1,kind:"single",label:"Label",message:"Sample hint text"},Single.parameters=Object.assign({storySource:{source:'args => (\n  <Select defaultValue="placeholder" {...args}>\n    <option value="placeholder" hidden disabled>Pick an option</option>\n    <optgroup label="Option Group One">\n      <option value="1">This is a very long option selected</option>\n      <option value="2">Option 2</option>\n    </optgroup>\n    <optgroup label="Option Group Two">\n      <option value="3">Option 1</option>\n      <option value="4">Option 2</option>\n      <option value="5">Option 3</option>\n    </optgroup>\n  </Select>\n)'}},Single.parameters),Multiple.parameters=Object.assign({storySource:{source:'args => (\n  <Select {...args} kind="multiple">\n    <optgroup label="Option Group">\n      <option>Option 1</option>\n      <option>Option 2</option>\n      <option>Option 3</option>\n    </optgroup>\n    <optgroup label="Option Group 2">\n      <option>Option 4</option>\n      <option>Option 5</option>\n      <option>Option 6</option>\n    </optgroup>\n  </Select>\n)'}},Multiple.parameters),WithLabel.parameters=Object.assign({storySource:{source:'args => (\n  <Select defaultValue="placeholder" {...args}>\n    <option value="placeholder" hidden disabled>Pick an option</option>\n    <optgroup label="Option Group One">\n      <option value="1">This is a very long option selected</option>\n      <option value="2">Option 2</option>\n    </optgroup>\n    <optgroup label="Option Group Two">\n      <option value="3">Option 1</option>\n      <option value="4">Option 2</option>\n      <option value="5">Option 3</option>\n    </optgroup>\n  </Select>\n)'}},WithLabel.parameters);var __namedExportsOrder=["Single","Multiple","WithLabel"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select/select.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/select/select.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);