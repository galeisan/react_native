import AxiosClient from "../../api/AxiosClient";

export default class CommentsRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getComments = () => {
        return this.apiClient.get({ url: '/comments' });
    };
}