import{f as a,o as n,c as t,ah as e}from"./chunks/framework.5bt9HFMa.js";const g=JSON.parse('{"title":"进程的互斥与同步","description":"","frontmatter":{},"headers":[],"relativePath":"series/操作系统/02-1进程的互斥与同步.md","filePath":"series/操作系统/02-1进程的互斥与同步.md","lastUpdated":1777791679000}'),o={name:"series/操作系统/02-1进程的互斥与同步.md"};function i(l,s,p,r,c,d){return n(),t("div",null,s[0]||(s[0]=[e(`<h1 id="进程的互斥与同步" tabindex="-1">进程的互斥与同步 <a class="header-anchor" href="#进程的互斥与同步" aria-label="Permalink to &quot;进程的互斥与同步&quot;">​</a></h1><h2 id="_1-基本概念" tabindex="-1">1. 基本概念 <a class="header-anchor" href="#_1-基本概念" aria-label="Permalink to &quot;1. 基本概念&quot;">​</a></h2><h3 id="临界资源-critical-resource" tabindex="-1">临界资源 (Critical Resource) <a class="header-anchor" href="#临界资源-critical-resource" aria-label="Permalink to &quot;临界资源 (Critical Resource)&quot;">​</a></h3><p>一次仅允许一个进程使用的资源。</p><ul><li><strong>物理临界资源</strong>：如打印机、磁带机等。</li><li><strong>逻辑临界资源</strong>：如共享变量、共享缓冲区等。</li></ul><h3 id="临界区-critical-section" tabindex="-1">临界区 (Critical Section) <a class="header-anchor" href="#临界区-critical-section" aria-label="Permalink to &quot;临界区 (Critical Section)&quot;">​</a></h3><p>进程中访问临界资源的那段代码。 为了保证临界资源的正确使用，将访问临界资源的过程分为四个部分：</p><ol><li><strong>进入区</strong>：检查是否可进入，若可进入则设置正在访问标志（上锁）。</li><li><strong>临界区</strong>：访问临界资源的代码。</li><li><strong>退出区</strong>：清除正在访问标志（解锁）。</li><li><strong>剩余区</strong>：代码中的其余部分。</li></ol><h3 id="同步与互斥" tabindex="-1">同步与互斥 <a class="header-anchor" href="#同步与互斥" aria-label="Permalink to &quot;同步与互斥&quot;">​</a></h3><ul><li><strong>互斥 (Mutual Exclusion)</strong>：间接制约关系。指当一个进程进入临界区使用临界资源时，另一个进程必须等待。</li><li><strong>同步 (Synchronization)</strong>：直接制约关系。指为完成某种任务而建立的两个或多个进程，因为需要在某些位置上协调工作次序而产生的制约关系（如：A必须在B之前执行）。</li></ul><h2 id="_2-临界区互斥的实现原则" tabindex="-1">2. 临界区互斥的实现原则 <a class="header-anchor" href="#_2-临界区互斥的实现原则" aria-label="Permalink to &quot;2. 临界区互斥的实现原则&quot;">​</a></h2><ol><li><strong>空闲让进</strong>：临界区空闲时，允许一个请求进入的进程立即进入。</li><li><strong>忙则等待</strong>：当已有进程进入临界区时，其他试图进入的进程必须等待。</li><li><strong>有限等待</strong>：对请求进入的进程，应保证能在有限时间内进入（防止“饥饿”）。</li><li><strong>让权等待</strong>：当进程不能进入临界区时，应立即释放处理机，防止进程处于“忙等”状态。</li></ol><h2 id="_3-信号量机制-semaphore" tabindex="-1">3. 信号量机制 (Semaphore) <a class="header-anchor" href="#_3-信号量机制-semaphore" aria-label="Permalink to &quot;3. 信号量机制 (Semaphore)&quot;">​</a></h2><p>信号量机制是 Dijkstra 提出的一种卓有成效的进程同步工具。</p><h3 id="_3-1-整型信号量" tabindex="-1">3.1 整型信号量 <a class="header-anchor" href="#_3-1-整型信号量" aria-label="Permalink to &quot;3.1 整型信号量&quot;">​</a></h3><p>用一个整数型变量 <code>S</code> 表示资源数目。</p><ul><li><strong>P操作 (wait)</strong>：<code>while(S &lt;= 0); S--;</code> (存在“忙等”问题，未遵循让权等待)</li><li><strong>V操作 (signal)</strong>：<code>S++;</code></li></ul><h3 id="_3-2-记录型信号量" tabindex="-1">3.2 记录型信号量 <a class="header-anchor" href="#_3-2-记录型信号量" aria-label="Permalink to &quot;3.2 记录型信号量&quot;">​</a></h3><p>为了解决“忙等”现象，引入记录型信号量。它包含两个数据项：</p><ol><li><code>value</code>：资源剩余数量。</li><li><code>L</code>：等待队列 (Linked List)。</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">L;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} semaphore;</span></span></code></pre></div><h4 id="p操作-wait" tabindex="-1">P操作 (wait) <a class="header-anchor" href="#p操作-wait" aria-label="Permalink to &quot;P操作 (wait)&quot;">​</a></h4><p>申请资源：</p><ol><li><code>S.value--</code></li><li>若 <code>S.value &lt; 0</code>，表示资源已分配完毕，进程调用 <code>block</code> 原语自我阻塞，放弃 CPU，并插入等待队列 <code>S.L</code>。</li></ol><h4 id="v操作-signal" tabindex="-1">V操作 (signal) <a class="header-anchor" href="#v操作-signal" aria-label="Permalink to &quot;V操作 (signal)&quot;">​</a></h4><p>释放资源：</p><ol><li><code>S.value++</code></li><li>若 <code>S.value &lt;= 0</code>，表示等待队列中仍有进程在等待，调用 <code>wakeup</code> 原语唤醒 <code>S.L</code> 中的第一个进程。</li></ol><h2 id="_4-经典同步问题" tabindex="-1">4. 经典同步问题 <a class="header-anchor" href="#_4-经典同步问题" aria-label="Permalink to &quot;4. 经典同步问题&quot;">​</a></h2><h3 id="_4-1-生产者-消费者问题-producer-consumer" tabindex="-1">4.1 生产者-消费者问题 (Producer-Consumer) <a class="header-anchor" href="#_4-1-生产者-消费者问题-producer-consumer" aria-label="Permalink to &quot;4.1 生产者-消费者问题 (Producer-Consumer)&quot;">​</a></h3><p><strong>问题描述</strong>：</p><ul><li>一组生产者进程和一组消费者进程共享一个初始为空、大小为 <code>n</code> 的缓冲区。</li><li>只有缓冲区没满时，生产者才能把产品放入缓冲区，否则必须等待。</li><li>只有缓冲区不空时，消费者才能从中取出产品，否则必须等待。</li><li>缓冲区是临界资源，各进程必须互斥访问。</li></ul><hr><h4 id="经典模型-单互斥锁" tabindex="-1">经典模型（单互斥锁） <a class="header-anchor" href="#经典模型-单互斥锁" aria-label="Permalink to &quot;经典模型（单互斥锁）&quot;">​</a></h4><h5 id="信号量设置" tabindex="-1">信号量设置 <a class="header-anchor" href="#信号量设置" aria-label="Permalink to &quot;信号量设置&quot;">​</a></h5><ul><li><code>mutex = 1</code>：互斥信号量，实现对<strong>整个缓冲区</strong>的互斥访问（生产者与消费者互斥）。</li><li><code>empty = n</code>：同步信号量，表示空闲缓冲区的数量。</li><li><code>full = 0</code>：同步信号量，表示非空缓冲区（产品）的数量。</li></ul><blockquote><p><strong>适用场景</strong>：缓冲区为<strong>单一共享数组</strong>（如 <code>buffer[0..n-1]</code>），所有读写操作必须串行化。</p></blockquote><pre class="mermaid mermaid-25">sequenceDiagram
    participant 生产者
    participant 缓冲区
    participant 消费者

    Note over 生产者: 生产一个产品
    生产者-&gt;&gt;缓冲区: P(empty) 申请空位
    生产者-&gt;&gt;缓冲区: P(mutex) 锁定缓冲区
    Note over 缓冲区: 放入产品
    生产者-&gt;&gt;缓冲区: V(mutex) 解锁缓冲区
    生产者-&gt;&gt;缓冲区: V(full) 增加产品数

    Note over 消费者: 准备消费
    消费者-&gt;&gt;缓冲区: P(full) 申请产品
    消费者-&gt;&gt;缓冲区: P(mutex) 锁定缓冲区
    Note over 缓冲区: 取出产品
    消费者-&gt;&gt;缓冲区: V(mutex) 解锁缓冲区
    消费者-&gt;&gt;缓冲区: V(empty) 增加空位
    Note over 消费者: 消费产品</pre><div class="info custom-block"><p class="custom-block-title">注意</p><ul><li>在 <code>P(empty)</code> 和 <code>P(mutex)</code> 的顺序上，必须先申请 <code>empty</code>，再申请 <code>mutex</code>。</li><li>否则可能导致死锁：例如生产者持有 <code>mutex</code> 但 <code>empty=0</code>，而消费者需要 <code>mutex</code> 才能执行 <code>V(empty)</code> 释放空位。</li></ul></div><hr><h4 id="变种模型-双互斥锁-——适用于-多独立缓冲区-场景" tabindex="-1">变种模型（双互斥锁）——适用于“多独立缓冲区”场景 <a class="header-anchor" href="#变种模型-双互斥锁-——适用于-多独立缓冲区-场景" aria-label="Permalink to &quot;变种模型（双互斥锁）——适用于“多独立缓冲区”场景&quot;">​</a></h4><blockquote><p><strong>适用前提</strong>： 缓冲区由 <strong><code>m</code> 个独立的有界缓冲区</strong>（如内存块、slot）组成， <strong>生产者和消费者可同时操作不同的缓冲区</strong>（但不能操作同一个）。</p></blockquote><h6 id="信号量设置-1" tabindex="-1">信号量设置 <a class="header-anchor" href="#信号量设置-1" aria-label="Permalink to &quot;信号量设置&quot;">​</a></h6><ul><li><code>mutex1 = 1</code>：互斥信号量，<strong>仅用于生产者之间互斥</strong>（保护“选择空缓冲区 + 写入”的原子性）。</li><li><code>mutex2 = 1</code>：互斥信号量，<strong>仅用于消费者之间互斥</strong>（保护“选择满缓冲区 + 读取”的原子性）。</li><li><code>empty = m</code>：同步信号量，表示<strong>空闲缓冲区数量</strong>。</li><li><code>full = 0</code>：同步信号量，表示<strong>已填充的缓冲区数量</strong>。 → 满足：<code>empty + full = m</code>（总缓冲区数）</li></ul><blockquote><p><strong>优势</strong>：</p><ul><li>允许多个生产者<strong>并行写入不同空缓冲区</strong></li><li>允许多个消费者<strong>并行读取不同满缓冲区</strong></li><li>提高并发性（相比经典模型）</li></ul></blockquote><h5 id="执行流程" tabindex="-1">执行流程 <a class="header-anchor" href="#执行流程" aria-label="Permalink to &quot;执行流程&quot;">​</a></h5><p><strong>对于生产者</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(empty);          // 申请一个空缓冲区</span></span>
<span class="line"><span>P(mutex1);         // 锁定自身操作（防止多个生产者选到同一空区）</span></span>
<span class="line"><span>放入产品到某空缓冲区</span></span>
<span class="line"><span>V(mutex1);         // 释放生产者互斥锁</span></span>
<span class="line"><span>V(full);           // 通知消费者：有一个新数据</span></span></code></pre></div><p><strong>对于消费者</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(full);           // 申请一个满缓冲区</span></span>
<span class="line"><span>P(mutex2);         // 锁定自身操作（防止多个消费者选到同一满区）</span></span>
<span class="line"><span>从某满缓冲区取出产品</span></span>
<span class="line"><span>V(mutex2);         // 释放消费者互斥锁</span></span>
<span class="line"><span>V(empty);          // 通知生产者：释放一个空位</span></span></code></pre></div><blockquote><p><strong>重要限制</strong>： 此模型<strong>要求缓冲区是独立的</strong>（如通过指针、ID 或索引隔离）， <strong>不能用于单一共享数组</strong>（否则仍需全局 <code>mutex</code> 防止数据竞争）。</p></blockquote><hr><h4 id="模型对比总结" tabindex="-1">模型对比总结 <a class="header-anchor" href="#模型对比总结" aria-label="Permalink to &quot;模型对比总结&quot;">​</a></h4><table tabindex="0"><thead><tr><th>特性</th><th>经典模型（单 <code>mutex</code>）</th><th>变种模型（双 <code>mutex1/mutex2</code>）</th></tr></thead><tbody><tr><td><strong>缓冲区结构</strong></td><td>单一共享数组</td><td>多个独立缓冲区（slot/pool）</td></tr><tr><td><strong>互斥范围</strong></td><td>生产者 ⇄ 消费者 互斥</td><td>生产者 ⇄ 生产者、消费者 ⇄ 消费者 互斥</td></tr><tr><td><strong>并发能力</strong></td><td>低（串行访问缓冲区）</td><td>高（生产/消费可并行）</td></tr><tr><td><strong>适用场景</strong></td><td>通用、教学、简单系统</td><td>高性能系统（如网络包处理、DMA 缓冲池）</td></tr><tr><td><strong>安全性</strong></td><td>安全（强互斥）</td><td>安全（<strong>仅当缓冲区独立时</strong>）</td></tr></tbody></table><hr><h4 id="关键理解" tabindex="-1">关键理解 <a class="header-anchor" href="#关键理解" aria-label="Permalink to &quot;关键理解&quot;">​</a></h4><ul><li><strong>是否需要全局互斥</strong>，取决于<strong>缓冲区是否共享同一块内存</strong>。</li><li>经典模型是<strong>最安全、最通用</strong>的实现；</li><li>变种模型是<strong>在特定前提下的优化</strong>，<strong>不能随意替换</strong>。</li></ul><blockquote><p><strong>原则</strong>： 如果你不确定缓冲区是否“真正独立”，<strong>请使用经典模型</strong>（单 <code>mutex</code>）。</p></blockquote><h3 id="_4-2-读者-写者问题-readers-writers" tabindex="-1">4.2 读者-写者问题 (Readers-Writers) <a class="header-anchor" href="#_4-2-读者-写者问题-readers-writers" aria-label="Permalink to &quot;4.2 读者-写者问题 (Readers-Writers)&quot;">​</a></h3><p><strong>问题描述</strong>：</p><ul><li>允许多个读者同时对文件执行读操作。</li><li>只允许一个写者往文件中写信息。</li><li>任一写者在完成写操作之前不允许其他读者或写者工作。</li><li>写者执行写操作前，应让已有的读者和写者全部退出。</li></ul><p><strong>核心思想</strong>：</p><ul><li>写者与写者互斥。</li><li>写者与读者互斥。</li><li>读者与读者不互斥（可同时读）。</li><li>引入计数器 <code>count</code> 记录当前读者数量。第一个读者负责加锁，最后一个读者负责解锁。</li></ul><p><strong>信号量设置</strong>：</p><p><code>rw_mutex = 1</code>：互斥信号量，保护写操作和读者计数器 count 的更新。</p><p>\\-&gt; 本质是写者锁，也用于保护 count 的原子性。</p><p><code>count = 0</code>：读者计数器（需与 rw_mutex 配合使用，确保原子增减）。</p><pre class="mermaid mermaid-26">sequenceDiagram
    participant 读者1
    participant 读者2
    participant 写者
    participant 共享数据

    Note over 读者1: 第一个读者
    读者1-&gt;&gt;读者1: P(rw_mutex) // 阻止写者
    读者1-&gt;&gt;读者1: count++
    读者1-&gt;&gt;读者1: V(rw_mutex)
    读者1-&gt;&gt;共享数据: 执行读操作（不持有 rw_mutex）

    Note over 读者2: 后续读者
    读者2-&gt;&gt;读者2: P(rw_mutex) // 快速检查 count
    读者2-&gt;&gt;读者2: count++
    读者2-&gt;&gt;读者2: V(rw_mutex)
    读者2-&gt;&gt;共享数据: 执行读操作（与读者1并发）

    Note over 读者1: 最后一个读者退出
    读者1-&gt;&gt;读者1: P(rw_mutex)
    读者1-&gt;&gt;读者1: count--
    alt count == 0
        读者1-&gt;&gt;读者1: V(rw_mutex) // 允许写者
    end

    Note over 写者: 等待所有读者退出
    写者-&gt;&gt;写者: P(rw_mutex) // 阻塞直到 count=0
    写者-&gt;&gt;共享数据: 执行写操作
    写者-&gt;&gt;写者: V(rw_mutex)</pre><p><strong>信号语义</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wrt = 1      // 写者锁（也用于第一个读者阻塞写者）</span></span>
<span class="line"><span>mutex = 1    // 保护 count 的互斥锁</span></span>
<span class="line"><span>count = 0    // 当前读者数</span></span></code></pre></div><p><strong>读者读操作</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(mutex);          // 进入临界区：保护 count</span></span>
<span class="line"><span>count = count + 1;</span></span>
<span class="line"><span>if (count == 1) {</span></span>
<span class="line"><span>    P(wrt);        // 第一个读者：阻塞写者，后续读者可完全不管 wrt</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>V(mutex);          // 释放 count 保护锁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>read();            // 并发读（不持有任何锁）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>P(mutex);          // 再次进入临界区</span></span>
<span class="line"><span>count = count - 1;</span></span>
<span class="line"><span>if (count == 0) {</span></span>
<span class="line"><span>    V(wrt);        // 最后一个读者：释放写者</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>V(mutex);          // 释放 count 保护锁</span></span></code></pre></div><p><strong>读者写操作</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(wrt);            // 请求写权限（会被读者阻塞）</span></span>
<span class="line"><span>write();           // 独占写</span></span>
<span class="line"><span>V(wrt);            // 释放写权限</span></span></code></pre></div><h3 id="_4-3-哲学家进餐问题-dining-philosophers" tabindex="-1">4.3 哲学家进餐问题 (Dining Philosophers) <a class="header-anchor" href="#_4-3-哲学家进餐问题-dining-philosophers" aria-label="Permalink to &quot;4.3 哲学家进餐问题 (Dining Philosophers)&quot;">​</a></h3><p><strong>问题描述</strong>： 5个哲学家围坐一桌，每人之间有一根筷子（共5根）。哲学家只有同时拿到左右两根筷子才能进餐。</p><ul><li>每位哲学家循环执行：<strong>思考 → 饥饿 → 进餐 → 思考</strong></li><li>筷子是<strong>临界资源</strong>，一次只能被一个哲学家用。</li></ul><p><strong>死锁风险</strong>： 若所有哲学家<strong>同时拿起左边的筷子</strong>，则每人持有一根，都在等待右边的筷子 → <strong>循环等待 → 死锁</strong>。 （满足死锁四条件：互斥、占有并等待、不可剥夺、循环等待）</p><h4 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><h5 id="_1-限制就餐人数-最多4人同时进餐" tabindex="-1">1. <strong>限制就餐人数</strong>（最多4人同时进餐） <a class="header-anchor" href="#_1-限制就餐人数-最多4人同时进餐" aria-label="Permalink to &quot;1. **限制就餐人数**（最多4人同时进餐）&quot;">​</a></h5><blockquote><p><strong>思想</strong>：打破“循环等待”条件 —— 确保至少有一人能拿到两根筷子。</p></blockquote><p><strong>信号量设置</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chopstick[5] = {1,1,1,1,1}  // 每根筷子一个信号量</span></span>
<span class="line"><span>max_diners = 4              // 限制同时就餐人数，设置为4</span></span></code></pre></div><p><strong>哲学家 i 的行为</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(max_diners);               // 申请就餐资格</span></span>
<span class="line"><span>P(chopstick[i]);             // 拿左边筷子</span></span>
<span class="line"><span>P(chopstick[(i+1)%5]);       // 拿右边筷子</span></span>
<span class="line"><span>eat();</span></span>
<span class="line"><span>V(chopstick[(i+1)%5]);       // 放右边</span></span>
<span class="line"><span>V(chopstick[i]);             // 放左边</span></span>
<span class="line"><span>V(max_diners);               // 释放就餐资格</span></span></code></pre></div><p><strong>优点</strong>：简单、有效、无死锁 <strong>缺点</strong>：可能<strong>降低并发度</strong>（最多4人，而非5人）</p><p>在这种模型下，最多允许4位哲学家同时进餐，从而确保至少有一位哲学家能够顺利拿到两根筷子，避免了死锁的发生。</p><hr><h5 id="_2-奇偶策略-破坏环路" tabindex="-1">2. <strong>奇偶策略</strong>（破坏环路） <a class="header-anchor" href="#_2-奇偶策略-破坏环路" aria-label="Permalink to &quot;2. **奇偶策略**（破坏环路）&quot;">​</a></h5><blockquote><p><strong>思想</strong>：让部分哲学家<strong>先拿左</strong>，部分<strong>先拿右</strong>，打破对称性，避免循环等待。</p></blockquote><p><strong>哲学家 i 的行为</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (i % 2 == 0) {            // 偶数号：先右后左</span></span>
<span class="line"><span>    P(chopstick[(i+1)%5]);</span></span>
<span class="line"><span>    P(chopstick[i]);</span></span>
<span class="line"><span>} else {                     // 奇数号：先左后右</span></span>
<span class="line"><span>    P(chopstick[i]);</span></span>
<span class="line"><span>    P(chopstick[(i+1)%5]);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>eat();</span></span>
<span class="line"><span>V(chopstick[i]);             // 放左</span></span>
<span class="line"><span>V(chopstick[(i+1)%5]);       // 放右</span></span></code></pre></div><p><strong>优点</strong>：无需额外信号量，<strong>并发度高</strong>（可5人同时吃） <strong>缺点</strong>：<strong>仅适用于固定编号场景</strong>；若哲学家数为偶数，可能仍出现死锁</p><blockquote><p><strong>关键</strong>：因5是奇数，无法形成“先拿左→等待右”的闭环。</p></blockquote><hr><h5 id="_3-原子取放-and-型信号量" tabindex="-1">3. <strong>原子取放</strong>（AND 型信号量） <a class="header-anchor" href="#_3-原子取放-and-型信号量" aria-label="Permalink to &quot;3. **原子取放**（AND 型信号量）&quot;">​</a></h5><blockquote><p><strong>思想</strong>：只有<strong>左右筷子同时可用</strong>，才允许拿起；否则<strong>全部不拿</strong>。</p></blockquote><p><strong>实现方式</strong>（使用记录型信号量 + 条件检查）：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 伪代码（需原子性）</span></span>
<span class="line"><span>if (chopstick[i].available &amp;&amp; chopstick[(i+1)%5].available) {</span></span>
<span class="line"><span>    take both;</span></span>
<span class="line"><span>    eat();</span></span>
<span class="line"><span>    release both;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    wait();  // 或放弃</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>实际可用替代方案</strong>（用一个全局互斥锁）：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>P(mutex);                    // 全局锁</span></span>
<span class="line"><span>if (left_free &amp;&amp; right_free) {</span></span>
<span class="line"><span>    take both;</span></span>
<span class="line"><span>    V(mutex);</span></span>
<span class="line"><span>    eat();</span></span>
<span class="line"><span>    P(mutex);</span></span>
<span class="line"><span>    release both;</span></span>
<span class="line"><span>    V(mutex);</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    V(mutex);</span></span>
<span class="line"><span>    think(); // 或等待</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>优点</strong>：逻辑清晰，<strong>无死锁</strong><strong>缺点</strong>：<strong>严重降低并发性</strong>（全局锁），违背哲学家问题初衷</p><hr><h5 id="_4-超时放弃策略" tabindex="-1">4. <strong>超时放弃策略</strong> <a class="header-anchor" href="#_4-超时放弃策略" aria-label="Permalink to &quot;4. **超时放弃策略**&quot;">​</a></h5><blockquote><p><strong>思想</strong>：若拿不到第二根筷子，<strong>主动释放已持有的筷子</strong>，稍后再试。</p></blockquote><p><strong>哲学家 i 的行为</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while (true) {</span></span>
<span class="line"><span>    P(chopstick[i]);                // 拿左</span></span>
<span class="line"><span>    if (try_P(chopstick[(i+1)%5])) { // 尝试拿右（非阻塞）</span></span>
<span class="line"><span>        eat();</span></span>
<span class="line"><span>        V(chopstick[(i+1)%5]);</span></span>
<span class="line"><span>        V(chopstick[i]);</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        V(chopstick[i]);            // 放左，避免死锁</span></span>
<span class="line"><span>        think_a_while();            // 稍后再试</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>优点</strong>：无死锁，<strong>高并发</strong><strong>缺点</strong>：需支持<strong>非阻塞信号量操作</strong>（如 <code>try_P</code>），标准信号量需用<strong>超时机制</strong>模拟</p><hr><h4 id="方案对比总结" tabindex="-1">方案对比总结 <a class="header-anchor" href="#方案对比总结" aria-label="Permalink to &quot;方案对比总结&quot;">​</a></h4><table tabindex="0"><thead><tr><th>方案</th><th>死锁风险</th><th>并发度</th><th>实现复杂度</th></tr></thead><tbody><tr><td>限制人数</td><td>无</td><td>中（≤4人）</td><td>低</td></tr><tr><td>奇偶策略</td><td>无</td><td>高（5人）</td><td>低</td></tr><tr><td>原子取放</td><td>无</td><td>低（串行）</td><td>中</td></tr><tr><td>超时放弃</td><td>无</td><td>高</td><td>高</td></tr></tbody></table><hr><h4 id="关键理解-1" tabindex="-1">关键理解 <a class="header-anchor" href="#关键理解-1" aria-label="Permalink to &quot;关键理解&quot;">​</a></h4><ul><li>哲学家问题本质是<strong>资源分配 + 死锁避免</strong>的模型。</li><li>所有方案都<strong>破坏死锁四条件之一</strong>（通常是“循环等待”或“占有并等待”）。</li><li><strong>没有完美方案</strong>：需在<strong>安全性、并发性、复杂度</strong>之间权衡。</li></ul><h2 id="_5-管程-monitor" tabindex="-1">5. 管程 (Monitor) <a class="header-anchor" href="#_5-管程-monitor" aria-label="Permalink to &quot;5. 管程 (Monitor)&quot;">​</a></h2><h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3><p>管程是一种高级同步机制，由一组数据及定义在这组数据之上的操作（过程）组成。</p><ul><li><strong>特点</strong>：管程内的代码只能被一个进程互斥地执行（由编译器实现互斥，程序员无需关心）。</li></ul><h3 id="组成" tabindex="-1">组成 <a class="header-anchor" href="#组成" aria-label="Permalink to &quot;组成&quot;">​</a></h3><ol><li><strong>局部数据结构</strong>：只能被管程内部的过程访问。</li><li><strong>过程 (函数)</strong>：对局部数据进行操作。</li><li><strong>初始化代码</strong>。</li></ol><h3 id="条件变量-condition-variable" tabindex="-1">条件变量 (Condition Variable) <a class="header-anchor" href="#条件变量-condition-variable" aria-label="Permalink to &quot;条件变量 (Condition Variable)&quot;">​</a></h3><p>为了解决同步问题，管程引入了条件变量。</p><ul><li><code>wait</code> 操作：当条件不满足时，进程阻塞，并释放管程锁。</li><li><code>signal</code> 操作：唤醒一个因该条件而阻塞的进程。</li></ul>`,122)]))}const u=a(o,[["render",i]]);export{g as __pageData,u as default};
