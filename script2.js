function getUserAge(bornYear){
    var userBirthYear= Number(prompt("Enter your birth year"));
    var todayDate= new Date();
    var currentYear = todayDate.getFullYear();
    var age = currentYear-userBirthYear;
    document.write(`User age: ${age}`);
    errorMsg("Unspeified","We are not considering the birth month");
    return age;
}

function calculateSum(){
    var num1 = Number(prompt("Enter num1"));
    var num2 = Number(prompt("Enter num2"));
    var sum = num1 + num2;
    errorMsg("Math error", "The propmt values were not numbers");

    console.log(sum);
}

// --------------> parameters ---------------------------
function errorMsg(type,msg){
    document.write("<p>You had an error of the type: " + type+"</p>");
    document.write(msg);
}





