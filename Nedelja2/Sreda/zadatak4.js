//Исписати првих 1000 бројева дељивих са 5
let count = 0
let i = 1

 while(true){
     if(i % 5 == 0 && i<=1000){
         console.log(i)
         count++
     }
     if(count === 1000){
         break
     }
     i++
 }


