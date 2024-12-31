import {PrismaClient} from '@prisma/client'
import {RegisterUserRequest, RegisterUserRequestInterface} from "~/models/RegisterUserRequest";

const prisma = new PrismaClient()
const SALT_ROUNDS = 10

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const registerUser = RegisterUserRequest.constructFromJson(body as RegisterUserRequestInterface);

    if (registerUser.validateInputs()) {
        throw createError({
            statusCode: 400,
            message: 'All fields are required'
        })
    }

})