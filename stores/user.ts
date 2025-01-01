import type { Customer } from "~/models/Customer";

export const useAuthStore = defineStore('user', {
    state: () => ({
        customer: null as Customer | null,
    }),

    actions: {
        clearStore() {
            this.customer = null
        },
        setUser(newCustomer: Customer) {
            this.customer = newCustomer;
        }
    },

    getters: {
        isLoggedIn: (state) => !!state.customer
    },

    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    }
})