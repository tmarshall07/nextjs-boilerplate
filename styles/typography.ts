import styled, { css } from 'styled-components';
import { lighten, darken, transparentize } from 'polished';
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  layout,
  SpaceProps,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LayoutProps,
} from 'styled-system';

import colors from './colors';

type TypographyProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps & {
    inverted?: boolean;
  };

export const H1 = styled.h1<TypographyProps>`
  font-size: 3.2rem;
  color: ${darken(0.3, colors.grey)};

  margin: 0;

  ${(props) =>
    props.inverted &&
    css`
      color: ${transparentize(0, 'white')};
    `}

  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: 2.4rem;
  color: ${darken(0.2, colors.grey)};
  
  margin: 0;

  ${(props) =>
    props.inverted &&
    css`
      color: ${transparentize(0.05, 'white')};
    `}

  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: 1.8rem;
  color: ${darken(0.1, colors.grey)};

  margin: 0;

  ${(props) =>
    props.inverted &&
    css`
      color: ${transparentize(0.1, 'white')};
    `}

  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const H4 = styled.h4<TypographyProps>`
  font-size: 1.6rem;
  color: ${colors.grey};

  margin: 0;

  ${(props) =>
    props.inverted &&
    css`
      color: ${transparentize(0.15, 'white')};
    `}
  
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const P = styled.p<TypographyProps>`
  font-size: 1.6rem;
  line-height: 1.5em;
  color: ${lighten(0.05, colors.grey)};

  margin: 0;

  ${(props) =>
    props.inverted &&
    css`
      color: ${transparentize(0.2, 'white')};
    `}

  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export const Span = styled.span<TypographyProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${layout}
`;
