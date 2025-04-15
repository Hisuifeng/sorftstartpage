console.log('自定义收藏函数已加载');
//初始函数
readCookie()
//懒得写直接抄菜鸟(
function setCookie(cname,cvalue,exdays)//名称cname，值cvalue，过期时间expires(天)。
{  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + JSON.stringify(cvalue) + "; " + expires;
  console.log(cname + "=" + cvalue + "; " + expires)
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
}
function readCookie(){
  if (favorite!=""){
    var favorite=getCookie("favorite");
    var obj;
    obj = JSON.parse(getCookie("favorite"));
    for (let i = 0;i < 4;i++){
      console.log(obj)
      let url_url = document.getElementById('url'+ (i+1));
      let url_img = document.getElementById('url'+ (i+1) +'_img');

      url_url.setAttribute("onclick", "window.location.href='"+ obj.url[i] +"'");
      url_img.setAttribute("src", obj.icon[i]);
    }
		console.log('自定义收藏信息读取成功');
	}
}