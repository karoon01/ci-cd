const { Router: Index } = require('express')

const rootRouter = Index({ mergeParams: true })

rootRouter.get('/test', (req, res) => res.status(200).send('Success'))

module.exports = rootRouter
