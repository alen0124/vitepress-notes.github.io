import{_ as s,c as n,o as a,a as l}from"./app.fa774493.js";const i=JSON.parse('{"title":"其他","description":"","frontmatter":{},"headers":[{"level":2,"title":"开启用户名和密码认证","slug":"开启用户名和密码认证","link":"#开启用户名和密码认证","children":[]},{"level":2,"title":"用户操作","slug":"用户操作","link":"#用户操作","children":[{"level":3,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]}]},{"level":2,"title":"基于node在服务端自动备份mongo数据库","slug":"基于node在服务端自动备份mongo数据库","link":"#基于node在服务端自动备份mongo数据库","children":[]}],"relativePath":"05.others/mongodb/07.其他.md"}'),p={name:"05.others/mongodb/07.其他.md"},o=l(`<h1 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他">¶</a></h1><h2 id="开启用户名和密码认证" tabindex="-1">开启用户名和密码认证 <a class="header-anchor" href="#开启用户名和密码认证">¶</a></h2><p><code>C:\\z_MongoDB\\bin\\mongod.cfg</code> 找到这个配置文件 放开 security表示开启权限验证 这个文件有严格的格式，注意空格（1053错误，无法重启） security： authorization: enabled 注意：authorization 冒号 后面有个空格 去掉或多加一个空格都会报错；</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#数据文件存放目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">dbpath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/mongodb/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#日志文件存放目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">logpath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/mongodb/logs/mongodb.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">logappend</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#端口</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27017</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#以守护程序的方式启用，即在后台运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fork</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#认证模式(true代表开启认证登录，false代表未开启认证登录)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">auth</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#远程连接</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bind_ip</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">0.0.0.0</span></span>
<span class="line"></span></code></pre></div><h2 id="用户操作" tabindex="-1">用户操作 <a class="header-anchor" href="#用户操作">¶</a></h2><h3 id="删除用户" tabindex="-1">删除用户 <a class="header-anchor" href="#删除用户">¶</a></h3><p><code>db.dropUser(&lt;user_name&gt;) 删除某个用户，接受字符串参数</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">db.dropUser(&#39;admin&#39;</span><span style="color:#A6ACCD;">)         删除当前库的指定用户</span></span>
<span class="line"><span style="color:#82AAFF;">db.dropAllUser</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">             删除当前库的所有用户</span></span>
<span class="line"></span></code></pre></div><h2 id="基于node在服务端自动备份mongo数据库" tabindex="-1">基于node在服务端自动备份mongo数据库 <a class="header-anchor" href="#基于node在服务端自动备份mongo数据库">¶</a></h2><ul><li><strong>1、定时任务</strong></li></ul><p>安装模块并使用</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node-schedule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schedule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node-schedule</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入定时任务模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scheduleCronstyle</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">schedule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scheduleJob</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10 * * * * *</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scheduleCronstyle:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//定时执行内容</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">scheduleCronstyle</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>通配符参数介绍</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">┬</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">┬</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">┬</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">┬</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">┬</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">┬</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">day</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">week</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> or </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> is Sun</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└─────</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">month</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└──────────</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">day</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">month</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└───────────────</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hour</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└────────────────────</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">59</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">└─────────────────────────</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">second</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> - </span><span style="color:#F78C6C;">59</span><span style="color:#A6ACCD;">, OPTIONAL</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>2、打开CMD执行命令</strong></li></ul><p>安装模块并使用</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">child_process</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> process </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child_process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入cmd模块</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cmd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ipconfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//cmd执行内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(cmd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">stdout</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">stderr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//失败</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stderr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lenght</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Stderr:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">stderr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">())</span><span style="color:#676E95;font-style:italic;">//标准错误输出</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#676E95;font-style:italic;">//成功</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>3、日志写入</strong></li></ul><p>安装模块并使用</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">moment</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入fs模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">文本信息(成功)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">flag</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// path指的是存储文件路径,如: C:\\\\backup\\\\[数据库名]\\\\.log  我这里存储在备份数据库目录下</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schedule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node-schedule</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入定时任务模块</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> process </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child_process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入cmd模块</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//引入fs模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//cmd执行内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//数据库地址及端口 如:127.0.0.1:27017</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//要备份的数据库名称 如:test</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//备份路径如:C:\\\\backup</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cmd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mongodump -h [数据库地址:端口] -d [要备份的数据库名称] -o [备份路径]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scheduleCronstyle</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">schedule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scheduleJob</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0 0 23 * * 7</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//每周日的23时整</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cmd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">stdout</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">stderr</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//在cmd中执行上方定义的命令</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//错误</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stderr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lenght</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Stderr:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">stderr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">())  </span><span style="color:#676E95;font-style:italic;">//标准性错误</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">//成功之后写入日志</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">文本信息(成功)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">flag</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;font-style:italic;">//path 为存储路径 如:C:\\\\backup\\\\[数据库名]\\\\.log  我这里存储在备份数据库目录下</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">scheduleCronstyle</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function t(c,r,y,D,F,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
