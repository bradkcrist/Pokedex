// /name:"Regirock" , type:"Rock", height:"1.7"}];
// [{name:"Thundrus" , type:["Electric","Flying"] , height:"1.5"}];
// [{name:"Zekrom" , type:["Dragon","Electric"] , height:"2.9"}];
let pokemonList = [
    {
        name: 'Regirock' + ('(height 1.7)'),
        type: 'Rock'
    },
    {
        name: 'Thundrus' + ('(height 1.5)'),
         type: ['Electric', 'Flying']
    },
    {
        name: 'Zekrom' + ('(height 2.9)'),
        type: ['Dragon', 'Electric']
    }
];
for (let i = 0; i < 3; i++) {
    document.write(pokemonList[i].name); 
}
