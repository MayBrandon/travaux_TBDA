console.log("Je suis connecté!...");

// Programme qui recherche un prenom
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let prenom = prompt("introduit le prenom recherché dans le tableau");

if ((tab.indexOf(prenom)) == -1) {
   document.write("Le prenom recherché n'existe pas dans le tableau"+ "<br>");
} else {
    tab.splice((tab.indexOf(prenom)), 1);
    tab.push("");
}
document.write("Le nombre d'éléments du tableau est " + tab.length +"<br>");
document.write("Les prenoms restants sont: ");

for (let i = 0; i < tab.length; i++) {
    document.write(tab[i] + " ");
}