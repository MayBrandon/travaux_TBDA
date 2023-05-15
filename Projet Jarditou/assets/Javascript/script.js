//Ce programme calcule le quotient de 2 entiers entrés par l'utilisateur

//declaration des variables

// let dividende; 
// let diviseur;
// let quotient = 0;

// console.log(dividende);

// dividende = Number.parseInt(prompt('Entrez le dividende entier', '0'));
// diviseur = Number.parseInt(prompt('Entrez le diviseur entier', '1'));
// quotient = dividende / diviseur; 

// alert('Le quotient est '+ quotient + '.');
// alert(`Le quotient est ${quotient}.`);

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Instruction conditionnelles

// declaration des variables

// let codeSolde;
// let prixArticle;
// let prixSolde = 0;

// // ENTRÉE DES DONNÉES

// prixArticle = Number.parseFloat(prompt('Entrer le prix de l\'article en €',''));
// codeSolde = Number.parseFloat(prompt('Entrer le code solde(1 pour -20%, 2 pour -50% et 3 pour -70%','1'));

// //calcul du prix solder

// if (codeSolde === 1){
//     prixSolde = prixArticle - 20/100 * prixArticle;

// } else if (codeSolde === 2){
//     prixSolde = prixArticle - 50/100 * prixArticle;
// } else {
//     prixSolde = prixArticle - 70/100 * prixArticle;
// }

// //AFFICHAGE DU RESULTAT

// alert('Le prix de l\'article solder est ' + prixSolde + '€.'); 


///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Instruction conditionnelles

// declaration des variables

// let codeSolde;
// let prixArticle;
// let prixSolde = 0;

// // ENTRÉE DES DONNÉES

// prixArticle = Number.parseFloat(prompt('Entrer le prix de l\'article en €',''));
// codeSolde = Number.parseFloat(prompt('Entrer le code solde(1 pour -20%, 2 pour -50% et 3 pour -70%','1'));

// //calcul du prix solder

// switch (codeSolde) {
//     case 1: prixSolde = prixArticle - 20/100 * prixArticle
//             break
//     case 2: prixSolde = prixArticle - 50/100 * prixArticle
//             break
//     case 3: prixSolde = prixArticle - 70/100 * prixArticle
//             break
//         default: prixSolde = prixArticle;
// }


// //AFFICHAGE DU RESULTAT

// alert('Le prix de l\'article solder est ' + prixSolde + '€.'); 

//DECLARATION DES VARIABLES 

// let nombreAnnee;
// let capitalInitial;
// let tauxInteret;
// let capialFinal;
// let interets;

// //entrer puis conversion des donnees

// capitalInitial = Number.parseFloat(prompt('Entrer le capital initial en € : ','0'));
// tauxInteret = Number.parseFloat(prompt('Entrer le taux d\'interet en % : ', '0'))
// nombreAnnee = Number.parseInt(prompt('Entrer le nombre d\'annees : ','0'))
// capialFinal = capitalInitial;
// //CALCUL DES INTERETS

// for(let i = 1; i <= nombreAnnee; i++){
//     capialFinal = capialFinal + tauxInteret/100 * capialFinal;
//     console.log(capialFinal)
// } interets = capialFinal - capitalInitial;
// interets = interets.toFixed(2); //affichage avec 2 decimales 

// // affichage du resultat 
// alert('Les interets acquis au bout de '+ nombreAnnee + ' annees sont de '+ interets + '€.');


//LES BOUCLES


// for (i = 0; i <= 10; i++){
//      resultat = 5 * i;
//      console.log("5 * " + i +" = " + resultat);
// }
// onslotchange.log("fin de la boucle");


//exo 1 


/////////////////////////////////////////::

//exo

var somme = 0;

        function Somme(n) {
            for (var i = 1; i <= n; i++) {
                somme += i
            }
            console.log("somme " + somme)
        }
        Somme(100)


var produit 
var x 