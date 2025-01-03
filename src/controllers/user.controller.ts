import { NextFunction, Request, Response } from "express";
import { checkReferralService } from "../services/user/check-referral.service";
import { updateUserService } from "../services/user/update-user.service";
import { getUserService } from "../services/user/get-user.service";
import { deleteUserService } from "../services/user/delete-user.service";

export const checkReferralController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.referralCode as string;
    const result = await checkReferralService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const profilePicture = files?.profilePicture?.[0];

    const result = await updateUserService(
      req.body,
      Number(id),
      profilePicture
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await getUserService(parseInt(id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(parseInt(id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
