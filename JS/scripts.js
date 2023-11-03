// /name:"Regirock" , type:"Rock", height:"1.7"}];
// [{name:"Thundrus" , type:["Electric","Flying"] , height:"1.5"}];
// [{name:"Zekrom" , type:["Dragon","Electric"] , height:"2.9"}];
// Pokdex Index name, height, type
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
// Adding loop for pokemon name and height greater then 2.5
 for (let i = 0; i < 3; i++) {
     document.write(pokemonList[i].name);
}

// for (let i=0; i < pokemonList.length; i++){
//     if (pokemonList[i].height < 2.5 && pokemonList[i].height > 2.0){
//       document.write(pokemonList[i].name + " is a big pokemon");
//     }else if (pokemonlist[i].age < 1.5){
//       document.write(pokemonList[i].name + " is a medium pokemon");
//   }
// }



