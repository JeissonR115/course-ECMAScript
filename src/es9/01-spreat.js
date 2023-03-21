const user = {
    name: 'Oscar',
    age: 32,
    country: 'CO',
};
const {name, ...values} = user
console.log(name);
console.log(values)