let students = [
  { name: "Akash", age: 20, field: "Computer Engineering", score: 88 },
  { name: "Chandu", age: 21, field: "Electrical Engineering", score: 58 },
  { name: "David", age: 24, field: "Mechanical Engineering", score: 62 },
  { name: "Beena", age: 23, field: "Civil Engineering", score: 96 },
];

let studetails = document.getElementById("studetails");
let sortfld = document.getElementById("sortfld");

function displayStudents(students) {
  studetails.innerHTML = "";
  students.forEach((student) => {
    studetails.innerHTML += `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.field}</td>
      <td>${student.score}</td>
    </tr>`;
  });
}

displayStudents(students);

sortfld.addEventListener("change", function () {
  let val = sortfld.value;

  if (val) {
    if (val == "age" || val == "score") {
      students.sort((a, b) => {
        return a[val] - b[val];
      });
    } else {
      students.sort((a, b) => {
        return a[val].localeCompare(b[val]);
      });
    }
    displayStudents(students);
  }
});

let search = document.getElementById("search");

search.addEventListener("input", function () {
  let item = document.getElementById("search").value.toLowerCase();

  let newStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(item) ||
      student.field.toLowerCase().includes(item) ||
      student.age.toString().includes(item) ||
      student.score.toString().includes(item)
    );
  });

  displayStudents(newStudents);
});

let minimumMarks = document.getElementById("minimumMarks");

minimumMarks.addEventListener("click", function () {
  let minMarks = document.getElementById("minMarks").value;
  console.log(minMarks);

  let newStudentsList = students.filter((student) => {
    return student.score >= minMarks;
  });

  displayStudents(newStudentsList);
});
