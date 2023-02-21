class User {
    //constructor
    constructor(name = 'yo'){
        //this
        this.name=name
        console.log('new user')
    }
    //metodos
    greting(){
        return `hola soy ${this.name}`
    }
    //get y set
    get userName(){
        return this.name
    }
    set userName(n){
        this.name = n
    }
}
const ana = new User('ana')

console.log(ana.userName)
console.log(ana.userName = 'anita')
console.log(ana.greting())