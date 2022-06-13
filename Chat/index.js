let chat = document.getElementById("chat");
chat.scrollTop = chat.scrollHeight - chat.clientHeight;
let input = document.getElementById("line");
let sendBtn = document.getElementById("send");
let typing = document.getElementById("typing");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // chat.innerHTML += `<div class="message parker">${input.value}</div>`;
  sendText();
  if (input.value.toUpperCase().includes("HEY")) {
    // chat.innerHTML += `<div class="message stark">Hey Kwaku Spidey</div>`;
    replyText();
  }
});

function sendText() {
  let sendDiv = document.createElement("div");
  sendDiv.setAttribute("class", "message parker");
  sendDiv.innerText = input.value;
  chat.insertBefore(sendDiv, typing);
}

function replyText() {
  let replyDiv = document.createElement("div");
  replyDiv.setAttribute("class", "message stark");
  replyDiv.innerText = "Hey Kwaku Spidey";
  chat.insertBefore(replyDiv, typing);
}
