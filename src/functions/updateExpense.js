import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()
const pathBase = path.join(__dirname, '/src/json/gastos.json')

const UpdateExpense = (id, body) => {
  const data = fs.readFileSync(pathBase, 'utf-8')
  const dataParseada = JSON.parse(data)
  dataParseada.find((datos) => {
    if (datos.id === id) {
      ;(datos.roommate = body.roommate),
        (datos.descripcion = body.descripcion),
        (datos.monto = body.monto)
    }
  })
  fs.writeFileSync(pathBase, JSON.stringify(dataParseada))
}

export default UpdateExpense
