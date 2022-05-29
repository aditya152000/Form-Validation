let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")
let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")
 
function validate() {
    
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;

  if (firstName === ''){
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if(lastName === ''){
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }

  if(email==='' || !email.includes('@') || email.startsWith('@') || email.lastIndexOf('.')===-1)

  {
      emailInvalid.style.display='block'
      emailValid.style.display='none'

  }
  else{
    emailInvalid.style.display='none'
    emailValid.style.display='block'
  }
}



/*function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    console.log("Validate works fine!!!");
    console.log(firstName, lastName, zipCode, state, email, phoneNumber);
    
    

    if(firstName ==='')
    {
        document.getElementById("firstNameInvalid").style.display='block'
        document.getElementById("firstNameValid").style.display='none'

    }
    else{
        document.getElementById("firstNameInvalid").style.display='block'
        document.getElementById("firstNameValid").style.display='none'

    }

    if(lastName ==='')
    {
        document.getElementById("firstNameInvalid").style.display='block'
        document.getElementById("firstNameValid").style.display='none'

    }
    else{
        document.getElementById("firstNameValid").style.display='block'
        document.getElementById("firstNameInvalid").style.display='none'

    }
}*/
