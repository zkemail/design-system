import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="space-y-4">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-40 items-center">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator {...args} className="mx-4 h-full" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Tailwind CSS</h4>
        <p className="text-sm text-muted-foreground">A utility-first CSS framework.</p>
      </div>
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    orientation: 'horizontal',
    className: 'bg-red-500 h-1',
  },
  render: (args) => (
    <div className="space-y-4">
      <h4 className="text-sm font-medium leading-none">Custom Styled Separator</h4>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">This separator has custom styling applied.</p>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium leading-none mb-2">Fruits</h4>
      <p className="text-sm">Apple</p>
      <Separator className="my-2" />
      <p className="text-sm">Banana</p>
      <Separator className="my-2" />
      <p className="text-sm">Cherry</p>
      <Separator className="my-2" />
      <p className="text-sm">Date</p>
    </div>
  ),
};

export const MultipleOrientations: Story = {
  render: () => (
    <div className="flex space-x-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none">Horizontal</h4>
        <Separator orientation="horizontal" className="my-2" />
        <p className="text-sm text-muted-foreground">Content below</p>
      </div>
      <Separator orientation="vertical" className="h-20" />
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none">Vertical</h4>
        <p className="text-sm text-muted-foreground">Content beside</p>
      </div>
    </div>
  ),
};
