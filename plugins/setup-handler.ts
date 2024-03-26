export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    console.log('vue:setup Hook!!');
  });
});
