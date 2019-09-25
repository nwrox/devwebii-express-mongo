import { app } from '../src/app'
import http from 'http'
import debug from 'debug'

// PORT // based on express-generator
const normalizePort = val => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

// error handler
const onError = error => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`
  const options = {
    EACCES: () => {
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    },
    EADDRINUSE: () => {
      console.error(`${bind} is already in use`)
      process.exit(1)
    }
  }

  options[error] || (() => {
    throw error
  })()
}

// listener handler
const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `Pipe ${addr}`
    : `Port ${addr.port}`

  debug(`Listening on ${bind}`)
}

const port = normalizePort(process.env.PORT || 3000)

// server
const server = http.createServer(app)

app.set('port', port)
debug('nodestr:server')

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

console.log(`API is alive on ${port}!`)
