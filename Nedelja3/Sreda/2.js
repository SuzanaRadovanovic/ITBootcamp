//Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм,  и цена пице)
let r =12
let cena =220
let P = r*r*Math.PI
function CenaPoCm(P,cena){
    return P/cena
}
console.log(CenaPoCm(P,cena))



