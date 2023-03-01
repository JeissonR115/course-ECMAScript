const list = new Set();
list.add('a');
list.add('b').add('c');

console.log(list);
list.delete('a');
console.log(list);