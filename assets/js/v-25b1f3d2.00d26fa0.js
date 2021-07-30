(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[434],{6418:(e,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>n});const n={key:"v-25b1f3d2",path:"/guide/global-resources.html",title:"全局资源",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"图标",slug:"图标",children:[]},{level:2,title:"图片",slug:"图片",children:[]},{level:2,title:"样式",slug:"样式",children:[]}],filePathRelative:"guide/global-resources.md",git:{updatedTime:1627293786e3,contributors:[{name:"xihe",email:"zhangxihe@bornmega.com",commits:2}]}}},4153:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>w});var n=a(6252);const t=(0,n.Wm)("h1",{id:"全局资源",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#全局资源","aria-hidden":"true"},"#"),(0,n.Uk)(" 全局资源")],-1),l=(0,n.Wm)("h2",{id:"图标",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#图标","aria-hidden":"true"},"#"),(0,n.Uk)(" 图标")],-1),c=(0,n.Uk)("本项目提供了 SVG 图标的支持，推荐去"),r={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("阿里巴巴矢量图标库"),i=(0,n.Uk)("下载高质量 SVG 图标。"),d=(0,n.uE)('<p>要使用 SVG 图标也很简单，首先将 svg 文件放到 <code>@/icons/svg</code> 目录下，然后在页面中就可以通过 <code>&lt;svg-icon /&gt;</code> 组件使用了，name 就是 svg 文件名，如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>斑马<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),u=(0,n.Uk)("另外，如果系统安装了 "),p={href:"https://www.sketch.com/",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("sketch"),h=(0,n.Uk)(" ，那么项目也提供了自动导入 sketch 中的所有图标的"),k={href:"https://developer.sketch.com/cli/export-assets",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("方法"),b=(0,n.Uk)("。只需将 sketch 文件放入到 "),W=(0,n.Wm)("code",null,"@/assets/sketch",-1),v=(0,n.Uk)(" 中，执行命令："),f=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"yarn"),(0,n.Uk)(" export:svg\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),x=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"npm"),(0,n.Uk)(" run export:svg\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),U=(0,n.uE)('<p>就会在 <code>@icons/sketchSvg</code> 文件夹中自动生成所有的 sketch 图标。</p><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p>框架用到的图片资源都放在 <code>@/assets/imgs/</code> 目录下，可自行新建文件夹方便进行管理。</p><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>样式存放目录为 <code>@/styles/</code> ，因为 Vue 的文件特性，单页的样式都写在单个 <code>.vue</code> 文件里，所以我们建议该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>@/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>全局 SCSS 资源并不是全局样式，是 @mixin 、变量、@function 这些东西</p></div>',7),w={render:function(e,s){const a=(0,n.up)("OutboundLink"),w=(0,n.up)("CodeGroupItem"),S=(0,n.up)("CodeGroup");return(0,n.wg)(),(0,n.j4)(n.HY,null,[t,l,(0,n.Wm)("p",null,[c,(0,n.Wm)("a",r,[o,(0,n.Wm)(a)]),i]),d,(0,n.Wm)("p",null,[u,(0,n.Wm)("a",p,[m,(0,n.Wm)(a)]),h,(0,n.Wm)("a",k,[g,(0,n.Wm)(a)]),b,W,v]),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{title:"YARN",active:""},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(w,{title:"NPM"},{default:(0,n.w5)((()=>[x])),_:1})])),_:1}),U],64)}}}}]);