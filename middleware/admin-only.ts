export default defineNuxtRouteMiddleware(() => {
  // useState
  // const isAdmin = useAdmin();
  // const isAuthenticated = useAuthenticated();

  // Pinia
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});
