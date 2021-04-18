let currentPokemon;


async function loadPokemon() {
    let url = 'http://pokeapi.co/api/v2/pokemon/teddiursa'; //only http works, https dont work
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded pokemon', currentPokemon);
    renderPokemonInfo();
}


function renderPokemonInfo() {
document.getElementById('pokemonname').innerHTML = currentPokemon['name']; //name is defined at api
document.getElementById('pokemonImg').src = currentPokemon['sprites'] ['front_default']; //load img from api
document.getElementById('pokemonWeight').innerHTML = currentPokemon['weight'];
document.getElementById('pokemonHeight').innerHTML = currentPokemon['height'];
document.getElementById('pokemonOrder').innerHTML = currentPokemon['order'];
document.getElementById('pokemonAbility1').innerHTML = currentPokemon['abilities'] [0]['ability'] ['name'];
document.getElementById('pokemonAbility2').innerHTML = currentPokemon['abilities'] [1]['ability'] ['name'];
document.getElementById('pokemonAbility3').innerHTML = currentPokemon['abilities'] [2]['ability'] ['name'];
}