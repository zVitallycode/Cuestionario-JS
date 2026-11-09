const Formulario = document.getElementById("registro");
const Nombre = document.getElementById("nombre");
const Edad = document.getElementById("edad");
const Modalidad = document.getElementById("modalidad");
const Correo = document.getElementById("correo");
const Experiencia = document.getElementById("experiencia");

const infcaracteres = document.getElementById("vistaCaracteres");
const infexperiencia = document.getElementById("infoExperiencia");
const infnombre = document.getElementById("vistaNombre")
const infedad = document.getElementById("estadoEdad")
const infmodalidad = document.getElementById("infoModalidad");
const infcorreo = document.getElementById("infCorreo");
const salida = document.getElementById("resultado");


Nombre.addEventListener("input", function () {
    const nombre = Nombre.value.trim();
    const longitud = nombre.length;

    if (longitud === 0) {
        infnombre.textContent = "";
        infcaracteres.textContent = "";
        infvalidez.textContent = "";
        return;
    }

    infnombre.textContent = "Bienvenido " + nombre;
    infcaracteres.textContent = longitud + " caracteres";

    if (longitud < 5 || longitud > 20) {
        infvalidez.textContent = "Valor fuera de rango";
        infvalidez.style.color = "red";
    } else {
        infvalidez.textContent = "Valor válido";
        infvalidez.style.color = "green";
    }
});


Nombre.addEventListener("blur", function (){

    if (Nombre.value === "") {
        infnombre.textContent =
        "Este campo es obligatorio.";
    }
    else {
        infnombre.textContent =
        "campo diligenciado.";
    }
});



Edad .addEventListener("blur", function (){

    if (Edad.value === "") {
        estadoEdad.textContent =
        "Este campo es obligatorio.";
    }
    else {
        estadoEdad.textContent =
        "Campo diligenciado.";
    }
});



Modalidad.addEventListener("change", function (){

if (Modalidad.value === "virtual") {
    infoModalidad.textContent = "La clase es por medio de reuniones virtuales";

}
else if (Modalidad.value === "presencial") {
     infoModalidad.textContent = "Vas a una sede en especifico";
}
else   {
    infoModalidad.textContent = "";
}

});



Correo.addEventListener("focus", function(){
    infcorreo.textContent= "ingrese un correo valido."
});

Formulario.addEventListener("submit", function (event){
    event.preventDefault();

    let valorEdad = Number(Edad.value)
    let nombreValido = Nombre.value !== "";
    let edadValida = valorEdad >= 14 && valorEdad <=100;
    let modalidadValida = Modalidad.value !== "";
    let correoValido = Correo.value !=="";
    let experienciaValida = Experiencia.value !== "";

if (nombreValido && edadValida && modalidadValida && correoValido) {
salida.textContent = " Todos los datos son correctos.";
} 
else {
salida.textContent = "Completa el formulario.";
salida.style.color = "red";
}

});




Experiencia.addEventListener("change", function (){

if (Experiencia.value === "principiante") {
    infexperiencia.textContent = "Tu conociiento es primerizo";

}
else if (Experiencia.value === "intermedio") {
     infexperiencia.textContent = "Tu conocimiento es regular ";
}
else if (Experiencia.value === "avanzado") {
     infexperiencia.textContent = "Tu conocimiento es adelantado";
}

else   {
    infexperiencia.textContent = "";
}

});