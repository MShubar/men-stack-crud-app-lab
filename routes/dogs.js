const express = require('express')
const router = express.Router()
const dogController = require('../controller/dogs')

router.get('/', dogController.getAllDogs)
router.get('/new', dogController.showNewDogForm)
router.post('/', dogController.createDog)
router.get('/:id', dogController.showDog)
router.get('/:id/edit', dogController.showEditDogForm)
router.put('/:id', dogController.updateDog)
router.delete('/:id', dogController.deleteDog)

module.exports = router
