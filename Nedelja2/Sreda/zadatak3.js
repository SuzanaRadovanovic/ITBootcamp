//Направити променљиву која има вредност неког броја (цео број)
//Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//Ако није, Број _ није дељив са 3
let x = 24
if(x%3 == 0){
    console.log(`Broj ${x} je deljiv sa 3`)
}
    else if(x%3 != 0){
console.log(`Broj ${x} nije deljiv sa 3`)
    }else{
        console.log('Greška')
    }
