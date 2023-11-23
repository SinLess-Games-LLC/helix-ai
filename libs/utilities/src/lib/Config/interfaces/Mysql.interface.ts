import { ConfigUserInterface } from './User.interface'
import { ConfigNetInterface } from './Net.interface'

export interface ConfigMysqlInterface {
  connection_url: string
  user: ConfigUserInterface
  net: ConfigNetInterface
  database: {
    name: string
    charset: string
    timezone: string
  }
}
