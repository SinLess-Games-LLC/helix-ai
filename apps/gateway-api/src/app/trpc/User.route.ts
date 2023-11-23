import { INestApplication, Injectable } from '@nestjs/common'
import { TrpcService } from '@helix-ai/trpc'
import { z } from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'
import { UserService } from '../user/user.service'

@Injectable()
export class UserRouter {
  constructor(
    private readonly trpc: TrpcService,
    private userService: UserService
  ) {}

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

    createUser: this.trpc.procedure
      .input(
        z.object({
          email: z.string(),
          password: z.string(),
        })
      )
      .mutation(async (opts) => {
        const savedUser = await this.userService.create({
          email: opts.input.email,
          password: opts.input.password,
        })
        return {
          message: 'Success',
          user: savedUser,
        }
      }),
  })
}

export type AppRouter = UserRouter['router']
