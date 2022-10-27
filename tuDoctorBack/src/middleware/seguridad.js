const { request, response, nextFunction } = require('express');
const { verify } = require('jsonwebtoken');

function verificarToken(req = request, res = response, next = nextFunction){
    try{
        const token = req.header("Authorization");
        if (!token) {
            res.status(401).json({res:"No Tiene Credenciales"});
        } else {
            if(verify(token,String(process.env.CLAVE_SECRETA))){
                next();
            }else{
                res.status(401).json({res:"Credenciales Invalidas"});                
            }
        }
    }catch(error){
        res.status(400).json(`Error: ${error}`)
    }
}

module.exports = {verificarToken}
