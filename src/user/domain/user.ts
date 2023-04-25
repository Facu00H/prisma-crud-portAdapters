import { IUser } from './interfaces/IUser';
import { Post } from "../../post/domain/post";

export class User implements IUser {
  readonly id: number;
  email: string;
  name: string | null;
  posts?: Post[];

  constructor(email: string, name: string){
    this.id = -1;
    this.email = email;
    this.name = name;
  }
}
