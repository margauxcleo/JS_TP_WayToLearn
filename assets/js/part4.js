// Partie 4 - Exercice 1
//Créez une fonction pour concaténer deux tableaux entiers.
function concatener(tab1, tab2) {
	//on définit une variable qui contiendra le tableau concaténer
	// pour concatener, on va utiliser la methode concat()
	let tab3 = tab1.concat(tab2);
	return tab3;
}

// Afficher la sortie
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));
// --------------------------------------------------------------------
// Partie 4 - Exercice 2
//Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
function find(tab, val) {
	// on va utiliser la méthode indexOf() pour connaître l'index de l'élément
	// on utilise la condition if pour établir la logique
	// si on trouve l'index, on l'indique
	// on précise supérieur ou égal à 0 car l'index 0 existe
	if(tab.indexOf(val) >= 0){
	    return tab.indexOf(val)
	}
	// si non, on indique -1
	else {
	    return -1;
	}
}

// Afficher la sortie
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));
//--------------------------------------------------------------------
// Partie 4 - Exercice 3
//Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
function nbrExist(tab, val) {
	// pour vérifier si un élément existe au sein d'un tableau, on va utiliser une boucle for, pour "passer" dans chaque élémént
	for (var i = 0; i < tab.length; i++){
	    // si l'élément existe dans le tableau
	    if (tab[i] === val){
	        return true;
        }
    // pour le cas où l'array soit vide
    return false;
	}
}

//--------------------------------------------------------------------
// Partie 4 - Exercice 4
//Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.
function checkS(str) {
	// Écrivez votre code ici
	// pour connaître le dernier élément d'une chaîne de caractère, on va utiliser length - 1 
	// pour vérifier si ce dernier élément est un "s", on va utiliser l'opérateur d'égalité ===
	if(str[str.length - 1] === "s") {
	    return true;
	}
	else {
	    return false;
	}
}

// Afficher la sortie
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));
//--------------------------------------------------------------------
// Partie 4 - Exercice 5
//Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
function containSpaces(str) {
	// on utilise le même principe que pour l'exercice précédent pour vérifier l'égalité
	// on utilise la méthode includes pour savoir si l'élément existe
    if (str.includes(" ")) {
        return true;
    }
    return false;
}
//--------------------------------------------------------------------
// Partie 4 - Exercice 6
//Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet:
function formatPrs(personne) {
	// pour appeler l'attribut d'un objet, on utilise le format objet.attribut
	// on va créer un string avec `` dans lequel on appelera ces valeurs grâce à ${valeur}
	return `${personne.nom} a ${personne.age}. Il habite à ${personne.adresse}`;
}

// Afficher la sortie
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));
//--------------------------------------------------------------------
// Partie 4 - Exercice 7
//Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
function myFeeling(feeling) {
	// comme pour l'exercice précédent, on va créer un string avec `` et on appelera les variavbles avec ${var}
	// on va utiliser un switch, ce qui nous permettra d'établir une valeur par défaut
	switch (feeling) {
	    case "heureux":
	        return `Aujourd'hui, je me sens ${feeling}.`;
        break;
        case "triste":
            return `Aujourd'hui, je me sens ${feeling}.`;
        break;
        default:
            return `Aujourd’hui, je me sens neutre.`;
	}
}

// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());
//--------------------------------------------------------------------
// Partie 4 - Exercice 8
//Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
function nbrArgs() {
	// on utilise l'objet arguments qui semblable à un tableau, correspondant aux arguments passés à une fonction.
	// ainsi, pour connaître le nombre d'arguments passés, on utilise la méthode length().
	return arguments.length;
}

// Afficher la sortie
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));

//--------------------------------------------------------------------
// Partie 4 - Exercice 9
//Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
function check(str) {
	// Écrivez votre code ici
	// il faut tout d'abord savoir comment aller chercher le dernier élément du string. Pour cela, on va utiliser length - 1, cad la longueur total du string - 1 pour avoir le dernier élément.
	// on vérifie ensuite strictement l'égalité avec les 3 = 
	if(str[str.length - 1] === "s"){
	    return true;
	}
	else {
	    return false;
	}
}

// Afficher la sortie
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));
