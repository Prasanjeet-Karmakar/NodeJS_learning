import { students } from "../../data"
const nameList = document.querySelector('.name-list')

const newStudents = students.map(student => {
    return `<p>${student.name}</p>`
})

nameList.innerHTML = newStudents.join(' ')
