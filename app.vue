<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt mastery class');
const description = ref(
  '짐코딩과 함께 Vue3 기초부터 실전, 활용! 그리고 Nuxt Framework가지 함께 배워봐요!',
);
// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });

useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 짐코딩 Vue & Nuxt 강의`
      : '짐코딩 Vue & Nuxt 강의';
  },
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png', // sns에 공유할때 보이는사진, public 하위 디렉토리에 위치해서 root에서 접근이 가능하다.
});
</script>
