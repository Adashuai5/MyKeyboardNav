function getTime() {
    var nowDate = new Date();
    var month = (nowDate.getMonth() + 1) > 10 ? nowDate.getMonth() + 1 : '0' + (nowDate.getMonth() + 1);
    var day = nowDate.getDate() >= 10 ? nowDate.getDate() : '0' + nowDate.getDate();
    var hour = nowDate.getHours() >= 10 ? nowDate.getHours() : (nowDate.getHours() == 0 ? 24 : '0' + nowDate.getHours());
    var minutes = nowDate.getMinutes() >= 10 ? nowDate.getMinutes() : '0' + nowDate.getMinutes();
    var seconds = nowDate.getSeconds() >= 10 ? nowDate.getSeconds() : '0' + nowDate.getSeconds();
    document.getElementById("month").value = month;
    document.getElementById("day").value = day;
    document.getElementById("hour").value = hour;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
}
window.setInterval("getTime()", 1000);