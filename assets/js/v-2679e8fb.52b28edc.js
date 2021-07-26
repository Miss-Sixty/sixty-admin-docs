(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[270],{1391:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2679e8fb",path:"/guide/vuex.html",title:"Vuex",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"目录结构",slug:"目录结构",children:[]},{level:2,title:"user",slug:"user",children:[]}],filePathRelative:"guide/vuex.md",git:{updatedTime:1627293786e3,contributors:[{name:"xihe",email:"zhangxihe@bornmega.com",commits:2}]}}},4780:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Vuex 同样实现了自动注册，开发只需关注 <code>@/store/modules/</code> 文件夹里的文件即可，请根据模块区分文件。</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>├── store                  <span class="token comment"># 全局 store 管理</span>\n│   ├── modules            <span class="token comment"># store 文件</span>\n│       ├── menu.js        <span class="token comment"># 生成导航菜单的路由数据，不建议修改此文件。</span>\n│       ├── setting.js     <span class="token comment"># 存放配置相关数据，不建议修改此文件。</span>\n│       ├── user.js        <span class="token comment"># 负责实现用户的登录、登出，以及用户信息处理。</span>\n│   ├── index.js           <span class="token comment"># 自动注入全局组件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>新建模版：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// user.js</span>\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  state<span class="token punctuation">,</span>\n  actions<span class="token punctuation">,</span>\n  getters<span class="token punctuation">,</span>\n  mutations<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>文件默认开启命名空间，文件名会默认注册为模块名，使用方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>xxx<span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&quot;user/xxx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;user/xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;user/xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h2><p>负责实现用户的登录、登出，以及用户信息处理。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这个文件是需要二次开发的，应根据自身项目需求来修改对应的代码。</p></div>',12),t={render:function(n,s){return e}}}}]);