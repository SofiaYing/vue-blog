(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{451:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Scope")])]),e._v(" "),t("p",[e._v("作用域：程序源代码中定义变量的区域，规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。")]),e._v(" "),t("p",[e._v("Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.")]),e._v(" "),t("h3",{attrs:{id:"why-is-scope-important"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-is-scope-important"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Why is Scope Important?")])]),e._v(" "),t("ol",[t("li",[e._v("代码安全性 The main benefit of scope is security. That is, the variables can be accessed from only a certain area of the program. Using scope, we can avoid unintended modifications to the variables from other parts of the program.")]),e._v(" "),t("li",[e._v("命名冲突 The scope also reduces the namespace collisions. That is, we can use the same variable names in different scopes.")])]),e._v(" "),t("h3",{attrs:{id:"types-of-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-scope"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Types of Scope")])]),e._v(" "),t("p",[e._v("There are three types of scope in JavaScript — "),t("strong",[e._v("1) Global Scope")]),e._v(", "),t("strong",[e._v("2) Function Scope")]),e._v(", and, "),t("strong",[e._v("3) Block Scope")]),e._v(".")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Global Scope 全局作用域")]),e._v("\nAny variable that’s not inside any function or block (a pair of curly braces), is inside the global scope. The variables in global scope can be accessed from anywhere in the program.")]),e._v(" "),t("li",[t("strong",[e._v("Local Scope or Function Scope 函数作用域")]),e._v("\nVariables declared inside a function is inside the local scope. They can only be accessed from within that function, that means they can’t be accessed from the outside code.")]),e._v(" "),t("li",[t("strong",[e._v("Block Scope 块级作用域")]),e._v("\nES6 introduced let and const variables, unlike var variables, they can be scoped to the nearest pair of curly braces 大括号. That means, they can’t be accessed from outside that pair of curly braces.")])]),e._v(" "),t("h2",{attrs:{id:"lexical-scope-or-static-scope-词法作用域-静态作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lexical-scope-or-static-scope-词法作用域-静态作用域"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Lexical Scope or Static Scope 词法作用域/静态作用域")])]),e._v(" "),t("ul",[t("li",[e._v("词法作用域/静态作用域：函数的作用域在函数定义的时候就决定了。")]),e._v(" "),t("li",[e._v("动态作用域：函数的作用域是在函数调用的时候才决定的。")])]),e._v(" "),t("p",[e._v("词法作用域：词法作用域是 JavaScript 闭包特性的重要保证。一般来说，在编程语言里我们常见的变量作用域就是词法作用域与动态作用域（Dynamic Scope），绝大部分的编程语言都是使用的词法作用域。词法作用域注重的是所谓的 Write-Time，即编程时的上下文，而动态作用域以及常见的 this 的用法，都是 Run-Time，即运行时上下文。词法作用域关注的是函数在何处被定义，而动态作用域关注的是函数在何处被调用。JavaScript 是典型的词法作用域的语言,编译阶段就能够知道全部标识符在哪里以及是如何声明的，所以词法作用域是静态的作用域，也就是词法作用域能够预测在执行代码的过程中如何查找标识符。")]),e._v(" "),t("p",[e._v("Lexical Scope (also known as Static Scope) literally means that scope is determined at the lexing time (generally referred to as compiling) rather than at runtime.")]),e._v(" "),t("p",[e._v("Using lexical scope we can determine the scope of the variable just by looking at the source code. Whereas in the case of dynamic scoping the scope can’t be determined until the code is executed.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1 in Lexical Scope")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 2 in Dynamic Scope")]),e._v("\n")])])]),t("h3",{attrs:{id:"lexical-environment-vs-lexical-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lexical-environment-vs-lexical-scope"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Lexical Environment vs. Lexical Scope")])]),e._v(" "),t("p",[e._v("Lexical scope is a scope that is determined at compile time and a lexical environment is a place where variables are stored during the program execution.")]),e._v(" "),t("p",[e._v("A new lexical environment is created for each lexical scope but only when the code in that scope is executed. The lexical environment also has a reference to its outer lexical environment")]),e._v(" "),t("ul",[t("li",[e._v("Lexical Environment")])]),e._v(" "),t("p",[e._v("A lexical environment is a structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object and array object] or primitive value).")]),e._v(" "),t("p",[e._v("Simply put, a lexical environment is a place where variables and references to the objects are stored.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("lexicalEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("obj")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ref"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" to the object"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("outer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("outer lexical environemt"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"scope-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope-chain"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Scope Chain")])]),e._v(" "),t("p",[e._v("当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。")]),e._v(" "),t("p",[e._v("When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.")]),e._v(" "),t("p",[e._v("If it’s still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.")]),e._v(" "),t("h3",{attrs:{id:"how-does-javascript-engine-perform-variable-loopups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-javascript-engine-perform-variable-loopups"}},[e._v("#")]),e._v(" "),t("strong",[e._v("How Does JavaScript Engine Perform Variable Loopups?")])]),e._v(" "),t("p",[e._v("Now that we know what scope, scope chain and lexical environment are, let’s now understand how JavaScript engine uses the lexical environment to determine scope and scope chain.")]),e._v(" "),t("blockquote",[t("p",[t("font",{attrs:{color:"#000"}},[e._v("perform")]),e._v(" "),t("em",[e._v("to do something, especially something difficult or useful")])],1)]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" greeting "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("greet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// greet")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Peter'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("greeting"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("greet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" greeting "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello World!'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("When the above script loads, a global lexical environment is created, which contains variables and functions defined inside the global scope.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("globalLexicalEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("greeting")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello'")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("greet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ref"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" to greet "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// greet函数被创建，保存作用域链到 内部属性. (greetScope.[[scope]] = globalContext.varibaleObject)")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("outer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Here outer lexical environment is set to null because there is no outer scope after global scope.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("After that, a call to the greet() function is encountered. So a new lexical environment is created for the greet() function.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 执行 greet 函数，创建 greet 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// greet 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 将活动对象压入 greet 作用域链顶端")]),e._v("\nfunctionLexicalEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Peter'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("outer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("globalLexicalEnvironment"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Here outer lexical environment is set to globalLexicalEnvironment because its outer scope is the global scope.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("After that, the JavaScript engine executes the console.log("),t("code",[e._v("${greeting} ${name}")]),e._v(") statement.")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("See More")]),e._v(" "),t("p",[e._v("The JavaScript engine tries to find the greeting and name variables inside the function’s lexical environment. It finds the name variable inside the current lexical environment but it won’t be able to find the greeting variable inside the current lexical environment.")]),e._v(" "),t("p",[e._v("So it looks inside the outer lexical environment (defined by the outer property i.e global lexical environment) and finds the greeting variable.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("A new lexical environment is created only for let and const declarations, not var declarations. var declarations are added to the current lexical environment (global or function lexical environment).")])])]),e._v(" "),t("p",[e._v("Next, the JavaScript engine executes at the code inside the block. So it creates a new lexical environment for that block.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("blockLexicalEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("greeting")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello World'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("outer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("globalLexicalEnvironment"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("So in a nutshell, a scope is an area where a variable is visible and accessible. Just like functions, scopes in JavaScript can be nested and the JavaScript engine traverses the scope chain to find the variables used in the program.")]),e._v(" "),t("p",[e._v("JavaScript uses lexical scope which means that scope of variables is determined at compile time. The JavaScript engine uses the lexical environment to store the variables during the program execution.")]),e._v(" "),t("blockquote"),e._v(" "),t("p",[t("strong",[e._v("补充：关于ES3的scopeChain是怎么产生的？")])]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Execution context, Scope chain and JavaScript internals"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript深入之作用域链"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Scope and Scope Chain in JavaScript"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);