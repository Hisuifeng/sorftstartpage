let arttext =
    " __   __   __   ___ ___     __        __   ___ \n" +
    '/__` /  \\ |__) |__   |     |__)  /\\  / _` |__  \n' +
    '.__/ \\__/ |  \\ |     |     |    /~~\\ \\__> |___ \n\n' +
    'Welcome to sorft start page!Bug created by Hikari.\n' +
    '主函数已加载，欢迎使用轻-sorft起始页！';
console.log(arttext);
//全局变量
var choosetag = -1;
var background = document.getElementById("background");
var searchengine = 1;
//初始函数

//1.触发器
window.onblur = function () {
    document.title = "轻-sorft起始页";
    console.log("失去焦点");
    endAutoText();
}//失去焦点
window.onfocus = function () {
    document.title = "搜索些什么......";
    console.log("获得焦点");
    startAutoText();
}//获得焦点
document.onmousemove = (event) => {
    var windowWidth = window.innerWidth / 2;
    var windowHeight = window.innerHeight / 2;
    var mouseX = event.clientX / windowWidth;
    var mouseY = event.clientY / windowHeight;
    background.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
};
function keywordfun() {
    changeJS(searchengine, document.getElementById('search_bar').value);
    choosetag = -1;//设置指针为默认状态
}
function unshowSearchKeyWordBarTigger() {
    setTimeout("unshowSearchKeyWordBar()", "200");//延迟是因为要等待动画
}
function keyupEvent(event) {
    var input_words = document.getElementById('search_bar').value;
    var keywords = document.getElementsByClassName("keyword");
    if (event.keyCode == 13) {
        var text = document.getElementById('search_bar').value;
        if (choosetag != -1) {
            text = keywords[choosetag].innerHTML;
            input_words = text;
        }
        toSearch(searchengine, input_words);
    }//回车事件
    if (event.keyCode == 38) {
        if (choosetag - 1 > keywords.length - 1) {
            choosetag = 0;
        }
        if (choosetag - 1 != -1) {
            keywords[choosetag].className = 'button keyword';
            choosetag = choosetag - 1;
            keywords[choosetag].className = 'button keyword hightlight';
        }
    }//uparrow事件
    if (event.keyCode == 40) {
        if (choosetag == -1) {
            choosetag = 0;
            keywords[0].className = 'button keyword hightlight';
        }//起始页初始状态时存在
        else {
            if (choosetag + 1 > keywords.length - 1) {
                choosetag = keywords.length - 1;
            }
            else {
                keywords[choosetag].className = 'button keyword';
                choosetag = choosetag + 1;
                keywords[choosetag].className = 'button keyword hightlight';
            }
        }
    }//downarrow事件
    if (event.keyCode && event.keyCode == 18) {
        if (searchengine == 0) {
            changeChooseEngineBarText("搜索引擎：必应(Alt+任意键切换)")
            searchengine = 1;
            keywordfun()//刷新提示词
        }
        else {
            changeChooseEngineBarText("搜索引擎：百度(Alt+任意键切换)")
            searchengine = 0
            keywordfun()
        };
    }//alt_l+ctrl事件(切换搜索引擎)
}
function refocus() {
    setTimeout(function () {
        document.getElementById("search_bar").focus();
    }, 0);
}//防失焦点
function toSearchTigger(event) {
    var text = event.target;
    toSearch(searchengine, text.innerHTML);
}
function clickSetting() {
    showElements("setting_bar")
    showElements("blur")
}
function clickFavoriteBar() {
    scrollToElement("setting_bar_right_favorite")
}
function clickWallpaperBar() {
    scrollToElement("setting_bar_right_wallpaper")
}
function clickExit() {
    unshowElements("setting_bar")
    unshowElements("blur")
}
//功能函数集
function toSearch(searchengine, keyword) {
    if (searchengine == 0) {
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd=" + keyword;
    }
    if (searchengine == 1) {
        window.location.href = "https://cn.bing.com/search?q=" + keyword;
    }
}
function changeChooseEngineBarText(text) {
    var searchenginebar = document.getElementById('searchengine');
    searchenginebar.innerHTML = text;
}
function sleep(ms) {
    //请使用async/await
    return new Promise(resolve => setTimeout(resolve, ms));
}

