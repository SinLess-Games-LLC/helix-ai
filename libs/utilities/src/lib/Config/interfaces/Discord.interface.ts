export interface ConfigDiscordInterface {
  application: {
    id: number
  }
  bot: {
    token: string
    default_prefix: string
    invite_url: string
  }
  client: {
    id: number
    secret: string
  }
  support_server: {
    invite_url: string
  }
  public_key: string
  developers: number[]
  testers: number[]
  oauth: {
    redirect_url: string
  }
}
