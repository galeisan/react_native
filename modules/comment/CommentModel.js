export default class CommentModel {
    id;
    title;
    body;

    constructor(id, email, body) {
        this.id = id;
        this.email = email;
        this.body = body;
    }
}