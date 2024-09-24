import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/ui/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    value: {
      control: 'text',
      description: 'The value of the textarea',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is some predefined text in the textarea.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled.',
  },
};

export const WithRows: Story = {
  args: {
    rows: 10,
    placeholder: 'This textarea has 10 visible lines.',
  },
};

export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
    placeholder: 'You can type up to 100 characters here.',
  },
};

export const Resizable: Story = {
  args: {
    className: 'resize-y',
    placeholder: 'This textarea is vertically resizable.',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">Your Message</label>
      <Textarea id="message" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithCharacterCount: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');
    const maxLength = 200;

    return (
      <div className="space-y-2">
        <Textarea
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <div className="text-sm text-gray-500 text-right">
          {value.length} / {maxLength}
        </div>
      </div>
    );
  },
  args: {
    placeholder: 'Type your message here (max 200 characters).',
  },
};