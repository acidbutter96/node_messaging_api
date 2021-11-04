import express, { Express } from 'express'

import './database'
import { routes } from './routes'

const port: number = 3333
const app: Express = express()

app.use(express.json())
app.use(routes)

app.listen(port ?? 3000, () => {
    console.log(`Server's running on port ${port ?? 3000}`)
})
