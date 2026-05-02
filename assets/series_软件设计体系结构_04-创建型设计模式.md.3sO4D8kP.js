import{f as i,o as a,c as n,ah as t}from"./chunks/framework.5bt9HFMa.js";const g=JSON.parse('{"title":"第四章 创建型设计模式","description":"详细介绍创建型设计模式，包括单例模式、工厂模式、建造者模式和原型模式。","frontmatter":{"title":"第四章 创建型设计模式","date":"2025-11-19T00:00:00.000Z","description":"详细介绍创建型设计模式，包括单例模式、工厂模式、建造者模式和原型模式。","outline":2,"prev":{"text":"第三章 UML 基础与建模实践","link":"/series/软件设计体系结构/03-UML基础与建模实践"},"next":{"text":"第五章 结构型设计模式","link":"/series/软件设计体系结构/05-结构型设计模式"}},"headers":[],"relativePath":"series/软件设计体系结构/04-创建型设计模式.md","filePath":"series/软件设计体系结构/04-创建型设计模式.md","lastUpdated":1777733211000}'),l={name:"series/软件设计体系结构/04-创建型设计模式.md"};function h(p,s,k,e,r,d){return a(),n("div",null,s[0]||(s[0]=[t(`<h1 id="第四章-创建型设计模式" tabindex="-1">第四章 创建型设计模式 <a class="header-anchor" href="#第四章-创建型设计模式" aria-label="Permalink to &quot;第四章 创建型设计模式&quot;">​</a></h1><p>创建型设计模式的核心思想是<strong>将对象的创建与使用分离</strong>，从而提高系统的灵活性、可维护性和可扩展性。GoF（Gang of Four）定义了以下五种创建型模式：</p><ul><li>单例模式（Singleton）</li><li>工厂方法模式（Factory Method）</li><li>抽象工厂模式（Abstract Factory）</li><li>建造者模式（Builder）</li><li>原型模式（Prototype）</li></ul><hr><h2 id="_4-1-单例模式-singleton" tabindex="-1">4.1 单例模式（Singleton） <a class="header-anchor" href="#_4-1-单例模式-singleton" aria-label="Permalink to &quot;4.1 单例模式（Singleton）&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>确保一个类<strong>只有一个实例</strong>，并提供一个<strong>全局访问点</strong>。</p><h3 id="关键点" tabindex="-1">关键点 <a class="header-anchor" href="#关键点" aria-label="Permalink to &quot;关键点&quot;">​</a></h3><ul><li>私有构造函数（防止外部 <code>new</code>）</li><li>静态私有实例</li><li>公共静态获取方法（<code>getInstance()</code>）</li></ul><hr><h3 id="两种经典实现方式-懒汉式-vs-饿汉式" tabindex="-1">两种经典实现方式：懒汉式 vs 饿汉式 <a class="header-anchor" href="#两种经典实现方式-懒汉式-vs-饿汉式" aria-label="Permalink to &quot;两种经典实现方式：懒汉式 vs 饿汉式&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>饿汉式（Eager）</th><th>懒汉式（Lazy）</th></tr></thead><tbody><tr><td>初始化时机</td><td>类加载时立即创建实例</td><td>第一次调用 <code>getInstance()</code> 时创建</td></tr><tr><td>线程安全</td><td>天然线程安全</td><td>需额外同步机制</td></tr><tr><td>资源占用</td><td>启动即占用内存（可能浪费）</td><td>按需创建，节省资源</td></tr><tr><td>适用场景</td><td>实例创建开销小、一定会用到</td><td>实例创建开销大、可能不用</td></tr></tbody></table><h4 id="_1-饿汉式-eager-initialization" tabindex="-1">1. 饿汉式（Eager Initialization） <a class="header-anchor" href="#_1-饿汉式-eager-initialization" aria-label="Permalink to &quot;1. 饿汉式（Eager Initialization）&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 类加载时就创建实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>✅ 优点：实现简单，天然线程安全</p><p>❌ 缺点：无法延迟加载，可能造成资源浪费</p></blockquote><h4 id="_2-懒汉式-lazy-initialization-线程安全版" tabindex="-1">2. 懒汉式（Lazy Initialization，线程安全版） <a class="header-anchor" href="#_2-懒汉式-lazy-initialization-线程安全版" aria-label="Permalink to &quot;2. 懒汉式（Lazy Initialization，线程安全版）&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> volatile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger instance;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第一次判断 —— 快速，无锁</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Logger.class) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第二次判断 —— 保证唯一</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">为什么需要 volatile？</p><p></p><ul><li>防止 JVM 指令重排序导致其他线程获取到<strong>未完全初始化的对象</strong>。</li><li>保证多线程间对 <code>instance</code> 的<strong>写入可见性</strong>。</li></ul></div><h4 id="更优替代方案-静态内部类" tabindex="-1">更优替代方案：静态内部类 <a class="header-anchor" href="#更优替代方案-静态内部类" aria-label="Permalink to &quot;更优替代方案：静态内部类&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Holder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger INSTANCE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Holder.INSTANCE;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>利用 JVM 类加载机制保证线程安全，且只有首次调用时才初始化 —— <strong>懒加载 + 线程安全 + 无锁</strong>。</p></blockquote><h3 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h3><ul><li>日志记录器</li><li>配置管理器</li><li>线程池、缓存、注册表等全局资源</li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><blockquote><p>单例是<strong>全局状态</strong>，会降低代码可测试性，建议在现代框架中通过**依赖注入（DI）**管理。</p><p>警惕<strong>反射</strong>和<strong>反序列化</strong>对单例的破坏：</p><ul><li>反射可通过 <code>setAccessible(true)</code> 调用私有构造函数 → 可在构造函数中抛异常防御。</li><li>反序列化可通过实现 <code>readResolve()</code> 方法返回唯一实例：</li></ul></blockquote><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readResolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="单例模式的-uml-表示" tabindex="-1">单例模式的 UML 表示 <a class="header-anchor" href="#单例模式的-uml-表示" aria-label="Permalink to &quot;单例模式的 UML 表示&quot;">​</a></h3><pre class="mermaid mermaid-48">classDiagram
    class Singleton {
        -instance: Singleton
        +getInstance(): Singleton
    }</pre><hr><h2 id="_4-2-工厂模式-factory-pattern" tabindex="-1">4.2 工厂模式（Factory Pattern） <a class="header-anchor" href="#_4-2-工厂模式-factory-pattern" aria-label="Permalink to &quot;4.2 工厂模式（Factory Pattern）&quot;">​</a></h2><h3 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h3><p>将对象的创建逻辑封装起来，客户端无需关心具体类，仅依赖抽象接口。</p><h3 id="三种变体" tabindex="-1">三种变体 <a class="header-anchor" href="#三种变体" aria-label="Permalink to &quot;三种变体&quot;">​</a></h3><h4 id="_1-简单工厂-simple-factory" tabindex="-1">1. 简单工厂（Simple Factory） <a class="header-anchor" href="#_1-简单工厂-simple-factory" aria-label="Permalink to &quot;1. 简单工厂（Simple Factory）&quot;">​</a></h4><ul><li><strong>非 GoF 模式</strong>，但实用</li><li>由一个工厂类根据参数决定创建哪个产品</li><li><strong>违反开闭原则</strong>（新增产品需修改工厂）</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Shape </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createShape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalArgumentException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Shape type cannot be null or empty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;circle&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rect&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rectangle&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rectangle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            default:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalArgumentException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Unknown shape type: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="uml-表示" tabindex="-1">UML 表示 <a class="header-anchor" href="#uml-表示" aria-label="Permalink to &quot;UML 表示&quot;">​</a></h5><pre class="mermaid mermaid-49">classDiagram

    class Shape {
        +render(): void
    }
    class Circle {
        +radius: double
        +render(): void
    }
    class Rectangle {
        +width: double
        +height: double
        +render(): void
    }
    class ShapeFactory {
        +createShape(type: String): Shape
    }
    ShapeFactory ..&gt; Shape : creates
    Shape &lt;|-- Circle
    Shape &lt;|-- Rectangle</pre><p><code>ShapeFactory</code> 的返回类型为 <code>Shape</code>，类间关系为<strong>依赖</strong>。</p><p><code>Circle</code> 和 <code>Rectangle</code> 继承自 <code>Shape</code>，类间关系为<strong>继承</strong>。</p><blockquote><p>🧩 <strong>设计思想</strong>：</p><ul><li>客户端只依赖 <code>Shape</code> 接口，符合<strong>依赖倒置原则（DIP）</strong>。</li><li>但新增形状需修改 <code>ShapeFactory</code>，<strong>不满足开闭原则（OCP）</strong>。</li></ul></blockquote><h4 id="_2-工厂方法模式-factory-method" tabindex="-1">2. 工厂方法模式（Factory Method） <a class="header-anchor" href="#_2-工厂方法模式-factory-method" aria-label="Permalink to &quot;2. 工厂方法模式（Factory Method）&quot;">​</a></h4><ul><li>定义一个<strong>创建对象的接口</strong>，由子类决定实例化哪个类</li><li><strong>符合开闭原则</strong>：新增产品只需新增具体工厂和产品类</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Shape </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CircleFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Shape </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RectangleFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Shape </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rectangle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 扩展：新增一个 Triangle 工厂</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TriangleFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Shape </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Triangle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="uml-表示-1" tabindex="-1">UML 表示 <a class="header-anchor" href="#uml-表示-1" aria-label="Permalink to &quot;UML 表示&quot;">​</a></h5><pre class="mermaid mermaid-50">classDiagram
    class ShapeFactory {
        +create(): Shape
    }
    class CircleFactory {
        +create(): Circle
    }
    class RectangleFactory {
        +create(): Rectangle
    }
    class TriangleFactory {
        +create(): Triangle
    }
    ShapeFactory &lt;|.. CircleFactory
    ShapeFactory &lt;|.. RectangleFactory
    ShapeFactory &lt;|.. TriangleFactory:新增</pre><blockquote><p>🧩 <strong>设计思想</strong>：</p><ul><li>工厂方法模式通过引入工厂接口，避免了简单工厂的单一职责问题。</li><li>每个具体工厂类只负责创建一种产品，符合<strong>单一职责原则（SRP）</strong>。</li><li>新增产品时，只需新增具体工厂类和产品类，符合<strong>开闭原则（OCP）</strong>。</li></ul></blockquote><p>但我们也可以发现，在方法工厂中，<strong>每个工厂方法返回的都是同一个产品类型</strong>，但每当我需要扩展新的产品时，都需要新增一个对应的工厂类，导致工厂类数量激增，增加了系统复杂度。</p><h4 id="_3-抽象工厂模式-abstract-factory" tabindex="-1">3. 抽象工厂模式（Abstract Factory） <a class="header-anchor" href="#_3-抽象工厂模式-abstract-factory" aria-label="Permalink to &quot;3. 抽象工厂模式（Abstract Factory）&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">思考一下</p><p>然而，当我们面对的不是单一产品，而是一组相互关联或依赖的产品（例如：按钮 + 复选框 + 文本框共同构成一套 UI 风格），工厂方法就显得力不从心——我们需要为每种产品分别创建 WinButtonFactory、WinCheckboxFactory、MacButtonFactory、MacCheckboxFactory……这不仅冗余，还难以保证这些组件属于同一风格族。</p><p>为了解决“产品族”的创建问题，我们进一步将多个相关产品的工厂方法聚合到同一个工厂接口中，形成一个能创建一整套协同对象的工厂 —— 这就是 抽象工厂模式（Abstract Factory）。</p></div><ul><li>创建<strong>一组相关或依赖对象</strong>的家族，而无需指定具体类</li><li>适用于<strong>产品族</strong>（如 Windows 风格 vs macOS 风格 UI）</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GUIFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Button </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Checkbox </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WinFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GUIFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Button </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WinButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Checkbox </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WinCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MacFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GUIFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Button </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MacButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Checkbox </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MacCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 扩展：新增一个 Linux 风格的工厂</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinuxFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GUIFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Button </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinuxButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Checkbox </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinuxCheckbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="uml-表示-2" tabindex="-1">UML 表示 <a class="header-anchor" href="#uml-表示-2" aria-label="Permalink to &quot;UML 表示&quot;">​</a></h5><pre class="mermaid mermaid-51">classDiagram
    %% ===== 抽象产品（用抽象类风格表示接口）=====
    class Button {
        +render(): void
    }
    class Checkbox {
        +render(): void
    }

    %% ===== 具体产品 =====
    class WinButton {
        +render(): void
    }
    class MacButton {
        +render(): void
    }
    class LinuxButton {
        +render(): void
    }

    class WinCheckbox {
        +render(): void
    }
    class MacCheckbox {
        +render(): void
    }
    class LinuxCheckbox {
        +render(): void
    }

    %% ===== 抽象工厂（接口）=====
    class GUIFactory {
        +createButton(): Button
        +createCheckbox(): Checkbox
    }

    %% ===== 具体工厂 =====
    class WinFactory {
        +createButton(): Button
        +createCheckbox(): Checkbox
    }
    class MacFactory {
        +createButton(): Button
        +createCheckbox(): Checkbox
    }
    class LinuxFactory {
        +createButton(): Button
        +createCheckbox(): Checkbox
    }

    %% ===== 实现关系（使用继承箭头表示“实现”）=====
    Button &lt;|-- WinButton
    Button &lt;|-- MacButton
    Button &lt;|-- LinuxButton

    Checkbox &lt;|-- WinCheckbox
    Checkbox &lt;|-- MacCheckbox
    Checkbox &lt;|-- LinuxCheckbox

    GUIFactory &lt;|-- WinFactory
    GUIFactory &lt;|-- MacFactory
    GUIFactory &lt;|-- LinuxFactory

    %% ===== 依赖关系：具体工厂创建具体产品 =====
    WinFactory ..&gt; WinButton : creates
    WinFactory ..&gt; WinCheckbox : creates

    MacFactory ..&gt; MacButton : creates
    MacFactory ..&gt; MacCheckbox : creates

    LinuxFactory ..&gt; LinuxButton : creates
    LinuxFactory ..&gt; LinuxCheckbox : creates</pre><blockquote><p>🧩 <strong>设计思想</strong>：</p><ul><li>抽象工厂模式通过将多个相关产品的创建逻辑聚合到一个工厂接口中，解决了工厂方法模式中工厂类数量激增的问题。</li><li>每个具体工厂类负责创建一整套协同工作的产品，确保产品之间的一致性。</li><li>新增产品族时，只需新增具体工厂类，符合<strong>开闭原则（OCP）</strong>。</li></ul></blockquote><h5 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h5><table tabindex="0"><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>确保产品族的一致性</td><td>难以支持新增产品（需修改所有工厂类）</td></tr><tr><td>符合开闭原则，新增产品族无需修改代码</td><td>增加了系统复杂性</td></tr><tr><td>客户端代码与具体工厂解耦</td><td></td></tr></tbody></table><blockquote><p>⚠️ <strong>注意</strong>：</p><ul><li>抽象工厂模式适用于产品族稳定、变化较少的场景。</li><li>如果产品种类频繁变化，可能需要结合其他模式（如建造者模式）优化设计。</li></ul></blockquote><h3 id="对比总结" tabindex="-1">对比总结 <a class="header-anchor" href="#对比总结" aria-label="Permalink to &quot;对比总结&quot;">​</a></h3><table tabindex="0"><thead><tr><th>模式</th><th>灵活性</th><th>扩展性</th><th>适用场景</th></tr></thead><tbody><tr><td>简单工厂</td><td>低</td><td>差</td><td>产品种类固定、简单场景</td></tr><tr><td>工厂方法</td><td>中</td><td>好</td><td>单一产品线、插件系统</td></tr><tr><td>抽象工厂</td><td>高</td><td>好</td><td>多产品组合（产品族）</td></tr></tbody></table><hr><h2 id="_4-3-建造者模式-builder" tabindex="-1">4.3 建造者模式（Builder） <a class="header-anchor" href="#_4-3-建造者模式-builder" aria-label="Permalink to &quot;4.3 建造者模式（Builder）&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>将一个<strong>复杂对象的构建与其表示分离</strong>，使得同样的构建过程可以创建不同表示。</p><h3 id="适用场景-1" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景-1" aria-label="Permalink to &quot;适用场景&quot;">​</a></h3><ul><li>对象有大量可选参数（如 HTTP 请求、SQL 查询）</li><li>构造过程需分步骤、可定制（如游戏角色、文档生成）</li><li>需要创建<strong>不可变对象</strong></li></ul><h3 id="经典结构-gof-风格" tabindex="-1">经典结构（GoF 风格） <a class="header-anchor" href="#经典结构-gof-风格" aria-label="Permalink to &quot;经典结构（GoF 风格）&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 产品</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String dough, sauce, topping;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // setters...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抽象建造者</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PizzaBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pizza pizza;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pizza </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pizza; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createNewPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { pizza </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildDough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildSauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildTopping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 具体建造者</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HawaiianPizzaBuilder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PizzaBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildDough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { pizza.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildSauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { pizza.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mild&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildTopping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { pizza.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTopping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ham+pineapple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指挥者（Director）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Waiter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PizzaBuilder builder;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PizzaBuilder </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { builder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pizza </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> constructPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createNewPizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">buildDough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">buildSauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">buildTopping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>⚠️ GoF 版本适用于<strong>构建过程固定但表示可变</strong>的场景。 引入 <code>Director</code>，客户端可以复用统一的构建流程，而只需更换不同的 <code>Builder</code> 实现来获得不同表示的产品。<code>Director</code> 本身不决定使用哪个 <code>Builder</code>，而是由客户端注入。”</p></blockquote><h4 id="gof-建造者模式结构图" tabindex="-1">GoF 建造者模式结构图 <a class="header-anchor" href="#gof-建造者模式结构图" aria-label="Permalink to &quot;GoF 建造者模式结构图&quot;">​</a></h4><pre class="mermaid mermaid-52">classDiagram
    class Director {
        -builder: PizzaBuilder
        +setBuilder(PizzaBuilder)
        +constructPizza()
        +getPizza(): Pizza
    }

    class PizzaBuilder {
        #pizza: Pizza
        +createNewPizza()
        +getPizza(): Pizza
        +buildDough()
        +buildSauce()
        +buildTopping()
    }

    class HawaiianPizzaBuilder {
        +buildDough()
        +buildSauce()
        +buildTopping()
    }

    class SpicyPizzaBuilder {
        +buildDough()
        +buildSauce()
        +buildTopping()
    }

    class Pizza {
        -dough: String
        -sauce: String
        -topping: String
        +setDough(String)
        +setSauce(String)
        +setTopping(String)
    }

    Director --&gt; PizzaBuilder : uses
    PizzaBuilder &lt;|-- HawaiianPizzaBuilder
    PizzaBuilder &lt;|-- SpicyPizzaBuilder
    PizzaBuilder --&gt; Pizza : constructs</pre><hr><h3 id="现代-java-实践-流式-builder-推荐" tabindex="-1">现代 Java 实践：流式 Builder（推荐） <a class="header-anchor" href="#现代-java-实践-流式-builder-推荐" aria-label="Permalink to &quot;现代 Java 实践：流式 Builder（推荐）&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String dough;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String sauce;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String topping;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Builder </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dough </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder.dough;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.sauce </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder.sauce;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.topping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> builder.topping;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String dough </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;regular&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String sauce </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;tomato&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String topping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cheese&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Builder </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dough </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dough;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Builder </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.sauce </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sauce;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Builder </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">topping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">topping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.topping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> topping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pizza </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pizza</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pizza pizza </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pizza.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dough</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;thin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sauce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spicy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">topping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pepperoni&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>而现代化的创建方式，通过在每次构建时设置属性，并返回 <code>Builder</code> 对象，最后调用 <code>build()</code> 方法创建 <code>Pizza</code> 对象。</p><h4 id="现代流式-builder-结构图" tabindex="-1">现代流式 Builder 结构图 <a class="header-anchor" href="#现代流式-builder-结构图" aria-label="Permalink to &quot;现代流式 Builder 结构图&quot;">​</a></h4><pre class="mermaid mermaid-53">classDiagram
    class Pizza {
        -dough: String
        -sauce: String
        -topping: String
        +Pizza(Builder)
    }

    class Pizza~Builder~ {
        -dough: String
        -sauce: String
        -topping: String
        +dough(String): Builder
        +sauce(String): Builder
        +topping(String): Builder
        +build(): Pizza
    }

    Pizza --&gt; Pizza~Builder~ : uses
    Pizza~Builder~ --&gt; Pizza : creates</pre><blockquote><p>💡 <strong>对比说明</strong>：</p><ul><li><strong>GoF 建造者</strong>强调“构建流程与产品解耦”，适合构建步骤复杂且流程固定的系统（如文档生成器）。</li><li><strong>流式 Builder</strong>更轻量，聚焦于“避免重叠构造函数”，广泛用于现代 Java（如 <code>StringBuilder</code>、OkHttp、Retrofit 等），尤其适合不可变对象。</li></ul></blockquote><hr><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>构造过程清晰可控</li><li>避免“重叠构造函数”反模式（telescoping constructor）</li><li>支持不可变对象构建</li><li>链式调用提升可读性</li></ul><hr><h2 id="_4-4-原型模式-prototype" tabindex="-1">4.4 原型模式（Prototype） <a class="header-anchor" href="#_4-4-原型模式-prototype" aria-label="Permalink to &quot;4.4 原型模式（Prototype）&quot;">​</a></h2><h3 id="定义-2" tabindex="-1">定义 <a class="header-anchor" href="#定义-2" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>通过<strong>复制现有对象</strong>来创建新对象，而不是通过 <code>new</code>。</p><h3 id="适用场景-2" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景-2" aria-label="Permalink to &quot;适用场景&quot;">​</a></h3><ul><li>对象创建成本高（如从数据库加载）</li><li>需要动态配置对象模板（如游戏中的敌人、技能配置）</li><li>避免复杂的初始化逻辑</li></ul><h3 id="java-实现-实现-cloneable-接口" tabindex="-1">Java 实现：实现 <code>Cloneable</code> 接口 <a class="header-anchor" href="#java-实现-实现-cloneable-接口" aria-label="Permalink to &quot;Java 实现：实现 \`Cloneable\` 接口&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cloneable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prototype </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Prototype cloned </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Prototype) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 深拷贝：避免共享 mutable 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            cloned.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tags);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cloned;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (CloneNotSupportedException </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Clone not supported&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // getters/setters...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>⚠️ <strong>注意</strong>：<code>Object.clone()</code> 默认是<strong>浅拷贝</strong>，对于包含引用类型字段的对象，需手动实现<strong>深拷贝</strong>。</p></blockquote><hr><h2 id="小结对比表" tabindex="-1">小结对比表 <a class="header-anchor" href="#小结对比表" aria-label="Permalink to &quot;小结对比表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>模式</th><th>核心思想</th><th>典型用途</th></tr></thead><tbody><tr><td>单例</td><td>全局唯一实例</td><td>日志、配置、线程池</td></tr><tr><td>工厂方法</td><td>子类决定创建什么</td><td>插件系统、多态对象创建</td></tr><tr><td>抽象工厂</td><td>创建产品族</td><td>跨平台 UI 组件、主题系统</td></tr><tr><td>建造者</td><td>分步构建复杂对象</td><td>HTTP 请求、SQL、不可变对象构造</td></tr><tr><td>原型</td><td>克隆已有对象</td><td>游戏对象复制、高成本对象复用、模板</td></tr></tbody></table><hr><blockquote><p><strong>设计哲学</strong>：创建型模式的本质不是“怎么 new 对象”，而是“<strong>如何解耦创建逻辑与使用逻辑</strong>”，让系统更灵活、更易扩展。</p></blockquote>`,95)]))}const c=i(l,[["render",h]]);export{g as __pageData,c as default};
