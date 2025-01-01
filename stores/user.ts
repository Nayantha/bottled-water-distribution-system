import type { User } from "~/models/User";

export const useAuthStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
    }),

    actions: {
        clearUser() {
            this.user = null
        },
        setUser(newUser: User) {
            this.user = newUser;
        }
    },

    getters: {
        isLoggedIn: (state) => !!state.user
    },

    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    }
})