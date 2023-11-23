export interface ConfigLoggingInterface {
  location: {
    console: {
      enabled: boolean
    }
    file: {
      enabled: boolean
      path: string
    }
  }
}
