import {makeAutoObservable} from 'mobx';
import CommentsService from "../services/CommentsService";
import LocalRepository from "../repositories/LocalRepository";

export class CommentsStore {
    comments = [];
    isLoading = false;
    commentsService;
    localRepository;

    constructor() {
        this.commentsService = new CommentsService();
        this.localRepository = new LocalRepository('Comments');
        makeAutoObservable(this);
    };

    getComments = () => {
        this.setIsLoading(true);

        this.commentsService
            .getComments()
            .then(result => {
                this.localRepository.setItems(result);
                this.setComments(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    setIsLoading = isLoading => {
        this.isLoading = isLoading;
    }

    setComments = comments => {
        this.comments = comments;
    }

    removeCommentsFromLocal = async () => {
        this.localRepository.removeAll();
        this.setComments(await this.localRepository.getItems() ?? []);
    };
}