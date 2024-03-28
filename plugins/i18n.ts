import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    // locale: useDefaultLocale().value,//쿠키적용전
    locale: useCookie('locale').value || useDefaultLocale().value, // 쿠키적용후
    messages: {
      en: {
        home: 'Home',
        about: 'About',
        youtube: 'Youtube',
        admin: 'Admin',
        login: 'Login',
        logout: 'Logout',
      },
      ko: {
        home: '홈',
        about: '어바웃',
        youtube: '유튜브',
        admin: '관리자',
        login: '로그인',
        logout: '로그아웃',
      },
    },
  });

  vueApp.use(i18n);
});
