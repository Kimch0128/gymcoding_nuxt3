<template>
  <div>
    <!-- <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description"
    /></Head> -->
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
          <q-space />
          <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        {{ course?.content }}
      </p>
      <q-separator class="q-mb-lg" />
      <q-form class="q-gutter-y-md">
        <!-- <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="completed = !completed"
        /> -->
        <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="toggleComplete"
        />
        <q-input
          v-model="memo"
          type="textarea"
          outlined
          dense
          placeholder="메모를 작성해주세요."
          rows="3"
          autogrow
        />
      </q-form>
      <template #footer>
        <ClientOnly>
          <q-btn
            v-if="prevCourse"
            label="이전 강의"
            color="primary"
            unelevated
            @click="movePage(prevCourse.path)"
          />
          <q-btn
            label="쿼리추가"
            color="dark"
            unelevated
            :to="{ path: $route.path, query: { timestamp: Date.now() } }"
          />
          <q-space />
          <q-btn
            v-if="nextCourse"
            label="다음 강의"
            color="primary"
            unelevated
            @click="movePage(nextCourse.path)"
          />
        </ClientOnly>
        <!--timestamp로 인해 하이드레이션 오류를 방지-->
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
// 강의보강 - useFetch의 제네릭 사용, null 인경우 구조분해 할당이 불가능 하기때문에 빈객체일수도 있는걸로
const { course, prevCourse, nextCourse } = (await useCourse(courseSlug)) || {};

// const title = computed(() => course?.title);
// const description = computed(() => course?.content);

useSeoMeta({
  title: () => course?.title || '',
  description: () => course?.content || '',
});

// 랜더링 이후에 체크
// Route Validation으로 변경
// if (!course) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Course not found',
//     // fatal: true, // 클라이언트에서 발생한 비 치명적 오류도 치명적 오류로 해석하게 만듬
//     data: {
//       // 사용자 정의 필드
//       myCustomField: true,
//     },
//   });
// }

console.log('[courseSlug].vue 컴포넌트 setup hook');

// 컴파일완료 후 setup이 아닌 전역 namespace에 존재함
definePageMeta({
  key: (route) => route.fullPath,
  pageType: '',
  // keepalive: true,
  alias: ['/lecture/:courseSlug'],
  // layout: 'same-layout',
  // validate: (route) => {
  //   // 렌더링 이전에 체크
  //   const courseSlug = route.params.courseSlug as string;
  //   const { course } = useCourse(courseSlug);

  //   if (!course) {
  //     // return false;
  //     throw createError({
  //       statusCode: 404,
  //       statusMessage: 'Course not found',
  //       // fatal: true, // 클라이언트에서 발생한 비 치명적 오류도 치명적 오류로 해석하게 만듬
  //       data: {
  //         // 사용자 정의 필드
  //         myCustomField: true,
  //       },
  //     });
  //   }
  //   return true;
  // },
  middleware: async (route) => {
    const courseSlug = route.params.courseSlug as string;
    // 강의보강 - useFetch의 제네릭 사용, null 인경우 구조분해 할당이 불가능 하기때문에 빈객체일수도 있는걸로
    const { course } = (await useCourse(courseSlug)) || {};

    if (!course) {
      // return navigateTo('/');
      return abortNavigation(
        createError({
          statusCode: 404,
          statusMessage: 'Course not found',
          fatal: true, // 클라이언트에서 발생한 비 치명적 오류도 치명적 오류로 해석하게 만듬
        }),
      );
    }
  },
});

const memo = ref('');
const completed = ref(false);

const movePage = async (path: string) => {
  await navigateTo(path);
};

const toggleComplete = () => {
  // $fetch('/api/error');
  // showError('에러가 발생했습니다.');
  completed.value = !completed.value;
  throw createError('에러가 발생했습니다.');
};
</script>

<style scoped></style>
