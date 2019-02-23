const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const fileToOutput = (err, json, res) => {
  if (err) {
    res.status(500).json({'err': err})
  } else {
    const data = JSON.parse(json)
    const code = data.code ? data.code : 200
    res.status(code).json(data)
  }
}

app.get('/:code?', (req, res) => {
  const file = req.params.code ? path.basename(req.params.code, path.extname(req.params.code)) : 'index'
  const filePath = `./public/${file}.json`

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', (err, json) => fileToOutput(err, json, res))
  } else {
    fs.readFile(`./public/404.json`, 'utf8', (err, json) => fileToOutput(err, json, res))
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))