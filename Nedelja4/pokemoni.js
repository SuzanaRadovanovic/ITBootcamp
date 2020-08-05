
 let pokemon1 = {
     ime: 'Kakuna',
     vrsta: 'buba',
     sposobnosti: ['bode','truje', 'oklop ga štiti'],
     karakteristike : {
         napad: 4,
         odbrana: 6,
         brzina : 3 
     }
 }
 let pokemon2 = {
    ime: 'Flareon',
    vrsta: 'vatreni',
    sposobnosti: ['gori','pali', 'bljuje vatru'],
    karakteristike : {
        napad: 130,
        odbrana: 60,
        brzina : 65
    }
}
let pokemon3 = {
    ime: 'Zapdos',
    vrsta: 'leteći',
    sposobnosti: [ 'pušta munje','pušta gromove'],
    karakteristike : {
        napad: 90,
        odbrana: 85,
        brzina : 100
    }
}
let pokemon4 = {
    ime: 'Pikachu',
    vrsta: 'električni',
    sposobnosti: ['pušta elektricitet', 'izaziva oluju'],
    karakteristike : {
        napad: 55,
        odbrana: 30,
        brzina : 90
    }
}
//console.log(pokemon1)

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]

function nizSposobnosti(pokemoni){
   let niz = []
   pokemoni.forEach(element => {
       niz.push(element.sposobnosti)
       
   });
   return niz
}
console.log(nizSposobnosti(pokemoni))

pokemoni.sort((a,b)=> a.karakteristike.brzina - b.karakteristike.brzina)
console.log(pokemoni)