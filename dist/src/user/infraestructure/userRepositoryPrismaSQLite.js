"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryPrismaSQLite = void 0;
const index_1 = __importDefault(require("../../../prisma/index"));
class UserRepositoryPrismaSQLite {
    async createUser(user) {
        const newUser = await index_1.default.user.create({
            data: {
                name: user.name !== null ? user.name : undefined,
                email: user.email,
            }
        });
        return newUser !== null ? newUser : null;
    }
    async findById(id) {
        return await index_1.default.user.findUnique({
            where: {
                id: id
            }
        });
    }
    async getAllUsers() {
        return await index_1.default.user.findMany();
    }
    async deteById(userId) {
        return await index_1.default.user.delete({
            where: {
                id: userId
            }
        })
            .then(() => `el usuario de id: ${userId} fue eliminado`)
            .catch((err) => err.message);
    }
    async editById(userId, dataToModify) {
        const { email, name } = dataToModify;
        return await index_1.default.user.update({
            where: {
                id: userId,
            },
            data: {
                name,
                email,
            }
        })
            .then((user) => user)
            .catch((err) => err);
    }
}
exports.UserRepositoryPrismaSQLite = UserRepositoryPrismaSQLite;
//# sourceMappingURL=userRepositoryPrismaSQLite.js.map