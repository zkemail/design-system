import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active when initially rendered',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Tabs defaultValue="account" {...args}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Tabs defaultValue="music" {...args}>
        <TabsList>
          <TabsTrigger value="music">
            <MusicIcon />
            Music
          </TabsTrigger>
          <TabsTrigger value="podcasts">
            <MicIcon />
            Podcasts
          </TabsTrigger>
          <TabsTrigger value="videos">
            <VideoIcon />
            Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="music">Listen to your favorite tunes.</TabsContent>
        <TabsContent value="podcasts">Discover new podcasts.</TabsContent>
        <TabsContent value="videos">Watch entertaining videos.</TabsContent>
      </Tabs>
    </div>
  ),
};

export const WithForms: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Tabs defaultValue="account" {...args}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <form>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" className="w-full p-2 border rounded" />
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" className="w-full p-2 border rounded" />
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Save Account</button>
          </form>
        </TabsContent>
        <TabsContent value="password">
          <form>
            <div className="space-y-2">
              <label htmlFor="current" className="text-sm font-medium">Current Password</label>
              <input id="current" type="password" className="w-full p-2 border rounded" />
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="new" className="text-sm font-medium">New Password</label>
              <input id="new" type="password" className="w-full p-2 border rounded" />
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Change Password</button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <div className="w-[400px] flex">
      <Tabs defaultValue="tab1" orientation="vertical" {...args}>
        <TabsList className="w-1/3 flex flex-col">
          <TabsTrigger value="tab1" className="w-full">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" className="w-full">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" className="w-full">Tab 3</TabsTrigger>
        </TabsList>
        <div className="w-2/3 pl-4">
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </div>
      </Tabs>
    </div>
  ),
};

// Mock icons for the WithIcons story
const MusicIcon = () => <span style={{ marginRight: '0.5rem' }}>🎵</span>;
const MicIcon = () => <span style={{ marginRight: '0.5rem' }}>🎙️</span>;
const VideoIcon = () => <span style={{ marginRight: '0.5rem' }}>🎥</span>;