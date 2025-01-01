<script lang="ts" setup>
import * as yup from 'yup';
import { useField, useForm } from "vee-validate";
import { RegisterUserRequest } from "~/models/RegisterUserRequest";
import { ref } from "vue";
import type { ApiErrorInterface } from "~/models/APIError";
import { APIError } from "~/models/APIError";
import { useAuthStore } from "~/stores/user";
import { Customer, CustomerInterface } from "~/models/Customer";

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    address: yup.string()
        .required('address is required')
        .min(5, 'Username must be at least 5 characters'),
    phone: yup.string().required('phone number is required.'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: yup.string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match')
});

const authStore = useAuthStore();

const { handleSubmit, errors, resetForm } = useForm({
    validationSchema: schema,
    initialValues: {
        email: 'mail@mail.com',
        password: '1234567890AZ',
        name: 'my name',
        address: '271, bogus street, downtown',
        phone: '+94012365498',
        confirmPassword: '1234567890AZ'
    }
});

const loading = ref(false);
const success = ref(false);
const error = ref('');

const { value: email } = useField('email');
const { value: name } = useField('name');
const { value: address } = useField('address');
const { value: phone } = useField('phone');
const { value: confirmPassword } = useField('confirmPassword');
const { value: password } = useField('password');

const onSubmit = handleSubmit(async (values) => {

    try {
        loading.value = true
        error.value = ''

        const registerUserRequest = RegisterUserRequest.constructFromJson(values);

        const response = await fetch('/api/customer/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerUserRequest)
        })

        if (!response.ok) {
            const data = await response.json() as ApiErrorInterface;

            const errorData = new APIError(data.message, data.statusCode, data.url);

            error.value = errorData.message || 'Registration failed';

            if (response.status === 409) {
                error.value = 'An account with this email already exists';
            }

            return;
        }

        const data = await response.json();

        const user = Customer.constructFromJson(data as CustomerInterface);

        // setup pinia store data
        authStore.setUser(user);

        success.value = true;
        // Reset form on success
        resetForm()
        // redirect or success message
        await navigateTo('/')

    } catch (err: any) {
        error.value = err.message
    } finally {
        loading.value = false
    }
});

</script>

<template>
    <form class="space-y-6" @submit="onSubmit">

        <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
            {{ error }}
        </div>

        <div v-if="success" class="bg-green-50 text-green-600 p-4 rounded-lg mb-4">
            Registering successfully completed. Redirecting to home page....
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="email">
                Email address
            </label>
            <div class="mt-2">
                <input
                    id="email"
                    v-model="email"
                    :class="{ 'border-red-500': errors.email }"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="email"
                    required
                    type="email"
                />
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="address">
                Address
            </label>
            <div class="mt-2">
                <input
                    id="address"
                    v-model="address"
                    :class="{ 'border-red-500': errors.address }"
                    autocomplete="address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="address"
                    required
                    type="text"
                />
            </div>
            <p v-if="errors.address" class="mt-1 text-sm text-red-600">{{ errors.address }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="phone">
                Phone Number
            </label>
            <div class="mt-2">
                <input
                    id="phone"
                    v-model="phone"
                    :class="{ 'border-red-500': errors.phone }"
                    autocomplete="phone"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="phone"
                    required
                    type="text"
                />
            </div>
            <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="name">
                Name
            </label>
            <div class="mt-2">
                <input
                    id="name"
                    v-model="name"
                    :class="{ 'border-red-500': errors.name }"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="name"
                    required
                    type="text"
                />
            </div>
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="password">
                Password
            </label>
            <div class="mt-2">
                <input
                    id="password"
                    v-model="password"
                    :class="{ 'border-red-500': errors.password }"
                    autocomplete="current-password"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="password"
                    required
                    type="password"
                />
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light"
                   for="confirmPassword">
                Re-type Password
            </label>
            <div class="mt-2">
                <input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :class="{ 'border-red-500': errors.confirmPassword }"
                    autocomplete="current-password"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="confirmPassword"
                    required
                    type="password"
                />
            </div>
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input
                    id="remember-me"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    name="remember-me"
                    type="checkbox"
                />
                <label class="ml-3 block text-sm text-default-dark dark:text-default-light" for="remember-me">
                    Remember me
                </label>
            </div>

        </div>

        <div>
            <button
                :disabled="loading"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
            >
                <span v-if="loading">Processing...</span>
                <span v-else>Sign in</span>
            </button>
        </div>
    </form>
</template>