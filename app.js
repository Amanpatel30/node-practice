import express from 'express'
import signUproute from './routes/signup.route.js'
import loginRoute from './routes/login.route.js'
import 'dotenv/config'


const app = express();
app.use(express.json())
app.use(signUproute);

app.use(loginRoute)

export default app;