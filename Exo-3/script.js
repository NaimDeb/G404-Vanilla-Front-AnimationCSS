// Définir la variable permettant de récupérer l'input de type color


/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/


let root = document.documentElement

let spacing = document.querySelector("input[name='spacing']")
let blurRange = document.querySelector("input[name='blur']")
let color = document.querySelector("input[name='color']")

console.log(spacing)

spacing.addEventListener("change", handleSpacing);
blurRange.addEventListener("change", handleBlur);
color.addEventListener("change", handleColor);

function handleSpacing(event){
    console.log(event.target.value)
    root.style.setProperty('--spacing', event.target.value + "vh")
}


function handleBlur(event){
    console.log(event.target.value)
    root.style.setProperty('--blur', event.target.value + "vh")
}


function handleColor(event){
    console.log(event.target.value)
    root.style.setProperty('--color', event.target.value)
}