
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/ui/toggle';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    // Define your argTypes here
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    // Define your default props here
  },
};

// Add more stories as needed
