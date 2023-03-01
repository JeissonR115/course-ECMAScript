const string = 'string'
console.log(string.padStart(12,'.'));//rellenar el String al inicio con "." hasta que el tenga 12 caracteres
console.log(string.padEnd(12,'.'));//rellenar el String al final con "." hasta que el tenga 12 caracteres
console.log(string.padStart(12,'.').padEnd(18,'.'));