import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()
const pathBase = path.join(__dirname, '/src/json/gastos.json')

const deleteExpense = (id) => {
  const data = fs.readFileSync(pathBase, 'utf-8')
  const dataParseada = JSON.parse(data)
  const arrayData = []
  dataParseada.find((datos) => {
    if (datos.id !== id) {
      arrayData.push(datos)
    }
  })

  if (arrayData.length === 0) {
    fs.writeFileSync(pathBase, JSON.stringify([]))
  } else {
    fs.writeFileSync(pathBase, JSON.stringify(arrayData))
  }
}

export default deleteExpense
