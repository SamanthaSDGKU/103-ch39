console.log("Script");

var user = "Ricky";// init and assign of the value
var age = 99;
var grade101 = 3.5;
var grade102 = 3.7;
var isStudent = true;

var gpa = (grade101 + grade102)/2;

console.log(user,age,isStudent);
//concatenation
//document.write("<p> Name: " + user + "</p><p> Age:" +age + "</p><p> Active student: " +isStudent); 

//template string
document.write(`
    <p>Name: ${user}</p>
    <p>Age: ${age}</p>
    <p>Active student: ${isStudent}</p>
    <p>GPA: ${gpa}</p>
`);

