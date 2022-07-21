import axios from 'axios';
import { Logger } from '@utils/Logger/Logger';
import { IHttpClient } from './IHttpClient';

export class AxiosController implements IHttpClient {

    private client!: any;

    constructor() {
        try {
            this.client = axios;
            Logger.info('Initialized : Http Client | Axios');
        } catch (err) {
            Logger.error('Failed @AxiosController.ts - constructor');
            Logger.error(err);
        }
    }

    public async get(resource: any, params?: any): Promise<any> {
        try {
            let result = await this.client.get(resource, params);
            return result;
        } catch (err) {
            Logger.error('Failed @AxiosController.ts - get');
            Logger.error(err);
        }
    }

}