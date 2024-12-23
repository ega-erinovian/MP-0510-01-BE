"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserService = void 0;
const prisma_1 = require("../../lib/prisma");
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the existing voucher by ID
        const user = yield prisma_1.prisma.user.findUnique({
            where: { id },
            include: {
                referralsUsed: true,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.getUserService = getUserService;
