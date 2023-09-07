/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

//Allows us to easily turn an array or object into multiple variables

// Destructuring arrays

let ages = [30,26,27];  //normal way of assigning, without using destructuring

//let John = ages[0];
//let Mary = ages[1];
//let Joe = ages[2];

let [John,Mary,Joe]=ages; //Destructuring method

console.log(John,Mary,Joe)


// Destructuring objects

let jobs ={
    mike: "Designer",
    jill: "Developer",
    alicia: "accountant",
}

let{mike,jill,alicia}=jobs

console.log(mike,jill,alicia);

// Destructuring subsets

let language = ["english","french","spanish","german"];

let [johnNative,johnSecondary]=language

console.log(johnNative,johnSecondary)

let [,,maryNative,marySecondary]=language //Here we have skipped english and french and assigned the value of spanish and german to the variables

console.log(maryNative,marySecondary)

let language2={
    first:"english",
    second:"french",
    third:"spanish",
    fourth:"german",
};

let{first,third} = language2;  // here ive assigned only specific values by using their property name

console.log(first,third)
// Using rest parameter syntax

let fruits =["apple","banana","orange"]; 

let [favorite,secondFavorite,...other]=fruits; //here we used a rest parameter , in this context it simply contains all other values in the array which hasnt been called

console.log(favorite);
console.log(secondFavorite);
console.log(...other);
