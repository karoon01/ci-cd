const { Router: Index } = require('express')

const rootRouter = Index({ mergeParams: true })

rootRouter.get('/test', (req, res) => res.status(200).send('Success'))
rootRouter.get('/new', (req, res) => res.status(200).send('new endpoint'))
rootRouter.get('/staging', (req, res) => res.status(200).send('staging env'))

module.exports = rootRouter
