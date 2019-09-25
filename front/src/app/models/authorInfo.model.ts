import { AuthorizedUserModel } from './authorizedUser.model';

export interface AuthorInfoModel {
    _id: string;
    name: string;
    imageUrl: string;
    bio: string;
    pudlishDate: Date;
}

export function getAuthorInfoModel(user: AuthorizedUserModel, pudlishDate: Date){
    const authorInfo: AuthorInfoModel = {
        _id: user._id,
        name: user.name,
        bio: user.bio,
        imageUrl: user.imgUrl,
        pudlishDate: pudlishDate
    };

    return authorInfo;
}


export function newAuthorInfoModel() {
    const authorInfo: AuthorInfoModel = {
        _id: '',
        name: '',
        bio: '',
        imageUrl: '',
        pudlishDate: new Date(Date.now())
    };

    return authorInfo;
}
