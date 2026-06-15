// ==============================================================
// Minecraft (我的世界) Java版 100问 客服快捷复制知识库
// 本文件包含 5 大分类，共计 100 个精细的 Q&A 数据
// 严禁包含 Emoji 表情；严禁使用“官方”指代本平台
// ==============================================================

const MC_QA_DB = [
    // ==========================================
    // 一、安装、启动与 Java 运行环境 (1-20)
    // ==========================================
    {
        id: "mc-qa-1",
        category: "install",
        title: "启动游戏提示“未安装 Java 运行时环境”",
        content: "这是因为您的系统中缺少运行 Java 版《我的世界》所需的 Java 环境。\n解决方法：我们将根据您当前游玩的游戏版本，远程为您下载并安装最匹配的 64 位 JDK 运行环境，并自动完成环境变量的注册，以防游戏因缺失基础环境报错。"
    },
    {
        id: "mc-qa-2",
        category: "install",
        title: "双击启动器没有反应或一闪而过",
        content: "启动器无反应多为后台进程残留冲突、.NET Framework 环境缺失或 Java 路径配置错误导致。\n解决方法：我们将首先在任务管理器中清理残留的 java 或 javaw 进程；若依旧打不开，我们将为您修复 .NET Framework 组件，或重置启动器的配置文件。"
    },
    {
        id: "mc-qa-3",
        category: "install",
        title: "微软正版登录提示“无法连接至 Xbox Live 服务”",
        content: "这是由于您本地网络与微软 Xbox 服务器之间的连接受到干扰，或 Windows 的 Xbox 相关系统服务未启动。\n解决方法：我们将为您检查并开启系统的 Xbox Live Auth Manager 等核心服务；若依旧无法登录，我们将通过修改 hosts 域名解析或配置网络加速工具，绕过网络节点拦截。"
    },
    {
        id: "mc-qa-4",
        category: "install",
        title: "微软正版登录提示“无效的凭据”或“密码错误”",
        content: "微软登录提示凭据无效通常是因为您的微软账号启用了双重身份验证，或者登录缓存已损坏。\n解决方法：我们将引导您在网页端尝试登录以验证密码是否正确；若网页登录正常，我们将清除启动器中保存的旧凭据缓存，并使用浏览器唤起的新式安全登录完成授权。"
    },
    {
        id: "mc-qa-5",
        category: "install",
        title: "离线登录模式怎么在多人联机里自定义皮肤",
        content: "由于离线登录没有和微软正版数据库关联，默认会显示史蒂夫或爱丽克丝皮肤。\n解决方法：\n1. 如果您在公共联机服，可以使用 CustomSkinLoader 模组并关联第三方皮肤站（如 LittleSkin）；\n2. 注册皮肤站账号，上传您喜爱的皮肤文件，将皮肤站的 API 链接复制并配置在启动器的皮肤设置中即可正常显示。"
    },
    {
        id: "mc-qa-6",
        category: "install",
        title: "JDK 和 JRE 有什么区别，玩游戏到底装哪个",
        content: "JRE 是 Java 运行环境，适合普通用户运行已开发好的程序；JDK 是 Java 开发工具包，包含了完整的 JRE 以及开发调试工具。\n建议：为了保证新版本游戏和大型模组包的完美兼容，我们推荐直接安装 JDK，其内部自带的虚拟机版本更加稳定，且支持更高级的内存分配与垃圾回收管理。"
    },
    {
        id: "mc-qa-7",
        category: "install",
        title: "32位 Windows 系统能安装 64位 Java 吗",
        content: "不能。32位操作系统由于架构限制，无法运行 64位程序。这也意味着您的游戏最大只能分配 1G 运行内存，极易导致因为内存溢出而闪退崩溃。\n建议：如果您的电脑硬件支持，建议联系我们为您重装 64位纯净操作系统，以解锁全部物理内存的限制。"
    },
    {
        id: "mc-qa-8",
        category: "install",
        title: "64位系统装了 Java 8 还是报错“分配内存不足”",
        content: "这通常是因为您的电脑中误装了 32位版本的 Java。32位 Java 在 64位系统上运行时，最大内存分配依然受限于 1024MB 边界。\n解决方法：我们将为您彻底卸载所有 32位 Java，重新部署最新版 64位 Java 运行环境，并在启动器中将最大内存调整为 4096MB 以上。"
    },
    {
        id: "mc-qa-9",
        category: "install",
        title: "如何在一台电脑上实现 Java 8、17 和 21 的共存与切换",
        content: "在游玩不同版本的我的世界时（如 1.12.2 用 Java 8，1.20 用 Java 17），无需频繁修改系统环境变量。\n解决方法：我们将为您在不同的独立目录安装这三个版本的 Java，随后在启动器（如 HMCL 或 PCL2）的“全局设置”或“具体版本设置”中，手动指定每个版本对应的 javaw.exe 绝对路径，即可实现完美共存与免重启切换。"
    },
    {
        id: "mc-qa-10",
        category: "install",
        title: "启动器找不到安装在默认路径下的 Java，需要手动定位",
        content: "启动器自动扫描路径失败时，需要手动指定 Java 虚拟机路径。\nJava 默认的通用安装位置如下：\n- Java 8: `C:\\Program Files\\Java\\jdk1.8.x_xx\\bin\\javaw.exe`\n- Java 17/21: `C:\\Program Files\\Java\\jdk-17\\bin\\javaw.exe`\n我们将通过启动器的浏览按钮，手动帮您定位并锁定该路径。"
    },
    {
        id: "mc-qa-11",
        category: "install",
        title: "官方版 Minecraft 启动器报错“无法更新运行时”",
        content: "微软原装的 Minecraft Launcher 经常因为国内与微软网络连接异常，导致无法下载更新所需的 Java 运行时文件。\n解决方法：我们将为您修改系统的网络 DNS 解析；如问题依旧，我们建议安装国内优秀且主流的第三方启动器（如 HMCL 或 PCL2），这能完美规避官方启动器的网络更新死锁问题。"
    },
    {
        id: "mc-qa-12",
        category: "install",
        title: "如何给 HMCL 或 PCL2 启动器设置单独的虚拟机 JVM 参数",
        content: "默认的 JVM 参数没有针对模组游戏进行优化，在大内存、高版本下容易产生严重的卡顿。\n优化方案：进入启动器的高级设置，在 JVM 参数输入框中加入 `-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=20`。我们将帮您配置，这能使 Java 采用更高效的 G1 垃圾回收算法，极大减少因垃圾回收导致的游戏瞬卡。"
    },
    {
        id: "mc-qa-13",
        category: "install",
        title: "什么是 Java 精简版 (JRE)，对游戏运行会有影响吗",
        content: "精简版 JRE 移除了部分不常用的开发与调试类库，体积通常较小。但是在加载带有复杂图形界面、物理引擎或多线程通信的大型模组（Mod）时，精简版可能因为缺少必要的运行时类库导致游戏崩溃。\n建议：我们为您安装的均是完整版的原装 Java，杜绝任何精简阉割版以防隐性崩溃。"
    },
    {
        id: "mc-qa-14",
        category: "install",
        title: "使用第三方平台一键下载的 Java 运行环境是否安全",
        content: "许多不受信任的第三方平台提供的 Java 安装包可能捆绑了流氓推广软件或恶意修改版，存在极大的安全风险。\n说明：本站所使用的全部 Java 运行环境，均直接获取自甲骨文（Oracle）官网、微软开发者网络（MSDN）或开源社区（如 Adoptium Temurin），保证 100% 纯净、安全、免安装直接关联。"
    },
    {
        id: "mc-qa-15",
        category: "install",
        title: "高版本 Minecraft 1.20.5+ 能不能用 Java 17 启动",
        content: "不能。从 1.20.5 版本开始，Mojang 官方将游戏所需的最低 Java 编译版本提升到了 Java 21。使用 Java 17 启动该版本游戏会直接报错 class version 不匹配闪退。\n解决方法：我们将为您在电脑中配置专用的 Java 21 环境，并将启动器的该版本设置指向 Java 21 的运行路径。"
    },
    {
        id: "mc-qa-16",
        category: "install",
        title: "游戏启动时提示“未找到有效的运行时配置文件”",
        content: "这代表您的游戏核心版本（Minecraft .jar）或者对应的加载器配置文件被杀毒软件误杀，或者由于之前下载中断导致文件损坏。\n解决方法：我们将进入游戏版本目录，清除受损的核心包，并在启动器中重新下载补全对应的版本文件与资源配置项。"
    },
    {
        id: "mc-qa-17",
        category: "install",
        title: "Java 环境变量配置不正确导致 CMD 运行 java 提示找不到命令",
        content: "若您需要使用命令行启动服务器或某些特殊工具，必须正确配置 PATH 环境变量。\n配置步骤：我们将为您在“系统属性 - 环境变量”中，将 `JAVA_HOME` 新增为 Java 的解压目录，并将 `%JAVA_HOME%\\bin` 追加到 `PATH` 变量的顶部，确保系统全局可识别 `java` 指令。"
    },
    {
        id: "mc-qa-18",
        category: "install",
        title: "提示游戏文件校验不完整，需要如何进行重新校验",
        content: "当遇到纹理丢失、中文字体显示不全、或进入世界时闪退，往往是游戏资源文件有残缺。\n解决方法：我们无需删除整个游戏。我们将使用启动器自带的“版本设置 - 资源补全 / 重新校验”功能，启动器会自动与官方源比对哈希值，仅重新下载已损坏的资源文件。"
    },
    {
        id: "mc-qa-19",
        category: "install",
        title: "启动器中的离线角色 ID 会不会与联机服务器冲突",
        content: "如果服务器开启了正版验证（online-mode=true），离线 ID 是无法进入的；如果服务器是离线模式，且已有其他玩家注册了相同的 ID 昵称，您进入服务器时会提示您无法登录。\n解决方法：我们建议您修改启动器中“离线角色昵称”为一个独特的英文加数字组合，以避免昵称冲突。"
    },
    {
        id: "mc-qa-20",
        category: "install",
        title: "如何修改 Minecraft 的 .minecraft 默认游戏存档安装路径",
        content: "默认情况下，很多启动器会把游戏文件放在 C 盘的 AppData 目录下，随着模组增加会严重占用 C 盘空间。\n解决方法：我们在启动器中为该版本开启“版本隔离”模式。这样，所有的游戏世界、存档、模组文件夹都会建立在启动器所在的独立目录下，方便您在非系统盘（如 D 盘）统一管理。"
    },

    // ==========================================
    // 二、游戏性能、帧率调优与画面异常 (21-40)
    // ==========================================
    {
        id: "mc-qa-21",
        category: "performance",
        title: "游戏进去了但是画面极度卡顿，帧率只有个位数",
        content: "游戏帧率极低多是由于游戏默认调用了 CPU 的核心显卡，而没有使用高性能的独立显卡运行导致。\n解决方法：我们将在您的系统中将 Java（javaw.exe）的图形属性修改为“高性能”，强制其调用 NVIDIA 或 AMD 独立显卡进行游戏画面渲染。"
    },
    {
        id: "mc-qa-22",
        category: "performance",
        title: "为什么游戏只调用了 Intel 核心显卡，没有调用英伟达独立显卡",
        content: "由于 Minecraft 主要是通过 Java 启动运行，Windows 系统经常无法将其判定为标准的 3D 游戏，因此默认以节能模式（集成显卡）运行它。\n解决方法：我们将进入“NVIDIA 控制面板 - 管理 3D 设置 - 程序设置”，添加您的 javaw.exe 并将其首选图形处理器设置为“高性能 NVIDIA 处理器”。"
    },
    {
        id: "mc-qa-23",
        category: "performance",
        title: "配置了英伟达独显还是不调用独立显卡（手动在系统设置中强开）",
        content: "若 NVIDIA 面板设置后未生效，多是 Windows 系统的图形设置具有更高优先级。\n解决方法：我们将打开 Windows“设置 - 系统 - 屏幕 - 图形设置”，通过浏览添加您游戏正在运行的绝对 Java 路径，并在选项中手动将其强制勾选为“高性能（独立显卡）”。"
    },
    {
        id: "mc-qa-24",
        category: "performance",
        title: "高配置电脑玩我的世界帧率低（如何调整启动器内存）",
        content: "即使您的显卡和 CPU 再强，如果启动器默认分配的 Java 内存过小（如仅有默认的 1G 或 2G），一旦加载模组或高清纹理，游戏就会频繁发生内存清理（GC），导致帧率断崖式下跌。\n解决方法：我们将在您的启动器设置中，将“最大内存”调整为 4096MB 到 8192MB 之间（占您总内存的 50% 左右最为合适）。"
    },
    {
        id: "mc-qa-25",
        category: "performance",
        title: "OptiFine 优化模组在 Forge 环境下应该放到哪里",
        content: "OptiFine 既是一个独立安装包，也可以作为 Forge 模组使用。\n安装步骤：在确认您的游戏已经安装 Forge 之后，无需双击运行 OptiFine 安装程序，直接将下载得到的 `OptiFine_xx_xx.jar` 模组包文件，复制拖入您的游戏主目录下的 `mods` 文件夹中，重新启动即可关联生效。"
    },
    {
        id: "mc-qa-26",
        category: "performance",
        title: "高版本 Fabric 为什么推荐 Sodium（钠）而不是 OptiFine",
        content: "在高版本（1.16.5 及以上）的 Fabric 环境中，OptiFine 与大量现代模组不兼容，导致闪退且渲染效率落后。\n原因：Sodium（钠）是专为 Fabric 编写的现代高性能渲染引擎，其性能远超 OptiFine。我们将为您使用 Sodium 优化方案，并同步安装 Sodium Extra 和 Reese's Sodium Options 以获得完整的配置菜单。"
    },
    {
        id: "mc-qa-27",
        category: "performance",
        title: "什么是 Iris 虹膜模组，怎么在 Fabric 环境下使用光影包",
        content: "Iris（虹膜模组）是 Fabric 平台下的现代化光影加载器，与 Sodium（钠）完美兼容，支持在游戏内免重启直接切换光影包。\n配置步骤：我们将为您的游戏安装 Iris 模组，安装后您的游戏根目录下会多出 `shaderpacks` 文件夹，我们将您喜欢的光影包（.zip 格式）拖入此文件夹即可在游戏视频设置中启用。"
    },
    {
        id: "mc-qa-28",
        category: "performance",
        title: "加载光影包后整个画面变成黑色或出现马赛克等贴图错误",
        content: "这通常是因为该光影包的编写代码不支持您当前的显卡型号（如 Intel 核心显卡运行大型光影包），或者显卡驱动需要升级。\n解决方法：我们将为您更换兼容性更好的轻量级光影（如 Sildurs 或 Complementary），并关闭体积云、体积光等极其消耗 GPU 精度的选项。"
    },
    {
        id: "mc-qa-29",
        category: "performance",
        title: "游戏提示“渲染区块超出限制，发生内存泄漏”",
        content: "这是因为您的视距（Chunk）拉得过高，导致显存或运行内存溢出。\n解决方法：我们将在游戏设置中将“渲染距离（Render Distance）”和“模拟距离（Simulation Distance）”均下调至 8 至 10 区块，同时开启区块淡入效果，这能显著降低电脑的渲染负载。"
    },
    {
        id: "mc-qa-30",
        category: "performance",
        title: "材质包格式不匹配或者提示“专为较旧/较新版本设计”能用吗",
        content: "如果仅仅是提示版本不符，大多数纯纹理替换的材质包（Resource Pack）仍然可以强制加载运行，部分新方块会显示默认贴图。\n解决方法：我们在游戏“资源包”列表中直接强制将其移至右侧，忽略警告点击确定；若出现贴图粉红黑方格丢失，我们将为您寻找对应版本的专属材质。"
    },
    {
        id: "mc-qa-31",
        category: "performance",
        title: "为什么游戏内的视距（Render Distance）不能拉得太大",
        content: "Minecraft 的区块数量是成指数级上升的，视距拉高一倍，显卡和 CPU 的计算负载将提高数倍，特别容易引起物理延迟（TPS 低）。\n建议：在多人联机或者使用大量模组的生存地图中，最大视距不建议拉到 16 区块以上，8 到 12 区块是流畅与视觉体验的最佳平衡点。"
    },
    {
        id: "mc-qa-32",
        category: "performance",
        title: "游戏画面频繁出现严重的撕裂感（如何开启垂直同步 VSync）",
        content: "当游戏的帧率（FPS）远远高于您的显示器刷新率（如游戏 200 帧，显示器仅 60Hz）时，就会发生画面撕裂。\n解决方法：我们将在“视频设置 - 帧率限制”中，将其向左拉至最底端，开启“启用垂直同步 (VSync)”，强制游戏帧率与显示器物理刷新率保持绝对一致，以消除撕裂感。"
    },
    {
        id: "mc-qa-33",
        category: "performance",
        title: "安装了光影后帧率骤降 80%，如何平衡画质和性能",
        content: "很多光影包默认开启了超高倍率的阴影分辨率和折射效果，极耗显卡性能。\n调优步骤：我们将在光影包的高级设置中，将“阴影分辨率”调整为 1024 级，关闭“各向异性过滤”与“抗锯齿（TAA/FXAA）”，使用 0.75x 的“渲染比例 (Render Scale)”，这能在几乎不降低主观画质的前提下提升近一倍帧率。"
    },
    {
        id: "mc-qa-34",
        category: "performance",
        title: "游戏在切换视距或者载入新区块时经常卡顿 1-2 秒",
        content: "区块生成和载入是由于 CPU 的单核频繁进行计算，或您的机械硬盘读写速度过慢引起。\n解决方法：我们将为您在 Fabric 下安装 Lithium（锂）和 FerriteCore（铁氧体核心）模组，大幅降低区块载入时的内存碎片占用；同时我们建议将游戏整体安装在固态硬盘（SSD）上，大幅减少物理读写延迟。"
    },
    {
        id: "mc-qa-35",
        category: "performance",
        title: "电脑温度过高，CPU 和显卡风扇狂转该如何进行限制",
        content: "如果在游戏设置中“帧率限制”设为“无限制”，显卡会始终以 100% 的功耗进行工作，导致发热和风扇狂转。\n解决方法：我们将在视频设置中将“最大帧率”限制为与您显示器刷新率相同（如 60FPS 或 144FPS），这能让显卡在达到流畅阈值后自动休眠，极大降低功耗与发热量。"
    },
    {
        id: "mc-qa-36",
        category: "performance",
        title: "游戏经常在玩了半小时后卡死无响应（排查 Java 垃圾回收机制）",
        content: "这是由于内存中积压了大量废弃数据，而 Java 在进行“Full GC”（全局垃圾回收）时，会强制暂停游戏所有主线程工作导致瞬间卡死。\n解决方法：我们将通过配置高级 JVM 参数来启用 G1GC 垃圾回收器，并限制垃圾回收造成的最大暂停时间（如 `-XX:MaxGCPauseMillis=15`）从而彻底解决周期性卡死。"
    },
    {
        id: "mc-qa-37",
        category: "performance",
        title: "玩游戏时切出桌面（Alt+Tab）再切回来导致黑屏或卡死",
        content: "这是因为在“全屏模式”下，Windows 系统会改变显卡的输出模式，切屏会导致显卡上下文环境重新加载失败。\n解决方法：我们将在游戏视频设置中关闭“全屏”，并开启“窗口化”或安装“Borderless Window（无边框窗口）”模组，使其以无边框窗口运行，实现秒级切屏且永不卡死。"
    },
    {
        id: "mc-qa-38",
        category: "performance",
        title: "如何开启游戏自带的调试界面查看当前的帧率与显卡状态",
        content: "进入游戏后，按下键盘上的 `F3` 键，屏幕左上角和右上角会显示详细的调试数据。\n- 左上角：`FPS`（帧率）、`CPU` 和 `Java` 版本及分配内存使用率；\n- 右上角：`Display` 后面会显示当前游戏正在调用的显卡型号（如果是 Intel HD，说明未用独显）。我们将以此判断您的游戏运行状态。"
    },
    {
        id: "mc-qa-39",
        category: "performance",
        title: "如何清理 .minecraft/saves 目录以腾出更多运行物理内存",
        content: "此目录为单人存档目录，并不会影响运行时的物理内存，但会占用硬盘空间。如果硬盘爆满，会导致 Java 无法写入临时文件而崩溃。\n解决方法：我们建议您清理不再游玩的废弃世界存档，或者使用 PCL2 启动器自带的“备份管理”，将旧存档压缩归档移至非系统盘中备份。"
    },
    {
        id: "mc-qa-40",
        category: "performance",
        title: "安装模组后启动显示“内存溢出 (Out of Memory)”",
        content: "这是因为您的模组数量较多，游戏运行所需要的物理内存在超出分配值后直接溢出崩溃。\n解决方法：我们将在您的启动器中手动调大内存分配；若您电脑物理内存实在有限（如 8G 内存电脑最多只能分配 4G 内存），我们将帮您卸载不常用的大型科技、魔法或多维度模组来精简模组包。"
    },

    // ==========================================
    // 三、模组（Mod）及 API 加载器冲突 (41-60)
    // ==========================================
    {
        id: "mc-qa-41",
        category: "mods",
        title: "Forge 和 Fabric 能不能放在同一个版本中运行",
        content: "不能。Forge 和 Fabric 是两个完全不同的 Mod 字节码重写加载器，它们的底层架构和事件调用机制水火不容。尝试将二者混合运行或把 Forge 模组放入 Fabric 版本中会导致游戏直接报错闪退。\n解决方法：我们必须在启动器中分别建立独立的 Forge 和 Fabric 游戏版本进行游玩。"
    },
    {
        id: "mc-qa-42",
        category: "mods",
        title: "为什么游戏启动时提示“缺少前置 Mod”（Missing Dependency）",
        content: "许多功能模组需要依赖作者编写的基础公共类库（前置 API）才能运行，缺少前置 Mod 会导致启动器直接弹窗拦截。\n解决方法：我们将进入崩溃日志或提示窗口，确定缺失的具体前置名称（如 Architectury、Cloth Config 或 GeckoLib 等），从资源网下载对应的版本并拖入 `mods` 文件夹中。"
    },
    {
        id: "mc-qa-43",
        category: "mods",
        title: "整合包启动后闪退，Exit Code 1 崩溃报告去哪里找",
        content: "Exit Code 1 代表游戏运行时发生未捕获的严重异常导致进程异常终止。\n定位方法：崩溃报告保存在您游戏主目录下的 `.minecraft/crash-reports` 文件夹中，文件格式为日期命名的文本。我们将通过该日志中的 `STACKTRACE` 关键错误堆栈，精准定位冲突源。"
    },
    {
        id: "mc-qa-44",
        category: "mods",
        title: "从网上下载的模组文件 .jar 为什么被解压成了 ZIP",
        content: "这通常是因为您的电脑安装了压缩软件（如 WinRAR），由于其默认关联了 .jar 文件的图标，导致看起来像压缩包。\n特别提醒：请千万不要将其解压！我的世界只能识别完整的 `.jar` 文件。请直接将未解压的 `.jar` 模组包拖入 `mods` 文件夹，即可在游戏里正常识别运行。"
    },
    {
        id: "mc-qa-45",
        category: "mods",
        title: "游戏提示“Mod requires Java version 17 or above”该如何解决",
        content: "这是因为该模组（Mod）是在 Java 17 的环境下编译开发的，无法运行在低于 Java 17（如 Java 8）的过旧环境中。\n解决方法：我们将为您配置 64 位 Oracle Java 17 环境，并在您的启动器该版本高级设置中，将 Java 路径定位到 Java 17 的 javaw.exe 上。"
    },
    {
        id: "mc-qa-46",
        category: "mods",
        title: "NeoForge 和 Forge 是一回事吗，高版本模组怎么选加载器",
        content: "在高版本（如 1.20.2+）中，由于原 Forge 核心开发团队分裂，全新创立了 NeoForge 加载器。此后大部分现代高版本模组将转向 NeoForge，二者互不兼容。\n建议：我们建议在 1.20.1 及以下版本使用 Forge，在 1.20.2 及以上高版本，依据您想要安装的 Mod 官方要求选择 NeoForge 核心。"
    },
    {
        id: "mc-qa-47",
        category: "mods",
        title: "如何阅读 crash-reports 日志找出具体是哪个 Mod 冲突了",
        content: "打开最新的崩溃报告，搜索 `Description: Registry`、`Description: Initializing game` 或 `A detailed walkthrough of the error`：\n随后观察错误栈下方的第一行 `at` 指令里的包名，例如包含 `com.sodium` 说明是钠模组报错，包含 `net.optifine` 则是 OptiFine 报错。我们将帮您阅读排查。"
    },
    {
        id: "mc-qa-48",
        category: "mods",
        title: "删除某个模组后，单人存档打不开了，提示“缺少方块数据”",
        content: "如果存档里已经建造了该模组特有的方块或机器，强行删除 Mod 会导致游戏在加载地图时检测到 UUID/注册表方块丢失报错。\n解决方法：我们在进入存档时，弹出的“是否继续加载（缺少部分ID）”警告窗口中，选择“是”或输入 `/fml confirm`，系统会自动将缺失方块替换为空气强行进入。"
    },
    {
        id: "mc-qa-49",
        category: "mods",
        title: "在同一个游戏版本中，不同作者的同名 Mod 冲突该怎么办",
        content: "这通常是由于 Mod 的命名空间或类加载路径冲突引起。\n解决方法：我们无法同时使用功能完全重复的同类模组（例如两个不同的地图标记模组）。我们必须根据您的喜好，彻底删除其中一个，只保留一个模组文件以确保兼容性。"
    },
    {
        id: "mc-qa-50",
        category: "mods",
        title: "游戏启动时卡在“Mojang Studios”红色进度条界面很久",
        content: "这通常是由于模组在加载期间进行大量的网络请求（如检查更新、加载皮肤），或者是加载大体积的高清材质包解析慢。\n解决方法：我们将在启动器中把游戏分配内存调大；或者进入配置，关闭各个模组属性里的 `checkForUpdates`（自动检查更新）选项以加快速度。"
    },
    {
        id: "mc-qa-51",
        category: "mods",
        title: "游戏运行正常，但是某些模组的配置文件（Config）在哪里修改",
        content: "大部分模组在首次运行后，都会在其游戏主目录下的 `config` 文件夹中生成对应的同名配置文件（通常为 .toml、.json 或 .cfg 格式）。\n修改方法：我们将使用记事本或 VS Code 打开这些文件，根据其中的属性值进行如调整出怪率、关闭特定方块功能等个性化设置。"
    },
    {
        id: "mc-qa-52",
        category: "mods",
        title: "整合包里的汉化包或者语言资源文件失效，全变成了英文",
        content: "这通常是因为没有安装前置的中文本地化组件，或者游戏内的主语言设置被意外更改成了英文。\n解决方法：\n1. 我们首先进入“Options - Language”，将语言选择为“简体中文”；\n2. 若部分复杂 Mod 依然没有中文，我们将为您下载安装专门的“自动汉化更新（I18n）”模组或加载汉化资源包。"
    },
    {
        id: "mc-qa-53",
        category: "mods",
        title: "在 Fabric 环境中安装了 OptiFine 导致各种未知报错冲突",
        content: "OptiFine 并非专门为 Fabric 架构设计，直接放入 mods 会破坏 Fabric 的 Mixin 渲染管线导致游戏必崩。\n解决方法：如果您在 Fabric 环境中非要使用 OptiFine，必须首先安装 OptiFabric 前置桥接模组；但我们更推荐直接移除 OptiFine，安装 Sodium（钠）与 Iris（虹膜）以获得更流畅的体验。"
    },
    {
        id: "mc-qa-54",
        category: "mods",
        title: "什么是 Mod 版本号中的 -beta 或 -alpha，会不会不稳定",
        content: "带有 `-alpha` 标识代表该模组是开发初期版本，功能尚不完善，极易出现内存泄漏和崩溃；`-beta` 则是测试版，基本可用但可能存有小 Bug；无特殊后缀代表是 `Release` 正式版。\n建议：本站为您部署模组时，均优先推荐稳定度最高的正式版，确保存档绝不损坏。"
    },
    {
        id: "mc-qa-55",
        category: "mods",
        title: "从游戏目录手动拖入了模组包但是启动器并没有识别到",
        content: "这通常是因为您的游戏安装开启了“版本隔离”模式，而您放错到了默认的 AppData 根目录下的 mods 中。\n解决方法：我们应在启动器里右键对应的版本，选择“打开独立版本目录”，这会直接定位到它独立的 `mods` 文件夹，将文件拖入此独立目录即可正常识别。"
    },
    {
        id: "mc-qa-56",
        category: "mods",
        title: "游戏启动报错“Duplicate Mod ID detected”代表什么意思",
        content: "这代表您的 `mods` 文件夹中安装了两个完全相同的模组文件（通常是同一模组的旧版本和新版本同时存在）。\n解决方法：我们将进入 `mods` 文件夹，搜索对应冲突的模组名称，将多余的、版本较低的重复 `.jar` 文件彻底删除只保留一份即可。"
    },
    {
        id: "mc-qa-57",
        category: "mods",
        title: "部分模组需要特定的 API 前置，怎么快速判定缺什么前置",
        content: "如果在游戏日志或弹窗提示中出现类似 `Requires 'X' (version x.x)` 的字样，说明缺失了前置 API。\n常见前置对照如下：\n- 提示 Architectury: 需下载安装 Architectury API\n- 提示 GeckoLib: 需下载安装 GeckoLib 3D动画库\n我们将直接为您配齐对应的依赖包。"
    },
    {
        id: "mc-qa-58",
        category: "mods",
        title: "游戏更新版本后，以前旧版本的 Mod 还能直接复制过来用吗",
        content: "通常不能。因为 Minecraft 的混淆表和混淆方法在每个大版本（如从 1.12.2 到 1.16.5）之间会发生翻天覆地的变化。直接复制旧 Mod 会导致加载器反射调用失败引起崩溃。\n建议：我们必须为新的游戏版本去专门的模组站下载全新对应版本的 Mod 文件。"
    },
    {
        id: "mc-qa-59",
        category: "mods",
        title: "启动器在下载模组依赖时下载极慢或进度卡住 0%",
        content: "启动器默认会连接位于国外的 Github 或 CurseForge 官方 API 服务器进行组件下载，由于网络节点不稳定极易卡死。\n解决方法：我们将为您在启动器设置中将下载源切换为“国内源（如网易/墨灵源镜像网）”，这能成百倍地提升下载稳定性及网络速率。"
    },
    {
        id: "mc-qa-60",
        category: "mods",
        title: "什么是 Mod 的客户端独占与服务端独占，如何进行区分",
        content: "这是模组部署中的基础常识：\n- 客户端独占：仅影响画面、声音、操作的模组（如光影、材质、小地图、整理背包），只需自己安装，不需要在服务器端安装；\n- 双端同步：改变了游戏机制、方块、怪物、物品的模组（如工业、拔刀剑），服务器与客户端必须同时安装完全一致的版本。"
    },

    // ==========================================
    // 四、多人联机、内网穿透与防火墙拦截 (61-80)
    // ==========================================
    {
        id: "mc-qa-61",
        category: "multiplayer",
        title: "跨市跨省怎么和朋友异地联机，需要什么局域网工具",
        content: "由于国内宽带默认没有分配外网 IPv4 公网 IP 地址，因此异地之间不能直接联机。\n联机方案：\n1. 采用内网穿透映射（如使用本技术站推荐的免费 Sakura Frp 穿透，速度快，适合1-5人）；\n2. 采用虚拟局域网（VLAN，如使用 ZeroTier 或蒲公英建立虚拟局域网专线联机）。我们将为您免费部署配置。"
    },
    {
        id: "mc-qa-62",
        category: "multiplayer",
        title: "开放局域网后好友在“局域网游戏”列表里搜不到我的房间",
        content: "这是联机中最普遍的现象。因为局域网广播组播包（UDP Multicast）容易被防火墙、路由器或者虚拟网卡过滤掉，导致客户端自动搜索失效。\n解决方法：房主开放局域网后，控制台会弹出一个 5 位的随机端口号（如 54321）。我们直接让好友在“多人游戏 - 直接连接”中，输入“房主的局域网IP:端口”即可秒进。"
    },
    {
        id: "mc-qa-63",
        category: "multiplayer",
        title: "使用 Sakura Frp 内网穿透，映射本地局域网端口的详细操作步骤",
        content: "配置步骤：\n1. 房主在本地进入游戏单人世界，按下 Esc 点击“对局域网开放”，记录左下角生成的 5 位端口（如 12345）；\n2. 登录 Sakura Frp，创建 TCP 隧道，本地端口填 12345，本地地址填 127.0.0.1，选择一个低延迟节点并开启；\n3. 系统会生成一个“节点域名:映射端口”的链接，将其发给好友；\n4. 好友在“直接连接”中粘贴该链接即可进入。"
    },
    {
        id: "mc-qa-64",
        category: "multiplayer",
        title: "联机提示“登入失败：无效的会话”到底怎么彻底关闭正版验证",
        content: "这代表您的联机玩家中有人使用的是离线/盗版客户端，而房主的游戏世界或独立服务器强制开启了微软官方正版账号验证。\n解决方法：\n1. 如果是独立服务器：使用文本编辑器打开服务器根目录下的 `server.properties` 文件，找到 `online-mode=true`，将其改为 `online-mode=false` 并重启；\n2. 如果是单人局域网联机：建议安装一键关闭正版验证的模组（如 LAN Server Properties）关闭验证。"
    },
    {
        id: "mc-qa-65",
        category: "multiplayer",
        title: "联机提示“登入失败：无效的用户名”该怎么处理",
        content: "这是因为您的角色昵称（ID）不符合服务器或 Java 的安全规则限制。\n解决方法：请在您的启动器离线设置中，检查您的角色 ID。角色 ID 不能包含任何中文、特殊符号，且字符长度最好控制在 3 至 16 位英文字母或数字之间（如 `Steve_123`），修改后重新进服即可。"
    },
    {
        id: "mc-qa-66",
        category: "multiplayer",
        title: "提示“Connection Timed Out / 连接超时”的综合排查思路",
        content: "连接超时代表您的客户端发起了连入请求，但在指定时间内没有收到任何服务器的网络回应。\n排查要点：\n1. 检查房主是否已经正确开启了内网穿透或者服务器的防火墙端口；\n2. 检查联机节点是否因为流量耗尽、IP 被封锁而离线；\n3. 检查好友输入的“IP:端口”中，端口号是否写错。我们将一步步帮您 Ping 节点定位网络障碍。"
    },
    {
        id: "mc-qa-67",
        category: "multiplayer",
        title: "防火墙弹出“网络控制请求”，不小心点了拒绝导致联机不进",
        content: "当您首次启动游戏或加载联机工具时，Windows Defender 防火墙会弹窗询问是否允许网络访问。不小心点了“取消”或“拒绝”会导致系统拦截所有外部连接。\n解决方法：我们将在“控制面板 - Windows Defender 防火墙 - 允许应用通过防火墙”中，点击“更改设置”，在列表中找到 Java(TM) 相关的二进制文件并将其全部勾选为“公用”与“专用”。"
    },
    {
        id: "mc-qa-68",
        category: "multiplayer",
        title: "使用 ZeroTier 创建了虚拟局域网，好友连接还是提示拒连",
        content: "ZeroTier 专网建立后，需要双方将虚拟网卡权限和系统防火墙做细致调优，否则默认依旧阻断通信。\n解决方法：\n1. 确认 ZeroTier 网页后台已经勾选了两个联机成员的“Auth”授权复选框；\n2. 确认联机所用的 IP 是 ZeroTier 分配的专属虚拟 IP（如 10.147.17.xx），而非自己本来的物理局域网 IP；\n3. 彻底关闭双方的 Windows 网络防火墙测试。"
    },
    {
        id: "mc-qa-69",
        category: "multiplayer",
        title: "蒲公英等虚拟网络工具联机时，网卡跃点数设置冲突怎么调节",
        content: "VLAN 工具经常会生成优先级极低的虚拟网卡网关路由，导致游戏在联机寻址时，依旧优先走物理公网，引起无法连接错误。\n解决方法：我们将在 Windows“更改适配器选项”中，右键虚拟网卡，选择“属性 - Internet 协议版本 4 (TCP/IPv4) - 属性 - 高级”，取消勾选“自动跃点”，将“接口跃点数”手动强行修改为 `10`，赋予其最高路由优先级。"
    },
    {
        id: "mc-qa-70",
        category: "multiplayer",
        title: "房主电脑关闭了，联机玩家还会留在游戏世界中吗",
        content: "不会。因为局域网联机模式下，房主的电脑既是客户端，又是运行游戏主循环的服务器。一旦房主下线或关闭游戏，本地的局域网端口会直接断开，所有联机玩家会直接提示“连接丢失 / Connection Lost”并被强制断开退回主菜单。"
    },
    {
        id: "mc-qa-71",
        category: "multiplayer",
        title: "樱花映射的免费节点延迟太高，如何更换低延迟节点",
        content: "Sakura Frp 的不同穿透服务器在不同地区的宽带运营商下延迟表现截然不同（如电信用户用华东电信节点，移动用户用华南移动节点延迟最低）。\n解决方法：我们将登录您的穿透后台，重新选择一个支持您本地宽带类型（电信/联通/移动）的低延迟服务器并获取新的隧道 ID 重新绑定即可。"
    },
    {
        id: "mc-qa-72",
        category: "multiplayer",
        title: "房主的网速慢，多人联机时其他人卡在泥土中无法加载世界",
        content: "这代表房主电脑的上行宽带（Upload Bandwidth）被占满。局域网穿透非常依赖房主宽带的上传速率，上传不够会导致区块数据发送被推迟，玩家进入后显示虚空或无法交互。\n解决方法：我们建议在游戏设置中调小视距以减小网络数据量；或者我们帮助您租用专用的高上传带宽云服务器以托管存档。"
    },
    {
        id: "mc-qa-73",
        category: "multiplayer",
        title: "联机进入后提示“Internal Exception: java.io.IOException”连接被断开",
        content: "这通常是由于玩家两端的网络丢包严重，或者客户端加载了某些占用过多网络缓冲包的 Mod 导致数据包校验失败报错。\n解决方法：我们建议使用网络优化工具改善网络延迟；如果使用了大量的 Mod，我们会在启动器中通过增加虚拟机 JVM 优化参数，提高数据缓冲区大小限制。"
    },
    {
        id: "mc-qa-74",
        category: "multiplayer",
        title: "在联机游戏中怎么使用命令（Op权限）",
        content: "默认情况下只有世界创建者（房主）或服务器管理员拥有管理员指令权限。\n操作方法：\n1. 如果是局域网：房主在开放局域网时，必须将“允许作弊”选项修改为“开启”，进入后即可运行类似 `/gamemode` 等权限指令；\n2. 如果是独立服务器：房主需要在控制台中输入 `op 您的玩家名` 即可授权。"
    },
    {
        id: "mc-qa-75",
        category: "multiplayer",
        title: "为什么非正版账号联机进服后显示的是史蒂夫或爱丽克丝默认皮肤",
        content: "因为关闭正版验证（online-mode=false）后，服务器端不会再去微软的官方皮肤数据库查询皮肤皮肤信息，而是直接分发默认贴图。\n解决方法：我们将在您的联机服务器端和所有玩家的客户端中部署并安装 CustomSkinLoader（自定义皮肤加载器）模组，即可正常在离线服中查看各自的高清皮肤。"
    },
    {
        id: "mc-qa-76",
        category: "multiplayer",
        title: "路由器没有开启 UPnP 导致局域网穿透映射失败",
        content: "部分穿透工具或虚拟局域网在打洞（P2P NAT traversal）时，需要路由器开放 UPnP 自动端口映射服务，否则无法建立直接的网络数据传输通道。\n解决方法：我们需要登录您的路由器管理后台（通常是 192.168.1.1），进入“高级设置 - 转发规则 / 应用”，将 UPnP 状态修改为“开启”并重启路由器。"
    },
    {
        id: "mc-qa-77",
        category: "multiplayer",
        title: "本地的联机端口被其他软件（如酷狗、VMware等）占用冲突",
        content: "当您试图开启内网穿透或者本地服务器时，提示“Address already in use: bind”或“端口被占用”。\n解决方法：我们将使用 CMD 命令行执行 `netstat -ano | findstr 端口号`，找出占用该端口的后台进程 PID 并强制结束；或者在配置文件中将游戏端口改为非冲突的其他五位端口。"
    },
    {
        id: "mc-qa-78",
        category: "multiplayer",
        title: "使用加速器后和朋友联机还是提示“Connection Refused”",
        content: "大多数市售游戏加速器（如UU加速器）仅对公共联机服务（如网易服、Hypixel）进行加速，对您私自创建的局域网穿透是不起作用的，加速器修改的虚拟网关甚至会阻断您的穿透流量。\n建议：局域网联机时请务必关闭网易加速器等工具，或更换为支持“对局域网穿透联机”的专属联机软件。"
    },
    {
        id: "mc-qa-79",
        category: "multiplayer",
        title: "好友在异地联机，他的游戏内需要安装和我一样的 Mod 吗",
        content: "这取决于您安装的是什么类型的 Mod：\n1. 如果您安装的是只在客户端生效的辅助模组（如光影、背包整理、小地图），好友的游戏内完全不需要安装它们；\n2. 如果您安装的是包含新方块、新武器、新维度的游戏核心模组（如拔刀剑、神奇宝贝），好友的游戏内必须放入完全一致的模组文件。"
    },
    {
        id: "mc-qa-80",
        category: "multiplayer",
        title: "多人联机时怎么互相传输自定义的高清材质包和光影",
        content: "为了保证大家的画面表现和视觉体验保持绝对对齐，不需要每个人单独到处去下载。\n解决方法：房主可以直接将本地游戏根目录下的 `resourcepacks` 资源包文件和 `shaderpacks` 光影包文件进行整体打包压缩发送给联机玩家，让他们直接拖入各自对应的同名目录，在游戏内加载即可。"
    },

    // ==========================================
    // 五、云服务器与独立开服配置 (81-100)
    // ==========================================
    {
        id: "mc-qa-81",
        category: "server",
        title: "自己想开一个 24 小时不断线的服务器，应该租用什么样的云服务器",
        content: "Minecraft 开服极其依赖 CPU 的单核主频性能，对于内存容量也提出了较高要求，但对多核性能利用效率较低。\n租用建议：对于 5-10 人的中小型模组服，推荐租用配置为“2核4G”或“4核8G”的云服务器，主频在 3.0GHz 以上最佳，系统建议选择 CentOS 7.9/Linux 或 Windows Server 2019。"
    },
    {
        id: "mc-qa-82",
        category: "server",
        title: "纯净服务器端 Paper 和 Purpur 哪一个更好，如何进行下载",
        content: "这两个都是目前业界最顶级的纯净优化版开服服务端：\n1. Paper：兼容性高，优化极强，能够高效减少红石与实体对 TPS 的消耗；\n2. Purpur：基于 Paper 进行了更高级的定制，支持调整生物骑乘、红石机制等细节。\n我们将协助您前往官网下载其最新的 `.jar` 开服核心程序。"
    },
    {
        id: "mc-qa-83",
        category: "server",
        title: "模组服务器端 CatServer、Arclight、Forge 的核心区别与选择",
        content: "依据您的游戏版本与需求选择开服核心：\n1. CatServer：经典的 1.12.2 / 1.16.5 模组+插件双核心服务端，生态极度成熟；\n2. Arclight：高版本（如 1.18.2、1.20.1）下表现优异的模组插件兼容端，基于 Fabric/Forge 架构；\n3. Forge：微软官方的原装模组核心，不支持安装 Bukkit/Spigot 插件，仅支持运行 Mod。"
    },
    {
        id: "mc-qa-84",
        category: "server",
        title: "双击服务器开服核心文件（jar）后一闪而过（如何开启 EULA 同意）",
        content: "这是因为微软对开服包设置了合规条款，首次运行会生成 `eula.txt` 协议文件，在未手动同意前，服务端会直接拒绝启动并闪退。\n解决方法：我们将进入服务器根目录，打开 `eula.txt`，将 `eula=false` 修改为 `eula=true` 并保存，重新启动即可正常载入核心。"
    },
    {
        id: "mc-qa-85",
        category: "server",
        title: "开服脚本 start.bat 提示“无法识别的 java 命令”或者报错闪退",
        content: "这是因为您的脚本中直接调用了简短的 `java` 关键字，但系统环境变量中未配置正确的 Java PATH，或者 Java 版本不匹配。\n解决方法：我们无需大范围修改环境变量，直接将 `start.bat` 中开头的 `java` 替换为 Java 实际安装的 javaw.exe 绝对双引号路径（如 `\"C:\\Program Files\\Java\\jdk-17\\bin\\java.exe\"`）。"
    },
    {
        id: "mc-qa-86",
        category: "server",
        title: "Linux 云服务器开服怎么编写 start.sh 并让其在后台挂起运行",
        content: "在 Linux 环境下开服，关闭 SSH 终端会导致服务器进程直接终止。\n解决方法：\n1. 工程师会为您安装 screen 工具：`yum install screen`；\n2. 创建脚本并在启动命令前追加 `screen -S mc` 开辟虚拟终端；\n3. 启动指令示例：`java -Xms4G -Xmx4G -jar server.jar nogui`；\n4. 按下 Ctrl+A+D 即可将终端挂起至后台，安心关闭 SSH。"
    },
    {
        id: "mc-qa-87",
        category: "server",
        title: "如何配置 server.properties 自动开服，让非正版离线玩家也能进服",
        content: "这是独立开服的核心配置文件，位于服务器根目录下。\n配置参数：\n1. 将 `online-mode=true` 修改为 `online-mode=false` 关闭微软正版验证；\n2. 修改 `server-port=25565` 设置为所需的端口；\n3. 修改 `max-players=20` 限制最大进服人数，修改后重启服务器即可生效。"
    },
    {
        id: "mc-qa-88",
        category: "server",
        title: "怎么让云服务器的开服控制台支持中文，防止乱码",
        content: "这通常是因为您的云服务器系统默认字符集与 Java 编译的 UTF-8 字符集冲突导致文字全部显示为乱码。\n解决方法：我们将在您的 `start.bat` 启动脚本的参数中，追加加入编码指定命令：`-Dfile.encoding=UTF-8`（或 `-Dfile.encoding=GBK`），这能强制 Java 进程使用与您控制台兼容的中文格式。"
    },
    {
        id: "mc-qa-89",
        category: "server",
        title: "怎么给服务器安装管理插件（如基础指令插件 EssentialsX）",
        content: "前提是您的服务端核心支持插件生态（如使用 Paper、Purpur、CatServer 或 Arclight 核心）。\n安装步骤：直接将下载得到的插件 `.jar` 文件，拖入服务器主目录下的 `plugins` 文件夹中（如果是 Mod 则放 mods，插件放 plugins），重新运行 `/reload` 命令或重启服务器即可生效。"
    },
    {
        id: "mc-qa-90",
        category: "server",
        title: "服务器报错“Can't keep up! Is the server overloaded?”卡顿警告",
        content: "这代表服务器的单核计算性能已经发生瓶颈，导致游戏主循环时间（Tick）超出了 50 毫秒边界，产生游戏物理卡顿。\n优化思路：我们将为您安装 Spark 性能分析插件定位罪魁祸首；并为您安装 `Aikar's Flags` 调优参数，优化 Java 虚拟机的垃圾收集，下调服务器的模拟区块距离减少红石计算。"
    },
    {
        id: "mc-qa-91",
        category: "server",
        title: "在服务器上如何配置管理员（OP）和封禁恶作剧玩家",
        content: "当服务器内出现违规行为，您可以使用控制台命令行进行权限管理。\n常用指令如下：\n- 设为管理员：在控制台直接输入 `op 玩家昵称`（无需加斜杠）；\n- 封禁玩家：输入 `ban 玩家昵称`，玩家将被拉入黑名单无法再次连入；\n- 解封玩家：输入 `pardon 玩家昵称`。"
    },
    {
        id: "mc-qa-92",
        category: "server",
        title: "怎么把单人的世界地图无损转移到服务器的 world 目录中",
        content: "步骤：\n1. 房主进入本地的 .minecraft/saves 目录，找到对应的世界文件夹打包；\n2. 关停云服务器进程；\n3. 将服务器根目录下的 `world` 文件夹删除或改名备份；\n4. 将您本地的单人世界解压到根目录下，并将该世界文件夹的名字修改为 `world`；\n5. 重新启动服务器，即可完美继承您单人的全部建筑和数据。"
    },
    {
        id: "mc-qa-93",
        category: "server",
        title: "服务器如何开启自动定时备份，防止因为崩溃导致世界损坏",
        content: "在安装了大量模组后，服务器因为意外断电、崩服容易造成存档区块损坏。\n解决方法：我们将为您安装优秀的备份插件（如 EasyBackup 或 AutoBackup），配置其每隔 4-6 小时自动将服务器的 `world` 文件夹压缩备份到指定的备份目录，并在检测到崩服重启前自动保存。"
    },
    {
        id: "mc-qa-94",
        category: "server",
        title: "怎么限制服务器内的怪物生成数量以降低 CPU 的单核占用",
        content: "大量的活体生物寻路（如村民、僵尸）是导致服务器卡顿的最主要原因。\n调优步骤：我们将在服务器根目录下的 `bukkit.yml` 和 `spigot.yml` 中，将 `spawn-limits`（刷怪限制）进行下调，同时减少实体不活动时的激活范围，在不影响玩家打怪体验的前提下节省近 30% 性能。"
    },
    {
        id: "mc-qa-95",
        category: "server",
        title: "如何屏蔽服务器内的下界、末地维度，或者限制边界大小",
        content: "如果玩家跑图过快，服务器会瞬间生成大量新区块导致硬盘满载或崩溃。\n解决方法：\n1. 屏蔽末地：在 `bukkit.yml` 中将 `allow-end` 设为 `false`；\n2. 限制边界：在游戏里直接输入指令 `/worldborder set 5000` 将玩家活动边界限制在半径 5000 区块内，杜绝无限跑图。"
    },
    {
        id: "mc-qa-96",
        category: "server",
        title: "服务器提示“You are not white-listed on this server”",
        content: "这是因为服务器管理员在配置文件 `server.properties` 中开启了白名单功能（`white-list=true`），只有被列入白名单的玩家才可以进服。\n解决方法：在服务器控制台以管理员权限输入 `whitelist add 您的游戏名` 以将其添加进授权白名单，或者在控制台输入 `whitelist off` 关闭白名单校验。"
    },
    {
        id: "mc-qa-97",
        category: "server",
        title: "云服务器防火墙和安全组已开端口，但是玩家连不上服务器",
        content: "这是因为除了云服务商（如腾讯云、阿里云）的网页端控制面板“安全组规则”外，云服务器系统自身的网络防火墙（如 Windows Firewall 或 Linux iptables）仍然在进行物理拦截。\n解决方法：我们将登录服务器后台，彻底开放对应端口（25565）的入站防火墙，或者直接关停系统本地防火墙服务。"
    },
    {
        id: "mc-qa-98",
        category: "server",
        title: "服务器端装了 Mod，为什么玩家还需要在客户端安装同样的 Mod",
        content: "因为这是双端 Mod。当模组为游戏增加了服务器原本没有的方块数据、非原版的动画和道具资源时，单纯靠服务器网络分发是不行的。客户端如果不安装同名 Mod，在连入服务器时会因为数据模型缺失或协议头无法核对而直接被拒绝连接。"
    },
    {
        id: "mc-qa-99",
        category: "server",
        title: "如何在服务器里配置多世界插件，创建额外的生存、地皮世界",
        content: "如果不满足于 world 默认的生存世界，开服常需要多世界生态。\n配置方法：我们将为您安装经典的 `Multiverse-Core` 插件。安装后，您可以在控制台直接输入指令 `/mv create creative normal`（即可生成并开启名为 creative 的新生存世界），使用 `/mv tp 玩家名 creative` 即可实现跨世界传送。"
    },
    {
        id: "mc-qa-100",
        category: "server",
        title: "服务端升级版本时，怎么无缝升级地图且不丢失方块和物品",
        content: "步骤：\n1. 备份当前的 `world` 地图；\n2. 下载对应新版本的服务端开服包并在本地调试；\n3. 将备份的地图放入新核心根目录，在 start.cmd 启动命令行末尾追加 `--forceUpgrade`（强制更新）指令，系统会自动开始对旧地图的所有区块进行旧方块 ID 到新 ID 的格式转换，处理完毕后即可开服。"
    }
];
