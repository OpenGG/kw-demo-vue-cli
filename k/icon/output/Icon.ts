// @ts-nocheck
/* eslint-disable */
import React, { useEffect } from 'react'
import classnames from 'classnames'

const png = 1
const svg = 0

// type, id, contentLight, colorLight, colorDark
type IconConfigSVG = [typeof png, string, string, string, string]
// type, lightUrl, darkUrl
type IconConfigPng = [typeof svg, string, string]

type Icon = (number | string)[] // IconConfigSVG | IconConfigPng

type IconPngBaseProps = React.HTMLProps<HTMLSpanElement> & React.HTMLProps<HTMLImageElement>

interface IconPngProps extends Omit<IconPngBaseProps, 'size'> {
  config: Icon
  darkMode?: boolean
  size?: string | number
  color?: string
}

interface IconSVGProps extends React.SVGProps<SVGSVGElement> {
  config: Icon
  darkMode?: boolean
  className?: string
  size?: string | number
  color?: string
}

export type IconProps = IconSVGProps & IconPngProps

const xmlns = 'http://www.w3.org/2000/svg'

let rootSVG: HTMLElement
let rootSheet: CSSStyleSheet
let rootRuleMedia: CSSMediaRule
const getRootRules = (): [CSSStyleSheet, number, CSSMediaRule, number] => {
  if (!rootSheet) {
    const rootStyle = document.createElement('style')
    rootStyle.textContent = '.kid-root-svg{position:absolute;width:0px;height:0px;overflow:hidden}.svgfont{fill:currentColor}@media(prefers-color-scheme:dark){}';
    (document.head || document.documentElement).appendChild(rootStyle)
    rootSheet = rootStyle.sheet as CSSStyleSheet
    rootRuleMedia = rootSheet.cssRules[rootSheet.cssRules.length - 1] as CSSMediaRule
  }

  return [rootSheet, rootSheet.cssRules.length - 1, rootRuleMedia, rootRuleMedia.cssRules.length]
}
const getRootSVG = () => {
  if (rootSVG) {
    return rootSVG
  }
  rootSVG = document.createElement('svg')
  rootSVG.className = 'kid-root-svg'
  rootSVG.setAttribute('aria-hidden', 'true');
  (document.body || document.documentElement).appendChild(rootSVG)
  return rootSVG
}

const injectSymbol = (id: string, config: IconConfigSVG) => {
  if (document.getElementById(id)) {
    return
  }

  const root = getRootSVG()
  const [sheet, sheetInsertAt, ruleMedia, ruleMediaInsertAt] = getRootRules()

  const [, , content, colorLight, colorDark] = config

  const el = document.createElementNS(xmlns, 'symbol')
  el.setAttribute('viewBox', '0 0 1024 1024')
  el.id = id
  el.innerHTML = content
  root.appendChild(el)

  sheet.insertRule(`.${id}{color:${colorLight}}`, sheetInsertAt)

  if (colorDark) {
    ruleMedia.insertRule(`.${id}-dual{color:${colorDark}}`, ruleMediaInsertAt)
  }
}

const iconStyle = (size?: string | number, color?: string, style?: any): any => {
  if (!size && !color) {
    return style
  }

  const res = {} as any

  if (size) {
    const s = typeof size === 'number' ? `${size}px` : size
    res.width = s
    res.height = s
  }

  if (color) {
    res.color = color
  }

  return Object.assign(res, style)
}

const IconSVG = ({
  config,
  darkMode = true,
  className,
  size,
  color,
  style,
  ...props
}: IconSVGProps) => {
  const configSVG = config as IconConfigSVG
  const [, k, , , colorDark] = configSVG
  const id = `svg-${k}`

  useEffect(() => {
    injectSymbol(id, configSVG)
  }, [id, configSVG])

  return React.createElement(
    'svg', {
    xmlns,
    className: classnames('svgfont', id, (darkMode && colorDark) ? `${id}-dual` : '', className),
    'aria-hidden': 'true',
    style: iconStyle(size, color, style),
    ...props
  },
    React.createElement(
      'use',
      { xlinkHref: `#${id}` }
    )
  )
}

const IconPNG = ({
  config,
  darkMode = true,
  className,
  size,
  color,
  style,
  ...props
}: IconPngProps) => {
  const [, light, dark] = config as IconConfigPng

  const imgProps = props as any

  return React.createElement(
    'picture',
    null,
    (darkMode && dark) ? React.createElement(
      'source',
      {
        srcSet: dark,
        media: '(prefers-color-scheme:dark)',
      },
    ) : null,
    React.createElement(
      'img',
      {
        className: classnames('svgfont', className),
        'aria-hidden': 'true',
        src: light || dark,
        style: iconStyle(size, color, style),
        ...imgProps
      },
    ),
  )
}

const Icon = (props: IconProps) => {
  const [type] = props.config

  if (type === svg) {
    return React.createElement(IconSVG, props)
  }

  return React.createElement(IconPNG, props)
}

export default Icon