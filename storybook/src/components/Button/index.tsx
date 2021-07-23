import React from 'react';

import { Container } from  './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
}


export const Button: React.FC<Props> = ({ 
  children,
  backgroundColor = '#7159c1',
  color = '#fff'
}) => {
  return <Container backgroundColor={backgroundColor} color={color}>{children}</Container>
}