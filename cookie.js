console.log('自定义收藏函数已加载');
//初始函数
readWallpaper();
readFavorite();

//懒得写直接抄菜鸟(
function setCookie(cname,cvalue,exdays)//名称cname，值cvalue，过期时间expires(天)。
{  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + JSON.stringify(cvalue) + "; " + expires;
  console.log(cname + "=" + cvalue + "; " + expires);
}
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return JSON.parse(c.substring(name.length,c.length));
  }
  return "";//Not found Cookie
}
function clearCookie(cname){
  document.cookie = "document.cookie='" + cname + "=Del;expires=Thu, 01 Jan 1970 00:00:00 GMT'";
}
//收藏信息:{"icon":[],"url":[]}
function checkCookie(){
	var favorite=getCookie("favorite");
  favorite = prompt("请输入你的收藏信息:",'{"icon":["","","",""],"url":["","","",""]}');
  if (favorite!="" && favorite!=null){
    setCookie("favorite",favorite,356);
    readCookie();
  }
}//过度函数，下个版本将会删除
function setFavorite(){
	var url1=document.getElementById('setting_input1_url').value;
  var icon1=document.getElementById('setting_input1_icon').value;
  var url2=document.getElementById('setting_input2_url').value;
  var icon2=document.getElementById('setting_input2_icon').value;
  var url3=document.getElementById('setting_input3_url').value;
  var icon3=document.getElementById('setting_input3_icon').value;
  var url4=document.getElementById('setting_input4_url').value;
  var icon4=document.getElementById('setting_input4_icon').value;
  var favorite = '{"icon":["'+icon1+'","'+icon2+'","'+icon3+'","'+icon4+'"],"url":["'+url1+'","'+url2+'","'+url3+'","'+url4+'"]}'
  if (favorite!="" && favorite!=null){
    setCookie("favorite",favorite,356);
    readFavorite();
  }
}
function setWallpaperCookie(){
  var favorite = document.getElementById('setting_input_wallpaperurl').value;
  if (favorite!="" && favorite!=null){
    setCookie("wallpaper",favorite,356);
    readWallpaper();
  }
}
function readFavorite(){
  var favorite=getCookie("favorite");
  if (favorite!=""){
    var obj;
    obj = JSON.parse(getCookie("favorite"));
    for (let i = 0;i < 4;i++){
      let url_url = document.getElementById('url'+ (i+1));
      let url_img = document.getElementById('url'+ (i+1) +'_img');

      url_url.setAttribute("onclick", "window.location.href='"+ obj.url[i] +"'");
      url_img.setAttribute("src", obj.icon[i]);
    }
		console.log('自定义收藏信息读取成功');
	}
}
function readWallpaper(){
  var wallpaper=getCookie("wallpaper");
  console.log(wallpaper);
  if (wallpaper!=""){
    if (wallpaper == 0){
      setWallpaper(7,0);//0是本地随机 1是api随机 -1是固定
    }
    if (wallpaper == 1){
      setWallpaper(7,1);
    }
    if (wallpaper == -1){
      setWallpaper(7,-1);
    }
    if (wallpaper != 0 && wallpaper != 1 && wallpaper != -1){
      setWallpaper(7,2,wallpaper);
    }
  }
  else{
    setWallpaper(7,-1);
  }
  console.log('自定义壁纸信息读取成功');
}