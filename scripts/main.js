const host = document.querySelector('host');
host.addEventListener('click', writeName);
function writeName () {
  console.log('host');
}

const guest = document.querySelector('guest');
guest.addEventListener('click', writeName);
function writeName () {
  console.log('guest');
}