# skimit服务器指南
[返回服务器网站主页](../)  
## 目录
[[toc]]
## 客户端
- 你可以使用Java版和基岩版客户端进入服务器（基岩版游戏体验可能不全）
- 对于Java版，你可以使用我们的[定制客户端](https://github.com/skimitmc/skimit-client)
## 服务器地址
### Java版进入服务器
- 主要地址: `skimit.cn`  
- 备用地址1: `play.skimit.cn`  
- 备用地址2: `skimit.net`  
  **`skimit.world`已停止使用**  
### 基岩版进入服务器
你可以安装 [GeyserOptionalPack](https://ci.opencollab.dev/job/GeyserMC/job/GeyserOptionalPack/job/master/lastSuccessfulBuild/artifact/GeyserOptionalPack.mcpack) 资源包来修复部分基岩版bug并增强基岩版游戏体验
- 主要地址
  - 地址: `be.skimit.cn`  
  - 端口: `19132`  
- 备用地址
  - 地址: `be.skimit.net`  
  - 端口: `19132`  

## 须知
### 指令中的`<>`和`[]`分别指必须参数和可选参数
### 注册与登录中的验证码：如果有验证码则需要输入，没有则不要输入
- 验证码位于经验条上方
#### 在服务器聊天时在消息前加`.`可以将消息转发到QQ群

## 指令
#### `!!qb make <注释>`: 手动备份服务器存档
#### `/ping`: 查看你的延迟
### here mod的功能
- `/here`: 广播你的坐标  
  - 点击蓝色坐标文字可以让你的VoxelMap小地图mod设置高亮（导航点）  
#### `/distance`: 计算两个坐标的距离
  - 用法: `/distance from X Y Z to X Y Z`  
  - 输出: Spherical: 空间直线距离（[球面距离](https://baike.baidu.com/item/%E7%90%83%E9%9D%A2%E8%B7%9D%E7%A6%BB)？）  
  - 输出: Cylindrical: 平面直线距离  
  - 输出: Manhattan: [曼哈顿距离](https://baike.baidu.com/item/%E6%9B%BC%E5%93%88%E9%A1%BF%E8%B7%9D%E7%A6%BB)  
### 登录系统
  - `/register <密码> <重复密码> [验证码]`: 注册  
  - `/login <你的密码>`: 使用已注册的密码登录  
  - `/account change <当前密码> <新密码>`: 更改密码  
  - `/unlog`: 退出已登录的账户  
#### `/glist`: 显示服务器当前节点在线玩家数量
#### `/list`: 显示玩家当前节点当前子服的在线玩家列表
#### `/info`: 查看方块或实体的信息
  - 用法: `/info <block> <方块坐标（X Y Z）>`显示当前世界当前维度指定坐标方块的信息  
  - 用法: `/info <entity> <实体名称>`显示当前世界已存在的实体的信息  
#### `/msg <玩家ID> <信息>`: 给指定玩家发送**私聊**消息
### 待补充 

## 群内机器人的使用
- 发送`#绑定：<你的ID>`: 将你的QQ号绑定游戏ID以实现群聊消息同步到服务器聊天  
- 发送`#在线人数`: 查看服务器的在线人数  
- 待补充  

## 服务器网页卫星地图的查看
- 在[服务器地图导航页](../map/)导航到要浏览的服务器卫星地图  

## 待补充，欢迎提交PR或issue补充

## 联系
[加入QQ群597691030](https://jq.qq.com/?_wv=1027&k=5GAlEKg)  
[加入Discord群组](https://discord.gg/Xf3Q3K4CYw)  
[加QQ2738345462](http://wpa.qq.com/msgrd?uin=2738345462)
