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
        <StoryblokComponent v-for="blok in props.blok.body" :key="props.blok.body._uid" :blok="blok" />
    </div>
</template>
