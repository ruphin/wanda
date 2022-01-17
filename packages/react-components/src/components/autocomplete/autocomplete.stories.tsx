import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Autocomplete } from './autocomplete'
import { Chip, List } from '../..'

export default {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    invalid: false
  }
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <>
    <Autocomplete
      onChange={(value) => console.log(value)}
      style={{ maxWidth: '300px' }}
      icon="magnifying-glass"
      {...args}
    >
      {[...Array(10)].map((_, i) => (
        <Autocomplete.Option
          icon="compass"
          value={`${i}`}
          key={`key-${Date.now() + i}`}
          decoration={(i === 4) && <Chip dimension="small">Decoration</Chip>}
        >
          Option
          {' '}
          {i}
        </Autocomplete.Option>
      ))}
    </Autocomplete>
    <List>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non laboriosam facere? </li>
      <li>Eum, assumenda ad sunt dolorum aspernatur quia sit! Mollitia eligendi accusantium alias non enim quaerat quidem fugiat architecto.</li>
    </List>
  </>
)

export const Default = Template.bind({})
