let grades = [];
updateGrades();

function addGrade(){
    let current_grade = document.getElementById("grade").value;
    if (current_grade) {
        grades.push(current_grade);
        document.getElementById("grade").value = '';
        updateGrades();
    }
    
}

function updateGrades(){
    clearGradesDiv();
    grades.forEach(function callback(value, index) {
        addGradeIntoDiv(value, index)   
    });
}

function clearGradesDiv(){
    document.getElementById("grades").textContent = ''; 
}
function addGradeIntoDiv(grade, index){
    let grade_p = document.createElement("p");
    grade_p.textContent = "Grade " + (parseInt(index)+1)+ " = " + grade;
    document.getElementById("grades").appendChild(grade_p);
}
