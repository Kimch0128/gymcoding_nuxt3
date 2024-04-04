import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string): Promise<T> => {
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      headers: useRequestHeaders(['cookie']),
    });

    if (error.value) {
      throw createError({
        ...error.value,
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`Getting value from cache from ${url}`);
  }

  return cached.value;
};

// export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
// 강의보강내용 - useFetch의 제네릭사용
// export const useCourse = async (
//   courseSlug: string,
// ): Promise<Maybe<CourseReturn>> => {
//   const url = `/api/courses/${courseSlug}`;
//   const cached = useSessionStorage<CourseReturn>(url, null, {
//     serializer: StorageSerializers.object,
//   });
//   if (!cached.value) {
//     const { data, error } = await useFetch<CourseReturn>(url);
//     if (error.value) {
//       throw createError({
//         ...error.value,
//       });
//     }
//     cached.value = data.value;
//   }
//   return cached.value;
// };
