// reasignacion
var name = 'Felipe'
name = 'jeisson'
console.log(name)//jeisson

let friut = 'appel'
friut = 'kiwi'
console.log(friut)//kiwi

const animal = 'Dog'
animal = 'cat'
console.log(animal) //TypeError: Assignment to constant variable.
//scope
function friuts () {
    if(true){
        var friut1 = 'appel'//function scope
        let friut2 = 'kiwi'//block scope
        const friut3 = 'Banana'//block scope
    }
    console.log(friut1)//appel
    console.log(friut2)//ReferenceError: friut2 is not defined
    //stop the program
    console.log(friut3)//ReferenceError: friut3 is not defined
    //stop the program
} 
friuts()