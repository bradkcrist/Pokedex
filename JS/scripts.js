// IIFE Format : Immediatley Invoked Function Expression
//PokdexIndex: Name, Height, Type

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#pokeModal");

  // Functions and Prameters
  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //Adds pokemonlist
  function addListItem(pokemonList) {
    let pokedex = document.querySelector(".list-group");
    let listPokemon = document.createElement("li");
    listPokemon.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemonList.name;
    button.classList.add("btn", "btn-primary", "my-1");
    listPokemon.appendChild(button);
    pokedex.appendChild(listPokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemonList);
    });
  }
  // Loads Pokemon name by item.name
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // Loads pokemons specs by item
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // Loads the details of my pokemon and the modal they are displayed in
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  // My modal functions for my bootstrap modal
  function showModal(item) {
    let modalContainer = document.querySelector("#pokeModal");
    let modalBody = document.querySelector(".modal-body");
    let modalTitle = document.querySelector(".modal-title");
    console.log(item.name);

    modalContainer.classList.add("is-visible");

    $("#pokeModal").modal("show");

    modalBody.innerHTML = "";
    modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    let modal = document.createElement("div");
    let container = document.querySelector("#image-container");

    modalTitle.innerText = item.name + " " + "Height: " + item.height;

    let pokeImage = document.createElement("img");
    pokeImage.src = item.imageUrl;

    modal.appendChild(pokeImage);
    modalBody.appendChild(modal);
  }
  // Hides my bootstrap modal
  function hideModal() {
    let modalContainer = document.querySelector("#pokeModal");
    modalContainer.classList.remove("is-visible");
  }
  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#pokeModal");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// modalContainer.innerHTML = '';

//         let modal = document.createElement('div');
//         modal.classList.add('modal');

//         let closeButtonElement = document.createElement('button');
//         closeButtonElement.classList.add('modal-close');
//         closeButtonElement.innerText = 'Close';
//         closeButtonElement.addEventListener('click', hideModal);

//         let pokeImage = document.createElement('img');
//         pokeImage.src = item.imageUrl;

//         let titleElement = document.createElement('h1');
//         titleElement.innerText = item.name +('  ') + ('Height:  ') + item.height;

//         modal.appendChild(closeButtonElement);
//         modal.appendChild(titleElement);
//         modal.appendChild(pokeImage);
//         modalContainer.appendChild(modal);

//         modalContainer.classList.add('is-visible');
//     }
//     function hideModal() {
//         modalContainer.classList.remove('is-visible');
//     }

//     window.addEventListener('keydown', (e) => {
//         let modalContainer = document.querySelector('#modal-container');
//         if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//             hideModal();
//         }
//     });

//     modalContainer.addEventListener('click', (e) => {
//         let target = e.target;
//         if (target === modalContainer) {
//             hideModal();
//         }
//     });

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
