import type { CourseReturn } from '~/types/course';

// export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
// 강의보강내용 - useFetch의 제네릭사용
export const useCourse = async (
  courseSlug: string,
): Promise<Maybe<CourseReturn>> => {
  // const { courses } = await useCourses();
  // // const course = courses.find((course) => course.courseSlug === courseSlug);
  // const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  // const course = courses[index];
  // const prevCourse = index <= 0 ? null : courses[index - 1];
  // const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  // return {
  //   course,
  //   prevCourse,
  //   nextCourse,
  // };

  // 강의보강내용 - useFetch의 제네릭사용
  const { data, error } = await useFetch<CourseReturn>(
    `/api/courses/${courseSlug}`,
  );

  console.log('data :', data);
  // const { data, error } = await useFetch(`/api/courses/${courseSlug}`);

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  // 강의보강내용 - useFetch의 제네릭사용
  return data.value;
  // return data.value as CourseReturn;
};
