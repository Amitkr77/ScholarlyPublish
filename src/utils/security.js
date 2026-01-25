import bcrypt from "bcrypt";
import crypto from "crypto";

export const hashPassword = (password) =>
  bcrypt.hash(password, 12);

export const comparePassword = (password, hash) =>
  bcrypt.compare(password, hash);

export const generateOTP = () =>
  crypto.randomInt(100000, 999999).toString();
