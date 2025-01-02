import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import Token from "~/types/Tokens";

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your-refresh-secret'
const JWT_EXPIRES_IN = '15m'  // Short lifetime for access token
const REFRESH_EXPIRES_IN = '7d'

export const generateJWTSecret = () => {
    return crypto.randomBytes(64).toString('hex');
}

export const generateTokens = (userId: string): Token => {
    const accessToken = jwt.sign(
        { userId, type: 'access' },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    )
    const refreshToken = jwt.sign(
        { userId, type: 'refresh' },
        REFRESH_SECRET,
        { expiresIn: REFRESH_EXPIRES_IN }
    )

    return new Token(accessToken, refreshToken)
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}