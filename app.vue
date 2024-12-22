<template>
    <NuxtLayout>
        <Navigation/>
        <NuxtPage />
    </NuxtLayout>
</template>
<script lang="ts" setup>
import Navigation from "~/components/Navigation.vue";

useHead({
    title: "Home Page"
})
</script>