// IIFE Format : Immediatley Invoked Function Expression
// PokdexIndex: Name, Height, Type

let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: "Regirock",
            height: 1.7,
            type: 'Rock'
        },
        {
            name: 'Thundrus',
            height: 1.5,
            type: ['Electric', 'Flying']

        },
        {
            name: 'Zekrom',
            height: 2.9,
            type: ['Dragon', 'Electric']
        }
    ];

    // Functions and Prameters

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemonList) {
        let pokedex = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemonList.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokedex.appendChild(listpokemon);
        button.addEventListener('click', function (showDetails) {
            console.log(pokemonList);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon)
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }
})()

// IIFE forEach() loop, going threw each of my pokemon
// Added new pokemon to my Pokedex 
// Simplified my foreach loop

pokemonRepository.add({ name: 'Cyndaquil', height: 1.0, type: 'Fire' });

pokemonRepository.getAll().forEach(pokemonList => {
    pokemonRepository.addListItem(pokemonList);
});








// pokemonRepository.add({name: 'Cyndaquil' , height: 1.0 , type: 'Fire'});
// pokemonRepository.getAll().forEach(pokemonList => {
// if (pokemonList.height > 2.5)
//   document.write(pokemonList.name + '(Height:) ' + pokemonList.height + "Wow thats a big pokemon" + '<br>')
// else if (pokemonList.height < 2.0) {
// document.write(pokemonList.name + '(Height:)' + pokemonList.height + '<br>')
// }
// });
