
 let pokemon1 = {
     ime: 'Kakuna',
     vrsta: 'buba',
     sposobnosti: ['bode','truje', 'oklop ga štiti'],
     karakteristike : {
         napad: 4,
         odbrana: 6,
         brzina : 3 
     },
     slika:'kakuna.jfif'
 }
 let pokemon2 = {
    ime: 'Flareon',
    vrsta: 'vatreni',
    sposobnosti: ['gori','pali', 'bljuje vatru'],
    karakteristike : {
        napad: 130,
        odbrana: 60,
        brzina : 65
    },
    slika:'flareon.jfif'
}
let pokemon3 = {
    ime: 'Zapdos',
    vrsta: 'leteći',
    sposobnosti: [ 'pušta munje','pušta gromove'],
    karakteristike : {
        napad: 90,
        odbrana: 85,
        brzina : 100
    },
    slika:'zapdos.jfif'
}
let pokemon4 = {
    ime: 'Pikachu',
    vrsta: 'električni',
    sposobnosti: ['pušta elektricitet', 'izaziva oluju'],
    karakteristike : {
        napad: 55,
        odbrana: 30,
        brzina : 90
    },
    slika:'pikachu.jfif'
}
//console.log(pokemon1)

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]



function najvecaJacina(niz) {
    pokemoni.sort((a, b) => {
        return a.karakteristike.napad - b.karakteristike.napad
    })
    console.log('Pobednik je:')
    return niz[niz.length - 1]
}
//console.log(najvecaJacina(pokemoni))

const container= document.createElement('div')
container.className= 'grid-container'

const wrapperD = document.querySelector('.wrapper')
const btnPrikaz = document.getElementById('prikaz')
btnPrikaz.textContent = 'PRIKAZI POKEMONE'

const btnPobednik = document.getElementById('pobednik')
btnPobednik.textContent = 'PRIKAZI NAJACEG POKEMONA'

wrapperD.appendChild(btnPrikaz,btnPobednik)

//Dugme prikaz

btnPrikaz.addEventListener('click',(e)=>{
    pokemoni.forEach(pokemon=>{
    const divPrikaz= document.createElement('div')
    divPrikaz.className='prikaz'
    const paragraf = document.createElement('p')
    paragraf.textContent='Ovo je pokemon : '+ pokemon.ime +' - '+pokemon.vrsta+', '+ pokemon.sposobnosti

    
    const slikaPok = document.createElement('img')
    slikaPok.src= pokemon.slika
    

    wrapperD.append(divPrikaz)
    divPrikaz.append(paragraf,slikaPok)
    })
})
//Dugme pobednik


btnPobednik.addEventListener('click',()=>{
    const divPobednik=document.createElement('div')
    divPobednik.className='pobednik'

    const paragrafP = document.createElement('p')
    paragrafP.textContent='Najjači pokemon je : '+ najvecaJacina(pokemoni).ime+' - '+najvecaJacina(pokemoni).vrsta+ ', '+ najvecaJacina(pokemoni).sposobnosti+' , '+ 'Napad:'+najvecaJacina(pokemoni).karakteristike.napad
    
    const slikaPobednika = document.createElement('img')
    slikaPobednika.src= najvecaJacina(pokemoni).slika

   wrapperD.append(divPobednik)
   divPobednik.append(paragrafP,slikaPobednika)

})

