const string = 'string'
const size = 20;
console.log(string.padStart(size,'.'));//rellenar el String al inicio con "." hasta que el tenga size caracteres
console.log(string.padEnd(size,'.'));//rellenar el String al final con "." hasta que el tenga size caracteres
console.log(string.padStart(size - ( size - string.length)/2  ,'.').padEnd(size,'.'));