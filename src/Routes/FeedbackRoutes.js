import { ControllerProvider } from '../Controllers/ControllerProvider'

export class FeedbackRoutes {
    feedbackController
    constructor() {
        this.feedbackController = ControllerProvider.getController("FeedbackController");
    }
    bindControllers(server) {
        server.get("/feedbacks", this.feedbackController.getFeedbacks.bind(this.feedbackController))
        server.get("/feedbacks/:id", this.feedbackController.getFeedback.bind(this.feedbackController))
        server.post("/feedbacks", this.feedbackController.createFeedback.bind(this.feedbackController))
        server.put("/feedbacks/:id", this.feedbackController.updateFeedback.bind(this.feedbackController))
        server.delete("/feedbacks/:id", this.feedbackController.deleteFeedback.bind(this.feedbackController))
        server.get("/feedbacks/rating/:rating", this.feedbackController.getFeedbackByRating.bind(this.feedbackController))
    }
}