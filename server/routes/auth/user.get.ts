export default defineEventHandler((event) => {
  // 미들웨어에서 가져옴
  const user = event.context.user;
  // const user = getUserFromEvent(event);

  if (!user) {
    return { user: null };
  }

  return { user };
  // const userJsonString = getCookie(event, '__user');

  // console.log('userJsonString', userJsonString);

  // if (!userJsonString) {
  //   return { user: null };
  // }

  // const user = JSON.parse(userJsonString);
  // return {
  //   user,
  // };
});
