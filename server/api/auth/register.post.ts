import { RegisterUserRequest, RegisterUserRequestInterface } from "~/models/RegisterUserRequest";
import bcrypt from "bcrypt";
import prisma from "~/utils/prisma";

const SALT_ROUNDS = 10;

export default defineEventHandler(async (event) => {
    try {
        // Parse the request body
        const body = await readBody(event);
        const registerUser = RegisterUserRequest.constructFromJson(body as RegisterUserRequestInterface);

        // validate inputs
        const validityResults = registerUser.validateInputs()

        if (!validityResults.valid) {
            throw createError({
                statusCode: 400,
                message: validityResults.message
            })
        }

        // Hash password with salt
        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        const hashedPassword = await bcrypt.hash(body.password, salt)

        // Create user
        const user = await prisma.user.create({
            data: {
                email: registerUser.email,
                password: hashedPassword,
                name: registerUser.name,
                salt: salt,
                username: registerUser.username
            }
        });

        // return user

    } catch (error: any) {

        throw createError({
            statusCode: 500,
            message: 'An error occurred during registration.'
        })
    }
})