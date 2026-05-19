import express from "express"
import "dotenv/config"

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// eslint-disable-next-line no-unused-vars
app.use(( error, req, res, next) => {
  console.error("OPA")
  
  console.error(error)
})


app.get("/", (req, res, next) => {
  next(new Error("Ocorreu um erro"))
  res.send()
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
