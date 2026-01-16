// a student object
const student = {
    fullName: "Jarin Shova",
    age: 20,
    cgpa: 3.97,
    isPass: true,
};

console.log("type of student = " + typeof student); // object
console.log("type of fullName = " + typeof student.fullName); // string
console.log("type of age = " + typeof student.age); // number
// printing the type of isPass after storing it in a variable
type = typeof student.isPass;
console.log("type of isPass = " + type); // boolean

// print the object
console.log(student);

// for constant object key value can be changed
student.fullName = "Mitu";
// different way: sudent["fullName"] = "Mitu";
student.age += 2; // 22

console.log(student);

