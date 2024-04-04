<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
      <div class="q-gutter-y-sm q-mt-md">
        <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
        <div>
          counter: {{ counter }}
          <q-btn
            label="counter"
            color="primary"
            dense
            no-caps
            @click="counter++"
          />
        </div>
        <div>
          counter: {{ sameCounter }}
          <q-btn
            label="counter"
            color="primary"
            dense
            no-caps
            @click="sameCounter++"
          />
        </div>
        <div>
          <q-btn label="clear" @click="clearNuxtState()" />
        </div>
        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useCountStore</div>
          <div>counter: {{ count }}</div>
          <div>counter: {{ doubleCount }}</div>
          <div>
            <q-btn label="Increment" @click="countStore.increment" />
          </div>
        </div>
        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">
            local vs session storage
          </div>
          <q-input v-model="localStorageColor" outlined />
          <q-input v-model="sessionStorageColor" outlined />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');

// Pinia
const countStore = useCountStore();
// 구조분해 할당
const { count, doubleCount } = storeToRefs(countStore);

const localStorageColor = useLocalStorage('color-key', null);
const sessionStorageColor = useSessionStorage('color-key', null);
</script>
