console.log('联想词函数已加载');
//流程：触发器->更改js发送请求->处理返回的数据->完成刷新操作
//2.更改js发送请求
//[修改js文件]
function changeJS(searchengine,keyword) {
    // 获取 <head> 标签
    let head = document.head;
    let myjs;

    // 移除 id 为 s2 的标签
    var scriptToRemove = document.querySelector('#s2');
    if (scriptToRemove) {
        head.removeChild(scriptToRemove);
    }

    // 准备标签的 src 属性
    str = scriptToRemove.src.split('/');
    myjs = backURL(searchengine,keyword);

    // 创建新的 <script> 标签
    let newScript = document.createElement('script');
    newScript.id = 's2';
    newScript.src = myjs;

    // 将新的 <script> 标签添加到 <head> 的最后
    head.appendChild(newScript);
}
function backURL(searchengine,keyword){
    if (searchengine==0){
        return("http://suggestion.baidu.com/su?wd=" + keyword + "&p=3&cb=jsonp")
    }
}
//3.处理返回的数据
//[jsonp]
function jsonp(data) {
    //console.log(data)
    obj = data;
    refreshMenu_keyword(obj.s);
}
//4.完成刷新操作
//[html元素操作]
function refreshMenu_keyword(keyword){
    //完成刷新操作：更改列表大小->清空列表->添加列表
    var key_words_bar_box = document.getElementById('key_words_bar_box');
    var key_words_bar = document.getElementById('key_words_bar');
    var num1 = 36+keyword.length*20+(keyword.length-1)*3;
    var num2 = 25+keyword.length*20+(keyword.length-1)*3;
    key_words_bar_box.style.height = `${num1}`+"px";
    key_words_bar.style.height = `${num2}`+"px";
    for (var i=0;i<keyword.length;i++){
	    removeKeyword();
    }
    for (var i=0;i<keyword.length;i++){
	    addKeyword(keyword[i]);
    }
}
function removeKeyword(){
    // 移除 id 为 keyword 的标签
    var keywordToRemove = document.getElementById('keyword');
    let newKeywordmenu = document.getElementById('key_words_bar')
    if (keywordToRemove) {
        newKeywordmenu.removeChild(keywordToRemove);
    }
}
function addKeyword(keyword){
    let newKeywordmenu = document.getElementById('key_words_bar')
    if (newKeywordmenu) {
        // 创建li元素
        var li = document.createElement('li')
        li.id = 'keyword';
        li.className = 'button keyword';
        li.tabIndex = "0";
        li.setAttribute("onclick","refocus();toSearchTigger(event);");
        // 向li中添加文本内容
        li.innerHTML = keyword;
        // 向指定div中插入li
        newKeywordmenu.appendChild(li);
    } else {
        console.log('[X]没有添加关键词');
    }
}