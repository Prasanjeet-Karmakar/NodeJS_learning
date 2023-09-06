const { students } = require("../data")

const getStudents = (req, res) => {
    res.status(200).json({success: true, data: students})
}

const createPerson = (req, res) => {
    const obj = req.body;
    students.push(obj)

    res.status(201).json({success: true, data: students})
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(401)
            .json({success: false, msg: 'please provide name value'})
    }

    res.status(201).send({
        success: true, data: [...students,
            {
                "id": students.length + 1,
                "name": name
            }
        ]
    })
    console.log(students);
}

const updatePerson = (req, res) => {
    let { id } = req.params;
    const { name } = req.body;
    console.log(id, name);
    if (id === '0' || Number(id) > students.length) {
        res.status(401).json({ success: false, msg: 'please provide correct id' });
    }
    students = students.map(student => {
        return student.id === Number(id) ? {
            ...student, "name": name
        } :
            student;
    })

    res.status(201).send({ success: true, data: students })
    console.log(students);
}

const deletePerson = (req, res) => {
    let { id } = req.params;
    if (id === '0' || Number(id) > students.length) {
        res.status(401).json({ success: false, msg: 'please provide correct id' });
    }

    students = students.filter(student => student.id !== Number(id))
    res.status(201).json({success: true, data: students})
}

module.exports = {getStudents, createPerson, createPersonPostman, updatePerson, deletePerson}