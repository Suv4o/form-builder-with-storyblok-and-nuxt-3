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
        <div></div>
        <div></div>
    </div>
</template>
