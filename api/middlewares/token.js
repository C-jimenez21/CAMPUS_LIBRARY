//token functions
import { SignJWT, jwtVerify } from "jose";
import { connection } from "../config/atlas.js";
import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "JWT");

const generateToken = async (payload) => {
    console.log({ "datauser": payload });
    //crecion del token
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('5h')
        .sign(encoder.encode(env.JWT_KEY));
    return jwtConstructor
}

const validateToken = async (req, res, next) => {
    try {
        const { token } = req.cookies
        console.log(token);
        if (!token) { return res.status(403).send({ message: "Not token, authorization denied" }) }
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_KEY)
        );
        let db = await connection()
        let colecction = db.collection('User')
        const userFound = await colecction.findOne({ email: jwtData.payload.email })
        console.log(userFound);
        if (!userFound) { return res.status(403).json({ error: ['Invalid Token'] }) }
        req.user = userFound;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: ['Invalid Token'] })
        return false; 
    }
}


export {
    generateToken,
    validateToken
}