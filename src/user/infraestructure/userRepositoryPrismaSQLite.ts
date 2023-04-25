import prisma from '../../../prisma/index'
import { IEditUser } from '../domain/interfaces/IUser';
import { IUserRepository } from "../domain/interfaces/IUserRepository";
import { User } from "../domain/user";

export class UserRepositoryPrismaSQLite implements IUserRepository {
  public async createUser(user: User): Promise<User | null> {
      const newUser: User | null = await prisma.user.create({
        data: {
          name: user.name !== null ? user.name : undefined,
          email: user.email,
        }
      })

      return newUser !== null ? newUser : null
  }

  public async findById(id: number): Promise<User | null> {
      return await prisma.user.findUnique({
        where: {
          id: id
        }
      })
  }

  public async getAllUsers(): Promise<User[]> {
      return await prisma.user.findMany();
  }

  public async deteById(userId: number): Promise<string> {
      return await prisma.user.delete({
        where: {
          id: userId
        }
      })
        .then(() => `el usuario de id: ${userId} fue eliminado`)
        .catch((err: Error | any) => err.message)
  }

  public async editById(userId: number, dataToModify: IEditUser): Promise<User> {
      const { email, name } = dataToModify
      return await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name,
          email,
        }
      })
      .then((user: any) => user)
      .catch((err: Error | any) => err)
  }
}