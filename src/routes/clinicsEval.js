import { controllers } from '../controllers'

export const clinicsEval = (express, mongoose) => {
  const { get } = controllers(mongoose, 'clinicsEval')()
  const r = express.Router()

  r.get('/', get)

  return r
}
