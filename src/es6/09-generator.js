function* iterate(array){
    for (const value of array) {
        yield value;
    }
}
const it = iterate(['a','b','c']);
console.log(it.next().value);//a
console.log(it.next().value);//b
console.log(it.next().value);//c
console.log(it.next().value);//undefined