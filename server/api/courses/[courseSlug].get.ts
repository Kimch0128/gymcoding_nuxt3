import { getCoursesDetails } from '~/server/model/course';

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug') as string;
  const courseDetails = getCoursesDetails(courseSlug);

  if (!courseSlug.course) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    });
  }

  return courseDetails;
});
