import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows closing content when clicking the trigger of an open item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const AccordionDemo = (args: React.ComponentProps<typeof Accordion>) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other components' aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default: Story = {
  render: AccordionDemo,
  args: {
    type: 'single',
    collapsible: true,
  },
};

export const Multiple: Story = {
  render: AccordionDemo,
  args: {
    type: 'multiple',
  },
};

export const Nested: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Parent Item</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="border-none">
            <AccordionItem value="sub-item-1">
              <AccordionTrigger>Sub-item 1</AccordionTrigger>
              <AccordionContent>Content for sub-item 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sub-item-2">
              <AccordionTrigger>Sub-item 2</AccordionTrigger>
              <AccordionContent>Content for sub-item 2</AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Accordion type="single" collapsible className="bg-gray-100 rounded-lg">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="hover:no-underline hover:bg-gray-200">
          Custom styled accordion
        </AccordionTrigger>
        <AccordionContent className="bg-white">
          This accordion has custom styles applied.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};