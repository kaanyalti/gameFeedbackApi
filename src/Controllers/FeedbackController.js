import { ServiceProvider } from '../Services/ServiceProvider'

export class FeedbackController {
    feedbackService
    constructor() {
        this.feedbackService = ServiceProvider.getService("FeedbackService")
    }
    async getFeedbacks(req, res) {
        const feedbacks = await this.feedbackService.getFeedbacks();
        res.json(feedbacks);
    }
    async getFeedback(req,res) {
        const feedbackId = req.params.id;
        const feedback = await this.feedbackService.getFeedback(feedbackId);
        res.json(feedback);
    }
    async createFeedback(req,res) {
        const feedbackCreateInput = req.body;
        try{ 
            const createdFeedback = await this.feedbackService.createFeedback(feedbackCreateInput);
            res.json(createdFeedback);
        } catch(error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    async updateFeedback(req,res) {
        const feedbackUpdateInput = req.body;
        const feedbackId = req.params.id;
        const updatedFeedback = await this.feedbackService.updateFeedback(feedbackUpdateInput, feedbackId)
        res.json(updatedFeedback);
    }
    async deleteFeedback(req,res) {
        const feedbackId = req.params.id;
        await this.feedbackService.deleteFeedback(feedbackId);
        res.status(200).end();
    }

    async getFeedbackByRating(req,res) {
        const rating = req.params.rating;
        const feedbacks = await this.feedbackService.getByRating(rating);
        res.json(feedbacks);
    }
}