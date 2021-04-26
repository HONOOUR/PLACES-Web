let websocketUri = "ws://127.0.0.1:9600"
let websocket = new WebSocket(webSocketUri);  

document.getElementById("chat-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let messageElement = document.getElementsByTagName("input")[0];
  let message = messageElement.value;

  if (message.toString().length) {
    let data = {
      type: "message",
      username: "You",
      message: message
    };

    WebSocket.send(JSON.stringify(data));
    messageElement.value = "";
  }
}, false);