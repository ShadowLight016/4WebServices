// declare variables
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Set Minimum Date To Future

let today = new Date()
let mm = today.getMonth() + 1;
let dd = today.getDate() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

let min = yyyy + '-' + mm + '-' + dd;
console.log("min = " +min);
document.getElementById("meetingSchedDTTMPCKR").setAttribute('min', min);

// addeventlisteners
document.getElementById("fullNameTXTBX").addEventListener("keyup", notAllowedCharactersIfEmpty);
document.getElementById("emailTXTBX").addEventListener("keyup", notAllowedCharacters);
document.getElementById("messageTXTAREA").addEventListener("keyup", notAllowedCharactersIfEmpty);


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