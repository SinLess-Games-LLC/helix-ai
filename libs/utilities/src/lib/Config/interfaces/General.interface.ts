import { ConfigUserInterface } from './User.interface'

export interface ConfigGeneralInterface {
  config_author: string
  debug_level: string
  debug: boolean
  version: string
  config_version: string
  timezone: string
  mode: string
  app_specifier: string
  admin: ConfigUserInterface
}
