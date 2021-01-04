// Partie 6 - Exercice 1
//Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
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

// Partie 6 - Exercice 2
//Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
function isSame(str) {
    return new Set([...str]).size === 1;
}
//L'objet Set (Ensemble en français) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.
//L'accesseur size est une propriété qui renvoie le nombre d'éléments contenus dans un objet Set. Un objet Set correspondant à un ensemble, chaque élément qu'il contient y est unique.

// résultat à obtenir
//true
// false
// true

// --------------------------------------------------------------------

// Partie 6 - Exercice 3
//Vous avez un tableau de nombre, transformez ce tableau en miroir.
function miroir(tab) {
    return [...tab, ...tab.splice(0, tab.length - 1).reverse()]
  }
  // ES6 ... permet de concaténer deux tableaux.

// résultat à obtenir
// [ 1, 2, 3, 2, 1 ]
// [ 9, 8, 7, 8, 9 ]
// [ 10, 20, 10 ]

// --------------------------------------------------------------------

// Partie 6 - Exercice 4
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

// Partie 6 - Exercice 5
// Créez une fonction pour extraire le nom du catégorie de son URL.
function getCategory(url) {
    return url.split("/")[3]
  }

// résultat à obtenir
// html
// css
// javascript

// --------------------------------------------------------------------

// Partie 6 - Exercice 6
// Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
function isObjEmpty(obj) {
    return !Object.keys(obj).length
}
// avec ! on indique que si la length == 0, on retournera true
//La méthode Object.keys() renvoie un tableau contenant les noms des propriétés propres à un objet (qui ne sont pas héritées via la chaîne de prototypes) et qui sont énumérables.

// résultat à obtenir
//false
//false
//true 

// --------------------------------------------------------------------

// Partie 6 - Exercice 7
//Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné
function mulByLen(tab) {
  return tab.map(x => x * tab.length);
}

// résultat à obtenir
// [ 3, 3, 3 ]
// [ 3, 6, 9 ]
// [ 0, 0, 0, 0, 10 ]

// --------------------------------------------------------------------

// Partie 6 - Exercice 8
//Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
function deleteNull(tab) {
  return tab.filter(i => i !== null)
}

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
  return year %400 === 0 || year %4 === 0 && year %100 !== 0;
}

// résultat à obtenir
// true
// false
// true

// --------------------------------------------------------------------