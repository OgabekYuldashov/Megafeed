export interface BookmarkModel {
    _id: string;
    userId: string;
    addedDate: Date;
    post: {
        _id: string;
        title: string;
        shortDescription: string;
    }
}