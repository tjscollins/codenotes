import { css, SimpleInterpolation } from 'styled-components'
import theme from './theme'

export const getEmSize = (size: number) => size / theme.dimensions.baseFontSize;

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  sm: (
    styles: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media (min-width: 576px) {
      ${css(styles, ...interpolations)};
    }
  `,
  md: (
    styles: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media (min-width: 768px) {
      ${css(styles, ...interpolations)};
    }
  `,
  lg: (
    styles: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media (min-width: 992px) {
      ${css(styles, ...interpolations)};
    }
  `,
  xl: (
    styles: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media (min-width: 1200px) {
      ${css(styles, ...interpolations)};
    }
  `
}

// event wrapper
export const onEvent = (
  styles: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  &:hover,
  &:focus {
    ${css(styles, ...interpolations)}
  }
`

export const customTransition = (transition: string, fn = 'ease', delay = 0 ) =>
    `transition-delay:  ${delay}s;
    transition-timing-function: ${fn};
    transition: ${transition};`;
