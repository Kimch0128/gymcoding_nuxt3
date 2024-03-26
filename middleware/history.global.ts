export default defineNuxtRouteMiddleware((to) => {
  console.log('global middelweare to :', to.path);
});
