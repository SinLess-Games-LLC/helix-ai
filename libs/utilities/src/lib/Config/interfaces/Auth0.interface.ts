export interface ConfigAuth0Interface {
  secret: string
  base_url: string
  issuer: {
    base_url: string
  }
  client: {
    id: string
    secret: string
  }
  audience: string
  scope: string
}
