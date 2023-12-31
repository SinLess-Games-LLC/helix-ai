import { Injectable } from '@nestjs/common'
import { TrpcService } from '@helix-ai/trpc'
import { z } from 'zod'

@Injectable()
export class UserRouter {
  constructor(private readonly trpc: TrpcService) {}

  router = this.trpc.router({
    test: this.trpc.procedure
      .input(
        z.object({
          message: z.string(),
        })
      )
      .mutation(async (opts) => {
        return {
          message: 'Success',
        }
      }),
  })
}

export type userRouter = UserRouter['router']
