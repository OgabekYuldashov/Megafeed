export interface PostPreviewModel {
    _id: string;
    title: string;
    shortDescription: string;
    imageUrl: string;
    keywords: string;
    postDate: Date;
    author: {
        imageUrl: string;
        name: string;
    }
}