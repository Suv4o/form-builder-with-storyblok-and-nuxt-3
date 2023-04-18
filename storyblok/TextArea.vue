<script setup lang="ts">
const props = defineProps<{
    blok: {
        label: string;
        name: string;
        placeholder: string;
        rows: number;
        required: boolean;
        _uid: string;
    };
}>();
</script>

<template>
    <div>
        <label :for="blok._uid" class="block text-sm font-medium leading-6 text-gray-900">{{ blok.placeholder }}</label>
        <div class="mt-2">
            <textarea
                :id="blok._uid"
                :name="blok.name"
                :rows="blok.rows"
                :placeholder="blok.placeholder"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
        </div>
    </div>
</template>
