<template>
    <div class="flex flex-row items-center justify-center">
        <button @click="toggleTheme">
            <Icon :icon="colorMode.preference === 'dark' ? 'radix-icons:moon' : 'radix-icons:sun'"/>
        </button>
    </div>
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
