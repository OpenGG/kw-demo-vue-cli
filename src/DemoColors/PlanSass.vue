<template>
  <div class="demo">sass</div>
</template>

<style scoped lang="sass">
@import '@ks/kwcolor/color/output/all/index.css'
@import '@ks/kwcolor/color/output/all/index.sass'
.demo
  color: $color_base_black_1
  outline: 1px solid var(--color_base_black_1)
</style>
