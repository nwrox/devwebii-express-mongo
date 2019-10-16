// export const model = mongoose => mongoose.model(
//   'Mentions',
//   new mongoose.Schema({
//     friend: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     mention: {
//       type: String,
//       required: true
//     }
//   })
// )

export const models = mongoose => {
  const Schema = mongoose.Schema
  const clinicSchema = Schema({
    date: {
      required: true,
      type: Date
    },
    box_number: {
      required: true,
      type: Number
    }
  })
  const clinicEvalSchema = Schema({
    clinic_eval_criteria: {
      required: true,
      type: Array // todo
    },
    clinic_id: {
      ref: 'Clinic',
      required: true,
      type: Schema.Types
        .ObjectId // mongoose populate
    },
    user_id: {
      ref: 'User',
      required: true,
      type: Schema.Types
        .ObjectId // mongoose populate
    },
    medical_record_eval_criteria: {
      required: true,
      type: Array // todo
    }
  })
  const clazzSchema = Schema({
    discipline: {
      required: true,
      trim: true,
      type: String
    },
    schedule: {
      required: true,
      type: Date
    }
  })
  const userSchema = Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    }
  })

  mongoose.model('Class', clazzSchema)
  mongoose.model('Clinic', clinicSchema)
  mongoose.model('ClinicEval', clinicEvalSchema)
  mongoose.model('User', userSchema)
}

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
