import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Digite aqui um título básico',
  description: 'Digite aqui uma descrição básica'
}

export const Default: Story = (args) => <Main {...args} />
