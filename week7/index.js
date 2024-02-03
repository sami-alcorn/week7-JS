/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
// a. subtract value of first element from vlue of last element
console.log(ages[ages.length-1] - ages[0])

// b. add a new age and repeat the step above
ages.push(37)
console.log(ages[ages.length-1] - ages[0])

// c. Use a loop to iterate through the array and calculate the average age
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
let avgAge = sum / ages.length
console.log(avgAge)

/* 2. Create an array called names that contains the following values: 'Sam', 
'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// a. use a loop to  calculate average number of letters per name
let total = 0
for (let i = 0; i < names.length; i++) {
    total += names[i].length
}
let avgLetters = total / names.length
console.log(avgLetters)

/* b. Use a loop to iterate through the array again and concatenate all the names 
together, separated by spaces*/
let result = ''
for (let i = 0; i < names.length; i++) {
    result += names[i] + ' '
}
console.log(result)

// 3. how do you access last element of an array
console.log(names[names.length-1])

// 4. how do you access the first element of an array
console.log(names[0])

/* 5. Create a new array called nameLengths. Write a 
loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.*/
let nameLengths = []
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

/* 6. Write a loop to iterate over the nameLengths array and 
calculate the sum of all the elements in the array */
let lengthSum = 0
for (let i = 0; i < nameLengths.length; i++) {
    lengthSum += nameLengths[i]
}
console.log(lengthSum)

// 7. function with word and n
const repeatWord = (word, n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
    result += word
    }
    return result
}
console.log(repeatWord('Hello', 3))

// 8. function that creates full name
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(createFullName('Sami', 'Alcorn'))

// 9. functions returns true if sum of array is greater than 100
let numbersArray = [57, 83, 22]
const greaterThanHundred = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]     
    }
    if (sum > 100) {
        return true
    }
    else {
        return false
    } 
}
console.log(greaterThanHundred(numbersArray))
console.log(greaterThanHundred([7, 23, 1]))

// 10. function that returns average of an array
const average = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
    let average = sum / array.length
    return average
}
console.log(average([27, 45, 52, 8]))

/* 11. function that takes two arrays of numbers and returns 
true if the average of the elements in the first array is 
greater than the average of the elements in the second array. */
const firstGreaterThanSecond = (arr1, arr2) => {
    let sum1 = 0
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i]
    }
    let avg1 = sum1 / arr1.length

    let sum2 = 0
    for ( let i = 0; i <arr2.length; i++) {
        sum2 += arr2[i]
    }
    let avg2 = sum2 / arr2.length

    if (avg1 > avg2) {
        return true
    }
    else {return false}
}

firstArray = [25, 50, 75, 100]
secondArray = [1, 2, 3, 4]

console.log(firstGreaterThanSecond(firstArray, secondArray))
console.log(firstGreaterThanSecond(secondArray, firstArray))

/* 12. function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and 
if moneyInPocket is greater than 10.50.*/
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true
    }
    else { 
        return false
    }
} 
console.log(willBuyDrink(true, 11))
console.log(willBuyDrink(false, 11))
console.log(willBuyDrink(true, 10))

/* 13. Create a function of your own that solves a problem. In comments, 
write what the function does and why you created it.
My function determines whether or not each of my pets is due for a vet visit. If one of my pets
is either due for vaccines and/or they are on a medication and that medication needs to be refilled,
they need to go to the vet.*/
//created an array of my pets, each pet is an onbject
let pets = [
{name:'Ponyboy', needsVx:false, onMeds:true, needsRefill:false},
{name:'Silas', needsVx:true, onMeds:true, needsRefill:false},
{name:'Agnes', needsVx:false, onMeds:true, needsRefill:true}
]
//created the function that returns true or false a particular pet depending on vaules used
const petToVet = (pet) => {
        if (pet.needsVx === true || (pet.onMeds === true && pet.needsRefill === true)) {
            return true 
        }
        else {return false}
    }
/* created a loop that iterates through my pets array and prints the result of each pet passed
into the funtion */
for(let i = 0; i < pets.length; i++) {
    console.log("Should " + pets[i].name + " go to the vet?", petToVet(pets[i]))
}
