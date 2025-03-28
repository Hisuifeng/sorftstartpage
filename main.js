var arttext =
" __   __   __   ___ ___     __        __   ___ \n"+
'/__` /  \\ |__) |__   |     |__)  /\\  / _` |__  \n'+
'.__/ \\__/ |  \\ |     |     |    /~~\\ \\__> |___ \n\n'+
'Welcome to sorft start page!Bug created by Hikari.';
console.log(arttext);
//全局变量
var choosetag = -1;
var background = document.getElementById("background");
//初始函数
randomWallpaper(7)
background.addEventListener('mousemove',function(event) {
    var windowWidth = window.innerWidth / 2;
    var windowHeight = window.innerHeight / 2;
    var mouseX = event.clientX / windowWidth;
    var mouseY = event.clientY / windowHeight;
    background.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
});
//1.触发器
function keywordfun() {
    changeJS(0,document.getElementById('search_bar').value);
    choosetag = -1;//设置指针为默认状态
}
function showSearchKeyWordBar(){
    var key_words_bar_box = document.getElementById("key_words_bar_box");
    var url_bar = document.getElementById("url_bar");
    key_words_bar_box.style.display = "flex";
    url_bar.style.display = "none";
}
function unshowSearchKeyWordBarTigger(){
    setTimeout("unshowSearchKeyWordBar()","100");
}
function unshowSearchKeyWordBar(){
    setTimeout("test()","2000");
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
function keyup_submit(event){  
    var keyword = document.getElementById('search_bar').value;
    var keywords = document.getElementsByClassName("keyword");
    if (event.keyCode == 13){
        if (choosetag != -1){
            document.getElementById('search_bar').value = keywords[choosetag].innerHTML;
            keyword = document.getElementById('search_bar').value;
        }
        toSearch(0,keyword)
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
    console.log(choosetag)
}
function toSearch(searchengine,keyword){
    if (searchengine==0){
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd=" + keyword;
    }
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
function randomWallpaper(walllpaperNum){
    var walllpaper = new Array;
    walllpaperNum = walllpaperNum + 1;
    for (var i=0;i<walllpaperNum;i++){
	    walllpaper[i] = 'images/wallpaper/wallpaper' + i + ".jpg";
    }
    parseInt(Math.random() * (walllpaper.length),walllpaperNum);
    var choose = Math.floor(Math.random() * (walllpaper.length))
    var background = document.getElementById("background");
    background.style.background = "url("+walllpaper[choose]+")" + " no-repeat left center / cover";
    console.log(walllpaper[choose])
}
