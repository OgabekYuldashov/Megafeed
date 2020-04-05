export interface PostPreviewModel {
    _id: string;
    title: string;
    shortDescription: string;
    imageUrl: string;
    keywords: string;
    postDate: Date;
    author: {
        _id: string;
        imageUrl: string;
        name: string;
    }
}