import { mailer } from '@configs/MailerConfig.json';
import { ConstantWords } from '@src/Constants/ConstantWords';
import { Logger } from '@utils/Logger/Logger';
import { IMailer } from './IMailer';
import { NodeMailerController } from './NodeMailerController';

export class Mailer {

    private mailer!: IMailer;
    private static instance: Mailer;

    private constructor() {
        try {
            switch (mailer) {
                case ConstantWords.NODE_MAILER:
                    this.mailer = new NodeMailerController();
                    break;
            }
        } catch (err) {
            Logger.error('Failed @Mailer.ts - constructor');
            Logger.error(err);
        }
    }

    public static async InitMailerInstance(): Promise<any> {
        try {
            if (!Mailer.instance) {
                Mailer.instance = new Mailer();
            }
        } catch (err) {
            Logger.error('Failed @Mailer.ts - InitMailerInstance');
            Logger.error(err);
        }
    }

    public static getMailerInstance(): any {
        try {
            if (!Mailer.instance) {
                Mailer.instance = new Mailer();
            }
            return Mailer.instance;
        } catch (err) {
            Logger.error('Failed @Mailer.ts - getMailerInstance');
            Logger.error(err);
        }
    }

    public static async send(message: any): Promise<any> {
        try {
            let _mailer = Mailer.getMailerInstance();
            let result = await _mailer.mailer.send(message);
            return result;
        } catch (err) {
            Logger.error('Failed @Mailer.ts - send');
            Logger.error(err);
        }
    }

}