let pokemonRepository = (function () {
  let e = [];
  function t() {
    return e;
  }
  function n(t) {
    e.push(t);
  }
  function o(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function i(e) {
    o(e).then(function () {
      var t;
      let n, o, i, l, a;
      (t = e),
        (n = document.querySelector("#pokeModal")),
        (o = document.querySelector(".modal-body")),
        (i = document.querySelector(".modal-title")),
        console.log(t.name),
        n.classList.add("is-visible"),
        $("#pokeModal").modal("show"),
        (o.innerHTML = ""),
        n.addEventListener("click", (e) => {
          e.target === n && r();
        }),
        (l = document.createElement("div")),
        document.querySelector("#image-container"),
        (i.innerText = t.name + " Height: " + t.height),
        (a = document.createElement("img")),
        (a.src = t.imageUrl),
        l.appendChild(a),
        o.appendChild(l);
    });
  }
  function r() {
    document.querySelector("#pokeModal").classList.remove("is-visible");
  }
  return (
    document.querySelector("#pokeModal"),
    window.addEventListener("keydown", (e) => {
      let t = document.querySelector("#pokeModal");
      "Escape" === e.key && t.classList.contains("is-visible") && r();
    }),
    {
      getAll: t,
      add: n,
      addListItem: function e(t) {
        let n = document.querySelector(".list-group"),
          o = document.createElement("li");
        o.classList.add("group-list-item");
        let r = document.createElement("button");
        (r.innerText = t.name),
          r.classList.add("btn", "btn-primary", "my-1"),
          o.appendChild(r),
          n.appendChild(o),
          r.addEventListener("click", function (e) {
            i(t);
          });
      },
      loadList: function e() {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            e.results.forEach(function (e) {
              n({ name: e.name, detailsUrl: e.url });
            });
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      loadDetails: o,
      showDetails: i,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
