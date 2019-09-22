export interface BookmarkModel {
    _id: string;
    addedDate: Date;
    post: {
        _id: string;
        title: string;
        shortDescription: string;
    }
}