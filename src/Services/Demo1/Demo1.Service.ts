import { StatusCodes } from '@src/Constants/StatusCodes';
import { ResponseBuilder } from '@src/Framework/ResponseBuilder';
import { HttpClient } from '@utils/HttpClient/HttpClient';
import { Logger } from '@utils/Logger/Logger';
import { Mailer } from '@utils/Mailer/Mailer';

import { Demo1Constants } from './Demo1.Constant';

export class Demo1ServiceController {

    public static async dummy1Service(req: any, res?: any): Promise<any> {
        try {
            /**
             * Write any Service Logic Code over here
             * Call adapters for DB operations from here
             * At the end, build a response using Response Builder and return
             * example of a sample response -
             * return ResponseBuilder.response( ['Lorel', 'Hardy', 'Tom', 'Jerry'], Message.LIST_SUCCESS_MESSAGE)
             * return ResponseBuilder.response( null, Message.SOME_ERROR_MESSAGE)
             */

            /**
             * Third party API call demo
             */
            let result = await HttpClient.get('https://dummyjson.com/products/1');

            /**
             * Sending EMail demo
             */
            await Mailer.send('Some message');

            return ResponseBuilder.response({ data: result.data, alert: 'Successfully serviced from Demo 1, Dummy 1' }, Demo1Constants.SOME_SPECIFIC_MESSAGE);
        } catch (err) {
            Logger.error('Failed @Demo1.Service.ts @Demo1ServiceController - dummy1Service');
            Logger.error(err);
            if (!res.headerSent) res.status(StatusCodes.STATUS_500.code).send(ResponseBuilder.error());
        }
    }

    public static async dummy2Service(req: any, res?: any): Promise<any> {
        try {
            /**
             * Write any Service Logic Code over here
             * Call adapters for DB operations from here
             * At the end, build a response using Response Builder and return
             * example of a sample response -
             * return ResponseBuilder.response( ['Lorel', 'Hardy', 'Tom', 'Jerry'], Message.LIST_SUCCESS_MESSAGE)
             * return ResponseBuilder.response( null, Message.SOME_ERROR_MESSAGE)
             */
            return ResponseBuilder.response('Successfully serviced from Demo 1, Dummy 2', Demo1Constants.SOME_SPECIFIC_MESSAGE);
        } catch (err) {
            Logger.error('Failed @Demo1.Service.ts @Demo1ServiceController - dummy2Service');
            Logger.error(err);
            if (!res.headerSent) res.status(StatusCodes.STATUS_500.code).send(ResponseBuilder.error());
        }
    }

}