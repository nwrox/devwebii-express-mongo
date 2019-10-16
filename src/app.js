import { models, mongooseConn } from './db'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { defaultRoute } from './routes'
// import { mentions } from './routes/mentions'
import { classes } from './routes/classes'
import { clinics } from './routes/clinics'
import { clinicsEval } from './routes/clinicsEval'
import { users } from './routes/users'

dotenv.config()

// App
export const app = express()

mongooseConn(mongoose)
// model(mongoose)
models(mongoose)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Load routes
app.use('/', defaultRoute(express))
// app.use('/mentions', mentions(express, mongoose))
app.use('/classes', classes(express, mongoose))
app.use('/clinics', clinics(express, mongoose))
app.use('/clinics_eval', clinicsEval(express, mongoose))
app.use('/users', users(express, mongoose))
