<script lang="ts" setup>
useHead({
  titleTemplate: (title) => (title ? `${title} · meeows` : "meeows collective"),
});

useSeoMeta({
  title: "meeows collective",
  description:
    "a collective for dreamers and builders, supporting independent projects.",
  ogTitle: "meeows collective",
  ogDescription:
    "a collective for dreamers and builders, supporting independent projects.",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
