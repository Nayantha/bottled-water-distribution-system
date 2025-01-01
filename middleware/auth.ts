import { storeToRefs } from 'pinia'
import { useAuthStore } from "~/stores/user";

const user = useAuthStore();
const { isAuthenticated } = storeToRefs(user);

export default defineNuxtRouteMiddleware(() => {
    if (!isAuthenticated.value) {
        return navigateTo('/')
    }
})