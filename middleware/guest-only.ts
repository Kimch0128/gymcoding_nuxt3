export default defineNuxtRouteMiddleware(() => {
  // useState
  // const isAuthenticated = useAuthenticated();

  // Pinia
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (isAuthenticated.value) {
    if (process.server) return navigateTo('/'); // 서버에서 수행
    return abortNavigation(); // 클라이언트에서 수행
  }
});
