import {PrismaClient} from '@prisma/client'
import {RegisterUserRequest, RegisterUserRequestInterface} from "~/models/RegisterUserRequest";

const prisma = new PrismaClient()
const SALT_ROUNDS = 10

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const registerUser = RegisterUserRequest.constructFromJson(body as RegisterUserRequestInterface);

    const validityResults = registerUser.validateInputs();

    if (validityResults.valid) {
        throw createError({
            statusCode: 400,
            message: validityResults.message
        })
    }

})