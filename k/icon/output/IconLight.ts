// @ts-nocheck
/* eslint-disable */
import React from 'react'

// @ts-ignore: forced import ts
import Icon, { IconProps } from './Icon.ts'

const IconLight = (props: IconProps) => React.createElement(
  Icon,
  {
    darkMode: false,
    ...props
  }
)

export default IconLight