import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '../components/ui/toast';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
      description: 'The visual style of the toast',
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => (
    <Toast {...args}>
      <ToastTitle>Default Toast</ToastTitle>
      <ToastDescription>This is a default toast notification.</ToastDescription>
    </Toast>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Toast {...args} variant="destructive">
      <ToastTitle>Error</ToastTitle>
      <ToastDescription>There was a problem with your request.</ToastDescription>
    </Toast>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Toast {...args}>
      <div className="grid gap-1">
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
      </div>
      <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    </Toast>
  ),
};

export const WithClose: Story = {
  render: (args) => (
    <Toast {...args}>
      <ToastTitle>New message</ToastTitle>
      <ToastDescription>You have a new message from John Doe.</ToastDescription>
      <ToastClose />
    </Toast>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Toast Triggered</ToastTitle>
          <ToastDescription>This toast was triggered by a button click.</ToastDescription>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = React.useState<string[]>([]);

    const addToast = () => {
      const newToast = `Toast ${toasts.length + 1}`;
      setToasts((prev) => [...prev, newToast]);
    };

    return (
      <div>
        <Button onClick={addToast}>Add Toast</Button>
        {toasts.map((toast, index) => (
          <Toast key={index}>
            <ToastTitle>{toast}</ToastTitle>
            <ToastDescription>This is toast number {index + 1}.</ToastDescription>
            <ToastClose onClick={() => setToasts((prev) => prev.filter((_, i) => i !== index))} />
          </Toast>
        ))}
      </div>
    );
  },
};
