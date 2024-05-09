// const scriptURL = 'https://script.google.com/macros/s/AKfycbwU7vt2UoG3kRH954Z_onpkV237NqNDG7v5v-s03D_P1Yy81EL6yoMcGub5dul03U5w/exec'

// const form = document.forms['contact-us']
    
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbwU7vt2UoG3kRH954Z_onpkV237NqNDG7v5v-s03D_P1Yy81EL6yoMcGub5dul03U5w/exec'
const form = document.forms['contact-us'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your response is submitted successfully." ))
  .then(() => {  window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})