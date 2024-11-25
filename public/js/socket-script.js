const socket = io();

const list = document.querySelector(`#chatList`);
const messageInput = document.querySelector(`#message-input`);
const roomInput = document.querySelector(`#room-input`);
const sendMessage = document.querySelector(`#send-message`);
const joinRoom = document.querySelector(`#join-room`);

sendMessage.addEventListener(`click`, (e) => {
  e.preventDefault();
  const message = messageInput.value;
  socket.emit(`message`, message);
  messageInput.value = ``;
});

joinRoom.addEventListener(`click`, (e) => {
  e.preventDefault();
  const room = roomInput.value;
});

socket.on(`user-message`, (message) => {
  const li = document.createElement("li");
  li.classList.add(`chat`);
  li.innerText = message;
  list.appendChild(li);
});
