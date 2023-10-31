// let pokemonList = [{name:"Regirock" , type:"Rock", height:"1.7"}];
// pokemonList = [{name:"Thundrus" , type:["Electric","Flying"] , height:"1.5"}];
//  pokemonList = [{name:"Zekrom" , type:["Dragon","Electric"] , height:"2.9"}];
let pokemonList = [{ name: "Regirock", type: "Rock", height: "1.7" }, { name: "Thundrus", type: ["Electric", "Flying"], height: "1.5" }, { name: "Zekrom", type: ["Dragon", "Electric"], height: "2.9" }];
for (let i = 0; i < 3; i++) {
    document.write(pokemonList[i].name); 
    
}