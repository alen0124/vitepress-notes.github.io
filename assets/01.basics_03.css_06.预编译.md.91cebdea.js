import{_ as s,c as a,o as n,a as l}from"./app.fa774493.js";const y=JSON.parse('{"title":"CSS 预编译","description":"","frontmatter":{},"headers":[{"level":2,"title":"Sass","slug":"sass","link":"#sass","children":[]},{"level":2,"title":"Less","slug":"less","link":"#less","children":[]},{"level":2,"title":"Stylus","slug":"stylus","link":"#stylus","children":[]}],"relativePath":"01.basics/03.css/06.预编译.md"}'),e={name:"01.basics/03.css/06.预编译.md"},p=l(`<h1 id="css-预编译" tabindex="-1">CSS 预编译 <a class="header-anchor" href="#css-预编译">¶</a></h1><p>CSS预编译，就是预先编译处理CSS。它扩展了CSS语言，增加了变量、Mixin、函数等编程的特性，使CSS更易维护和扩展。工作原理是提供便捷的语法和特性供开发者编写源代码，随后经过专门的编译工具将源码转化为CSS语法。</p><p>CSS主流的预处理器：Sass | Less | Stylus</p><h2 id="sass" tabindex="-1">Sass <a class="header-anchor" href="#sass">¶</a></h2><p><a href="http://sass.bootcss.com/" target="_blank" rel="noreferrer">Sass中文文档</a></p><p>2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS。</p><p>其实现在的Sass已经有了两套语法规则：一个依旧是用缩进作为分隔符来区分代码块的；另一套规则和CSS一样采用了大括号（｛｝）作为分隔符。后一种语法规则又名SCSS，在Sass3之后的版本都支持这种语法规则。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">**优点**</span></span>
<span class="line"><span style="color:#A6ACCD;">1)    用户多，更容易找到会用scss的开发，更容易找到scss的学习资源；</span></span>
<span class="line"><span style="color:#A6ACCD;">2)    可编程能力比较强，支持函数，列表，对象，判断，循环等；</span></span>
<span class="line"><span style="color:#A6ACCD;">3)    相比less有更多的功能；</span></span>
<span class="line"><span style="color:#A6ACCD;">4)    Bootstrap/Foundation等使用scss；</span></span>
<span class="line"><span style="color:#A6ACCD;">5)    丰富的sass库：Compass/Bourbon；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**缺点**</span></span>
<span class="line"><span style="color:#A6ACCD;">安装node-sass会经常失败或者报错，需要使用cnpm或者手工安装</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="less" tabindex="-1">Less <a class="header-anchor" href="#less">¶</a></h2><p><a href="https://less.bootcss.com/" target="_blank" rel="noreferrer">Less中文文档</a></p><p>2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手，在ruby社区之外支持者远超过SASS，其缺点是比起SASS来，可编程功能不够，不过优点是简单和兼容CSS，反过来也影响了SASS演变到了SCSS的时代，著名的Twitter Bootstrap就是采用LESS做底层语言的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">**优点**</span></span>
<span class="line"><span style="color:#A6ACCD;">可以在浏览器中运行，实现主题定制功能；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**缺点**</span></span>
<span class="line"><span style="color:#A6ACCD;">编程能力弱，不直接支持对象，循环，判断等；</span></span>
<span class="line"><span style="color:#A6ACCD;">@variable 变量命名和css的@import/media/keyframes等含义容易混淆；</span></span>
<span class="line"><span style="color:#A6ACCD;">mixin/extend的语法比较奇怪；</span></span>
<span class="line"><span style="color:#A6ACCD;">mixin的参数如果遇到多参数和列表参数值的时候容易混淆；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="stylus" tabindex="-1">Stylus <a class="header-anchor" href="#stylus">¶</a></h2><p><a href="https://www.zhangxinxu.com/jq/stylus/" target="_blank" rel="noreferrer">Stylus 中文文档</a></p><p>2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如SASS和LESS Stylus被称为是一种革命性的新语言，提供一个高效、动态、和使用表达方式来生成CSS，以供浏览器使用。Stylus同时支持缩进和CSS常规样式书写规则。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">**优点**</span></span>
<span class="line"><span style="color:#A6ACCD;">来自NodeJS社区，所以和NodeJS走得很近，与JavaScript联系非常紧密。还有专门JavaScript API：http://learnboost.github.io/stylus/docs/js.html</span></span>
<span class="line"><span style="color:#A6ACCD;">支持Ruby之类等等框架3.更多更强大的支持和功能</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**缺点**</span></span>
<span class="line"><span style="color:#A6ACCD;">人气不高和教程较少</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),t=[p];function o(c,r,i,S,C,A){return n(),a("div",null,t)}const h=s(e,[["render",o]]);export{y as __pageData,h as default};
