import fs from 'fs'
import path from 'path'
const __dirname = path.resolve()

const readRoommates = () => {
  const Roommates = fs.readFileSync(path.join(__dirname, '/src/json/roommates.json'))
  const roommates = JSON.parse(Roommates)
  console.log(roommates)
  return roommates
}

export default readRoommates
