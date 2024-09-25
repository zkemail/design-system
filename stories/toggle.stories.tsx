import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, toggleVariants } from '../components/ui/toggle';

// Mock icon component
const IconPlaceholder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'The visual style of the toggle',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle',
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Toggle',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Toggle',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Toggle',
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Pressed Toggle',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Toggle',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <IconPlaceholder className="mr-2 h-4 w-4" />
        With Icon
      </>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    className: "bg-purple-500 hover:bg-purple-600 text-white data-[state=on]:bg-green-500",
    children: 'Custom Colors',
  },
};

export const ControlledToggle: Story = {
  render: (args) => {
    const [pressed, setPressed] = React.useState(false);
    return (
      <Toggle {...args} pressed={pressed} onPressedChange={setPressed}>
        {pressed ? 'On' : 'Off'}
      </Toggle>
    );
  },
};