import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { pool } from "../db";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!!",
      });
    }
    const decode = jwt.verify(token as string, "asfdfawerwafsaf") as JwtPayload;

    const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      decode.email,
    ]);

    if (user.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found!!"
      });
    }
    req.user = decode;
    next()
  } catch (error) {}
};
