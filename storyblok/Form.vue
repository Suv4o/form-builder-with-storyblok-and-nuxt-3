<script setup lang="ts">
const props = defineProps<{
    blok: {
        columns: any;
        _uid: string;
    };
}>();
</script>

<template>
    <div>
        <StoryblokComponent v-for="blok in props.blok.columns" :key="props.blok.columns._uid" :blok="blok" />
    </div>
</template>
