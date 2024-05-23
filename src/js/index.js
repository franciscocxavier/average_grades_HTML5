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
    let grade_p = document.createElement("li");
    grade_p.textContent = "Grade " + (parseInt(index)+1)+ " = " + grade;
    grade_p.classList.add("list-group-item");
    document.getElementById("grades").appendChild(grade_p);
}

function average(){
    let grades_sum = 0 ;
    
    grades.forEach(function callback(value) {
        grades_sum += parseInt(value);        
    });
    
    let averg = grades_sum / grades.length;   
    updateAverageDiv(averg);
}

function updateAverageDiv(average){
    let average_div = document.getElementById("average");
    average_div.textContent = "";
    
    let average_p = document.createElement("p");
    average_p.textContent = "Average " + average;
    
    average_div.appendChild(average_p);

}