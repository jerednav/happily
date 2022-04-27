import express from 'express'
const app = express()
import dotenv from 'dotenv'
//start dotenv
dotenv.config()

//middleware
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'

 app.get('/', (req,res)=> {
     throw new Error('error')
     res.send('Welcome!')
 })

 app.use(notFoundMiddleware)
 app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`Server is listening on port ${port}...`)
})