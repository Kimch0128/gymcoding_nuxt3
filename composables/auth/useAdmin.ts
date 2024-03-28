import { useAuthUser } from './useAuthUser';

export const useAdmin = () => {
  const authUser = useAuthUser();
  return computed(() => {
    if (!authUser.value) {
      // 로그인 하지 않은 상태
      return false;
    }
    return authUser.value.roles.includes('ADMIN');
  });
};
