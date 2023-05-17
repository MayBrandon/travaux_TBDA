let PU = parseInt(prompt("Introduit le prix unitaire")); 
let QTECOM = parseInt(prompt("Introduit la quantité à commander"));
let TOT = PU * QTECOM;

let PAP;
let REM;
let PORT;

if (TOT > 100 && TOT < 200) {
    REM = (5 * TOT) / 100;
    document.write("Vous avez une remise de " + REM + "€<br>");
} else if (TOT > 200) {
    REM = (10 * TOT) / 100;
    document.write("Vous avez une remise de " + REM + "€<br>");
} 

if ((TOT - REM) <= 500) {

    PORT = (2 * TOT - REM) / 100;
    document.write("Votre frais de port est de " + PORT + "€<br>");

} else {
    
    document.write("Frais de port offert<br>");
        
}

document.write("Remise de 10% ("+ REM +") soit " + (TOT - REM) +" <br>")