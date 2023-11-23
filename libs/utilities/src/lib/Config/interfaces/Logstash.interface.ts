import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

export interface ConfigLogstashInterface {
  net: ConfigNetInterface
  user: ConfigUserInterface
}
