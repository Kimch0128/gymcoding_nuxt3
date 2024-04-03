import { getCoursesDetails } from '~/server/model/course';

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug') as string;

  console.log(courseSlug);
  const courseDetails = getCoursesDetails(courseSlug);

  // 보강강의 오류 수정
  if (!courseDetails.course) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    });
  }

  return courseDetails;
});
