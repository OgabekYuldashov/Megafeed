export interface AuthorizedUserModel {
    _id: string;
    email: string;
    name: string;
    imageUrl: string;
    bio: string;
    following: string[];
}
