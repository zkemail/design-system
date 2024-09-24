import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style of the badge',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1 h-4 w-4"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
      New
    </Badge>
  ),
};

export const CustomColor: Story = {
  args: {
    className: 'bg-purple-500 hover:bg-purple-600 text-white',
    children: 'Custom Color',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a badge with a very long text to see how it wraps',
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Badge 1</Badge>
      <Badge variant="secondary">Badge 2</Badge>
      <Badge variant="destructive">Badge 3</Badge>
      <Badge variant="outline">Badge 4</Badge>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Badge
      variant="outline"
      className="cursor-pointer hover:bg-secondary"
      onClick={() => alert('Badge clicked!')}
    >
      Click me
    </Badge>
  ),
};