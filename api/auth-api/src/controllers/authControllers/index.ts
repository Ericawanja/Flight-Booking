import { RequestHandler, Request, Response } from "express";
import { v4 as uid } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { exec } from "../../helpers/db_connect";
import path from "path";
import dotenv from "dotenv";
import { User } from "../../models";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

interface ExtendedRequest extends Request {
  body: {
    firstname: string;
    lastname: string;
    mobile_number: string;
    email: string;
    password: string;
    residence: string;
  };
  info?: string;
}

export const register = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    const { firstname, lastname, email, password, residence, mobile_number } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await exec("addOrUpdateUser", {
      id,
      firstname,
      lastname,
      residence,
      mobile_number,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "user registered" });
  } catch (error: any) {
    console.log(error.originalError.info.message);
    res.status(500).json({ error: error.originalError.info.message });
  }
};

export const login = async (req: ExtendedRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: User[] = await exec("getUser", { email });

    if (user.length === 0)
      return res.status(404).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user[0].password);
    if (!valid) {
      return res.status(404).json({ error: "Wrong credentials" });
    }

    const payload = user.map((item) => {
      const { password, ...rest } = item;

      return rest;
    });

    const token = jwt.sign(payload[0], process.env.SECRET_KEY as string, {
      expiresIn: "240000",
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error });
  }
};
