import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Seguridad {

    public verificarToken(req:Request, res:Response,next:NextFunction){
        if (!req.headers.authorization) {
            res.status(401).json({res:"No Tiene Credenciales"});
        } else {
            try {
                const miLlavePrivada = String(process.env.CLAVE_SECRETA);
                const elToken = req.headers.authorization?.split(" ")[1] as string;
                const misDatos= jwt.verify(elToken,miLlavePrivada)
                req.body.datosUsuario= misDatos
                next()
            } catch (error) {
                res.status(401).json({res:"Credenciales Invalidas"});                
            }
        }
    }

}

const seguridad = new Seguridad();

export default seguridad;