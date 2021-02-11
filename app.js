
//Template Literals and Default Parameters Value
let favMovie = (movie = "The Room", name = "Kenneth Cunningham") => console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie();


//Arrow Functions
let getFirstName = (personName) => { return (personName) };
let getFirstNameConsise = personName => personName;

let newArrow = getFirstName("Kenneth Cunningham");
let secondArrow = getFirstNameConsise("Kenneth Cunningham");

console.log(newArrow.split(' ')[0]);
console.log(secondArrow.split(' ')[0]);

let doMath = (a = 2, b = 8) => ({ exponent: a ** b, product: a * b })
let result = doMath()
console.log(doMath(3, 2))
console.log(result.exponent)
console.log(result.product)

console.log(doMath(2, 6).exponent)
console.log(doMath(2, 4).product)


//Spread Syntax
let arr = ['Ken', 'Birmingham Alabama', 'Chinese']
let food = (name, location, favFood) => { console.log(`${name}, ${location}, ${favFood}`) }
food(...arr)
food.apply(null, arr)

let myName = "Ken"
let myFunc = (person="Modern Javascript") => {

    let spread = [...person]
    console.log(spread)

    for (i = 0; i < person.length; i++) {
        console.log(spread[i])
    }

}
myFunc(myName)

