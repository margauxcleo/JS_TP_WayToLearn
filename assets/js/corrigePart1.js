// Partie 1 - Exercice 1
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
function addition(x, y) {
    // permet de vérifier si on a bien des nombres
    if (typeof x !== "number" || typeof y !== "number") {
        return "Erreur : veuillez entrer deux nombres!";
    }

    return x + y;
}

//Résultat à obtenir 
// 3
// -6

// --------------------------------------------------------------------
// Partie 1 - Exercice 2
//Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
function minuteToSecond(minutes) {
    return  minutes * 60;
}

//Résultat à obtenir 
// 240
// 180

// --------------------------------------------------------------------
// Partie 1 - Exercice 3
//Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
function increment(n) {
    return ++n;
}

//Résultat à obtenir 
// 2
// 5

// --------------------------------------------------------------------
// Partie 1 - Exercice 4
//Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
function getSurface(base, hauteur) {
    return base * hauteur /2
}

//Résultat à obtenir
// 8
// 10.5

// --------------------------------------------------------------------
// Partie 1 - Exercice 5
//Écrivez un programme JavaScript pour inverser une chaîne de caractères.
function strReverse(str) {
    return str.split("").reverse().join("");
}

//Résultat à obtenir
// XnraeLoTyaW
// olleH

// --------------------------------------------------------------------
// Partie 1 - Exercice 6
//Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés
function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
}

//Résultat à obtenir
// 1
// 50

//--------------------------------------------------------------------
// Partie 1 - Exercice 7
//Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier élément d’un tableau commence toujours par l’index 0.
function getFirst(tab) {
    return tab[0];
    
}

//Résultat à obtenir
// console.log(document.URL);

//--------------------------------------------------------------------
// Partie 1 - Exercice 8
//Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
console.log(document.URL);
//--------------------------------------------------------------------
// Partie 1 - Exercice 9
//Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
function resteDiv(a, b) {
    return a % b;   
}

//Résultat à obtenir
// 1
// 2
// 0

