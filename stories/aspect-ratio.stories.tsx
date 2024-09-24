import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../components/ui/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
    {text}
  </div>
);

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <ImagePlaceholder text="16:9 Aspect Ratio" />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <ImagePlaceholder text="1:1 Aspect Ratio" />
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <ImagePlaceholder text="3:4 Aspect Ratio" />
      </AspectRatio>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="/api/placeholder/300/169"
          alt="Placeholder"
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
};

export const NestedContent: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-bold">Nested Content</h3>
            <p className="text-sm text-gray-500">This is nested inside AspectRatio</p>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const ResponsiveContainer: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-full max-w-[600px]">
      <AspectRatio {...args}>
        <ImagePlaceholder text="Responsive 16:9 Aspect Ratio" />
      </AspectRatio>
    </div>
  ),
};