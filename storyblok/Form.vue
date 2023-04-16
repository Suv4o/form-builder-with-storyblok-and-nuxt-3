<script setup lang="ts">
const props = defineProps<{
    blok: {
        columns: any;
        _uid: string;
    };
}>();
</script>

<template>
    <form>
        <StoryblokComponent v-for="blok in props.blok.columns" :key="props.blok.columns._uid" :blok="blok" />
    </form>
</template>
