let age = parseInt(prompt("Quel age avez-vous"))
let jeune = 0;
let jeuneAdult = 0;
let vieux = 0;


while (age < 100){

    if 
    (age <= 20){
        jeune++;  
    } 

    else if (age > 20 && age < 40) {
        jeuneAdult++;
    } 

    else {
        vieux++;
    }
    age = parseInt(prompt("Quel age avez-vous"))
} 
vieux++


document.write("Nombre de jeunes: " + jeune+"<br>");
document.write("nombre d'adultes: " + jeuneAdult + "<br>");
document.write("Nombre de vieux: " + vieux + "<br>");
