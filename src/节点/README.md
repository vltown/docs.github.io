---
author: Glucy2
---
::: tip
加入时若要指定 IPv4 或 IPv6 ， 可以在域名前加 `4.` 或 `6.`  
如指定临沂3节点 IPv6 则使用 `6.ly-3.skimit.cn`
:::
## 原版直接连接
<table id="normal">
    <tr>
        <th rowspan="2">节点名</th>
        <th rowspan="2">JE</th>
        <th rowspan="2">BE</th>
        <th colspan="2">网络运营商</th>
        <th rowspan="2">国内线路</th>
    </tr>
    <tr>
        <th>IPv4</th>
        <th>IPv6</th>
    </tr>
    <tr>
        <td>临沂1</td>
        <td><code id="ly-1-je">ly-1.skimit.cn</code></td>
        <td id="ly-1-be"><code>ly-1.skimit.cn</code>, <code>19132</code></td>
        <td>教育网 (AS4538)</td>
        <td>-</td>
        <td>教育网</td>
    </tr>
    <tr>
        <td>临沂3</td>
        <td><code id="ly-3-je">ly-3.skimit.cn</code></td>
        <td id="ly-3-be"><code>ly-3.skimit.cn</code>, <code>19132</code></td>
        <td colspan="2">中国联通 (AS4837)</td>
        <td>中国联通</td>
    </tr>
    <tr>
        <td>金华1</td>
        <td><code id="jh-1-je">jh-1.skimit.cn</code></td>
        <td id="jh-1-be"><code>jh-1.skimit.cn</code>, <code>19132</code></td>
        <td>中国电信 (AS4134)</td>
        <td>-</td>
        <td>中国电信</td>
    </tr>
    <tr>
        <td>青岛1</td>
        <td><code id="qd-1-je">qd-1.skimit.cn</code></td>
        <td id="qd-1-be"><code>qd-1.skimit.cn</code>, <code>19132</code></td>
        <td colspan="2">阿里云 (AS37963)</td>
        <td>阿里云/中国电信/中国联通/中国移动/教育网</td>
    </tr>
    <tr>
        <td>枣庄1</td>
        <td><code id="zz-1-je">zz-1.skimit.cn</code></td>
        <td id="zz-1-be"><code>zz-1.skimit.cn</code>, <code>59811</code></td>
        <td>中国联通 (AS4837)</td>
        <td>-</td>
        <td>中国联通/中国移动</td>
    </tr>
    <tr>
        <td>宿迁1</td>
        <td><code id="sq-1-je">sq-1.skimit.cn</code></td>
        <td id="sq-1-be"><code>sq-1.skimit.cn</code>, <code>10469</code></td>
        <td>中国电信 (AS4134)</td>
        <td>-</td>
        <td>中国电信</td>
    </tr>
    <tr>
        <td>宿迁2</td>
        <td><code id="sq-2-je">sq-2.skimit.cn</code></td>
        <td id="sq-1-be"><code>sq-2-be.skimit.cn</code>, <code>39132</code></td>
        <td>中国电信 (AS137690)</td>
        <td>-</td>
        <td>中国电信</td>
    </tr>
    <tr>
        <td>中山1</td>
        <td><code id="zs-1-je">zs-1.skimit.cn</code></td>
        <td id="zs-1-be"><code>zs-1.skimit.cn</code>, <code>60132</code></td>
        <td>中国联通 (AS17816)</td>
        <td>-</td>
        <td>中国联通</td>
    </tr>
    <tr>
        <td>上海1</td>
        <td><code id="sh-1-je">sh-1.skimit.cn</code></td>
        <td id="sh-1-be"><code>sh-1.skimit.cn</code>, <code>19132</code></td>
        <td colspan="2">青云 (AS59078)</td>
        <td>中国电信/中国移动</td>
    </tr>
    <tr>
        <td>香港1</td>
        <td><code id="hk-1-je">hk-1.skimit.cn</code></td>
        <td id="hk-1-be"><code>hk-1.skimit.cn</code>, <code>19132</code></td>
        <td>腾讯云 (AS132203)</td>
        <td>Huricane Electric (AS6939)</td>
        <td></td>
    </tr>
    <tr>
        <td>洛杉矶1</td>
        <td><code id="us-la-1-je">us-la-1.skimit.cn</code></td>
        <td id="us-la-1-be"><code>us-la-1.skimit.cn</code>, <code>19132</code></td>
        <td colspan="2">Multacom (AS35916)</td>
        <td></td>
    </tr>
</table>

## 使用 RakNet 协议连接 (Java版)
::: tip
使用此类节点需要安装 [RakNetify](https://modrinth.com/plugin/raknetify) 模组
:::
<table>
    <tr>
        <th>节点名</th>
        <th>JE</th>
    </tr>
    <tr>
        <td>临沂1</td>
        <td><code id="ly-1-je-raknet">raknet;ly-1.skimit.cn</code></td>
    </tr>
    <tr>
        <td>临沂3</td>
        <td><code id="ly-3-je-raknet">raknet;ly-3.skimit.cn</code></td>
    </tr>
    <tr>
        <td>青岛1</td>
        <td><code id="qd-1-je-raknet">raknet;qd-1.skimit.cn</code></td>
    </tr>
</table>