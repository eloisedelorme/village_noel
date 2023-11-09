/* Création d'un formulaire pour demander son prénom à l'enfant
1- Récupèrer son prénom et le stocker dans une variable
2- Effacer le formulaire pour demander à l'enfant s'il veut nous suivre au village du Père Noël 
3- Faire apparaitre le sucre d'orge et lui demander de cliquer dessus
4- Faire disparaitre les montagnes et apparaitre le village du Père Noël*/

// ETAPE 1 : Récupèrer le nom de l'enfant et le stocker dans une variable.

let kidName =""

const form = document.querySelector("#form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = new FormData(form)
    kidName = data.get("search")
    console.log(kidName)
    
})

// ETAPE 2 : Effacer le formulaire pour demander à l'enfant s'il veut nous suivre au village du Père Noël 


