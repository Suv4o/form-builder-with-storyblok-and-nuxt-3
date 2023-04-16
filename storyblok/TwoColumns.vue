<script setup lang="ts">
const props = defineProps<{
    blok: {
        body: any;
        _uid: string;
    };
}>();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-blue-500">01</div>
        <div class="bg-red-500">02</div>
    </div>
</template>
