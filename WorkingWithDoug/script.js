/*
        What is an object?
        
        DOM - Document object model
*/

let x = 5

// this is an "array"
let colors = ["red", 'blue', `green`]

// this is an "object" or "object literal"
// objects have PROPERTIES (variables) and METHODS (functions)
let sweden = {              
    name: "Sweden",             // property
    population: 11000000,       // p
    capital: "Stockholm",       // p
    describeWeather() {

    }
}

console.log(colors[1])  //  "blue"
console.log(sweden.capital)

class Country {
    static iAmAStaticField = 123

    static iAmAStaticMethod() {

    }

    #privateField

    constructor(name, population, capital) {
        this.name = name
        this.population = population
        this.capital = capital
        this.#privateField = "something"
    }

    describeWeather() {

    }

    #thisIsAPrivateMethod {

    }

    get halfPopulation() {
        return this.population / 2
    }

    quaterPopulation() {
        return this.population / 4
    }
}

let finland = new Country("Finland", 5000000, "Helsinki")
console.log(finland.halfPopulation) // 2500000
console.log(finland.quarterPopulation()) // 1250000

class Person {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    set fullName(str) {
        let names = str.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

let teacher = new Person("Dog", "Alcedo")

teacher.fullName = "Doug Alcedo"
console.log(teacher)    // { firstName: "Doug", lastName: "Alcedo" }