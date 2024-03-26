<template>
  <div class="flex flex-center column window-height text-center">
    <div class="text-h1">{{ error.statusCode }}</div>
    <p class="q-my-lg text-subtitle1">{{ error.message }}</p>
    <div class="text-h6">error props</div>
    <p class="text-subtitle2">
      {{ JSON.stringify(error) }}
    </p>

    <div class="text-h6">use Error</div>
    <p class="text-subtitle2">
      {{ JSON.stringify(globalError) }}
    </p>

    <q-btn
      label="Go Home"
      size="lg"
      color="primary"
      no-caps
      @click="handleError"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const globalError = useError(); // nuxt 에서 전역 에러 객체를 반환하느 컴포저블 함수

// const handleError = () => clearError();//페이지 이동없이 전역error객체만 초기화
const handleError = () => clearError({ redirect: '/' }); // 지정한 경로로 이동하고, 전역 error객체 초기화
</script>

<style scoped></style>
