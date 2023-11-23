import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

export interface ConfigConsulInterface {
  net: ConfigNetInterface
  user: ConfigUserInterface
}
