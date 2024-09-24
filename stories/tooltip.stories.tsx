
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/ui/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    // Define your argTypes here
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    // Define your default props here
  },
};

// Add more stories as needed
