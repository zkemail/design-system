import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the Card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <h3 className="text-2xl font-bold">Simple Card</h3>
      <p className="mt-2">This is a simple card without using subcomponents.</p>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <img src="/api/placeholder/350/200" alt="Placeholder" className="w-full h-[200px] object-cover rounded-t-xl" />
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>This card includes an image at the top.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Additional content can go here.</p>
      </CardContent>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has interactive elements.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click the button below to trigger an action.</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      </CardFooter>
    </Card>
  ),
};

export const HorizontalCard: Story = {
  render: () => (
    <Card className="flex w-[450px]">
      <img src="/api/placeholder/150/150" alt="Placeholder" className="w-[150px] h-[150px] object-cover rounded-l-xl" />
      <div>
        <CardHeader>
          <CardTitle>Horizontal Card</CardTitle>
          <CardDescription>A card with horizontal layout.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the horizontal card.</p>
        </CardContent>
      </div>
    </Card>
  ),
};

export const NestedCards: Story = {
  render: () => (
    <Card className="w-[400px] p-6">
      <CardTitle className="mb-4">Parent Card</CardTitle>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Nested Card 1</CardTitle>
        </CardHeader>
        <CardContent>Content for nested card 1</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Nested Card 2</CardTitle>
        </CardHeader>
        <CardContent>Content for nested card 2</CardContent>
      </Card>
    </Card>
  ),
};

export const CustomStyledCard: Story = {
  render: () => (
    <Card className="w-[350px] bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Custom Styled Card</CardTitle>
        <CardDescription className="text-purple-100">This card has custom gradient styling.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with custom background.</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-white text-purple-500 hover:bg-purple-100">Action</Button>
      </CardFooter>
    </Card>
  ),
};