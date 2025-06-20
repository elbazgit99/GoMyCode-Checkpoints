import http from 'http'
import dotenv from "dotenv"

import 'dotenv/config'

const PORT = process.env.PORT || 3000

const server = http.createServer((req,res) => {
     res.writeHead(200, {'content-Type' : 'text/html'})
     res.end('<h1>Hello Node!!!!</h1>\n')
})
server.listen(PORT || 3000, () => {
     console.log(`Server running at http://localhost:${PORT}/`)
     console.log(`Open your browser and navigate to http://localhost:${PORT} to see the message.`)
})