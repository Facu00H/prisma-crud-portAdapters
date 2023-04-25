import { IEditUser } from "../domain/interfaces/IUser";
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { User } from "../domain/user";
export declare class UserService {
    private userRepository;
    constructor(userRepository: IUserRepository);
    createUser(name: string, email: string): Promise<User | string>;
    getAllUsers(): Promise<User[]>;
    findById(userId: number): Promise<User | string>;
    editById(userId: number, dataToModify: IEditUser): Promise<User | null>;
    deteById(userId: number): Promise<string>;
}
