import styled, { css } from 'styled-components';

import { Props } from './index';

export const Container = styled.div<Props>`
  ${({ backgroundColor, color }) => css`
    background-color: ${backgroundColor};
    color: ${color};

    padding: 16px;
    border-radius: 8px;
  `}
`