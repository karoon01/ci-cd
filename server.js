const express = require('express')
const rootRouter = require('./routes/index')

const server = express()

server.use('/api/v1', rootRouter)

const PORT = process.env.PORT ?? 3000

const start = async () => {
  server.listen(PORT, () => {
    console.log(`Server has been started at port: ${PORT}`)
  })
}

start()
