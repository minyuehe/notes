(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{438:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-search"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-search"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("RouterLink",{attrs:{to:"/miscellaneous/glossary.html#headers"}},[t._v("Headers")]),t._v("-based search plugin")],1)]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-search\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-search")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Note that this plugin has been included in "),a("strong",[t._v("default theme")]),t._v(", the search box you see now is powered by the plugin.")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("ol",[a("li",[t._v("Enable this plugin:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js or themePath/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("This plugin will automatically inject a webpack alias "),a("code",[t._v("@SearchBox")]),t._v(" pointing to the search component so that you can use it directly in your "),a("RouterLink",{attrs:{to:"/miscellaneous/glossary.html#layout"}},[t._v("layout")]),t._v(" component:")],1)]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo-layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchBox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SearchBox "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@SearchBox'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SearchBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"searchmaxsuggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions"}},[t._v("#")]),t._v(" searchMaxSuggestions")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: 5")])]),t._v(" "),a("p",[t._v("Set the maximum number of results for search.")]),t._v(" "),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" test")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("RegExp")]),t._v(" | "),a("code",[t._v("Array<RegExp>")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("null")])])]),t._v(" "),a("p",[t._v("Set up searchable paths with regular expressions. If no test expression is provided it will search on all paths. Considering you have this structure:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docs/\n├── .vuepress/\n│    └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n├── master/\n│    └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n├── "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("/\n│    └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│\n└── "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("/\n     └── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("You can set up searchable paths with "),a("code",[t._v("test")]),t._v(" as:")]),t._v(" "),a("ul",[a("li",[t._v("RegExp: "),a("code",[t._v("'/1\\.0/'")])]),t._v(" "),a("li",[t._v("Array of RegExp: "),a("code",[t._v("['/1\\.0/', '/2\\.0/']")])])]),t._v(" "),a("p",[t._v("Otherwise,  the default search will return duplicates, once you can have similar content between folders "),a("code",[t._v("/master/")]),t._v(", "),a("code",[t._v("/1.0/")]),t._v(" and "),a("code",[t._v("/2.0/")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"searchhotkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchhotkeys"}},[t._v("#")]),t._v(" searchHotkeys")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Array<string>")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("['s', '/']")])])]),t._v(" "),a("p",[t._v("Configure the hotkeys which when pressed will focus the search box. Set to an empty array to disable this feature.")]),t._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("h3",{attrs:{id:"tweak-the-default-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tweak-the-default-colors"}},[t._v("#")]),t._v(" Tweak the default colors.")]),t._v(" "),a("p",[t._v("Since the Search component leverages the built-in palette, you can tweak the default colors via "),a("code",[t._v("styles/palette.styl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// colors of the searchbox you see now:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#3eaf7c")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#2c3e50")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$borderColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eaecef")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$codeBgColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#282c34")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arrowBgColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#ccc")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);