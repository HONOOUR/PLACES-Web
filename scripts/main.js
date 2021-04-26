const container = document.getElementById('container');

// click host -> host join/sign in
const host = document.getElementById('host');
host.addEventListener('click', function() {
  // create log in | join in node
  let node = createSignInNode();
  container.parentNode.replaceChild(node, container);

  writeName('host');
});

// click guest -> guest join/sign in
const guest = document.getElementById('guest');
guest.addEventListener('click', function() {
  writeName('guest');
});

function writeName (name) {
  console.log(name);
};

function createSignInNode() {
  let newNode = document.createElement('div');
  newNode.setAttribute('id', 'container');
  let lineNode = document.createElement('div');
  let lineNode_2 = document.createElement('div');
  let lineNode_3 = document.createElement('div');
  let name = document.createTextNode("Host name: ");
  let nameInput = document.createElement('input');
  let checkButton = document.createElement('button');
  checkButton.innerHTML = "Check";
  let password = document.createTextNode("Password: ");
  let passwordInput = document.createElement('input');
  let hostingTime = document.createTextNode("Hosting time: ");
  let hostingTimeInput = document.createElement('input');
  let signInButton = document.createElement('button');
  signInButton.innerHTML = "Sign In | Log In";
  signInButton.setAttribute('id', 'signIn');
  signInButton.setAttribute('type', 'submit');
  lineNode.appendChild(name);
  lineNode.appendChild(nameInput);
  lineNode.appendChild(checkButton);
  lineNode_2.appendChild(password);
  lineNode_2.appendChild(passwordInput);
  lineNode_3.appendChild(hostingTime);
  lineNode_3.appendChild(hostingTimeInput);
  newNode.appendChild(lineNode);
  newNode.appendChild(lineNode_2);
  newNode.appendChild(lineNode_3);
  newNode.appendChild(signInButton);
  
  return newNode;
};


function createChatRoom() {
  let containerStyle = document.createElement('style');
  containerStyle.textContent = `style { 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;
  }`

  let cardStyle = document.createElement('style');
  cardStyle.textContent = `.card { 
    height: 70vh;
    width: 45vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
  }`

  let profileStyle = document.createElement('style');
  profileStyle.textContent = `.profileStyle { 
    height: 70vh;
    width: 45vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
  }`

  document.head.appendChild(containerStyle);
  document.head.appendChild(cardStyle);
  document.head.appendChild(profileStyle);
  
  let container = document.createElement('div');
  container.setAttribute('class', 'container');

  let chatRoom = document.createElement('div');
  chatRoom.setAttribute('class', 'card');
  chatRoom.innerHTML = "This is a chat room";
  let chatForm = document.createElement('form');
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'message');
  input.setAttribute('placeholder', "Enter a message");
  
  let sendButton = document.createElement('button');
  sendButton.innerHTML = "Send";
  sendButton.setAttribute('id', 'send');
  sendButton.setAttribute('type', 'submit');
  let signOutButton = document.createElement('button');
  signOutButton.innerHTML = "sign out";

  let profile = document.createElement('div');
  profile.setAttribute('class', 'profileStyle');
  let name = document.createElement('div');
  name.innerHTML = "Host name: XXXXX";
  let code = document.createElement('div');
  code.innerHTML = "Hosting code : XXXXX";
  
  chatRoom.appendChild(chatForm);
  chatRoom.appendChild(input);
  chatRoom.appendChild(sendButton);
  profile.appendChild(signOutButton);
  profile.appendChild(name);
  profile.appendChild(code);

  container.appendChild(chatRoom);
  container.appendChild(profile);

  return container;
};

document.addEventListener('click', function(e) {
  if (e.target.id == 'signIn') {
    let node = createChatRoom();
    let container = document.getElementById('container');
    container.parentNode.replaceChild(node, container);
  }
}, false);

