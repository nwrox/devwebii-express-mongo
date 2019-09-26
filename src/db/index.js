export const model = mongoose => mongoose.model(
  'Mentions',
  new mongoose.Schema({
    friend: {
      type: String,
      required: true,
      trim: true
    },
    mention: {
      type: String,
      required: true
    }
  })
)

export const mongooseConn = mongoose => {
  mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('connected', () => {
    console.log('Mongoose default connection is open')
  })

  db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`)
  })

  db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected')
  })

  process.on('SIGINT', () => {
    db.close(() => {
      console.log(
        'Mongoose default connection is disconnected due to application termination'
      )
      process.exit(0)
    })
  })
}
