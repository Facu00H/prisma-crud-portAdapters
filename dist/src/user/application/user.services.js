"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../domain/user");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(name, email) {
        const user = new user_1.User(name, email);
        const newUser = await this.userRepository.createUser(user);
        if (newUser !== null)
            return newUser;
        return newUser !== null ? newUser : 'Error al crear el usuario';
    }
    async getAllUsers() {
        return await this.userRepository.getAllUsers();
    }
    async findById(userId) {
        const user = await this.userRepository.findById(userId);
        return user === null ? `el usuario con id: ${userId} no existe` : user;
    }
    async editById(userId, dataToModify) {
        return await this.userRepository.editById(userId, dataToModify);
    }
    async deteById(userId) {
        return await this.userRepository.deteById(userId)
            .then(() => `el usuario con id: ${userId} fue eliminado`)
            .catch((err) => err.message);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map