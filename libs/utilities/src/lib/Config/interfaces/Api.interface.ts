export interface ConfigApiInterface {
  port: number
  folder_enabled: boolean
  jwt: {
    secret: string
  }
}
