import { FeedbackController } from './FeedbackController';

export class ControllerProvider {
    static controllerMap = new Map([
        ["FeedbackController", new FeedbackController()]
    ])
    static getController(controller) {
        return this.controllerMap.get(controller);
    }
}