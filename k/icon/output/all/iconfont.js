// @ts-nocheck
/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
const iconStyle = (size, color, style) => {
    if (!size && !color) {
        return style;
    }
    const res = {};
    if (size) {
        const s = typeof size === 'number' ? `${size}px` : size;
        res.fontSize = s;
    }
    if (color) {
        res.color = color;
    }
    return Object.assign(res, style);
};
const IconFont = ({ className, icon, darkMode = true, size, color, style, ...props }) => React.createElement('span', {
    className: classnames('iconfont-all', `icon-${icon}`, darkMode ? `icon-${icon}-dual` : '', className),
    'aria-hidden': 'true',
    style: iconStyle(size, color, style),
    ...props
});
export default IconFont;