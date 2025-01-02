import { useAuthStore } from "~/stores/auth";

const user = useAuthStore();
const isAuthenticated = user.isLoggedIn;

export default defineNuxtRouteMiddleware(() => {
    if (!isAuthenticated) {
        return navigateTo('/')
    }
})