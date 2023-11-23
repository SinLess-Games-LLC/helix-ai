import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

export interface ConfigMongoInterface {
  net: ConfigNetInterface
  user: ConfigUserInterface
  database: {
    name: string
  }
}
