let msg = document.querySelector(".message");
setTimeout(function () {
    msg.style.display = "block";
    
}, 5000);

msg.onclick = function () {
    msg.style.display = "none";
};