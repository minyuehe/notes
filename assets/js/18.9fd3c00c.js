(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{415:function(e,t,s){"use strict";s.r(t);var n=s(54),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),s("h2",{attrs:{id:"why-can-t-palette-styl-and-index-styl-merge-into-one-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-palette-styl-and-index-styl-merge-into-one-api"}},[e._v("#")]),e._v(" Why can’t "),s("code",[e._v("palette.styl")]),e._v(" and "),s("code",[e._v("index.styl")]),e._v(" merge into one API?")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("palette.styl")]),e._v(" is responsible for global color settings. During compilation, theme color constants should be resolved by the preprocessor first and then be applied to the global context.")]),e._v(" "),s("p",[e._v("But for "),s("code",[e._v("index.styl")]),e._v(", its job is to override the default styles of application. According to the priority principle of CSS, the later style has a higher priority, so it should be generated at the end of the CSS file.")]),e._v(" "),s("p",[e._v("A simple diagram describing the Stylus compiler’s compilation order as follows:")]),e._v(" "),s("p",[e._v("@flowstart\nstage1=>operation: palette.styl\nstage2=>operation: default app styles\nstage3=>operation: index.styl")]),e._v(" "),s("p",[e._v("stage1->stage2->stage3\n@flowend")]),e._v(" "),s("br"),e._v(" "),s("h2",{attrs:{id:"what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[e._v("#")]),e._v(" What’s the differences between the "),s("code",[e._v("clientDynamicModules")]),e._v(" and "),s("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),s("p",[e._v("Let’s take a look back first, both "),s("code",[e._v("clientDynamicModules")]),e._v(" and "),s("code",[e._v("enhanceAppFiles")]),e._v(" can generate modules with dynamic JavaScript code during compile time.")]),e._v(" "),s("p",[e._v("The difference is that the files generated by "),s("code",[e._v("enhanceAppFiles")]),e._v(" will be loaded and applied automatically when the application is initialized on the client-side, while the files generated by "),s("code",[e._v("clientDynamicModules")]),e._v(" need to be imported as "),s("code",[e._v("@dynamic/xxx")]),e._v(" by the users themselves.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Import by entry file automatically.")]),e._v("\n  enhanceAppFiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    content"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("...")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Need to use via: import '@dynamic/constans-b'")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("clientDynamicModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      content"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("...")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("h2",{attrs:{id:"when-do-i-need-to-use-enhanceappfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-enhanceappfiles"}},[e._v("#")]),e._v(" When do I need to use "),s("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),s("ol",[s("li",[e._v("I want to execute some code on the client-side automatically.")]),e._v(" "),s("li",[e._v("I don’t need to reuse this module.")])]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-register-components"),s("OutboundLink")],1),e._v(": Automatically registering components on the client-side.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-google-analytics"),s("OutboundLink")],1),e._v(": Automatically set up Google Analytics.")])]),e._v(" "),s("h2",{attrs:{id:"when-do-i-need-to-use-clientdynamicmodules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-clientdynamicmodules"}},[e._v("#")]),e._v(" When do I need to use "),s("code",[e._v("clientDynamicModules")]),e._v("?")]),e._v(" "),s("ol",[s("li",[e._v("I want to generate a dynamic module that needs to be invoked at a specific time.")]),e._v(" "),s("li",[e._v("I want to use this module in different modules.")])]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-blog"),s("OutboundLink")],1),e._v(": Using compile-time metadata to generate some dynamic blog-related modules and initialize them on the client-side by using "),s("code",[e._v("enhanceAppFiles")]),e._v(".")])])])}),[],!1,null,null,null);t.default=a.exports}}]);