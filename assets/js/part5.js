// Partie 5 - Exercice 1
//Écrivez une fonction qui prend un entier et:
//Si le nombre est un multiple de 3, retournez « Hello ».
//Si le nombre est un multiple de 5, retournez « World ».
//Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
function checkNbr(n) {
	// on construit avec une condition if avec les différentes conditions
	// l'opérateur modulo nous permettra d'identifier les multiples
    if ((n % 3 == 0) && (n % 5 == 0)) {
        return "Hello World";
    }
    else if (n % 3 == 0) {
        return "Hello";
    }
    else if (n % 5 == 0) {
        return "World";
    }
}

// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

// résultat à obtenir
// Hello
// World
// Hello World

// --------------------------------------------------------------------
// Partie 5 - Exercice 2
//Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.
// Récap des RegEx
// \ antislash pour utiliser un métacaractère dans une recherche (ici le *)
// \D raccourci pour [^0-9] qui signifie chaîne qui ne comprend pas de chiffres
// * signifie 0 ou pls répétitions 
// /g situé en fin d'expression, permet d'effectuer une recherche globale, parcoure toute la chaîne et renvoie l'ensemble des correspondances trouvées
var str = "242Welcome23 45to344 254324WayToLearnX!";
var patt = /\D*/g;
var result = str.match(patt);

console.log(result.join(""));

// résultat à obtenir
// Welcome to WayToLearnX!

//--------------------------------------------------------------------
// Partie 5 - Exercice 3
//Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.
function tabX2(tab) {
	// Écrivez votre code ici
	// on va utiliser la méthode map qui crée un nouveau tableau avec les résultats de l'appel d'une fonction
	// multiplier chaque élément par 2 => on va mutltiplier i 
	return tab.map(i => i * 2);
}

// Afficher la sortie
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

// résultat à obtenir
// [ 2, 4, 6 ]
// [ 10, 20, 40 ]
// [ 200, 400, 600 ]

//--------------------------------------------------------------------
// Partie 5 - Exercice 4
// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
function isTriangle(a, b, c) {
	// Écrivez votre code ici
	// on doit définir si deux côtés sont supérieurs au troisième, donc ici 3 possibilités.
	if((a + b > c) && (a + c > b) && (b + c > a)){
	    return true;
	}
	else {
	    return false;
	}
}

// Afficher la sortie
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

// résultat à obtenir
// true
// true
// false

//--------------------------------------------------------------------
// Partie 5 - Exercice 5
//Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
function charToAscii(c) {
	// on va utiliser la méthode charCodeAt(), qui retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée
	return c.charCodeAt(0);
}

// Afficher la sortie
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));

// résultat à obtenir
// 65
// 97
// 43

//--------------------------------------------------------------------
// Partie 5 - Exercice 6
//Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.
function FracSup1(f) {
	// on va utiliser la fonction eval() qui permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
	// on va l'appliquer à notre argument f
	return eval(f) > 1;
}

// Afficher la sortie
console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));

// résultat à obtenir
// false
// true
// false

//--------------------------------------------------------------------
// Partie 5 - Exercice 7
// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
function sum(tab) {
	// on utilise la méthode reduce(), qui va nous permettre de créer une fonction avec un accumulateur
	// ici sum = accumulateur et elem = valeur actuelle à ajouter
	return tab.reduce((sum, elem) => (sum + elem));
}

// Afficher la sortie
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));

// résultat à obtenir
// 3
// 6
// 1

//--------------------------------------------------------------------
// Partie 5 - Exercice 8
// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
function countStr(tab) {
	//on va utiliser la méthode map car elle va nous permettre de remplacer les éléments existants du tableau par le résultat d'une fonction
	// item = un element du tableau 
	// avec la fonction callback, on instancie de remplacer l'item par la length de l'item
	return tab.map(item => item.length);
}

// Afficher la sortie
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));

// résultat à obtenir
// [ 1, 1, 1 ]
// [ 7, 2, 11 ]
// [ 3, 3, 6 ]
//--------------------------------------------------------------------
// Partie 5 - Exercice 9
//Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.
function nbrOfSyllables(str) {
	// on considère ici qu'une syllabe = 2 caractères 
	// on va donc utiliser length pour obtenir le nombre de caractère total du string
	// puis le diviser par le nombre de caractères comprenant une syllabe (ici 2)
	return str.length / 2;
	
}

// Afficher la sortie
console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));

//resultat à obtenir
// 4
// 5
// 10