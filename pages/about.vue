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
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');
</script>
