// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaU =[];

function agregarAmigo(){
    let usuarios = document.getElementById('amigo').value;
    
    if(usuarios === ''){
        alert("Por favor Inserte un nombre");
    }else{
        listaU.push(usuarios);
        limpiarInput(); 
        amigos();//actualiza la lista
        console.log(listaU); 
    }
}
//limpiar el input o caja
function limpiarInput(){
    document.querySelector('#amigo').value='';
}
// recorrer una lista
function amigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML='';

    for(let i = 0; i < listaU.length; i++){
        let li = document.createElement("li");
        li.textContent = listaU[i];
        lista.appendChild(li);
    }
}
function sortearAmigo(){
    if(listaU === 0){
        alert("la lista esta vacia por favor, añadir amigos");
    }else{
        let aleatorio = Math.floor(Math.random()*listaU.length);
        let amigoSorteado = listaU[aleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    }
}