import { Feedback } from "../../models";
export class FeedbackRepository {
    async getFeedbacks() {
        return await Feedback.findAll();
    }
    async getFeedback(feedbackId) {
        return await Feedback.findByPk(feedbackId);
    }
    async createFeedback(feedbackCreateInput) {
        return await Feedback.create({
            comment: feedbackCreateInput.comment,
            rating: feedbackCreateInput.rating,
            userId: feedbackCreateInput.userId,
            gameSessionId: feedbackCreateInput.gameSessionId
        })
    }
    async updateFeedback(feedbackUpdateInput, feedbackId) {
        return "UPDATED FEEDBACK"
    }
    async deleteFeedback(feedbackId) {
        return "DELETED FEEDBACK"
    }
    async findByUserAndSession(userId, gameSessionId) {
        return await Feedback.findOne({
            where: {
                userId,
                gameSessionId
            }
        })
    }
    async getByRating(rating) {
        return await Feedback.findAll({
            where: {
                rating
            }
        })
    }
}