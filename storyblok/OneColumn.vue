<script setup lang="ts">
const props = defineProps<{
    blok: {
        body: any;
        _uid: string;
    };
}>();
</script>

<template>
    <div class="grid grid-cols-1 gap-4 mb-4">
        <div class="bg-blue-500">01</div>
    </div>
</template>
