import { IEditUser } from "../domain/interfaces/IUser";
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { User } from "../domain/user";

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository){
    this.userRepository = userRepository;
  }

  public async createUser(name: string, email: string): Promise<User | string> {
    const user: User = new User(name, email);
    const newUser: User | null = await this.userRepository.createUser(user);
    if (newUser !== null) return newUser
    return newUser !== null ? newUser : 'Error al crear el usuario'
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  public async findById(userId: number): Promise<User | string>{
    const user: User | null = await this.userRepository.findById(userId);
    return user === null ? `el usuario con id: ${userId} no existe` : user
  }

  public async editById(userId:number, dataToModify: IEditUser): Promise<User | null> {
    return await this.userRepository.editById(userId, dataToModify);
  }

  public async deteById(userId: number): Promise<string> {
    return await this.userRepository.deteById(userId)
      .then(() => `el usuario con id: ${userId} fue eliminado`)
      .catch((err) => err.message)
  }
}