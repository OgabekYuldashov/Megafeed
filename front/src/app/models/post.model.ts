export class PostModel {
  constructor() {
    this._id = '';
    this.title = '';
    this.shortDescription = '';
    this.description = '';
    this.imageUrl = '';
    this.keywords = '';
    this.author = {
      _id: '',
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
    _id: string;
    imageUrl: string;
    name: string;
  };
}
