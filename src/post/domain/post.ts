import { User } from './../../user/domain/user';
import { IPost } from './interfaces/IPost';


export class Post implements IPost {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: User;
  authorId: number;

  constructor(title: string, content: string, published: boolean, author: User){
    this.id = -1;
    this.title = title;
    this.content = content;
    this.published = published;
    this.author = author;
    this.authorId = author.id;
  }
}