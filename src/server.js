/* eslint-disable no-console */
import express from 'express'
import cors from 'cors'
import { corsOptions } from '~/config/cors'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  //Enable req.body json data
  app.use(express.json())

  //use API
  app.use('/v1', APIs_V1)

  //Middleware xử lí lỗi tập trung
  app.use(errorHandlingMiddleware)

  if (env.BUILD_MODE === 'production') {
    app.listen(process.env.PORT, () => {
      console.log(`Production ${env.AUTHOR}, I am running at PORT: ${process.env.PORT}`)
    })
  } else {
    //mode dev
    app.listen(env.APP_PORT, env.APP_HOST, () => {
      console.log(`Local Dev ${env.AUTHOR}, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`)
    })
  }

  exitHook(() => {
    CLOSE_DB()
  })
}

(async () => {
  try {
    console.log('Connected to mongo db cloud')
    await CONNECT_DB()

    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

//

// CONNECT_DB()
//   .then(() => console.log('Connected to mongo db cloud'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })


