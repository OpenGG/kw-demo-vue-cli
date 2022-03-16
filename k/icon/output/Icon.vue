<template>
  <svg
    v-if="type === $options.svg"
    xmlns="http://www.w3.org/2000/svg"
    class="svgfont"
    :class="[id, darkMode ? `${id}-dual` : '']"
    aria-hidden="true"
    focusable="false"
    :style="[
      size ? {
        width: size,
        height: size
      } : null,
      color ? {
        color
      } : null
    ]"
  >
    <use :xlink:href="`#${id}`" />
  </svg>
  <img
    v-else
    class="svgfont"
    :class="id"
    :style="[
      size ? {
        width: size,
        height: size
      } : null,
      color ? {
        color
      } : null
    ]"
    :src="p"
    aria-hidden="true"
    alt=""
  >
</template>

<script>
// @ts-nocheck

const png = 1;
const svg = 0;
const xmlns = 'http://www.w3.org/2000/svg';
let rootSVG;
let rootSheet;
let rootRuleMedia;
const getRootRules = () => {
  if (!rootSheet) {
    const rootStyle = document.createElement('style');
    rootStyle.textContent = '.kid-root-svg{position:absolute;width:0px;height:0px;overflow:hidden}.svgfont{fill:currentColor}@media(prefers-color-scheme:dark){}';
    (document.head || document.documentElement).appendChild(rootStyle);
    rootSheet = rootStyle.sheet;
    rootRuleMedia = rootSheet.cssRules[rootSheet.cssRules.length - 1];
  }
  return [
    rootSheet,
    rootSheet.cssRules.length - 1,
    rootRuleMedia,
    rootRuleMedia.cssRules.length
  ];
};
const getRootSVG = () => {
  if (rootSVG) {
    return rootSVG;
  }
  rootSVG = document.createElement('svg');
  rootSVG.className = 'kid-root-svg';
  rootSVG.setAttribute(
    'aria-hidden',
    'true'
  );
  (document.body || document.documentElement).appendChild(rootSVG);
  return rootSVG;
};
const injectSymbol = (id, config) => {
  if (document.getElementById(id)) {
    return;
  }
  const root = getRootSVG();
  const [
    sheet,
    sheetInsertAt,
    ruleMedia,
    ruleMediaInsertAt
  ] = getRootRules();
  const [
    ,
    ,
    content,
    colorLight,
    colorDark
  ] = config;
  const el = document.createElementNS(
    xmlns,
    'symbol'
  );
  el.setAttribute(
    'viewBox',
    '0 0 1024 1024'
  );
  el.id = id;
  el.innerHTML = content;
  root.appendChild(el);
  sheet.insertRule(
    `.${id}{color:${colorLight}}`,
    sheetInsertAt
  );
  if (colorDark) {
    ruleMedia.insertRule(
      `.${id}-dual{color:${colorDark}}`,
      ruleMediaInsertAt
    );
  }
};

let mediaQueryList;
let isDark = false;
try {
  mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  isDark = mediaQueryList.matches;
} catch (error) {
  // Ignore
}

const attach = (onChange) => {
  if (mediaQueryList) {
    mediaQueryList.addEventListener(
      'change',
      onChange,
      false
    );
  }
};

const detach = (onChange) => {
  if (mediaQueryList) {
    mediaQueryList.removeEventListener(
      'change',
      onChange,
      false
    );
  }
};

export default {
  name: 'KidIcon',

  svg,

  props: {
    config: {
      type: Array,
      required: true
    },

    darkMode: {
      type: Boolean,
      default: true
    },

    size: {
      type: [
        String,
        Number
      ],
      default: ''
    },

    color: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      p: this.url()
    };
  },

  computed: {
    id () {
      const [, k] = this.config;
      return `svg-${k}`;
    },

    type () {
      const [type] = this.config;
      return type;
    }
  },

  mounted () {
    if (this.type === svg) {
      injectSymbol(
        this.id,
        this.config
      );
    } else if (this.darkMode) {
      attach(this.onChange);
    }
  },

  unmounted () {
    detach(this.onChange);
  },

  methods: {
    url () {
      const [
        ,
        light,
        dark
      ] = this.config;

      const d = dark || light;
      const l = light || dark;

      return isDark && this.darkMode
        ? d
        : l;
    },

    onChange (e) {
      isDark = e.matches;

      this.p = this.url();
    }
  }

};
</script>
