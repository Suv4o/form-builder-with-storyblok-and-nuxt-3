<script setup lang="ts">
const props = defineProps<{
    blok: {
        label: string;
        name: string;
        placeholder: string;
        type: string;
        required: boolean;
        _uid: string;
    };
}>();
</script>

<template>
    <div>
        <label :for="blok._uid" class="block text-sm font-medium leading-6 text-gray-900">{{ blok.label }}</label>
        <div class="mt-2">
            <input
                :type="blok.type"
                :name="blok.name"
                :id="blok._uid"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                :placeholder="blok.placeholder"
            />
        </div>
    </div>
</template>
