var arttext =
" __   __   __   ___ ___     __        __   ___ \n"+
'/__` /  \\ |__) |__   |     |__)  /\\  / _` |__  \n'+
'.__/ \\__/ |  \\ |     |     |    /~~\\ \\__> |___ \n\n'+
'Welcome to sorft start page!Bug created by Hikari.\n'+
'主函数已加载，欢迎使用轻-sorft起始页！';
console.log(arttext);
//全局变量
var choosetag = -1;
var background = document.getElementById("background");
var searchengine = 1;
//初始函数
randomWallpaper(7,1)//0是本地随机 1是api随机
//1.触发器
background.addEventListener('mousemove',function(event) {
    var windowWidth = window.innerWidth / 2;
    var windowHeight = window.innerHeight / 2;
    var mouseX = event.clientX / windowWidth;
    var mouseY = event.clientY / windowHeight;
    background.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
});
function keywordfun() {
    changeJS(searchengine,document.getElementById('search_bar').value);
    choosetag = -1;//设置指针为默认状态
}
function unshowSearchKeyWordBarTigger(){
    setTimeout("unshowSearchKeyWordBar()","200");//延迟是因为要等待动画
}
function keyup_submit(event){  
    var keyword = document.getElementById('search_bar').value;
    var keywords = document.getElementsByClassName("keyword");
    if (event.keyCode == 13){
        var text = document.getElementById('search_bar').value;
        if (settings(text) == 0){
            if (choosetag != -1){
                text = keywords[choosetag].innerHTML;
                keyword = text;
            }
            toSearch(searchengine,keyword);
        }
    }//回车事件
    if (event.keyCode == 38){
        if (choosetag - 1 > keywords.length - 1){
            choosetag = 0;
        }
        if (choosetag - 1 != -1){
            keywords[choosetag].className = 'button keyword';
            choosetag = choosetag - 1;
            keywords[choosetag].className = 'button keyword hightlight';
        }
    }//uparrow事件
    if (event.keyCode == 40){
        if (choosetag == -1){
            choosetag = 0;
            keywords[0].className = 'button keyword hightlight';
        }//起始页初始状态时存在
        else{
            if (choosetag + 1 > keywords.length - 1){
                choosetag = keywords.length - 1;
            }
            else{
                keywords[choosetag].className = 'button keyword';
                choosetag = choosetag + 1;
                keywords[choosetag].className = 'button keyword hightlight';
            }
        }
    }//downarrow事件
    if (event.keyCode && event.keyCode == 18){
        if (searchengine == 0){
            changeChooseEngineBarText("搜索引擎：必应(Alt+任意键切换)")
            searchengine = 1;
            keywordfun()//刷新提示词
        }
        else{
            changeChooseEngineBarText("搜索引擎：百度(Alt+任意键切换)")
            searchengine = 0
            keywordfun()
        };
    }//alt_l+ctrl事件(切换搜索引擎)
}
function refocus(){
    setTimeout(function (){
        document.getElementById("search_bar").focus();
    },0);   
}//防失焦点
function toSearchTigger(event){
    var text = event.target;
    toSearch(0,text.innerHTML);
}
//功能函数集
function randomWallpaper(walllpaperNum,type){
    if (type==0){
        var walllpaper = new Array;
        walllpaperNum = walllpaperNum + 1;
        for (var i = 0;i < walllpaperNum;i++){
            walllpaper[i] = 'images/wallpaper/wallpaper' + i + ".jpg";
        }
        parseInt(Math.random() * (walllpaper.length),walllpaperNum);
        var choose = Math.floor(Math.random() * (walllpaper.length));
        background.style.background = "url("+ walllpaper[choose] +")" + " no-repeat left center / cover";
        console.log("图片已选:"+ walllpaper[choose]);
    }
    else{
        var url = "https://www.dmoe.cc/random.php";
        background.style.background = "url("+ url +")" + " no-repeat left center / cover";
        console.log("图片已选:API随机");
    }
    //考虑过图床，收费的太贵，免费的跑路，目前只有两种方案，一是本地随机壁纸，二是使用其他壁纸api
    //感谢理解提供的摄图喵喵((
    //https://blog.csdn.net/SectSnow/article/details/115835711
}
function toSearch(searchengine,keyword){
    if (searchengine==0){
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd=" + keyword;
    }
    if (searchengine==1){
        window.location.href = "https://cn.bing.com/search?q=" + keyword;
    }
}
function unshowSearchKeyWordBar(){
    var key_words_bar_box = document.getElementById("key_words_bar_box");
    var url_bar = document.getElementById("url_bar");
    key_words_bar_box.style.display = "none";
    url_bar.style.display = "flex";
    choosetag = -1;//设置指针为默认状态
}
function unshowUrlBar(){
    var url_bar = document.getElementById("url_bar");
    url_bar.style.display = "none";
}
function showSearchKeyWordBar(){
    var key_words_bar_box = document.getElementById("key_words_bar_box");
    var url_bar = document.getElementById("url_bar");
    key_words_bar_box.style.display = "flex";
    url_bar.style.display = "none";
}
function changeChooseEngineBarText(text){
    var searchenginebar = document.getElementById('searchengine');
    searchenginebar.innerHTML = text;
}
function settings(text){
    let i = 0;
    if (text==">help"){
        let list = ["命令帮助(此界面不能使用上下键)：",">setting favorite 设置或者刷新收藏"];
        refreshMenu_keyword(list);
        i = 1;
    }
    if (text==">setting favorite"){
        clearCookie("favorite");
        checkCookie();
        i = 1;
    }
    return(i);
}