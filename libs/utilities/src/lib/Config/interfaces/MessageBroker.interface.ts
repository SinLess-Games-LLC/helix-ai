import { ConfigUserInterface } from './User.interface'
import { ConfigNetInterface } from './Net.interface'

export interface ConfigMessageBrokerInterface {
  brokers: {
    rabbitmq: {
      user: ConfigUserInterface
      net: ConfigNetInterface
    }
  }
}
