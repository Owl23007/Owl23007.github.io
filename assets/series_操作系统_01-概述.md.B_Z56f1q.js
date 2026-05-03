import{f as t,o as r,c as n,ah as i}from"./chunks/framework.5bt9HFMa.js";const p=JSON.parse('{"title":"01-操作系统概述","description":"操作系统概述，包括定义、特征、发展历程、运行机制及资源管理功能。","frontmatter":{"title":"01-操作系统概述","date":"2025-12-11T00:00:00.000Z","tags":["操作系统","计算机基础"],"description":"操作系统概述，包括定义、特征、发展历程、运行机制及资源管理功能。","author":"沃以","publish":true,"next":{"text":"02-进程","link":"/series/操作系统/02-进程.html"},"prev":{"text":"目录","link":"/series/操作系统/index"}},"headers":[],"relativePath":"series/操作系统/01-概述.md","filePath":"series/操作系统/01-概述.md","lastUpdated":1777791679000}'),s={name:"series/操作系统/01-概述.md"};function o(e,l,a,g,u,d){return r(),n("div",null,l[0]||(l[0]=[i(`<h1 id="_01-操作系统概述" tabindex="-1">01-操作系统概述 <a class="header-anchor" href="#_01-操作系统概述" aria-label="Permalink to &quot;01-操作系统概述&quot;">​</a></h1><pre class="mermaid mermaid-18">mindmap
  root((操作系统概述))
    特征
      并发
      共享
      虚拟
      异步
    目标和功能
      资源管理
      用户接口
        命令接口
        程序接口
        GUI
    发展
      批处理
      分时
      实时
      网络/分布式
    运行机制
      系统状态
        用户态
        核心态
      中断和异常
      系统调用</pre><h2 id="一、-操作系统的定义与角色" tabindex="-1">一、 操作系统的定义与角色 <a class="header-anchor" href="#一、-操作系统的定义与角色" aria-label="Permalink to &quot;一、 操作系统的定义与角色&quot;">​</a></h2><p>操作系统（Operating System，OS）是配置在计算机硬件上的第一层软件，是对硬件系统的首次扩充。</p><h3 id="_1-1-研究操作系统的三种观点" tabindex="-1">1.1 研究操作系统的三种观点 <a class="header-anchor" href="#_1-1-研究操作系统的三种观点" aria-label="Permalink to &quot;1.1 研究操作系统的三种观点&quot;">​</a></h3><p>通常可以从以下三个角度来理解和研究操作系统：</p><ol><li><p><strong>资源管理观点</strong></p><ul><li>操作系统是计算机系统资源的管理者。</li><li><strong>管理对象</strong>：处理器（CPU）、存储器、I/O设备、文件（数据）。</li><li><strong>目标</strong>：高效、合理地分配资源，提高资源利用率。</li></ul></li><li><p><strong>用户接口观点</strong></p><ul><li>操作系统是用户与计算机硬件系统之间的接口。</li><li>用户通过操作系统提供的接口使用计算机，而无需关心底层硬件细节。</li><li><strong>接口类型</strong>：命令接口、程序接口（系统调用）、图形用户接口（GUI）。</li></ul></li><li><p><strong>进程管理观点</strong></p><ul><li>操作系统主要由若干个进程（Process）组成。</li><li>操作系统对进程进行管理，包括进程的创建、撤销、调度、同步与通信等。</li><li>从这个角度看，操作系统是进程的管理者。</li></ul></li></ol><h3 id="_1-2-操作系统的用户界面" tabindex="-1">1.2 操作系统的用户界面 <a class="header-anchor" href="#_1-2-操作系统的用户界面" aria-label="Permalink to &quot;1.2 操作系统的用户界面&quot;">​</a></h3><p>操作系统为用户提供了多种使用计算机的界面（接口）：</p><ol><li><p><strong>命令接口 (Command Interface)</strong></p><ul><li><strong>联机命令接口</strong>（交互式）：用户输入一条命令，系统执行一条。适用于分时系统。 <ul><li>例如：Windows 的 CMD/PowerShell，Linux 的 Bash。</li></ul></li><li><strong>脱机命令接口</strong>（批处理）：用户提供作业说明书（脚本），系统按顺序执行。适用于批处理系统。</li></ul></li><li><p><strong>程序接口 (Program Interface)</strong></p><ul><li>即<strong>系统调用 (System Call)</strong>。</li><li>这是操作系统提供给<strong>程序员</strong>（应用程序）使用的接口。</li><li>用户通过在程序中调用系统调用来请求操作系统服务。</li></ul></li><li><p><strong>图形用户接口 (GUI)</strong></p><ul><li>通过图标、窗口、菜单等图形元素与系统交互。</li><li>例如：Windows、macOS、Ubuntu Desktop。</li><li><em>注：GUI 最终通常也是通过调用系统调用来实现的。</em></li></ul></li></ol><pre class="mermaid mermaid-19">graph TD
  %% Styles
  classDef base fill:#f9f,stroke:#333,stroke-width:2px;
  classDef user fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
  classDef sys fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
  classDef main fill:#f3e5f5,stroke:#4a148c,stroke-width:4px;

  root[OS]:::main

  %% Usage Branch
  root --&gt; usage(使用)
  usage --&gt; normal_user[普通用户]:::user
  usage --&gt; programmer[&quot;程序员&lt;br/&gt;(专业)&quot;]:::user

  %% Working Principle Branch
  root --&gt; principle(工作原理)
  principle -.-&gt; definition(定义)
  definition --&gt; sys_soft[一款系统软件]:::sys

  %% Functions
  sys_soft -- 功能1 --&gt; manage[管理软、硬件资源]
  sys_soft -- 功能2 --&gt; interface[提供使用接口]</pre><h2 id="二、-计算机系统层次结构" tabindex="-1">二、 计算机系统层次结构 <a class="header-anchor" href="#二、-计算机系统层次结构" aria-label="Permalink to &quot;二、 计算机系统层次结构&quot;">​</a></h2><p>计算机系统自下而上可分为：硬件、操作系统、其它系统软件、用户应用软件、用户。</p><ul><li><strong>硬件 (Hardware)</strong>：系统的物理基础。</li><li><strong>操作系统 (OS)</strong>：直接运行在硬件之上，管理硬件并为上层软件提供支持。</li><li><strong>其它系统软件</strong>：如编译程序、数据库管理系统等，通常运行在 OS 之上。</li><li><strong>应用软件</strong>：解决具体问题的软件。</li><li><strong>用户</strong>：系统的最终使用者。</li></ul><pre class="mermaid mermaid-20">graph TD
  %% Styles
  classDef user fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
  classDef sys fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
  classDef hw fill:#fff3e0,stroke:#e65100,stroke-width:2px;

  %% The Stack
  subgraph Computer_System [计算机系统层次]
    direction TB
    stack_top[用户]:::user
    stack_app[用户应用软件]:::user

    subgraph System_Software [系统软件]
    direction TB
    stack_other[其它系统软件]:::sys
    stack_os[操作系统]:::sys
    end

    stack_hw[硬件]:::hw

    stack_top --&gt; stack_app
    stack_app --&gt; stack_other
    stack_other --&gt; stack_os
    stack_os --&gt; stack_hw
  end

  style Computer_System fill:#fafafa,stroke:#333,stroke-width:1px
  style System_Software fill:#f1f8e9,stroke:#333,stroke-width:1px</pre><h2 id="三、-操作系统的特征" tabindex="-1">三、 操作系统的特征 <a class="header-anchor" href="#三、-操作系统的特征" aria-label="Permalink to &quot;三、 操作系统的特征&quot;">​</a></h2><p>操作系统的四个基本特征：<strong>并发</strong>、<strong>共享</strong>、<strong>虚拟</strong>、<strong>异步</strong>。其中并发和共享是两个最基本的特征，二者互为存在条件。</p><ol><li><strong>并发 (Concurrency)</strong></li></ol><ul><li>指两个或多个事件在同一时间间隔内发生。</li><li><strong>区别并行 (Parallel)</strong>：并行指两个或多个事件在同一时刻发生（多核CPU）。</li><li>在单核 CPU 上，进程是并发执行的（宏观上同时，微观上交替）。</li></ul><ol start="2"><li><strong>共享 (Sharing)</strong></li></ol><ul><li>指系统中的资源可供内存中多个并发执行的进程共同使用。</li><li><strong>互斥共享</strong>：如打印机，一段时间只允许一个进程访问。</li><li><strong>同时共享</strong>：如磁盘文件，允许在一个时间段内由多个进程&quot;同时&quot;访问（宏观上）。</li></ul><ol start="3"><li><strong>虚拟 (Virtualization)</strong></li></ol><ul><li>把一个物理上的实体变为若干个逻辑上的对应物。</li><li><strong>时分复用</strong>：如虚拟处理器技术（多道程序设计）。</li><li><strong>空分复用</strong>：如虚拟存储器技术。</li></ul><ol start="4"><li><strong>异步 (Asynchrony)</strong></li></ol><ul><li>在多道程序环境下，进程以不可预知的速度向前推进。</li><li>尽管走走停停，但 OS 需保证运行结果的可再现性。</li></ul><pre class="mermaid mermaid-21">graph TD
    subgraph Features [操作系统特征]
        Concurrency[并发]
        Sharing[共享]
        Virtual[虚拟]
        Async[异步]
    end

    Concurrency &lt;--&gt;|互为存在条件| Sharing
    Concurrency --&gt;|基础| Virtual
    Concurrency --&gt;|基础| Async

    style Features fill:#e3f2fd,stroke:#1565c0
    style Concurrency fill:#bbdefb,stroke:#1976d2
    style Sharing fill:#bbdefb,stroke:#1976d2
    style Virtual fill:#e1bee7,stroke:#7b1fa2
    style Async fill:#e1bee7,stroke:#7b1fa2</pre><h2 id="四、-操作系统的基本类型" tabindex="-1">四、 操作系统的基本类型 <a class="header-anchor" href="#四、-操作系统的基本类型" aria-label="Permalink to &quot;四、 操作系统的基本类型&quot;">​</a></h2><p>操作系统的发展经历了从无到有、从简单到复杂的过程，主要类型包括：</p><ol><li><p><strong>批处理操作系统 (Batch Processing OS)</strong></p><ul><li><strong>单道批处理</strong>：内存中仅有一道程序，自动、顺序执行。解决人机矛盾，但 CPU 利用率低。</li><li><strong>多道批处理</strong>：内存中同时驻留多道程序，并发执行。 <ul><li><strong>特点</strong>：多道性、无交互性、调度性。</li><li><strong>优点</strong>：资源利用率高，系统吞吐量大。</li><li><strong>缺点</strong>：无交互能力，用户响应时间长。</li></ul></li></ul></li><li><p><strong>分时操作系统 (Time-Sharing OS)</strong></p><ul><li>一台主机连接多个终端，CPU 按时间片轮流为各个终端服务。</li><li><strong>特点</strong>： <ul><li><strong>多路性</strong>：同时服务多个用户。</li><li><strong>独立性</strong>：用户之间互不干扰。</li><li><strong>及时性</strong>：响应时间短。</li><li><strong>交互性</strong>：用户可与系统进行人机对话。</li></ul></li><li>解决了人机交互问题。</li></ul></li><li><p><strong>实时操作系统 (Real-Time OS, RTOS)</strong></p><ul><li>系统能及时响应外部事件，并在严格的时限内完成处理。</li><li><strong>特点</strong>：及时性、可靠性（高可靠性是 RTOS 的关键）。</li><li><strong>分类</strong>： <ul><li><strong>硬实时</strong>：必须在绝对严格的截止时间内完成（如导弹制导、自动驾驶）。</li><li><strong>软实时</strong>：偶尔错过截止时间可接受（如视频流媒体）。</li></ul></li></ul></li><li><p><strong>网络操作系统 (Network OS)</strong></p><ul><li>基于计算机网络，在各种计算机操作系统之上，提供网络管理、通信、安全、资源共享和各种网络应用。</li><li><strong>特点</strong>：网络通信、资源共享、网络管理、互操作性。</li></ul></li><li><p><strong>分布式操作系统 (Distributed OS)</strong></p><ul><li>若干台计算机通过网络连接，但在系统中<strong>统一管理</strong>，对用户是<strong>透明</strong>的（用户感觉不到多台计算机的存在）。</li><li><strong>特点</strong>：统一性（核心特征）、透明性、健壮性。</li><li><em>区别</em>：网络 OS 侧重资源共享，分布式 OS 侧重任务分布和统一管理。</li></ul></li><li><p><strong>个人计算机操作系统 (Personal Computer OS)</strong></p><ul><li>目前最广泛使用的 OS，如 Windows, macOS, Linux。</li></ul></li><li><p><strong>嵌入式操作系统 (Embedded OS)</strong></p><ul><li>运行在嵌入式智能芯片环境中，如 iOS, Android, VxWorks, uC/OS。</li><li><strong>特点</strong>：微型化、专用性强、实时性强。</li></ul></li></ol><pre class="mermaid mermaid-22">timeline
    title 操作系统发展历程
    section 早期
        手工操作 : 无OS
        单道批处理 : 自动性, 顺序性
    section 多道技术
        多道批处理 : 宏观并行, 微观串行
        分时系统 : 交互性, 及时性
    section 现代
        实时系统 : 可靠性, 及时性
        网络/分布式 : 资源共享, 透明性</pre><h2 id="五、-操作系统的运行环境" tabindex="-1">五、 操作系统的运行环境 <a class="header-anchor" href="#五、-操作系统的运行环境" aria-label="Permalink to &quot;五、 操作系统的运行环境&quot;">​</a></h2><h3 id="_5-1-运行机制" tabindex="-1">5.1 运行机制 <a class="header-anchor" href="#_5-1-运行机制" aria-label="Permalink to &quot;5.1 运行机制&quot;">​</a></h3><ul><li><strong>两种指令</strong>： <ul><li><strong>特权指令</strong>：不允许用户直接使用，如 I/O 指令、置中断指令。</li><li><strong>非特权指令</strong>：普通运算指令。</li></ul></li><li><strong>两种状态</strong>： <ul><li><strong>内核态 (Kernel Mode)</strong>：运行内核程序，可执行特权指令。</li><li><strong>用户态 (User Mode)</strong>：运行应用程序，只能执行非特权指令。</li></ul></li><li><strong>状态切换</strong>： <ul><li>用户态 -&gt; 内核态：<strong>中断/异常</strong> (唯一途径)。</li><li>内核态 -&gt; 用户态：执行特权指令 (修改 PSW)。</li></ul></li></ul><h3 id="_5-2-中断与异常" tabindex="-1">5.2 中断与异常 <a class="header-anchor" href="#_5-2-中断与异常" aria-label="Permalink to &quot;5.2 中断与异常&quot;">​</a></h3><ul><li><strong>中断 (Interruption)</strong>：来自 CPU 执行指令以外的事件 (外中断)。如 I/O 中断、时钟中断。</li><li><strong>异常 (Exception)</strong>：源自 CPU 执行指令内部的事件 (内中断)。如非法操作码、地址越界、算术溢出、缺页。</li></ul><h3 id="_5-3-系统调用-system-call" tabindex="-1">5.3 系统调用 (System Call) <a class="header-anchor" href="#_5-3-系统调用-system-call" aria-label="Permalink to &quot;5.3 系统调用 (System Call)&quot;">​</a></h3><ul><li><strong>定义</strong>：用户在程序中调用操作系统提供的一些子功能。系统调用是操作系统提供给应用程序（程序员）使用的接口。</li><li><strong>实现机制</strong>：系统调用必须通过<strong>陷入指令 (Trap)</strong>（也称访管指令）在<strong>内核态</strong>下完成。</li><li><strong>调用过程</strong>： <ol><li>传递系统调用参数。</li><li>执行陷入指令（用户态 -&gt; 内核态）。</li><li>执行相应的内核服务程序（系统调用处理程序）。</li><li>返回用户态。</li></ol></li></ul><h4 id="系统调用的分类" tabindex="-1">系统调用的分类 <a class="header-anchor" href="#系统调用的分类" aria-label="Permalink to &quot;系统调用的分类&quot;">​</a></h4><p>通常系统调用按功能可分为以下几类：</p><ol><li><strong>进程控制类</strong><ul><li>创建/终止进程 (fork, exit)</li><li>获得/设置进程属性 (getpid)</li><li>阻塞/唤醒进程 (wait, signal)</li></ul></li><li><strong>文件管理类</strong><ul><li>创建/删除文件 (create, delete)</li><li>打开/关闭文件 (open, close)</li><li>读/写文件 (read, write)</li></ul></li><li><strong>设备管理类</strong><ul><li>申请/释放设备</li><li>设备 I/O 重定向</li></ul></li><li><strong>通信类</strong><ul><li>建立/断开连接</li><li>发送/接收消息</li></ul></li><li><strong>信息维护类</strong><ul><li>获取当前时间 (time)</li><li>获取系统版本信息</li></ul></li></ol><pre class="mermaid mermaid-23">sequenceDiagram
    participant UserApp as 用户程序
    participant Lib as 库函数
    participant Kernel as 操作系统内核
    participant Hardware as 硬件

    UserApp-&gt;&gt;Lib: 调用系统调用封装函数 (如 read)
    activate Lib
    Lib-&gt;&gt;Lib: 准备参数
    Lib-&gt;&gt;Hardware: 执行陷入指令 (Trap)
    deactivate Lib

    activate Hardware
    Hardware-&gt;&gt;Kernel: 切换到内核态
    deactivate Hardware

    activate Kernel
    Kernel-&gt;&gt;Kernel: 查找系统调用表
    Kernel-&gt;&gt;Kernel: 执行对应服务程序
    Kernel--&gt;&gt;UserApp: 返回结果 (切换回用户态)
    deactivate Kernel</pre><h2 id="六、-资源管理功能详解" tabindex="-1">六、 资源管理功能详解 <a class="header-anchor" href="#六、-资源管理功能详解" aria-label="Permalink to &quot;六、 资源管理功能详解&quot;">​</a></h2><p>操作系统的核心功能是对计算机系统的四大类资源进行管理：<strong>处理器 (CPU)</strong>、<strong>存储器 (Memory)</strong>、<strong>I/O 设备</strong> 和 <strong>文件 (信息)</strong>。</p><pre class="mermaid mermaid-24">graph LR
  %% Styles
  classDef manage fill:#f3e5f5,stroke:#4a148c,stroke-width:4px;
  classDef hw fill:#fff3e0,stroke:#e65100,stroke-width:2px;
  classDef sw fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
  classDef detail fill:#f5f5f5,stroke:#333,stroke-width:1px,stroke-dasharray: 5 5;

  Manage((管理)):::manage

  subgraph Hardware [计算机硬件]
    direction TB
    Host[主机]:::hw
    Peripherals[外设]:::hw
  end

  subgraph Software [计算机软件]
    SoftFile[文件]:::sw
  end

  Manage --&gt; Hardware
  Manage --&gt; Software

  %% Host Branch
  Hardware --&gt; Host
  Host --&gt; CPU_Node[&quot;CPU&lt;br/&gt;(进程, 单CPU)&quot;]:::hw
  Host --&gt; Mem_Node[内存]:::hw

  %% CPU Details
  CPU_Node --- CPU_List[&quot;1. 进程管理&quot;]:::detail

  %% Memory Details
  Mem_Node --- Mem_List[&quot;2. 内存管理&quot;]:::detail

  %% Peripherals Branch
  Hardware --&gt; Peripherals
  Peripherals --&gt; Disk_Node[&quot;外存&lt;br/&gt;(磁盘)&quot;]:::hw
  Peripherals --&gt; IO_Node[I/O设备]:::hw

  %% Disk Details
  Disk_Node --- Disk_List[&quot;3. 磁盘管理&quot;]:::detail

  %% IO Details
  IO_Node --- IO_List[&quot;4. I/O设备管理&quot;]:::detail

  %% Software Branch
  Software --&gt; SoftFile
  SoftFile --- File_List[&quot;5. 文件管理&quot;]:::detail

  style Hardware fill:#fff8e1,stroke:#ffb74d
  style Software fill:#e1f5fe,stroke:#4fc3f7</pre><h3 id="_6-1-处理器管理-进程管理" tabindex="-1">6.1 处理器管理 (进程管理) <a class="header-anchor" href="#_6-1-处理器管理-进程管理" aria-label="Permalink to &quot;6.1 处理器管理 (进程管理)&quot;">​</a></h3><p>核心是对 <strong>CPU</strong> 的分配与调度，基本单位是 <strong>进程</strong>。</p><ul><li><strong>1.1 进程的概念</strong><ul><li><strong>程序</strong>：指令的有序集合，静态概念。</li><li><strong>进程</strong>：程序的一次执行过程，是资源分配的基本单位。</li><li><strong>区别</strong>：进程是动态的，程序是静态的；进程包含 PCB (进程控制块)。</li></ul></li><li><strong>1.2 进程的状态及转换</strong><ul><li>三态模型：就绪、运行、阻塞。</li><li>五态模型：增加创建、终止。</li></ul></li><li><strong>1.3 进程的控制与调度</strong><ul><li><strong>控制</strong>：使用原语（创建、撤销、阻塞、唤醒）控制进程状态转换。</li><li><strong>调度</strong>：决定哪个进程获得 CPU。 <ul><li><strong>方式</strong>：剥夺式（抢占）、非剥夺式（非抢占）。</li><li><strong>算法</strong>： <ol><li><strong>FCFS</strong> (先来先服务)：公平，但对短作业不利。</li><li><strong>优先级调度</strong>：静态优先级 / 动态优先级。</li><li><strong>时间片轮转 (RR)</strong>：保证响应时间，适用于分时系统。</li><li><strong>多级反馈队列</strong>：综合了前几种算法的优点。</li></ol></li></ul></li></ul></li><li><strong>1.4 进程间的关系</strong>：同步（协作）与互斥（竞争）。</li><li><strong>1.5 进程通信</strong>：共享存储、消息传递、管道通信。</li><li><strong>1.6 死锁</strong>：多个进程因竞争资源而造成的僵局。</li></ul><h3 id="_6-2-存储器管理-内存管理" tabindex="-1">6.2 存储器管理 (内存管理) <a class="header-anchor" href="#_6-2-存储器管理-内存管理" aria-label="Permalink to &quot;6.2 存储器管理 (内存管理)&quot;">​</a></h3><p>核心是为多道程序提供良好的内存环境，提高内存利用率。</p><ul><li><strong>2.1 内存分配与回收</strong>：分区管理（固定/动态）。</li><li><strong>2.2 内存扩充</strong>：虚拟内存技术（覆盖、交换）。</li><li><strong>2.3 地址映射</strong>：逻辑地址到物理地址的转换。</li><li><strong>2.4 存储保护</strong>：保证进程间互不干扰。</li><li><strong>主要方式</strong>： <ul><li><strong>分页管理</strong>：解决碎片问题。</li><li><strong>分段管理</strong>：符合逻辑结构。</li><li><strong>段页式管理</strong>：集两者之长。</li></ul></li></ul><h3 id="_6-3-设备管理-i-o-管理" tabindex="-1">6.3 设备管理 (I/O 管理) <a class="header-anchor" href="#_6-3-设备管理-i-o-管理" aria-label="Permalink to &quot;6.3 设备管理 (I/O 管理)&quot;">​</a></h3><p>核心是完成用户的 I/O 请求，提高 CPU 与 I/O 设备的并行度。</p><ul><li><strong>3.1 磁盘管理</strong> (外存) <ul><li>物理结构、读写过程。</li><li><strong>磁盘调度算法</strong>：先来先服务、SSTF (最短寻道时间优先)、SCAN (电梯算法) 等。</li></ul></li><li><strong>3.2 I/O 控制方式</strong><ul><li>程序轮询、中断驱动、DMA (直接存储器访问)、通道控制。</li></ul></li><li><strong>3.3 缓冲技术</strong>：引入缓冲区，缓和 CPU 与设备速度不匹配矛盾。</li><li><strong>3.4 设备分配与驱动</strong>：设备独立性软件、设备驱动程序。</li></ul><h3 id="_6-4-文件管理" tabindex="-1">6.4 文件管理 <a class="header-anchor" href="#_6-4-文件管理" aria-label="Permalink to &quot;6.4 文件管理&quot;">​</a></h3><p>核心是解决软件资源的存储、共享和保护。</p><ul><li><strong>4.1 文件系统</strong>：定义与分类。</li><li><strong>4.2 逻辑结构</strong>：流式文件、记录式文件。</li><li><strong>4.3 物理结构</strong>：连续分配、链接分配、索引分配。</li><li><strong>4.4 目录管理</strong>：文件控制块 (FCB)、目录树。</li><li><strong>4.5 文件共享与保护</strong>：存取控制。</li></ul>`,56)]))}const c=t(s,[["render",o]]);export{p as __pageData,c as default};
