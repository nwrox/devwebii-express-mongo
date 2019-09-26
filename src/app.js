import { model, mongooseConn } from './db'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { defaultRoute } from './routes'
import { mentions } from './routes/mentions'

dotenv.config()

// App
export const app = express()

mongooseConn(mongoose)
model(mongoose)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Load routes
app.use('/', defaultRoute(express))
app.use('/mentions', mentions(express, mongoose))
