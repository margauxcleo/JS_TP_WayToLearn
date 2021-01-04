// Partie 2 - Exercice 1
//Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
function carre(b) {
	return $a*$a;
}

//code corrigé 
function carre(b) {
    return b*b;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4)

// Résultat à obtenir 
// 4
// 16

// --------------------------------------------------------------------
// Partie 2 - Exercice 2
//Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE
// pas d'accord avec le corrigé
function check(a, b) {
  
    return a + b < 100;
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));

// Résultat à obtenir 
// true
// false

//--------------------------------------------------------------------
// Partie 2 - Exercice 3
//Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
function heureSeconde(heure) {
    return heure * 3600;
}

// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));
// Résultat à obtenir 
// 3600
// 18000

//--------------------------------------------------------------------
// Partie 2 - Exercice 4
//Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function checkNbr(n) {
    return n <= 0;
}
// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

// Résultat à obtenir 
// false
// true
// true

//--------------------------------------------------------------------
// Partie 2 - Exercice 5
//Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
function isEqual(nbr1, nbr2) {
    return nbr1 === nbr2
}

// Afficher la sortie
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));

// Résultat à obtenir 
// false
// false
// true

//--------------------------------------------------------------------
// Partie 2 - Exercice 6
//Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
function isDivisible(n) {
    return n % 5 === 0;
}

// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

// Résultat à obtenir 
// false
// false
// true

//--------------------------------------------------------------------
// Partie 2 - Exercice 7
//Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
function hmTos(heure, minute) {
    return (heure*3600) + (minute*60);
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

// Résultat à obtenir 
// 4200
// 3540
// 0

//--------------------------------------------------------------------
// Partie 2 - Exercice 8
//Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
function reverseTab(tab) {
    let res = [];
    for (let i = tab.length -1; i > -1; i--) {
      res.push(tab[i]);
    }
    
    return res;
}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Résultat à obtenir
// [ 3, 2, 1 ]
// [ 3, 2, 2, 1, 1 ]


//--------------------------------------------------------------------
// Partie 2 - Exercice 9
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
function getLastElem(tab) {
    return tab[tab.length - 1]
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

// Résultat à obtenir
// 4
// Emily
