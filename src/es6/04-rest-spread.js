//array destructuring
let fruits = ['banana','appel']
let [b,a] = fruits
console.log(b,fruits[0]);

//object destructuring
let user = {userName: 'jeissonr115', age: 17}
let {userName,age} = user
console.log(userName,age);

//sread operator

let person = {name: 'ana',age:'40'}
let country = 'MX'

let data = {id: 1,...person,country}
console.log(data);

//rest

function sum(num, ...values) {
    console.log(values)
    console.log(num+values[0])
    return num+values[0]
}
sum(1,2,9,65,32,5,6,6)