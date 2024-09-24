import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" {...args}>Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" {...args}>Accept terms and conditions</Label>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1" {...args}>Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2" {...args}>Option 2</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabledInput: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled-input" {...args}>Disabled Input</Label>
      <Input type="text" id="disabled-input" disabled />
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required-input" {...args}>
        Required Field <span className="text-red-500">*</span>
      </Label>
      <Input type="text" id="required-input" required />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center space-x-2">
        <Label htmlFor="tooltip-input" {...args}>Input with Tooltip</Label>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-help" title="This is a tooltip">?</span>
      </div>
      <Input type="text" id="tooltip-input" />
    </div>
  ),
};