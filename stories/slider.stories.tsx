import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'The default value(s) of the slider',
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider',
    },
    step: {
      control: { type: 'number' },
      description: 'The step value of the slider',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
};

export const Stepped: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: [0],
    min: -50,
    max: 50,
    step: 5,
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.defaultValue || [50]);
    return (
      <div className="space-y-4">
        <Slider
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div>Current value: {value}</div>
      </div>
    );
  },
  args: {
    max: 100,
    step: 1,
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="h-[200px]">
      <Slider
        {...args}
        orientation="vertical"
        className="h-full"
      />
    </div>
  ),
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const Colored: Story = {
  render: (args) => (
    <Slider
      {...args}
      className="[&_[role=slider]]:bg-red-500 [&_[role=slider]]:border-red-500 [&_.bg-primary]:bg-red-500"
    />
  ),
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};