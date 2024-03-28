import type { UserWithoutPassword } from '~/types/user';

// 임시임
// const authUser = ref<Maybe<UserWithoutPassword>>(null);

export const useAuthUser = () =>
  useState<Maybe<UserWithoutPassword>>('user', () => null);

// export const useAuthUser = () => {
//   // const authUser = ref<Maybe<UserWithoutPassword>>(null); // 여기에 있으면 컴포넌트 단위로 상태를 공유하는 상태로 컴포넌트마다 authUser를 새로 생성함
//   const isAuthenticated = computed(() => !!authUser.value);
//   const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));

//   return {
//     authUser,
//     isAuthenticated,
//     isAdmin,
//   };
// };
