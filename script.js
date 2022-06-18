var nameError = document.getElementById('name-error')
var emailError= document.getElementById('email-error')
var mobileError= document.getElementById('mobile-error')
var messageError= document.getElementById('message-error')
var submitError= document.getElementById('submit-error')

function validateName() {
   var name = document.getElementById('name').value;

   if(name.length <3){
      nameError.innerHTML ='Name required';
      return false; 
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML='write full name';
      return false;
   }
   nameError.innerHTML = '';
   return true;
}
function validateMobile(){
   var mobile = document.getElementById('number').value;
   if(mobile.length==0){
      mobileError.innerHTML='Mobile no required'
      return false;
   }
   if(mobile.length!==10){
      mobileError.innerHTML='mobile no should be 10 digits'
      return false;
   }
   if (!mobile.match(/^[0-9]{10}$/)) {
    mobileError.innerHTML='Mobile no required'
    return false;      
   }
   mobileError.innerHTML= '';
   return true;
}

function validateEmail(){
   var email = document.getElementById('email').value;
   if(email.length==0){
      emailError.innerHTML = 'Email required'
      return false;
   }
   if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
      emailError.innerHTML='Email invalid'
      return false;      
     }
     emailError.innerHTML= '';
     return true;
}
function validateMessage(){
   var message = document.getElementById('message').value;
   var required = 30;
   var left = required -message.length;
   if(left > 0){
      messageError.innerHTML = left + 'More character required' 
      return false;
   }
     messageError.innerHTML= '';
     return true;
}
function validateForm() {
   if(!validateName() || !validateMobile()|| !validateEmail() || !validateMessage()){
      submitError.style.display ='block';
      submitError.innerHTML ='please fix the error to submit'
      setTimeout(function() {submitError.style.display = 'none';
         
      },3000);
      return false;
   }
}