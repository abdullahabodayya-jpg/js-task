const students = [
    {
        id: 1,
        name: "Abdullah",
        grades: [85, 90, 78]
    },
    {
        id: 2,
        name: "Ahmad",
        grades: [70, 65, 80]
    },
    {
        id: 3,
        name: "Omar",
        grades: [45, 50, 40]
    },
    {
        id: 4,
        name: "Khaled",
        grades: [95, 88, 92]
    },
    {
        id: 5,
        name: "Yousef",
        grades: [60, 72, 68]
    }
];


export function getStudents() {
    return students;
}


export function getStudentById(id) {
    return students.find(student => student.id === id);
}


export default students;