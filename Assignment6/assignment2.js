userdataArray = JSON.parse(localStorage.getItem("userdata"))
for (const key in userdataArray)
{
    const {username,age,email,phoneno}=userdataArray[key] 
    




let newRow=regtable.insertRow(regtable.rows.length );
let newCell1  = newRow.insertCell(0);
let username1 = username
let newText1  = document.createTextNode(username1);
newCell1.appendChild(newText1);

let newCell2 = newRow.insertCell(1);
let age1 = age
let newText2  = document.createTextNode(age1);
newCell2.appendChild(newText2);

let newCell3 = newRow.insertCell(2);
let email1 = email
let newText3  = document.createTextNode(email1);
newCell3.appendChild(newText3);

let newCell4= newRow.insertCell(3);
let phno = phoneno
let newText4  = document.createTextNode(phno);
newCell4.appendChild(newText4);

}
