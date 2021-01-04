// Partie 2 - Exercice 1
//Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
function carre(b) {
	return $a*$a;
}

//code corrigé 
function carre(b) {
    // on doit appeler l'argument b et non a
    // pas besoin de mettre des $
	return b * b;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4));

// Résultat à obtenir 
// 4
// 16

// --------------------------------------------------------------------
// Partie 2 - Exercice 2
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
function check(a, b) {
	// on va utiliser une condition if 
	// premier lieu si la condition est true
	if(a + b < 100){
	    return true;
	} 
	// sinon, avec else, si la condition n'est pas respectée
	else {
	    return false;
	}
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
	// on transforme les heures en minutes, pour cela on crée la variable minutes
	let minutes = heure * 60;
	// on transforme les minutes en secondes, en créant la variable secondes et on retourne ensuite le resultat
	let secondes = minutes * 60;
	return secondes;
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
	// on utilise la condition if
	// si le nombre est inférieur ou égal à 0
	if(n <= 0) {
	    //on renvoie true
	    return true;
	}
	//sinon, on revoie false
	else {
	    return false;
	}
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
	// on utilise la condition if 
	// si nbr1 est égal à nbr2, alors on retourne true. On met 3 = car on veut que le type soit également le même (string, number)
	if(nbr1 === nbr2){
	    return true;
	}
	//sinon, on retourne false
	else{
	    return false;
	}
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
	// pour vérifier si un entier est divisible par 5, on utilise l'opérateur modulo
	// on utilise la condition if 
	// si l'entier est divisible par 5, on retourne true
	if (n % 5 === 0) {
	    return true;
	}
	// sinon, on retourne false
	else {
	    return false;
	}
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
	// on doit convertir les heures en secondes donc *3600 et les minutes en secondes donc *60
	return (heure * 3600) + (minute * 60);
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
	// si on ne peut pas utiliser la méthode reverse, il va falloir jouer avec les index des éléments du tableau
	// on peut faire une boucle pour passer sur chaque élément, puis modifier leur indice 
	let tabReverse = [];
    // on limite i au nombre d'élément du tableau en utilisant length - 1
    // on change l'indice avec la décrémentation 
    //on insère les éléments dans le nouveau tableau avec push()
    for (let i = tab.length -1; i > -1; i--) {
        tabReverse.push(tab[i]);
    }
    // on retourne ensuite le nouveau tableau
    return tabReverse;
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
	// pour obtenir le dernier élément du tableau, on va utiliser les indices.
	// pour obtenir le dernier élément d'un tableau, on utilise length - 1 soit la longueur du tableau
	return tab[tab.length - 1];
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

// Résultat à obtenir
// 4
// Emily