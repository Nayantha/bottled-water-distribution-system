import { RegisterUserRequest, RegisterUserRequestInterface } from "~/models/RegisterUserRequest";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export default defineEventHandler(async (event) => {
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

})