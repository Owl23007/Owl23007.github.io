import{f as a,c as i,o as n,ah as t}from"./chunks/framework.5bt9HFMa.js";const k=JSON.parse('{"title":"第三章 UML 基础与建模实践","description":"UML基础知识、各类图表的使用方法及如何用UML表达设计模式。","frontmatter":{"title":"第三章 UML 基础与建模实践","date":"2025-11-19T00:00:00.000Z","description":"UML基础知识、各类图表的使用方法及如何用UML表达设计模式。"},"headers":[],"relativePath":"series/软件设计体系结构/03-UML基础与建模实践.md","filePath":"series/软件设计体系结构/03-UML基础与建模实践.md","lastUpdated":1764215906000}'),e={name:"series/软件设计体系结构/03-UML基础与建模实践.md"};function l(r,s,o,p,h,d){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="第三章-uml-基础与建模实践" tabindex="-1">第三章 UML 基础与建模实践 <a class="header-anchor" href="#第三章-uml-基础与建模实践" aria-label="Permalink to &quot;第三章 UML 基础与建模实践&quot;">​</a></h1><h2 id="_3-1-uml-简介与应用场景" tabindex="-1">3.1 UML 简介与应用场景 <a class="header-anchor" href="#_3-1-uml-简介与应用场景" aria-label="Permalink to &quot;3.1 UML 简介与应用场景&quot;">​</a></h2><p>UML（Unified Modeling Language，统一建模语言）是一种标准化的可视化建模语言，由OMG（Object Management Group）维护。它提供了一套图形化的符号系统，用于描述、设计和文档化软件系统。</p><h3 id="uml-图分为两大类" tabindex="-1"><strong>UML 图分为两大类</strong> <a class="header-anchor" href="#uml-图分为两大类" aria-label="Permalink to &quot;**UML 图分为两大类**&quot;">​</a></h3><h4 id="_1-结构图-structural-diagrams" tabindex="-1"><strong>1. 结构图（Structural Diagrams）</strong> <a class="header-anchor" href="#_1-结构图-structural-diagrams" aria-label="Permalink to &quot;**1. 结构图（Structural Diagrams）**&quot;">​</a></h4><p>用于描述系统的静态结构，即组成系统的元素及其关系。</p><ul><li><strong>类图（Class Diagram）</strong>：展示类、接口、抽象类及其之间的关系（如继承、实现、关联、聚合、组合等）。</li><li><strong>对象图（Object Diagram）</strong>：展示某一时刻系统中对象实例及其之间的链接关系，可看作类图的运行时快照。</li><li><strong>组件图（Component Diagram）</strong>：展示系统中可替换的物理或逻辑组件及其接口和依赖关系。</li><li><strong>部署图（Deployment Diagram）</strong>：描述系统的物理部署结构，包括硬件节点和软件制品（artifacts）的部署关系。</li><li><strong>包图（Package Diagram）</strong>：展示系统中包（namespace）之间的依赖关系，用于组织和管理模型元素。</li><li><strong>组合结构图（Composite Structure Diagram）</strong>：展示类内部的结构，包括其组成部分（part）及端口（port）等，用于描述协作内部结构。</li></ul><hr><h4 id="_2-行为图-behavioral-diagrams" tabindex="-1"><strong>2. 行为图（Behavioral Diagrams）</strong> <a class="header-anchor" href="#_2-行为图-behavioral-diagrams" aria-label="Permalink to &quot;**2. 行为图（Behavioral Diagrams）**&quot;">​</a></h4><p>用于描述系统的动态行为，即系统如何随时间变化或响应事件。</p><ul><li><strong>用例图（Use Case Diagram）</strong>：展示系统功能（用例）与外部参与者（Actor）之间的关系。</li><li><strong>活动图（Activity Diagram）</strong>：描述业务流程或操作的工作流，类似流程图，但支持并发等高级语义。</li><li><strong>状态机图（State Machine Diagram，简称状态图）</strong>：展示一个对象在其生命周期内所经历的状态及状态之间的转换。</li><li><strong>时序图（Sequence Diagram）</strong>：强调对象之间消息传递的<strong>时间顺序</strong>，是最常用的交互图。</li><li><strong>通信图（Communication Diagram，旧称协作图）</strong>：强调对象之间的<strong>结构关系</strong>，同时展示消息交互（与时序图互补）。</li><li><strong>交互概览图（Interaction Overview Diagram）</strong>：结合活动图和顺序图，用活动节点表示交互流程。</li></ul><blockquote><p><strong>时序图、通信图、交互概览图、时序图</strong>等都属于 <strong>交互图（Interaction Diagrams）</strong> 的子类，但“交互图”本身是行为图下的一个<strong>子类别</strong>，<strong>不是独立的一种图</strong>。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>交互图（Interaction Diagrams）</strong> 是 UML 中对<strong>强调对象间消息传递</strong>的一类图的统称，包括时序图、通信图等，<strong>不是与用例图并列的独立图类型</strong>。</p></div><hr><p>当然可以，以下是对你提供的 UML 核心特点与应用场景内容的扩展，尤其在<strong>代码生成</strong>方面做了更详细的补充，并保持整体风格一致：</p><hr><h3 id="核心特点" tabindex="-1">核心特点 <a class="header-anchor" href="#核心特点" aria-label="Permalink to &quot;核心特点&quot;">​</a></h3><ul><li><strong>标准化</strong>：UML 定义了一套统一的图形符号和语义规范，确保不同背景的团队成员（如架构师、开发、测试、产品经理）对系统模型有一致的理解，减少沟通歧义。</li><li><strong>可视化</strong>：通过类图、时序图、状态图等图形化手段，将抽象的软件结构和行为具象化，使复杂逻辑和交互流程一目了然，尤其适用于大型或分布式系统。</li><li><strong>多视图</strong>：UML 支持从多个维度刻画系统： <ul><li><strong>结构视图</strong>（如类图、对象图、组件图）描述系统的静态组成；</li><li><strong>行为视图</strong>（如用例图、活动图、状态机图）刻画系统动态行为；</li><li><strong>交互视图</strong>（如时序图、通信图）聚焦对象间的消息传递；</li><li><strong>部署视图</strong>（如部署图）展示软硬件的物理部署结构。</li></ul></li><li><strong>工具支持</strong>：主流建模工具（如 StarUML、PlantUML、Lucidchart、mermaid）均支持 UML 标准，提供图形编辑、版本管理、协作评审甚至与 IDE 集成的能力。</li></ul><hr><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li><strong>系统设计与分析</strong>：在编码前通过 UML 进行领域建模和架构设计，提前发现设计缺陷，明确模块职责与关系，为后续开发奠定清晰基础。</li><li><strong>团队沟通</strong>：作为跨职能团队的“通用语言”，UML 图能有效弥合业务需求与技术实现之间的鸿沟，提升协作效率。</li><li><strong>文档记录</strong>：UML 模型可自动导出为设计文档，便于知识沉淀、新人上手和后期维护，避免“代码即文档”带来的理解成本。</li><li><strong>代码生成</strong>： 有 UML 工具支持<strong>正向工程（Forward Engineering）</strong>，即根据类图、状态图等自动生成对应编程语言的代码框架（如 Java、C#、Python）。例如： <ul><li>从类图生成包含属性、方法签名和关联关系的类骨架；</li><li>从状态图生成状态机模板代码；</li><li>支持自定义模板（如 Velocity、Freemarker）以适配特定项目规范。 此外，部分工具还支持<strong>逆向工程（Reverse Engineering）</strong>，可从现有代码反向生成 UML 图，便于理解遗留系统或进行重构分析。</li></ul></li></ul><hr><h2 id="_3-2-类图-class-diagram-结构建模核心" tabindex="-1">3.2 类图（Class Diagram）：结构建模核心 <a class="header-anchor" href="#_3-2-类图-class-diagram-结构建模核心" aria-label="Permalink to &quot;3.2 类图（Class Diagram）：结构建模核心&quot;">​</a></h2><p>类图是UML中最常用的图，用于展示系统的静态结构，包括类、接口、属性、方法以及它们之间的关系。</p><h3 id="类的基本表示" tabindex="-1">类的基本表示 <a class="header-anchor" href="#类的基本表示" aria-label="Permalink to &quot;类的基本表示&quot;">​</a></h3><pre class="mermaid mermaid-11">classDiagram
    class User {
        -userId: String
        -username: String
        -email: String
        +login(password: String): Boolean
        +updateProfile(data: Map): void
        +getFullName(): String
    }</pre><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>classDiagram</span></span>
<span class="line"><span>    class User {</span></span>
<span class="line"><span>        -userId: String             // 私有属性</span></span>
<span class="line"><span>        -username: String</span></span>
<span class="line"><span>        -email: String</span></span>
<span class="line"><span>        +login(password: String): Boolean  // 公有方法</span></span>
<span class="line"><span>        +updateProfile(data: Map): void</span></span>
<span class="line"><span>        +getFullName(): String</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>在这个图中，User类有4个属性（userId、username、email），3个方法（login、updateProfile、getFullName），以及一个构造函数。</p><p>图框分为三个部分：</p><ul><li>类名</li><li>属性列表</li><li>方法列表</li></ul><p>其中，属性列表与方法列表中的每一行表示一个属性或方法，前面的符号表示可见性：</p><ul><li><code>+</code>：公有（public）</li><li><code>-</code>：私有（private）</li><li><code>#</code>：受保护的（protected）</li></ul><p><code>updateProfile(data: Map): void</code> 中<code>data: Map</code>参数是一个Map类型，表示更新用户的数据。<code>void</code>表示该方法的返回值类型。</p><hr><h3 id="uml-图的关系详解" tabindex="-1">UML 图的关系详解 <a class="header-anchor" href="#uml-图的关系详解" aria-label="Permalink to &quot;UML 图的关系详解&quot;">​</a></h3><p>在面向对象设计中，类与类、类与接口之间通过特定的语义关系相互协作。这些关系不仅定义了代码的静态结构，也深刻影响系统的可维护性、可扩展性与复用能力。</p><p>根据 UML（统一建模语言）规范，常见的结构化与行为依赖关系可归纳为以下 <strong>六种</strong>，按其语义和建模目的分类如下：</p><h4 id="结构关系分类" tabindex="-1">结构关系分类 <a class="header-anchor" href="#结构关系分类" aria-label="Permalink to &quot;结构关系分类&quot;">​</a></h4><h5 id="_1-类与类之间的关系-5-种" tabindex="-1">1. 类与类之间的关系（5 种） <a class="header-anchor" href="#_1-类与类之间的关系-5-种" aria-label="Permalink to &quot;1. 类与类之间的关系（5 种）&quot;">​</a></h5><ul><li><strong>继承（Generalization / Inheritance）</strong> 表示 “is-a” 关系，子类泛化父类的行为与属性。</li><li><strong>关联（Association）</strong> 表示两个类之间存在长期的结构化引用（如成员变量），通常为双向或单向持有。 <ul><li><strong>普通关联</strong>：基础引用关系，无生命周期绑定。</li><li><strong>聚合（Aggregation）</strong>：弱“拥有”关系（“has-a”），部分可独立于整体存在。</li><li><strong>组合（Composition）</strong>：强“拥有”关系（“owns-a”），部分生命周期完全依赖整体。</li></ul></li><li><strong>依赖（Dependency）</strong> 表示一个类在局部（如方法参数、临时变量或静态调用）使用另一个类，耦合最弱。</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>聚合与组合是<strong>关联的两种特殊形式</strong>，用于表达“整体-部分”关系的强弱，而非独立于关联之外的关系。</p></div><h5 id="_2-类与接口之间的关系-1-种" tabindex="-1">2. 类与接口之间的关系（1 种） <a class="header-anchor" href="#_2-类与接口之间的关系-1-种" aria-label="Permalink to &quot;2. 类与接口之间的关系（1 种）&quot;">​</a></h5><ul><li><strong>实现（Realization）</strong> 表示类履行接口所定义的契约（如 Java 中的 <code>implements</code>），是多态与解耦的关键机制。</li></ul><p>此外，<strong>接口与接口之间</strong>也存在<strong>继承（Generalization）</strong>（如 <code>interface B extends A</code>），但该关系不属于“类与类”或“类与接口”的范畴，此处不计入六种核心关系。</p><hr><h4 id="_1-继承关系-inheritance-generalization" tabindex="-1">1. 继承关系（Inheritance / Generalization） <a class="header-anchor" href="#_1-继承关系-inheritance-generalization" aria-label="Permalink to &quot;1. 继承关系（Inheritance / Generalization）&quot;">​</a></h4><p>表示 “is-a” 关系，子类继承父类的属性和行为，卡车是一个载具。</p><pre class="mermaid mermaid-12">classDiagram
    class Vehicle {
        +start()
        +stop()
    }

    class Car {
        +openSunroof()
    }

    class Truck {
        +loadCargo()
    }

    Vehicle &lt;|-- Car
    Vehicle &lt;|-- Truck</pre><ul><li><strong>UML 语义</strong>：泛化（Generalization）</li><li><strong>Java 示例</strong>：<code>class Car extends Vehicle</code></li><li><strong>关系箭头</strong>：<code>&lt;|--</code> 空心三角箭头 + 实线，指向父类</li></ul><hr><h4 id="_2-实现关系-realization" tabindex="-1">2. 实现关系（Realization） <a class="header-anchor" href="#_2-实现关系-realization" aria-label="Permalink to &quot;2. 实现关系（Realization）&quot;">​</a></h4><p>表示类实现接口定义的契约，即 “implements”。</p><pre class="mermaid mermaid-13">classDiagram
    class PaymentMethod {
        +processPayment(amount: Double): Boolean
    }

    class CreditCard {
        -cardNumber: String
        +processPayment(amount: Double): Boolean
    }

    class Cash {
        +processPayment(amount: Double): Boolean
    }

    CreditCard ..|&gt; PaymentMethod
    Cash ..|&gt; PaymentMethod</pre><p><strong>关系箭头</strong>：箭头方向为 <strong>类 → 接口</strong>，使用 <code>..|&gt;</code> 表示虚线+空心三角（实现）。</p><hr><h4 id="_3-关联关系-association" tabindex="-1">3. 关联关系（Association） <a class="header-anchor" href="#_3-关联关系-association" aria-label="Permalink to &quot;3. 关联关系（Association）&quot;">​</a></h4><p>关联关系表示两个类之间存在<strong>结构化引用</strong>（如成员变量），通常为长期关系。它是类与类之间最常见的关系之一。</p><pre class="mermaid mermaid-14">classDiagram
    class University {
        -name: String
        +addDepartment(deptName: String)
    }

    class Department {
        -name: String
        +addProfessor(p: Professor)
        +removeProfessor(p: Professor)
    }

    class Professor {
        -name: String
    }

    University *-- &quot;*&quot; Department : contains &gt;
    Department o-- &quot;*&quot; Professor : employs &gt;</pre><h5 id="聚合与组合" tabindex="-1">聚合与组合 <a class="header-anchor" href="#聚合与组合" aria-label="Permalink to &quot;聚合与组合&quot;">​</a></h5><p>聚合与组合是<strong>关联的两种特殊形式</strong>（下文有更详细的讲解），用于表达“整体-部分”关系的强弱：</p><ul><li><strong>聚合（Aggregation）</strong>：弱“拥有”关系，部分可以独立于整体存在。</li><li><strong>组合（Composition）</strong>：强“拥有”关系，部分的生命周期由整体控制。</li></ul><h5 id="uml-表达" tabindex="-1">UML 表达 <a class="header-anchor" href="#uml-表达" aria-label="Permalink to &quot;UML 表达&quot;">​</a></h5><ul><li><strong>普通关联</strong>：用实线表示，带箭头 <code>--&gt;</code> 表示单向关联，不带箭头 <code>--</code> 表示双向关联。</li><li><strong>聚合</strong>：用空心菱形 <code>o--</code> 表示。</li><li><strong>组合</strong>：用实心菱形 <code>*--</code> 表示。</li></ul><h5 id="java-示例" tabindex="-1">Java 示例 <a class="header-anchor" href="#java-示例" aria-label="Permalink to &quot;Java 示例&quot;">​</a></h5><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 教授类：独立存在</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Professor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Professor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 教授可被多个院系引用，也可不隶属于任何院系</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 院系类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Department</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 聚合关系：持有 Professor 引用，但不控制其生命周期</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Professor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; professors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Department</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addProfessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Professor </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        professors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 注意：移除教授时，不销毁 Professor 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> removeProfessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Professor </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        professors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(p);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 大学类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> University</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 组合关系：University 完全拥有 Department</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Department</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; departments </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> University</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addDepartment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deptName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // University 内部创建 Department（体现“拥有”）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        departments.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Department</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deptName));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="示例补充" tabindex="-1">示例补充 <a class="header-anchor" href="#示例补充" aria-label="Permalink to &quot;示例补充&quot;">​</a></h5><pre class="mermaid mermaid-15">classDiagram
    class Customer {
        -name: String
    }
    class Order {
        -orderId: String
    }
    Customer --&gt; &quot;*&quot; Order : places &gt;</pre><p>在上述示例中：</p><ul><li><code>Customer</code> 和 <code>Order</code> 之间是普通关联关系，表示一个客户可以下多个订单。</li><li>用 <code>--&gt;</code> 表示单向关联，箭头指向被引用的类。</li><li><code>&quot;*&quot;</code> 表示多对一关系，即一个客户可以下多个订单。</li></ul><hr><h4 id="_4-聚合关系-aggregation" tabindex="-1">4. 聚合关系（Aggregation） <a class="header-anchor" href="#_4-聚合关系-aggregation" aria-label="Permalink to &quot;4. 聚合关系（Aggregation）&quot;">​</a></h4><p>一种<strong>弱“拥有”关系</strong>，整体与部分可独立存在（“has-a”）。</p><pre class="mermaid mermaid-16">classDiagram
    class Library {
        -name: String
        -LibraryBooks: List~Book~
        +addBook()
        +removeBook()
    }

    class Book {
        -title: String
        -author: String
    }

    Library o-- &quot;*&quot; Book : contains &gt;</pre><ul><li>空心菱形 <code>o--</code> 表示聚合</li><li><code>Book</code> 可脱离 <code>Library</code> 存在（例如被借出或转移到其他图书馆）</li></ul><hr><h4 id="_5-组合关系-composition" tabindex="-1">5. 组合关系（Composition） <a class="header-anchor" href="#_5-组合关系-composition" aria-label="Permalink to &quot;5. 组合关系（Composition）&quot;">​</a></h4><p>一种<strong>强“拥有”关系</strong>，部分生命周期由整体控制（“owns-a”）。</p><pre class="mermaid mermaid-17">classDiagram
    class House {
        +build()
        +demolish()
    }

    class Room {
        -roomNumber: String
        -size: String
    }

    House *-- &quot;*&quot; Room : contains &gt;</pre><ul><li>实心菱形 + 实线 <code>*--</code> 表示组合</li><li><code>Room</code> 不能脱离 <code>House</code> 存在（房子被拆除，房间也随之消失）</li></ul><hr><h4 id="_6-依赖关系-dependency" tabindex="-1">6. 依赖关系（Dependency） <a class="header-anchor" href="#_6-依赖关系-dependency" aria-label="Permalink to &quot;6. 依赖关系（Dependency）&quot;">​</a></h4><p>表示一个类<strong>临时使用</strong>另一个类（如方法参数、局部变量、静态工具调用），耦合最弱。</p><pre class="mermaid mermaid-18">classDiagram
    class Order {
        +process()
    }

    class Logger {
        +log(message: String)
    }

    Order ..&gt; Logger : uses &gt;</pre><ul><li>虚线+ 普通箭头 <code>..&gt;</code> 表示依赖</li><li>通常出现在方法内部，不保留长期引用</li></ul><hr><h4 id="关系总结表" tabindex="-1">关系总结表 <a class="header-anchor" href="#关系总结表" aria-label="Permalink to &quot;关系总结表&quot;">​</a></h4><table tabindex="0"><thead><tr><th>关系类型</th><th>Mermaid 符号</th><th>语义</th><th>生命周期依赖</th><th>典型场景</th></tr></thead><tbody><tr><td>继承</td><td>\`&lt;</td><td>--\`</td><td>is-a</td><td>否</td></tr><tr><td>实现</td><td>\`..</td><td>&gt;\`</td><td>implements</td><td>否</td></tr><tr><td>关联</td><td><code>--&gt;</code></td><td>uses/has</td><td>否</td><td><code>Customer</code> 持有 <code>Order</code> 列表</td></tr><tr><td>聚合</td><td><code>o--</code></td><td>has-a</td><td><strong>否</strong></td><td><code>Library</code> 包含 <code>Book</code></td></tr><tr><td>组合</td><td><code>*--</code></td><td>owns-a</td><td><strong>是</strong></td><td><code>House</code> 由 <code>Room</code> 构成</td></tr><tr><td>依赖</td><td><code>..&gt;</code></td><td>uses-a</td><td>否（临时）</td><td>调用 <code>Logger.log()</code></td></tr></tbody></table><hr><h2 id="_3-3-时序图-sequence-diagram-行为交互分析" tabindex="-1">3.3 时序图（Sequence Diagram）：行为交互分析 <a class="header-anchor" href="#_3-3-时序图-sequence-diagram-行为交互分析" aria-label="Permalink to &quot;3.3 时序图（Sequence Diagram）：行为交互分析&quot;">​</a></h2><p>后面的等我复习的时候再补吧</p>`,90)]))}const c=a(e,[["render",l]]);export{k as __pageData,c as default};
