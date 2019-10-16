import { controllers } from '../controllers'

export const clinics = (express, mongoose) => {
  const { get } = controllers(mongoose, 'clinics')()
  const r = express.Router()

  r.get('/', get)

  return r
}
