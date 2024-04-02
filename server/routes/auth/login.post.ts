import { getUserByEmail } from '~/server/model/user';

export default defineEventHandler(async (event) => {
  // post 요청에서 request의 body 데이터를 얻음
  const body = readBody<{ email: string; password: string }>(event);

  const { email, password } = await body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email address and password are required',
    });
  }

  const userWithPassword = getUserByEmail(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  const verifyed = verifyPassword(userWithPassword.password, password);

  if (!verifyed) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  // 전개구문
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutpassword } = userWithPassword;

  setCookie(event, '__user', JSON.stringify(userWithoutpassword));

  return {
    user: userWithoutpassword,
  };
});
