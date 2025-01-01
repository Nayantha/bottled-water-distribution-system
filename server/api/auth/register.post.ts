import { RegisterUserRequest, RegisterUserRequestInterface } from "~/models/RegisterUserRequest";

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
})