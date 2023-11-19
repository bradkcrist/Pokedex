// IIFE Format : Immediatley Invoked Function Expression
// PokdexIndex: Name, Height, Type

let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

// Functions and Prameters

function showModal(title, text, img){
    modalContainer.innerHTML = '';
    
    let modal= document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement= document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText= 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
}
function hideModal(){
    modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
    let target = e.target;
    if (target === modalContainer){
        hideModal();
    }
});

document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Pokemon', 'Pokemon Specs');
});
})();

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
    button.addEventListener('click', function (event) {
        showDetails(pokemonList);
    });
}

function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
        });
    }).catch(function (e) {
        console.error(e);
    })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

function showDetails(pokemon) {
   loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});









// pokemonRepository.add({ name: 'Cyndaquil', height: 1.0, type: 'Fire' });
// pokemonRepository.getAll().forEach(pokemonList => {
//     pokemonRepository.addListItem(pokemonList);
// });
// pokemonRepository.add({name: 'Cyndaquil' , height: 1.0 , type: 'Fire'});
// pokemonRepository.getAll().forEach(pokemonList => {
// if (pokemonList.height > 2.5)
//   document.write(pokemonList.name + '(Height:) ' + pokemonList.height + "Wow thats a big pokemon" + '<br>')
// else if (pokemonList.height < 2.0) {
// document.write(pokemonList.name + '(Height:)' + pokemonList.height + '<br>')
// }
// });
