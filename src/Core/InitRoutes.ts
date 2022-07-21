import { Express } from 'express';
import { Logger } from '@utils/Logger/Logger';
import { AbstractRouteController } from './AbstractRouteController';

import { Demo1RouteController } from '@src/Services/Demo1/Demo1.Route';

export class InitRoutes {

    public static async Init(app: Express, apiBaseUrl: string): Promise<any> {
        try {
            let routes = await this.getRoutes();
            routes.forEach((rc: any) => {
                app.use(`/${apiBaseUrl}`, rc.router);
            });
            Logger.info('Initialized : Routes');
        } catch (err) {
            Logger.error('Failed @InitRoutes.ts - Init');
            Logger.error(err);
        }
    }

    public static async getRoutes(): Promise<Array<AbstractRouteController> | any> {
        try {
            let routes: Array<AbstractRouteController> = [];

            /**
             * List all the Routes here
             */
            routes.push(new Demo1RouteController());

            return Promise.resolve(routes);
        } catch (err) {
            Logger.error('Failed @InitRoutes.ts - getRoutes');
            Logger.error(err);
        }
    }

}