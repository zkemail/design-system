import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    onCheckedChange: { action: 'checked changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const Checked: Story = {
  render: (args) => <Checkbox {...args} />,
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => <Checkbox {...args} />,
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args) => <Checkbox {...args} />,
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const InForm: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean>(false);
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert(`Form submitted. Checkbox value: ${checked}`);
      }}>
        <div className="flex items-center space-x-2 mb-4 cursor-pointer">
          <Checkbox
            id="newsletter"
            checked={checked}
            onCheckedChange={(state: CheckedState) => setChecked(state === true)}
          />
          <label htmlFor="newsletter">Subscribe to newsletter</label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  },
};

export const CustomStyle: Story = {
  render: (args) => (
    <Checkbox
      {...args}
      className="h-6 w-6 border-2 border-blue-500 rounded-full data-[state=checked]:bg-blue-500"
    />
  ),
};

export const Group: Story = {
  render: () => {
    const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    
    return (
      <div className="space-y-2">
        {fruits.map((fruit) => (
          <div key={fruit} className="flex items-center space-x-2">
            <Checkbox
              id={fruit}
              checked={selectedFruits.includes(fruit)}
              onCheckedChange={(checked: CheckedState) => {
                setSelectedFruits(prev =>
                  checked === true
                    ? [...prev, fruit]
                    : prev.filter(f => f !== fruit)
                );
              }}
            />
            <label htmlFor={fruit}>{fruit}</label>
          </div>
        ))}
        <p>Selected fruits: {selectedFruits.join(', ')}</p>
      </div>
    );
  },
};