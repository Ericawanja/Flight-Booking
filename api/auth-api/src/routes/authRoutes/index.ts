import express, { Router, Request, Response } from "express";
import { login, register } from "../../controllers/authControllers";

const authRouter = Router();
authRouter.post("/register",  register);

authRouter.post("/login", login );



export default authRouter