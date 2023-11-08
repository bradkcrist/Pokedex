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
// IIFE forEach() loop, going threw each of my pokemon
// Biggest pokemon is = Wow thats a big pokemon
// Added new pokemon to my Pokedex 
pokemonRepository.add({name: 'Cyndaquil' , height: 1.0 , type: 'Fire'});

pokemonRepository.getAll().forEach(pokemonList => {
    if (pokemonList.height > 2.5)
  document.write(pokemonList.name + '(Height:) ' + pokemonList.height + "Wow thats a big pokemon" + '<br>')
else if (pokemonList.height < 2.0) {
    document.write(pokemonList.name + '(Height:)' + pokemonList.height + '<br>')
}
});
