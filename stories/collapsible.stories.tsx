import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/ui/collapsible';
import { Button } from '../components/ui/button';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the collapsible',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The default open state when initially rendered',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Event handler called when the open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-[350px]">
      <CollapsibleTrigger asChild>
        <Button variant="outline">
          Toggle
          <ChevronDownIcon className="h-4 w-4 ml-2" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/react-collapsible
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithCustomTrigger: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @radix-ui/react-collapsible
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          The React component that powers the collapsible behavior.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const ControlledCollapsible: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Controlled Collapsible
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? "Close" : "Open"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            This collapsible is controlled by React state.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const NestedCollapsibles: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">Main Collapsible</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Main content
        </div>
        <Collapsible className="space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">Nested Collapsible</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Nested content
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
};
