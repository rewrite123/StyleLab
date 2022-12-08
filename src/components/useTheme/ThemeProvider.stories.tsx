import React from 'react';
import { Story, Meta } from '@storybook/react';



import Card  from './Card.comp';
import { CardPropsInterface } from './Card.comp';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
  },
} as Meta<typeof Card>;

const Template: Story<CardPropsInterface> = (args) => <Card {...args} />;

export const CardTemplate = Template.bind({});
CardTemplate.args = {
  shadow: 1,
  children: <h1>Card component</h1>
};