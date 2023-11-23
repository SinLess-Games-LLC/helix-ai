import { ConfigMongoInterface } from './Mongo.interface'
import { ConfigMysqlInterface } from './Mysql.interface'
import { ConfigRedisInterface } from './Redis.interface'

export interface ConfigDatabaseInterface {
  mongo_db: ConfigMongoInterface
  mysql: ConfigMysqlInterface
  redis: ConfigRedisInterface
}
