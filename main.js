let contenidoDosTexto = document.getElementById("contenido2_texto");
let contenidoDosTextoDos = document.querySelector("#contenido2_texto2");
let textoEncriptado_Desencriptado = contenidoDosTextoDos.querySelector(".textoEncriptado");
let mensajeError = document.createElement("p"); 
let mensajeCopiarTexto = document.createElement("p");

contenidoDosTextoDos.style.display = "none";

// Añadir el mensaje de error al contenedor de contenido2_texto
mensajeError.id = "mensaje-error";
mensajeError.style.color = "#FFA500";
contenidoDosTexto.appendChild(mensajeError);

// Añadir el mensaje de copiado con exito 
mensajeCopiarTexto.id = "mensaje-copiado";
mensajeCopiarTexto.style.color = "#007BFF";
contenidoDosTextoDos.appendChild(mensajeCopiarTexto);



//----- FUNCION BOTON ENCRIPTAR TEXTO -----//
function encriptarTexto() {
  let textarea = document.getElementById("auto-resize-textarea");
  let texto = textarea.value.toLowerCase();

  if (texto.length > 3) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "a":
          textoEncriptado += "ai";
          break;
        case "e":
          textoEncriptado += "enter";
          break;
        case "i":
          textoEncriptado += "imes";
          break;
        case "o":
          textoEncriptado += "ober";
          break;
        case "u":
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += texto[i];
      }
    }
    textarea.value = "";
    contenidoDosTexto.style.display = "none";
    textoEncriptado_Desencriptado.textContent = textoEncriptado;
    contenidoDosTextoDos.style.display = "flex";
    mensajeError.style.display = "none"; 
  } else {
    contenidoDosTexto.style.display = "block";
    mensajeError.textContent = "Ingresar texto para Encriptar.";
    mensajeError.style.display = "block"; 
    contenidoDosTextoDos.style.display = "none"; 
  }
}


//----- FUNCION BOTON DESENCRIPTAR TEXTO -----//
function desencriptarTexto() {
  let textarea = document.getElementById("auto-resize-textarea");
  let texto = textarea.value.toLowerCase();

  if (texto.length > 3) {
    // Reemplaza las secuencias encriptadas con sus correspondientes caracteres
    let textoDesencriptado = texto
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    textarea.value = "";
    contenidoDosTexto.style.display = "none";
    textoEncriptado_Desencriptado.textContent = textoDesencriptado;
    contenidoDosTextoDos.style.display = "flex";
  } else {
    contenidoDosTexto.style.display = "block";
    mensajeError.textContent = "Ingresar texto para Desencriptar.";
    mensajeError.style.display = "block";
    contenidoDosTextoDos.style.display = "none";
  }
};

mensajeCopiarTexto.style.display = "none"; 
//----- FUNCION BOTON COPIAR TEXTO -----//
function copiarTexto() {
  let textoEncriptado = textoEncriptado_Desencriptado.textContent;

  navigator.clipboard
    .writeText(textoEncriptado)
    .then(() => {
      mensajeCopiarTexto.textContent = "¡Texto copiado con éxito!";
      mensajeCopiarTexto.style.display = "block";

      setTimeout(() => {
        mensajeCopiarTexto.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
};