let register = document.getElementById("reg")

register.addEventListener('click', function () {
    const userForm = document.forms["userform"]
    const userNameElement = userForm.username
    const ageElement = userForm.age
    const emailElement = userForm.email
    const phnoNameElement = userForm.phno
      


  
    const username = userNameElement.value
    const age = ageElement.value
    const email= emailElement.value
    const phno = phnoNameElement.value
    console.log("username is", username)
    console.log("password is", age)
    


    let pUserName = document.getElementById("pusername")
    // only albhabets 
    var uname = /^[A-Za-z]{3,14}$/
    if (username.match(uname)) {
        pUserName.className = "removeStyle"
        bUserName= true;
    }
    else {
        pUserName.className = "addStyle"
        bUserName= false;
    }

    let pAge = document.getElementById("page")
    var x = parseInt(age, 10) // its the value from the input box;
    if (isNaN(x) || x < 1 || x > 140) {
        
        pAge.className = "addStyle"
        bAge= false;
    }
    else {
        pAge.className = "removeStyle"
        bAge= true
    }

    let pEmail = document.getElementById("pemail")
    // only albhabets 
    let uemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(uemail)) {
        pEmail.className = "removeStyle"
        bEmail= true;
    }
    else {
        pEmail.className = "addStyle"
        bEmail= false;
    }

    
    let pPhno = document.getElementById("pphno")
    // only albhabets 
    let phoneno = /^\d{10}$/;
    if (phno.match(phoneno)) {
        pPhno.className = "removeStyle"
        bPhno= true;
    }
    else {
        pPhno.className = "addStyle"
        bPhno= false;
    }

    if(bUserName==true && bAge==true && bEmail==true && bPhno==true)
    {
        var user = {username:username,age:age,email:email,phoneno:phno}
        
        if(localStorage.getItem("userdata")) {
            userdataArray = JSON.parse(localStorage.getItem("userdata"))
            userdataArray.push(user)
            localStorage.setItem("userdata",JSON.stringify(userdataArray))
        }
        else {
            localStorage.setItem("userdata",JSON.stringify([user]))
        }
        window.location.href = "D:/JS assignment/Assignment6/assignment2.html"
    }


  
})
let clear = document.getElementById("clear")

clear.addEventListener('click', function () {
    localStorage.clear();
})


// function CheckPassword() {
//     let userName = document.getElementById("username");
//     var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;;
//     if (userName.value.match(passw)) {
//         alert('Correct, try another...')
//         return true;
//     }
//     else {
//         alert('Wrong...!')
//         return false;
//     }
// }







