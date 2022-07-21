import { Logger } from '@utils/Logger/Logger';
import { IMailer } from './IMailer';

const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');

export class NodeMailerController implements IMailer {

    private mailer: any = {
        transport: null
    };

    constructor() {
        try {
            this.mailer.transport = nodemailer.createTransport({
                SES: new AWS.SES({
                    apiVersion: 'x.y.z',
                    region: 'some-region'
                }),
            });
            Logger.info('Initialized : Mailer | Node Mailer with AWS SSE Encryption');
        } catch (err) {
            Logger.error('Failed @NodeMailerController.ts - constructor');
            Logger.error(err);
        }
    }

    public async send(message: any): Promise<any> {
        try {
            Logger.info('Dummy EMail is sent');
            // let transport = this.mailer.transport;
            // const mailerOptions = {
            //     from: 'From emaild of the person or org',
            //     to: 'to' || 'Some list of recievers',
            //     bcc: 'Some ist of BCC recievers',
            //     subject: 'Some subject',
            //     html: 'Some message or HTML format message',
            // };
            // const result = await transport.sendMail(mailerOptions);
            // return result;
        } catch (err) {
            Logger.error('Failed @NodeMailerController.ts - send');
            Logger.error(err);
        }
    }

}