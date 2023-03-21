const anotherFunction = () => {
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('a')
        } else{
            reject('b')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('finally'))
