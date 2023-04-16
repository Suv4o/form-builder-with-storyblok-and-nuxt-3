<script setup lang="ts">
const { fetchStoriesBySlug } = useStories();
const story = await fetchStoriesBySlug(`/home`);
</script>

<template>
    <div class="container mx-auto">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>
