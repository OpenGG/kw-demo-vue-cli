// 引入图标
import '@ks/kw/icon/output/all/iconfont.css';

export default (parent: HTMLElement) => {
  const div = document.createElement('div');

  div.innerHTML = `
<style>
.hello-world {
  outline: 1px solid var(--color_base_black_1)
}
</style>
<h2>方案C：iconfont 方案，不推荐使用</h2>
<p>没使用 React/vue，直接渲染 span </p>
<span
  aria-hidden="true"
  class="
    hello-world
    iconfont-all
    icon-common_base_like_24
    icon-common_base_like_24-dual
  "
  style="font-size: 40px; margin-right: 20px;"
></span><span
aria-hidden="true"
class="
  hello-world
  iconfont-all
  icon-common_base_like_24_png
  icon-common_base_like_24_png-dual
"
style="font-size: 40px; margin-right: 20px;"
></span><span
aria-hidden="true"
class="
  hello-world
  iconfont-all
  icon-common_base_like_24
  icon-common_base_like_24-dual
"
style="font-size: 30px; color: var(--color_base_black_1); margin-right: 20px;"
></span><span
aria-hidden="true"
class="
  hello-world
  iconfont-all
  icon-common_base_like_24_png
  icon-common_base_like_24_png-dual
"
style="font-size: 30px; color: var(--color_base_black_1); margin-right: 20px;"
></span><span
aria-hidden="true"
class="
  hello-world
  iconfont-all
  icon-common_base_like_24
"
style="margin-right: 20px;"
></span><span
aria-hidden="true"
class="
  hello-world
  iconfont-all
  icon-common_base_like_24_png
"
></span>`;

  parent.appendChild(div);
};
