const Dog = require('../models/Dog')

const getAllDogs = async (req, res) => {
  const dogs = await Dog.find()
  res.render('index', { dogs })
}

const showNewDogForm = (req, res) => {
  res.render('new')
}

const createDog = async (req, res) => {
  req.body.isAdopted = req.body.isAdopted === 'on'
  await Dog.create(req.body)
  res.redirect('/dogs')
}

const showDog = async (req, res) => {
  const dog = await Dog.findById(req.params.id)
  res.render('show', { dog })
}

const showEditDogForm = async (req, res) => {
  const dog = await Dog.findById(req.params.id)
  res.render('edit', { dog })
}

const updateDog = async (req, res) => {
  req.body.isAdopted = req.body.isAdopted === 'on'
  await Dog.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/dogs/${req.params.id}`)
}

const deleteDog = async (req, res) => {
  await Dog.findByIdAndDelete(req.params.id)
  res.redirect('/dogs')
}

module.exports = {
  getAllDogs,
  showNewDogForm,
  createDog,
  showDog,
  showEditDogForm,
  updateDog,
  deleteDog
}
