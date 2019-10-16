import { controllers } from '../controllers'

export const classes = (express, mongoose) => {
  const { get } = controllers(mongoose, 'classes')()
  const r = express.Router()

  r.get('/', get)

  return r
}
