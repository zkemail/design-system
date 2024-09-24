
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '../components/ui/toaster';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    // Define your argTypes here
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    // Define your default props here
  },
};

// Add more stories as needed
