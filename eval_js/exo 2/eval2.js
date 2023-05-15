let multi = 0;
let nombre = parseInt(prompt("Entrer un nombre a multiplier"));



function multiplication(){
    do {
        result = nombre * multi;

        console.log(nombre + " x " + multi + " = " + result);

        multi++;
    } while (multi <= 10);
}

multiplication()