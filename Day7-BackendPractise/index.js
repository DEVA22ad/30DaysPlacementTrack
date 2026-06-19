import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/authRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/auth',userRoute)



app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
    
})