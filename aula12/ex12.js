var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('BOM DIA BB')
} else if (hora < 18) {
    console.log('BOA TARDE')
}  else {
    console.log('BOA NOITE, APRENDI =)')
}