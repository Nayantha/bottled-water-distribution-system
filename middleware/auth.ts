import { useAuthStore } from "~/stores/user";

const user = useAuthStore();
const isAuthenticated = user.isLoggedIn;

export default defineNuxtRouteMiddleware(() => {
    if (!isAuthenticated) {
        return navigateTo('/')
    }
})