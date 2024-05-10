//Reverse String

function reverse(str){
    return str.split('').reverse().join('')
}

let reversed = reverse("Aisha");
console.log(reversed);

//Number of characters in a string

function length(str){
    return str.length
}

let lengths = length("Aisha Yusuf");
console.log(lengths);

//Capitalize the first letter

function letter(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let sentence = "aisha is aisha and yusuf is yusuf";
let letters = letter(sentence);
console.log(letters);

//The max and min of an array of numbers

const num = [12,45,65,43,23,54,76,78,90,9,87,6,77,55,12,10];
const min = Math.min(...num);
const max = Math.max(...num);

console.log(`The min value is ${min} and the max value is ${max}`);

//The sum of an array of numbers

const number = [2,3,4,5,7,5,4,3,2,7,8,9,0,8,6,4,3]
var sum = number.reduce((a,b) => {
    return a+b
},0);

console.log(sum)

//Filter an array

const people = [
    {
        name: "Jake",
        age: 31,
        level: "Detective"
    },
    {
        name: "Charles",
        age: 35,
        level: "Detective"
    },
    {
        name: "Amy",
        age: 30,
        level: "Detective"
    },
    {
        name: "Terry",
        age: 36,
        level: "Sergeant"
    },
    {
        name: "Holt",
        age: 43,
        level: "Captain"
    },
    {
        name: "Rosa",
        age: 32,
        level: "Detective"
    },
    {
        name: "Gina",
        age: 31,
        level: "Secretary"
    },
]
const age = people.filter(people => people.age >= 35)
console.log(age)

//Factorial

function factorial(Num) {
    if (Num === 0) {
      return 1;
    }
    return Num * factorial(Num - 1);
  }
  
  console.log(factorial(4));

//Prime Numbers

function prime(primeNumber) {
    if (primeNumber <= 1) 
        return false; 
    
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            return false;
        }
    }

    return true; 

}

const input = 11;
console.log(`Is ${input} a prime number? `, prime(input));

//Fibonacci Sequence

function fibonacciSeries(x) {
    let fib = [0, 1]; 

    for (let i = 2; i < x; i++) {
        let nextFibonacci = fib[i - 1] + fib[i - 2];
        fib.push(nextFibonacci);
    }

    return fib;
}

let series = fibonacciSeries(15);

console.log("Fibonacci series:", series); 
