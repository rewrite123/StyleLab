import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input  from './Input.comp';
import { InputPropsInterface } from './Input.comp';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
  },
} as Meta<typeof Input>;

const Template: Story<InputPropsInterface> = (args) => <Input {...args} />;

export const InputTemplate = Template.bind({});
InputTemplate.args = {
  variant: "primary",
  shadow: 1,
  size: 'md',
  disabled: false
};

export const Variant = Template.bind({});
Variant.args = {
  variant: "secondary"
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: 1
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  shadow: 1,
  disabled: true
};

export const Size = Template.bind({});
Size.args = {
  variant: "primary",
  shadow: 1,
  size: 'sm'
};