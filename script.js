const scriptURL = 'https://script.google.com/macros/s/AKfycbwU7vt2UoG3kRH954Z_onpkV237NqNDG7v5v-s03D_P1Yy81EL6yoMcGub5dul03U5w/exec'
const form = document.forms['contact-us'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => {  window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

const btn=document.getElementById('submitb');
function sub(){
  btn.innerHTML='Submitted';
}