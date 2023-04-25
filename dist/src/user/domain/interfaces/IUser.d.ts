import { Post } from "../../../post/domain/post";
export interface IUser {
    readonly id: number;
    name: string | null;
    email: string;
    posts?: Post[];
}
export interface IEditUser extends Omit<IUser, "id" | "posts"> {
}
