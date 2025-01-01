<template>
    <div>
        <div v-if="authStore.isLoggedIn">
            Welcome, {{ authStore.customer.name }}
            {{ authStore.customer.id }}
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
</script>

<style scoped>

</style>