import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

export interface ConfigKibanaInterface {
  net: ConfigNetInterface
  user: ConfigUserInterface
}
