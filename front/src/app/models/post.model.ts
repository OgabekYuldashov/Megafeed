export class Post {
  constructor() {
    this._id = '';
    this.title = '';
    this.description = '';
    this.keywords = '';
    this.imageUrl = '';

    this.author = {
      imageUrl: '',
      name: ''
    };
  }
  public _id;
  public title;
  public description;
  public keywords;
  public imageUrl;

  public author: {
    imageUrl: string;
    name: string;
  };
}
