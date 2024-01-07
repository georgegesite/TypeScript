// String Variable Type
var firstName = "George";
var lastName = "Washington";
console.log(firstName + " " + lastName);
// for loops
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// functions
function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20));
// array
var arr = [1, 2, 3, 4, 5];
console.log(arr);
// tuple
var tuple = ["George", 10];
console.log(tuple[0]);
// objects
var person = {
    firstName: "George",
    lastName: "Washington",
    age: 10
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
// enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
