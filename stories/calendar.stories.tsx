import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../components/ui/calendar';
import { addDays } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'The selection mode of the calendar',
    },
    selected: {
      control: 'date',
      description: 'The selected date(s)',
    },
    defaultMonth: {
      control: 'date',
      description: 'The month to display by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the calendar is disabled',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show days from the previous/next month',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: 'single',
  },
};

export const WithSelectedDate: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
  },
};

export const RangeSelection: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
  },
};

export const MultipleSelection: Story = {
  args: {
    mode: 'multiple',
    selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 5)],
  },
};

export const CustomMonth: Story = {
  args: {
    mode: 'single',
    defaultMonth: new Date(2023, 0, 1), // January 2023
  },
};

export const Disabled: Story = {
  args: {
    mode: 'single',
    disabled: true,
  },
};

export const WithoutOutsideDays: Story = {
  args: {
    mode: 'single',
    showOutsideDays: false,
  },
};

export const WithFooter: Story = {
  render: (args) => (
    <Calendar
      {...args}
      footer={<p className="text-center text-sm mt-4">Custom footer content</p>}
    />
  ),
};

export const WithCustomClassNames: Story = {
  args: {
    mode: 'single',
    className: 'border rounded-lg shadow-lg',
    classNames: {
      day_selected: 'bg-blue-500 text-white hover:bg-blue-600',
      day_today: 'border border-blue-500 text-blue-500',
    },
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
        <p>Selected date: {date?.toDateString()}</p>
      </div>
    );
  },
};