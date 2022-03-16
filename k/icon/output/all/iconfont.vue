<template>
  <span
    aria-hidden="true"
    :class="[
      'iconfont-all',
      `icon-${icon}`,
      darkMode ? `icon-${icon}-dual` : '',
    ]"
    :style="[size ? { fontSize: size } : null, color ? { color } : null]"
  >
    <slot />
  </span>
</template>

<script>
// @ts-nocheck
/* eslint-disable */

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    darkMode: {
      type: Boolean,
      default: true,
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
};
</script>