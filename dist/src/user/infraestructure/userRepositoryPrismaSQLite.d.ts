import { IEditUser } from '../domain/interfaces/IUser';
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { User } from "../domain/user";
export declare class UserRepositoryPrismaSQLite implements IUserRepository {
    createUser(user: User): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    deteById(userId: number): Promise<string>;
    editById(userId: number, dataToModify: IEditUser): Promise<User>;
}
