(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[662],{1038:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-993dd404",path:"/guide/permission.html",title:"权限验证",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"路由权限",slug:"路由权限",children:[]},{level:2,title:"鉴权组件",slug:"鉴权组件",children:[]},{level:2,title:"鉴权指令",slug:"鉴权指令",children:[]},{level:2,title:"鉴权函数",slug:"鉴权函数",children:[]},{level:2,title:"小技巧",slug:"小技巧",children:[]}],filePathRelative:"guide/permission.md",git:{updatedTime:1627293786e3,contributors:[{name:"xihe",email:"zhangxihe@bornmega.com",commits:2}]}}},3916:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="权限验证" tabindex="-1"><a class="header-anchor" href="#权限验证" aria-hidden="true">#</a> 权限验证</h1><h2 id="路由权限" tabindex="-1"><a class="header-anchor" href="#路由权限" aria-hidden="true">#</a> 路由权限</h2><p>在路由的 <code>meta</code> 配置项中，其中有一个 <code>auth</code> 参数，这个就是用来配置路由的权限，一个路由可以配置多个权限，当配置多个权限时，只要满足其中任何一个，则视为用户有访问该路由的权限，如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n  auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;news.browse&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;news.edit&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>权限的格式为 <code>xxx.yyy</code> ，其中 <code>xxx</code> 表示模块名， <code>yyy</code> 表示权限类型，通常有 4 种类型，分别是：</p><ul><li><code>browse</code> 浏览</li><li><code>create</code> 创建</li><li><code>edit</code> 编辑</li><li><code>delete</code> 删除</li></ul><p>当然也不局限于这 4 种，可以根据实际业务类型做扩充。</p><p>路由权限是比较暴力的，如果没有权限则该路由直接就无法访问，但在实际业务中，我们遇到更多的情况是，可以访问该路由页面，但会根据不同权限，使用页面里的不同功能，这时候就需要用到下面三种鉴权方式。</p><h2 id="鉴权组件" tabindex="-1"><a class="header-anchor" href="#鉴权组件" aria-hidden="true">#</a> 鉴权组件</h2><p>页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 <code>&lt;Auth&gt;</code> 和 <code>&lt;AuthAll&gt;</code> 组件，具体使用如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 单权限验证 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Auth</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  你有该权限\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-auth<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 你没有该权限 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Auth</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Auth</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  你有该权限\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-auth<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 你没有该权限 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Auth</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthAll</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  你有该权限\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-auth<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 你没有该权限 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AuthAll</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="鉴权指令" tabindex="-1"><a class="header-anchor" href="#鉴权指令" aria-hidden="true">#</a> 鉴权指令</h2><p>对于单个元素，也提供了 <code>v-auth</code> 和 <code>v-auth-all</code> 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 单权限验证 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth-all</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>department.create<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>department.edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增部门<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="鉴权函数" tabindex="-1"><a class="header-anchor" href="#鉴权函数" aria-hidden="true">#</a> 鉴权函数</h2><p>鉴权组件和鉴权指令控制的是页面上的元素是否展示，而鉴权函数则更多是使用在业务流程代码里的权限判断。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 单权限验证，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$auth</span><span class="token punctuation">(</span><span class="token string">&quot;department.create&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$auth</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;department.create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;department.edit&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$authAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;department.create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;department.edit&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><p>由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限。</p><p>当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，也可以很方便的实现。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&quot;@/layout&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&quot;/banner&quot;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n  redirect<span class="token operator">:</span> <span class="token string">&quot;/banner/list&quot;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;banner&quot;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&quot;Banner 管理&quot;</span><span class="token punctuation">,</span>\n    icon<span class="token operator">:</span> <span class="token string">&quot;banner&quot;</span><span class="token punctuation">,</span>\n    auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;editor&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;bannerCreate&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&quot;@/views/banner/detail&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&quot;新增 Banner&quot;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;editor&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;bannerList&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&quot;@/views/banner/list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&quot;Banner 列表&quot;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&quot;detail/:id&quot;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;bannerEdit&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&quot;@/views/banner/detail&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&quot;编辑 Banner&quot;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>如上所示，假设有 2 种角色，一个是管理员 <code>admin</code> ，一个是编辑员 <code>editor</code> ，如果用户是 <code>admin</code> 权限，则可以操作 Banner 管理下的所有功能，如果是 <code>editor</code> 权限，则只能进行新增 Banner 操作。</p>',22),p={render:function(n,s){return t}}}}]);