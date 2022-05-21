var random = Math.floor(Math.random() * 3);
var iframe = document.getElementById("songplayer");
if (random == 1) {
    iframe.src = "//music.163.com/outchain/player?type=2&id=492390949&auto=1&height=66";
}
if (random == 2) {
    iframe.src = "//music.163.com/outchain/player?type=2&id=427606780&auto=1&height=66";
}
function toggle(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
