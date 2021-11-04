import express, { Express } from 'express'

import './database'

const port: number = 3333
const app: Express = express()

app.listen(port ?? 3000, () => {
    console.log(`Server's running on port ${port ?? 3000}`)
})