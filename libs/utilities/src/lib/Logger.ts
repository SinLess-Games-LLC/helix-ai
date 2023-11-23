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

  private logMessage(message: string, level: string) {
    const template = `[${this.module_name}] | [${this.module_name}] | `
    const messageColor = chalk.hex('#F0EAD6').visible(message)

    switch (this.getColor(level)) {
      case LogColor.BRed:
        return console.log(
          chalk.bold.hex('#FF3131').visible(template) + messageColor
        )
      case LogColor.Red:
        return console.log(
          chalk.hex('#FF0000').visible(template) + messageColor
        )
      case LogColor.ORed:
        return console.log(
          chalk.hex('#FF5349').visible(template) + messageColor
        )
      case LogColor.Yellow:
        return console.log(
          chalk.hex('#FFFF00').visible(template) + messageColor
        )
      case LogColor.LOrange:
        return console.log(
          chalk.hex('#FFA500').visible(template) + messageColor
        )
      case LogColor.Green:
        return console.log(
          chalk.hex('#00FF00').visible(template) + messageColor
        )
      case LogColor.Blue:
        return console.log(
          chalk.hex('#87CEEB').visible(template) + messageColor
        )
      case LogColor.Grey:
        return console.log(
          chalk.hex('#808080').visible(template) + messageColor
        )
      default:
        return console.log(
          chalk.hex('#F0EAD6').visible(template) + messageColor
        )
    }
  }

  log(message: string) {
    this.logMessage(message, '')
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
