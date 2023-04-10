import{_ as e,c as t,o as i,a as o}from"./app.fa774493.js";const u=JSON.parse('{"title":"Github 使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用图床","slug":"使用图床","link":"#使用图床","children":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"图床打造","slug":"图床打造","link":"#图床打造","children":[]}]},{"level":2,"title":"问题汇总","slug":"问题汇总","link":"#问题汇总","children":[{"level":3,"title":"1、关于*.github.io无法访问/访问被拒绝的问题","slug":"_1、关于-github-io无法访问-访问被拒绝的问题","link":"#_1、关于-github-io无法访问-访问被拒绝的问题","children":[]}]}],"relativePath":"04.technology/06.Github使用.md"}'),l={name:"04.technology/06.Github使用.md"},r=o('<h1 id="github-使用" tabindex="-1">Github 使用 <a class="header-anchor" href="#github-使用">¶</a></h1><h2 id="使用图床" tabindex="-1">使用图床 <a class="header-anchor" href="#使用图床">¶</a></h2><p>使用技术：GitHub + jsDelivr + TinyPNG + PicGo图床</p><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言">¶</a></h3><p><strong>Q：为什么要使用图床呢？什么是图床？</strong></p><p>A：写博客文章时，图片的上传和存放是一个问题，有的朋友可能会把图片放到和博客同一个仓库当中，使用相对路径来引用，这样后期维护起来会比较麻烦。还有的朋友会在不同的平台发布同一篇文章，这样一来每个平台都要上传图片，为了解决这些问题，比较推荐的做法是把图片统一上传到一个在线的第三方静态资源库中，我们把这个资源库称为图床，其返回一个图片的URL，使用<code>markdown+图片url</code>的方式写作文章，一次编写，到处使用~</p><p><strong>Q：图床的选择</strong></p><p>A：推荐使用GitHub作为图床，特点是免费、稳定，有一个小缺点是国内访问速度慢，不过没关系，可以使用<code>jsDelivr</code>免费CDN加速。</p><p><strong>Q：jsDelivr是什么？</strong></p><p>A：<code>jsDelivr</code>是国外的一家优秀的公共 CDN 服务提供商，该平台是首个「打通中国大陆与海外的免费CDN服务」，无须担心中国防火墙问题而影响使用。官网：<a href="http://www.jsdelivr.com/" target="_blank" rel="noreferrer">http://www.jsdelivr.com/</a></p><h3 id="图床打造" tabindex="-1">图床打造 <a class="header-anchor" href="#图床打造">¶</a></h3><ol><li>新建GitHub仓库，注意仓库要设置成<strong>公开</strong></li><li>参照 <a href="https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line" target="_blank" rel="noreferrer">官方文档</a> 生成一个token密钥</li><li>在 <a href="https://github.com/Molunerfinn/picgo/releases" target="_blank" rel="noreferrer">这里</a> 下载PicGo，安装完成后打开，<code>图床设置</code> 选 <code>GitHub图床</code>，并填写相应的信息 <ul><li>仓库名：前面新建的仓库，格式：<code>&lt;用户名&gt;/&lt;仓库名&gt;</code></li><li>分支名：填写主分支<code>master</code>即可</li><li>Token：前面生成的token密钥</li><li>存储路径：按你自己的需求填写</li><li>自定义域名：图片上传后，PicGo 会按照 <code>自定义域名+上传的图片名</code> 的方式生成访问链接，此处我们填写<code>jsDelivr</code>的CDN加速地址，格式：<code>https://cdn.jsdelivr.net/gh/&lt;用户名&gt;/&lt;仓库名&gt;</code></li></ul></li></ol><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103105720.png" alt=""></p><ol><li>使用<a href="https://tinypng.cn/" target="_blank" rel="noreferrer">https://tinypng.cn/</a>压缩你要上传的图片（如图片已经很小或你有更好的压缩工具可省略这一步）</li><li>在PigGo的<code>上传区</code>上传你的图片，到<code>相册</code>一键复制刚刚上传的图片URL，至此，你就可以在你的文章当中愉快的插入图片。</li></ol><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103121148.png" alt=""></p><h2 id="问题汇总" tabindex="-1">问题汇总 <a class="header-anchor" href="#问题汇总">¶</a></h2><h3 id="_1、关于-github-io无法访问-访问被拒绝的问题" tabindex="-1">1、关于*.github.io无法访问/访问被拒绝的问题 <a class="header-anchor" href="#_1、关于-github-io无法访问-访问被拒绝的问题">¶</a></h3><p>解决方法：使用 <code>208.67.222.222</code>（opendns）可以正常解析，将其设置为备用DNS即可。</p>',18),a=[r];function n(c,h,s,d,g,p){return i(),t("div",null,a)}const b=e(l,[["render",n]]);export{u as __pageData,b as default};
