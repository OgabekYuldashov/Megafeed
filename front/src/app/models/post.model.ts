export interface PostModel {
  _id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  keywords: string;
  postDate: Date;
  author: {
    _id: string;
    imageUrl: string;
    name: string;
    bio: string;
  };
}

export function newPostModel(){
  const post: PostModel = {
    _id: '',
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    imageUrl: '',
    keywords: '',
    postDate: new Date(Date.now()),
    author: {
      _id: '',
      imageUrl: '',
      name: '',
      bio: '',
    }
  };
  return post;
}