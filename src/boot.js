import { App } from "./App";

const app = new App();

app.setupMiddleware();
app.setupRoutes();
app.start();