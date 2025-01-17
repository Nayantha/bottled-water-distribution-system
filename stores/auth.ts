import type { Customer } from "~/types/Customer";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        customer: null as Customer | null,
    }),

    actions: {
        clearStore() {
            this.customer = null
        },
        setCustomer(newCustomer: Customer) {
            this.customer = newCustomer;
        }
    },

    getters: {
        isLoggedIn: (state) => !!state.customer,
        customerData: (state) => state.customer as Customer
    },

    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    }
})