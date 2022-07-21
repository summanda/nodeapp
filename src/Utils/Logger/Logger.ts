import { ILogger } from './ILogger';
import { WinstonLoggerController } from './WinstonLoggerController';
import { ConstantWords } from '@src/Constants/ConstantWords';

export class Logger {

    private logger!: ILogger;
    private static instance: Logger;

    private constructor() {
        try {
            switch (ConstantWords.WINSTON) {
                case ConstantWords.WINSTON:
                    this.logger = new WinstonLoggerController();
                    break;
            }
        } catch (err) {
            console.error('Failed @Logger.ts - constructor');
            console.error(err);
        }
    }

    public static async InitLoggerInstance(): Promise<any> {
        try {
            if (!Logger.instance) {
                Logger.instance = new Logger();
            }
        } catch (err) {
            console.error('Failed @Logger.ts - InitLoggerInstance');
            console.error(err);
        }
    }

    public static getLoggerInstance(): any {
        try {
            if (!Logger.instance) {
                Logger.instance = new Logger();
            }
            return Logger.instance;
        } catch (err) {
            console.error('Failed @Logger.ts - getLoggerInstance');
            console.error(err);
        }
    }

    public static warn(message: any): void {
        try {
            let _logger = Logger.getLoggerInstance();
            _logger.logger.warn(message);
        } catch (err) {
            console.error('Failed @Logger.ts - warn');
            console.error(err);
        }
    }

    public static info(message: any): void {
        try {
            let _logger = Logger.getLoggerInstance();
            _logger.logger.info(message);
        } catch (err) {
            console.error('Failed @Logger.ts - info');
            console.error(err);
        }
    }

    public static error(message: any): void {
        try {
            let _logger = Logger.instance;
            _logger.logger.error(message);
        } catch (err) {
            console.error('Failed @Logger.ts - error');
            console.error(err);
        }
    }

}