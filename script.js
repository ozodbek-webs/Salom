var oyna =localStorage.getItem("oyna")|| 0
document.querySelector(".oyna").innerHTML = localStorage.getItem("oyna")||0

function add() {
    oyna++
    localStorage.setItem("oyna", oyna)
    document.querySelector(".oyna").innerHTML = localStorage.getItem("oyna")
    document.querySelector(".music").innerHTML='<audio src="./notificationsound-56675.mp3" autoplay></audio>'
}
function reset() {
    oyna = 0
    document.querySelector(".oyna").innerHTML = oyna;
    document.querySelector(".music").innerHTML='<audio src="./notificationsound-56675.mp3" autoplay></audio>';
}