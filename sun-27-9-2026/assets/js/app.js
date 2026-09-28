import students, {
    getStudents,
    getStudentById
} from "./students.js";

import formatGrade, {
    calculateAverage,
    getStatus
} from "./grades.js";


const reportsContainer = document.getElementById("reports");

const allStudents = getStudents();


allStudents.forEach(student => {

    const average = calculateAverage(student.grades);

    const status = getStatus(average);

    const grade = formatGrade(average);

    const studentHTML = `
        <article class="student-card">

            <h2>${student.name}</h2>

            <p>
                <strong>ID:</strong>
                ${student.id}
            </p>

            <p>
                <strong>Grades:</strong>
                ${student.grades.join(", ")}
            </p>

            <p>
                <strong>Average:</strong>
                ${grade}
            </p>

            <p>
                <strong>Status:</strong>
                ${status}
            </p>

        </article>
    `;

    reportsContainer.innerHTML += studentHTML;
});