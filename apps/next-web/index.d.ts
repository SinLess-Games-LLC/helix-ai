/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

declare namespace NodeJS {
  interface ProcessEnv {
    AUTHOR_NAME: string
    DEBUG_LEVEL: string
    DEBUG: string
    VERSION: string
    CONFIG_VERSION: string
    TIMEZONE: string
    MODE: string
    APP_SPECIFIER: string
    API_PORT: string
    API_FOLDER_ENABLED: string
    CONSUL_URL: string
    DISCORD_APPLICATION_ID: string
    DISCORD_PUBLIC_KEY: string
    DISCORD_CLIENT_SECRET: string
    DISCORD_BOT_INVITE_URL: string
    DISCORD_SUPPORT_SERVER_INVITE_URL: string
    DISCORD_BOT_TOKEN: string
    DISCORD_BOT_DEFAULT_PREFIX: string
    DISCORD_DEVELOPER_IDS: string
    DISCORD_TESTER_IDS: string
    OPENAI_ORG_ID: string
    OPENAI_API_KEY: string
    TWITCH_CLIENT_ID: string
    TWITCH_CLIENT_SECRET: string
    MYSQL_USER: string
    MYSQL_PASSWORD: string
    MYSQL_HOST: string
    MYSQL_PORT: string
    MYSQL_DATABASE: string
    MONGODB_HOST: string
    MONGODB_PORT: string
    MONGODB_DB_NAME: string
    LOG_FILE: string
    LOG_TO_CONSOLE: string
    ELASTICSEARCH_HOST: string
    ELASTICSEARCH_PORT: string
  }
}
