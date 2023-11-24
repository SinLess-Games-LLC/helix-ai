import { INestApplication, Injectable } from '@nestjs/common'
import { z } from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'
import { userRouter } from './User.route'
import { TrpcService } from '@helix-ai/trpc'

interface _appRouter {
  user: AppRouter
}

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private userRouter: userRouter
  ) {}

  appRouter = this.trpc.router({
    user: this.userRouter,
  })

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter })
    )
  }
}

export type AppRouter = TrpcRouter['appRouter']
