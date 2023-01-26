---
author: Glucy2
---
::: tip 注意
除非特例，本文仅记录适用最新Minecraft大版本、兼容fabric加载器且对玩法没有过度修改的模组

下载链接文字除非注明否则为 `模组版本`+`适用MC版本` 的格式
:::

## API和库

### Fabric API

<img src=https://cdn.modrinth.com/data/P7dR8mSH/icon.png alt=icon height=64 width=64>

模组ID：`fabric-api`

简介：核心APl模块，提供关键的hook和相互兼容的功能

运行环境：客户端，服务端

下载：[0.73.0+1.19.3](https://cdn.modrinth.com/data/P7dR8mSH/versions/PbVeub96/fabric-api-0.73.0%2B1.19.3.jar)

链接：[Modrinth](https://modrinth.com/mod/fabric-api) [GitHub](https://github.com/FabricMC/fabric) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/fabric-api)

### MagicLib

<img src=https://cdn.modrinth.com/data/mv1zH6ln/icon.png alt=icon height=64 width=64>

模组ID：`magiclib` / `magiclib-1_19_3`

简介：一个模组依赖库

运行环境：客户端，服务端

下载：[0.5.37+1.14.4-1.19.3](https://cdn.modrinth.com/data/mv1zH6ln/versions/0.5.37/magiclib-0.5.37.jar)

链接：[Modrinth](https://modrinth.com/mod/magiclib) [GitHub](https://github.com/Hendrix-Shen/MagicLib) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/magiclib)

### Indium

<img src=https://cdn.modrinth.com/data/Orvt0mRa/icon.png alt=icon height=64 width=64>

模组ID：`indium`

简介：为Fabric Rendering API提供支持

运行环境：客户端

依赖：[Sodium](#sodium)

下载：[1.0.12+1.19.3](https://cdn.modrinth.com/data/Orvt0mRa/versions/85NvAOjQ/indium-1.0.12%2Bmc1.19.3.jar)

链接：[Modrinth](https://modrinth.com/mod/indium) [GitHub](https://github.com/comp500/Indium) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/indium)

### YetAnotherConfigLib

<img src=https://cdn.modrinth.com/data/1eAoo2KR/1e43d5714f87ac6b20622e73b3ba7209be5ebafb.png alt=icon height=64 width=64>

模组ID：`yet-another-config-lib`

简介：一个基于builder的Minecraft配置库

运行环境：客户端

下载：[2.2.0+1.19.3](https://cdn.modrinth.com/data/1eAoo2KR/versions/3EWbdCzX/YetAnotherConfigLib-2.2.0.jar)

链接：[GitHub](https://github.com/isXander/YetAnotherConfigLib) [Modrinth](https://modrinth.com/mod/yacl) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/yacl)

## 优化

### Lithium

<img src=https://cdn.modrinth.com/data/gvQqBUqZ/icon.png alt=icon height=64 width=64>

模组ID：`lithium`

简介：不折不扣的游戏逻辑/服务器优化模组

运行环境：服务端，客户端

下载：[0.10.4+1.19.3](https://cdn.modrinth.com/data/gvQqBUqZ/versions/XS6vJwop/lithium-fabric-mc1.19.3-0.10.4.jar)

链接：[GitHub](https://github.com/CaffeineMC/lithium-fabric) [Modrinth](https://modrinth.com/mod/lithium) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/lithium)

### Starlight

<img src=https://cdn.modrinth.com/data/H8CaAYZC/icon.png alt=icon height=64 width=64>

模组ID：`starlight`

简介：重写光照引擎以提升光照性能并修复光照错误

运行环境：客户端，服务端

冲突：Phosphor

下载：[1.1.1+1.19-1.19.3](https://cdn.modrinth.com/data/H8CaAYZC/versions/1.1.1%2B1.19/starlight-1.1.1%2Bfabric.ae22326.jar)

链接：[GitHub](https://github.com/PaperMC/Starlight) [Modrinth]()

### Sodium

<img src=https://cdn.modrinth.com/data/AANobbMI/icon.png alt=icon height=64 width=64>

模组ID：`soidum`

简介：现代渲染引擎和客户端优化模组

运行环境：客户端

下载：[0.4.8+1.19.3](https://cdn.modrinth.com/data/AANobbMI/versions/oYfJQ6lR/sodium-fabric-mc1.19.3-0.4.8%2Bbuild.22.jar)

链接：[GitHub](https://github.com/CaffeineMC/sodium-fabric) [Modrinth](https://modrinth.com/mod/sodium) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/sodium)

### Sodium Extra

<img src=https://cdn.modrinth.com/data/PtjYWJkn/icon.png alt=icon height=64 width=64>

模组ID：`sodium-extra`

简介：将OptiFine的大部分眼花缭乱的选项带到Sodium，还提供一些视觉错误修复和其他性能选项等Sodium上尚未提供的功能

运行环境：客户端

依赖：[Sodium](#sodium)

下载：[0.4.16-build.91+1.19.3](https://cdn.modrinth.com/data/PtjYWJkn/versions/8DeIhGTv/sodium-extra-0.4.16%2Bmc1.19.3-build.91.jar)

链接：[GitHub](https://github.com/FlashyReese/sodium-extra-fabric) [Modrinth](https://modrinth.com/mod/sodium-extra) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/sodium-extra)

### C3H6N6O6

<img src=https://cdn.modrinth.com/data/bur7oKCC/icon.png alt=icon height=64 width=64>

::: warning

此模组仍在早期开发阶段，有大量bug和兼容性问题待解决

:::

模组ID：`c3h6n6o6`

简介：环三亚甲基三硝胺（C3H6N6O6），生物多线程优化模组

运行环境：服务端，客户端

依赖：[Koro Utils Lib](https://modrinth.com/mod/koro-utils-lib)

下载：[1.0.0-beta9+1.18.2/1.19.2](https://cdn.modrinth.com/data/bur7oKCC/versions/vIOKMDvB/C3H6N6O6-1.0.0-beta9-1.18.2.jar)

链接：[GitHub](https://github.com/KenRouKoro/C3H6N6O6) [Modrinth](https://modrinth.com/mod/c3h6n6o6) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/c3h6n6o6) [Mbbbs](https://www.mcbbs.net/thread-1359824-1-1.html)

## 装饰

### Continuity

<img src=https://cdn.modrinth.com/data/1IjD5062/icon.png alt=icon height=64 width=64>

模组ID：`continuity`

简介：高效实现连接纹理

运行环境：客户端

::: warning

如果安装了[Sodium](#sodium)，那么必须安装[Indium](#indium)，否则模组不工作

:::

下载：[3.0.0-alpha.2+1.19.3](https://cdn.discordapp.com/attachments/872543494554648637/1062469061100982313/continuity-3.0.0-alpha.21.19.3.jar)

链接：[Modrinth](https://modrinth.com/mod/continuity) [GitHub](https://github.com/PepperCode1/Continuity) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/continuity)

### 3D Skin Layers

<img src=https://cdn.modrinth.com/data/zV5r3pPn/icon.png alt=icon height=64 width=64>

模组ID：`3dskinlayers`

简介：用3D建模的版本取代平面的第二层玩家皮肤

运行环境：客户端

下载：[1.5.2+1.19.3](https://cdn.modrinth.com/data/zV5r3pPn/versions/lt0gHTA6/3dskinlayers-fabric-1.5.2-mc1.19.3.jar)

链接：[GitHub](https://github.com/tr7zw/3d-Skin-Layers) [Modrinth](https://modrinth.com/mod/3dskinlayers) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/skin-layers-3d)

## 信息

### AppleSkin

模组ID：`appleskin`

简介：与食物/饥饿相关的HUD改进

运行环境：客户端

下载：[2.4.2+1.19.3](https://cdn.modrinth.com/data/EsAfCjCV/versions/ntsDU1AP/appleskin-fabric-mc1.19.3-2.4.2.jar)

链接：[GitHub](https://github.com/squeek502/AppleSkin) [Modrinth](https://modrinth.com/mod/appleskin) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/appleskin)

### BetterF3

<img src=https://cdn.modrinth.com//data/8shC1gFX/icon.png alt=icon height=64 width=64>

模组ID：`betterf3`

简介：用一个高度可定制的、更高可读性的HUD取代Minecraft的原始调试HUD

运行环境：客户端

可选依赖：[Mod Menu](#mod-menu)

下载：[5.1.0+1.19.3](https://cdn.modrinth.com/data/8shC1gFX/versions/nuKBXZDI/BetterF3-5.1.0-Fabric-1.19.3.jar)

链接：[GitHub](https://github.com/cominixo/BetterF3) [Modrinth](https://modrinth.com/mod/betterf3) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/betterf3)

## 工具

### Mod Menu

<img src=https://cdn.modrinth.com/data/mOgUt4GM/icon.png alt=icon height=64 width=64>

模组ID：`modmenu`

简介：增加了一个MOD菜单以查看你所安装的MOD列表

运行环境：客户端

依赖：[Fabric API](#fabric-api)

下载：[5.0.2+1.19.3](https://cdn.modrinth.com/data/mOgUt4GM/versions/eIrlBn1Z/modmenu-5.0.2.jar)

链接：[GitHub](https://github.com/TerraformersMC/ModMenu) [Modrinth](https://modrinth.com/mod/modmenu) [CurseForge](https://www.curseforge.com/minecraft/mc-mods/modmenu)
