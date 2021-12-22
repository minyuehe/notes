(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{424:function(e,s,t){"use strict";t.r(s);var a=t(54),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local Development")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("When it comes to contributing to an open-source project, the biggest obstacle people encounter is trying to get a local environment setup so they can test their changes to make sure everything works as expected. As a result, we have written this guide to help you so you can begin contributing to the VuePress ecosystem!")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js v12.x"),t("OutboundLink")],1),e._v("*")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://classic.yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn v1.x"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("*Node.js v10 should work as well, but other versions have not been verified.")]),e._v(" "),t("h2",{attrs:{id:"setup-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-guide"}},[e._v("#")]),e._v(" Setup Guide")]),e._v(" "),t("p",[e._v("In this guide, we will be using the following names to refer to the two projects you need to be successful:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("VuePress Project")]),e._v(": This refers to your fork of the "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official VuePress repository"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("VuePress Sandbox")]),e._v(": This refers to a local instance of VuePress that will serve as the simulation for creating test scenarios to verify that changes in the VuePress Project work as expected")])]),e._v(" "),t("h3",{attrs:{id:"vuepress-project-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-project-setup"}},[e._v("#")]),e._v(" VuePress Project Setup")]),e._v(" "),t("ol",[t("li",[e._v("Fork the "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official VuePress repository"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Clone your fork onto your machine (e.g., "),t("code",[e._v("git clone ...")]),e._v(")")]),e._v(" "),t("li",[e._v("Open your cloned project in a new terminal window")]),e._v(" "),t("li",[e._v("Run the following commands:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install all dependencies in the project")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Compile shared-utils TypeScript package into JavaScript")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" tsc\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Verify there is no global installation of VuePress")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check global yarn packages")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If it exists, remove global VuePress package")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global remove vuepress\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Configure local VuePress Project to be the source of truth")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Registers local VuePress project")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" register-vuepress\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If successful, you should see a message")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# like `success Registered "vuepress"`')]),e._v("\n")])])]),t("p",[e._v("And with that, we’re ready to setup our VuePress Sandbox!")]),e._v(" "),t("h3",{attrs:{id:"vuepress-sandbox-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-sandbox-setup"}},[e._v("#")]),e._v(" VuePress Sandbox Setup")]),e._v(" "),t("ol",[t("li",[e._v("In a separate terminal, create a new npm project.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a new folder")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" vuepress-sandbox\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change directory to VuePress Sandbox")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vuepress-sandbox\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initalize a new npm project")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" init "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or npm init")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You will be prompted to fill out a form")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Since this is a sandbox environment,")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# feel free to just hit skip through it")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# by hitting enter until it completes setup!")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Create a basic VuePress Sandbox site")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create the folder where your site will live")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" docs\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initialize it with a simple markdown file")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'# My VuePress Sandbox Site'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docs/index.md\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Add a script to "),t("code",[e._v("package.json")]),e._v(" to start VuePress environment")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress-sandbox"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo \\"Error: no test specified\\" && exit 1"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ISC"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Verify that the script does not work")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run dev command")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" dev\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You should receive an error indicating")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# that VuePress cannot be found.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is a good thing!")]),e._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Link your VuePress Project to your VuePress Sandbox")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Link VuePress Project")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" vuepress\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You should see a message like")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# `success Using linked package for "vuepress"`')]),e._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Run your script again and it should work!")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start local dev environment")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" dev\n")])])]),t("p",[e._v("And with that, you should have a fully functioning local VuePress development environment!")]),e._v(" "),t("h3",{attrs:{id:"disable-local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-local-development"}},[e._v("#")]),e._v(" Disable Local Development")]),e._v(" "),t("p",[e._v("While it’s great that you can work with a local instance of VuePress, there will be times that you want to disable it so that you can refer to the published version instead. To do this, you will need to do the following:")]),e._v(" "),t("ol",[t("li",[e._v("Navigate to your VuePress Project in the terminal")]),e._v(" "),t("li",[e._v("Unregister your VuePress Project")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Unregister VuePress Project")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" unregister-vuepress\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Navigate to your VuePress Sandbox in the terminal")]),e._v(" "),t("li",[e._v("Remove dependency on local VuePress Project")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" unlink vuepress\n")])])]),t("p",[e._v("And that’s it! You can go back to regular development now!")]),e._v(" "),t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("yarn")]),e._v(" will use hoisting. What does it mean for you ?\n"),t("ul",[t("li",[e._v("It will regroup all dependencies in the workspace root and link all packages.")])])]),e._v(" "),t("li",[e._v("You have to take care to declare all dependencies inside subFolders package.json. When publish the lib if dependencies from a package is not declare it will just not work.")]),e._v(" "),t("li",[e._v("There is a special package you should have a look is @vuepress/shared-utils that are in TypeScript.\n"),t("ul",[t("li",[e._v("From here if you are making change inside this package you will have to run "),t("code",[e._v("yarn tsc")]),e._v(" all the time or run in separate shell "),t("code",[e._v("yarn run tsc -w")]),e._v(". This will re run tsc at any change from shared-utils")])])]),e._v(" "),t("li",[e._v("You will have interesting commands available:\n"),t("ul",[t("li",[t("code",[e._v("yarn packages:list")]),e._v(" will list you every packages present and their versions "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/list#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("More..."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("yarn packages:changed")]),e._v(" will tell you which package will be affect by the next lerna publish / version "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("More..."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("yarn packages:diff")]),e._v(" will show you all diff from last release "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("More..."),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);