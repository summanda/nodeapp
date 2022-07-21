import winston from 'winston';
import { Config } from '@configs/Config';
import { Constants } from '@configs/Constants';
import { ILogger } from './ILogger';

export class WinstonLoggerController implements ILogger {

    private logger!: winston.Logger;

    constructor() {
        try {
            const czFormat = winston.format.printf(({ level, message, label, timestamp }) => {
                return `${timestamp} [${level}] ${message}`;
            });

            this.logger = winston.createLogger({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.timestamp(),
                    czFormat
                ),
                transports: [
                    new winston.transports.Console(Config.get(Constants.LOGGER_CONFIG).console),
                    new winston.transports.File(Config.get(Constants.LOGGER_CONFIG).file)
                ]
            });
            this.logger.info('Initialized : Logger | Winston');
        } catch (err) {
            console.error('Failed @WinstonLoggerController.ts - constructor');
            console.error(err);
        }
    }

    public warn(message: any): void {
        try {
            this.logger.warn(message);
        } catch (err) {
            console.error('Failed @WinstonLoggerController.ts - warn');
            console.error(err);
        }
    }

    public info(message: any): void {
        try {
            this.logger.info(message);
        } catch (err) {
            console.error('Failed @WinstonLoggerController.ts - info');
            console.error(err);
        }
    }

    public error(message: any): void {
        try {
            this.logger.error(message);
        } catch (err) {
            console.error('Failed @WinstonLoggerController.ts - error');
            console.error(err);
        }
    }

}