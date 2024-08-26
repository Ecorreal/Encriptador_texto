// Se definen variables globales

const textoIngresado = document.querySelector(".caja_texto");
const mensajeEncriptado = document.querySelector(".caja_mensaje");
const seccionVisualiza = document.getElementById("seccionVisualizaMensaje");
const sinMensaje = document.getElementById("sinMensaje");
const estadoBotonCopia = document.getElementById("botoneraVisualizaTexto");


function botonEncriptar(){

    console.log('ONCLICK inicia Función botonEncriptar');

    mensajeEncriptado.value = '';
    // Expresión regular para permitir solo letras y espacios
    const validador = /^[A-Za-z\s]+$/;

    // Obtener el valor del textarea y eliminar espacios en blanco al principio y al final
    const texto = textoIngresado.value.trim();

    // Comprobar si el textarea está vacío o no cumple con la expresión regular
    if (texto === '') {
        
                        console.log('NO HAY TEXTO INGRESADO');
                        
                        seccionVisualiza.style.display = 'flex'; 
                        textoIngresado.placeholder = "ingrese el texto aquí.";
                        sinMensaje.style.visibility = 'visible';
                        estadoBotonCopia.style.visibility = 'hidden'; 
                        
                    } else { if (!validador.test(texto)){

                                                            console.log('ERROR CONTENIDO TEXTO');
                                                            textoIngresado.placeholder = "sólo se aceptan letras minusculas y sin acento, favor ingrese el texto aquí.";
                                                            seccionVisualiza.style.display = 'none';

                                                        } else{
                        
                                                                console.log('Vamos a encriptar:', textoIngresado.value);
                                                                textoIngresado.placeholder = "ingrese el texto aquí.";
                                                                seccionVisualiza.style.display = 'flex';
                                                                sinMensaje.style.visibility = 'hidden';
                                                                estadoBotonCopia.style.visibility = 'visible'; 
                                                                const textoEncriptado = encriptador(textoIngresado.value);
                                                                mensajeEncriptado.value = textoEncriptado;    
                                                                
                                                                }
                    
                            } 
                    
                // Restablecer el placeholder original
                textoIngresado.value = "";

                console.log('FIN FUNCION');

}


function encriptador(stringEncriptado){

    console.log('INGRESA A ENCRIPTADOR');

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptado.includes(matrizCodigo[i][0])) {
        
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;

}

function desencriptador(stringDesencriptado){

    console.log('INGRESA A DESENCRIPTADOR');

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;

}

function botonDesencriptar(){

    console.log('ONCLICK inicia Función botonDesencriptar');

    mensajeEncriptado.value = '';
    // Expresión regular para permitir solo letras y espacios
    const validador = /^[A-Za-z\s]+$/;

    // Obtener el valor del textarea y eliminar espacios en blanco al principio y al final
    const texto = textoIngresado.value.trim();

    // Comprobar si el textarea está vacío o no cumple con la expresión regular
    if (texto === '') {
        
                        console.log('NO HAY TEXTO INGRESADO');
                        
                        seccionVisualiza.style.display = 'flex'; 
                        textoIngresado.placeholder = "ingrese el texto aquí.";
                        sinMensaje.style.visibility = 'visible';
                        estadoBotonCopia.style.visibility = 'hidden'; 
                        
                    } else { if (!validador.test(texto)){

                                                            console.log('ERROR CONTENIDO TEXTO');
                                                            textoIngresado.placeholder = "sólo se aceptan letras minusculas y sin acento, favor ingrese el texto aquí.";
                                                            seccionVisualiza.style.display = 'none';

                                                        } else{
                        
                                                                console.log('Vamos a desencriptar:', textoIngresado.value);
                                                                textoIngresado.placeholder = "ingrese el texto aquí.";
                                                                seccionVisualiza.style.display = 'flex';
                                                                sinMensaje.style.visibility = 'hidden';
                                                                estadoBotonCopia.style.visibility = 'visible'; 
                                                                const textoEncriptado = desencriptador(textoIngresado.value);
                                                                mensajeEncriptado.value = textoEncriptado;    
                                                                
                                                                }
                    
                            } 
                    
                // Restablecer el placeholder original
                textoIngresado.value = "";

                console.log('FIN FUNCION');

}


function copiar(){
    
    const textoCopiado = document.getElementById('cajaMensaje').value;

    document.getElementById('cajaTexto').value = textoCopiado;

    document.getElementById('cajaMensaje').value = '';

}