<script setup lang="ts">
const props = defineProps<{
    blok: {
        body: any;
        _uid: string;
    };
}>();
</script>

<template>
    <div>
        <StoryblokComponent v-for="blok in props.blok.body" :key="props.blok._uid" :blok="blok" />
    </div>
</template>
