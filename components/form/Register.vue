<script lang="ts" setup>

</script>

<template>
    <form class="space-y-6">
        <div>
            <label class="block text-sm font-medium leading-6 text-gray-900" for="email">Email address</label>
            <div class="mt-2">
                <input
                        id="email"
                        v-model=""
                        autocomplete="email"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="email"
                        required
                        type="email"
                />
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium leading-6 text-gray-900" for="password">Password</label>
            <div class="mt-2">
                <input
                        id="password"
                        v-model=""
                        autocomplete="current-password"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="password"
                        required
                        type="password"
                />
            </div>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input
                        id="remember-me"
                        v-model=""
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        name="remember-me"
                        type="checkbox"
                />
                <label class="ml-3 block text-sm text-gray-900" for="remember-me">Remember me</label>
            </div>

            <div class="text-sm">
                <a class="font-semibold text-indigo-600 hover:text-indigo-500" href="#">Forgot password?</a>
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