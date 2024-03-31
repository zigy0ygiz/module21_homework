// {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

const student = {
    name: "Антон",
    age: 36,
    skills: [
        "Javascript",
        "HTML",
        "CSS",
    ],
    salary: 80000,
  };

const studentJson = JSON.stringify(student);

console.log(studentJson);