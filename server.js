import express from 'express'
import fs from 'fs'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = 3000
const FILE_PATH = path.resolve('data.json')

app.use(express.json())
app.use(cors())

// Define the structure of the JSON item

// GET /data — read and return JSON
app.get('/data', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file')
    try {
      const json = JSON.parse(data)
      res.json(json)
    } catch (e) {
      res.status(500).send('Invalid JSON format')
    }
  })
})

// POST /data — save JSON
app.post('/data', (req, res) => {
  const newData = req.body
  if (!Array.isArray(newData)) {
    return res.status(400).send('Invalid data format')
  }

  fs.writeFile(FILE_PATH, JSON.stringify(newData, null, 2), err => {
    if (err) return res.status(500).send('Error writing file')
    res.send('Data saved successfully')
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
