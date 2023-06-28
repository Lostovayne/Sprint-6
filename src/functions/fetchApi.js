import axios from 'axios'

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

const readRoommates = () => {
  const roommates = fs.readFileSync(archivoJson, 'utf-8')
  const roommatesParse = JSON.parse(roommates)
  return roommatesParse
}

export { FetchData, readRoommates }
