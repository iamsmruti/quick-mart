import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'




const app = express()

app.use(cors())
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})