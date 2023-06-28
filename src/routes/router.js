import express from 'express'
const router = express.Router()

import { FetchData, readRoommates } from '../functions/fetchApi.js'
import readExpenses from '../functions/readExpenses.js'
import saveExpense from '../functions/addexpense.js'
import UpdateExpense from '../functions/updateExpense.js'
import deleteExpense from '../functions/deleteExpense.js'

router.get('/', (req, res) => {
  res.send(index.html)
})

router.get('/roommates', (req, res) => {
  const listado = readRoommates()
  res.send(listado)
})

router.post('/roommate', (req, res) => {
  FetchData()
  res.send('roommate agregado con exito!')
})

router.get('/gastos', (req, res) => {
  const listExpenses = readExpenses()
  res.send(listExpenses)
})

router.post('/gasto', (req, res) => {
  const data = req.body
  saveExpense(data)
  res.send('agregado')
})

router.put('/gasto', (req, res) => {
  const query = req.query
  const data = req.body
  const id = query.id
  UpdateExpense(id, data)
  res.send('actualizado con exito!')
})

router.delete('/gasto', (req, res) => {
  const query = req.query.id
  deleteExpense(query)
  res.send('Eliminado con exito!')
})

export default router
