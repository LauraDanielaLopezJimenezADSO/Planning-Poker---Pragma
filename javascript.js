
function toggleButton() {
    const textoInput = document.querySelector(".nombrar_input").value;
    const button__nombrar = document.getElementById("button__nombrar");
    const buttonNombrar__crear = document.getElementById("buttonNombrar__crear");
    const errorMessage = document.getElementById("error_message");
    const errorMessage__crear = document.getElementById("errorMessage__crear");

    // validación del nombre
    const isValid = validadNombre(textoInput);

    //validar los inputs radio
    let radios = document.querySelectorAll('input[name="tipoJugador__crear"]');
    let radioChecked = false;
    radios.forEach(radio => {
        if(radio.checked){
            radioChecked = true;
        }
    });

    //habilitar el button si el nombre es valido y si esta un input radio seleccionado
    //pagina crear 2
    button__nombrar.disabled = textoInput.trim() === "" || !isValid || !radioChecked;
    //pagina nombrar partida index
    buttonNombrar__crear.disabled = textoInput.trim() === "" || !isValid;

    //  mensaje de error pagina nombrar partida index
    if (!isValid) {
        errorMessage.textContent = "El nombre no cumple con los requisitos.";
    }else {
        errorMessage.textContent = ""; // Limpiar el mensaje si es válido
    }

    //  mensaje de error Pagina crear
    if (!isValid) {
        errorMessage__crear.textContent = "El nombre no cumple con los requisitos.";
    } else if (!radioChecked) {
        errorMessage__crear.textContent = "Selecciona una de las dos opciones.";
    } else {
        errorMessage__crear.textContent = ""; // Limpiar el mensaje si es válido
    }
}

function validadNombre(nombre) {
    // longitud -- entre 5 y 20 caracteres
    if (nombre.length < 5 || nombre.length > 20) {
      return false;
    }

    // Validar caracteres especiales
    const charsEspeciales = /[_.*#/-]/;
    if (charsEspeciales.test(nombre)) {
      return false;
    }

    // máximo 3 números
    const numCant = (nombre.match(/\d/g) || []).length;
    if (numCant > 3) {
      return false;
    }

    // que no sea solo números
    if (/^\d+$/.test(nombre)) {
      return false;
    }

    return true;
}

function redirectPaginaCrear() {
    //direccionar a la pagina crear
    window.location.href = "crear.html";
}

