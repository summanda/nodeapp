import { Constants } from "./Constants";
import { options } from '@configs/LoggerConfig.json';

require('dotenv').config();

export class Config {

    private config: any = {};
    private static instance: Config;

    private constructor() {
        try {
            if (process.env.NODE_ENV == Constants.PRODUCTION) {
                /**
                 * Production Environment Configuration
                 */
                this.config[Constants.PROTOCOL] = process.env.SSH_EABLED ? Constants.HTTPS : Constants.HTTP;
                this.config[Constants.HOST] = process.env.HOST;
                this.config[Constants.PORT] = process.env.PORT;
                this.config[Constants.API_BASE_URL] = process.env.API_BASE_URL;
                this.config[Constants.STORAGE_URL] = process.env.STORAGE_URL;
                options.file.filename = options.file.filename.replace('environment', Constants.PRODUCTION);
                this.config[Constants.LOGGER_CONFIG] = options;
                this.config[Constants.CLIENT_ONE_TIME_SECRET] = process.env.CLIENT_ONE_TIME_SECRET;

            } else if (process.env.NODE_ENV == Constants.DEVELOPMENT) {
                /**
                 * Development Environment Configuration
                 */
                this.config[Constants.PROTOCOL] = Constants.HTTP;
                this.config[Constants.HOST] = process.env.DEV_HOST;
                this.config[Constants.PORT] = process.env.DEV_PORT;
                this.config[Constants.API_BASE_URL] = process.env.DEV_API_BASE_URL;
                this.config[Constants.STORAGE_URL] = process.env.DEV_STORAGE_URL;
                options.file.filename = options.file.filename.replace('environment', Constants.DEVELOPMENT);
                this.config[Constants.LOGGER_CONFIG] = options;
                this.config[Constants.CLIENT_ONE_TIME_SECRET] = process.env.DEV_CLIENT_ONE_TIME_SECRET;

            } else {
                /**
                 * Testing Environment Configuration
                 */
                // throw 'Error - Please check NODE_ENV in start script'; // Debugging Purpose
                this.config[Constants.PROTOCOL] = Constants.HTTP;
                this.config[Constants.HOST] = process.env.DEV_HOST;
                this.config[Constants.PORT] = process.env.DEV_PORT;
                this.config[Constants.API_BASE_URL] = process.env.DEV_API_BASE_URL;
                this.config[Constants.STORAGE_URL] = process.env.DEV_STORAGE_URL;
                options.file.filename = options.file.filename.replace('environment', Constants.DEVELOPMENT);
                this.config[Constants.LOGGER_CONFIG] = options;
                this.config[Constants.CLIENT_ONE_TIME_SECRET] = process.env.DEV_CLIENT_ONE_TIME_SECRET;

            }
            console.info('Initialized : Config');
        } catch (err) {
            console.error('Failed @Config.ts - constructor');
            console.error(err);
        }
    }

    public static getConfigInstance(): any {
        try {
            if (!Config.instance) {
                Config.instance = new Config();
            }
            return Config.instance;
        } catch (err) {
            console.error('Failed @Config.ts - getConfigInstance');
            console.error(err);
        }
    }

    public static get(value: any): any {
        try {
            let _config = Config.getConfigInstance();
            return _config.config[value];
        } catch (err) {
            console.error('Failed @console.ts - get');
            console.error(err);
        }
    }

}