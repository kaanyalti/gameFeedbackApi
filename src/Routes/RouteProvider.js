import { FeedbackRoutes } from './FeedbackRoutes';

export class RoutesProvider {
    static routeMap = new Map([
        ["FeedbackRoutes", new FeedbackRoutes()]
    ])
    static getRouter(router) {
        return this.routeMap.get(router);
    } 
    static getAllRouters() {
        const routers = [];
        this.routeMap.forEach((router) => {
            routers.push(router);
        })
        return routers;
    }
}
