import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button  from './Button.comp';
import { ButtonPropsInterface } from './Button.comp';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: Story<ButtonPropsInterface> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  shadow: 1,
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  shadow: 1,
  children: 'Secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  shadow: 1,
  children: 'Disabled',
  disabled: true
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  shadow: 1,
  children: 'Small',
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "primary",
  shadow: 1,
  children: 'Medium',
  size: 'md'
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  shadow: 1,
  children: 'Large',
  size: 'lg'
};