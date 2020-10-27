import { FeedbackService } from './FeedbackService';

export class ServiceProvider {
    static services = new Map([
        ["FeedbackService", new FeedbackService()]
    ])
    static getService(service) {
        return this.services.get(service);
    }
}