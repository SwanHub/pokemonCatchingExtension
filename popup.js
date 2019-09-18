const name = document.querySelector('#pokemon_name')
const image = document.querySelector('.pokemon_image')
const catchButton = document.querySelector('.catch')
const level = document.querySelector('span')
const myPokemon = document.querySelector('#pokeball')
const myPokemonButton = document.querySelector('#my_pokemon_button')

chrome.runtime.sendMessage({text: "Poke, please"}, showPokemon)
function showPokemon(response){
    name.innerText = `A wild ${response.name} appeared!`
    image.src = response.imageUrl
    level.innerText = `level ${response.level}`
    catchPokemon(response)
}

function catchPokemon(response){
    catchButton.addEventListener('click', () => {
        localStorage.setItem('pokemon', response.name)
        localStorage.setItem('pokemon_image', response.imageUrl)
        localStorage.setItem('level', response.level)
        name.innerText = `You caught ${response.name}!`
    })
}

myPokemonButton.addEventListener('click', displayMyPoke)
function displayMyPoke(){
    if (!!localStorage.pokemon){
        myPokemon.classList.toggle('show')
        myPokemon.querySelector('h3').innerText = `${localStorage.pokemon}, lvl ${localStorage.level}`
        myPokemon.querySelector('img').src = localStorage.pokemon_image
    }
}
