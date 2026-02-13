// Define an ordered array of grades
const orderedGrades = ["A+", "A", "A-", "B+", "B", "B-"];

// Array of grades to sort
const grades = ["A-", "A+", "B-", "B+", "A"];

// Sort the grades based on the index in the orderedGrades array
grades.sort((a, b) => orderedGrades.indexOf(a) - orderedGrades.indexOf(b));

console.log(grades); // Output: ["A+", "A", "A-", "B+", "B-"]


const res = {
    'S': 0,
    'A+': 1,
    'A-': 2,
    'A': 3,
    'B+': 4,
    'B-': 5,
    'B': 6,
    'C+': 7,
    'C-': 8,
    'C': 9,
    'D+': 10,
    'D-': 11,
    'D': 12,
    'F': 13
 };
 
 grades = ["A-","D", "F", "B+", "C-", "S", "A+", "C", "B-", "D-", "D+","A", "C+"];
 
 
 const result = grades.sort((a,b) => res[a] - res[b]);
 