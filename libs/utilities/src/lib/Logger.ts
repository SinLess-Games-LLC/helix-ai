import chalk from 'chalk'
import * as winston from 'winston'

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

enum LogColor {
  BRed,
  Red,
  ORed,
  Yellow,
  LOrange,
  Green,
  Blue,
  Grey,
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
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    })
  }

  private getColor(logLevel: string): LogColor {
    switch (logLevel) {
      case 'Fatal':
        return LogColor.BRed
      case 'Critical':
        return LogColor.Red
      case 'Error':
        return LogColor.ORed
      case 'Warn':
        return LogColor.Yellow
      case 'Alert':
        return LogColor.LOrange
      case 'Success':
        return LogColor.Green
      case 'Info':
        return LogColor.Blue
      case 'Debug':
        return LogColor.Grey
      default:
        return LogColor.Grey
    }
  }

  private getChalkColorHex(logColor: LogColor) {
    switch (logColor) {
      case LogColor.BRed:
        return chalk.bold.hex('#FF3131')
      case LogColor.Red:
        return chalk.hex('#FF0000')
      case LogColor.ORed:
        return chalk.hex('#FF5349')
      case LogColor.Yellow:
        return chalk.hex('#FFFF00')
      case LogColor.LOrange:
        return chalk.hex('#FFA500')
      case LogColor.Green:
        return chalk.hex('#00FF00')
      case LogColor.Blue:
        return chalk.hex('#87CEEB')
      case LogColor.Grey:
        return chalk.hex('#808080')
      default:
        return chalk.hex('#F0EAD6')
    }
  }

  private formatMessage(message: string) {
    const template = `[${this.module_name}] | [${this.module_name}] | `
    const prefixColor = this.getChalkColorHex(this.getColor(this.log_level))
    const messageColor = this.getChalkColorHex(this.getColor('default'))
    const prefix = prefixColor(template)
    const _message = messageColor(message)
    return `${prefix} ${_message}`
  }

  private logMessage(message: string, level: string) {
    this.logger.log({
      level: level,
      message: this.formatMessage(message),
    })
  }

  log(message: string) {
    this.logMessage(message, 'info')
  }

  Fatal(message: string) {
    this.logMessage(`[FATAL] ${message}`, 'fatal')
  }

  Critical(message: string) {
    this.logMessage(`[CRITICAL] ${message}`, 'critical')
  }

  Error(message: string) {
    this.logMessage(`[ERROR] ${message}`, 'error')
  }

  Warn(message: string) {
    this.logMessage(`[WARN] ${message}`, 'warn')
  }

  Alert(message: string) {
    this.logMessage(`[ALERT] ${message}`, 'alert')
  }

  Success(message: string) {
    this.logMessage(`[SUCCESS] ${message}`, 'success')
  }

  Info(message: string) {
    this.logMessage(`[INFO] ${message}`, 'info')
  }

  Debug(message: string) {
    this.logMessage(`[DEBUG] ${message}`, 'debug')
  }
}
