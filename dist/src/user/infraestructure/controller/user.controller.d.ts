import { Controller } from "tsoa";
import { User } from "../../domain/user";
export declare class UserController extends Controller {
    private readonly UserService;
    constructor();
    createUser(requestBody: {
        name: string;
        email: string;
    }): Promise<User | string>;
}
