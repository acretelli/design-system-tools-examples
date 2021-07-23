import React from 'react';

import * as Styles from './styles';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Button({ text }: ButtonProps) {
  return (
    <Styles.Wrapper>
      {text}
    </Styles.Wrapper>
  );
}
