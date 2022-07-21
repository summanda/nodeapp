import axios from 'axios';
import { httpClient } from '@configs/HttpClientConfig.json';
import { Logger } from '@utils/Logger/Logger';
import { ConstantWords } from '@src/Constants/ConstantWords';
import { AxiosController } from './AxiosController';
import { IHttpClient } from './IHttpClient';

export class HttpClient {

    private client!: IHttpClient;
    private static instance: HttpClient;

    private constructor() {
        try {
            switch (httpClient) {
                case ConstantWords.AXIOS:
                    this.client = new AxiosController();
                    break;
            }
        } catch (err) {
            Logger.error('Failed @HttpClient.ts - constructor');
            Logger.error(err);
        }
    }

    public static async InitHttpClientInstance(): Promise<any> {
        try {
            if (!HttpClient.instance) {
                HttpClient.instance = new HttpClient();
            }
        } catch (err) {
            Logger.error('Failed @HttpClient.ts - InitHttpClientnstance');
            Logger.error(err);
        }
    }

    public static getHttpClientInstance(): any {
        try {
            if (!HttpClient.instance) {
                HttpClient.instance = new HttpClient();
            }
            return HttpClient.instance;
        } catch (err) {
            Logger.error('Failed @HttpClient.ts - getHttpClientInstance');
            Logger.error(err);
        }
    }

    public static async get(resource: any, params?: any): Promise<any> {
        try {
            let _client = HttpClient.getHttpClientInstance();
            let result = await _client.client.get(resource, params);
            return result;
        } catch (err) {
            Logger.error('Failed @HttpClient.ts - get');
            Logger.error(err);
        }
    }

}