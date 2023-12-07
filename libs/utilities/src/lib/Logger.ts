import * as winston from 'winston'
import { LogEntry } from 'winston'

const LogLevels = {
  Fatal: 0,
  Critical: 1,
  Error: 2,
  Warn: 3,
  Alert: 4,
  Success: 5,
  Info: 6,
  Debug: 7,
}

export class HelixLogger {
  private readonly log_level: string
  private readonly module_name: string
  private logger: winston.Logger
  constructor(logLevel: string, moduleName: string) {
    this.log_level = logLevel
    this.module_name = moduleName
    this.logger = winston.createLogger({
      levels: LogLevels,
      level: this.log_level,
      format: winston.format.json(),
      defaultMeta: { service: this.module_name },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
      ],
    })
  }

  private logMessage(message: string, level: string) {
    const winstonMessage: LogEntry = {
      level: level,
      message: message,
    }
    this.logger.log(winstonMessage)
  }

  Fatal(message: string) {
    this.logMessage(`[FATAL] ${message}`, 'Fatal')
  }

  Critical(message: string) {
    this.logMessage(`[CRITICAL] ${message}`, 'Critical')
  }

  Error(message: string) {
    this.logMessage(`[ERROR] ${message}`, 'Error')
  }

  Warn(message: string) {
    this.logMessage(`[WARN] ${message}`, 'Warn')
  }

  Alert(message: string) {
    this.logMessage(`[ALERT] ${message}`, 'Alert')
  }

  Success(message: string) {
    this.logMessage(`[SUCCESS] ${message}`, 'Success')
  }

  Info(message: string) {
    this.logMessage(`[INFO] ${message}`, 'Info')
  }

  Debug(message: string) {
    this.logMessage(`[DEBUG] ${message}`, 'Debug')
  }
}
