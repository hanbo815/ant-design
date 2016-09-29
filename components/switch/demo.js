webpackJsonp([34,197],{899:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(93),s(92)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/switch/demo/basic.md",id:"components-switch-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`switch to </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>checked<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >defaultChecked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("switch to "+n)}return c["default"].createElement(e["default"],{defaultChecked:!1,onChange:n})},style:"\n.ant-switch {\n  margin-bottom: 8px;\n  display: block;\n}\n<style>"}},900:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(6)),e=t(p),o=(s(93),s(92)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","Switch \u5931\u6548\u72b6\u6001\u3002"]],"en-US":[["p","Disabled state of ",["code","Switch"],"."]]},meta:{order:1,title:{"zh-CN":"\u4e0d\u53ef\u7528","en-US":"Disabled"},filename:"components/switch/demo/disabled.md",id:"components-switch-demo-disabled"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Toggle disabled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!0}},toggle:function(){this.setState({disabled:!this.state.disabled})},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{disabled:this.state.disabled}),u["default"].createElement(e["default"],{type:"primary",onClick:this.toggle},"Toggle disabled"))}});return u["default"].createElement(n,null)}}},901:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(93),s(92)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p",["code",'size="small"']," \u8868\u793a\u5c0f\u53f7\u5f00\u5173\u3002"]],"en-US":[["p",["code",'size="small"']," represents a small sized switch."]]},meta:{order:3,title:{"zh-CN":"\u4e24\u79cd\u5927\u5c0f","en-US":"Two sizes"},filename:"components/switch/demo/size.md",id:"components-switch-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],null),c["default"].createElement(e["default"],{size:"small"}))}}},902:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(16),s(13)),e=t(p),o=(s(93),s(92)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002"]],"en-US":[["p","With text and icon."]]},meta:{order:2,title:{"zh-CN":"\u6587\u5b57\u548c\u56fe\u6807","en-US":"Text & icon"},filename:"components/switch/demo/text.md",id:"components-switch-demo-text"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'\u5f00\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >unCheckedChildren</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'\u5173\'</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >unCheckedChildren</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>check<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> unCheckedChildren<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cross<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{checkedChildren:"\u5f00",unCheckedChildren:"\u5173"}),u["default"].createElement(c["default"],{checkedChildren:"1",unCheckedChildren:"0"}),u["default"].createElement(c["default"],{checkedChildren:u["default"].createElement(e["default"],{type:"check"}),unCheckedChildren:u["default"].createElement(e["default"],{type:"cross"})}))}}},1177:function(n,a,s){n.exports={basic:s(899),disabled:s(900),size:s(901),text:s(902)}}});