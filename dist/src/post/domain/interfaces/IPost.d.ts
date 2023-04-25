import { User } from "../../../user/domain/user";
export interface IPost {
    id: number;
    title: string;
    content: string;
    published: boolean;
    author: User;
    authorId: number;
}
