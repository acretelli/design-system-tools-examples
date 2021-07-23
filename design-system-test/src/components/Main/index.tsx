import { Card } from '@acretelli/lamiui.ui.card'
import { Button } from 'lami-ui-test-storybook'

import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Title>Design System</S.Title>
      <S.Description>Examples of the use of Bit and Storybook</S.Description>

      <S.Row>
        <S.Column>
          <S.SubTitle>Bit.dev</S.SubTitle>
          <Card text="An example of a card" buttonText="click here" />
        </S.Column>
        <S.Column>
          <S.SubTitle>Storybook</S.SubTitle>
          <Button>Click me</Button>
        </S.Column>
      </S.Row>
    </S.Wrapper>
  )
}

export default Main
