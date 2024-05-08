const form=document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dheerajsaini0412@gmail.com",
        Password : "E630BAF9CC9F34F78FEE31CAB7048C56C4D6",
        To : 'dheerajsaini90412@gmail.com',
        From : "dheerajsaini90412@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );    
}