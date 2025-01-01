import { User } from "~/models/User";

export const useAuthStore = defineStore(
    'userStore',
    () => {
        const token = ref<string | null>(null)
        const user = ref<User | null>(null)
        const isAuthenticated = ref<boolean>(false)

        const setUser = (newUser: User) => {
            user.value = newUser;
            return true
        }

        const updateUser = (updatedUser: Partial<User>) => {
            if (!user.value) return
            Object.assign(user.value, updatedUser)
        }

        // const getRole = computed(() => user?.value?.role || '');

        const setToken = (accessToken: string) => {
            token.value = accessToken
        }

        const setAuthenticated = (user: User) => {
            isAuthenticated.value = user !== null && user !== undefined
        }

        const cleanUser = () => {
            isAuthenticated.value = false
            user.value = null
            token.value = ''
        }

        const getToken = computed(() => token.value)

        return {
            isAuthenticated,
            setUser,
            setToken,
            user,
            location,
            token,
            setAuthenticated,
            cleanUser,
            // getRole,
            updateUser,
            getToken,
        }
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.localStorage()
        }
    },
)