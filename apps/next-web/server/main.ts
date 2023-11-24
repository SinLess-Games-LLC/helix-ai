import { createServer } from 'http'
import { parse } from 'node:url'
import * as path from 'path'
import next from 'next'
import express from 'express'
import { applyWSSHandler } from '@trpc/server/dist/adapters/ws'
import ws from 'ws'
import cors from 'cors'
import { appRouter } from './routers/_app'
import { createExpressMiddleware } from '@trpc/server/dist/adapters/express'
import { createContext } from './context'

const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..')
const dev = process.env.NODE_ENV === 'development'
const hostname = process.env.API_HOST || 'localhost'
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 4200

async function main() {
  const nextApp = next({ dev, dir })
  const handle = nextApp.getRequestHandler()
  await nextApp.prepare()

  const app = express()

  console.log('Setting Up Trpc')
  app.use(
    '/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  )

  // Enable CORS
  app.use(cors({ origin: 'http://localhost:3000' }))

  app.all('*', (req, res) => {
    const parsedUrl = parse(req.url ?? '', true)
    handle(req, res, parsedUrl)
  })

  const _server = createServer(app)

  const server = _server.listen(port, hostname)

  console.log(`[ ready ] on http://${hostname}:${port}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
