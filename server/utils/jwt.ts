import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '6h';

export const generateToken = (userId: string) => {
    return jwt.sign(
        {
            userId: userId,
            iat: Date.now(),
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    )
}