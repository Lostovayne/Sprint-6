import fs from 'fs'
import path from 'path'
const __dirname = path.resolve()
const pathBase = path.join(__dirname, '/src/json/gastos.json')
import { v4 as uuidv4 } from 'uuid'

const saveExpense = (data) => {
  const id = uuidv4().slice(0, 8)
  const parseData = {
    ...data,
    id
  }
  const expenses = fs.readFileSync(pathBase, 'utf-8')

  if (!expenses) {
    fs.writeFileSync(pathBase, JSON.stringify([parseData]))
  } else {
    const exp = JSON.parse(expenses)
    exp.push(parseData)
    fs.writeFileSync(pathBase, JSON.stringify(exp))
  }

  return {
    status: 200,
    msg: 'Gasto agregado'
  }
}

export default saveExpense
