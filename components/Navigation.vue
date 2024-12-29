<template>
    <header>
        <nav aria-label="Global"
             class="flex items-center justify-between p-6 lg:px-8 z-50 z-50 relative dark:bg-default-dark">
            <!--LOGO-->
            <div class="flex lg:flex-1">
                <a class="-m-1.5 p-1.5" href="#">
                    <span class="sr-only">Your Company</span>
                    <img alt="" class="h-8 w-auto"
                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"/>
                </a>
            </div>
            <!--Mobile Menu Icon-->
            <div class="flex lg:hidden gap-4">
                <ThemeSwitch/>
                <button
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-default-light dark:text-default-dark"
                    type="button" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" class="size-6"/>
                </button>
            </div>
            <!--Nav Items-->
            <div class="hidden lg:flex lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="text-sm/6 font-semibold text-default-light dark:text-default-dark hover:text-default-hover">
                    {{ item.name }}
                </a>
            </div>
            <!--login & signup-->
            <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                <ThemeSwitch/>
                <a class="text-sm/6 font-semibold text-default-light dark:text-default-dark hover:text-default-hover"
                   href="#">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        <!--Mobile Menu-->
        <Dialog :open="mobileMenuOpen" class="lg:hidden" @close="mobileMenuOpen = false">
            <div class="fixed inset-0 z-50"/>
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-default-light dark:bg-default-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a class="-m-1.5 p-1.5" href="#">
                        <span class="sr-only">Your Company</span>
                        <img alt="" class="h-8 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"/>
                    </a>
                    <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button"
                            @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" class="size-6"/>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-default-light dark:text-default-dark hover:bg-default-hover-light dark:hover:bg-default-hover-dark">{{
                                    item.name
                                }}</a>
                        </div>
                        <div class="py-6">
                            <a class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-default-light dark:text-default-dark dark:hover:bg-default-hover-dark"
                               href="/login">Log in</a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Dialog, DialogPanel,} from '@headlessui/vue';
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline';
import ThemeSwitch from "~/components/button/ThemeSwitch.vue";

const navigation = [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
]

const mobileMenuOpen = ref(false)

</script>

<style scoped>

</style>