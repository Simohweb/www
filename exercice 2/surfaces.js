

let largeur = parseInt(prompt('Entrez la largeur du rectangle en cm:'));
let longueur = parseInt(prompt('Entrez la longueur du rectangle en cm:'));

let perimetre = 2 * (longueur + largeur);
let surface = longueur * largeur;

alert("Le perimetre est égal a " + perimetre +"cm" + "\n La surface est égal a " + surface +"cm²")