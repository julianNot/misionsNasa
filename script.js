var form1 = document.getElementById("form1")

var nameUser = document.getElementById("nameUser")
var lastName = document.getElementById("lastname")
var email = document.getElementById("email")
var date = document.getElementById("born")
var password = document.getElementById("pass")

form1.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Nombre: " + nameUser.value);
    console.log("Apellidos: " + lastName.value);
    console.log("Correo: " + email.value);
    console.log("Contraseña: " + password.value);
    var name = form1.elements["nameUser"].value
    
    const data = Object.fromEntries(new FormData(event.target).entries())
    console.log(data)
    writeDocument(data)
})

function writeDocument(data){
    const div = document.getElementById('container')
    var text = '<div class="card" p-3>'+'<h3>'+data.name+'<h3>' + '<h3>' + data.lastname + '</h3>' + '<h5>'+data.pass +'<h5>' + '</div>'  
    div.innerHTML += text
}

// Parcial
let buttonMoon = document.getElementById('moon-btn');

buttonMoon.addEventListener('click', function(){
    console.log(document.getElementById('moon-div'))
    document.getElementById('moon-div').style.display = 'flex';

})


function hide(){
    // document.getElementById('moon-div').style.display = block;
    console.log(document.getElementById('moon-div'))
}