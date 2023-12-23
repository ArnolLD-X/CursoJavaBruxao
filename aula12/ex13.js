var agora = new Date()
var diaSem = agora.getDay()



/* domingo = 0 >  1 seg >  2 ter >  3 qrt > 4 qut > 5 sex >  6 sab */
//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
            console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
         break
    case 4:
        console.log('Quinta-feira')
         break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO#404] Dia Inválido')
        break
}