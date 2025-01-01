import { RegisterUserRequest, RegisterUserRequestInterface } from "~/models/RegisterUserRequest";

export default defineEventHandler(async (event) => {
    // Parse the request body
    const body = await readBody(event);
    const registerUser = RegisterUserRequest.constructFromJson(body as RegisterUserRequestInterface);

})