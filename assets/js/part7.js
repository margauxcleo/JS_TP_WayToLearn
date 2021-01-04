// Partie 7 - Exercice 1
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
function nbrPaire(n) {
	//on crée un tab dans lequel on ajoutera les nombres au fur et à mesure des itérations
	let tab = [];
	//on utilise la boucle for, pour commencer à 1 et s'arrêter à la valeur de n;
	for(i = 1; i <= n; i++) {
	    // on filtre les chiffres paires grâce au modulo de 2
	    if(i % 2 === 0) {
	        // on utulise push pour ajouter chaque itération à tab
    	    tab.push(i);
	    }
	}
	return tab;
}

// Afficher la sortie
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));

// résultat à obtenir
// [ 2, 4, 6 ]
// [ 2, 4 ]
// [ 2 ]

// --------------------------------------------------------------------

// Partie 7 - Exercice 2
//Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
// non réussi
// avec l'objet Set, chaque valeur doit être unique.
// la propriété size permet de connaître le nombre de valeurs contenues dans l'objet Set.
// ainsi, si on note return .size === 1, on indique qu'on veut true si il y a un bien 1 seule valeur dans le string
function isSame(str) {
    return new Set([...str]).size === 1;
}

// Afficher la sortie
console.log(isSame("bbbbbb"));
console.log(isSame("abababab"));
console.log(isSame("111111"));

// résultat à obtenir
// true
// false
// true

// --------------------------------------------------------------------

// Partie 7 - Exercice 3
//Vous avez un tableau de nombre, transformez ce tableau en miroir.
function miroir(tab) {
    // on return un tableau composé de:
    //1) avec le ...tab, on copie l'intégralité de tab
    //2) le ...tab à nouveau mais que l'on inverse avec reverse avec splice à partir de l'index 0
    // on précise length - 1 pour obtenir cet effet miroir
    return [...tab, ...tab.splice(0, tab.length - 1).reverse()]
}

// Afficher la sortie
console.log(miroir([1, 2, 3]));
console.log(miroir([9, 8, 7]));
console.log(miroir([10, 20]));

// résultat à obtenir
// [ 1, 2, 3, 2, 1 ]
// [ 9, 8, 7, 8, 9 ]
// [ 10, 20, 10 ]

// --------------------------------------------------------------------

// Partie 7 - Exercice 4
//Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
function somme(n) {
	// Écrivez votre code ici
	//on créé un tab dans lequel on stockera les itérations pour atteindre n
	let tab = [];
	// on met en place une boucle, qui va itérer tant que i est inférieur ou égal à n
	for(i = 1; i <= n; i++) {
	    // on ajoute ensuite chaque itération à tab
	    tab.push(i);
	}
	// on utilise reduce, qui va nous permettre d'appliquer une fonction accumulateur et qui traite chaque valeur d'une liste afin de la réduire à une seule valeur
	let total = tab.reduce((sum, elem) => (sum + elem));
	return total;
}

// Afficher la sortie
console.log(somme(3));
console.log(somme(2));

// résultat à obtenir
// 6
// 3
// 55

// --------------------------------------------------------------------

// Partie 7 - Exercice 5
//Créez une fonction pour extraire le nom du catégorie de son URL.
function getCategory(url) {
	// Écrivez votre code ici
	// on va utiliser la propriété pathname de l'objet url 
	let pathname = new URL(url).pathname;
	return pathname;
}

// Afficher la sortie
console.log(getCategory("https://waytolearnx.com/html/"));
console.log(getCategory("https://waytolearnx.com/css/"));
console.log(getCategory("https://waytolearnx.com/javascript/"));

// résultat obtenu
// /html/
// /css/
// /javascript/

// résultat à obtenir
// html
// css
// javascript

// --------------------------------------------------------------------

// Partie 7 - Exercice 6
//Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
function isObjEmpty(obj) {
	// Écrivez votre code ici
	//on utilise l'objet Object pour utiliser sa propriété keys
	//si il n'y a pas de longueur de clé cad si il n'y a pas de clé (keys) alors on retourne true
	return !Object.keys(obj).length;
}

// Afficher la sortie
console.log(isObjEmpty({ a: 1, b: 2 }));
console.log(isObjEmpty({ a: 1 }));
console.log(isObjEmpty({}));

// résultat à obtenir
// false
// false
// true

// --------------------------------------------------------------------

// Partie 7 - Exercice 7
// Écrivez une fonction qui récupère les n derniers éléments d’un tableau.
function lastNitem(t, n) {
	if (n <= t.length) {
	   // on utilise slice, qui va copier une portion de l'array
	   // on indique qu'il faut couper le tableau à partir de la longueur du tableau moins la valeur de n
	   // et on s'atrrête à la longueur de t 
	   let tab = t.slice(t.length - n, t.length);
	   return tab;
	}
	// si on ne peut pas répondre à la condition ci-dessus, on retourne invalide
	else {
	    return "invalide";
	}
}

// Afficher la sortie
console.log(lastNitem([8, 1, 5, 2, 4, 9], 3));
console.log(lastNitem([1, 2, 3], 1));
console.log(lastNitem([1, 2, 3, 4], 10));
console.log(lastNitem([1, 2, 3, 4], 0));

// résultat à obtenir
// [ 2, 4, 9 ]
// [ 3 ]
// invalide
// []

// --------------------------------------------------------------------

// Partie 7 - Exercice 8
//Écrivez une fonction qui supprime toutes les caractères spéciaux dans une chaîne. 
// = global, match all instances of the pattern in a string, not just one
// i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
function removeSpecialChar(str) {
	// Écrivez votre code ici
	return str.replace(/[^a-z]/gi, '');
}

// Afficher la sortie
console.log(removeSpecialChar("@W*-a?;+y!°T-8o_&L?e!=r%$n<X"));
console.log(removeSpecialChar(",A@[L]?e*$!x"));
console.log(removeSpecialChar("$*;H[!e&}l]l@{^.o"));

// résultat à obtenir
// WayToLernX
// ALex
// Hello

// --------------------------------------------------------------------

// Partie 7 - Exercice 9
//Écrivez une fonction qui renvoie TRUE si un nombre est un palindrome.
function checkPalindrome(n) {
	// Écrivez votre code ici
	// on utulise l'objet String pour pouvoir utiliser ensuite ses propriétés
	// d'abord on sépare les chiffres, ensuite on inverse leur place et on utilise join
	// on vérifie ensuite si on obtient le même résultat que n 
	return String(n).split('').reverse().join('') == String(n);
}

// Afficher la sortie
console.log(checkPalindrome(212));
console.log(checkPalindrome(123));
console.log(checkPalindrome(75257));

// résultat à obtenir
// true
// false
// true

// --------------------------------------------------------------------