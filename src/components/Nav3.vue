<script lang="ts" setup>
import { IAnchor } from '../types';

const props = defineProps<{
  anchors: IAnchor[],
  active: string
}>()

defineEmits<{
  (e: 'change', id: string): void
}>()
</script>

<template>
  <div class="nav">
    <div
      v-for="anchor in props.anchors"
      :key="anchor.id"
      class="nav-tab"
      :class="{
        'nav-tab-active': active === anchor.id
      }"
      @click="$emit('change', anchor.id)"
    >
      {{ anchor.text }}
    </div>
  </div>
</template>


<style scoped>
.nav {
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.nav-tab {
  flex: 0 1 auto;
  padding: 10px 5px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
}

.nav-tab-active {
  border-color: #099;
}
</style>>