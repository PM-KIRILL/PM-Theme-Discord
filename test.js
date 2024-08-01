document.addEventListener("DOMContentLoaded", function() {
    const message = document.createElement('div');
    message.innerText = "Привет";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.fontSize = "50px";
    message.style.color = "red";
    document.body.appendChild(message);
});
