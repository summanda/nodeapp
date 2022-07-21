export interface IMailer {
    send(message: any): Promise<any>;
}