export class PostModel {
  constructor() {
    this._id = '';
    this.title = '';
    this.description = '';
    this.shortDescription = '';
    this.keywords = '';
    this.imageUrl = '';

    this.author = {
      _id: '',
      imageUrl: '',
      name: ''
    };
  }
  public _id;
  public title;
  public description;
  public shortDescription;
  public keywords;
  public imageUrl;

  public author: {
    _id: string;
    imageUrl: string;
    name: string;
  };
}
