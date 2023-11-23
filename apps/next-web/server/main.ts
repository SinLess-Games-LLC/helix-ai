import { createServer } from 'http'
import { parse } from 'node:url'
import * as path from 'path'
import next from 'next'
import express from 'express'
import cors from 'cors'
import 'reflect-metadata'

import { HelixLogger } from '@helix-ai/utilities'

const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..')
const dev = process.env.NODE_ENV === 'development'
const hostname = process.env.API_HOST || 'localhost'
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 4200
const logger = new HelixLogger('debug', 'Helix_Fronted_SERVER')

async function main() {
  const nextApp = next({ dev, dir })
  const handle = nextApp.getRequestHandler()
  await nextApp.prepare()

  const app = express()

  // Enable CORS
  app.use(cors())

  app.all('*', (req, res) => {
    const parsedUrl = parse(req.url ?? '', true)
    handle(req, res, parsedUrl)
  })

  const server = createServer(app)

  server.listen(port, hostname, () => {
    logger.Info(`[ ready ] on http://${hostname}:${port}`)
  })
}

main().catch((err) => {
  logger.Error(err)
  process.exit(1)
})
