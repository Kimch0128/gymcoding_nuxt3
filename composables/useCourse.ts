import type { CourseReturn } from '~/types/course';

// export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
// 강의보강내용 - useFetch의 제네릭사용
export const useCourse = (courseSlug: string): Promise<Maybe<CourseReturn>> => {
  useFetchWithCache<CourseReturn>(`/api/courses/${courseSlug}`);
};
