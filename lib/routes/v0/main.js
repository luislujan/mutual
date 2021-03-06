const strings = require('../../../config/strings')
const {GRADOS} = require('../../utils/values')
const {Router} = require('express')

const PATH = '/main'

const router = Router()

router.get('/', (req, res, next) => {
  try {
    const data = {
      isActive: 'dashboard'
    }
    res.render('main', {strings, data, GRADOS})
  } catch (err) {
    next(err)
  }
})

module.exports = routerRoot => {
  routerRoot.use(PATH, router)
}

