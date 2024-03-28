<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="Login" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const handleLoginSuccess = async () => {
  // const { isAdmin } = useAuthUser();
  // useState
  // const isAdmin = useAdmin();

  // Pinia
  const { isAdmin } = storeToRefs(useAuthStore());
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};

definePageMeta({
  middleware: ['guest-only'],
});
</script>