//UI函数集
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function setWallpaper(walllpaperNum, type, walllpaperurl) {
    if (type == -1 || type != -1) {
        var url = "https://pic1.zhimg.com/v2-19d657e1f93c77e381205bf64d37ed58_r.jpg";
        //https://img.52desk.com/tp/074156aTmnL.jpg
        //https://pic1.zhimg.com/v2-19d657e1f93c77e381205bf64d37ed58_r.jpg
        console.log("图片已选:固定");
    }
    if (type == 0) {
        var walllpaper = new Array;
        walllpaperNum = walllpaperNum + 1;
        for (var i = 0; i < walllpaperNum; i++) {
            walllpaper[i] = 'images/wallpaper/wallpaper' + i + ".jpg";
        }
        parseInt(Math.random() * (walllpaper.length), walllpaperNum);
        var choose = Math.floor(Math.random() * (walllpaper.length));
        var url = walllpaper[choose];
        console.log("图片已选:" + walllpaper[choose]);
    }
    if (type == 1) {
        var url = "https://www.dmoe.cc/random.php";
        console.log("图片已选:API随机");
    }
    if (type > 1) {
        url = walllpaperurl;
        console.log("图片已选:自定义");
    }
    background.style.background = "url(" + url + ")" + " no-repeat left center / cover";
    document.getElementById("setting_wallpaper").setAttribute("src", url)
    //考虑过图床，收费的太贵，免费的跑路，目前只有两种方案，一是本地随机壁纸，二是使用其他壁纸api
    //感谢理解提供的摄图喵喵((
    //https://blog.csdn.net/SectSnow/article/details/115835711
}
function unshowSearchKeyWordBar() {
    var key_words_bar_box = document.getElementById("key_words_bar_box");
    var url_bar = document.getElementById("url_bar");
    key_words_bar_box.style.display = "none";
    url_bar.style.display = "inline";
    choosetag = -1;//设置指针为默认状态
}//showElements()函数会失去数据的直观性，眼睛都要看瞎了(
function unshowUrlBar() {
    var url_bar = document.getElementById("url_bar");
    url_bar.style.display = "none";
}
function showSearchKeyWordBar() {
    var key_words_bar_box = document.getElementById("key_words_bar_box");
    var url_bar = document.getElementById("url_bar");
    key_words_bar_box.style.display = "inline";
    url_bar.style.display = "none";
}
//settings
function unshowElements(Element) {
    var Elements = document.getElementById(Element);
    Elements.style.display = "none";
    var keyframes = [
        { display: "block" },
        { opacity: 1 },
        { opacity: 0 }
    ];
    Elements.animate(keyframes, 200);
}
function showElements(Element) {
    var Elements = document.getElementById(Element);
    Elements.style.display = "block";
    var keyframes = [
        { opacity: 0 },
        { display: "block" },
        { opacity: 1 }
    ];
    Elements.animate(keyframes, 200);
}
//搜索框文字
var id_autoTask;
var id_autoText;
var global_i = 0;
var global_t = 1;
var text = "";
function startAutoText() {
    id_autoTask = setInterval(autoTask, 5000);
}
function endAutoText() {
    clearInterval(id_autoText);
    clearInterval(id_autoTask);
}
function autoText() {
    global_i += 1;
    document.getElementById("search_bar").setAttribute("placeholder", text.substring(0, global_i));
    if (global_i == text.length) {
        global_i = 0;
        clearInterval(id_autoText);
    }
}
function autoTask() {
    if (global_t == 0) {
        text = "欢迎使用轻-sorft起始页！";
    }
    if (global_t == 1) {
        text = "在此输入搜索内容";
    }
    if (global_t == 2) {
        text = '按下 Tab 可以快速进行输入';
    }
    if (global_t == 3) {
        text = 'Alt + 任意键可以切换搜索引擎';
        global_t = -1;
    }
    id_autoText = setInterval(autoText, 100);
    global_t += 1;
}