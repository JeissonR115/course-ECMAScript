function newUser(name,age,country) {
    var name = name || 'felipe'
    var age = age || 17
    var country = country || 'MX'
    console.log(name,age,country)
}
newUser()
newUser('Jeisson',18,'CO')

//parametros por defecto
function newAdmin(name = 'Felipe',age=17, country='MX') {
    console.log(name,age,country)
}
newAdmin()
newAdmin('Jeisson',18,'CO')