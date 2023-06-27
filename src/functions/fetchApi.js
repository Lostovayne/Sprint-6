import axios from 'axios'

// El botón “Agregar Roommate” de la aplicación cliente genera una petición POST (sin payload) esperando que
// el servidor registre un nuevo roommate random con la API randomuser, por lo que debes preparar una ruta
// POST /roommate en el servidor que ejecute una función asíncrona importada de un archivo externo al del
// servidor (la función debe ser un módulo), para obtener la data de un nuevo usuario y la acumule en un JSON
// (roommates.json).

import fs from 'fs'
import path from 'path'
const __dirname = path.resolve()
const archivoJson = path.join(__dirname, '/src/json/roommates.json')

const FetchData = async () => {
  const { data } = await axios.get('https://randomuser.me/api')
  const ParseDataResponse = {
    id: data.results[0].login.uuid,
    nombre: data.results[0].name.first + ' ' + data.results[0].name.last,
    debe: '3522',
    recibe: '54545'
  }
  const Roommates = fs.readFileSync(archivoJson, 'utf-8')
  const roommates = JSON.parse(Roommates)
  roommates.push(ParseDataResponse)
  fs.writeFileSync(archivoJson, JSON.stringify(roommates))
}

export default FetchData
