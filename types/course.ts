export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

export interface CourseWithPath
  extends Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'> {
  rating: string;
  reviewsCount: string;
  studentCount: string;
  path: string;
}

export interface CourseReturn {
  course: Maybe<CourseWithPath>; // Course | null | undefinde
  prevCourse: Maybe<CourseWithPath>; // Course | null | undefinde
  nextCourse: Maybe<CourseWithPath>; // Course | null | undefinde
}
