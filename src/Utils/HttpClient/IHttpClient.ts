export interface IHttpClient {
    get(resource: any, params?: any): Promise<any>;
}