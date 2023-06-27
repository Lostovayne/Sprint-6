import fs from 'fs'
import path from 'path'
const __dirname = path.resolve()

const readExpenses = () => {
  const Expenses = fs.readFileSync(path.join(__dirname, '/src/json/gastos.json'))
  const expenses = JSON.parse(Expenses)
  return expenses
}

export default readExpenses
