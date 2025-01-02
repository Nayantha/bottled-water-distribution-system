import { generateTokens, verifyToken } from '~/server/utils/jwt';

export default defineEventHandler(async (event) => {
    const { refreshToken } = await readBody(event);

    const decodedToken = verifyToken(refreshToken);

    // @ts-ignore
    if (!decodedToken || decodedToken.type !== 'refresh') {
        throw createError({
            statusCode: 401,
            message: 'Invalid refresh token'
        })
    }

    // Generate new token pair
    // @ts-ignore
    return generateTokens(decodedToken.userId);

});