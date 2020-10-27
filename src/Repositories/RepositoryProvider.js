import { FeedbackRepository } from './FeedbackRepository';

export class RepositoryProvider {
    static repositories = new Map([
        ["FeedbackRepository", new FeedbackRepository()]
    ])
    static getRepository(repo) {
        return this.repositories.get(repo);
    }
}