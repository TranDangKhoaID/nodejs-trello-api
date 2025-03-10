import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from '~/routes/v1/boardRoute'
import { columnRoute } from '~/routes/v1/columnRoute'
import { cardRoute } from '~/routes/v1/cardRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'API v1 are ready to use' })
})
//board routes
Router.use('/boards', boardRoute)

//column routes
Router.use('/columns', columnRoute)

//card routes
Router.use('/cards', cardRoute)

export const APIs_V1 = Router