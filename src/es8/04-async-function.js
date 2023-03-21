const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)?
        setTimeout(() => resolve('funcion asincrona'),2000)
        : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hi!')
}

console.log('Antes');
anotherFn();
console.log('Despues');