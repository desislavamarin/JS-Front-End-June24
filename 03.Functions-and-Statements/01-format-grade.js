function formatGrade (grade) {
    let result = "";
    if (grade < 3.00) {
        result = "Fail";
        grade = 2;
    } else if (grade < 3.50) {
        result = "Poor";
    } else if (grade < 4.50) {
        result = "Good";
    } else if (grade < 5.50) {
        result = "Very good";
    } else if (grade >= 5.50) {
        result = "Excellent";
    }

    console.log(`${result} (${grade < 3 ? 2 : grade.toFixed(2)})`);
}