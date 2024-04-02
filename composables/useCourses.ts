// import coursesData from '~/composables/coursesData';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  // courses: CourseWithPath[];
  // 강의보강 - useFetch의 제네릭 사용
  courses: Maybe<CourseReturn[]>;
}

export const useCourses = async (): Promise<CourseReturn> => {
  // const courses = coursesData.map((item) => ({
  //   ...item,
  //   rating: item.rating.toFixed(1),
  //   reviewsCount: item.reviewsCount.toLocaleString(),
  //   studentCount: item.studentCount.toLocaleString(),
  //   path: `/course/${item.courseSlug}`,
  // }));
  // 강의보강 - useFetch의 제네릭 사용
  const { data, error } = await useFetch<CourseReturn>('/api/courses');
  // const { data, error } = await useFetch('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    // 타입단원
    // 강의보강 - useFetch의 제네릭 사용
    courses: data.value,
    // courses: data.value as CourseWithPath[],
  };
};
