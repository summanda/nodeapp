import { AbstractRouteController } from '@src/Core/AbstractRouteController';
import { StatusCodes } from '../../Constants/StatusCodes';
import { Logger } from '@utils/Logger/Logger';
import { Authentication } from '@src/Middleware/Authentication';

import { Demo1Routes } from '@configs/APIConfig.json';
import { Demo1ServiceController } from './Demo1.Service';

export class Demo1RouteController extends AbstractRouteController {

    constructor() {
        super();
        this.path = Demo1Routes.baseResource;
        this.InitRoutes();
    }

    public async InitRoutes() {
        await this.dummy1Route(`${this.path}${Demo1Routes.routes.demo1_dummy1}`);
        await this.dummy2Route(`${this.path}${Demo1Routes.routes.demo1_dummy2}`);
    }

    public async dummy1Route(routePath: string): Promise<any> {
        try {
            this.router.get(routePath, Authentication.authenticate, async (req: any, res: any) => {
                let response = await Demo1ServiceController.dummy1Service(req, res);
                if (!res.headerSent) res.status(StatusCodes.STATUS_200.code).send(response);
            });
        } catch (err) {
            Logger.error('Failed @Demo1.Route.ts @Demo1RouteController - dummy1Route');
            Logger.error(err);
        }
    }

    public async dummy2Route(routePath: string): Promise<any> {
        try {
            this.router.get(routePath, Authentication.authenticate, async (req: any, res: any) => {
                let response = await Demo1ServiceController.dummy2Service(req, res);
                if (!res.headerSent) res.status(StatusCodes.STATUS_200.code).send(response);
            });
        } catch (err) {
            Logger.error('Failed @Demo1.Route.ts @Demo1RouteController - dummy2Route');
            Logger.error(err);
        }
    }

}