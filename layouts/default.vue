<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> {{ appConfig.title }} </q-toolbar-title>
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat :label="$t('home')" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat :label="$t('about')" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat :label="$t('admin')" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn
          stretch
          flat
          :label="$t('youtube')"
          no-caps
          @click="moveYoutube"
        />
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps label="English">
          <q-list padding dense>
            <q-item v-close-popup clickable :to="localePath('/', 'en')">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable :to="switchLocalePath('ko')">
              <q-item-section>
                <q-item-label>한국어</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <!-- <ClientOnly> -->
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn
            stretch
            flat
            :label="$t('login')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <!-- <NuxtLink v-else v-slot="{ navigate }" custom to="/">
          <q-btn
            stretch
            flat
            :label="$t('logout')"
            no-caps
            @click="signOut()"
          />
        </NuxtLink> -->
        <q-btn
          v-else
          stretch
          flat
          :label="$t('logout')"
          no-caps
          @click="signOut()"
        />
        <!-- </ClientOnly> -->
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <!-- <ClientOnly> -->
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">
        {{ authUser }}
      </q-banner>
      <!-- </ClientOnly> -->
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
// useState
// const authUser = useAuthUser();
// const isAuthenticated = useAuthenticated();
// const { signOut } = useAuth();

// Pinia
const authStore = useAuthStore();
const { user: authUser, isAuthenticated } = storeToRefs(authStore);
const { signOut } = authStore;

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
  await navigateTo('https://www.youtube.com/', {
    external: true,
    open: {
      target: '_blank',
    },
  });
};

// const { locale } = useI18n();

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

// interface Languages {
//   name: string;
//   code: string;
// }

// const languages = ref<Languages[]>([
//   { name: 'English', code: 'en' },
//   { name: '한국어', code: 'ko' },
// ]);

// const { locale } = useI18n();

// const selectedlanguageName = computed(
//   () => languages.value.find((lang) => lang.code === locale.value)?.name,
// );

// watch(locale, (val) => {
//   useCookie('locale').value = val;
// });

const appConfig = useAppConfig();

console.log('appConfig', appConfig);
</script>
