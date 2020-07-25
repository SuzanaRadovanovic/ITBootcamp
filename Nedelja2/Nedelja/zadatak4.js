/*Исписати Марио пирамиду одређене висине:
За n = 5

    #
   ## 
  ###
 ####   
#####
               */
let n = 5
let m = 5
let red = ''
              
for(let i =0 ; i <= m; i++) {
red=''
red= ' '.repeat(n-i)+ '#'.repeat(i)
            
console.log(red)}
              