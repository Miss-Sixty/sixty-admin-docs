(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[434],{6418:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-25b1f3d2",path:"/guide/global-resources.html",title:"全局资源",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"图标",slug:"图标",children:[]},{level:2,title:"图片",slug:"图片",children:[]},{level:2,title:"样式",slug:"样式",children:[]}],filePathRelative:"guide/global-resources.md",git:{updatedTime:1627266168e3,contributors:[{name:"xihe",email:"zhangxihe@bornmega.com",commits:1}]}}},3179:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>u});var n=s(6252);const t=(0,n.Wm)("h1",{id:"全局资源",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#全局资源","aria-hidden":"true"},"#"),(0,n.Uk)(" 全局资源")],-1),c=(0,n.Wm)("h2",{id:"图标",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#图标","aria-hidden":"true"},"#"),(0,n.Uk)(" 图标")],-1),l=(0,n.Uk)("本框架提供了 SVG 图标支持，方便使用。推荐去"),o={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("阿里巴巴矢量图标库"),r=(0,n.Uk)("下载高质量 SVG 图标。"),d=(0,n.uE)('<p>要使用 SVG 图标也很简单，首先将 svg 文件放到 <code>@/icons/svg</code> 目录下，然后在页面中就可以通过 <code>&lt;svg-icon /&gt;</code> 组件使用了，name 就是 svg 文件名，如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p>框架用到的图片资源都放在 <code>@/assets/imgs/</code> 目录下，可自行新建文件夹方便进行管理。</p><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>样式存放目录为 <code>@/styles/</code> ，因为 Vue 的文件特性，单页的样式都写在单个 <code>.vue</code> 文件里，所以我们建议该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>@/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>全局 SCSS 资源并不是全局样式，是 @mixin 、变量、@function 这些东西</p></div>',8),u={render:function(e,a){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[t,c,(0,n.Wm)("p",null,[l,(0,n.Wm)("a",o,[i,(0,n.Wm)(s)]),r]),d],64)}}}}]);