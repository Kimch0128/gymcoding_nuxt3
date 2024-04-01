export default defineLazyEventHandler(() => {
  throw createError({
    status: 404,
    statusMessage: 'Not Found',
  });
});
