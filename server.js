import express from 'express'
const app = express()
import dotenv from 'dotenv'
//start dotenv
dotenv.config()

import connectDB from './db/connect.js'

//middleware
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'

app.get('/', (req,res)=> {
     res.send('Welcome!')
 })

 //initializes the notFoundmiddleware and error handler
 app.use(notFoundMiddleware)
 app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

//only run the server if the connection was successful
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,() => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
