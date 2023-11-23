import { ConfigUserInterface } from './User.interface'
import { ConfigNetInterface } from './Net.interface'

export interface ConfigRedisInterface {
  user: ConfigUserInterface
  net: ConfigNetInterface
}
