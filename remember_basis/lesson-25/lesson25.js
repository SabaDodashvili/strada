//task1
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbersArr.forEach(number => console.log(`number is ${number}`));

//task2
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

currentAnimal = animals.find(animal => animal.length >= 7);

console.log(currentAnimal);

//task3
const numbersArr2 = [1, 11, -2, 3, -10, 4];

const negativeNumbers = numbersArr2.filter(number => number < 0);

console.log(negativeNumbers);

//task4
const numbersArr3 = [1, 11, -2, 3, -10, 4];

const absoluteNumbersArr = numbersArr3.map(number => Math.abs(number));

console.log(absoluteNumbersArr);

//task5
const numbersArr4 = [1, 11, -2, 3, -10, 4];

numbersArr4.sort((a, b) => b - a);

console.log(numbersArr4);
