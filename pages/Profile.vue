<template>
    <div>
        <div v-if="isLoggedIn">
            Welcome, {{ customer?.name }} {{ customer?.id }}
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const { customer, isLoggedIn } = storeToRefs(authStore)
</script>

<style scoped>

</style>