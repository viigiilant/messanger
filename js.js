let messageEl = document.querySelector('.message-el');
let textBox = document.querySelector('.text-box');
let sendMessage = document.querySelector('.send-message');

sendMessage.addEventListener("click", function(){
    let newMessage = document.createElement('p')
    newMessage.innerText = textBox.value;
    messageEl.appendChild(newMessage);
    textBox.value = ""
});

function scroll() {
    let scrollMessage = document.querySelector(".min");
    scrollMessage.scrollTop = scrollMessage.scrollHeight ;
}
scroll()