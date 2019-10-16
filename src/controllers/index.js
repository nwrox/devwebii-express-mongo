export const controllers = (mongoose, name) => {
  // const Mentions = mongoose.model('Mentions')

  // return {
  //   // create
  //   createMention: async (req, res) => {
  //     try {
  //       const mention = new Mentions({
  //         friend: req.body.friend,
  //         mention: req.body.mention
  //       })
  //
  //       console.log(mention)
  //
  //       await mention.save()
  //
  //       res.status(201)
  //         .send({ message: 'Menção cadastrada com sucesso!' })
  //     } catch (e) {
  //       res.status(500)
  //         .send({ message: 'Falha ao cadastrar a menção.' })
  //     }
  //   },
  //   // list
  //   listMentions: async (req, res) => {
  //     try {
  //       // const data = await Mentions.find({})
  //
  //       res.status(200)
  //         .send(JSON.stringify(mongoose))
  //     } catch (e) {
  //       res.status(500)
  //         .send({ message: 'Falha ao carregar as menções.' })
  //     }
  //   }
  // }
  return {
    classes: () => {
      const Clazz = mongoose.model('Class')

      console.log({ Clazz })

      // todo
      return {
        get: (req, res) => {
          res.status(200)
            .send({ message: 'Classes route ok.' })
        }
      }
    },
    clinics: () => {
      const Clinic = mongoose.model('Clinic')

      console.log({ Clinic })

      // todo
      return {
        get: (req, res) => {
          res.status(200)
            .send({ message: 'Clinics route ok.' })
        }
      }
    },
    clinicsEval: () => {
      const ClinicEval = mongoose.model('ClinicEval')

      console.log({ ClinicEval })

      // todo
      return {
        get: (req, res) => {
          res.status(200)
            .send({ message: 'ClinicsEval route ok.' })
        }
      }
    },
    users: () => {
      const User = mongoose.model('User')

      console.log({ User })

      // todo
      return {
        get: (req, res) => {
          res.status(200)
            .send({ message: 'Users route ok.' })
        }
      }
    }
  }[name]
}
