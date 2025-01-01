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
exports.updateCouponService = void 0;
const prisma_1 = require("../../lib/prisma");
const updateCouponService = (body, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = body;
        const existingCoupon = yield prisma_1.prisma.coupon.findUnique({
            where: { id },
        });
        if (!existingCoupon) {
            throw new Error("Coupon not found");
        }
        if (code && code !== existingCoupon.code) {
            const couponWithCode = yield prisma_1.prisma.coupon.findFirst({
                where: { code },
            });
            if (couponWithCode) {
                throw new Error("Coupon with this code already exists");
            }
        }
        return yield prisma_1.prisma.coupon.update({
            where: { id },
            data: Object.assign({}, body),
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCouponService = updateCouponService;