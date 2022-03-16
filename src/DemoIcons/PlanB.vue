<script lang="ts">
// 第一步：引入图标
import Icon from '@ks/kw/icon/output/Icon.vue';
import IconLight from '@ks/kw/icon/output/IconLight.vue';
import common_base_like_24 from '@ks/kw/icon/output/common/base/common_base_like_24/index';
import common_base_like_24_png from '@ks/kw/icon/output/common/base/common_base_like_24_png/index';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2';

export default {
  common_base_like_24,
  common_base_like_24_png,
  color_base_black_1: colors.color_base_black_1,
  components: { Icon, IconLight }
};
</script>

<template>
  <div>
    <!--
    config:
      传入具体的图标模块，这样可以做到仅打包所使用的图标，避免冗余

    size:
      图标尺寸
      可以在 app.css 中统一设好 .svgfont{} 规则
      也可以调用组建时传入 size

    color:
      手动设置 color ，会覆盖掉图标本身颜色
  -->
    <Icon
      :config="$options.common_base_like_24"
      :size="40"
      class="hello"
    />

    <Icon
      :config="$options.common_base_like_24_png"
      :size="40"
      class="hello"
    />

    <IconLight
      :config="$options.common_base_like_24"
      :size="30"
      :color="$options.color_base_black_1"
      class="hello"
    />

    <IconLight
      :config="$options.common_base_like_24_png"
      :size="30"
      :color="$options.color_base_black_1"
      class="hello"
    />

    <IconLight
      :config="$options.common_base_like_24"
      class="hello1"
    />

    <IconLight
      :config="$options.common_base_like_24_png"
      class="hello1"
    />
  </div>
</template>

<style lang="less" scoped>
@import '@ks/kwcolor/color/output/all/index.less';
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