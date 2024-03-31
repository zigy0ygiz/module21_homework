const parser = new DOMParser();

const xmlString = `
    <list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>

    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>

    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const studentCount = studentNode.length;

let students = [];

for (let i = 0; i < (studentCount-1); i++) {

    const nameNode = studentNode[i].querySelector("name");
    const firstNameNode = nameNode.querySelector("first");
    const secondNameNode = nameNode.querySelector("second");
    const langAttr = nameNode.getAttribute('lang');
    const ageNode = studentNode[i].querySelector("age");
    const profNode = studentNode[i].querySelector("prof");

    students.push({
        name: {
            firstName: firstNameNode.textContent,
            secondName: secondNameNode.textContent,
        },
        lang: langAttr,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,    
    });

    console.log('students', students);
    
}

const result = {
    student: students,
};

console.log('result', result);