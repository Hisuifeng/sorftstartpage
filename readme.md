# 轻-起始页 sortstartpage
## 简介
这是一个基于HTML CSS JS原生前端起始页
懒得写markdown，该项目本意是作为原生练手的项目，大一为了怀恋小学摸索原生前端做着玩的。没想到嵌入式大二还有web课，便继续更新了。所以简介简单是正常的🤫

页面截图：
![alt](image.png)
## 使用
目前托管在了cloudflare和github
可以将[github托管](https://hisuifeng.github.io/softstartpage/ "github托管")或[cloudflare托管(推荐)](https://softstartpage.pages.dev/ "cloudflare托管")设为主页地址
或者将其托管到本地
## 迁移你的收藏
### 导出收藏
打开浏览器Cookie设置，找到起始页域名。其中的 favorite 项格式应该是这样：
```
{"icon":["","","",""],"url":["","","",""]}
```
这就是你的收藏，复制这一项即可。
### 导入收藏
打开开发者控制台，输入
```
setCookie("favorite", <favorite>, 356)
```
其中<favorite>项为字符串类型，填入导出的收藏。
## 功能
随机壁纸
必应 百度双搜索引擎
## 已失效功能
使用>help命令可以查看设置帮助

使用>setting favorite命令可以设置快捷方式，格式如下：
```
{"icon":["","","",""],"url":["","","",""]}
```
