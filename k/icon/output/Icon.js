// @ts-nocheck
/* eslint-disable */
import React, { useEffect } from 'react';
import classnames from 'classnames';
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
    return [rootSheet, rootSheet.cssRules.length - 1, rootRuleMedia, rootRuleMedia.cssRules.length];
};
const getRootSVG = () => {
    if (rootSVG) {
        return rootSVG;
    }
    rootSVG = document.createElement('svg');
    rootSVG.className = 'kid-root-svg';
    rootSVG.setAttribute('aria-hidden', 'true');
    (document.body || document.documentElement).appendChild(rootSVG);
    return rootSVG;
};
const injectSymbol = (id, config) => {
    if (document.getElementById(id)) {
        return;
    }
    const root = getRootSVG();
    const [sheet, sheetInsertAt, ruleMedia, ruleMediaInsertAt] = getRootRules();
    const [, , content, colorLight, colorDark] = config;
    const el = document.createElementNS(xmlns, 'symbol');
    el.setAttribute('viewBox', '0 0 1024 1024');
    el.id = id;
    el.innerHTML = content;
    root.appendChild(el);
    sheet.insertRule(`.${id}{color:${colorLight}}`, sheetInsertAt);
    if (colorDark) {
        ruleMedia.insertRule(`.${id}-dual{color:${colorDark}}`, ruleMediaInsertAt);
    }
};
const iconStyle = (size, color, style) => {
    if (!size && !color) {
        return style;
    }
    const res = {};
    if (size) {
        const s = typeof size === 'number' ? `${size}px` : size;
        res.width = s;
        res.height = s;
    }
    if (color) {
        res.color = color;
    }
    return Object.assign(res, style);
};
const IconSVG = ({ config, darkMode = true, className, size, color, style, ...props }) => {
    const configSVG = config;
    const [, k, , , colorDark] = configSVG;
    const id = `svg-${k}`;
    useEffect(() => {
        injectSymbol(id, configSVG);
    }, [id, configSVG]);
    return React.createElement('svg', {
        xmlns,
        className: classnames('svgfont', id, (darkMode && colorDark) ? `${id}-dual` : '', className),
        'aria-hidden': 'true',
        style: iconStyle(size, color, style),
        ...props
    }, React.createElement('use', { xlinkHref: `#${id}` }));
};
const IconPNG = ({ config, darkMode = true, className, size, color, style, ...props }) => {
    const [, light, dark] = config;
    const imgProps = props;
    return React.createElement('picture', null, (darkMode && dark) ? React.createElement('source', {
        srcSet: dark,
        media: '(prefers-color-scheme:dark)',
    }) : null, React.createElement('img', {
        className: classnames('svgfont', className),
        'aria-hidden': 'true',
        src: light || dark,
        style: iconStyle(size, color, style),
        ...imgProps
    }));
};
const Icon = (props) => {
    const [type] = props.config;
    if (type === svg) {
        return React.createElement(IconSVG, props);
    }
    return React.createElement(IconPNG, props);
};
export default Icon;