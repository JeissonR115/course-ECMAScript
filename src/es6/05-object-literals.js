// enahced objet literals
function newUser(user,age, coutry,uId) {
    return{
        user,
        age,
        coutry,
        id: uId,
    }
}
console.log(newUser('Felipe', 10,'CO', 123123))