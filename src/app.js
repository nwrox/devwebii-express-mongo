import express from 'express'
import { router } from './routes'

// App
export const app = express()

// Load routes
app.use('/', router(express))
