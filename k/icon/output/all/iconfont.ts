
// @ts-nocheck
/* eslint-disable */
import React from 'react'
import classnames from 'classnames'

type IKey = "common_base_like_24" | "common_base_not_used"

export interface IProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    icon: IKey
    darkMode?: Boolean
    size?: string | number
    color?: string
}

const iconStyle = (size?: string | number, color?: string, style?: any): any => {
    if (!size && !color) {
      return style
    }

    const res = {} as any

    if (size) {
      const s = typeof size === 'number' ? `${size}px` : size
      res.fontSize = s
    }

    if (color) {
      res.color = color
    }

    return Object.assign(res, style)
  }

const IconFont = ({
    className,
    icon,
    darkMode = true,
    size,
    color,
    style,
    ...props
}: IProps) => React.createElement(
    'span',
    {
        className: classnames(
            'iconfont-all',
            `icon-${icon}`,
            darkMode ? `icon-${icon}-dual` : '',
            className
        ),
        'aria-hidden': 'true',
        style: iconStyle(size, color,  style),
        ...props
    }
)

export default IconFont