<script lang="ts">
// 第一步：引入图标
import '@ks/kw/icon/output/all/iconfont.css';
import IconFont from '@ks/kw/icon/output/all/iconfont.vue';
import IconFontLight from '@ks/kw/icon/output/all/iconfontLight.vue';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2';

/* 方案C：iconfont 方案，不推荐使用 */
export default {
  color_base_black_1: colors.color_base_black_1,
  components: {
    IconFont,
    IconFontLight
  }
};
</script>

<template>
  <div>
    <!--
   /*
    * icon:
    *   必填
    *   图标名称
    * size:
    *   * 可选
    *   图标尺寸
    *   可以在 app.css 中统一设好 .svgfont{ width: 40px; height: 40px; } 规则
    *   也可以调用组建时传入 size
    * color:
    *   * 可选
    *   颜色
    *   手动设置 color ，会覆盖掉图标本身颜色
    */
  -->
    <IconFont
      icon="common_base_like_24"
      :size="40"
      class="hello"
    />
    <IconFont
      icon="common_base_like_24_png"
      :size="40"
      class="hello"
    />
    <IconFontLight
      icon="common_base_like_24"
      :size="30"
      :color="$options.color_base_black_1"
      class="hello"
    />
    <IconFontLight
      icon="common_base_like_24_png"
      :size="30"
      :color="$options.color_base_black_1"
      class="hello"
    />
    <IconFontLight
      icon="common_base_like_24"
      class="hello1"
    />
    <IconFontLight
      icon="common_base_like_24_png"
      class="hello1"
    />
  </div>
</template>


<style lang="less" scoped>
@import "@ks/kwcolor/color/output/all/index.less";
.hello {
  outline: 1px solid @color_base_black_1;
  margin-right: 20px;
}
</style>

<style lang="less" scoped>
.hello1 {
  outline: 1px solid var(--color_base_black_1);
  margin-right: 20px;
}
</style>