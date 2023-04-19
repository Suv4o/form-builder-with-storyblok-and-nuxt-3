<script setup lang="ts">
interface Options {
    _uid: string;
    name: string;
    value: string;
}

const props = defineProps<{
    blok: {
        label: string;
        name: string;
        options: Options[];
        selectedValue: string;
        placeholder: string;
        required: boolean;
        _uid: string;
    };
}>();
</script>

<template>
    <div>
        <label :for="blok._uid" class="block text-sm font-medium leading-6 text-gray-900">{{ blok.label }}</label>
        <select
            :id="blok._uid"
            :name="blok.name"
            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6"
        >
            <option v-if="blok.placeholder" value="" disabled :selected="!blok.selectedValue">
                {{ blok.placeholder }}
            </option>
            <option
                v-for="option in blok.options"
                :value="option.value"
                :selected="blok.selectedValue === option.value"
                :key="option._uid"
            >
                {{ option.name }}
            </option>
        </select>
    </div>
</template>
