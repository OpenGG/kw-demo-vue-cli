<template>
  <Icon :config="config" :darkMode="false" :size="size" :color="color" />
</template>
<script>
// @ts-nocheck
/* eslint-disable */

import Icon from "./Icon.vue";
export default {
  props: {
    config: {
      type: Array,
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
    Icon,
  },
};
</script>