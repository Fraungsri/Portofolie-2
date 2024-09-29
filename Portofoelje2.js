//Student Grades Analysis

// Here i created an array that holds 8 grades and logging out how many grades there are
let grades = [85,92,78,63,95,88,72,54,81,67];
console.log(grades);
console.log(" There are " + grades.length + " grades in the class ");



// Classifying each grade into different categories and making a loop through the grades
console.log("Grades:");
for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let category;
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80 && grade <= 89) {
        console.log("B");
    } else if (grade >= 70 && grade <= 79){
        console.log("C")
    } else if (grade >= 60 && grade <= 69) {
        console.log("D")
    } else if (grade <= 60) {
        console.log("F")
    }
    console.log(grade +":" + category);
}

// Overall Class performance ( in this im using the "grades" array from earlier to figure out the sum and the average grade
const averageGrade = calculateAverageGrades(grades);
{
    if (averageGrade >= 90) {
        console.log("Overall Class Performance: Excellent");
    } else if (averageGrade >= 80 && averageGrade < 89) {
        console.log("Overall Class Performance: Good");
    } else if (averageGrade >= 70 && averageGrade < 79) {
        console.log("Overall Class Performance: Satisfactory");
    } else {
        console.log("Overall Class Performance: Needs Improvement");
    }
}

// this is used to figure out all the sum of the grades in the earlier array
function calculateSumOfGrades(score){
    return grades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0); // 0 is the value for the accumulator
}

// used to figure out the average grade, using the sum we calculated earlier
function calculateAverageGrades(grades) {
    const totalSumOfGrades = calculateSumOfGrades(grades);
    return totalSumOfGrades / grades.length;}

// result of sum + average grade
console.log("Total Sum: " + calculateSumOfGrades(averageGrade)); // sum is 775
console.log("Average Grade: " + averageGrade.toFixed(2)); // the average grade is 77.5

//Calculate the highest grade
let highestGrade = Math.max(...grades); // the (...) is used to expand the array elements, so Math.max will receive them as individual arguments and return the max value

//Calculate the lowest grade
let lowestGrade = Math.min(...grades);

//result
console.log("Highest Grade: " + highestGrade); // 95
console.log("Lowest Grade: " + lowestGrade); // 54







// Treasure Hunt

// Island Setup:
const island = ['-','-','T','-','-'];

// how many moves is there on the island
console.log(island.length);
console.log("Total moves on the island: " + island.length);

// check for each move if there is a treasure. Using the for loop method to loop through the island array.

for(let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        console.log("Treasure found at move " + (i+1) + ":");
    } else {
        console.log("No treasure found at move " + (i+1) + ":(");
    }
} // treasure found at move 3


// Log out how many treasures there are on the island

let countTreasure = island.filter(move => move === 'T').length; // using the filter() method to create a new array with only "T" and thne logs the length of the new array to count the total number of treasures
console.log("Total number of treasures on the island: " + countTreasure); // 1 treasure




//Startup name generator
const firstWords= ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];


// Function to make a random startup name
function getStartupName(){
    const randomFirstWords = Math.floor(Math.random()*firstWords.length);
    const randomSecondWords = Math.floor(Math.random()*secondWords.length);
    const startupName = firstWords[randomFirstWords] + "" + secondWords[randomSecondWords]; // combining words from both arrays
    return startupName; // return the generated startup name
}

// Generating a random startup name using the 2 arrays made. New name everytime the page refreshes
const randomStartupName = getStartupName();
console.log(" Your new startup name is: " + randomStartupName);


