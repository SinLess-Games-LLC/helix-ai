import { INestApplication, Injectable } from '@nestjs/common'
import { z } from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from '@helix-ai/trpc'
import { utilityRouter } from './routes/utility.router'

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private utilityRouter: utilityRouter
  ) {}

  appRouter = this.trpc.router({
    utility: this.utilityRouter,
  })

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter })
    )
  }
}

export type AppRouter = TrpcRouter['appRouter']
