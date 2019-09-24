export interface AuthorizedUserModel {
    _id: string;
    email: string;
    name: string;
    imgUrl: string;
    bio: string;
    following: string[];
}
