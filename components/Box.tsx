import styled from 'styled-components/macro';
import {
  space,
  layout,
  color,
  shadow,
  flexbox,
  position,
  SpaceProps,
  LayoutProps,
  ColorProps,
  ShadowProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';

type BoxProps = SpaceProps & LayoutProps & ColorProps & ShadowProps & PositionProps;
export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${shadow}
  ${position}
`;

type FlexProps = BoxProps & FlexboxProps;
export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
