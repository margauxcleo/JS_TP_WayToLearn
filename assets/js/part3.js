// Partie 3 - Exercice 1
//Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
function checkEq(a, b) {
    // pour vérifer à la fois la valeur et le type de deux éléments, on met 3 =
    if(a === b){
        return true;
    }
    // sinon, si le type et/ou la valeur sont différents, on retourne false
    else {
        return false;
    }
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

// résultat attendu
function checkEq(a, b) {
    return a === b;
}

// --------------------------------------------------------------------
// Partie 3 - Exercice 2
//Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
function isEmpty(str) {
	// Écrivez votre code ici
	// on va utiliser la condition if
	// si le string est vide, alors on renvoie true
	if(str == ""){
	    return true;
	}
	// sinon, on renvoie false
	else {
	    return false;
	}
	
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

// résultat attendu
function isEmpty(str) {
	return str.length == 0;
}

//--------------------------------------------------------------------
// Partie 3 - Exercice 3
//Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
function concatStr(str1, str2) {
	// Écrivez votre code ici
	return str1 + '|' + str2;
}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));
//--------------------------------------------------------------------
// Partie 3 - Exercice 4
//Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow).
//on va utiliser `` pour mettre en place une string
// on utilise ensuite ${nomVariable} pour appeler la variable dans cette string
const msg = name => `Hello ${name}, Welcome to WayToLearnX!`;

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));
//--------------------------------------------------------------------
// Partie 3 - Exercice 5
//Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
function size(str) {
    // je n'ai pas compris l'exo demandé, pour moi, il faut simplement utiliser la méthode length() 
    return str.length;
}

// Afficher la sortie
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));
//--------------------------------------------------------------------
// Partie 3 - Exercice 6
//Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
function compareSize(str1, str2) {
	// Écrivez votre code ici
	// on va utiliser la condition if
	// pour connaitre la taille d'un string, on utilise la méthode length.
	// on verifie l'égalité des deux arguments 
	if(str1.length == str2.length){
	    return true;
	}
	// si on ne respecte pas l'égalité, on renvoie false;
	else {
	    return false;
	}
}

// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));
//--------------------------------------------------------------------
// Partie 3 - Exercice 7
//Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
function getPerimeter(height, width) {
	// Écrivez votre code ici
	// pour calculer le périmètre, il faut additionner la hauteur et la largeur totales
	return (height + width) * 2;
}

// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));
//--------------------------------------------------------------------
// Partie 3 - Exercice 8
//Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous ses animaux. Il y a trois espèces:
function nbrsPattes(poulets, vaches, chevaux) {
	// On multiplie le nbre de pattes par l'argument correspondant
	return (poulets * 2) + (vaches * 4) + (chevaux * 4);
}

// Afficher la sortie
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));
//--------------------------------------------------------------------
// Partie 3 - Exercice 9
//Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.
function check(n) {
	// on va utiliser la condition if et le modulo pour définir si le nombre est pair ou non.
	if(n % 2 == 0) {
	    return "pair";
	}
	// si il est impair
	else {
	    return "impair";
	}
}

// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));

