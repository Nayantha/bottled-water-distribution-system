<template>
    <button @click="toggleTheme">
        <Icon :icon="colorMode.preference === 'dark' ? 'radix-icons:moon' : 'radix-icons:sun'"
              class="dark:text-white hover:text-default-hover"/>
    </button>
</template>

<script lang="ts" setup>
import {Icon} from '@iconify/vue';

const colorMode = useColorMode();
const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>

</style>
