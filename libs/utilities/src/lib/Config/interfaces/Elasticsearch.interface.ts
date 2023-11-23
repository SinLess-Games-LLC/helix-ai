import { ConfigNetInterface } from './Net.interface'
import { ConfigUserInterface } from './User.interface'

export interface ConfigElasticsearchInterface {
  net: ConfigNetInterface
  user: ConfigUserInterface
}
