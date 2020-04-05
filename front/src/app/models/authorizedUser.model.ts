import {PostModel} from './post.model';

export interface AuthorizedUserModel {
  _id: string;
  email: string;
  name: string;
  imgUrl: string;
  bio: string;
  following: string[];
}

export function newAuthorizedUserModel() {
  const user: AuthorizedUserModel = {
      _id: '',
      email: '',
      name: '',
      imgUrl: '',
      bio: '',
      following: [],
    }
  ;
  return user;
}
