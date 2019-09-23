export class Post {
  constructor() {
    this._id = '';
    this.title = '';
    this.shortDescription = '';
    this.description = '';
    this.imageUrl = '';
    this.keywords = '';
    this.author = {
      imageUrl: '',
      name: ''
    };
  }
  public _id;
  public title;
  public shortDescription;
  public description;
  public imageUrl;
  public keywords;
  public author: {
    imageUrl: string;
    name: string;
  };
}
