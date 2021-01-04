// Partie 1 - Exercice 1
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
//Cette fonction permet d'additionner les deux paramètres 
//en entrée et il faut que ces paramètres soient uniquement des nombres
function addition(x, y) {
    return x + y;
}

// Afficher la sortie
console.log(addition(1,2));
console.log(addition(-2,-4));

//Résultat à obtenir 
// 3
// -6

// --------------------------------------------------------------------
// Partie 1 - Exercice 2
//Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
function minuteToSecond(minutes) {
    //1 min = 60 sec donc on multiplie l'argument minutes par 60 pour obtenir le nombre de secondes total
    return minutes * 60;
  }
  
  // Afficher la sortie
  console.log(minuteToSecond(4));
  console.log(minuteToSecond(3));

//Résultat à obtenir 
// 240
// 180

// --------------------------------------------------------------------
// Partie 1 - Exercice 3
//Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
function increment(n) {
    // pour incrémenter, on utilise l'opérateur + avec ici 1 car on souhaite incrémenter une fois.
    return n + 1;
  }
  
  // Afficher la sortie
  console.log(increment(1));
  console.log(increment(4));

//Résultat à obtenir 
// 2
// 5

// --------------------------------------------------------------------
// Partie 1 - Exercice 4
//Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
function getSurface(base, hauteur) {
    // d'après l'information donnée, on utilisera les paramètres présents dans la fonction pour ensuite établir le calcul
    return (base * hauteur) / 2;
  }
  
  // Afficher la sortie
  console.log(getSurface(8, 2));
  console.log(getSurface(7, 3));

//Résultat à obtenir
// 8
// 10.5

// --------------------------------------------------------------------
// Partie 1 - Exercice 5
//Écrivez un programme JavaScript pour inverser une chaîne de caractères.
function strReverse(str) {
    // on utilise pls méthodes ici.
    //split () pour séparer le string en array
    //reverse() qui inverse l'ordre des éléments d'un array (ne fonctionne pas directement sur un string)
    //join() pour à nouveau créer un string
    return str.split('').reverse().join(''); 
  }
  
  // Afficher la sortie
  console.log(strReverse("WayToLearnX"));
  console.log(strReverse("Hello"));

//Résultat à obtenir
// XnraeLoTyaW
// olleH

// --------------------------------------------------------------------
// Partie 1 - Exercice 6
//Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
function getMax(a, b, c) {
    //on utilise la fonction Math.max() qui nous indique le plus grand nombre par rapport à zéro
    return Math.max(a, b, c);
}

// Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));

//Résultat à obtenir
// 9
// 10

//--------------------------------------------------------------------
// Partie 1 - Exercice 7
//Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier élément d’un tableau commence toujours par l’index 0.
function getFirst(tab) {
    // on va utilise le format tab[i] qui nous permet d'accéder à un élément du tableau en indiquant son index.
    // sachant que l'index d'un array commence à zéro, l'index sera 0.
    return tab[0];
}

// Afficher la sortie
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));

//Résultat à obtenir
// 1
// 50

//--------------------------------------------------------------------
// Partie 1 - Exercice 8
//Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
// on utilise document.location.href
var urlcourante = document.location.href;
// https://waytolearnx.com/2019/07/comment-recuperer-lurl-de-la-page-courante-avec-javascript.html

//Résultat à obtenir
// console.log(document.URL);

//--------------------------------------------------------------------
// Partie 1 - Exercice 9
//Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
function resteDiv(a, b) {
    // Écrivez votre code ici
    // on utilise l'opérateur de modulo %, avec return pour obtenir le résultat de l'opération
    return a % b;
}
// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));

//Résultat à obtenir
// 1
// 2
// 0

