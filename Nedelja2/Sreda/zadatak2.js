//Направити променљиву која представља цену производа коју купац жели да купи
//Направити променљиву која представља количину новца коју купац има
//Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
{
let Cena = 156
let Novac = 1256
TrenutnoStanje= Novac-Cena
if(Novac<Cena){
    console.log('Nemate dovoljno novca', Novac)
}else if(Novac>Cena){
    console.log('Uspešno ste kupili proizvod.', `Trenutno stanje ${TrenutnoStanje}`)
}

}
