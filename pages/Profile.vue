<template>
    <div>
        <div v-if="authStore.user.value!!">Loading...</div>
        <div v-else>
            Welcome, {{ authStore.user.name }}
            {{ authStore.user.id }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/user";

const authStore = useAuthStore();
</script>

<style scoped>

</style>