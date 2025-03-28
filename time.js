console.log('时间函数已加载');
function displayTime_min() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    // 格式化时间
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    var timeString = hours + ":" + minutes;
    document.getElementById("time_min").innerHTML = timeString;
}
function displayTime_second() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // 格式化时间
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = timeString;
}
function displayDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    // 格式化日期
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var dateString = year + '-' + month + '-' + day;
    document.getElementById("date").innerHTML = dateString;
}
// 定时器
setInterval(displayTime_min, 1000);
//setInterval(displayDate, 1000);