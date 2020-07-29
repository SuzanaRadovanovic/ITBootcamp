//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)
//MaxOdTri

let x = 25
let y = -65
let z = 6
 /* function MaxOdTri(x,y,z){
     return  Math.max(x,y,z)
  }
console.log ('Najveći od tri broja je: ' + MaxOdTri(x,y,z)) */
  
function MaxOdTri(x,y,z){
  if(x>y && x>z){
    return x
  }else if(y>x && y>z){
    return y
  }else{
    return z
  }
}
console.log('Najveći od tri broja je: ' + MaxOdTri(x,y,z))
