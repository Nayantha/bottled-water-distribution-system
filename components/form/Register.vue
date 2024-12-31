<script lang="ts" setup>
import * as yup from 'yup';
import {useField, useForm} from "vee-validate";

const schema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email format'),
    username: yup.string()
        .required('Username is required')
        .min(5, 'Username must be at least 5 characters'),
    name: yup.string().required('Name is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: yup.string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match')
})

const {handleSubmit, errors, resetForm} = useForm({
    validationSchema: schema,
    initialValues: {
        email: 'email@mail.com',
        password: '1234567890Az',
        name: 'name1',
        username: 'name1',
        confirmPassword: '1234567890Az'
    }
})

const {value: email} = useField('email')
const {value: username} = useField('username')
const {value: name} = useField('name')
const {value: password} = useField('password')
const {value: confirmPassword} = useField('confirmPassword')

</script>

<template>
    <form class="space-y-6">
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
            <label class="block text-sm font-medium leading-6 text-default-dark dark:text-default-light" for="username">
                Username
            </label>
            <div class="mt-2">
                <input
                    id="username"
                    v-model="username"
                    :class="{ 'border-red-500': errors.username }"
                    autocomplete="username"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="username"
                    required
                    type="text"
                />
            </div>
            <p v-if="errors.username" class="mt-1 text-sm text-red-600">{{ errors.username }}</p>
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
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit"
            >
                Sign in
            </button>
        </div>
    </form>
</template>