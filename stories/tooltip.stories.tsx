import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../components/ui/tooltip';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    // Tooltip doesn't have direct props to control
  },
  decorators: [(Story) => <TooltipProvider>{Story()}</TooltipProvider>],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="text-sm font-semibold">Custom Content</div>
        <p className="text-xs text-gray-500">This tooltip has custom styled content.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" className="w-10 h-10 rounded-full p-0">
          <InfoIcon className="h-4 w-4" />
          <span className="sr-only">Info</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Helpful information goes here</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const PositionedTooltips: Story = {
  render: () => (
    <div className="flex justify-center items-center h-[200px] space-x-4">
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side as any}>
            <p>This tooltip is on the {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const DelayedTooltip: Story = {
  render: () => (
    <Tooltip delayDuration={700}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for delayed tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip appears after a delay</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const ControlledTooltip: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Tooltip
        </Button>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="ml-4">Controlled Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a controlled tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

// Mock InfoIcon component
const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);