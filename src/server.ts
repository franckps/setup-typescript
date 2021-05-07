import express from 'express'
import { User as UserController } from '@controllers/UserController'

const userController = new UserController('Francisco Pereira', 'francisco', 'FFps')

userController.test()

const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'hello world!' })
})

app.listen(3000)
