import { User } from './../../user/domain/user';
import { IPost } from './interfaces/IPost';
export declare class Post implements IPost {
    id: number;
    title: string;
    content: string;
    published: boolean;
    author: User;
    authorId: number;
    constructor(title: string, content: string, published: boolean, author: User);
}
