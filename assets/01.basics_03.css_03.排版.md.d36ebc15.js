import{_ as s,c as a,o as l,a as n}from"./app.fa774493.js";const C=JSON.parse('{"title":"CSS 排版","description":"","frontmatter":{},"headers":[{"level":2,"title":"站点","slug":"站点","link":"#站点","children":[]},{"level":2,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[{"level":3,"title":"@media 媒体查询的使用","slug":"media-媒体查询的使用","link":"#media-媒体查询的使用","children":[]}]}],"relativePath":"01.basics/03.css/03.排版.md"}'),e={name:"01.basics/03.css/03.排版.md"},p=n(`<h1 id="css-排版" tabindex="-1">CSS 排版 <a class="header-anchor" href="#css-排版">¶</a></h1><ul><li>正常布局流</li><li>display属性</li><li><a href="/vitepress-notes.github.io/01.basics/03.css/04.弹性盒子Flex.html">弹性盒子（flex）</a></li><li><a href="/vitepress-notes.github.io/01.basics/03.css/05.网格Grid.html">网格（grid）</a></li><li>浮动（float）</li><li>定位技术（position）</li><li>表格布局（table）</li><li>多列布局（column-count、column-width）</li><li>响应式设计</li><li>媒体查询</li></ul><h2 id="站点" tabindex="-1">站点 <a class="header-anchor" href="#站点">¶</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout" target="_blank" rel="noreferrer">学习WEB开发|MDN</a></li></ul><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询">¶</a></h2><p>媒体查询可以让我们根据设备显示器的特性（如视口宽度、屏幕比例、设备方向：横向或纵向）为其设定CSS样式，媒体查询由媒体类型和一个或多个检测媒体特性的条件表达式组成。媒体查询中可用于检测的媒体特性有 width 、 height 和 color （等）。使用媒体查询，可以在不改变页面内容的情况下，为特定的一些输出设备定制显示效果。</p><p>使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。<code>@media</code> 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，<code>@media</code> 是非常有用的。当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。</p><p>CSS3多媒体查询根据设置自适应显示。媒体查询可用于检测很多事情，例如：</p><ul><li>设备的高度与宽度</li><li>朝向(智能手机横屏与竖屏)</li><li>分辨率</li><li><code>viweport</code>(视窗)的宽度与高度</li></ul><table><thead><tr><th><strong>值</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>all</td><td>用于所有多媒体类型设备</td></tr><tr><td>print</td><td>用于打印机</td></tr><tr><td>screen</td><td>用于电脑屏幕，平板，智能手机等。</td></tr><tr><td>speech</td><td>用于屏幕阅读器</td></tr></tbody></table><p>目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> not|only mediatype </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">expressions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* CSS 代码...;  */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="media-媒体查询的使用" tabindex="-1"><code>@media</code> 媒体查询的使用 <a class="header-anchor" href="#media-媒体查询的使用">¶</a></h3><h4 id="_1、要在html文档中添加以下代码-用来兼容移动设备的显示效果" tabindex="-1">1、要在html文档中添加以下代码，用来兼容移动设备的显示效果 <a class="header-anchor" href="#_1、要在html文档中添加以下代码-用来兼容移动设备的显示效果">¶</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>width=device-width:宽度等于当前设备的宽度</li><li>initial-scale=1：初始的缩放比例（默认为1）</li><li>maximum-scale=1：允许用户缩放到得最大比例（默认为1）</li><li>user-scalable=no：用户不能手动缩放</li></ul><h4 id="_2、在css文件中写响应式媒体查询" tabindex="-1">2、在CSS文件中写响应式媒体查询 <a class="header-anchor" href="#_2、在css文件中写响应式媒体查询">¶</a></h4><p>基本语法：<code>@media 媒体类型 and （媒体特征）{样式}</code></p><p>🌰举例1：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">480px</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>表示：当屏幕小于或等于480px时,页面中的背景颜色变成红色。</p><p>🌰举例2：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900px</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">：20px </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>表示：当屏幕大于或等于900px时,页面中的字体大小变成20px。</p><p>🌰举例3：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900px</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f5f5f5</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>表示：当屏幕在600px~900px之间时，body的背景色为#f5f5f5。</p>`,27),o=[p];function t(c,r,i,d,D,y){return l(),a("div",null,o)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};
