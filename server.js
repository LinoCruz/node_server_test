const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => res.send('Hello world with express'))

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})