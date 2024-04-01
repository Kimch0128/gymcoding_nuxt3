import { getCourses } from '~/server/model/course';

// 강의 목록 불러오기
export default defineEventHandler(() => {
  const courses = getCourses();

  return courses;
});
