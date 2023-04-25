import { User } from "../user";
import { IEditUser } from "./IUser";
export interface IUserRepository {
    createUser(user: User): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    editById(userId: number, dataToModify: IEditUser): Promise<User | null>;
    deteById(userId: number): Promise<string>;
}
