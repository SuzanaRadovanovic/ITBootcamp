/*Исписати Марио пирамиду одређене висине:
За n = 5

#
##
###
####
#####       */


let N = 5
let M = 5

for(let i = 0; i <= M; i++){
    let red = ''
    red = '#'.repeat(i) + ''.repeat(N - i)
    console.log(red)
}