function calculateGPA(){
    var studentName = prompt("Enter student name:");
    var grade1 = Number(prompt("Enter grade 101"));
    var grade2 = Number(prompt("Enter grade 102"));
    var grade3 = Number(prompt("Enter grade 103"));

    var gpa = (grade1 + grade2 + grade3)/3;

    displayInfo(studentName,gpa);
}

function displayInfo(sName,gpa){
    document.getElementById("studentInfo").innerHTML+=`
    <li class="student-item">
        Name: ${sName}
        GPA: ${gpa.toFixed(2)}
    </li>
    `;
}