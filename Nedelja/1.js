//1. Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(niz){
  let deljivo= []
    for(let i=0; i < niz.length; i++){
      if(niz[i]%5 ===0){
        deljivo.push(niz[i])
      }
    }  
console.log(deljivo)
}
divisibleByFive([1,2,3,4,5,10,15,23,1,5,85,32,589,56,40])
/*let niz = [1,2,3,4,5,10,15,23,1,5,85,32,589,56,40]
niz.forEach(element => {
  if(element % 5===0)
  console.log(element)
});*/
