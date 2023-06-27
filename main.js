// importaciones

import express from 'express'
import path from 'path'
import router from './src/routes/router.js'
const app = express()
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// al agregar roommate aveces la api se demora 1 segundo en la respuesta
