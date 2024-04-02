// import coursesData from '~/composables/coursesData';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = async (): Promise<CourseReturn> => {
  // const courses = coursesData.map((item) => ({
  //   ...item,
  //   rating: item.rating.toFixed(1),
  //   reviewsCount: item.reviewsCount.toLocaleString(),
  //   studentCount: item.studentCount.toLocaleString(),
  //   path: `/course/${item.courseSlug}`,
  // }));
  const { data, error } = await useFetch('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    // 타입단원
    courses: data.value as CourseWithPath[],
  };
};
