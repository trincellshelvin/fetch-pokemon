let fetchButton = document.getElementById("fetch-button");
let pokemonInput = document.getElementById("pokemon-code");
let outputDiv = document.getElementById("pokemon-output");

async function handleFetch(){
    console.log("Welcome Pokemon Trainers!");
    let pokemonCode = pokemonInput.value;
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCode}`);
    console.log(result);
    
    let pokemonName = forms.name;
    let pokemonIndex = game_indices.game_index;
    let pokemonAbility = abilities.ability;
    let imgURL =

}