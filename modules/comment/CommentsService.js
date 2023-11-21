import CommentsRepository from "./CommentsRepository";
import CommentModel from "./CommentModel";

export default class CommentsService {
    commentsRepository;

    constructor() {
        this.commentsRepository = new CommentsRepository();
    }

    getComments = async () => {
        const res = await this.commentsRepository.getComments();

        return res.data.slice(0, 10).map(item =>
            new CommentModel(item.id, item.email, item.body)
        );
    };
}