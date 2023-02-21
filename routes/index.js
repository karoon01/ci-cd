const { Router: Index } = require('express')

const rootRouter = Index({ mergeParams: true })

rootRouter.get('/test', (req, res) => res.status(200).send('Success'))
rootRouter.get('/new', (req, res) => res.status(200).send('new endpoint'))

module.exports = rootRouter
