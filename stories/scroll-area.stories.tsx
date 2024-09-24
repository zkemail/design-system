import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the ScrollArea',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  args: {
    className: "h-72 w-48 rounded-md border",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">{tag}</div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  args: {
    className: "w-96 rounded-md border",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="flex p-4" style={{ width: '150%' }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-[120px] shrink-0 rounded-md border p-4 mr-4"
          >
            <div className="text-sm">Item {i + 1}</div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const BothDirectionsScroll: Story = {
  args: {
    className: "h-72 w-96 rounded-md border",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4" style={{ width: '150%' }}>
        <h4 className="mb-4 text-sm font-medium leading-none">Scroll in Both Directions</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mb-4">
            <div className="text-sm font-medium">Item {i + 1}</div>
            <p className="text-sm">
              This is a long text that will cause horizontal scrolling. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam euismod, nisi vel consectetur interdum, nisl nunc 
              egestas nunc, vitae tincidunt nisl nunc euismod nunc.
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LargeContent: Story = {
  args: {
    className: "h-96 w-96 rounded-md border p-4",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <h4 className="mb-4 text-sm font-medium leading-none">Large Content</h4>
      {Array.from({ length: 20 }).map((_, i) => (
        <React.Fragment key={i}>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p className="mb-4 text-sm">
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Donec id elit non mi porta gravida at eget metus.
          </p>
        </React.Fragment>
      ))}
    </ScrollArea>
  ),
};

export const NestedScrollAreas: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Outer ScrollArea</h4>
      <p className="mb-4 text-sm">
        This is content in the outer ScrollArea. Below is a nested ScrollArea:
      </p>
      <ScrollArea className="h-48 w-full rounded-md border p-4">
        <h5 className="mb-4 text-sm font-medium leading-none">Inner ScrollArea</h5>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="mb-4 text-sm">
            This is a paragraph {i + 1} inside the nested ScrollArea.
          </p>
        ))}
      </ScrollArea>
      <p className="mt-4 text-sm">
        This is more content in the outer ScrollArea, below the nested one.
      </p>
    </ScrollArea>
  ),
};

export const CustomScrollbar: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Custom Scrollbar</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">{tag}</div>
        ))}
      </div>
      <ScrollBar className="bg-secondary" />
    </ScrollArea>
  ),
};