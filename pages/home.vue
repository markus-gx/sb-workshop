<template>
  <div>
    <StoryblokModules :modules="state?.story?.content?.body"/>
  </div>
</template>

<script setup>
import StoryblokModules from "../components/organisms/StoryblokModules";

const api = useStoryblokApi()
const {data} = await useAsyncData('home', async () => api.get('cdn/stories/home', {version: 'draft'}))

const state = reactive({story: data.value.data.story})

onMounted(() => {
  useStoryblokBridge(state.story.id, (story) => (state.story = story))
})
</script>
