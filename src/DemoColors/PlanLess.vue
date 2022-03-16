<template>
  <div class="demo">
    Less
  </div>
</template>

<style scoped lang="less">
@import '@ks/kwcolor/color/output/all/index.css';
@import '@ks/kwcolor/color/output/all/index.less';
.demo {
  color: @color_base_black_1;
  outline: 1px solid var(--color_base_black_1);
}
</style>
