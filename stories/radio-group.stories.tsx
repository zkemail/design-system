import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabledOption: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-two" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" disabled />
        <Label htmlFor="option-three" className="opacity-50">Option Three (Disabled)</Label>
      </div>
    </RadioGroup>
  ),
};

export const HorizontalLayout: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one" className="flex space-x-4" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="h-option-one" />
        <Label htmlFor="h-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="h-option-two" />
        <Label htmlFor="h-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="h-option-three" />
        <Label htmlFor="h-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithCustomStyles: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one" className="space-y-4" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="custom-one" className="bg-blue-100 border-blue-500 text-blue-500" />
        <Label htmlFor="custom-one" className="text-blue-700">Blue Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="custom-two" className="bg-green-100 border-green-500 text-green-500" />
        <Label htmlFor="custom-two" className="text-green-700">Green Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="custom-three" className="bg-red-100 border-red-500 text-red-500" />
        <Label htmlFor="custom-three" className="text-red-700">Red Option</Label>
      </div>
    </RadioGroup>
  ),
};

export const ControlledRadioGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState("option-one");
    return (
      <div>
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="controlled-one" />
            <Label htmlFor="controlled-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="controlled-two" />
            <Label htmlFor="controlled-two">Option Two</Label>
          </div>
        </RadioGroup>
        <p className="mt-4">Selected value: {value}</p>
      </div>
    );
  },
};