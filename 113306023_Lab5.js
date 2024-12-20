var mathInput = document.getElementById("mathGrade");
var englishInput = document.getElementById("englishGrade");
var submitButton = document.getElementById("submit");
var gradesTableBody = document.querySelector("#gradesTable tbody");
var mathAvgCell = document.getElementById("mathAvg");
var englishAvgCell = document.getElementById("englishAvg");
var overallAvgCell = document.getElementById("overallAvg");

var grades = [];

submitButton.addEventListener("click", () => {
var mathGrade = parseFloat(mathInput.value);
var englishGrade = parseFloat(englishInput.value);

if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert("Please enter valid grades for Math and English.");
    return;
}

var rowAvg = ((mathGrade + englishGrade) / 2).toFixed(2);

var newRow = document.createElement("tr");
newRow.innerHTML = `
    <td>${grades.length + 1}</td>
    <td>${mathGrade}</td>
    <td>${englishGrade}</td>
    <td>${rowAvg}</td>
`;
gradesTableBody.appendChild(newRow);

grades.push({ math: mathGrade, english: englishGrade });
    updateAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateAverages() {
    var mathSum = 0;
    var englishSum = 0;
    var totalSum = 0;

    grades.forEach(grade => {
        mathSum += grade.math;
        englishSum += grade.english;
        totalSum += (grade.math + grade.english) / 2;
    });

    var mathAvg = (mathSum / grades.length).toFixed(2);
    var englishAvg = (englishSum / grades.length).toFixed(2);
    var overallAvg = (totalSum / grades.length).toFixed(2);

    mathAvgCell.textContent = mathAvg;
    englishAvgCell.textContent = englishAvg;
    overallAvgCell.textContent = overallAvg;
}