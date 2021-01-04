// Partie 7 - Exercice 1
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
function nbrPaire(n) {
    let paire = [];
    
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        paire.push(i);
      }
    }
    
    return paire;
}
// résultat à obtenir
// [ 2, 4, 6 ]
// [ 2, 4 ]
// [ 2 ]
// --------------------------------------------------------------------

// Partie 7 - Exercice 2
//Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
//Les objets Set sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet Set dans leur ordre d'insertion. Une valeur donnée ne peut apparaître qu'une seule fois par Set.
//Chaque valeur d'un Set doit être unique, il faut donc tester l'égalité des valeurs contenues.
//Set.prototype.size
//Renvoie le nombre de valeurs contenues dans l'objet Set.

// résultat à obtenir
// true
// false
// true

// --------------------------------------------------------------------

// Partie 7 - Exercice 3
//Vous avez un tableau de nombre, transformez ce tableau en miroir.
//La syntaxe de décomposition permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).
function miroir(tab) {
    return [...tab, ...tab.splice(0, tab.length - 1).reverse()]
}
// résultat à obtenir
// [ 1, 2, 3, 2, 1 ]
// [ 9, 8, 7, 8, 9 ]
// [ 10, 20, 10 ]

// --------------------------------------------------------------------

// Partie 7 - Exercice 4
//Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
function somme(n) {
    if (n == 0) {
      return n;
    }
    return n + somme(n - 1);
}

// résultat à obtenir
// 6
// 3
// 55

// --------------------------------------------------------------------

// Partie 7 - Exercice 5
//Créez une fonction pour extraire le nom du catégorie de son URL.
//La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
function getCategory(url) {
    // après 3 "/"" on a bien le pathname
    return url.split("/")[3]
}

// résultat à obtenir
// html
// css
// javascript

// --------------------------------------------------------------------

// Partie 7 - Exercice 6
//Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
function isObjEmpty(obj) {
    return !Object.keys(obj).length
  }

// résultat à obtenir
// false
// false
// true

// --------------------------------------------------------------------

// Partie 7 - Exercice 7
// Écrivez une fonction qui récupère les n derniers éléments d’un tableau.
// écrit en raccourci
function lastNitem(t, n) {
    return n <= t.length ? t.slice(t.length-n, t.length) : "invalide";
}

// résultat à obtenir
// [ 2, 4, 9 ]
// [ 3 ]
// invalide
// []

// --------------------------------------------------------------------

// Partie 7 - Exercice 8
function removeSpecialChar(str) {
	// Écrivez votre code ici
	return str.replace(/[^a-z]/gi, '');
}

// résultat à obtenir
// WayToLernX
// ALex
// Hello

// --------------------------------------------------------------------

// Partie 7 - Exercice 9
//Écrivez une fonction qui renvoie TRUE si un nombre est un palindrome.
function checkPalindrome(n) {
    return String(n).split('').reverse().join('') == String(n);
  }
  
// résultat à obtenir
// true
// false
// true
// --------------------------------------------------------------------