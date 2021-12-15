var form1 = document.getElementById("form1")

var nameUser = document.getElementById("nameUser")
var lastName = document.getElementById("lastname")
var email = document.getElementById("email")
var date = document.getElementById("born")
var password = document.getElementById("pass")

/* form1.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Nombre: " + nameUser.value);
    console.log("Apellidos: " + lastName.value);
    console.log("Correo: " + email.value);
    console.log("Contraseña: " + password.value);
    var name = form1.elements["nameUser"].value
    
    const data = Object.fromEntries(new FormData(event.target).entries())
    console.log(data)
    writeDocument(data)
}) */

function writeDocument(data){
    const div = document.getElementById('container')
    var text = '<div class="card" p-3>'+'<h3>'+data.name+'<h3>' + '<h3>' + data.lastname + '</h3>' + '<h5>'+data.pass +'<h5>' + '</div>'  
    div.innerHTML += text
}

<<<<<<< HEAD
const list = []

form1.addEventListener('submit', function(event){
    event.preventDefault();
    
    const data = Object.fromEntries(new FormData(event.target).entries())
    
    form1.elements['nameUser'].value = ""
    form1.elements['lastname'].value = ""
    form1.elements['pass'].value = ""

    list.push(data)
    localStorage.setItem('users', JSON.stringify (list)) 
    
    let dataStorage = localStorage.getItem('users')
    console.log( JSON.parse(dataStorage))
})

/* Mostrar valores de Local storage en tabla */
let bodyTable = document.getElementById('body-table')
let bntTable = document.getElementById('btn-table')

bntTable.addEventListener('click', function(){
    let userLocalStorage = JSON.parse(localStorage.getItem('users'))
    for(let user of userLocalStorage){
        bodyTable.innerHTML += `
        <tr>
        <td scope="row" id="name-table">${user.name}</td>
        <td id="last-table">${user.lastname}</td>
        <td id="pass-table">${user.pass}</td>
        </tr>
        `
        console.log(user)
    }
})

function showUsersInTable(){
    for(let user of userLocalStorage){
        /* bodyTable.innerHTML += `
        <tr>
        <td scope="row" id="name-table">${user.name}</td>
        <td id="last-table">${user.lastname}</td>
        <td id="pass-table">${user.pass}</td>
        </tr>
        ` */
        console.log(user)
    }
}
=======
// Parcial
let buttonMoon = document.getElementById('moon-btn');
let buttonMars = document.getElementById('mars-btn');
let buttonSaturn = document.getElementById('saturn-btn')

buttonMoon.addEventListener('click', function(){
    document.getElementById('moon-div').style.display = 'flex';
})

buttonMars.addEventListener('click',function(){
    document.getElementById('mars-div').style.display = 'flex';
})

buttonSaturn.addEventListener('click', function(){
    document.getElementById('saturn-div').style.display = 'flex';
})
>>>>>>> Parcial_1

