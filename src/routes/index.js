export const router = express => {
  const r = express.Router()

  r.get('/', (req, res, next) => {
    res.status(200).send({
      title: 'MentionsAPI',
      version: '1.0.0'
    })
  })

  return r
}
