// Partie 6 - Exercice 1
//Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
function nbrPaire(n) {
	// il faut faire une boucle qui partira de 1 et s'arretera à la valeur de n
	// dans cette boucle, il faudra indiquer le modulo pour les chiffres pairs soit % 2
	// et insérer ce résultat dans un nouvel array 
	let tab = [];
	for(let i = 1; i <= n; i++) {
	    // si le chiffre est pair, faire un push dans le tableau
	    if (i % 2 === 0) {
	        tab.push(i);
	    }
	}
	// on retourne le tableau obtenu
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

// Partie 6 - Exercice 2
//Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
function isSame(str) {
	// pour vérifier si chaque caractère est identique, il faut boucler dans la string
	// puis il faudra vérifier que chaque item est égal à son prochain avec les 3 =
	for(var i = 0; i < str.length; i++) {
	    // on verifie si chaque item est strictement égal à l'item qui suit 
	    if(str[i] === str[i + 1]) {
	        return true;
	    }
	}
	return false;
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

// Partie 6 - Exercice 3
//Vous avez un tableau de nombre, transformez ce tableau en miroir.
// !!! Résultat non trouvé
function miroir(tab) {
	// on va utiliser la méthode splice() pour ajouter des élements dans l'array
	// pour préciser quel élément est copié 
	// avec splice (à partir de l'indice 0, prendre la longueur totale du tableau - 1)
	//puis avec reverse, inverser les données récoltées
	let tab2 = tab.splice(0, tab.length - 1).reverse();
	// on concatene les deux tableaux
	let tabComplete = tab.concat(tab2);
	// on retourne le résultat
	return tabComplete;
}

// résultat à obtenir
// [ 1, 2, 3, 2, 1 ]
// [ 9, 8, 7, 8, 9 ]
// [ 10, 20, 10 ]

// --------------------------------------------------------------------

// Partie 6 - Exercice 4
//Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
function somme(n) {
	// Écrivez votre code ici
	// on va utiliser reduce() pour faire une fonction callback qui va accumuler les chiffres
	// on fait également une boucle qui va partir de 0 et s'arrêter à n 
	// on va stocker les chiffres dans un array 
	let tab = [];
	let i = 0;
	// tant que i est inférieur à n, on itère et on ajoute au fur et à mesure dans tab le chiffre obtenu
	while (i < n) {
	    i++;
	    tab.push(i);
	}
	// ensuite on utilise reduce() pour faire la somme des chiffres du tableau
	let somme = tab.reduce((sum, elem) => (sum + elem));
	return somme;
}

// Afficher la sortie
console.log(somme(3));
console.log(somme(2));
console.log(somme(10));

// résultat à obtenir
// 6
// 3
// 55

// --------------------------------------------------------------------

// Partie 6 - Exercice 5
// Créez une fonction pour extraire le nom du catégorie de son URL.
// Je n'ai pas réussi à obtenir le pathname sans les slash
function getCategory(url) {
	// Écrivez votre code ici
	// j'utilise l'objet URL pour avoir le pathname
	let pathname = new URL(url).pathname;
	return pathname;
}

//résultat obtenu
// /html/
// /css/
// /javascript/

// résultat à obtenir
// html
// css
// javascript

// --------------------------------------------------------------------

// Partie 6 - Exercice 6
// Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
function isObjEmpty(obj) {
	// Écrivez votre code ici
	// on va utiliser length == 0 sur l'objet pour savoir si il est vide ou non
	// on utilise la méthode Object.values() sur obj pour appeler les valeurs de l'objet 
	// puis length pour connaitre la longueur de ces valeurs 
	console.log(Object.values(obj).length);
	return Object.values(obj).length == 0;
}

// Afficher la sortie
console.log(isObjEmpty({ a: 1, b: 2 }));
console.log(isObjEmpty({ a: 1 }));
console.log(isObjEmpty({}));

// résultat à obtenir
//false
//false
//true 

// --------------------------------------------------------------------

// Partie 6 - Exercice 7
//Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné
function mulByLen(tab) {
	//il faut récupérer la length du tab et faire une boucle pour que chaque valeur soit multiplié
	//on utilise map car cela permet de créer un autre tab, en copie à l'autre 
	let tab2 = tab.map(x => x * tab.length);
	return tab2;
}

// Afficher la sortie
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

// résultat à obtenir
// [ 3, 3, 3 ]
// [ 3, 6, 9 ]
// [ 0, 0, 0, 0, 10 ]

// --------------------------------------------------------------------

// Partie 6 - Exercice 8
//Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
function deleteNull(tab) {
	// on va utiliser filter pour supprimer la valeur null 
	// on indique que l'on souhaite filtrer les éléments différents de null 
	tab = tab.filter(item => item !== null);
	return tab;
}

// Afficher la sortie
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

// résultat à obtenir
// [ 'Alex', 'Emily', 'Bob' ]
// [ 0, 1, 2, 3 ]
// []

// --------------------------------------------------------------------

// Partie 6 - Exercice 9
// Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

// Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

// Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

function bissextile(year) {
	// on utilise le modulo et les opérateurs de comparaison
	if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	    return true;
	}
	else {
	    return false;
	}
}

// Afficher la sortie
console.log(bissextile(2020));
console.log(bissextile(1400));
console.log(bissextile(2000));

// résultat à obtenir
// true
// false
// true

// --------------------------------------------------------------------