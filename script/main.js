/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Contact Us
document.getElementById('fullNameTXTBX').addEventListener('keyup', notAllowedCharactersIfEmpty);
document.getElementById('emailTXTBX').addEventListener('keyup', notAllowedCharacters);
document.getElementById('subjectTXTBX').addEventListener('keyup', notAllowedCharactersIfEmpty);
document.getElementById('messageTXTBX').addEventListener('keyup', notAllowedCharactersIfEmpty);
document.getElementById('sendMessageBTN').addEventListener('click', validate);

// Keys Not Allowed
function notAllowedCharacters(event) {
    switch (event.keyCode) {
        case 32: // Space Key
            document.getElementById(event.target.id).value = document.getElementById(event.target.id).value.substring(0, document.getElementById(event.target.id).value.length -1);
            console.log("Not Allowed")
            break;
    
        default:
            document.getElementById(event.target.id).classList.remove("requiredInput");
            break;
    }
}

// If The TextBox is Empty
function notAllowedCharactersIfEmpty(event) {
    document.getElementById(event.target.id).classList.remove("requiredInput");
    if (document.getElementById(event.target.id).value == " ") notAllowedCharacters(event);
}

// set pattern
function validate(){
    document.getElementById('telephoneTXTBX').setAttribute('oninvalid', this.setCustomValidity('Invalid Phone Numer Format (9#########)'))
    let phoneFormat = /9([0-9]{9})/;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid = true;
}