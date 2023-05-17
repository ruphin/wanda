"use strict";(globalThis.webpackChunk_wonderflow_react_components=globalThis.webpackChunk_wonderflow_react_components||[]).push([[3600],{"./src/components/container/container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsSection:()=>AsSection,Comparison:()=>Comparison,NoPadding:()=>NoPadding,WithPadding:()=>WithPadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/index.ts"),_container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/container/container.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layouts/Container",component:_container__WEBPACK_IMPORTED_MODULE_1__.W,argTypes:{padding:{options:[!0,!1],control:{type:"inline-radio"}},className:{table:{disable:!0}},dimension:{options:["extra-small","small","medium","large","extra-large","fixed","full"],control:{type:"select"}}},args:{dimension:"full",padding:!0}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,Object.assign({},args))};Template.displayName="Template";var TemplateComparison=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:24,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Extra Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"extra-small",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"small",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"medium",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Large"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"large",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Extra Large"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"extra-large",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Fixed"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"fixed",className:"ContainerEx"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_0__.Kq,{rowGap:8,hAlign:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.xv,{variant:"body-3",children:"Container Full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.W,{dimension:"full",className:"ContainerEx"})]})]})};TemplateComparison.displayName="TemplateComparison";var WithPadding=Template.bind({});WithPadding.args={dimension:"full",padding:!0,className:"ContainerEx"};var NoPadding=Template.bind({});NoPadding.args={padding:!1,className:"ContainerEx"};var AsSection=Template.bind({});AsSection.args={className:"ContainerEx"};var Comparison=TemplateComparison.bind({});WithPadding.parameters=Object.assign({storySource:{source:"args => <Container {...args} />"}},WithPadding.parameters),NoPadding.parameters=Object.assign({storySource:{source:"args => <Container {...args} />"}},NoPadding.parameters),AsSection.parameters=Object.assign({storySource:{source:"args => <Container {...args} />"}},AsSection.parameters),Comparison.parameters=Object.assign({storySource:{source:'() => (\n  <Stack rowGap={24}>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Extra Small</Text>\n      <Container dimension="extra-small" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Small</Text>\n      <Container dimension="small" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Medium</Text>\n      <Container dimension="medium" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Large</Text>\n      <Container dimension="large" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Extra Large</Text>\n      <Container dimension="extra-large" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Fixed</Text>\n      <Container dimension="fixed" className="ContainerEx" />\n    </Stack>\n    <Stack rowGap={8} hAlign="center">\n      <Text variant="body-3">Container Full</Text>\n      <Container dimension="full" className="ContainerEx" />\n    </Stack>\n  </Stack>\n)'}},Comparison.parameters);var __namedExportsOrder=["WithPadding","NoPadding","AsSection","Comparison"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/container.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/container/container.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);