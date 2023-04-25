import { IUser } from './interfaces/IUser';
import { Post } from "../../post/domain/post";
export declare class User implements IUser {
    readonly id: number;
    email: string;
    name: string | null;
    posts?: Post[];
    constructor(email: string, name: string);
}
