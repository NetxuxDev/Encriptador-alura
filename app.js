var botonEncriptar = document.getElementById("btn-encripta");
var botonDesencripta = document.getElementById("btn-desencripta");
var botonCopiar = document.getElementById("btn-copia");
var textoMostrado = document.getElementById("texto-leer");
var textoIntructivo = document.querySelector(".mensaje-respuesta");
var textoRecibido = document.getElementById("texto-recibido");
const requisito = /^[a-z\s]+$/;


function textoIngresado(){
    var textoRecibido = document.getElementById("texto-recibido");
    return textoRecibido.value;
} 

function encriptarTexto(){
    if(requisito.test(textoIngresado()) && textoIngresado()!='') {
    ocultarTexto();
    var textoRecibido = textoIngresado();
    textoMostrado.textContent = encriptar(textoRecibido);
    document.getElementById("btn-desencripta").removeAttribute('disabled');
    document.getElementById("btn-copia").removeAttribute('disabled');
    limpiar();
    }else {
        alert("El texto ingresado no cumple los formatos indicados")
    }
    
}


function desencriptaTexto(){
    if(requisito.test(textoIngresado()) && textoIngresado()!='') {
    var textoRecibido = textoIngresado();
    textoMostrado.textContent = desencriptar(textoRecibido);
    limpiar();
    }else {
        alert("El texto ingresado no cumple los formatos indicados")
    }
}

function encriptar(texto){
    var mensaje = texto;
    var mensajeFinal = "";

    for(var i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
            mensajeFinal = mensajeFinal + "ai"
        }
        else if(mensaje[i] == "e"){
            mensajeFinal = mensajeFinal + "enter"
        }
        else if(mensaje[i] == "i"){
            mensajeFinal = mensajeFinal + "imes"
        }
        else if(mensaje[i] == "o"){
            mensajeFinal = mensajeFinal + "ober"
        }
        else if(mensaje[i] == "u"){
            mensajeFinal = mensajeFinal + "ufat"
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i]
        }
    }
    return mensajeFinal;

}

function desencriptar(texto){
    var mensaje = texto;
    var mensajeFinal = "";

    for(var i = 0; i < mensaje.length; i++){
        if(texto[i] == "a"){
            mensajeFinal = mensajeFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            mensajeFinal = mensajeFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            mensajeFinal = mensajeFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            mensajeFinal = mensajeFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            mensajeFinal = mensajeFinal + "u"
            i = i+3;
        }
        else{
            mensajeFinal = mensajeFinal + texto[i];
        }
        
    }

    return mensajeFinal;

}
function limpiar(){
    document.querySelector("#texto-recibido").value = "";
}

function ocultarTexto(){
    textoIntructivo.classList.add("ocultar");
}

function copiarTexto(){
    var codigo = textoMostrado.textContent;
    alert("Se copio el texto ingresado")
    navigator.clipboard.writeText(codigo).then(function() {
        textoMostrado.textContent = "";
        limpiar();
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    })
}
