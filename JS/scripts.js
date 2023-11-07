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

    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    return {
        getAll: getAll,
        add: add
    }
})()

pokemonList.forEach(pokemonList => {
    document.write(pokemonList.name + '(Height:) ' + pokemonList.height + '<br>')
});

// function pokemon(pokemonList) {
//   return pokemonList.name + pokemonList.height
// }


// Adding forEach() loop pokemon name and height greater then 2.5
// Displaying else if for any other pokemon with height lower then 2.0

// for (let i = 0; i < pokemonList.length; i++) {
// if (pokemonList[i].height > 2.5)
// document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + "Wow thats a big pokemon" +  '<br>')
//  else if (pokemonList[i].height < 2.0) {
// document.write(pokemonList[i].name + '(height' + pokemonList[i].height + ') ' + '<br>')
// }
// }
