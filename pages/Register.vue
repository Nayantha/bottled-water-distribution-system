<!-- pages/register.vue -->
<template>
    <div class="flex min-h-full">
        <div class="flex flex-1 flex-col justify-center">
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <img alt="Your Company" class="mx-auto h-10 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"/>
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Create an Account</h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Already a member?
                            <a class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                               href="/login">Login</a>
                        </p>
                    </div>

                    <div class="mt-10">
                        <!--form-->
                        <RegisterForm/>

                        <div class="mt-10">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <!--line-->
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <!--OAuth-->
                            <OAuth/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Background image section -->
        <div class="relative hidden w-0 flex-1 lg:block">
            <img alt="" class="absolute inset-0 h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import OAuth from "~/components/form/OAuth.vue";
import RegisterForm from "~/components/form/Register.vue";
</script>

<style scoped>

</style>