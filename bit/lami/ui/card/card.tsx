import React from 'react';
import { Button } from '@acretelli/lamiui.ui.button';

import * as Styles from './styles';

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  /**
   * a text for the button.
   */
   buttonText: string
};

export function Card({ text, buttonText = "click here" }: CardProps) {
  return (
    <Styles.Wrapper>
      {text}
      <Button text={buttonText} />
    </Styles.Wrapper>
  );
}
