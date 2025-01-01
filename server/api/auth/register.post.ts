import { RegisterUserRequest, RegisterUserRequestInterface } from "~/models/RegisterUserRequest";

export default defineEventHandler(async (event) => {
    // Parse and validate request body
    const body = await readBody(event);
    const registerUser = RegisterUserRequest.constructFromJson(body as RegisterUserRequestInterface);

})