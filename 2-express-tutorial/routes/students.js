const express = require('express')
const router = express.Router()
// let { students } = require('../data')
const {getStudents, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/students')

// 1st way
// router.get('/', getStudents)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// 2nd way:
router.route('/')
    .get(getStudents)
    .post(createPerson)

router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router
