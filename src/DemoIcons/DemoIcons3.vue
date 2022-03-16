<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import PlanA3 from './PlanA3.vue';
import PlanB3 from './PlanB3.vue';
import PlanC3 from './PlanC3.vue';
import PlanCDom from './PlanCDom';

const refDom = ref<HTMLDivElement>()

onMounted(() => {
  const dom = refDom.value
  if (dom) {

    PlanCDom(dom);
  }
})
</script>

<template>
  <div>
    <h1>图标演示 Vue3</h1>
    <h2>方案A：基于方案 B 改进，支持自动裁剪，推荐使用</h2>
    <PlanA3 />

    <h2>方案B：散图引用，推荐使用</h2>
    <PlanB3 />

    <h2>方案C：iconfont 方案，不推荐使用</h2>
    <PlanC3 />

    <div ref="refDom" />
  </div>
</template>
