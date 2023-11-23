import { ConfigElasticsearchInterface } from './Elasticsearch.interface'
import { ConfigKibanaInterface } from './Kibana.interface'
import { ConfigLogstashInterface } from './Logstash.interface'

export interface ConfigElasticStackInterface {
  search: ConfigElasticsearchInterface
  kibana: ConfigKibanaInterface
  logstash: ConfigLogstashInterface
}
