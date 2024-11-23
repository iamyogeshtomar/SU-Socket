const socket = io();
// console.log(socket);

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector(`#chatList`);

console.log(socket);

btn.addEventListener(`click`, (e) => {
  const inputValue = input.value;
  socket.emit(`message`, inputValue);
  //   console.log(inputValue);
});

socket.on(`user-message`, (message) => {
  console.log(message);
//   const p = document.createElement("li");
//   console.log(list);
const li = document.createElement("li");
li.innerText = message;
list.appendChild(li);
});
