import express, { Router, Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  res.status(200).json({ message: "_______setting up the auth" });
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "_______setting up the auth" });
};
