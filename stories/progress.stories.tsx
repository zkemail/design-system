import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The current progress value',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const NoProgress: Story = {
  args: {
    value: 0,
  },
};

export const FullProgress: Story = {
  args: {
    value: 100,
  },
};

export const CustomSize: Story = {
  args: {
    value: 75,
    className: 'h-4',
  },
};

export const CustomColors: Story = {
  args: {
    value: 60,
    className: 'bg-blue-200 [&>div]:bg-blue-600',
  },
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} />;
  },
};

export const WithLabel: Story = {
  args: {
    value: 40,
    className: 'h-4',
  },
  render: (args) => (
    <div>
      <Progress {...args} />
      <p className="text-sm text-center mt-2">{args.value}% Complete</p>
    </div>
  ),
};

export const MultipleProgressBars: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
    </div>
  ),
};