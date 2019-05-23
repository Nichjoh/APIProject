
document.getElementById("submitPokemon").onclick = function () {
    console.log("TESTING")
    const pokenumber = document.getElementById("pokenumber").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(baseURL + pokenumber ).then(response => {
        return response.json()
    }).then(pokemon => {
        document.getElementById("pokename").innerHTML = pokemon.name;
        document.getElementById("pokeimage").src = pokemon.sprites.front_default;
        let pokeType1 = pokemon.types[0].type.name;
        let pokeType2;
        console.log(pokemon.types.length)
        if (pokemon.types.length == 2) {
            pokeType2 = pokemon.types[1].type.name;
        }
        else {pokeType2 = null;}
        document.getElementById("poketype").innerText = pokeType1 + " " +  pokeType2
        document.getElementById("pokeability").innerText = pokemon.abilities[0].ability.name 
    });
}
