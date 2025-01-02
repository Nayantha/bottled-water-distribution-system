import { RegisterUserRequest, RegisterUserRequestInterface } from "~/types/RegisterUserRequest";
import bcrypt from "bcrypt";
import prisma from "~/utils/prisma";
import { Customer, CustomerInterface } from "~/types/Customer";

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
        // @ts-ignore
        const dbCustomer = await prisma.customer.create({
            data: {
                email: registerUser.email,
                password: hashedPassword,
                name: registerUser.name,
                salt: salt,
                address: registerUser.address,
                phone: registerUser.phone
            }
        });

        return Customer.constructFromJson(dbCustomer as CustomerInterface)

    } catch (error: any) {

        // prisma errors
        if (error.code === 'P2002') {
            throw createError({
                statusCode: 400,
                message: 'Email already exists.'
            })
        }

        // create errors handling
        if (error.statusCode === 400) {
            throw createError({
                statusCode: 400,
                message: error.message
            })
        }

        throw createError({
            statusCode: 500,
            message: 'An error occurred during registration.'
        })
    }
})