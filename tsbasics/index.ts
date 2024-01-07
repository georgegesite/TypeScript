// String Variable Type
let firstName: string = "George";
let lastName: string = "Washington";
console.log(firstName + " " + lastName);

// for loops
for(let i:number = 0; i < 5; i++){
    console.log(i);
}
// functions
function addition(a:number, b:number):number{  
    return a + b;
}
console.log(addition(10, 20));

// array
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

// tuple
let tuple: [string, number] = ["George", 10];
console.log(tuple[0]);

// objects
let person: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "George",
    lastName: "Washington",
    age: 10
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);