document.getElementById("generar").addEventListener("click",generarPass);

function generarPass() {
    const longitud = parseInt(prompt("Ingresar longitud de password: "));

    if(isNaN(longitud) || longitud <= 5) {
        alert("La longitud debe tener al menos 6 caracteres: ");
        return;
    }

    const incluirMayuscula = confirm("Desea incluir letras mayúsculas?");
    const incluirMinuscula = confirm("Desea incluir letras minúsculas?");
    const incluirNumeros = confirm("Desea incluir números?");
    const incluirEspeciales = confirm("Desea incluir caractéres especiales?");

    if(!(incluirMayuscula || incluirMinuscula || incluirNumeros || incluirEspeciales)) {
        alert("Debe seleccionar al menos una opcion para continuar");
        return;
    }

    const passGenerada = generarPassAleatoria(longitud, incluirMayuscula, incluirMinuscula, incluirNumeros, incluirEspeciales);

    document.getElementById("Password").textContent = "Password generada: " + passGenerada;

}


function generarPassAleatoria(longitud, incluirMayuscula, incluirMinuscula, incluirNumeros, incluirEspeciales) {
    let caracteresPermitidos = "";
    
    if (incluirMayuscula) caracteresPermitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirMinuscula) caracteresPermitidos += "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteresPermitidos += "0123456789";
    if (incluirEspeciales) caracteresPermitidos += "!@#$%^&*()_+[]{}|;:,.<>?";

    let password = "";
    for(let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
        password += caracterAleatorio;
    }
    return alert(password);

}
