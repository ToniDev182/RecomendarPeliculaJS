const edad = document.getElementById("edad");
const recomendacion = document.getElementById("recomendacion");


function Recomendar(genero) {


    if (!edad) {
        recomendacion.textContent = "Introduzca su edad";
        return;
    }

    let pelicula = "";

    switch (genero) {
        case "Drama":
            if (edad.value < 13) {
                pelicula = "El Rey León (1994)";
            } else if (edad.value < 18) {
                pelicula = "El indomable Will Hunting (1997)";
            } else {
                pelicula = "Los puentes de Madison (1995)";
            }
            break;

        case "Comedia":
            if (edad.value < 13) {
                pelicula = "Solo en casa (1990)";
            } else if (edad.value < 18) {
                pelicula = "Clueless: ¿Es o no es? (1995)";
            } else {
                pelicula = "El gran Lebowski (1998)";
            }
            break;

        case "Crimen":
            if (edad.value < 13) {
                pelicula = "El fugitivo (1993)";
            } else if (edad.value < 18) {
                pelicula = "Se7en: Los siete pecados capitales (1995)";
            } else {
                pelicula = "Pulp Fiction (1994)";
            }
            break;

        case "Musical":
            if (edad.value < 13) {
                pelicula = "La Bella y la Bestia (1991)";
            } else if (edad.value < 18) {
                pelicula = "El secreto de la esfinge (1998)";
            } else {
                pelicula = "Rent (2005)";
            }
            break;
        default:
            pelicula = "No existen recomendaciones";
    }

    recomendacion.textContent = pelicula;
}
