function addSubject() {
    const container = document.getElementById("subjects");

    const div = document.createElement("div");
    div.className = "row";

    div.innerHTML = `
    <input type="text" placeholder="Subject Name">

    <select class="grade" required>
        <option value="" disabled selected hidden>Grade</option>
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>

    <input type="number" placeholder="Credits" min="1">

    <button class="delete-btn" onclick="deleteRow(this)">Del</button>
`;

    container.appendChild(div);
}

function deleteRow(button) {
    button.parentElement.remove();
}

function gradeToPoint(grade) {
    switch (grade) {
        case "O": return 10;
        case "A+": return 9;
        case "A": return 8;
        case "B+": return 7;
        case "B": return 6;
        case "C": return 5;
        default: return 0;
    }
}

function calculateCGPA() {
    const rows = document.querySelectorAll(".row");

    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach(row => {
        const grade = row.querySelector(".grade").value;
        const credits = parseFloat(row.querySelector("input[type='number']").value);

        if (grade !== "" && !isNaN(credits)) {
            totalCredits += credits;
            totalPoints += gradeToPoint(grade) * credits;
        }
    });

    if (totalCredits === 0) {
        alert("Please enter valid data");
        return;
    }

    const cgpa = (totalPoints / totalCredits).toFixed(2);

    document.getElementById("cgpa").innerText = cgpa;
}

function resetFields() {
    document.getElementById("subjects").innerHTML = `
        <div class="row">
            <input type="text" placeholder="Subject Name">
            <input type="number" placeholder="Grade" min="0" max="10" step="0.01">
            <input type="number" placeholder="Credits" min="1">
            <button class="delete-btn" onclick="deleteRow(this)">Del</button>
        </div>
    `;

    document.getElementById("cgpa").innerText = "0.00";
    document.getElementById("percentage").innerText = "";
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    const icon = document.querySelector(".icon");

    if (document.body.classList.contains("dark")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}
function toggleTheme() {
    document.body.classList.toggle("light");

    const icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("light")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}

