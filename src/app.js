import express from "express";
import { RoutesProvider } from './Routes/RouteProvider';
export class App {
  server
  constructor() {
    this.server = express();
  }

  setupMiddleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({extended: false}));
  }
  
  setupRoutes() {
    const routers = RoutesProvider.getAllRouters();
    routers.forEach((router) => {
      router.bindControllers(this.server);
    })
  }

  start() {
    this.server.listen(8080, () => {
      console.log("Listening on port 8080");
    })
  }
}

