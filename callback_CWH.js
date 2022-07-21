const student = [
    { name: "Lakshy", subject: "Java" },
    { name: "James", subject: "C++" },
];

function enrollStudent(studentData, callback) {
    setTimeout(() => {
        student.push(studentData);
        console.log("Student enrolled");
        callback();
    }, 1000);
}

function getStudent() {
    setTimeout(() => {
        let str = "";
        student.forEach(function (stude) {
            str += `<li> ${stude.name} </li>`;
        });
        document.getElementById("student").innerHTML = str;
        console.log("Student data printed");
    }, 5000);
}

const student1 = { name: "John", subject: "JS" };
enrollStudent(student1, getStudent);
