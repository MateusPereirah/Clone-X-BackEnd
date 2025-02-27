import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { findUserBySlug } from "../services/user";
import { ExtendedRequest } from "../types/extended-request";

export const createJWT = (slug: string) => {
    return jwt.sign({ slug }, process.env.JWT_SECRET as string);
}

export const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    //verifica se foi enviado um token
    if (!authHeader) return res.status(401).json({ error: "Acesso negado" });

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        async (error, decoded: any) => {

            //Verfica se o token é válido
            if (error) {
                return res.status(401).json({ error: "Acesso negado" });
            }

            const user = await findUserBySlug(decoded.slug);

            //verifica se o usuário existe
            if (!user) {
                return res.status(201).json({ error: "Acesso Negado" });
            }

            req.userSlug = user.slug;
            next();
        }
    );

}