import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text  from './Text.comp';
import { TextPropsInterface } from './Text.comp';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
  },
} as Meta<typeof Text>;

const Template: Story<TextPropsInterface> = (args) => <Text {...args} />;

export const TextTemplate = Template.bind({});
TextTemplate.args = {
  variant: 'h3',
  variantColor: "txt-primary",
  bold: false,
  italic: false,
  children: 'Text goes here.'
};

export const Variant = Template.bind({});
Variant.args = {
  variant: 'md',
  variantColor: "txt-primary",
  children: 'Text goes here.'
};

export const BoldItalic = Template.bind({});
BoldItalic.args = {
  bold: true,
  italic: true,
  children: 'Text goes here.'
};