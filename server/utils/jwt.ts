import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const JWT_SECRET = crypto.randomBytes(64).toString('hex');
const JWT_EXPIRES_IN = '6h';

export const generateJWTSecret = () => {
    return crypto.randomBytes(64).toString('hex');
}

export const generateToken = (userId: string) => {
    return jwt.sign(
        {
            userId: userId,
            iat: Date.now(),
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}