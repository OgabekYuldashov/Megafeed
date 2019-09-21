export interface PostPreviewModel {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    postDate: Date;
    user: {
        imageUrl: string;
        name: string;

    }
}