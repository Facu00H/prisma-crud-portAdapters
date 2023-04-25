import { UserService } from "../../application/user.services";
import { Controller, Post, Route, Body } from "tsoa";
import { UserRepositoryPrismaSQLite } from "../userRepositoryPrismaSQLite";
import { User } from "../../domain/user";

@Route('user')
export class UserController extends Controller {
  private readonly UserService: UserService;

  constructor() {
    super();
    const UserServicePrisma = new UserRepositoryPrismaSQLite();
    this.UserService = new UserService(UserServicePrisma)
  }

  @Post('/create')
  public async createUser(
    @Body() requestBody: {name: string, email: string } ): Promise<User | string> {
      const {name, email} = requestBody;
      return await this.UserService.createUser(name, email)
  }
}