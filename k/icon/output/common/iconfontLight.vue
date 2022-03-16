<template>
  <IconFont :icon="icon" :darkMode="false" :size="size" :color="color" />
</template>
<script>
// @ts-nocheck
/* eslint-disable */
import IconFont from "./iconfont.vue";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: '',
    },
    color: {
      type: String,
      default: '',
    }
  },
  components: {
    IconFont,
  },
};
</script>