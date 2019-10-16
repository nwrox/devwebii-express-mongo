import { controllers } from '../controllers'

export const users = (express, mongoose) => {
  const { get } = controllers(mongoose, 'users')()
  const r = express.Router()

  r.get('/', get)

  return r
}
