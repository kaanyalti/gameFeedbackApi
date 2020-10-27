import feedback from '../../models/feedback';
import { RepositoryProvider } from '../Repositories/RepositoryProvider';

export class FeedbackService {
    feedbackRepo;
    constructor() {
        this.feedbackRepo = RepositoryProvider.getRepository("FeedbackRepository");
    }
    async getFeedbacks() {
        return await this.feedbackRepo.getFeedbacks();
    }
    async getFeedback(feedbackId) {
        return await this.feedbackRepo.getFeedback(feedbackId);
    }
    async createFeedback(feedbackCreateInput) {
        const userId = feedbackCreateInput.userId;
        const gameSessionId = feedbackCreateInput.gameSessionId;
        if (await this.hasAlreadyCommented(userId, gameSessionId)) {
            throw new Error("User has already left feedback for this game session");
        }
        return await this.feedbackRepo.createFeedback(feedbackCreateInput);
    }
    async updateFeedback(feedbackUpdateInput, feedbackId) {
        return await this.feedbackRepo.updateFeedback(feedbackUpdateInput, feedbackId);
    }
    async deleteFeedback(feedbackId) {
        return await this.feedbackRepo.deleteFeedback(feedbackId);
    }
    async hasAlreadyCommented(userId, gameSessionId) {
        const feedback = await this.feedbackRepo.findByUserAndSession(userId, gameSessionId);
        if (feedback === null) {
            return false
        }
        return true;
    }
    async getByRating(rating) {
        return await this.feedbackRepo.getByRating(rating);
    }
}