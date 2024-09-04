let fetchButton = document.getElementById("fetch-button");
let pokemonInput = document.getElementById("pokemon-code");
let outputDiv = document.getElementById("pokemon-output");

async function handleFetch() {
    console.log("Welcome Pokemon Trainers!");
    let pokemonCode = pokemonInput.value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCode}`);
    let data = await response.json();
    console.log(data);
    let pokemonName = data.name;
    let pokemonIndex = data.game_indices[0].game_index;
    let pokemonAbility = data.abilities[0].ability.name;
    let imgURL = data.sprites.front_default;
    console.log(imgURL);
    console.log(pokemonName);
    outputDiv.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${imgURL}">
        <div class="card-body">
            <h2>${pokemonName}</h2>
            <p>Index: ${pokemonIndex}</p>
            <p>Ability: ${pokemonAbility}</p>
        </div>
    </div>`;
}

fetchButton.addEventListener("click", handleFetch);15